const { defineComponent: $t, ref: U, computed: H, watch: at, onMounted: hs, nextTick: ms, openBlock: g, createElementBlock: y, normalizeClass: f, createElementVNode: o, createStaticVNode: Ie, createCommentVNode: B, createTextVNode: pe, Fragment: se, renderList: re, toDisplayString: A, withDirectives: We, withKeys: _t, vModelText: kt, withModifiers: bs, vShow: Et, createBlock: xs, createApp: vs } = window.Vue;
function Ht(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: gs } = Object.prototype, { getPrototypeOf: Ae } = Object, { iterator: Me, toStringTag: qt } = Symbol, Qe = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), je = (e, t) => {
  let s = e;
  const r = [];
  for (; s != null && s !== Object.prototype; ) {
    if (r.indexOf(s) !== -1)
      return !1;
    if (r.push(s), Qe(s, t))
      return !0;
    s = Ae(s);
  }
  return !1;
}, ys = (e, t) => e != null && je(e, t) ? e[t] : void 0, mt = /* @__PURE__ */ ((e) => (t) => {
  const s = gs.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (e) => (e = e.toLowerCase(), (t) => mt(t) === e), tt = (e) => (t) => typeof t === e, { isArray: Ee } = Array, Te = tt("undefined");
function Pe(e) {
  return e !== null && !Te(e) && e.constructor !== null && !Te(e.constructor) && Y(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Vt = de("ArrayBuffer");
function ws(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Vt(e.buffer), t;
}
const _s = tt("string"), Y = tt("function"), Jt = tt("number"), Fe = (e) => e !== null && typeof e == "object", ks = (e) => e === !0 || e === !1, Ke = (e) => {
  if (!Fe(e))
    return !1;
  const t = Ae(e);
  return (t === null || t === Object.prototype || Ae(t) === null) && // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
  // Symbol.iterator as evidence the value is a tagged/iterable type rather
  // than a plain object, while ignoring keys injected onto Object.prototype.
  !je(e, qt) && !je(e, Me);
}, Es = (e) => {
  if (!Fe(e) || Pe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Cs = de("Date"), Rs = de("File"), Ss = (e) => !!(e && typeof e.uri < "u"), Os = (e) => e && typeof e.getParts < "u", As = de("Blob"), Ts = de("FileList"), Ps = (e) => Fe(e) && Y(e.pipe);
function Fs() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ct = Fs(), Rt = typeof Ct.FormData < "u" ? Ct.FormData : void 0, Ns = (e) => {
  if (!e) return !1;
  if (Rt && e instanceof Rt) return !0;
  const t = Ae(e);
  if (!t || t === Object.prototype || !Y(e.append)) return !1;
  const s = mt(e);
  return s === "formdata" || // detect form-data instance
  s === "object" && Y(e.toString) && e.toString() === "[object FormData]";
}, Ds = de("URLSearchParams"), [Ls, Bs, Is, Us] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(de), js = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ze(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), Ee(e))
    for (r = 0, n = e.length; r < n; r++)
      t.call(null, e[r], r, e);
  else {
    if (Pe(e))
      return;
    const a = s ? Object.getOwnPropertyNames(e) : Object.keys(e), d = a.length;
    let l;
    for (r = 0; r < d; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function Wt(e, t) {
  if (Pe(e))
    return null;
  t = t.toLowerCase();
  const s = Object.keys(e);
  let r = s.length, n;
  for (; r-- > 0; )
    if (n = s[r], t === n.toLowerCase())
      return n;
  return null;
}
const _e = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xt = (e) => !Te(e) && e !== _e;
function ct(...e) {
  const { caseless: t, skipUndefined: s } = Xt(this) && this || {}, r = {}, n = (a, d) => {
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const l = t && typeof d == "string" && Wt(r, d) || d, p = Qe(r, l) ? r[l] : void 0;
    Ke(p) && Ke(a) ? r[l] = ct(p, a) : Ke(a) ? r[l] = ct({}, a) : Ee(a) ? r[l] = a.slice() : (!s || !Te(a)) && (r[l] = a);
  };
  for (let a = 0, d = e.length; a < d; a++) {
    const l = e[a];
    if (!l || Pe(l) || (ze(l, n), typeof l != "object" || Ee(l)))
      continue;
    const p = Object.getOwnPropertySymbols(l);
    for (let b = 0; b < p.length; b++) {
      const h = p[b];
      Zs.call(l, h) && n(l[h], h);
    }
  }
  return r;
}
const Ms = (e, t, s, { allOwnKeys: r } = {}) => (ze(
  t,
  (n, a) => {
    s && Y(n) ? Object.defineProperty(e, a, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Ht(n, s),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, a, {
      __proto__: null,
      value: n,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), zs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $s = (e, t, s, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Hs = (e, t, s, r) => {
  let n, a, d;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), a = n.length; a-- > 0; )
      d = n[a], (!r || r(d, e, t)) && !l[d] && (t[d] = e[d], l[d] = !0);
    e = s !== !1 && Ae(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, qs = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const r = e.indexOf(t, s);
  return r !== -1 && r === s;
}, Vs = (e) => {
  if (!e) return null;
  if (Ee(e)) return e;
  let t = e.length;
  if (!Jt(t)) return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, Js = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ae(Uint8Array)), Ws = (e, t) => {
  const r = (e && e[Me]).call(e);
  let n;
  for (; (n = r.next()) && !n.done; ) {
    const a = n.value;
    t.call(e, a[0], a[1]);
  }
}, Xs = (e, t) => {
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; )
    r.push(s);
  return r;
}, Ks = de("HTMLFormElement"), Gs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, r, n) {
  return r.toUpperCase() + n;
}), { propertyIsEnumerable: Zs } = Object.prototype, Qs = de("RegExp"), Kt = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), r = {};
  ze(s, (n, a) => {
    let d;
    (d = t(n, a, e)) !== !1 && (r[a] = d || n);
  }), Object.defineProperties(e, r);
}, Ys = (e) => {
  Kt(e, (t, s) => {
    if (Y(e) && ["arguments", "caller", "callee"].includes(s))
      return !1;
    const r = e[s];
    if (Y(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, er = (e, t) => {
  const s = {}, r = (n) => {
    n.forEach((a) => {
      s[a] = !0;
    });
  };
  return Ee(e) ? r(e) : r(String(e).split(t)), s;
}, tr = () => {
}, sr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function rr(e) {
  return !!(e && Y(e.append) && e[qt] === "FormData" && e[Me]);
}
const nr = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), s = (r) => {
    if (Fe(r)) {
      if (t.has(r))
        return;
      if (Pe(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const n = Ee(r) ? [] : {};
        return ze(r, (a, d) => {
          const l = s(a);
          !Te(l) && (n[d] = l);
        }), t.delete(r), n;
      }
    }
    return r;
  };
  return s(e);
}, or = de("AsyncFunction"), ar = (e) => e && (Fe(e) || Y(e)) && Y(e.then) && Y(e.catch), Gt = ((e, t) => e ? setImmediate : t ? ((s, r) => (_e.addEventListener(
  "message",
  ({ source: n, data: a }) => {
    n === _e && a === s && r.length && r.shift()();
  },
  !1
), (n) => {
  r.push(n), _e.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(typeof setImmediate == "function", Y(_e.postMessage)), lr = typeof queueMicrotask < "u" ? queueMicrotask.bind(_e) : typeof process < "u" && process.nextTick || Gt, Zt = (e) => e != null && Y(e[Me]), ir = (e) => e != null && je(e, Me) && Zt(e), u = {
  isArray: Ee,
  isArrayBuffer: Vt,
  isBuffer: Pe,
  isFormData: Ns,
  isArrayBufferView: ws,
  isString: _s,
  isNumber: Jt,
  isBoolean: ks,
  isObject: Fe,
  isPlainObject: Ke,
  isEmptyObject: Es,
  isReadableStream: Ls,
  isRequest: Bs,
  isResponse: Is,
  isHeaders: Us,
  isUndefined: Te,
  isDate: Cs,
  isFile: Rs,
  isReactNativeBlob: Ss,
  isReactNative: Os,
  isBlob: As,
  isRegExp: Qs,
  isFunction: Y,
  isStream: Ps,
  isURLSearchParams: Ds,
  isTypedArray: Js,
  isFileList: Ts,
  forEach: ze,
  merge: ct,
  extend: Ms,
  trim: js,
  stripBOM: zs,
  inherits: $s,
  toFlatObject: Hs,
  kindOf: mt,
  kindOfTest: de,
  endsWith: qs,
  toArray: Vs,
  forEachEntry: Ws,
  matchAll: Xs,
  isHTMLForm: Ks,
  hasOwnProperty: Qe,
  hasOwnProp: Qe,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: je,
  getSafeProp: ys,
  reduceDescriptors: Kt,
  freezeMethods: Ys,
  toObjectSet: er,
  toCamelCase: Gs,
  noop: tr,
  toFiniteNumber: sr,
  findKey: Wt,
  global: _e,
  isContextDefined: Xt,
  isSpecCompliantForm: rr,
  toJSONObject: nr,
  isAsyncFn: or,
  isThenable: ar,
  setImmediate: Gt,
  asap: lr,
  isIterable: Zt,
  isSafeIterable: ir
}, dr = u.toObjectSet([
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
]), ur = (e) => {
  const t = {};
  let s, r, n;
  return e && e.split(`
`).forEach(function(d) {
    n = d.indexOf(":"), s = d.substring(0, n).trim().toLowerCase(), r = d.substring(n + 1).trim(), !(!s || t[s] && dr[s]) && (s === "set-cookie" ? t[s] ? t[s].push(r) : t[s] = [r] : t[s] = t[s] ? t[s] + ", " + r : r);
  }), t;
};
function cr(e) {
  let t = 0, s = e.length;
  for (; t < s; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; s > t; ) {
    const r = e.charCodeAt(s - 1);
    if (r !== 9 && r !== 32)
      break;
    s -= 1;
  }
  return t === 0 && s === e.length ? e : e.slice(t, s);
}
const fr = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), pr = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function bt(e, t) {
  return u.isArray(e) ? e.map((s) => bt(s, t)) : cr(String(e).replace(t, ""));
}
const hr = (e) => bt(e, fr), mr = (e) => bt(e, pr);
function Qt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return u.forEach(e.toJSON(), (s, r) => {
    t[r] = mr(s);
  }), t;
}
const St = /* @__PURE__ */ Symbol("internals");
function Ue(e) {
  return e && String(e).trim().toLowerCase();
}
function Ge(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Ge) : hr(String(e));
}
function br(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = s.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const xr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function lt(e, t, s, r, n) {
  if (u.isFunction(r))
    return r.call(this, t, s);
  if (n && (t = s), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function vr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, r) => s.toUpperCase() + r);
}
function gr(e, t) {
  const s = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(n, a, d) {
        return this[r].call(this, t, n, a, d);
      },
      configurable: !0
    });
  });
}
let X = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, r) {
    const n = this;
    function a(l, p, b) {
      const h = Ue(p);
      if (!h)
        return;
      const v = u.findKey(n, h);
      (!v || n[v] === void 0 || b === !0 || b === void 0 && n[v] !== !1) && (n[v || p] = Ge(l));
    }
    const d = (l, p) => u.forEach(l, (b, h) => a(b, h, p));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      d(t, s);
    else if (u.isString(t) && (t = t.trim()) && !xr(t))
      d(ur(t), s);
    else if (u.isObject(t) && u.isSafeIterable(t)) {
      let l = /* @__PURE__ */ Object.create(null), p, b;
      for (const h of t) {
        if (!u.isArray(h))
          throw new TypeError("Object iterator must return a key-value pair");
        b = h[0], u.hasOwnProp(l, b) ? (p = l[b], l[b] = u.isArray(p) ? [...p, h[1]] : [p, h[1]]) : l[b] = h[1];
      }
      d(l, s);
    } else
      t != null && a(s, t, r);
    return this;
  }
  get(t, s) {
    if (t = Ue(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const n = this[r];
        if (!s)
          return n;
        if (s === !0)
          return br(n);
        if (u.isFunction(s))
          return s.call(this, n, r);
        if (u.isRegExp(s))
          return s.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = Ue(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!s || lt(this, this[r], r, s)));
    }
    return !1;
  }
  delete(t, s) {
    const r = this;
    let n = !1;
    function a(d) {
      if (d = Ue(d), d) {
        const l = u.findKey(r, d);
        l && (!s || lt(r, r[l], l, s)) && (delete r[l], n = !0);
      }
    }
    return u.isArray(t) ? t.forEach(a) : a(t), n;
  }
  clear(t) {
    const s = Object.keys(this);
    let r = s.length, n = !1;
    for (; r--; ) {
      const a = s[r];
      (!t || lt(this, this[a], a, t, !0)) && (delete this[a], n = !0);
    }
    return n;
  }
  normalize(t) {
    const s = this, r = {};
    return u.forEach(this, (n, a) => {
      const d = u.findKey(r, a);
      if (d) {
        s[d] = Ge(n), delete s[a];
        return;
      }
      const l = t ? vr(a) : String(a).trim();
      l !== a && delete s[a], s[l] = Ge(n), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, n) => {
      r != null && r !== !1 && (s[n] = t && u.isArray(r) ? r.join(", ") : r);
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
    const r = (this[St] = this[St] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function a(d) {
      const l = Ue(d);
      r[l] || (gr(n, d), r[l] = !0);
    }
    return u.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
X.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
u.reduceDescriptors(X.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[s] = r;
    }
  };
});
u.freezeMethods(X);
const yr = "[REDACTED ****]";
function wr(e) {
  if (u.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (u.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function _r(e, t) {
  const s = new Set(t.map((a) => String(a).toLowerCase())), r = [], n = (a) => {
    if (a === null || typeof a != "object" || u.isBuffer(a)) return a;
    if (r.indexOf(a) !== -1) return;
    a instanceof X && (a = a.toJSON()), r.push(a);
    let d;
    if (u.isArray(a))
      d = [], a.forEach((l, p) => {
        const b = n(l);
        u.isUndefined(b) || (d[p] = b);
      });
    else {
      if (!u.isPlainObject(a) && wr(a))
        return r.pop(), a;
      d = /* @__PURE__ */ Object.create(null);
      for (const [l, p] of Object.entries(a)) {
        const b = s.has(l.toLowerCase()) ? yr : n(p);
        u.isUndefined(b) || (d[l] = b);
      }
    }
    return r.pop(), d;
  };
  return n(e);
}
let _ = class Yt extends Error {
  static from(t, s, r, n, a, d) {
    const l = new Yt(t.message, s || t.code, r, n, a);
    return l.cause = t, l.name = t.name, t.status != null && l.status == null && (l.status = t.status), d && Object.assign(l, d), l;
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
  constructor(t, s, r, n, a) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, s && (this.code = s), r && (this.config = r), n && (this.request = n), a && (this.response = a, this.status = a.status);
  }
  toJSON() {
    const t = this.config, s = t && u.hasOwnProp(t, "redact") ? t.redact : void 0, r = u.isArray(s) && s.length > 0 ? _r(t, s) : u.toJSONObject(t);
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
      config: r,
      code: this.code,
      status: this.status
    };
  }
};
_.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
_.ERR_BAD_OPTION = "ERR_BAD_OPTION";
_.ECONNABORTED = "ECONNABORTED";
_.ETIMEDOUT = "ETIMEDOUT";
_.ECONNREFUSED = "ECONNREFUSED";
_.ERR_NETWORK = "ERR_NETWORK";
_.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
_.ERR_DEPRECATED = "ERR_DEPRECATED";
_.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
_.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
_.ERR_CANCELED = "ERR_CANCELED";
_.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
_.ERR_INVALID_URL = "ERR_INVALID_URL";
_.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const kr = null, es = 100;
function ft(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function ts(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function it(e, t, s) {
  return e ? e.concat(t).map(function(n, a) {
    return n = ts(n), !s && a ? "[" + n + "]" : n;
  }).join(s ? "." : "") : t;
}
function Er(e) {
  return u.isArray(e) && !e.some(ft);
}
const Cr = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function st(e, t, s) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = u.toFlatObject(
    s,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(R, S) {
      return !u.isUndefined(S[R]);
    }
  );
  const r = s.metaTokens, n = s.visitor || F, a = s.dots, d = s.indexes, l = s.Blob || typeof Blob < "u" && Blob, p = s.maxDepth === void 0 ? es : s.maxDepth, b = l && u.isSpecCompliantForm(t), h = [];
  if (!u.isFunction(n))
    throw new TypeError("visitor must be a function");
  function v(x) {
    if (x === null) return "";
    if (u.isDate(x))
      return x.toISOString();
    if (u.isBoolean(x))
      return x.toString();
    if (!b && u.isBlob(x))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(x) || u.isTypedArray(x) ? b && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x;
  }
  function O(x) {
    if (x > p)
      throw new _(
        "Object is too deeply nested (" + x + " levels). Max depth: " + p,
        _.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function C(x, R) {
    if (p === 1 / 0)
      return JSON.stringify(x);
    const S = [];
    return JSON.stringify(x, function(I, L) {
      if (!u.isObject(L))
        return L;
      for (; S.length && S[S.length - 1] !== this; )
        S.pop();
      return S.push(L), O(R + S.length - 1), L;
    });
  }
  function F(x, R, S) {
    let P = x;
    if (u.isReactNative(t) && u.isReactNativeBlob(x))
      return t.append(it(S, R, a), v(x)), !1;
    if (x && !S && typeof x == "object") {
      if (u.endsWith(R, "{}"))
        R = r ? R : R.slice(0, -2), x = C(x, 1);
      else if (u.isArray(x) && Er(x) || (u.isFileList(x) || u.endsWith(R, "[]")) && (P = u.toArray(x)))
        return R = ts(R), P.forEach(function(L, q) {
          !(u.isUndefined(L) || L === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? it([R], q, a) : d === null ? R : R + "[]",
            v(L)
          );
        }), !1;
    }
    return ft(x) ? !0 : (t.append(it(S, R, a), v(x)), !1);
  }
  const N = Object.assign(Cr, {
    defaultVisitor: F,
    convertValue: v,
    isVisitable: ft
  });
  function E(x, R, S = 0) {
    if (!u.isUndefined(x)) {
      if (O(S), h.indexOf(x) !== -1)
        throw new Error("Circular reference detected in " + R.join("."));
      h.push(x), u.forEach(x, function(I, L) {
        (!(u.isUndefined(I) || I === null) && n.call(t, I, u.isString(L) ? L.trim() : L, R, N)) === !0 && E(I, R ? R.concat(L) : [L], S + 1);
      }), h.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Ot(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(r) {
    return t[r];
  });
}
function xt(e, t) {
  this._pairs = [], e && st(e, this, t);
}
const ss = xt.prototype;
ss.append = function(t, s) {
  this._pairs.push([t, s]);
};
ss.toString = function(t) {
  const s = t ? function(r) {
    return t.call(this, r, Ot);
  } : Ot;
  return this._pairs.map(function(n) {
    return s(n[0]) + "=" + s(n[1]);
  }, "").join("&");
};
function Rr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function rs(e, t, s) {
  if (!t)
    return e;
  const r = u.isFunction(s) ? {
    serialize: s
  } : s, n = u.getSafeProp(r, "encode") || Rr, a = u.getSafeProp(r, "serialize");
  let d;
  if (a ? d = a(t, r) : d = u.isURLSearchParams(t) ? t.toString() : new xt(t, r).toString(n), d) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return e;
}
class At {
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
    u.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const vt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, Sr = typeof URLSearchParams < "u" ? URLSearchParams : xt, Or = typeof FormData < "u" ? FormData : null, Ar = typeof Blob < "u" ? Blob : null, Tr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sr,
    FormData: Or,
    Blob: Ar
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, gt = typeof window < "u" && typeof document < "u", pt = typeof navigator == "object" && navigator || void 0, Pr = gt && (!pt || ["ReactNative", "NativeScript", "NS"].indexOf(pt.product) < 0), Fr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Nr = gt && window.location.href || "http://localhost", Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: gt,
  hasStandardBrowserEnv: Pr,
  hasStandardBrowserWebWorkerEnv: Fr,
  navigator: pt,
  origin: Nr
}, Symbol.toStringTag, { value: "Module" })), V = {
  ...Dr,
  ...Tr
};
function Lr(e, t) {
  return st(e, new V.classes.URLSearchParams(), {
    visitor: function(s, r, n, a) {
      return V.isNode && u.isBuffer(s) ? (this.append(r, s.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Tt = es;
function ns(e) {
  if (e > Tt)
    throw new _(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Tt,
      _.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function Br(e) {
  const t = [], s = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = s.exec(e)) !== null; )
    ns(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function Ir(e) {
  const t = {}, s = Object.keys(e);
  let r;
  const n = s.length;
  let a;
  for (r = 0; r < n; r++)
    a = s[r], t[a] = e[a];
  return t;
}
function os(e) {
  function t(s, r, n, a) {
    ns(a);
    let d = s[a++];
    if (d === "__proto__") return !0;
    const l = Number.isFinite(+d), p = a >= s.length;
    return d = !d && u.isArray(n) ? n.length : d, p ? (u.hasOwnProp(n, d) ? n[d] = u.isArray(n[d]) ? n[d].concat(r) : [n[d], r] : n[d] = r, !l) : ((!u.hasOwnProp(n, d) || !u.isObject(n[d])) && (n[d] = []), t(s, r, n[d], a) && u.isArray(n[d]) && (n[d] = Ir(n[d])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const s = {};
    return u.forEachEntry(e, (r, n) => {
      t(Br(r), n, s, 0);
    }), s;
  }
  return null;
}
const Oe = (e, t) => e != null && u.hasOwnProp(e, t) ? e[t] : void 0;
function Ur(e, t, s) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (s || JSON.stringify)(e);
}
const $e = {
  transitional: vt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, s) {
      const r = s.getContentType() || "", n = r.indexOf("application/json") > -1, a = u.isObject(t);
      if (a && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
        return n ? JSON.stringify(os(t)) : t;
      if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
        return t;
      if (u.isArrayBufferView(t))
        return t.buffer;
      if (u.isURLSearchParams(t))
        return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        const p = Oe(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Lr(t, p).toString();
        if ((l = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const b = Oe(this, "env"), h = b && b.FormData;
          return st(
            l ? { "files[]": t } : t,
            h && new h(),
            p
          );
        }
      }
      return a || n ? (s.setContentType("application/json", !1), Ur(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const s = Oe(this, "transitional") || $e.transitional, r = s && s.forcedJSONParsing, n = Oe(this, "responseType"), a = n === "json";
      if (u.isResponse(t) || u.isReadableStream(t))
        return t;
      if (t && u.isString(t) && (r && !n || a)) {
        const l = !(s && s.silentJSONParsing) && a;
        try {
          return JSON.parse(t, Oe(this, "parseReviver"));
        } catch (p) {
          if (l)
            throw p.name === "SyntaxError" ? _.from(p, _.ERR_BAD_RESPONSE, this, null, Oe(this, "response")) : p;
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
    FormData: V.classes.FormData,
    Blob: V.classes.Blob
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
u.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  $e.headers[e] = {};
});
function dt(e, t) {
  const s = this || $e, r = t || s, n = X.from(r.headers);
  let a = r.data;
  return u.forEach(e, function(l) {
    a = l.call(s, a, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), a;
}
function as(e) {
  return !!(e && e.__CANCEL__);
}
let He = class extends _ {
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
    super(t ?? "canceled", _.ERR_CANCELED, s, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function ls(e, t, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status) ? e(s) : t(new _(
    "Request failed with status code " + s.status,
    s.status >= 400 && s.status < 500 ? _.ERR_BAD_REQUEST : _.ERR_BAD_RESPONSE,
    s.config,
    s.request,
    s
  ));
}
function jr(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Mr(e, t) {
  e = e || 10;
  const s = new Array(e), r = new Array(e);
  let n = 0, a = 0, d;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const b = Date.now(), h = r[a];
    d || (d = b), s[n] = p, r[n] = b;
    let v = a, O = 0;
    for (; v !== n; )
      O += s[v++], v = v % e;
    if (n = (n + 1) % e, n === a && (a = (a + 1) % e), b - d < t)
      return;
    const C = h && b - h;
    return C ? Math.round(O * 1e3 / C) : void 0;
  };
}
function zr(e, t) {
  let s = 0, r = 1e3 / t, n, a;
  const d = (b, h = Date.now()) => {
    s = h, n = null, a && (clearTimeout(a), a = null), e(...b);
  };
  return [(...b) => {
    const h = Date.now(), v = h - s;
    v >= r ? d(b, h) : (n = b, a || (a = setTimeout(() => {
      a = null, d(n);
    }, r - v)));
  }, () => n && d(n)];
}
const Ye = (e, t, s = 3) => {
  let r = 0;
  const n = Mr(50, 250);
  return zr((a) => {
    if (!a || typeof a.loaded != "number")
      return;
    const d = a.loaded, l = a.lengthComputable ? a.total : void 0, p = l != null ? Math.min(d, l) : d, b = Math.max(0, p - r), h = n(b);
    r = Math.max(r, p);
    const v = {
      loaded: p,
      total: l,
      progress: l ? p / l : void 0,
      bytes: b,
      rate: h || void 0,
      estimated: h && l ? (l - p) / h : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(v);
  }, s);
}, Pt = (e, t) => {
  const s = e != null;
  return [
    (r) => t[0]({
      lengthComputable: s,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Ft = (e) => (...t) => u.asap(() => e(...t)), $r = V.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (s) => (s = new URL(s, V.origin), e.protocol === s.protocol && e.host === s.host && (t || e.port === s.port)))(
  new URL(V.origin),
  V.navigator && /(msie|trident)/i.test(V.navigator.userAgent)
) : () => !0, Hr = V.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, s, r, n, a, d) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      u.isNumber(s) && l.push(`expires=${new Date(s).toUTCString()}`), u.isString(r) && l.push(`path=${r}`), u.isString(n) && l.push(`domain=${n}`), a === !0 && l.push("secure"), u.isString(d) && l.push(`SameSite=${d}`), document.cookie = l.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let s = 0; s < t.length; s++) {
        const r = t[s].replace(/^\s+/, ""), n = r.indexOf("=");
        if (n !== -1 && r.slice(0, n) === e)
          return decodeURIComponent(r.slice(n + 1));
      }
      return null;
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
function qr(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const Jr = /^https?:(?!\/\/)/i, Wr = /[\t\n\r]/g;
function Xr(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t);
}
function Kr(e) {
  return Xr(e).replace(Wr, "");
}
function Nt(e, t) {
  if (typeof e == "string" && Jr.test(Kr(e)))
    throw new _(
      'Invalid URL: missing "//" after protocol',
      _.ERR_INVALID_URL,
      t
    );
}
function is(e, t, s, r) {
  Nt(t, r);
  let n = !qr(t);
  return e && (n || s === !1) ? (Nt(e, r), Vr(e, t)) : t;
}
const Dt = (e) => e instanceof X ? { ...e } : e;
function Ce(e, t) {
  t = t || {};
  const s = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(s, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function r(h, v, O, C) {
    return u.isPlainObject(h) && u.isPlainObject(v) ? u.merge.call({ caseless: C }, h, v) : u.isPlainObject(v) ? u.merge({}, v) : u.isArray(v) ? v.slice() : v;
  }
  function n(h, v, O, C) {
    if (u.isUndefined(v)) {
      if (!u.isUndefined(h))
        return r(void 0, h, O, C);
    } else return r(h, v, O, C);
  }
  function a(h, v) {
    if (!u.isUndefined(v))
      return r(void 0, v);
  }
  function d(h, v) {
    if (u.isUndefined(v)) {
      if (!u.isUndefined(h))
        return r(void 0, h);
    } else return r(void 0, v);
  }
  function l(h) {
    const v = u.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!u.isUndefined(v))
      if (u.isPlainObject(v)) {
        if (u.hasOwnProp(v, h))
          return v[h];
      } else
        return;
    const O = u.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (u.isPlainObject(O) && u.hasOwnProp(O, h))
      return O[h];
  }
  function p(h, v, O) {
    if (u.hasOwnProp(t, O))
      return r(h, v);
    if (u.hasOwnProp(e, O))
      return r(void 0, h);
  }
  const b = {
    url: a,
    method: a,
    data: a,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    allowedSocketPaths: d,
    responseEncoding: d,
    validateStatus: p,
    headers: (h, v, O) => n(Dt(h), Dt(v), O, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(v) {
    if (v === "__proto__" || v === "constructor" || v === "prototype") return;
    const O = u.hasOwnProp(b, v) ? b[v] : n, C = u.hasOwnProp(e, v) ? e[v] : void 0, F = u.hasOwnProp(t, v) ? t[v] : void 0, N = O(C, F, v);
    u.isUndefined(N) && O !== p || (s[v] = N);
  }), u.hasOwnProp(t, "validateStatus") && u.isUndefined(t.validateStatus) && l("validateStatusUndefinedResolves") === !1 && (u.hasOwnProp(e, "validateStatus") ? s.validateStatus = r(void 0, e.validateStatus) : delete s.validateStatus), s;
}
const Gr = ["content-type", "content-length"];
function Zr(e, t, s) {
  if (s !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, n]) => {
    Gr.includes(r.toLowerCase()) && e.set(r, n);
  });
}
const Qr = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, s) => String.fromCharCode(parseInt(s, 16))
);
function ds(e) {
  const t = Ce({}, e), s = (O) => u.hasOwnProp(t, O) ? t[O] : void 0, r = s("data");
  let n = s("withXSRFToken");
  const a = s("xsrfHeaderName"), d = s("xsrfCookieName");
  let l = s("headers");
  const p = s("auth"), b = s("baseURL"), h = s("allowAbsoluteUrls"), v = s("url");
  if (t.headers = l = X.from(l), t.url = rs(
    is(b, v, h, t),
    s("params"),
    s("paramsSerializer")
  ), p) {
    const O = u.getSafeProp(p, "username") || "", C = u.getSafeProp(p, "password") || "";
    l.set(
      "Authorization",
      "Basic " + btoa(O + ":" + (C ? Qr(C) : ""))
    );
  }
  if (u.isFormData(r) && (V.hasStandardBrowserEnv || V.hasStandardBrowserWebWorkerEnv || u.isReactNative(r) ? l.setContentType(void 0) : u.isFunction(r.getHeaders) && Zr(l, r.getHeaders(), s("formDataHeaderPolicy"))), V.hasStandardBrowserEnv && (u.isFunction(n) && (n = n(t)), n === !0 || n == null && $r(t.url))) {
    const C = a && d && Hr.read(d);
    C && l.set(a, C);
  }
  return t;
}
const Yr = typeof XMLHttpRequest < "u", en = Yr && function(e) {
  return new Promise(function(s, r) {
    const n = ds(e);
    let a = n.data;
    const d = X.from(n.headers).normalize();
    let { responseType: l, onUploadProgress: p, onDownloadProgress: b } = n, h, v, O, C, F;
    function N() {
      C && C(), F && F(), n.cancelToken && n.cancelToken.unsubscribe(h), n.signal && n.signal.removeEventListener("abort", h);
    }
    let E = new XMLHttpRequest();
    E.open(n.method.toUpperCase(), n.url, !0), E.timeout = n.timeout;
    function x() {
      if (!E)
        return;
      const S = X.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), I = {
        data: !l || l === "text" || l === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: S,
        config: e,
        request: E
      };
      ls(
        function(q) {
          s(q), N();
        },
        function(q) {
          r(q), N();
        },
        I
      ), E = null;
    }
    "onloadend" in E ? E.onloadend = x : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.startsWith("file:")) || setTimeout(x);
    }, E.onabort = function() {
      E && (r(new _("Request aborted", _.ECONNABORTED, e, E)), N(), E = null);
    }, E.onerror = function(P) {
      const I = P && P.message ? P.message : "Network Error", L = new _(I, _.ERR_NETWORK, e, E);
      L.event = P || null, r(L), N(), E = null;
    }, E.ontimeout = function() {
      let P = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const I = n.transitional || vt;
      n.timeoutErrorMessage && (P = n.timeoutErrorMessage), r(
        new _(
          P,
          I.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
          e,
          E
        )
      ), N(), E = null;
    }, a === void 0 && d.setContentType(null), "setRequestHeader" in E && u.forEach(Qt(d), function(P, I) {
      E.setRequestHeader(I, P);
    }), u.isUndefined(n.withCredentials) || (E.withCredentials = !!n.withCredentials), l && l !== "json" && (E.responseType = n.responseType), b && ([O, F] = Ye(b, !0), E.addEventListener("progress", O)), p && E.upload && ([v, C] = Ye(p), E.upload.addEventListener("progress", v), E.upload.addEventListener("loadend", C)), (n.cancelToken || n.signal) && (h = (S) => {
      E && (r(!S || S.type ? new He(null, e, E) : S), E.abort(), N(), E = null);
    }, n.cancelToken && n.cancelToken.subscribe(h), n.signal && (n.signal.aborted ? h() : n.signal.addEventListener("abort", h)));
    const R = jr(n.url);
    if (R && !V.protocols.includes(R)) {
      r(
        new _(
          "Unsupported protocol " + R + ":",
          _.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    E.send(a || null);
  });
}, tn = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const s = new AbortController();
  let r = !1;
  const n = function(p) {
    if (!r) {
      r = !0, d();
      const b = p instanceof Error ? p : this.reason;
      s.abort(
        b instanceof _ ? b : new He(b instanceof Error ? b.message : b)
      );
    }
  };
  let a = t && setTimeout(() => {
    a = null, n(new _(`timeout of ${t}ms exceeded`, _.ETIMEDOUT));
  }, t);
  const d = () => {
    e && (a && clearTimeout(a), a = null, e.forEach((p) => {
      p.unsubscribe ? p.unsubscribe(n) : p.removeEventListener("abort", n);
    }), e = null);
  };
  e.forEach((p) => p.addEventListener("abort", n));
  const { signal: l } = s;
  return l.unsubscribe = () => u.asap(d), l;
}, sn = function* (e, t) {
  let s = e.byteLength;
  if (s < t) {
    yield e;
    return;
  }
  let r = 0, n;
  for (; r < s; )
    n = r + t, yield e.slice(r, n), r = n;
}, rn = async function* (e, t) {
  for await (const s of nn(e))
    yield* sn(s, t);
}, nn = async function* (e) {
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
}, Lt = (e, t, s, r) => {
  const n = rn(e, t);
  let a = 0, d, l = (p) => {
    d || (d = !0, r && r(p));
  };
  return new ReadableStream(
    {
      async pull(p) {
        try {
          const { done: b, value: h } = await n.next();
          if (b) {
            l(), p.close();
            return;
          }
          let v = h.byteLength;
          if (s) {
            let O = a += v;
            s(O);
          }
          p.enqueue(new Uint8Array(h));
        } catch (b) {
          throw l(b), b;
        }
      },
      cancel(p) {
        return l(p), n.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, et = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, on = (e, t, s) => t + 2 < s && et(e.charCodeAt(t + 1)) && et(e.charCodeAt(t + 2));
function an(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const s = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(s)) {
    let d = r.length;
    const l = r.length;
    for (let C = 0; C < l; C++)
      if (r.charCodeAt(C) === 37 && C + 2 < l) {
        const F = r.charCodeAt(C + 1), N = r.charCodeAt(C + 2);
        et(F) && et(N) && (d -= 2, C += 2);
      }
    let p = 0, b = l - 1;
    const h = (C) => C >= 2 && r.charCodeAt(C - 2) === 37 && // '%'
    r.charCodeAt(C - 1) === 51 && // '3'
    (r.charCodeAt(C) === 68 || r.charCodeAt(C) === 100);
    b >= 0 && (r.charCodeAt(b) === 61 ? (p++, b--) : h(b) && (p++, b -= 3)), p === 1 && b >= 0 && (r.charCodeAt(b) === 61 || h(b)) && p++;
    const O = Math.floor(d / 4) * 3 - (p || 0);
    return O > 0 ? O : 0;
  }
  let a = 0;
  for (let d = 0, l = r.length; d < l; d++) {
    const p = r.charCodeAt(d);
    if (p === 37 && on(r, d, l))
      a += 1, d += 2;
    else if (p < 128)
      a += 1;
    else if (p < 2048)
      a += 2;
    else if (p >= 55296 && p <= 56319 && d + 1 < l) {
      const b = r.charCodeAt(d + 1);
      b >= 56320 && b <= 57343 ? (a += 4, d++) : a += 3;
    } else
      a += 3;
  }
  return a;
}
const yt = "1.18.0", Bt = 64 * 1024, { isFunction: Xe } = u, ln = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, s) => String.fromCharCode(parseInt(s, 16))
), It = (e) => {
  if (!u.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Ut = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, dn = (e) => {
  const t = e.indexOf("://");
  let s = e;
  return t !== -1 && (s = s.slice(t + 3)), s.includes("@") || s.includes(":");
}, un = (e) => {
  const t = u.global !== void 0 && u.global !== null ? u.global : globalThis, { ReadableStream: s, TextEncoder: r } = t;
  e = u.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: n, Request: a, Response: d } = e, l = n ? Xe(n) : typeof fetch == "function", p = Xe(a), b = Xe(d);
  if (!l)
    return !1;
  const h = l && Xe(s), v = l && (typeof r == "function" ? /* @__PURE__ */ ((x) => (R) => x.encode(R))(new r()) : async (x) => new Uint8Array(await new a(x).arrayBuffer())), O = p && h && Ut(() => {
    let x = !1;
    const R = new a(V.origin, {
      body: new s(),
      method: "POST",
      get duplex() {
        return x = !0, "half";
      }
    }), S = R.headers.has("Content-Type");
    return R.body != null && R.body.cancel(), x && !S;
  }), C = b && h && Ut(() => u.isReadableStream(new d("").body)), F = {
    stream: C && ((x) => x.body)
  };
  l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((x) => {
    !F[x] && (F[x] = (R, S) => {
      let P = R && R[x];
      if (P)
        return P.call(R);
      throw new _(
        `Response type '${x}' is not supported`,
        _.ERR_NOT_SUPPORT,
        S
      );
    });
  });
  const N = async (x) => {
    if (x == null)
      return 0;
    if (u.isBlob(x))
      return x.size;
    if (u.isSpecCompliantForm(x))
      return (await new a(V.origin, {
        method: "POST",
        body: x
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(x) || u.isArrayBuffer(x))
      return x.byteLength;
    if (u.isURLSearchParams(x) && (x = x + ""), u.isString(x))
      return (await v(x)).byteLength;
  }, E = async (x, R) => {
    const S = u.toFiniteNumber(x.getContentLength());
    return S ?? N(R);
  };
  return async (x) => {
    let {
      url: R,
      method: S,
      data: P,
      signal: I,
      cancelToken: L,
      timeout: q,
      onDownloadProgress: z,
      onUploadProgress: ue,
      responseType: ne,
      headers: c,
      withCredentials: he = "same-origin",
      fetchOptions: ve,
      maxContentLength: K,
      maxBodyLength: ge
    } = ds(x);
    const J = u.isNumber(K) && K > -1, Ne = u.isNumber(ge) && ge > -1, nt = (D) => u.hasOwnProp(x, D) ? x[D] : void 0;
    let qe = n || fetch;
    ne = ne ? (ne + "").toLowerCase() : "text";
    let ee = tn(
      [I, L && L.toAbortSignal()],
      q
    ), M = null;
    const te = ee && ee.unsubscribe && (() => {
      ee.unsubscribe();
    });
    let $, oe = null;
    const ye = () => new _(
      "Request body larger than maxBodyLength limit",
      _.ERR_BAD_REQUEST,
      x,
      M
    );
    try {
      let D;
      const ae = nt("auth");
      if (ae) {
        const T = u.getSafeProp(ae, "username") || "", G = u.getSafeProp(ae, "password") || "";
        D = {
          username: T,
          password: G
        };
      }
      if (dn(R)) {
        const T = new URL(R, V.origin);
        if (!D && (T.username || T.password)) {
          const G = It(T.username), ie = It(T.password);
          D = {
            username: G,
            password: ie
          };
        }
        (T.username || T.password) && (T.username = "", T.password = "", R = T.href);
      }
      if (D && (c.delete("authorization"), c.set(
        "Authorization",
        "Basic " + btoa(ln((D.username || "") + ":" + (D.password || "")))
      )), J && typeof R == "string" && R.startsWith("data:") && an(R) > K)
        throw new _(
          "maxContentLength size of " + K + " exceeded",
          _.ERR_BAD_RESPONSE,
          x,
          M
        );
      if (Ne && S !== "get" && S !== "head") {
        const T = await N(P);
        if (typeof T == "number" && isFinite(T) && ($ = T, T > ge))
          throw ye();
      }
      const be = Ne && (u.isReadableStream(P) || u.isStream(P)), Re = (T, G, ie) => Lt(
        T,
        Bt,
        (me) => {
          if (Ne && me > ge)
            throw oe = ye();
          G && G(me);
        },
        ie
      );
      if (O && S !== "get" && S !== "head" && (ue || be)) {
        if ($ = $ ?? await E(c, P), $ !== 0 || be) {
          let T = new a(R, {
            method: "POST",
            body: P,
            duplex: "half"
          }), G;
          if (u.isFormData(P) && (G = T.headers.get("content-type")) && c.setContentType(G), T.body) {
            const [ie, me] = ue && Pt(
              $,
              Ye(Ft(ue))
            ) || [];
            P = Re(T.body, ie, me);
          }
        }
      } else if (be && !p && h && S !== "get" && S !== "head")
        P = Re(P);
      else if (be && p && !O && S !== "get" && S !== "head")
        throw new _(
          "Stream request bodies are not supported by the current fetch implementation",
          _.ERR_NOT_SUPPORT,
          x,
          M
        );
      u.isString(he) || (he = he ? "include" : "omit");
      const xe = p && "credentials" in a.prototype;
      if (u.isFormData(P)) {
        const T = c.getContentType();
        T && /^multipart\/form-data/i.test(T) && !/boundary=/i.test(T) && c.delete("content-type");
      }
      c.set("User-Agent", "axios/" + yt, !1);
      const De = {
        ...ve,
        signal: ee,
        method: S.toUpperCase(),
        headers: Qt(c.normalize()),
        body: P,
        duplex: "half",
        credentials: xe ? he : void 0
      };
      M = p && new a(R, De);
      let Z = await (p ? qe(M, ve) : qe(R, De));
      const Le = X.from(Z.headers);
      if (J) {
        const T = u.toFiniteNumber(Le.getContentLength());
        if (T != null && T > K)
          throw new _(
            "maxContentLength size of " + K + " exceeded",
            _.ERR_BAD_RESPONSE,
            x,
            M
          );
      }
      const ce = C && (ne === "stream" || ne === "response");
      if (C && Z.body && (z || J || ce && te)) {
        const T = {};
        ["status", "statusText", "headers"].forEach((we) => {
          T[we] = Z[we];
        });
        const G = u.toFiniteNumber(Le.getContentLength()), [ie, me] = z && Pt(
          G,
          Ye(Ft(z), !0)
        ) || [];
        let Ve = 0;
        const ot = (we) => {
          if (J && (Ve = we, Ve > K))
            throw new _(
              "maxContentLength size of " + K + " exceeded",
              _.ERR_BAD_RESPONSE,
              x,
              M
            );
          ie && ie(we);
        };
        Z = new d(
          Lt(Z.body, Bt, ot, () => {
            me && me(), te && te();
          }),
          T
        );
      }
      ne = ne || "text";
      let le = await F[u.findKey(F, ne) || "text"](
        Z,
        x
      );
      if (J && !C && !ce) {
        let T;
        if (le != null && (typeof le.byteLength == "number" ? T = le.byteLength : typeof le.size == "number" ? T = le.size : typeof le == "string" && (T = typeof r == "function" ? new r().encode(le).byteLength : le.length)), typeof T == "number" && T > K)
          throw new _(
            "maxContentLength size of " + K + " exceeded",
            _.ERR_BAD_RESPONSE,
            x,
            M
          );
      }
      return !ce && te && te(), await new Promise((T, G) => {
        ls(T, G, {
          data: le,
          headers: X.from(Z.headers),
          status: Z.status,
          statusText: Z.statusText,
          config: x,
          request: M
        });
      });
    } catch (D) {
      if (te && te(), ee && ee.aborted && ee.reason instanceof _) {
        const ae = ee.reason;
        throw ae.config = x, M && (ae.request = M), D !== ae && (ae.cause = D), ae;
      }
      throw oe ? (M && !oe.request && (oe.request = M), oe) : D instanceof _ ? (M && !D.request && (D.request = M), D) : D && D.name === "TypeError" && /Load failed|fetch/i.test(D.message) ? Object.assign(
        new _(
          "Network Error",
          _.ERR_NETWORK,
          x,
          M,
          D && D.response
        ),
        {
          cause: D.cause || D
        }
      ) : _.from(D, D && D.code, x, M, D && D.response);
    }
  };
}, cn = /* @__PURE__ */ new Map(), us = (e) => {
  let t = e && e.env || {};
  const { fetch: s, Request: r, Response: n } = t, a = [r, n, s];
  let d = a.length, l = d, p, b, h = cn;
  for (; l--; )
    p = a[l], b = h.get(p), b === void 0 && h.set(p, b = l ? /* @__PURE__ */ new Map() : un(t)), h = b;
  return b;
};
us();
const wt = {
  http: kr,
  xhr: en,
  fetch: {
    get: us
  }
};
u.forEach(wt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const jt = (e) => `- ${e}`, fn = (e) => u.isFunction(e) || e === null || e === !1;
function pn(e, t) {
  e = u.isArray(e) ? e : [e];
  const { length: s } = e;
  let r, n;
  const a = {};
  for (let d = 0; d < s; d++) {
    r = e[d];
    let l;
    if (n = r, !fn(r) && (n = wt[(l = String(r)).toLowerCase()], n === void 0))
      throw new _(`Unknown adapter '${l}'`);
    if (n && (u.isFunction(n) || (n = n.get(t))))
      break;
    a[l || "#" + d] = n;
  }
  if (!n) {
    const d = Object.entries(a).map(
      ([p, b]) => `adapter ${p} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = s ? d.length > 1 ? `since :
` + d.map(jt).join(`
`) : " " + jt(d[0]) : "as no adapter specified";
    throw new _(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return n;
}
const cs = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: pn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: wt
};
function ut(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new He(null, e);
}
function Mt(e) {
  return ut(e), e.headers = X.from(e.headers), e.data = dt.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), cs.getAdapter(e.adapter || $e.adapter, e)(e).then(
    function(r) {
      ut(e), e.response = r;
      try {
        r.data = dt.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = X.from(r.headers), r;
    },
    function(r) {
      if (!as(r) && (ut(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = dt.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = X.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const rt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  rt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const zt = {};
rt.transitional = function(t, s, r) {
  function n(a, d) {
    return "[Axios v" + yt + "] Transitional option '" + a + "'" + d + (r ? ". " + r : "");
  }
  return (a, d, l) => {
    if (t === !1)
      throw new _(
        n(d, " has been removed" + (s ? " in " + s : "")),
        _.ERR_DEPRECATED
      );
    return s && !zt[d] && (zt[d] = !0, console.warn(
      n(
        d,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(a, d, l) : !0;
  };
};
rt.spelling = function(t) {
  return (s, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function hn(e, t, s) {
  if (typeof e != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const a = r[n], d = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (d) {
      const l = e[a], p = l === void 0 || d(l, a, e);
      if (p !== !0)
        throw new _(
          "option " + a + " must be " + p,
          _.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (s !== !0)
      throw new _("Unknown option " + a, _.ERR_BAD_OPTION);
  }
}
const Ze = {
  assertOptions: hn,
  validators: rt
}, W = Ze.validators;
let ke = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new At(),
      response: new At()
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
        const a = (() => {
          if (!n.stack)
            return "";
          const d = n.stack.indexOf(`
`);
          return d === -1 ? "" : n.stack.slice(d + 1);
        })();
        try {
          if (!r.stack)
            r.stack = a;
          else if (a) {
            const d = a.indexOf(`
`), l = d === -1 ? -1 : a.indexOf(`
`, d + 1), p = l === -1 ? "" : a.slice(l + 1);
            String(r.stack).endsWith(p) || (r.stack += `
` + a);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = Ce(this.defaults, s);
    const { transitional: r, paramsSerializer: n, headers: a } = s;
    r !== void 0 && Ze.assertOptions(
      r,
      {
        silentJSONParsing: W.transitional(W.boolean),
        forcedJSONParsing: W.transitional(W.boolean),
        clarifyTimeoutError: W.transitional(W.boolean),
        legacyInterceptorReqResOrdering: W.transitional(W.boolean),
        advertiseZstdAcceptEncoding: W.transitional(W.boolean),
        validateStatusUndefinedResolves: W.transitional(W.boolean)
      },
      !1
    ), n != null && (u.isFunction(n) ? s.paramsSerializer = {
      serialize: n
    } : Ze.assertOptions(
      n,
      {
        encode: W.function,
        serialize: W.function
      },
      !0
    )), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Ze.assertOptions(
      s,
      {
        baseUrl: W.spelling("baseURL"),
        withXsrfToken: W.spelling("withXSRFToken")
      },
      !0
    ), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let d = a && u.merge(a.common, a[s.method]);
    a && u.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (F) => {
      delete a[F];
    }), s.headers = X.concat(d, a);
    const l = [];
    let p = !0;
    this.interceptors.request.forEach(function(N) {
      if (typeof N.runWhen == "function" && N.runWhen(s) === !1)
        return;
      p = p && N.synchronous;
      const E = s.transitional || vt;
      E && E.legacyInterceptorReqResOrdering ? l.unshift(N.fulfilled, N.rejected) : l.push(N.fulfilled, N.rejected);
    });
    const b = [];
    this.interceptors.response.forEach(function(N) {
      b.push(N.fulfilled, N.rejected);
    });
    let h, v = 0, O;
    if (!p) {
      const F = [Mt.bind(this), void 0];
      for (F.unshift(...l), F.push(...b), O = F.length, h = Promise.resolve(s); v < O; )
        h = h.then(F[v++], F[v++]);
      return h;
    }
    O = l.length;
    let C = s;
    for (; v < O; ) {
      const F = l[v++], N = l[v++];
      try {
        C = F(C);
      } catch (E) {
        N.call(this, E);
        break;
      }
    }
    try {
      h = Mt.call(this, C);
    } catch (F) {
      return Promise.reject(F);
    }
    for (v = 0, O = b.length; v < O; )
      h = h.then(b[v++], b[v++]);
    return h;
  }
  getUri(t) {
    t = Ce(this.defaults, t);
    const s = is(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return rs(s, t.params, t.paramsSerializer);
  }
};
u.forEach(["delete", "get", "head", "options"], function(t) {
  ke.prototype[t] = function(s, r) {
    return this.request(
      Ce(r || {}, {
        method: t,
        url: s,
        data: r && u.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
u.forEach(["post", "put", "patch", "query"], function(t) {
  function s(r) {
    return function(a, d, l) {
      return this.request(
        Ce(l || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: d
        })
      );
    };
  }
  ke.prototype[t] = s(), t !== "query" && (ke.prototype[t + "Form"] = s(!0));
});
let mn = class fs {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(a) {
      s = a;
    });
    const r = this;
    this.promise.then((n) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](n);
      r._listeners = null;
    }), this.promise.then = (n) => {
      let a;
      const d = new Promise((l) => {
        r.subscribe(l), a = l;
      }).then(n);
      return d.cancel = function() {
        r.unsubscribe(a);
      }, d;
    }, t(function(a, d, l) {
      r.reason || (r.reason = new He(a, d, l), s(r.reason));
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
      token: new fs(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
};
function bn(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function xn(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const ht = {
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
Object.entries(ht).forEach(([e, t]) => {
  ht[t] = e;
});
function ps(e) {
  const t = new ke(e), s = Ht(ke.prototype.request, t);
  return u.extend(s, ke.prototype, t, { allOwnKeys: !0 }), u.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(n) {
    return ps(Ce(e, n));
  }, s;
}
const j = ps($e);
j.Axios = ke;
j.CanceledError = He;
j.CancelToken = mn;
j.isCancel = as;
j.VERSION = yt;
j.toFormData = st;
j.AxiosError = _;
j.Cancel = j.CanceledError;
j.all = function(t) {
  return Promise.all(t);
};
j.spread = bn;
j.isAxiosError = xn;
j.mergeConfig = Ce;
j.AxiosHeaders = X;
j.formToJSON = (e) => os(u.isHTMLForm(e) ? new FormData(e) : e);
j.getAdapter = cs.getAdapter;
j.HttpStatusCode = ht;
j.default = j;
const {
  Axios: Ba,
  AxiosError: Ia,
  CanceledError: Ua,
  isCancel: ja,
  CancelToken: Ma,
  VERSION: za,
  all: $a,
  Cancel: Ha,
  isAxiosError: qa,
  spread: Va,
  toFormData: Ja,
  AxiosHeaders: Wa,
  HttpStatusCode: Xa,
  formToJSON: Ka,
  getAdapter: Ga,
  mergeConfig: Za,
  create: Qa
} = j, vn = ["id"], gn = { class: "flex gap-2 items-center" }, yn = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "text-amber-400 fill-amber-400/20"
}, wn = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, _n = {
  key: 1,
  class: "max-w-[1440px] mx-auto px-4 py-6 md:px-8"
}, kn = { class: "grid grid-cols-1 lg:!grid-cols-[1fr_380px] gap-12" }, En = { class: "space-y-4" }, Cn = {
  key: 2,
  class: "max-w-[1440px] mx-auto md:px-8 md:py-8"
}, Rn = { class: "!hidden md:!flex text-sm mb-8 items-center gap-2 justify-between" }, Sn = { class: "hover:text-blue-500 transition-colors cursor-pointer capitalize" }, On = { class: "relative w-4 h-4 overflow-hidden" }, An = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  class: "animate-[spin_3s_linear_infinite]"
}, Tn = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
}, Pn = { class: "text-xs font-semibold tracking-wide" }, Fn = { class: "text-xs font-semibold tracking-wide" }, Nn = { class: "!hidden md:!block mb-10" }, Dn = { class: "flex gap-2 mb-4" }, Ln = {
  key: 0,
  class: "px-2.5 py-1 rounded-md bg-rose-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm shadow-rose-500/30"
}, Bn = { class: "flex items-center text-amber-500 gap-1.5" }, In = { class: "flex" }, Un = {
  key: 0,
  class: "tracking-wide"
}, jn = { class: "font-mono" }, Mn = {
  key: 2,
  class: "flex flex-wrap gap-2 mt-4"
}, zn = { class: "grid grid-cols-1 lg:!grid-cols-[1fr_400px] gap-0 lg:!gap-16 items-start" }, $n = { class: "w-full" }, Hn = { class: "md:!hidden px-4 pt-2 mb-6" }, qn = { class: "flex w-full justify-between items-center" }, Vn = { class: "flex gap-2 mb-3" }, Jn = {
  key: 0,
  class: "px-2 py-0.5 rounded bg-rose-500 text-white text-[10px] font-bold shadow-md shadow-rose-500/20"
}, Wn = { class: "text-xs font-semibold tracking-wide" }, Xn = {
  key: 1,
  class: "flex items-center text-amber-500 text-sm"
}, Kn = { class: "ml-2 font-semibold" }, Gn = { class: "text-xs opacity-60 ml-1 text-current" }, Zn = {
  key: 2,
  class: "flex flex-wrap gap-2 mt-3 no-scrollbar overflow-x-auto"
}, Qn = { class: "grid grid-cols-1 lg:!grid-cols-[550px_1fr] gap-10 mb-12" }, Yn = { class: "relative group" }, eo = { class: "!hidden md:!flex gap-4 h-[600px]" }, to = { class: "flex flex-col gap-3 w-[80px] overflow-y-auto no-scrollbar py-1" }, so = ["onMouseover"], ro = ["src"], no = ["src"], oo = { class: "absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity" }, ao = ["fill"], lo = ["src"], io = { class: "px-4 lg:px-0 flex flex-col gap-8" }, uo = { class: "flex items-baseline gap-3 mb-2" }, co = { class: "text-3xl font-extrabold text-rose-500 tracking-tight" }, fo = { key: 0 }, po = { class: "flex flex-wrap gap-3" }, ho = ["onClick"], mo = ["src"], bo = {
  key: 2,
  class: "absolute inset-0 bg-black/20 flex items-center justify-center z-10 backdrop-blur-[1px]"
}, xo = { key: 1 }, vo = { class: "flex justify-between items-center mb-3" }, go = { class: "flex flex-wrap gap-2.5" }, yo = ["onClick"], wo = { class: "space-y-3 mb-5" }, _o = { class: "flex gap-2" }, ko = ["disabled"], Eo = {
  key: 0,
  class: "animate-spin h-4 w-4 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Co = { key: 1 }, Ro = {
  key: 0,
  class: "text-xs text-rose-500 mt-1 font-medium"
}, So = { class: "flex gap-4 text-sm" }, Oo = { class: "flex items-center gap-2 mt-2" }, Ao = { class: "!hidden lg:!block w-[380px]" }, To = { class: "flex items-start justify-between mb-6" }, Po = { class: "flex items-baseline gap-2.5" }, Fo = { class: "text-[32px] font-extrabold leading-none text-rose-500 tracking-tight" }, No = { class: "flex gap-2" }, Do = ["disabled"], Lo = {
  key: 0,
  class: "animate-spin h-4 w-4 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Bo = { key: 1 }, Io = {
  key: 0,
  class: "text-xs text-rose-500 mt-1 font-medium"
}, Uo = { class: "flex gap-4 text-sm" }, jo = { class: "flex items-center gap-2 mt-2" }, Mo = {
  key: 1,
  class: "space-y-3"
}, zo = ["disabled"], $o = { class: "flex flex-col items-center justify-center" }, Ho = ["disabled"], qo = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Vo = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5"
}, Jo = ["disabled"], Wo = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, Xo = { key: 1 }, Ko = ["disabled"], Go = { class: "flex flex-col min-w-[80px]" }, Zo = {
  key: 0,
  class: "text-xs text-slate-400 line-through mt-0.5"
}, Qo = ["disabled"], Yo = ["disabled"], ea = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ta = {
  key: 1,
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5"
}, sa = ["disabled"], ra = {
  key: 0,
  class: "animate-spin h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, na = { key: 1 }, oa = { class: "w-full max-w-3xl bg-white dark:bg-slate-900 rounded-t-[32px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh] animate-[slideUp_0.3s_ease-out]" }, aa = { class: "px-6 pt-2 md:pt-6 pb-0 border-b border-gray-100 dark:border-slate-800" }, la = { class: "flex justify-between items-center mb-6" }, ia = { class: "flex space-x-6" }, da = { class: "overflow-y-auto p-4 md:p-8 flex-1 custom-widget-scroll" }, ua = { class: "animate-[fadeIn_0.3s_ease-out]" }, ca = {
  key: 0,
  class: "flex justify-center p-4"
}, fa = ["src"], pa = { key: 1 }, ha = { class: "flex justify-end mb-2" }, ma = { class: "overflow-x-auto no-scrollbar pb-2" }, ba = { class: "w-full text-sm text-center border-collapse min-w-[500px]" }, xa = { class: "animate-[fadeIn_0.3s_ease-out] pb-4 md:pb-0" }, va = { class: "grid md:grid-cols-[200px_1fr] gap-8 md:gap-14 items-center" }, ga = { class: "w-full flex justify-center py-4" }, ya = {
  viewBox: "0 0 200 250",
  class: "w-full max-w-[160px] h-auto",
  fill: "none",
  stroke: "currentColor"
}, wa = ["stroke"], _a = ["stroke"], ka = { class: "space-y-6" }, Ea = { class: "relative pl-10" }, Ca = { class: "relative pl-10" }, Ra = { class: "relative pl-10" }, Sa = "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/public:supplier_pdt?action=get_product", Oa = /* @__PURE__ */ $t({
  __name: "ProductPage",
  props: {
    _$p: {},
    _p: {},
    _$cb: {}
  },
  setup(e) {
    const t = e, s = {
      Default: [
        "https://placehold.net/default.svg",
        "https://placehold.net/default.svg",
        "https://placehold.net/default.svg",
        "https://placehold.net/default.svg",
        "https://placehold.net/default.svg"
      ]
    }, r = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], n = U({
      themeToggle: !1,
      header: !1,
      checkDelivery: !1,
      purchaseable: !1
    }), a = U(t._$p?.data?.curr?.data?.theme || "light"), d = U("images"), l = U({
      id: "",
      brand: "",
      title: "",
      category: [],
      field: [],
      color: [],
      size: [],
      variant: [],
      hashtags: [],
      brand_id: "",
      slug: "",
      status: "",
      country: "",
      user_id: "",
      user_typ: "",
      sys_category_id: "",
      size_info: {},
      seller: {},
      field_name: [],
      field_value: [],
      variant_prices: [],
      variant_mrp: []
    }), p = U(!0), b = U(""), h = U(""), v = U(""), O = U(0), C = U(!1), F = U("chart"), N = U(!1), E = U(!1);
    U("");
    const x = U(""), R = U(t._$p?.data?.curr?.data?.deliver_to_country_code || "IN"), S = U(!1), P = U(null), I = U("");
    U([]), U(!1);
    const L = U({
      average_rating: 0,
      total_reviews: 0
    }), q = U(0), z = U(!1), ue = localStorage.getItem("token") || "", ne = () => {
      d.value === "images" ? d.value = "img_ref" : d.value = "images", b.value = J.value[0] || s.Default[0];
    }, c = H(() => a.value === "dark"), he = H(() => t._p?.f?.name ? t._p.f.name("pd-root") : "pd-root"), ve = H(() => !l.value.color || !Array.isArray(l.value.color) ? [] : l.value.color.map((w) => ({
      id: w.id,
      name: w.name,
      url: w.image?.[0]?.url || null
    }))), K = H(() => !l.value.size || !Array.isArray(l.value.size) ? [] : [...l.value.size].sort((i, m) => {
      const k = r.indexOf(i.name.toUpperCase()), Q = r.indexOf(m.name.toUpperCase());
      return k !== -1 && Q !== -1 ? k - Q : k !== -1 ? -1 : Q !== -1 ? 1 : i.name.localeCompare(m.name, void 0, { numeric: !0 });
    }).map((i) => i.name)), ge = (w) => {
      if (!w) return [];
      if (d.value === "images")
        return w.image && Array.isArray(w.image) ? w.image.filter((i) => i.url && !i.url.includes("example.com")).map((i) => i.url) : [];
      if (w.img_ref?.l && Array.isArray(w.img_ref.l)) {
        const i = [];
        return w.img_ref.l.forEach((m) => {
          m.l && Array.isArray(m.l) && m.l.forEach((k) => {
            k.url && !k.url.includes("example.com") && i.push(k.url);
          });
        }), i;
      }
      return [];
    }, J = H(() => {
      const w = h.value, i = l.value.color?.find((k) => k.name === w), m = ge(i);
      return m.length > 0 ? m : s.Default;
    }), Ne = H(() => J.value), nt = (w, i) => {
      if (!w?.img_ref?.l) return null;
      for (const m of w.img_ref.l)
        if (m.l && Array.isArray(m.l)) {
          for (const k of m.l)
            if (k.type === i && k.url && !k.url.includes("example.com"))
              return k.url;
        }
      return null;
    }, qe = H(() => {
      const w = h.value, i = l.value.color?.find((m) => m.name === w);
      if (d.value === "img_ref") {
        const m = nt(i, "front_shot");
        if (m) return m;
        const k = ge(i);
        if (k.length > 0) return k[0];
      }
      return J.value[0] || s.Default[0];
    }), ee = H(() => l.value.color?.find((i) => i.name === h.value)?.id || null), M = H(() => l.value.size?.find((i) => i.name === v.value)?.id || null), te = H(() => {
      if (!l.value.variant || !l.value.variant.length) return null;
      if (ee.value && M.value) {
        const w = l.value.variant.find(
          (i) => i.color_id === ee.value && i.size_id === M.value
        );
        if (w) return w;
      }
      if (ee.value) {
        const w = l.value.variant.find(
          (i) => i.color_id === ee.value
        );
        if (w) return w;
      }
      if (M.value) {
        const w = l.value.variant.find(
          (i) => i.size_id === M.value
        );
        if (w) return w;
      }
      return l.value.variant[0];
    }), $ = H(() => te.value ? parseFloat(te.value.price) : 0), oe = H(() => {
      const w = te.value?.price_mrp;
      return w && parseFloat(w) > 0 ? parseFloat(w) : $.value;
    });
    H(() => Math.floor($.value * 0.95));
    const ye = H(() => oe.value > $.value ? Math.round((oe.value - $.value) / oe.value * 100) : 0);
    H(() => {
      const w = l.value.field?.find((i) => i.typ === "info");
      return w?.l && w.l.find(
        (m) => m.name === "Product Details" || m.name === "Description"
      )?.value || "";
    });
    const D = H(() => {
      const w = l.value.field?.find((i) => i.typ === "info");
      return w?.l ? w.l.filter(
        (i) => i.name !== "Product Details" && i.name !== "Description" && i.value
      ).map((i) => ({
        name: i.name,
        value: i.value
      })) : [];
    }), ae = H(() => N.value ? D.value : D.value.slice(0, 5)), be = H(() => te.value?.id || null), Re = H(() => {
      const w = l.value.size_info?.chart?.url || null;
      return w && !w.includes("example.com") ? w : null;
    }), xe = (w) => new Intl.NumberFormat("ru-RU").format(w), De = (w) => {
      h.value = w.name, b.value = J.value[0] || s.Default[0];
    }, Z = async () => {
      if (!x.value) {
        I.value = "Please enter a PIN/ZIP code.";
        return;
      }
      S.value = !0, I.value = "", P.value = null;
      try {
        const w = await j.post(
          "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management",
          {
            operation: "get_expected_delivery_date",
            postalcode: x.value.trim(),
            product_country_code: l.value.country || "IN",
            deliver_to_country_code: R.value
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${ue.trim()}`
            }
          }
        );
        w?.data?.success ? P.value = w.data : I.value = "Could not verify delivery to this location.";
      } catch (w) {
        console.error("Failed to fetch delivery date:", w), I.value = "Error checking delivery. Please try again.";
      } finally {
        S.value = !1;
      }
    }, Le = () => {
      const w = be.value;
      if (w) {
        const m = JSON.parse(localStorage.getItem("cart_items") || "[]").find((k) => k.product_id === l.value.id && k.variant_id === w);
        q.value = m ? m.quantity : 0;
      }
    }, ce = async (w) => {
      if (!l.value.id) return;
      const i = be.value;
      if (!i) return console.log("Please select a valid variant.");
      z.value = !0;
      const m = Math.max(0, q.value + w);
      if (!ue) {
        let Q = JSON.parse(localStorage.getItem("cart_items") || "[]"), Se = Q.findIndex((Be) => Be.product_id === l.value.id && Be.variant_id === i);
        Se > -1 ? m === 0 ? Q.splice(Se, 1) : Q[Se].quantity = m : m > 0 && Q.push({
          product_id: l.value.id,
          variant_id: i,
          quantity: m,
          title: l.value.title,
          price: $.value,
          image: J.value[0],
          color: h.value,
          size: v.value
        }), localStorage.setItem("cart_items", JSON.stringify(Q)), q.value = m, setTimeout(() => {
          z.value = !1;
        }, 300);
      } else
        try {
          w > 0 && await j.post("https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management", {
            operation: "add_to_cart",
            user_id: "user_1",
            product_id: l.value.id,
            variant_id: i,
            quantity: w
          }, {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${ue.trim()}`
            }
          }), q.value = m;
        } catch (Q) {
          console.error("Cart API Error:", Q);
        } finally {
          z.value = !1;
        }
      w > 0 && t._$cb?.add && t._$cb.add({ $d: t._$p?.data?.curr?.data || {}, el: document.getElementById(he.value) });
    }, le = async () => {
      if (!l.value.id) return;
      const w = be.value;
      if (!w) return console.log("Please select a valid variant.");
      if (z.value = !0, !ue) {
        const m = {
          product_id: l.value.id,
          variant_id: w,
          quantity: 1,
          title: l.value.title,
          price: $.value,
          image: J.value[0],
          color: h.value,
          size: v.value
        };
        localStorage.setItem("buy_now_item", JSON.stringify([m]));
      } else
        try {
          await j.post("https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management", {
            operation: "add_to_cart",
            user_id: "user_1",
            product_id: l.value.id,
            variant_id: w,
            quantity: 1,
            buy_now: !0
          }, {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${ue.trim()}`
            }
          });
        } catch (m) {
          return console.error("Buy Now API Error:", m), z.value = !1, console.log("Failed to process Buy Now.");
        }
      z.value = !1, location.href = t._$p?.data.curr.data.event?.onClickBuyNow || "/checkout";
    }, T = async () => {
      p.value = !0;
      const i = { id: (() => {
        try {
          const k = new URL(location.href).pathname.split("/");
          return k[k.length - 1];
        } catch {
          return "";
        }
      })(), return: "" };
      try {
        const m = await j.post(Sa, i, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ue.trim()}`
          }
        });
        if (m.data.success && m.data.data) {
          const k = m.data.data, Q = k.category?.map((fe) => fe.name || fe) || [], Se = [], Be = [];
          k.field && Array.isArray(k.field) && k.field.forEach((fe) => {
            fe.l && Array.isArray(fe.l) && fe.l.forEach((Je) => {
              Je.name && Je.value && (Se.push(Je.name), Be.push(Je.value));
            });
          }), l.value = {
            id: k.id || "",
            brand: k.brand || "",
            title: k.title || "",
            category: Q,
            field: k.field || [],
            color: k.color || [],
            size: k.size || [],
            variant: k.variant || [],
            hashtags: k.hashtags || [],
            brand_id: k.brand_id || "",
            slug: k.slug || "",
            status: k.status || "",
            country: k.country || "",
            user_id: k.user_id || "",
            user_typ: k.user_typ || "",
            sys_category_id: k.sys_category_id || "",
            size_info: k.size_info || {},
            seller: k.seller || {},
            field_name: Se,
            field_value: Be,
            variant_prices: k.variant?.map((fe) => parseFloat(fe.price) || 0) || [],
            variant_mrp: k.variant?.map((fe) => parseFloat(fe.price_mrp) || 0) || []
          };
        } else
          throw new Error("No data found");
      } catch (m) {
        console.warn("API Error, using fallback data:", m);
      } finally {
        ve.value.length && De(ve.value[0]), K.value.length && (v.value = K.value[0]), b.value = J.value[0], p.value = !1, Le();
      }
    }, G = () => document.getElementById("characteristics")?.scrollIntoView({ behavior: "smooth" }), ie = () => {
      const w = a.value === "dark" ? "light" : "dark";
      a.value = w, t._p?.f?.set_theme && t._p.f.set_theme({ name: w, el_id: he.value }), t._$cb && t._$p?.data?.curr?.data && (t._$p.data.curr.data.theme = w, t._$cb.change && t._$cb.change({ _$p: t._$p }));
    }, me = () => {
      console.log("Back requested");
    }, Ve = () => navigator.share?.({ title: l.value.title, url: window.location.href }).catch(console.error), ot = () => E.value = !E.value, we = (w) => {
      const i = w.target;
      O.value = Math.round(i.scrollLeft / i.clientWidth);
    };
    return at(d, () => {
      b.value = J.value[0] || s.Default[0];
    }), hs(async () => {
      await T(), await ms();
      const w = document.getElementById(he.value);
      w && a.value && t._p?.f?.set_theme && t._p.f.set_theme({ name: a.value, el_id: w.id });
    }), at(() => t._$p?.data?.curr?.id, T), at([h, v], () => {
      Le();
    }), (w, i) => (g(), y("div", {
      id: he.value,
      class: f(["font-sans min-h-screen pb-[100px] md:pb-0 antialiased transition-colors duration-300 ease-in-out selection:bg-rose-500 selection:text-white", c.value ? "bg-[#0f172a] text-slate-200" : "bg-[#F9FAFB] text-slate-900"])
    }, [
      n.value.header ? (g(), y("nav", {
        key: 0,
        class: f(["sticky top-0 z-50 backdrop-blur-xl flex justify-between items-center px-4 py-3 shadow-sm md:!hidden border-b transition-colors duration-300", c.value ? "bg-[#0f172a]/80 border-slate-800" : "bg-white/80 border-slate-200/60"])
      }, [
        o("button", {
          class: f(["p-2 -ml-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
          onClick: me
        }, [...i[14] || (i[14] = [
          o("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            o("path", { d: "M15 18l-6-6 6-6" })
          ], -1)
        ])], 2),
        o("div", gn, [
          o("button", {
            class: f(["p-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: ie
          }, [
            c.value ? (g(), y("svg", yn, [...i[15] || (i[15] = [
              Ie('<circle cx="12" cy="12" r="5" data-v-93a3ef79></circle><line x1="12" y1="1" x2="12" y2="3" data-v-93a3ef79></line><line x1="12" y1="21" x2="12" y2="23" data-v-93a3ef79></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-93a3ef79></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-93a3ef79></line><line x1="1" y1="12" x2="3" y2="12" data-v-93a3ef79></line><line x1="21" y1="12" x2="23" y2="12" data-v-93a3ef79></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-93a3ef79></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-93a3ef79></line>', 9)
            ])])) : (g(), y("svg", wn, [...i[16] || (i[16] = [
              o("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
            ])]))
          ], 2),
          o("button", {
            class: f(["p-2 transition-all duration-200 rounded-full active:scale-90", c.value ? "text-slate-300 hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"]),
            onClick: Ve
          }, [...i[17] || (i[17] = [
            Ie('<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-93a3ef79><circle cx="18" cy="5" r="3" data-v-93a3ef79></circle><circle cx="6" cy="12" r="3" data-v-93a3ef79></circle><circle cx="18" cy="19" r="3" data-v-93a3ef79></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-93a3ef79></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-93a3ef79></line></svg>', 1)
          ])], 2)
        ])
      ], 2)) : B("", !0),
      p.value ? (g(), y("div", _n, [
        o("div", {
          class: f(["!hidden md:!block h-5 w-64 rounded mb-8 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
        }, null, 2),
        o("div", kn, [
          o("div", null, [
            o("div", {
              class: f(["block md:!hidden h-[400px] w-full rounded-2xl mb-6 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            o("div", {
              class: f(["!hidden md:!block h-[600px] w-full rounded-3xl mb-8 animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
            }, null, 2),
            o("div", En, [
              o("div", {
                class: f(["h-8 w-3/4 rounded-lg animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2),
              o("div", {
                class: f(["h-6 w-1/2 rounded-lg animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
              }, null, 2)
            ])
          ]),
          o("div", {
            class: f(["!hidden lg:!block h-[500px] rounded-3xl animate-shimmer", c.value ? "bg-slate-800" : "bg-gray-200"])
          }, null, 2)
        ])
      ])) : l.value && l.value.id ? (g(), y("div", Cn, [
        o("nav", Rn, [
          o("div", {
            class: f(["flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
          }, [
            i[19] || (i[19] = o("span", {
              class: "hover:text-blue-500 transition-colors cursor-pointer",
              onClick: () => {
              }
              /*goBack*/
            }, "Category", -1)),
            i[20] || (i[20] = pe()),
            i[21] || (i[21] = o("span", { class: "opacity-30" }, "/", -1)),
            (g(!0), y(se, null, re(l.value.category, (m, k) => (g(), y("span", {
              key: k,
              class: "flex items-center gap-2"
            }, [
              o("span", Sn, A(typeof m == "string" ? m : m.name), 1),
              i[18] || (i[18] = o("span", { class: "opacity-30" }, "/", -1))
            ]))), 128)),
            o("span", {
              class: f(["font-medium truncate max-w-[200px]", c.value ? "text-slate-200" : "text-slate-900"])
            }, A(l.value.title), 3)
          ], 2),
          n.value.themeToggle ? (g(), y("button", {
            key: 0,
            class: f(["group flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm hover:shadow-md active:scale-95", c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"]),
            onClick: ie
          }, [
            o("div", On, [
              c.value ? (g(), y("svg", An, [...i[22] || (i[22] = [
                Ie('<circle cx="12" cy="12" r="5" data-v-93a3ef79></circle><line x1="12" y1="1" x2="12" y2="3" data-v-93a3ef79></line><line x1="12" y1="21" x2="12" y2="23" data-v-93a3ef79></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-93a3ef79></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-93a3ef79></line><line x1="1" y1="12" x2="3" y2="12" data-v-93a3ef79></line><line x1="21" y1="12" x2="23" y2="12" data-v-93a3ef79></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-93a3ef79></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-93a3ef79></line>', 9)
              ])])) : (g(), y("svg", Tn, [...i[23] || (i[23] = [
                o("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
              ])]))
            ]),
            o("span", Pn, A(c.value ? "Dark Mode" : "Light Mode"), 1)
          ], 2)) : B("", !0),
          o("button", {
            class: f(["group flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm hover:shadow-md active:scale-95", c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"]),
            onClick: ne
          }, [
            o("span", Fn, A(d.value == "images" ? "Image" : "Reference Image"), 1)
          ], 2)
        ]),
        o("header", Nn, [
          o("div", Dn, [
            o("span", {
              class: f(["px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border shadow-sm", c.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
            }, "Product Details", 2),
            ye.value > 0 ? (g(), y("span", Ln, "-" + A(ye.value) + "% Sale", 1)) : B("", !0)
          ]),
          n.value.header ? (g(), y("h1", {
            key: 0,
            class: f(["text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4 tracking-tight", c.value ? "text-white" : "text-slate-900"])
          }, A(l.value.title), 3)) : B("", !0),
          n.value.header ? (g(), y("div", {
            key: 1,
            class: f(["flex items-center gap-4 text-sm font-medium", c.value ? "text-slate-400" : "text-slate-500"])
          }, [
            o("div", Bn, [
              o("span", In, [
                (g(), y(se, null, re(5, (m) => o("svg", {
                  key: m,
                  class: f(["w-4 h-4", m <= Math.round(L.value.average_rating) ? "fill-current" : "fill-gray-300"]),
                  viewBox: "0 0 20 20"
                }, [...i[24] || (i[24] = [
                  o("path", { d: `M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 \r
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
              o("span", {
                class: f(["font-bold ml-1", c.value ? "text-white" : "text-slate-900"])
              }, A(L.value.average_rating.toFixed(1)), 3),
              o("a", {
                href: "#reviews",
                class: f(["ml-2 border-b border-dotted hover:text-blue-500 hover:border-blue-500 transition-colors", c.value ? "border-slate-600" : "border-slate-400"])
              }, A(L.value.total_reviews) + " reviews ", 3)
            ]),
            i[26] || (i[26] = o("span", { class: "opacity-30 text-xl font-light" }, "|", -1)),
            l.value.id ? (g(), y("span", Un, [
              i[25] || (i[25] = pe(" Product: ", -1)),
              o("span", jn, A(l.value.id), 1)
            ])) : B("", !0)
          ], 2)) : B("", !0),
          l.value.hashtags && l.value.hashtags.length ? (g(), y("div", Mn, [
            (g(!0), y(se, null, re(l.value.hashtags, (m, k) => (g(), y("span", {
              key: k,
              class: f(["px-3 py-1 text-xs font-semibold rounded-full border transition-all cursor-pointer hover:shadow-sm", c.value ? "bg-slate-800 text-blue-400 border-slate-700 hover:border-blue-500/50" : "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100"])
            }, A(m), 3))), 128))
          ])) : B("", !0)
        ]),
        o("div", zn, [
          o("div", $n, [
            o("div", Hn, [
              o("div", qn, [
                o("div", Vn, [
                  o("span", {
                    class: f(["px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border", c.value ? "bg-amber-900/30 text-amber-300 border-amber-800/50" : "bg-amber-50 text-amber-700 border-amber-100"])
                  }, "Product Details", 2),
                  ye.value > 0 ? (g(), y("span", Jn, "-" + A(ye.value) + "%", 1)) : B("", !0)
                ]),
                o("button", {
                  class: f(["group flex items-center gap-2 px-4 py-2 rounded-full transition-all border shadow-sm hover:shadow-md active:scale-95", c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"]),
                  onClick: ne
                }, [
                  o("span", Wn, A(d.value == "images" ? "Image" : "Reference Image"), 1)
                ], 2)
              ]),
              n.value.header ? (g(), y("h1", {
                key: 0,
                class: f(["text-[26px] font-bold leading-[1.2] mb-3 tracking-tight", c.value ? "text-white" : "text-slate-900"])
              }, A(l.value.title), 3)) : B("", !0),
              n.value.header ? (g(), y("div", Xn, [
                (g(), y(se, null, re(5, (m) => o("svg", {
                  key: m,
                  class: f(["w-3.5 h-3.5", m <= Math.round(L.value.average_rating) ? "fill-current" : "fill-gray-300"]),
                  viewBox: "0 0 20 20"
                }, [...i[27] || (i[27] = [
                  o("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ])], 2)), 64)),
                o("span", Kn, A(L.value.average_rating.toFixed(1)), 1),
                o("span", Gn, "(" + A(L.value.total_reviews) + " reviews)", 1)
              ])) : B("", !0),
              l.value.hashtags && l.value.hashtags.length ? (g(), y("div", Zn, [
                (g(!0), y(se, null, re(l.value.hashtags, (m, k) => (g(), y("span", {
                  key: k,
                  class: f(["px-2.5 py-1 text-[11px] font-semibold rounded-full border whitespace-nowrap", c.value ? "bg-slate-800 text-blue-400 border-slate-700" : "bg-blue-50 text-blue-600 border-blue-100"])
                }, A(m), 3))), 128))
              ])) : B("", !0)
            ]),
            o("div", Qn, [
              o("div", Yn, [
                o("div", eo, [
                  o("div", to, [
                    (g(!0), y(se, null, re(Ne.value, (m, k) => (g(), y("div", {
                      key: k,
                      class: f(["w-[80px] h-[100px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 relative border", [
                        c.value ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100",
                        b.value === m ? "ring-2 ring-blue-500 ring-offset-2 " + (c.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80 opacity-70 hover:opacity-100"
                      ]]),
                      onMouseover: (Q) => b.value = m
                    }, [
                      o("img", {
                        src: m,
                        class: "w-full h-full object-cover"
                      }, null, 8, ro)
                    ], 42, so))), 128))
                  ]),
                  o("div", {
                    class: f(["flex-1 rounded-[32px] flex items-center justify-center overflow-hidden cursor-zoom-in relative shadow-sm border", c.value ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-100"])
                  }, [
                    o("img", {
                      src: b.value || qe.value,
                      class: "max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                    }, null, 8, no),
                    o("div", oo, [
                      o("button", {
                        class: "p-2 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-blue-600 dark:bg-slate-800/90 dark:text-slate-200",
                        onClick: ot
                      }, [
                        (g(), y("svg", {
                          fill: E.value ? "currentColor" : "none",
                          class: f(E.value ? "text-rose-500" : ""),
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          "stroke-width": "2"
                        }, [...i[28] || (i[28] = [
                          o("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          }, null, -1)
                        ])], 10, ao))
                      ])
                    ])
                  ], 2)
                ]),
                o("div", {
                  class: f(["md:!hidden relative w-full pb-6 transition-colors duration-300", c.value ? "bg-[#0f172a]" : "bg-[#F9FAFB]"])
                }, [
                  o("div", {
                    class: "flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-[100vw] max-h-[500px]",
                    onScroll: we
                  }, [
                    (g(!0), y(se, null, re(J.value, (m, k) => (g(), y("div", {
                      class: "min-w-full snap-center flex items-center justify-center p-6",
                      key: k
                    }, [
                      o("img", {
                        src: m,
                        class: "max-w-full max-h-full object-contain drop-shadow-xl"
                      }, null, 8, lo)
                    ]))), 128))
                  ], 32),
                  o("div", {
                    class: f(["absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md z-10 border", c.value ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"])
                  }, [
                    (g(!0), y(se, null, re(J.value, (m, k) => (g(), y("span", {
                      key: k,
                      class: f(["h-1.5 rounded-full transition-all duration-300 shadow-sm", O.value === k ? c.value ? "bg-white w-4" : "bg-slate-800 w-4" : c.value ? "bg-white/30 w-1.5" : "bg-slate-800/30 w-1.5"])
                    }, null, 2))), 128))
                  ], 2)
                ], 2)
              ]),
              o("div", io, [
                o("div", {
                  class: f(["md:!hidden pb-6 border-b", c.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  o("div", uo, [
                    o("span", co, A(xe($.value)) + " ₽", 1)
                  ]),
                  o("div", {
                    class: f(["inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm", c.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    o("span", null, A(xe($.value)) + " ₽", 1),
                    i[29] || (i[29] = pe(" with B2C ", -1))
                  ], 2)
                ], 2),
                ve.value.length ? (g(), y("div", fo, [
                  o("div", {
                    class: f(["text-sm font-medium mb-3 flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
                  }, [
                    i[30] || (i[30] = o("span", null, "Color:", -1)),
                    o("span", {
                      class: f(["font-bold text-base", c.value ? "text-white" : "text-slate-900"])
                    }, A(h.value), 3)
                  ], 2),
                  o("div", po, [
                    (g(!0), y(se, null, re(ve.value, (m) => (g(), y("div", {
                      key: m.id,
                      class: f(["relative w-[72px] h-[90px] rounded-xl cursor-pointer overflow-hidden transition-all duration-200 group border", [
                        c.value ? "border-slate-700" : "border-slate-200",
                        h.value === m.name ? "ring-2 ring-blue-500 ring-offset-2 " + (c.value ? "ring-offset-slate-900" : "ring-offset-white") : "hover:opacity-80"
                      ]]),
                      onClick: (k) => De(m)
                    }, [
                      m.url ? (g(), y("img", {
                        key: 0,
                        src: m.url,
                        class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      }, null, 8, mo)) : (g(), y("span", {
                        key: 1,
                        class: f(["flex w-full h-full items-center justify-center p-1 text-center text-xs leading-tight font-medium", c.value ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"])
                      }, A(m.name), 3)),
                      h.value === m.name ? (g(), y("div", bo, [...i[31] || (i[31] = [
                        o("div", { class: "bg-blue-600 rounded-full p-1 shadow-lg animate-[slideUp_0.2s_ease-out]" }, [
                          o("svg", {
                            class: "w-3.5 h-3.5 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            "stroke-width": "3.5"
                          }, [
                            o("path", { d: "M5 13l4 4L19 7" })
                          ])
                        ], -1)
                      ])])) : B("", !0)
                    ], 10, ho))), 128))
                  ])
                ])) : B("", !0),
                K.value.length ? (g(), y("div", xo, [
                  o("div", vo, [
                    o("span", {
                      class: f(["text-sm font-medium flex items-center gap-2", c.value ? "text-slate-400" : "text-slate-500"])
                    }, [
                      i[32] || (i[32] = o("span", null, "Size:", -1)),
                      o("span", {
                        class: f(["font-bold text-base", c.value ? "text-white" : "text-slate-900"])
                      }, A(v.value), 3)
                    ], 2),
                    Re.value ? (g(), y("button", {
                      key: 0,
                      class: f(["text-xs font-bold flex items-center gap-1.5 transition hover:opacity-70 px-2 py-1 rounded-md", c.value ? "text-blue-400 bg-blue-400/10" : "text-blue-600 bg-blue-50"]),
                      onClick: i[0] || (i[0] = (m) => C.value = !0)
                    }, [...i[33] || (i[33] = [
                      o("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2"
                      }, [
                        o("path", { d: "M19.5 12h-15M19.5 12l-4-4m4 4l-4 4" })
                      ], -1),
                      pe(" Size Chart ", -1)
                    ])], 2)) : B("", !0)
                  ]),
                  o("div", go, [
                    (g(!0), y(se, null, re(K.value, (m) => (g(), y("button", {
                      key: m,
                      class: f(["h-12 min-w-[3.5rem] px-4 rounded-xl text-sm font-semibold transition-all duration-200 border relative overflow-hidden", [
                        v.value === m ? c.value ? "bg-slate-800 border-blue-500 text-blue-400 ring-1 ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200" : c.value ? "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-500" : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      ]]),
                      onClick: (k) => v.value = m
                    }, A(m), 11, yo))), 128))
                  ])
                ])) : B("", !0),
                o("div", {
                  class: f(["!hidden lg:!block p-6 rounded-2xl border transition-colors duration-300", c.value ? "bg-slate-800/40 border-slate-700" : "bg-slate-50/50 border-slate-200/60"])
                }, [
                  o("h3", {
                    class: f(["text-xs font-bold mb-4 uppercase tracking-wider opacity-60", c.value ? "text-white" : "text-slate-900"])
                  }, "Key Features", 2),
                  o("ul", wo, [
                    (g(!0), y(se, null, re(D.value.slice(0, 5), (m, k) => (g(), y("li", {
                      key: k,
                      class: f(["text-sm flex justify-between items-start border-b pb-2 last:border-0 border-dashed", c.value ? "border-slate-700/50" : "border-slate-200"])
                    }, [
                      o("span", {
                        class: f(c.value ? "text-slate-400" : "text-slate-500")
                      }, A(m.name), 3),
                      o("span", {
                        class: f(["font-medium text-right max-w-[60%]", c.value ? "text-slate-200" : "text-slate-900"])
                      }, A(m.value), 3)
                    ], 2))), 128))
                  ]),
                  o("button", {
                    class: f(["text-sm font-bold flex items-center gap-1 transition hover:opacity-70 group", c.value ? "text-blue-400" : "text-blue-600"]),
                    onClick: G
                  }, [...i[34] || (i[34] = [
                    pe(" View all characteristics ", -1),
                    o("svg", {
                      class: "group-hover:translate-x-1 transition-transform",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      o("path", { d: "M6 9l6 6 6-6" })
                    ], -1)
                  ])], 2)
                ], 2),
                n.value.checkDelivery ? (g(), y("div", {
                  key: 2,
                  class: f(["lg:!hidden space-y-4 pt-4 border-t", c.value ? "border-slate-700" : "border-slate-100"])
                }, [
                  o("div", {
                    class: f(["font-bold text-sm", c.value ? "text-slate-200" : "text-slate-900"])
                  }, "Check Delivery Availability", 2),
                  o("div", _o, [
                    We(o("input", {
                      "onUpdate:modelValue": i[1] || (i[1] = (m) => x.value = m),
                      type: "text",
                      placeholder: "Enter PIN/ZIP code",
                      onKeyup: _t(Z, ["enter"]),
                      class: f(["flex-1 px-3 py-2 text-sm rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all", c.value ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"])
                    }, null, 34), [
                      [kt, x.value]
                    ]),
                    o("button", {
                      onClick: Z,
                      disabled: S.value,
                      class: "px-4 py-2 bg-slate-900 text-white dark:bg-slate-700 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center min-w-[70px]"
                    }, [
                      S.value ? (g(), y("svg", Eo, [...i[35] || (i[35] = [
                        o("circle", {
                          class: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          "stroke-width": "4"
                        }, null, -1),
                        o("path", {
                          class: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, null, -1)
                      ])])) : (g(), y("span", Co, "Check"))
                    ], 8, ko)
                  ]),
                  I.value ? (g(), y("div", Ro, A(I.value), 1)) : B("", !0),
                  P.value ? (g(), y("div", {
                    key: 1,
                    class: f(["mt-4 p-4 rounded-2xl border animate-[fadeIn_0.3s_ease-out]", c.value ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-100"])
                  }, [
                    o("div", So, [
                      i[37] || (i[37] = o("div", { class: "text-2xl mt-1" }, "🚚", -1)),
                      o("div", null, [
                        o("div", {
                          class: f(["font-bold mb-1", c.value ? "text-green-400" : "text-green-600"])
                        }, A(P.value.expected_delivery.text), 3),
                        o("div", {
                          class: f(["text-xs mb-2 leading-relaxed", c.value ? "text-slate-300" : "text-slate-600"])
                        }, [
                          i[36] || (i[36] = o("span", { class: "font-semibold opacity-70" }, "To:", -1)),
                          pe(" " + A(P.value.details.validated_location), 1)
                        ], 2),
                        o("div", Oo, [
                          o("div", {
                            class: f(["text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-flex items-center gap-1 rounded border", c.value ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-white text-slate-600 border-slate-200"])
                          }, A(P.value.details.delivery_type === "international" ? "✈️ Int." : "🏠 Dom."), 3),
                          o("div", {
                            class: f(["text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-flex items-center gap-1 rounded border", c.value ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-white text-slate-600 border-slate-200"])
                          }, " ⏱️ " + A(P.value.details.delivery_days) + " Days ", 3)
                        ])
                      ])
                    ])
                  ], 2)) : B("", !0)
                ], 2)) : B("", !0)
              ])
            ]),
            o("div", {
              class: f(["px-4 lg:px-0 mt-16 pt-2", c.value ? "border-slate-800" : "border-slate-200"])
            }, [
              o("div", {
                id: "characteristics",
                class: f(["px-4 lg:px-0 mt-16 pt-10 border-t scroll-mt-32", c.value ? "border-slate-800" : "border-slate-200"])
              }, [
                o("h3", {
                  class: f(["text-2xl font-bold mb-6 tracking-tight", c.value ? "text-white" : "text-slate-900"])
                }, "All Characteristics", 2),
                o("div", {
                  class: f(["rounded-2xl border overflow-hidden", c.value ? "border-slate-800" : "border-slate-200"])
                }, [
                  (g(!0), y(se, null, re(ae.value, (m, k) => (g(), y("div", {
                    class: f(["flex justify-between items-center p-4 sm:px-6 transition-colors", [k % 2 === 0 ? c.value ? "bg-slate-800/30" : "bg-slate-50" : c.value ? "bg-transparent" : "bg-white"]]),
                    key: k
                  }, [
                    o("span", {
                      class: f(["text-sm mb-1 sm:mb-0 font-medium opacity-80", c.value ? "text-slate-400" : "text-slate-500"])
                    }, A(m.name), 3),
                    o("span", {
                      class: f(["font-semibold text-sm sm:text-right", c.value ? "text-slate-200" : "text-slate-900"])
                    }, A(m.value), 3)
                  ], 2))), 128))
                ], 2),
                D.value.length > 5 ? (g(), y("button", {
                  key: 0,
                  class: f(["mt-6 flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-xl border font-bold text-sm transition-all hover:shadow-md active:scale-[0.98]", c.value ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"]),
                  onClick: i[2] || (i[2] = (m) => N.value = !N.value)
                }, [
                  pe(A(N.value ? "Hide characteristics" : "Show all characteristics") + " ", 1),
                  (g(), y("svg", {
                    class: f([{ "rotate-180": N.value }, "transition-transform duration-300 ml-2"]),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [...i[38] || (i[38] = [
                    o("path", { d: "M6 9l6 6 6-6" }, null, -1)
                  ])], 2))
                ], 2)) : B("", !0)
              ], 2)
            ], 2)
          ]),
          o("div", Ao, [
            o("div", {
              class: f(["sticky top-24 p-6 rounded-[32px] border transition-colors duration-300", c.value ? "bg-[#151e32] border-slate-700 ring-1 ring-white/5 shadow-2xl shadow-black/20" : "bg-white border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"])
            }, [
              o("div", To, [
                o("div", null, [
                  o("div", Po, [
                    o("div", Fo, A(xe($.value)) + " ₽", 1)
                  ]),
                  o("div", {
                    class: f(["mt-3 inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border", c.value ? "bg-emerald-900/20 text-emerald-400 border-emerald-900/30" : "bg-emerald-50 text-emerald-700 border-emerald-100"])
                  }, [
                    o("span", null, A(xe($.value)) + " ₽ with B2C", 1)
                  ], 2)
                ])
              ]),
              n.value.checkDelivery ? (g(), y("div", {
                key: 0,
                class: f(["space-y-4 mb-8 pt-6 border-t", c.value ? "border-slate-700" : "border-slate-100"])
              }, [
                o("div", {
                  class: f(["font-bold text-sm", c.value ? "text-slate-200" : "text-slate-900"])
                }, "Check Delivery Availability", 2),
                o("div", No, [
                  We(o("input", {
                    "onUpdate:modelValue": i[3] || (i[3] = (m) => x.value = m),
                    type: "text",
                    placeholder: "Enter PIN/ZIP code",
                    onKeyup: _t(Z, ["enter"]),
                    class: f(["flex-1 px-3 py-2 text-sm rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none transition-all", c.value ? "bg-slate-800 border-slate-700 text-white placeholder-slate-500" : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"])
                  }, null, 34), [
                    [kt, x.value]
                  ]),
                  o("button", {
                    onClick: Z,
                    disabled: S.value,
                    class: "px-4 py-2 bg-slate-900 text-white dark:bg-slate-700 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center min-w-[70px]"
                  }, [
                    S.value ? (g(), y("svg", Lo, [...i[39] || (i[39] = [
                      o("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }, null, -1),
                      o("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }, null, -1)
                    ])])) : (g(), y("span", Bo, "Check"))
                  ], 8, Do)
                ]),
                I.value ? (g(), y("div", Io, A(I.value), 1)) : B("", !0),
                P.value ? (g(), y("div", {
                  key: 1,
                  class: f(["mt-4 p-4 rounded-2xl border animate-[fadeIn_0.3s_ease-out]", c.value ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-100"])
                }, [
                  o("div", Uo, [
                    i[41] || (i[41] = o("div", { class: "text-2xl mt-1" }, "🚚", -1)),
                    o("div", null, [
                      o("div", {
                        class: f(["font-bold mb-1", c.value ? "text-green-400" : "text-green-600"])
                      }, A(P.value.expected_delivery.text), 3),
                      o("div", {
                        class: f(["text-xs mb-2 leading-relaxed", c.value ? "text-slate-300" : "text-slate-600"])
                      }, [
                        i[40] || (i[40] = o("span", { class: "font-semibold opacity-70" }, "To:", -1)),
                        pe(" " + A(P.value.details.validated_location), 1)
                      ], 2),
                      o("div", jo, [
                        o("div", {
                          class: f(["text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-flex items-center gap-1 rounded border", c.value ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-white text-slate-600 border-slate-200"])
                        }, A(P.value.details.delivery_type === "international" ? "✈️ Int." : "🏠 Dom."), 3),
                        o("div", {
                          class: f(["text-[10px] font-bold uppercase tracking-wider px-2 py-1 inline-flex items-center gap-1 rounded border", c.value ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-white text-slate-600 border-slate-200"])
                        }, " ⏱️ " + A(P.value.details.delivery_days) + " Days ", 3)
                      ])
                    ])
                  ])
                ], 2)) : B("", !0)
              ], 2)) : B("", !0),
              n.value.purchaseable ? (g(), y("div", Mo, [
                q.value > 0 ? (g(), y("div", {
                  key: 0,
                  class: f(["w-full h-[56px] flex items-center justify-between rounded-2xl px-2 border transition-all", c.value ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"])
                }, [
                  o("button", {
                    onClick: i[4] || (i[4] = (m) => ce(-1)),
                    disabled: z.value,
                    class: f(["w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-95 disabled:opacity-50", c.value ? "bg-slate-700 text-white hover:bg-slate-600" : "bg-white text-slate-800 shadow-sm hover:bg-slate-50"])
                  }, [...i[42] || (i[42] = [
                    o("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      o("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                      })
                    ], -1)
                  ])], 10, zo),
                  o("div", $o, [
                    o("span", {
                      class: f(["font-bold text-lg leading-none", c.value ? "text-white" : "text-slate-900"])
                    }, A(q.value), 3),
                    o("span", {
                      class: f(["text-[10px] font-semibold uppercase tracking-wider opacity-60", c.value ? "text-slate-300" : "text-slate-500"])
                    }, "In Cart", 2)
                  ]),
                  o("button", {
                    onClick: i[5] || (i[5] = (m) => ce(1)),
                    disabled: z.value,
                    class: f(["w-12 h-12 flex items-center justify-center rounded-xl text-white shadow-sm transition-all active:scale-95 disabled:opacity-50", (c.value, "bg-blue-600 hover:bg-blue-500")])
                  }, [
                    z.value ? (g(), y("svg", qo, [...i[43] || (i[43] = [
                      o("circle", {
                        class: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        "stroke-width": "4"
                      }, null, -1),
                      o("path", {
                        class: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }, null, -1)
                    ])])) : (g(), y("svg", Vo, [...i[44] || (i[44] = [
                      o("line", {
                        x1: "12",
                        y1: "5",
                        x2: "12",
                        y2: "19"
                      }, null, -1),
                      o("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                      }, null, -1)
                    ])]))
                  ], 10, Ho)
                ], 2)) : (g(), y("button", {
                  key: 1,
                  class: "w-full h-[56px] bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] flex items-center justify-center gap-2 text-[15px]",
                  onClick: i[6] || (i[6] = (m) => ce(1)),
                  disabled: z.value
                }, [
                  z.value ? (g(), y("svg", Wo, [...i[45] || (i[45] = [
                    o("circle", {
                      class: "opacity-25",
                      cx: "12",
                      cy: "12",
                      r: "10",
                      stroke: "currentColor",
                      "stroke-width": "4"
                    }, null, -1),
                    o("path", {
                      class: "opacity-75",
                      fill: "currentColor",
                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, null, -1)
                  ])])) : (g(), y("span", Xo, "Add to Cart"))
                ], 8, Jo)),
                o("button", {
                  onClick: le,
                  disabled: z.value,
                  class: f(["w-full h-[56px] font-bold rounded-2xl transition-all duration-300 border active:scale-[0.98] cursor-pointer disabled:opacity-50", c.value ? "bg-transparent hover:bg-slate-800 text-white border-slate-600 hover:border-slate-500" : "bg-white hover:bg-slate-50 text-slate-900 border-slate-200 hover:border-slate-300"])
                }, " Buy Now ", 10, Ko)
              ])) : B("", !0),
              n.value.purchaseable ? (g(), y("div", {
                key: 2,
                class: f(["mt-8 pt-6 border-t flex items-center gap-3", c.value ? "border-slate-700" : "border-slate-100"])
              }, [
                o("div", {
                  class: f(["w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-md text-lg", c.value ? "bg-slate-700" : "bg-slate-900"])
                }, A(l.value.brand ? l.value.brand[0] : "B"), 3),
                o("div", null, [
                  o("div", {
                    class: f(["font-bold text-sm mb-0.5", c.value ? "text-white" : "text-slate-900"])
                  }, A(l.value.brand), 3),
                  o("div", {
                    class: f(["text-xs flex items-center gap-1", c.value ? "text-slate-400" : "text-slate-500"])
                  }, [...i[46] || (i[46] = [
                    o("span", { class: "text-amber-500" }, "★★★★★", -1),
                    pe(" 4.9 • Official Seller ", -1)
                  ])], 2)
                ])
              ], 2)) : B("", !0)
            ], 2)
          ])
        ]),
        n.value.purchaseable ? (g(), y("div", {
          key: 0,
          class: f(["fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t p-4 pb-[max(16px,env(safe-area-inset-bottom))] flex items-center justify-between gap-4 z-50 md:!hidden shadow-[0_-4px_30px_rgba(0,0,0,0.1)] transition-transform duration-300", c.value ? "bg-[#0f172a]/90 border-slate-800" : "bg-white/90 border-slate-200"])
        }, [
          o("div", Go, [
            o("span", {
              class: f(["text-xl font-extrabold leading-none tracking-tight", c.value ? "text-white" : "text-slate-900"])
            }, A(xe($.value)) + " ₽", 3),
            oe.value > $.value ? (g(), y("span", Zo, A(xe(oe.value)), 1)) : B("", !0)
          ]),
          q.value > 0 ? (g(), y("div", {
            key: 0,
            class: f(["flex-1 h-12 flex items-center justify-between rounded-xl px-1 border", c.value ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"])
          }, [
            o("button", {
              onClick: i[7] || (i[7] = (m) => ce(-1)),
              disabled: z.value,
              class: f(["w-10 h-10 flex items-center justify-center rounded-lg disabled:opacity-50", c.value ? "bg-slate-700 text-white" : "bg-white text-slate-800 shadow-sm"])
            }, [...i[47] || (i[47] = [
              o("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5"
              }, [
                o("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                })
              ], -1)
            ])], 10, Qo),
            o("span", {
              class: f(["font-bold text-[15px]", c.value ? "text-white" : "text-slate-900"])
            }, A(q.value) + " in Cart", 3),
            o("button", {
              onClick: i[8] || (i[8] = (m) => ce(1)),
              disabled: z.value,
              class: "w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm disabled:opacity-50"
            }, [
              z.value ? (g(), y("svg", ea, [...i[48] || (i[48] = [
                o("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }, null, -1),
                o("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, null, -1)
              ])])) : (g(), y("svg", ta, [...i[49] || (i[49] = [
                o("line", {
                  x1: "12",
                  y1: "5",
                  x2: "12",
                  y2: "19"
                }, null, -1),
                o("line", {
                  x1: "5",
                  y1: "12",
                  x2: "19",
                  y2: "12"
                }, null, -1)
              ])]))
            ], 8, Yo)
          ], 2)) : (g(), y("button", {
            key: 1,
            class: "flex-1 h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base shadow-lg shadow-blue-500/40 active:scale-95 transition-all flex justify-center items-center gap-2 disabled:opacity-50",
            onClick: i[9] || (i[9] = (m) => ce(1)),
            disabled: z.value
          }, [
            z.value ? (g(), y("svg", ra, [...i[50] || (i[50] = [
              o("circle", {
                class: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                "stroke-width": "4"
              }, null, -1),
              o("path", {
                class: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }, null, -1)
            ])])) : (g(), y("span", na, "Add to Cart"))
          ], 8, sa))
        ], 2)) : B("", !0)
      ])) : (g(), y("div", {
        key: 3,
        class: f(["min-h-[60vh] flex flex-col items-center justify-center font-medium opacity-60", c.value ? "text-slate-400" : "text-slate-500"])
      }, [
        o("div", {
          class: f(["p-4 rounded-full mb-4", c.value ? "bg-slate-800" : "bg-slate-100"])
        }, [...i[51] || (i[51] = [
          Ie('<svg class="w-12 h-12 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-93a3ef79><circle cx="12" cy="12" r="10" data-v-93a3ef79></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2" data-v-93a3ef79></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-93a3ef79></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-93a3ef79></line></svg>', 1)
        ])], 2),
        i[52] || (i[52] = o("span", { class: "text-lg" }, "Product Not Found", -1))
      ], 2)),
      C.value ? (g(), y("div", {
        key: 4,
        class: "fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-0 sm:p-4 md:p-6",
        onClick: i[13] || (i[13] = bs((m) => C.value = !1, ["self"]))
      }, [
        o("div", oa, [
          i[72] || (i[72] = o("div", { class: "w-full flex justify-center pt-4 pb-1 md:hidden" }, [
            o("div", { class: "w-12 h-1.5 bg-gray-300 dark:bg-slate-700 rounded-full" })
          ], -1)),
          o("div", aa, [
            o("div", la, [
              o("h2", {
                class: f(["text-xl font-bold", c.value ? "text-white" : "text-gray-900"])
              }, "Size Guide", 2),
              o("button", {
                onClick: i[10] || (i[10] = (m) => C.value = !1),
                class: "p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-gray-200 rounded-full transition-colors"
              }, [...i[53] || (i[53] = [
                o("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  o("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ]),
            o("div", ia, [
              o("button", {
                onClick: i[11] || (i[11] = (m) => F.value = "chart"),
                class: f(["pb-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-colors", F.value === "chart" ? "border-[#FF3E6C] text-[#FF3E6C]" : "border-transparent text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"])
              }, " Size Chart ", 2),
              o("button", {
                onClick: i[12] || (i[12] = (m) => F.value = "measure"),
                class: f(["pb-3 text-sm font-bold tracking-wide uppercase border-b-2 transition-colors", F.value === "measure" ? "border-[#FF3E6C] text-[#FF3E6C]" : "border-transparent text-gray-500 hover:text-gray-800 dark:text-slate-400 dark:hover:text-white"])
              }, " How to Measure ", 2)
            ])
          ]),
          o("div", da, [
            We(o("div", ua, [
              Re.value ? (g(), y("div", ca, [
                o("img", {
                  src: Re.value,
                  class: "max-w-full h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
                }, null, 8, fa)
              ])) : (g(), y("div", pa, [
                o("div", ha, [
                  o("span", {
                    class: f(["text-xs font-medium", c.value ? "text-slate-400" : "text-gray-500"])
                  }, [...i[54] || (i[54] = [
                    pe(" Measurements in ", -1),
                    o("span", { class: "font-semibold text-[#FF3E6C]" }, "Inches", -1)
                  ])], 2)
                ]),
                o("div", ma, [
                  o("table", ba, [
                    o("thead", null, [
                      o("tr", {
                        class: f(c.value ? "border-b border-slate-700" : "border-b-2 border-gray-100")
                      }, [
                        o("th", {
                          class: f(["py-4 px-4 font-medium text-xs text-left", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "SIZE", 2),
                        o("th", {
                          class: f(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "CHEST", 2),
                        o("th", {
                          class: f(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "LENGTH", 2),
                        o("th", {
                          class: f(["py-4 px-4 font-medium text-xs", c.value ? "text-slate-400" : "text-gray-500"])
                        }, "SHOULDER", 2)
                      ], 2)
                    ]),
                    o("tbody", {
                      class: f(c.value ? "text-slate-300" : "text-gray-700")
                    }, [
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "S", 2),
                        i[55] || (i[55] = o("td", { class: "py-4 px-4" }, "38.0", -1)),
                        i[56] || (i[56] = o("td", { class: "py-4 px-4" }, "27.0", -1)),
                        i[57] || (i[57] = o("td", { class: "py-4 px-4" }, "16.0", -1))
                      ], 2),
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "M", 2),
                        i[58] || (i[58] = o("td", { class: "py-4 px-4" }, "40.0", -1)),
                        i[59] || (i[59] = o("td", { class: "py-4 px-4" }, "27.5", -1)),
                        i[60] || (i[60] = o("td", { class: "py-4 px-4" }, "16.5", -1))
                      ], 2),
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "L", 2),
                        i[61] || (i[61] = o("td", { class: "py-4 px-4" }, "42.0", -1)),
                        i[62] || (i[62] = o("td", { class: "py-4 px-4" }, "28.0", -1)),
                        i[63] || (i[63] = o("td", { class: "py-4 px-4" }, "17.0", -1))
                      ], 2),
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "XL", 2),
                        i[64] || (i[64] = o("td", { class: "py-4 px-4" }, "44.0", -1)),
                        i[65] || (i[65] = o("td", { class: "py-4 px-4" }, "28.5", -1)),
                        i[66] || (i[66] = o("td", { class: "py-4 px-4" }, "17.5", -1))
                      ], 2),
                      o("tr", {
                        class: f(["border-b transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/30", c.value ? "border-slate-800" : "border-gray-100"])
                      }, [
                        o("td", {
                          class: f(["py-4 px-4 text-left font-semibold", c.value ? "text-white" : "text-black"])
                        }, "XXL", 2),
                        i[67] || (i[67] = o("td", { class: "py-4 px-4" }, "46.0", -1)),
                        i[68] || (i[68] = o("td", { class: "py-4 px-4" }, "29.0", -1)),
                        i[69] || (i[69] = o("td", { class: "py-4 px-4" }, "18.0", -1))
                      ], 2)
                    ], 2)
                  ])
                ]),
                o("div", {
                  class: f(["mt-6 text-xs font-normal opacity-70 text-left md:text-center pb-4 md:pb-0", c.value ? "text-slate-400" : "text-gray-500"])
                }, " * Garment measurements may vary by ±0.5 inches depending on style and fit. ", 2)
              ]))
            ], 512), [
              [Et, F.value === "chart"]
            ]),
            We(o("div", xa, [
              o("div", va, [
                o("div", ga, [
                  (g(), y("svg", ya, [
                    o("path", {
                      d: "M40,50 L80,20 L120,20 L160,50 L180,100 L140,120 L130,90 L130,230 L70,230 L70,90 L60,120 L20,100 Z",
                      stroke: c.value ? "#475569" : "#e2e8f0",
                      "stroke-width": "2",
                      "stroke-linejoin": "round"
                    }, null, 8, wa),
                    o("path", {
                      d: "M80,20 C80,20 100,40 120,20",
                      stroke: c.value ? "#475569" : "#e2e8f0",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    }, null, 8, _a),
                    i[70] || (i[70] = Ie('<line x1="60" y1="95" x2="140" y2="95" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-93a3ef79></line><circle cx="60" cy="95" r="2.5" fill="#FF3E6C" stroke="none" data-v-93a3ef79></circle><circle cx="140" cy="95" r="2.5" fill="#FF3E6C" stroke="none" data-v-93a3ef79></circle><rect x="92" y="87" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-93a3ef79></rect><text x="100" y="99" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-93a3ef79>1</text><line x1="90" y1="35" x2="90" y2="230" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-93a3ef79></line><circle cx="90" cy="35" r="2.5" fill="#FF3E6C" stroke="none" data-v-93a3ef79></circle><circle cx="90" cy="230" r="2.5" fill="#FF3E6C" stroke="none" data-v-93a3ef79></circle><rect x="82" y="125" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-93a3ef79></rect><text x="90" y="137" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-93a3ef79>2</text><line x1="45" y1="45" x2="155" y2="45" stroke="#FF3E6C" stroke-width="1.5" stroke-dasharray="4 4" data-v-93a3ef79></line><circle cx="45" cy="45" r="2.5" fill="#FF3E6C" stroke="none" data-v-93a3ef79></circle><circle cx="155" cy="45" r="2.5" fill="#FF3E6C" stroke="none" data-v-93a3ef79></circle><rect x="92" y="37" width="16" height="16" rx="8" fill="#FF3E6C" stroke="none" data-v-93a3ef79></rect><text x="100" y="49" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" stroke="none" data-v-93a3ef79>3</text>', 15))
                  ]))
                ]),
                o("div", ka, [
                  o("div", Ea, [
                    i[71] || (i[71] = o("span", { class: "absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold bg-[#FF3E6C] text-white" }, "1", -1)),
                    o("h4", {
                      class: f(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Chest", 2),
                    o("p", {
                      class: f(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure around the fullest part of your chest, keeping the measuring tape horizontal and comfortably loose.", 2)
                  ]),
                  o("div", Ca, [
                    o("span", {
                      class: f(["absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold", c.value ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"])
                    }, "2", 2),
                    o("h4", {
                      class: f(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Front Length", 2),
                    o("p", {
                      class: f(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure from the highest point of the shoulder (where the collar meets the shoulder) straight down to the hemline.", 2)
                  ]),
                  o("div", Ra, [
                    o("span", {
                      class: f(["absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-semibold", c.value ? "bg-slate-800 text-slate-300" : "bg-gray-100 text-gray-600"])
                    }, "3", 2),
                    o("h4", {
                      class: f(["font-semibold text-sm mb-1", c.value ? "text-white" : "text-black"])
                    }, "Shoulder", 2),
                    o("p", {
                      class: f(["text-sm leading-relaxed", c.value ? "text-slate-400" : "text-gray-600"])
                    }, "Measure straight across the back from the edge of one shoulder seam to the edge of the other shoulder seam.", 2)
                  ])
                ])
              ])
            ], 512), [
              [Et, F.value === "measure"]
            ])
          ])
        ])
      ])) : B("", !0)
    ], 10, vn));
  }
}), Aa = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, n] of t)
    s[r] = n;
  return s;
}, Ta = /* @__PURE__ */ Aa(Oa, [["__scopeId", "data-v-93a3ef79"]]), Pa = /* @__PURE__ */ $t({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    const t = e;
    return t._$p?.data.curr.data.lang_code || (t._$p.data.curr.data.lang_code = "en"), (s, r) => (g(), xs(Ta, {
      _p: e._p,
      _$p: e._$p,
      _$cb: e._$cb
    }, null, 8, ["_p", "_$p", "_$cb"]));
  }
}), Ya = async (e) => ({
  set: async (t, s) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = vs(Pa, {
      _p: e,
      _$p: t,
      _$cb: s
    }), a = e.f.name("vue-root"), d = {
      r: `<div id="${a}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          s?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const l = document.getElementById(a);
      l ? n.mount(l) : console.warn(`[Hydrator] Target element #${a} not found.`);
    }, 0), d;
  }
});
export {
  Ya as hydrator,
  Ya as index
};
