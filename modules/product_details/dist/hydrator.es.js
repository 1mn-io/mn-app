import { d as ut, r as V, c as M, o as Lt, w as jt, a as y, b as w, e as a, f as z, n as d, g as be, h as se, F as j, i as U, t as S, j as Ut, k as Dt, v as Mt, l as zt, m as It, p as $t } from "./runtime-dom.esm-bundler-DY68UAjC.js";
function dt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: qt } = Object.prototype, { getPrototypeOf: $e } = Object, { iterator: Ae, toStringTag: ft } = Symbol, Ne = /* @__PURE__ */ ((e) => (t) => {
  const s = qt.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), X = (e) => (e = e.toLowerCase(), (t) => Ne(t) === e), Pe = (e) => (t) => typeof t === e, { isArray: de } = Array, ue = Pe("undefined");
function ge(e) {
  return e !== null && !ue(e) && e.constructor !== null && !ue(e.constructor) && I(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pt = X("ArrayBuffer");
function Ht(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pt(e.buffer), t;
}
const Jt = Pe("string"), I = Pe("function"), ht = Pe("number"), ve = (e) => e !== null && typeof e == "object", Vt = (e) => e === !0 || e === !1, Re = (e) => {
  if (Ne(e) !== "object")
    return !1;
  const t = $e(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ft in e) && !(Ae in e);
}, Wt = (e) => {
  if (!ve(e) || ge(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Xt = X("Date"), Kt = X("File"), Gt = X("Blob"), Yt = X("FileList"), Zt = (e) => ve(e) && I(e.pipe), Qt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || I(e.append) && ((t = Ne(e)) === "formdata" || // detect form-data instance
  t === "object" && I(e.toString) && e.toString() === "[object FormData]"));
}, es = X("URLSearchParams"), [ts, ss, rs, ns] = ["ReadableStream", "Request", "Response", "Headers"].map(X), os = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function we(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), de(e))
    for (r = 0, n = e.length; r < n; r++)
      t.call(null, e[r], r, e);
  else {
    if (ge(e))
      return;
    const o = s ? Object.getOwnPropertyNames(e) : Object.keys(e), l = o.length;
    let u;
    for (r = 0; r < l; r++)
      u = o[r], t.call(null, e[u], u, e);
  }
}
function mt(e, t) {
  if (ge(e))
    return null;
  t = t.toLowerCase();
  const s = Object.keys(e);
  let r = s.length, n;
  for (; r-- > 0; )
    if (n = s[r], t === n.toLowerCase())
      return n;
  return null;
}
const ne = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, bt = (e) => !ue(e) && e !== ne;
function De() {
  const { caseless: e, skipUndefined: t } = bt(this) && this || {}, s = {}, r = (n, o) => {
    const l = e && mt(s, o) || o;
    Re(s[l]) && Re(n) ? s[l] = De(s[l], n) : Re(n) ? s[l] = De({}, n) : de(n) ? s[l] = n.slice() : (!t || !ue(n)) && (s[l] = n);
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && we(arguments[n], r);
  return s;
}
const as = (e, t, s, { allOwnKeys: r } = {}) => (we(t, (n, o) => {
  s && I(n) ? e[o] = dt(n, s) : e[o] = n;
}, { allOwnKeys: r }), e), ls = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), is = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, cs = (e, t, s, r) => {
  let n, o, l;
  const u = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), o = n.length; o-- > 0; )
      l = n[o], (!r || r(l, e, t)) && !u[l] && (t[l] = e[l], u[l] = !0);
    e = s !== !1 && $e(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, us = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, ds = (e) => {
  if (!e) return null;
  if (de(e)) return e;
  let t = e.length;
  if (!ht(t)) return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, fs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && $e(Uint8Array)), ps = (e, t) => {
  const r = (e && e[Ae]).call(e);
  let n;
  for (; (n = r.next()) && !n.done; ) {
    const o = n.value;
    t.call(e, o[0], o[1]);
  }
}, hs = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, ms = X("HTMLFormElement"), bs = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, r, n) {
    return r.toUpperCase() + n;
  }
), Xe = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), xs = X("RegExp"), xt = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  we(s, (n, o) => {
    let l;
    (l = t(n, o, e)) !== !1 && (r[o] = l || n);
  }), Object.defineProperties(e, r);
}, gs = (e) => {
  xt(e, (t, s) => {
    if (I(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const r = e[s];
    if (I(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, vs = (e, t) => {
  const s = {}, r = (n) => {
    n.forEach((o) => {
      s[o] = !0;
    });
  };
  return de(e) ? r(e) : r(String(e).split(t)), s;
}, ws = () => {
}, ys = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function _s(e) {
  return !!(e && I(e.append) && e[ft] === "FormData" && e[Ae]);
}
const ks = (e) => {
  const t = new Array(10), s = (r, n) => {
    if (ve(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (ge(r))
        return r;
      if (!("toJSON" in r)) {
        t[n] = r;
        const o = de(r) ? [] : {};
        return we(r, (l, u) => {
          const x = s(l, n + 1);
          !ue(x) && (o[u] = x);
        }), t[n] = void 0, o;
      }
    }
    return r;
  };
  return s(e, 0);
}, Ss = X("AsyncFunction"), Es = (e) => e && (ve(e) || I(e)) && I(e.then) && I(e.catch), gt = ((e, t) => e ? setImmediate : t ? ((s, r) => (ne.addEventListener("message", ({ source: n, data: o }) => {
  n === ne && o === s && r.length && r.shift()();
}, !1), (n) => {
  r.push(n), ne.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  I(ne.postMessage)
), Rs = typeof queueMicrotask < "u" ? queueMicrotask.bind(ne) : typeof process < "u" && process.nextTick || gt, Os = (e) => e != null && I(e[Ae]), i = {
  isArray: de,
  isArrayBuffer: pt,
  isBuffer: ge,
  isFormData: Qt,
  isArrayBufferView: Ht,
  isString: Jt,
  isNumber: ht,
  isBoolean: Vt,
  isObject: ve,
  isPlainObject: Re,
  isEmptyObject: Wt,
  isReadableStream: ts,
  isRequest: ss,
  isResponse: rs,
  isHeaders: ns,
  isUndefined: ue,
  isDate: Xt,
  isFile: Kt,
  isBlob: Gt,
  isRegExp: xs,
  isFunction: I,
  isStream: Zt,
  isURLSearchParams: es,
  isTypedArray: fs,
  isFileList: Yt,
  forEach: we,
  merge: De,
  extend: as,
  trim: os,
  stripBOM: ls,
  inherits: is,
  toFlatObject: cs,
  kindOf: Ne,
  kindOfTest: X,
  endsWith: us,
  toArray: ds,
  forEachEntry: ps,
  matchAll: hs,
  isHTMLForm: ms,
  hasOwnProperty: Xe,
  hasOwnProp: Xe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xt,
  freezeMethods: gs,
  toObjectSet: vs,
  toCamelCase: bs,
  noop: ws,
  toFiniteNumber: ys,
  findKey: mt,
  global: ne,
  isContextDefined: bt,
  isSpecCompliantForm: _s,
  toJSONObject: ks,
  isAsyncFn: Ss,
  isThenable: Es,
  setImmediate: gt,
  asap: Rs,
  isIterable: Os
};
function E(e, t, s, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), s && (this.config = s), r && (this.request = r), n && (this.response = n, this.status = n.status ? n.status : null);
}
i.inherits(E, Error, {
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
      config: i.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const vt = E.prototype, wt = {};
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
  wt[e] = { value: e };
});
Object.defineProperties(E, wt);
Object.defineProperty(vt, "isAxiosError", { value: !0 });
E.from = (e, t, s, r, n, o) => {
  const l = Object.create(vt);
  i.toFlatObject(e, l, function(f) {
    return f !== Error.prototype;
  }, (p) => p !== "isAxiosError");
  const u = e && e.message ? e.message : "Error", x = t == null && e ? e.code : t;
  return E.call(l, u, x, s, r, n), e && l.cause == null && Object.defineProperty(l, "cause", { value: e, configurable: !0 }), l.name = e && e.name || "Error", o && Object.assign(l, o), l;
};
const Cs = null;
function Me(e) {
  return i.isPlainObject(e) || i.isArray(e);
}
function yt(e) {
  return i.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ke(e, t, s) {
  return e ? e.concat(t).map(function(n, o) {
    return n = yt(n), !s && o ? "[" + n + "]" : n;
  }).join(s ? "." : "") : t;
}
function Ts(e) {
  return i.isArray(e) && !e.some(Me);
}
const As = i.toFlatObject(i, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Be(e, t, s) {
  if (!i.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = i.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, g) {
    return !i.isUndefined(g[_]);
  });
  const r = s.metaTokens, n = s.visitor || f, o = s.dots, l = s.indexes, x = (s.Blob || typeof Blob < "u" && Blob) && i.isSpecCompliantForm(t);
  if (!i.isFunction(n))
    throw new TypeError("visitor must be a function");
  function p(h) {
    if (h === null) return "";
    if (i.isDate(h))
      return h.toISOString();
    if (i.isBoolean(h))
      return h.toString();
    if (!x && i.isBlob(h))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return i.isArrayBuffer(h) || i.isTypedArray(h) ? x && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, _, g) {
    let c = h;
    if (h && !g && typeof h == "object") {
      if (i.endsWith(_, "{}"))
        _ = r ? _ : _.slice(0, -2), h = JSON.stringify(h);
      else if (i.isArray(h) && Ts(h) || (i.isFileList(h) || i.endsWith(_, "[]")) && (c = i.toArray(h)))
        return _ = yt(_), c.forEach(function(C, N) {
          !(i.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? Ke([_], N, o) : l === null ? _ : _ + "[]",
            p(C)
          );
        }), !1;
    }
    return Me(h) ? !0 : (t.append(Ke(g, _, o), p(h)), !1);
  }
  const v = [], O = Object.assign(As, {
    defaultVisitor: f,
    convertValue: p,
    isVisitable: Me
  });
  function T(h, _) {
    if (!i.isUndefined(h)) {
      if (v.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      v.push(h), i.forEach(h, function(c, P) {
        (!(i.isUndefined(c) || c === null) && n.call(
          t,
          c,
          i.isString(P) ? P.trim() : P,
          _,
          O
        )) === !0 && T(c, _ ? _.concat(P) : [P]);
      }), v.pop();
    }
  }
  if (!i.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function Ge(e) {
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
function qe(e, t) {
  this._pairs = [], e && Be(e, this, t);
}
const _t = qe.prototype;
_t.append = function(t, s) {
  this._pairs.push([t, s]);
};
_t.toString = function(t) {
  const s = t ? function(r) {
    return t.call(this, r, Ge);
  } : Ge;
  return this._pairs.map(function(n) {
    return s(n[0]) + "=" + s(n[1]);
  }, "").join("&");
};
function Ns(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function kt(e, t, s) {
  if (!t)
    return e;
  const r = s && s.encode || Ns;
  i.isFunction(s) && (s = {
    serialize: s
  });
  const n = s && s.serialize;
  let o;
  if (n ? o = n(t, s) : o = i.isURLSearchParams(t) ? t.toString() : new qe(t, s).toString(r), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ye {
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
    i.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const St = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ps = typeof URLSearchParams < "u" ? URLSearchParams : qe, Bs = typeof FormData < "u" ? FormData : null, Fs = typeof Blob < "u" ? Blob : null, Ls = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ps,
    FormData: Bs,
    Blob: Fs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, He = typeof window < "u" && typeof document < "u", ze = typeof navigator == "object" && navigator || void 0, js = He && (!ze || ["ReactNative", "NativeScript", "NS"].indexOf(ze.product) < 0), Us = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ds = He && window.location.href || "http://localhost", Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: He,
  hasStandardBrowserEnv: js,
  hasStandardBrowserWebWorkerEnv: Us,
  navigator: ze,
  origin: Ds
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...Ms,
  ...Ls
};
function zs(e, t) {
  return Be(e, new L.classes.URLSearchParams(), {
    visitor: function(s, r, n, o) {
      return L.isNode && i.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Is(e) {
  return i.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $s(e) {
  const t = {}, s = Object.keys(e);
  let r;
  const n = s.length;
  let o;
  for (r = 0; r < n; r++)
    o = s[r], t[o] = e[o];
  return t;
}
function Et(e) {
  function t(s, r, n, o) {
    let l = s[o++];
    if (l === "__proto__") return !0;
    const u = Number.isFinite(+l), x = o >= s.length;
    return l = !l && i.isArray(n) ? n.length : l, x ? (i.hasOwnProp(n, l) ? n[l] = [n[l], r] : n[l] = r, !u) : ((!n[l] || !i.isObject(n[l])) && (n[l] = []), t(s, r, n[l], o) && i.isArray(n[l]) && (n[l] = $s(n[l])), !u);
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const s = {};
    return i.forEachEntry(e, (r, n) => {
      t(Is(r), n, s, 0);
    }), s;
  }
  return null;
}
function qs(e, t, s) {
  if (i.isString(e))
    try {
      return (t || JSON.parse)(e), i.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (s || JSON.stringify)(e);
}
const ye = {
  transitional: St,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, s) {
    const r = s.getContentType() || "", n = r.indexOf("application/json") > -1, o = i.isObject(t);
    if (o && i.isHTMLForm(t) && (t = new FormData(t)), i.isFormData(t))
      return n ? JSON.stringify(Et(t)) : t;
    if (i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t) || i.isReadableStream(t))
      return t;
    if (i.isArrayBufferView(t))
      return t.buffer;
    if (i.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return zs(t, this.formSerializer).toString();
      if ((u = i.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const x = this.env && this.env.FormData;
        return Be(
          u ? { "files[]": t } : t,
          x && new x(),
          this.formSerializer
        );
      }
    }
    return o || n ? (s.setContentType("application/json", !1), qs(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = this.transitional || ye.transitional, r = s && s.forcedJSONParsing, n = this.responseType === "json";
    if (i.isResponse(t) || i.isReadableStream(t))
      return t;
    if (t && i.isString(t) && (r && !this.responseType || n)) {
      const l = !(s && s.silentJSONParsing) && n;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (u) {
        if (l)
          throw u.name === "SyntaxError" ? E.from(u, E.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
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
i.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ye.headers[e] = {};
});
const Hs = i.toObjectSet([
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
]), Js = (e) => {
  const t = {};
  let s, r, n;
  return e && e.split(`
`).forEach(function(l) {
    n = l.indexOf(":"), s = l.substring(0, n).trim().toLowerCase(), r = l.substring(n + 1).trim(), !(!s || t[s] && Hs[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
}, Ze = /* @__PURE__ */ Symbol("internals");
function xe(e) {
  return e && String(e).trim().toLowerCase();
}
function Oe(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(Oe) : String(e);
}
function Vs(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ws = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Le(e, t, s, r, n) {
  if (i.isFunction(r))
    return r.call(this, t, s);
  if (n && (t = s), !!i.isString(t)) {
    if (i.isString(r))
      return t.indexOf(r) !== -1;
    if (i.isRegExp(r))
      return r.test(t);
  }
}
function Xs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function Ks(e, t) {
  const s = i.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + s, {
      value: function(n, o, l) {
        return this[r].call(this, t, n, o, l);
      },
      configurable: !0
    });
  });
}
let $ = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, r) {
    const n = this;
    function o(u, x, p) {
      const f = xe(x);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const v = i.findKey(n, f);
      (!v || n[v] === void 0 || p === !0 || p === void 0 && n[v] !== !1) && (n[v || x] = Oe(u));
    }
    const l = (u, x) => i.forEach(u, (p, f) => o(p, f, x));
    if (i.isPlainObject(t) || t instanceof this.constructor)
      l(t, s);
    else if (i.isString(t) && (t = t.trim()) && !Ws(t))
      l(Js(t), s);
    else if (i.isObject(t) && i.isIterable(t)) {
      let u = {}, x, p;
      for (const f of t) {
        if (!i.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        u[p = f[0]] = (x = u[p]) ? i.isArray(x) ? [...x, f[1]] : [x, f[1]] : f[1];
      }
      l(u, s);
    } else
      t != null && o(s, t, r);
    return this;
  }
  get(t, s) {
    if (t = xe(t), t) {
      const r = i.findKey(this, t);
      if (r) {
        const n = this[r];
        if (!s)
          return n;
        if (s === !0)
          return Vs(n);
        if (i.isFunction(s))
          return s.call(this, n, r);
        if (i.isRegExp(s))
          return s.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = xe(t), t) {
      const r = i.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!s || Le(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let n = !1;
    function o(l) {
      if (l = xe(l), l) {
        const u = i.findKey(r, l);
        u && (!s || Le(r, r[u], u, s)) && (delete r[u], n = !0);
      }
    }
    return i.isArray(t) ? t.forEach(o) : o(t), n;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, n = !1;
    for (; r--; ) {
      const o = s[r];
      (!t || Le(this, this[o], o, t, !0)) && (delete this[o], n = !0);
    }
    return n;
  }
  normalize(t) {
    const s = this, r = {};
    return i.forEach(this, (n, o) => {
      const l = i.findKey(r, o);
      if (l) {
        s[l] = Oe(n), delete s[o];
        return;
      }
      const u = t ? Xs(o) : String(o).trim();
      u !== o && delete s[o], s[u] = Oe(n), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return i.forEach(this, (r, n) => {
      r != null && r !== !1 && (s[n] = t && i.isArray(r) ? r.join(", ") : r);
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
    return s.forEach((n) => r.set(n)), r;
  }
  static accessor(t) {
    const r = (this[Ze] = this[Ze] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function o(l) {
      const u = xe(l);
      r[u] || (Ks(n, l), r[u] = !0);
    }
    return i.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
$.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
i.reduceDescriptors($.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[s] = r;
    }
  };
});
i.freezeMethods($);
function je(e, t) {
  const s = this || ye, r = t || s, n = $.from(r.headers);
  let o = r.data;
  return i.forEach(e, function(u) {
    o = u.call(s, o, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), o;
}
function Rt(e) {
  return !!(e && e.__CANCEL__);
}
function fe(e, t, s) {
  E.call(this, e ?? "canceled", E.ERR_CANCELED, t, s), this.name = "CanceledError";
}
i.inherits(fe, E, {
  __CANCEL__: !0
});
function Ot(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new E(
    "Request failed with status code " + s.status,
    [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function Gs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ys(e, t) {
  e = e || 10;
  const s = new Array(e), r = new Array(e);
  let n = 0, o = 0, l;
  return t = t !== void 0 ? t : 1e3, function(x) {
    const p = Date.now(), f = r[o];
    l || (l = p), s[n] = x, r[n] = p;
    let v = o, O = 0;
    for (; v !== n; )
      O += s[v++], v = v % e;
    if (n = (n + 1) % e, n === o && (o = (o + 1) % e), p - l < t)
      return;
    const T = f && p - f;
    return T ? Math.round(O * 1e3 / T) : void 0;
  };
}
function Zs(e, t) {
  let s = 0, r = 1e3 / t, n, o;
  const l = (p, f = Date.now()) => {
    s = f, n = null, o && (clearTimeout(o), o = null), e(...p);
  };
  return [(...p) => {
    const f = Date.now(), v = f - s;
    v >= r ? l(p, f) : (n = p, o || (o = setTimeout(() => {
      o = null, l(n);
    }, r - v)));
  }, () => n && l(n)];
}
const Te = (e, t, s = 3) => {
  let r = 0;
  const n = Ys(50, 250);
  return Zs((o) => {
    const l = o.loaded, u = o.lengthComputable ? o.total : void 0, x = l - r, p = n(x), f = l <= u;
    r = l;
    const v = {
      loaded: l,
      total: u,
      progress: u ? l / u : void 0,
      bytes: x,
      rate: p || void 0,
      estimated: p && u && f ? (u - l) / p : void 0,
      event: o,
      lengthComputable: u != null,
      [t ? "download" : "upload"]: !0
    };
    e(v);
  }, s);
}, Qe = (e, t) => {
  const s = e != null;
  return [(r) => t[0]({
    lengthComputable: s,
    total: e,
    loaded: r
  }), t[1]];
}, et = (e) => (...t) => i.asap(() => e(...t)), Qs = L.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (s) => (s = new URL(s, L.origin), e.protocol === s.protocol && e.host === s.host && (t || e.port === s.port)))(
  new URL(L.origin),
  L.navigator && /(msie|trident)/i.test(L.navigator.userAgent)
) : () => !0, er = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, s, r, n, o, l) {
      if (typeof document > "u") return;
      const u = [`${e}=${encodeURIComponent(t)}`];
      i.isNumber(s) && u.push(`expires=${new Date(s).toUTCString()}`), i.isString(r) && u.push(`path=${r}`), i.isString(n) && u.push(`domain=${n}`), o === !0 && u.push("secure"), i.isString(l) && u.push(`SameSite=${l}`), document.cookie = u.join("; ");
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
function tr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ct(e, t, s) {
  let r = !tr(t);
  return e && (r || s == !1) ? sr(e, t) : t;
}
const tt = (e) => e instanceof $ ? { ...e } : e;
function ae(e, t) {
  t = t || {};
  const s = {};
  function r(p, f, v, O) {
    return i.isPlainObject(p) && i.isPlainObject(f) ? i.merge.call({ caseless: O }, p, f) : i.isPlainObject(f) ? i.merge({}, f) : i.isArray(f) ? f.slice() : f;
  }
  function n(p, f, v, O) {
    if (i.isUndefined(f)) {
      if (!i.isUndefined(p))
        return r(void 0, p, v, O);
    } else return r(p, f, v, O);
  }
  function o(p, f) {
    if (!i.isUndefined(f))
      return r(void 0, f);
  }
  function l(p, f) {
    if (i.isUndefined(f)) {
      if (!i.isUndefined(p))
        return r(void 0, p);
    } else return r(void 0, f);
  }
  function u(p, f, v) {
    if (v in t)
      return r(p, f);
    if (v in e)
      return r(void 0, p);
  }
  const x = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (p, f, v) => n(tt(p), tt(f), v, !0)
  };
  return i.forEach(Object.keys({ ...e, ...t }), function(f) {
    const v = x[f] || n, O = v(e[f], t[f], f);
    i.isUndefined(O) && v !== u || (s[f] = O);
  }), s;
}
const Tt = (e) => {
  const t = ae({}, e);
  let { data: s, withXSRFToken: r, xsrfHeaderName: n, xsrfCookieName: o, headers: l, auth: u } = t;
  if (t.headers = l = $.from(l), t.url = kt(Ct(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), u && l.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  ), i.isFormData(s)) {
    if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if (i.isFunction(s.getHeaders)) {
      const x = s.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(x).forEach(([f, v]) => {
        p.includes(f.toLowerCase()) && l.set(f, v);
      });
    }
  }
  if (L.hasStandardBrowserEnv && (r && i.isFunction(r) && (r = r(t)), r || r !== !1 && Qs(t.url))) {
    const x = n && o && er.read(o);
    x && l.set(n, x);
  }
  return t;
}, rr = typeof XMLHttpRequest < "u", nr = rr && function(e) {
  return new Promise(function(s, r) {
    const n = Tt(e);
    let o = n.data;
    const l = $.from(n.headers).normalize();
    let { responseType: u, onUploadProgress: x, onDownloadProgress: p } = n, f, v, O, T, h;
    function _() {
      T && T(), h && h(), n.cancelToken && n.cancelToken.unsubscribe(f), n.signal && n.signal.removeEventListener("abort", f);
    }
    let g = new XMLHttpRequest();
    g.open(n.method.toUpperCase(), n.url, !0), g.timeout = n.timeout;
    function c() {
      if (!g)
        return;
      const C = $.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), B = {
        data: !u || u === "text" || u === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: C,
        config: e,
        request: g
      };
      Ot(function(F) {
        s(F), _();
      }, function(F) {
        r(F), _();
      }, B), g = null;
    }
    "onloadend" in g ? g.onloadend = c : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(c);
    }, g.onabort = function() {
      g && (r(new E("Request aborted", E.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(N) {
      const B = N && N.message ? N.message : "Network Error", W = new E(B, E.ERR_NETWORK, e, g);
      W.event = N || null, r(W), g = null;
    }, g.ontimeout = function() {
      let N = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const B = n.transitional || St;
      n.timeoutErrorMessage && (N = n.timeoutErrorMessage), r(new E(
        N,
        B.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
        e,
        g
      )), g = null;
    }, o === void 0 && l.setContentType(null), "setRequestHeader" in g && i.forEach(l.toJSON(), function(N, B) {
      g.setRequestHeader(B, N);
    }), i.isUndefined(n.withCredentials) || (g.withCredentials = !!n.withCredentials), u && u !== "json" && (g.responseType = n.responseType), p && ([O, h] = Te(p, !0), g.addEventListener("progress", O)), x && g.upload && ([v, T] = Te(x), g.upload.addEventListener("progress", v), g.upload.addEventListener("loadend", T)), (n.cancelToken || n.signal) && (f = (C) => {
      g && (r(!C || C.type ? new fe(null, e, g) : C), g.abort(), g = null);
    }, n.cancelToken && n.cancelToken.subscribe(f), n.signal && (n.signal.aborted ? f() : n.signal.addEventListener("abort", f)));
    const P = Gs(n.url);
    if (P && L.protocols.indexOf(P) === -1) {
      r(new E("Unsupported protocol " + P + ":", E.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(o || null);
  });
}, or = (e, t) => {
  const { length: s } = e = e ? e.filter(Boolean) : [];
  if (t || s) {
    let r = new AbortController(), n;
    const o = function(p) {
      if (!n) {
        n = !0, u();
        const f = p instanceof Error ? p : this.reason;
        r.abort(f instanceof E ? f : new fe(f instanceof Error ? f.message : f));
      }
    };
    let l = t && setTimeout(() => {
      l = null, o(new E(`timeout ${t} of ms exceeded`, E.ETIMEDOUT));
    }, t);
    const u = () => {
      e && (l && clearTimeout(l), l = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(o) : p.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", o));
    const { signal: x } = r;
    return x.unsubscribe = () => i.asap(u), x;
  }
}, ar = function* (e, t) {
  let s = e.byteLength;
  if (s < t) {
    yield e;
    return;
  }
  let r = 0, n;
  for (; r < s; )
    n = r + t, yield e.slice(r, n), r = n;
}, lr = async function* (e, t) {
  for await (const s of ir(e))
    yield* ar(s, t);
}, ir = async function* (e) {
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
}, st = (e, t, s, r) => {
  const n = lr(e, t);
  let o = 0, l, u = (x) => {
    l || (l = !0, r && r(x));
  };
  return new ReadableStream({
    async pull(x) {
      try {
        const { done: p, value: f } = await n.next();
        if (p) {
          u(), x.close();
          return;
        }
        let v = f.byteLength;
        if (s) {
          let O = o += v;
          s(O);
        }
        x.enqueue(new Uint8Array(f));
      } catch (p) {
        throw u(p), p;
      }
    },
    cancel(x) {
      return u(x), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, rt = 64 * 1024, { isFunction: Ee } = i, cr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(i.global), {
  ReadableStream: nt,
  TextEncoder: ot
} = i.global, at = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ur = (e) => {
  e = i.merge.call({
    skipUndefined: !0
  }, cr, e);
  const { fetch: t, Request: s, Response: r } = e, n = t ? Ee(t) : typeof fetch == "function", o = Ee(s), l = Ee(r);
  if (!n)
    return !1;
  const u = n && Ee(nt), x = n && (typeof ot == "function" ? /* @__PURE__ */ ((h) => (_) => h.encode(_))(new ot()) : async (h) => new Uint8Array(await new s(h).arrayBuffer())), p = o && u && at(() => {
    let h = !1;
    const _ = new s(L.origin, {
      body: new nt(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !_;
  }), f = l && u && at(() => i.isReadableStream(new r("").body)), v = {
    stream: f && ((h) => h.body)
  };
  n && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !v[h] && (v[h] = (_, g) => {
      let c = _ && _[h];
      if (c)
        return c.call(_);
      throw new E(`Response type '${h}' is not supported`, E.ERR_NOT_SUPPORT, g);
    });
  });
  const O = async (h) => {
    if (h == null)
      return 0;
    if (i.isBlob(h))
      return h.size;
    if (i.isSpecCompliantForm(h))
      return (await new s(L.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (i.isArrayBufferView(h) || i.isArrayBuffer(h))
      return h.byteLength;
    if (i.isURLSearchParams(h) && (h = h + ""), i.isString(h))
      return (await x(h)).byteLength;
  }, T = async (h, _) => {
    const g = i.toFiniteNumber(h.getContentLength());
    return g ?? O(_);
  };
  return async (h) => {
    let {
      url: _,
      method: g,
      data: c,
      signal: P,
      cancelToken: C,
      timeout: N,
      onDownloadProgress: B,
      onUploadProgress: W,
      responseType: F,
      headers: q,
      withCredentials: D = "same-origin",
      fetchOptions: pe
    } = Tt(h), re = t || fetch;
    F = F ? (F + "").toLowerCase() : "text";
    let le = or([P, C && C.toAbortSignal()], N), K = null;
    const Q = le && le.unsubscribe && (() => {
      le.unsubscribe();
    });
    let H;
    try {
      if (W && p && g !== "get" && g !== "head" && (H = await T(q, c)) !== 0) {
        let Y = new s(_, {
          method: "POST",
          body: c,
          duplex: "half"
        }), ee;
        if (i.isFormData(c) && (ee = Y.headers.get("content-type")) && q.setContentType(ee), Y.body) {
          const [ie, ce] = Qe(
            H,
            Te(et(W))
          );
          c = st(Y.body, rt, ie, ce);
        }
      }
      i.isString(D) || (D = D ? "include" : "omit");
      const J = o && "credentials" in s.prototype, he = {
        ...pe,
        signal: le,
        method: g.toUpperCase(),
        headers: q.normalize().toJSON(),
        body: c,
        duplex: "half",
        credentials: J ? D : void 0
      };
      K = o && new s(_, he);
      let G = await (o ? re(K, pe) : re(_, he));
      const _e = f && (F === "stream" || F === "response");
      if (f && (B || _e && Q)) {
        const Y = {};
        ["status", "statusText", "headers"].forEach((me) => {
          Y[me] = G[me];
        });
        const ee = i.toFiniteNumber(G.headers.get("content-length")), [ie, ce] = B && Qe(
          ee,
          Te(et(B), !0)
        ) || [];
        G = new r(
          st(G.body, rt, ie, () => {
            ce && ce(), Q && Q();
          }),
          Y
        );
      }
      F = F || "text";
      let ke = await v[i.findKey(v, F) || "text"](G, h);
      return !_e && Q && Q(), await new Promise((Y, ee) => {
        Ot(Y, ee, {
          data: ke,
          headers: $.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: h,
          request: K
        });
      });
    } catch (J) {
      throw Q && Q(), J && J.name === "TypeError" && /Load failed|fetch/i.test(J.message) ? Object.assign(
        new E("Network Error", E.ERR_NETWORK, h, K),
        {
          cause: J.cause || J
        }
      ) : E.from(J, J && J.code, h, K);
    }
  };
}, dr = /* @__PURE__ */ new Map(), At = (e) => {
  let t = e && e.env || {};
  const { fetch: s, Request: r, Response: n } = t, o = [
    r,
    n,
    s
  ];
  let l = o.length, u = l, x, p, f = dr;
  for (; u--; )
    x = o[u], p = f.get(x), p === void 0 && f.set(x, p = u ? /* @__PURE__ */ new Map() : ur(t)), f = p;
  return p;
};
At();
const Je = {
  http: Cs,
  xhr: nr,
  fetch: {
    get: At
  }
};
i.forEach(Je, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const lt = (e) => `- ${e}`, fr = (e) => i.isFunction(e) || e === null || e === !1;
function pr(e, t) {
  e = i.isArray(e) ? e : [e];
  const { length: s } = e;
  let r, n;
  const o = {};
  for (let l = 0; l < s; l++) {
    r = e[l];
    let u;
    if (n = r, !fr(r) && (n = Je[(u = String(r)).toLowerCase()], n === void 0))
      throw new E(`Unknown adapter '${u}'`);
    if (n && (i.isFunction(n) || (n = n.get(t))))
      break;
    o[u || "#" + l] = n;
  }
  if (!n) {
    const l = Object.entries(o).map(
      ([x, p]) => `adapter ${x} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let u = s ? l.length > 1 ? `since :
` + l.map(lt).join(`
`) : " " + lt(l[0]) : "as no adapter specified";
    throw new E(
      "There is no suitable adapter to dispatch the request " + u,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const Nt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: pr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Je
};
function Ue(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new fe(null, e);
}
function it(e) {
  return Ue(e), e.headers = $.from(e.headers), e.data = je.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nt.getAdapter(e.adapter || ye.adapter, e)(e).then(function(r) {
    return Ue(e), r.data = je.call(
      e,
      e.transformResponse,
      r
    ), r.headers = $.from(r.headers), r;
  }, function(r) {
    return Rt(r) || (Ue(e), r && r.response && (r.response.data = je.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = $.from(r.response.headers))), Promise.reject(r);
  });
}
const Pt = "1.13.2", Fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Fe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ct = {};
Fe.transitional = function(t, s, r) {
  function n(o, l) {
    return "[Axios v" + Pt + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "");
  }
  return (o, l, u) => {
    if (t === !1)
      throw new E(
        n(l, " has been removed" + (s ? " in " + s : "")),
        E.ERR_DEPRECATED
      );
    return s && !ct[l] && (ct[l] = !0, console.warn(
      n(
        l,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, l, u) : !0;
  };
};
Fe.spelling = function(t) {
  return (s, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function hr(e, t, s) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const o = r[n], l = t[o];
    if (l) {
      const u = e[o], x = u === void 0 || l(u, o, e);
      if (x !== !0)
        throw new E("option " + o + " must be " + x, E.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new E("Unknown option " + o, E.ERR_BAD_OPTION);
  }
}
const Ce = {
  assertOptions: hr,
  validators: Fe
}, Z = Ce.validators;
let oe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ye(),
      response: new Ye()
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
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const o = n.stack ? n.stack.replace(/^.+\n/, "") : "";
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
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = ae(this.defaults, s);
    const { transitional: r, paramsSerializer: n, headers: o } = s;
    r !== void 0 && Ce.assertOptions(r, {
      silentJSONParsing: Z.transitional(Z.boolean),
      forcedJSONParsing: Z.transitional(Z.boolean),
      clarifyTimeoutError: Z.transitional(Z.boolean)
    }, !1), n != null && (i.isFunction(n) ? s.paramsSerializer = {
      serialize: n
    } : Ce.assertOptions(n, {
      encode: Z.function,
      serialize: Z.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Ce.assertOptions(s, {
      baseUrl: Z.spelling("baseURL"),
      withXsrfToken: Z.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let l = o && i.merge(
      o.common,
      o[s.method]
    );
    o && i.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), s.headers = $.concat(l, o);
    const u = [];
    let x = !0;
    this.interceptors.request.forEach(function(_) {
      typeof _.runWhen == "function" && _.runWhen(s) === !1 || (x = x && _.synchronous, u.unshift(_.fulfilled, _.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(_) {
      p.push(_.fulfilled, _.rejected);
    });
    let f, v = 0, O;
    if (!x) {
      const h = [it.bind(this), void 0];
      for (h.unshift(...u), h.push(...p), O = h.length, f = Promise.resolve(s); v < O; )
        f = f.then(h[v++], h[v++]);
      return f;
    }
    O = u.length;
    let T = s;
    for (; v < O; ) {
      const h = u[v++], _ = u[v++];
      try {
        T = h(T);
      } catch (g) {
        _.call(this, g);
        break;
      }
    }
    try {
      f = it.call(this, T);
    } catch (h) {
      return Promise.reject(h);
    }
    for (v = 0, O = p.length; v < O; )
      f = f.then(p[v++], p[v++]);
    return f;
  }
  getUri(t) {
    t = ae(this.defaults, t);
    const s = Ct(t.baseURL, t.url, t.allowAbsoluteUrls);
    return kt(s, t.params, t.paramsSerializer);
  }
};
i.forEach(["delete", "get", "head", "options"], function(t) {
  oe.prototype[t] = function(s, r) {
    return this.request(ae(r || {}, {
      method: t,
      url: s,
      data: (r || {}).data
    }));
  };
});
i.forEach(["post", "put", "patch"], function(t) {
  function s(r) {
    return function(o, l, u) {
      return this.request(ae(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  oe.prototype[t] = s(), oe.prototype[t + "Form"] = s(!0);
});
let mr = class Bt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(o) {
      s = o;
    });
    const r = this;
    this.promise.then((n) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](n);
      r._listeners = null;
    }), this.promise.then = (n) => {
      let o;
      const l = new Promise((u) => {
        r.subscribe(u), o = u;
      }).then(n);
      return l.cancel = function() {
        r.unsubscribe(o);
      }, l;
    }, t(function(o, l, u) {
      r.reason || (r.reason = new fe(o, l, u), s(r.reason));
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
      token: new Bt(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
};
function br(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function xr(e) {
  return i.isObject(e) && e.isAxiosError === !0;
}
const Ie = {
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
Object.entries(Ie).forEach(([e, t]) => {
  Ie[t] = e;
});
function Ft(e) {
  const t = new oe(e), s = dt(oe.prototype.request, t);
  return i.extend(s, oe.prototype, t, { allOwnKeys: !0 }), i.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(n) {
    return Ft(ae(e, n));
  }, s;
}
const A = Ft(ye);
A.Axios = oe;
A.CanceledError = fe;
A.CancelToken = mr;
A.isCancel = Rt;
A.VERSION = Pt;
A.toFormData = Be;
A.AxiosError = E;
A.Cancel = A.CanceledError;
A.all = function(t) {
  return Promise.all(t);
};
A.spread = br;
A.isAxiosError = xr;
A.mergeConfig = ae;
A.AxiosHeaders = $;
A.formToJSON = (e) => Et(i.isHTMLForm(e) ? new FormData(e) : e);
A.getAdapter = Nt.getAdapter;
A.HttpStatusCode = Ie;
A.default = A;
const {
  Axios: Qn,
  AxiosError: eo,
  CanceledError: to,
  isCancel: so,
  CancelToken: ro,
  VERSION: no,
  all: oo,
  Cancel: ao,
  isAxiosError: lo,
  spread: io,
  toFormData: co,
  AxiosHeaders: uo,
  HttpStatusCode: fo,
  formToJSON: po,
  getAdapter: ho,
  mergeConfig: mo
} = A, gr = ["id"], vr = { class: "flex gap-2 items-center" }, wr = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "text-amber-400 fill-amber-400/20"
}, yr = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, _r = {
  key: 0,
  class: "max-w-[1440px] mx-auto px-4 py-6 md:px-8"
}, kr = { class: "grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12" }, Sr = { class: "space-y-4" }, Er = {
  key: 1,
  class: "max-w-[1440px] mx-auto md:px-8 md:py-8"
}, Rr = { class: "hidden md:flex text-sm mb-8 items-center gap-2 justify-between" }, Or = { class: "hover:text-blue-500 transition-colors cursor-pointer capitalize" }, Cr = { class: "relative w-4 h-4 overflow-hidden" }, Tr = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "animate-[spin_3s_linear_infinite]"
}, Ar = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Nr = { class: "text-xs font-semibold tracking-wide" }, Pr = { class: "hidden md:block mb-10" }, Br = { class: "flex gap-2 mb-4" }, Fr = {
  key: 0,
  class: "px-2.5 py-1 rounded-md bg-rose-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-rose-500/30"
}, Lr = { class: "flex items-center text-amber-500 gap-1.5" }, jr = { class: "flex" }, Ur = {
  key: 0,
  class: "tracking-wide"
}, Dr = { class: "font-mono" }, Mr = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-4"
}, zr = { class: "grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0 lg:gap-16 items-start" }, Ir = { class: "w-full" }, $r = { class: "md:hidden px-4 pt-2 mb-6" }, qr = { class: "flex gap-2 mb-3" }, Hr = {
  key: 0,
  class: "px-2 py-0.5 rounded bg-rose-500 text-white text-[10px] font-bold shadow-md shadow-rose-500/20"
}, Jr = { class: "flex items-center text-amber-500 text-sm" }, Vr = { class: "text-xs opacity-60 ml-1 text-current" }, Wr = {
  key: 0,
  class: "flex flex-wrap gap-2 mt-3 no-scrollbar overflow-x-auto"
}, Xr = { class: "grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-10 mb-12" }, Kr = { class: "relative group" }, Gr = { class: "hidden md:flex gap-4 h-[600px]" }, Yr = { class: "flex flex-col gap-3 w-[80px] overflow-y-auto no-scrollbar py-1" }, Zr = ["onMouseover"], Qr = ["src"], en = ["src"], tn = { class: "absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity" }, sn = ["fill"], rn = ["src"], nn = { class: "px-4 lg:px-0 flex flex-col gap-8" }, on = { class: "flex items-baseline gap-3 mb-2" }, an = { class: "text-3xl font-extrabold text-rose-500 tracking-tight" }, ln = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, cn = { key: 0 }, un = { class: "flex flex-wrap gap-3" }, dn = ["onClick"], fn = ["src"], pn = {
  key: 2,
  class: "absolute inset-0 bg-black/20 flex items-center justify-center z-10 backdrop-blur-[1px]"
}, hn = { key: 1 }, mn = { class: "flex justify-between items-center mb-3" }, bn = { class: "flex flex-wrap gap-2.5" }, xn = ["onClick"], gn = { class: "space-y-3 mb-5" }, vn = ["innerHTML"], wn = {
  id: "characteristics",
  class: "scroll-mt-32"
}, yn = ["onClick"], _n = { class: "flex justify-between items-center mb-8" }, kn = { class: "grid gap-6 md:grid-cols-2" }, Sn = { class: "flex justify-between items-start mb-4" }, En = { class: "flex items-center gap-3" }, Rn = { class: "hidden lg:block w-[380px]" }, On = { class: "flex items-start justify-between mb-6" }, Cn = { class: "flex items-baseline gap-2.5" }, Tn = { class: "text-[32px] font-extrabold leading-none text-rose-500 tracking-tight" }, An = {
  key: 0,
  class: "text-base text-slate-400 line-through decoration-slate-400/50"
}, Nn = { class: "flex gap-4 text-sm group" }, Pn = { class: "flex gap-4 text-sm group" }, Bn = { class: "space-y-3" }, Fn = { class: "flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x" }, Ln = ["src"], jn = { class: "absolute top-3 left-3 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg" }, Un = { class: "mb-1.5 flex items-baseline gap-2.5" }, Dn = { class: "text-xs text-slate-400" }, Mn = { class: "flex flex-col" }, zn = {
  key: 0,
  class: "text-xs text-slate-400 line-through mt-0.5"
}, In = { class: "flex justify-between items-center mb-6" }, $n = {
  key: 0,
  class: "overflow-y-auto flex-1 flex justify-center p-2"
}, qn = ["src"], Hn = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_product", Jn = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", Vn = /* @__PURE__ */ ut({
  __name: "ProductPage",
  props: {
    _p: {},
    _$p: {},
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
    }, r = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], n = V(t._$p?.data?.curr?.data?.theme || "light"), o = V({
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
      // ADDED INITIALIZATION
    }), l = V(!0), u = V(""), x = V(""), p = V(""), f = V(0), v = V(!1), O = V(!1), T = V(!1), h = V([
      { name: "Alexander", date: "Dec 12", text: "Excellent quality, fits size-to-size. The fabric is breathable and feels premium.", color: "#005bff" },
      { name: "Maria K.", date: "Nov 05", text: "Fast delivery. Color matches the photo perfectly. Packaging was secure.", color: "#f91155" },
      { name: "Igor S.", date: "Oct 22", text: "Good value for money. Stitching is solid and the design is trendy.", color: "#00c853" },
      { name: "Elena P.", date: "Sep 15", text: "Comfortable to wear all day. Received many compliments on the style.", color: "#ff6d00" },
      { name: "Dmitry V.", date: "Aug 30", text: "The size chart was accurate. The material is soft and durable.", color: "#d500f9" },
      { name: "Svetlana R.", date: "Jul 18", text: "Loved the color options. The fit is flattering and true to size.", color: "#00bcd4" }
    ]), _ = V([
      { title: "Cotton T-Shirt Basic", price: 1200, mrp: 2400, discount: 50, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300" },
      { title: "Slim Fit Jeans Blue", price: 2500, mrp: 3500, discount: 28, image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=300" },
      { title: "Casual Hoodie Gray", price: 1800, mrp: 2200, discount: 15, image: "https://images.unsplash.com/photo-1556906781-9a412961d28c?w=300" },
      { title: "Summer Shorts", price: 950, mrp: 1500, discount: 35, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300" },
      { title: "Leather Sneakers", price: 3200, mrp: 4e3, discount: 20, image: "https://images.unsplash.com/photo-1519741491921-9f4c5b3f3e2d?w=300" },
      { title: "Denim Jacket", price: 2700, mrp: 4500, discount: 40, image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=300" },
      { title: "Wool Scarf", price: 800, mrp: 1200, discount: 33, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300" }
    ]), g = V([
      { question: "Payment Methods", answer: "We accept Visa, MasterCard, Mir cards, and SBP. You can also pay upon receipt.", isOpen: !1 },
      { question: "Delivery Options", answer: "Courier delivery to your door or pickup points. Free delivery for orders over 2000₽.", isOpen: !1 },
      { question: "Return Policy", answer: "You can return items within 14 days of receipt. Items must be unused and in original packaging.", isOpen: !1 },
      { question: "Warranty Information", answer: "All products come with a 6-month warranty covering manufacturing defects.", isOpen: !1 },
      { question: "Sizing Guide", answer: "Please refer to our size chart for accurate measurements to ensure the best fit.", isOpen: !1 }
    ]), c = M(() => n.value === "dark"), P = M(() => t._p?.f?.name ? t._p.f.name("pd-root") : "pd-root"), C = M(() => {
      if (!o.value.metadata) return {};
      try {
        return JSON.parse(o.value.metadata);
      } catch {
        return {};
      }
    }), N = M(() => C.value.color ? C.value.color.map((k) => {
      let m = k.image?.[0]?.url ? k.image[0].url : null;
      return m && m.includes("example.com") && (m = null), { id: k.id, name: k.name, url: m };
    }) : []), B = M(() => {
      const k = x.value, m = C.value.color?.find((b) => b.name === k);
      if (m && m.image && m.image.length > 0) {
        const b = m.image.filter((R) => R.url && !R.url.includes("example.com")).map((R) => R.url);
        if (b.length) return b;
      }
      return s.Default;
    }), W = M(() => {
      const k = o.value.size;
      return !k || !Array.isArray(k) || k.length === 0 ? [] : [...new Set(k.map((b) => String(b).trim()))].filter(Boolean).sort((b, R) => {
        const te = r.indexOf(b.toUpperCase()), Se = r.indexOf(R.toUpperCase());
        if (te !== -1 && Se !== -1) return te - Se;
        if (te !== -1) return -1;
        if (Se !== -1) return 1;
        const Ve = parseFloat(b), We = parseFloat(R);
        return !isNaN(Ve) && !isNaN(We) ? Ve - We : b.localeCompare(R, void 0, { numeric: !0 });
      });
    }), F = M(() => {
      const k = C.value.size_info?.representation?.url || C.value.size_info?.chart?.url || null;
      return k && !k.includes("example.com") ? k : null;
    }), q = M(() => o.value.variant_prices?.[0] || 0), D = M(() => o.value.variant_mrp?.[0] || 0), pe = M(() => Math.floor(q.value * 0.95)), re = M(() => D.value > q.value ? Math.round((D.value - q.value) / D.value * 100) : 0), le = M(() => {
      const k = o.value.field_name?.indexOf("Product Details");
      return k !== -1 && o.value.field_value?.[k] ? o.value.field_value[k] : "";
    }), K = M(() => o.value.field_name ? o.value.field_name.map((k, m) => ({
      name: k,
      value: o.value.field_value[m]?.replace(/<[^>]*>/g, " ").trim()
    })).filter((k) => k.name !== "Product Details" && k.value) : []), Q = M(() => O.value ? K.value : K.value.slice(0, 5)), H = (k) => new Intl.NumberFormat("ru-RU").format(k), J = () => {
      const k = n.value === "dark" ? "light" : "dark";
      n.value = k, t._p?.f?.set_theme && t._p.f.set_theme({ name: k, el_id: P.value }), t._$cb && t._$p?.data?.curr?.data && (t._$p.data.curr.data.theme = k, t._$cb.change && t._$cb.change({ _$p: t._$p }));
    }, he = () => {
      console.log("Back requested");
    }, G = () => navigator.share?.({ title: o.value.title, url: window.location.href }).catch(console.error), _e = () => T.value = !T.value, ke = (k) => {
      x.value = k.name, u.value = B.value[0];
    }, Y = (k) => {
      g.value[k].isOpen = !g.value[k].isOpen;
    }, ee = () => document.getElementById("characteristics")?.scrollIntoView({ behavior: "smooth" }), ie = () => {
      const k = document.getElementById(P.value);
      k && t._$cb?.add && t._$cb.add({
        $d: t._$p?.data?.curr?.data || {},
        el: k
      });
    }, ce = (k) => {
      const m = k.target;
      f.value = Math.round(m.scrollLeft / m.clientWidth);
    }, me = async () => {
      l.value = !0;
      const m = { slug: (() => {
        let b = "";
        try {
          const te = new URL(location.href).pathname.split("/");
          b = te[te.length - 1];
        } catch {
        }
        return b;
      })(), collection: "products" };
      try {
        const b = await A.post(Hn, m, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${Jn.trim()}` }
        });
        if (b.data.success && b.data.data.length)
          o.value = b.data.data[0].document;
        else
          throw new Error("No data found");
      } catch (b) {
        console.warn("API Error, using fallback data:", b);
      } finally {
        N.value.length && ke(N.value[0]), W.value.length && (p.value = W.value[0]), u.value = B.value[0], l.value = !1;
      }
    };
    return Lt(() => {
      me();
      const k = document.getElementById(P.value);
      k && n.value && t._p?.f?.set_theme && t._p.f.set_theme({ name: n.value, el_id: k.id });
    }), jt(() => t._$p?.data?.curr?.id, me), (k, m) => (w(), y("div", {
      id: P.value,
      class: d(["font-sans min-h-screen pb-[100px] md:pb-0 antialiased transition-colors duration-300 ease-in-out selection:bg-rose-500 selection:text-white", c.value ? "bg-[#0f172a] text-slate-200" : "bg-[#F9FAFB] text-slate-900"])
    }, [
      a("nav", {
        class: d(["sticky top-0 z-50 backdrop-blur-xl flex justify-between items-center px-4 py-3 shadow-sm md:hidden border-b transition-colors duration-300", c.value ? "bg-[#0f172a]/80 border-slate-800" : "bg-white/80 border-slate-200/60"])
      }, [
        a("button", {
          class: d(["p-2 -ml-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
          onClick: he
        }, [...m[4] || (m[4] = [
          a("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            a("path", { d: "M15 18l-6-6 6-6" })
          ], -1)
        ])], 2),
        a("div", vr, [
          a("button", {
            class: d(["p-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: J
          }, [
            c.value ? (w(), y("svg", wr, [...m[5] || (m[5] = [
              be('<circle cx="12" cy="12" r="5" data-v-bae44606></circle><line x1="12" y1="1" x2="12" y2="3" data-v-bae44606></line><line x1="12" y1="21" x2="12" y2="23" data-v-bae44606></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-bae44606></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-bae44606></line><line x1="1" y1="12" x2="3" y2="12" data-v-bae44606></line><line x1="21" y1="12" x2="23" y2="12" data-v-bae44606></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-bae44606></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-bae44606></line>', 9)
            ])])) : (w(), y("svg", yr, [...m[6] || (m[6] = [
              a("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
            ])]))
          ], 2),
          a("button", {
            class: d(["p-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: G
          }, [...m[7] || (m[7] = [
            be('<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-bae44606><circle cx="18" cy="5" r="3" data-v-bae44606></circle><circle cx="6" cy="12" r="3" data-v-bae44606></circle><circle cx="18" cy="19" r="3" data-v-bae44606></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-bae44606></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-bae44606></line></svg>', 1)
          ])], 2)
        ])
      ], 2),
      l.value ? (w(), y("div", _r, [
        a("div", {
          class: d(["hidden md:block h-5 w-64 rounded mb-8 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
        }, null, 2),
        a("div", kr, [
          a("div", null, [
            a("div", {
              class: d(["block md:hidden h-[400px] w-full rounded-2xl mb-6 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            a("div", {
              class: d(["hidden md:block h-[600px] w-full rounded-3xl mb-8 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            a("div", Sr, [
              a("div", {
                class: d(["h-8 w-3/4 rounded-lg animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2),
              a("div", {
                class: d(["h-6 w-1/2 rounded-lg animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2)
            ])
          ]),
          a("div", {
            class: d(["hidden lg:block h-[500px] rounded-3xl animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
          }, null, 2)
        ])
      ])) : o.value && o.value.id ? (w(), y("div", Er, [
        a("nav", Rr, [
          a("div", {
            class: d(["flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
          }, [
            a("span", {
              class: "hover:text-blue-500 transition-colors cursor-pointer",
              onClick: he
            }, "Home"),
            m[9] || (m[9] = se()),
            m[10] || (m[10] = a("span", { class: "opacity-30" }, "/", -1)),
            (w(!0), y(j, null, U(o.value.category, (b, R) => (w(), y("span", {
              key: R,
              class: "flex items-center gap-2"
            }, [
              a("span", Or, S(b), 1),
              m[8] || (m[8] = a("span", { class: "opacity-30" }, "/", -1))
            ]))), 128)),
            a("span", {
              class: d(["font-medium truncate max-w-[200px]", c.value ? "text-slate-200" : "text-slate-900"])
            }, S(o.value.title), 3)
          ], 2),
          a("button", {
            class: d(["group flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm hover:shadow-md active:scale-95", c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"]),
            onClick: J
          }, [
            a("div", Cr, [
              c.value ? (w(), y("svg", Tr, [...m[11] || (m[11] = [
                be('<circle cx="12" cy="12" r="5" data-v-bae44606></circle><line x1="12" y1="1" x2="12" y2="3" data-v-bae44606></line><line x1="12" y1="21" x2="12" y2="23" data-v-bae44606></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-bae44606></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-bae44606></line><line x1="1" y1="12" x2="3" y2="12" data-v-bae44606></line><line x1="21" y1="12" x2="23" y2="12" data-v-bae44606></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-bae44606></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-bae44606></line>', 9)
              ])])) : (w(), y("svg", Ar, [...m[12] || (m[12] = [
                a("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ]),
            a("span", Nr, S(c.value ? "Dark Mode" : "Light Mode"), 1)
          ], 2)
        ]),
        a("header", Pr, [
          a("div", Br, [
            a("span", {
              class: d(["px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm", c.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
            }, "Bestseller", 2),
            re.value > 0 ? (w(), y("span", Fr, "-" + S(re.value) + "% Sale", 1)) : z("", !0)
          ]),
          a("h1", {
            class: d(["text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight", c.value ? "text-white" : "text-slate-900"])
          }, S(o.value.title), 3),
          a("div", {
            class: d(["flex items-center gap-4 text-sm font-medium", c.value ? "text-slate-400" : "text-slate-500"])
          }, [
            a("div", Lr, [
              a("span", jr, [
                (w(), y(j, null, U(5, (b) => a("svg", {
                  key: b,
                  class: "w-4 h-4 fill-current",
                  viewBox: "0 0 20 20"
                }, [...m[13] || (m[13] = [
                  a("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ])])), 64))
              ]),
              a("span", {
                class: d(["font-bold ml-1", c.value ? "text-white" : "text-slate-900"])
              }, "4.9", 2),
              a("a", {
                href: "#reviews",
                class: d(["ml-2 border-b border-dotted hover:text-blue-500 hover:border-blue-500 transition-colors", c.value ? "border-slate-600" : "border-slate-400"])
              }, S(h.value.length) + " reviews ", 3)
            ]),
            m[15] || (m[15] = a("span", { class: "opacity-30 text-xl font-light" }, "|", -1)),
            o.value.id ? (w(), y("span", Ur, [
              m[14] || (m[14] = se("Art: ", -1)),
              a("span", Dr, S(o.value.id.includes("__") ? o.value.id.split("__")[1] : o.value.id), 1)
            ])) : z("", !0)
          ], 2),
          o.value.hashtags && o.value.hashtags.length ? (w(), y("div", Mr, [
            (w(!0), y(j, null, U(o.value.hashtags, (b, R) => (w(), y("span", {
              key: R,
              class: d(["px-3 py-1 text-xs font-semibold rounded-full border transition-all cursor-pointer hover:shadow-sm", c.value ? "bg-slate-800 text-blue-400 border-slate-700 hover:border-blue-500/50" : "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100"])
            }, S(b), 3))), 128))
          ])) : z("", !0)
        ]),
        a("div", zr, [
          a("div", Ir, [
            a("div", $r, [
              a("div", qr, [
                a("span", {
                  class: d(["px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border", c.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
                }, "Bestseller", 2),
                re.value > 0 ? (w(), y("span", Hr, "-" + S(re.value) + "%", 1)) : z("", !0)
              ]),
              a("h1", {
                class: d(["text-[26px] font-bold leading-[1.2] mb-3 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, S(o.value.title), 3),
              a("div", Jr, [
                (w(), y(j, null, U(5, (b) => a("svg", {
                  key: b,
                  class: "w-3.5 h-3.5 fill-current",
                  viewBox: "0 0 20 20"
                }, [...m[16] || (m[16] = [
                  a("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ])])), 64)),
                a("span", {
                  class: d(["font-bold mx-1.5", c.value ? "text-white" : "text-slate-900"])
                }, "4.9", 2),
                a("span", Vr, S(h.value.length) + " reviews", 1)
              ]),
              o.value.hashtags && o.value.hashtags.length ? (w(), y("div", Wr, [
                (w(!0), y(j, null, U(o.value.hashtags, (b, R) => (w(), y("span", {
                  key: R,
                  class: d(["px-2.5 py-1 text-[11px] font-semibold rounded-full border whitespace-nowrap", c.value ? "bg-slate-800 text-blue-400 border-slate-700" : "bg-blue-50 text-blue-600 border-blue-100"])
                }, S(b), 3))), 128))
              ])) : z("", !0)
            ]),
            a("div", Xr, [
              a("div", Kr, [
                a("div", Gr, [
                  a("div", Yr, [
                    (w(!0), y(j, null, U(B.value, (b, R) => (w(), y("div", {
                      key: R,
                      class: d(["w-[80px] h-[100px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 relative border", [
                        c.value ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100",
                        u.value === b ? "ring-2 ring-blue-500 ring-offset-2 " + (c.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80 opacity-70 hover:opacity-100"
                      ]]),
                      onMouseover: (te) => u.value = b
                    }, [
                      a("img", {
                        src: b,
                        class: "w-full h-full object-cover"
                      }, null, 8, Qr)
                    ], 42, Zr))), 128))
                  ]),
                  a("div", {
                    class: d(["flex-1 rounded-[32px] flex items-center justify-center overflow-hidden cursor-zoom-in relative shadow-sm border", c.value ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-100"])
                  }, [
                    a("img", {
                      src: u.value,
                      class: "max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                    }, null, 8, en),
                    a("div", tn, [
                      a("button", {
                        class: "p-2 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-blue-600 dark:bg-slate-800/90 dark:text-slate-200",
                        onClick: _e
                      }, [
                        (w(), y("svg", {
                          fill: T.value ? "currentColor" : "none",
                          class: d(T.value ? "text-rose-500" : ""),
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [...m[17] || (m[17] = [
                          a("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          }, null, -1)
                        ])], 10, sn))
                      ])
                    ])
                  ], 2)
                ]),
                a("div", {
                  class: d(["md:hidden relative w-full pb-6 transition-colors duration-300", c.value ? "bg-[#0f172a]" : "bg-[#F9FAFB]"])
                }, [
                  a("div", {
                    class: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-[100vw] max-h-[500px]",
                    onScroll: ce
                  }, [
                    (w(!0), y(j, null, U(B.value, (b, R) => (w(), y("div", {
                      class: "min-w-full snap-center flex items-center justify-center p-6",
                      key: R
                    }, [
                      a("img", {
                        src: b,
                        class: "max-w-full max-h-full object-contain drop-shadow-xl"
                      }, null, 8, rn)
                    ]))), 128))
                  ], 32),
                  a("div", {
                    class: d(["absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md z-10 border", c.value ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"])
                  }, [
                    (w(!0), y(j, null, U(B.value, (b, R) => (w(), y("span", {
                      key: R,
                      class: d(["h-1.5 rounded-full transition-all duration-300 shadow-sm", f.value === R ? c.value ? "bg-white w-4" : "bg-slate-800 w-4" : c.value ? "bg-white/30 w-1.5" : "bg-slate-800/30 w-1.5"])
                    }, null, 2))), 128))
                  ], 2)
                ], 2)
              ]),
              a("div", nn, [
                a("div", {
                  class: d(["md:hidden pb-6 border-b", c.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  a("div", on, [
                    a("span", an, S(H(q.value)) + " ₽", 1),
                    D.value > q.value ? (w(), y("span", ln, S(H(D.value)) + " ₽", 1)) : z("", !0)
                  ]),
                  a("div", {
                    class: d(["inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm", c.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    a("span", null, S(H(pe.value)) + " ₽", 1),
                    m[18] || (m[18] = se(" with Ozon Card ", -1))
                  ], 2)
                ], 2),
                N.value.length ? (w(), y("div", cn, [
                  a("div", {
                    class: d(["text-sm font-medium mb-3 flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
                  }, [
                    m[19] || (m[19] = a("span", null, "Color:", -1)),
                    a("span", {
                      class: d(["font-bold text-base", c.value ? "text-white" : "text-slate-900"])
                    }, S(x.value), 3)
                  ], 2),
                  a("div", un, [
                    (w(!0), y(j, null, U(N.value, (b) => (w(), y("div", {
                      key: b.id,
                      class: d(["relative w-[72px] h-[90px] rounded-xl cursor-pointer overflow-hidden transition-all duration-200 group border", [
                        c.value ? "border-slate-700" : "border-slate-200",
                        x.value === b.name ? "ring-2 ring-blue-500 ring-offset-2 " + (c.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80"
                      ]]),
                      onClick: (R) => ke(b)
                    }, [
                      b.url ? (w(), y("img", {
                        key: 0,
                        src: b.url,
                        class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      }, null, 8, fn)) : (w(), y("span", {
                        key: 1,
                        class: d(["flex w-full h-full items-center justify-center p-1 text-center text-xs leading-tight font-medium", c.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                      }, S(b.name), 3)),
                      x.value === b.name ? (w(), y("div", pn, [...m[20] || (m[20] = [
                        a("div", { class: "bg-blue-600 rounded-full p-1 shadow-lg animate-[slideUp_0.2s_ease-out]" }, [
                          a("svg", {
                            class: "w-3.5 h-3.5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "3.5"
                          }, [
                            a("path", { d: "M5 13l4 4L19 7" })
                          ])
                        ], -1)
                      ])])) : z("", !0)
                    ], 10, dn))), 128))
                  ])
                ])) : z("", !0),
                W.value.length ? (w(), y("div", hn, [
                  a("div", mn, [
                    a("span", {
                      class: d(["text-sm font-medium flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
                    }, [
                      m[21] || (m[21] = a("span", null, "Size:", -1)),
                      a("span", {
                        class: d(["font-bold text-base", c.value ? "text-white" : "text-slate-900"])
                      }, S(p.value), 3)
                    ], 2),
                    F.value ? (w(), y("button", {
                      key: 0,
                      class: d(["text-xs font-bold flex items-center gap-1.5 transition hover:opacity-70 px-2 py-1 rounded-md", c.value ? "text-blue-400 bg-blue-400/10" : "text-blue-600 bg-blue-50"]),
                      onClick: m[0] || (m[0] = (b) => v.value = !0)
                    }, [...m[22] || (m[22] = [
                      a("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        a("path", { d: "M19.5 12h-15M19.5 12l-4-4m4 4l-4 4" })
                      ], -1),
                      se(" Size Chart ", -1)
                    ])], 2)) : z("", !0)
                  ]),
                  a("div", bn, [
                    (w(!0), y(j, null, U(W.value, (b) => (w(), y("button", {
                      key: b,
                      class: d(["h-12 min-w-[3.5rem] px-4 rounded-xl text-sm font-semibold transition-all duration-200 border relative overflow-hidden", [
                        p.value === b ? c.value ? "bg-slate-800 border-blue-500 text-blue-400 ring-1 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200" : c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500" : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      ]]),
                      onClick: (R) => p.value = b
                    }, S(b), 11, xn))), 128))
                  ])
                ])) : z("", !0),
                a("div", {
                  class: d(["hidden lg:block p-6 rounded-2xl border transition-colors duration-300", c.value ? "bg-slate-800/40 border-slate-700" : "bg-slate-50/50 border-slate-200/60"])
                }, [
                  a("h3", {
                    class: d(["text-xs font-bold mb-4 uppercase tracking-wider opacity-60", c.value ? "text-white" : "text-slate-900"])
                  }, "Key Features", 2),
                  a("ul", gn, [
                    (w(!0), y(j, null, U(K.value.slice(0, 5), (b, R) => (w(), y("li", {
                      key: R,
                      class: d(["text-sm flex justify-between items-start border-b pb-2 last:border-0 border-dashed", c.value ? "border-slate-700/50" : "border-slate-200"])
                    }, [
                      a("span", {
                        class: d(c.value ? "text-slate-400" : "text-slate-500")
                      }, S(b.name), 3),
                      a("span", {
                        class: d(["font-medium text-right max-w-[60%]", c.value ? "text-slate-200" : "text-slate-900"])
                      }, S(b.value), 3)
                    ], 2))), 128))
                  ]),
                  a("button", {
                    class: d(["text-sm font-bold flex items-center gap-1 transition hover:opacity-70 group", c.value ? "text-blue-400" : "text-blue-600"]),
                    onClick: ee
                  }, [...m[23] || (m[23] = [
                    se(" View all characteristics ", -1),
                    a("svg", {
                      class: "group-hover:translate-x-1 transition-transform",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      a("path", { d: "M6 9l6 6 6-6" })
                    ], -1)
                  ])], 2)
                ], 2)
              ])
            ]),
            a("div", {
              class: d(["px-4 lg:px-0 mt-16 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"])
            }, [
              a("h2", {
                class: d(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, "Description", 2),
              a("div", {
                class: d(["prose max-w-3xl leading-relaxed mb-12 text-[1.05rem]", c.value ? "prose-invert text-slate-300" : "prose-slate text-slate-600"]),
                innerHTML: le.value
              }, null, 10, vn),
              a("div", wn, [
                a("h3", {
                  class: d(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
                }, "All Characteristics", 2),
                a("div", {
                  class: d(["rounded-2xl border overflow-hidden", c.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  (w(!0), y(j, null, U(Q.value, (b, R) => (w(), y("div", {
                    class: d(["flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:px-6 transition-colors", [
                      R % 2 === 0 ? c.value ? "bg-slate-800/30" : "bg-slate-50" : c.value ? "bg-transparent" : "bg-white"
                    ]]),
                    key: R
                  }, [
                    a("span", {
                      class: d(["text-sm mb-1 sm:mb-0 font-medium opacity-80", c.value ? "text-slate-400" : "text-slate-500"])
                    }, S(b.name), 3),
                    a("span", {
                      class: d(["font-semibold text-sm sm:text-right", c.value ? "text-slate-200" : "text-slate-900"])
                    }, S(b.value), 3)
                  ], 2))), 128))
                ], 2),
                K.value.length > 5 ? (w(), y("button", {
                  key: 0,
                  class: d(["mt-6 flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-xl border font-bold text-sm transition-all hover:shadow-md active:scale-[0.98]", c.value ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"]),
                  onClick: m[1] || (m[1] = (b) => O.value = !O.value)
                }, [
                  se(S(O.value ? "Hide characteristics" : "Show all characteristics") + " ", 1),
                  (w(), y("svg", {
                    class: d([{ "rotate-180": O.value }, "transition-transform duration-300 ml-2"]),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [...m[24] || (m[24] = [
                    a("path", { d: "M6 9l6 6 6-6" }, null, -1)
                  ])], 2))
                ], 2)) : z("", !0)
              ])
            ], 2),
            a("div", {
              class: d(["px-4 lg:px-0 mt-16 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"])
            }, [
              a("h2", {
                class: d(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, "Questions and Answers", 2),
              a("div", {
                class: d(["rounded-2xl border overflow-hidden divide-y", c.value ? "border-slate-800 divide-slate-800" : "border-slate-200 divide-slate-100"])
              }, [
                (w(!0), y(j, null, U(g.value, (b, R) => (w(), y("div", { key: R }, [
                  a("button", {
                    class: d(["w-full py-5 px-6 flex justify-between items-center cursor-pointer group text-left transition-colors", c.value ? "bg-[#0f172a] hover:bg-slate-800" : "bg-white hover:bg-slate-50"]),
                    onClick: (te) => Y(R)
                  }, [
                    a("span", {
                      class: d(["font-semibold text-base transition-colors group-hover:text-blue-500", c.value ? "text-slate-200" : "text-slate-900"])
                    }, S(b.question), 3),
                    a("div", {
                      class: d(["p-1 rounded-full border transition-all", [
                        b.isOpen ? "rotate-180 bg-blue-500 text-white border-blue-500" : c.value ? "border-slate-700 text-slate-500" : "border-slate-200 text-slate-400"
                      ]])
                    }, [...m[25] || (m[25] = [
                      a("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        a("path", { d: "M6 9l6 6 6-6" })
                      ], -1)
                    ])], 2)
                  ], 10, yn),
                  Dt(a("div", {
                    class: d(["px-6 pb-6 pt-2 text-[15px] leading-relaxed animate-[fadeIn_0.2s_ease-out]", c.value ? "bg-[#0f172a] text-slate-400" : "bg-white text-slate-600"])
                  }, [
                    a("p", null, S(b.answer), 1)
                  ], 2), [
                    [Mt, b.isOpen]
                  ])
                ]))), 128))
              ], 2)
            ], 2),
            a("div", {
              class: d(["px-4 lg:px-0 mt-16 mb-24 pt-10 border-t", c.value ? "border-slate-800" : "border-slate-200"]),
              id: "reviews"
            }, [
              a("div", _n, [
                a("h2", {
                  class: d(["text-2xl font-bold flex items-center gap-3", c.value ? "text-white" : "text-slate-900"])
                }, [
                  m[26] || (m[26] = se(" Reviews ", -1)),
                  a("span", {
                    class: d(["text-sm font-bold px-3 py-1 rounded-full", c.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                  }, S(h.value.length), 3)
                ], 2)
              ]),
              a("div", kn, [
                (w(!0), y(j, null, U(h.value, (b, R) => (w(), y("div", {
                  class: d(["p-6 rounded-2xl border transition-all hover:shadow-lg duration-300", c.value ? "bg-slate-800/30 border-slate-700 hover:bg-slate-800" : "bg-white border-slate-100 shadow-sm hover:shadow-md"]),
                  key: R
                }, [
                  a("div", Sn, [
                    a("div", En, [
                      a("div", {
                        class: "w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-sm shadow-md",
                        style: zt(`background:${b.color}`)
                      }, S(b.name[0]), 5),
                      a("div", null, [
                        a("div", {
                          class: d(["font-bold text-sm", c.value ? "text-white" : "text-slate-900"])
                        }, S(b.name), 3),
                        m[27] || (m[27] = a("div", { class: "text-amber-500 text-xs tracking-wide flex" }, "★★★★★", -1))
                      ])
                    ]),
                    a("span", {
                      class: d(["text-xs font-medium opacity-60", c.value ? "text-slate-400" : "text-slate-500"])
                    }, S(b.date), 3)
                  ]),
                  a("div", {
                    class: d(["text-[15px] leading-relaxed mb-4", c.value ? "text-slate-300" : "text-slate-600"])
                  }, S(b.text), 3),
                  a("div", {
                    class: d(["inline-block text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border", c.value ? "bg-slate-800 text-slate-400 border-slate-700" : "bg-slate-50 text-slate-500 border-slate-100"])
                  }, " Var: " + S(x.value) + " • Size: " + S(p.value || "M"), 3)
                ], 2))), 128))
              ])
            ], 2)
          ]),
          a("div", Rn, [
            a("div", {
              class: d(["sticky top-24 p-6 rounded-[32px] border transition-colors duration-300", c.value ? "bg-[#151e32] border-slate-700 ring-1 ring-white/5 shadow-2xl shadow-black/20" : "bg-white border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"])
            }, [
              a("div", On, [
                a("div", null, [
                  a("div", Cn, [
                    a("div", Tn, S(H(q.value)) + " ₽", 1),
                    D.value > q.value ? (w(), y("span", An, S(H(D.value)) + " ₽", 1)) : z("", !0)
                  ]),
                  a("div", {
                    class: d(["mt-3 inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border", c.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    m[28] || (m[28] = a("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "currentColor"
                    }, [
                      a("path", {
                        d: "M2 7h20v10H2z",
                        opacity: "0.3"
                      }),
                      a("path", { d: "M17 12h2" }),
                      a("path", { d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm2 0v10h16V7H4z" })
                    ], -1)),
                    a("span", null, S(H(pe.value)) + " ₽ with Ozon Card", 1)
                  ], 2)
                ])
              ]),
              a("div", {
                class: d(["space-y-5 mb-8 pt-6 border-t", c.value ? "border-slate-700" : "border-slate-100"])
              }, [
                a("div", Nn, [
                  a("div", {
                    class: d(["w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform", c.value ? "bg-slate-800" : "bg-blue-50"])
                  }, "📍", 2),
                  a("div", null, [
                    a("div", {
                      class: d(["font-bold mb-0.5", c.value ? "text-slate-200" : "text-slate-900"])
                    }, "Global Delivery", 2),
                    a("div", {
                      class: d(["text-xs", c.value ? "text-slate-400" : "text-slate-500"])
                    }, "To anywhere in Russia", 2)
                  ])
                ]),
                a("div", Pn, [
                  a("div", {
                    class: d(["w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform", c.value ? "bg-slate-800" : "bg-green-50"])
                  }, "🚚", 2),
                  a("div", null, [
                    a("div", {
                      class: d(["text-s mt-2", c.value ? "text-green-400" : "text-green-600"])
                    }, "Free courier delivery", 2)
                  ])
                ])
              ], 2),
              a("div", Bn, [
                a("button", {
                  class: "w-full h-[56px] bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] flex items-center justify-center gap-2 text-[15px] cursor-pointer",
                  onClick: ie
                }, " Add to Cart "),
                a("button", {
                  class: d(["w-full h-[56px] font-bold rounded-2xl transition-all duration-300 border active:scale-[0.98] cursor-pointer", c.value ? "bg-transparent hover:bg-slate-800 text-white border-slate-600 hover:border-slate-500" : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-300"])
                }, " Buy Now ", 2)
              ]),
              a("div", {
                class: d(["mt-8 pt-6 border-t flex items-center gap-3", c.value ? "border-slate-700" : "border-slate-100"])
              }, [
                a("div", {
                  class: d(["w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-md text-lg", c.value ? "bg-slate-700" : "bg-slate-900"])
                }, S(o.value.brand ? o.value.brand[0] : "B"), 3),
                a("div", null, [
                  a("div", {
                    class: d(["font-bold text-sm mb-0.5", c.value ? "text-white" : "text-slate-900"])
                  }, S(o.value.brand), 3),
                  a("div", {
                    class: d(["text-xs flex items-center gap-1", c.value ? "text-slate-400" : "text-slate-500"])
                  }, [...m[29] || (m[29] = [
                    a("span", { class: "text-amber-500" }, "★★★★★", -1),
                    se(" 4.9 • Official Seller ", -1)
                  ])], 2)
                ])
              ], 2)
            ], 2)
          ])
        ]),
        a("div", {
          class: d(["mt-2 pt-1 border-t px-4 lg:px-0", c.value ? "border-slate-800" : "border-slate-200"])
        }, [
          a("h2", {
            class: d(["text-2xl font-bold mb-8 tracking-tight", c.value ? "text-white" : "text-slate-900"])
          }, "You might also like", 2),
          a("div", Fn, [
            (w(!0), y(j, null, U(_.value, (b, R) => (w(), y("div", {
              key: R,
              class: "min-w-[200px] w-[200px] md:min-w-[240px] md:w-[240px] cursor-pointer snap-start group"
            }, [
              a("div", {
                class: d(["h-[280px] md:h-[320px] rounded-2xl relative mb-4 overflow-hidden border transition-colors", c.value ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100 shadow-sm"])
              }, [
                a("img", {
                  src: b.image,
                  class: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                }, null, 8, Ln),
                a("div", jn, "-" + S(b.discount) + "%", 1),
                m[30] || (m[30] = a("div", { class: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]" }, [
                  a("button", { class: "bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl" }, " Quick View "),
                  a("button", { class: "absolute bottom-3 left-3 right-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer" }, "Add to Cart")
                ], -1))
              ], 2),
              a("div", Un, [
                a("span", {
                  class: d(["font-bold text-lg", c.value ? "text-white" : "text-slate-900"])
                }, S(H(b.price)) + " ₽", 3),
                a("s", Dn, S(H(b.mrp)) + " ₽", 1)
              ]),
              a("div", {
                class: d(["text-sm leading-snug h-10 overflow-hidden text-ellipsis line-clamp-2 mb-4 font-medium", c.value ? "text-slate-400" : "text-slate-600"])
              }, S(b.title), 3)
            ]))), 128))
          ])
        ], 2),
        a("div", {
          class: d(["fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t p-4 pb-[max(16px,env(safe-area-inset-bottom))] flex items-center justify-between gap-4 z-50 md:hidden shadow-[0_-4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300", c.value ? "bg-[#0f172a]/90 border-slate-800" : "bg-white/90 border-slate-200"])
        }, [
          a("div", Mn, [
            a("span", {
              class: d(["text-xl font-extrabold leading-none tracking-tight", c.value ? "text-white" : "text-slate-900"])
            }, S(H(q.value)) + " ₽", 3),
            D.value > q.value ? (w(), y("span", zn, S(H(D.value)), 1)) : z("", !0)
          ]),
          a("button", {
            class: "flex-1 h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base shadow-lg shadow-blue-500/40 active:scale-95 transition-all",
            onClick: ie
          }, "Add to Cart")
        ], 2)
      ])) : (w(), y("div", {
        key: 2,
        class: d(["min-h-[60vh] flex flex-col items-center justify-center font-medium opacity-60", c.value ? "text-slate-400" : "text-slate-500"])
      }, [
        a("div", {
          class: d(["p-4 rounded-full mb-4", c.value ? "bg-slate-800" : "bg-slate-100"])
        }, [...m[31] || (m[31] = [
          be('<svg class="w-12 h-12 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-bae44606><circle cx="12" cy="12" r="10" data-v-bae44606></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2" data-v-bae44606></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-bae44606></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-bae44606></line></svg>', 1)
        ])], 2),
        m[32] || (m[32] = a("span", { class: "text-lg" }, "Product Not Found", -1))
      ], 2)),
      v.value ? (w(), y("div", {
        key: 3,
        class: d(["fixed inset-0 z-[100] flex justify-center items-end md:items-center backdrop-blur-sm transition-colors duration-300", c.value ? "bg-black/70" : "bg-black/40"]),
        onClick: m[3] || (m[3] = Ut((b) => v.value = !1, ["self"]))
      }, [
        a("div", {
          class: d(["w-full md:w-[600px] md:rounded-[32px] rounded-t-[32px] p-8 flex flex-col max-h-[85vh] shadow-2xl animate-[slideUp_0.3s_ease-out] md:animate-none border", c.value ? "bg-[#151e32] border-slate-700" : "bg-white border-white"])
        }, [
          a("div", In, [
            a("h3", {
              class: d(["text-2xl font-bold tracking-tight", c.value ? "text-white" : "text-slate-900"])
            }, "Size Chart", 2),
            a("button", {
              onClick: m[2] || (m[2] = (b) => v.value = !1),
              class: d(["p-2 rounded-full transition hover:scale-110", c.value ? "text-slate-400 hover:bg-white/10" : "text-slate-400 hover:bg-slate-100"])
            }, [...m[33] || (m[33] = [
              a("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                a("path", { d: "M18 6L6 18M6 6l12 12" })
              ], -1)
            ])], 2)
          ]),
          F.value ? (w(), y("div", $n, [
            a("img", {
              src: F.value,
              class: d(["max-w-full h-auto object-contain rounded-xl shadow-sm", c.value ? "border border-slate-700" : "border border-slate-100"])
            }, null, 10, qn)
          ])) : (w(), y("div", {
            key: 1,
            class: d(["flex flex-col items-center justify-center h-48 font-medium opacity-50", c.value ? "text-slate-400" : "text-slate-500"])
          }, [...m[34] || (m[34] = [
            be('<svg class="w-12 h-12 mb-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-bae44606><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-bae44606></path><polyline points="14 2 14 8 20 8" data-v-bae44606></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-bae44606></line><line x1="16" y1="17" x2="8" y2="17" data-v-bae44606></line><polyline points="10 9 9 9 8 9" data-v-bae44606></polyline></svg><span data-v-bae44606>Size chart not available</span>', 2)
          ])], 2))
        ], 2)
      ], 2)) : z("", !0)
    ], 10, gr));
  }
}), Wn = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, n] of t)
    s[r] = n;
  return s;
}, Xn = /* @__PURE__ */ Wn(Vn, [["__scopeId", "data-v-bae44606"]]), Kn = /* @__PURE__ */ ut({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, s) => (w(), It(Xn, {
      _p: e._p,
      _$p: e._$p,
      _$cb: e._$cb
    }, null, 8, ["_p", "_$p", "_$cb"]));
  }
}), bo = async (e) => ({
  set: async (t, s) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = $t(Kn, {
      _p: e,
      _$p: t,
      _$cb: s
    }), o = e.f.name("vue-root"), l = {
      r: `<div id="${o}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          s?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const u = document.getElementById(o);
      u ? n.mount(u) : console.warn(`[Hydrator] Target element #${o} not found.`);
    }, 0), l;
  }
});
export {
  bo as hydrator,
  bo as index
};
