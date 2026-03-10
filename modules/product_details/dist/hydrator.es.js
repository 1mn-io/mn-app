import { d as _t, r as j, w as rt, o as Zt, n as nt, a as v, c as g, b as n, e as u, f as ge, g as ne, F as M, h as D, t as C, i as q, j as Qt, k as Me, v as De, l as z, m as es, p as ts, q as ss } from "./runtime-dom.esm-bundler-B1F-qcLg.js";
import { ce_renderer as rs, ce_hydrator as ns } from "content-engine-lib";
function kt(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: os } = Object.prototype, { getPrototypeOf: Ke } = Object, { iterator: Be, toStringTag: Et } = Symbol, Le = /* @__PURE__ */ ((t) => (e) => {
  const s = os.call(e);
  return t[s] || (t[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Q = (t) => (t = t.toLowerCase(), (e) => Le(e) === t), Pe = (t) => (e) => typeof e === t, { isArray: xe } = Array, be = Pe("undefined");
function we(t) {
  return t !== null && !be(t) && t.constructor !== null && !be(t.constructor) && H(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const St = Q("ArrayBuffer");
function as(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && St(t.buffer), e;
}
const ls = Pe("string"), H = Pe("function"), Ct = Pe("number"), _e = (t) => t !== null && typeof t == "object", is = (t) => t === !0 || t === !1, Te = (t) => {
  if (Le(t) !== "object")
    return !1;
  const e = Ke(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Et in t) && !(Be in t);
}, ds = (t) => {
  if (!_e(t) || we(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, cs = Q("Date"), us = Q("File"), fs = (t) => !!(t && typeof t.uri < "u"), ps = (t) => t && typeof t.getParts < "u", hs = Q("Blob"), ms = Q("FileList"), bs = (t) => _e(t) && H(t.pipe);
function xs() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ot = xs(), at = typeof ot.FormData < "u" ? ot.FormData : void 0, vs = (t) => {
  let e;
  return t && (at && t instanceof at || H(t.append) && ((e = Le(t)) === "formdata" || // detect form-data instance
  e === "object" && H(t.toString) && t.toString() === "[object FormData]"));
}, gs = Q("URLSearchParams"), [ys, ws, _s, ks] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Q), Es = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ke(t, e, { allOwnKeys: s = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), xe(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    if (we(t))
      return;
    const a = s ? Object.getOwnPropertyNames(t) : Object.keys(t), i = a.length;
    let f;
    for (r = 0; r < i; r++)
      f = a[r], e.call(null, t[f], f, t);
  }
}
function Rt(t, e) {
  if (we(t))
    return null;
  e = e.toLowerCase();
  const s = Object.keys(t);
  let r = s.length, o;
  for (; r-- > 0; )
    if (o = s[r], e === o.toLowerCase())
      return o;
  return null;
}
const fe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ot = (t) => !be(t) && t !== fe;
function Je() {
  const { caseless: t, skipUndefined: e } = Ot(this) && this || {}, s = {}, r = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const i = t && Rt(s, a) || a;
    Te(s[i]) && Te(o) ? s[i] = Je(s[i], o) : Te(o) ? s[i] = Je({}, o) : xe(o) ? s[i] = o.slice() : (!e || !be(o)) && (s[i] = o);
  };
  for (let o = 0, a = arguments.length; o < a; o++)
    arguments[o] && ke(arguments[o], r);
  return s;
}
const Ss = (t, e, s, { allOwnKeys: r } = {}) => (ke(
  e,
  (o, a) => {
    s && H(o) ? Object.defineProperty(t, a, {
      value: kt(o, s),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(t, a, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), t), Cs = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Rs = (t, e, s, r) => {
  t.prototype = Object.create(e.prototype, r), Object.defineProperty(t.prototype, "constructor", {
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    value: e.prototype
  }), s && Object.assign(t.prototype, s);
}, Os = (t, e, s, r) => {
  let o, a, i;
  const f = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, t, e)) && !f[i] && (e[i] = t[i], f[i] = !0);
    t = s !== !1 && Ke(t);
  } while (t && (!s || s(t, e)) && t !== Object.prototype);
  return e;
}, Ts = (t, e, s) => {
  t = String(t), (s === void 0 || s > t.length) && (s = t.length), s -= e.length;
  const r = t.indexOf(e, s);
  return r !== -1 && r === s;
}, As = (t) => {
  if (!t) return null;
  if (xe(t)) return t;
  let e = t.length;
  if (!Ct(e)) return null;
  const s = new Array(e);
  for (; e-- > 0; )
    s[e] = t[e];
  return s;
}, Ns = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Ke(Uint8Array)), Fs = (t, e) => {
  const r = (t && t[Be]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    e.call(t, a[0], a[1]);
  }
}, Bs = (t, e) => {
  let s;
  const r = [];
  for (; (s = t.exec(e)) !== null; )
    r.push(s);
  return r;
}, Ls = Q("HTMLFormElement"), Ps = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, r, o) {
  return r.toUpperCase() + o;
}), lt = (({ hasOwnProperty: t }) => (e, s) => t.call(e, s))(Object.prototype), js = Q("RegExp"), Tt = (t, e) => {
  const s = Object.getOwnPropertyDescriptors(t), r = {};
  ke(s, (o, a) => {
    let i;
    (i = e(o, a, t)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(t, r);
}, Is = (t) => {
  Tt(t, (e, s) => {
    if (H(t) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const r = t[s];
    if (H(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, Us = (t, e) => {
  const s = {}, r = (o) => {
    o.forEach((a) => {
      s[a] = !0;
    });
  };
  return xe(t) ? r(t) : r(String(t).split(e)), s;
}, Ms = () => {
}, Ds = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function zs(t) {
  return !!(t && H(t.append) && t[Et] === "FormData" && t[Be]);
}
const $s = (t) => {
  const e = new Array(10), s = (r, o) => {
    if (_e(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (we(r))
        return r;
      if (!("toJSON" in r)) {
        e[o] = r;
        const a = xe(r) ? [] : {};
        return ke(r, (i, f) => {
          const x = s(i, o + 1);
          !be(x) && (a[f] = x);
        }), e[o] = void 0, a;
      }
    }
    return r;
  };
  return s(t, 0);
}, qs = Q("AsyncFunction"), Hs = (t) => t && (_e(t) || H(t)) && H(t.then) && H(t.catch), At = ((t, e) => t ? setImmediate : e ? ((s, r) => (fe.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === fe && a === s && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), fe.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(typeof setImmediate == "function", H(fe.postMessage)), Js = typeof queueMicrotask < "u" ? queueMicrotask.bind(fe) : typeof process < "u" && process.nextTick || At, Vs = (t) => t != null && H(t[Be]), c = {
  isArray: xe,
  isArrayBuffer: St,
  isBuffer: we,
  isFormData: vs,
  isArrayBufferView: as,
  isString: ls,
  isNumber: Ct,
  isBoolean: is,
  isObject: _e,
  isPlainObject: Te,
  isEmptyObject: ds,
  isReadableStream: ys,
  isRequest: ws,
  isResponse: _s,
  isHeaders: ks,
  isUndefined: be,
  isDate: cs,
  isFile: us,
  isReactNativeBlob: fs,
  isReactNative: ps,
  isBlob: hs,
  isRegExp: js,
  isFunction: H,
  isStream: bs,
  isURLSearchParams: gs,
  isTypedArray: Ns,
  isFileList: ms,
  forEach: ke,
  merge: Je,
  extend: Ss,
  trim: Es,
  stripBOM: Cs,
  inherits: Rs,
  toFlatObject: Os,
  kindOf: Le,
  kindOfTest: Q,
  endsWith: Ts,
  toArray: As,
  forEachEntry: Fs,
  matchAll: Bs,
  isHTMLForm: Ls,
  hasOwnProperty: lt,
  hasOwnProp: lt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Tt,
  freezeMethods: Is,
  toObjectSet: Us,
  toCamelCase: Ps,
  noop: Ms,
  toFiniteNumber: Ds,
  findKey: Rt,
  global: fe,
  isContextDefined: Ot,
  isSpecCompliantForm: zs,
  toJSONObject: $s,
  isAsyncFn: qs,
  isThenable: Hs,
  setImmediate: At,
  asap: Js,
  isIterable: Vs
};
let S = class Nt extends Error {
  static from(e, s, r, o, a, i) {
    const f = new Nt(e.message, s || e.code, r, o, a);
    return f.cause = e, f.name = e.name, e.status != null && f.status == null && (f.status = e.status), i && Object.assign(f, i), f;
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
  constructor(e, s, r, o, a) {
    super(e), Object.defineProperty(this, "message", {
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, s && (this.code = s), r && (this.config = r), o && (this.request = o), a && (this.response = a, this.status = a.status);
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
      config: c.toJSONObject(this.config),
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
const Ws = null;
function Ve(t) {
  return c.isPlainObject(t) || c.isArray(t);
}
function Ft(t) {
  return c.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function ze(t, e, s) {
  return t ? t.concat(e).map(function(o, a) {
    return o = Ft(o), !s && a ? "[" + o + "]" : o;
  }).join(s ? "." : "") : e;
}
function Xs(t) {
  return c.isArray(t) && !t.some(Ve);
}
const Ks = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function je(t, e, s) {
  if (!c.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), s = c.toFlatObject(
    s,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(E, y) {
      return !c.isUndefined(y[E]);
    }
  );
  const r = s.metaTokens, o = s.visitor || h, a = s.dots, i = s.indexes, x = (s.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(e);
  if (!c.isFunction(o))
    throw new TypeError("visitor must be a function");
  function m(b) {
    if (b === null) return "";
    if (c.isDate(b))
      return b.toISOString();
    if (c.isBoolean(b))
      return b.toString();
    if (!x && c.isBlob(b))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(b) || c.isTypedArray(b) ? x && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function h(b, E, y) {
    let T = b;
    if (c.isReactNative(e) && c.isReactNativeBlob(b))
      return e.append(ze(y, E, a), m(b)), !1;
    if (b && !y && typeof b == "object") {
      if (c.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), b = JSON.stringify(b);
      else if (c.isArray(b) && Xs(b) || (c.isFileList(b) || c.endsWith(E, "[]")) && (T = c.toArray(b)))
        return E = Ft(E), T.forEach(function(d, B) {
          !(c.isUndefined(d) || d === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ze([E], B, a) : i === null ? E : E + "[]",
            m(d)
          );
        }), !1;
    }
    return Ve(b) ? !0 : (e.append(ze(y, E, a), m(b)), !1);
  }
  const k = [], R = Object.assign(Ks, {
    defaultVisitor: h,
    convertValue: m,
    isVisitable: Ve
  });
  function N(b, E) {
    if (!c.isUndefined(b)) {
      if (k.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      k.push(b), c.forEach(b, function(T, I) {
        (!(c.isUndefined(T) || T === null) && o.call(e, T, c.isString(I) ? I.trim() : I, E, R)) === !0 && N(T, E ? E.concat(I) : [I]);
      }), k.pop();
    }
  }
  if (!c.isObject(t))
    throw new TypeError("data must be an object");
  return N(t), e;
}
function it(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Ge(t, e) {
  this._pairs = [], t && je(t, this, e);
}
const Bt = Ge.prototype;
Bt.append = function(e, s) {
  this._pairs.push([e, s]);
};
Bt.toString = function(e) {
  const s = e ? function(r) {
    return e.call(this, r, it);
  } : it;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function Gs(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Lt(t, e, s) {
  if (!e)
    return t;
  const r = s && s.encode || Gs, o = c.isFunction(s) ? {
    serialize: s
  } : s, a = o && o.serialize;
  let i;
  if (a ? i = a(e, o) : i = c.isURLSearchParams(e) ? e.toString() : new Ge(e, o).toString(r), i) {
    const f = t.indexOf("#");
    f !== -1 && (t = t.slice(0, f)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class dt {
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
  use(e, s, r) {
    return this.handlers.push({
      fulfilled: e,
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
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    c.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Ye = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Ys = typeof URLSearchParams < "u" ? URLSearchParams : Ge, Zs = typeof FormData < "u" ? FormData : null, Qs = typeof Blob < "u" ? Blob : null, er = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ys,
    FormData: Zs,
    Blob: Qs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ze = typeof window < "u" && typeof document < "u", We = typeof navigator == "object" && navigator || void 0, tr = Ze && (!We || ["ReactNative", "NativeScript", "NS"].indexOf(We.product) < 0), sr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", rr = Ze && window.location.href || "http://localhost", nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ze,
  hasStandardBrowserEnv: tr,
  hasStandardBrowserWebWorkerEnv: sr,
  navigator: We,
  origin: rr
}, Symbol.toStringTag, { value: "Module" })), U = {
  ...nr,
  ...er
};
function or(t, e) {
  return je(t, new U.classes.URLSearchParams(), {
    visitor: function(s, r, o, a) {
      return U.isNode && c.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function ar(t) {
  return c.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function lr(t) {
  const e = {}, s = Object.keys(t);
  let r;
  const o = s.length;
  let a;
  for (r = 0; r < o; r++)
    a = s[r], e[a] = t[a];
  return e;
}
function Pt(t) {
  function e(s, r, o, a) {
    let i = s[a++];
    if (i === "__proto__") return !0;
    const f = Number.isFinite(+i), x = a >= s.length;
    return i = !i && c.isArray(o) ? o.length : i, x ? (c.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !f) : ((!o[i] || !c.isObject(o[i])) && (o[i] = []), e(s, r, o[i], a) && c.isArray(o[i]) && (o[i] = lr(o[i])), !f);
  }
  if (c.isFormData(t) && c.isFunction(t.entries)) {
    const s = {};
    return c.forEachEntry(t, (r, o) => {
      e(ar(r), o, s, 0);
    }), s;
  }
  return null;
}
function ir(t, e, s) {
  if (c.isString(t))
    try {
      return (e || JSON.parse)(t), c.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (s || JSON.stringify)(t);
}
const Ee = {
  transitional: Ye,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(e, s) {
      const r = s.getContentType() || "", o = r.indexOf("application/json") > -1, a = c.isObject(e);
      if (a && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
        return o ? JSON.stringify(Pt(e)) : e;
      if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
        return e;
      if (c.isArrayBufferView(e))
        return e.buffer;
      if (c.isURLSearchParams(e))
        return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      let f;
      if (a) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return or(e, this.formSerializer).toString();
        if ((f = c.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const x = this.env && this.env.FormData;
          return je(
            f ? { "files[]": e } : e,
            x && new x(),
            this.formSerializer
          );
        }
      }
      return a || o ? (s.setContentType("application/json", !1), ir(e)) : e;
    }
  ],
  transformResponse: [
    function(e) {
      const s = this.transitional || Ee.transitional, r = s && s.forcedJSONParsing, o = this.responseType === "json";
      if (c.isResponse(e) || c.isReadableStream(e))
        return e;
      if (e && c.isString(e) && (r && !this.responseType || o)) {
        const i = !(s && s.silentJSONParsing) && o;
        try {
          return JSON.parse(e, this.parseReviver);
        } catch (f) {
          if (i)
            throw f.name === "SyntaxError" ? S.from(f, S.ERR_BAD_RESPONSE, this, null, this.response) : f;
        }
      }
      return e;
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
    FormData: U.classes.FormData,
    Blob: U.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Ee.headers[t] = {};
});
const dr = c.toObjectSet([
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
]), cr = (t) => {
  const e = {};
  let s, r, o;
  return t && t.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), s = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!s || e[s] && dr[s]) && (s === "set-cookie" ? e[s] ? e[s].push(r) : e[s] = [r] : e[s] = e[s] ? e[s] + ", " + r : r);
  }), e;
}, ct = /* @__PURE__ */ Symbol("internals");
function ye(t) {
  return t && String(t).trim().toLowerCase();
}
function Ae(t) {
  return t === !1 || t == null ? t : c.isArray(t) ? t.map(Ae) : String(t);
}
function ur(t) {
  const e = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const fr = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function $e(t, e, s, r, o) {
  if (c.isFunction(r))
    return r.call(this, e, s);
  if (o && (e = s), !!c.isString(e)) {
    if (c.isString(r))
      return e.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(e);
  }
}
function pr(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, s, r) => s.toUpperCase() + r);
}
function hr(t, e) {
  const s = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + s, {
      value: function(o, a, i) {
        return this[r].call(this, e, o, a, i);
      },
      configurable: !0
    });
  });
}
let J = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, s, r) {
    const o = this;
    function a(f, x, m) {
      const h = ye(x);
      if (!h)
        throw new Error("header name must be a non-empty string");
      const k = c.findKey(o, h);
      (!k || o[k] === void 0 || m === !0 || m === void 0 && o[k] !== !1) && (o[k || x] = Ae(f));
    }
    const i = (f, x) => c.forEach(f, (m, h) => a(m, h, x));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      i(e, s);
    else if (c.isString(e) && (e = e.trim()) && !fr(e))
      i(cr(e), s);
    else if (c.isObject(e) && c.isIterable(e)) {
      let f = {}, x, m;
      for (const h of e) {
        if (!c.isArray(h))
          throw TypeError("Object iterator must return a key-value pair");
        f[m = h[0]] = (x = f[m]) ? c.isArray(x) ? [...x, h[1]] : [x, h[1]] : h[1];
      }
      i(f, s);
    } else
      e != null && a(s, e, r);
    return this;
  }
  get(e, s) {
    if (e = ye(e), e) {
      const r = c.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!s)
          return o;
        if (s === !0)
          return ur(o);
        if (c.isFunction(s))
          return s.call(this, o, r);
        if (c.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, s) {
    if (e = ye(e), e) {
      const r = c.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!s || $e(this, this[r], r, s)));
    }
    return !1;
  }
  delete(e, s) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = ye(i), i) {
        const f = c.findKey(r, i);
        f && (!s || $e(r, r[f], f, s)) && (delete r[f], o = !0);
      }
    }
    return c.isArray(e) ? e.forEach(a) : a(e), o;
  }
  clear(e) {
    const s = Object.keys(this);
    let r = s.length, o = !1;
    for (; r--; ) {
      const a = s[r];
      (!e || $e(this, this[a], a, e, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(e) {
    const s = this, r = {};
    return c.forEach(this, (o, a) => {
      const i = c.findKey(r, a);
      if (i) {
        s[i] = Ae(o), delete s[a];
        return;
      }
      const f = e ? pr(a) : String(a).trim();
      f !== a && delete s[a], s[f] = Ae(o), r[f] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const s = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, o) => {
      r != null && r !== !1 && (s[o] = e && c.isArray(r) ? r.join(", ") : r);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, s]) => e + ": " + s).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...s) {
    const r = new this(e);
    return s.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[ct] = this[ct] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const f = ye(i);
      r[f] || (hr(o, i), r[f] = !0);
    }
    return c.isArray(e) ? e.forEach(a) : a(e), this;
  }
};
J.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
c.reduceDescriptors(J.prototype, ({ value: t }, e) => {
  let s = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[s] = r;
    }
  };
});
c.freezeMethods(J);
function qe(t, e) {
  const s = this || Ee, r = e || s, o = J.from(r.headers);
  let a = r.data;
  return c.forEach(t, function(f) {
    a = f.call(s, a, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), a;
}
function jt(t) {
  return !!(t && t.__CANCEL__);
}
let Se = class extends S {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, s, r) {
    super(e ?? "canceled", S.ERR_CANCELED, s, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function It(t, e, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? t(s) : e(
    new S(
      "Request failed with status code " + s.status,
      [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    )
  );
}
function mr(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function br(t, e) {
  t = t || 10;
  const s = new Array(t), r = new Array(t);
  let o = 0, a = 0, i;
  return e = e !== void 0 ? e : 1e3, function(x) {
    const m = Date.now(), h = r[a];
    i || (i = m), s[o] = x, r[o] = m;
    let k = a, R = 0;
    for (; k !== o; )
      R += s[k++], k = k % t;
    if (o = (o + 1) % t, o === a && (a = (a + 1) % t), m - i < e)
      return;
    const N = h && m - h;
    return N ? Math.round(R * 1e3 / N) : void 0;
  };
}
function xr(t, e) {
  let s = 0, r = 1e3 / e, o, a;
  const i = (m, h = Date.now()) => {
    s = h, o = null, a && (clearTimeout(a), a = null), t(...m);
  };
  return [(...m) => {
    const h = Date.now(), k = h - s;
    k >= r ? i(m, h) : (o = m, a || (a = setTimeout(() => {
      a = null, i(o);
    }, r - k)));
  }, () => o && i(o)];
}
const Fe = (t, e, s = 3) => {
  let r = 0;
  const o = br(50, 250);
  return xr((a) => {
    const i = a.loaded, f = a.lengthComputable ? a.total : void 0, x = i - r, m = o(x), h = i <= f;
    r = i;
    const k = {
      loaded: i,
      total: f,
      progress: f ? i / f : void 0,
      bytes: x,
      rate: m || void 0,
      estimated: m && f && h ? (f - i) / m : void 0,
      event: a,
      lengthComputable: f != null,
      [e ? "download" : "upload"]: !0
    };
    t(k);
  }, s);
}, ut = (t, e) => {
  const s = t != null;
  return [
    (r) => e[0]({
      lengthComputable: s,
      total: t,
      loaded: r
    }),
    e[1]
  ];
}, ft = (t) => (...e) => c.asap(() => t(...e)), vr = U.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (s) => (s = new URL(s, U.origin), t.protocol === s.protocol && t.host === s.host && (e || t.port === s.port)))(
  new URL(U.origin),
  U.navigator && /(msie|trident)/i.test(U.navigator.userAgent)
) : () => !0, gr = U.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, s, r, o, a, i) {
      if (typeof document > "u") return;
      const f = [`${t}=${encodeURIComponent(e)}`];
      c.isNumber(s) && f.push(`expires=${new Date(s).toUTCString()}`), c.isString(r) && f.push(`path=${r}`), c.isString(o) && f.push(`domain=${o}`), a === !0 && f.push("secure"), c.isString(i) && f.push(`SameSite=${i}`), document.cookie = f.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
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
function yr(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function wr(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ut(t, e, s) {
  let r = !yr(e);
  return t && (r || s == !1) ? wr(t, e) : e;
}
const pt = (t) => t instanceof J ? { ...t } : t;
function he(t, e) {
  e = e || {};
  const s = {};
  function r(m, h, k, R) {
    return c.isPlainObject(m) && c.isPlainObject(h) ? c.merge.call({ caseless: R }, m, h) : c.isPlainObject(h) ? c.merge({}, h) : c.isArray(h) ? h.slice() : h;
  }
  function o(m, h, k, R) {
    if (c.isUndefined(h)) {
      if (!c.isUndefined(m))
        return r(void 0, m, k, R);
    } else return r(m, h, k, R);
  }
  function a(m, h) {
    if (!c.isUndefined(h))
      return r(void 0, h);
  }
  function i(m, h) {
    if (c.isUndefined(h)) {
      if (!c.isUndefined(m))
        return r(void 0, m);
    } else return r(void 0, h);
  }
  function f(m, h, k) {
    if (k in e)
      return r(m, h);
    if (k in t)
      return r(void 0, m);
  }
  const x = {
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
    validateStatus: f,
    headers: (m, h, k) => o(pt(m), pt(h), k, !0)
  };
  return c.forEach(Object.keys({ ...t, ...e }), function(h) {
    if (h === "__proto__" || h === "constructor" || h === "prototype") return;
    const k = c.hasOwnProp(x, h) ? x[h] : o, R = k(t[h], e[h], h);
    c.isUndefined(R) && k !== f || (s[h] = R);
  }), s;
}
const Mt = (t) => {
  const e = he({}, t);
  let { data: s, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: f } = e;
  if (e.headers = i = J.from(i), e.url = Lt(
    Ut(e.baseURL, e.url, e.allowAbsoluteUrls),
    t.params,
    t.paramsSerializer
  ), f && i.set(
    "Authorization",
    "Basic " + btoa(
      (f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : "")
    )
  ), c.isFormData(s)) {
    if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (c.isFunction(s.getHeaders)) {
      const x = s.getHeaders(), m = ["content-type", "content-length"];
      Object.entries(x).forEach(([h, k]) => {
        m.includes(h.toLowerCase()) && i.set(h, k);
      });
    }
  }
  if (U.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(e)), r || r !== !1 && vr(e.url))) {
    const x = o && a && gr.read(a);
    x && i.set(o, x);
  }
  return e;
}, _r = typeof XMLHttpRequest < "u", kr = _r && function(t) {
  return new Promise(function(s, r) {
    const o = Mt(t);
    let a = o.data;
    const i = J.from(o.headers).normalize();
    let { responseType: f, onUploadProgress: x, onDownloadProgress: m } = o, h, k, R, N, b;
    function E() {
      N && N(), b && b(), o.cancelToken && o.cancelToken.unsubscribe(h), o.signal && o.signal.removeEventListener("abort", h);
    }
    let y = new XMLHttpRequest();
    y.open(o.method.toUpperCase(), o.url, !0), y.timeout = o.timeout;
    function T() {
      if (!y)
        return;
      const d = J.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), P = {
        data: !f || f === "text" || f === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: d,
        config: t,
        request: y
      };
      It(
        function(F) {
          s(F), E();
        },
        function(F) {
          r(F), E();
        },
        P
      ), y = null;
    }
    "onloadend" in y ? y.onloadend = T : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, y.onabort = function() {
      y && (r(new S("Request aborted", S.ECONNABORTED, t, y)), y = null);
    }, y.onerror = function(B) {
      const P = B && B.message ? B.message : "Network Error", W = new S(P, S.ERR_NETWORK, t, y);
      W.event = B || null, r(W), y = null;
    }, y.ontimeout = function() {
      let B = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || Ye;
      o.timeoutErrorMessage && (B = o.timeoutErrorMessage), r(
        new S(
          B,
          P.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
          t,
          y
        )
      ), y = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in y && c.forEach(i.toJSON(), function(B, P) {
      y.setRequestHeader(P, B);
    }), c.isUndefined(o.withCredentials) || (y.withCredentials = !!o.withCredentials), f && f !== "json" && (y.responseType = o.responseType), m && ([R, b] = Fe(m, !0), y.addEventListener("progress", R)), x && y.upload && ([k, N] = Fe(x), y.upload.addEventListener("progress", k), y.upload.addEventListener("loadend", N)), (o.cancelToken || o.signal) && (h = (d) => {
      y && (r(!d || d.type ? new Se(null, t, y) : d), y.abort(), y = null);
    }, o.cancelToken && o.cancelToken.subscribe(h), o.signal && (o.signal.aborted ? h() : o.signal.addEventListener("abort", h)));
    const I = mr(o.url);
    if (I && U.protocols.indexOf(I) === -1) {
      r(
        new S(
          "Unsupported protocol " + I + ":",
          S.ERR_BAD_REQUEST,
          t
        )
      );
      return;
    }
    y.send(a || null);
  });
}, Er = (t, e) => {
  const { length: s } = t = t ? t.filter(Boolean) : [];
  if (e || s) {
    let r = new AbortController(), o;
    const a = function(m) {
      if (!o) {
        o = !0, f();
        const h = m instanceof Error ? m : this.reason;
        r.abort(
          h instanceof S ? h : new Se(h instanceof Error ? h.message : h)
        );
      }
    };
    let i = e && setTimeout(() => {
      i = null, a(new S(`timeout of ${e}ms exceeded`, S.ETIMEDOUT));
    }, e);
    const f = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((m) => {
        m.unsubscribe ? m.unsubscribe(a) : m.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((m) => m.addEventListener("abort", a));
    const { signal: x } = r;
    return x.unsubscribe = () => c.asap(f), x;
  }
}, Sr = function* (t, e) {
  let s = t.byteLength;
  if (s < e) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < s; )
    o = r + e, yield t.slice(r, o), r = o;
}, Cr = async function* (t, e) {
  for await (const s of Rr(t))
    yield* Sr(s, e);
}, Rr = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: s, value: r } = await e.read();
      if (s)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, ht = (t, e, s, r) => {
  const o = Cr(t, e);
  let a = 0, i, f = (x) => {
    i || (i = !0, r && r(x));
  };
  return new ReadableStream(
    {
      async pull(x) {
        try {
          const { done: m, value: h } = await o.next();
          if (m) {
            f(), x.close();
            return;
          }
          let k = h.byteLength;
          if (s) {
            let R = a += k;
            s(R);
          }
          x.enqueue(new Uint8Array(h));
        } catch (m) {
          throw f(m), m;
        }
      },
      cancel(x) {
        return f(x), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, mt = 64 * 1024, { isFunction: Re } = c, Or = (({ Request: t, Response: e }) => ({
  Request: t,
  Response: e
}))(c.global), { ReadableStream: bt, TextEncoder: xt } = c.global, vt = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Tr = (t) => {
  t = c.merge.call(
    {
      skipUndefined: !0
    },
    Or,
    t
  );
  const { fetch: e, Request: s, Response: r } = t, o = e ? Re(e) : typeof fetch == "function", a = Re(s), i = Re(r);
  if (!o)
    return !1;
  const f = o && Re(bt), x = o && (typeof xt == "function" ? /* @__PURE__ */ ((b) => (E) => b.encode(E))(new xt()) : async (b) => new Uint8Array(await new s(b).arrayBuffer())), m = a && f && vt(() => {
    let b = !1;
    const E = new s(U.origin, {
      body: new bt(),
      method: "POST",
      get duplex() {
        return b = !0, "half";
      }
    }).headers.has("Content-Type");
    return b && !E;
  }), h = i && f && vt(() => c.isReadableStream(new r("").body)), k = {
    stream: h && ((b) => b.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((b) => {
    !k[b] && (k[b] = (E, y) => {
      let T = E && E[b];
      if (T)
        return T.call(E);
      throw new S(
        `Response type '${b}' is not supported`,
        S.ERR_NOT_SUPPORT,
        y
      );
    });
  });
  const R = async (b) => {
    if (b == null)
      return 0;
    if (c.isBlob(b))
      return b.size;
    if (c.isSpecCompliantForm(b))
      return (await new s(U.origin, {
        method: "POST",
        body: b
      }).arrayBuffer()).byteLength;
    if (c.isArrayBufferView(b) || c.isArrayBuffer(b))
      return b.byteLength;
    if (c.isURLSearchParams(b) && (b = b + ""), c.isString(b))
      return (await x(b)).byteLength;
  }, N = async (b, E) => {
    const y = c.toFiniteNumber(b.getContentLength());
    return y ?? R(E);
  };
  return async (b) => {
    let {
      url: E,
      method: y,
      data: T,
      signal: I,
      cancelToken: d,
      timeout: B,
      onDownloadProgress: P,
      onUploadProgress: W,
      responseType: F,
      headers: oe,
      withCredentials: ae = "same-origin",
      fetchOptions: $
    } = Mt(b), X = e || fetch;
    F = F ? (F + "").toLowerCase() : "text";
    let de = Er(
      [I, d && d.toAbortSignal()],
      B
    ), ee = null;
    const se = de && de.unsubscribe && (() => {
      de.unsubscribe();
    });
    let te;
    try {
      if (W && m && y !== "get" && y !== "head" && (te = await N(oe, T)) !== 0) {
        let V = new s(E, {
          method: "POST",
          body: T,
          duplex: "half"
        }), le;
        if (c.isFormData(T) && (le = V.headers.get("content-type")) && oe.setContentType(le), V.body) {
          const [K, ce] = ut(
            te,
            Fe(ft(W))
          );
          T = ht(V.body, mt, K, ce);
        }
      }
      c.isString(ae) || (ae = ae ? "include" : "omit");
      const O = a && "credentials" in s.prototype, me = {
        ...$,
        signal: de,
        method: y.toUpperCase(),
        headers: oe.normalize().toJSON(),
        body: T,
        duplex: "half",
        credentials: O ? ae : void 0
      };
      ee = a && new s(E, me);
      let Y = await (a ? X(ee, $) : X(E, me));
      const re = h && (F === "stream" || F === "response");
      if (h && (P || re && se)) {
        const V = {};
        ["status", "statusText", "headers"].forEach((ve) => {
          V[ve] = Y[ve];
        });
        const le = c.toFiniteNumber(Y.headers.get("content-length")), [K, ce] = P && ut(
          le,
          Fe(ft(P), !0)
        ) || [];
        Y = new r(
          ht(Y.body, mt, K, () => {
            ce && ce(), se && se();
          }),
          V
        );
      }
      F = F || "text";
      let Ue = await k[c.findKey(k, F) || "text"](
        Y,
        b
      );
      return !re && se && se(), await new Promise((V, le) => {
        It(V, le, {
          data: Ue,
          headers: J.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: b,
          request: ee
        });
      });
    } catch (O) {
      throw se && se(), O && O.name === "TypeError" && /Load failed|fetch/i.test(O.message) ? Object.assign(
        new S(
          "Network Error",
          S.ERR_NETWORK,
          b,
          ee,
          O && O.response
        ),
        {
          cause: O.cause || O
        }
      ) : S.from(O, O && O.code, b, ee, O && O.response);
    }
  };
}, Ar = /* @__PURE__ */ new Map(), Dt = (t) => {
  let e = t && t.env || {};
  const { fetch: s, Request: r, Response: o } = e, a = [r, o, s];
  let i = a.length, f = i, x, m, h = Ar;
  for (; f--; )
    x = a[f], m = h.get(x), m === void 0 && h.set(x, m = f ? /* @__PURE__ */ new Map() : Tr(e)), h = m;
  return m;
};
Dt();
const Qe = {
  http: Ws,
  xhr: kr,
  fetch: {
    get: Dt
  }
};
c.forEach(Qe, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const gt = (t) => `- ${t}`, Nr = (t) => c.isFunction(t) || t === null || t === !1;
function Fr(t, e) {
  t = c.isArray(t) ? t : [t];
  const { length: s } = t;
  let r, o;
  const a = {};
  for (let i = 0; i < s; i++) {
    r = t[i];
    let f;
    if (o = r, !Nr(r) && (o = Qe[(f = String(r)).toLowerCase()], o === void 0))
      throw new S(`Unknown adapter '${f}'`);
    if (o && (c.isFunction(o) || (o = o.get(e))))
      break;
    a[f || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(a).map(
      ([x, m]) => `adapter ${x} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let f = s ? i.length > 1 ? `since :
` + i.map(gt).join(`
`) : " " + gt(i[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + f,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const zt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Fr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Qe
};
function He(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Se(null, t);
}
function yt(t) {
  return He(t), t.headers = J.from(t.headers), t.data = qe.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), zt.getAdapter(t.adapter || Ee.adapter, t)(t).then(
    function(r) {
      return He(t), r.data = qe.call(t, t.transformResponse, r), r.headers = J.from(r.headers), r;
    },
    function(r) {
      return jt(r) || (He(t), r && r.response && (r.response.data = qe.call(
        t,
        t.transformResponse,
        r.response
      ), r.response.headers = J.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const $t = "1.13.6", Ie = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Ie[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const wt = {};
Ie.transitional = function(e, s, r) {
  function o(a, i) {
    return "[Axios v" + $t + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, f) => {
    if (e === !1)
      throw new S(
        o(i, " has been removed" + (s ? " in " + s : "")),
        S.ERR_DEPRECATED
      );
    return s && !wt[i] && (wt[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), e ? e(a, i, f) : !0;
  };
};
Ie.spelling = function(e) {
  return (s, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Br(t, e, s) {
  if (typeof t != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], i = e[a];
    if (i) {
      const f = t[a], x = f === void 0 || i(f, a, t);
      if (x !== !0)
        throw new S(
          "option " + a + " must be " + x,
          S.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (s !== !0)
      throw new S("Unknown option " + a, S.ERR_BAD_OPTION);
  }
}
const Ne = {
  assertOptions: Br,
  validators: Ie
}, G = Ne.validators;
let pe = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new dt(),
      response: new dt()
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
  async request(e, s) {
    try {
      return await this._request(e, s);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, s) {
    typeof e == "string" ? (s = s || {}, s.url = e) : s = e || {}, s = he(this.defaults, s);
    const { transitional: r, paramsSerializer: o, headers: a } = s;
    r !== void 0 && Ne.assertOptions(
      r,
      {
        silentJSONParsing: G.transitional(G.boolean),
        forcedJSONParsing: G.transitional(G.boolean),
        clarifyTimeoutError: G.transitional(G.boolean),
        legacyInterceptorReqResOrdering: G.transitional(G.boolean)
      },
      !1
    ), o != null && (c.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : Ne.assertOptions(
      o,
      {
        encode: G.function,
        serialize: G.function
      },
      !0
    )), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Ne.assertOptions(
      s,
      {
        baseUrl: G.spelling("baseURL"),
        withXsrfToken: G.spelling("withXSRFToken")
      },
      !0
    ), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let i = a && c.merge(a.common, a[s.method]);
    a && c.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (b) => {
      delete a[b];
    }), s.headers = J.concat(i, a);
    const f = [];
    let x = !0;
    this.interceptors.request.forEach(function(E) {
      if (typeof E.runWhen == "function" && E.runWhen(s) === !1)
        return;
      x = x && E.synchronous;
      const y = s.transitional || Ye;
      y && y.legacyInterceptorReqResOrdering ? f.unshift(E.fulfilled, E.rejected) : f.push(E.fulfilled, E.rejected);
    });
    const m = [];
    this.interceptors.response.forEach(function(E) {
      m.push(E.fulfilled, E.rejected);
    });
    let h, k = 0, R;
    if (!x) {
      const b = [yt.bind(this), void 0];
      for (b.unshift(...f), b.push(...m), R = b.length, h = Promise.resolve(s); k < R; )
        h = h.then(b[k++], b[k++]);
      return h;
    }
    R = f.length;
    let N = s;
    for (; k < R; ) {
      const b = f[k++], E = f[k++];
      try {
        N = b(N);
      } catch (y) {
        E.call(this, y);
        break;
      }
    }
    try {
      h = yt.call(this, N);
    } catch (b) {
      return Promise.reject(b);
    }
    for (k = 0, R = m.length; k < R; )
      h = h.then(m[k++], m[k++]);
    return h;
  }
  getUri(e) {
    e = he(this.defaults, e);
    const s = Ut(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Lt(s, e.params, e.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(e) {
  pe.prototype[e] = function(s, r) {
    return this.request(
      he(r || {}, {
        method: e,
        url: s,
        data: (r || {}).data
      })
    );
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function s(r) {
    return function(a, i, f) {
      return this.request(
        he(f || {}, {
          method: e,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: i
        })
      );
    };
  }
  pe.prototype[e] = s(), pe.prototype[e + "Form"] = s(!0);
});
let Lr = class qt {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(a) {
      s = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((f) => {
        r.subscribe(f), a = f;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, e(function(a, i, f) {
      r.reason || (r.reason = new Se(a, i, f), s(r.reason));
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const s = this._listeners.indexOf(e);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), s = (r) => {
      e.abort(r);
    };
    return this.subscribe(s), e.signal.unsubscribe = () => this.unsubscribe(s), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new qt(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
};
function Pr(t) {
  return function(s) {
    return t.apply(null, s);
  };
}
function jr(t) {
  return c.isObject(t) && t.isAxiosError === !0;
}
const Xe = {
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
Object.entries(Xe).forEach(([t, e]) => {
  Xe[e] = t;
});
function Ht(t) {
  const e = new pe(t), s = kt(pe.prototype.request, e);
  return c.extend(s, pe.prototype, e, { allOwnKeys: !0 }), c.extend(s, e, null, { allOwnKeys: !0 }), s.create = function(o) {
    return Ht(he(t, o));
  }, s;
}
const A = Ht(Ee);
A.Axios = pe;
A.CanceledError = Se;
A.CancelToken = Lr;
A.isCancel = jt;
A.VERSION = $t;
A.toFormData = je;
A.AxiosError = S;
A.Cancel = A.CanceledError;
A.all = function(e) {
  return Promise.all(e);
};
A.spread = Pr;
A.isAxiosError = jr;
A.mergeConfig = he;
A.AxiosHeaders = J;
A.formToJSON = (t) => Pt(c.isHTMLForm(t) ? new FormData(t) : t);
A.getAdapter = zt.getAdapter;
A.HttpStatusCode = Xe;
A.default = A;
const {
  Axios: ea,
  AxiosError: ta,
  CanceledError: sa,
  isCancel: ra,
  CancelToken: na,
  VERSION: oa,
  all: aa,
  Cancel: la,
  isAxiosError: ia,
  spread: da,
  toFormData: ca,
  AxiosHeaders: ua,
  HttpStatusCode: fa,
  formToJSON: pa,
  getAdapter: ha,
  mergeConfig: ma
} = A, Ir = ["id"], Ur = { class: "flex gap-2 items-center" }, Mr = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "text-amber-400 fill-amber-400/20"
}, Dr = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, zr = {
  key: 0,
  class: "max-w-[1440px] mx-auto px-4 py-6 md:px-8"
}, $r = { class: "grid grid-cols-1 lg:!grid-cols-[1fr_380px] gap-12" }, qr = { class: "space-y-4" }, Hr = {
  key: 1,
  class: "max-w-[1440px] mx-auto md:px-8 md:py-8"
}, Jr = { class: "!hidden md:!flex text-sm mb-8 items-center gap-2 justify-between" }, Vr = { class: "hover:text-blue-500 transition-colors cursor-pointer capitalize" }, Wr = { class: "relative w-4 h-4 overflow-hidden" }, Xr = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "animate-[spin_3s_linear_infinite]"
}, Kr = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Gr = { class: "text-xs font-semibold tracking-wide" }, Yr = { class: "!hidden md:!block mb-10" }, Zr = { class: "flex gap-2 mb-4" }, Qr = {
  key: 0,
  class: "px-2.5 py-1 rounded-md bg-rose-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-rose-500/30"
}, en = { class: "flex items-center text-amber-500 gap-1.5" }, tn = { class: "flex" }, sn = {
  key: 0,
  class: "tracking-wide"
}, rn = { class: "font-mono" }, nn = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-4"
}, on = { class: "grid grid-cols-1 lg:!grid-cols-[1fr_400px] gap-0 lg:!gap-16 items-start" }, an = { class: "w-full" }, ln = { class: "md:!hidden px-4 pt-2 mb-6" }, dn = { class: "flex gap-2 mb-3" }, cn = {
  key: 0,
  class: "px-2 py-0.5 rounded bg-rose-500 text-white text-[10px] font-bold shadow-md shadow-rose-500/20"
}, un = { class: "flex items-center text-amber-500 text-sm" }, fn = { class: "ml-2 font-semibold" }, pn = { class: "text-xs opacity-60 ml-1 text-current" }, hn = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-3 no-scrollbar overflow-x-auto"
}, mn = { class: "grid grid-cols-1 lg:!grid-cols-[550px_1fr] gap-10 mb-12" }, bn = { class: "relative group" }, xn = { class: "!hidden md:!flex gap-4 h-[600px]" }, vn = { class: "flex flex-col gap-3 w-[80px] overflow-y-auto no-scrollbar py-1" }, gn = ["onMouseover"], yn = ["src"], wn = ["src"], _n = { class: "absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity" }, kn = ["fill"], En = ["src"], Sn = { class: "px-4 lg:px-0 flex flex-col gap-8" }, Cn = { class: "flex items-baseline gap-3 mb-2" }, Rn = { class: "text-3xl font-extrabold text-rose-500 tracking-tight" }, On = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, Tn = { key: 0 }, An = { class: "flex flex-wrap gap-3" }, Nn = ["onClick"], Fn = ["src"], Bn = {
  key: 2,
  class: "absolute inset-0 bg-black/20 flex items-center justify-center z-10 backdrop-blur-[1px]"
}, Ln = { key: 1 }, Pn = { class: "flex justify-between items-center mb-3" }, jn = { class: "flex flex-wrap gap-2.5" }, In = ["onClick"], Un = { class: "space-y-3 mb-5" }, Mn = ["innerHTML"], Dn = {
  id: "characteristics",
  class: "scroll-mt-32"
}, zn = ["onClick"], $n = { class: "flex justify-between items-center mb-8" }, qn = {
  key: 0,
  class: "grid gap-6 md:grid-cols-2"
}, Hn = {
  key: 1,
  class: "grid gap-6 md:grid-cols-2"
}, Jn = { class: "flex justify-between items-start mb-4" }, Vn = { class: "flex items-center gap-3" }, Wn = { class: "!hidden lg:!block w-[380px]" }, Xn = { class: "flex items-start justify-between mb-6" }, Kn = { class: "flex items-baseline gap-2.5" }, Gn = { class: "text-[32px] font-extrabold leading-none text-rose-500 tracking-tight" }, Yn = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, Zn = { class: "flex gap-4 text-sm group" }, Qn = { class: "flex gap-4 text-sm group" }, eo = { class: "space-y-3" }, to = ["disabled"], so = { class: "flex flex-col items-center justify-center" }, ro = ["disabled"], no = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, oo = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5"
}, ao = ["disabled"], lo = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, io = { key: 1 }, co = ["disabled"], uo = ["innerHTML"], fo = {
  key: 1,
  class: "flex gap-4 animate-pulse overflow-hidden px-4"
}, po = { class: "flex flex-col min-w-[80px]" }, ho = {
  key: 0,
  class: "text-xs text-slate-400 line-through mt-0.5"
}, mo = ["disabled"], bo = ["disabled"], xo = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, vo = {
  key: 1,
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5"
}, go = ["disabled"], yo = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, wo = { key: 1 }, _o = { class: "w-full max-w-3xl bg-white dark:bg-slate-900 rounded-t-[32px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh] animate-[slideUp_0.3s_ease-out]" }, ko = { class: "px-6 pt-2 md:pt-6 pb-0 border-b border-gray-100 dark:border-slate-800" }, Eo = { class: "flex justify-between items-center mb-6" }, So = { class: "flex space-x-6" }, Co = { class: "overflow-y-auto p-4 md:p-8 flex-1 custom-widget-scroll" }, Ro = { class: "animate-[fadeIn_0.3s_ease-out]" }, Oo = {
  key: 0,
  class: "flex justify-center p-4"
}, To = ["src"], Ao = { key: 1 }, No = { class: "flex justify-end mb-2" }, Fo = { class: "overflow-x-auto no-scrollbar pb-2" }, Bo = { class: "w-full text-sm text-center border-collapse min-w-[500px]" }, Lo = { class: "animate-[fadeIn_0.3s_ease-out] pb-4 md:pb-0" }, Po = { class: "grid md:grid-cols-[200px_1fr] gap-8 md:gap-14 items-center" }, jo = { class: "w-full flex justify-center py-4" }, Io = {
  viewBox: "0 0 200 250",
  class: "w-full max-w-[160px] h-auto",
  fill: "none",
  stroke: "currentColor"
}, Uo = ["stroke"], Mo = ["stroke"], Do = { class: "space-y-6" }, zo = { class: "relative pl-10" }, $o = { class: "relative pl-10" }, qo = { class: "relative pl-10" }, Ho = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_product", Oe = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", Jo = /* @__PURE__ */ _t({
  __name: "ProductPage",
  props: {
    _$p: {},
    _p: {},
    _$cb: {}
  },
  setup(t) {
    const e = t, s = {
      Default: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800",
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800"
      ]
    }, r = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], o = j(e._$p?.data?.curr?.data?.theme || "light"), a = j({
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
    }), i = j(!0), f = j(""), x = j(""), m = j(""), h = j(0), k = j(!1), R = j("chart"), N = j(!1), b = j(!1), E = j(""), y = j([]), T = j(!1), I = j([
      { question: "Payment Methods", answer: "We accept Visa, MasterCard, Mir cards, and SBP. You can also pay upon receipt.", isOpen: !1 },
      { question: "Delivery Options", answer: "Courier delivery to your door or pickup points. Free delivery for orders over 2000₽.", isOpen: !1 },
      { question: "Return Policy", answer: "You can return items within 14 days of receipt. Items must be unused and in original packaging.", isOpen: !1 },
      { question: "Warranty Information", answer: "All products come with a 6-month warranty covering manufacturing defects.", isOpen: !1 },
      { question: "Sizing Guide", answer: "Please refer to our size chart for accurate measurements to ensure the best fit.", isOpen: !1 }
    ]), d = z(() => o.value === "dark"), B = z(() => e._p?.f?.name ? e._p.f.name("pd-root") : "pd-root"), P = z(() => {
      if (!a.value.metadata) return {};
      try {
        return JSON.parse(a.value.metadata);
      } catch {
        return {};
      }
    }), W = z(() => P.value.color ? P.value.color.map((w) => {
      let l = w.image?.[0]?.url ? w.image[0].url : null;
      return l && l.includes("example.com") && (l = null), { id: w.id, name: w.name, url: l };
    }) : []), F = z(() => {
      const w = x.value, l = P.value.color?.find((p) => p.name === w);
      if (l && l.image && l.image.length > 0) {
        const p = l.image.filter((_) => _.url && !_.url.includes("example.com")).map((_) => _.url);
        if (p.length) return p;
      }
      return s.Default;
    }), oe = z(() => {
      const w = a.value.size;
      return !w || !Array.isArray(w) || w.length === 0 ? [] : [...new Set(w.map((p) => String(p).trim()))].filter(Boolean).sort((p, _) => {
        const L = r.indexOf(p.toUpperCase()), Z = r.indexOf(_.toUpperCase());
        if (L !== -1 && Z !== -1) return L - Z;
        if (L !== -1) return -1;
        if (Z !== -1) return 1;
        const Ce = parseFloat(p), ue = parseFloat(_);
        return !isNaN(Ce) && !isNaN(ue) ? Ce - ue : p.localeCompare(_, void 0, { numeric: !0 });
      });
    }), ae = z(() => {
      const w = P.value.size_info?.representation?.url || P.value.size_info?.chart?.url || null;
      return w && !w.includes("example.com") ? w : null;
    }), $ = z(() => a.value.variant_prices?.[0] || 0), X = z(() => a.value.variant_mrp?.[0] || 0), de = z(() => Math.floor($.value * 0.95)), ee = z(() => X.value > $.value ? Math.round((X.value - $.value) / X.value * 100) : 0), se = z(() => {
      const w = a.value.field_name?.indexOf("Product Details");
      return w !== -1 && a.value.field_value?.[w] ? a.value.field_value[w] : "";
    }), te = j(0), O = j(!1), me = z(() => {
      const w = P.value.variant || a.value.variant;
      return w && w.length > 0 ? w.find((p) => {
        const _ = m.value ? p.size_id === m.value : !0, L = x.value ? p.color_id === x.value : !0;
        return _ && L;
      })?.id || w[0].id : null;
    }), Y = () => {
      const w = me.value;
      if (w) {
        const p = JSON.parse(localStorage.getItem("guest_cart") || "[]").find((_) => _.product_id === a.value.id && _.variant_id === w);
        te.value = p ? p.quantity : 0;
      }
    };
    rt([x, m], () => {
      Y();
    });
    const re = async (w) => {
      if (!a.value.id) return;
      const l = me.value;
      if (!l) return alert("Please select a valid variant.");
      O.value = !0;
      const p = Math.max(0, te.value + w);
      console.log("Note: Force logged-in mode for testing API. Change to 'true' to test guest mode with local storage.");
      {
        let _ = JSON.parse(localStorage.getItem("guest_cart") || "[]"), L = _.findIndex((Z) => Z.product_id === a.value.id && Z.variant_id === l);
        L > -1 ? p === 0 ? _.splice(L, 1) : _[L].quantity = p : p > 0 && _.push({
          // Add New
          product_id: a.value.id,
          variant_id: l,
          quantity: p,
          title: a.value.title,
          price: $.value,
          image: F.value[0],
          color: x.value,
          size: m.value
        }), console.log("Guest Cart Updated:", _), localStorage.setItem("guest_cart", JSON.stringify(_)), alert("Cart updated successfully! locally"), te.value = p, setTimeout(() => {
          O.value = !1;
        }, 300);
      }
      w > 0 && e._$cb?.add && e._$cb.add({ $d: e._$p?.data?.curr?.data || {}, el: document.getElementById(B.value) });
    }, Ue = async () => {
      if (!a.value.id) return;
      const w = me.value;
      if (!w) return alert("Please select a valid variant.");
      O.value = !0;
      const l = {
        product_id: a.value.id,
        variant_id: w,
        quantity: 1,
        // Strictly locked to 1 for Buy Now
        title: a.value.title,
        price: $.value,
        image: F.value[0],
        color: x.value,
        size: m.value
      };
      if (localStorage.setItem("buy_now_item", JSON.stringify(l)), console.log("Buy Now Item Saved locally:", l), console.log("Current Buy Now Item in Storage:", JSON.parse(localStorage.getItem("buy_now_item") || "{}")), !(Oe.trim() === ""))
        try {
          const _ = await A.post("https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", {
            operation: "add_to_cart",
            user_id: "user_1",
            // Update this dynamically later if needed
            product_id: a.value.id,
            variant_id: w,
            quantity: 1,
            buy_now: !0
            // Flags it as a direct buy now action for the backend
          }, {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${Oe.trim()}`
            }
          });
          console.log("Buy Now API Response:", _.data), alert("Buy Now item added to cart. Redirecting to checkout...");
        } catch (_) {
          return console.error("Buy Now API Error:", _), O.value = !1, alert("Failed to process Buy Now. Please try again.");
        }
      O.value = !1, e._$cb?.checkout ? e._$cb.checkout({
        $d: e._$p?.data?.curr?.data || {},
        is_buy_now: !0
      }) : console.log("Redirecting to checkout page...");
    }, V = z(() => a.value.field_name ? a.value.field_name.map((w, l) => ({
      name: w,
      value: a.value.field_value[l]?.replace(/<[^>]*>/g, " ").trim()
    })).filter((w) => w.name !== "Product Details" && w.value) : []), le = z(() => N.value ? V.value : V.value.slice(0, 5)), K = (w) => new Intl.NumberFormat("ru-RU").format(w), ce = () => {
      const w = o.value === "dark" ? "light" : "dark";
      o.value = w, e._p?.f?.set_theme && e._p.f.set_theme({ name: w, el_id: B.value }), e._$cb && e._$p?.data?.curr?.data && (e._$p.data.curr.data.theme = w, e._$cb.change && e._$cb.change({ _$p: e._$p }));
    }, ve = () => {
      console.log("Back requested");
    }, Jt = () => navigator.share?.({ title: a.value.title, url: window.location.href }).catch(console.error), Vt = () => b.value = !b.value, et = (w) => {
      x.value = w.name, f.value = F.value[0];
    }, Wt = (w) => {
      I.value[w].isOpen = !I.value[w].isOpen;
    }, Xt = () => document.getElementById("characteristics")?.scrollIntoView({ behavior: "smooth" }), Kt = (w) => {
      const l = w.target;
      h.value = Math.round(l.scrollLeft / l.clientWidth);
    }, ie = j({
      average_rating: 0,
      total_reviews: 0
    }), Gt = async (w) => {
      T.value = !0;
      try {
        const l = await A.post(
          "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management",
          {
            operation: "get_product_reviews",
            product_id: w,
            page: 1,
            per_page: 10
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${Oe.trim()}`
            }
          }
        );
        if (l?.data?.success) {
          const p = l.data.analytics || {};
          ie.value = {
            average_rating: Number(p.average_rating ?? 0),
            total_reviews: Number(p.total_reviews ?? 0)
          }, y.value = (l.data.reviews || []).map((_) => ({
            name: _.reviewer_name || _.name || _.user || "Customer",
            date: _.created_at ? new Date(_.created_at).toLocaleDateString() : "Recent",
            text: _.review_text || _.text || _.comment || "",
            rating: Number(_.rating ?? 5),
            color: [
              "#005bff",
              "#f91155",
              "#00c853",
              "#ff6d00",
              "#d500f9",
              "#00bcd4"
            ][Math.floor(Math.random() * 6)]
          })), console.log("Fetched Reviews:", y.value.length);
        }
      } catch (l) {
        console.error("Failed to fetch reviews:", l), y.value = [], ie.value = { average_rating: 3.6, total_reviews: 50 };
      } finally {
        T.value = !1;
      }
    }, tt = async () => {
      i.value = !0;
      const l = { slug: (() => {
        let p = "";
        try {
          const L = new URL(location.href).pathname.split("/");
          p = L[L.length - 1];
        } catch {
        }
        return p;
      })(), collection: "products" };
      try {
        const p = await A.post(Ho, l, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${Oe.trim()}` }
        });
        if (p.data.success && p.data.data.length)
          a.value = { ...a.value, ...p.data.data[0].document };
        else
          throw new Error("No data found");
      } catch (p) {
        console.warn("API Error, using fallback data:", p);
      } finally {
        W.value.length && et(W.value[0]), oe.value.length && (m.value = oe.value[0]), f.value = F.value[0], i.value = !1, Y();
      }
    };
    Zt(async () => {
      await tt(), a.value.id && await Gt(a.value.id), await nt();
      const w = document.getElementById(B.value);
      w && o.value && e._p?.f?.set_theme && e._p.f.set_theme({ name: o.value, el_id: w.id });
      const l = e._$p?.data?.curr?.data?.product_list_widget;
      let p = l ? JSON.parse(JSON.stringify(l)) : null;
      const _ = { l: p ? [p] : [] }, L = {
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
        }
      };
      try {
        const Z = await rs(L), Ce = await ns(L), ue = await Z.set({
          data: _,
          _p: e._p,
          _$p: e._$p
        });
        if (E.value = ue.r || ue.html || "", ue.style) {
          const st = document.createElement("style");
          st.innerHTML = ue.style, document.head.appendChild(st);
        }
        await nt(), setTimeout(async () => {
          await Ce.set({
            data: _,
            _p: e._p,
            _$p: e._$p
          });
        }, 200);
      } catch (Z) {
        console.error("Widget render failed:", Z);
      }
    }), rt(() => e._$p?.data?.curr?.id, tt);
    const Yt = (w) => {
      if (Math.abs(w.deltaX) > 0) return;
      const p = w.currentTarget.querySelector('.overflow-x-auto, [class*="overflow-x"]');
      if (p) {
        const _ = p.scrollLeft === 0, L = p.scrollLeft + p.clientWidth >= p.scrollWidth - 1;
        w.deltaY > 0 && !L ? (w.preventDefault(), p.scrollBy({ left: 300, behavior: "smooth" })) : w.deltaY < 0 && !_ && (w.preventDefault(), p.scrollBy({ left: -300, behavior: "smooth" }));
      }
    };
    return (w, l) => (v(), g("div", {
      id: B.value,
      class: u(["font-sans min-h-screen pb-[100px] md:pb-0 antialiased transition-colors duration-300 ease-in-out selection:bg-rose-500 selection:text-white", d.value ? "bg-[#0f172a] text-slate-200" : "bg-[#F9FAFB] text-slate-900"])
    }, [
      n("nav", {
        class: u(["sticky top-0 z-50 backdrop-blur-xl flex justify-between items-center px-4 py-3 shadow-sm md:!hidden border-b transition-colors duration-300", d.value ? "bg-[#0f172a]/80 border-slate-800" : "bg-white/80 border-slate-200/60"])
      }, [
        n("button", {
          class: u(["p-2 -ml-2 transition-all duration-200 rounded-full active:scale-90", d.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
          onClick: ve
        }, [...l[12] || (l[12] = [
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
        n("div", Ur, [
          n("button", {
            class: u(["p-2 transition-all duration-200 rounded-full active:scale-90", d.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: ce
          }, [
            d.value ? (v(), g("svg", Mr, [...l[13] || (l[13] = [
              ge('<circle cx="12" cy="12" r="5" data-v-d41e64c1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-d41e64c1></line><line x1="12" y1="21" x2="12" y2="23" data-v-d41e64c1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-d41e64c1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-d41e64c1></line><line x1="1" y1="12" x2="3" y2="12" data-v-d41e64c1></line><line x1="21" y1="12" x2="23" y2="12" data-v-d41e64c1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-d41e64c1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-d41e64c1></line>', 9)
            ])])) : (v(), g("svg", Dr, [...l[14] || (l[14] = [
              n("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
            ])]))
          ], 2),
          n("button", {
            class: u(["p-2 transition-all duration-200 rounded-full active:scale-90", d.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: Jt
          }, [...l[15] || (l[15] = [
            ge('<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-d41e64c1><circle cx="18" cy="5" r="3" data-v-d41e64c1></circle><circle cx="6" cy="12" r="3" data-v-d41e64c1></circle><circle cx="18" cy="19" r="3" data-v-d41e64c1></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-d41e64c1></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-d41e64c1></line></svg>', 1)
          ])], 2)
        ])
      ], 2),
      i.value ? (v(), g("div", zr, [
        n("div", {
          class: u(["!hidden md:!block h-5 w-64 rounded mb-8 animate-shimmer", d.value ? "bg-slate-800" : "bg-gray-200"])
        }, null, 2),
        n("div", $r, [
          n("div", null, [
            n("div", {
              class: u(["block md:!hidden h-[400px] w-full rounded-2xl mb-6 animate-shimmer", d.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            n("div", {
              class: u(["!hidden md:!block h-[600px] w-full rounded-3xl mb-8 animate-shimmer", d.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            n("div", qr, [
              n("div", {
                class: u(["h-8 w-3/4 rounded-lg animate-shimmer", d.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2),
              n("div", {
                class: u(["h-6 w-1/2 rounded-lg animate-shimmer", d.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2)
            ])
          ]),
          n("div", {
            class: u(["!hidden lg:!block h-[500px] rounded-3xl animate-shimmer", d.value ? "bg-slate-800" : "bg-gray-200"])
          }, null, 2)
        ])
      ])) : a.value && a.value.id ? (v(), g("div", Hr, [
        n("nav", Jr, [
          n("div", {
            class: u(["flex items-center gap-2", d.value ? "text-slate-400" : "text-slate-500"])
          }, [
            n("span", {
              class: "hover:text-blue-500 transition-colors cursor-pointer",
              onClick: ve
            }, "Home"),
            l[17] || (l[17] = ne()),
            l[18] || (l[18] = n("span", { class: "opacity-30" }, "/", -1)),
            (v(!0), g(M, null, D(a.value.category, (p, _) => (v(), g("span", {
              key: _,
              class: "flex items-center gap-2"
            }, [
              n("span", Vr, C(p), 1),
              l[16] || (l[16] = n("span", { class: "opacity-30" }, "/", -1))
            ]))), 128)),
            n("span", {
              class: u(["font-medium truncate max-w-[200px]", d.value ? "text-slate-200" : "text-slate-900"])
            }, C(a.value.title), 3)
          ], 2),
          n("button", {
            class: u(["group flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm hover:shadow-md active:scale-95", d.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"]),
            onClick: ce
          }, [
            n("div", Wr, [
              d.value ? (v(), g("svg", Xr, [...l[19] || (l[19] = [
                ge('<circle cx="12" cy="12" r="5" data-v-d41e64c1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-d41e64c1></line><line x1="12" y1="21" x2="12" y2="23" data-v-d41e64c1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-d41e64c1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-d41e64c1></line><line x1="1" y1="12" x2="3" y2="12" data-v-d41e64c1></line><line x1="21" y1="12" x2="23" y2="12" data-v-d41e64c1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-d41e64c1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-d41e64c1></line>', 9)
              ])])) : (v(), g("svg", Kr, [...l[20] || (l[20] = [
                n("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ]),
            n("span", Gr, C(d.value ? "Dark Mode" : "Light Mode"), 1)
          ], 2)
        ]),
        n("header", Yr, [
          n("div", Zr, [
            n("span", {
              class: u(["px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm", d.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
            }, "Bestseller", 2),
            ee.value > 0 ? (v(), g("span", Qr, "-" + C(ee.value) + "% Sale", 1)) : q("", !0)
          ]),
          n("h1", {
            class: u(["text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight", d.value ? "text-white" : "text-slate-900"])
          }, C(a.value.title), 3),
          n("div", {
            class: u(["flex items-center gap-4 text-sm font-medium", d.value ? "text-slate-400" : "text-slate-500"])
          }, [
            n("div", en, [
              n("span", tn, [
                (v(), g(M, null, D(5, (p) => n("svg", {
                  key: p,
                  class: u(["w-4 h-4", p <= Math.round(ie.value.average_rating) ? "fill-current" : "fill-gray-300"]),
                  viewBox: "0 0 20 20"
                }, [...l[21] || (l[21] = [
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
                class: u(["font-bold ml-1", d.value ? "text-white" : "text-slate-900"])
              }, C(ie.value.average_rating.toFixed(1)), 3),
              n("a", {
                href: "#reviews",
                class: u(["ml-2 border-b border-dotted hover:text-blue-500 hover:border-blue-500 transition-colors", d.value ? "border-slate-600" : "border-slate-400"])
              }, C(ie.value.total_reviews) + " reviews ", 3)
            ]),
            l[23] || (l[23] = n("span", { class: "opacity-30 text-xl font-light" }, "|", -1)),
            a.value.id ? (v(), g("span", sn, [
              l[22] || (l[22] = ne(" Product: ", -1)),
              n("span", rn, C(a.value.id), 1)
            ])) : q("", !0)
          ], 2),
          a.value.hashtags && a.value.hashtags.length ? (v(), g("div", nn, [
            (v(!0), g(M, null, D(a.value.hashtags, (p, _) => (v(), g("span", {
              key: _,
              class: u(["px-3 py-1 text-xs font-semibold rounded-full border transition-all cursor-pointer hover:shadow-sm", d.value ? "bg-slate-800 text-blue-400 border-slate-700 hover:border-blue-500/50" : "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100"])
            }, C(p), 3))), 128))
          ])) : q("", !0)
        ]),
        n("div", on, [
          n("div", an, [
            n("div", ln, [
              n("div", dn, [
                n("span", {
                  class: u(["px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border", d.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
                }, "Bestseller", 2),
                ee.value > 0 ? (v(), g("span", cn, "-" + C(ee.value) + "%", 1)) : q("", !0)
              ]),
              n("h1", {
                class: u(["text-[26px] font-bold leading-[1.2] mb-3 tracking-tight", d.value ? "text-white" : "text-slate-900"])
              }, C(a.value.title), 3),
              n("div", un, [
                (v(), g(M, null, D(5, (p) => n("svg", {
                  key: p,
                  class: u(["w-3.5 h-3.5", p <= Math.round(ie.value.average_rating) ? "fill-current" : "fill-gray-300"]),
                  viewBox: "0 0 20 20"
                }, [...l[24] || (l[24] = [
                  n("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ])], 2)), 64)),
                n("span", fn, C(ie.value.average_rating.toFixed(1)), 1),
                n("span", pn, " (" + C(ie.value.total_reviews) + " reviews) ", 1)
              ]),
              a.value.hashtags && a.value.hashtags.length ? (v(), g("div", hn, [
                (v(!0), g(M, null, D(a.value.hashtags, (p, _) => (v(), g("span", {
                  key: _,
                  class: u(["px-2.5 py-1 text-[11px] font-semibold rounded-full border whitespace-nowrap", d.value ? "bg-slate-800 text-blue-400 border-slate-700" : "bg-blue-50 text-blue-600 border-blue-100"])
                }, C(p), 3))), 128))
              ])) : q("", !0)
            ]),
            n("div", mn, [
              n("div", bn, [
                n("div", xn, [
                  n("div", vn, [
                    (v(!0), g(M, null, D(F.value, (p, _) => (v(), g("div", {
                      key: _,
                      class: u(["w-[80px] h-[100px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 relative border", [
                        d.value ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100",
                        f.value === p ? "ring-2 ring-blue-500 ring-offset-2 " + (d.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80 opacity-70 hover:opacity-100"
                      ]]),
                      onMouseover: (L) => f.value = p
                    }, [
                      n("img", {
                        src: p,
                        class: "w-full h-full object-cover"
                      }, null, 8, yn)
                    ], 42, gn))), 128))
                  ]),
                  n("div", {
                    class: u(["flex-1 rounded-[32px] flex items-center justify-center overflow-hidden cursor-zoom-in relative shadow-sm border", d.value ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-100"])
                  }, [
                    n("img", {
                      src: f.value,
                      class: "max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                    }, null, 8, wn),
                    n("div", _n, [
                      n("button", {
                        class: "p-2 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-blue-600 dark:bg-slate-800/90 dark:text-slate-200",
                        onClick: Vt
                      }, [
                        (v(), g("svg", {
                          fill: b.value ? "currentColor" : "none",
                          class: u(b.value ? "text-rose-500" : ""),
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [...l[25] || (l[25] = [
                          n("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          }, null, -1)
                        ])], 10, kn))
                      ])
                    ])
                  ], 2)
                ]),
                n("div", {
                  class: u(["md:!hidden relative w-full pb-6 transition-colors duration-300", d.value ? "bg-[#0f172a]" : "bg-[#F9FAFB]"])
                }, [
                  n("div", {
                    class: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-[100vw] max-h-[500px]",
                    onScroll: Kt
                  }, [
                    (v(!0), g(M, null, D(F.value, (p, _) => (v(), g("div", {
                      class: "min-w-full snap-center flex items-center justify-center p-6",
                      key: _
                    }, [
                      n("img", {
                        src: p,
                        class: "max-w-full max-h-full object-contain drop-shadow-xl"
                      }, null, 8, En)
                    ]))), 128))
                  ], 32),
                  n("div", {
                    class: u(["absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md z-10 border", d.value ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"])
                  }, [
                    (v(!0), g(M, null, D(F.value, (p, _) => (v(), g("span", {
                      key: _,
                      class: u(["h-1.5 rounded-full transition-all duration-300 shadow-sm", h.value === _ ? d.value ? "bg-white w-4" : "bg-slate-800 w-4" : d.value ? "bg-white/30 w-1.5" : "bg-slate-800/30 w-1.5"])
                    }, null, 2))), 128))
                  ], 2)
                ], 2)
              ]),
              n("div", Sn, [
                n("div", {
                  class: u(["md:!hidden pb-6 border-b", d.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  n("div", Cn, [
                    n("span", Rn, C(K($.value)) + " ₽", 1),
                    X.value > $.value ? (v(), g("span", On, C(K(X.value)) + " ₽", 1)) : q("", !0)
                  ]),
                  n("div", {
                    class: u(["inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm", d.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    n("span", null, C(K(de.value)) + " ₽", 1),
                    l[26] || (l[26] = ne(" with Ozon Card ", -1))
                  ], 2)
                ], 2),
                W.value.length ? (v(), g("div", Tn, [
                  n("div", {
                    class: u(["text-sm font-medium mb-3 flex items-center gap-2", d.value ? "text-slate-400" : "text-slate-500"])
                  }, [
                    l[27] || (l[27] = n("span", null, "Color:", -1)),
                    n("span", {
                      class: u(["font-bold text-base", d.value ? "text-white" : "text-slate-900"])
                    }, C(x.value), 3)
                  ], 2),
                  n("div", An, [
                    (v(!0), g(M, null, D(W.value, (p) => (v(), g("div", {
                      key: p.id,
                      class: u(["relative w-[72px] h-[90px] rounded-xl cursor-pointer overflow-hidden transition-all duration-200 group border", [
                        d.value ? "border-slate-700" : "border-slate-200",
                        x.value === p.name ? "ring-2 ring-blue-500 ring-offset-2 " + (d.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80"
                      ]]),
                      onClick: (_) => et(p)
                    }, [
                      p.url ? (v(), g("img", {
                        key: 0,
                        src: p.url,
                        class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      }, null, 8, Fn)) : (v(), g("span", {
                        key: 1,
                        class: u(["flex w-full h-full items-center justify-center p-1 text-center text-xs leading-tight font-medium", d.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                      }, C(p.name), 3)),
                      x.value === p.name ? (v(), g("div", Bn, [...l[28] || (l[28] = [
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
                      ])])) : q("", !0)
                    ], 10, Nn))), 128))
                  ])
                ])) : q("", !0),
                oe.value.length ? (v(), g("div", Ln, [
                  n("div", Pn, [
                    n("span", {
                      class: u(["text-sm font-medium flex items-center gap-2", d.value ? "text-slate-400" : "text-slate-500"])
                    }, [
                      l[29] || (l[29] = n("span", null, "Size:", -1)),
                      n("span", {
                        class: u(["font-bold text-base", d.value ? "text-white" : "text-slate-900"])
                      }, C(m.value), 3)
                    ], 2),
                    ae.value ? (v(), g("button", {
                      key: 0,
                      class: u(["text-xs font-bold flex items-center gap-1.5 transition hover:opacity-70 px-2 py-1 rounded-md", d.value ? "text-blue-400 bg-blue-400/10" : "text-blue-600 bg-blue-50"]),
                      onClick: l[0] || (l[0] = (p) => k.value = !0)
                    }, [...l[30] || (l[30] = [
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
                      ne(" Size Chart ", -1)
                    ])], 2)) : q("", !0)
                  ]),
                  n("div", jn, [
                    (v(!0), g(M, null, D(oe.value, (p) => (v(), g("button", {
                      key: p,
                      class: u(["h-12 min-w-[3.5rem] px-4 rounded-xl text-sm font-semibold transition-all duration-200 border relative overflow-hidden", [
                        m.value === p ? d.value ? "bg-slate-800 border-blue-500 text-blue-400 ring-1 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200" : d.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500" : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      ]]),
                      onClick: (_) => m.value = p
                    }, C(p), 11, In))), 128))
                  ])
                ])) : q("", !0),
                n("div", {
                  class: u(["!hidden lg:!block p-6 rounded-2xl border transition-colors duration-300", d.value ? "bg-slate-800/40 border-slate-700" : "bg-slate-50/50 border-slate-200/60"])
                }, [
                  n("h3", {
                    class: u(["text-xs font-bold mb-4 uppercase tracking-wider opacity-60", d.value ? "text-white" : "text-slate-900"])
                  }, "Key Features", 2),
                  n("ul", Un, [
                    (v(!0), g(M, null, D(V.value.slice(0, 5), (p, _) => (v(), g("li", {
                      key: _,
                      class: u(["text-sm flex justify-between items-start border-b pb-2 last:border-0 border-dashed", d.value ? "border-slate-700/50" : "border-slate-200"])
                    }, [
                      n("span", {
                        class: u(d.value ? "text-slate-400" : "text-slate-500")
                      }, C(p.name), 3),
                      n("span", {
                        class: u(["font-medium text-right max-w-[60%]", d.value ? "text-slate-200" : "text-slate-900"])
                      }, C(p.value), 3)
                    ], 2))), 128))
                  ]),
                  n("button", {
                    class: u(["text-sm font-bold flex items-center gap-1 transition hover:opacity-70 group", d.value ? "text-blue-400" : "text-blue-600"]),
                    onClick: Xt
                  }, [...l[31] || (l[31] = [
                    ne(" View all characteristics ", -1),
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
                ], 2)
              ])
            ]),
            n("div", {
              class: u(["px-4 lg:px-0 mt-16 pt-10 border-t", d.value ? "border-slate-800" : "border-slate-200"])
            }, [
              n("h2", {
                class: u(["text-2xl font-bold mb-6 tracking-tight", d.value ? "text-white" : "text-slate-900"])
              }, "Description", 2),
              n("div", {
                class: u(["prose max-w-3xl leading-relaxed mb-12 text-[1.05rem]", d.value ? "prose-invert text-slate-300" : "prose-slate text-slate-600"]),
                innerHTML: se.value
              }, null, 10, Mn),
              n("div", Dn, [
                n("h3", {
                  class: u(["text-2xl font-bold mb-6 tracking-tight", d.value ? "text-white" : "text-slate-900"])
                }, "All Characteristics", 2),
                n("div", {
                  class: u(["rounded-2xl border overflow-hidden", d.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  (v(!0), g(M, null, D(le.value, (p, _) => (v(), g("div", {
                    class: u(["flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:px-6 transition-colors", [
                      _ % 2 === 0 ? d.value ? "bg-slate-800/30" : "bg-slate-50" : d.value ? "bg-transparent" : "bg-white"
                    ]]),
                    key: _
                  }, [
                    n("span", {
                      class: u(["text-sm mb-1 sm:mb-0 font-medium opacity-80", d.value ? "text-slate-400" : "text-slate-500"])
                    }, C(p.name), 3),
                    n("span", {
                      class: u(["font-semibold text-sm sm:text-right", d.value ? "text-slate-200" : "text-slate-900"])
                    }, C(p.value), 3)
                  ], 2))), 128))
                ], 2),
                V.value.length > 5 ? (v(), g("button", {
                  key: 0,
                  class: u(["mt-6 flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-xl border font-bold text-sm transition-all hover:shadow-md active:scale-[0.98]", d.value ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"]),
                  onClick: l[1] || (l[1] = (p) => N.value = !N.value)
                }, [
                  ne(C(N.value ? "Hide characteristics" : "Show all characteristics") + " ", 1),
                  (v(), g("svg", {
                    class: u([{ "rotate-180": N.value }, "transition-transform duration-300 ml-2"]),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [...l[32] || (l[32] = [
                    n("path", { d: "M6 9l6 6 6-6" }, null, -1)
                  ])], 2))
                ], 2)) : q("", !0)
              ])
            ], 2),
            n("div", {
              class: u(["px-4 lg:px-0 mt-16 pt-10 border-t", d.value ? "border-slate-800" : "border-slate-200"])
            }, [
              n("h2", {
                class: u(["text-2xl font-bold mb-6 tracking-tight", d.value ? "text-white" : "text-slate-900"])
              }, "Questions and Answers", 2),
              n("div", {
                class: u(["rounded-2xl border overflow-hidden divide-y", d.value ? "border-slate-800 divide-slate-800" : "border-slate-200 divide-slate-100"])
              }, [
                (v(!0), g(M, null, D(I.value, (p, _) => (v(), g("div", { key: _ }, [
                  n("button", {
                    class: u(["w-full py-5 px-6 flex justify-between items-center cursor-pointer group text-left transition-colors", d.value ? "bg-[#0f172a] hover:bg-slate-800" : "bg-white hover:bg-slate-50"]),
                    onClick: (L) => Wt(_)
                  }, [
                    n("span", {
                      class: u(["font-semibold text-base transition-colors group-hover:text-blue-500", d.value ? "text-slate-200" : "text-slate-900"])
                    }, C(p.question), 3),
                    n("div", {
                      class: u(["p-1 rounded-full border transition-all", [
                        p.isOpen ? "rotate-180 bg-blue-500 text-white border-blue-500" : d.value ? "border-slate-700 text-slate-500" : "border-slate-200 text-slate-400"
                      ]])
                    }, [...l[33] || (l[33] = [
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
                  ], 10, zn),
                  Me(n("div", {
                    class: u(["px-6 pb-6 pt-2 text-[15px] leading-relaxed animate-[fadeIn_0.2s_ease-out]", d.value ? "bg-[#0f172a] text-slate-400" : "bg-white text-slate-600"])
                  }, [
                    n("p", null, C(p.answer), 1)
                  ], 2), [
                    [De, p.isOpen]
                  ])
                ]))), 128))
              ], 2)
            ], 2),
            n("div", {
              class: u(["px-4 lg:px-0 mt-16 mb-24 pt-10 border-t", d.value ? "border-slate-800" : "border-slate-200"]),
              id: "reviews"
            }, [
              n("div", $n, [
                n("h2", {
                  class: u(["text-2xl font-bold flex items-center gap-3", d.value ? "text-white" : "text-slate-900"])
                }, [
                  l[34] || (l[34] = ne(" Reviews ", -1)),
                  n("span", {
                    class: u(["text-sm font-bold px-3 py-1 rounded-full", d.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                  }, C(y.value.length), 3)
                ], 2)
              ]),
              T.value ? (v(), g("div", qn, [
                (v(), g(M, null, D(2, (p) => n("div", {
                  key: p,
                  class: u(["h-[150px] rounded-2xl animate-shimmer", d.value ? "bg-slate-800" : "bg-slate-100"])
                }, null, 2)), 64))
              ])) : y.value.length > 0 ? (v(), g("div", Hn, [
                (v(!0), g(M, null, D(y.value, (p, _) => (v(), g("div", {
                  class: u(["p-6 rounded-2xl border transition-all hover:shadow-lg duration-300", d.value ? "bg-slate-800/30 border-slate-700 hover:bg-slate-800" : "bg-white border-slate-100 shadow-sm hover:shadow-md"]),
                  key: _
                }, [
                  n("div", Jn, [
                    n("div", Vn, [
                      n("div", {
                        class: "w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md",
                        style: es(`background:${p.color}`)
                      }, C(p.name ? p.name[0] : "U"), 5),
                      n("div", null, [
                        n("div", {
                          class: u(["font-bold text-sm", d.value ? "text-white" : "text-slate-900"])
                        }, C(p.name), 3),
                        l[35] || (l[35] = n("div", { class: "text-amber-500 text-xs tracking-wide flex" }, "★★★★★", -1))
                      ])
                    ]),
                    n("span", {
                      class: u(["text-xs font-medium opacity-60", d.value ? "text-slate-400" : "text-slate-500"])
                    }, C(p.date), 3)
                  ]),
                  n("div", {
                    class: u(["text-[15px] leading-relaxed mb-4", d.value ? "text-slate-300" : "text-slate-600"])
                  }, C(p.text), 3),
                  n("div", {
                    class: u(["inline-block text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border", d.value ? "bg-slate-800 text-slate-400 border-slate-700" : "bg-slate-50 text-slate-500 border-slate-100"])
                  }, " Var: " + C(x.value) + " • Size: " + C(m.value || "M"), 3)
                ], 2))), 128))
              ])) : (v(), g("div", {
                key: 2,
                class: u(["flex flex-col items-center justify-center py-12 px-4 rounded-3xl border-2 border-dashed", d.value ? "border-slate-800 bg-slate-800/20" : "border-slate-200 bg-slate-50"])
              }, [
                l[36] || (l[36] = n("span", { class: "text-4xl mb-4" }, "💬", -1)),
                n("h4", {
                  class: u(["font-bold text-lg mb-1", d.value ? "text-white" : "text-slate-900"])
                }, "No reviews yet", 2),
                n("p", {
                  class: u(["text-sm text-center max-w-sm mb-6", d.value ? "text-slate-400" : "text-slate-500"])
                }, "Be the first to share your thoughts and help others make a decision!", 2),
                n("button", {
                  class: u(["px-6 py-2.5 rounded-xl font-bold text-sm transition-all", d.value ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white border text-slate-900 shadow-sm hover:bg-slate-50"])
                }, " Write a Review ", 2)
              ], 2))
            ], 2)
          ]),
          n("div", Wn, [
            n("div", {
              class: u(["sticky top-24 p-6 rounded-[32px] border transition-colors duration-300", d.value ? "bg-[#151e32] border-slate-700 ring-1 ring-white/5 shadow-2xl shadow-black/20" : "bg-white border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"])
            }, [
              n("div", Xn, [
                n("div", null, [
                  n("div", Kn, [
                    n("div", Gn, C(K($.value)) + " ₽", 1),
                    X.value > $.value ? (v(), g("span", Yn, C(K(X.value)) + " ₽", 1)) : q("", !0)
                  ]),
                  n("div", {
                    class: u(["mt-3 inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border", d.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    l[37] || (l[37] = n("svg", {
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
                    n("span", null, C(K(de.value)) + " ₽ with Ozon Card", 1)
                  ], 2)
                ])
              ]),
              n("div", {
                class: u(["space-y-5 mb-8 pt-6 border-t", d.value ? "border-slate-700" : "border-slate-100"])
              }, [
                n("div", Zn, [
                  n("div", {
                    class: u(["w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform", d.value ? "bg-slate-800" : "bg-blue-50"])
                  }, "📍", 2),
                  n("div", null, [
                    n("div", {
                      class: u(["font-bold mb-0.5", d.value ? "text-slate-200" : "text-slate-900"])
                    }, "Global Delivery", 2),
                    n("div", {
                      class: u(["text-xs", d.value ? "text-slate-400" : "text-slate-500"])
                    }, "To anywhere in Russia", 2)
                  ])
                ]),
                n("div", Qn, [
                  n("div", {
                    class: u(["w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform", d.value ? "bg-slate-800" : "bg-green-50"])
                  }, "🚚", 2),
                  n("div", null, [
                    n("div", {
                      class: u(["text-s mt-2", d.value ? "text-green-400" : "text-green-600"])
                    }, "Free courier delivery", 2)
                  ])
                ])
              ], 2),
              n("div", eo, [
                te.value > 0 ? (v(), g("div", {
                  key: 0,
                  class: u(["w-full h-[56px] flex items-center justify-between rounded-2xl px-2 border transition-all", d.value ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"])
                }, [
                  n("button", {
                    onClick: l[2] || (l[2] = (p) => re(-1)),
                    disabled: O.value,
                    class: u(["w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50", d.value ? "bg-slate-700 text-white hover:bg-slate-600" : "bg-white text-slate-800 shadow-sm hover:bg-slate-50"])
                  }, [...l[38] || (l[38] = [
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
                  ])], 10, to),
                  n("div", so, [
                    n("span", {
                      class: u(["font-bold text-lg leading-none", d.value ? "text-white" : "text-slate-900"])
                    }, C(te.value), 3),
                    n("span", {
                      class: u(["text-[10px] font-semibold uppercase tracking-wider opacity-60", d.value ? "text-slate-300" : "text-slate-500"])
                    }, "In Cart", 2)
                  ]),
                  n("button", {
                    onClick: l[3] || (l[3] = (p) => re(1)),
                    disabled: O.value,
                    class: u(["w-12 h-12 flex items-center justify-center rounded-xl text-white shadow-sm transition-all active:scale-95 disabled:opacity-50", (d.value, "bg-blue-600 hover:bg-blue-500")])
                  }, [
                    O.value ? (v(), g("svg", no, [...l[39] || (l[39] = [
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
                    ])])) : (v(), g("svg", oo, [...l[40] || (l[40] = [
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
                  ], 10, ro)
                ], 2)) : (v(), g("button", {
                  key: 1,
                  class: "w-full h-[56px] bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] flex items-center justify-center gap-2 text-[15px]",
                  onClick: l[4] || (l[4] = (p) => re(1)),
                  disabled: O.value
                }, [
                  O.value ? (v(), g("svg", lo, [...l[41] || (l[41] = [
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
                  ])])) : (v(), g("span", io, "Add to Cart"))
                ], 8, ao)),
                n("button", {
                  onClick: Ue,
                  disabled: O.value,
                  class: u(["w-full h-[56px] font-bold rounded-2xl transition-all duration-300 border active:scale-[0.98] cursor-pointer disabled:opacity-50", d.value ? "bg-transparent hover:bg-slate-800 text-white border-slate-600 hover:border-slate-500" : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-300"])
                }, " Buy Now ", 10, co)
              ]),
              n("div", {
                class: u(["mt-8 pt-6 border-t flex items-center gap-3", d.value ? "border-slate-700" : "border-slate-100"])
              }, [
                n("div", {
                  class: u(["w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-md text-lg", d.value ? "bg-slate-700" : "bg-slate-900"])
                }, C(a.value.brand ? a.value.brand[0] : "B"), 3),
                n("div", null, [
                  n("div", {
                    class: u(["font-bold text-sm mb-0.5", d.value ? "text-white" : "text-slate-900"])
                  }, C(a.value.brand), 3),
                  n("div", {
                    class: u(["text-xs flex items-center gap-1", d.value ? "text-slate-400" : "text-slate-500"])
                  }, [...l[42] || (l[42] = [
                    n("span", { class: "text-amber-500" }, "★★★★★", -1),
                    ne(" 4.9 • Official Seller ", -1)
                  ])], 2)
                ])
              ], 2)
            ], 2)
          ])
        ]),
        n("div", {
          class: u(["mt-2 pt-1 border-t px-4 lg:px-0", d.value ? "border-slate-800" : "border-slate-200"])
        }, [
          n("div", {
            class: "mt-12 w-full min-h-[250px] custom-widget-scroll",
            onWheel: Yt
          }, [
            E.value ? (v(), g("div", {
              key: 0,
              innerHTML: E.value
            }, null, 8, uo)) : (v(), g("div", fo, [
              n("div", {
                class: u(["w-[200px] h-[300px] rounded-2xl shrink-0", d.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2),
              n("div", {
                class: u(["w-[200px] h-[300px] rounded-2xl shrink-0", d.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2),
              n("div", {
                class: u(["w-[200px] h-[300px] rounded-2xl shrink-0 hidden md:block", d.value ? "bg-slate-800" : "bg-slate-100"])
              }, null, 2)
            ]))
          ], 32)
        ], 2),
        n("div", {
          class: u(["fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t p-4 pb-[max(16px,env(safe-area-inset-bottom))] flex items-center justify-between gap-4 z-50 md:!hidden shadow-[0_-4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300", d.value ? "bg-[#0f172a]/90 border-slate-800" : "bg-white/90 border-slate-200"])
        }, [
          n("div", po, [
            n("span", {
              class: u(["text-xl font-extrabold leading-none tracking-tight", d.value ? "text-white" : "text-slate-900"])
            }, C(K($.value)) + " ₽", 3),
            X.value > $.value ? (v(), g("span", ho, C(K(X.value)), 1)) : q("", !0)
          ]),
          te.value > 0 ? (v(), g("div", {
            key: 0,
            class: u(["flex-1 h-12 flex items-center justify-between rounded-xl px-1 border", d.value ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"])
          }, [
            n("button", {
              onClick: l[5] || (l[5] = (p) => re(-1)),
              disabled: O.value,
              class: u(["w-10 h-10 flex items-center justify-center rounded-lg disabled:opacity-50", d.value ? "bg-slate-700 text-white" : "bg-white text-slate-800 shadow-sm"])
            }, [...l[43] || (l[43] = [
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
            ])], 10, mo),
            n("span", {
              class: u(["font-bold text-[15px]", d.value ? "text-white" : "text-slate-900"])
            }, C(te.value) + " in Cart", 3),
            n("button", {
              onClick: l[6] || (l[6] = (p) => re(1)),
              disabled: O.value,
              class: "w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm disabled:opacity-50"
            }, [
              O.value ? (v(), g("svg", xo, [...l[44] || (l[44] = [
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
              ])])) : (v(), g("svg", vo, [...l[45] || (l[45] = [
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
            ], 8, bo)
          ], 2)) : (v(), g("button", {
            key: 1,
            class: "flex-1 h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base shadow-lg shadow-blue-500/40 active:scale-95 transition-all flex justify-center items-center gap-2 disabled:opacity-50",
            onClick: l[7] || (l[7] = (p) => re(1)),
            disabled: O.value
          }, [
            O.value ? (v(), g("svg", yo, [...l[46] || (l[46] = [
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
            ])])) : (v(), g("span", wo, "Add to Cart"))
          ], 8, go))
        ], 2)
      ])) : (v(), g("div", {
        key: 2,
        class: u(["min-h-[60vh] flex flex-col items-center justify-center font-medium opacity-60", d.value ? "text-slate-400" : "text-slate-500"])
      }, [
        n("div", {
          class: u(["p-4 rounded-full mb-4", d.value ? "bg-slate-800" : "bg-slate-100"])
        }, [...l[47] || (l[47] = [
          ge('<svg class="w-12 h-12 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-d41e64c1><circle cx="12" cy="12" r="10" data-v-d41e64c1></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2" data-v-d41e64c1></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-d41e64c1></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-d41e64c1></line></svg>', 1)
        ])], 2),
        l[48] || (l[48] = n("span", { class: "text-lg" }, "Product Not Found", -1))
      ], 2)),
      k.value ? (v(), g("div", {
        key: 3,
        class: "fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-0 sm:p-4 md:p-6",
        onClick: l[11] || (l[11] = Qt((p) => k.value = !1, ["self"]))
      }, [
        n("div", _o, [
          l[68] || (l[68] = n("div", { class: "w-full flex justify-center pt-4 pb-1 md:hidden" }, [
            n("div", { class: "w-12 h-1.5 bg-gray-300 dark:bg-slate-700 rounded-full" })
          ], -1)),
          n("div", ko, [
            n("div", Eo, [
              n("h2", {
                class: u(["text-xl font-bold", d.value ? "text-white" : "text-gray-900"])
              }, "Size Guide", 2),
              n("button", {
                onClick: l[8] || (l[8] = (p) => k.value = !1),
                class: "p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-gray-200 rounded-full transition-colors"
              }, [...l[49] || (l[49] = [
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
            n("div", So, [
              n("button", {
                onClick: l[9] || (l[9] = (p) => R.value = "chart"),
                class: u(["pb-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-colors", R.value === "chart" ? "border-[#FF3E6C] text-[#FF3E6C]" : "border-transparent text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"])
              }, " Size Chart ", 2),
              n("button", {
                onClick: l[10] || (l[10] = (p) => R.value = "measure"),
                class: u(["pb-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-colors", R.value === "measure" ? "border-[#FF3E6C] text-[#FF3E6C]" : "border-transparent text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"])
              }, " How to Measure ", 2)
            ])
          ]),
          n("div", Co, [
            Me(n("div", Ro, [
              ae.value ? (v(), g("div", Oo, [
                n("img", {
                  src: ae.value,
                  class: "max-w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
                }, null, 8, To)
              ])) : (v(), g("div", Ao, [
                n("div", No, [
                  n("span", {
                    class: u(["text-xs font-medium", d.value ? "text-slate-400" : "text-gray-500"])
                  }, [...l[50] || (l[50] = [
                    ne(" Measurements in ", -1),
                    n("span", { class: "font-semibold text-[#FF3E6C]" }, "Inches", -1)
                  ])], 2)
                ]),
                n("div", Fo, [
                  n("table", Bo, [
                    n("thead", null, [
                      n("tr", {
                        class: u(d.value ? "border-b border-slate-700" : "border-b-2 border-gray-100")
                      }, [
                        n("th", {
                          class: u(["py-4 px-4 font-medium text-xs text-left", d.value ? "text-slate-400" : "text-gray-500"])
                        }, "SIZE", 2),
                        n("th", {
                          class: u(["py-4 px-4 font-medium text-xs", d.value ? "text-slate-400" : "text-gray-500"])
                        }, "CHEST", 2),
                        n("th", {
                          class: u(["py-4 px-4 font-medium text-xs", d.value ? "text-slate-400" : "text-gray-500"])
                        }, "LENGTH", 2),
                        n("th", {
                          class: u(["py-4 px-4 font-medium text-xs", d.value ? "text-slate-400" : "text-gray-500"])
                        }, "SHOULDER", 2)
                      ], 2)
                    ]),
                    n("tbody", {
                      class: u(d.value ? "text-slate-300" : "text-gray-700")
                    }, [
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", d.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", d.value ? "text-white" : "text-black"])
                        }, "S", 2),
                        l[51] || (l[51] = n("td", { class: "py-4 px-4" }, "38.0", -1)),
                        l[52] || (l[52] = n("td", { class: "py-4 px-4" }, "27.0", -1)),
                        l[53] || (l[53] = n("td", { class: "py-4 px-4" }, "16.0", -1))
                      ], 2),
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", d.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", d.value ? "text-white" : "text-black"])
                        }, "M", 2),
                        l[54] || (l[54] = n("td", { class: "py-4 px-4" }, "40.0", -1)),
                        l[55] || (l[55] = n("td", { class: "py-4 px-4" }, "27.5", -1)),
                        l[56] || (l[56] = n("td", { class: "py-4 px-4" }, "16.5", -1))
                      ], 2),
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", d.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", d.value ? "text-white" : "text-black"])
                        }, "L", 2),
                        l[57] || (l[57] = n("td", { class: "py-4 px-4" }, "42.0", -1)),
                        l[58] || (l[58] = n("td", { class: "py-4 px-4" }, "28.0", -1)),
                        l[59] || (l[59] = n("td", { class: "py-4 px-4" }, "17.0", -1))
                      ], 2),
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", d.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", d.value ? "text-white" : "text-black"])
                        }, "XL", 2),
                        l[60] || (l[60] = n("td", { class: "py-4 px-4" }, "44.0", -1)),
                        l[61] || (l[61] = n("td", { class: "py-4 px-4" }, "28.5", -1)),
                        l[62] || (l[62] = n("td", { class: "py-4 px-4" }, "17.5", -1))
                      ], 2),
                      n("tr", {
                        class: u(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", d.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        n("td", {
                          class: u(["py-4 px-4 text-left font-semibold", d.value ? "text-white" : "text-black"])
                        }, "XXL", 2),
                        l[63] || (l[63] = n("td", { class: "py-4 px-4" }, "46.0", -1)),
                        l[64] || (l[64] = n("td", { class: "py-4 px-4" }, "29.0", -1)),
                        l[65] || (l[65] = n("td", { class: "py-4 px-4" }, "18.0", -1))
                      ], 2)
                    ], 2)
                  ])
                ]),
                n("div", {
                  class: u(["mt-6 text-xs font-normal opacity-70 text-left md:text-center pb-4 md:pb-0", d.value ? "text-slate-400" : "text-gray-500"])
                }, " * Garment measurements may vary by ±0.5 inches depending on style and fit. ", 2)
              ]))
            ], 512), [
              [De, R.value === "chart"]
            ]),
            Me(n("div", Lo, [
              n("div", Po, [
                n("div", jo, [
                  (v(), g("svg", Io, [
                    n("path", {
                      d: "M40,50 L80,20 L120,20 L160,50 L180,100 L140,120 L130,90 L130,230 L70,230 L70,90 L60,120 L20,100 Z",
                      stroke: d.value ? "#475569" : "#e2e8f0",
                      "stroke-width": "2",
                      "stroke-linejoin": "round"
                    }, null, 8, Uo),
                    n("path", {
                      d: "M80,20 C80,20 100,40 120,20",
                      stroke: d.value ? "#475569" : "#e2e8f0",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    }, null, 8, Mo),
                    l[66] || (l[66] = ge('<line x1="60" y1="95" x2="140" y2="95" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-d41e64c1></line><circle cx="60" cy="95" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><circle cx="140" cy="95" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><rect x="92" y="87" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-d41e64c1></rect><text x="100" y="99" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-d41e64c1>1</text><line x1="90" y1="35" x2="90" y2="230" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-d41e64c1></line><circle cx="90" cy="35" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><circle cx="90" cy="230" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><rect x="82" y="125" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-d41e64c1></rect><text x="90" y="137" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-d41e64c1>2</text><line x1="45" y1="45" x2="155" y2="45" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-d41e64c1></line><circle cx="45" cy="45" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><circle cx="155" cy="45" r="2.5" fill="#FF3E6C" stroke="none" data-v-d41e64c1></circle><rect x="92" y="37" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-d41e64c1></rect><text x="100" y="49" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-d41e64c1>3</text>', 15))
                  ]))
                ]),
                n("div", Do, [
                  n("div", zo, [
                    l[67] || (l[67] = n("span", { class: "absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold bg-[#FF3E6C] text-white" }, "1", -1)),
                    n("h4", {
                      class: u(["font-semibold text-sm mb-1", d.value ? "text-white" : "text-black"])
                    }, "Chest", 2),
                    n("p", {
                      class: u(["text-sm leading-relaxed", d.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure around the fullest part of your chest, keeping the measuring tape horizontal and comfortably loose.", 2)
                  ]),
                  n("div", $o, [
                    n("span", {
                      class: u(["absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold", d.value ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"])
                    }, "2", 2),
                    n("h4", {
                      class: u(["font-semibold text-sm mb-1", d.value ? "text-white" : "text-black"])
                    }, "Front Length", 2),
                    n("p", {
                      class: u(["text-sm leading-relaxed", d.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure from the highest point of the shoulder (where the collar meets the shoulder) straight down to the hemline.", 2)
                  ]),
                  n("div", qo, [
                    n("span", {
                      class: u(["absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold", d.value ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"])
                    }, "3", 2),
                    n("h4", {
                      class: u(["font-semibold text-sm mb-1", d.value ? "text-white" : "text-black"])
                    }, "Shoulder", 2),
                    n("p", {
                      class: u(["text-sm leading-relaxed", d.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure straight across the back from the edge of one shoulder seam to the edge of the other shoulder seam.", 2)
                  ])
                ])
              ])
            ], 512), [
              [De, R.value === "measure"]
            ])
          ])
        ])
      ])) : q("", !0)
    ], 10, Ir));
  }
}), Vo = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [r, o] of e)
    s[r] = o;
  return s;
}, Wo = /* @__PURE__ */ Vo(Jo, [["__scopeId", "data-v-d41e64c1"]]), Xo = /* @__PURE__ */ _t({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(t) {
    return (e, s) => (v(), ts(Wo, {
      _p: t._p,
      _$p: t._$p,
      _$cb: t._$cb
    }, null, 8, ["_p", "_$p", "_$cb"]));
  }
}), ba = async (t) => ({
  set: async (e, s) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const o = ss(Xo, {
      _p: t,
      _$p: e,
      _$cb: s
    }), a = t.f.name("vue-root"), i = {
      r: `<div id="${a}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          s?.change({ _$p: e });
        }
      }
    };
    return setTimeout(() => {
      const f = document.getElementById(a);
      f ? o.mount(f) : console.warn(`[Hydrator] Target element #${a} not found.`);
    }, 0), i;
  }
});
export {
  ba as hydrator,
  ba as index
};
