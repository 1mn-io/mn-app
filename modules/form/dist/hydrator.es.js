import { r as Ie, a as ir, c as Pe, t as $e, u as Sr, o as li, i as qn, w as ur, b as nf, d as Ot, n as wt, s as sf, p as Ca, e as _o, f as He, g as Fe, h as Xe, j as Jr, F as On, k as vs, l as sr, m as Vs, q as gs, v as of, x as Ho, y as af, z as lf, A as pf, B as uf, C as pi, D as cf, E as Da, G as ys, H as Aa, I as df, J as ff, K as hf, L as mf, M as $s, N as Wi, O as vf } from "./runtime-dom.esm-bundler-DLmeZNr2.js";
function kt(e) {
  return typeof e == "function";
}
function uu(e) {
  return e == null;
}
const ln = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function ui(e) {
  return Number(e) >= 0;
}
function gf(e) {
  return typeof e == "object" && e !== null;
}
function yf(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Ki(e) {
  if (!gf(e) || yf(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Gn(e, t) {
  return Object.keys(t).forEach((r) => {
    if (Ki(t[r]) && Ki(e[r])) {
      e[r] || (e[r] = {}), Gn(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function bs(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let n = 1; n < t.length; n++) {
    if (ui(t[n])) {
      r += `[${t[n]}]`;
      continue;
    }
    r += `.${t[n]}`;
  }
  return r;
}
const $f = {};
function bf(e) {
  return $f[e];
}
function Ui(e, t, r) {
  typeof r.value == "object" && (r.value = Te(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || t === "__proto__" ? Object.defineProperty(e, t, r) : e[t] = r.value;
}
function Te(e) {
  if (typeof e != "object") return e;
  var t = 0, r, n, s, o = Object.prototype.toString.call(e);
  if (o === "[object Object]" ? s = Object.create(e.__proto__ || null) : o === "[object Array]" ? s = Array(e.length) : o === "[object Set]" ? (s = /* @__PURE__ */ new Set(), e.forEach(function(a) {
    s.add(Te(a));
  })) : o === "[object Map]" ? (s = /* @__PURE__ */ new Map(), e.forEach(function(a, i) {
    s.set(Te(i), Te(a));
  })) : o === "[object Date]" ? s = /* @__PURE__ */ new Date(+e) : o === "[object RegExp]" ? s = new RegExp(e.source, e.flags) : o === "[object DataView]" ? s = new e.constructor(Te(e.buffer)) : o === "[object ArrayBuffer]" ? s = e.slice(0) : o.slice(-6) === "Array]" && (s = new e.constructor(e)), s) {
    for (n = Object.getOwnPropertySymbols(e); t < n.length; t++)
      Ui(s, n[t], Object.getOwnPropertyDescriptor(e, n[t]));
    for (t = 0, n = Object.getOwnPropertyNames(e); t < n.length; t++)
      Object.hasOwnProperty.call(s, r = n[t]) && s[r] === e[r] || Ui(s, r, Object.getOwnPropertyDescriptor(e, r));
  }
  return s || e;
}
const _f = /* @__PURE__ */ Symbol("vee-validate-form"), xf = /* @__PURE__ */ Symbol("vee-validate-form-context"), wf = typeof window < "u";
function kf(e) {
  return kt(e) && !!e.__locatorRef;
}
function lr(e) {
  return !!e && kt(e.parse) && e.__type === "VVTypedSchema";
}
function cu(e) {
  return !!e && kt(e.validate);
}
function Sf(e) {
  return e === "checkbox" || e === "radio";
}
function Cf(e) {
  return ln(e) || Array.isArray(e);
}
function Df(e) {
  return Array.isArray(e) ? e.length === 0 : ln(e) && Object.keys(e).length === 0;
}
function is(e) {
  return /^\[.+\]$/i.test(e);
}
function Af(e) {
  return du(e) && e.multiple;
}
function du(e) {
  return e.tagName === "SELECT";
}
function Tf(e) {
  return fu(e) && e.target && "submit" in e.target;
}
function fu(e) {
  return e ? !!(typeof Event < "u" && kt(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function Zn(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, s;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Zn(e[n], t[n]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (n of e.entries())
        if (!t.has(n[0]))
          return !1;
      for (n of e.entries())
        if (!Zn(n[1], t.get(n[0])))
          return !1;
      return !0;
    }
    if (Yi(e) && Yi(t))
      return !(e.size !== t.size || e.name !== t.name || e.lastModified !== t.lastModified || e.type !== t.type);
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (n of e.entries())
        if (!t.has(n[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (e = zi(e), t = zi(t), s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      var o = s[n];
      if (!Zn(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zi(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Yi(e) {
  return wf ? e instanceof File : !1;
}
function xo(e) {
  return is(e) ? e.replace(/\[|\]/gi, "") : e;
}
function Bt(e, t, r) {
  return e ? is(t) ? e[xo(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((s, o) => Cf(s) && o in s ? s[o] : r, e) : r;
}
function Rt(e, t, r) {
  if (is(t)) {
    e[xo(t)] = r;
    return;
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let s = e;
  for (let o = 0; o < n.length; o++) {
    if (o === n.length - 1) {
      s[n[o]] = r;
      return;
    }
    (!(n[o] in s) || uu(s[n[o]])) && (s[n[o]] = ui(n[o + 1]) ? [] : {}), s = s[n[o]];
  }
}
function Zo(e, t) {
  if (Array.isArray(e) && ui(t)) {
    e.splice(Number(t), 1);
    return;
  }
  ln(e) && delete e[t];
}
function qi(e, t) {
  if (is(t)) {
    delete e[xo(t)];
    return;
  }
  const r = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let n = e;
  for (let o = 0; o < r.length; o++) {
    if (o === r.length - 1) {
      Zo(n, r[o]);
      break;
    }
    if (!(r[o] in n) || uu(n[r[o]]))
      break;
    n = n[r[o]];
  }
  const s = r.map((o, a) => Bt(e, r.slice(0, a).join(".")));
  for (let o = s.length - 1; o >= 0; o--)
    if (Df(s[o])) {
      if (o === 0) {
        Zo(e, r[0]);
        continue;
      }
      Zo(s[o - 1], r[o - 1]);
    }
}
function vt(e) {
  return Object.keys(e);
}
function Gi(e, t = 0) {
  let r = null, n = [];
  return function(...s) {
    return r && clearTimeout(r), r = setTimeout(() => {
      const o = e(...s);
      n.forEach((a) => a(o)), n = [];
    }, t), new Promise((o) => n.push(o));
  };
}
function Of(e, t) {
  let r;
  return async function(...s) {
    const o = e(...s);
    r = o;
    const a = await o;
    return o !== r ? a : (r = void 0, t(a, s));
  };
}
function Xi(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function _s(e, t) {
  const r = {};
  for (const n in e)
    t.includes(n) || (r[n] = e[n]);
  return r;
}
function Ef(e) {
  let t = null, r = [];
  return function(...n) {
    const s = wt(() => {
      if (t !== s)
        return;
      const o = e(...n);
      r.forEach((a) => a(o)), r = [], t = null;
    });
    return t = s, new Promise((o) => r.push(o));
  };
}
function Wo(e) {
  if (hu(e))
    return e._value;
}
function hu(e) {
  return "_value" in e;
}
function If(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function Ji(e) {
  if (!fu(e))
    return e;
  const t = e.target;
  if (Sf(t.type) && hu(t))
    return Wo(t);
  if (t.type === "file" && t.files) {
    const r = Array.from(t.files);
    return t.multiple ? r : r[0];
  }
  if (Af(t))
    return Array.from(t.options).filter((r) => r.selected && !r.disabled).map(Wo);
  if (du(t)) {
    const r = Array.from(t.options).find((n) => n.selected);
    return r ? Wo(r) : t.value;
  }
  return If(t);
}
function Lf(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? ln(e) && e._$$isNormalized ? e : ln(e) ? Object.keys(e).reduce((r, n) => {
    const s = Mf(e[n]);
    return e[n] !== !1 && (r[n] = Qi(s)), r;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((r, n) => {
    const s = Pf(n);
    return s.name && (r[s.name] = Qi(s.params)), r;
  }, t) : t;
}
function Mf(e) {
  return e === !0 ? [] : Array.isArray(e) || ln(e) ? e : [e];
}
function Qi(e) {
  const t = (r) => typeof r == "string" && r[0] === "@" ? Vf(r.slice(1)) : r;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {});
}
const Pf = (e) => {
  let t = [];
  const r = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: r, params: t };
};
function Vf(e) {
  const t = (r) => {
    var n;
    return (n = Bt(r, e)) !== null && n !== void 0 ? n : r[e];
  };
  return t.__locatorRef = e, t;
}
const Nf = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let Ff = Object.assign({}, Nf);
const Bn = () => Ff;
async function Rf(e, t, r = {}) {
  const n = r?.bails, s = {
    name: r?.name || "{field}",
    rules: t,
    label: r?.label,
    bails: n ?? !0,
    formData: r?.values || {}
  }, o = await Bf(s, e);
  return Object.assign(Object.assign({}, o), { valid: !o.errors.length });
}
async function Bf(e, t) {
  const r = e.rules;
  if (lr(r) || cu(r))
    return Hf(t, Object.assign(Object.assign({}, e), { rules: r }));
  if (kt(r) || Array.isArray(r)) {
    const i = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      form: e.formData,
      value: t
    }, l = Array.isArray(r) ? r : [r], p = l.length, u = [];
    for (let c = 0; c < p; c++) {
      const f = l[c], d = await f(t, i);
      if (!(typeof d != "string" && !Array.isArray(d) && d)) {
        if (Array.isArray(d))
          u.push(...d);
        else {
          const v = typeof d == "string" ? d : vu(i);
          u.push(v);
        }
        if (e.bails)
          return {
            errors: u
          };
      }
    }
    return {
      errors: u
    };
  }
  const n = Object.assign(Object.assign({}, e), { rules: Lf(r) }), s = [], o = Object.keys(n.rules), a = o.length;
  for (let i = 0; i < a; i++) {
    const l = o[i], p = await Zf(n, t, {
      name: l,
      params: n.rules[l]
    });
    if (p.error && (s.push(p.error), e.bails))
      return {
        errors: s
      };
  }
  return {
    errors: s
  };
}
function jf(e) {
  return !!e && e.name === "ValidationError";
}
function mu(e) {
  return {
    __type: "VVTypedSchema",
    async parse(r, n) {
      var s;
      try {
        return {
          output: await e.validate(r, { abortEarly: !1, context: n?.formData || {} }),
          errors: []
        };
      } catch (o) {
        if (!jf(o))
          throw o;
        if (!(!((s = o.inner) === null || s === void 0) && s.length) && o.errors.length)
          return { errors: [{ path: o.path, errors: o.errors }] };
        const a = o.inner.reduce((i, l) => {
          const p = l.path || "";
          return i[p] || (i[p] = { errors: [], path: p }), i[p].errors.push(...l.errors), i;
        }, {});
        return { errors: Object.values(a) };
      }
    }
  };
}
async function Hf(e, t) {
  const n = await (lr(t.rules) ? t.rules : mu(t.rules)).parse(e, { formData: t.formData }), s = [];
  for (const o of n.errors)
    o.errors.length && s.push(...o.errors);
  return {
    value: n.value,
    errors: s
  };
}
async function Zf(e, t, r) {
  const n = bf(r.name);
  if (!n)
    throw new Error(`No such validator '${r.name}' exists.`);
  const s = Wf(r.params, e.formData), o = {
    field: e.label || e.name,
    name: e.name,
    label: e.label,
    value: t,
    form: e.formData,
    rule: Object.assign(Object.assign({}, r), { params: s })
  }, a = await n(t, s, o);
  return typeof a == "string" ? {
    error: a
  } : {
    error: a ? void 0 : vu(o)
  };
}
function vu(e) {
  const t = Bn().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function Wf(e, t) {
  const r = (n) => kf(n) ? n(t) : n;
  return Array.isArray(e) ? e.map(r) : Object.keys(e).reduce((n, s) => (n[s] = r(e[s]), n), {});
}
async function Kf(e, t) {
  const n = await (lr(e) ? e : mu(e)).parse(Te(t), { formData: Te(t) }), s = {}, o = {};
  for (const a of n.errors) {
    const i = a.errors, l = (a.path || "").replace(/\["(\d+)"\]/g, (p, u) => `[${u}]`);
    s[l] = { valid: !i.length, errors: i }, i.length && (o[l] = i[0]);
  }
  return {
    valid: !n.errors.length,
    results: s,
    errors: o,
    values: n.value,
    source: "schema"
  };
}
async function Uf(e, t, r) {
  const s = vt(e).map(async (p) => {
    var u, c, f;
    const d = (u = r?.names) === null || u === void 0 ? void 0 : u[p], g = await Rf(Bt(t, p), e[p], {
      name: d?.name || p,
      label: d?.label,
      values: t,
      bails: (f = (c = r?.bailsMap) === null || c === void 0 ? void 0 : c[p]) !== null && f !== void 0 ? f : !0
    });
    return Object.assign(Object.assign({}, g), { path: p });
  });
  let o = !0;
  const a = await Promise.all(s), i = {}, l = {};
  for (const p of a)
    i[p.path] = {
      valid: p.valid,
      errors: p.errors
    }, p.valid || (o = !1, l[p.path] = p.errors[0]);
  return {
    valid: o,
    results: i,
    errors: l,
    source: "schema"
  };
}
let zf = 0;
const xs = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function gu(e) {
  const t = e?.initialValues || {}, r = Object.assign({}, $e(t)), n = Sr(e?.validationSchema);
  return n && lr(n) && kt(n.cast) ? Te(n.cast(r) || {}) : Te(r);
}
function Yf(e) {
  var t;
  const r = zf++, n = e?.name || "Form";
  let s = 0;
  const o = Ie(!1), a = Ie(!1), i = Ie(0), l = [], p = ir(gu(e)), u = Ie([]), c = Ie({}), f = Ie({}), d = Ef(() => {
    f.value = u.value.reduce((O, T) => (O[bs($e(T.path))] = T, O), {});
  });
  function g(O, T) {
    const N = W(O);
    if (!N) {
      typeof O == "string" && (c.value[bs(O)] = Xi(T));
      return;
    }
    if (typeof O == "string") {
      const z = bs(O);
      c.value[z] && delete c.value[z];
    }
    N.errors = Xi(T), N.valid = !N.errors.length;
  }
  function v(O) {
    vt(O).forEach((T) => {
      g(T, O[T]);
    });
  }
  e?.initialErrors && v(e.initialErrors);
  const $ = Pe(() => {
    const O = u.value.reduce((T, N) => (N.errors.length && (T[$e(N.path)] = N.errors), T), {});
    return Object.assign(Object.assign({}, c.value), O);
  }), h = Pe(() => vt($.value).reduce((O, T) => {
    const N = $.value[T];
    return N?.length && (O[T] = N[0]), O;
  }, {})), S = Pe(() => u.value.reduce((O, T) => (O[$e(T.path)] = { name: $e(T.path) || "", label: T.label || "" }, O), {})), m = Pe(() => u.value.reduce((O, T) => {
    var N;
    return O[$e(T.path)] = (N = T.bails) !== null && N !== void 0 ? N : !0, O;
  }, {})), w = Object.assign({}, e?.initialErrors || {}), C = (t = e?.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1, { initialValues: x, originalInitialValues: D, setInitialValues: _ } = Gf(u, p, e), A = qf(u, p, D, h), k = Pe(() => u.value.reduce((O, T) => {
    const N = Bt(p, $e(T.path));
    return Rt(O, $e(T.path), N), O;
  }, {})), b = e?.validationSchema;
  function y(O, T) {
    var N, z;
    const se = Pe(() => Bt(x.value, $e(O))), fe = f.value[$e(O)], re = T?.type === "checkbox" || T?.type === "radio";
    if (fe && re) {
      fe.multiple = !0;
      const mt = s++;
      return Array.isArray(fe.id) ? fe.id.push(mt) : fe.id = [fe.id, mt], fe.fieldsCount++, fe.__flags.pendingUnmount[mt] = !1, fe;
    }
    const Le = Pe(() => Bt(p, $e(O))), Ke = $e(O), Qe = De.findIndex((mt) => mt === Ke);
    Qe !== -1 && De.splice(Qe, 1);
    const Ee = Pe(() => {
      var mt, Tn, Fo, Ro;
      const Bo = $e(b);
      if (lr(Bo))
        return (Tn = (mt = Bo.describe) === null || mt === void 0 ? void 0 : mt.call(Bo, $e(O)).required) !== null && Tn !== void 0 ? Tn : !1;
      const jo = $e(T?.schema);
      return lr(jo) && (Ro = (Fo = jo.describe) === null || Fo === void 0 ? void 0 : Fo.call(jo).required) !== null && Ro !== void 0 ? Ro : !1;
    }), et = s++, nt = ir({
      id: et,
      path: O,
      touched: !1,
      pending: !1,
      valid: !0,
      validated: !!(!((N = w[Ke]) === null || N === void 0) && N.length),
      required: Ee,
      initialValue: se,
      errors: sf([]),
      bails: (z = T?.bails) !== null && z !== void 0 ? z : !1,
      label: T?.label,
      type: T?.type || "default",
      value: Le,
      multiple: !1,
      __flags: {
        pendingUnmount: { [et]: !1 },
        pendingReset: !1
      },
      fieldsCount: 1,
      validate: T?.validate,
      dirty: Pe(() => !Zn(Sr(Le), Sr(se)))
    });
    return u.value.push(nt), f.value[Ke] = nt, d(), h.value[Ke] && !w[Ke] && wt(() => {
      Ne(Ke, { mode: "silent" });
    }), qn(O) && ur(O, (mt) => {
      d();
      const Tn = Te(Le.value);
      f.value[mt] = nt, wt(() => {
        Rt(p, mt, Tn);
      });
    }), nt;
  }
  const I = Gi(Br, 5), B = Gi(Br, 5), te = Of(async (O) => await (O === "silent" ? I() : B()), (O, [T]) => {
    const N = vt(L.errorBag.value), se = [
      .../* @__PURE__ */ new Set([...vt(O.results), ...u.value.map((fe) => fe.path), ...N])
    ].sort().reduce((fe, re) => {
      var Le;
      const Ke = re, Qe = W(Ke) || Ce(Ke), Ee = ((Le = O.results[Ke]) === null || Le === void 0 ? void 0 : Le.errors) || [], et = $e(Qe?.path) || Ke, nt = Xf({ errors: Ee, valid: !Ee.length }, fe.results[et]);
      return fe.results[et] = nt, nt.valid || (fe.errors[et] = nt.errors[0]), Qe && c.value[et] && delete c.value[et], Qe ? (Qe.valid = nt.valid, T === "silent" || T === "validated-only" && !Qe.validated || g(Qe, nt.errors), fe) : (g(et, Ee), fe);
    }, {
      valid: O.valid,
      results: {},
      errors: {},
      source: O.source
    });
    return O.values && (se.values = O.values, se.source = O.source), vt(se.results).forEach((fe) => {
      var re;
      const Le = W(fe);
      Le && T !== "silent" && (T === "validated-only" && !Le.validated || g(Le, (re = se.results[fe]) === null || re === void 0 ? void 0 : re.errors));
    }), se;
  });
  function ne(O) {
    u.value.forEach(O);
  }
  function W(O) {
    const T = typeof O == "string" ? bs(O) : O;
    return typeof T == "string" ? f.value[T] : T;
  }
  function Ce(O) {
    return u.value.filter((N) => O.startsWith($e(N.path))).reduce((N, z) => N ? z.path.length > N.path.length ? z : N : z, void 0);
  }
  let De = [], Ue;
  function de(O) {
    return De.push(O), Ue || (Ue = wt(() => {
      [...De].sort().reverse().forEach((N) => {
        qi(p, N);
      }), De = [], Ue = null;
    })), Ue;
  }
  function Rr(O) {
    return function(N, z) {
      return function(fe) {
        return fe instanceof Event && (fe.preventDefault(), fe.stopPropagation()), ne((re) => re.touched = !0), o.value = !0, i.value++, Ae().then((re) => {
          const Le = Te(p);
          if (re.valid && typeof N == "function") {
            const Ke = Te(k.value);
            let Qe = O ? Ke : Le;
            return re.values && (Qe = re.source === "schema" ? re.values : Object.assign({}, Qe, re.values)), N(Qe, {
              evt: fe,
              controlledValues: Ke,
              setErrors: v,
              setFieldError: g,
              setTouched: Ve,
              setFieldTouched: G,
              setValues: X,
              setFieldValue: V,
              resetForm: je,
              resetField: tt
            });
          }
          !re.valid && typeof z == "function" && z({
            values: Le,
            evt: fe,
            errors: re.errors,
            results: re.results
          });
        }).then((re) => (o.value = !1, re), (re) => {
          throw o.value = !1, re;
        });
      };
    };
  }
  const Z = Rr(!1);
  Z.withControlled = Rr(!0);
  function E(O, T) {
    const N = u.value.findIndex((se) => se.path === O && (Array.isArray(se.id) ? se.id.includes(T) : se.id === T)), z = u.value[N];
    if (!(N === -1 || !z)) {
      if (wt(() => {
        Ne(O, { mode: "silent", warn: !1 });
      }), z.multiple && z.fieldsCount && z.fieldsCount--, Array.isArray(z.id)) {
        const se = z.id.indexOf(T);
        se >= 0 && z.id.splice(se, 1), delete z.__flags.pendingUnmount[T];
      }
      (!z.multiple || z.fieldsCount <= 0) && (u.value.splice(N, 1), ut(O), d(), delete f.value[O]);
    }
  }
  function M(O) {
    vt(f.value).forEach((T) => {
      T.startsWith(O) && delete f.value[T];
    }), u.value = u.value.filter((T) => !T.path.startsWith(O)), wt(() => {
      d();
    });
  }
  const L = {
    name: n,
    formId: r,
    values: p,
    controlledValues: k,
    errorBag: $,
    errors: h,
    schema: b,
    submitCount: i,
    meta: A,
    isSubmitting: o,
    isValidating: a,
    fieldArrays: l,
    keepValuesOnUnmount: C,
    validateSchema: Sr(b) ? te : void 0,
    validate: Ae,
    setFieldError: g,
    validateField: Ne,
    setFieldValue: V,
    setValues: X,
    setErrors: v,
    setFieldTouched: G,
    setTouched: Ve,
    resetForm: je,
    resetField: tt,
    handleSubmit: Z,
    useFieldModel: No,
    defineInputBinds: tf,
    defineComponentBinds: rf,
    defineField: An,
    stageInitialValue: nr,
    unsetInitialValue: ut,
    setFieldInitialValue: Nt,
    createPathState: y,
    getPathState: W,
    unsetPathValue: de,
    removePathState: E,
    initialValues: x,
    getAllPathStates: () => u.value,
    destroyPath: M,
    isFieldTouched: pe,
    isFieldDirty: ae,
    isFieldValid: oe
  };
  function V(O, T, N = !0) {
    const z = Te(T), se = typeof O == "string" ? O : O.path;
    W(se) || y(se), Rt(p, se, z), N && Ne(se);
  }
  function F(O, T = !0) {
    vt(p).forEach((N) => {
      delete p[N];
    }), vt(O).forEach((N) => {
      V(N, O[N], !1);
    }), T && Ae();
  }
  function X(O, T = !0) {
    Gn(p, O), l.forEach((N) => N && N.reset()), T && Ae();
  }
  function q(O, T) {
    const N = W($e(O)) || y(O);
    return Pe({
      get() {
        return N.value;
      },
      set(z) {
        var se;
        const fe = $e(O);
        V(fe, z, (se = $e(T)) !== null && se !== void 0 ? se : !1);
      }
    });
  }
  function G(O, T) {
    const N = W(O);
    N && (N.touched = T);
  }
  function pe(O) {
    const T = W(O);
    return T ? T.touched : u.value.filter((N) => N.path.startsWith(O)).some((N) => N.touched);
  }
  function ae(O) {
    const T = W(O);
    return T ? T.dirty : u.value.filter((N) => N.path.startsWith(O)).some((N) => N.dirty);
  }
  function oe(O) {
    const T = W(O);
    return T ? T.valid : u.value.filter((N) => N.path.startsWith(O)).every((N) => N.valid);
  }
  function Ve(O) {
    if (typeof O == "boolean") {
      ne((T) => {
        T.touched = O;
      });
      return;
    }
    vt(O).forEach((T) => {
      G(T, !!O[T]);
    });
  }
  function tt(O, T) {
    var N;
    const z = T && "value" in T ? T.value : Bt(x.value, O), se = W(O);
    se && (se.__flags.pendingReset = !0), Nt(O, Te(z), !0), V(O, z, !1), G(O, (N = T?.touched) !== null && N !== void 0 ? N : !1), g(O, T?.errors || []), wt(() => {
      se && (se.__flags.pendingReset = !1);
    });
  }
  function je(O, T) {
    let N = Te(O?.values ? O.values : D.value);
    N = T?.force ? N : Gn(D.value, N), N = lr(b) && kt(b.cast) ? b.cast(N) : N, _(N, { force: T?.force }), ne((z) => {
      var se;
      z.__flags.pendingReset = !0, z.validated = !1, z.touched = ((se = O?.touched) === null || se === void 0 ? void 0 : se[$e(z.path)]) || !1, V($e(z.path), Bt(N, $e(z.path)), !1), g($e(z.path), void 0);
    }), T?.force ? F(N, !1) : X(N, !1), v(O?.errors || {}), i.value = O?.submitCount || 0, wt(() => {
      Ae({ mode: "silent" }), ne((z) => {
        z.__flags.pendingReset = !1;
      });
    });
  }
  async function Ae(O) {
    const T = O?.mode || "force";
    if (T === "force" && ne((re) => re.validated = !0), L.validateSchema)
      return L.validateSchema(T);
    a.value = !0;
    const N = await Promise.all(u.value.map((re) => re.validate ? re.validate(O).then((Le) => ({
      key: $e(re.path),
      valid: Le.valid,
      errors: Le.errors,
      value: Le.value
    })) : Promise.resolve({
      key: $e(re.path),
      valid: !0,
      errors: [],
      value: void 0
    })));
    a.value = !1;
    const z = {}, se = {}, fe = {};
    for (const re of N)
      z[re.key] = {
        valid: re.valid,
        errors: re.errors
      }, re.value && Rt(fe, re.key, re.value), re.errors.length && (se[re.key] = re.errors[0]);
    return {
      valid: N.every((re) => re.valid),
      results: z,
      errors: se,
      values: fe,
      source: "fields"
    };
  }
  async function Ne(O, T) {
    var N;
    const z = W(O);
    if (z && T?.mode !== "silent" && (z.validated = !0), b) {
      const { results: se } = await te(T?.mode || "validated-only");
      return se[O] || { errors: [], valid: !0 };
    }
    return z?.validate ? z.validate(T) : (!z && (N = T?.warn), Promise.resolve({ errors: [], valid: !0 }));
  }
  function ut(O) {
    qi(x.value, O);
  }
  function nr(O, T, N = !1) {
    Nt(O, T), Rt(p, O, T), N && !e?.initialValues && Rt(D.value, O, Te(T));
  }
  function Nt(O, T, N = !1) {
    Rt(x.value, O, Te(T)), N && Rt(D.value, O, Te(T));
  }
  async function Br() {
    const O = Sr(b);
    if (!O)
      return { valid: !0, results: {}, errors: {}, source: "none" };
    a.value = !0;
    const T = cu(O) || lr(O) ? await Kf(O, p) : await Uf(O, p, {
      names: S.value,
      bailsMap: m.value
    });
    return a.value = !1, T;
  }
  const _t = Z((O, { evt: T }) => {
    Tf(T) && T.target.submit();
  });
  li(() => {
    if (e?.initialErrors && v(e.initialErrors), e?.initialTouched && Ve(e.initialTouched), e?.validateOnMount) {
      Ae();
      return;
    }
    L.validateSchema && L.validateSchema("silent");
  }), qn(b) && ur(b, () => {
    var O;
    (O = L.validateSchema) === null || O === void 0 || O.call(L, "validated-only");
  }), Ca(_f, L);
  function An(O, T) {
    const N = kt(T) ? void 0 : T?.label, z = W($e(O)) || y(O, { label: N }), se = () => kt(T) ? T(_s(z, xs)) : T || {};
    function fe() {
      var Ee;
      z.touched = !0, ((Ee = se().validateOnBlur) !== null && Ee !== void 0 ? Ee : Bn().validateOnBlur) && Ne($e(z.path));
    }
    function re() {
      var Ee;
      ((Ee = se().validateOnInput) !== null && Ee !== void 0 ? Ee : Bn().validateOnInput) && wt(() => {
        Ne($e(z.path));
      });
    }
    function Le() {
      var Ee;
      ((Ee = se().validateOnChange) !== null && Ee !== void 0 ? Ee : Bn().validateOnChange) && wt(() => {
        Ne($e(z.path));
      });
    }
    const Ke = Pe(() => {
      const Ee = {
        onChange: Le,
        onInput: re,
        onBlur: fe
      };
      return kt(T) ? Object.assign(Object.assign({}, Ee), T(_s(z, xs)).props || {}) : T?.props ? Object.assign(Object.assign({}, Ee), T.props(_s(z, xs))) : Ee;
    });
    return [q(O, () => {
      var Ee, et, nt;
      return (nt = (Ee = se().validateOnModelUpdate) !== null && Ee !== void 0 ? Ee : (et = Bn()) === null || et === void 0 ? void 0 : et.validateOnModelUpdate) !== null && nt !== void 0 ? nt : !0;
    }), Ke];
  }
  function No(O) {
    return Array.isArray(O) ? O.map((T) => q(T, !0)) : q(O);
  }
  function tf(O, T) {
    const [N, z] = An(O, T);
    function se() {
      z.value.onBlur();
    }
    function fe(Le) {
      const Ke = Ji(Le);
      V($e(O), Ke, !1), z.value.onInput();
    }
    function re(Le) {
      const Ke = Ji(Le);
      V($e(O), Ke, !1), z.value.onChange();
    }
    return Pe(() => Object.assign(Object.assign({}, z.value), {
      onBlur: se,
      onInput: fe,
      onChange: re,
      value: N.value
    }));
  }
  function rf(O, T) {
    const [N, z] = An(O, T), se = W($e(O));
    function fe(re) {
      N.value = re;
    }
    return Pe(() => {
      const re = kt(T) ? T(_s(se, xs)) : T || {};
      return Object.assign({ [re.model || "modelValue"]: N.value, [`onUpdate:${re.model || "modelValue"}`]: fe }, z.value);
    });
  }
  const Zi = Object.assign(Object.assign({}, L), { values: nf(p), handleReset: () => je(), submitForm: _t });
  return Ca(xf, Zi), Zi;
}
function qf(e, t, r, n) {
  const s = {
    touched: "some",
    pending: "some",
    valid: "every"
  }, o = Pe(() => !Zn(t, Sr(r)));
  function a() {
    const l = e.value;
    return vt(s).reduce((p, u) => {
      const c = s[u];
      return p[u] = l[c]((f) => f[u]), p;
    }, {});
  }
  const i = ir(a());
  return Ot(() => {
    const l = a();
    i.touched = l.touched, i.valid = l.valid, i.pending = l.pending;
  }), Pe(() => Object.assign(Object.assign({ initialValues: Sr(r) }, i), { valid: i.valid && !vt(n.value).length, dirty: o.value }));
}
function Gf(e, t, r) {
  const n = gu(r), s = Ie(n), o = Ie(Te(n));
  function a(i, l) {
    l?.force ? (s.value = Te(i), o.value = Te(i)) : (s.value = Gn(Te(s.value) || {}, Te(i)), o.value = Gn(Te(o.value) || {}, Te(i))), l?.updateFields && e.value.forEach((p) => {
      if (p.touched)
        return;
      const c = Bt(s.value, $e(p.path));
      Rt(t, $e(p.path), Te(c));
    });
  }
  return {
    initialValues: s,
    originalInitialValues: o,
    setInitialValues: a
  };
}
function Xf(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e;
}
var ke;
(function(e) {
  e.assertEqual = (s) => {
  };
  function t(s) {
  }
  e.assertIs = t;
  function r(s) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (s) => {
    const o = {};
    for (const a of s)
      o[a] = a;
    return o;
  }, e.getValidEnumValues = (s) => {
    const o = e.objectKeys(s).filter((i) => typeof s[s[i]] != "number"), a = {};
    for (const i of o)
      a[i] = s[i];
    return e.objectValues(a);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(o) {
    return s[o];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const o = [];
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && o.push(a);
    return o;
  }, e.find = (s, o) => {
    for (const a of s)
      if (o(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function n(s, o = " | ") {
    return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(o);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (s, o) => typeof o == "bigint" ? o.toString() : o;
})(ke || (ke = {}));
var el;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(el || (el = {}));
const Q = ke.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), or = (e) => {
  switch (typeof e) {
    case "undefined":
      return Q.undefined;
    case "string":
      return Q.string;
    case "number":
      return Number.isNaN(e) ? Q.nan : Q.number;
    case "boolean":
      return Q.boolean;
    case "function":
      return Q.function;
    case "bigint":
      return Q.bigint;
    case "symbol":
      return Q.symbol;
    case "object":
      return Array.isArray(e) ? Q.array : e === null ? Q.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? Q.promise : typeof Map < "u" && e instanceof Map ? Q.map : typeof Set < "u" && e instanceof Set ? Q.set : typeof Date < "u" && e instanceof Date ? Q.date : Q.object;
    default:
      return Q.unknown;
  }
}, j = ke.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class Gt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const r = t || function(o) {
      return o.message;
    }, n = { _errors: [] }, s = (o) => {
      for (const a of o.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(s);
        else if (a.code === "invalid_return_type")
          s(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          s(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(r(a));
        else {
          let i = n, l = 0;
          for (; l < a.path.length; ) {
            const p = a.path[l];
            l === a.path.length - 1 ? (i[p] = i[p] || { _errors: [] }, i[p]._errors.push(r(a))) : i[p] = i[p] || { _errors: [] }, i = i[p], l++;
          }
        }
    };
    return s(this), n;
  }
  static assert(t) {
    if (!(t instanceof Gt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ke.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const o = s.path[0];
        r[o] = r[o] || [], r[o].push(t(s));
      } else
        n.push(t(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Gt.create = (e) => new Gt(e);
const Ta = (e, t) => {
  let r;
  switch (e.code) {
    case j.invalid_type:
      e.received === Q.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case j.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, ke.jsonStringifyReplacer)}`;
      break;
    case j.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${ke.joinValues(e.keys, ", ")}`;
      break;
    case j.invalid_union:
      r = "Invalid input";
      break;
    case j.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${ke.joinValues(e.options)}`;
      break;
    case j.invalid_enum_value:
      r = `Invalid enum value. Expected ${ke.joinValues(e.options)}, received '${e.received}'`;
      break;
    case j.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case j.invalid_return_type:
      r = "Invalid function return type";
      break;
    case j.invalid_date:
      r = "Invalid date";
      break;
    case j.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : ke.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case j.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case j.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case j.custom:
      r = "Invalid input";
      break;
    case j.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case j.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case j.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, ke.assertNever(e);
  }
  return { message: r };
};
let Jf = Ta;
function Qf() {
  return Jf;
}
const eh = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: s } = e, o = [...r, ...s.path || []], a = {
    ...s,
    path: o
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: o,
      message: s.message
    };
  let i = "";
  const l = n.filter((p) => !!p).slice().reverse();
  for (const p of l)
    i = p(a, { data: t, defaultError: i }).message;
  return {
    ...s,
    path: o,
    message: i
  };
};
function K(e, t) {
  const r = Qf(), n = eh({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      r,
      // then global override map
      r === Ta ? void 0 : Ta
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(n);
}
class ht {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return ce;
      s.status === "dirty" && t.dirty(), n.push(s.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const s of r) {
      const o = await s.key, a = await s.value;
      n.push({
        key: o,
        value: a
      });
    }
    return ht.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: o, value: a } = s;
      if (o.status === "aborted" || a.status === "aborted")
        return ce;
      o.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof a.value < "u" || s.alwaysSet) && (n[o.value] = a.value);
    }
    return { status: t.value, value: n };
  }
}
const ce = Object.freeze({
  status: "aborted"
}), jn = (e) => ({ status: "dirty", value: e }), bt = (e) => ({ status: "valid", value: e }), tl = (e) => e.status === "aborted", rl = (e) => e.status === "dirty", pn = (e) => e.status === "valid", Ks = (e) => typeof Promise < "u" && e instanceof Promise;
var ee;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t?.message;
})(ee || (ee = {}));
class fr {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const nl = (e, t) => {
  if (pn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Gt(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function me(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (a, i) => {
    const { message: l } = e;
    return a.code === "invalid_enum_value" ? { message: l ?? i.defaultError } : typeof i.data > "u" ? { message: l ?? n ?? i.defaultError } : a.code !== "invalid_type" ? { message: i.defaultError } : { message: l ?? r ?? i.defaultError };
  }, description: s };
}
class we {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return or(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: or(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new ht(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: or(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Ks(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    const n = {
      common: {
        issues: [],
        async: r?.async ?? !1,
        contextualErrorMap: r?.errorMap
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: or(t)
    }, s = this._parseSync({ data: t, path: n.path, parent: n });
    return nl(n, s);
  }
  "~validate"(t) {
    const r = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: or(t)
    };
    if (!this["~standard"].async)
      try {
        const n = this._parseSync({ data: t, path: [], parent: r });
        return pn(n) ? {
          value: n.value
        } : {
          issues: r.common.issues
        };
      } catch (n) {
        n?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), r.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: r }).then((n) => pn(n) ? {
      value: n.value
    } : {
      issues: r.common.issues
    });
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r?.errorMap,
        async: !0
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: or(t)
    }, s = this._parse({ data: t, path: n.path, parent: n }), o = await (Ks(s) ? s : Promise.resolve(s));
    return nl(n, o);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, o) => {
      const a = t(s), i = () => o.addIssue({
        code: j.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (i(), !1)) : a ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new dn({
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (r) => this["~validate"](r)
    };
  }
  optional() {
    return cr.create(this, this._def);
  }
  nullable() {
    return fn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return It.create(this);
  }
  promise() {
    return qs.create(this, this._def);
  }
  or(t) {
    return zs.create([this, t], this._def);
  }
  and(t) {
    return Ys.create(this, t, this._def);
  }
  transform(t) {
    return new dn({
      ...me(this._def),
      schema: this,
      typeName: ie.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Gs({
      ...me(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ie.ZodDefault
    });
  }
  brand() {
    return new wh({
      typeName: ie.ZodBranded,
      type: this,
      ...me(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Ia({
      ...me(this._def),
      innerType: this,
      catchValue: r,
      typeName: ie.ZodCatch
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return ci.create(this, t);
  }
  readonly() {
    return La.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const th = /^c[^\s-]{8,}$/i, rh = /^[0-9a-z]+$/, nh = /^[0-9A-HJKMNP-TV-Z]{26}$/i, sh = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, oh = /^[a-z0-9_-]{21}$/i, ah = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, ih = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, lh = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ph = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ko;
const uh = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ch = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, dh = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, fh = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, hh = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, mh = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, yu = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", vh = new RegExp(`^${yu}$`);
function $u(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const r = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
}
function gh(e) {
  return new RegExp(`^${$u(e)}$`);
}
function yh(e) {
  let t = `${yu}T${$u(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function $h(e, t) {
  return !!((t === "v4" || !t) && uh.test(e) || (t === "v6" || !t) && dh.test(e));
}
function bh(e, t) {
  if (!ah.test(e))
    return !1;
  try {
    const [r] = e.split(".");
    if (!r)
      return !1;
    const n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), s = JSON.parse(atob(n));
    return !(typeof s != "object" || s === null || "typ" in s && s?.typ !== "JWT" || !s.alg || t && s.alg !== t);
  } catch {
    return !1;
  }
}
function _h(e, t) {
  return !!((t === "v4" || !t) && ch.test(e) || (t === "v6" || !t) && fh.test(e));
}
class Ht extends we {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== Q.string) {
      const o = this._getOrReturnCtx(t);
      return K(o, {
        code: j.invalid_type,
        expected: Q.string,
        received: o.parsedType
      }), ce;
    }
    const n = new ht();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (s = this._getOrReturnCtx(t, s), K(s, {
          code: j.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (s = this._getOrReturnCtx(t, s), K(s, {
          code: j.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, i = t.data.length < o.value;
        (a || i) && (s = this._getOrReturnCtx(t, s), a ? K(s, {
          code: j.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : i && K(s, {
          code: j.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), n.dirty());
      } else if (o.kind === "email")
        lh.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "email",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "emoji")
        Ko || (Ko = new RegExp(ph, "u")), Ko.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "emoji",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "uuid")
        sh.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "uuid",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "nanoid")
        oh.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "nanoid",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid")
        th.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "cuid",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid2")
        rh.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "cuid2",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "ulid")
        nh.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
          validation: "ulid",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), K(s, {
            validation: "url",
            code: j.invalid_string,
            message: o.message
          }), n.dirty();
        }
      else o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "regex",
        code: j.invalid_string,
        message: o.message
      }), n.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: j.invalid_string,
        validation: { includes: o.value, position: o.position },
        message: o.message
      }), n.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: j.invalid_string,
        validation: { startsWith: o.value },
        message: o.message
      }), n.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: j.invalid_string,
        validation: { endsWith: o.value },
        message: o.message
      }), n.dirty()) : o.kind === "datetime" ? yh(o).test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: j.invalid_string,
        validation: "datetime",
        message: o.message
      }), n.dirty()) : o.kind === "date" ? vh.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: j.invalid_string,
        validation: "date",
        message: o.message
      }), n.dirty()) : o.kind === "time" ? gh(o).test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        code: j.invalid_string,
        validation: "time",
        message: o.message
      }), n.dirty()) : o.kind === "duration" ? ih.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "duration",
        code: j.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "ip" ? $h(t.data, o.version) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "ip",
        code: j.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "jwt" ? bh(t.data, o.alg) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "jwt",
        code: j.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "cidr" ? _h(t.data, o.version) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "cidr",
        code: j.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "base64" ? hh.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "base64",
        code: j.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "base64url" ? mh.test(t.data) || (s = this._getOrReturnCtx(t, s), K(s, {
        validation: "base64url",
        code: j.invalid_string,
        message: o.message
      }), n.dirty()) : ke.assertNever(o);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: j.invalid_string,
      ...ee.errToObj(n)
    });
  }
  _addCheck(t) {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...ee.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...ee.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...ee.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...ee.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...ee.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...ee.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...ee.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...ee.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...ee.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...ee.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...ee.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...ee.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...ee.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof t?.precision > "u" ? null : t?.precision,
      offset: t?.offset ?? !1,
      local: t?.local ?? !1,
      ...ee.errToObj(t?.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof t?.precision > "u" ? null : t?.precision,
      ...ee.errToObj(t?.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...ee.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...ee.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r?.position,
      ...ee.errToObj(r?.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...ee.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...ee.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...ee.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...ee.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...ee.errToObj(r)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, ee.errToObj(t));
  }
  trim() {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Ht({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Ht.create = (e) => new Ht({
  checks: [],
  typeName: ie.ZodString,
  coerce: e?.coerce ?? !1,
  ...me(e)
});
function xh(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, o = Number.parseInt(e.toFixed(s).replace(".", "")), a = Number.parseInt(t.toFixed(s).replace(".", ""));
  return o % a / 10 ** s;
}
class Ar extends we {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== Q.number) {
      const o = this._getOrReturnCtx(t);
      return K(o, {
        code: j.invalid_type,
        expected: Q.number,
        received: o.parsedType
      }), ce;
    }
    let n;
    const s = new ht();
    for (const o of this._def.checks)
      o.kind === "int" ? ke.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), K(n, {
        code: j.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), s.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), K(n, {
        code: j.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), K(n, {
        code: j.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? xh(t.data, o.value) !== 0 && (n = this._getOrReturnCtx(t, n), K(n, {
        code: j.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), K(n, {
        code: j.not_finite,
        message: o.message
      }), s.dirty()) : ke.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, ee.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, ee.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, ee.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, ee.toString(r));
  }
  setLimit(t, r, n, s) {
    return new Ar({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: ee.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Ar({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: ee.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ee.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ee.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ee.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ee.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ee.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: ee.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ee.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ee.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ke.isInteger(t.value));
  }
  get isFinite() {
    let t = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
Ar.create = (e) => new Ar({
  checks: [],
  typeName: ie.ZodNumber,
  coerce: e?.coerce || !1,
  ...me(e)
});
class Tr extends we {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== Q.bigint)
      return this._getInvalidInput(t);
    let n;
    const s = new ht();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), K(n, {
        code: j.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), K(n, {
        code: j.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), K(n, {
        code: j.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : ke.assertNever(o);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return K(r, {
      code: j.invalid_type,
      expected: Q.bigint,
      received: r.parsedType
    }), ce;
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, ee.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, ee.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, ee.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, ee.toString(r));
  }
  setLimit(t, r, n, s) {
    return new Tr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: ee.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Tr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ee.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ee.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ee.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ee.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ee.toString(r)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Tr.create = (e) => new Tr({
  checks: [],
  typeName: ie.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...me(e)
});
class Us extends we {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Q.boolean) {
      const n = this._getOrReturnCtx(t);
      return K(n, {
        code: j.invalid_type,
        expected: Q.boolean,
        received: n.parsedType
      }), ce;
    }
    return bt(t.data);
  }
}
Us.create = (e) => new Us({
  typeName: ie.ZodBoolean,
  coerce: e?.coerce || !1,
  ...me(e)
});
class un extends we {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== Q.date) {
      const o = this._getOrReturnCtx(t);
      return K(o, {
        code: j.invalid_type,
        expected: Q.date,
        received: o.parsedType
      }), ce;
    }
    if (Number.isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return K(o, {
        code: j.invalid_date
      }), ce;
    }
    const n = new ht();
    let s;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (s = this._getOrReturnCtx(t, s), K(s, {
        code: j.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), n.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (s = this._getOrReturnCtx(t, s), K(s, {
        code: j.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), n.dirty()) : ke.assertNever(o);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new un({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: ee.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: ee.toString(r)
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
un.create = (e) => new un({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: ie.ZodDate,
  ...me(e)
});
class sl extends we {
  _parse(t) {
    if (this._getType(t) !== Q.symbol) {
      const n = this._getOrReturnCtx(t);
      return K(n, {
        code: j.invalid_type,
        expected: Q.symbol,
        received: n.parsedType
      }), ce;
    }
    return bt(t.data);
  }
}
sl.create = (e) => new sl({
  typeName: ie.ZodSymbol,
  ...me(e)
});
class ol extends we {
  _parse(t) {
    if (this._getType(t) !== Q.undefined) {
      const n = this._getOrReturnCtx(t);
      return K(n, {
        code: j.invalid_type,
        expected: Q.undefined,
        received: n.parsedType
      }), ce;
    }
    return bt(t.data);
  }
}
ol.create = (e) => new ol({
  typeName: ie.ZodUndefined,
  ...me(e)
});
class al extends we {
  _parse(t) {
    if (this._getType(t) !== Q.null) {
      const n = this._getOrReturnCtx(t);
      return K(n, {
        code: j.invalid_type,
        expected: Q.null,
        received: n.parsedType
      }), ce;
    }
    return bt(t.data);
  }
}
al.create = (e) => new al({
  typeName: ie.ZodNull,
  ...me(e)
});
class il extends we {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return bt(t.data);
  }
}
il.create = (e) => new il({
  typeName: ie.ZodAny,
  ...me(e)
});
class ll extends we {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return bt(t.data);
  }
}
ll.create = (e) => new ll({
  typeName: ie.ZodUnknown,
  ...me(e)
});
class hr extends we {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return K(r, {
      code: j.invalid_type,
      expected: Q.never,
      received: r.parsedType
    }), ce;
  }
}
hr.create = (e) => new hr({
  typeName: ie.ZodNever,
  ...me(e)
});
class pl extends we {
  _parse(t) {
    if (this._getType(t) !== Q.undefined) {
      const n = this._getOrReturnCtx(t);
      return K(n, {
        code: j.invalid_type,
        expected: Q.void,
        received: n.parsedType
      }), ce;
    }
    return bt(t.data);
  }
}
pl.create = (e) => new pl({
  typeName: ie.ZodVoid,
  ...me(e)
});
class It extends we {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== Q.array)
      return K(r, {
        code: j.invalid_type,
        expected: Q.array,
        received: r.parsedType
      }), ce;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, i = r.data.length < s.exactLength.value;
      (a || i) && (K(r, {
        code: a ? j.too_big : j.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (K(r, {
      code: j.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (K(r, {
      code: j.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, i) => s.type._parseAsync(new fr(r, a, r.path, i)))).then((a) => ht.mergeArray(n, a));
    const o = [...r.data].map((a, i) => s.type._parseSync(new fr(r, a, r.path, i)));
    return ht.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new It({
      ...this._def,
      minLength: { value: t, message: ee.toString(r) }
    });
  }
  max(t, r) {
    return new It({
      ...this._def,
      maxLength: { value: t, message: ee.toString(r) }
    });
  }
  length(t, r) {
    return new It({
      ...this._def,
      exactLength: { value: t, message: ee.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
It.create = (e, t) => new It({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ie.ZodArray,
  ...me(t)
});
function zr(e) {
  if (e instanceof Re) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = cr.create(zr(n));
    }
    return new Re({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof It ? new It({
    ...e._def,
    type: zr(e.element)
  }) : e instanceof cr ? cr.create(zr(e.unwrap())) : e instanceof fn ? fn.create(zr(e.unwrap())) : e instanceof Or ? Or.create(e.items.map((t) => zr(t))) : e;
}
class Re extends we {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = ke.objectKeys(t);
    return this._cached = { shape: t, keys: r }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== Q.object) {
      const p = this._getOrReturnCtx(t);
      return K(p, {
        code: j.invalid_type,
        expected: Q.object,
        received: p.parsedType
      }), ce;
    }
    const { status: n, ctx: s } = this._processInputParams(t), { shape: o, keys: a } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof hr && this._def.unknownKeys === "strip"))
      for (const p in s.data)
        a.includes(p) || i.push(p);
    const l = [];
    for (const p of a) {
      const u = o[p], c = s.data[p];
      l.push({
        key: { status: "valid", value: p },
        value: u._parse(new fr(s, c, s.path, p)),
        alwaysSet: p in s.data
      });
    }
    if (this._def.catchall instanceof hr) {
      const p = this._def.unknownKeys;
      if (p === "passthrough")
        for (const u of i)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (p === "strict")
        i.length > 0 && (K(s, {
          code: j.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (p !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const p = this._def.catchall;
      for (const u of i) {
        const c = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: p._parse(
            new fr(s, c, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const p = [];
      for (const u of l) {
        const c = await u.key, f = await u.value;
        p.push({
          key: c,
          value: f,
          alwaysSet: u.alwaysSet
        });
      }
      return p;
    }).then((p) => ht.mergeObjectSync(n, p)) : ht.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return ee.errToObj, new Re({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          const s = this._def.errorMap?.(r, n).message ?? n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: ee.errToObj(t).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new Re({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Re({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new Re({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new Re({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: ie.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new Re({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    for (const n of ke.objectKeys(t))
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    return new Re({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    for (const n of ke.objectKeys(this.shape))
      t[n] || (r[n] = this.shape[n]);
    return new Re({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return zr(this);
  }
  partial(t) {
    const r = {};
    for (const n of ke.objectKeys(this.shape)) {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }
    return new Re({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    for (const n of ke.objectKeys(this.shape))
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let o = this.shape[n];
        for (; o instanceof cr; )
          o = o._def.innerType;
        r[n] = o;
      }
    return new Re({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return bu(ke.objectKeys(this.shape));
  }
}
Re.create = (e, t) => new Re({
  shape: () => e,
  unknownKeys: "strip",
  catchall: hr.create(),
  typeName: ie.ZodObject,
  ...me(t)
});
Re.strictCreate = (e, t) => new Re({
  shape: () => e,
  unknownKeys: "strict",
  catchall: hr.create(),
  typeName: ie.ZodObject,
  ...me(t)
});
Re.lazycreate = (e, t) => new Re({
  shape: e,
  unknownKeys: "strip",
  catchall: hr.create(),
  typeName: ie.ZodObject,
  ...me(t)
});
class zs extends we {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function s(o) {
      for (const i of o)
        if (i.result.status === "valid")
          return i.result;
      for (const i of o)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((i) => new Gt(i.ctx.common.issues));
      return K(r, {
        code: j.invalid_union,
        unionErrors: a
      }), ce;
    }
    if (r.common.async)
      return Promise.all(n.map(async (o) => {
        const a = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await o._parseAsync({
            data: r.data,
            path: r.path,
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    {
      let o;
      const a = [];
      for (const l of n) {
        const p = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: r.data,
          path: r.path,
          parent: p
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !o && (o = { result: u, ctx: p }), p.common.issues.length && a.push(p.common.issues);
      }
      if (o)
        return r.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((l) => new Gt(l));
      return K(r, {
        code: j.invalid_union,
        unionErrors: i
      }), ce;
    }
  }
  get options() {
    return this._def.options;
  }
}
zs.create = (e, t) => new zs({
  options: e,
  typeName: ie.ZodUnion,
  ...me(t)
});
function Oa(e, t) {
  const r = or(e), n = or(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === Q.object && n === Q.object) {
    const s = ke.objectKeys(t), o = ke.objectKeys(e).filter((i) => s.indexOf(i) !== -1), a = { ...e, ...t };
    for (const i of o) {
      const l = Oa(e[i], t[i]);
      if (!l.valid)
        return { valid: !1 };
      a[i] = l.data;
    }
    return { valid: !0, data: a };
  } else if (r === Q.array && n === Q.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o], i = t[o], l = Oa(a, i);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else return r === Q.date && n === Q.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Ys extends we {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (o, a) => {
      if (tl(o) || tl(a))
        return ce;
      const i = Oa(o.value, a.value);
      return i.valid ? ((rl(o) || rl(a)) && r.dirty(), { status: r.value, value: i.data }) : (K(n, {
        code: j.invalid_intersection_types
      }), ce);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([o, a]) => s(o, a)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Ys.create = (e, t, r) => new Ys({
  left: e,
  right: t,
  typeName: ie.ZodIntersection,
  ...me(r)
});
class Or extends we {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.array)
      return K(n, {
        code: j.invalid_type,
        expected: Q.array,
        received: n.parsedType
      }), ce;
    if (n.data.length < this._def.items.length)
      return K(n, {
        code: j.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ce;
    !this._def.rest && n.data.length > this._def.items.length && (K(n, {
      code: j.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const o = [...n.data].map((a, i) => {
      const l = this._def.items[i] || this._def.rest;
      return l ? l._parse(new fr(n, a, n.path, i)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(o).then((a) => ht.mergeArray(r, a)) : ht.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Or({
      ...this._def,
      rest: t
    });
  }
}
Or.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Or({
    items: e,
    typeName: ie.ZodTuple,
    rest: null,
    ...me(t)
  });
};
class ul extends we {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.map)
      return K(n, {
        code: j.invalid_type,
        expected: Q.map,
        received: n.parsedType
      }), ce;
    const s = this._def.keyType, o = this._def.valueType, a = [...n.data.entries()].map(([i, l], p) => ({
      key: s._parse(new fr(n, i, n.path, [p, "key"])),
      value: o._parse(new fr(n, l, n.path, [p, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const p = await l.key, u = await l.value;
          if (p.status === "aborted" || u.status === "aborted")
            return ce;
          (p.status === "dirty" || u.status === "dirty") && r.dirty(), i.set(p.value, u.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const l of a) {
        const p = l.key, u = l.value;
        if (p.status === "aborted" || u.status === "aborted")
          return ce;
        (p.status === "dirty" || u.status === "dirty") && r.dirty(), i.set(p.value, u.value);
      }
      return { status: r.value, value: i };
    }
  }
}
ul.create = (e, t, r) => new ul({
  valueType: t,
  keyType: e,
  typeName: ie.ZodMap,
  ...me(r)
});
class Xn extends we {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.set)
      return K(n, {
        code: j.invalid_type,
        expected: Q.set,
        received: n.parsedType
      }), ce;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (K(n, {
      code: j.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (K(n, {
      code: j.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const o = this._def.valueType;
    function a(l) {
      const p = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return ce;
        u.status === "dirty" && r.dirty(), p.add(u.value);
      }
      return { status: r.value, value: p };
    }
    const i = [...n.data.values()].map((l, p) => o._parse(new fr(n, l, n.path, p)));
    return n.common.async ? Promise.all(i).then((l) => a(l)) : a(i);
  }
  min(t, r) {
    return new Xn({
      ...this._def,
      minSize: { value: t, message: ee.toString(r) }
    });
  }
  max(t, r) {
    return new Xn({
      ...this._def,
      maxSize: { value: t, message: ee.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Xn.create = (e, t) => new Xn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ie.ZodSet,
  ...me(t)
});
class cl extends we {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
cl.create = (e, t) => new cl({
  getter: e,
  typeName: ie.ZodLazy,
  ...me(t)
});
class Ea extends we {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return K(r, {
        received: r.data,
        code: j.invalid_literal,
        expected: this._def.value
      }), ce;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ea.create = (e, t) => new Ea({
  value: e,
  typeName: ie.ZodLiteral,
  ...me(t)
});
function bu(e, t) {
  return new cn({
    values: e,
    typeName: ie.ZodEnum,
    ...me(t)
  });
}
class cn extends we {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return K(r, {
        expected: ke.joinValues(n),
        received: r.parsedType,
        code: j.invalid_type
      }), ce;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return K(r, {
        received: r.data,
        code: j.invalid_enum_value,
        options: n
      }), ce;
    }
    return bt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  extract(t, r = this._def) {
    return cn.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return cn.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
cn.create = bu;
class dl extends we {
  _parse(t) {
    const r = ke.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== Q.string && n.parsedType !== Q.number) {
      const s = ke.objectValues(r);
      return K(n, {
        expected: ke.joinValues(s),
        received: n.parsedType,
        code: j.invalid_type
      }), ce;
    }
    if (this._cache || (this._cache = new Set(ke.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const s = ke.objectValues(r);
      return K(n, {
        received: n.data,
        code: j.invalid_enum_value,
        options: s
      }), ce;
    }
    return bt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
dl.create = (e, t) => new dl({
  values: e,
  typeName: ie.ZodNativeEnum,
  ...me(t)
});
class qs extends we {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.promise && r.common.async === !1)
      return K(r, {
        code: j.invalid_type,
        expected: Q.promise,
        received: r.parsedType
      }), ce;
    const n = r.parsedType === Q.promise ? r.data : Promise.resolve(r.data);
    return bt(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
qs.create = (e, t) => new qs({
  type: e,
  typeName: ie.ZodPromise,
  ...me(t)
});
class dn extends we {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ie.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, o = {
      addIssue: (a) => {
        K(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (o.addIssue = o.addIssue.bind(o), s.type === "preprocess") {
      const a = s.transform(n.data, o);
      if (n.common.async)
        return Promise.resolve(a).then(async (i) => {
          if (r.value === "aborted")
            return ce;
          const l = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return l.status === "aborted" ? ce : l.status === "dirty" || r.value === "dirty" ? jn(l.value) : l;
        });
      {
        if (r.value === "aborted")
          return ce;
        const i = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? ce : i.status === "dirty" || r.value === "dirty" ? jn(i.value) : i;
      }
    }
    if (s.type === "refinement") {
      const a = (i) => {
        const l = s.refinement(i, o);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? ce : (i.status === "dirty" && r.dirty(), a(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? ce : (i.status === "dirty" && r.dirty(), a(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!pn(a))
          return ce;
        const i = s.transform(a.value, o);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => pn(a) ? Promise.resolve(s.transform(a.value, o)).then((i) => ({
          status: r.value,
          value: i
        })) : ce);
    ke.assertNever(s);
  }
}
dn.create = (e, t, r) => new dn({
  schema: e,
  typeName: ie.ZodEffects,
  effect: t,
  ...me(r)
});
dn.createWithPreprocess = (e, t, r) => new dn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: ie.ZodEffects,
  ...me(r)
});
class cr extends we {
  _parse(t) {
    return this._getType(t) === Q.undefined ? bt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
cr.create = (e, t) => new cr({
  innerType: e,
  typeName: ie.ZodOptional,
  ...me(t)
});
class fn extends we {
  _parse(t) {
    return this._getType(t) === Q.null ? bt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fn.create = (e, t) => new fn({
  innerType: e,
  typeName: ie.ZodNullable,
  ...me(t)
});
class Gs extends we {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === Q.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Gs.create = (e, t) => new Gs({
  innerType: e,
  typeName: ie.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...me(t)
});
class Ia extends we {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Ks(s) ? s.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Gt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Gt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ia.create = (e, t) => new Ia({
  innerType: e,
  typeName: ie.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...me(t)
});
class fl extends we {
  _parse(t) {
    if (this._getType(t) !== Q.nan) {
      const n = this._getOrReturnCtx(t);
      return K(n, {
        code: j.invalid_type,
        expected: Q.nan,
        received: n.parsedType
      }), ce;
    }
    return { status: "valid", value: t.data };
  }
}
fl.create = (e) => new fl({
  typeName: ie.ZodNaN,
  ...me(e)
});
class wh extends we {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ci extends we {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? ce : o.status === "dirty" ? (r.dirty(), jn(o.value)) : this._def.out._parseAsync({
          data: o.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? ce : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, r) {
    return new ci({
      in: t,
      out: r,
      typeName: ie.ZodPipeline
    });
  }
}
class La extends we {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (s) => (pn(s) && (s.value = Object.freeze(s.value)), s);
    return Ks(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
La.create = (e, t) => new La({
  innerType: e,
  typeName: ie.ZodReadonly,
  ...me(t)
});
var ie;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ie || (ie = {}));
const hl = Ht.create, kh = Ar.create;
Tr.create;
Us.create;
un.create;
hr.create;
It.create;
const Sh = Re.create, Ch = zs.create;
Ys.create;
Or.create;
const ml = Ea.create;
cn.create;
qs.create;
cr.create;
fn.create;
const Dh = {
  string: ((e) => Ht.create({ ...e, coerce: !0 })),
  number: ((e) => Ar.create({ ...e, coerce: !0 })),
  boolean: ((e) => Us.create({
    ...e,
    coerce: !0
  })),
  bigint: ((e) => Tr.create({ ...e, coerce: !0 })),
  date: ((e) => un.create({ ...e, coerce: !0 }))
};
const vl = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function _u(e) {
  return Number(e) >= 0;
}
function Ah(e) {
  return typeof e == "object" && e !== null;
}
function Th(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function gl(e) {
  if (!Ah(e) || Th(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function xu(e, t) {
  return Object.keys(t).forEach((r) => {
    if (gl(t[r]) && gl(e[r])) {
      e[r] || (e[r] = {}), xu(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function Oh(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let n = 1; n < t.length; n++) {
    if (_u(t[n])) {
      r += `[${t[n]}]`;
      continue;
    }
    r += `.${t[n]}`;
  }
  return r;
}
function Eh(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(n) {
      const s = await e.safeParseAsync(n, t);
      if (s.success)
        return {
          value: s.data,
          errors: []
        };
      const o = {};
      return wu(s.error.issues, o), {
        errors: Object.values(o)
      };
    },
    cast(n) {
      try {
        return e.parse(n);
      } catch {
        const o = ku(e);
        return vl(o) && vl(n) ? xu(o, n) : n;
      }
    },
    describe(n) {
      try {
        if (!n)
          return {
            required: !e.isOptional(),
            exists: !0
          };
        const s = Ih(n, e);
        return s ? {
          required: !s.isOptional(),
          exists: !0
        } : {
          required: !1,
          exists: !1
        };
      } catch {
        return {
          required: !1,
          exists: !1
        };
      }
    }
  };
}
function wu(e, t) {
  e.forEach((r) => {
    const n = Oh(r.path.join("."));
    r.code === "invalid_union" && (wu(r.unionErrors.flatMap((s) => s.issues), t), !n) || (t[n] || (t[n] = { errors: [], path: n }), t[n].errors.push(r.message));
  });
}
function ku(e) {
  if (e instanceof Re)
    return Object.fromEntries(Object.entries(e.shape).map(([t, r]) => r instanceof Gs ? [t, r._def.defaultValue()] : r instanceof Re ? [t, ku(r)] : [t, void 0]));
}
function Ih(e, t) {
  if (!yl(t))
    return null;
  if (is(e))
    return t.shape[xo(e)];
  const r = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let n = t;
  for (let s = 0; s <= r.length; s++) {
    const o = r[s];
    if (!o || !n)
      return n;
    if (yl(n)) {
      n = n.shape[o] || null;
      continue;
    }
    _u(o) && Lh(n) && (n = n._def.type);
  }
  return null;
}
function Su(e) {
  return e._def.typeName;
}
function Lh(e) {
  return Su(e) === ie.ZodArray;
}
function yl(e) {
  return Su(e) === ie.ZodObject;
}
const Mh = _o({
  name: "DynamicForm",
  props: {
    fields: {
      type: Array,
      required: !0
    },
    //set..
    __internal: {
      type: Object
    }
  },
  emits: ["form-submit"],
  setup(e, { emit: t }) {
    const { _p: r, _$p: n } = e.__internal, s = () => {
      const h = {};
      return e.fields.forEach((S) => {
        const m = S.validation ? S.validation.split("|") : [], w = m.includes("required");
        let C;
        if (S.type === "number") {
          C = Dh.number();
          const x = m.find((_) => _.startsWith("min:"));
          x && (C = C.min(Number(x.split(":")[1]), { message: "Value too low" }));
          const D = m.find((_) => _.startsWith("max:"));
          D && (C = C.max(Number(D.split(":")[1]), { message: "Value too high" })), w || (C = C.optional());
        } else if (["select", "autocomplete", "radio"].includes(S.type))
          C = Ch([hl(), kh()]), w ? C = C.refine((x) => x !== "" && x !== null && x !== void 0, {
            message: "Selection is required"
          }) : C = C.optional().or(ml(""));
        else {
          C = hl(), (S.type === "email" || m.includes("email")) && (C = C.email({ message: "Invalid email" }));
          const x = m.find((_) => _.startsWith("matches:"));
          if (x) {
            const _ = x.match(/matches:\/(.*)\//)?.[1];
            _ && (C = C.regex(new RegExp(_), { message: "Invalid format" }));
          }
          const D = m.find((_) => _.startsWith("length:"));
          if (D) {
            const [_, A] = D.split(":")[1].split(",").map(Number);
            _ && (C = C.min(_, { message: `Min ${_} characters` })), A && (C = C.max(A, { message: `Max ${A} characters` }));
          }
          w ? C = C.min(1, { message: `${S.label || "Field"} is required` }) : C = C.optional().or(ml(""));
        }
        h[S.name] = C;
      }), Eh(Sh(h));
    }, { handleSubmit: o, errors: a, defineField: i, setFieldValue: l, resetForm: p } = Yf({
      validationSchema: s()
    }), u = Pe(() => e.fields.map((h) => {
      const [S, m] = i(h.name, {});
      return "value" in h && h.value !== void 0 && (S.value = h.value), {
        ...h,
        value: S,
        attrs: m
      };
    })), c = Ie({}), f = async (h, S) => {
      c.value[h.name] || (c.value[h.name] = { isOpen: !0, results: [], loading: !1 });
      const m = c.value[h.name];
      if (m.isOpen = !0, typeof h.options == "function") {
        m.loading = !0;
        try {
          const w = await h.options({ search: S });
          m.results = w;
        } catch (w) {
          console.error(w);
        } finally {
          m.loading = !1;
        }
      }
    }, d = (h, S) => {
      if (l(h, S.value), c.value[h]) {
        c.value[h].isOpen = !1;
        const m = document.getElementById(h);
        m && (m.value = S.label);
      }
    }, g = o((h) => {
      t("form-submit", h), p(), e.fields.forEach((S) => {
        if (S.type === "autocomplete") {
          const m = document.getElementById(S.name);
          m && (m.value = "");
        }
      });
    });
    return {
      fieldBindings: u,
      errors: a,
      onSubmit: g,
      getGridClass: (h) => ["textarea", "radio", "checkbox", "bio"].includes(h.type) || h.columns === 12 ? "col-span-12" : "col-span-12 md:col-span-6",
      autocompleteState: c,
      handleSearch: f,
      selectOption: d,
      normalizeOptions: (h) => h ? Array.isArray(h) && typeof h[0] == "string" ? h.map((S) => ({ label: S, value: S })) : h : [],
      //set..
      _$p: n,
      _p: r
    };
  }
}), Ph = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, Vh = { class: "bg-white dark:bg-[#0d0d0f] p-8 transition-colors duration-300" }, Nh = { class: "grid grid-cols-12 gap-x-8 gap-y-8" }, Fh = {
  key: 0,
  class: "col-span-12 mb-2 mt-6 first:mt-0"
}, Rh = { class: "flex items-center gap-4" }, Bh = { class: "whitespace-nowrap text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400" }, jh = ["for"], Hh = {
  key: 0,
  class: "relative"
}, Zh = ["id", "placeholder", "onInput", "onFocus"], Wh = {
  key: 0,
  class: "absolute z-50 mt-2 w-full rounded-xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#1A1A1C] shadow-xl py-1 max-h-60 overflow-auto"
}, Kh = ["onClick"], Uh = {
  key: 1,
  class: "relative"
}, zh = ["id", "onUpdate:modelValue"], Yh = {
  value: "",
  disabled: "",
  selected: ""
}, qh = ["value"], Gh = {
  key: 2,
  class: "flex flex-col gap-2"
}, Xh = ["name", "value", "onUpdate:modelValue"], Jh = { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, Qh = ["id", "onUpdate:modelValue", "placeholder"], em = ["id", "type", "onUpdate:modelValue", "placeholder"], tm = {
  key: 5,
  class: "mt-1.5 ml-1 text-xs font-medium text-red-500 animate-pulse"
}, rm = {
  key: 6,
  class: "mt-1.5 ml-1 text-xs text-gray-400 dark:text-gray-500"
}, nm = {
  key: 0,
  class: "sticky bottom-0 mt-8 flex justify-end bg-white/95 dark:bg-[#0d0d0f]/95 backdrop-blur-sm border-t border-gray-100 dark:border-white/5 py-6 px-5 z-20"
};
function sm(e, t, r, n, s, o) {
  return Fe(), He("form", {
    onSubmit: t[0] || (t[0] = (...a) => e.onSubmit && e.onSubmit(...a)),
    class: "w-full"
  }, [
    Xe("div", Vh, [
      Xe("div", Nh, [
        (Fe(!0), He(On, null, vs(e.fieldBindings, (a, i) => (Fe(), He(On, {
          key: a.name
        }, [
          a.section && (i === 0 || e.fieldBindings[i - 1]?.section !== a.section) ? (Fe(), He("div", Fh, [
            Xe("div", Rh, [
              Xe("h3", Bh, sr(a.section), 1),
              t[1] || (t[1] = Xe("div", { class: "h-px w-full bg-gradient-to-r from-indigo-500/50 to-transparent dark:from-indigo-400/50" }, null, -1))
            ])
          ])) : Jr("", !0),
          Xe("div", {
            class: Vs([e.getGridClass(a), "relative"])
          }, [
            Xe("label", {
              for: a.name,
              class: "block text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-300 ml-1 mb-2 transition-colors"
            }, sr(a.label), 9, jh),
            a.type === "autocomplete" ? (Fe(), He("div", Hh, [
              Xe("input", {
                id: a.name,
                type: "text",
                placeholder: a.placeholder,
                onInput: (l) => e.handleSearch(a, l.target.value),
                onFocus: (l) => e.handleSearch(a, l.target.value),
                autocomplete: "off",
                class: Vs(["w-full rounded-xl bg-white dark:bg-[#161618] text-gray-900 dark:text-white border px-4 py-3 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all", e.errors[a.name] ? "border-red-500 focus:border-red-500" : "border-gray-200 dark:border-white/10 focus:border-indigo-500 dark:focus:border-indigo-400"])
              }, null, 42, Zh),
              e.autocompleteState[a.name]?.isOpen && e.autocompleteState[a.name]?.results.length > 0 ? (Fe(), He("div", Wh, [
                (Fe(!0), He(On, null, vs(e.autocompleteState[a.name].results, (l) => (Fe(), He("div", {
                  key: l.value,
                  onClick: (p) => e.selectOption(a.name, l),
                  class: "px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer"
                }, sr(l.label), 9, Kh))), 128))
              ])) : Jr("", !0)
            ])) : a.type === "select" ? (Fe(), He("div", Uh, [
              gs(Xe("select", Ho({
                id: a.name,
                "onUpdate:modelValue": (l) => a.value.value = l
              }, { ref_for: !0 }, a.attrs.value, {
                class: ["w-full appearance-none rounded-xl bg-white dark:bg-[#161618] text-gray-900 dark:text-white border px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all cursor-pointer", e.errors[a.name] ? "border-red-500 focus:border-red-500" : "border-gray-200 dark:border-white/10 focus:border-indigo-500 dark:focus:border-indigo-400"]
              }), [
                Xe("option", Yh, sr(a.placeholder || "Select..."), 1),
                (Fe(!0), He(On, null, vs(e.normalizeOptions(a.options), (l) => (Fe(), He("option", {
                  key: l.value,
                  value: l.value
                }, sr(l.label), 9, qh))), 128))
              ], 16, zh), [
                [of, a.value.value]
              ]),
              t[2] || (t[2] = Xe("div", { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4" }, [
                Xe("svg", {
                  class: "h-4 w-4 text-gray-500 dark:text-gray-400",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  Xe("path", {
                    "fill-rule": "evenodd",
                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                    "clip-rule": "evenodd"
                  })
                ])
              ], -1))
            ])) : a.type === "radio" ? (Fe(), He("div", Gh, [
              (Fe(!0), He(On, null, vs(a.options, (l) => (Fe(), He("label", {
                key: l.value,
                class: Vs(["group flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 bg-white dark:bg-[#161618]", a.value.value === l.value ? "border-indigo-500 ring-1 ring-indigo-500 dark:border-indigo-400" : "border-gray-200 dark:border-white/10 hover:border-indigo-500/50"])
              }, [
                gs(Xe("input", {
                  type: "radio",
                  name: a.name,
                  value: l.value,
                  "onUpdate:modelValue": (p) => a.value.value = p,
                  class: "appearance-none w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 checked:border-indigo-500 checked:bg-indigo-500 transition-all"
                }, null, 8, Xh), [
                  [af, a.value.value]
                ]),
                Xe("span", Jh, sr(l.label), 1)
              ], 2))), 128))
            ])) : a.type === "textarea" ? gs((Fe(), He("textarea", Ho({
              key: 3,
              id: a.name,
              "onUpdate:modelValue": (l) => a.value.value = l
            }, { ref_for: !0 }, a.attrs.value, {
              rows: "4",
              placeholder: a.placeholder,
              class: ["w-full rounded-xl bg-white dark:bg-[#161618] text-gray-900 dark:text-white border px-4 py-3 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all", e.errors[a.name] ? "border-red-500 focus:border-red-500" : "border-gray-200 dark:border-white/10 focus:border-indigo-500 dark:focus:border-indigo-400"]
            }), null, 16, Qh)), [
              [lf, a.value.value]
            ]) : gs((Fe(), He("input", Ho({
              key: 4,
              id: a.name,
              type: a.type === "number" ? "number" : a.type,
              "onUpdate:modelValue": (l) => a.value.value = l
            }, { ref_for: !0 }, a.attrs, {
              placeholder: a.placeholder,
              class: ["w-full rounded-xl bg-white dark:bg-[#161618] text-gray-900 dark:text-white border px-4 py-3 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all", e.errors[a.name] ? "border-red-500 focus:border-red-500" : "border-gray-200 dark:border-white/10 focus:border-indigo-500 dark:focus:border-indigo-400"]
            }), null, 16, em)), [
              [pf, a.value.value]
            ]),
            e.errors[a.name] ? (Fe(), He("p", tm, sr(e.errors[a.name]), 1)) : a.help ? (Fe(), He("p", rm, sr(a.help), 1)) : Jr("", !0)
          ], 2)
        ], 64))), 128))
      ])
    ]),
    e._$p.data.curr.data.env == "dev" ? (Fe(), He("div", nm, [...t[3] || (t[3] = [
      Xe("button", {
        type: "submit",
        class: "w-full md:w-auto px-10 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-bold tracking-wide hover:opacity-90 hover:-translate-y-px shadow-lg transition-all duration-200"
      }, " Submit ", -1)
    ])])) : Jr("", !0)
  ], 32);
}
const om = /* @__PURE__ */ Ph(Mh, [["render", sm]]), am = { class: "min-h-screen bg-gray-50 dark:bg-[#0b0b0e] transition-colors duration-300" }, im = {
  key: 0,
  class: "text-center mt-4 text-xs font-bold text-indigo-500 animate-pulse"
}, lm = /* @__PURE__ */ _o({
  __name: "index",
  props: {
    schema: {},
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = e, r = Ie(t.schema?.theme === "dark"), n = Ie(!1);
    ur(r, (o) => {
      o ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, { immediate: !0 }), t._p.f.listen("msg", async (o) => {
      o.type === "form_submitted" && (console.log("msg", o), n.value = !1);
    });
    const s = (o) => {
      n.value = !0, console.log("[App] Sending form data to Engine..."), t._p.f.call("msg", {
        _p: t._p,
        _$p: t._$p,
        type: "form_submit",
        // Matches the listener in test_0.ts
        custom: {
          payload: o,
          timestamp: Date.now()
        }
      });
    };
    return (o, a) => (Fe(), He("main", am, [
      Xe("div", {
        class: Vs([{ "opacity-50 pointer-events-none": n.value }, "transition-opacity duration-200"])
      }, [
        t.schema?.fields ? (Fe(), uf(om, {
          key: 0,
          fields: t.schema.fields,
          onFormSubmit: s,
          __internal: {
            _p: e._p,
            _$p: e._$p
          }
        }, null, 8, ["fields", "__internal"])) : Jr("", !0)
      ], 2),
      n.value ? (Fe(), He("div", im, " SENDING DATA TO ENGINE... ")) : Jr("", !0)
    ]));
  }
});
var pm = typeof window < "u", Cu = [
  "__key",
  "__init",
  "__shim",
  "__original",
  "__index",
  "__prevKey"
];
function kn() {
  return Math.random().toString(36).substring(2, 15);
}
function um(e, t) {
  return [...e instanceof Set ? e : new Set(e)];
}
function ue(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function J(e, t, r = !0, n = ["__key"]) {
  if (e === t) return !0;
  if (typeof t == "object" && typeof e == "object") {
    if (e instanceof Map || e instanceof Set) return !1;
    if (e instanceof Date && t instanceof Date)
      return e.getTime() === t.getTime();
    if (e instanceof RegExp && t instanceof RegExp)
      return cm(e, t);
    if (e === null || t === null || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const s of n)
      if ((s in e || s in t) && e[s] !== t[s]) return !1;
    for (const s in e)
      if (!(s in t) || e[s] !== t[s] && !r || r && !J(e[s], t[s], r, n)) return !1;
    return !0;
  }
  return !1;
}
function cm(e, t) {
  return e.source === t.source && e.flags.split("").sort().join("") === t.flags.split("").sort().join("");
}
function yt(e) {
  const t = typeof e;
  if (t === "number") return !1;
  if (e === void 0) return !0;
  if (t === "string")
    return e === "";
  if (t === "object") {
    if (e === null) return !0;
    for (const r in e) return !1;
    return !(e instanceof RegExp || e instanceof Date);
  }
  return !1;
}
function dm(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function fm(e) {
  const t = `^${dm(e)}$`, r = {
    MM: "(0[1-9]|1[012])",
    M: "([1-9]|1[012])",
    DD: "([012][0-9]|3[01])",
    D: "([012]?[0-9]|3[01])",
    YYYY: "\\d{4}",
    YY: "\\d{2}"
  }, n = Object.keys(r);
  return new RegExp(
    n.reduce((s, o) => s.replace(o, r[o]), t)
  );
}
function Er(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function tn(e) {
  return Er(e) || Array.isArray(e);
}
function mr(e) {
  if (Er(e) === !1 || e.__FKNode__ || e.__POJO__ === !1) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(Er(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1);
}
var vr = /* @__NO_SIDE_EFFECTS__ */ (e, t, r = !1, n = !1) => {
  if (t === null) return null;
  const s = {};
  if (typeof t == "string") return t;
  for (const o in e)
    if (ue(t, o) && (t[o] !== void 0 || !n)) {
      if (r && Array.isArray(e[o]) && Array.isArray(t[o])) {
        s[o] = e[o].concat(t[o]);
        continue;
      }
      if (t[o] === void 0)
        continue;
      mr(e[o]) && mr(t[o]) ? s[o] = /* @__PURE__ */ vr(
        e[o],
        t[o],
        r,
        n
      ) : s[o] = t[o];
    } else
      s[o] = e[o];
  for (const o in t)
    !ue(s, o) && t[o] !== void 0 && (s[o] = t[o]);
  return s;
};
function hm(e) {
  if (e[0] !== '"' && e[0] !== "'" || e[0] !== e[e.length - 1]) return !1;
  const t = e[0];
  for (let r = 1; r < e.length; r++)
    if (e[r] === t && (r === 1 || e[r - 1] !== "\\") && r !== e.length - 1)
      return !1;
  return !0;
}
function mm(e) {
  if (!e.length) return "";
  let t = "", r = "";
  for (let n = 0; n < e.length; n++) {
    const s = e.charAt(n);
    (s !== "\\" || r === "\\") && (t += s), r = s;
  }
  return t;
}
function jr(...e) {
  return e.reduce((t, r) => {
    const { value: n, name: s, modelValue: o, config: a, plugins: i, ...l } = r;
    return Object.assign(t, l);
  }, {});
}
function vm(e) {
  const t = [];
  let r = "", n = 0, s = "", o = "";
  for (let a = 0; a < e.length; a++) {
    const i = e.charAt(a);
    i === s && o !== "\\" ? s = "" : (i === "'" || i === '"') && !s && o !== "\\" ? s = i : i === "(" && !s ? n++ : i === ")" && !s && n--, i === "," && !s && n === 0 ? (t.push(r), r = "") : (i !== " " || s) && (r += i), o = i;
  }
  return r && t.push(r), t;
}
function $l(e, t) {
  const r = {}, n = t.filter((o) => o instanceof RegExp), s = new Set(t);
  for (const o in e)
    !s.has(o) && !n.some((a) => a.test(o)) && (r[o] = e[o]);
  return r;
}
function bl(e, t) {
  const r = {}, n = t.filter((s) => s instanceof RegExp);
  return t.forEach((s) => {
    s instanceof RegExp || (r[s] = e[s]);
  }), Object.keys(e).forEach((s) => {
    n.some((o) => o.test(s)) && (r[s] = e[s]);
  }), r;
}
function rn(e) {
  return e.replace(
    /-([a-z0-9])/gi,
    (t, r) => r.toUpperCase()
  );
}
function Du(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, r, n) => r + "-" + n.toLowerCase()
  ).replace(" ", "-").toLowerCase();
}
function Ma(e, t = Cu) {
  if (e !== null && typeof e == "object") {
    let r;
    if (Array.isArray(e) ? r = [...e] : mr(e) && (r = { ...e }), r)
      return ym(e, r, t), r;
  }
  return e;
}
function gr(e, t = Cu) {
  if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File)
    return e;
  let r;
  Array.isArray(e) ? r = e.map((n) => typeof n == "object" ? gr(n, t) : n) : r = Object.keys(e).reduce((n, s) => (n[s] = typeof e[s] == "object" ? gr(e[s], t) : e[s], n), {});
  for (const n of t)
    n in e && Object.defineProperty(r, n, {
      enumerable: !1,
      value: e[n]
    });
  return r;
}
function St(e) {
  return typeof e == "object" ? gr(e) : e;
}
function gm(e, t) {
  if (!e || typeof e != "object") return null;
  const r = t.split(".");
  let n = e;
  for (const s in r) {
    const o = r[s];
    if (ue(n, o) && (n = n[o]), +s === r.length - 1) return n;
    if (!n || typeof n != "object") return null;
  }
  return null;
}
function Y(e) {
  return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0;
}
function hn(e) {
  return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
    enumerable: !1,
    value: !0
  });
}
function di(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-");
}
function ym(e, t, r) {
  for (const n of r)
    n in e && Object.defineProperty(t, n, {
      enumerable: !1,
      value: e[n]
    });
  return t;
}
function Ze(e, t, r) {
  if (!pm) return;
  r || (r = document);
  const n = r.getElementById(e);
  if (n) return t(n);
  const s = new MutationObserver(() => {
    const o = r?.getElementById(e);
    o && (s?.disconnect(), t(o));
  });
  s.observe(r, { childList: !0, subtree: !0 });
}
function $m(e) {
  let t = !1;
  return ((...r) => {
    if (!t)
      return t = !0, queueMicrotask(() => t = !1), e(...r);
  });
}
function bm(e) {
  if (!(e === "false" || e === !1))
    return !0;
}
function fi() {
  const e = [];
  let t = 0;
  const r = (s) => e.push(s), n = (s) => {
    const o = e[t];
    return typeof o == "function" ? o(s, (a) => (t++, n(a))) : (t = 0, s);
  };
  return r.dispatch = n, r.unshift = (s) => e.unshift(s), r.remove = (s) => {
    const o = e.indexOf(s);
    o > -1 && e.splice(o, 1);
  }, r;
}
function Au() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  let r;
  const n = (s, o) => {
    if (r) {
      r.set(o.name, [s, o]);
      return;
    }
    e.has(o.name) && e.get(o.name).forEach((a) => {
      (o.origin === s || a.modifiers.includes("deep")) && a.listener(o);
    }), o.bubble && s.bubble(o);
  };
  return n.flush = () => {
    e.clear(), t.clear(), r?.clear();
  }, n.on = (s, o, a = "push") => {
    const [i, ...l] = s.split("."), p = o.receipt || kn(), u = {
      modifiers: l,
      event: i,
      listener: o,
      receipt: p
    };
    return e.has(i) ? e.get(i)[a](u) : e.set(i, [u]), t.has(p) ? t.get(p)[a](i) : t.set(p, [i]), p;
  }, n.off = (s) => {
    t.has(s) && (t.get(s)?.forEach((o) => {
      const a = e.get(o);
      Array.isArray(a) && e.set(
        o,
        a.filter((i) => i.receipt !== s)
      );
    }), t.delete(s));
  }, n.pause = (s) => {
    r || (r = /* @__PURE__ */ new Map()), s && s.walk((o) => o._e.pause());
  }, n.play = (s) => {
    if (!r) return;
    const o = r;
    r = void 0, o.forEach(([a, i]) => n(a, i)), s && s.walk((a) => a._e.play());
  }, n;
}
function _m(e, t, r, n, s = !0, o) {
  return t._e(e, {
    payload: n,
    name: r,
    bubble: s,
    origin: e,
    meta: o
  }), e;
}
function xm(e, t, r) {
  return ps(e.parent) && e.parent._e(e.parent, r), e;
}
function wm(e, t, r, n, s) {
  return t._e.on(r, n, s);
}
function km(e, t, r) {
  return t._e.off(r), e;
}
var hi = fi();
hi((e, t) => (e.message || (e.message = `E${e.code}`), t(e)));
var mi = fi();
mi((e, t) => {
  e.message || (e.message = `W${e.code}`);
  const r = t(e);
  return console && typeof console.warn == "function" && console.warn(r.message), r;
});
function yr(e, t = {}) {
  mi.dispatch({ code: e, data: t });
}
function ot(e, t = {}) {
  throw Error(hi.dispatch({ code: e, data: t }).message);
}
function qe(e, t) {
  return {
    blocking: !1,
    key: kn(),
    meta: {},
    type: "state",
    visible: !0,
    ...e
  };
}
var _l = {
  apply: Om,
  set: Cm,
  remove: Tu,
  filter: Am,
  reduce: Tm,
  release: Lm,
  touch: Dm
};
function Sm(e = !1) {
  const t = {};
  let r, n = e, s = [];
  const o = /* @__PURE__ */ new Map();
  let a;
  const i = new Proxy(t, {
    get(...l) {
      const [p, u] = l;
      return u === "buffer" ? n : u === "_b" ? s : u === "_m" ? o : u === "_r" ? a : ue(_l, u) ? _l[u].bind(
        null,
        t,
        i,
        r
      ) : Reflect.get(...l);
    },
    set(l, p, u) {
      return p === "_n" ? (r = u, a === "__n" && Ou(r, i), !0) : p === "_b" ? (s = u, !0) : p === "buffer" ? (n = u, !0) : p === "_r" ? (a = u, !0) : (ot(101, r), !1);
    }
  });
  return i;
}
function Cm(e, t, r, n) {
  if (t.buffer)
    return t._b.push([[n]]), t;
  if (e[n.key] !== n) {
    if (typeof n.value == "string" && n.meta.localize !== !1) {
      const o = n.value;
      n.value = r.t(n), n.value !== o && (n.meta.locale = r.props.locale);
    }
    const s = `message-${ue(e, n.key) ? "updated" : "added"}`;
    e[n.key] = Object.freeze(
      r.hook.message.dispatch(n)
    ), r.emit(s, n);
  }
  return t;
}
function Dm(e, t) {
  for (const r in e) {
    const n = { ...e[r] };
    t.set(n);
  }
}
function Tu(e, t, r, n) {
  if (ue(e, n)) {
    const s = e[n];
    delete e[n], r.emit("message-removed", s);
  }
  return t.buffer === !0 && (t._b = t._b.filter((s) => (s[0] = s[0].filter((o) => o.key !== n), s[1] || s[0].length))), t;
}
function Am(e, t, r, n, s) {
  for (const o in e) {
    const a = e[o];
    (!s || a.type === s) && !n(a) && Tu(e, t, r, o);
  }
}
function Tm(e, t, r, n, s) {
  for (const o in e) {
    const a = e[o];
    s = n(s, a);
  }
  return s;
}
function Om(e, t, r, n, s) {
  if (Array.isArray(n)) {
    if (t.buffer) {
      t._b.push([n, s]);
      return;
    }
    const o = new Set(
      n.map((a) => (t.set(a), a.key))
    );
    typeof s == "string" ? t.filter(
      (a) => a.type !== s || o.has(a.key)
    ) : typeof s == "function" && t.filter((a) => !s(a) || o.has(a.key));
  } else
    for (const o in n) {
      const a = r.at(o);
      a ? a.store.apply(n[o], s) : Im(r, t, o, n[o], s);
    }
}
function Em(e, ...t) {
  const r = `${e.name}-set`, n = (s) => /* @__PURE__ */ qe({
    key: di(s),
    type: "error",
    value: s,
    meta: { source: r, autoClear: !0 }
  });
  return t.filter((s) => !!s).map((s) => {
    if (typeof s == "string" && (s = [s]), Array.isArray(s))
      return s.map((o) => n(o));
    {
      const o = {};
      for (const a in s)
        Array.isArray(s[a]) ? o[a] = s[a].map(
          (i) => n(i)
        ) : o[a] = [n(s[a])];
      return o;
    }
  });
}
function Im(e, t, r, n, s) {
  const o = t._m;
  o.has(r) || o.set(r, []), t._r || (t._r = Ou(e, t)), o.get(r)?.push([n, s]);
}
function Ou(e, t) {
  return e.on(
    "child.deep",
    ({ payload: r }) => {
      t._m.forEach((n, s) => {
        e.at(s) === r && (n.forEach(([o, a]) => {
          r.store.apply(o, a);
        }), t._m.delete(s));
      }), t._m.size === 0 && t._r && (e.off(t._r), t._r = void 0);
    }
  );
}
function Lm(e, t) {
  t.buffer = !1, t._b.forEach(([r, n]) => t.apply(r, n)), t._b = [];
}
function Mm() {
  const e = {};
  let t;
  return {
    count: (...r) => Pm(t, e, ...r),
    init(r) {
      t = r, r.on("message-added.deep", xl(e, 1)), r.on("message-removed.deep", xl(e, -1));
    },
    merge: (r) => wl(t, e, r),
    settled(r) {
      return ue(e, r) ? e[r].promise : Promise.resolve();
    },
    unmerge: (r) => wl(t, e, r, !0),
    value(r) {
      return ue(e, r) ? e[r].count : 0;
    }
  };
}
function Pm(e, t, r, n, s = 0) {
  if (n = Vm(n || r), !ue(t, r)) {
    const o = {
      condition: n,
      count: 0,
      name: r,
      node: e,
      promise: Promise.resolve(),
      resolve: () => {
      }
      // eslint-disable-line @typescript-eslint/no-empty-function
    };
    t[r] = o, s = e.store.reduce(
      (a, i) => a + o.condition(i) * 1,
      s
    ), e.each((a) => {
      a.ledger.count(o.name, o.condition), s += a.ledger.value(o.name);
    });
  }
  return Eu(t[r], s).promise;
}
function Vm(e) {
  return typeof e == "function" ? e : (t) => t.type === e;
}
function Eu(e, t) {
  const r = e.count, n = e.count + t;
  return e.count = n, r === 0 && n !== 0 ? (e.node.emit(`unsettled:${e.name}`, e.count, !1), e.promise = new Promise((s) => e.resolve = s)) : r !== 0 && n === 0 && (e.node.emit(`settled:${e.name}`, e.count, !1), e.resolve()), e.node.emit(`count:${e.name}`, e.count, !1), e;
}
function xl(e, t) {
  return (r) => {
    for (const n in e) {
      const s = e[n];
      s.condition(r.payload) && Eu(s, t);
    }
  };
}
function wl(e, t, r, n = !1) {
  const s = e;
  for (const o in t) {
    const a = t[o].condition;
    n || r.ledger.count(o, a);
    const i = r.ledger.value(o) * (n ? -1 : 1);
    if (e) {
      do
        e.ledger.count(o, a, i), e = e.parent;
      while (e);
      e = s;
    }
  }
}
var vi = /* @__PURE__ */ new Map(), Ns = /* @__PURE__ */ new Map(), gi = Au();
function Nm(e) {
  e.props.id && (vi.set(e.props.id, e), Ns.set(e, e.props.id), gi(e, {
    payload: e,
    name: e.props.id,
    bubble: !1,
    origin: e
  }));
}
function Fm(e) {
  if (Ns.has(e)) {
    const t = Ns.get(e);
    Ns.delete(e), vi.delete(t), gi(e, {
      payload: null,
      name: t,
      bubble: !1,
      origin: e
    });
  }
}
function ls(e) {
  return vi.get(e);
}
function Rm(e, t) {
  return gi.on(e, t);
}
function Pa(e, t, r) {
  let n = !0;
  return t in e.config._t ? n = !1 : e.emit(`config:${t}`, r, !1), t in e.props || (e.emit("prop", { prop: t, value: r }), e.emit(`prop:${t}`, r)), n;
}
function Bm(e = {}) {
  const t = /* @__PURE__ */ new Set(), r = {
    ...e,
    _add: (s) => t.add(s),
    _rm: (s) => t.delete(s)
  };
  return new Proxy(r, {
    set(s, o, a, i) {
      return typeof o == "string" && t.forEach((l) => Pa(l, o, a)), Reflect.set(s, o, a, i);
    }
  });
}
function Iu(e, t) {
  const r = (t || document).getElementById(e);
  if (r instanceof HTMLFormElement) {
    const n = new Event("submit", { cancelable: !0, bubbles: !0 });
    r.dispatchEvent(n);
    return;
  }
  yr(151, e);
}
function jm(e) {
  const t = (r) => {
    for (const n in r.store) {
      const s = r.store[n];
      s.type === "error" || s.type === "ui" && n === "incomplete" ? r.store.remove(n) : s.type === "state" && r.store.set({ ...s, value: !1 });
    }
  };
  t(e), e.walk(t);
}
function Lu(e, t) {
  const r = typeof e == "string" ? ls(e) : e;
  if (r) {
    const n = (a) => {
      const i = St(a.props.initial);
      return i !== void 0 ? i : a.type === "group" ? {} : a.type === "list" ? [] : void 0;
    };
    r._e.pause(r);
    const s = St(t);
    return t && !yt(t) && (r.props.initial = tn(s) ? hn(s) : s, r.props._init = r.props.initial), r.input(n(r), !1), r.walk((a) => {
      a.type === "list" && a.sync || a.input(n(a), !1);
    }), r.input(
      yt(s) && s ? s : n(r),
      !1
    ), r.type !== "input" && t && !yt(t) && tn(t) && r.walk((a) => {
      a.props.initial = tn(a.value) ? hn(a.value) : a.value, a.props._init = a.props.initial;
    }), r._e.play(r), jm(r), r.emit("reset", r), r;
  }
  yr(152, e);
}
var Hm = {
  delimiter: ".",
  delay: 0,
  locale: "en",
  rootClasses: (e) => ({ [`formkit-${Du(e)}`]: !0 })
}, Mu = /* @__PURE__ */ Symbol("index"), Va = /* @__PURE__ */ Symbol("removed"), Na = /* @__PURE__ */ Symbol("moved"), Pu = /* @__PURE__ */ Symbol("inserted");
function Zm(e) {
  return e.type === "list" && Array.isArray(e._value);
}
function ps(e) {
  return e && typeof e == "object" && e.__FKNode__ === !0;
}
var Fs = (e, t, r) => {
  ot(102, [e, r]);
}, Wm = {
  _c: _e(cv, Fs, !1),
  add: _e(nv),
  addProps: _e(rv),
  address: _e(fv, Fs, !1),
  at: _e(hv),
  bubble: _e(xm),
  clearErrors: _e(wv),
  calm: _e(Qm),
  config: _e(!1),
  define: _e(tv),
  disturb: _e(Jm),
  destroy: _e(ev),
  extend: _e(Sv),
  hydrate: _e(Gm),
  index: _e(uv, pv, !1),
  input: _e(Fu),
  each: _e(av),
  emit: _e(_m),
  find: _e(vv),
  on: _e(wm),
  off: _e(km),
  parent: _e(!1, sv),
  plugins: _e(!1),
  remove: _e(ov),
  root: _e(yv, Fs, !1),
  reset: _e(_v),
  resetConfig: _e(lv),
  setErrors: _e(xv),
  submit: _e(bv),
  t: _e($v),
  use: _e(yi),
  name: _e(dv, !1, !1),
  walk: _e(iv)
};
function Km() {
  return new Map(Object.entries(Wm));
}
function _e(e, t, r = !0) {
  return {
    get: e ? (n, s) => r ? (...o) => e(n, s, ...o) : e(n, s) : !1,
    set: t !== void 0 ? t : Fs.bind(null)
  };
}
function Um() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    get(t, r) {
      return e.has(r) || e.set(r, fi()), e.get(r);
    }
  });
}
var Vu = 0, zm = 0;
function Ym(e) {
  return e.parent?.type === "list" ? Mu : e.name || `${e.props?.type || "input"}_${++Vu}`;
}
function Nu(e) {
  return e.type === "group" ? hn(
    e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}
  ) : e.type === "list" ? hn(Array.isArray(e.value) ? e.value : []) : e.value;
}
function Fu(e, t, r, n = !0) {
  return t._value = qm(e, e.hook.input.dispatch(r)), e.emit("input", t._value), e.isCreated && e.type === "input" && J(t._value, t.value) && !e.props.mergeStrategy ? (e.emit("commitRaw", t.value), t.settled) : (t.isSettled && e.disturb(), n ? (t._tmo && clearTimeout(t._tmo), t._tmo = setTimeout(
    Xs,
    e.props.delay,
    e,
    t
  )) : Xs(e, t), t.settled);
}
function qm(e, t) {
  switch (e.type) {
    // Inputs are allowed to have any type
    case "input":
      break;
    case "group":
      (!t || typeof t != "object") && ot(107, [e, t]);
      break;
    case "list":
      Array.isArray(t) || ot(108, [e, t]);
      break;
  }
  return t;
}
function Xs(e, t, r = !0, n = !0) {
  t._value = t.value = e.hook.commit.dispatch(t._value), e.type !== "input" && n && e.hydrate(), e.emit("commitRaw", t.value), e.emit("commit", t.value), r && e.calm();
}
function Ru(e, { name: t, value: r, from: n }) {
  if (!Object.isFrozen(e._value)) {
    if (Zm(e)) {
      const s = r === Va ? [] : r === Na && typeof n == "number" ? e._value.splice(n, 1) : [r];
      e._value.splice(
        t,
        r === Na || n === Pu ? 0 : 1,
        ...s
      );
      return;
    }
    r !== Va ? e._value[t] = r : delete e._value[t];
  }
}
function Gm(e, t) {
  const r = t._value;
  return e.type === "list" && e.sync && Xm(e, t), t.children.forEach((n) => {
    if (typeof r == "object")
      if (n.name in r) {
        const s = n.type !== "input" || r[n.name] && typeof r[n.name] == "object" ? hn(r[n.name]) : r[n.name];
        if (!n.isSettled || (!tn(s) || n.props.mergeStrategy) && J(s, n._value))
          return;
        n.input(s, !1);
      } else
        (e.type !== "list" || typeof n.name == "number") && Ru(t, { name: n.name, value: n.value }), r.__init || (n.type === "group" ? n.input({}, !1) : n.type === "list" ? n.input([], !1) : n.input(void 0, !1));
  }), e;
}
function Xm(e, t) {
  const r = e._value;
  if (!Array.isArray(r)) return;
  const n = [], s = new Set(t.children), o = /* @__PURE__ */ new Map();
  r.forEach((i, l) => {
    if (t.children[l] && t.children[l]._value === i)
      n.push(t.children[l]), s.delete(t.children[l]);
    else {
      n.push(null);
      const p = o.get(i) || [];
      p.push(l), o.set(i, p);
    }
  }), s.size && o.size && s.forEach((i) => {
    if (o.has(i._value)) {
      const l = o.get(i._value), p = l.shift();
      n[p] = i, s.delete(i), l.length || o.delete(i._value);
    }
  });
  const a = [];
  for (let i = 0; i < n.length; i++)
    n[i] === null && a.push(i);
  for (; s.size && a.length; ) {
    const i = s.values().next().value, l = a.shift();
    if (l === void 0 || i === void 0) break;
    n[l] = i, s.delete(i);
  }
  a.forEach((i) => {
    n[i] = Tv({ value: r[i] });
  }), s.size && s.forEach((i) => {
    if (!("__FKP" in i)) {
      const l = i._c.parent;
      if (!l || Ov(l)) return;
      l.ledger.unmerge(i), i._c.parent = null, i.destroy();
    }
  }), t.children = n;
}
function Jm(e, t) {
  return t._d <= 0 && (t.isSettled = !1, e.emit("settled", !1, !1), t.settled = new Promise((r) => {
    t._resolve = r;
  }), e.parent && e.parent?.disturb()), t._d++, e;
}
function Qm(e, t, r) {
  if (r !== void 0 && e.type !== "input") {
    Ru(t, r);
    const n = !!(e.config.mergeStrategy && e.config.mergeStrategy[r.name]);
    return Xs(e, t, !0, n);
  }
  t._d > 0 && t._d--, t._d === 0 && (t.isSettled = !0, e.emit("settled", !0, !1), e.parent && e.parent?.calm({ name: e.name, value: t.value }), t._resolve && t._resolve(t.value));
}
function ev(e, t) {
  e.emit("destroying", e), e.store.filter(() => !1), e.parent && e.parent.remove(e), Fm(e), e.emit("destroyed", e), t._e.flush(), t._value = t.value = void 0;
  for (const r in t.context)
    delete t.context[r];
  t.plugins.clear(), t.context = null;
}
function tv(e, t, r) {
  t.type = r.type;
  const n = gr(r);
  e.props.__propDefs = Bu(
    e.props.__propDefs ?? [],
    n?.props || []
  ), n.props = e.props.__propDefs, t.props.definition = n, t.value = t._value = Nu({
    type: e.type,
    value: t.value
  }), r.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), t.props.type = r.forceTypeProp), r.family && (t.props.family = r.family), r.features && r.features.forEach((s) => s(e)), r.props && e.addProps(r.props), e.emit("defined", r);
}
function rv(e, t, r) {
  const n = Array.isArray(r) ? r : Object.keys(r), s = Array.isArray(r) ? {} : n.reduce((a, i) => ("default" in r[i] && (a[i] = r[i].default), a), {});
  if (e.props.attrs) {
    const a = { ...e.props.attrs };
    e.props._emit = !1;
    for (const l in a) {
      const p = rn(l);
      n.includes(p) && (e.props[p] = a[l], delete a[l]);
    }
    Array.isArray(r) || n.forEach((l) => {
      "default" in r[l] && e.props[l] === void 0 && (e.props[l] = s[l]);
    });
    const i = St(t._value);
    e.props.initial = e.type !== "input" ? hn(i) : i, e.props._emit = !0, e.props.attrs = a;
  }
  const o = Bu(e.props.__propDefs ?? [], r);
  return e.props.definition && (e.props.definition.props = o), e.props.__propDefs = o, e.emit("added-props", r), e;
}
function Fa(e) {
  return Array.isArray(e) ? e.reduce((t, r) => (t[r] = {}, t), {}) : e;
}
function Bu(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? e.concat(t) : vr(Fa(e), Fa(t));
}
function nv(e, t, r, n) {
  if (e.type === "input" && ot(100, e), r.parent && r.parent !== e && r.parent.remove(r), !t.children.includes(r)) {
    if (n !== void 0 && e.type === "list") {
      const s = t.children[n];
      s && "__FKP" in s ? (r._c.uid = s.uid, t.children.splice(n, 1, r)) : t.children.splice(n, 0, r), Array.isArray(e.value) && e.value.length < t.children.length && e.disturb().calm({
        name: n,
        value: r.value,
        from: Pu
      });
    } else
      t.children.push(r);
    r.isSettled || e.disturb();
  }
  if (r.parent !== e) {
    if (r.parent = e, r.parent !== e)
      return e.remove(r), r.parent.add(r), e;
  } else
    r.use(e.plugins);
  return Xs(e, t, !1), e.ledger.merge(r), e.emit("child", r), e;
}
function sv(e, t, r, n) {
  return ps(n) ? (e.parent && e.parent !== n && e.parent.remove(e), t.parent = n, e.resetConfig(), n.children.includes(e) ? e.use(n.plugins) : n.add(e), !0) : n === null ? (t.parent = null, !0) : !1;
}
function ov(e, t, r) {
  const n = t.children.indexOf(r);
  if (n !== -1) {
    r.isSettled && e.disturb(), t.children.splice(n, 1);
    let s = Y(r.props.preserve), o = r.parent;
    for (; s === void 0 && o; )
      s = Y(o.props.preserve), o = o.parent;
    s ? e.calm() : e.calm({
      name: e.type === "list" ? n : r.name,
      value: Va
    }), r.parent = null, r.config._rmn = r;
  }
  return e.ledger.unmerge(r), e.emit("childRemoved", r), e;
}
function av(e, t, r) {
  t.children.forEach((n) => !("__FKP" in n) && r(n));
}
function iv(e, t, r, n = !1, s = !1) {
  t.children.some((o) => {
    if ("__FKP" in o) return !1;
    const a = r(o);
    return n && a === !1 ? !0 : s && a === !1 ? !1 : o.walk(r, n, s);
  });
}
function lv(e, t) {
  const r = e.parent || void 0;
  t.config = ju(e.config._t, r), e.walk((n) => n.resetConfig());
}
function yi(e, t, r, n = !0, s = !0) {
  return Array.isArray(r) || r instanceof Set ? (r.forEach((o) => yi(e, t, o)), e) : (t.plugins.has(r) || (s && typeof r.library == "function" && r.library(e), n && r(e) !== !1 && (t.plugins.add(r), e.children.forEach((o) => o.use(r)))), e);
}
function pv(e, t, r, n) {
  if (ps(e.parent)) {
    const s = e.parent.children, o = n >= s.length ? s.length - 1 : n < 0 ? 0 : n, a = s.indexOf(e);
    return a === -1 ? !1 : (s.splice(a, 1), s.splice(o, 0, e), e.parent.children = s, e.parent.type === "list" && e.parent.disturb().calm({ name: o, value: Na, from: a }), !0);
  }
  return !1;
}
function uv(e) {
  if (e.parent) {
    const t = [...e.parent.children].indexOf(e);
    return t === -1 ? e.parent.children.length : t;
  }
  return -1;
}
function cv(e, t) {
  return t;
}
function dv(e, t) {
  return e.parent?.type === "list" ? e.index : t.name !== Mu ? t.name : e.index;
}
function fv(e, t) {
  return t.parent ? t.parent.address.concat([e.name]) : [e.name];
}
function hv(e, t, r) {
  const n = typeof r == "string" ? r.split(e.config.delimiter) : r;
  if (!n.length) return;
  const s = n[0];
  let o = e.parent;
  for (o || (String(n[0]) === String(e.name) && n.shift(), o = e), s === "$parent" && n.shift(); o && n.length; ) {
    const a = n.shift();
    switch (a) {
      case "$root":
        o = e.root;
        break;
      case "$parent":
        o = o.parent;
        break;
      case "$self":
        o = e;
        break;
      default:
        o = o.children.find(
          (i) => !("__FKP" in i) && String(i.name) === String(a)
        ) || mv(o, a);
    }
  }
  return o || void 0;
}
function mv(e, t) {
  const r = String(t).match(/^(find)\((.*)\)$/);
  if (r) {
    const [, n, s] = r, o = s.split(",").map((a) => a.trim());
    return n === "find" ? e.find(o[0], o[1]) : void 0;
  }
}
function vv(e, t, r, n) {
  return gv(e, r, n);
}
function gv(e, t, r = "name") {
  const n = typeof r == "string" ? (o) => o[r] == t : r, s = [e];
  for (; s.length; ) {
    const o = s.shift();
    if (!("__FKP" in o)) {
      if (n(o, t)) return o;
      s.push(...o.children);
    }
  }
}
function yv(e) {
  let t = e;
  for (; t.parent; )
    t = t.parent;
  return t;
}
function ju(e = {}, t) {
  let r;
  return new Proxy(e, {
    get(...n) {
      const s = n[1];
      if (s === "_t") return e;
      const o = Reflect.get(...n);
      if (o !== void 0) return o;
      if (t) {
        const a = t.config[s];
        if (a !== void 0) return a;
      }
      if (e.rootConfig && typeof s == "string") {
        const a = e.rootConfig[s];
        if (a !== void 0) return a;
      }
      return s === "delay" && r?.type === "input" ? 20 : Hm[s];
    },
    set(...n) {
      const s = n[1], o = n[2];
      if (s === "_n")
        return r = o, e.rootConfig && e.rootConfig._add(r), !0;
      if (s === "_rmn")
        return e.rootConfig && e.rootConfig._rm(r), r = void 0, !0;
      if (!J(e[s], o, !1)) {
        const a = Reflect.set(...n);
        return r && (r.emit(`config:${s}`, o, !1), Pa(r, s, o), r.walk((i) => Pa(i, s, o), !1, !0)), a;
      }
      return !0;
    }
  });
}
function $v(e, t, r, n = "ui") {
  const s = typeof r == "string" ? { key: r, value: r, type: n } : r, o = e.hook.text.dispatch(s);
  return e.emit("text", o, !1), o.value;
}
function bv(e) {
  const t = e.name;
  do {
    if (e.props.isForm === !0) break;
    e.parent || ot(106, t), e = e.parent;
  } while (e);
  e.props.id && Iu(e.props.id, e.props.__root);
}
function _v(e, t, r) {
  return Lu(e, r);
}
function xv(e, t, r, n) {
  const s = `${e.name}-set`, o = e.hook.setErrors.dispatch({ localErrors: r, childErrors: n });
  return Em(e, o.localErrors, o.childErrors).forEach(
    (a) => {
      e.store.apply(a, (i) => i.meta.source === s);
    }
  ), e;
}
function wv(e, t, r = !0, n) {
  return e.store.filter((s) => !(n === void 0 || s.meta.source === n), "error"), r && (n = n || `${e.name}-set`, e.walk((s) => {
    s.store.filter((o) => !(o.type === "error" && o.meta && o.meta.source === n));
  })), e;
}
function kv(e) {
  const t = {
    initial: typeof e == "object" ? St(e) : e
  };
  let r, n = !0, s = {};
  return new Proxy(t, {
    get(...o) {
      const [a, i] = o;
      let l;
      ue(t, i) ? (l = Reflect.get(...o), s[i]?.boolean && (l = bm(l))) : r && typeof i == "string" && r.config[i] !== void 0 ? (l = r.config[i], i === "mergeStrategy" && r?.type === "input" && Er(l) && r.name in l && (l = l[r.name])) : l = s[i]?.default;
      const p = s[i]?.getter;
      return s[i]?.boolean && (l = !!l), p ? p(l, r) : l;
    },
    set(o, a, i, l) {
      if (a === "_n")
        return r = i, !0;
      if (a === "_emit")
        return n = i, !0;
      let { prop: p, value: u } = r.hook.prop.dispatch({
        prop: a,
        value: i
      });
      const c = s[p]?.setter;
      if (u = c ? c(u, r) : u, !J(t[p], u, !1) || typeof u == "object") {
        const f = Reflect.set(o, p, u, l);
        return p === "__propDefs" && (s = Fa(u)), n && (r.emit("prop", { prop: p, value: u }), typeof p == "string" && r.emit(`prop:${p}`, u)), f;
      }
      return !0;
    }
  });
}
function Sv(e, t, r, n) {
  return t.traps.set(r, n), e;
}
function Cv(e, t) {
  if (e.props.definition) return e.define(e.props.definition);
  for (const r of t) {
    if (e.props.definition) return;
    typeof r.library == "function" && r.library(e);
  }
}
function Dv(e) {
  const t = Nu(e), r = ju(e.config || {}, e.parent);
  return {
    _d: 0,
    _e: Au(),
    uid: /* @__PURE__ */ Symbol(),
    _resolve: !1,
    _tmo: !1,
    _value: t,
    children: um(e.children || []),
    config: r,
    hook: Um(),
    isCreated: !1,
    isSettled: !0,
    ledger: Mm(),
    name: Ym(e),
    parent: e.parent || null,
    plugins: /* @__PURE__ */ new Set(),
    props: kv(t),
    settled: Promise.resolve(t),
    store: Sm(!0),
    sync: e.sync || !1,
    traps: Km(),
    type: e.type || "input",
    value: t
  };
}
function Av(e, t) {
  const r = t.props?.id;
  if (r || delete t.props?.id, e.ledger.init(e.store._n = e.props._n = e.config._n = e), e.props._emit = !1, Object.assign(
    e.props,
    r ? {} : { id: `input_${zm++}` },
    t.props ?? {}
  ), e.props._emit = !0, Cv(
    e,
    /* @__PURE__ */ new Set([
      ...t.plugins || [],
      ...e.parent ? e.parent.plugins : []
    ])
  ), t.plugins)
    for (const n of t.plugins)
      yi(e, e._c, n, !0, !1);
  return e.each((n) => e.add(n)), e.parent && e.parent.add(e, t.index), e.type === "input" && e.children.length && ot(100, e), Fu(e, e._c, e._value, !1), e.store.release(), r && Nm(e), e.emit("created", e), e.isCreated = !0, e;
}
function Tv(e) {
  return {
    __FKP: !0,
    uid: /* @__PURE__ */ Symbol(),
    name: e?.name ?? `p_${Vu++}`,
    value: e?.value ?? null,
    _value: e?.value ?? null,
    type: e?.type ?? "input",
    props: {},
    use: () => {
    },
    input(t) {
      return this._value = t, this.value = t, Promise.resolve();
    },
    isSettled: !0
  };
}
function Ov(e) {
  return "__FKP" in e;
}
function Ev(e) {
  const t = e || {}, r = Dv(t), n = new Proxy(r, {
    get(...s) {
      const [, o] = s;
      if (o === "__FKNode__") return !0;
      const a = r.traps.get(o);
      return a && a.get ? a.get(n, r) : Reflect.get(...s);
    },
    set(...s) {
      const [, o, a] = s, i = r.traps.get(o);
      return i && i.set ? i.set(n, r, o, a) : Reflect.set(...s);
    }
  });
  return Av(n, t);
}
function Ir(e) {
  return typeof e != "string" && ue(e, "$el");
}
function Jn(e) {
  return typeof e != "string" && ue(e, "$cmp");
}
function Yr(e) {
  return !e || typeof e == "string" ? !1 : ue(e, "if") && ue(e, "then");
}
function Iv(e) {
  return typeof e != "string" && "$formkit" in e;
}
function Lv(e) {
  if (typeof e == "string")
    return {
      $el: "text",
      children: e
    };
  if (Iv(e)) {
    const {
      $formkit: t,
      for: r,
      if: n,
      children: s,
      bind: o,
      ...a
    } = e;
    return Object.assign(
      {
        $cmp: "FormKit",
        props: { ...a, type: t }
      },
      n ? { if: n } : {},
      r ? { for: r } : {},
      s ? { children: s } : {},
      o ? { bind: o } : {}
    );
  }
  return e;
}
function xt(e) {
  let t;
  const r = /* @__PURE__ */ new Set(), n = function($, h) {
    return typeof $ == "function" ? $(h) : $;
  }, s = [
    {
      "&&": (v, $, h) => n(v, h) && n($, h),
      "||": (v, $, h) => n(v, h) || n($, h)
    },
    {
      "===": (v, $, h) => n(v, h) === n($, h),
      "!==": (v, $, h) => n(v, h) !== n($, h),
      "==": (v, $, h) => n(v, h) == n($, h),
      "!=": (v, $, h) => n(v, h) != n($, h),
      ">=": (v, $, h) => n(v, h) >= n($, h),
      "<=": (v, $, h) => n(v, h) <= n($, h),
      ">": (v, $, h) => n(v, h) > n($, h),
      "<": (v, $, h) => n(v, h) < n($, h)
    },
    {
      "+": (v, $, h) => n(v, h) + n($, h),
      "-": (v, $, h) => n(v, h) - n($, h)
    },
    {
      "*": (v, $, h) => n(v, h) * n($, h),
      "/": (v, $, h) => n(v, h) / n($, h),
      "%": (v, $, h) => n(v, h) % n($, h)
    }
  ], o = s.reduce((v, $) => v.concat(Object.keys($)), []), a = new Set(o.map((v) => v.charAt(0)));
  function i(v, $, h, S) {
    const m = v.filter((w) => w.startsWith($));
    return m.length ? m.find((w) => S.length >= h + w.length && S.substring(h, h + w.length) === w ? w : !1) : !1;
  }
  function l(v, $, h = 1) {
    let S = h ? $.substring(v + 1).trim() : $.substring(0, v).trim();
    if (!S.length) return -1;
    if (!h) {
      const w = S.split("").reverse(), C = w.findIndex((x) => a.has(x));
      S = w.slice(C).join("");
    }
    const m = S[0];
    return s.findIndex((w) => {
      const C = Object.keys(w);
      return !!i(C, m, 0, S);
    });
  }
  function p(v, $) {
    let h = "";
    const S = $.length;
    let m = 0;
    for (let w = v; w < S; w++) {
      const C = $.charAt(w);
      if (C === "(")
        m++;
      else if (C === ")")
        m--;
      else if (m === 0 && C === " ")
        continue;
      if (m === 0 && i(o, C, w, $))
        return [h, w - 1];
      h += C;
    }
    return [h, $.length - 1];
  }
  function u(v, $ = 0) {
    const h = s[$], S = v.length, m = Object.keys(h);
    let w = 0, C = !1, x = null, D = "", _ = null, A, k = "", b = "", y = "", I = "", B = 0;
    const te = (ne, W) => {
      ne ? y += W : D += W;
    };
    for (let ne = 0; ne < S; ne++)
      if (k = b, b = v.charAt(ne), (b === "'" || b === '"') && k !== "\\" && (w === 0 && !C || w && !I)) {
        w ? I = b : C = b, te(w, b);
        continue;
      } else if (C && (b !== C || k === "\\") || I && (b !== I || k === "\\")) {
        te(w, b);
        continue;
      } else if (C === b) {
        C = !1, te(w, b);
        continue;
      } else if (I === b) {
        I = !1, te(w, b);
        continue;
      } else {
        if (b === " ")
          continue;
        if (b === "(")
          w === 0 ? B = ne : y += b, w++;
        else if (b === ")")
          if (w--, w === 0) {
            const W = typeof D == "string" && D.startsWith("$") ? D : void 0, Ce = W && v.charAt(ne + 1) === ".";
            let De = "";
            Ce && ([De, ne] = p(ne + 2, v));
            const Ue = x ? $ : l(B, v, 0), de = l(ne, v);
            Ue === -1 && de === -1 ? (D = c(y, -1, W, De), typeof D == "string" && (D = y)) : x && (Ue >= de || de === -1) && $ === Ue ? (_ = x.bind(null, c(y, -1, W, De)), x = null, D = "") : de > Ue && $ === de ? D = c(y, -1, W, De) : D += `(${y})${Ce ? `.${De}` : ""}`, y = "";
          } else
            y += b;
        else if (w === 0 && (A = i(m, b, ne, v))) {
          ne === 0 && ot(103, [A, v]), ne += A.length - 1, ne === v.length - 1 && ot(104, [A, v]), x ? D && (_ = x.bind(null, c(D, $)), x = h[A].bind(null, _), D = "") : _ ? (x = h[A].bind(null, c(_, $)), _ = null) : (x = h[A].bind(null, c(D, $)), D = "");
          continue;
        } else
          te(w, b);
      }
    return D && x && (x = x.bind(null, c(D, $))), x = !x && _ ? _ : x, !x && D && (x = (ne, W) => typeof ne == "function" ? ne(W) : ne, x = x.bind(null, c(D, $))), !x && !D && ot(105, v), x;
  }
  function c(v, $, h, S) {
    if (h) {
      const m = c(h, s.length);
      let w, C = S ? xt(`$${S}`) : !1;
      if (typeof m == "function") {
        const x = vm(String(v)).map(
          (D) => c(D, -1)
        );
        return (D) => {
          const _ = m(D);
          return typeof _ != "function" ? (yr(150, h), _) : (w = _(
            ...x.map(
              (A) => typeof A == "function" ? A(D) : A
            )
          ), C && (C = C.provide((A) => {
            const k = t(A);
            return A.reduce(
              (y, I) => {
                if (I === S || S?.startsWith(`${I}(`)) {
                  const te = gm(w, I);
                  y[I] = () => te;
                } else
                  y[I] = k[I];
                return y;
              },
              {}
            );
          })), C ? C() : w);
        };
      }
    } else if (typeof v == "string") {
      if (v === "true") return !0;
      if (v === "false") return !1;
      if (v === "undefined") return;
      if (hm(v))
        return mm(v.substring(1, v.length - 1));
      if (!isNaN(+v)) return Number(v);
      if ($ < s.length - 1)
        return u(v, $ + 1);
      if (v.startsWith("$")) {
        const m = v.substring(1);
        return r.add(m), function(C) {
          return m in C ? C[m]() : void 0;
        };
      }
      return v;
    }
    return v;
  }
  const f = u(
    e.startsWith("$:") ? e.substring(2) : e
  ), d = Array.from(r);
  function g(v) {
    return t = v, Object.assign(
      // @ts-ignore - @rollup/plugin-typescript doesn't like this
      f.bind(null, v(d)),
      { provide: g }
    );
  }
  return Object.assign(f, {
    provide: g
  });
}
function Rs(e, t, r) {
  return r ? typeof r == "string" ? r.split(" ").reduce(
    (s, o) => Object.assign(s, { [o]: !0 }),
    {}
  ) : typeof r == "function" ? Rs(
    e,
    t,
    r(t, e)
  ) : r : {};
}
function Mv(e, t, ...r) {
  const n = r.reduce((s, o) => {
    if (!o) return Uo(s);
    const { $reset: a, ...i } = o;
    return Uo(a ? i : Object.assign(s, i));
  }, {});
  return Object.keys(
    e.hook.classes.dispatch({ property: t, classes: n }).classes
  ).filter((s) => n[s]).join(" ") || null;
}
function Uo(e) {
  const t = "$remove:";
  let r = !1;
  const n = Object.keys(e).filter((s) => (e[s] && s.startsWith(t) && (r = !0), e[s]));
  return n.length > 1 && r && n.filter((o) => o.startsWith(t)).map((o) => {
    const a = o.substring(t.length);
    e[a] = !1, e[o] = !1;
  }), e;
}
function Pv(e, t, r) {
  const n = ls(e);
  n ? n.setErrors(t, r) : yr(651, e);
}
function Vv(e, t = !0) {
  const r = ls(e);
  r ? r.clearErrors(t) : yr(652, e);
}
var Js = "1.7.2", Hu = /* @__PURE__ */ new WeakSet();
function wo(e, t) {
  const r = t || Object.assign(/* @__PURE__ */ new Map(), { active: !1 }), n = /* @__PURE__ */ new Map(), s = function(u) {
    r.active && (r.has(e) || r.set(e, /* @__PURE__ */ new Set()), r.get(e)?.add(u));
  }, o = function(u) {
    return new Proxy(u, {
      get(...c) {
        return typeof c[1] == "string" && s(`prop:${c[1]}`), Reflect.get(...c);
      }
    });
  }, a = function(u) {
    return new Proxy(u, {
      get(...c) {
        return c[1] === "value" ? (f) => (s(`count:${f}`), u.value(f)) : Reflect.get(...c);
      }
    });
  }, i = function(u, c) {
    return ps(u) ? wo(u, r) : (c === "value" && s("commit"), c === "_value" && s("input"), c === "props" ? o(u) : c === "ledger" ? a(u) : (c === "children" && (s("child"), s("childRemoved")), u));
  }, {
    proxy: l,
    revoke: p
  } = Proxy.revocable(e, {
    get(...u) {
      switch (u[1]) {
        case "_node":
          return e;
        case "deps":
          return r;
        case "watch":
          return (f, d, g) => Ku(l, f, d, g);
        case "observe":
          return () => {
            const f = new Map(r);
            return r.clear(), r.active = !0, f;
          };
        case "stopObserve":
          return () => {
            const f = new Map(r);
            return r.active = !1, f;
          };
        case "receipts":
          return n;
        case "kill":
          return () => {
            Wu(n), Hu.add(u[2]), p();
          };
      }
      const c = Reflect.get(...u);
      return typeof c == "function" ? (...f) => {
        const d = c(...f);
        return i(d, u[1]);
      } : i(c, u[1]);
    }
  });
  return l;
}
function Zu(e, [t, r], n, s) {
  t.forEach((o, a) => {
    o.forEach((i) => {
      e.receipts.has(a) || e.receipts.set(a, {});
      const l = e.receipts.get(a) ?? {};
      l[i] = l[i] ?? [], l[i].push(a.on(i, n, s)), e.receipts.set(a, l);
    });
  }), r.forEach((o, a) => {
    o.forEach((i) => {
      if (e.receipts.has(a)) {
        const l = e.receipts.get(a);
        l && ue(l, i) && (l[i].map(a.off), delete l[i], e.receipts.set(a, l));
      }
    });
  });
}
function Wu(e) {
  e.forEach((t, r) => {
    for (const n in t)
      t[n].map(r.off);
  }), e.clear();
}
function Ku(e, t, r, n) {
  const s = (i) => {
    const l = e.stopObserve();
    Zu(
      e,
      Uu(o, l),
      () => Ku(e, t, r, n),
      n
    ), r && r(i);
  }, o = new Map(e.deps);
  e.observe();
  const a = t(e);
  a instanceof Promise ? a.then((i) => s(i)) : s(a);
}
function Uu(e, t) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return t.forEach((s, o) => {
    if (!e.has(o))
      r.set(o, s);
    else {
      const a = /* @__PURE__ */ new Set(), i = e.get(o);
      s.forEach(
        (l) => !i?.has(l) && a.add(l)
      ), r.set(o, a);
    }
  }), e.forEach((s, o) => {
    if (!t.has(o))
      n.set(o, s);
    else {
      const a = /* @__PURE__ */ new Set(), i = t.get(o);
      s.forEach(
        (l) => !i?.has(l) && a.add(l)
      ), n.set(o, a);
    }
  }), [r, n];
}
function $i(e) {
  return Hu.has(e);
}
var zu = function({ value: t }) {
  return ["yes", "on", "1", 1, !0, "true"].includes(t);
};
zu.skipEmpty = !1;
var Nv = zu, Fv = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), n = Date.parse(String(e));
  return isNaN(n) ? !1 : n > r;
}, Rv = Fv, Bv = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), n = Date.parse(String(e));
  return isNaN(n) ? !1 : n > r || n === r;
}, jv = Bv, Hv = function(e, t) {
  if (!t) return !1;
  const r = Date.parse(String(e.value)), n = Date.parse(String(e.at(t)?.value));
  return isNaN(n) ? !0 : isNaN(r) ? !1 : r > n;
}, Zv = Hv, Wv = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{L}+$", "u"),
    latin: /^[a-z]+$/i
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, Kv = Wv, Uv = function({ value: e }, t = "default") {
  const r = {
    default: /^[\p{L} ]+$/u,
    latin: /^[a-z ]+$/i
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, zv = Uv, Yv = function({ value: e }, t = "default") {
  const r = {
    default: /^[0-9\p{L}]+$/u,
    latin: /^[0-9a-z]+$/i
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, qv = Yv, Gv = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), n = Date.parse(String(e));
  return isNaN(n) ? !1 : n < r;
}, Xv = Gv, Jv = function(e, t) {
  if (!t) return !1;
  const r = Date.parse(String(e.value)), n = Date.parse(String(e.at(t)?.value));
  return isNaN(n) ? !0 : isNaN(r) ? !1 : r < n;
}, Qv = Jv, eg = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), n = Date.parse(String(e));
  return isNaN(n) ? !1 : n < r || n === r;
}, tg = eg, rg = function({ value: t }, r, n) {
  if (!isNaN(t) && !isNaN(r) && !isNaN(n)) {
    const s = 1 * t;
    r = Number(r), n = Number(n);
    const [o, a] = r <= n ? [r, n] : [n, r];
    return s >= 1 * o && s <= 1 * a;
  }
  return !1;
}, ng = rg, kl = /(_confirm(?:ed)?)$/, sg = function(t, r, n = "loose") {
  r || (r = kl.test(t.name) ? t.name.replace(kl, "") : `${t.name}_confirm`);
  const s = t.at(r)?.value;
  return n === "strict" ? t.value === s : t.value == s;
}, og = sg, ag = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{L}", "u"),
    latin: /[a-z]/i
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, ig = ag, lg = function({ value: e }, t = "default") {
  const r = {
    default: /[\p{L} ]/u,
    latin: /[a-z ]/i
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, pg = lg, ug = function({ value: e }, t = "default") {
  const r = {
    default: /[0-9\p{L}]/u,
    latin: /[0-9a-z]/i
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, cg = ug, dg = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{Ll}", "u"),
    latin: /[a-z]/
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, fg = dg, hg = function({ value: t }) {
  return /[0-9]/.test(String(t));
}, mg = hg, vg = function({ value: e }) {
  return /[!-/:-@[-`{-~]/.test(String(e));
}, gg = vg, yg = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{Lu}", "u"),
    latin: /[A-Z]/
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, $g = yg, bg = function({ value: t }, r, n) {
  r = r instanceof Date ? r.getTime() : Date.parse(r), n = n instanceof Date ? n.getTime() : Date.parse(n);
  const s = t instanceof Date ? t.getTime() : Date.parse(String(t));
  if (r && isNaN(n))
    n = r, r = Date.now();
  else if (r === void 0 || s === void 0)
    return !1;
  return s >= r && s <= n;
}, _g = bg, xg = function({ value: t }, r) {
  return r && typeof r == "string" ? fm(r).test(String(t)) : !isNaN(Date.parse(String(t)));
}, wg = xg, kg = function({ value: t }) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t));
}, Sg = kg, Cg = function({ value: t }, ...r) {
  return typeof t == "string" && r.length ? r.some((n) => t.endsWith(n)) : typeof t == "string" && r.length === 0;
}, Dg = Cg, Ag = function({ value: t }, ...r) {
  return r.some((n) => typeof n == "object" ? J(n, t) : n == t);
}, Tg = Ag, Og = function({ value: t }, r = 0, n = 1 / 0) {
  r = parseInt(r), n = isNaN(parseInt(n)) ? 1 / 0 : parseInt(n);
  const s = r <= n ? r : n, o = n >= r ? n : r;
  if (typeof t == "string" || Array.isArray(t))
    return t.length >= s && t.length <= o;
  if (t && typeof t == "object") {
    const a = Object.keys(t).length;
    return a >= s && a <= o;
  }
  return !1;
}, Eg = Og, Ig = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{Ll}+$", "u"),
    allow_non_alpha: /^[0-9\p{Ll}!-/:-@[-`{-~]+$/u,
    allow_numeric: /^[0-9\p{Ll}]+$/u,
    allow_numeric_dashes: /^[0-9\p{Ll}-]+$/u,
    latin: /^[a-z]+$/
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, Lg = Ig, Mg = function({ value: t }, ...r) {
  return r.some((n) => (typeof n == "string" && n.substr(0, 1) === "/" && n.substr(-1) === "/" && (n = new RegExp(n.substr(1, n.length - 2))), n instanceof RegExp ? n.test(String(t)) : n === t));
}, Pg = Mg, Vg = function({ value: t }, r = 10) {
  return Array.isArray(t) ? t.length <= r : Number(t) <= Number(r);
}, Ng = Vg, Fg = function({ value: t }, r = 1) {
  return Array.isArray(t) ? t.length >= r : Number(t) >= Number(r);
}, Rg = Fg, Bg = function({ value: t }, ...r) {
  return !r.some((n) => typeof n == "object" ? J(n, t) : n === t);
}, jg = Bg, Hg = function({ value: t }) {
  return !isNaN(t);
}, Zg = Hg, Yu = function(e, ...t) {
  return yt(e.value) ? t.map((n) => e.at(n)?.value).some((n) => !yt(n)) : !0;
};
Yu.skipEmpty = !1;
var Wg = Yu, qu = function({ value: t }, r = "default") {
  return r === "trim" && typeof t == "string" ? !yt(t.trim()) : !yt(t);
};
qu.skipEmpty = !1;
var Kg = qu, Ug = function({ value: t }, ...r) {
  return typeof t == "string" && r.length ? r.some((n) => t.startsWith(n)) : typeof t == "string" && r.length === 0;
}, zg = Ug, Yg = function({ value: e }) {
  return /^[!-/:-@[-`{-~]+$/.test(String(e));
}, qg = Yg, Gg = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{Lu}+$", "u"),
    latin: /^[A-Z]+$/
  }, n = ue(r, t) ? t : "default";
  return r[n].test(String(e));
}, Xg = Gg, Jg = function({ value: t }, ...r) {
  try {
    const n = r.length ? r : ["http:", "https:"], s = new URL(String(t));
    return n.includes(s.protocol);
  } catch {
    return !1;
  }
}, Qg = Jg;
const ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  accepted: Nv,
  alpha: Kv,
  alpha_spaces: zv,
  alphanumeric: qv,
  between: ng,
  confirm: og,
  contains_alpha: ig,
  contains_alpha_spaces: pg,
  contains_alphanumeric: cg,
  contains_lowercase: fg,
  contains_numeric: mg,
  contains_symbol: gg,
  contains_uppercase: $g,
  date_after: Rv,
  date_after_node: Zv,
  date_after_or_equal: jv,
  date_before: Xv,
  date_before_node: Qv,
  date_before_or_equal: tg,
  date_between: _g,
  date_format: wg,
  email: Sg,
  ends_with: Dg,
  is: Tg,
  length: Eg,
  lowercase: Lg,
  matches: Pg,
  max: Ng,
  min: Rg,
  not: jg,
  number: Zg,
  require_one: Wg,
  required: Kg,
  starts_with: zg,
  symbol: qg,
  uppercase: Xg,
  url: Qg
}, Symbol.toStringTag, { value: "Module" }));
var Ra = /* @__PURE__ */ qe({
  type: "state",
  blocking: !0,
  visible: !1,
  value: !0,
  key: "validating"
});
function ty(e = {}) {
  return function(r) {
    let n = St(r.props.validationRules || {}), s = { ...e, ...n };
    const o = { input: kn(), rerun: null, isPassing: !0 };
    let a = St(r.props.validation);
    r.on("prop:validation", ({ payload: l }) => i(l, n)), r.on(
      "prop:validationRules",
      ({ payload: l }) => i(a, l)
    );
    function i(l, p) {
      J(Object.keys(n || {}), Object.keys(p || {})) && J(a, l) || (n = St(p), a = St(l), s = { ...e, ...n }, r.props.parsedRules?.forEach((u) => {
        Gu(u), Wu(u.observer.receipts), u.observer.kill();
      }), r.store.filter(() => !1, "validation"), r.props.parsedRules = Cl(l, s, r), o.isPassing = !0, Ba(r, r.props.parsedRules, o));
    }
    r.props.parsedRules = Cl(a, s, r), Ba(r, r.props.parsedRules, o);
  };
}
function Ba(e, t, r) {
  $i(e) || (r.input = kn(), e.store.set(
    /* @__PURE__ */ qe({
      key: "failing",
      value: !r.isPassing,
      visible: !1
    })
  ), r.isPassing = !0, e.store.filter((n) => !n.meta.removeImmediately, "validation"), t.forEach(
    (n) => n.debounce && clearTimeout(n.timer)
  ), t.length && (e.store.set(Ra), ja(0, t, r, !1, () => {
    e.store.remove(Ra.key), e.store.set(
      /* @__PURE__ */ qe({
        key: "failing",
        value: !r.isPassing,
        visible: !1
      })
    );
  })));
}
function ja(e, t, r, n, s) {
  const o = t[e];
  if (!o) return s();
  const a = o.observer;
  if ($i(a)) return;
  const i = r.input;
  o.state = null;
  function l(p, u) {
    if (r.input !== i) return;
    r.isPassing = r.isPassing && !!u, o.queued = !1;
    const c = a.stopObserve(), f = Uu(o.deps, c);
    if (Zu(
      a,
      f,
      function() {
        try {
          a.store.set(Ra);
        } catch {
        }
        o.queued = !0, r.rerun && clearTimeout(r.rerun), r.rerun = setTimeout(
          Ba,
          0,
          a,
          t,
          r
        );
      },
      "unshift"
      // We want these listeners to run before other events are emitted so the 'state.validating' will be reliable.
    ), o.deps = c, o.state = u, u === !1 ? ny(o, n || p) : Gu(o), t.length > e + 1) {
      const d = t[e + 1];
      (u || d.force || !d.skipEmpty) && d.state === null && (d.queued = !0), ja(e + 1, t, r, n || p, s);
    } else
      s();
  }
  (!yt(a.value) || !o.skipEmpty) && (r.isPassing || o.force) ? o.queued ? ry(o, a, (p) => {
    p instanceof Promise ? p.then((u) => l(!0, u)) : l(!1, p);
  }) : ja(e + 1, t, r, n, s) : yt(a.value) && o.skipEmpty && r.isPassing ? (a.observe(), a.value, l(!1, r.isPassing)) : l(!1, null);
}
function ry(e, t, r) {
  e.debounce ? e.timer = setTimeout(() => {
    t.observe(), r(e.rule(t, ...e.args));
  }, e.debounce) : (t.observe(), r(e.rule(t, ...e.args)));
}
function Gu(e) {
  const t = `rule_${e.name}`;
  e.messageObserver && (e.messageObserver = e.messageObserver.kill()), ue(e.observer.store, t) && e.observer.store.remove(t);
}
function ny(e, t) {
  const r = e.observer;
  $i(r) || (e.messageObserver || (e.messageObserver = wo(r._node)), e.messageObserver.watch(
    (n) => oy(
      n,
      e
    ),
    (n) => {
      const s = sy(r, e, n), o = /* @__PURE__ */ qe({
        blocking: e.blocking,
        key: `rule_${e.name}`,
        meta: {
          /**
           * Use this key instead of the message root key to produce i18n validation
           * messages.
           */
          messageKey: e.name,
          /**
           * For messages that were created *by or after* a debounced or async
           * validation rule — we make note of it so we can immediately remove them
           * as soon as the next commit happens.
           */
          removeImmediately: t,
          /**
           * Determines if this message should be passed to localization.
           */
          localize: !s,
          /**
           * The arguments that will be passed to the validation rules
           */
          i18nArgs: n
        },
        type: "validation",
        value: s || "This field is not valid."
      });
      r.store.set(o);
    }
  ));
}
function sy(e, t, r) {
  const n = e.props.validationMessages && ue(e.props.validationMessages, t.name) ? e.props.validationMessages[t.name] : void 0;
  return typeof n == "function" ? n(...r) : n;
}
function oy(e, t) {
  return [
    {
      node: e,
      name: Xu(e),
      args: t.args
    }
  ];
}
function Xu(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
var Ju = "(?:[\\*+?()0-9]+)", Qu = "[a-zA-Z][a-zA-Z0-9_]+", ay = new RegExp(
  `^(${Ju}?${Qu})(?:\\:(.*)+)?$`,
  "i"
), iy = new RegExp(`^(${Ju})(${Qu})$`, "i"), ly = /([\*+?]+)?(\(\d+\))([\*+?]+)?/, Sl = /\(\d+\)/, py = {
  blocking: !0,
  debounce: 0,
  force: !1,
  skipEmpty: !0,
  name: ""
};
function Cl(e, t, r) {
  return e ? (typeof e == "string" ? uy(e) : gr(e)).reduce((s, o) => {
    let a = o.shift();
    const i = {};
    if (typeof a == "string") {
      const [l, p] = dy(a);
      ue(t, l) && (a = t[l], Object.assign(i, p));
    }
    return typeof a == "function" && s.push({
      observer: wo(r),
      rule: a,
      args: o,
      timer: 0,
      state: null,
      queued: !0,
      deps: /* @__PURE__ */ new Map(),
      ...py,
      ...fy(i, a)
    }), s;
  }, []) : [];
}
function uy(e) {
  return e.split("|").reduce((t, r) => {
    const n = cy(r);
    return n && t.push(n), t;
  }, []);
}
function cy(e) {
  const t = e.trim();
  if (t) {
    const r = t.match(ay);
    if (r && typeof r[1] == "string") {
      const n = r[1].trim(), s = r[2] && typeof r[2] == "string" ? r[2].split(",").map((o) => o.trim()) : [];
      return [n, ...s];
    }
  }
  return !1;
}
function dy(e) {
  const t = e.match(iy);
  if (!t)
    return [e, { name: e }];
  const r = {
    "*": { force: !0 },
    "+": { skipEmpty: !1 },
    "?": { blocking: !1 }
  }, [, n, s] = t, o = Sl.test(n) ? n.match(ly) || [] : [, n];
  return [
    s,
    [o[1], o[2], o[3]].reduce(
      (a, i) => (i && (Sl.test(i) ? a.debounce = parseInt(i.substr(1, i.length - 1)) : i.split("").forEach(
        (l) => ue(r, l) && Object.assign(a, r[l])
      )), a),
      { name: s }
    )
  ];
}
function fy(e, t) {
  return e.name || (e.name = t.ruleName || t.name), ["skipEmpty", "force", "debounce", "blocking"].reduce(
    (r, n) => (ue(t, n) && !ue(r, n) && Object.assign(r, {
      [n]: t[n]
    }), r),
    e
  );
}
function ye(e) {
  return e[0].toUpperCase() + e.substr(1);
}
function Dl(e, t = "or") {
  return e.reduce((r, n, s) => (r += n, s <= e.length - 2 && e.length > 2 && (r += ", "), s === e.length - 2 && (r += `${e.length === 2 ? " " : ""}${t} `), r), "");
}
function ws(e) {
  const t = typeof e == "string" ? new Date(Date.parse(e)) : e;
  return t instanceof Date ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeZone: "UTC"
  }).format(t) : "(unknown)";
}
function hy(e, t) {
  return Number(e) >= Number(t) ? [t, e] : [e, t];
}
var my = {
  /**
   * Shown on a button for adding additional items.
   */
  add: "Add",
  /**
   * Shown when a button to remove items is visible.
   */
  remove: "Remove",
  /**
   * Shown when there are multiple items to remove at the same time.
   */
  removeAll: "Remove all",
  /**
   * Shown when all fields are not filled out correctly.
   */
  incomplete: "Sorry, not all fields are filled out correctly.",
  /**
   * Shown in a button inside a form to submit the form.
   */
  submit: "Submit",
  /**
   * Shown when no files are selected.
   */
  noFiles: "No file chosen",
  /**
   * Shown on buttons that move fields up in a list.
   */
  moveUp: "Move up",
  /**
   * Shown on buttons that move fields down in a list.
   */
  moveDown: "Move down",
  /**
   * Shown when something is actively loading.
   */
  isLoading: "Loading...",
  /**
   * Shown when there is more to load.
   */
  loadMore: "Load more",
  /**
   * Show on buttons that navigate state forward
   */
  next: "Next",
  /**
   * Show on buttons that navigate state backward
   */
  prev: "Previous",
  /**
   * Shown when adding all values.
   */
  addAllValues: "Add all values",
  /**
   * Shown when adding selected values.
   */
  addSelectedValues: "Add selected values",
  /**
   * Shown when removing all values.
   */
  removeAllValues: "Remove all values",
  /**
   * Shown when removing selected values.
   */
  removeSelectedValues: "Remove selected values",
  /**
   * Shown when there is a date to choose.
   */
  chooseDate: "Choose date",
  /**
   * Shown when there is a date to change.
   */
  changeDate: "Change date",
  /**
   * Shown above error summaries when someone attempts to submit a form with
   * errors and the developer has implemented `<FormKitSummary />`.
   */
  summaryHeader: "There were errors in your form.",
  /*
   * Shown when there is something to close
   */
  close: "Close",
  /**
   * Shown when there is something to open.
   */
  open: "Open"
}, vy = {
  /**
   * The value is not an accepted value.
   * @see {@link https://formkit.com/essentials/validation#accepted}
   */
  accepted({ name: e }) {
    return `Please accept the ${e}.`;
  },
  /**
   * The date is not after
   * @see {@link https://formkit.com/essentials/validation#date-after}
   */
  date_after({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${ye(e)} must be after ${ws(t[0])}.` : `${ye(e)} must be in the future.`;
  },
  /**
   * The value is not a letter.
   * @see {@link https://formkit.com/essentials/validation#alpha}
   */
  alpha({ name: e }) {
    return `${ye(e)} can only contain alphabetical characters.`;
  },
  /**
   * The value is not alphanumeric
   * @see {@link https://formkit.com/essentials/validation#alphanumeric}
   */
  alphanumeric({ name: e }) {
    return `${ye(e)} can only contain letters and numbers.`;
  },
  /**
   * The value is not letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
   */
  alpha_spaces({ name: e }) {
    return `${ye(e)} can only contain letters and spaces.`;
  },
  /**
   * The value have no letter.
   * @see {@link https://formkit.com/essentials/validation#contains_alpha}
   */
  contains_alpha({ name: e }) {
    return `${ye(e)} must contain alphabetical characters.`;
  },
  /**
   * The value have no alphanumeric
   * @see {@link https://formkit.com/essentials/validation#contains_alphanumeric}
   */
  contains_alphanumeric({ name: e }) {
    return `${ye(e)} must contain letters or numbers.`;
  },
  /**
   * The value have no letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#contains_alpha-spaces}
   */
  contains_alpha_spaces({ name: e }) {
    return `${ye(e)} must contain letters or spaces.`;
  },
  /**
   * The value have no symbol
   * @see {@link https://formkit.com/essentials/validation#contains_symbol}
   */
  contains_symbol({ name: e }) {
    return `${ye(e)} must contain a symbol.`;
  },
  /**
   * The value have no uppercase
   * @see {@link https://formkit.com/essentials/validation#contains_uppercase}
   */
  contains_uppercase({ name: e }) {
    return `${ye(e)} must contain an uppercase letter.`;
  },
  /**
   * The value have no lowercase
   * @see {@link https://formkit.com/essentials/validation#contains_lowercase}
   */
  contains_lowercase({ name: e }) {
    return `${ye(e)} must contain a lowercase letter.`;
  },
  /**
   *  The value have no numeric
   * @see {@link https://formkit.com/essentials/validation#contains_numeric}
   */
  contains_numeric({ name: e }) {
    return `${ye(e)} must contain numbers.`;
  },
  /**
   * The value is not symbol
   * @see {@link https://formkit.com/essentials/validation#symbol}
   */
  symbol({ name: e }) {
    return `${ye(e)} must be a symbol.`;
  },
  /**
   * The value is not uppercase
   * @see {@link https://formkit.com/essentials/validation#uppercase}
   */
  uppercase({ name: e }) {
    return `${ye(e)} can only contain uppercase letters.`;
  },
  /**
   * The value is not lowercase
   * @see {@link https://formkit.com/essentials/validation#lowercase}
   */
  lowercase({ name: e, args: t }) {
    let r = "";
    return Array.isArray(t) && t.length && (t[0] === "allow_non_alpha" && (r = ", numbers and symbols"), t[0] === "allow_numeric" && (r = " and numbers"), t[0] === "allow_numeric_dashes" && (r = ", numbers and dashes")), `${ye(e)} can only contain lowercase letters${r}.`;
  },
  /**
   * The date is not before
   * @see {@link https://formkit.com/essentials/validation#date-before}
   */
  date_before({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${ye(e)} must be before ${ws(t[0])}.` : `${ye(e)} must be in the past.`;
  },
  /**
   * The value is not between two numbers
   * @see {@link https://formkit.com/essentials/validation#between}
   */
  between({ name: e, args: t }) {
    if (isNaN(t[0]) || isNaN(t[1]))
      return "This field was configured incorrectly and can’t be submitted.";
    const [r, n] = hy(t[0], t[1]);
    return `${ye(e)} must be between ${r} and ${n}.`;
  },
  /**
   * The confirmation field does not match
   * @see {@link https://formkit.com/essentials/validation#confirm}
   */
  confirm({ name: e }) {
    return `${ye(e)} does not match.`;
  },
  /**
   * The value is not a valid date
   * @see {@link https://formkit.com/essentials/validation#date-format}
   */
  date_format({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${ye(e)} is not a valid date, please use the format ${t[0]}` : "This field was configured incorrectly and can’t be submitted";
  },
  /**
   * Is not within expected date range
   * @see {@link https://formkit.com/essentials/validation#date-between}
   */
  date_between({ name: e, args: t }) {
    return `${ye(e)} must be between ${ws(t[0])} and ${ws(t[1])}`;
  },
  /**
   * Shown when the user-provided value is not a valid email address.
   * @see {@link https://formkit.com/essentials/validation#email}
   */
  email: "Please enter a valid email address.",
  /**
   * Does not end with the specified value
   * @see {@link https://formkit.com/essentials/validation#ends-with}
   */
  ends_with({ name: e, args: t }) {
    return `${ye(e)} doesn’t end with ${Dl(t)}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#is}
   */
  is({ name: e }) {
    return `${ye(e)} is not an allowed value.`;
  },
  /**
   * Does not match specified length
   * @see {@link https://formkit.com/essentials/validation#length}
   */
  length({ name: e, args: [t = 0, r = 1 / 0] }) {
    const n = Math.min(t, r), s = Math.max(t, r);
    return n == 1 && s === 1 / 0 ? `${ye(e)} must be at least one character.` : n == 0 && s ? `${ye(e)} must be less than or equal to ${s} characters.` : n === s ? `${ye(e)} should be ${s} characters long.` : n && s === 1 / 0 ? `${ye(e)} must be greater than or equal to ${n} characters.` : `${ye(e)} must be between ${n} and ${s} characters.`;
  },
  /**
   * Value is not a match
   * @see {@link https://formkit.com/essentials/validation#matches}
   */
  matches({ name: e }) {
    return `${ye(e)} is not an allowed value.`;
  },
  /**
   * Exceeds maximum allowed value
   * @see {@link https://formkit.com/essentials/validation#max}
   */
  max({ name: e, node: { value: t }, args: r }) {
    return Array.isArray(t) ? `Cannot have more than ${r[0]} ${e}.` : `${ye(e)} must be no more than ${r[0]}.`;
  },
  /**
   * The (field-level) value does not match specified mime type
   * @see {@link https://formkit.com/essentials/validation#mime}
   */
  mime({ name: e, args: t }) {
    return t[0] ? `${ye(e)} must be of the type: ${t[0]}` : "No file formats allowed.";
  },
  /**
   * Does not fulfill minimum allowed value
   * @see {@link https://formkit.com/essentials/validation#min}
   */
  min({ name: e, node: { value: t }, args: r }) {
    return Array.isArray(t) ? `Cannot have fewer than ${r[0]} ${e}.` : `${ye(e)} must be at least ${r[0]}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#not}
   */
  not({ name: e, node: { value: t } }) {
    return `“${t}” is not an allowed ${e}.`;
  },
  /**
   *  Is not a number
   * @see {@link https://formkit.com/essentials/validation#number}
   */
  number({ name: e }) {
    return `${ye(e)} must be a number.`;
  },
  /**
   * Require one field.
   * @see {@link https://formkit.com/essentials/validation#require-one}
   */
  require_one: ({ name: e, node: t, args: r }) => {
    const n = r.map((s) => {
      const o = t.at(s);
      return o ? Xu(o) : !1;
    }).filter((s) => !!s);
    return n.unshift(e), `${n.join(" or ")} is required.`;
  },
  /**
   * Required field.
   * @see {@link https://formkit.com/essentials/validation#required}
   */
  required({ name: e }) {
    return `${ye(e)} is required.`;
  },
  /**
   * Does not start with specified value
   * @see {@link https://formkit.com/essentials/validation#starts-with}
   */
  starts_with({ name: e, args: t }) {
    return `${ye(e)} doesn’t start with ${Dl(t)}.`;
  },
  /**
   * Is not a url
   * @see {@link https://formkit.com/essentials/validation#url}
   */
  url() {
    return "Please enter a valid URL.";
  },
  /**
   * Shown when the date is invalid.
   */
  invalidDate: "The selected date is invalid."
}, gy = { ui: my, validation: vy }, Al = /* @__PURE__ */ new Set();
function yy(e) {
  return function(r) {
    Al.add(r), r.on("destroying", () => Al.delete(r));
    let n = Tl(r.config.locale, e), s = n ? e[n] : {};
    r.on("prop:locale", ({ payload: o }) => {
      n = Tl(o, e), s = n ? e[n] : {}, r.store.touch();
    }), r.on("prop:label", () => r.store.touch()), r.on("prop:validationLabel", () => r.store.touch()), r.hook.text((o, a) => {
      const i = o.meta?.messageKey || o.key;
      if (ue(s, o.type) && ue(s[o.type], i)) {
        const l = s[o.type][i];
        typeof l == "function" ? o.value = Array.isArray(o.meta?.i18nArgs) ? l(...o.meta.i18nArgs) : l(o) : o.value = l;
      }
      return a(o);
    });
  };
}
function Tl(e, t) {
  if (ue(t, e))
    return e;
  const [r] = e.split("-");
  if (ue(t, r))
    return r;
  for (const n in t)
    return n;
  return !1;
}
function $y(...e) {
  const t = e.reduce(
    (n, s) => vr(n, s),
    {}
  ), r = () => {
  };
  return r.library = function(n) {
    const s = rn(n.props.type);
    ue(t, s) && n.define(t[s]);
  }, r;
}
var by = [
  "classes",
  "config",
  "delay",
  "errors",
  "id",
  "index",
  "inputErrors",
  "library",
  "modelValue",
  "onUpdate:modelValue",
  "name",
  "number",
  "parent",
  "plugins",
  "sectionsSchema",
  "type",
  "validation",
  "validationLabel",
  "validationMessages",
  "validationRules",
  // Runtime event props:
  "onInput",
  "onInputRaw",
  "onUpdate:modelValue",
  "onNode",
  "onSubmit",
  "onSubmitInvalid",
  "onSubmitRaw"
];
function ko(e) {
  return e && typeof e == "object" && "group" in e && Array.isArray(e.options);
}
function Qs(e, t = { count: 1 }) {
  return Array.isArray(e) ? e.map(
    (r) => {
      if (typeof r == "string" || typeof r == "number")
        return {
          label: String(r),
          value: String(r)
        };
      if (typeof r == "object") {
        if ("group" in r)
          return r.options = Qs(r.options || [], t), r;
        "value" in r && typeof r.value != "string" && Object.assign(r, {
          value: `__mask_${t.count++}`,
          __original: r.value
        });
      }
      return r;
    }
  ) : Object.keys(e).map((r) => ({
    label: e[r],
    value: r
  }));
}
function Lr(e, t, r = !1) {
  if (Array.isArray(e)) {
    for (const n of e)
      if (!(typeof n != "object" && n)) {
        if (ko(n)) {
          const s = Lr(n.options, t, !0);
          if (s !== void 0)
            return s;
        } else if (t == n.value)
          return "__original" in n ? n.__original : n.value;
      }
  }
  return r ? void 0 : t;
}
function mn(e, t) {
  return e === null && t === void 0 || e === void 0 && t === null ? !1 : e == t ? !0 : mr(e) && mr(t) ? J(e, t) : !1;
}
function tr(e) {
  e.hook.prop((t, r) => {
    var n;
    return t.prop === "options" && (typeof t.value == "function" ? (e.props.optionsLoader = t.value, t.value = []) : ((n = e.props)._normalizeCounter ?? (n._normalizeCounter = { count: 1 }), t.value = Qs(t.value, e.props._normalizeCounter))), r(t);
  });
}
// @__NO_SIDE_EFFECTS__
function le(e, t, r = !1) {
  return (...n) => {
    const s = (o) => {
      const a = !t || typeof t == "string" ? { $el: t } : t();
      return (Ir(a) || Jn(a)) && (a.meta ? a.meta.section = e : a.meta = { section: e }, n.length && !a.children && (a.children = [
        ...n.map(
          (i) => typeof i == "function" ? i(o) : i
        )
      ]), Ir(a) && (a.attrs = {
        class: `$classes.${e}`,
        ...a.attrs || {}
      })), {
        if: `$slots.${e}`,
        then: `$slots.${e}`,
        else: e in o ? /* @__PURE__ */ Cr(a, o[e]) : a
      };
    };
    return s._s = e, r ? /* @__PURE__ */ _y(s) : s;
  };
}
// @__NO_SIDE_EFFECTS__
function _y(e) {
  return (t) => [e(t)];
}
function Qn(e) {
  return !!(e && typeof e == "object" && ("$el" in e || "$cmp" in e || "$formkit" in e));
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t = {}) {
  return typeof e == "string" ? Qn(t) || typeof t == "string" ? t : e : Array.isArray(e) ? Qn(t) ? t : e : vr(e, t);
}
var xy = /* @__PURE__ */ le("actions", () => ({
  $el: "div",
  if: "$actions"
})), eo = /* @__PURE__ */ le("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    name: "$node.props.altName || $node.name",
    disabled: "$option.attrs.disabled || $disabled",
    onInput: "$handlers.toggleChecked",
    checked: "$fns.eq($_value, $onValue)",
    onBlur: "$handlers.blur",
    value: "$: true",
    id: "$id",
    "aria-describedby": {
      if: "$options.length",
      then: {
        if: "$option.help",
        then: '$: "help-" + $option.attrs.id',
        else: void 0
      },
      else: {
        if: "$help",
        then: '$: "help-" + $id',
        else: void 0
      }
    }
  }
})), ec = /* @__PURE__ */ le("optionHelp", () => ({
  $el: "div",
  if: "$option.help",
  attrs: {
    id: '$: "help-" + $option.attrs.id'
  }
})), to = /* @__PURE__ */ le("inner", "span"), ro = /* @__PURE__ */ le("label", "span"), tc = /* @__PURE__ */ le("option", () => ({
  $el: "li",
  for: ["option", "$options"],
  attrs: {
    "data-disabled": "$option.attrs.disabled || $disabled || undefined"
  }
})), rc = /* @__PURE__ */ le("options", "ul"), no = /* @__PURE__ */ le("wrapper", () => ({
  $el: "label",
  attrs: {
    "data-disabled": {
      if: "$options.length",
      then: void 0,
      else: "$disabled || undefined"
    },
    "data-checked": {
      if: "$options == undefined",
      then: "$fns.eq($_value, $onValue) || undefined",
      else: "$fns.isChecked($option.value) || undefined"
    }
  }
})), wy = /* @__PURE__ */ le("input", () => ({
  $el: "button",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    id: "$id"
  }
})), ky = /* @__PURE__ */ le("default", null), so = /* @__PURE__ */ le("decorator", () => ({
  $el: "span",
  attrs: {
    "aria-hidden": "true"
  }
})), nc = /* @__PURE__ */ le("fieldset", () => ({
  $el: "fieldset",
  attrs: {
    id: "$id",
    "aria-describedby": {
      if: "$help",
      then: '$: "help-" + $id',
      else: void 0
    }
  }
})), Sy = /* @__PURE__ */ le("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "file",
    disabled: "$disabled",
    name: "$node.name",
    onChange: "$handlers.files",
    onBlur: "$handlers.blur",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), Cy = /* @__PURE__ */ le("fileItem", () => ({
  $el: "li",
  for: ["file", "$value"]
})), Dy = /* @__PURE__ */ le("fileList", () => ({
  $el: "ul",
  if: "$value.length",
  attrs: {
    "data-has-multiple": "$_hasMultipleFiles"
  }
})), Ay = /* @__PURE__ */ le("fileName", () => ({
  $el: "span",
  attrs: {
    class: "$classes.fileName"
  }
})), Ol = /* @__PURE__ */ le("fileRemove", () => ({
  $el: "button",
  attrs: {
    type: "button",
    onClick: "$handlers.resetFiles"
  }
})), Ty = /* @__PURE__ */ le("form", () => ({
  $el: "form",
  bind: "$attrs",
  meta: {
    autoAnimate: !0
  },
  attrs: {
    id: "$id",
    name: "$node.name",
    onSubmit: "$handlers.submit",
    "data-loading": "$state.loading || undefined"
  }
})), bi = /* @__PURE__ */ le("wrapper", null, !0), Xt = /* @__PURE__ */ le("help", () => ({
  $el: "div",
  if: "$help",
  attrs: {
    id: '$: "help-" + $id'
  }
})), Ye = (e, t) => (/* @__PURE__ */ le(`${e}Icon`, () => {
  const r = `_raw${e.charAt(0).toUpperCase()}${e.slice(1)}Icon`;
  return {
    if: `$${e}Icon && $${r}`,
    $el: `${t || "span"}`,
    attrs: {
      class: `$classes.${e}Icon + " " + $classes.icon`,
      innerHTML: `$${r}`,
      onClick: `$handlers.iconClick(${e})`,
      role: `$fns.iconRole(${e})`,
      tabindex: `$fns.iconRole(${e}) === "button" && "0" || undefined`,
      for: {
        if: `${t === "label"}`,
        then: "$id"
      }
    }
  };
}))(), So = /* @__PURE__ */ le("inner", "div"), Co = /* @__PURE__ */ le("label", () => ({
  $el: "label",
  if: "$label",
  attrs: {
    for: "$id"
  }
})), sc = /* @__PURE__ */ le("legend", () => ({
  $el: "legend",
  if: "$label"
})), $r = /* @__PURE__ */ le("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
})), br = /* @__PURE__ */ le("messages", () => ({
  $el: "ul",
  if: "$defaultMessagePlacement && $fns.length($messages)"
})), Oy = /* @__PURE__ */ le("noFiles", () => ({
  $el: "span",
  if: "$value == null || $value.length == 0"
})), Ey = /* @__PURE__ */ le("optGroup", () => ({
  $el: "optgroup",
  bind: "$option.attrs",
  attrs: {
    label: "$option.group"
  }
})), El = /* @__PURE__ */ le("option", () => ({
  $el: "option",
  bind: "$option.attrs",
  attrs: {
    class: "$classes.option",
    value: "$option.value",
    selected: "$fns.isSelected($option)"
  }
})), Il = /* @__PURE__ */ le("options", () => ({
  $el: null,
  if: "$options.length",
  for: ["option", "$option.options || $options"]
})), Vr = /* @__PURE__ */ le("outer", () => ({
  $el: "div",
  meta: {
    autoAnimate: !0
  },
  attrs: {
    key: "$id",
    "data-family": "$family || undefined",
    "data-type": "$type",
    "data-multiple": '$attrs.multiple || ($type != "select" && $options != undefined) || undefined',
    "data-has-multiple": "$_hasMultipleFiles",
    "data-disabled": '$: ($disabled !== "false" && $disabled) || undefined',
    "data-empty": "$state.empty || undefined",
    "data-complete": "$state.complete || undefined",
    "data-invalid": "$state.invalid || undefined",
    "data-errors": "$state.errors || undefined",
    "data-submitted": "$state.submitted || undefined",
    "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined",
    "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined",
    "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined",
    "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined"
  }
})), Jt = /* @__PURE__ */ le("prefix", null), Iy = /* @__PURE__ */ le("input", () => ({
  $el: "select",
  bind: "$attrs",
  attrs: {
    id: "$id",
    "data-placeholder": "$fns.showPlaceholder($_value, $placeholder)",
    disabled: "$disabled",
    class: "$classes.input",
    name: "$node.name",
    onChange: "$handlers.onChange",
    onInput: "$handlers.selectInput",
    onBlur: "$handlers.blur",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), Ly = /* @__PURE__ */ le("submit", () => ({
  $cmp: "FormKit",
  bind: "$submitAttrs",
  props: {
    type: "submit",
    label: "$submitLabel"
  }
})), Qt = /* @__PURE__ */ le("suffix", null), oc = /* @__PURE__ */ le("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), My = /* @__PURE__ */ le("input", () => ({
  $el: "textarea",
  bind: "$attrs",
  attrs: {
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  },
  children: "$initialValue"
})), us = /* @__PURE__ */ le("wrapper", "div"), Py = 0;
function ac(e) {
  (e.type === "group" || e.type === "list") && e.plugins.add(Vy);
}
function Vy(e) {
  e.props.type === "radio" && (e.addProps(["altName"]), e.props.altName = `${e.name}_${Py++}`);
}
function ic(e) {
  return function(t, r) {
    return t.prop === "options" && Array.isArray(t.value) && (t.value = t.value.map((n) => n.attrs?.id ? n : vr(n, {
      attrs: {
        id: `${e.props.id}-option-${di(String(n.value))}`
      }
    })), e.props.type === "checkbox" && !Array.isArray(e.value) && (e.isCreated ? e.input([], !1) : e.on("created", () => {
      Array.isArray(e.value) || e.input([], !1);
    }))), r(t);
  };
}
function Ny(e, t) {
  const r = t.target;
  if (r instanceof HTMLInputElement) {
    const n = Array.isArray(e.props.options) ? Lr(e.props.options, r.value) : r.value;
    Array.isArray(e.props.options) && e.props.options.length ? Array.isArray(e._value) ? e._value.some((s) => mn(n, s)) ? e.input(
      e._value.filter(
        (s) => !mn(n, s)
      )
    ) : e.input([...e._value, n]) : e.input([n]) : r.checked ? e.input(e.props.onValue) : e.input(e.props.offValue);
  }
}
function Fy(e, t) {
  return e.context?.value, e.context?._value, Array.isArray(e._value) ? e._value.some(
    (r) => mn(Lr(e.props.options, t), r)
  ) : !1;
}
function Ry(e) {
  e.on("created", () => {
    e.context?.handlers && (e.context.handlers.toggleChecked = Ny.bind(null, e)), e.context?.fns && (e.context.fns.isChecked = Fy.bind(null, e)), ue(e.props, "onValue") || (e.props.onValue = !0), ue(e.props, "offValue") || (e.props.offValue = !1);
  }), e.hook.prop(ic(e));
}
function he(e, t) {
  return (r) => {
    r.props[`${e}Icon`] === void 0 && (r.props[`${e}Icon`] = t.startsWith("<svg") ? t : `default:${t}`);
  };
}
function Do(e) {
  e.on("created", () => {
    "disabled" in e.props && (e.props.disabled = Y(e.props.disabled), e.config.disabled = Y(e.props.disabled));
  }), e.hook.prop(({ prop: t, value: r }, n) => (r = t === "disabled" ? Y(r) : r, n({ prop: t, value: r }))), e.on("prop:disabled", ({ payload: t }) => {
    e.config.disabled = Y(t);
  });
}
function xe(e, t) {
  return (r) => {
    r.store.set(
      /* @__PURE__ */ qe({
        key: e,
        type: "ui",
        value: t || e,
        meta: {
          localize: !0,
          i18nArgs: [r]
        }
      })
    );
  };
}
var zo = typeof window < "u";
function lc(e) {
  e.target instanceof HTMLElement && e.target.hasAttribute("data-file-hover") && e.target.removeAttribute("data-file-hover");
}
function Ll(e, t) {
  t.target instanceof HTMLInputElement ? e === "dragover" && t.target.setAttribute("data-file-hover", "true") : t.preventDefault(), e === "drop" && lc(t);
}
function By(e) {
  xe("noFiles", "Select file")(e), xe("removeAll", "Remove all")(e), xe("remove")(e), e.addProps(["_hasMultipleFiles"]), zo && (window._FormKit_File_Drop || (window.addEventListener(
    "dragover",
    Ll.bind(null, "dragover")
  ), window.addEventListener("drop", Ll.bind(null, "drop")), window.addEventListener("dragleave", lc), window._FormKit_File_Drop = !0)), e.hook.input((t, r) => r(Array.isArray(t) ? t : [])), e.on("input", ({ payload: t }) => {
    e.props._hasMultipleFiles = Array.isArray(t) && t.length > 1 ? !0 : void 0;
  }), e.on("reset", () => {
    if (e.props.id && zo) {
      const t = document.getElementById(e.props.id);
      t && (t.value = "");
    }
  }), e.on("created", () => {
    Array.isArray(e.value) || e.input([], !1), e.context && (e.context.handlers.resetFiles = (t) => {
      if (t.preventDefault(), e.input([]), e.props.id && zo) {
        const r = document.getElementById(e.props.id);
        r && (r.value = ""), r?.focus();
      }
    }, e.context.handlers.files = (t) => {
      const r = [];
      if (t.target instanceof HTMLInputElement && t.target.files) {
        for (let n = 0; n < t.target.files.length; n++) {
          let s;
          (s = t.target.files.item(n)) && r.push({ name: s.name, file: s });
        }
        e.input(r);
      }
      e.context && (e.context.files = r), typeof e.props.attrs?.onChange == "function" && e.props.attrs?.onChange(t);
    });
  });
}
var Ml = /* @__PURE__ */ qe({
  key: "loading",
  value: !0,
  visible: !1
});
async function jy(e, t) {
  const r = Math.random();
  if (e.props._submitNonce = r, t.preventDefault(), await e.settled, e.ledger.value("validating") && (e.store.set(Ml), await e.ledger.settled("validating"), e.store.remove("loading"), e.props._submitNonce !== r))
    return;
  const n = (s) => s.store.set(
    /* @__PURE__ */ qe({
      key: "submitted",
      value: !0,
      visible: !1
    })
  );
  if (e.walk(n), n(e), e.emit("submit-raw"), typeof e.props.onSubmitRaw == "function" && e.props.onSubmitRaw(t, e), e.ledger.value("blocking"))
    typeof e.props.onSubmitInvalid == "function" && e.props.onSubmitInvalid(e), e.props.incompleteMessage !== !1 && pc(e);
  else if (typeof e.props.onSubmit == "function") {
    const s = e.props.onSubmit(
      e.hook.submit.dispatch(gr(e.value)),
      e
    );
    if (s instanceof Promise) {
      const o = e.props.disabled === void 0 && e.props.submitBehavior !== "live";
      o && (e.props.disabled = !0), e.store.set(Ml), await s, o && (e.props.disabled = !1), e.store.remove("loading");
    }
  } else
    t.target instanceof HTMLFormElement && t.target.submit();
}
function pc(e) {
  e.store.set(
    /* @__PURE__ */ qe({
      blocking: !1,
      key: "incomplete",
      meta: {
        localize: e.props.incompleteMessage === void 0,
        i18nArgs: [{ node: e }],
        showAsMessage: !0
      },
      type: "ui",
      value: e.props.incompleteMessage || "Form incomplete."
    })
  );
}
function Hy(e) {
  var t;
  e.props.isForm = !0, e.ledger.count("validating", (r) => r.key === "validating"), (t = e.props).submitAttrs ?? (t.submitAttrs = {
    disabled: e.props.disabled
  }), e.on("prop:disabled", ({ payload: r }) => {
    e.props.submitAttrs = { ...e.props.submitAttrs, disabled: r };
  }), e.on("created", () => {
    e.context?.handlers && (e.context.handlers.submit = jy.bind(null, e)), ue(e.props, "actions") || (e.props.actions = !0);
  }), e.on("prop:incompleteMessage", () => {
    e.store.incomplete && pc(e);
  }), e.on("settled:blocking", () => e.store.remove("incomplete"));
}
function Zy(e) {
  e.props.ignore === void 0 && (e.props.ignore = !0, e.parent = null);
}
function Wy(e) {
  e.on("created", () => {
    e.context && (e.context.initialValue = e.value || "");
  });
}
function uc(e) {
  if (typeof e.props.number > "u") return;
  const t = ["number", "range", "hidden"].includes(e.props.type);
  e.hook.input((r, n) => {
    if (r === "") return n(void 0);
    const s = e.props.number === "integer" ? parseInt(r) : parseFloat(r);
    return Number.isFinite(s) ? n(s) : n(t ? void 0 : r);
  });
}
function Ky(e, t) {
  t.target instanceof HTMLInputElement && e.input(Lr(e.props.options, t.target.value));
}
function Uy(e, t) {
  return e.context?.value, e.context?._value, mn(Lr(e.props.options, t), e._value);
}
function zy(e) {
  e.on("created", () => {
    Array.isArray(e.props.options) || yr(350, {
      node: e,
      inputType: "radio"
    }), e.context?.handlers && (e.context.handlers.toggleChecked = Ky.bind(null, e)), e.context?.fns && (e.context.fns.isChecked = Uy.bind(null, e));
  }), e.hook.prop(ic(e));
}
function Yy(e, t) {
  if (ko(t)) return !1;
  e.context && e.context.value;
  const r = "__original" in t ? t.__original : t.value;
  return Array.isArray(e._value) ? e._value.some((n) => mn(n, r)) : (e._value === void 0 || e._value === null && !cc(e.props.options, null)) && t.attrs && t.attrs["data-is-placeholder"] ? !0 : mn(r, e._value);
}
function cc(e, t) {
  return e.some((r) => ko(r) ? cc(r.options, t) : ("__original" in r ? r.__original : r.value) === t);
}
async function qy(e, t) {
  typeof e.props.attrs?.onChange == "function" && (await new Promise((r) => setTimeout(r, 0)), await e.settled, e.props.attrs.onChange(t));
}
function Gy(e, t) {
  const r = t.target, n = r.hasAttribute("multiple") ? Array.from(r.selectedOptions).map(
    (s) => Lr(e.props.options, s.value)
  ) : Lr(e.props.options, r.value);
  e.input(n);
}
function Pl(e, t) {
  return e.some(
    (r) => r.attrs && r.attrs["data-is-placeholder"]
  ) ? e : [
    {
      label: t,
      value: "",
      attrs: {
        hidden: !0,
        disabled: !0,
        "data-is-placeholder": "true"
      }
    },
    ...e
  ];
}
function dc(e) {
  const t = e.length > 0 ? e[0] : void 0;
  if (t)
    return ko(t) ? dc(t.options) : "__original" in t ? t.__original : t.value;
}
function Xy(e) {
  e.on("created", () => {
    const t = Y(e.props.attrs?.multiple);
    !t && e.props.placeholder && Array.isArray(e.props.options) && (e.hook.prop(({ prop: r, value: n }, s) => (r === "options" && (n = Pl(n, e.props.placeholder)), s({ prop: r, value: n }))), e.props.options = Pl(
      e.props.options,
      e.props.placeholder
    )), t ? e.value === void 0 && e.input([], !1) : e.context && !e.context.options && (e.props.attrs = Object.assign({}, e.props.attrs, {
      value: e._value
    }), e.on("input", ({ payload: r }) => {
      e.props.attrs = Object.assign({}, e.props.attrs, {
        value: r
      });
    })), e.context?.handlers && (e.context.handlers.selectInput = Gy.bind(null, e), e.context.handlers.onChange = qy.bind(null, e)), e.context?.fns && (e.context.fns.isSelected = Yy.bind(null, e), e.context.fns.showPlaceholder = (r, n) => {
      if (!Array.isArray(e.props.options)) return !1;
      const s = e.props.options.some(
        (o) => {
          if (o.attrs && "data-is-placeholder" in o.attrs)
            return !1;
          const a = "__original" in o ? o.__original : o.value;
          return J(r, a);
        }
      );
      return n && !s ? !0 : void 0;
    });
  }), e.hook.input((t, r) => (!e.props.placeholder && t === void 0 && Array.isArray(e.props?.options) && e.props.options.length && !Y(e.props?.attrs?.multiple) && (t = dc(e.props.options)), r(t)));
}
// @__NO_SIDE_EFFECTS__
function es(e) {
  return !!(Yr(e) && e.if && e.if.startsWith("$slots.") && typeof e.then == "string" && e.then.startsWith("$slots.") && "else" in e);
}
// @__NO_SIDE_EFFECTS__
function Wt(e, t, r) {
  const n = (s) => {
    const o = t(s);
    if (r || Qn(o) && "if" in o || /* @__PURE__ */ es(o)) {
      const a = {
        if: e,
        then: o
      };
      return r && (a.else = r(s)), a;
    } else /* @__PURE__ */ es(o) ? Object.assign(o.else, { if: e }) : Qn(o) && Object.assign(o, { if: e });
    return o;
  };
  return n._s = kn(), n;
}
// @__NO_SIDE_EFFECTS__
function nn(e, t) {
  const r = (n) => {
    const s = e({});
    return /* @__PURE__ */ es(s) ? (Array.isArray(s.else) || (s.else = /* @__PURE__ */ Cr(
      /* @__PURE__ */ Cr(s.else, t),
      e._s ? n[e._s] : {}
    )), s) : /* @__PURE__ */ Cr(
      /* @__PURE__ */ Cr(s, t),
      e._s ? n[e._s] : {}
    );
  };
  return r._s = e._s, r;
}
var Vl = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Vr(
    /* @__PURE__ */ br(/* @__PURE__ */ $r("$message.value")),
    /* @__PURE__ */ us(
      /* @__PURE__ */ wy(
        /* @__PURE__ */ Ye("prefix"),
        /* @__PURE__ */ Jt(),
        /* @__PURE__ */ ky("$label || $ui.submit.value"),
        /* @__PURE__ */ Qt(),
        /* @__PURE__ */ Ye("suffix")
      )
    ),
    /* @__PURE__ */ Xt("$help")
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "button",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [xe("submit"), Zy],
  /**
   * A key to use for memoizing the schema. This is used to prevent the schema
   * from needing to be stringified when performing a memo lookup.
   */
  schemaMemoKey: "h6st4epl3j8"
}, Jy = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Vr(
    /* @__PURE__ */ Wt(
      "$options == undefined",
      /**
       * Single checkbox structure.
       */
      /* @__PURE__ */ no(
        /* @__PURE__ */ to(/* @__PURE__ */ Jt(), /* @__PURE__ */ eo(), /* @__PURE__ */ so(/* @__PURE__ */ Ye("decorator")), /* @__PURE__ */ Qt()),
        /* @__PURE__ */ nn(/* @__PURE__ */ ro("$label"), {
          if: "$label"
        })
      ),
      /**
       * Multi checkbox structure.
       */
      /* @__PURE__ */ nc(
        /* @__PURE__ */ sc("$label"),
        /* @__PURE__ */ Xt("$help"),
        /* @__PURE__ */ rc(
          /* @__PURE__ */ tc(
            /* @__PURE__ */ no(
              /* @__PURE__ */ to(
                /* @__PURE__ */ Jt(),
                /* @__PURE__ */ nn(/* @__PURE__ */ eo(), {
                  bind: "$option.attrs",
                  attrs: {
                    id: "$option.attrs.id",
                    value: "$option.value",
                    checked: "$fns.isChecked($option.value)"
                  }
                }),
                /* @__PURE__ */ so(/* @__PURE__ */ Ye("decorator")),
                /* @__PURE__ */ Qt()
              ),
              /* @__PURE__ */ nn(/* @__PURE__ */ ro("$option.label"), {
                if: "$option.label"
              })
            ),
            /* @__PURE__ */ ec("$option.help")
          )
        )
      )
    ),
    // Help text only goes under the input when it is a single.
    /* @__PURE__ */ Wt("$options == undefined && $help", /* @__PURE__ */ Xt("$help")),
    /* @__PURE__ */ br(/* @__PURE__ */ $r("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "box",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "onValue", "offValue", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [
    tr,
    Ry,
    he("decorator", "checkboxDecorator")
  ],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "qje02tb3gu8"
}, Qy = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Vr(
    /* @__PURE__ */ us(
      /* @__PURE__ */ Co("$label"),
      /* @__PURE__ */ So(
        /* @__PURE__ */ Ye("prefix", "label"),
        /* @__PURE__ */ Jt(),
        /* @__PURE__ */ Sy(),
        /* @__PURE__ */ Dy(
          /* @__PURE__ */ Cy(
            /* @__PURE__ */ Ye("fileItem"),
            /* @__PURE__ */ Ay("$file.name"),
            /* @__PURE__ */ Wt(
              "$value.length === 1",
              /* @__PURE__ */ Ol(
                /* @__PURE__ */ Ye("fileRemove"),
                '$ui.remove.value + " " + $file.name'
              )
            )
          )
        ),
        /* @__PURE__ */ Wt("$value.length > 1", /* @__PURE__ */ Ol("$ui.removeAll.value")),
        /* @__PURE__ */ Oy(/* @__PURE__ */ Ye("noFiles"), "$ui.noFiles.value"),
        /* @__PURE__ */ Qt(),
        /* @__PURE__ */ Ye("suffix")
      )
    ),
    /* @__PURE__ */ Xt("$help"),
    /* @__PURE__ */ br(/* @__PURE__ */ $r("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "text",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [
    By,
    he("fileItem", "fileItem"),
    he("fileRemove", "fileRemove"),
    he("noFiles", "noFiles")
  ],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "9kqc4852fv8"
}, e0 = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Ty(
    "$slots.default",
    /* @__PURE__ */ br(/* @__PURE__ */ $r("$message.value")),
    /* @__PURE__ */ xy(/* @__PURE__ */ Ly())
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "group",
  /**
   * An array of extra props to accept for this input.
   */
  props: [
    "actions",
    "submit",
    "submitLabel",
    "submitAttrs",
    "submitBehavior",
    "incompleteMessage"
  ],
  /**
   * Additional features that should be added to your input
   */
  features: [Hy, Do],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "5bg016redjo"
}, t0 = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ bi("$slots.default"),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "group",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [Do, ac]
}, r0 = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ oc(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [uc]
}, n0 = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ bi("$slots.default"),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "list",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["sync", "dynamic"],
  /**
   * Additional features that should be added to your input
   */
  features: [Do, ac]
}, s0 = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ bi(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: []
}, o0 = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Vr(
    /* @__PURE__ */ Wt(
      "$options == undefined",
      /**
       * Single radio structure.
       */
      /* @__PURE__ */ no(
        /* @__PURE__ */ to(/* @__PURE__ */ Jt(), /* @__PURE__ */ eo(), /* @__PURE__ */ so(/* @__PURE__ */ Ye("decorator")), /* @__PURE__ */ Qt()),
        /* @__PURE__ */ nn(/* @__PURE__ */ ro("$label"), {
          if: "$label"
        })
      ),
      /**
       * Multi radio structure.
       */
      /* @__PURE__ */ nc(
        /* @__PURE__ */ sc("$label"),
        /* @__PURE__ */ Xt("$help"),
        /* @__PURE__ */ rc(
          /* @__PURE__ */ tc(
            /* @__PURE__ */ no(
              /* @__PURE__ */ to(
                /* @__PURE__ */ Jt(),
                /* @__PURE__ */ nn(/* @__PURE__ */ eo(), {
                  bind: "$option.attrs",
                  attrs: {
                    id: "$option.attrs.id",
                    value: "$option.value",
                    checked: "$fns.isChecked($option.value)"
                  }
                }),
                /* @__PURE__ */ so(/* @__PURE__ */ Ye("decorator")),
                /* @__PURE__ */ Qt()
              ),
              /* @__PURE__ */ nn(/* @__PURE__ */ ro("$option.label"), {
                if: "$option.label"
              })
            ),
            /* @__PURE__ */ ec("$option.help")
          )
        )
      )
    ),
    // Help text only goes under the input when it is a single.
    /* @__PURE__ */ Wt("$options == undefined && $help", /* @__PURE__ */ Xt("$help")),
    /* @__PURE__ */ br(/* @__PURE__ */ $r("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "box",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "onValue", "offValue", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [tr, zy, he("decorator", "radioDecorator")],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "qje02tb3gu8"
}, a0 = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Vr(
    /* @__PURE__ */ us(
      /* @__PURE__ */ Co("$label"),
      /* @__PURE__ */ So(
        /* @__PURE__ */ Ye("prefix"),
        /* @__PURE__ */ Jt(),
        /* @__PURE__ */ Iy(
          /* @__PURE__ */ Wt(
            "$slots.default",
            () => "$slots.default",
            /* @__PURE__ */ Il(
              /* @__PURE__ */ Wt(
                "$option.group",
                /* @__PURE__ */ Ey(/* @__PURE__ */ Il(/* @__PURE__ */ El("$option.label"))),
                /* @__PURE__ */ El("$option.label")
              )
            )
          )
        ),
        /* @__PURE__ */ Wt("$attrs.multiple !== undefined", () => "", /* @__PURE__ */ Ye("select")),
        /* @__PURE__ */ Qt(),
        /* @__PURE__ */ Ye("suffix")
      )
    ),
    /* @__PURE__ */ Xt("$help"),
    /* @__PURE__ */ br(/* @__PURE__ */ $r("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "placeholder", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [tr, Xy, he("select", "select")],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "cb119h43krg"
}, i0 = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Vr(
    /* @__PURE__ */ us(
      /* @__PURE__ */ Co("$label"),
      /* @__PURE__ */ So(
        /* @__PURE__ */ Ye("prefix", "label"),
        /* @__PURE__ */ Jt(),
        /* @__PURE__ */ My(),
        /* @__PURE__ */ Qt(),
        /* @__PURE__ */ Ye("suffix")
      )
    ),
    /* @__PURE__ */ Xt("$help"),
    /* @__PURE__ */ br(/* @__PURE__ */ $r("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [Wy],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "b1n0td79m9g"
}, st = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Vr(
    /* @__PURE__ */ us(
      /* @__PURE__ */ Co("$label"),
      /* @__PURE__ */ So(
        /* @__PURE__ */ Ye("prefix", "label"),
        /* @__PURE__ */ Jt(),
        /* @__PURE__ */ oc(),
        /* @__PURE__ */ Qt(),
        /* @__PURE__ */ Ye("suffix")
      )
    ),
    /* @__PURE__ */ Xt("$help"),
    /* @__PURE__ */ br(/* @__PURE__ */ $r("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "text",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [uc],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "c3cc4kflsg"
}, l0 = {
  button: Vl,
  submit: Vl,
  checkbox: Jy,
  file: Qy,
  form: e0,
  group: t0,
  hidden: r0,
  list: n0,
  meta: s0,
  radio: o0,
  select: a0,
  textarea: i0,
  text: st,
  color: st,
  date: st,
  datetimeLocal: st,
  email: st,
  month: st,
  number: st,
  password: st,
  search: st,
  tel: st,
  time: st,
  url: st,
  week: st,
  range: st
}, ts = void 0, Hr = null, oo, fc = !1, Hn = !1, p0 = /* @__PURE__ */ new Promise((e) => {
  oo = () => {
    fc = !0, e();
  };
}), Kt = typeof window < "u" && typeof fetch < "u";
ts = Kt ? /* @__PURE__ */ getComputedStyle(document.documentElement) : void 0;
var Qr = {}, Yo = {};
function u0(e, t, r, n) {
  t && Object.assign(Qr, t), Kt && !Hn && ts?.getPropertyValue("--formkit-theme") ? (oo(), Hn = !0) : e && !Hn && Kt ? c0(e) : !Hn && Kt && oo();
  const s = function(a) {
    a.addProps(["iconLoader", "iconLoaderUrl"]), a.props.iconHandler = Nl(
      a.props?.iconLoader ? a.props.iconLoader : n,
      a.props?.iconLoaderUrl ? a.props.iconLoaderUrl : r
    ), h0(a, a.props.iconHandler), a.on("created", () => {
      a?.context?.handlers && (a.context.handlers.iconClick = (i) => {
        const l = `on${i.charAt(0).toUpperCase()}${i.slice(1)}IconClick`, p = a.props[l];
        if (p && typeof p == "function")
          return (u) => p(a, u);
      }), a?.context?.fns && (a.context.fns.iconRole = (i) => {
        const l = `on${i.charAt(0).toUpperCase()}${i.slice(1)}IconClick`;
        return typeof a.props[l] == "function" ? "button" : null;
      });
    });
  };
  return s.iconHandler = Nl(n, r), s;
}
function c0(e) {
  if (!(!e || !Kt || typeof getComputedStyle != "function") && (Hn = !0, Hr = document.getElementById("formkit-theme"), e && // if we have a window object
  Kt && // we don't have an existing theme OR the theme being set up is different
  (!ts?.getPropertyValue("--formkit-theme") && !Hr || Hr?.getAttribute("data-theme") && Hr?.getAttribute("data-theme") !== e))) {
    const r = `https://cdn.jsdelivr.net/npm/@formkit/themes@${Js.startsWith("__") ? "latest" : Js}/dist/${e}/theme.css`, n = document.createElement("link");
    n.type = "text/css", n.rel = "stylesheet", n.id = "formkit-theme", n.setAttribute("data-theme", e), n.onload = () => {
      ts = getComputedStyle(document.documentElement), oo();
    }, document.head.appendChild(n), n.href = r, Hr && Hr.remove();
  }
}
function Nl(e, t) {
  return (r) => {
    if (typeof r != "string") return;
    if (r.startsWith("<svg"))
      return r;
    const n = r.startsWith("default:");
    r = n ? r.split(":")[1] : r;
    const s = r in Qr;
    let o;
    if (s)
      return Qr[r];
    if (!Yo[r]) {
      if (o = d0(r), o = Kt && typeof o > "u" ? Promise.resolve(o) : o, o instanceof Promise)
        Yo[r] = o.then((a) => !a && typeof r == "string" && !n ? o = typeof e == "function" ? e(r) : f0(r, t) : a).then((a) => (typeof r == "string" && (Qr[n ? `default:${r}` : r] = a), a));
      else if (typeof o == "string")
        return Qr[n ? `default:${r}` : r] = o, o;
    }
    return Yo[r];
  };
}
function d0(e) {
  if (Kt)
    return fc ? Fl(e) : p0.then(() => Fl(e));
}
function Fl(e) {
  const t = ts?.getPropertyValue(`--fk-icon-${e}`);
  if (t) {
    const r = atob(t);
    if (r.startsWith("<svg"))
      return Qr[e] = r, r;
  }
}
function f0(e, t) {
  const r = Js.startsWith("__") ? "latest" : Js, n = typeof t == "function" ? t(e) : `https://cdn.jsdelivr.net/npm/@formkit/icons@${r}/dist/icons/${e}.svg`;
  if (Kt)
    return fetch(`${n}`).then(async (s) => {
      const o = await s.text();
      if (o.startsWith("<svg"))
        return o;
    }).catch((s) => {
      console.error(s);
    });
}
function h0(e, t) {
  const r = /^[a-zA-Z-]+(?:-icon|Icon)$/;
  Object.keys(e.props).filter((s) => r.test(s)).forEach((s) => m0(e, t, s));
}
function m0(e, t, r) {
  const n = e.props[r], s = t(n), o = `_raw${r.charAt(0).toUpperCase()}${r.slice(1)}`, a = `on${r.charAt(0).toUpperCase()}${r.slice(1)}Click`;
  if (e.addProps([o, a]), e.on(`prop:${r}`, v0), s instanceof Promise)
    return s.then((i) => {
      e.props[o] = i;
    });
  e.props[o] = s;
}
function v0(e) {
  const t = e.origin, r = e.payload, n = t?.props?.iconHandler, s = e.name.split(":")[1], o = `_raw${s.charAt(0).toUpperCase()}${s.slice(1)}`;
  if (n && typeof n == "function") {
    const a = n(r);
    if (a instanceof Promise)
      return a.then((i) => {
        t.props[o] = i;
      });
    t.props[o] = a;
  }
}
var Rl = {
  /**
   * FormKit errors:
   */
  100: ({ data: e }) => `Only groups, lists, and forms can have children (${e.name}).`,
  101: ({ data: e }) => `You cannot directly modify the store (${e.name}). See: https://formkit.com/advanced/core#message-store`,
  102: ({
    data: [e, t]
  }) => `You cannot directly assign node.${t} (${e.name})`,
  103: ({ data: [e] }) => `Schema expressions cannot start with an operator (${e})`,
  104: ({ data: [e, t] }) => `Schema expressions cannot end with an operator (${e} in "${t}")`,
  105: ({ data: e }) => `Invalid schema expression: ${e}`,
  106: ({ data: e }) => `Cannot submit because (${e}) is not in a form.`,
  107: ({ data: [e, t] }) => `Cannot set ${e.name} to non object value: ${t}`,
  108: ({ data: [e, t] }) => `Cannot set ${e.name} to non array value: ${t}`,
  /**
   * Input specific errors:
   */
  300: ({ data: [e] }) => `Cannot set behavior prop to overscroll (on ${e.name} input) when options prop is a function.`,
  /**
   * FormKit vue errors:
   */
  600: ({ data: e }) => `Unknown input type${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} ("${e.name}")`,
  601: ({ data: e }) => `Input definition${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} is missing a schema or component property (${e.name}).`
}, Bl = {
  /**
   * Core warnings:
   */
  150: ({ data: e }) => `Schema function "${e}()" is not a valid function.`,
  151: ({ data: e }) => `No form element with id: ${e}`,
  152: ({ data: e }) => `No input element with id: ${e}`,
  /**
   * Input specific warnings:
   */
  350: ({
    data: { node: e, inputType: t }
  }) => `Invalid options prop for ${e.name} input (${t}). See https://formkit.com/inputs/${t}`,
  /**
   * Vue warnings:
   */
  650: 'Schema "$get()" must use the id of an input to access.',
  651: ({ data: e }) => `Cannot setErrors() on "${e}" because no such id exists.`,
  652: ({ data: e }) => `Cannot clearErrors() on "${e}" because no such id exists.`,
  /**
   * Deprecation warnings:
   */
  800: ({ data: e }) => `${e} is deprecated.`
}, g0 = (e, t) => {
  if (e.code in Rl) {
    const r = Rl[e.code];
    e.message = typeof r == "function" ? r(e) : r;
  }
  return t(e);
}, jl = !1;
function y0() {
  jl || (hi(g0), mi($0), jl = !0);
}
var $0 = (e, t) => {
  if (e.code in Bl) {
    const r = Bl[e.code];
    e.message = typeof r == "function" ? r(e) : r;
  }
  return t(e);
}, b0 = Object.defineProperty, _0 = Object.getOwnPropertyNames, hc = (e, t) => function() {
  return e && (t = (0, e[_0(e)[0]])(e = 0)), t;
}, x0 = (e, t) => {
  for (var r in t)
    b0(e, r, { get: t[r], enumerable: !0 });
}, Hl, mc, vc = hc({
  "packages/vue/src/bindings.ts"() {
    Hl = function(t) {
      t.ledger.count("blocking", (y) => y.blocking);
      const r = Ie(!t.ledger.value("blocking"));
      t.ledger.count("errors", (y) => y.type === "error");
      const n = Ie(!!t.ledger.value("errors"));
      let s = !1;
      wt(() => {
        s = !0;
      });
      const o = ir(
        t.store.reduce((y, I) => (I.visible && (y[I.key] = I), y), {})
      ), a = Ie(
        t.props.validationVisibility || (t.props.type === "checkbox" ? "dirty" : "blur")
      );
      t.on("prop:validationVisibility", ({ payload: y }) => {
        a.value = y;
      });
      const i = Ie(a.value === "live"), l = Ie(!1), p = (y) => {
        l.value = (y ?? []).some(
          (I) => I.name === "required"
        );
      };
      p(t.props.parsedRules), t.on("prop:parsedRules", ({ payload: y }) => p(y));
      const u = Ie(t.children.map((y) => y.uid)), c = Pe(() => {
        if (!D.state) return !1;
        if (D.state.submitted) return !0;
        if (!i.value && !D.state.settled)
          return !1;
        switch (a.value) {
          case "live":
            return !0;
          case "blur":
            return D.state.blurred;
          case "dirty":
            return D.state.dirty;
          default:
            return !1;
        }
      }), f = Pe(() => D.state.failing && c.value), d = Pe(() => D && g.value ? r.value && !n.value : D.state.dirty && !yt(D.value)), g = Ie(
        Array.isArray(t.props.parsedRules) && t.props.parsedRules.length > 0
      );
      t.on("prop:parsedRules", ({ payload: y }) => {
        g.value = Array.isArray(y) && y.length > 0;
      });
      const v = Pe(() => {
        const y = {};
        for (const I in o) {
          const B = o[I];
          (B.type !== "validation" || c.value) && (y[I] = B);
        }
        return y;
      }), $ = ir(
        t.store.reduce((y, I) => (I.type === "ui" && I.visible && (y[I.key] = I), y), {})
      ), h = Pe(() => !D.state.failing), S = ir({}), m = new Proxy(S, {
        get(...y) {
          if (!t) return "";
          const [I, B] = y;
          let te = Reflect.get(...y);
          return !te && typeof B == "string" && !ue(I, B) && !B.startsWith("__v") && wo(t).watch((W) => {
            const Ce = typeof W.config.rootClasses == "function" ? W.config.rootClasses(B, W) : {}, De = W.config.classes ? Rs(B, W, W.config.classes[B]) : {}, Ue = Rs(
              B,
              W,
              W.props[`_${B}Class`]
            ), de = Rs(
              B,
              W,
              W.props[`${B}Class`]
            );
            te = Mv(
              W,
              B,
              Ce,
              De,
              Ue,
              de
            ), I[B] = te ?? "";
          }), te;
        }
      });
      t.on("prop:rootClasses", () => {
        const y = Object.keys(S);
        for (const I of y)
          delete S[I];
      });
      const w = Pe(() => {
        if (!t) return;
        const y = [];
        D.help && y.push(`help-${t.props.id}`);
        for (const I in v.value)
          y.push(`${t.props.id}-${I}`);
        return y.length ? y.join(" ") : void 0;
      }), C = Ie(t.value), x = Ie(t.value), D = ir({
        _value: x,
        attrs: t.props.attrs,
        disabled: t.props.disabled,
        describedBy: w,
        fns: {
          length: (y) => Object.keys(y).length,
          number: (y) => Number(y),
          string: (y) => String(y),
          json: (y) => JSON.stringify(y),
          eq: J
        },
        handlers: {
          blur: (y) => {
            t && (t.store.set(
              /* @__PURE__ */ qe({ key: "blurred", visible: !1, value: !0 })
            ), typeof t.props.attrs.onBlur == "function" && t.props.attrs.onBlur(y));
          },
          touch: () => {
            const y = D.dirtyBehavior === "compare";
            if (t.store.dirty?.value && !y) return;
            const I = !J(t.props._init, t._value);
            !I && !y || t.store.set(
              /* @__PURE__ */ qe({ key: "dirty", visible: !1, value: I })
            );
          },
          DOMInput: (y) => {
            t.input(y.target.value), t.emit("dom-input-event", y);
          }
        },
        help: t.props.help,
        id: t.props.id,
        items: u,
        label: t.props.label,
        messages: v,
        didMount: !1,
        node: pi(t),
        options: t.props.options,
        defaultMessagePlacement: !0,
        slots: t.props.__slots,
        state: {
          blurred: !1,
          complete: d,
          dirty: !1,
          empty: yt(C),
          submitted: !1,
          settled: t.isSettled,
          valid: r,
          invalid: f,
          errors: n,
          rules: g,
          validationVisible: c,
          required: l,
          failing: !1,
          passing: h
        },
        type: t.props.type,
        family: t.props.family,
        ui: $,
        value: C,
        classes: m
      });
      t.on("created", () => {
        J(D.value, t.value) || (x.value = t.value, C.value = t.value, $s(C), $s(x)), (async () => (await t.settled, t && (t.props._init = St(t.value))))();
      }), t.on("mounted", () => {
        D.didMount = !0;
      }), t.on("settled", ({ payload: y }) => {
        D.state.settled = y;
      });
      function _(y) {
        (Array.isArray(y) ? y : Object.keys(y)).forEach((B) => {
          B = rn(B), ue(D, B) || (D[B] = t.props[B]), t.on(`prop:${B}`, ({ payload: te }) => {
            D[B] = te;
          });
        });
      }
      _((() => {
        const y = [
          "__root",
          "help",
          "label",
          "disabled",
          "options",
          "type",
          "attrs",
          "preserve",
          "preserveErrors",
          "id",
          "dirtyBehavior"
        ], I = /^[a-zA-Z-]+(?:-icon|Icon)$/, B = Object.keys(t.props).filter((te) => I.test(te));
        return y.concat(B);
      })());
      function k(y) {
        y.props && _(y.props);
      }
      t.props.definition && k(t.props.definition), t.on("added-props", ({ payload: y }) => _(y)), t.on("input", ({ payload: y }) => {
        t.type !== "input" && !qn(y) && !Wi(y) ? x.value = Ma(y) : (x.value = y, $s(x));
      }), t.on("commitRaw", ({ payload: y }) => {
        t.type !== "input" && !qn(y) && !Wi(y) ? C.value = x.value = Ma(y) : (C.value = x.value = y, $s(C)), t.emit("modelUpdated");
      }), t.on("commit", ({ payload: y }) => {
        if ((!D.state.dirty || D.dirtyBehavior === "compare") && t.isCreated && s)
          if (!t.store.validating?.value)
            D.handlers.touch();
          else {
            const I = t.on("message-removed", ({ payload: B }) => {
              B.key === "validating" && (D.handlers.touch(), t.off(I));
            });
          }
        d && t.type === "input" && n.value && !Y(t.props.preserveErrors) && t.store.filter(
          (I) => !(I.type === "error" && I.meta?.autoClear === !0)
        ), t.type === "list" && t.sync && (u.value = t.children.map((I) => I.uid)), D.state.empty = yt(y);
      });
      const b = async (y) => {
        y.type === "ui" && y.visible && !y.meta.showAsMessage ? $[y.key] = y : y.visible ? o[y.key] = y : y.type === "state" && (D.state[y.key] = !!y.value);
      };
      t.on("message-added", (y) => b(y.payload)), t.on("message-updated", (y) => b(y.payload)), t.on("message-removed", ({ payload: y }) => {
        delete $[y.key], delete o[y.key], delete D.state[y.key];
      }), t.on("settled:blocking", () => {
        r.value = !0;
      }), t.on("unsettled:blocking", () => {
        r.value = !1;
      }), t.on("settled:errors", () => {
        n.value = !1;
      }), t.on("unsettled:errors", () => {
        n.value = !0;
      }), ur(c, (y) => {
        y && (i.value = !0);
      }), t.context = D, t.emit("context", t, !1), t.on("destroyed", () => {
        t.context = void 0, t = null;
      });
    }, mc = Hl;
  }
}), w0 = {};
x0(w0, {
  defaultConfig: () => _i
});
var _i, k0 = hc({
  "packages/vue/src/defaultConfig.ts"() {
    vc(), _i = (e = {}) => {
      y0();
      const {
        rules: t = {},
        locales: r = {},
        inputs: n = {},
        messages: s = {},
        locale: o = void 0,
        theme: a = void 0,
        iconLoaderUrl: i = void 0,
        iconLoader: l = void 0,
        icons: p = {},
        ...u
      } = e, c = ty({
        ...ey,
        ...t || {}
      }), f = yy(
        vr({ en: gy, ...r || {} }, s)
      ), d = $y(l0, n), g = u0(a, p, i, l);
      return vr(
        {
          plugins: [d, g, mc, f, c],
          ...o ? { config: { locale: o } } : {}
        },
        u || {},
        !0
      );
    };
  }
}), S0 = typeof window > "u", qo = /* @__PURE__ */ new Map();
function C0(e, t) {
  !S0 || !e || (qo.has(e) || qo.set(e, /* @__PURE__ */ new Set()), qo.get(e)?.add(t));
}
var gc = typeof window > "u", Wn = {}, sn = {}, Je, gt = /* @__PURE__ */ new WeakMap(), D0 = "__raw__", A0 = /[a-zA-Z0-9\-][cC]lass$/;
function T0(e, t) {
  const r = Ie(null);
  if (e === "get") {
    const s = {};
    return r.value = O0.bind(null, s), r;
  }
  const n = e.split(".");
  return Ot(() => {
    r.value = xi(
      qn(t) ? t.value : t,
      n
    );
  }), r;
}
function xi(e, t) {
  if (Array.isArray(e)) {
    for (const s of e) {
      const o = s !== !1 && xi(s, t);
      if (o !== void 0) return o;
    }
    return;
  }
  let r, n = e;
  for (const s in t) {
    const o = t[s];
    if (typeof n != "object" || n === null) {
      r = void 0;
      break;
    }
    const a = n[o];
    if (Number(s) === t.length - 1 && a !== void 0) {
      r = typeof a == "function" ? a.bind(n) : a;
      break;
    }
    n = a;
  }
  return r;
}
function O0(e, t) {
  if (typeof t != "string") return yr(650);
  if (t in e || (e[t] = Ie(void 0)), e[t].value === void 0) {
    e[t].value = null;
    const r = ls(t);
    r && (e[t].value = r.context), Rm(t, ({ payload: n }) => {
      e[t].value = ps(n) ? n.context : n;
    });
  }
  return e[t].value;
}
function Zl(e, t, r) {
  function n(d, g) {
    const v = c(xt(g.if), { if: !0 }), $ = p(d, g.then), h = g.else ? p(d, g.else) : null;
    return [v, $, h];
  }
  function s(d, g) {
    const v = c(xt(d.if));
    let $ = () => g, h = () => g;
    return typeof d.then == "object" ? h = o(d.then, void 0) : typeof d.then == "string" && d.then?.startsWith("$") ? h = c(xt(d.then)) : h = () => d.then, ue(d, "else") && (typeof d.else == "object" ? $ = o(d.else) : typeof d.else == "string" && d.else?.startsWith("$") ? $ = c(xt(d.else)) : $ = () => d.else), () => v() ? h() : $();
  }
  function o(d, g, v = {}) {
    const $ = new Set(Object.keys(d || {})), h = g ? c(xt(g)) : () => ({}), S = [
      (m) => {
        const w = h();
        for (const C in w)
          $.has(C) || (m[C] = w[C]);
      }
    ];
    if (d) {
      if (Yr(d))
        return s(
          d,
          v
        );
      for (let m in d) {
        const w = d[m];
        let C;
        const x = typeof w == "string";
        m.startsWith(D0) ? (m = m.substring(7), C = () => w) : x && w.startsWith("$") && w.length > 1 && !(w.startsWith("$reset") && A0.test(m)) ? C = c(xt(w)) : typeof w == "object" && Yr(w) ? C = s(w, void 0) : typeof w == "object" && mr(w) ? C = o(w) : C = () => w, S.push((D) => {
          D[m] = C();
        });
      }
    }
    return () => {
      const m = Array.isArray(d) ? [] : {};
      return S.forEach((w) => w(m)), m;
    };
  }
  function a(d, g) {
    let v = null, $ = () => null, h = !1, S = null, m = null, w = null, C = !1;
    const x = Lv(g);
    if (Ir(x) ? (v = x.$el, $ = x.$el !== "text" ? o(x.attrs, x.bind) : () => null) : Jn(x) ? (typeof x.$cmp == "string" ? ue(d, x.$cmp) ? v = d[x.$cmp] : (v = x.$cmp, C = !0) : v = x.$cmp, $ = o(x.props, x.bind)) : Yr(x) && ([h, S, m] = n(d, x)), !Yr(x) && "if" in x ? h = c(xt(x.if)) : !Yr(x) && v === null && (h = () => !0), "children" in x && x.children)
      if (typeof x.children == "string")
        if (x.children.startsWith("$slots."))
          v = v === "text" ? "slot" : v, S = c(xt(x.children));
        else if (x.children.startsWith("$") && x.children.length > 1) {
          const D = c(xt(x.children));
          S = () => String(D());
        } else
          S = () => String(x.children);
      else if (Array.isArray(x.children))
        S = p(d, x.children);
      else {
        const [D, _, A] = n(d, x.children);
        S = (k) => D && D() ? _ && _(k) : A && A(k);
      }
    if (Jn(x))
      if (S) {
        const D = S;
        S = (_) => ({
          default(A, k, b) {
            const y = Je;
            k && (Je = k);
            const I = b?.length || 0;
            if (b)
              for (let te = b.length - 1; te >= 0; te--)
                gt.get(Je)?.unshift(b[te]);
            _ && gt.get(Je)?.unshift(_), A && gt.get(Je)?.unshift(A);
            const B = D(_);
            A && gt.get(Je)?.shift(), _ && gt.get(Je)?.shift();
            for (let te = 0; te < I; te++)
              gt.get(Je)?.shift();
            return Je = y, B;
          }
        }), S.slot = !0;
      } else
        S = () => ({});
    if ("for" in x && x.for) {
      const D = x.for.length === 3 ? x.for[2] : x.for[1];
      w = [
        typeof D == "string" && D.startsWith("$") ? c(xt(D)) : () => D,
        x.for[0],
        x.for.length === 3 ? String(x.for[1]) : null
      ];
    }
    return [h, v, $, S, m, w, C];
  }
  function i(d, g) {
    const v = d(g), $ = Je, h = gt.get($)?.slice() || [];
    return Object.keys(v).reduce((S, m) => {
      const w = v && v[m];
      return S[m] = (C) => w && w(C, $, h) || null, S;
    }, {});
  }
  function l(d, g) {
    const [v, $, h, S, m, w, C] = a(d, g);
    let x = ((D) => {
      if (v && $ === null && S)
        return v() ? S(D) : m && m(D);
      if ($ && (!v || v())) {
        if ($ === "text" && S)
          return hf(String(S()));
        if ($ === "slot" && S) return S(D);
        const _ = C ? mf($) : $, A = S?.slot ? i(S, D) : null;
        return Da(
          _,
          h(),
          A || (S ? S(D) : [])
        );
      }
      return typeof m == "function" ? m(D) : m;
    });
    if (w) {
      const D = x, [_, A, k] = w;
      x = (() => {
        const b = _(), y = Number.isFinite(b) ? Array(Number(b)).fill(0).map((ne, W) => W) : b, I = [];
        if (typeof y != "object") return null;
        const B = gt.get(Je) || [], te = Array.isArray(y);
        for (const ne in y) {
          if (te && ne in Array.prototype) continue;
          const W = Object.defineProperty(
            {
              ...B.reduce(
                (Ce, De) => Ce.__idata ? { ...Ce, ...De } : De,
                {}
              ),
              [A]: y[ne],
              ...k !== null ? { [k]: te ? Number(ne) : ne } : {}
            },
            "__idata",
            { enumerable: !1, value: !0 }
          );
          B.unshift(W), I.push(D.bind(null, W)()), B.shift();
        }
        return I;
      });
    }
    return x;
  }
  function p(d, g) {
    if (Array.isArray(g)) {
      const $ = g.map(l.bind(null, d));
      return (h) => $.map((S) => S(h));
    }
    const v = l(d, g);
    return ($) => v($);
  }
  const u = [];
  function c(d, g = {}) {
    const v = /* @__PURE__ */ new WeakMap();
    return u.push(($, h) => {
      v.set(
        h,
        d.provide((S) => $(S, g))
      );
    }), () => v.get(Je)();
  }
  function f(d, g) {
    r ?? (r = $c(t));
    const [v, $] = ue(Wn, r) ? Wn[r] : [p(e, t), u];
    return gc || (sn[r] ?? (sn[r] = 0), sn[r]++, Wn[r] = [v, $]), $.forEach((h) => {
      h(d, g);
    }), () => (Je = g, v());
  }
  return f;
}
function yc(e, t) {
  const r = gt.get(Je) || [];
  let n;
  return r.length && (n = xi(r, e.split("."))), n === void 0 ? t : n;
}
function E0(e, t) {
  return new Proxy(e, {
    get(...r) {
      let n;
      const s = r[1];
      if (typeof s == "string") {
        const o = Je;
        Je = t, n = yc(s, void 0), Je = o;
      }
      return n !== void 0 ? n : Reflect.get(...r);
    }
  });
}
function Wl(e, t, r) {
  return e(
    (n, s = {}) => n.reduce((o, a) => {
      if (a.startsWith("slots.")) {
        const i = a.substring(6), l = () => t.slots && ue(t.slots, i) && typeof t.slots[i] == "function";
        if (s.if)
          o[a] = l;
        else if (t.slots) {
          const p = E0(t, r);
          o[a] = () => l() ? t.slots[i](p) : null;
        }
      } else {
        const i = T0(a, t);
        o[a] = () => yc(a, i.value);
      }
      return o;
    }, {}),
    r
  );
}
function Kl(e, t, r) {
  if (t ?? (t = $c(e)), sn[t]--, sn[t] === 0) {
    delete sn[t];
    const [, n] = Wn[t];
    delete Wn[t], n.length = 0;
  }
  gt.delete(r);
}
function $c(e) {
  return JSON.stringify(e, (t, r) => typeof r == "function" ? r.toString() : r);
}
var bc = /* @__PURE__ */ _o({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: !0
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    },
    memoKey: {
      type: String,
      required: !1
    }
  },
  emits: ["mounted"],
  setup(e, t) {
    const r = Aa();
    let n = {};
    gt.set(n, []);
    const s = { FormKit: pi(xc), ...e.library };
    let o = Zl(s, e.schema, e.memoKey), a, i;
    gc || ur(
      () => e.schema,
      (p, u) => {
        const c = n;
        n = {}, gt.set(n, []), o = Zl(s, e.schema, e.memoKey), a = Wl(o, i, n), p === u && (r?.proxy?.$forceUpdate)(), Kl(e.schema, e.memoKey, c);
      },
      { deep: !0 }
    ), Ot(() => {
      i = Object.assign(ir(e.data ?? {}), {
        slots: t.slots
      }), t.slots, a = Wl(o, i, n);
    });
    function l() {
      Kl(e.schema, e.memoKey, n), i && (i.node && i.node.destroy(), i.slots = null, i = null), a = null;
    }
    return li(() => t.emit("mounted")), cf(l), C0(Aa()?.appContext.app, l), () => a ? a() : null;
  }
}), I0 = bc, L0 = typeof window > "u", Ul = /* @__PURE__ */ Symbol("FormKitParent"), M0 = /* @__PURE__ */ Symbol("FormKitComponentCallback");
function P0(e, t) {
  const r = Z0(e, t);
  if (r.props.definition || ot(600, r), r.props.definition.component)
    return () => Da(
      r.props.definition?.component,
      {
        context: r.context
      },
      { ...t.slots }
    );
  const n = Ie([]);
  let s = r.props.definition.schemaMemoKey;
  const o = () => {
    const p = r.props?.definition?.schema;
    p || ot(601, r), typeof p == "function" ? (n.value = p({ ...e.sectionsSchema || {} }), (s && e.sectionsSchema || "memoKey" in p && typeof p.memoKey == "string") && (s = (s ?? p?.memoKey) + JSON.stringify(e.sectionsSchema))) : n.value = p;
  };
  o(), L0 || r.on("schema", () => {
    s += "♻️", o();
  }), t.emit("node", r);
  const a = r.props.definition.library, i = {
    FormKit: pi(_c),
    ...a,
    ...e.library ?? {}
  };
  function l() {
    r.emit("mounted");
  }
  return t.expose({ node: r }), () => Da(
    bc,
    {
      schema: n.value,
      data: r.context,
      onMounted: l,
      library: i,
      memoKey: s
    },
    { ...t.slots }
  );
}
var _c = /* @__PURE__ */ _o(
  P0,
  {
    props: by,
    inheritAttrs: !1
  }
), xc = _c, V0 = /* @__PURE__ */ Symbol();
function zl(e) {
  if (typeof window < "u" && globalThis.__FORMKIT_CONFIGS__) {
    const t = globalThis.__FORMKIT_CONFIGS__.indexOf(e);
    t !== -1 && globalThis.__FORMKIT_CONFIGS__.splice(t, 1);
  }
}
function N0(e, t) {
  return e.component(t.alias || "FormKit", xc).component(t.schemaAlias || "FormKitSchema", I0), {
    get: ls,
    setLocale: (r) => {
      t.config?.rootConfig && (t.config.rootConfig.locale = r);
    },
    clearErrors: Vv,
    setErrors: Pv,
    submit: Iu,
    reset: Lu
  };
}
var wc = /* @__PURE__ */ Symbol.for("FormKitOptions"), F0 = /* @__PURE__ */ Symbol.for("FormKitConfig"), R0 = {
  install(e, t) {
    const r = Object.assign(
      {
        alias: "FormKit",
        schemaAlias: "FormKitSchema"
      },
      typeof t == "function" ? t() : t
    ), n = Bm(r.config || {});
    r.config = { rootConfig: n }, e.config.globalProperties.$formkit = N0(e, r), e.provide(wc, r), e.provide(F0, n), typeof window < "u" && (globalThis.__FORMKIT_CONFIGS__ = (globalThis.__FORMKIT_CONFIGS__ || []).concat([n]));
    const s = e;
    if (typeof s.onUnmount == "function")
      s.onUnmount(() => {
        zl(n);
      });
    else {
      const o = e.unmount.bind(e);
      e.unmount = () => (zl(n), o());
    }
  }
}, B0 = typeof window < "u", Go = [
  // Boolean props
  "ignore",
  "disabled",
  "preserve",
  // String props
  "help",
  "label",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
], j0 = ["disabled", "ignore", "preserve"];
function Yl(e, t) {
  t.classes && Object.keys(t.classes).forEach(
    (r) => {
      typeof r == "string" && (e.props[`_${r}Class`] = t.classes[r], tn(t.classes[r]) && r === "inner" && Object.values(t.classes[r]));
    }
  );
}
function H0(e) {
  return e ? ["Submit", "SubmitRaw", "SubmitInvalid"].reduce(
    (r, n) => {
      const s = `on${n}`;
      return s in e && typeof e[s] == "function" && (r[s] = e[s]), r;
    },
    {}
  ) : {};
}
function Z0(e, t, r = {}) {
  const n = Object.assign({}, ys(wc) || {}, r), s = ys(V0, Ie(B0 ? document : void 0)), o = ys(M0, () => {
  }), a = Aa(), i = H0(a?.vnode.props), l = ["modelValue", "model-value"].some(
    (x) => x in (a?.vnode.props ?? {})
  );
  let p = !1;
  li(() => {
    p = !0;
  });
  const u = e.modelValue !== void 0 ? e.modelValue : St(t.attrs.value);
  function c() {
    const x = {
      ...jr(e),
      ...i,
      type: e.type ?? "text",
      __root: s.value,
      __slots: t.slots
    }, D = $l(jr(t.attrs), Go);
    D.key || (D.key = kn()), x.attrs = D;
    const _ = bl(jr(t.attrs), Go);
    for (const k in _)
      j0.includes(k) && _[k] === "" && (_[k] = !0), x[rn(k)] = _[k];
    const A = { props: {} };
    return Yl(A, e), Object.assign(x, A.props), typeof x.type != "string" && (x.definition = x.type, delete x.type), x;
  }
  const f = c(), d = f.ignore ? null : e.parent || ys(Ul, null), g = Ev(
    vr(
      n || {},
      {
        name: e.name || void 0,
        value: u,
        parent: d,
        plugins: (n.plugins || []).concat(e.plugins ?? []),
        config: e.config || {},
        props: f,
        index: e.index,
        sync: !!Y(t.attrs.sync || t.attrs.dynamic)
      },
      !1,
      !0
    )
  );
  o(g), g.props.definition || ot(600, g);
  const v = Ie(
    new Set(
      Array.isArray(g.props.__propDefs) ? g.props.__propDefs : Object.keys(g.props.__propDefs ?? {})
    )
  );
  g.on(
    "added-props",
    ({ payload: x }) => {
      (Array.isArray(x) ? x : Object.keys(x ?? {})).forEach((_) => v.value.add(_));
    }
  );
  const $ = Pe(
    () => Go.concat([...v.value]).reduce((x, D) => (typeof D == "string" ? (x.push(rn(D)), x.push(Du(D))) : x.push(D), x), [])
  );
  Ot(() => Yl(g, e));
  const h = jr(e);
  for (const x in h)
    ur(
      () => e[x],
      () => {
        e[x] !== void 0 && (g.props[x] = e[x]);
      }
    );
  Ot(() => {
    g.props.__root = s.value;
  });
  const S = /* @__PURE__ */ new Set(), m = jr(t.attrs);
  Ot(() => {
    w(bl(m, $.value));
  });
  function w(x) {
    S.forEach((D) => {
      D(), S.delete(D);
    });
    for (const D in x) {
      const _ = rn(D);
      S.add(
        ur(
          () => t.attrs[D],
          () => {
            g.props[_] = t.attrs[D];
          }
        )
      );
    }
  }
  if (Ot(() => {
    const x = $l(jr(t.attrs), $.value);
    "multiple" in x && (x.multiple = Y(x.multiple)), typeof x.onBlur == "function" && (x.onBlur = $m(x.onBlur)), g.props.attrs = Object.assign({}, g.props.attrs || {}, x);
  }), Ot(() => {
    const x = (e.errors ?? []).map(
      (D) => /* @__PURE__ */ qe({
        key: di(D),
        type: "error",
        value: D,
        meta: { source: "prop" }
      })
    );
    g.store.apply(
      x,
      (D) => D.type === "error" && D.meta.source === "prop"
    );
  }), g.type !== "input") {
    const x = `${g.name}-prop`;
    Ot(() => {
      const D = e.inputErrors ?? {}, _ = Object.keys(D);
      _.length || g.clearErrors(!0, x);
      const A = _.reduce((k, b) => {
        let y = D[b];
        return typeof y == "string" && (y = [y]), Array.isArray(y) && (k[b] = y.map(
          (I) => /* @__PURE__ */ qe({
            key: I,
            type: "error",
            value: I,
            meta: { source: x }
          })
        )), k;
      }, {});
      g.store.apply(
        A,
        (k) => k.type === "error" && k.meta.source === x
      );
    });
  }
  Ot(() => Object.assign(g.config, e.config)), g.type !== "input" && Ca(Ul, g);
  let C;
  return g.on("modelUpdated", () => {
    t.emit("inputRaw", g.context?.value, g), p && t.emit("input", g.context?.value, g), l && g.context && (C = St(g.value), t.emit("update:modelValue", Ma(g.value)));
  }), l && (ur(
    df(e, "modelValue"),
    (x) => {
      J(C, x) || g.input(x, !1);
    },
    { deep: !0 }
  ), g.value !== u && g.emit("modelUpdated")), ff(() => g.destroy()), g;
}
var W0 = /* @__PURE__ */ le("messages", () => ({
  $el: "ul",
  if: "$fns.length($messages)"
})), K0 = /* @__PURE__ */ le("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
}));
W0(K0("$message.value"));
var U0 = /* @__PURE__ */ le("summary", () => ({
  $el: "div",
  attrs: {
    "aria-live": "polite"
  }
})), z0 = /* @__PURE__ */ le("summaryInner", () => ({
  $el: "div",
  if: "$summaries.length && $showSummaries"
})), Y0 = /* @__PURE__ */ le("messages", () => ({
  $el: "ul",
  if: "$summaries.length && $showSummaries"
})), q0 = /* @__PURE__ */ le("message", () => ({
  $el: "li",
  for: ["summary", "$summaries"],
  attrs: {
    key: "$summary.key",
    "data-message-type": "$summary.type"
  }
})), G0 = /* @__PURE__ */ le("summaryHeader", () => ({
  $el: "h2",
  attrs: {
    id: "$id"
  }
})), X0 = /* @__PURE__ */ le("messageLink", () => ({
  $el: "a",
  attrs: {
    id: "$summary.key",
    href: '$: "#" + $summary.id',
    onClick: "$jumpLink"
  }
}));
U0(
  z0(
    G0("$summaryHeader"),
    Y0(q0(X0("$summary.message")))
  )
);
k0();
vc();
function J0(e, t) {
  var r = !1;
  return function(...n) {
    r || (e.call(null, ...n), r = !0, setTimeout(function() {
      r = !1;
    }, t));
  };
}
function kc(e) {
  return e.split(" ").filter((t) => t);
}
var Q0 = typeof window < "u";
function $t(e, t, r = !1) {
  if (!t)
    return;
  const n = kc(t);
  if (n.length && !n.includes("longTouch"))
    for (const s of e) {
      if (!cs(s) || !Lt.has(s)) {
        s.classList.add(...n);
        continue;
      }
      const o = [], a = Lt.get(s);
      if (a) {
        for (const i of n)
          s.classList.contains(i) ? s.classList.contains(i) && r === !1 && o.push(i) : s.classList.add(i);
        a.privateClasses = o, Lt.set(s, a);
      }
    }
}
function vn(e, t) {
  if (!t)
    return;
  const r = kc(t);
  if (r.length)
    for (const n of e) {
      if (!cs(n)) {
        n.classList.remove(...r);
        continue;
      }
      const s = Lt.get(n);
      if (s)
        for (const o of r)
          s.privateClasses.includes(o) || n.classList.remove(o);
    }
}
function Sc(e) {
  let t = e.parentNode;
  for (; t !== null && t.nodeType === 1 && t instanceof HTMLElement; ) {
    const n = window.getComputedStyle(t).getPropertyValue("overflow");
    if (n === "scroll" || n === "auto")
      return t;
    t = t.parentNode;
  }
  return document.documentElement;
}
function e$(e) {
  if (!(e.e instanceof TouchEvent))
    return;
  const t = e.e.touches[0].clientX, r = e.e.touches[0].clientY;
  let n = document.elementFromPoint(t, r);
  if (!cs(n))
    return;
  let s, o = !0;
  for (; n && o; ) {
    if (Lt.has(n) || ft.has(n)) {
      o = !1, s = ft.has(n);
      break;
    }
    n = n.parentNode;
  }
  if (s) {
    const a = ft.get(n);
    return a ? {
      parent: {
        el: n,
        data: a
      }
    } : void 0;
  } else {
    const a = Lt.get(n);
    if (!a)
      return;
    const i = ft.get(n.parentNode);
    return i ? {
      node: {
        el: n,
        data: a
      },
      parent: {
        el: n.parentNode,
        data: i
      }
    } : void 0;
  }
}
function cs(e) {
  return e instanceof HTMLElement && e.parentNode instanceof HTMLElement;
}
function Cc(e, t) {
  const r = new AbortController();
  for (const n in t) {
    const s = t[n];
    e.addEventListener(n, s, {
      signal: r.signal,
      passive: !1
    });
  }
  return r;
}
function wi(e, t, r = !1) {
  const n = window.getComputedStyle(e), s = [
    "position",
    "z-index",
    "top",
    "left",
    "x",
    "pointer-events",
    "y",
    "transform-origin",
    "filter",
    "-webkit-text-fill-color"
  ];
  for (const o of Array.from(n))
    r === !1 && o && s.includes(o) || t.style.setProperty(
      o,
      n.getPropertyValue(o),
      n.getPropertyPriority(o)
    );
  for (const o of Array.from(e.children)) {
    if (!cs(o))
      continue;
    const a = t.children[Array.from(e.children).indexOf(o)];
    wi(o, a, r);
  }
}
function Nr(e) {
  return e instanceof DragEvent ? { x: e.clientX, y: e.clientY } : { x: e.touches[0].clientX, y: e.touches[0].clientY };
}
var Et = {
  selectedNodes: Array(),
  activeNode: void 0,
  isTouch: !1
};
function ql(e = {}) {
  return (t) => {
    const r = ft.get(t);
    if (!r)
      return;
    const n = {
      ...r.config,
      multiDragConfig: e
    };
    return {
      setup() {
        n.handleDragstart = e.multiHandleDragstart || s$, n.handleTouchstart = e.multiHandleTouchstart || a$, n.handleEnd = e.multiHandleEnd || r$, n.reapplyDragClasses = e.multiReapplyDragClasses || t$, r.config = n, n.multiDragConfig.plugins?.forEach((s) => {
          s(t)?.tearDown?.();
        }), n.multiDragConfig.plugins?.forEach((s) => {
          s(t)?.setup?.();
        });
      },
      tearDownNodeRemap(s) {
        n.multiDragConfig?.plugins?.forEach((o) => {
          o(s.parent)?.tearDownNodeRemap?.(s);
        });
      },
      tearDownNode(s) {
        n.multiDragConfig?.plugins?.forEach((o) => {
          o(s.parent)?.tearDownNode?.(s);
        });
      },
      setupNodeRemap(s) {
        n.multiDragConfig?.plugins?.forEach((o) => {
          o(s.parent)?.setupNodeRemap?.(s);
        });
      },
      setupNode(s) {
        n.multiDragConfig?.plugins?.forEach((o) => {
          o(s.parent)?.setupNode?.(s);
        });
      }
    };
  };
}
function t$(e, t) {
  if (!H)
    return;
  const r = "touchedNode" in H ? t.config.multiDragConfig.touchDropZoneClass : t.config.multiDragConfig.dropZoneClass;
  H.draggedNodes.map((s) => s.el).includes(e) && $t([e], r, !0);
}
function r$(e) {
  !H || H && "touchedNode" in H && "touchMoving" in H && !H.touchMoving || (Fc(e, H), n$(e, H), Tc());
}
function n$(e, t) {
  const r = e.targetData.parent.data.config.multiDragConfig, n = e.targetData.parent.data.config.selectionsConfig?.selectedClass, s = t && "touchedNode" in t;
  n && vn(
    Et.selectedNodes.map((a) => a.el),
    n
  ), Et.selectedNodes = [], Et.activeNode = void 0;
  const o = s ? r.selectionDropZoneClass : r.touchSelectionDraggingClass;
  vn(
    t.draggedNodes.map((a) => a.el),
    o
  );
}
function s$(e) {
  e.e instanceof DragEvent && o$({
    e: e.e,
    targetData: e.targetData
  });
}
function o$(e) {
  const t = Pc(e);
  Et.isTouch = !1;
  const r = e.targetData.parent.data.config.multiDragConfig, n = e.targetData.parent.data.getValues(
    e.targetData.parent.el
  );
  let s = Et.selectedNodes.length ? Et.selectedNodes.map((a) => a.data.value) : r.selections && r.selections(n, e.targetData.parent.el);
  if (s === void 0)
    return;
  if (!s.includes(e.targetData.node.data.value)) {
    s = [e.targetData.node.data.value, ...s];
    const a = e.targetData.parent.data.config.selectionsConfig;
    $t([e.targetData.node.el], a?.selectedClass, !0), Et.selectedNodes.push(e.targetData.node);
  }
  const o = e.targetData.node.el.style.zIndex;
  if (t.originalZIndex = o, e.targetData.node.el.style.zIndex = "9999", Array.isArray(s) && s.length) {
    const a = e.targetData.node.el.getBoundingClientRect(), [i, l] = [
      e.e.clientX - a.left,
      e.e.clientY - a.top
    ];
    Ac(Dc(e, s, t, i, l));
  } else {
    const a = e.targetData.parent.data.config;
    Mc(
      t.draggedNode.el,
      a.draggingClass,
      a.dropZoneClass
    );
  }
}
function a$(e) {
  e.e instanceof TouchEvent && i$({
    e: e.e,
    targetData: e.targetData
  });
}
function i$(e) {
  const t = Rc(e);
  Et.isTouch = !0, Et.activeNode = e.targetData.node;
  const r = e.targetData.parent.data.config.multiDragConfig, n = e.targetData.parent.data.getValues(
    e.targetData.parent.el
  );
  let s = [];
  e.targetData.parent.data.config.selectionsConfig ? s = Et.selectedNodes.map((a) => a.data.value) : s = r.selections && r.selections(n, e.targetData.parent.el), s = [e.targetData.node.data.value, ...s];
  const o = e.targetData.parent.data.config.selectionsConfig;
  $t([e.targetData.node.el], o?.selectedClass, !0), Array.isArray(s) && s.length ? Ac(
    Dc(
      e,
      s,
      t,
      t.touchStartLeft,
      t.touchStartTop
    )
  ) : jc(e, t), Hc(e, t);
}
function Dc(e, t, r, n, s) {
  for (const i of e.targetData.parent.data.enabledNodes)
    i.el !== r.draggedNode.el && t.includes(i.data.value) && r.draggedNodes.push(i);
  const o = e.targetData.parent.data.config.multiDragConfig, a = r.draggedNodes.map((i) => {
    const l = i.el.cloneNode(!0);
    return wi(i.el, l, !0), e.e instanceof DragEvent && $t([l], o.draggingClass), l;
  });
  return setTimeout(() => {
    e.e instanceof DragEvent && $t(
      r.draggedNodes.map((i) => i.el),
      o.dropZoneClass
    );
  }), r.clonedDraggedEls = a, { data: e, state: r, x: n, y: s };
}
function Ac({
  data: e,
  state: t,
  x: r,
  y: n
}) {
  const s = document.createElement("div");
  for (const a of t.clonedDraggedEls)
    a instanceof HTMLElement && (a.style.pointerEvents = "none"), s.append(a);
  const { width: o } = t.draggedNode.el.getBoundingClientRect();
  s.style.cssText = `
        display: flex;
        flex-direction: column;
        width: ${o}px;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        left: -9999px
      `, document.body.append(s), e.e instanceof DragEvent ? (e.e.dataTransfer?.setDragImage(s, r, n), setTimeout(() => {
    s.remove();
  })) : "touchedNode" in t && (t.touchedNode = s);
}
var Gl = [
  {
    transform: "translateY(100%)"
  },
  {
    transform: "translateY(0)"
  }
], Xl = [
  {
    transform: "translateY(-100%)"
  },
  {
    transform: "translateY(0)"
  }
], Xo = [
  {
    transform: "translateX(100%)"
  },
  {
    transform: "translateX(0)"
  }
], Jo = [
  {
    transform: "translateX(-100%)"
  },
  {
    transform: "translateX(0)"
  }
];
function Ao(e = {}) {
  return (t) => {
    const r = ft.get(t);
    if (r)
      return {
        setup() {
          r.config.remapFinished = () => {
          }, document.head.querySelector("[data-drag-and-drop]");
        },
        setupNodeRemap(n) {
          if (!H)
            return;
          const s = e.duration || 150;
          if (n.nodeData.value === H.draggedNode.data.value) {
            switch (H.incomingDirection) {
              case "below":
                At(n.node, Gl, s);
                break;
              case "above":
                At(n.node, Xl, s);
                break;
              case "left":
                At(n.node, Jo, s);
                break;
              case "right":
                At(n.node, Xo, s);
                break;
            }
            return;
          }
          if (!H.affectedNodes.map((u) => u.data.value).includes(n.nodeData.value))
            return;
          const o = n.node.getBoundingClientRect(), a = H.affectedNodes.findIndex(
            (u) => u.data.value === n.nodeData.value
          ), l = H.draggedNode.data.index >= H.targetIndex;
          let p;
          if (l ? p = H.affectedNodes[a + 1] ? H.affectedNodes[a + 1] : H.affectedNodes[a - 1] : p = H.affectedNodes[a - 1] ? H.affectedNodes[a - 1] : H.affectedNodes[a + 1], p) {
            const u = Math.abs(
              o.x - p.el.getBoundingClientRect().x
            ), c = Math.abs(
              o.y - p.el.getBoundingClientRect().y
            );
            u > c && l ? At(n.node, Jo, s) : u > c && !l && At(n.node, Xo, s);
          } else
            switch (H.incomingDirection) {
              case "below":
                At(n.node, Xl, s);
                break;
              case "above":
                At(n.node, Gl, s);
                break;
              case "left":
                At(n.node, Xo, s);
                break;
              case "right":
                At(n.node, Jo, s);
                break;
            }
        }
      };
  };
}
function At(e, t, r) {
  H && (H.preventEnter = !0, e.animate(t, {
    duration: r
  }), setTimeout(() => {
    H && (H.swappedNodeValue = void 0, H.remapJustFinished = !0, H.lastTargetValue = void 0, H.preventEnter = !1);
  }, r));
}
var Jl = {
  up: [0, -1],
  down: [0, 1],
  left: [-1, 0],
  right: [1, 0]
}, Lt = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), H = void 0;
function Tc() {
  H = void 0;
}
function Oc(e) {
  return H = {
    ascendingDirection: !1,
    incomingDirection: void 0,
    enterCount: 0,
    targetIndex: 0,
    affectedNodes: [],
    lastValue: void 0,
    activeNode: void 0,
    lastTargetValue: void 0,
    remapJustFinished: !1,
    preventEnter: !1,
    clonedDraggedEls: [],
    swappedNodeValue: !1,
    originalZIndex: void 0,
    ...e
  }, H;
}
function l$(e, t) {
  return H = {
    ...e,
    ...t
  }, H;
}
function Ec(e) {
  const { x: t, y: r } = Nr(e.e);
  return {
    coordinates: {
      x: t,
      y: r
    },
    draggedNode: {
      el: e.targetData.node.el,
      data: e.targetData.node.data
    },
    draggedNodes: [
      {
        el: e.targetData.node.el,
        data: e.targetData.node.data
      }
    ],
    initialIndex: e.targetData.node.data.index,
    initialParent: {
      el: e.targetData.parent.el,
      data: e.targetData.parent.data
    },
    lastParent: {
      el: e.targetData.parent.el,
      data: e.targetData.parent.data
    },
    scrollParent: Sc(e.targetData.node.el)
  };
}
function p$(e, t) {
  const r = Ic(e), s = [
    ...Ha(
      t.targetData.parent.el,
      t.targetData.parent.data
    ).filter((o) => !r.includes(o))
  ];
  s.splice(t.targetData.node.data.index, 0, ...r), e.lastTargetValue = t.targetData.node.data.value, Za(t.targetData.parent.el, t.targetData.parent.data, [
    ...s
  ]);
}
function Ha(e, t) {
  return [...t.getValues(e)];
}
function Za(e, t, r) {
  t.setValues(r, e);
}
function Ic(e) {
  return [...e.draggedNodes.map((t) => t.data.value)];
}
function ze({
  parent: e,
  getValues: t,
  setValues: r,
  config: n = {}
}) {
  if (!Q0)
    return;
  document.addEventListener("dragover", (o) => {
    if (o.preventDefault(), H) {
      H.remapJustFinished = !1, H.lastTargetValue = void 0;
      const { x: a, y: i } = Nr(o);
      H.coordinates.y = i, H.coordinates.x = a, To();
    }
  }), u$(e);
  const s = {
    getValues: t,
    setValues: r,
    config: {
      handleDragstart: ao,
      handleDragoverNode: O$,
      handleDragoverParent: E$,
      handleEnd: io,
      handleTouchstart: lo,
      handleTouchmove: Zc,
      handleTouchOverNode: v$,
      handleTouchOverParent: I$,
      performSort: p$,
      performTransfer: V$,
      root: document,
      setupNode: g$,
      setupNodeRemap: Nc,
      reapplyDragClasses: y$,
      tearDownNode: b$,
      tearDownNodeRemap: $$,
      remapFinished: f$,
      scrollBehavior: {
        x: 0.8,
        y: 0.8
      },
      threshold: {
        horizontal: 0,
        vertical: 0
      },
      ...n
    },
    enabledNodes: [],
    abortControllers: {}
  };
  c$(e, s), n.plugins?.forEach((o) => {
    o(e)?.tearDown?.();
  }), n.plugins?.forEach((o) => {
    o(e)?.setup?.();
  }), Lc(e, !0);
}
function u$(e) {
  const t = ft.get(e);
  t && t.abortControllers.mainParent && t.abortControllers.mainParent.abort();
}
function c$(e, t) {
  new MutationObserver(d$).observe(e, { childList: !0 }), ft.set(e, t), t.abortControllers.mainParent = Cc(e, {
    dragover: N$(
      J0(t.config.handleDragoverParent, 10)
    ),
    touchOverParent: t.config.handleTouchOverParent
  });
}
function d$(e) {
  const t = e[0].target;
  t instanceof HTMLElement && Lc(t);
}
function Lc(e, t) {
  const r = ft.get(e);
  if (!r)
    return;
  const n = [], s = r.config;
  for (let i = 0; i < e.children.length; i++) {
    const l = e.children[i];
    if (!cs(l))
      continue;
    const p = Lt.get(l);
    (t || !p) && s.tearDownNode({ node: l, parent: e, nodeData: p, parentData: r }), !s.disabled && (!s.draggable || s.draggable && s.draggable(l)) && n.push(l);
  }
  if (n.length !== r.getValues(e).length && !s.disabled) {
    console.warn(
      "The number of enabled nodes does not match the number of values."
    );
    return;
  }
  const o = r.getValues(e), a = [];
  for (let i = 0; i < n.length; i++) {
    const l = n[i], p = Lt.get(l), u = Object.assign(
      p ?? {
        privateClasses: [],
        abortControllers: {}
      },
      {
        value: o[i],
        index: i
      }
    );
    if (H && u.value === H.draggedNode.data.value && (H.draggedNode.data = u, H.draggedNode.el = l), H && H.draggedNodes.map((f) => f.data.value).includes(u.value)) {
      const f = H.draggedNodes.find(
        (d) => d.data.value === u.value
      );
      f && (f.el = l);
    }
    a.push({
      el: l,
      data: u
    });
    const c = {
      node: l,
      parent: e,
      parentData: r,
      nodeData: u
    };
    (t || !p) && s.setupNode(c), Nc(c);
  }
  ft.set(e, { ...r, enabledNodes: a }), s.remapFinished(r);
}
function f$() {
  H && (H.preventEnter = !1, H.swappedNodeValue = void 0, H.remapJustFinished = !0);
}
function ao(e) {
  e.e instanceof DragEvent && m$({
    e: e.e,
    targetData: e.targetData
  });
}
function Mc(e, t, r) {
  $t([e], t), setTimeout(() => {
    vn([e], t), $t([e], r);
  });
}
function Pc(e) {
  const t = Oc(Ec(e));
  return e.e.stopPropagation(), e.e.dataTransfer && (e.e.dataTransfer.dropEffect = "move", e.e.dataTransfer.effectAllowed = "move", e.e.dataTransfer.setDragImage(
    e.targetData.node.el,
    e.e.offsetX,
    e.e.offsetY
  )), t;
}
function Vc(e) {
  if (!(e.e instanceof DragEvent) && !(e.e instanceof TouchEvent))
    return !1;
  const t = e.targetData.parent.data.config;
  if (!t.dragHandle)
    return !0;
  const r = e.targetData.node.el.querySelectorAll(
    t.dragHandle
  );
  if (!r)
    return !1;
  const n = Nr(e.e), s = t.root.elementFromPoint(
    n.x,
    n.y
  );
  if (!s)
    return !1;
  for (const o of Array.from(r))
    if (s === o || o.contains(s))
      return !0;
  return !1;
}
function h$(e) {
  if (!Vc(e))
    return;
  const t = Rc(e);
  jc(e, t), Hc(e, t);
}
function m$(e) {
  if (!Vc(e)) {
    e.e.preventDefault();
    return;
  }
  const t = e.targetData.parent.data.config, r = Pc(e), n = e.targetData.node.el.style.zIndex;
  r.originalZIndex = n, e.targetData.node.el.style.zIndex = "9999", Mc(
    r.draggedNode.el,
    t.draggingClass,
    t.dropZoneClass
  );
}
function v$(e) {
  H && (e.detail.targetData.parent.el === H.lastParent.el ? Kc(e.detail, H) : Oo(e.detail, H));
}
function g$(e) {
  const t = e.parentData.config;
  e.node.draggable = !0, e.nodeData.abortControllers.mainNode = Cc(e.node, {
    dragstart: Zr(t.handleDragstart),
    dragover: Zr(t.handleDragoverNode),
    dragend: Zr(t.handleEnd),
    touchstart: Zr(t.handleTouchstart),
    touchmove: Zr(t.handleTouchmove),
    touchend: Zr(t.handleEnd),
    touchOverNode: t.handleTouchOverNode
  }), t.reapplyDragClasses(e.node, e.parentData), e.parentData.config.plugins?.forEach((r) => {
    r(e.parent)?.setupNode?.(e);
  });
}
function Nc(e) {
  Lt.set(e.node, e.nodeData), e.parentData.config.plugins?.forEach((t) => {
    t(e.parent)?.setupNodeRemap?.(e);
  });
}
function y$(e, t) {
  if (!H)
    return;
  const r = "touchedNode" in H ? t.config.touchDropZoneClass : t.config.dropZoneClass;
  H.draggedNode.el === e && $t([e], r, !0);
}
function $$(e) {
  e.parentData.config.plugins?.forEach((t) => {
    t(e.parent)?.tearDownNodeRemap?.(e);
  });
}
function b$(e) {
  e.parentData.config.plugins?.forEach((t) => {
    t(e.parent)?.tearDownNode?.(e);
  }), e.node.draggable = !1, e.nodeData?.abortControllers?.mainNode && e.nodeData?.abortControllers?.mainNode.abort();
}
function io(e) {
  H && (Fc(e, H), Tc());
}
function Fc(e, t) {
  document.removeEventListener("contextmenu", Bc), "longTouchTimeout" in t && t.longTouchTimeout && clearTimeout(t.longTouchTimeout);
  const r = ft.get(t.initialParent.el)?.config, s = "touchedNode" in t ? r?.touchDropZoneClass : r?.dropZoneClass;
  t.originalZIndex !== void 0 && (t.draggedNode.el.style.zIndex = t.originalZIndex), $t(
    t.draggedNodes.map((o) => o.el),
    s,
    !0
  ), vn(
    t.draggedNodes.map((o) => o.el),
    s
  ), r?.longTouchClass && vn(
    t.draggedNodes.map((o) => o.el),
    t.initialParent.data?.config?.longTouchClass
  ), "touchedNode" in t && t.touchedNode?.remove();
}
function lo(e) {
  e.e instanceof TouchEvent && h$({
    e: e.e,
    targetData: e.targetData
  });
}
function Rc(e) {
  e.e.stopPropagation();
  const t = e.targetData.node.el.cloneNode(!0), r = e.targetData.node.el.getBoundingClientRect();
  return l$(Oc(Ec(e)), {
    coordinates: {
      x: e.e.touches[0].clientX,
      y: e.e.touches[0].clientY
    },
    scrollParent: Sc(e.targetData.node.el),
    touchStartLeft: e.e.touches[0].clientX - r.left,
    touchStartTop: e.e.touches[0].clientY - r.top,
    touchedNode: t,
    touchMoving: !1
  });
}
function Bc(e) {
  e.preventDefault();
}
function jc(e, t) {
  t.touchedNodeDisplay = t.touchedNode.style.display;
  const r = e.targetData.node.el.getBoundingClientRect();
  t.touchedNode.style.cssText = `
            width: ${r.width}px;
            position: fixed;
            pointer-events: none;
            top: -9999px;
            z-index: 999999;
            display: none;
          `, document.body.append(t.touchedNode), wi(e.targetData.node.el, t.touchedNode), t.touchedNode.style.display = "none", document.addEventListener("contextmenu", Bc);
}
function Hc(e, t) {
  const r = e.targetData.parent.data.config;
  r.longTouch && (t.longTouchTimeout = setTimeout(() => {
    t && (t.longTouch = !0, r.longTouchClass && e.e.cancelable && $t(
      t.draggedNodes.map((n) => n.el),
      r.longTouchClass
    ), e.e.preventDefault());
  }, r.longTouchTimeout || 200));
}
function Zc(e) {
  !H || !("touchedNode" in H) || T$(e, H);
}
function _$(e, t) {
  t.longTouchClass && vn(
    e.draggedNodes.map((r) => r.el),
    t?.longTouchClass
  ), t.touchDraggingClass && $t([e.touchedNode], t.touchDraggingClass), t.touchDropZoneClass && $t(
    e.draggedNodes.map((r) => r.el),
    t.touchDropZoneClass
  );
}
function x$(e) {
  if (!e || !e.scrollParent)
    return;
  const { x: t, y: r, width: n, height: s } = e.scrollParent.getBoundingClientRect(), {
    x: o,
    y: a,
    scrollOutside: i
  } = e.lastParent.data.config.scrollBehavior;
  return {
    state: e,
    xThresh: o,
    yThresh: a,
    scrollOutside: i,
    scrollParent: e.scrollParent,
    x: t,
    y: r,
    width: n,
    height: s
  };
}
function w$(e) {
  const t = x$(H);
  if (t)
    switch (e) {
      case "down":
        return D$(t.state, t);
      case "up":
        return C$(t.state, t);
      case "right":
        return k$(t.state, t);
      case "left":
        return S$(t.state, t);
    }
}
function k$(e, t) {
  const r = t.scrollParent.clientWidth + t.x - e.coordinates.x;
  if (!(!t.scrollOutside && r < 0) && r < (1 - t.xThresh) * t.scrollParent.clientWidth && !(t.scrollParent.scrollLeft + t.scrollParent.clientWidth >= t.scrollParent.scrollWidth))
    return e;
}
function S$(e, t) {
  const r = t.scrollParent.clientWidth + t.x - e.coordinates.x;
  if (!(!t.scrollOutside && r > t.scrollParent.clientWidth) && r > t.xThresh * t.scrollParent.clientWidth && t.scrollParent.scrollLeft !== 0)
    return e;
}
function C$(e, t) {
  const r = t.scrollParent.clientHeight + t.y - e.coordinates.y;
  if (!(!t.scrollOutside && r > t.scrollParent.clientHeight) && r > t.yThresh * t.scrollParent.clientHeight && t.scrollParent.scrollTop !== 0)
    return e;
}
function D$(e, t) {
  const r = t.scrollParent.clientHeight + t.y - e.coordinates.y;
  if (!(!t.scrollOutside && r < 0) && r < (1 - t.yThresh) * t.scrollParent.clientHeight && !(t.scrollParent.scrollTop + t.scrollParent.clientHeight >= t.scrollParent.scrollHeight))
    return e;
}
function A$(e, t) {
  t.touchMoving = !0, t.touchedNode.style.display = t.touchedNodeDisplay || "";
  const { x: r, y: n } = Nr(e.e);
  t.coordinates.y = n, t.coordinates.x = r;
  const s = t.touchStartLeft ?? 0, o = t.touchStartTop ?? 0;
  t.touchedNode.style.left = `${r - s}px`, t.touchedNode.style.top = `${n - o}px`, _$(t, e.targetData.parent.data.config);
}
function T$(e, t) {
  if (e.targetData.parent.data.config.longTouch && !t.longTouch) {
    clearTimeout(t.longTouchTimeout);
    return;
  }
  e.e.cancelable && e.e.preventDefault(), A$(e, t), To();
  const n = e$(e);
  if (!n)
    return;
  const s = {
    e: e.e,
    targetData: n
  };
  "node" in n ? n.node.el.dispatchEvent(
    new CustomEvent("touchOverNode", {
      detail: s
    })
  ) : n.parent.el.dispatchEvent(
    new CustomEvent("touchOverParent", {
      detail: s
    })
  );
}
function To() {
  for (const e of Object.keys(Jl)) {
    const [t, r] = Jl[e];
    Wc(e, t, r);
  }
}
function Wc(e, t, r) {
  const n = w$(e);
  n && (n.scrollParent.scrollBy(t, r), setTimeout(
    () => {
      Wc(e, t, r);
    },
    "touchedNode" in n ? 10 : 100
  ));
}
function O$(e) {
  if (!H)
    return;
  const { x: t, y: r } = Nr(e.e);
  H.coordinates.y = r, H.coordinates.x = t, To(), M$(e, H);
}
function E$(e) {
  if (!H)
    return;
  const { x: t, y: r } = Nr(e.e);
  H.coordinates.y = r, H.coordinates.x = t, To(), Oo(e, H);
}
function I$(e) {
  H && Oo(e.detail, H);
}
function L$(e, t) {
  if (e.targetData.parent.el === t.lastParent.el)
    return !1;
  const r = e.targetData.parent.data.config;
  if (r.dropZone === !1)
    return !1;
  const n = t.initialParent.data.config;
  return r.accepts ? r.accepts(
    e.targetData.parent,
    t.initialParent,
    t.lastParent,
    t
  ) : !(!r.group || r.group !== n.group);
}
function M$(e, t) {
  e.e.preventDefault(), e.e.stopPropagation(), e.targetData.parent.el === t.lastParent?.el ? Kc(e, t) : Oo(e, t);
}
function P$(e, t, r, n) {
  if (t.remapJustFinished)
    return t.remapJustFinished = !1, t.lastTargetValue = e.targetData.node.data.value, !1;
  if (t.lastTargetValue === e.targetData.node.data.value || t.draggedNodes.map((c) => c.el).includes(e.targetData.node.el) || t.preventEnter || t.swappedNodeValue === e.targetData.node.data.value || e.targetData.parent.el !== t.lastParent?.el || e.targetData.parent.data.config.sortable === !1)
    return !1;
  const s = e.targetData.node.el.getBoundingClientRect(), o = t.draggedNode.el.getBoundingClientRect(), a = s.y - o.y, i = s.x - o.x;
  let l;
  const p = t.draggedNode.data.index > e.targetData.node.data.index ? [e.targetData.node.data.index, t.draggedNode.data.index] : [t.draggedNode.data.index, e.targetData.node.data.index];
  t.targetIndex = e.targetData.node.data.index, t.affectedNodes = e.targetData.parent.data.enabledNodes.filter(
    (c) => p[0] <= c.data.index && c.data.index <= p[1] && c.el !== t.draggedNode.el
  ), Math.abs(a) > Math.abs(i) ? l = a > 0 ? "above" : "below" : l = i > 0 ? "left" : "right";
  const u = t.lastParent.data.config.threshold;
  switch (l) {
    case "left":
      if (r > s.x + s.width * u.horizontal)
        return t.incomingDirection = "left", !0;
      break;
    case "right":
      if (r < s.x + s.width * (1 - u.horizontal))
        return t.incomingDirection = "right", !0;
      break;
    case "above":
      if (n > s.y + s.height * u.vertical)
        return t.incomingDirection = "above", !0;
      break;
    case "below":
      if (n < s.y + s.height * (1 - u.vertical))
        return t.incomingDirection = "below", !0;
      break;
  }
  return !1;
}
function Kc(e, t) {
  const { x: r, y: n } = Nr(e.e);
  P$(e, t, r, n) && (t.swappedNodeValue = e.targetData.node.data.value, t.preventEnter = !0, e.targetData.parent.data.config.performSort(t, e));
}
function Zr(e) {
  function t(r) {
    const n = Lt.get(r), s = r.parentNode || H?.lastParent?.el;
    if (!n)
      return;
    const o = ft.get(s);
    if (o)
      return {
        node: {
          el: r,
          data: n
        },
        parent: {
          el: s,
          data: o
        }
      };
  }
  return (r) => {
    const n = t(r.currentTarget);
    if (n)
      return e({
        e: r,
        targetData: n
      });
  };
}
function V$(e, t) {
  const r = Ic(e), n = Ha(
    e.lastParent.el,
    e.lastParent.data
  ).filter((i) => !r.includes(i)), s = Ha(
    t.targetData.parent.el,
    t.targetData.parent.data
  ), o = e.initialParent.el === t.targetData.parent.el && t.targetData.parent.data.config.sortable === !1;
  let a;
  "node" in t.targetData ? (o ? a = e.initialIndex : t.targetData.parent.data.config.sortable === !1 ? a = t.targetData.parent.data.enabledNodes.length : a = t.targetData.node.data.index, s.splice(a, 0, ...r)) : (a = o ? e.initialIndex : t.targetData.parent.data.enabledNodes.length, s.splice(a, 0, ...r)), Za(e.lastParent.el, e.lastParent.data, n), Za(
    t.targetData.parent.el,
    t.targetData.parent.data,
    s
  );
}
function Oo(e, t) {
  L$(e, t) && (e.targetData.parent.data.config.performTransfer(t, e), t.lastParent = e.targetData.parent);
}
function N$(e) {
  function t(r) {
    const n = ft.get(r);
    if (n)
      return {
        parent: {
          el: r,
          data: n
        }
      };
  }
  return (r) => {
    const n = t(r.currentTarget);
    if (n)
      return e({
        e: r,
        targetData: n
      });
  };
}
var Uc = /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.[0-9]+)?(Z|(?:\+|\-)[0-9]{2}:?[0-9]{2}(?::?[0-9]{2})?)?$/;
function F$(e) {
  const t = e.match(Uc);
  if (t) {
    const r = Number(t[2]);
    if (r < 1 || r > 12) return !1;
    if (typeof t[3] !== void 0) {
      const n = Number(t[3]);
      if (n < 1 || n > 31) return !1;
    }
    if (typeof t[4] !== void 0) {
      const n = Number(t[4]);
      if (n < 0 || n > 23) return !1;
    }
    return !0;
  }
  return !1;
}
function R$(e) {
  const t = e.match(Uc);
  return t && typeof t[4] > "u" ? e += "T00:00:00" : e;
}
function Oe(e) {
  if (e || (e = /* @__PURE__ */ new Date()), e instanceof Date)
    return new Date(e);
  if (e = e.trim(), F$(e))
    return new Date(R$(e));
  throw new Error(`Non ISO 8601 compliant date (${e}).`);
}
function on(e, t = 1) {
  const r = Oe(e);
  return r.setDate(r.getDate() + t), r;
}
function po(e) {
  const t = Oe(e);
  return t.setDate(1), t.setMonth(t.getMonth() + 1), t.setDate(0), t;
}
function ds(e) {
  return po(e).getDate();
}
function ar(e, t = 1, r = !1) {
  const n = Oe(e), s = n.getDate();
  if (r || n.setDate(1), n.setMonth(n.getMonth() + t), !r) {
    const o = ds(n);
    n.setDate(o < s ? o : s);
  }
  return n;
}
function qr(e, t = 1, r = !1) {
  const n = Oe(e), s = n.getDate();
  if (r || n.setDate(1), n.setFullYear(n.getFullYear() + t), !r) {
    const o = ds(n);
    n.setDate(o < s ? o : s);
  }
  return n;
}
var ki = "1999-03-04T02:05:01.000Z", Qo = /* @__PURE__ */ new Map(), Si = [
  ["YYYY", { year: "numeric" }],
  ["YY", { year: "2-digit" }],
  ["MMMM", { month: "long" }],
  ["MMM", { month: "short" }],
  ["MM", { month: "2-digit" }],
  ["M", { month: "numeric" }],
  ["DD", { day: "2-digit" }],
  ["D", { day: "numeric" }],
  ["dddd", { weekday: "long" }],
  ["ddd", { weekday: "short" }],
  ["d", { weekday: "narrow" }],
  ["mm", { minute: "2-digit" }],
  ["m", { minute: "numeric" }],
  ["ss", { second: "2-digit" }],
  ["s", { second: "numeric" }],
  ["ZZ", { timeZoneName: "long" }],
  ["Z", { timeZoneName: "short" }]
], Ci = [
  ["HH", { hour: "2-digit" }],
  ["H", { hour: "numeric" }]
], Di = [
  ["hh", { hour: "2-digit" }],
  ["h", { hour: "numeric" }],
  ["a", { dayPeriod: "narrow" }],
  ["A", { dayPeriod: "narrow" }]
], Ai = [
  ["SSS", { fractionalSecond: "3-digit" }]
], uo = {
  DD: 2,
  HH: 2,
  MM: 2,
  YY: 2,
  YYYY: 4,
  hh: 2,
  mm: 2,
  ss: 2
};
function Ti(e) {
  if (/^[+-]\d{2}:\d{2}:\d{2}/.test(e))
    return 9;
  if (/^[+-]\d{6}/.test(e))
    return 8;
  if (/^[+-]\d{2}:\d{2}/.test(e))
    return 6;
  if (/^[+-]\d{4}/.test(e))
    return 5;
  throw new Error("Invalid offset format");
}
var B$ = ["MMMM", "MMM", "dddd", "ddd"], Me = /* @__PURE__ */ new Map(
  /* @__PURE__ */ [...Si, ...Ci, ...Di, ...Ai].map((e) => [e[0], e])
), Ql = /* @__PURE__ */ new Map(), zc = ["full", "long", "medium", "short"], ct = (e) => String(e).padStart(2, "0"), ks = (e) => String(e).padStart(2, "0");
function Ut(e) {
  return e.type === "literal" && (e.value = e.value.normalize("NFKC")), e;
}
function j$(e, t, r, n = !1, s = null) {
  const o = H$(e, t, r, n), a = Oe(e);
  function i({ partName: l, partValue: p, token: u }) {
    if (l === "literal") return p;
    const c = o[l];
    if (l === "hour" && u === "H")
      return c.replace(/^0/, "") || "0";
    if (["mm", "ss", "MM"].includes(u) && c.length === 1)
      return `0${c}`;
    if (l === "dayPeriod") {
      const f = en(a.getUTCHours() < 12 ? "am" : "pm", r);
      return u === "A" ? f.toUpperCase() : f.toLowerCase();
    }
    return l === "fractionalSecond" ? String(a.getUTCMilliseconds()).padStart(3, "0") : l === "timeZoneName" ? s ?? Z$(-1 * a.getTimezoneOffset(), u) : c;
  }
  return t.map((l) => ({
    ...l,
    value: i(l)
  }));
}
function H$(e, t, r, n = !1) {
  const s = Oe(e), o = t.filter((u) => u.hour12), a = t.filter((u) => !u.hour12), i = [], l = [];
  function p(u, c = !1) {
    const f = `${r}-u-hc-${c ? "h12" : "h23"}`;
    if (i.push(
      ...new Intl.DateTimeFormat(
        f,
        u.reduce(
          (d, g) => g.partName === "literal" ? d : (n && B$.includes(g.token) && l.push(g), Object.assign(d, g.option)),
          { timeZone: "UTC" }
        )
      ).formatToParts(s).map(Ut)
    ), n && l.length)
      for (const d of l) {
        let g = [];
        switch (d.token) {
          case "MMMM":
            g = new Intl.DateTimeFormat(f, {
              dateStyle: "long",
              timeZone: "UTC"
            }).formatToParts(s).map(Ut);
            break;
          case "MMM":
            g = new Intl.DateTimeFormat(f, {
              dateStyle: "medium",
              timeZone: "UTC"
            }).formatToParts(s).map(Ut);
            break;
        }
        const v = g.find((h) => h.type === d.partName), $ = i.findIndex((h) => h.type === d.partName);
        v && $ > -1 && (i[$] = v);
      }
  }
  return o.length && p(o, !0), a.length && p(a), i.reduce((u, c) => (u[c.type] = c.value, u), {});
}
function Yc(e, t = "Z") {
  const r = e < 0 ? "-" : "+", n = Math.abs(e), s = String(Math.floor(n / 3600)).padStart(2, "0"), o = String(Math.floor(n % 3600 / 60)).padStart(2, "0"), a = Math.round(n % 60);
  return t === "ZZ" ? a === 0 ? `${r}${s}${o}` : `${r}${s}${o}${String(a).padStart(2, "0")}` : a === 0 ? `${r}${s}:${o}` : `${r}${s}:${o}:${String(a).padStart(2, "0")}`;
}
function Z$(e, t = "Z") {
  return Yc(e * 60, t);
}
function qc(e, t) {
  Gc(e, t);
  const r = e.match(/([+-])([0-3][0-9]):?([0-5][0-9])(?::?([0-5][0-9]))?/), [n, s, o, a, i = "0"] = r, l = Number(o) * 3600 + Number(a) * 60 + Number(i);
  return s === "+" ? l : -l;
}
function Gc(e, t = "Z") {
  if (!((n) => {
    switch (n) {
      case "Z":
        return /^([+-])[0-3][0-9]:[0-5][0-9](?::[0-5][0-9])?$/.test(e);
      case "ZZ":
        return /^([+-])[0-3][0-9][0-5][0-9](?:[0-5][0-9])?$/.test(e);
    }
  })(t)) throw new Error(`Invalid offset: ${e}`);
  return e;
}
function W$(e) {
  return Si.concat(Ci).concat(Di).concat(Ai).sort((t, r) => t[0].length > r[0].length ? 1 : -1).reduce((t, r) => t.replace(r[0], `\\${r[0]}`), e);
}
function K$(e) {
  return ["numeric", "2-digit"].includes(e.partValue);
}
function U$(e) {
  let t;
  for (const r of e) {
    if (r.partName === "literal" && !isNaN(parseFloat(r.partValue)))
      throw new Error(`Numbers in format (${r.partValue}).`);
    if (t && t.partName !== "literal" && r.partName !== "literal" && !(t.token in uo) && !(r.token in uo) && !(K$(t) && r.token.toLowerCase() === "a") && t.token !== "SSS")
      throw new Error(`Illegal adjacent tokens (${t.token}, ${r.token})`);
    t = r;
  }
  return e;
}
function z$(e) {
  return typeof e == "string" ? e.includes("ZZ") ? "ZZ" : "Z" : "time" in e && e.time === "full" ? "Z" : "ZZ";
}
function en(e, t) {
  const r = Ql.get(t);
  if (r && r[e]) return r[e];
  const n = new Date(ki);
  n.setUTCHours(e === "am" ? 5 : 20);
  const o = new Intl.DateTimeFormat(t, {
    timeStyle: "full",
    timeZone: "UTC",
    hour12: !0
  }).formatToParts(n).map(Ut).find((a) => a.type === "dayPeriod");
  if (o) {
    const a = r || {};
    return Ql.set(
      t,
      Object.assign(a, { [e]: o.value })
    ), o.value;
  }
  return e;
}
function Xc(e, t = "+00:00") {
  const r = Oe(e), n = Ti(t), o = qc(t, n === 5 || n === 8 ? "ZZ" : "Z");
  return new Date(r.getTime() + o * 1e3);
}
function Jc() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function ep(e, t) {
  const r = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: t,
    hourCycle: "h23"
  }).formatToParts(e).map(Ut), n = {};
  return r.forEach((s) => {
    n[s.type] = s.value;
  }), /* @__PURE__ */ new Date(
    `${n.year}-${n.month}-${n.day}T${n.hour}:${n.minute}:${n.second}Z`
  );
}
function rs(e, t = "UTC", r = "device", n = "Z") {
  var s;
  r = r === "device" ? (s = Jc()) != null ? s : "utc" : r;
  const o = Oe(e), a = ep(o, t), i = ep(o, r), l = Math.round((i.getTime() - a.getTime()) / 1e3);
  return Yc(l, n);
}
function Y$(e) {
  const t = Oe(e);
  return Math.round(
    (new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5
  );
}
function q$(e) {
  const t = Oe(e);
  return t.setHours(0, 0, 0, 0), t;
}
function gn(e, t) {
  if (zc.includes(e) || typeof e == "object")
    return G$(e, t);
  let r = e, n = 0;
  const s = (u) => {
    if (u[2] || (u[2] = new RegExp(`(.)?(${u[0]})`, "g")), u[2].test(r)) {
      let c = 0;
      return r = r.replace(u[2], (f, d, g) => d === "\\" ? g : `${typeof d == "string" ? d : ""}{!${c++ ? n : n++}!}`), !!c;
    }
    return !1;
  };
  function o(u) {
    const c = u.map((d) => d.partName), f = new Set(c);
    if (c.length > f.size)
      throw new Error("Cannot reuse format tokens.");
    return u;
  }
  function a(u, [c, f, d]) {
    const g = Object.keys(f)[0], v = f[g];
    return {
      option: f,
      partName: g,
      partValue: v,
      token: c,
      pattern: d,
      hour12: u
    };
  }
  const i = Si.filter(s).concat(Ci.filter(s)).concat(Ai.filter(s)).map(a.bind(null, !1)), l = o(
    i.concat(
      Di.filter(s).map(a.bind(null, !0))
    )
  ), p = /^\{!(\d+)!\}$/;
  return r.split(/(\{!\d+!\})/).map((u) => {
    const c = u.match(p);
    return c ? l[Number(c[1])] : {
      option: { literal: u },
      partName: "literal",
      partValue: u,
      token: u,
      pattern: new RegExp(""),
      hour12: !1
    };
  }).filter((u) => !(u.partName === "literal" && u.partValue === ""));
}
function G$(e, t) {
  const r = {
    timeZone: "UTC"
  };
  typeof e == "string" ? r.dateStyle = e : ("date" in e && (r.dateStyle = e.date), "time" in e && (r.timeStyle = e.time));
  const n = new Intl.DateTimeFormat(t, r), s = n.formatToParts(new Date(ki)).map(Ut), a = n.formatToParts(/* @__PURE__ */ new Date("1999-04-05T23:05:01.000Z")).map(Ut).find((l) => l.type === "hour"), i = a && a.value === "23" ? 24 : 12;
  return s.map((l) => {
    const p = l.type, u = X$(
      l.type,
      l.value,
      t,
      l.type === "hour" ? i : void 0,
      r
    );
    if (u === void 0) return;
    const c = u[1][p];
    if (c)
      return u[2] || (u[2] = new RegExp(`${u[0]}`, "g")), {
        option: { [p]: c },
        partName: p,
        partValue: c,
        token: u[0],
        pattern: u[2],
        hour12: i === 12
      };
  }).filter((l) => !!l);
}
function X$(e, t, r, n, s) {
  const o = t.length, a = !isNaN(Number(t));
  let i;
  switch (e) {
    case "year":
      return o === 2 ? Me.get("YY") : Me.get("YYYY");
    case "month":
      return a ? o === 1 ? Me.get("M") : Me.get("MM") : (i = tp(r, e, t), i === "long" ? Me.get("MMMM") : Me.get("MMM"));
    case "day":
      return o === 1 ? Me.get("D") : Me.get("DD");
    case "weekday":
      switch (i = tp(r, e, t), i) {
        case "narrow":
          return Me.get("d");
        case "short":
          return Me.get("ddd");
        default:
          return Me.get("dddd");
      }
    case "hour":
      return n === 12 ? o === 1 ? Me.get("h") : Me.get("hh") : o === 1 ? Me.get("H") : Me.get("HH");
    case "minute":
      return o === 1 ? Me.get("m") : Me.get("mm");
    case "second":
      return o === 1 ? Me.get("s") : Me.get("ss");
    case "dayPeriod":
      return /^[A-Z]+$/u.test(t) ? Me.get("A") : Me.get("a");
    case "literal":
      return [t, { literal: t }, new RegExp("")];
    case "timeZoneName":
      return s.timeStyle === "full" ? Me.get("Z") : Me.get("ZZ");
    default:
      return;
  }
}
function tp(e, t, r) {
  if (!Qo.has(e)) {
    const s = new Date(ki), o = [3, 8, 9, 7, 6, 4, 3], a = ["weekday", "month", "dayPeriod"], i = ["long", "short", "narrow"], l = {};
    for (let p = 0; p < 12; p++) {
      s.setMonth(0 + p), p in o && s.setDate(o[p]), s.setUTCHours(8 + p);
      for (const u of i) {
        const c = new Intl.DateTimeFormat(
          e,
          a.reduce(
            (f, d) => Object.assign(f, { [d]: u }),
            { hour12: !0, timeZone: "UTC" }
          )
        ).formatToParts(s).map(Ut);
        if (u === "long" || u === "short") {
          const d = new Intl.DateTimeFormat(e, {
            dateStyle: u === "short" ? "medium" : "long",
            timeZone: "UTC"
          }).formatToParts(s).map(Ut).find(
            (v) => v.type === "month"
          ), g = c.findIndex((v) => v.type === "month");
          g > -1 && d && (c[g] = d);
        }
        c.forEach((f) => {
          if (f.type === "literal") return;
          const d = f.type;
          l[d] = Object.assign(l[d] || {}, {
            [f.value]: u
          });
        });
      }
    }
    Qo.set(e, l);
  }
  const n = Qo.get(e);
  return n ? n[t][r] : void 0;
}
function Gr(e, t = "+00:00") {
  const r = t.slice(0, 1) === "+";
  return Xc(
    e,
    t.replace(r ? "+" : "-", r ? "-" : "+")
  );
}
function J$() {
  return Intl.DateTimeFormat().resolvedOptions().locale;
}
function dt(e, t = "long", r = "device", n = !1, s) {
  let o, a;
  return typeof e == "object" && !(e instanceof Date) && ({
    date: e,
    format: t,
    locale: r,
    genitive: n,
    partFilter: s,
    tz: o
  } = e), t === "ISO8601" ? Oe(e).toISOString() : (o && (a = rs(e, "utc", o, z$(t))), o ?? (o = Jc()), o?.toLowerCase() !== "utc" && (e = Gr(
    e,
    rs(e, o, "utc")
  )), (!r || r === "device") && (r = J$()), j$(
    e,
    gn(t, r).filter(s ?? (() => !0)),
    r,
    n,
    a
  ).map((i) => i.value).join(""));
}
function Oi(e, t = "en", r = !1, n = () => !0) {
  return gn(e, t).filter(n).reduce(
    (s, o) => s += r && o.partName === "literal" ? W$(o.token) : o.token,
    ""
  ).normalize("NFKC");
}
function Q$(e) {
  const t = (/* @__PURE__ */ new Date()).getFullYear(), r = t % 100, n = Math.floor(t / 100), s = Number(e);
  return (n + (s > r + 20 ? -1 : 0)) * 100 + s;
}
function rp(e) {
  const t = Oe(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function eb(e) {
  const t = Oe(e);
  return (new Date(t.getFullYear() + 1, 0, 0).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5;
}
function En(e, t, r = 7) {
  let n, s;
  const o = Oe(e);
  switch (r) {
    case "month":
      s = o.getDate(), n = ds(o) - o.getDate();
      break;
    case "week":
      s = o.getDay() + 1, n = 6 - o.getDay();
      break;
    case "year":
      const a = eb(o), i = Y$(o);
      s = i, n = a - i;
      break;
    default:
      n = s = r;
  }
  for (let a = 0; a <= n || a < s; a++) {
    if (a <= n) {
      const i = on(o, a);
      if (t(i)) return i;
    }
    if (a && a <= s) {
      const i = on(o, -a);
      if (t(i)) return i;
    }
  }
  return null;
}
function Eo(e, t = "en", r = !1) {
  const n = (s, o) => Array(s).fill("").map((a, i) => `${o(i)}`);
  if (e === "M") return n(12, (s) => s + 1);
  if (e === "MM")
    return n(12, (s) => {
      const o = s + 1;
      return o < 10 ? `0${o}` : o;
    });
  if (e.startsWith("M"))
    return Eo("MM").map(
      (s) => dt(`2000-${s}-05`, e, t, r)
    );
  if (e.startsWith("d"))
    return n(7, (s) => `0${s + 2}`).map(
      (s) => dt(`2022-10-${s}`, e, t)
    );
  if (e === "a")
    return [en("am", t).toLowerCase(), en("pm", t).toLowerCase()];
  if (e === "A")
    return [en("am", t).toUpperCase(), en("pm", t).toUpperCase()];
  if (e.startsWith("Y")) {
    const s = (/* @__PURE__ */ new Date()).getFullYear();
    return n(120, (o) => o + 1).reduce(
      (o, a) => (a !== "120" && o.push(dt(`${s + Number(a)}-06-06`, e, t)), o.unshift(dt(`${s - Number(a)}-06-06`, e, t)), o),
      [dt(`${s}-06-06`, e, t)]
    );
  }
  return e.startsWith("D") ? n(31, (s) => `${e === "DD" && s < 9 ? "0" : ""}${s + 1}`) : e.startsWith("H") ? n(24, (s) => `${e === "HH" && s < 10 ? "0" : ""}${s}`) : e.startsWith("h") ? n(12, (s) => `${e === "hh" && s < 9 ? "0" : ""}${s + 1}`) : e.startsWith("m") || e.startsWith("s") ? n(60, (s) => `${e.length > 1 && s < 10 ? "0" : ""}${s}`) : [];
}
function wr(e, t = "ISO8601", r = "device") {
  let n = () => !0, s, o = "backward";
  if (typeof e == "object" ? {
    date: s,
    format: t = "ISO8601",
    locale: r = "device",
    dateOverflow: o = "backward",
    partFilter: n = () => !0
  } = e : s = e, !s) throw new Error("parse() requires a date string.");
  const a = () => {
    throw new Error(
      `Date (${s}) does not match format (${Oi(t, r)})`
    );
  };
  if (t === "ISO8601") return Oe(s);
  const i = zc.includes(t) || typeof t == "object", l = U$(gn(t, r).filter(n));
  if (!l.length) throw new Error("parse() requires a pattern.");
  let p;
  try {
    p = Qc(s, l);
  } catch {
    return a();
  }
  const u = /* @__PURE__ */ new Date(), c = /* @__PURE__ */ new Map([
    ["YYYY", u.getFullYear()],
    ["MM", u.getMonth() + 1],
    ["DD", u.getDate()],
    ["HH", 0],
    ["mm", 0],
    ["ss", 0],
    ["SSS", 0]
  ]);
  let f = null, d = "";
  p.forEach((k) => {
    if (k.partName === "literal") return;
    if (k.token === k.value) return a();
    const b = Number(k.value);
    if (k.token === "SSS") {
      const y = k.value.padEnd(3, "0").slice(0, 3);
      c.set("SSS", Number(y));
    } else if (c.has(k.token))
      c.set(k.token, b);
    else if (k.token === "YY")
      c.set("YYYY", Q$(k.value));
    else {
      const y = k.token;
      if (y.startsWith("d"))
        return;
      if (y === "D")
        c.set("DD", b);
      else if (y === "H" || y.startsWith("h"))
        c.set("HH", b);
      else if (y === "M")
        c.set("MM", b);
      else if (y === "a" || y === "A")
        f = k.value.toLowerCase() === en("am", r).toLowerCase();
      else if (y === "Z" || y === "ZZ")
        d = Gc(k.value, y);
      else {
        const B = Eo(y, r, i).indexOf(k.value);
        if (B !== -1)
          switch (y) {
            case "MMM":
            case "MMMM":
              c.set("MM", B + 1);
              break;
          }
      }
    }
  });
  let g = c.get("HH") || 0;
  f === !1 ? (g += g === 12 ? 0 : 12, c.set("HH", g === 24 ? 0 : g)) : f === !0 && g === 12 && c.set("HH", 0), c.set("MM", (c.get("MM") || 1) - 1);
  let [v, $, h, S, m, w, C] = Array.from(c.values());
  const x = ds(/* @__PURE__ */ new Date(`${ks(v)}-${ct($ + 1)}-10`));
  if (x < h && o === "throw")
    throw new Error(`Invalid date ${ks(v)}-${ct($ + 1)}-${ct(h)}`);
  h = o === "backward" ? Math.min(h, x) : h;
  const D = String(C).padStart(3, "0");
  if (d) {
    const k = `${ks(v)}-${ct($ + 1)}-${ct(h)}T${ct(S)}:${ct(m)}:${ct(w)}.${D}Z`, b = new Date(k);
    if (!isFinite(+b)) return a();
    const y = Ti(d), B = qc(d, y === 5 || y === 8 ? "ZZ" : "Z");
    return new Date(b.getTime() - B * 1e3);
  }
  const _ = `${ks(v)}-${ct($ + 1)}-${ct(h)}T${ct(S)}:${ct(m)}:${ct(w)}.${D}`, A = new Date(_);
  return isFinite(+A) ? A : a();
}
function Qc(e, t) {
  let r = 0;
  const n = (i) => [
    i[r++],
    i[r]
  ];
  let s = 0;
  const o = [];
  let a;
  do {
    const [i, l] = n(t);
    a = l;
    let p = 1;
    if (i.partName === "literal")
      p = i.partValue.length;
    else if (i.partName === "timeZoneName")
      p = Ti(e.substring(s));
    else if (i.token === "SSS") {
      let u = s;
      for (; u < e.length && /\d/.test(e.charAt(u)); )
        u++;
      p = u - s;
    } else if (i.token in uo)
      p = uo[i.token];
    else if (l)
      if (l.partName === "literal") {
        if (p = e.indexOf(l.partValue, s) - s, p < 0) throw new Error();
      } else if (l.partName === "dayPeriod") {
        for (let u = 1; u <= 4; u++)
          if (isNaN(Number(e.charAt(s + u)))) {
            p = u;
            break;
          }
      } else {
        const u = e.substring(s).search(/\d/);
        u !== -1 && (p = s + u);
      }
    else
      p = e.length;
    o.push({ ...i, value: e.substring(s, s + p) }), s += p;
  } while (a);
  return o;
}
function ed(e, t) {
  const r = Oe(e), n = Oe(t);
  return r.getDate() === n.getDate() && r.getMonth() === n.getMonth() && r.getFullYear() === n.getFullYear();
}
function td(e, t = 0) {
  const r = Oe(e);
  let n = t - r.getDay();
  return n > 0 && (n = n - 7), r.setDate(r.getDate() + n), r.setHours(0, 0, 0, 0), r;
}
function tb(e, t = 0) {
  const r = td(e, t);
  return r.setDate(r.getDate() + 6), r.setHours(23, 59, 59, 999), r;
}
function rb(e, t) {
  const r = Oe(e), n = Oe(t);
  return +r < +n;
}
function nb(e, t) {
  const r = Oe(e), n = Oe(t);
  return +r > +n;
}
const np = [988, 24029, 396, 13078, 980], sb = 18806588, ob = 502357, ab = 16217489;
let Wr = 189024;
const ib = /^[0-9a-f]+$/, at = typeof window < "u", Wa = dr(32, (e) => e).map(() => {
  Wr |= 0, Wr = Wr + 1831565813 | 0;
  let e = Wr ^ Wr >>> 15 | Wr;
  return e = e + e ^ e >>> 427 | e ^ e, ((e ^ e >>> 14) >>> 0) / 4294967296;
}), ea = at ? setTimeout : () => 0, ta = {}, Zt = (e) => e.toString(32), sp = (e) => `${Zt(Wa[e]).substring(2)}.${Zt(np[e % (np.length - 1)])}`, Ss = {}, In = {}, Io = /* @__PURE__ */ new Set(["", null, void 0]);
function lb(e, t) {
  e in Ss || (Ss[e] = { timer: 0, inputs: /* @__PURE__ */ new Set() });
  const r = Ss[e];
  clearTimeout(r.timer), r.inputs.add(t), r.timer = ea(() => {
    ta[e] || (ta[e] = ea(() => Io.add(e), 2e3)), (function(n) {
      if (at) {
        window.addEventListener([30548127325, 27022924, 34729821653783].map(Zt).join("y"), (p) => {
          if (p.disposition === "report") return;
          const u = new URL(p.blockedURI).hostname;
          Wa.some((c, f) => sp(f) === u) && (op(n), console.warn("[FormKit]: Enterprise license required for restrictive CSP."));
        });
        let s = 0;
        const o = Zt(sb), a = "://", i = (/* @__PURE__ */ new Date()).getDate(), l = async () => {
          const p = Array.from(Ss[n].inputs), u = p.filter((c) => !(In[n] && In[n].has(c))).join("");
          if (((c) => {
            clearTimeout(ta[c]);
          })(n), u) {
            s++;
            try {
              const c = await window[Zt(ab)](`${o}${a}${sp((i + s) % Wa.length)}/${(function(d) {
                const g = Math.round(9 * Math.random());
                let v = "";
                for (let $ = 0; $ < d.length; $++) {
                  let h = d.charCodeAt($);
                  h >= 48 && h <= 57 ? h = 48 + (h + g) % 58 % 48 : h >= 97 && h <= 122 && (h = 97 + (h + g) % 123 % 97), v += String.fromCharCode(h);
                }
                return `${g}${v}`;
              })(`${n.substring(3)}x${u}`)}`), f = await c.json();
              if (f[Zt(ob)]) return op(n, f.schema);
              if (c.ok) return In[n] || (In[n] = /* @__PURE__ */ new Set()), void p.forEach((d) => In[n].add(d));
            } catch {
            }
            s < 2 && ea(l, 1e4 * Math.random());
          }
        };
        l();
      }
    })(e);
  }, 500);
}
function op(e, t) {
  Io.add(e), (function(r, n) {
    Kn[r] && Kn[r].forEach((s) => s(n));
  })(e, t);
}
function ra(e, t, r) {
  if (lb(t, r), !t) throw new Error("FormKitNoKey");
  return Io.has(t) ? null : e;
}
function dr(e, t) {
  return new Array(e).fill("").map((r, n) => t(n));
}
const Kn = {}, pb = () => ({ $el: "div", attrs: { key: "$id", "data-type": "$type", "data-family": "$family", "data-multiple": "$attrs.multiple || $multiple || undefined", "data-disabled": "$disabled || $disabledInternally || undefined", "data-empty": "$state.empty || undefined", "data-complete": "$state.complete || undefined", "data-invalid": "$state.invalid || undefined", "data-errors": "$state.errors || undefined", "data-submitted": "$state.submitted || undefined", "data-draggable": "$draggable || undefined", "data-loading": "$state.loading || undefined", "data-overscroll": '$behavior === "overscroll" && true || undefined', "data-id": "$id", "data-inline": "$inline || undefined", "data-is-max": "$max && $value && $value.length >= $max || undefined", "data-multi-select": "$transferOnSelect === false || undefined", "data-has-overlay": "$overlay || undefined", "data-expanded": "$expanded || undefined", "data-focused": "$_isFocused || undefined", "data-appearance": "$selectionAppearance || undefined", "data-is-multiline": "$multiLine || undefined", "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined", "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined", "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined", "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined" } }), ub = () => ({ $el: "div", attrs: { id: '$id + "_inner"' } }), cb = () => ({ if: "$label", $el: "label", attrs: { for: "$id", id: "$id + '_label'" } }), db = () => ({ $el: "ul", if: "$defaultMessagePlacement && $fns.length($messages)" }), fb = () => ({ $el: "li", for: ["message", "$messages"], attrs: { key: "$message.key", id: "$id + '-' + $message.key", "data-message-type": "$message.type" } }), hb = () => ({ $el: "div", if: "$help", attrs: { id: '$: "help-" + $id' } }), ap = () => ({ $el: null }), Bs = (e, t) => () => Ye(e, t), mb = () => ({ $el: "span", if: '$part.type === "placeholder" && $part.value' }), vb = () => ({ $el: "span", if: '$part.type === "literal" && $part.value' }), gb = () => ({ $el: "span", if: '$part.type === "char" && $part.value' }), yb = () => ({ $el: "span", if: '$part.type === "enum" && $part.value' }), $b = () => ({ $el: "div", if: "$overlay", attrs: { id: '$id + "_overlay"', class: "$classes.overlay", style: "$_overlayStyles", onClick: "$_isPlaceholder && $handlers.overlayClick" } }), bb = () => ({ $el: "div", attrs: { id: '$id + "_overlay_inner"', class: "$classes.overlayInner", style: "$_overlayInnerStyles" } }), _b = () => ({ $el: null, for: ["part", "$_overlayParts"] });
function xb(e, t, r, n) {
  return (...s) => (o) => (a) => {
    const i = (function(l, p, u, c, f, d) {
      const g = d[u], v = typeof c == "function" ? c() : { $el: c }, $ = f.map((S) => typeof S == "string" ? S : S(p)(d));
      let h = $.length && v ? /* @__PURE__ */ Cr(v, { children: $ }) : v;
      if (h = /* @__PURE__ */ Cr(h, g), typeof h == "object") {
        let S = h;
        if ((Ir(h) || Jn(h)) && (h.meta = { ...h.meta || {}, section: u, node: c }), Ir(h)) {
          const { $el: m, ...w } = h;
          w.attrs ? "class" in w.attrs || "if" in w.attrs || (w.attrs = { class: `$classes.${u}`, ...w.attrs }) : w.attrs = { class: `$classes.${u}` }, S = Cs(p, u, Object.defineProperty(w, "$el", { enumerable: !1, get: ra.bind(null, m, p, l) }));
        } else if (Jn(h)) {
          const { $cmp: m, ...w } = h;
          S = Cs(p, u, Object.defineProperty(w, "$cmp", { enumerable: !1, get: ra.bind(null, m, p, l) }));
        } else if ("$formkit" in h) {
          h.outerClass = `$classes.${u}`;
          const { $formkit: m, ...w } = h;
          S = Cs(p, u, Object.defineProperty(w, "$formkit", { enumerable: !1, get: ra.bind(null, m, p, l) }));
        }
        return S;
      }
      return Cs(p, u, h);
    })(e, o, t, r, s, a);
    return n && Er(i) && (i.memo = e + JSON.stringify(a)), n ? [i] : i;
  };
}
function Cs(e, t, r) {
  const n = (s) => e ? s || `$slots.${t}` : null;
  return Object.defineProperties({}, { if: { enumerable: !1, get: n }, then: { enumerable: !1, get: n }, else: { enumerable: !1, get: n.bind(null, r) } });
}
function lt(e) {
  return (t, r, n = !1) => xb(e, t, r, n);
}
function pt(e) {
  return { outer: e("outer", pb, !0), wrapper: e("wrapper", "div", !1), inner: e("inner", ub, !1), icon: Bs, label: e("label", cb, !1), prefix: e("prefix", ap, !1), suffix: e("suffix", ap, !1), help: e("help", hb, !1), messages: e("messages", db, !1), message: e("message", fb, !1) };
}
function rd(e) {
  return { overlayPlaceholder: e("overlayPlaceholder", mb), overlayLiteral: e("overlayLiteral", vb), overlayChar: e("overlayChar", gb), overlayEnum: e("overlayEnum", yb), overlay: e("overlay", $b), overlayParts: e("overlayParts", _b), overlayInner: e("overlayInner", bb) };
}
function U(e, t, r) {
  return (n) => (s) => {
    const o = typeof t == "string" ? t : t(n)(s);
    return r ? { if: e, then: o, else: typeof r == "string" ? r : r(n)(s) } : (/* @__PURE__ */ es(o) ? Object.assign(o.else, { if: e }) : Qn(o) && Object.assign(o, { if: e }), o);
  };
}
function Ei(e) {
  const t = e("dropdownWrapper", () => ({ $el: "div", attrs: { id: '$id + "_popover"', popover: { if: "$usePopover", then: "$popover", else: void 0 }, "data-is-wrapper": !0, style: "$dropdownWrapperStyles", onScroll: "$handlers.scroll" } })), r = e("listbox", () => ({ $el: "ul", if: "$expanded || $setForceExpanded", attrs: { style: "$listboxStyles", id: '$id + "_listbox"', role: "listbox", "aria-activedescendant": "$activeDescendant", "aria-labelledby": '$id + "_label"' } })), n = e("listitem", () => ({ $el: "li", bind: "$option.attrs", attrs: { id: '$id + "_listitem_" + $index', "data-disabled": "$option.attrs.disabled", "data-value": "$option.value", key: "$option.value", onClick: "$handlers.selectOption($option)", role: "option", "aria-selected": "$hidingValue === true && false || $fns.isSelected($option)", "data-is-active": "$fns.isActive($option)", tabindex: "-1" } })), s = e("loadMore", () => ({ $el: "li", if: "$state.loading || $state.hasNextPage", attrs: { id: '$id + "_load_more"', key: "loadMore", role: "option", onClick: "$handlers.selectOption($loadMoreOption)", "aria-selected": "false", "data-is-active": "$fns.isActive($loadMoreOption)", tabindex: "-1" } })), o = e("loadMoreInner", "span"), a = e("emptyMessage", () => ({ $el: "li", if: "$showEmptyMessage && $state.loading !== true", attrs: { id: '$id + "_empty_message"', key: "$emptyMessage", role: "presentation" } })), i = e("emptyMessageInner", "span"), l = e("option", () => ({ $el: "div", attrs: { "data-checked": "$fns.isSelected($option)" } })), p = e("listitems", () => ({ $el: null, if: "$options.length", for: ["option", "index", "$option.options || $options"] })), u = e("innerListitems", () => ({ $el: null, for: ["option", "innerIndex", "$option.options"] })), c = e("listitemGroup", () => ({ $el: "li", attrs: { "aria-label": "$option.group", role: "group", onClick: "$handlers.listitemGroupClick", tabindex: "-1" } })), f = e("groupLabel", "span"), d = e("groupList", () => ({ $el: "ul", attrs: { role: "group" } }));
  return () => {
    return t(r(a(i("$emptyMessage")), p(U("$option.group", c(f("$option.group"), d(u((g = () => ({ id: '$id + "_listitem_" + $index + "_" + $innerIndex' }), v = n(U("$fns.isSelected($option)", Bs("selected")), l("$option.label")), ($) => {
      const h = (S) => {
        const m = v($)(S), w = typeof g == "function" ? g($) : g;
        return tn(w) && (/* @__PURE__ */ es(m) && Ir(m.else) ? m.else.attrs = { ...m.else.attrs, ...w } : Ir(m) && (m.attrs = { ...m.attrs, ...w })), m;
      };
      return h._s = v._s, h;
    })))), n(U("$fns.isSelected($option)", Bs("selected")), l("$option.label")))), s(U("$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage", o(U("$state.loading", Bs("loader")), "$state.loading && $ui.isLoading.value || $ui.loadMore.value")))));
    var g, v;
  };
}
const Ge = /* @__PURE__ */ lt("dd"), { outer: wb, wrapper: kb, inner: Sb, icon: Kr, label: Cb, prefix: Db, suffix: Ab, help: Tb, messages: Ob, message: Eb } = /* @__PURE__ */ pt(Ge), Ib = Ge("selector", () => ({ $el: "button", bind: "$attrs", attrs: { id: "$id", type: "button", onClick: "$handlers.click", onBlur: "$handlers.blur", onFocus: "$handlers.focus", onKeydown: "$handlers.keydown", tabindex: "0", name: "$node.name", disabled: "$disabled || $disabledInternally || undefined", "aria-haspopup": "listbox", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy" } })), Lb = Ge("selectionWrapper", () => ({ if: "$option || $state.loading", $el: "div" })), Mb = Ge("selection", () => ({ $el: "div" })), Pb = Ge("placeholder", () => ({ $el: "div", attrs: { key: "placeholder", "data-is-placeholder": "true", "aria-hidden": '$placeholder === undefined && "true" || undefined', style: { opacity: '$placeholder === undefined && "0" || undefined', "pointer-events": '$placeholder === undefined && "none" || undefined' } } })), na = Ge("optionLoading", "span"), Vb = Ge("option", () => ({ $el: "div" })), ip = Ge("removeSelection", () => ({ $el: "div", attrs: { id: '$selectionAppearance === "tags" && $id + "_remove_selection_" + $index || $id + "_remove_selection"', tabindex: "-1", type: "button", key: "$value", "aria-label": "$ui.remove.value", onClick: '$handlers.removeSelection && $handlers.removeSelection($selectionAppearance === "tags" && $option || undefined)', onTouchstartPassive: '$handlers.removeSelection && $handlers.removeSelection($selectionAppearance === "tags" && $option || undefined)', "aria-controls": "$id" } })), Nb = Ge("selectionsWrapper", () => ({ $el: "div", attrs: { id: '$id + "_selections_wrapper"' } })), Fb = Ge("selections", () => ({ $el: "div", attrs: { "aria-live": "polite", "aria-hidden": '$lastVisibleIndex && "true" || undefined', "data-test": "$lastVisibleIndex", id: '$id + "_selections"' } })), Rb = Ge("truncationCount", () => ({ $el: "div", attrs: { id: '$id + "_truncation_count"' } })), Bb = Ge("selectionsItem", () => ({ $el: "div", for: ["selectionLabel", "index", "$formattedSelections"], attrs: { id: '$id + "_selections_item_" + $index', "data-check": "$selectionLabel", key: "$selectionLabel", "aria-hidden": '$lastVisibleIndex && $index > $lastVisibleIndex && "true" || undefined', style: { visibility: '$lastVisibleIndex && $index > $lastVisibleIndex && "hidden" || undefined' } }, children: '$selectionLabel || ""' })), jb = Ge("tagWrapper", () => ({ $el: "span", for: ["option", "index", "$selections"], attrs: { id: '$id + "_tag-wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: "-1", onClick: "$handlers.tagClick && $handlers.tagClick($option)", onKeydown: "$handlers.selectorTagKeydownHandler($option)", onFocus: "$handlers.tagFocus && $handlers.tagFocus($option)", onBlur: "$handlers.tagBlur && $handlers.tagBlur($option)", "data-is-tag": "true", "data-active-selection": "$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)" } })), Hb = Ge("tag", () => ({ $el: "div", attrs: { id: '$id + "_tag_" + $index', role: "button", tabindex: "-1" } })), Zb = Ge("tagLabel", () => ({ $el: "span" })), Wb = Ge("tagsWrapper", () => ({ $el: "span", attrs: { id: '$id + "_tags_wrapper"', "aria-live": "polite" } })), Kb = Ge("tags", () => ({ $el: "span", attrs: { id: '$id + "_selections"' } })), Ub = Ge("tagLoading", "span"), zb = /* @__PURE__ */ Ei(Ge);
function lp(e) {
  return Er(e) && "value" in e && "label" in e;
}
function co(e) {
  return e ? e.reduce((t, r) => {
    var n;
    return ((n = t.at(-1)) === null || n === void 0 ? void 0 : n.type) === r.type ? t.at(-1).value += r.value : t.push({ type: r.type, value: r.value }), t;
  }, []) : [];
}
function Mr() {
  var e, t, r;
  const n = ((e = document.activeElement) === null || e === void 0 ? void 0 : e.tagName.toLowerCase()) || "";
  if (customElements.get(n)) {
    const s = (r = (t = document.activeElement) === null || t === void 0 ? void 0 : t.shadowRoot) === null || r === void 0 ? void 0 : r.activeElement;
    if (s) return s;
  }
  return document.activeElement;
}
function R(e) {
  return "__original" in e ? e.__original : e.value;
}
const Ln = /* @__PURE__ */ new WeakMap(), jt = { mutationObservers: 0, resizeObservers: 0, documentListeners: /* @__PURE__ */ new Map() };
function Sn(e, t) {
  Ln.has(e) || (Ln.set(e, /* @__PURE__ */ new Set()), e.on("destroyed", () => {
    const n = Ln.get(e);
    n && (n.forEach((s) => {
      try {
        s();
      } catch {
      }
    }), n.clear(), Ln.delete(e));
  }));
  const r = Ln.get(e);
  return r.add(t), () => {
    r.delete(t);
  };
}
function Ii(e, t) {
  const r = new MutationObserver(t);
  return jt.mutationObservers++, Sn(e, () => {
    r.disconnect(), jt.mutationObservers--;
  }), r;
}
function nd(e, t) {
  const r = new ResizeObserver(t);
  return jt.resizeObservers++, Sn(e, () => {
    r.disconnect(), jt.resizeObservers--;
  }), r;
}
function sd(e, t, r, n) {
  let s = null;
  const o = () => {
    s && s();
  };
  return Sn(e, o), { add: () => {
    if (!s) {
      document.addEventListener(t, r, n);
      const a = jt.documentListeners.get(t) || 0;
      jt.documentListeners.set(t, a + 1), s = () => {
        document.removeEventListener(t, r, n);
        const i = jt.documentListeners.get(t) || 1;
        i <= 1 ? jt.documentListeners.delete(t) : jt.documentListeners.set(t, i - 1), s = null;
      };
    }
  }, remove: o };
}
const od = /* @__PURE__ */ new WeakMap(), Ds = /* @__PURE__ */ new WeakMap(), pp = /* @__PURE__ */ new WeakSet();
async function Ct(e, t, r = !1, n = !1) {
  if (typeof e.props.optionsLoader == "function") {
    e.props.search = t, clearTimeout(Ds.get(e));
    const s = t ? e.props.debounce : 0;
    s === 0 ? fo(e, n) : ((function(o) {
      pp.has(o) || (pp.add(o), Sn(o, () => {
        const a = Ds.get(o);
        a && (clearTimeout(a), Ds.delete(o));
      }));
    })(e), Ds.set(e, setTimeout(() => {
      e.props.page = 1, fo(e, n);
    }, s)));
  } else if (Array.isArray(e.props.options)) {
    const s = JSON.parse(JSON.stringify(e.props.initialOptions));
    e.props.options = [...s.filter((o) => {
      if ("options" in o) {
        const a = o.options = [...o.options].filter((i) => e.props.filter(i, t ?? "", e));
        return a.length > 0 && { ...o, options: a };
      }
      return e.props.filter(o, t ?? "", e);
    })];
  }
}
function fo(e, t) {
  e.props.allowAppendOptions = t, yn(e);
}
const ad = /* @__PURE__ */ qe({ key: "loading", type: "state", value: !0, visible: !1 }), ns = /* @__PURE__ */ qe({ key: "loading", type: "state", value: !1, visible: !1 });
function Yb(e, t) {
  if (e.props.allowAppendOptions) return e.props.allowAppendOptions = !1, (function(n, s) {
    const o = Qs(s);
    n.props.appendingOptions = !0, n.props.activeValue = R(o[0]), n.props.options = n.props.options.concat(o);
  })(e, t);
  const r = Qs(t);
  e.props.options = r, e.props.options.length || (e.store.set(ns), e.store.set(qe({ key: "hasNextPage", type: "state", value: !1, visible: !1 }))), od.set(e, e.props.searchValue);
}
const id = /* @__PURE__ */ new WeakMap();
function ld(e, t, r) {
  if (e.store.set(ad), e.props.optionLoadingCounter++, e.props.multiple && e.props.selectionAppearance !== "truncate") {
    let a;
    a = mr(t) ? { label: "Loading...", value: String(t) } : { label: String(t), value: t }, e.props.optionLoaderValues.includes(a.value) || e.props.optionLoaderValues.push(a.value), e.props.type !== "transferlist" && e.props.multiple && e.props.selectionAppearance !== "text-input" && !e.props.selections.includes(a) && (e.props.selections = [...e.props.selections, a]);
  }
  const n = e.props.optionLoader(t, r), s = (a) => typeof a == "string" ? { label: a, value: t } : lp(a) ? a : Er(a) ? Object.assign({ label: String(t), value: t }, a) : { label: String(t), value: t }, o = (a) => {
    const i = e.props.memoOptions.findIndex((l) => J(R(l), R(a)));
    return i === -1 ? e.props.memoOptions = [...e.props.memoOptions, a] : e.props.memoOptions[i] = a, a;
  };
  return n instanceof Promise ? n.then((a) => {
    if (typeof a == "string" || lp(a)) return o(s(a));
  }).finally(() => {
    e.props.optionLoaderValues = e.props.optionLoaderValues.filter((a) => a !== t), e.props.optionLoadingCounter--;
  }) : (e.props.optionLoaderValues = e.props.optionLoaderValues.filter((a) => a !== t), e.props.optionLoadingCounter--, o(s(n)));
}
function yn(e) {
  e.store.set(ad), e.props.optionsLoadingCounter++, e.store.set(qe({ key: "hasNextPage", type: "state", value: !1, visible: !1 }));
  const t = e.props.nonceKey && e.props[e.props.nonceKey], r = e.props.optionsLoader(e.context, id.get(e)), n = Yb.bind(null, e), s = r instanceof Promise ? r.then((...o) => {
    e.props.nonceKey !== void 0 && t !== e.props[e.props.nonceKey] || n(...o);
  }) : (n(r), e.props.optionsLoadingCounter--);
  if (s instanceof Promise) return s.finally(() => {
    e.props.optionsLoadingCounter--;
  });
}
function pd(e, t) {
  e.props.page++, id.set(e, t), e.store.set(qe({ key: "hasNextPage", type: "state", value: !0, visible: !1 }));
}
const Cn = /* @__PURE__ */ Symbol(), Li = (e) => {
  const t = ((s) => {
    const o = [...s.props.allOptions, ...s.props.initialOptions];
    return [...s.props.memoOptions || [], ...o];
  })(e), r = e.props.inputStd || [], n = [];
  for (const s of r) {
    let o, a = t.find((i) => J(R(i), s));
    o = mr(s) ? void 0 : Array.isArray(s) ? s.join(", ") : s, a || (a = { value: s, label: o, isPlaceholder: !1, noOptionFound: !0 }), n.push(a);
  }
  return n;
};
function Lo(e, t) {
  if (e.props.optionRemoved = !0, t) {
    const r = (e.props.inputStd || []).filter((n) => !J(R(t), n));
    e.input(r);
  } else e.input(void 0);
  e.props.openOnRemove && !e.props.expanded && e.isCreated && (e.props.expanded = !0), setTimeout(() => {
    var r;
    return e.emit("selectRange", [(r = e.props.highlightedRange) === null || r === void 0 ? void 0 : r.option]);
  }, 20);
}
async function As(e) {
  const t = Li(e);
  e.props.resetSearchOnCommit && e.props.optionsLoader === "function" && (e.props.searchValue = ""), e.props.selections = [...t];
  const r = [...t, ...e.props.memoOptions];
  e.props.memoOptions = [...new Set(r)], (function(n) {
    var s, o;
    n.props.firstCommit ? n.props.firstCommit = !1 : at && n.isCreated && (n.props.optionRemoved ? n.props.optionRemoved = !1 : (n.props.expanded && n.props.closeOnSelect && (n.props.expanded = !1), n.props.userAction && (n.props.openOnFocus && (n.props.skipOpen = !0), n.props.userAction.type !== "tagDelete" && ((o = (s = n.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${n.props.id}`)) === null || o === void 0 || o.focus()), n.props.userAction = void 0)));
  })(e);
}
function Mi(e) {
  var t, r;
  if (e.props.allOptions && e.props.allOptions.length) if (!((t = e.props.highlightedRange) === null || t === void 0) && t.option.value) e.props.activeValue = R(e.props.highlightedRange.option);
  else {
    if (e.props.activeSelectionValue) {
      const n = e.props.allOptions.find((s) => J(R(s), e.props.activeSelectionValue));
      if (n) return void (e.props.activeValue = n.value);
    }
    if (e.props.reloadOnCommit) e.props.activeValue = R(e.props.allOptions[0]);
    else {
      if (e.props.searchValue && !e.props.appendingOptions) e.props.activeValue = R(e.props.allOptions[0]);
      else if (e.props.inputStd.length > 0 && !e.props.multiple || e.props.multiple && (!((r = e.context) === null || r === void 0) && r.state.dirty)) e.props.selections[e.props.selections.length - 1] ? e.props.activeValue = R(e.props.selections[e.props.selections.length - 1]) : e.props.activeValue = R(e.props.allOptions[0]);
      else {
        if (e.props.appendingOptions) return void (e.props.appendingOptions = !1);
        e.props.activeValue = R((function(n) {
          return n.props.allOptions.find((s) => {
            var o;
            return !(!((o = s.attrs) === null || o === void 0) && o.disabled);
          });
        })(e));
      }
      e.props.appendingOptions && (e.props.appendingOptions = !1);
    }
  }
}
function Ka(e) {
  return e.reduce((t, r) => (r.options ? t.push(...Ka(r.options)) : t.push(r), t), []);
}
function Pi(e, t) {
  var r, n;
  !((r = t.attrs) === null || r === void 0) && r.disabled || (R(t) !== Cn ? (e.props.option = t, e.props.maxReached && !Ua(e, t) || (e.input(ud(e, R(t))), Ua(e, t) && e.props.closeOnSelect && (e.props.expanded = !1))) : (n = e.context) === null || n === void 0 || n.handlers.loadMore(!0));
}
function ud(e, t) {
  if (e.props.multiple) {
    const r = Array.isArray(e.value) ? e.value : [];
    for (const n of r) if (J(n, t)) return e.props.optionRemoved = !0, r.filter((s) => !J(s, t));
    return [...r, t];
  }
  return J(t, e.value) && e.props.deselect ? void (e.props.optionRemoved = !0) : t;
}
function qb(e, t) {
  return J(e.props.activeValue, R(t)) || void 0;
}
function Ua(e, t) {
  if (e.props.multiple) {
    if (!Array.isArray(e.value)) return !1;
    for (const r of e.value) if (J(r, R(t))) return !0;
    return !1;
  }
  return J(e.value, R(t));
}
function up(e) {
  var t, r;
  if (!e.props.usePopover || e.props.behavior === "overscroll") return;
  const n = e.props.invertPopover ? e.props.popoverCoordinates.y - e.props.popoverCoordinates.height - e.props.popoverOffset - e.props.popoverAncestorCoordinates.height : e.props.popoverCoordinates.y + e.props.popoverOffset;
  e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, minWidth: 0, width: "100%", maxWidth: ((r = (t = e.props) === null || t === void 0 ? void 0 : t.popoverAncestorCoordinates) === null || r === void 0 ? void 0 : r.width) + "px", top: n + "px", bottom: "unset", left: e.props.popoverCoordinates.x + "px", margin: 0, padding: 0 };
}
function Gb(e) {
  e.props.firstCommit = !0;
  let t = null;
  e.on("commit", () => {
    if (e.props.inputStd.length === 0 && e.isCreated) return (function(r) {
      var n, s;
      r.props.selections = [], r.props.userAction && (r.props.userAction = void 0, r.props.openOnFocus && (r.props.skipOpen = !0), (s = (n = r.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${r.props.id}`)) === null || s === void 0 || s.focus()), r.props.optionRemoved = !1;
    })(e), void (t = e.props.inputStd);
    if (e.props.inputStd.length && typeof e.props.optionsLoader == "function" && e.props.options.length === 0 && typeof e.props.optionLoader != "function" && e.props.optionsLoadingCounter === 0) {
      e.props.optionsLoaded = !0;
      const r = yn(e);
      r instanceof Promise && r.then(() => {
        As(e);
      });
    }
    typeof e.props.optionLoader != "function" || e.props.optionRemoved || (function(r, n) {
      if (r === n) return !0;
      if (r == null || n == null || r.length !== n.length) return !1;
      for (let s = 0; s < r.length; ++s) if (r[s] !== n[s]) return !1;
      return !0;
    })(t, e.props.inputStd) ? e.props.optionsLoadingCounter === 0 && As(e) : (t = e.props.inputStd, (async function(r) {
      const n = Li(r);
      if ((r.props.inputStd.length > 1 ? r.props.inputStd.filter((o) => !r.props.memoOptions.find((a) => J(R(a), o))) : r.props.inputStd).forEach((o) => {
        ld(r, o, Array.isArray(n) && n.find((a) => J(R(a), o) && !a.noOptionFound));
      }), r.props.optionLoadingCounter) {
        const o = r.on("prop:optionLoadingCounter", () => {
          As(r), r.props.optionLoadingCounter || r.off(o);
        });
      } else As(r);
    })(e));
  });
}
const Mn = /* @__PURE__ */ new WeakSet();
function Xb(e) {
  if (!at) return;
  e.props.positionListBox = (function(a, i) {
    var l, p;
    let u = null;
    if (a.props.activeDescendant && (u = a.props.options.filter((d) => {
      var g;
      return !(!((g = d.attrs) === null || g === void 0) && g.disabled);
    }).findIndex((d) => J(a.value, R(d))), u === -1 && (u = null), !((l = a.props.__root) === null || l === void 0) && l.getElementById(a.props.activeDescendant) && cp(a)), typeof window > "u") return u;
    const c = i.getBoundingClientRect(), f = (p = a.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${a.props.id}`);
    if (f) {
      const d = f.getBoundingClientRect();
      d.top + d.height + c.height > window.innerHeight && d.top + d.height > c.height ? (a.props.invertPopover = !0, a.props.usePopover || (a.props.dropdownWrapperStyles = { ...a.props.dropdownWrapperStyles, top: "auto", bottom: "100%" })) : a.props.usePopover || (a.props.dropdownWrapperStyles = { ...a.props.dropdownWrapperStyles, bottom: "auto", top: "100%" });
    }
    return u;
  }).bind(null, e), e.props.styleWrapper = Jb.bind(null), e.on("mounted", () => {
    Ze(`${e.props.id}_popover`, n.bind(null, e), e.props.__root);
  });
  const t = sd(e, "mousemove", (a) => {
    var i;
    e.props.mouseX = a.clientX, e.props.mouseY = a.clientY;
    const l = (i = e.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${e.props.id}_popover`);
    if (l) {
      const p = l.getBoundingClientRect();
      a.clientX > p.x && a.clientX < p.x + p.width && a.clientY > p.y && a.clientY < p.y + p.height && (e.props.trackHover = !0);
    }
  }), r = () => {
    e.props.ignoreScroll ? e.props.ignoreScroll = !1 : e.props.trackHover = !0;
  };
  function n(a, i) {
    a.props.behavior !== "overscroll" && getComputedStyle(i).maxHeight === "none" && (a.props.dropdownWrapperStyles = { ...a.props.dropdownWrapperStyles, maxHeight: "400px" });
    const l = nd(a, () => {
      a.props.styleWrapper(), a.props.positionListBox(i);
    });
    Ii(a, (u) => {
      const c = u[0].target;
      if (a.props.behavior !== "overscroll" || c.id === `${a.props.id}_popover`) {
        const f = a.props.positionListBox(i);
        Mn.delete(a), s(a, f), l.observe(i);
      }
    }).observe(i, { childList: !0, subtree: !0 });
  }
  function s(a, i) {
    var l;
    if (!a.props.expanded || !a.props.options || !a.props.options.length || Mn.has(a)) return;
    const p = a.props.options.reduce((c, f, d) => {
      var g, v, $;
      if (!((g = f.attrs) === null || g === void 0) && g.disabled) return c;
      if ("group" in f && (!((v = f.options) === null || v === void 0) && v.length)) return f.options.forEach((S, m) => {
        var w;
        const C = (w = a.props.__root) === null || w === void 0 ? void 0 : w.getElementById(`${a.props.id}_listitem_${d}_${m}`);
        C && c.push([C, S]);
      }), c;
      const h = ($ = a.props.__root) === null || $ === void 0 ? void 0 : $.getElementById(`${a.props.id}_listitem_${d}`);
      return h && c.push([h, f]), c;
    }, []), u = (l = a.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${a.props.id}_load_more`);
    u && p.push([u, a.props.loadMoreOption]), Mn.add(a), p.length && o(a, p, i);
  }
  function o(a, i, l) {
    var p, u, c, f;
    const d = (p = a.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${a.props.id}_popover`);
    if (a.props.trackHover) {
      const g = d ? d.getBoundingClientRect() : { top: 0, bottom: 0 };
      if (l = null, a.props.mouseY > g.top && a.props.mouseY < g.bottom) {
        let v = l || 0, $ = l;
        const h = (S, m) => {
          var w;
          const C = m[0], { y: x, height: D, x: _, width: A } = C.getBoundingClientRect();
          if (a.props.mouseX > _ && a.props.mouseX < _ + A && a.props.mouseY > x && a.props.mouseY < x + D) {
            l = S;
            const k = m[1];
            return k && !(!((w = k.attrs) === null || w === void 0) && w.disabled) ? a.props.activeValue = R(k) : a.props.activeValue = void 0, !0;
          }
          return !1;
        };
        do {
          if (v !== null && h(v, i[v]) || $ !== null && h($, i[$])) break;
          v !== null && (v++, v > i.length - 1 && (v = null)), $ !== null && ($--, $ < 0 && ($ = null));
        } while (v !== null || $ !== null);
      }
      l === null && (a.props.activeValue = void 0);
    }
    a.props.trackHover || cp(a), a.props.expanded ? (d && a.props.loadOnScroll && !(!((u = a.store.loading) === null || u === void 0) && u.value) && (!((c = a.store.hasNextPage) === null || c === void 0) && c.value) && d.scrollTop + d.offsetHeight > d.scrollHeight - 200 && ((f = a.context) === null || f === void 0 || f.handlers.loadMore(!0)), Mn.has(a) ? requestAnimationFrame(o.bind(null, a, i, l)) : s(a, l)) : Mn.delete(a);
  }
  e.on("prop:trackHover", ({ payload: a }) => {
    var i, l, p;
    at && (a ? (p = (l = e.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${e.props.id}_popover`)) === null || p === void 0 || p.removeEventListener("scroll", r) : (i = e.props.__root) === null || i === void 0 || i.getElementById(`${e.props.id}_popover`));
  }), e.on("prop:expanded", ({ payload: a }) => {
    e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, zIndex: a || e.props.forceExpanded ? "999" : "-1", pointerEvents: a ? "auto" : "none" }, a ? (t.add(), e.props.styleWrapper(), Mi(e)) : t.remove();
  }), e.on("prop:trackHover", ({ payload: a }) => {
    var i, l;
    at && (a ? (l = document.getElementById(`${e.props.id}_popover`)) === null || l === void 0 || l.removeEventListener("scroll", r) : (i = document.getElementById(`${e.props.id}_popover`)) === null || i === void 0 || i.addEventListener("scroll", r));
  }), e.on("prop:activeValue", ({ payload: a }) => {
    if (a === Cn) return void (e.props.activeDescendant = `${e.props.id}_load_more`);
    let i, l = -1;
    for (let p = 0; p < e.props.options.length; p++) {
      if ("group" in e.props.options[p]) {
        for (let u = 0; u < e.props.options[p].options.length; u++) if (J(R(e.props.options[p].options[u]), a)) {
          l = u, i = p;
          break;
        }
      }
      if (J(R(e.props.options[p]), a)) {
        l = p;
        break;
      }
    }
    e.props.activeDescendant = l < 0 ? void 0 : i === void 0 ? `${e.props.id}_listitem_${l}` : `${e.props.id}_listitem_${i}_${l}`;
  });
}
function cp(e) {
  var t, r;
  if (!at) return;
  const n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_popover`), s = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
  if (!n || !s) return;
  const { y: o, height: a } = s.getBoundingClientRect(), { y: i, height: l } = n.getBoundingClientRect();
  o < i ? (e.props.ignoreScroll = !0, n.scrollTop = s.offsetTop) : o + a > i + l && (e.props.ignoreScroll = !0, n.scrollTop = s.offsetTop + a - l);
}
function Jb() {
}
const za = /* @__PURE__ */ new WeakMap();
function Qb(e) {
  e.on("created", () => {
    if (!e.context || !at) return;
    e.context.fns.isActive = qb.bind(null, e), e.context.fns.isSelected = (r) => Ua(e, r), e.context.fns.hasOptionLoaderValue = (r) => {
      for (const n of e.props.optionLoaderValues) if (J(R(r), n)) return !0;
      return !1;
    }, e.context.handlers.listitemGroupClick = l_, e.context.handlers.selectOption = (r) => (n) => p_.call(null, e, r, n), e.context.handlers.loadMore = fo.bind(null, e), e.context.handlers.removeSelection = (r) => (n) => dp(e, r, n), e.context.handlers.tagTouchstart = (r) => (n) => dp(e, r, n), e.context.handlers.selectionClick = (r) => e.props.multiple ? n_.bind(null, e, r) : r_.bind(null, e), e.context.handlers.selectionBlur = () => s_.bind(null, e), e.context.fns.isActiveSelection = (r, n) => J(r, R(n)), e.context.handlers.tagClick = (r) => o_.bind(null, e, r), e.context.handlers.tagFocus = (r) => a_.bind(null, e, r), e.context.handlers.tagBlur = () => i_.bind(null, e);
    const t = e.context.handlers.blur;
    e.context.handlers.blur = (function(r, n) {
      var s;
      if (n && n.relatedTarget instanceof HTMLElement) {
        const o = (s = r.props.__root) === null || s === void 0 ? void 0 : s.getElementById(r.props.id + "_inner");
        if (o instanceof HTMLElement && o.contains(n.relatedTarget)) return;
      }
      t(), (function(o) {
        o.props.disabled || (o.props.expanded = !1, o.props.activeSelectionValue = void 0, o.emit("blur"));
      })(r);
    }).bind(null, e), e.context.handlers.touchmove = e_.bind(null, e), e.context.handlers.touchend = t_.bind(null, e);
  });
}
function e_(e, t) {
  var r;
  const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  if (n instanceof HTMLInputElement) {
    const s = za.get(e);
    if (s) {
      const [o, a] = s, i = t.touches[0].clientX - a;
      n.scrollLeft = o - i;
    } else za.set(e, [n.scrollLeft, t.changedTouches[0].clientX]);
  }
}
function t_(e) {
  za.delete(e);
}
function r_(e, t) {
  e.props.disabled || ((!e.props.expanded && e.props.openOnClick || e.props.openOnFocus) && (e.props.expanded = !0), t.currentTarget instanceof HTMLElement && t.currentTarget.focus());
}
function n_(e, t, r) {
  r.currentTarget instanceof HTMLElement && (J(e.props.activeSelectionValue, R(t)) ? e.props.activeSelectionValue = void 0 : (e.props.activeSelectionValue = R(t), r.currentTarget.focus()));
}
function s_(e, t) {
  var r;
  if (t.relatedTarget instanceof HTMLElement) {
    const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_inner");
    if (n instanceof HTMLElement && n.contains(t.relatedTarget)) return;
  }
  e.props.activeSelectionValue = void 0;
}
function o_(e, t, r) {
  r.stopPropagation(), e.props.disabled || (e.props.justFocused ? e.props.justFocused = !1 : r.currentTarget instanceof HTMLElement && (J(e.props.activeSelectionValue, R(t)) ? e.props.activeSelectionValue = void 0 : (e.props.activeSelectionValue = R(t), r.currentTarget.focus())));
}
function a_(e, t, r) {
  r.stopPropagation(), e.props.disabled || r.currentTarget instanceof HTMLElement && (e.props.activeSelectionValue = R(t), e.props.justFocused = !0);
}
function i_(e, t) {
  var r;
  if (t.relatedTarget instanceof HTMLElement) {
    const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_inner");
    if (n instanceof HTMLElement && n.contains(t.relatedTarget)) return;
  }
  e.props.activeSelectionValue = void 0;
}
function dp(e, t, r) {
  r && r.stopPropagation(), e.props.disabled || (e.props.userAction = { type: "handleRemoveSelection" }, Lo(e, t));
}
function l_(e) {
  e.stopPropagation();
}
function p_(e, t, r) {
  r.stopPropagation(), e.props.disabled || (e.props.userAction = { type: "handleListitemClick" }, Pi(e, t));
}
function Vi(e, t, r, n) {
  (function(s) {
    s.addProps(["options", "expanded", "placeholder", "multiple", "selections", "activeValue", "activeDescendant", "forceExpanded", "optionLoader", "showEmptyMessage", "emptyMessage", "option", "listboxStyles", "invertPopover", "dropdownWrapperStyles", "optionsLoader", "loadMoreOption", "hasNextPage", "page", "behavior", "selectionRemovable", "openOnRemove", "clearOnClick", "openOnClick", "hideOnOpen", "closeOnSelect", "openOnFocus", "selectionAppearance", "optionsAppearance", "filter", "inputText", "formattedSelections", "lastVisibleIndex", "optionLoaderValues", "disabledInternally", "isLoadingOption", "isLoadingOptions", "thereIsAnOptionSelected", "formattedSelections", "activeSelections", "allowNewValues", "inputStd", "isSingleOption", "max", "disableDragAndDrop", "clearSearchOnOpen", "firstSelectionLabel", "memoOptions", "loadOnCreated", "alwaysLoadOnOpen", "showFormattedSelections", "truncationCount", "reloadOnCommit", "activeSelectionValue", "setForceExpanded", "option", "loadOnScroll", "optionsLoadingCounter", "optionLoadingCounter", "draggable", "deselect"]), s.props.deselect === void 0 ? s.props.deselect = !0 : s.props.deselect = Y(s.props.deselect), s.props.option = {}, s.props.expanded = !1, s.props.inputStd = [], s.props.draggable === void 0 ? s.props.draggable = !0 : s.props.draggable === "false" && (s.props.draggable = !1), s.props.options || (yr(350, { node: s, inputType: s.props.type }), s.props.options = []), "disabled" in s.props && (s.props.disabled = Y(s.props.disabled)), s.props.allOptions = Ka(s.props.options), s.props.selections = [], s.props.memoOptions = [], s.props.invertPopover = !1, s.props.dropdownWrapperStyles = { position: "absolute", top: "100%", overflow: "auto", minWidth: "100%" }, s.props.decrementCount = 0, s.props.page = 1, s.props.loadMoreOption = { label: "Load more", value: Cn }, s.props.loadOptions = yn, s.props.listboxStyles = {}, s.props.optionsLoadingCounter = 0, s.props.optionLoadingCounter = 0, s.props.searchable = Y(s.props.searchable), s.props.loadOnScroll = Y(s.props.loadOnScroll), s.props.multiple = Y(s.props.multiple) || !1, s.props.type === "taglist" && (s.props.multiple = !0), s.props.openOnFocus = Y(s.props.openOnFocus), s.props.openOnRemove = s.props.openOnRemove !== void 0 && Y(s.props.openOnRemove), s.props.hasNextPage = pd.bind(null, s), s.props.initialOptions = [...s.props.options], s.props.optionLoaderValues = [], s.props.loadOnCreated = Y(s.props.loadOnCreated), s.props.max && typeof s.props.max != "number" ? s.props.max = parseInt(s.props.max) : s.props.max && !s.props.multiple && (s.props.max = void 0), s.on("mounted", () => up(s)), s.on("prop:popoverCoordinates", () => setTimeout(() => {
      up(s);
    }, 10));
  })(n), n.props.multiple ? (function(s) {
    s.hook.input((o, a) => (s.props.highlightedRange && !s.props.optionRemoved && (o.splice(s.props.highlightedRange.index, 1, R(s.props.option)), o = o.filter((i) => i !== void 0)), s.props.inputStd = o && Array.isArray(o) ? [...new Set(o)] : [], a(o === void 0 ? void 0 : [...s.props.inputStd])));
  })(n) : (function(s) {
    s.hook.input((o, a) => (s.props.inputStd = o === void 0 || o === "" || o === null ? [] : [o], a(o)));
  })(n), e(n), Gb(n), (function(s) {
    s.on("created", () => {
      s.context && (s.props.trackHover = !0, s.props.disabled !== void 0 || s.props.optionsLoader || !s.props.options || s.props.options.length || s.props.emptyMessage !== void 0 || s.props.allowNewValues || s.props.inputStd.length !== 0 || (s.props.disabledInternally = !0), Xb(s), s.props.loadOnCreated && !s.props.optionsLoaded && s.props.optionsLoader ? yn(s) : s.props.optionsLoaded && (s.props.optionsLoaded = !1), s.props.forceExpanded = Y(s.props.forceExpanded), s.props.forceExpanded && (s.props.dropdownWrapperStyles = { ...s.props.dropdownWrapperStyles, zIndex: "999", pointerEvents: "auto" }, setTimeout(() => {
        s.props.setForceExpanded = !0;
      }, 100)));
    });
  })(n), Qb(n), t(n), (function(s) {
    const o = sd(s, "click", () => {
      s.props.activeSelectionValue = void 0, s.props.expanded = !1;
    });
    s.on("prop:selections", ({ payload: a }) => {
      s.props.max && (s.props.maxReached = a.length >= s.props.max);
    }), s.on("prop:maxReached", ({ payload: a }) => {
      a && (s.props.expanded = !1);
    }), s.on("prop:optionsLoadingCounter", ({ payload: a }) => {
      a === 0 && (s.props.emptyMessage && (s.props.showEmptyMessage = !s.props.options.length), s.props.optionLoadingCounter === 0 && s.store.set(ns));
    }), s.on("prop:optionLoadingCounter", ({ payload: a }) => {
      a === 0 && s.props.optionsLoadingCounter === 0 && s.store.set(ns);
    }), s.on("prop:disabled", ({ payload: a }) => {
      a && (s.props.expanded = !1);
    }), s.on("prop:options", ({ payload: a }) => {
      s.props.allOptions = Ka(s.props.options), s.props.emptyMessage && typeof s.props.optionsLoader != "function" && (s.props.showEmptyMessage = !a.length), a.length ? s.props.disabledInternally = !1 : a.length || s.props.optionsLoader || s.props.emptyMessage !== void 0 || s.props.allowNewValues || s.props.inputStd.length !== 0 || s.props.searchValue || (s.props.disabledInternally = !0), Mi(s);
    }), s.on("prop:expanded", ({ payload: a }) => {
      var i;
      if (at) if (s.props.alwaysLoadOnOpen && (s.props.page = 1), a) {
        if (s.props.trackHover = !1, s.props.options && !s.props.options.length && typeof s.props.optionsLoader != "function" && s.props.emptyMessage && (s.props.showEmptyMessage = !0), setTimeout(() => o.add(), 10), s.props.selectionAppearance === "text-input" && s.props.multiple) return;
        const l = (i = s.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${s.props.id}`);
        l instanceof HTMLInputElement && (l.focus(), s.props.searchExpand || (l.value = "", l.value = s.props.inputText));
      } else o.remove(), s.props.trackHover = !1, s.props.showEmptyMessage = !1;
    });
  })(n), r(n);
}
function u_(e) {
  e.props.closeOnSelect === void 0 ? e.props.closeOnSelect = !e.props.multiple : e.props.closeOnSelect = Y(e.props.closeOnSelect), (e.props.multiple && e.props.selectionAppearance === void 0 || e.props.selectionAppearance === "truncate") && (e.props.selectionAppearance = "truncate", e.props.formattedSelections = []), e.props.multiple ? e.props.selectionRemovable = !1 : e.props.selectionRemovable = Y(e.props.selectionRemovable);
}
function cd(e) {
  var t, r;
  e.props.searchValue || (r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || r === void 0 || r.focus();
}
function dd(e, t, r) {
  var n, s, o;
  if (r.preventDefault(), e.props.trackHover = !1, e.props.expanded) {
    const a = e.props.allOptions.reduce((l, p) => {
      var u;
      return !((u = p?.attrs) === null || u === void 0) && u.disabled || l.push(R(p)), l;
    }, []);
    !((n = e.store.hasNextPage) === null || n === void 0) && n.value && a.push(Cn);
    let i = -1;
    e.props.activeValue && (i = a.findIndex((l) => J(l, e.props.activeValue))), i === -1 && a.length ? e.props.activeValue = a[0] : t === "ArrowDown" && a.length > i + 1 ? e.props.activeValue = a[i + 1] : t === "ArrowUp" && i > 0 ? e.props.activeValue = a[i - 1] : t === "ArrowUp" && i === 0 && ((o = (s = e.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || o === void 0 || o.focus(), e.props.expanded = !1);
  } else e.props.expanded || t !== "ArrowDown" || (e.props.expanded = !0);
}
function fd(e, t) {
  var r, n, s;
  if ((e.props.type === "taglist" || e.props.selectionAppearance === "tags") && e.props.inputStd.length && !e.props.inputText) {
    if (t === "ArrowLeft") return e.props.selections.length && ((n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || n === void 0 || n.focus(), e.props.selections[e.props.selections.length - 1] ? e.props.activeSelectionValue = R(e.props.selections[e.props.selections.length - 1]) : e.props.activeSelectionValue = void 0), void (e.props.expanded = !1);
    t === "ArrowRight" && ((s = document.getElementById(`${e.props.id}_tag-wrapper_0`)) === null || s === void 0 || s.focus(), e.props.selections[0] ? e.props.activeSelectionValue = R(e.props.selections[0]) : e.props.activeSelectionValue = void 0), e.props.expanded = !1;
  }
}
function hd(e) {
  var t, r;
  e.props.expanded = !0, (r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}`)) === null || r === void 0 || r.focus();
}
function md(e, t, r, n = !0) {
  var s, o, a, i, l, p, u;
  const c = r.key;
  if (r.altKey) {
    const f = Mr(), d = e.props.selections.findIndex((v) => J(R(v), R(t))), g = [...e.props.selections];
    r.key === "ArrowRight" ? d < e.props.selections.length - 1 && (g.splice(d, 1), g.splice(d + 1, 0, t)) : r.key === "ArrowLeft" && d > 0 && (g.splice(d, 1), g.splice(d - 1, 0, t)), e.props.activeSelectionValue = R(t), e.input([...g.map(R)]), setTimeout(() => {
      f instanceof HTMLElement && f.focus();
    }, 100);
  } else {
    const f = e.props.selections.findIndex((v) => J(R(v), R(t)));
    if (f === -1) return;
    const d = c === "ArrowRight" ? f + 1 : f - 1;
    if (d >= e.props.selections.length) {
      if (!n) return e.props.expanded = !0, e.props.activeSelectionValue = void 0, void ((o = (s = e.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${e.props.id}`)) === null || o === void 0 || o.focus());
      (i = (a = e.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${e.props.id}`)) === null || i === void 0 || i.focus();
    } else if (d < 0 && f === 0) (p = (l = e.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${e.props.id}`)) === null || p === void 0 || p.focus();
    else if (d < 0) return;
    const g = (u = e.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${e.props.id}_tag-wrapper_${d}`);
    g && g.focus(), e.props.selections[d] ? e.props.activeSelectionValue = R(e.props.selections[d]) : e.props.activeSelectionValue = void 0;
  }
}
function vd(e, t, r) {
  var n;
  if (!(r.currentTarget instanceof HTMLElement) || e.props.searchValue) return;
  const s = e.props.selections.findIndex((i) => J(R(i), R(t)));
  if (s === -1) return;
  const o = e.props.selections[s + 1] ? s + 1 : s - 1, a = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}_tag-wrapper_${o}`);
  a && a.focus(), e.props.userAction = { type: "tagDelete" }, Lo(e, t);
}
function gd(e, t) {
  var r;
  if (t.preventDefault(), e.props.allowNewValues && e.props.searchValue && e.input(ud(e, e.props.searchValue)), e.props.expanded) {
    if (e.props.activeValue === Cn) return void ((r = e.context) === null || r === void 0 || r.handlers.loadMore(!0));
    const n = e.props.allOptions.find((s) => J(R(s), e.props.activeValue));
    if (!n) return;
    Pi(e, n);
  } else e.props.expanded = !0;
}
function yd(e) {
  e.props.expanded && (e.props.expanded = !1);
}
function c_(e, t, r) {
  if (r.stopPropagation(), !e.props.disabled)
    switch (r.key) {
      case "ArrowDown":
        hd(e);
        break;
      case "ArrowRight":
      case "ArrowLeft":
        md(e, t, r, !1);
        break;
      case "Delete":
      case "Backspace":
        vd(e, t, r);
    }
}
function d_(e, t, r) {
  if (!e.props.disabled)
    switch (r.key) {
      case "ArrowUp":
      case "ArrowDown":
        (function(n, s, o) {
          var a, i, l, p;
          o.preventDefault();
          const u = o.key, c = n.props.selections.findIndex((g) => J(R(g), R(s)));
          if (c === -1) return;
          const f = u === "ArrowDown" ? c + 1 : c - 1;
          if (f < 0 && ((i = (a = n.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${n.props.id}`)) === null || i === void 0 || i.focus()), f < 0 || f >= n.props.selections.length) return;
          const d = (l = n.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${n.props.id}_selection_wrapper_${f}`);
          d && d.focus(), n.props.activeSelectionValue = ((p = n.props.selections[f]) === null || p === void 0 ? void 0 : p.value) || void 0;
        })(e, t, r);
        break;
      case "Enter":
        break;
      case "Tab":
        (function(n, s, o) {
          var a, i, l, p;
          if (s) {
            const u = n.props.selections.findIndex((d) => J(R(d), R(s)));
            if (u === -1) return;
            const c = o.shiftKey ? u - 1 : u + 1;
            if (c >= n.props.selections.length) return;
            if (c < 0) return void ((i = (a = n.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${n.props.id}`)) === null || i === void 0 || i.focus());
            const f = (l = n.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${n.props.id}_selection_wrapper_${c}`);
            f && f.focus(), n.props.activeSelectionValue = ((p = n.props.selections[c]) === null || p === void 0 ? void 0 : p.value) || void 0;
          }
        })(e, t, r);
        break;
      case "Delete":
      case "Backspace":
        (function(n, s) {
          var o;
          if (s) {
            const a = n.props.selections.findIndex((p) => J(R(p), R(s)));
            if (a === -1) return;
            const i = n.props.selections[a + 1] ? a + 1 : a - 1, l = (o = n.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${n.props.id}_selection_wrapper_${i}`);
            l && l.focus(), n.props.selections[i] ? n.props.activeSelectionValue = R(n.props.selections[i]) : n.props.activeSelectionValue = void 0;
          }
          s && n.props.selections.length !== 1 || (n.props.userAction = { type: "selectionDelete" }), Lo(n, s);
        })(e, t);
    }
}
function f_(e, t) {
  if (e.props.disabled || !(t.currentTarget instanceof HTMLElement) || e.props.id !== t.currentTarget.id) return;
  const r = t.key;
  switch (r) {
    case "Tab":
      (function(n) {
        n.props.expanded && (n.props.expanded = !1);
      })(e);
      break;
    case "ArrowUp":
    case "ArrowDown":
      dd(e, r, t);
      break;
    case "ArrowLeft":
    case "ArrowRight":
      fd(e, r);
      break;
    case "Enter":
      gd(e, t);
      break;
    case "Escape":
      yd(e);
      break;
    case "Delete":
    case "Backspace":
      cd(e);
      break;
    default:
      e.emit("unusedKeydown", t);
  }
}
function h_(e, t) {
  if (e.props.disabled || !(t.currentTarget instanceof HTMLElement) || e.props.id !== t.currentTarget.id) return;
  const r = t.key;
  switch (r) {
    case "Tab":
      (function(n, s) {
        var o, a, i;
        n.props.expanded = !1, n.props.multiple && n.props.selections.length && n.props.type === "autocomplete" && n.props.selectionAppearance === "option" && (s.preventDefault(), (a = (o = n.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${n.props.id}_selection_wrapper_0`)) === null || a === void 0 || a.focus(), n.props.activeSelectionValue = ((i = n.props.selections[0]) === null || i === void 0 ? void 0 : i.value) || void 0);
      })(e, t);
      break;
    case "ArrowUp":
    case "ArrowDown":
      dd(e, r, t);
      break;
    case "ArrowRight":
    case "ArrowLeft":
      fd(e, r);
      break;
    case "Enter":
      gd(e, t);
      break;
    case "Escape":
      yd(e);
      break;
    case "Delete":
    case "Backspace":
      cd(e);
  }
}
function m_(e) {
  e.props.alwaysLoadOnOpen = e.props.alwaysLoadOnOpen !== void 0 && Y(e.props.alwaysLoadOnOpen), e.on("created", () => {
    e.context && (e.context.handlers.click = v_.bind(null, e), e.context.handlers.focus = g_.bind(null, e), e.context.handlers.keydown = f_.bind(null, e), e.context.handlers.selectorTagKeydownHandler = (t) => c_.bind(null, e, t));
  });
}
function v_(e, t) {
  var r;
  if (t.stopPropagation(), t.detail === 0 || e.props.disabled) return;
  e.props.attrs.onClick && e.props.attrs.onClick(t);
  const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  e.props.justOpened ? e.props.justOpened = !1 : e.props.expanded ? e.props.expanded = !1 : (n && t.pointerType !== "mouse" ? (e.props.mouseX = -1, e.props.mouseY = -1) : (e.props.mouseX = t.clientX, e.props.mouseY = t.clientY), e.props.expanded = !0, n?.focus());
}
function g_(e) {
  e.props.disabled || (e.props.attrs.onFocus && e.props.attrs.onFocus(), e.props.skipOpen ? e.props.skipOpen = !1 : e.props.openOnFocus && (e.props.justOpened = !0, e.props.expanded = !0));
}
function y_(e) {
  let t, r = "";
  e.on("unusedKeydown", ({ payload: n }) => {
    if (!n.isComposing && [...n.key].length === 1) {
      if (!r && n.key === " ") return void (function(o, a) {
        var i;
        if (a.preventDefault(), o.props.expanded) {
          if (o.props.activeValue === Cn) return void ((i = o.context) === null || i === void 0 || i.handlers.loadMore());
          const l = o.props.allOptions.find((p) => J(R(p), o.props.activeValue));
          if (!l) return;
          Pi(o, l);
        } else o.props.expanded = !0;
      })(e, n);
      e.props.expanded = !0, clearTimeout(t), r += n.key;
      const s = e.props.allOptions.find((o) => o.label.toLowerCase().startsWith(r.toLowerCase()));
      s && (e.props.activeValue = R(s)), t = setTimeout(() => {
        r = "";
      }, 400);
    }
  });
}
function fp(e) {
  ho(e), e.on("prop:selections", () => {
    e.props.skipFormatSelections = !1, ho(e);
  }), at && Ze(`${e.props.id}_selections`, $_.bind(null, e), e.props.__root);
}
function ho(e) {
  e.isCreated && (e.props.selections.length && e.props.lastVisibleIndex && e.props.selections.length - e.props.lastVisibleIndex > 1 ? e.props.truncationCount = "+ " + (e.props.selections.length - e.props.lastVisibleIndex - 1).toString() : e.props.truncationCount = void 0, e.props.formattedSelections = e.props.selections.map((t, r) => e.props.lastVisibleIndex && r === e.props.lastVisibleIndex && r !== 0 ? e.props.lastTruncatedElText && r === e.props.selections.length - 1 ? e.props.lastTruncatedElText : r === e.props.selections.length - 1 ? t.label : t.label + "..." : r === e.props.selections.length - 1 ? t.label : t.label + ", "));
}
function hp(e) {
  var t, r;
  if (!at || !e.context) return;
  const n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_selections`);
  if (!(n instanceof HTMLElement)) return;
  const s = n.parentNode;
  if (!(s instanceof HTMLElement)) return;
  let o = n.getBoundingClientRect().width;
  const a = 0.98 * s.getBoundingClientRect().width, i = Array.prototype.slice.call(n.children), l = [...e.props.selections];
  if (o > a) {
    const p = [];
    let u = 0;
    for (let c = 0; c < l.length; c++) p.push([l[c], i[c]]);
    for (let c = p.length - 1; c >= 0; c--) {
      const f = p[c];
      if (!(f[1] instanceof HTMLElement)) return;
      u += f[1].getBoundingClientRect().width + parseFloat(window.getComputedStyle(f[1]).marginRight) + parseFloat(window.getComputedStyle(f[1]).marginLeft);
      const d = o - u;
      if (a > d) {
        const g = f[0].label;
        e.props.skipFormatSelections = !0, f[1].textContent = g;
        let v = !1;
        for (let $ = g.length; $ >= 0; $--) {
          if (e.props.skipFormatSelections = !0, f[1].textContent = g.slice(0, $).trim() + "...", d + f[1].getBoundingClientRect().width < a) {
            if ($ < 4) {
              e.props.lastVisibleIndex = c - 1, e.props.lastTruncatedElText = null;
              break;
            }
            if (e.props.lastVisibleIndex = c, e.props.lastTruncatedElText && f[1].textContent.slice(0, 4) === e.props.lastTruncatedElText.slice(0, 4)) break;
            e.props.lastTruncatedElText = (r = f[1]) === null || r === void 0 ? void 0 : r.textContent;
            break;
          }
          $ === 0 && (v = !0);
        }
        f[1].textContent = e.props.lastTruncatedElText && !v && c !== 0 ? e.props.lastTruncatedElText : g, e.props.lastVisibleIndex === null && (e.props.lastVisibleIndex = c === 0 ? 0 : c - 1, e.props.lastTruncatedElText = null), setTimeout(() => {
          ho(e);
        });
        break;
      }
    }
  } else e.props.lastTruncatedElText = null, e.props.lastVisibleIndex = null, ho(e);
}
function $_(e, t) {
  const r = new ResizeObserver(() => {
    e.props.selections && e.props.selections.length !== 0 && (e.props.skipFormatSelections ? e.props.skipFormatSelections = !1 : hp(e));
  }), n = new ResizeObserver(() => {
    hp(e);
  });
  r.observe(t), t.parentNode instanceof Element && n.observe(t.parentNode);
}
const b_ = { position: "fixed", top: 0, bottom: 0, right: 0, left: 0, pointerEvents: "none", zIndex: -1, overflowY: "auto", "-webkit-overflow-scrolling": "auto" }, sa = { position: "fixed", overflow: "hidden", height: "100%", width: "100%" }, oa = { overflow: "hidden", height: "100%" }, mp = {}, vp = {};
let aa = 0;
function __(e) {
  var t, r;
  if (typeof window > "u") return;
  const n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_popover`), s = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  if (!s || !n) return;
  const o = n.style.paddingTop, a = n.style.paddingBottom, i = n.style.paddingLeft;
  n.style.paddingTop = "0", n.style.paddingBottom = "0", n.style.paddingLeft = "0";
  const l = s.getBoundingClientRect(), p = n.getBoundingClientRect(), u = Math.round(l.top - p.top) + "px", c = Math.round(l.left - p.left - 5) + "px", f = Math.max(Math.round(Math.min(p.height - p.top, window.innerHeight) - (l.top + l.height)), 0) + "px";
  n.style.paddingTop = o, n.style.paddingBottom = a, n.style.paddingLeft = i, e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, paddingTop: u, paddingLeft: c, paddingBottom: f }, e.props.listboxStyles = { ...e.props.listboxStyles, minWidth: e.props.behavior === "overscroll" ? `min(${l.width + "px"}, calc(100vw - 4em))` : l.width + "px", maxWidth: "calc(100vw - 4em)" };
}
function x_(e, t) {
  var r, n;
  let s = null;
  if (e.props.activeDescendant) {
    const o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
    if (!o) return s;
    e.props.ignoreScroll = !0;
    const a = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}_listbox`);
    if (!a) return s;
    const i = t.getBoundingClientRect(), l = a.getBoundingClientRect(), p = parseInt(getComputedStyle(t).paddingTop), u = parseInt(getComputedStyle(t).paddingBottom), c = o.offsetTop - p, f = Math.max(c - p, 0), d = Math.max(t.scrollHeight - u - c - i.height, 0), g = l.height - f - d;
    t.scrollTop = c;
    const v = () => {
      t.scrollTop = d > 0 ? d < p ? t.scrollHeight : p : f < u ? 0 : c - u;
    }, $ = Math.min(150, l.height);
    f > 0 && d > 0 || f === 0 && d === 0 || g > $ ? t.scrollTop = c : v(), t.clientHeight / 2 < t.scrollTop && (s = e.props.options.filter((h) => {
      var S;
      return !(!((S = h.attrs) === null || S === void 0) && S.disabled);
    }).findIndex((h) => J(e.value, R(h)))), s === -1 && (s = null);
  }
  return s;
}
function w_(e) {
  e.addProps(["behavior"]), e.on("created", () => {
    e.props.behavior === "overscroll" && (typeof e.props.optionsLoader == "function" && ot(300, [e]), e.props.dropdownWrapperStyles = gr(b_), e.props.listboxStyles = { display: "inline-block" }, e.props.styleWrapper = __.bind(null, e), e.props.positionListBox = x_.bind(null, e));
  }), e.on("prop:expanded", ({ payload: t }) => {
    e.props.behavior === "overscroll" && (t ? (function() {
      aa = document.documentElement.scrollTop;
      for (const r in sa) vp[r] = document.documentElement.style[r], document.documentElement.style[r] = sa[r];
      for (const r in oa) mp[r] = document.body.style[r], document.body.style[r] = oa[r];
      document.body.scrollTop = aa;
    })() : (function() {
      for (const r in sa) document.documentElement.style[r] = vp[r];
      for (const r in oa) document.body.style[r] = mp[r];
      document.body.scrollTop = 0, document.documentElement.scrollTop = aa;
    })());
  });
}
function $d(e) {
  e.addProps(["multiLine"]), e.on("created", () => {
    at && (e.props.multiLineHeight = void 0, Ze(`${e.props.id}_selections`, k_.bind(null, e), e.props.__root));
  });
}
function k_(e) {
  var t;
  const r = nd(e, (s) => {
    for (const o of s) {
      const { height: a } = o.contentRect;
      e.props.selectionsHeight !== a && (e.props.selectionsHeight = a), S_(e, o.target);
    }
  }), n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_selections`);
  n && r.observe(n);
}
function S_(e, t) {
  var r;
  const n = t.querySelectorAll(`[id^="${e.props.id}_tag-wrapper"`);
  let s, o = [];
  if (e.props.type === "taglist") {
    const i = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
    if (!i) return;
    o = [i, ...Array.from(n)];
  } else o = Array.from(n);
  if (!n) return;
  let a = !1;
  for (const i of o) if (s === void 0) s = i.getBoundingClientRect();
  else {
    const l = i.getBoundingClientRect();
    if (s.top >= l.top + l.height / 5 || s.top <= l.top - l.height / 5) {
      a = !0, e.props.multiLine = !0;
      break;
    }
  }
  a || (e.props.multiLine = !1);
}
function C_(e) {
  if (e.on("created", () => {
    e.context && y_(e);
  }), e.props.multiple || (function(t) {
    t.on("prop:selections", ({ payload: r }) => {
      var n;
      t.props.firstSelectionLabel = ((n = r[0]) === null || n === void 0 ? void 0 : n.label) || "", t.props.option = r[0];
    });
  })(e), e.props.selectionAppearance === "truncate" && (e.props.lastVisibleIndex = null, fp(e), e.on("prop:selections", () => {
    fp(e);
  })), e.props.selectionAppearance === "tags" && $d(e), e.props.multiple && e.props.selectionAppearance === "tags") {
    let t = function() {
      return Array.isArray(e.value) ? e.value : [];
    }, r = function(n, s) {
      e.input(n);
    };
    e.on("created", () => {
      e.props.disabled && (e.props.draggable = !1), Ze(`${e.props.id}_selections`, (n) => {
        if (e.context && n instanceof HTMLElement) {
          const s = { threshold: { horizontal: 0.25, vertical: 0 }, plugins: [Ao()], draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, disabled: !e.props.draggable, root: e.props.__root, touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (o) => o.hasAttribute("data-is-tag") };
          ze({ parent: n, getValues: t, setValues: r, config: s }), e.on("prop:disabled", ({ payload: o }) => {
            s.disabled = o, ze({ parent: n, getValues: t, setValues: r, config: s });
          }), e.on("prop:draggable", ({ payload: o }) => {
            s.disabled = !o, ze({ parent: n, getValues: t, setValues: r, config: s });
          });
        }
      }, e.props.__root);
    });
  }
  e.on("prop:expanded", ({ payload: t }) => {
    t && e.props.optionsLoader && typeof e.props.optionsLoader == "function" && (!e.props.options.length || e.props.alwaysLoadOnOpen) && (e.props.options = [], yn(e));
  }), e.props.behavior === "overscroll" && w_(e);
}
const D_ = (e, t) => {
  let r = null, n = null, s = null;
  return function(...o) {
    const a = this;
    r ? (n = o, s = a) : (e.apply(a, o), r = window.setTimeout(() => {
      r = null, n !== null && s !== null && (e.apply(s, n), n = null, s = null);
    }, t));
  };
};
function fs(e) {
  if (e.addProps(["popover", "popoverOffset", "usePopover", "popoverCoordinates", "popoverAncestorCoordinates"]), e.props.popover = Y(e.props.popover) ? "manual" : void 0, e.type !== "input" || e.props.behavior === "overscroll") return;
  let t = null, r = null, n = [], s = null;
  if (e.props.popoverOffset = Y(e.props.popoverOffset) ? parseInt(e.props.popoverOffset) : 0, !e.props.popover) return;
  if (typeof document > "u" || !("popover" in HTMLElement.prototype)) return void (typeof window < "u" && console.warn('FormKit: Popover API is not supported in this browser — input panels will be rendered with fallback CSS positioning. This could result in inaccessible inputs due to parent containers using "overflow: hidden" or z-index conflicts.'));
  const o = () => {
    e.props.invertPopover = !1, document.removeEventListener("resize", s), document.removeEventListener("scroll", s), n.forEach((l) => {
      l.removeEventListener("scroll", s);
    });
  };
  function a() {
    const { x: l, y: p, width: u, height: c } = (function(f, d) {
      if (!f || !d) return { x: 0, y: 0 };
      const { left: g, top: v, width: $, height: h } = d.getBoundingClientRect();
      return { x: g + window.scrollX, y: v + h + window.scrollY, width: $, height: h };
    })(t, r);
    e.props.popoverAncestorCoordinates = { x: l, y: p, width: u, height: c }, e.props.popoverCoordinates = { x: l, y: p, width: u, height: 0 };
  }
  function i(l) {
    t && document.body.contains(t) && (l ? (t?.showPopover(), setTimeout(() => {
      e.props.popoverCoordinates.height = t?.offsetHeight || 0;
    }, 5)) : t.matches(":popover-open") && (t.hidePopover(), e.props.popoverCoordinates.height = 0));
  }
  e.on("mounted", () => {
    e.context && (e.props.usePopover = !0, e.props.popoverCoordinates = { x: 0, y: 0, width: 0, height: 0 }, e.props.popoverAncestorCoordinates = { x: 0, y: 0, width: 0, height: 0 });
  }), e.on("destroyed", () => {
    o();
  }), e.on("prop:inputText", () => {
    e.context && (a(), i(!0));
  }), e.on("prop:expanded", ({ payload: l }) => {
    var p;
    e.context && (l === !1 ? o() : Ze(`${(p = e.context) === null || p === void 0 ? void 0 : p.id}_popover`, () => {
      if (!e.context) return;
      t = document.querySelector(`[id="${e.context.id}_popover"][popover]`) || document.querySelector(`[id="${e.context.id}_popover"] [popover]`), r || (r = (function(c) {
        if (!c) return null;
        let f = c.parentElement;
        for (; f && window.getComputedStyle(f).position === "static"; ) f = f.parentElement;
        return f;
      })(t)), a(), i(l), s = D_(() => {
        e.context && (a(), i(l));
      }, 10), document.addEventListener("resize", s), document.addEventListener("scroll", s), n = [];
      let u = t?.parentElement;
      for (; u; ) u.scrollHeight > u.clientHeight && n.push(u), u = u.parentElement;
      n.forEach((c) => {
        c.addEventListener("scroll", s);
      });
    }));
  });
}
const A_ = { schema: /* @__PURE__ */ wb(/* @__PURE__ */ kb(/* @__PURE__ */ Cb("$label"), /* @__PURE__ */ Sb(/* @__PURE__ */ Kr("prefix"), /* @__PURE__ */ Db(), /* @__PURE__ */ Ib(/* @__PURE__ */ U("$inputStd.length === 0 && $state.loading !== true", /* @__PURE__ */ Pb('$placeholder || "placeholder"'), /* @__PURE__ */ U("$multiple !== true", /* @__PURE__ */ Lb(/* @__PURE__ */ U("$state.loading && $selections.length === 0", /* @__PURE__ */ na("$ui.isLoading.value"), /* @__PURE__ */ Mb(/* @__PURE__ */ Vb("$option.label")))), /* @__PURE__ */ U('$multiple && $selectionAppearance === "truncate"', /* @__PURE__ */ Nb(/* @__PURE__ */ Fb(/* @__PURE__ */ U("$state.loading && $selections.length === 0", /* @__PURE__ */ na("$ui.isLoading.value"), /* @__PURE__ */ Bb()))), /* @__PURE__ */ U('$multiple && $selectionAppearance === "tags"', /* @__PURE__ */ Wb(/* @__PURE__ */ Kb(/* @__PURE__ */ U("$state.loading && $isLoadingOption !== true && $selections.length === 0", /* @__PURE__ */ na("$ui.isLoading.value"), /* @__PURE__ */ jb(/* @__PURE__ */ Hb(/* @__PURE__ */ U("$state.loading && $fns.hasOptionLoaderValue($option) || $option.label === undefined", /* @__PURE__ */ Ub("$ui.isLoading.value"), /* @__PURE__ */ Zb("$option.label")), /* @__PURE__ */ ip(/* @__PURE__ */ Kr("close"))))))))))), /* @__PURE__ */ U("$truncationCount && $state.loading !== true", /* @__PURE__ */ Rb("$truncationCount")), /* @__PURE__ */ U("$state.loading", /* @__PURE__ */ Kr("loader")), /* @__PURE__ */ U("$inputStd.length !== 0 && $selectionRemovable", /* @__PURE__ */ ip(/* @__PURE__ */ Kr("close")), /* @__PURE__ */ Kr("select"))), /* @__PURE__ */ zb(), /* @__PURE__ */ Ab(), /* @__PURE__ */ Kr("suffix"))), /* @__PURE__ */ Tb("$help"), /* @__PURE__ */ Ob(/* @__PURE__ */ Eb("$message.value"))), type: "input", family: "dropdown", props: [], features: [
  /* @__PURE__ */ he("select", "select"),
  /* @__PURE__ */ he("close", "close"),
  /* @__PURE__ */ he("selected", "check"),
  /* @__PURE__ */ he("loader", "spinner"),
  /* @__PURE__ */ xe("isLoading"),
  /* @__PURE__ */ xe("loadMore"),
  /* @__PURE__ */ xe("remove"),
  tr,
  /* @__PURE__ */ Vi.bind(null, u_, m_, C_),
  fs
] }, rr = /* @__PURE__ */ lt("tg"), { outer: T_, wrapper: O_, prefix: E_, suffix: I_, help: L_, messages: M_, message: P_, icon: V_ } = /* @__PURE__ */ pt(rr), N_ = rr("input", () => ({ $el: "input", bind: "$attrs", attrs: { type: "checkbox", id: "$id", value: "$value", name: "$node.name", checked: "$checked", onInput: "$handlers.toggles", onBlur: "$handlers.blur", disabled: "$disabled" } })), F_ = rr("label", () => ({ if: "($label && $onValueLabel === undefined && $offValueLabel === undefined) || ($valueLabelDisplay === inner) && $altLabelPosition !== true", $el: "label", attrs: { for: "$id" }, children: "$label" })), R_ = rr("altLabel", () => ({ $el: "label", if: "($label && ($onValueLabel || $offValueLabel) && $valueLabelDisplay !== hidden && $valueLabelDisplay !== inner) || $altLabelPosition === true", attrs: { for: "$id", "data-label-alt": "true", style: { color: { if: "$checked", then: "$valueLabelColorOn", else: "$valueLabelColorOff" } } }, children: "$label" })), B_ = rr("innerLabel", () => ({ $el: "div", if: "$valueLabelDisplay === inner && ($checked && $onValueLabel || $offValueLabel)", attrs: { style: { color: { if: "$checked", then: "$valueLabelColorOn", else: "$valueLabelColorOff" } } }, children: { if: "$checked", then: "$onValueLabel", else: "$offValueLabel" } })), j_ = rr("valueLabel", () => ({ $el: "label", if: "$valueLabelDisplay !== hidden && $valueLabelDisplay !== inner && (($checked === true && $onValueLabel) || ($checked === false && $offValueLabel))", attrs: { for: "$id" }, children: { if: "$checked && $onValueLabel", then: "$onValueLabel", else: { if: "$offValueLabel", then: "$offValueLabel" } } })), H_ = rr("inner", () => ({ $el: "label", attrs: { for: "$id", id: "$id + '_label'" } })), Z_ = rr("track", () => ({ $el: "div", attrs: { style: { backgroundColor: { if: "$checked", then: "$trackColorOn", else: "$trackColorOff" } } } })), W_ = rr("thumb", () => ({ $el: "div", attrs: { style: { color: { if: "$checked", then: "$iconColorOn", else: "$iconColorOff" }, backgroundColor: { if: "$checked", then: "$thumbColorOn", else: "$thumbColorOff" } } } })), K_ = () => W_(U("$slots.default", "$slots.default", V_("thumb"))), U_ = { schema: /* @__PURE__ */ T_(/* @__PURE__ */ O_(/* @__PURE__ */ R_(), /* @__PURE__ */ H_(/* @__PURE__ */ E_(), /* @__PURE__ */ N_(), /* @__PURE__ */ Z_(/* @__PURE__ */ B_(), /* @__PURE__ */ K_()), /* @__PURE__ */ I_()), /* @__PURE__ */ j_(), /* @__PURE__ */ F_()), /* @__PURE__ */ L_("$help"), /* @__PURE__ */ M_(/* @__PURE__ */ P_("$message.value"))), type: "input", props: ["checked", "thumbColorOff", "thumbColorOn", "iconColorOff", "iconColorOn", "valueLabelColorOff", "valueLabelColorOn", "offValue", "offValueLabel", "onValue", "onValueLabel", "thumbIcon", "trackColorOff", "trackColorOn", "valueLabelDisplay", "altLabelPosition"], features: [function(e) {
  function t(r, n) {
    n.target instanceof HTMLInputElement && (r.input(n.target.checked ? r.props.onValue : r.props.offValue), r.props.checked = n.target.checked);
  }
  e.on("created", () => {
    "disabled" in e.props && (e.props.disabled = Y(e.props.disabled)), e.props.altLabelPosition = Y(e.props.altLabelPosition), e.props.offValue === void 0 && (e.props.offValue = !1), e.props.onValue === void 0 && (e.props.onValue = !0), e.props.checked = J(e.value, e.props.onValue), e.context && (e.context.handlers.toggles = t.bind(null, e));
  }), e.on("commit", ({ payload: r }) => {
    e.props.checked = J(r, e.props.onValue);
  });
}] }, We = /* @__PURE__ */ lt("rp"), { outer: z_, inner: Y_, prefix: q_, suffix: G_, help: X_, messages: J_, message: Q_, icon: Pn } = /* @__PURE__ */ pt(We), ex = We("empty", () => ({ $el: "div" })), tx = We("insertControl", () => ({ $el: "button", attrs: { disabled: "$value.length >= $max", onClick: "$fns.createInsert($index)", type: "button" } })), rx = We("addButton", () => ({ $formkit: "button", bind: "$addAttrs", if: "$addButton", disabled: "$value.length >= $max", onClick: "$fns.createAppend()", type: "button" })), nx = We("removeControl", () => ({ $el: "button", attrs: { disabled: "$value.length <= $min", onClick: "$fns.createRemover($index)", type: "button" } })), sx = We("items", () => ({ $el: "ul", meta: { autoAnimate: !0 }, attrs: { role: "list", id: '$id + "_items"' } })), ox = We("item", () => ({ $el: "li", for: ["item", "index", "$items"], attrs: { role: "listitem", key: "$item", "data-index": "$index" } })), ax = We("downControl", () => ({ $el: "button", attrs: { disabled: "$index >= $value.length - 1", onClick: "$fns.createShift($index, 1)", type: "button" } })), ix = We("upControl", () => ({ $el: "button", attrs: { disabled: "$index <= 0", onClick: "$fns.createShift($index, -1)", type: "button" } })), lx = We("content", "div"), px = We("fieldset", () => ({ $el: "fieldset", attrs: { id: "$id" } })), ux = We("legend", () => ({ $el: "legend", if: "$label" })), cx = We("group", () => ({ $formkit: "group", index: "$index" })), dx = We("controls", () => ({ $el: "ul", if: "$removeControl || $insertControl || $upControl || $downControl" })), fx = We("remove", () => ({ $el: "li", if: "$removeControl" })), hx = We("insert", () => ({ $el: "li", if: "$insertControl" })), mx = We("up", () => ({ $el: "li", if: "$upControl" })), vx = We("down", () => ({ $el: "li", if: "$downControl" })), Ts = We("controlLabel", "span"), gx = We("dragHandleWrapper", () => ({ if: "$draggable", $el: "div" })), yx = We("dragHandle", () => ({ $el: "div", attrs: { id: '$id + "_drag_handle"' } }));
function $x(e) {
  var t, r, n, s, o, a, i, l, p, u, c, f, d, g;
  if ((t = (l = e.props).removeControl) !== null && t !== void 0 || (l.removeControl = !0), (r = (p = e.props).upControl) !== null && r !== void 0 || (p.upControl = !0), (n = (u = e.props).downControl) !== null && n !== void 0 || (u.downControl = !0), (s = (c = e.props).insertControl) !== null && s !== void 0 || (c.insertControl = !1), (o = (f = e.props).addButton) !== null && o !== void 0 || (f.addButton = !0), (a = (d = e.props).addLabel) !== null && a !== void 0 || (d.addLabel = !1), (i = (g = e.props).addAttrs) !== null && i !== void 0 || (g.addAttrs = {}), e.props.draggable = Y(e.props.draggable), e.props.min = e.props.min !== void 0 ? Number(e.props.min) : 1, e.props.max = e.props.max !== void 0 ? Number(e.props.max) : 1 / 0, e.props.min > e.props.max) throw Error("Repeater: min must be less than max");
  if (Array.isArray(e.value)) if (e.value.length < e.props.min) {
    const v = dr(e.props.min - e.value.length, () => ({}));
    e.input(e.value.concat(v), !1);
  } else e.value.length > e.props.max && e.input(e.value.slice(0, e.props.max), !1);
  else e.input(dr(e.props.min, () => ({})), !1);
  e.context && (function(v, $) {
    $.createShift = (h, S) => () => {
      const m = v._value;
      m.splice(h + S, 0, m.splice(h, 1)[0]), v.input(m, !1);
    }, $.createInsert = (h) => () => {
      const S = v._value;
      S.splice(h + 1, 0, {}), v.input(S, !1);
    }, $.createAppend = () => () => {
      const h = v._value;
      h.push({}), v.input(h, !1);
    }, $.createRemover = (h) => () => {
      const S = v._value;
      S.splice(h, 1), v.input(S, !1);
    };
  })(e, e.context.fns);
}
function gp(e, t) {
  var r;
  if (!t.context) return;
  const n = (r = t.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${t.props.id}_inner`), s = n?.hasAttribute("data-auto-animate"), o = { group: t.props.id, dragHandle: `#${t.props.id}_drag_handle`, draggingClass: t.context.classes.dragging, dropZoneClass: t.context.classes.dropZone, root: t.props.__root, disabled: !t.props.draggable, plugins: s ? [] : [Ao({ duration: 100 })], touchDraggingClass: t.context.classes.touchDragging, touchDropZoneClass: t.context.classes.touchDropZone, draggable: (l) => l.tagName === "LI" };
  function a() {
    return Array.isArray(t.value) ? t.value : [];
  }
  function i(l) {
    t.input(l);
  }
  ze({ parent: e, getValues: a, setValues: i, config: o }), t.on("prop:disabled", ({ payload: l }) => {
    o.disabled = l, ze({ parent: e, getValues: a, setValues: i, config: o });
  }), t.on("prop:draggable", ({ payload: l }) => {
    o.disabled = !l, ze({ parent: e, getValues: a, setValues: i, config: o });
  });
}
const bx = { schema: /* @__PURE__ */ z_(/* @__PURE__ */ px(/* @__PURE__ */ ux("$label"), /* @__PURE__ */ X_("$help"), /* @__PURE__ */ Y_(/* @__PURE__ */ q_(), /* @__PURE__ */ U("$value.length === 0", /* @__PURE__ */ U("$slots.empty", /* @__PURE__ */ ex()), /* @__PURE__ */ sx(/* @__PURE__ */ ox(/* @__PURE__ */ gx(/* @__PURE__ */ yx(/* @__PURE__ */ Pn("dragHandle"))), /* @__PURE__ */ lx(/* @__PURE__ */ cx("$slots.default")), /* @__PURE__ */ dx(/* @__PURE__ */ mx(/* @__PURE__ */ ix(/* @__PURE__ */ Ts("$ui.moveUp.value"), /* @__PURE__ */ Pn("moveUp"))), /* @__PURE__ */ fx(/* @__PURE__ */ nx(/* @__PURE__ */ Ts("$ui.remove.value"), /* @__PURE__ */ Pn("remove"))), /* @__PURE__ */ hx(/* @__PURE__ */ tx(/* @__PURE__ */ Ts("$ui.add.value"), /* @__PURE__ */ Pn("add"))), /* @__PURE__ */ vx(/* @__PURE__ */ ax(/* @__PURE__ */ Ts("$ui.moveDown.value"), /* @__PURE__ */ Pn("moveDown"))))), /* @__PURE__ */ G_()))), /* @__PURE__ */ rx('$addLabel || ($ui.add.value + " " + ($label || ""))')), /* @__PURE__ */ J_(/* @__PURE__ */ Q_("$message.value"))), type: "list", props: ["min", "max", "total", "upControl", "downControl", "removeControl", "insertControl", "addLabel", "addButton", "addAttrs", "draggable"], features: [
  function(e) {
    e._c.sync = !0, e.on("created", $x.bind(null, e)), e.on("mounted", () => {
      Ze(`${e.props.id}_items`, (t) => {
        if (t instanceof HTMLElement) {
          let r = function(n) {
            for (const s of n) for (const o of Array.from(s.addedNodes)) if (o instanceof HTMLElement && o.id === `${e.props.id}_items`) return void gp(o, e);
          };
          gp(t, e), Ii(e, r).observe(t.parentNode, { childList: !0 });
        }
      }, e.props.__root);
    });
  },
  Do,
  /* @__PURE__ */ xe("remove"),
  /* @__PURE__ */ xe("add"),
  /* @__PURE__ */ xe("moveUp"),
  /* @__PURE__ */ xe("moveDown"),
  /* @__PURE__ */ he("dragHandle", "dragHandle"),
  /* @__PURE__ */ he("remove", "trash"),
  /* @__PURE__ */ he("add", "add"),
  /* @__PURE__ */ he("moveUp", "arrowUp"),
  /* @__PURE__ */ he("moveDown", "arrowDown")
] }, Ya = /* @__PURE__ */ new WeakMap();
function hs(e, t) {
  const r = { onItems: [], offItems: [] }, n = t || Number(e.value || 0);
  for (let s = 0; s < e.props.max; s++) if (s < n && s + 1 >= n) {
    const o = e.props.rightToLeft ? 100 - 100 * (n - s) : 100 * (n - s);
    r.onItems.push(o + "%"), r.offItems.push(100 - o + "%");
  } else s < n ? (r.offItems.push("0%"), r.onItems.push("100%")) : s >= n && (r.offItems.push("100%"), r.onItems.push("0%"));
  e.props.itemsToPercentages = r;
}
function _x(e, t) {
  var r;
  (r = e.context) === null || r === void 0 || r.handlers.blur(t);
}
function xx(e, t) {
  const { x: r, y: n } = _d(t);
  let s = document.elementFromPoint(r, n);
  const o = Array.from(document.querySelectorAll(`#${e.props.id}_items_wrapper > .formkit-ratingItem`));
  let a = !0;
  for (; s && a; ) {
    if (o.includes(s)) {
      a = !1;
      break;
    }
    s = s.parentNode;
  }
  if (!a) {
    const i = o.indexOf(s);
    if (e.props.step === 1) return void e.input(i + 1, !1);
  }
}
function wx(e, t, r) {
  e.props.disabled || (r.preventDefault(), e.props.hoverHighlight = !0, e.props.touchStarted = !0, e.props.step !== 1 ? Mo(e, t, r) : e.input(t + 1, !1));
}
function bd(e, t) {
  if (!e.props.dragStarted) return;
  t.preventDefault(), e.props.hoverHighlight = !1, e.props.dragStarted = !1, hs(e);
  const r = Ya.get(e);
  r && (r.abort(), Ya.delete(e));
}
function kx(e, t, r) {
  if (e.props.hoverHighlight || e.props.disabled) return;
  r.preventDefault(), e.props.hoverHighlight = !0, e.props.dragStarted = !0;
  const n = new AbortController();
  document.addEventListener("mouseup", (s) => bd(e, s), { signal: n.signal }), Ya.set(e, n), e.props.step === 1 ? e.input(t + 1, !1) : Mo(e, t, r);
}
function Sx(e, t) {
  var r, n;
  if (document.activeElement === t.currentTarget) {
    if (t.key === "ArrowRight" || t.key === "ArrowDown") {
      e.props.arrow = 1;
      const s = e.value ? qa(e.value + 1 * e.props.step, e.props.step) : e.props.min + 1 * e.props.step, o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.querySelector(e.value ? `#${e.props.id}_inner input[value="${s}"]` : "#" + (e.props.id + "_0_0"));
      e.props.preventFocus = !0, o && o instanceof HTMLInputElement && o.focus(), e.props.preventFocus = !1, e.input(Number(s));
    } else if (t.key === "ArrowLeft" || t.key === "ArrowUp") {
      e.props.arrow = -1;
      const s = e.value ? qa(e.value - 1 * e.props.step, e.props.step) : e.props.max, o = (n = e.props.__root) === null || n === void 0 ? void 0 : n.querySelector(`#${e.props.id}_inner input[value="${s}"]`);
      e.props.preventFocus = !0, o && o instanceof HTMLInputElement && o.focus(), e.props.preventFocus = !0, e.input(Number(s)), e.props.preventFocus = !1;
    }
  }
}
function Cx(e, t) {
  if (!e.props.preventFocus) {
    if (e.props.preventFocus = !0, setTimeout(() => {
      e.props.preventFocus = !1;
    }, 50), t.relatedTarget instanceof HTMLElement && t.relatedTarget.id === e.props.id + "_items_wrapper") e.props.arrow > 0 ? setTimeout(() => {
      var r, n;
      (n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_0_0")) === null || n === void 0 || n.focus();
    }) : e.props.arrow < 0 && setTimeout(() => {
      var r, n;
      (n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + `_${e.props.max - 1}_${e.props.stepsPerValue - 1}`)) === null || n === void 0 || n.focus();
    });
    else if (t.target instanceof HTMLInputElement) {
      if (Number(t.target.value) === e.props.step && e.value === e.props.max || Number(t.target.value) === e.props.max && e.value === e.props.step) {
        const r = document.getElementById(e.props.id + "_items_wrapper");
        return r?.focus(), void e.input(0);
      }
      e.input(Number(t.target.value));
    }
  }
}
function Dx(e, t, r) {
  e.props.hoverHighlight && (e.props.disabled || (e.props.step === 1 ? (hs(e, t + 1), e.props.dragStarted && e.input(t + 1, !1)) : Mo(e, t, r, !!e.props.dragStarted)));
}
function Ax(e) {
  hs(e);
}
function Tx(e, t, r) {
  if (!e.props.disabled && r.type !== "touchstart" && (r.preventDefault(), (r.clientX !== 0 || r.clientY !== 0) && r.currentTarget instanceof HTMLElement)) return e.props.step === 1 ? e.props.deselect && Number(e.value) === t + 1 ? void e.input(0) : void e.input(t + 1) : void Mo(e, t, r);
}
function _d(e) {
  return e instanceof MouseEvent ? { x: e.clientX, y: e.clientY } : { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
}
function Mo(e, t, r, n = !0) {
  if (!(r.currentTarget instanceof HTMLElement)) return;
  const { x: s } = _d(r), o = r.currentTarget.getBoundingClientRect();
  let a = qa((s - o.x) / o.width + t, e.props.step);
  a = a > e.props.min ? a : e.props.min, a = a < e.props.max ? a : e.props.max, !e.props.deselect || a !== Number(e.value) || e.props.dragStarted ? n ? e.input(a, !1) : hs(e, a) : e.input(0);
}
function qa(e, t) {
  t || (t = 1);
  const r = 1 / t;
  return Math.ceil(e * r) / r;
}
const Dt = /* @__PURE__ */ lt("rt"), { outer: Ox, wrapper: Ex, inner: Ix, label: Lx, prefix: Mx, suffix: Px, help: Vx, messages: Nx, message: Fx, icon: mo } = /* @__PURE__ */ pt(Dt), Rx = Dt("itemsWrapper", () => ({ $el: "span", attrs: { style: { "flex-direction": '$rightToLeft && "row-reverse" || undefined' }, tabindex: "$value !== undefined && $value !== 0 && '-1' || '0'", id: "$id + _items_wrapper", onKeydown: "$handlers.handleWrapperKeydown", "data-disabled": "$disabled", onBlur: "$handlers.handleWrapperBlur", onMouseleave: "$hoverHighlight && $handlers.handleMouseleave" } })), Bx = Dt("ratingItem", () => ({ for: ["item", "index", "$max"], $el: "span", attrs: { id: '$id + "_item_" + $index', onClick: "$handlers.handleItemClick($item)", draggable: "$hoverHighlight !== true && && $disabled !== true && true", onMousemove: "$handlers.handleMousemove($item)", onDragstart: "$handlers.handleDragstart($item)", onDragend: "$handlers.handleDragend", onTouchstartPassive: "$handlers.handleTouchstart($item)", onTouchmovePassive: "$handlers.handleTouchmove" } })), jx = Dt("template", () => ({ for: ["increment", "stepIndex", "$stepsPerValue"], $el: null })), Hx = Dt("itemLabel", () => ({ $el: "label", attrs: { id: '$id + "_label_" + $index + "_" + $stepIndex', for: '$id + "_" + $index + "_" + $stepIndex', "data-checked": '$value === $fns.getValue($item, $increment) && "true" || "false"', style: { width: '$fns.showLabel($fns.getValue($item, $increment), $stepIndex, $item) && "100%" || "0%"' } } })), Zx = Dt("itemLabelInner", () => ({ $el: "span", children: "$fns.getValue($item, $increment)" })), Wx = Dt("input", () => ({ $el: "input", attrs: { type: "radio", value: "$fns.getValue($item, $increment)", id: '$id + "_" + $index + "_" + $stepIndex', onFocus: "$handlers.handleFocus", tabindex: '$value === $fns.getValue($item, $increment) && "0" || "-1"', disabled: "$disabled", name: "$id", "data-value": "$fns.getValue($item, $increment)", checked: "$value === $fns.getValue($item, $increment) && true", onKeydown: "$handlers.handleKeydown($fns.getValue($item, $increment))" } })), Kx = Dt("onItemRow", () => ({ $el: "span", attrs: { style: { width: "$fns.getPercentage($itemsToPercentages, $item)", display: "flex", position: "relative", overflow: "hidden", top: "0", left: "0", bottom: "0" } } })), Ux = Dt("offItemRow", () => ({ $el: "span", attrs: { style: { width: "$fns.getPercentage($itemsToPercentages, $item, false)", display: "flex", "flex-direction": "row-reverse", position: "absolute", zIndex: "$offItemStyles && 100", overflow: "hidden", top: "0", right: "0" } } })), zx = Dt("onItemWrapper", () => ({ $el: "div", attrs: { style: { color: "$onColor" } } })), Yx = Dt("offItemWrapper", () => ({ $el: "div", attrs: { style: { color: "$offColor" } } })), qx = () => U("$slots.onItem", () => () => "$slots.onItem", U("$slots.default", () => () => "$slots.default", mo("rating"))), Gx = () => U("$slots.offItem", () => () => "$slots.offItem", U("$slots.default", () => () => "$slots.default", mo("rating"))), Xx = { schema: /* @__PURE__ */ Ox(/* @__PURE__ */ Ex(/* @__PURE__ */ Lx("$label"), /* @__PURE__ */ Ix(/* @__PURE__ */ mo("prefix"), /* @__PURE__ */ Mx(), /* @__PURE__ */ Rx(/* @__PURE__ */ Bx(/* @__PURE__ */ jx(/* @__PURE__ */ Hx(/* @__PURE__ */ Kx(/* @__PURE__ */ zx(/* @__PURE__ */ qx())), /* @__PURE__ */ Ux(/* @__PURE__ */ Yx(/* @__PURE__ */ Gx())), /* @__PURE__ */ Zx()), /* @__PURE__ */ Wx()))), /* @__PURE__ */ Px(), /* @__PURE__ */ mo("suffix"))), /* @__PURE__ */ Vx("$help"), /* @__PURE__ */ Nx(/* @__PURE__ */ Fx("$message.value"))), type: "input", props: [], features: [function(e) {
  function t(r) {
    setTimeout(() => {
      const n = Array.from(document.querySelectorAll(`#${r.props.id}_items_wrapper > .formkit-ratingItem`));
      for (let s = 0; s < n.length; s++) {
        const o = n[s].querySelectorAll(".formkit-onItemWrapper"), a = n[s].querySelectorAll(".formkit-offItemWrapper");
        for (let i = 0; i < o.length; i++) o[i].style.flex = `0 0 ${n[s].getBoundingClientRect().width}px`;
        for (let i = 0; i < a.length; i++) a[i].style.flex = `0 0 ${n[s].getBoundingClientRect().width}px`;
      }
    });
  }
  e.addProps(["max", "step", "stepsPerValue", "itemsToPercentages", "rightToLeft", "onItemStyles", "offItemStyles", "hoverHighlight", "deselect", "disabled", "wrapperWidth", "onColor", "offColor"]), e.props.hoverHighlight !== !1 && e.props.hoverHighlight !== "false" && (e.props.hoverHighlight = !0), e.props.deselect = Y(e.props.deselect), e.props.max = Number(e.props.max) || 5, e.props.min = Number(e.props.min) || 0, e.props.step = Number(e.props.step) || 1, e.props.numberOfSteps = e.props.max / e.props.step, e.props.lastIndex = 1 / e.props.step - 1, e.props.itemsToPercentages = {}, "disabled" in e.props && (e.props.disabled = Y(e.props.disabled)), e.props.rightToLeft ? (e.props.onItemStyles = void 0, e.props.offItemStyles = { position: "absolute", top: "0", left: "0", overflow: "hidden", height: "100%", zIndex: 100 }) : e.props.onItemStyles = { position: "absolute", top: "0", left: "0", overflow: "hidden", height: "100%" }, e.props.stepsPerValue = 1 / e.props.step, e.hook.input((r, n) => {
    if (r === null || r === "" || isNaN(r)) return n(r);
    const s = Number(r), o = Number(e.props.min), a = Number(e.props.max);
    return s > a ? n(a) : e.props.min && s <= o ? n(o) : n(s);
  }), e.on("commit", ({ payload: r }) => {
    const n = Number(r || 0);
    hs(e, n);
  }), e.on("created", () => {
    e.context && (Ze(`${e.props.id}_items_wrapper`, () => {
      t(e), (function(r) {
        var n;
        const s = (n = r.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${r.props.id}_items_wrapper`);
        s && new ResizeObserver(() => {
          t(r);
        }).observe(s);
      })(e), setTimeout(() => t(e), 100);
    }, e.props.__root), e.context.fns.getPercentage = (r, n, s = !0) => (s ? r.onItems : r.offItems)[n], e.context.fns.getValue = (r, n) => r + Number((n * e.props.step + e.props.step).toFixed(1)), e.context.fns.showLabel = (r, n) => {
      const s = Number(e.value || 0);
      return s === 0 && n === 0 || s && r === s || r > s && n === 0 || s > r && n === e.props.lastIndex;
    }, e.context.handlers.handleFocus = (r) => Cx.call(null, e, r), e.context.handlers.handleWrapperKeydown = (r) => Sx.call(null, e, r), e.context.handlers.handleWrapperBlur = (r) => _x.call(null, e, r), e.context.handlers.handleItemClick = (r) => (n) => Tx.call(null, e, r, n), e.context.handlers.handleMousemove = (r) => (n) => Dx.call(null, e, r, n), e.context.handlers.handleMouseleave = () => Ax.call(null, e), e.context.handlers.handleDragstart = (r) => (n) => kx.call(null, e, r, n), e.context.handlers.handleMouseup = (r) => bd.call(null, e, r), e.context.handlers.handleTouchstart = (r) => (n) => wx.call(null, e, r, n), e.context.handlers.handleTouchmove = (r) => xx.call(null, e, r), e.context.handlers.handleKeydown = (r) => (n) => (function(s, o, a) {
      const i = Number(s.value);
      s.props.deselect && a.key === " " && i === o ? s.input(0) : a.key === " " && s.input(o);
    })(e, r, n));
  });
}, /* @__PURE__ */ he("rating", "star")] }, Pt = /* @__PURE__ */ lt("ac"), { outer: Jx, wrapper: Qx, inner: ew, icon: Ft, label: tw, prefix: rw, suffix: nw, help: sw, messages: ow, message: aw } = /* @__PURE__ */ pt(Pt), iw = Pt("input", () => ({ $el: "input", bind: "$attrs", attrs: { id: "$id", type: "text", onClick: "$handlers.click", onBlur: "$handlers.blur", onKeydown: "$handlers.keydown", onInput: "$handlers.input", onFocus: "$handlers.focus", value: "$inputText || undefined", name: "$node.name", placeholder: "$state.loading && $ui.isLoading.value || $placeholder || undefined", tabindex: '$disabled && "-1" || 0', role: "combobox", autocomplete: '$attrs.autocomplete || "off"', autocapitalize: "none", readonly: "$attrs.readonly || $state.loading || $multiple && $max && $value && $value.length >= $max && $hasHighlightedRange !== true || undefined", "data-selection-appearance": "$selectionAppearance", disabled: "$disabled || $disabledInternally || undefined", onTouchmovePassive: "$handlers.touchmove", onTouchstartPassive: "$handlers.touchmove", onTouchend: "$handlers.touchend", "aria-autocomplete": "list", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy", "aria-activedescendant": "$expanded && $activeDescendant || undefined", "aria-required": "$state.required || undefined" } })), yp = Pt("listboxButton", () => ({ $el: "div", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', role: "button", "aria-label": "$expanded && $ui.close.value || $ui.open.value", onClick: "$handlers.toggleListbox", onKeydown: "$handlers.toggleListboxKeydown", tabindex: '$disabled && "-1" || 0', "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-disabled": "$disabled || $state.loading || undefined", "data-disabled": "$disabled || $disabledInternally || undefined" } })), $p = Pt("selectionWrapper", () => ({ for: ["option", "index", "$selections"], $el: "div", attrs: { id: '$id + "_selection_wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: '$disabled && "-1" || 0', onKeydown: "$handlers.selectionKeydown && $handlers.selectionKeydown($multiple && $option || undefined)", onClick: "$handlers.selectionClick && $handlers.selectionClick($multiple && $option || undefined)", onFocus: "$handlers.selectionFocus && $handlers.selectionFocus($multiple && $option || undefined)", onBlur: "$handlers.selectionBlur && $handlers.selectionBlur($multiple && $option || undefined)", "data-is-selection": "true", "data-active-selection": "$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)" } })), bp = Pt("selection", () => ({ $el: "div", attrs: { id: '$id + "_selection_" + $index' } })), _p = Pt("selections", () => ({ $el: "div", attrs: { "aria-live": "polite", id: '$id + "_selections"' } })), ia = Pt("removeSelection", () => ({ $el: "button", attrs: { id: '$selectionAppearance === "option" && $multiple && $id + "_remove_selection_" + $index || $id + "_remove_selection"', tabindex: "0", title: "$ui.remove.value", type: "button", "aria-label": "$ui.remove.value", onClick: "$handlers.removeSelection && $handlers.removeSelection($multiple && $option || undefined)", onTouchend: "$handlers.removeSelection && $handlers.removeSelection($multiple && $option || undefined)", "aria-controls": "$id" } })), xp = Pt("optionLoading", "span"), wp = Pt("option", () => ({ $el: "div", if: "$value !== undefined" })), lw = /* @__PURE__ */ Ei(Pt);
function pw(e) {
  e.props.selectionAppearance !== "option" || e.props.multiple || e.props.selectionRemovable === !1 || e.props.selectionRemovable === "false" || (e.props.selectionRemovable = !0), e.props.multiple || (e.props.clearSearchOnOpen = Y(e.props.clearSearchOnOpen)), e.props.selectionRemovable = Y(e.props.selectionRemovable), e.props.openOnClick = Y(e.props.openOnClick), e.props.selectionAppearance !== "option" || e.props.multiple || (e.props.isSingleOption = !0), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.selectionAppearance === void 0 && (e.props.selectionAppearance = "text-input"), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.closeOnSelect ? e.props.resetSearchOnCommit = !1 : e.props.resetSearchOnCommit === void 0 && (e.props.resetSearchOnCommit = e.props.multiple), e.props.allowNewValues = Y(e.props.allowNewValues);
}
function xd(e) {
  e.addProps(["inputText", "selectionAppearance", "searchValue", "openOnClick", "filteredOptions", "search", "debounce", "showInput", "visibilityStyles", "selectionStyles", "multiple", "filter", "hasHighlightedRange", "clearOnClick", "debounce"]), e.props.debounce === void 0 ? e.props.debounce = 200 : e.props.debounce = parseInt(e.props.debounce), e.props.nonceKey = "searchValue", e.props.searchValue = "", e.props.inputText = "", e.props.filterOptions = Ct.bind(null, e), e.props.reloadOnCommit = Y(e.props.reloadOnCommit), e.props.alwaysLoadOnOpen === void 0 ? e.props.alwaysLoadOnOpen = !0 : e.props.alwaysLoadOnOpen = Y(e.props.alwaysLoadOnOpen), typeof e.props.filter != "function" && (e.props.filter = (t, r) => t.label.toLowerCase().includes(r.toLowerCase())), e.on("created", () => {
    e.context && at && (e.context.handlers.focus = kp.bind(null, e), e.context.handlers.input = uw.bind(null, e), e.context.handlers.focus = kp.bind(null, e), e.context.handlers.click = cw.bind(null, e), e.context.handlers.toggleListbox = wd.bind(null, e), e.context.handlers.toggleListboxKeydown = dw.bind(null, e), e.context.handlers.keydown = h_.bind(null, e), e.context.handlers.selectionKeydown = (t) => (r) => d_(e, t, r), e.context.handlers.searchInputTagKeydown = (t) => (r) => (function(n, s, o) {
      if (o.stopPropagation(), !n.props.disabled)
        switch (o.key) {
          case "ArrowDown":
            hd(n);
            break;
          case "ArrowRight":
          case "ArrowLeft":
            md(n, s, o);
            break;
          case "Delete":
          case "Backspace":
            vd(n, s, o);
        }
    })(e, t, r), e.on("prop:options", ({ payload: t }) => {
      if ((e.props.initialOptions.length === 0 && typeof e.props.optionsLoader != "function" || !e.props.searchValue && t.length) && (e.props.initialOptions = [...t]), e.props.selections && e.props.selections.length && t.length) for (let r = 0; r < e.props.selections.length; r++) {
        const n = e.props.selections[r], s = t.find((o) => R(o) === n.value);
        s && (e.props.selections[r] = s);
      }
    }));
  }), e.on("prop:expanded", ({ payload: t }) => {
    t || od.delete(e);
  });
}
function uw(e, t) {
  if (e.props.disabled) return;
  const r = t.target;
  e.props.inputText = r.value, e.emit("handleSearchInput", r.value), e.props.searchValue && Ct(e, e.props.searchValue, !0);
}
function cw(e, t) {
  t.stopPropagation(), e.props.disabled || e.props.disabledInternally || (e.props.attrs.onClick && e.props.attrs.onClick(t), (!e.props.expanded && e.props.openOnClick || e.props.openOnFocus) && (e.props.expanded = !0));
}
function kp(e) {
  e.props.disabled || e.props.disabledInternally || (e.props.attrs.onFocus && e.props.attrs.onFocus(), e.props.activeSelectionValue = void 0, e.props.skipOpen ? e.props.skipOpen = !1 : e.props.openOnFocus && (e.props.expanded = !0));
}
function wd(e) {
  var t, r, n;
  e.props.disabled || e.props.disabledInternally || !((t = e.context) === null || t === void 0) && t.state.loading || (e.props.expanded = !e.props.expanded, e.props.openOnFocus || (n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`)) === null || n === void 0 || n.focus());
}
function dw(e, t) {
  t.key !== "Enter" && t.key !== " " || (t.preventDefault(), t.stopPropagation(), wd(e));
}
const Sp = /* @__PURE__ */ new WeakMap(), js = typeof window < "u", la = /* @__PURE__ */ new WeakMap();
let Cp = !1;
function fw(e) {
  e.props.searchValue = null, e.on("commit", () => {
    e.props.searchValue = null, e.props.highlightedRange || Dp(e);
  }), e.on("created", () => {
    if (!e.context || !js) return;
    e.on("handleSearchInput", ({ payload: o }) => {
      o === "" ? (e.props.searchValue = null, e.input([])) : o && e.props.inputStd.length === 0 ? e.props.searchValue = o : o && e.props.inputStd.length > 0 && (e.props.searchValue = (function(a) {
        var i;
        const l = Os(a);
        if (a.props.highlightedRange) {
          const [p, u] = Ap(a, l);
          return a.props.inputText.slice(p, u);
        }
        return a.props.inputText.slice(((i = l[l.length - 1]) === null || i === void 0 ? void 0 : i.end) + 2);
      })(e)), !e.props.expanded && o ? e.props.expanded = !0 : !o && e.props.expanded && (e.props.expanded = !1);
    }), (function(o) {
      Ze(`${o.props.id}`, (a) => {
        a instanceof HTMLInputElement && la.set(a, o);
      }, o.props.__root), js && !Cp && (Cp = !0, document.addEventListener("selectionchange", () => {
        const a = Mr();
        if (a instanceof HTMLInputElement && la.has(a)) {
          const i = la.get(a);
          i && (function(l) {
            clearTimeout(Sp.get(l)), Sp.set(l, setTimeout(() => {
              var p, u, c, f;
              const d = (p = l.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${l.props.id}`);
              if (d instanceof HTMLInputElement) {
                const g = Os(l), v = g.findIndex((h) => d.selectionStart !== null ? d.selectionStart >= h.start && d.selectionStart <= h.end : d.selectionEnd !== null && d.selectionEnd >= h.start && d.selectionEnd <= h.end), $ = (u = g[g.length - 1]) === null || u === void 0 ? void 0 : u.end;
                if (d.selectionStart === 0 && d.selectionEnd === ((c = l.props.inputText) === null || c === void 0 ? void 0 : c.length)) return;
                if (typeof l.props.searchValue == "string" && l.props.highlightedRange) {
                  if (g.length) {
                    const h = l.props.highlightedRange, [S, m] = Ap(l, g);
                    if (d.selectionEnd !== null && (d.selectionEnd < S || d.selectionEnd > m)) {
                      const w = h.end - h.start - (m - S), C = d.selectionEnd;
                      l.props.inputText = l.props.option.label, l.props.highlightedRange = void 0, l.props.searchValue = null, d.value = l.props.inputText, d.selectionStart = d.selectionEnd = C + (C > S ? w : 0);
                    }
                  }
                } else if (v >= 0 && d.selectionStart !== null && ($ !== ((f = l.props.inputText) === null || f === void 0 ? void 0 : f.length) || d.selectionStart < $)) {
                  const h = g[v], S = l.props.inputText.substr(0, $), m = h.start + (h.index > 0 ? 1 : 0), w = h.end + (g.length - 1 > h.index ? -1 : 0);
                  S !== l.props.inputText && (l.props.inputText = S, d.value = S), l.props.highlightedRange = h, d.selectionStart = m, d.selectionEnd = w;
                } else l.props.highlightedRange = void 0, Dp(l);
                if (d.selectionStart !== null && d.selectionStart >= $ && l.props.inputText.substring($, $ + 2) !== ", ") {
                  let h = l.props.inputText.substring(0, $);
                  h = l.props.multiple && l.props.max && Array.isArray(l.props.inputStd) && l.props.inputStd.length >= l.props.max ? h : `${h},`, l.props.inputText = `${h} ${l.props.inputText.substring($).replace(/^[,\s]{1,2}/, "")}`;
                }
              }
            }, 5));
          })(i);
        }
      }));
    })(e);
    const n = e.context.handlers.keydown;
    e.context.handlers.keydown = (o) => {
      n(o), (function(a, i) {
        var l, p, u, c;
        if (["ArrowRight", "ArrowLeft"].includes(i.key) && i.target instanceof HTMLInputElement && i.target.selectionEnd !== null && i.target.selectionStart !== null) {
          if (i.target.selectionStart === 0 && i.target.selectionEnd === ((l = a.props.inputText) === null || l === void 0 ? void 0 : l.length)) i.key === "ArrowLeft" ? t(0) : t(-1);
          else if (!a.props.searchValue) {
            a.props.searchValue = null;
            const f = Os(a), d = (p = f[f.length - 1]) === null || p === void 0 ? void 0 : p.end;
            i.target.selectionStart < d && (i.target.selectionStart = Math.max(0, i.key === "ArrowLeft" ? i.target.selectionStart - 2 : i.target.selectionEnd + 2));
          }
        } else if (["Delete", "Backspace"].includes(i.key)) a.props.highlightedRange && !a.props.searchValue ? (Lo(a, a.props.highlightedRange.option), a.props.inputStd.length === 0 && (a.props.highlightedRange = void 0)) : i.target instanceof HTMLInputElement && (a.props.searchValue = null, t(-1, !0) && i.preventDefault());
        else if (i.target instanceof HTMLInputElement && i.target.selectionStart === 0 && i.target.selectionEnd === ((u = a.props.inputText) === null || u === void 0 ? void 0 : u.length) && (!((c = a.props.inputText) === null || c === void 0) && c.length) && a.props.selections.length === 0) i.preventDefault();
        else if (i.key === "Tab") return;
        i.key === "ArrowLeft" && t(-1, !0) && i.preventDefault();
      })(e, o);
    };
    const s = e.context.handlers.focus;
    e.context.handlers.focus = (o) => {
      s(e, o);
      const a = new Event("selectionchange");
      document.dispatchEvent(a);
    }, e.on("blur", () => {
      e.props.selections.length ? (e.props.inputText = e.props.selections.map((o) => o.label).join(", "), e.props.searchValue = null) : e.props.selections.length || (e.props.inputText = "", e.props.searchValue = "");
    });
  }), e.on("prop:expanded", ({ payload: n }) => {
    n || e.props.inputStd.length ? n && (e.props.options.length && !e.props.alwaysLoadOnOpen || (e.props.options = [], Ct(e, e.props.searchValue))) : (e.props.searchValue = "", e.props.inputText = "");
  }), e.on("prop:selections", () => {
    var n;
    const s = [...e.props.selections].map((a) => a.label).join(", ");
    let o = "";
    if (js && e.isCreated) {
      const a = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}`);
      if (Mr() === a && Array.isArray(e._value) && e._value.length) {
        if (e.props.max && e._value.length >= Number(e.props.max)) return;
        o = ", ";
      }
    }
    e.props.inputText = `${s}${o}`, e.props.reloadOnCommit && (e.props.searchValue = "", Ct(e, e.props.searchValue));
  });
  const t = (n, s = !1) => {
    var o, a;
    const i = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${e.props.id}`);
    if (!(i instanceof HTMLInputElement)) return !1;
    const l = Os(e), p = n >= 0 ? n : l.length - 1;
    if (l[p] === void 0) return !1;
    const u = (a = l[p]) === null || a === void 0 ? void 0 : a.end;
    return i.selectionStart !== null && (!s || i.selectionStart >= u && i.selectionStart <= u + 2) && (i.selectionStart = l[p].start + (p > 0 ? 1 : 0), i.selectionEnd = l[p].end + (p < l.length - 1 ? -1 : 0), !0);
  };
  let r;
  e.on("selectRange", ({ payload: n }) => t(...n)), e.on("prop:highlightedRange", ({ payload: n }) => {
    e.props.hasHighlightedRange = !!n, n && e.props.expanded && r !== n.option && (r = n.option, Mi(e));
  });
}
function Dp(e) {
  var t;
  if (!js) return;
  const r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}`);
  r && r.scrollTo({ left: r.scrollWidth, behavior: "smooth" });
}
function Ap(e, t) {
  var r;
  const n = e.props.highlightedRange, s = n.index, o = n.start + (s ? 1 : 0), a = t.length - 1 > s ? t[t.length - 1].end - t[s + 1].start : 0;
  return [o, ((r = e.props.inputText) === null || r === void 0 ? void 0 : r.length) - a + (t.length - 1 > n.index ? -1 : 0)];
}
function Os(e) {
  const t = Li(e);
  return Array.isArray(t) && t.length ? t.reduce((r, n, s) => {
    var o;
    const a = ((o = r[s - 1]) === null || o === void 0 ? void 0 : o.end) || 0;
    let i = 0;
    return t.length - 1 !== s && i++, s !== 0 && i++, r.push({ option: n, index: s, start: a, end: a + n.label.length + i }), r;
  }, []) : [];
}
function kd(e) {
  (function(t) {
    t.on("prop:expanded", ({ payload: r }) => {
      r ? (t.props.searchValue = "", t.props.options.length && !t.props.alwaysLoadOnOpen || (t.props.options = [], Ct(t, t.props.searchValue, !0))) : (t.props.searchValue = "", t.props.inputText = "");
    });
  })(e), (function(t) {
    t.on("handleSearchInput", ({ payload: r }) => {
      r && !t.props.expanded ? (t.props.searchExpand = !0, t.props.expanded = !0) : !r && t.props.expanded && (t.props.expanded = !1), t.props.searchValue = t.props.inputText;
    });
  })(e), (function(t) {
    t.on("prop:selections", () => {
      t.isCreated && (t.props.inputText = "", t.props.searchValue = "", t.props.optionRemoved || t.props.reloadOnCommit && Ct(t, t.props.searchValue, !0));
    });
  })(e);
}
function hw(e) {
  (function(t) {
    function r(s) {
      s.props.inputStd.length === 0 ? (s.props.inputText = "", s.props.searchValue = "") : (s.props.inputText = s.props.selections[0].label, s.props.searchValue = s.props.selections[0].label);
    }
    function n(s) {
      s.props.clearSearchOnOpen && !s.props.searchExpand && (s.props.inputText = "", s.props.searchValue = ""), s.props.searchValue = s.props.inputText, s.props.options.length && !s.props.alwaysLoadOnOpen || (s.props.options = [], Ct(s, s.props.searchValue, !0)), s.props.searchExpand && (s.props.searchExpand = !1);
    }
    t.on("prop:expanded", ({ payload: s }) => {
      s ? n(t) : r(t);
    });
  })(e), (function(t) {
    t.on("handleSearchInput", ({ payload: r }) => {
      r === "" ? (t.props.inputStd.length === 0 && (t.props.expanded = !1), t.input(void 0)) : r && !t.props.expanded && (t.props.searchExpand = !0, t.props.expanded = !0), t.props.searchValue = t.props.inputText;
    });
  })(e), (function(t) {
    t.on("prop:selections", ({ payload: r }) => {
      t.props.inputText = r.length ? r[0].label : "", t.props.searchValue = r.length ? r[0].label : "", t.isCreated && t.props.expanded && r.length === 0 && Ct(t, t.props.searchValue, !0);
    });
  })(e);
}
function mw(e) {
  if (e.props.multiple) if (e.props.multiple && e.props.selectionAppearance === "option") {
    let t = function() {
      return Array.isArray(e.value) ? e.value : [];
    }, r = function(n) {
      e.input(n);
    };
    kd(e), e.on("created", () => {
      e.props.disabled && (e.props.draggable = !1), Ze(`${e.props.id}_selections`, (n) => {
        if (n instanceof HTMLElement && e.context) {
          const s = { draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, root: e.props.__root, disabled: !e.props.draggable, plugins: [Ao()], touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (o) => o.hasAttribute("data-is-selection") };
          ze({ parent: n, getValues: t, setValues: r, config: s }), e.on("prop:disabled", ({ payload: o }) => {
            s.disabled = o, ze({ parent: n, getValues: t, setValues: r, config: s });
          }), e.on("prop:draggable", ({ payload: o }) => {
            s.disabled = !o, ze({ parent: n, getValues: t, setValues: r, config: s });
          });
        }
      }, e.props.__root);
    });
  } else e.props.multiple && e.props.selectionAppearance === "text-input" && fw(e);
  else hw(e);
}
const vw = { schema: /* @__PURE__ */ Jx(/* @__PURE__ */ Qx(/* @__PURE__ */ tw("$label"), /* @__PURE__ */ ew(/* @__PURE__ */ Ft("prefix"), /* @__PURE__ */ rw(), /* @__PURE__ */ iw(), /* @__PURE__ */ U("$multiple !== true && $selectionAppearance === option && $expanded === false", /* @__PURE__ */ _p(/* @__PURE__ */ $p(/* @__PURE__ */ bp(/* @__PURE__ */ wp(/* @__PURE__ */ U("$state.loading", /* @__PURE__ */ xp("$ui.isLoading.value"), "$option.label"))), /* @__PURE__ */ U("$state.loading && $isSingleOption !== true && $optionLoaderValues.includes($option.value)", /* @__PURE__ */ Ft("loader")), /* @__PURE__ */ U("$selectionRemovable && $isSingleOption", /* @__PURE__ */ ia(/* @__PURE__ */ Ft("close")))))), /* @__PURE__ */ U("$state.loading && ($isSingleOption !== true || $selections.length === 0)", /* @__PURE__ */ Ft("loader")), /* @__PURE__ */ U('$selectionRemovable && $selectionAppearance === "text-input" && $selections.length > 0', /* @__PURE__ */ ia(/* @__PURE__ */ Ft("close")), /* @__PURE__ */ U('$selectionAppearance === "text-input" || ($selectionAppearance === "option" && $multiple)', /* @__PURE__ */ yp(/* @__PURE__ */ Ft("select")))), /* @__PURE__ */ U("$isSingleOption && ($inputStd.length === 0 || $selectionRemovable === undefined || ($expanded) || $state.loading || $optionLoaderValues.length > 0)", /* @__PURE__ */ yp(/* @__PURE__ */ Ft("select"))), /* @__PURE__ */ lw(), /* @__PURE__ */ nw(), /* @__PURE__ */ Ft("suffix")), /* @__PURE__ */ U("$multiple && $selectionAppearance === option", /* @__PURE__ */ _p(/* @__PURE__ */ $p(/* @__PURE__ */ bp(/* @__PURE__ */ wp(/* @__PURE__ */ U("$state.loading && $fns.hasOptionLoaderValue($option)", /* @__PURE__ */ xp("$ui.isLoading.value"), "$option.label"))), /* @__PURE__ */ ia(/* @__PURE__ */ Ft("close")))))), /* @__PURE__ */ sw("$help"), /* @__PURE__ */ ow(/* @__PURE__ */ aw("$message.value"))), type: "input", family: "dropdown", props: [], features: [
  /* @__PURE__ */ he("select", "select"),
  /* @__PURE__ */ he("close", "close"),
  /* @__PURE__ */ he("selected", "check"),
  /* @__PURE__ */ he("loader", "spinner"),
  /* @__PURE__ */ xe("isLoading"),
  /* @__PURE__ */ xe("loadMore"),
  /* @__PURE__ */ xe("remove"),
  /* @__PURE__ */ xe("open"),
  /* @__PURE__ */ xe("close"),
  tr,
  /* @__PURE__ */ Vi.bind(null, pw, xd, mw),
  fs
] }, be = /* @__PURE__ */ lt("dp"), { outer: gw, wrapper: yw, inner: $w, icon: _r, label: bw, prefix: _w, suffix: xw, help: ww, messages: kw, message: Sw } = /* @__PURE__ */ pt(be), Cw = be("input", () => ({ $el: "input", bind: "$attrs", attrs: { name: "$node.name", id: "$id", onKeydown: "$handlers.inputKeydown", value: "$inputText", onInput: "$handlers.dateInput", onClick: "$pickerOnly && $handlers.open", onBlur: "$handlers._blur", onFocus: "$handlers.focus", readonly: "$pickerOnly || $expanded", disabled: "$disabled" } })), Dw = be("panelWrapper", () => ({ $el: "div", if: "$expanded", attrs: { id: '$id + "_popover"', role: "dialog", onBlur: "$handlers._blurOut()", tabindex: "-1", popover: "$popover", "aria-modal": "true", "aria-label": "Choose date", "data-panel": "$panel", style: { if: "$usePopover", then: { margin: 0, top: '$popoverCoordinates.y + "px"', left: '$popoverCoordinates.x + "px"', width: '$popoverCoordinates.width + "px"' } } } })), Aw = be("next", () => ({ $el: "button", if: "$showPagination", attrs: { id: "$id + _next_button", type: "button", onClick: "$handlers.next" } })), Tw = be("nextLabel", "span"), Ow = be("prev", () => ({ $el: "button", if: "$showPagination", attrs: { id: "$id + _prev_button", type: "button", onClick: "$handlers.prev" } })), Ew = be("prevLabel", "span"), Iw = be("calendar", () => ({ if: '$panel === "day"', $el: "table", for: ["month", "$calendar"], attrs: { key: '$fns.format($month.monthDay, "YYYY-MM")' } })), Lw = be("calendarWeeks", () => ({ $el: "tbody" })), Mw = be("calendarHeader", () => ({ $el: "thead" })), Pw = be("weekDays", () => ({ $el: "tr" })), Vw = be("weekDay", () => ({ $el: "th", for: ["day", "$month.weeks.0"], attrs: { "aria-label": '$fns.format($day, "dddd")' } })), Nw = be("week", () => ({ $el: "tr", for: ["week", "weekIndex", "$month.weeks"] })), Fw = be("dayCell", () => ({ $el: "td", for: ["day", "dayIndex", "$week"], attrs: { key: "$day", onClick: "$handlers.setDate($day)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($day)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(day)", tabindex: '$fns.sameDay($day) && "0" || "-1"', "data-is-extra": "$fns.notInMonth($month.monthDay, $day)", "data-disabled": "$fns.isDisabled($day)", "aria-selected": "$selectedWeek === $weekIndex && $selectedDay === $dayIndex", "aria-label": '$fns.format($day, "long")' } })), Rw = be("day", "div"), Bw = be("openButton", () => ({ $el: "div", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', type: "div", role: "button", onClick: "$handlers.open", onKeydown: "$handlers.openKeydown", tabIndex: '$pickerOnly && "-1" || "0"', "data-disabled": "$disabled", "aria-disabled": "$disabled", "aria-label": '$value && ($ui.changeDate.value + ", " + $inputText) || $ui.chooseDate.value', "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined' } })), jw = be("years", () => ({ if: '$panel === "year"', $el: "ul", attrs: { id: '$id + "_years"' } })), Hw = be("year", () => ({ for: ["year", "yearIndex", "$years"], $el: "li", attrs: { key: '$: "year" + $fns.format($year, "YYYY")', onClick: "$handlers.setDate($year)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($year)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(year)", tabindex: '$fns.sameYear($year) && "0" || "-1"', "aria-selected": "$selectedYear === $yearIndex", "data-disabled": "$fns.isDisabledYear($year)", "aria-label": "$fns.format($year, $yearFormat)" } })), Zw = be("months", () => ({ if: '$panel === "month"', $el: "ul" })), Ww = be("month", () => ({ $el: "li", for: ["month", "index", "$months"], attrs: { key: "$month", onClick: "$handlers.setDate($month)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($month)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(month)", tabindex: '$fns.sameMonth($month) && "0" || "-1"', "aria-selected": "$selectedMonth === $index", "data-disabled": "$fns.isDisabledMonth($month)" } })), Kw = be("panelHeader", () => ({ $el: "header", attrs: { "aria-live": "polite" } })), Uw = be("yearsHeader", () => ({ $el: "div", if: '$panel === "year"' })), zw = be("monthsHeader", () => ({ $el: "div", if: '$panel === "month"' })), Yw = be("daysHeader", () => ({ $el: "div", if: '$panel === "day"' })), qw = be("timeHeader", () => ({ $el: "div", if: '$panel === "time"' })), pa = be("yearButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _year_button", onClick: "$handlers.jumpTo(year)" }, children: "$fns.format($renderedDate, $yearFormat)" })), Tp = be("monthButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _month_button", onClick: "$handlers.jumpTo(month)" }, children: "$fns.format($renderedDate, $monthButtonFormat)" })), Gw = be("dayButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _day_button", onClick: "$handlers.jumpTo(day)", tabindex: "2" }, children: "$fns.format($renderedDate, $dayButtonFormat)" })), Xw = be("removeSelection", () => ({ $el: "button", if: "$clearable && $_value", attrs: { id: '$id + "_remove_selection"', type: "button", onClick: "$handlers.clear", "aria-controls": "$id" } })), Jw = be("time", () => ({ $el: "div", if: '$panel === "time"' })), Qw = be("timeInput", () => ({ $el: "input", attrs: { type: "time", value: "$localTime", onInput: "$handlers.localTime", onKeydown: "$handlers.keyDown", spellcheck: "false", onBlur: "$handlers._blurOut(time)" } })), e1 = be("panelClose", () => ({ $el: "button", if: "$showPanelClose && ($inline === undefined || $inline === false)", attrs: { type: "button", class: "$classes.panelClose", onClick: "$handlers.closePanel", tabindex: -1, "aria-label": "$ui.close.value" } })), { overlayPlaceholder: t1, overlayLiteral: r1, overlayChar: n1, overlayEnum: s1, overlay: o1, overlayParts: a1, overlayInner: i1 } = /* @__PURE__ */ rd(be), l1 = be("panel", "div"), zt = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakSet(), p1 = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakSet(), pr = /* @__PURE__ */ new WeakMap(), vo = /[\uD800-\uDBFF]/, kr = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakSet(), Dn = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap();
let Xa = !1;
const Op = () => {
  Xa = !0, setTimeout(() => {
    Xa = !1;
  }, 500);
}, u1 = { "#": { type: "char", pattern: /\d/, token: "#", placeholder: "_", selectDirection: "right" }, a: { type: "char", pattern: /[a-zA-Z]/, token: "a", placeholder: "_", selectDirection: "left" }, h: { type: "char", pattern: /[0-9a-fA-F]/, token: "h", placeholder: "_", selectDirection: "left" }, "*": { type: "char", pattern: /./, token: "*", placeholder: "_", selectDirection: "left" } }, Ep = /* @__PURE__ */ new WeakMap(), ss = typeof window < "u";
let Zs = !1, Ip = !1;
function c1() {
  ss && !Ip && (Ip = !0, document.addEventListener("selectionchange", () => {
    const e = Mr();
    if (!(e instanceof HTMLInputElement)) return;
    if (Dr.has(e)) return (function(r) {
      const n = Dr.get(r);
      if (n) {
        const [s, o] = n, [a, i] = it(r), l = i.indexOf(s);
        if (l === -1) return void Dr.delete(r);
        const p = a[l], u = [p[0] + o[0], p[1], "none"];
        Pr(Mt(r), u) || go(r, u);
      }
    })(e);
    if (pr.get(e) !== "select") return;
    const t = Mt(e);
    if (!Pr(t, Ep.get(e))) {
      if (Ep.set(e, t), bn.has(e)) return bn.delete(e);
      e.dispatchEvent(new CustomEvent("selection", { detail: Mt(e) }));
    }
  }));
}
function Ni(e, t, r) {
  var n;
  if (c1(), zt.has(e)) return;
  zt.set(e, []), t.reverse && an.add(e), t.prefix && Dn.set(e, t.prefix), t.suffix && Vo.set(e, t.suffix), Cd(e, t.pattern, t.partOverrides, t.explicitParts);
  const s = Po.get(e), o = s?.some((p) => er(p)), a = s?.some((p) => (function(u) {
    return !!u && u.type === "group" && Array.isArray(u.parts);
  })(p));
  if (o && a) throw new Error("Cannot use enums and groups in the same mask.");
  const i = o ? "select" : (n = t.mode) !== null && n !== void 0 ? n : "shift";
  if (a && i === "select") throw new Error("Cannot use groups in select mode.");
  (t.placeholder || i === "select") && Ga.add(e), pr.set(e, i), t.onChange && Un.set(e, t.onChange);
  let l = !1;
  e.addEventListener("beforeinput", (p) => {
    if (Zs || p.inputType === "insertLineBreak") return;
    if (p.inputType.startsWith("history")) return (function(g, v) {
      g.addEventListener("input", ($) => {
        var h;
        $.preventDefault(), $.stopImmediatePropagation();
        const S = zt.get(g);
        if (S?.length) {
          const m = ((h = $n.get(g)) !== null && h !== void 0 ? h : S.length - 1) + (v.endsWith("Undo") ? -1 : 1), w = S[m];
          if (!w) return;
          Ad(g, w), g.setSelectionRange(...w.selectionAfter), $n.set(g, m), Un.has(g) && Un.get(g)(w, g);
        }
      }, { once: !0 });
    })(e, p.inputType);
    p.preventDefault(), l = !0;
    const u = (c = p.inputType).startsWith("insert") ? "insert" : !!c.startsWith("delete") && (c === "deleteContentForward" ? "deleteContentForward" : "deleteContentBackward");
    var c;
    const f = Mt(e), d = e.value;
    u && os(e, { type: u, selectionBefore: f, data: p.data, valueBefore: d, suffix: t.suffix, prefix: t.prefix });
  }), e.addEventListener("input", (p) => {
    l = !1, "data" in p || !l && r && (r.input(e.value, !1), r.props._maskValue = e.value);
  }), i === "select" && e.addEventListener("keydown", (p) => {
    switch (p.key) {
      case "ArrowRight":
        return p.preventDefault(), fa(e);
      case "ArrowLeft":
        return p.preventDefault(), fa(e, -1);
      case "ArrowUp":
        return void (jp(e, 1) && p.preventDefault());
      case "ArrowDown":
        return void (jp(e, -1) && p.preventDefault());
      case "Tab":
        return Xa ? void p.preventDefault() : void (fa(e, p.shiftKey ? -1 : 1) && p.preventDefault());
    }
  }), e.addEventListener("focus", () => (function(p) {
    var u;
    const c = Ga.has(p), f = pr.get(p);
    if (c) {
      let d = null, g = null, v = !1;
      const $ = f === "shift" ? 0 : 1, h = p.value;
      Qa(p, { data: h, selectionBefore: [0, 0, "none"] }, f === "shift" ? "" : h, (m, w) => (d === null && w.type === "char" && (d = m.pos - $), (Yt(w) || er(w)) && m.value.endsWith(w.placeholder) ? (g = m.pos - $, !1) : (w.type === "char" && (v = !0), !0)));
      const S = (u = g ?? (v ? h.length : d)) !== null && u !== void 0 ? u : null;
      if (S !== null) {
        let m = [S, S, "none"];
        if (pr.get(p) === "select") {
          const [w] = it(p), C = qt(p, m);
          C !== void 0 && C in w && (m = w[C]);
        }
        return (function(w, C, x = 50) {
          kr.set(w, zn(w, C));
          const D = async () => {
            if (!ss || Mr() !== w) return;
            pr.get(w) === "select" && (await new Promise((A) => setTimeout(A, 10)), (function(A) {
              let k = Mt(A);
              if (k[0] === k[1] && k[0] === 0 || A.value.length === k[1] && k[0] === 0) return;
              k = Ja(A, k);
              const [b] = it(A), y = qt(A, k), I = k[0];
              y !== void 0 && b.some((B) => I >= B[0] && I < B[1]) && kr.set(A, zn(A, b[y]));
            })(w));
            const _ = kr.get(w);
            _ && w.setSelectionRange(..._);
          };
          D(), document.addEventListener("selectionchange", D), setTimeout(() => {
            document.removeEventListener("selectionchange", D), kr.delete(w);
          }, x);
        })(p, m);
      }
    }
  })(e)), e.addEventListener("selection", (p) => (function(u, c) {
    if (kr.get(u)) return;
    Vd(u), c = Ja(u, c);
    const [f] = it(u), d = qt(u, c), g = d !== void 0 && zn(u, f[d]);
    g && !Pr(c, g) && go(u, g, !0);
  })(e, p.detail)), os(e, { type: "insert", selectionBefore: [0, 0, "forward"], data: e.value, valueBefore: "", suffix: t.suffix, prefix: t.prefix });
}
function Lp(e) {
  var t, r;
  if (Dr.has(e)) return;
  const n = (t = zt.get(e)) !== null && t !== void 0 ? t : [], s = n[(r = $n.get(e)) !== null && r !== void 0 ? r : n.length - 1];
  if (s) {
    const o = s.selectionAfter, [a, i] = it(e, s.valueAfter), l = qt(e, o, [a, i]);
    if (l !== void 0 && l in a) {
      const p = i[l], u = a[l], c = [o[0] - u[0], o[1] - u[0], "none"];
      Dr.set(e, [p, c]);
    }
  }
}
function Mp(e) {
  Dr.delete(e);
}
function Pp(e, t, r) {
  const n = typeof e == "string" || !zt.has(e), s = typeof e == "string" ? Sd(e) : e;
  if (n) t.prefix && Dn.set(s, t.prefix), t.suffix && Vo.set(s, t.suffix), s.value = Fi(s, s.value), Ni(s, t, r);
  else {
    const o = Ri(s), a = s.value;
    s.value = "", os(s, { type: "insert", selectionBefore: [0, o ? o.valueAfter.length : 0, "none"], valueBefore: o ? o.valueAfter : "", data: a, suffix: t.suffix, prefix: t.prefix });
  }
  return s.value;
}
function Sd(e) {
  return { value: e, selectionStart: 0, selectionEnd: 0, scrollWidth: 0, clientWidth: 0, addEventListener: () => {
  }, dispatchEvent: () => {
  }, setSelectionRange: () => {
  } };
}
function Cd(e, t, r, n, s) {
  s = e && an.has(e) || s;
  const o = (n ?? (function(f) {
    const d = Object.values(u1);
    if (!f) return d;
    const g = { ...f }, v = [];
    for (const h of d) if (!_n(h)) {
      if ("token" in h && h.token in f) {
        const S = { ...h, ...f[h.token] };
        Vp(S) && v.push(S), delete g[h.token];
        continue;
      }
      v.push(h);
    }
    const $ = Object.values(g);
    for (const h of $) Vp(h) ? v.push(h) : console.warn(`Invalid ${h.type} token`, h);
    return v;
  })(r)).sort((f, d) => {
    const g = "token" in f ? f.token.length : -1, v = "token" in d ? d.token.length : -1;
    return g === v ? 0 : g > v ? -1 : 1;
  });
  let a = [];
  [t, a] = (function(f, d, g, v) {
    let $, h = 0, S = "", m = "", w = "";
    const C = [];
    for (; S = rt(f); ) S === d && $ !== v ? (h++, h > 1 && (w += S)) : S === g && h && $ !== v ? (h--, h === 0 ? (m += `{$${C.length}}`, C.push(w), w = "") : w += S) : h ? w += S : $ !== v || S !== d && S !== g ? m += S : m = `${m.substring(0, m.length - 1)}${S}`, $ = S, f = f.substring(S.length);
    return [m, C];
  })(t, "{", "}", "\\");
  const i = a.length;
  t = o.reduce((f, d, g) => "token" in d ? f.replaceAll(`\\${d.token}`, "{“!”}").replaceAll(d.token, `{$${i + g}}`).replaceAll("{“!”}", d.token) : f, t);
  const l = (function(f, d, g) {
    return f.reduce((v, $) => {
      const [h, S] = (function(C) {
        const [x, ...D] = C.split("|"), _ = D.reduce((A, k) => {
          const [b, y = !0] = k.split(":");
          return Object.assign(A, { [b]: y });
        }, {});
        return [x, _];
      })($);
      let m = Cd(null, h, void 0, d, g);
      m = m.map((C) => {
        const x = { ...C };
        if (x.type === "char" && S.placeholder) x.placeholder = S.placeholder;
        else if (x.type === "enum") throw new Error("Groups cannot contain enums.");
        return x;
      });
      const w = { type: "group", parts: m, ...S };
      return v.push(w), v;
    }, []);
  })(a, o, s).concat(o), p = /\{\$\d+\}/g, u = t.match(p), c = t.split(p).reduce((f, d, g) => {
    if (d && (d = d.replaceAll("\\", ""), f.push({ type: "literal", value: s ? [...d].reverse().join("") : d })), u && u[g]) {
      const v = u[g], $ = Number(v.substring(2, v.length - 1));
      !isNaN($) && l[$] && f.push(l[$]);
    }
    return f;
  }, []);
  return s && c.reverse(), e && Po.set(e, c), c;
}
function Vp(e) {
  return !!e && (_n(e) || Yt(e) || er(e));
}
function Yt(e) {
  return !!e && e.type === "char" && e.pattern instanceof RegExp && Dd(e);
}
function er(e) {
  return !!e && e.type === "enum" && Array.isArray(e.values) && Dd(e);
}
function Dd(e) {
  return !!e && "placeholder" in e && "token" in e;
}
function _n(e) {
  return !!e && e.type === "literal" && typeof e.value == "string";
}
function Pr(e, t) {
  return e === t || e !== void 0 && t !== void 0 && e[0] === t[0] && e[1] === t[1];
}
function Mt(e) {
  var t, r;
  return [(t = e.selectionStart) !== null && t !== void 0 ? t : e.value.length, (r = e.selectionEnd) !== null && r !== void 0 ? r : e.value.length, "none"];
}
function os(e, t) {
  var r;
  an.has(e) && Hp(t);
  let n = !1;
  switch (Hs.set(e, "playing"), t.type) {
    case "insert":
      n = (function(s, o) {
        let a = Np(o);
        const i = o.selectionBefore, l = (function(u, c) {
          var f, d, g;
          if (pr.get(u) === "select") {
            const [v, $] = it(u), h = v.findIndex((m) => Pr(m, c.selectionBefore)), S = (f = $[h]) !== null && f !== void 0 ? f : null;
            if (Yt(S)) {
              const m = c.selectionBefore, w = m[1] - m[0], C = c.valueBefore.substring(m[0], m[1]), x = S.selectDirection === "left", D = Od(C, S), _ = x ? 0 : (function(k, b, y) {
                if (!k) return 0;
                let I = "";
                for (; k.length; ) {
                  const B = rt(k);
                  k = k.substring(B.length), b.pattern.test(B) && (I += B);
                }
                return Math.min(Math.max(I.length, 1), y);
              })(c.data, S, w);
              if (D.length >= w) return x || (c.insertPos = m[1] - _), ((d = S.selectFill) !== null && d !== void 0 ? d : S.placeholder).repeat(w);
              const A = ((g = S.selectFill) !== null && g !== void 0 ? g : S.placeholder).repeat(w - D.length - (x ? 0 : _));
              return c.insertPos = x ? m[0] + D.length : m[1] - _, S.selectDirection === "left" ? `${D}${A}` : `${A}${D}${S.placeholder}`;
            }
            if (er(S)) {
              const m = c.selectionBefore;
              return c.valueBefore.substring(m[0], m[1]);
            }
          }
          return "";
        })(s, o);
        a = `${a.substring(0, i[0])}${l}${a.substring(i[1])}`;
        const p = Qa(s, o, a);
        return p1.set(s, p.endPos), { ...o, valueAfter: p.value, selectionAfter: h1(s, p), unmasked: p.unmasked, complete: p.complete, meta: p.meta };
      })(e, t);
      break;
    case "deleteContentBackward":
    case "deleteContentForward":
      n = (function(s, o) {
        const a = Np(o), i = o.selectionBefore, l = an.has(s);
        let p = i[0], u = i[1];
        p === u && (o.type !== "deleteContentBackward" || l ? u += Ws(a, p) : p -= Ws(a, p, "backward"));
        const c = pr.get(s);
        let f = "";
        if (c === "select") {
          const [v, $] = it(s), h = qt(s, [p, u, "none"]);
          if (h !== void 0) {
            const S = $[h], m = v[h];
            Yt(S) ? f = S.placeholder.repeat(u - p) : er(S) && ([f, p] = Pr(m, Mt(s)) ? [S.placeholder, p] : (function(w, C, x, D) {
              const _ = D.valueBefore, A = Ws(_, D.selectionBefore[0], "backward"), k = Math.max(x[0], D.selectionBefore[0] - A), b = _.substring(x[0], k), y = ms(C.values, b);
              let I = y?.substring(b.length);
              return y && !I && Id(C.values, y) && (I = y), [I ?? C.placeholder, I ? k : x[0]];
            })(0, S, m, o));
          }
        }
        const d = `${a.substring(0, p)}${f}${a.substring(u)}`, g = Qa(s, o, d);
        return { ...o, valueAfter: g.value, selectionAfter: y1(s, g, o, p), unmasked: g.unmasked, complete: g.complete, meta: g.meta };
      })(e, t);
  }
  if (an.has(e) && n && Hp(n), n && (function(s, o) {
    o.prefix && (o.valueAfter = o.prefix + o.valueAfter, o.selectionAfter = zn(s, o.selectionAfter)), o.suffix && (o.valueAfter += o.suffix);
  })(e, n), n && (function(s) {
    return s.valueBefore !== s.valueAfter || s.selectionBefore[0] !== s.selectionAfter[0] || s.selectionBefore[1] !== s.selectionAfter[1];
  })(n)) {
    Un.has(e) && da.set(e, () => {
      da.delete(e), n && Un.get(e)(n, e);
    }), Hs.set(e, "beforeCallback");
    let s = (r = zt.get(e)) !== null && r !== void 0 ? r : [];
    const o = $n.get(e);
    o && (s = s.slice(0, o), $n.delete(e)), s.push(n), zt.set(e, s), ss && Mr() === e && typeof document.execCommand == "function" && !Zs ? (go(e, [0, e.value.length, "forward"], !0), Zs = !0, document.execCommand("insertText", void 0, n.valueAfter), Zs = !1) : Ad(e, n), ss && Mr() === e && go(e, n.selectionAfter);
    const a = da.get(e);
    a && a(), Vd(e);
  }
  Hs.set(e, "complete");
}
function Fi(e, t) {
  var r, n;
  const s = (r = Dn.get(e)) !== null && r !== void 0 ? r : "", o = (n = Vo.get(e)) !== null && n !== void 0 ? n : "";
  return s && t.startsWith(s) && (t = t.substring(s.length)), o && t.endsWith(o) && (t = t.substring(0, t.length - o.length)), t;
}
function zn(e, t) {
  const r = Dn.get(e), n = [...t];
  return r && (n[0] += r.length, n[1] += r.length), n;
}
function Ja(e, t) {
  const r = Dn.get(e), n = [...t];
  return r && (n[0] -= r.length, n[1] -= r.length), n;
}
function Np(e) {
  let t = e.valueBefore;
  const r = e.selectionBefore;
  if (e.suffix && t.endsWith(e.suffix) && (t = t.substring(0, t.length - e.suffix.length), e.valueBefore = t, r[0] >= t.length && (r[0] = t.length), r[1] >= t.length && (r[1] = t.length)), e.prefix && t.startsWith(e.prefix)) {
    const n = e.prefix.length;
    t = t.substring(n), e.valueBefore = t, r[0] = Math.max(r[0] - n, 0), r[1] = Math.max(r[1] - n, 0);
  }
  return t;
}
function go(e, t, r = !1) {
  r && (bn.add(e), setTimeout(() => bn.delete(e), 5)), kr.get(e) && kr.set(e, t), e.setSelectionRange(...t);
}
function Ad(e, t, r = "After") {
  if (e.value = t[`value${r}`], ss) {
    const n = new InputEvent("input", { inputType: t.type === "insert" ? "insertText" : t.type, data: t.data });
    e.dispatchEvent(n);
  }
}
function rt(e) {
  if (e == null) return "";
  const t = vo.test(e.charAt(0)) && vo.test(e.charAt(1)) ? 2 : 1;
  return e.substring(0, t);
}
function Ws(e, t, r = "forward") {
  if (r === "backward") return t === 0 ? 0 : t === 1 ? 1 : vo.test(e.charAt(t)) && vo.test(e.charAt(t - 1)) ? 2 : 1;
  const n = e.length - t;
  return n === 0 ? 0 : n === 1 ? 1 : rt(e.substring(t)).length;
}
function Td(e, t) {
  const r = rt(e.data), n = r.length;
  if (e.value += r, e.pos += n, typeof e.data == "string" && (e.data = e.data.substring(n), e.data.length || (e.endPos = e.pos)), t) return t.substring(n);
}
function Fp(e) {
  const t = rt(e.buffer), r = t.length;
  e.value += t, e.pos += r, e.buffer = e.buffer.substring(r);
}
function d1(e, t) {
  const r = rt(t), n = r.length;
  return e.value += r, e.pos += n, t.substring(n);
}
function f1(e, t) {
  for (; t.buffer; ) {
    const r = rt(t.buffer);
    if (e.pattern.test(r) || t.placeholder && e.placeholder === r) return void (t.mode !== "replace" && t.mode !== "select" || (t.buffer = t.buffer.substring(r.length)));
    t.buffer = t.buffer.substring(r.length);
  }
}
function Rp(e, t) {
  const r = e.values.concat([e.placeholder]).map((n) => n.toLowerCase()).sort((n, s) => n.length > s.length ? -1 : 1);
  for (; t.buffer; ) {
    const n = t.buffer.toLowerCase(), s = r.find((o) => n.startsWith(o));
    if (s) {
      const o = t.buffer.substring(0, s.length);
      return t.buffer = t.buffer.substring(s.length), o;
    }
    t.buffer = t.buffer.substring(Ws(t.buffer, 0));
  }
  return null;
}
function Od(e, t) {
  let r = e.replaceAll(t.placeholder, "");
  const n = t.selectDirection === "left";
  if (t.selectFill) {
    const o = new RegExp(`${n ? "" : "^"}${s = t.selectFill, s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}+${n ? "$" : ""}`);
    r = r.replace(o, "");
  }
  var s;
  return r;
}
function h1(e, t) {
  let r = [t.endPos, t.endPos, "forward"];
  if (t.mode !== "select") return r;
  const n = Mt(e);
  r = [n[0], t.endPos, "none"];
  const [s, o] = it(e, t.value), a = qt(e, r, [s, o]);
  if (a === void 0 || !(a in s) || !(a in o)) return r;
  const i = s[a], l = o[a], p = t.value.slice(i[0], i[1]);
  if (Yt(l) && Od(p, l).length === p.length && a < s.length - 1) return Op(), s[a + 1];
  if (er(l) && t.insertPos >= i[0] && t.insertPos <= i[1]) {
    if (t.cycle) return i;
    const u = (function(f, d, g) {
      if (f.originalData === null) return 0;
      const v = f.insertPos >= d ? f.value.substring(d, f.insertPos) : "", $ = `${v}${f.originalData}`, h = ms(g.values, $);
      return h ? Ed($, h).length - v.length : 0;
    })(t, i[0], l);
    if (t.insertPos + u === i[1]) return Id(l.values, p) ? [i[1], i[1], "forward"] : (Op(), s[a + 1] ? s[a + 1] : s[a]);
    const c = [t.insertPos + u, i[1], "none"];
    return Pr(c, n) || (bn.add(e), setTimeout(() => bn.delete(e), 5)), c;
  }
  return i;
}
function Qa(e, t, r, n) {
  var s, o;
  const a = (s = Po.get(e)) !== null && s !== void 0 ? s : [], i = { pos: 0, insertPos: (o = t.insertPos) !== null && o !== void 0 ? o : t.selectionBefore[0], range: t.selectionBefore, chars: 0, placeholder: Ga.has(e), buffer: r, data: t.data, originalData: t.data, value: "", mode: pr.get(e) || "replace", endPos: t.selectionBefore[0], rangeParts: it(e), unmasked: "", complete: !0, cycle: t.cycle, meta: [] };
  return ei(a, i, void 0, n), i;
}
function ei(e, t, r, n) {
  var s, o;
  const a = { ...t };
  r?.placeholder && (t.placeholder = !0);
  const i = r?.repeat && ((s = r.nextPart) === null || s === void 0 ? void 0 : s.type) === "literal" ? r.nextPart.value : null;
  let l = 0;
  const p = e.reduce((c, f) => c + (f.type === "char" ? 1 : 0), 0), u = t.chars;
  for (const c of e) {
    const f = e[l + 1];
    switch (c.type) {
      case "literal":
        v1(c, t, e.at(-1) === c);
        break;
      case "char":
        g1(c, t, i);
        break;
      case "enum":
        m1(c, t);
        break;
      case "group":
        const g = { repeat: (o = c.repeat) !== null && o !== void 0 && o, nextPart: f, repeats: 0, placeholder: !!c.placeholder };
        ei(c.parts, t, g, n);
    }
    if (n && n(t, c) === !1)
      break;
    const d = _n(f) && l + 2 === e.length && u !== t.chars;
    if (!(t.buffer || t.data || t.placeholder || d)) break;
    l++;
  }
  if (t.chars < p && (t.complete = !1), r) {
    const c = t.chars - u, f = c === p, d = !(!t.data || i && t.data.startsWith(i) && t.insertPos <= t.pos), g = !(t.buffer && i && t.buffer.startsWith(i) && t.insertPos >= t.pos + i.length) && (t.buffer || d);
    if (r.repeat && g && f) return r.repeats++, ei(e, t, r, n);
    if (!f) {
      t.complete = !1;
      const v = e.reverse().find(($) => $.type === "literal");
      e.reverse(), _n(v) && t.value.endsWith(v.value) && (t.value = t.value.substring(0, t.value.length - v.value.length), t.pos = t.value.length);
    }
    p > 1 && c < p && c !== 0 && t.insertPos <= t.pos ? t.data = "" : r.repeat && !f && r.repeats && Object.assign(t, a);
  }
  t.placeholder = a.placeholder;
}
function m1(e, t) {
  const [r, n] = t.rangeParts, s = r[n.indexOf(e)];
  if (s && (t.insertPos <= t.pos || t.insertPos >= s[0] && t.insertPos <= s[1]) && t.data) {
    const o = t.buffer.substring(0, t.insertPos - t.pos), a = `${o}${t.data}`, i = ms(e.values.concat([e.placeholder]), a);
    if (i) {
      const l = Ed(a, i);
      return t.data = t.data.substring(l.length), t.value += i, i !== e.placeholder ? t.unmasked += i : t.complete = !1, t.meta.push({ type: i !== e.placeholder ? "enum" : "placeholder", value: i }), o ? t.buffer = t.buffer.substring(o.length) : Rp(e, t), t.endPos = t.pos + l.length, void (t.pos = t.value.length);
    }
    t.data = "";
  }
  if (t.buffer) {
    const o = Rp(e, t);
    if (o) return t.value += o, o !== e.placeholder ? t.unmasked += o : t.complete = !1, t.meta.push({ type: o !== e.placeholder ? "enum" : "placeholder", value: o }), void (t.pos = t.value.length);
  }
  t.complete = !1, t.value += e.placeholder, t.meta.push({ type: "placeholder", value: e.placeholder }), t.pos = t.value.length;
}
function v1(e, t, r) {
  let n = e.value;
  if (t.data === "" && !t.buffer && !t.placeholder && !r) return;
  let s = !1;
  for (; n; ) {
    const o = t.insertPos <= t.pos ? rt(t.data) : "", a = rt(n);
    if (o === a) n = Td(t, n), t.meta.push({ type: "literal", value: a }), s = !0;
    else if (!s || t.data || t.data === null || t.placeholder || r) n = d1(t, n), t.meta.push({ type: "literal", value: a });
    else if (s && !t.data) break;
    t.buffer.startsWith(a) && (t.buffer = t.buffer.substring(a.length));
  }
  t.data === null && !t.buffer && t.insertPos <= t.pos && !t.placeholder && (t.value = t.value.substring(0, t.value.length - e.value.length), t.pos = t.endPos = t.value.length);
}
function g1(e, t, r) {
  var n;
  let s = !0;
  if (t.insertPos <= t.pos) for (; !((n = t.data) === null || n === void 0) && n.length; ) {
    const o = rt(t.data);
    if (e.pattern.test(o)) return Td(t), t.meta.push({ type: "char", value: o }), t.chars++, t.unmasked += o, void f1(e, t);
    if (typeof t.data == "string") {
      if (r && t.data.startsWith(r)) {
        s = !1;
        break;
      }
      t.data = t.data.substring(o.length);
    }
  }
  for (; s && t.buffer; ) {
    const o = rt(t.buffer);
    if (e.pattern.test(o)) return t.chars++, t.unmasked += o, Fp(t), void t.meta.push({ type: "char", value: o });
    if (t.placeholder && o === e.placeholder) return Fp(t), void t.meta.push({ type: "placeholder", value: o });
    if (typeof t.buffer == "string") {
      if (r && t.buffer.startsWith(r)) {
        t.buffer = t.buffer.substring(r.length);
        break;
      }
      t.buffer = t.buffer.substring(o.length);
    }
  }
  t.placeholder ? (t.value += e.placeholder, t.meta.push({ type: "placeholder", value: e.placeholder })) : t.endPos = t.pos;
}
function y1(e, t, r, n) {
  const s = [n, n, "none"];
  if (t.mode === "select") {
    const o = it(e), a = qt(e, s, o), [i, l] = it(e, t.value), p = a !== void 0 && Bp(r.valueBefore, o[0][a], o[1][a]);
    if (a !== void 0 && a in i)
      return p ? i.slice(a).every((c, f) => Bp(t.value, c, l[a + f])) && i[a - 1] ? i[a - 1] : i[a] : [n, i[a][1], "none"];
  }
  return s;
}
function Bp(e, t, r) {
  if (_n(r)) return !1;
  if (Yt(r)) {
    let n = t[0];
    for (; n < t[1]; ) {
      const s = rt(e.substring(n));
      if (s !== r.placeholder) return !1;
      n += s.length;
    }
  }
  return !er(r) || e.substring(t[0], t[1]) === r.placeholder;
}
function Ed(e, t) {
  let r = "";
  do {
    const n = rt(e).toLowerCase(), s = rt(t).toLowerCase();
    if (n !== s) break;
    r += n, e = e.substring(n.length), t = t.substring(s.length);
  } while (e.length && t.length);
  return r;
}
function it(e, t) {
  const r = Po.get(e);
  if (!r) return [[], []];
  if (ua.has(e)) return ua.get(e);
  const n = t ?? Fi(e, e.value), s = [], o = [];
  let a = null, i = null, l = 0, p = !0;
  for (const c of r) if (_n(c)) a = c, i !== null && (s.push([i, l, "none"]), i = null), l += c.value.length;
  else {
    if (Yt(a) && Yt(c) && c.token === a.token) l++;
    else if (Yt(c)) i === null ? (i = l, o.push(c)) : (s.push([i, l, "none"]), i = l, o.push(c)), l++;
    else if (er(c)) {
      i && s.push([i, l, "none"]), Ld(c) || (p = !1);
      const f = $1(n, c, l);
      i = null, s.push([l, l + f, "none"]), o.push(c), l += f;
    }
    a = c;
  }
  i !== null && s.push([i, l, "none"]);
  const u = [[...s], [...o]];
  return p && !t && ua.set(e, u), u;
}
function $1(e, t, r) {
  if (Ld(t)) return t.values[0].length;
  const n = e.slice(r), s = ms(t.values.concat([t.placeholder]), n);
  return s ? s.length : 0;
}
function ms(e, t, r = null, n) {
  var s;
  if (t.length === 0) return r;
  if (!n) {
    const p = e.find((u) => u.toLowerCase() === t.toLowerCase());
    if (p) return p;
  }
  const o = rt(t.toLowerCase()), a = `${n ?? ""}${o}`, i = e.filter((p) => p.toLowerCase().startsWith(a)), l = i.find((p) => p.toLowerCase() === a);
  return l && (r = l), i.length === 0 ? r : i.length === 1 ? i[0] : (i.length > 1 && (r = i[0]), (s = ms(i, t.substring(o.length), r, a)) !== null && s !== void 0 ? s : i[0]);
}
function Id(e, t) {
  return t = t.toLowerCase(), e.some((r) => (r = r.toLowerCase()).startsWith(t.toLocaleLowerCase()) && r !== t);
}
function Ld(e) {
  if (!ca.has(e) && Array.isArray(e.values) && e.values.length > 0) {
    const t = e.values[0].length;
    if (e.placeholder.length !== t) return !1;
    ca.set(e, e.values.every((r) => r.length === t));
  }
  return ca.get(e);
}
function fa(e, t = 1) {
  const [r] = it(e), n = qt(e, Ja(e, Mt(e)));
  return n !== void 0 && r[n + t] !== void 0 && (e.setSelectionRange(...zn(e, r[n + t])), !0);
}
function jp(e, t = 1) {
  const [r, n] = it(e), s = qt(e, Mt(e));
  if (s !== void 0 && s in n) {
    const o = n[s];
    if (er(o)) {
      const a = r[s], i = e.value.slice(a[0], a[1]);
      let l = null, p = o.values.indexOf(i);
      const u = o.values.length - 1;
      if (p !== -1) {
        const c = p + t;
        p = c < 0 ? u : c > u ? 0 : c, l = o.values[p];
      } else i === o.placeholder && (l = t > 0 ? o.values[0] : o.values[u]);
      if (l !== null) {
        const c = { selectionBefore: a, insertPos: a[0], type: "insert", data: l, valueBefore: e.value, cycle: !0 };
        return setTimeout(() => os(e, c), 0), !0;
      }
    }
  }
  return !1;
}
function Md(e, t) {
  if (!e.length) return -1;
  if (e.length === 1) return e[0];
  const r = e.length / 2, n = Number.isInteger(r) ? r : Math.floor(r), s = Math.abs(t - e[n - 1]) < Math.abs(t - e[n]) ? [0, n] : [n];
  return Md(e.slice(...s), t);
}
function qt(e, t, r) {
  const [n] = r ?? it(e), s = n.findIndex((l) => l[0] !== l[1] && (!!Pr(l, t) || t[1] > l[0] && t[1] < l[1]));
  if (s !== -1) return s;
  const [o, a] = n.reduce((l, p, u) => (l[0].add(p[0]), l[0].add(p[1]), l[1][p[0]] = u, l[1][p[1]] = u, l), [/* @__PURE__ */ new Set(), {}]), i = Md([...o], t[0] === 0 && t[1] === e.value.length ? 0 : t[1]);
  return i in a ? a[i] : void 0;
}
function Ri(e) {
  var t, r;
  const n = (t = zt.get(e)) !== null && t !== void 0 ? t : [];
  return n[(r = $n.get(e)) !== null && r !== void 0 ? r : n.length - 1];
}
function Pd(e, t = !1) {
  const r = Ri(e);
  return r && (r.complete || t) ? an.has(e) ? [...r.unmasked].reverse().join("") : r.unmasked : t ? "" : null;
}
function ti(e) {
  var t;
  const r = Ri(e);
  return (t = r?.meta) !== null && t !== void 0 ? t : null;
}
function Hp(e) {
  const t = (n) => [...n].reverse().join(""), r = (n, s) => [s - n[1], s - n[0], n[2]];
  e.data && (e.data = t(e.data)), e.valueBefore = t(e.valueBefore), "valueAfter" in e && (e.valueAfter = t(e.valueAfter)), "selectionAfter" in e && (e.selectionAfter = r(e.selectionBefore, e.valueAfter.length)), e.selectionBefore = r(e.selectionBefore, e.valueBefore.length);
}
function Vd(e) {
  if (e.scrollWidth > e.clientWidth && e.selectionStart !== null && e.selectionEnd !== null) {
    const t = e.selectionStart / e.value.length, r = e.selectionEnd / e.value.length;
    e.scrollLeft = r > 0.9 ? e.scrollWidth : t * e.scrollWidth - 20, e.dispatchEvent(new CustomEvent("input-scroll", { bubbles: !1, detail: e.scrollLeft }));
  }
}
const Zp = typeof window < "u", ri = /* @__PURE__ */ new WeakSet(), ha = /* @__PURE__ */ new WeakSet(), Wp = /* @__PURE__ */ new WeakSet(), yo = /* @__PURE__ */ new WeakMap(), Nd = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakSet(), ni = /* @__PURE__ */ new WeakSet();
function Fd(e) {
  e.props.selectedMonth = e.props.selectedYear = e.props.selectedDay = e.props.selectedWeek = void 0;
}
function Rd(e) {
  var t, r, n;
  e.props.selectedMonth = e.props.months.findIndex((s) => jd(s, e.props.activeDate)), e.props.selectedYear = e.props.years.findIndex((s) => Bd(s, e.props.activeDate));
  for (let s = 0; s < ((t = e.props.calendar[0]) === null || t === void 0 ? void 0 : t.weeks.length); s++) for (let o = 0; o < ((r = e.props.calendar[0]) === null || r === void 0 ? void 0 : r.weeks[s].length); o++) {
    const a = (n = e.props.calendar[0]) === null || n === void 0 ? void 0 : n.weeks[s][o];
    if (ed(a, e.props.activeDate)) {
      e.props.selectedWeek = s, e.props.selectedDay = o;
      break;
    }
  }
}
function Yn(e) {
  return e.partName !== "timeZoneName";
}
function Bd(e, t) {
  return t instanceof Date && e.getFullYear() === t.getFullYear();
}
function jd(e, t) {
  return t instanceof Date && e.getMonth() === t.getMonth();
}
function va(e) {
  e.props.skipBuildCalendar || Fd(e), e.props.selectedIndex = e.props.calendar = dr(e.props.showMonths, (t) => t).map((t) => (function(r, n) {
    const s = [], o = Oe(n);
    o.setDate(1);
    let a = td(o, r.props.weekStart);
    a.setHours(o.getHours(), o.getMinutes(), o.getSeconds());
    const i = tb(po(n), r.props.weekStart);
    let l = [];
    do
      l.push(a), l.length === 7 && (s.push(l), l = []), a = on(a);
    while (a.getTime() <= i.getTime());
    return { monthDay: o, weeks: s };
  })(e, ar(e.props.renderedDate, t))), e.props.years = (function(t) {
    const r = Number(dt(t.props.renderedDate, "YYYY")), n = r - r % 10;
    return t.props.decade = `${n} - ${n + 9}`, dr(10, (s) => qr(t.props.renderedDate, n + s - r));
  })(e), e.props.months = (function(t) {
    const r = Oe(t.props.renderedDate);
    return r.setMonth(0), dr(12, (n) => ar(r, n));
  })(e), e.props.skipBuildCalendar ? e.props.skipBuildCalendar = !1 : e.value && Rd(e);
}
function b1(e, t) {
  var r;
  t.target && t.target instanceof Element && (t.target.closest(`#${e.props.id}_popover`) || !(!((r = e.props.__root) === null || r === void 0) && r.contains(t.target))) || (e.props.expanded = !1);
}
function xr(e, t) {
  if (!t) return e.props.inputText = "", /* @__PURE__ */ new Date();
  const r = t instanceof Date ? t : wr(t, e.props.valueFormat, e.props.valueLocale);
  return e.props.inputText = e.props.formatDate(r, e.props.format, e.props.locale, !1, Yn), r;
}
function Kp(e) {
  return Array.isArray(e.props.sequence) ? gr(e.props.sequence) : ["day"];
}
function Vn(e, t, r = !0) {
  var n, s;
  if (e._value === t) return;
  if (t == null) return e.input(t, r);
  e.props.offset = e.props.timezone ? rs(t, e.props.timezone) : "+0000";
  const o = Xc(t, (n = (s = e.props).offset) !== null && n !== void 0 ? n : s.offset = "+0000");
  e.input(dt(o, e.props.valueFormat, e.props.valueLocale, !1), r);
}
function ga(e, t) {
  var r;
  const n = ["prev_button", "month_button", "day_button", "year_button", "next_button"].find((o) => {
    var a;
    return (a = e.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${e.props.id}_${o}`);
  }), s = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_${n}`);
  s instanceof HTMLElement && (t.preventDefault(), s.focus());
}
function _1(e, t) {
  let r = "";
  if (!(t instanceof HTMLInputElement) || e.props.pickerOnly) return;
  yo.set(e, t);
  const n = (i) => {
    e.props.expanded && i.target instanceof HTMLElement && i.target.closest(`#${e.props.id}_popover`) ? ni.add(e) : ni.delete(e);
  }, s = e.props.__root;
  s && (s.addEventListener("click", n), Sn(e, () => s.removeEventListener("click", n))), e.on("prop:inputText", ({ payload: i }) => {
    i !== t.value && (Hs.get(t) === "beforeCallback" && (r = t.value), Lp(t), t.selectionStart = 0, t.selectionEnd = t.value.length, (function(l, p) {
      var u, c;
      if (!zt.has(l)) return;
      const f = (u = Dn.get(l)) !== null && u !== void 0 ? u : "", d = (c = Vo.get(l)) !== null && c !== void 0 ? c : "";
      os(l, { type: "insert", selectionBefore: Mt(l), data: p, valueBefore: l.value, suffix: d, prefix: f });
    })(t, i), t.value = i, setTimeout(() => Mp(t), 10));
  });
  const [o, a] = x1(e);
  Ni(t, { pattern: o, explicitParts: a, onChange: ({ valueAfter: i }) => {
    if (Hd(e), ri.has(e)) return ri.delete(e);
    r && r === i ? r = "" : (Lp(t), e.props.inputText = i, setTimeout(() => Mp(t), 10));
  } }, e);
}
function Hd(e) {
  var t, r;
  if (e.props.overlay) {
    const n = yo.get(e);
    !n || !(!((t = e.props.attrs) === null || t === void 0) && t.placeholder) || e._value || Pd(n, !0) || e.props._isFocused || e.props.activeDate && e.props.expanded ? n && (e.props._isPlaceholder = !1, e.props._overlayParts = co(ti(n))) : (e.props._isPlaceholder = !0, e.props._overlayParts = [{ type: "placeholder", value: (r = e.props.attrs) === null || r === void 0 ? void 0 : r.placeholder }]);
  }
}
function x1(e) {
  const t = e.props.locale, r = ["full", "long", "medium", "short"].includes(e.props.format) || typeof e.props.format == "object", n = gn(e.props.format, t);
  return [Oi(e.props.format, t, !0, Yn), n.reduce((s, o) => {
    if (o.partName === "literal") return s;
    let a = Eo(o.token, t, r);
    if (o.token === "YYYY" && e.props.minDate && e.props.maxDate) {
      const l = e.props.minDate.getFullYear();
      a = dr(e.props.maxDate.getFullYear() - l + 1, (p) => String(l + p));
    }
    const i = { type: "enum", token: o.token, values: a, placeholder: o.token === "A" ? "A/P" : o.token, selectDirection: "left" };
    return s.push(i), o.token.startsWith("D") && Nd.set(e, a), s;
  }, [])];
}
function w1(e, t) {
  return !t || !(!e.props.minDate || !rb(t, e.props.minDate)) || !(!e.props.maxDate || !nb(t, e.props.maxDate)) || void 0;
}
function k1(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
const S1 = typeof window < "u", Up = /* @__PURE__ */ new WeakMap();
function C1(e, t) {
  var r, n;
  if (t instanceof HTMLInputElement && !Up.get(e) && S1) {
    const s = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_overlay`), o = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}_overlay_inner`);
    if (s && t && o) {
      Up.set(e, s);
      const a = getComputedStyle(t).color;
      t.style.color = "transparent", t.style.caretColor = a;
      const i = new ResizeObserver(() => {
        var p;
        const u = getComputedStyle(t), c = t.getBoundingClientRect(), f = (p = t.parentElement) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
        e.props._overlayStyles = { ...e.props._overlayStyles, width: u.width, height: u.height, boxSizing: u.boxSizing, padding: u.padding, margin: u.margin, fontSize: u.fontSize, lineHeight: u.lineHeight, top: c.top - (f?.top || c.top) + "px", left: c.left - (f?.left || c.left) + "px" };
      });
      i.observe(t);
      const l = (p) => {
        o.scrollLeft = p.detail;
      };
      t.addEventListener("input-scroll", l), e.on("destroyed", () => {
        t.removeEventListener("input-scroll", l), i.disconnect();
      });
    }
  }
}
function Zd(e) {
  e.addProps(["_overlayStyles", "_overlayParts", "_overlayInnerStyles", "_isPlaceholder"]), e.props._overlayParts = [], e.props._overlayStyles = { position: "absolute", top: "0", left: "0", pointerEvents: e.props._isPlaceholder ? "auto" : "none" }, e.props._overlayInnerStyles = { overflow: "hidden", whiteSpace: "nowrap", paddingRight: "20px" }, e.on("created", () => {
    e.props.overlay = Y(e.props.overlay), e.props.pickerOnly = Y(e.props.pickerOnly), e.props.overlay = e.props.pickerOnly ? void 0 : e.props.overlay, e.props.overlay && Ze(`${e.props.id}`, C1.bind(null, e), e.props.__root);
  }), e.on("prop:_isPlaceholder", () => {
    e.props._overlayStyles = { ...e.props._overlayStyles, pointerEvents: e.props._isPlaceholder ? "auto" : "none" };
  });
}
const D1 = { schema: /* @__PURE__ */ gw(/* @__PURE__ */ yw(/* @__PURE__ */ bw("$label"), /* @__PURE__ */ $w(/* @__PURE__ */ _r("prefix"), /* @__PURE__ */ _w(), /* @__PURE__ */ o1(/* @__PURE__ */ i1(/* @__PURE__ */ a1(/* @__PURE__ */ t1("$part.value"), /* @__PURE__ */ r1("$part.value"), /* @__PURE__ */ n1("$part.value"), /* @__PURE__ */ s1("$part.value")))), /* @__PURE__ */ Cw(), /* @__PURE__ */ Dw(/* @__PURE__ */ Kw(/* @__PURE__ */ Ow(/* @__PURE__ */ Ew("$ui.prev.value"), /* @__PURE__ */ _r("prev")), /* @__PURE__ */ Uw("$decade"), /* @__PURE__ */ zw(/* @__PURE__ */ pa()), /* @__PURE__ */ Yw(/* @__PURE__ */ Tp(), /* @__PURE__ */ pa()), /* @__PURE__ */ qw(/* @__PURE__ */ Tp(), /* @__PURE__ */ Gw(), /* @__PURE__ */ pa()), /* @__PURE__ */ Aw(/* @__PURE__ */ Tw("$ui.next.value"), /* @__PURE__ */ _r("next")), /* @__PURE__ */ e1(/* @__PURE__ */ _r("close"))), /* @__PURE__ */ l1(/* @__PURE__ */ jw(/* @__PURE__ */ Hw("$fns.format($year, $yearFormat)")), /* @__PURE__ */ Zw(/* @__PURE__ */ Ww("$fns.format($month, $monthFormat)")), /* @__PURE__ */ Iw(/* @__PURE__ */ Mw(/* @__PURE__ */ Pw(/* @__PURE__ */ Vw("$fns.format($day, $weekdayFormat)"))), /* @__PURE__ */ Lw(/* @__PURE__ */ Nw(/* @__PURE__ */ Fw(/* @__PURE__ */ Rw("$fns.format($day, $dateFormat)"))))), /* @__PURE__ */ Jw(/* @__PURE__ */ Qw()))), /* @__PURE__ */ Xw(/* @__PURE__ */ _r("clear")), /* @__PURE__ */ Bw(/* @__PURE__ */ _r("calendar")), /* @__PURE__ */ xw(), /* @__PURE__ */ _r("suffix"))), /* @__PURE__ */ ww("$help"), /* @__PURE__ */ kw(/* @__PURE__ */ Sw("$message.value"))), type: "input", family: "text", props: ["dateFormat", "dayButtonFormat", "format", "monthButtonFormat", "monthFormat", "overlay", "pickerOnly", "showMonths", "showPagination", "weekStart", "weekdayFormat", "yearFormat", "years"], features: [
  Zd,
  function(e) {
    var t, r, n, s, o, a, i, l, p, u, c, f, d, g, v, $, h, S, m, w, C, x;
    e.addProps(["_isDisabled", "_isFocused", "activeDate", "calendar", "clearable", "disabled", "decade", "disabledDays", "expanded", "inputText", "localTime", "maxDate", "maxScan", "minDate", "months", "offset", "paginatedPanels", "panel", "pickerOnly", "renderedDate", "sequence", "timezone", "valueFormat", "valueLocale", "showPanelClose", "selectedDay", "selectedWeek", "selectedMonth", "selectedYear"]), e.hook.prop((_, A) => (_.prop === "expanded" && e.props.disabled && (_.value = !1), _.prop === "weekStart" && (_.value = Number(_.value || 0)), _.prop === "showMonths" && (_.value = Number(_.value || 1)), _.prop === "maxScan" && (_.value = Number(_.value || 7)), _.prop === "timezone" && (typeof e._value == "string" || e._value instanceof Date) && (e.props.offset = rs(e._value, _.value)), A(_))), e.props._isFocused = !1, e.props._isPlaceholder = !1, (t = (f = e.props).valueFormat) !== null && t !== void 0 || (f.valueFormat = "ISO8601"), (r = (d = e.props).weekdayFormat) !== null && r !== void 0 || (d.weekdayFormat = "d"), (n = (g = e.props).monthFormat) !== null && n !== void 0 || (g.monthFormat = "MMM"), (s = (v = e.props).monthButtonFormat) !== null && s !== void 0 || (v.monthButtonFormat = "MMMM"), (o = ($ = e.props).dayButtonFormat) !== null && o !== void 0 || ($.dayButtonFormat = "D"), (a = (h = e.props).dateFormat) !== null && a !== void 0 || (h.dateFormat = "D"), (i = (S = e.props).yearFormat) !== null && i !== void 0 || (S.yearFormat = "YYYY"), (l = (m = e.props).paginatedPanels) !== null && l !== void 0 || (m.paginatedPanels = ["day", "year"]), (p = (w = e.props).valueLocale) !== null && p !== void 0 || (w.valueLocale = e.props.locale), (u = (C = e.props).format) !== null && u !== void 0 || (C.format = "long"), e.props.panels = Kp(e), e.props.pickerOnly = Y(e.props.pickerOnly), "disabled" in e.props && (e.props.disabled = Y(e.props.disabled)), "clearable" in e.props && (e.props.clearable = Y(e.props.clearable)), (c = (x = e.props).maxScan) !== null && c !== void 0 || (x.maxScan = 7), e.props._isDisabled = typeof e.props.disabledDays == "function" ? e.props.disabledDays.bind(null, e) : w1.bind(null, e), e.props.calendar = [], e.props.inputText = "", e.props.showMonths = e.props.showMonths || 1, typeof e.props.format == "function" ? (e.props.formatDate = e.props.format, e.props.format = null) : e.props.formatDate = dt, va(e), e.on("mounted", () => {
      Ze(`${e.props.id}`, _1.bind(null, e), e.props.__root);
    }), e.on("created", () => {
      if ((function(_) {
        const A = _._value;
        let k = /* @__PURE__ */ new Date();
        if (A instanceof Date) k = Oe(A);
        else if (typeof A == "string") try {
          const y = wr(A, _.props.valueFormat, _.props.valueLocale);
          k = Oe(y);
        } catch {
          console.warn(`Date (${A}) does not match format (${Oi(_.props.valueFormat, _.props.valueLocale)})`), k = void 0;
        }
        else A || (k = void 0);
        if (_.props.offset = _.props.timezone ? rs(k || /* @__PURE__ */ new Date(), _.props.timezone) : "+0000", _.props.minDate) {
          const y = typeof _.props.minDate == "string" ? wr(_.props.minDate) : _.props.minDate;
          _.props.minDate = Gr(y, _.props.offset);
        }
        if (_.props.maxDate) {
          const y = typeof _.props.maxDate == "string" ? wr(_.props.maxDate) : _.props.maxDate;
          _.props.maxDate = Gr(y, _.props.offset);
        }
        k = k && Gr(k, _.props.offset), k && Vn(_, k, !1);
        let b = k || /* @__PURE__ */ new Date();
        _.props.minDate && b < _.props.minDate ? b = _.props.minDate : _.props.maxDate && b > _.props.maxDate && (b = _.props.maxDate), _.props.renderedDate = b, _.props.activeDate = b, _.props.localTime = k && dt(k, "HH:mm") || "12:00";
      })(e), e.context) {
        const _ = {};
        let A;
        e.context.fns.format = (k, b) => {
          if (_[b] && _[b][k.toString()]) return _[b][k.toString()];
          const y = dt(k, b, e.props.locale || "en", !1, Yn);
          return _[b] ? _[b][k.toString()] = y : _[b] = { [k.toString()]: y }, y;
        }, e.context.fns.isDisabled = e.props._isDisabled, e.context.fns.isDisabledMonth = (k) => !En(k, (b) => !e.props._isDisabled(b), "month"), e.context.fns.isDisabledYear = (k) => !En(k, (b) => !e.props._isDisabled(b), "year"), e.context.handlers._blur = (k) => {
          var b, y;
          e.props._isFocused = !1, typeof ((b = e.context) === null || b === void 0 ? void 0 : b.handlers.blur) == "function" && ((y = e.context) === null || y === void 0 || y.handlers.blur(k));
        }, e.context.handlers.closePanel = () => {
          e.props.expanded = !1;
        }, e.context.handlers._blurOut = (k) => (b) => {
          var y;
          b.preventDefault(), e.props.keydown ? e.props.keydown = !1 : k && k !== e.props.panel || e.props.pickerOnly && b.relatedTarget instanceof Element && (b.relatedTarget === document.getElementById(`${e.props.id}_inner`) || b.relatedTarget.closest(`#${e.props.id}_inner`)) || b.relatedTarget && b.relatedTarget instanceof Element && (b.relatedTarget.closest(`#${e.props.id}_popover`) || !(!((y = e.props.__root) === null || y === void 0) && y.contains(b.relatedTarget)) || b.relatedTarget.id === `${e.props.id}_popover`) || (e.props.expanded = !1);
        }, e.context.handlers.overlayClick = () => {
          const k = yo.get(e);
          k && (k.focus(), e.props._isPlaceholder = !1);
        }, e.context.handlers.focus = () => {
          e.props.pickerOnly || (e.props._isFocused = !0, e.props.pickerOnly && !ha.has(e) && (Wp.add(e), e.props.expanded = !0, setTimeout(() => Wp.delete(e), 200)));
        }, e.context.handlers.clear = () => {
          var k, b;
          Vn(e, void 0, !0), xr(e, void 0);
          const y = (b = (k = e.props) === null || k === void 0 ? void 0 : k.__root) === null || b === void 0 ? void 0 : b.getElementById(`${e.props.id}`);
          y instanceof HTMLInputElement && (y.focus(), setTimeout(() => {
            y.setSelectionRange(0, 0);
          }, 50));
        }, e.context.handlers.dateInput = (k) => {
          var b;
          if (ma.has(e)) return ma.delete(e);
          if (k.target instanceof HTMLInputElement && !e.props.expanded) try {
            let y = wr({ date: k.target.value, format: e.props.format, locale: e.props.locale, partFilter: Yn });
            if ((function(I) {
              return gn(I.props.format, I.props.locale).some((B) => B.partName === "weekday");
            })(e) && e.props.activeDate instanceof Date && e.props.activeDate.getTime() === y.getTime() && !Dr.get(k.target) && dt(y, e.props.format, e.props.locale, !1, Yn) !== k.target.value) {
              const I = Eo("dddd", e.props.locale), B = gn(e.props.format, e.props.locale), te = (b = Qc(k.target.value, B).find((W) => W.token === "dddd")) === null || b === void 0 ? void 0 : b.value, ne = dt(y, "dddd", e.props.locale);
              if (te && I.includes(te) && ne !== te) {
                let W = I.indexOf(te) - I.indexOf(ne);
                W = W < -1 ? 7 + W : W, y = on(y, W), ri.add(e);
              }
            }
            Vn(e, y);
          } catch {
            Vn(e, void 0);
          }
        }, e.context.handlers.open = () => {
          e.props.expanded = !0;
        }, e.context.handlers.next = () => {
          switch (e.props.panel) {
            case "year":
              return void (e.props.renderedDate = qr(e.props.renderedDate, 10));
            case "day":
              return void (e.props.renderedDate = ar(e.props.renderedDate, 1));
          }
        }, e.context.handlers.prev = () => {
          switch (e.props.panel) {
            case "year":
              return void (e.props.renderedDate = qr(e.props.renderedDate, -10));
            case "day":
              return void (e.props.renderedDate = ar(e.props.renderedDate, -1));
          }
        }, e.context.handlers.setDate = (k) => () => {
          e.props.panel !== "month" && e.props.panel !== "year" || !e.props.activeDate || (k = e.props.activeDate), e.emit("dateSelected", k);
        }, e.context.handlers.localTime = (k) => {
          const b = k.target;
          if (!b.value) return;
          const [y, I] = b.value.split(":");
          e.props.localTime = b.value, e.props.activeDate.setHours(y, I), xr(e, e.props.activeDate);
        }, e.context.handlers.keyDown = (k) => {
          switch (e.props.keydown = !0, e.props.panel) {
            case "day":
              return e.emit("calendarKeydown", k);
            case "year":
              return e.emit("yearKeydown", k);
            case "month":
              return e.emit("monthKeydown", k);
            case "time":
              return e.emit("timeKeydown", k);
            default:
              return;
          }
        }, e.context.handlers.inputKeydown = (k) => {
          e.emit("keydown", k);
        }, e.context.handlers.openKeydown = (k) => {
          k.key !== "Enter" && k.key !== "Space" || (e.props.expanded = !0);
        }, e.context.handlers.mouseEnter = (k) => (b) => {
          if (clearTimeout(A), b.target instanceof HTMLElement && b.target.getAttribute("tabindex") === "-1" && b.target.getAttribute("data-is-extra") !== "true") if (e.props.panel === "month" || e.props.panel === "year") {
            const y = En(k, () => !0, e.props.panel);
            y && (e.props.activeDate = y);
          } else e.props.activeDate = k;
        }, e.context.handlers.mouseLeave = () => {
          clearTimeout(A), A = setTimeout(() => {
          }, 100);
        }, e.context.handlers.jumpTo = (k) => () => {
          e.props.panels.unshift(e.props.panel), e.props.panel = k;
        }, e.context.fns.sameDay = (k) => (function(b, y) {
          return y instanceof Date && ed(b, y);
        })(k, e.props.activeDate), e.context.fns.sameMonth = (k) => jd(k, e.props.activeDate), e.context.fns.sameYear = (k) => Bd(k, e.props.activeDate), e.context.fns.notInMonth = (k, b) => {
          const y = q$(b).getTime();
          return y < rp(k).getTime() || y > po(k).getTime() || void 0;
        };
      }
    });
    const D = b1.bind(null, e);
    Sn(e, () => {
      document.removeEventListener("click", D);
    }), e.on("prop:panel", ({ payload: _ }) => {
      e.props.showPagination = e.props.paginatedPanels.includes(_);
    }), e.on("dateSelected", ({ payload: _ }) => {
      var A, k;
      Array.isArray(e.props.panels) && e.props.panels.length ? e.props.panel = e.props.panels.shift() : (e.props.expanded = !1, (k = (A = e.props.__root) === null || A === void 0 ? void 0 : A.getElementById(`${e.props.id}`)) === null || k === void 0 || k.focus()), _ && e.props._isDisabled(_) || Vn(e, _);
    }), e.on("input", ({ payload: _ }) => {
      if (_ === void 0 && !e.props._isFocused) return void xr(e, void 0);
      const A = /* @__PURE__ */ new Date(), k = _ ? xr(e, Gr(typeof _ == "string" ? wr(_, e.props.valueFormat, e.props.valueLocale) : _, e.props.offset)) : A;
      e.props.activeDate = !_ && e.props.activeDate ? e.props.activeDate : k, e.props.renderedDate = !_ && e.props.renderedDate ? e.props.renderedDate : k, e.props.localTime = dt(k, "HH:mm"), (function(b) {
        const y = Nd.get(b);
        if (b._value && y) {
          const I = ds(b.props.activeDate);
          if (y.length > I) y.splice(I, y.length - I);
          else if (y.length < I) for (let B = y.length + 1; B <= I; B++) y.push(String(B));
        }
      })(e);
    }), e.on("prop:renderedDate", va.bind(null, e)), e.on("prop:expanded", ({ payload: _ }) => {
      if (_) {
        if (ni.delete(e), e.props.panels = Kp(e), e.props.panel = e.props.panels.shift(), window.innerWidth <= 430 && !window.matchMedia("(hover: hover)").matches ? e.props.showPanelClose = !0 : e.props.showPanelClose = !1, e.props.panel === "day") {
          const A = e.props.activeDate;
          e.props.activeDate = En(e.props.activeDate, (k) => !e.props._isDisabled(k), "month") || A;
        }
        va(e), Ze(`${e.props.id}_popover`, (A) => {
          const k = A.querySelector('[tabindex="0"]');
          k && setTimeout(() => {
            k.focus(), (function(b, y) {
              const I = Ii(b, (te) => {
                for (const ne of te) ne.type === "attributes" && ne.target instanceof HTMLElement && ne.target.getAttribute("tabindex") === "0" ? ne.target.focus() : ne.addedNodes.length && ne.addedNodes.forEach((W) => {
                  var Ce;
                  if (W instanceof HTMLElement && W.getAttribute("tabindex") === "0") W.focus();
                  else if (W instanceof HTMLElement && W.querySelector('[tabindex="0"]')) {
                    const De = W.querySelector('[tabindex="0"]');
                    De instanceof HTMLElement && De.focus();
                  } else W instanceof HTMLElement && W.querySelector('input[type="time"]') && ((Ce = W.querySelector('input[type="time"]')) === null || Ce === void 0 || Ce.focus());
                });
              });
              I.observe(y, { attributes: !0, attributeFilter: ["tabindex"], childList: !0, subtree: !0 });
              const B = b.on("prop:expanded", ({ payload: te }) => {
                te || (b.off(B), I.disconnect());
              });
            })(e, A);
          }, 0);
        }, e.props.__root), Zp && setTimeout(() => {
          document.addEventListener("click", D);
        }, 10);
      } else {
        if (e.props.activeDate = e.props.renderedDate, e.props.panel === "time") e.emit("dateSelected", e.props.activeDate);
        else if (e._value) {
          ma.add(e);
          const A = typeof e._value == "string" ? wr(e._value, e.props.valueFormat, e.props.valueLocale) : e._value;
          xr(e, Gr(A, e.props.offset));
        } else xr(e, void 0);
        Zp && (ha.add(e), document.removeEventListener("click", D), setTimeout(() => ha.delete(e), 50));
      }
    }), e.on("prop:activeDate", ({ payload: _ }) => {
      if (Array.isArray(e.props.calendar) && e.props.calendar.length) {
        if (e.props.panel === "day") {
          const A = e.props.calendar, k = rp(e.props.renderedDate), b = po(ar(e.props.renderedDate, A.length - 1));
          _.getTime() < k.getTime() ? e.props.renderedDate = ar(e.props.renderedDate, -1) : _.getTime() > b.getTime() && (e.props.renderedDate = ar(e.props.renderedDate));
        } else if (e.props.panel === "year") {
          const A = e.props.years, k = A[0].getFullYear(), b = A[A.length - 1].getFullYear(), y = e.props.activeDate.getFullYear();
          y > b ? e.props.renderedDate = qr(e.props.renderedDate, 10) : y < k ? e.props.renderedDate = qr(e.props.renderedDate, -10) : (e.props.skipBuildCalendar = !0, e.props.renderedDate = _);
        }
      }
      e.props.expanded && xr(e, e.props.activeDate);
    }), e.on("keydown", ({ payload: _ }) => {
      switch (_.key) {
        case "ArrowDown":
        case "ArrowUp":
        case " ":
          _.preventDefault(), e.props.pickerOnly && (e.props.expanded = !0);
          break;
        case "Enter":
        case "Return":
          e.props.expanded || (e.props.expanded = !0);
          break;
        case "Escape":
          e.props.expanded = !1;
      }
    }), e.on("calendarKeydown", ({ payload: _ }) => {
      _.preventDefault();
      let A = null, k = 0;
      switch (_.key) {
        case "ArrowRight":
          k = 1;
          break;
        case "ArrowLeft":
          k = -1;
          break;
        case "ArrowDown":
          k = 7;
          break;
        case "ArrowUp":
          k = -7;
          break;
        case "Return":
        case "Enter":
          e.emit("dateSelected", e.props.activeDate);
          break;
        case "Tab":
          _.shiftKey || ga(e, _);
          break;
        case "Escape":
          e.props.expanded = !1;
      }
      if (k && (_.preventDefault(), A = on(e.props.activeDate, k)), A && !e.props._isDisabled(A)) e.props.activeDate = A;
      else if (A && e.props._isDisabled(A)) {
        const b = k > 0 ? 1 : -1;
        dr(Number(e.props.maxScan), (y) => b * y).some((y) => {
          const I = on(A, y);
          return !e.props._isDisabled(I) && (e.props.activeDate = I, !0);
        });
      }
    }), e.on("yearKeydown", ({ payload: _ }) => {
      let A = 0;
      switch (_.key) {
        case "ArrowDown":
          A = 5;
          break;
        case "ArrowRight":
          A = 1;
          break;
        case "ArrowUp":
          A = -5;
          break;
        case "ArrowLeft":
          A = -1;
          break;
        case "Tab":
          _.shiftKey || ga(e, _);
          break;
        case "Return":
        case "Enter":
          e.emit("dateSelected", e.props.activeDate);
          break;
        case "Escape":
          e.props.expanded = !1;
      }
      const k = e.props.activeDate.getFullYear() + A - e.props.renderedDate.getFullYear();
      e.props.activeDate = qr(e.props.renderedDate, k);
    }), e.on("monthKeydown", ({ payload: _ }) => {
      let A = 0;
      switch (_.key) {
        case "ArrowDown":
          A = 3;
          break;
        case "ArrowRight":
          A = 1;
          break;
        case "ArrowLeft":
          A = -1;
          break;
        case "ArrowUp":
          A = -3;
          break;
        case "Tab":
          _.shiftKey || ga(e, _);
          break;
        case "Return":
        case "Enter":
          e.emit("dateSelected", e.props.activeDate);
          break;
        case "Escape":
          e.props.expanded = !1;
      }
      A && _.preventDefault();
      let k = (e.props.activeDate.getMonth() + A) % 12;
      k = k < 0 ? 12 + k : k;
      const b = k - e.props.renderedDate.getMonth();
      let y = ar(e.props.renderedDate, b);
      if (e.props._isDisabled(y)) {
        const I = En(y, (B) => !e.props._isDisabled(B), "month");
        I && (y = I);
      }
      e.props.activeDate = y;
    }), e.on("timeKeydown", ({ payload: _ }) => {
      switch (_.key) {
        case "Return":
        case "Enter":
          _.preventDefault(), e.emit("dateSelected", e.props.activeDate);
      }
    }), e.on("prop:_isFocused", () => {
      yo.get(e) && Hd(e);
    }), e.on("commit", ({ payload: _ }) => {
      if (_ ? Rd(e) : Fd(e), e.props.activeDate && e.props._isDisabled(e.props.activeDate)) {
        const A = qe({ blocking: !0, key: "rule_invalidDate", meta: { messageKey: "invalidDate", removeImmediately: !1, localize: !0, i18nArgs: [{ node: e, name: k1(e), args: [] }] }, type: "validation", value: "The selected date is invalid." });
        e.store.set(A);
      } else e.store.remove("rule_invalidDate");
    });
  },
  fs,
  /* @__PURE__ */ xe("next"),
  /* @__PURE__ */ xe("prev"),
  /* @__PURE__ */ xe("changeDate"),
  /* @__PURE__ */ xe("chooseDate"),
  /* @__PURE__ */ he("close", "close"),
  /* @__PURE__ */ he("next", "right"),
  /* @__PURE__ */ he("clear", "close"),
  /* @__PURE__ */ he("prev", "left"),
  /* @__PURE__ */ he("calendar", "date")
] }, Vt = /* @__PURE__ */ lt("tl"), { outer: A1, wrapper: T1, inner: O1, icon: Nn, label: E1, prefix: I1, suffix: L1, help: M1, messages: P1, message: V1 } = /* @__PURE__ */ pt(Vt), N1 = Vt("input", () => ({ $el: "input", bind: "$attrs", attrs: { id: "$id", type: "text", onClick: "$handlers.click", onBlur: "$handlers.blur", onKeydown: "$handlers.keydown", onInput: "$handlers.input", onFocus: "$handlers.focus", value: "$inputText", name: "$node.name", tabindex: "0", placeholder: "$state.loading && $inputStd.length === 0 && $ui.isLoading.value || $placeholder || undefined", role: "combobox", autocomplete: "off", autocapitalize: "none", readonly: "$attrs.readonly || $isLoadingOption || undefined || $multiple && $max && $value && $value.length >= $max", disabled: "$disabled || $disabledInternally || undefined", "aria-autocomplete": "list", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy", "aria-activedescendant": "$expanded && $activeDescendant || undefined", "aria-required": "$state.required || undefined" } })), F1 = Vt("listboxButton", () => ({ $el: "button", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', type: "button", onClick: "$handlers.toggleListbox", tabindex: "-1", "aria-label": "$expanded && $ui.close.value || $ui.open.value", disabled: "$disabled || undefined", "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined' } })), R1 = Vt("tagWrapper", () => ({ $el: "span", for: ["option", "index", "$selections"], attrs: { id: '$id + "_tag-wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: "-1", onClick: "$handlers.tagClick && $handlers.tagClick($option)", onFocus: "$handlers.tagFocus && $handlers.tagFocus($option)", onBlur: "$handlers.tagBlur && $handlers.tagBlur($option)", onKeydown: "$handlers.searchInputTagKeydown && $handlers.searchInputTagKeydown($option)", "data-is-tag": "true", "data-active-selection": "$fns.isActiveSelection && $fns.isActiveSelection($activeSelectionValue, $option)" } })), B1 = Vt("tag", () => ({ $el: "div", attrs: { id: '$id + "_tag_" + $index', role: "button" } })), j1 = Vt("removeSelection", () => ({ $el: "button", if: "$selections.length > 0", attrs: { id: '$id + "_remove_selection_" + $index', tabindex: "-1", "aria-label": "$ui.remove.value", type: "button", onClick: "$handlers.removeSelection && $handlers.removeSelection($option)", onTouchstartPassive: "$handlers.removeSelection && $handlers.removeSelection($option)", "aria-controls": "$id" } })), H1 = Vt("tagLabel", () => ({ $el: "span" })), Z1 = Vt("tags", () => ({ $el: "div", attrs: { id: '$id + "_selections"', "aria-live": "polite" } })), W1 = Vt("tagLoading", "span"), K1 = /* @__PURE__ */ Ei(Vt);
function U1(e) {
  e.props.multiple = !0, e.props.openOnClick = Y(e.props.openOnClick), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.closeOnSelect ? e.props.resetSearchOnCommit = !1 : e.props.resetSearchOnCommit === void 0 && (e.props.resetSearchOnCommit = e.props.multiple), e.props.allowNewValues = Y(e.props.allowNewValues);
}
function z1(e) {
  kd(e), $d(e), e.on("created", () => {
    function t() {
      return Array.isArray(e.value) ? e.value : [];
    }
    function r(n) {
      e.input(n);
    }
    e.props.disabled && (e.props.draggable = !1), Ze(`${e.props.id}_selections`, (n) => {
      if (n instanceof HTMLElement) {
        if (!e.context) return;
        const s = { draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, disabled: !e.props.draggable, threshold: { horizontal: 0.25, vertical: 0 }, plugins: [Ao()], root: e.props.__root, touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (o) => o.hasAttribute("data-is-tag"), handleEnd(o) {
          e.props.activeSelectionValue = void 0, io(o);
        }, handleDragstart(o) {
          e.props.activeSelectionValue = void 0, ao(o);
        }, handleTouchstart(o) {
          e.props.activeSelectionValue = void 0, lo(o);
        } };
        ze({ parent: n, getValues: t, setValues: r, config: s }), e.on("prop:disabled", ({ payload: o }) => {
          s.disabled = o, ze({ parent: n, getValues: t, setValues: r, config: s });
        }), e.on("prop:draggable", ({ payload: o }) => {
          s.disabled = !o, ze({ parent: n, getValues: t, setValues: r, config: s });
        });
      }
    }, e.props.__root);
  });
}
const Y1 = { schema: /* @__PURE__ */ A1(/* @__PURE__ */ T1(/* @__PURE__ */ E1("$label"), /* @__PURE__ */ O1(/* @__PURE__ */ Nn("prefix"), /* @__PURE__ */ I1(), /* @__PURE__ */ Z1(/* @__PURE__ */ R1(/* @__PURE__ */ B1(/* @__PURE__ */ U("$state.loading && $fns.hasOptionLoaderValue && $fns.hasOptionLoaderValue($option) || $option.label === undefined", /* @__PURE__ */ W1("$ui.isLoading.value"), /* @__PURE__ */ H1("$option.label")), /* @__PURE__ */ j1(/* @__PURE__ */ Nn("close")))), /* @__PURE__ */ N1()), /* @__PURE__ */ U("$state.loading", /* @__PURE__ */ Nn("loader")), /* @__PURE__ */ F1(/* @__PURE__ */ Nn("select")), /* @__PURE__ */ K1(), /* @__PURE__ */ L1(), /* @__PURE__ */ Nn("suffix"))), /* @__PURE__ */ M1("$help"), /* @__PURE__ */ P1(/* @__PURE__ */ V1("$message.value"))), type: "input", family: "dropdown", props: [], features: [
  tr,
  /* @__PURE__ */ Vi.bind(null, U1, xd, z1),
  /* @__PURE__ */ he("select", "select"),
  /* @__PURE__ */ he("close", "close"),
  /* @__PURE__ */ he("selected", "check"),
  /* @__PURE__ */ he("loader", "spinner"),
  /* @__PURE__ */ xe("isLoading"),
  /* @__PURE__ */ xe("loadMore"),
  /* @__PURE__ */ xe("remove"),
  /* @__PURE__ */ xe("open"),
  /* @__PURE__ */ xe("close"),
  fs
] }, Bi = /* @__PURE__ */ lt("mk"), { outer: q1, wrapper: G1, inner: X1, label: J1, prefix: Q1, suffix: ek, help: tk, messages: rk, message: nk, icon: zp } = /* @__PURE__ */ pt(Bi), { overlayPlaceholder: sk, overlayLiteral: ok, overlayChar: ak, overlayEnum: ik, overlay: lk, overlayParts: pk, overlayInner: uk } = /* @__PURE__ */ rd(Bi), ck = Bi("input", () => ({ $el: "input", bind: "$attrs", attrs: { type: "text", disabled: "$disabled", name: "$node.name", onBlur: "$handlers.blur", onInput: "$handlers.DOMInput", value: "$_maskValue", placeholder: "$placeholder", id: "$id", "aria-describedby": "$describedBy" } })), si = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), Yp = /* @__PURE__ */ new WeakMap();
function dk(e, t) {
  if (!(t instanceof HTMLInputElement)) throw new Error(`Masks can only be applied to an HTMLInputElement (id: ${t.id}).`);
  oi.set(e, t), Ni(t, { ...si.get(e), onChange: ({ valueAfter: r, meta: n }) => {
    e.props._maskValue = r, e.input({ maskValue: r }), e.props._overlayParts = co(n);
  } }, e);
}
const fk = { schema: /* @__PURE__ */ q1(/* @__PURE__ */ G1(/* @__PURE__ */ J1("$label"), /* @__PURE__ */ X1(/* @__PURE__ */ zp("prefix"), /* @__PURE__ */ Q1(), /* @__PURE__ */ lk(/* @__PURE__ */ uk(/* @__PURE__ */ pk(/* @__PURE__ */ sk("$part.value"), /* @__PURE__ */ ok("$part.value"), /* @__PURE__ */ ak("$part.value"), /* @__PURE__ */ ik("$part.value")))), /* @__PURE__ */ ck(), /* @__PURE__ */ ek(), /* @__PURE__ */ zp("suffix"))), /* @__PURE__ */ tk("$help"), /* @__PURE__ */ rk(/* @__PURE__ */ nk("$message.value"))), type: "input", props: ["allowIncomplete", "mask", "mode", "tokens", "showMask", "unmaskValue", "prefix", "suffix", "reverse", "overlay"], family: "text", features: [Zd, function(e) {
  e.addProps(["_maskValue", "_overlayParts"]), e.on("created", () => {
    var t, r, n, s, o;
    const a = Sd(typeof e._value == "string" ? e._value : "");
    oi.set(e, a), Yp.set(e, a), e.props.allowIncomplete = Y(e.props.allowIncomplete), e.props.overlay = Y(e.props.overlay);
    const i = !(e.props.showMask !== void 0 && !Y(e.props.showMask));
    e.props.unmaskValue = Y(e.props.unmaskValue), e.hook.prop((p, u) => (p.prop === "unmaskValue" && (p.value = Y(p)), u(p)));
    const l = { placeholder: i, pattern: (t = e.props.mask) !== null && t !== void 0 ? t : "", mode: (r = e.props.mode) !== null && r !== void 0 ? r : "shift", partOverrides: (n = e.props.tokens) !== null && n !== void 0 ? n : {}, prefix: (s = e.props.prefix) !== null && s !== void 0 ? s : void 0, suffix: (o = e.props.suffix) !== null && o !== void 0 ? o : void 0, reverse: Y(e.props.reverse) };
    si.set(e, l), e.hook.input((p, u) => {
      const c = (function(f, d) {
        const g = oi.get(f), v = typeof d == "object" && "maskValue" in d;
        d = typeof d == "string" ? d : v ? d.maskValue : "";
        const $ = Yp.get(f);
        $.value = Fi($, d);
        const h = Pp($, si.get(f)), S = Pd($, f.props.allowIncomplete);
        return d === g.value ? f.props.unmaskValue ? S ?? "" : S === null ? "" : typeof d == "string" ? d : "" : d === "" && g.value !== "" && !f.props.allowIncomplete ? (g.value = h, f.props._maskValue = h, f.props._overlayParts = co(ti($) || []), d) : (v || h === f.props._maskValue || (g.value = h, f.props._maskValue = h, f.props._overlayParts = co(ti($) || [])), S === null ? "" : f.props.unmaskValue ? S : h);
      })(e, p);
      return u(c);
    }), e.props._maskValue = Pp(a, l, e), e.input(e.props._maskValue, !1), e.context && (e.context.handlers.DOMInput = (p) => {
      e.emit("dom-input-event", p);
    }), Ze(`${e.props.id}`, dk.bind(null, e), e.props.__root);
  });
}] }, ge = /* @__PURE__ */ lt("tf"), { outer: hk, wrapper: mk, icon: Tt, help: vk, messages: gk, message: yk } = /* @__PURE__ */ pt(ge), $k = ge("fieldset", () => ({ $el: "fieldset", attrs: { id: '$id + "_fieldset"', role: "presentation", "aria-describedby": { if: "$help", then: '$: "help-" + $id', else: void 0 } } })), bk = ge("legend", () => ({ if: "$label", $el: "legend" })), _k = ge("source", () => ({ $el: "div", attrs: { id: '$id + "_source"', class: '$classes.transferlist + " " + $classes.source' } })), xk = ge("sourceHeader", () => ({ $el: "div", attrs: { id: '$id + "_source_header"', role: "presentation", class: '$classes.transferlistHeader + " " + $classes.sourceHeader' } })), wk = ge("sourceHeaderLabel", () => ({ if: "$sourceLabel", $el: "label", attrs: { id: '$id + "_source_header_label"', for: '$id + "_source_search_input"', class: '$classes.transferlistHeaderLabel + " " + $classes.sourceHeaderLabel' }, children: "$sourceLabel || $label" })), kk = ge("sourceHeaderItemCount", () => ({ $el: "span", attrs: { id: '$id + "_source_header_item_count"', role: "presentation", "aria-label": '$sourceOptions.length " items"', class: '$classes.transferlistHeaderItemCount + " " + $classes.sourceHeaderItemCount' } })), Sk = ge("targetHeaderLabel", () => ({ if: "$targetLabel", $el: "label", attrs: { id: '$id + "_target_header_label"', for: '$id + "_target_search_input"', class: '$classes.transferlistHeaderLabel + " " + $classes.targetHeaderLabel' }, children: "$targetLabel || $label" })), Ck = ge("targetHeaderItemCount", () => ({ $el: "span", attrs: { id: '$id + "_target_header_item_count"', role: "presentation", "aria-label": '$targetOptions.length + " items"', class: '$classes.transferlistHeaderItemCount + " " + $classes.targetHeaderItemCount' }, children: "$targetOptions.length" })), Dk = ge("sourceControls", () => ({ $el: "div", if: "$searchable", attrs: { id: '$id + "_source_controls"', class: '$classes.transferlistControls + " " + $classes.sourceControls' } })), Ak = ge("sourceSearch", () => ({ if: "$searchable", $el: "div", attrs: { id: '$id + "_source_search"', class: '$classes.transferlistSearch + " " + $classes.sourceSearch' } })), Tk = ge("sourceSearchInput", () => ({ $el: "input", attrs: { id: '$id + "_source_search_input"', type: "text", placeholder: "$placeholder", onInput: "$handlers.onSearch", value: "$inputText", onKeydown: "$handlers.sourceSearchKeydown", disabled: "$disabled", "aria-label": "Search", role: "searchbox", autocomplete: "off", class: '$classes.transferlistSearchInput + " " + $classes.sourceSearchInput', onFocus: "$handlers.sourceSearchFocus", onBlur: "$handlers.sourceSearchBlur" } })), Ok = ge("targetSearch", () => ({ if: "$targetSearchable", $el: "div", attrs: { id: '$id + "_target_search"', class: '$classes.transferlistSearch + " " + $classes.targetSearch' } })), Ek = ge("targetSearchInput", () => ({ $el: "input", attrs: { id: '$id + "_target_search_input"', type: "text", placeholder: "$placeholder", onInput: "$handlers.onTargetSearch", value: "$targetInputText", onKeydown: "$handlers.targetSearchKeydown", disabled: "$disabled", "aria-label": "Search", role: "searchbox", autocomplete: "off", class: '$classes.transferlistSearchInput + " " + $classes.targetSearchInput', onFocus: "$handlers.targetSearchFocus", onBlur: "$handlers.targetSearchBlur" } })), Ik = ge("targetControls", () => ({ $el: "div", if: "$targetSearchable", attrs: { id: '$id + "_target_controls"', class: '$classes.transferlistControls + " " + $classes.targetControls' } })), Lk = ge("sourceSearchClear", () => ({ $el: "button", if: '$inputText !== ""', attrs: { id: '$id + "_source_search_clear"', type: "button", onClick: "$handlers.clearSearch", "aria-label": "Clear Source Search", class: '$classes.transferlistSearchClear + " " + $classes.sourceSearchClear' } })), Mk = ge("targetSearchClear", () => ({ $el: "button", if: '$targetInputText !== ""', attrs: { id: '$id + "_target_search_clear"', type: "button", onClick: "$handlers.clearTargetSearch", "aria-label": "Clear Target Search", class: '$classes.transferlistSearchClear + " " + $classes.targetSearchClear' } })), Pk = ge("sourceListItems", () => ({ $el: "ul", attrs: { id: '$id + "_source_list_items"', "aria-activedescendant": "$activeDescendant", onMouseenter: "$handlers.onMouseenter(true)", onMouseout: "$handlers.onMouseleave(true)", role: "listbox", "aria-multiselectable": "true", "aria-roledescription": "List of options to choose from.", class: '$classes.transferlistListItems + " " + $classes.sourceListItems', onKeydown: "$handlers.sourceListKeydown", tabindex: "$searchable || $sourceOptions.length === 0 && -1 || 0", onFocus: "$handlers.sourceListFocused", onBlur: "$handlers.sourceListBlurred", "aria-label": "Source list" } })), Vk = ge("sourceListItem", () => ({ for: ["option", "index", "$sourceOptions"], $el: "li", attrs: { id: '$id + "_source_list_item_" + $index', "data-value": "$option.value", "aria-selected": "$transferOnSelect === false && $fns.isSelected($option, $selectedSourceItems)", "data-is-active": "$fns.isActive($option, $activeValue)", "data-disabled": "$option.attrs.disabled", role: "option", onClick: "$handlers.listitemClick($option, true)", onTouchstartPassive: "$handlers.listitemTouchstart($option, true)", onTouchmovePassive: "$handlers.listitemTouchmove($option, true)", onTouchend: "$handlers.listitemTouchend($option, true)", key: "$option.value", class: '$classes.transferlistListItem + " " + $classes.sourceListItem' } })), Nk = ge("sourceOption", () => ({ $el: "div", attrs: { "data-checked": "$fns.isSelected($option, $selectedSourceItems)", class: '$classes.transferlistOption + " " + $classes.sourceOption' } })), Fk = ge("sourceLoadMore", () => ({ $el: "li", if: "$state.loading || $state.hasNextPage", attrs: { id: '$id + "_source_load_more"', key: "loadMore", onClick: "$handlers.listitemClick($loadMoreOption)", "aria-selected": "false", "data-is-active": "$fns.isActive($loadMoreOption)", tabindex: "-1" } })), Rk = ge("loadMoreInner", "span"), Bk = ge("target", () => ({ $el: "div", attrs: { id: '$id + "_target"', class: '$classes.transferlist + " " + $classes.target' } })), jk = ge("targetHeader", () => ({ $el: "div", attrs: { id: '$id + "_target_header"', role: "presentation", class: '$classes.transferlistHeader + " " + $classes.targetHeader' } })), Hk = ge("targetListItems", () => ({ $el: "ul", attrs: { id: "$id", "aria-activedescendant": "$activeDescendant", onMouseenter: "$handlers.onMouseenter(false)", onMouseout: "$handlers.onMouseleave(false)", role: "listbox", class: '$classes.transferlistListItems + " " + $classes.targetListItems', tabindex: "$targetOptions.length === 0 && -1 || 0", onKeydown: "$handlers.targetListKeydown", onFocus: "$handlers.targetListFocused", onBlur: "$handlers.targetListBlurred", "aria-label": "Target list" } })), Zk = ge("targetListItem", () => ({ for: ["option", "index", "$targetOptions"], $el: "li", attrs: { id: '$id + "_target_list_item_" + $index', "data-disabled": "$option.attrs.disabled", "data-value": "$option.value", "aria-selected": "$transferOnSelect === false && $fns.isSelected($option, $selectedTargetItems)", "data-is-active": "$fns.isActive($option, $activeValue)", role: "option", onClick: "$handlers.listitemClick($option, false)", onTouchstartPassive: "$handlers.listitemTouchstart($option, false)", onTouchmovePassive: "$handlers.listitemTouchmove($option, false)", onTouchend: "$handlers.listitemTouchend($option, false)", key: "$option.value", class: '$classes.transferlistListItem + " " + $classes.targetListItem' } })), Wk = ge("targetOption", () => ({ $el: "div", attrs: { id: '$id + "_target_list_item_" + $index + "_option"', "data-checked": "$fns.isSelected($option, $selectedTargetItems)", class: '$classes.transferlistOption + " " + $classes.targetOption' } })), Kk = ge("transferControls", () => ({ $el: "div", attrs: { id: '$id + "_transfer_controls"' } })), Uk = ge("transferButtonForward", () => ({ if: "$transferOnSelect !== true", $el: "button", attrs: { id: '$id + "_transfer_button_forward"', type: "button", disabled: "$selectedSourceItems.length === 0 || $disabled || ($max && $value && $value.length >= $max)", onClick: "$handlers.transferForward", "aria-label": "$ui.addSelectedValues.value", title: "$ui.addSelectedValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonForward' } })), zk = ge("transferButtonForwardAll", () => ({ $el: "button", attrs: { id: '$id + "_transfer_button_forward_all"', type: "button", disabled: "$sourceOptions.length === 0 || $disabled || ($max && $value && $value.length >= $max)", onClick: "$handlers.transferForwardAll", "aria-label": "$ui.addAllValues.value", title: "$ui.addAllValues.value", onFocus: "$handlers.transferForwardAllFocused", class: '$classes.transferlistButton + " " + $classes.transferButtonForwardAll' } })), Yk = ge("transferButtonBackward", () => ({ if: "$transferOnSelect !== true", $el: "button", attrs: { id: '$id + "_transfer_button_backward"', onClick: "$handlers.transferBackward", type: "button", disabled: "$selectedTargetItems.length === 0 || $targetOptions.length === 0 || $disabled", "aria-label": "$ui.removeSelectedValues.value", title: "$ui.removeSelectedValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonBackward' } })), qk = ge("transferButtonBackwardAll", () => ({ $el: "button", attrs: { id: '$id + "_transfer_button_backward_all"', onClick: "$handlers.transferBackwardAll", type: "button", disabled: "$targetOptions.length === 0 || $disabled", "aria-label": "$ui.removeAllValues.value", title: "$ui.removeAllValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonBackwardAll' } })), Es = ge("controlLabel", "span"), Gk = ge("sourceEmptyMessage", () => ({ $el: "li", if: "$showSourceEmptyMessage && $sourceEmptyMessage && $state.loading !== true", attrs: { id: '$id + "_source_empty_message"', key: "$sourceEmptyMessage", role: "presentation" } })), Xk = ge("targetEmptyMessage", () => ({ $el: "li", if: "$showTargetEmptyMessage && $targetEmptyMessage", attrs: { id: '$id + "_empty_message"', key: "$emptyMessage", role: "presentation" } })), qp = ge("emptyMessageInner", "span"), xn = /* @__PURE__ */ Symbol(), wn = /* @__PURE__ */ new WeakSet(), as = /* @__PURE__ */ new WeakSet();
function ji(e, t, r, n) {
  if (!(e.props.disabled || (e.props.isSourceOption = r, e.props.isSourceOption && Array.isArray(e.value) && e.value.length >= e.props.max))) if (r) {
    if (e.props.selectedSourceItems.includes(t)) return e.props.selectedSourceItems = e.props.selectedSourceItems.filter((s) => s !== t), e.props.activeValue = void 0, void (e.props.activeDescendant = void 0);
    e.props.selectedTargetItems = [], e.props.selectedSourceItems = [...e.props.selectedSourceItems, t];
  } else {
    if (e.props.selectedTargetItems.includes(t)) return void (e.props.selectedTargetItems = e.props.selectedTargetItems.filter((s) => s !== t));
    e.props.selectedSourceItems = [], e.props.selectedTargetItems = [...e.props.selectedTargetItems, t];
  }
}
function $o(e, t) {
  if (e.props.sourceListOrigin = !0, e.props.maxReached) return;
  if (t) {
    const n = Array.isArray(e.value) ? [...e.value, t] : [t];
    return void e.input(n);
  }
  const r = e.props.selectedSourceItems.map((n) => R(n));
  Array.isArray(e.value) ? e.input([...e.value, ...r]) : e.input(r), e.props.selectedSourceItems = [];
}
function bo(e, t) {
  if (e.props.sourceListOrigin = !1, t) {
    const n = Array.isArray(e.value) ? e.value.filter((s) => !J(s, t)) : [];
    return void e.input(n);
  }
  const r = e.props.selectedTargetItems.map((n) => R(n));
  if (Array.isArray(e.value)) {
    const n = e.value.filter((s) => !r.includes(s));
    e.input(n);
  }
  e.props.selectedTargetItems = [];
}
function Wd(e) {
  var t, r;
  if (e.props.activeValue === xn) {
    const s = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_source_load_more`);
    return void (s && s.scrollIntoView({ block: "nearest", inline: "start" }));
  }
  const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
  n && n.scrollIntoView({ block: "nearest", inline: "start" });
}
function Is(e) {
  var t;
  if (Array.isArray(e.value)) {
    const r = [];
    let n = [...e.props.options];
    e.value.forEach((s) => {
      const o = e.props.memoOptions.find((a) => J(R(a), s));
      if (o && !o.noOptionFound)
        r.push(o), e.props.options.findIndex((i) => J(R(i), s)) !== -1 && (n = n.filter((i) => !J(R(i), s)));
      else {
        const a = n.find((i) => J(R(i), s));
        a ? (r.push(a), n = n.filter((i) => !J(R(i), s))) : r.push({ label: String(s), value: s, noOptionFound: !0 });
      }
    }), e.props.targetOptions = e.props.targetInputText ? r.filter((s) => e.props.filter(s, e.props.targetInputText, e)) : r, e.props.sourceOptions = n;
  } else e.props.sourceOptions = [...e.props.options], e.props.targetOptions = [];
  if (e.props.skipSetActiveValue) return void (e.props.skipSetActiveValue = !1);
  !((t = e.props.__root) === null || t === void 0) && t.getElementById(e.props.id + "_source_list_items") && Kd(e);
}
function Kd(e) {
  var t, r, n, s, o, a, i, l, p;
  if (e.props.isDragging) return;
  if (e.props.targetSearchActive) {
    if (((r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.activeElement) === null || r === void 0 ? void 0 : r.id) === `${e.props.id}_target_search_input`) {
      const f = e.props.targetOptions.find((d) => {
        var g;
        return !(!((g = d.attrs) === null || g === void 0) && g.disabled);
      });
      return f ? void (e.props.activeValue = R(f)) : void (e.props.activeValue = void 0);
    }
    return;
  }
  if (e.props.sourceSearchActive) {
    if (((s = (n = e.props.__root) === null || n === void 0 ? void 0 : n.activeElement) === null || s === void 0 ? void 0 : s.id) === `${e.props.id}_source_search_input`) {
      const f = e.props.sourceOptions.find((d) => {
        var g;
        return !(!((g = d.attrs) === null || g === void 0) && g.disabled);
      });
      return f ? void (e.props.activeValue = R(f)) : void (e.props.activeValue = void 0);
    }
    e.props.sourceSearchActive = !1;
  }
  if (e.props.transferOnSelect === !1) return void (e.props.activeValue = void 0);
  const u = e.props.sourceListOrigin ? e.props.sourceOptions : e.props.targetOptions;
  let c = !1;
  for (let f = e.props.activeIndex; f <= u.length; f++) if (!(!((o = u.attrs) === null || o === void 0) && o.disabled) && u[f]) {
    c = !0, e.props.activeValue = R(u[f]);
    break;
  }
  if (!c && u.length) {
    for (let f = e.props.activeIndex; f >= 0; f--) if (!(!((a = u.attrs) === null || a === void 0) && a.disabled) && u[f]) return c = !0, void (e.props.activeValue = R(u[f]));
  }
  if (!c) {
    let f;
    f = e.props.sourceListOrigin ? (p = e.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${e.props.id}`) : e.props.searchable ? (i = e.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${e.props.id}_source_search_input`) : (l = e.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${e.props.id}_source_list_items`), f && f.focus();
  }
}
function Ud(e, t) {
  return (t ? e.props.sourceOptions : e.props.targetOptions).find((r) => {
    var n;
    return !(!((n = r.attrs) === null || n === void 0) && n.disabled);
  });
}
function Jk(e) {
  Array.isArray(e.value) && e.value.forEach(async (t) => {
    ld(e, t, (function(r, n) {
      return [...r.props.options, ...r.props.memoOptions].find((o) => J(R(o), n));
    })(e, t));
  });
}
function Qk(e) {
  e.context && (e.context.handlers.loadMore = fo.bind(null, e), e.context.fns.getSourceItemCount = (t) => e.props.transferOnSelect === !1 && t.length ? t.length + "/" + e.props.sourceOptions.length : e.props.sourceOptions.length, e.context.fns.getTargetItemCount = (t) => e.props.transferOnSelect === !1 && t.length ? t.length + "/" + e.props.targetOptions.length : e.props.targetOptions.length, e.context.fns.isActive = (t, r) => {
    if (!e.props.isDragging && !e.props.touchStarted) return J(r, R(t)) || void 0;
  }, e.context.fns.isSelected = (t, r) => !!r && !!Array.isArray(r) && r.includes(t), e.context.fns.optionLoading = (t) => e.props.optionLoaderValues.includes(R(t)), e.context.handlers.clearSearch = () => {
    (function(t) {
      var r;
      t.props.sourceSearchActive = !1, t.props.inputText = "", Ct(t, "", !0);
      const n = (r = t.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${t.props.id}_source_search_input`);
      n && n.focus();
    })(e);
  }, e.context.handlers.clearTargetSearch = () => {
    (function(t) {
      var r;
      t.props.targetSearchActive = !1, t.props.targetInputText = "";
      const n = [.../* @__PURE__ */ new Set([...t.props.options, ...t.props.memoOptions])], s = [];
      for (const a of t.value) {
        const i = n.find((l) => R(l) === a);
        i && s.push(i);
      }
      t.props.targetOptions = s;
      const o = (r = t.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${t.props.id}_target_search_input`);
      o && o.focus();
    })(e);
  }, e.context.handlers.sourceSearchBlur = (t) => {
    setTimeout(() => {
      var r;
      if (t.relatedTarget && t.relatedTarget instanceof HTMLElement && (t.relatedTarget.id === `${e.props.id}_source_list_items` || t.relatedTarget.id === `${e.props.id}`)) {
        const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_source_search_input`);
        if (!n) return;
        n.focus();
      } else e.props.activeValue = void 0;
    });
  }, e.context.handlers.targetSearchBlur = (t) => {
    setTimeout(() => {
      var r;
      if (t.relatedTarget && t.relatedTarget instanceof HTMLElement && (t.relatedTarget.id === `${e.props.id}_source_list_items` || t.relatedTarget.id === `${e.props.id}`)) {
        const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_target_search_input`);
        if (!n) return;
        n.focus();
      } else e.props.activeValue = void 0;
    });
  }, e.context.handlers.listitemClick = (t, r) => (n) => {
    Gp(e, t, r);
  }, e.context.handlers.transferForward = $o.bind(null, e, void 0), e.context.handlers.transferForwardAll = () => {
    let t;
    if (e.props.maxReached) return;
    const r = e.props.sourceOptions.map((n) => R(n));
    t = Array.isArray(e.value) ? [...e.value, ...r] : [...r], e.input(t), e.props.selectedSourceItems = [];
  }, e.context.handlers.transferBackward = bo.bind(null, e, void 0), e.context.handlers.transferBackwardAll = () => {
    Array.isArray(e.value) && (e.input([]), e.props.selectedTargetItems = []);
  }, e.context.handlers.onSearch = (t) => {
    (function(r, n) {
      r.props.sourceSearchActive = !0;
      const s = n.target;
      r.props.inputText = s.value, Ct(r, s.value, !0);
    })(e, t);
  }, e.context.handlers.onTargetSearch = (t) => {
    (function(r, n) {
      r.props.targetSearchActive = !0;
      const s = n.target;
      r.props.targetInputText = s.value;
      const o = [.../* @__PURE__ */ new Set([...r.props.memoOptions, ...r.props.options])], a = [];
      for (const l of r.value) {
        const p = o.find((u) => R(u) === l);
        p && a.push(p);
      }
      const i = [...new Map([...r.props.targetOptions, ...a].map((l) => [JSON.stringify(l), l])).values()];
      r.props.targetOptions = i.filter((l) => r.props.filter(l, s.value, r)), r.props.targetOptions.length === 0 ? r.props.showTargetEmptyMessage = !0 : r.props.showTargetEmptyMessage = !1, Kd(r);
    })(e, t);
  }, e.context.handlers.onMouseenter = (t) => (r) => {
    r.type !== "touchstart" && (t ? e.props.mouseOnSource = !0 : e.props.mouseOnTarget = !0);
  }, e.context.handlers.onMouseleave = (t) => (r) => {
    var n;
    if (r.type === "touchend") return;
    const s = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(t ? `${e.props.id}_source_list_items` : `${e.props.id}`);
    s && (s.contains(r.relatedTarget) || (e.props.trackHover = !1, e.props.activeValue = void 0, e.props.activeDescendant = void 0, e.props.activeIndex = void 0, t ? e.props.mouseOnSource = !1 : e.props.mouseOnTarget = !1));
  }, e.context.handlers.listitemClick = (t, r) => (n) => {
    n instanceof MouseEvent && e.props.touchStarted || Gp(e, t, r);
  }, e.context.handlers.listitemTouchstart = () => () => {
    (function(t) {
      t.props.touchStarted = !0;
    })(e);
  }, e.context.handlers.listitemTouchend = (t, r) => (n) => {
    (function(s, o, a) {
      if (s.props.touchMoved) return s.props.touchMoved = !1, void (s.props.touchStarted = !1);
      const i = R(o);
      s.props.activeIndex = s.props.sourceOptions.findIndex((l) => R(l) === i), s.props.transferOnSelect ? a ? $o(s, i) : bo(s, i) : ji(s, o, a);
    })(e, t, r);
  }, e.context.handlers.listitemTouchmove = () => (t) => {
    (function(r) {
      r.props.touchMoved = !0;
    })(e);
  }, e.context.handlers.sourceSearchFocus = (t) => {
    Ls(e, !0);
  }, e.context.handlers.targetSearchFocus = (t) => {
    Ls(e, !1);
  }, e.context.handlers.sourceListFocused = (t) => {
    Ls(e, !0);
  }, e.context.handlers.targetListFocused = () => {
    Ls(e, !1);
  }, e.context.handlers.sourceListBlurred = (t) => {
    e.props.activeValue = void 0;
  }, e.context.handlers.targetListBlurred = (t) => {
    e.props.activeValue = void 0;
  }, e.context.handlers.sourceListKeydown = (t) => {
    Ms(e, t, !0);
  }, e.context.handlers.targetListKeydown = (t) => {
    Ms(e, t, !1);
  }, e.context.handlers.sourceSearchKeydown = (t) => {
    Ms(e, t, !0);
  }, e.context.handlers.targetSearchKeydown = (t) => {
    Ms(e, t, !1);
  });
}
function Gp(e, t, r, n) {
  var s;
  if (R(t) === xn) return void ((s = e.context) === null || s === void 0 || s.handlers.loadMore(!0));
  const o = R(t);
  e.props.activeIndex = e.props.sourceOptions.findIndex((a) => J(R(a), o)), e.props.transferOnSelect ? r ? $o(e, o) : bo(e, o) : ji(e, t, r);
}
function Ls(e, t) {
  const r = Ud(e, t);
  r && (e.props.sourceListOrigin = t, e.props.activeValue = R(r));
}
function Ms(e, t, r) {
  if (t.key === "ArrowDown" || t.key === "ArrowUp") (function(n, s, o) {
    var a, i, l;
    n.preventDefault();
    const p = o ? s.props.sourceOptions : s.props.targetOptions, u = p.reduce((f, d) => {
      var g;
      return !((g = d?.attrs) === null || g === void 0) && g.disabled || f.push(R(d)), f;
    }, []);
    !((a = s.store.hasNextPage) === null || a === void 0) && a.value && u.push(xn);
    const c = u.indexOf(s.props.activeValue);
    if (n.key === "ArrowUp" && c !== 0) for (let f = c - 1; f >= 0; f--) {
      s.props.sourceListOrigin = o, s.props.activeValue = u[c - 1];
      break;
    }
    else if (n.key === "ArrowDown" && c !== u.length - 1) {
      for (let f = c + 1; f < u.length; f++) if (!(!((l = (i = p[f]) === null || i === void 0 ? void 0 : i.attrs) === null || l === void 0) && l.disabled)) {
        s.props.sourceListOrigin = o, s.props.activeValue = u[f];
        break;
      }
    }
    Wd(s);
  })(t, e, r);
  else if (t.key === "ArrowRight" || t.key === "ArrowLeft") {
    if (t.key === "ArrowLeft" && r || t.key === "ArrowRight" && !r) return;
    (function(n, s, o) {
      s.props.searchable || (n.preventDefault(), (function(a, i) {
        var l, p, u;
        if (Ud(a, !i)) if (i) {
          const c = (l = a.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${a.props.id}`);
          c && c.focus();
        } else if (a.props.searchable) {
          const c = (p = a.props.__root) === null || p === void 0 ? void 0 : p.getElementById(`${a.props.id}_source_search_input`);
          c && c.focus();
        } else {
          const c = (u = a.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${a.props.id}_source_list_items`);
          c && c.focus();
        }
      })(s, o));
    })(t, e, r);
  } else t.key === "Enter" && (function(n, s, o) {
    var a;
    if (n.preventDefault(), !s.props.activeValue) return;
    if (s.props.activeValue === xn) return void ((a = s.context) === null || a === void 0 || a.handlers.loadMore(!0));
    const i = o ? s.props.sourceOptions : s.props.targetOptions, l = i.findIndex((u) => R(u) === s.props.activeValue);
    s.props.activeIndex = l;
    const p = i[l];
    p && (s.props.transferOnSelect ? o ? $o(s, R(p)) : bo(s, R(p)) : ji(s, p, o));
  })(t, e, r);
}
function eS(e) {
  e.on("created", () => {
    if (typeof e.props.optionsLoader == "function" && (e.props.skipSetActiveValue = !0, yn(e)), Qk(e), e.props.disabled && (e.props.draggable = !1), at) {
      Ze(e.props.id + "_source_list_items", (r) => {
        r instanceof HTMLElement && (function(n, s) {
          if (!n.context) return;
          function o() {
            return n.props.sourceOptions.map((l) => R(l));
          }
          function a() {
            return [];
          }
          const i = { longTouch: !0, draggingClass: n.context.classes.dragging, dropZoneClass: n.context.classes.dropZone, group: n.props.id, root: n.props.__root || document, disabled: !n.props.draggable || n.props.maxReached, touchDraggingClass: n.context.classes.touchDragging, touchDropZoneClass: n.context.classes.touchDropZone, selectionDraggingClass: n.context.classes.selectionDragging, selectionDropZoneClass: n.context.classes.selectionDropZone, touchSelectionDraggingClass: n.context.classes.touchSelectionDragging, touchSelectionDropZoneClass: n.context.classes.touchSelectionDropZone, longTouchClass: n.context.classes.longTouch, handleTouchmove(l) {
            n.props.selectedSourceItems = [], Zc(l);
          }, draggable: (l) => l.getAttribute("role") === "option" };
          i.plugins = [ql({ handleDragstart(l) {
            n.props.isDragging = !0, n.props.trackHover = !1, n.props.activeValue = void 0, n.props.activeDescendant = void 0, ao(l);
          }, handleEnd(l) {
            io(l), n.props.isDragging = !1, n.props.activeValue = void 0, n.props.activeDescendant = void 0, n.props.activeDescendant = void 0, n.props.isDragging = !1, n.props.selectedTargetItems = [], n.props.selectedSourceItems = [];
          }, handleTouchstart(l) {
            n.props.isDragging = !0, n.props.trackHover = !1, n.props.activeValue = void 0, n.props.activeDescendant = void 0, n.props.mouseOnSource = !1, n.props.mouseOnTarget = !1, lo(l);
          }, selections: () => n.props.selectedSourceItems.map((l) => R(l)) })], ze({ parent: s, getValues: o, setValues: a, config: i }), n.on("prop:disabled", ({ payload: l }) => {
            i.disabled = l, ze({ parent: s, getValues: o, setValues: a, config: i });
          }), n.on("prop:draggable", ({ payload: l }) => {
            i.disabled = !l, ze({ parent: s, getValues: o, setValues: a, config: i });
          }), n.on("prop:maxReached", ({ payload: l }) => {
            i.disabled = l, ze({ parent: s, getValues: o, setValues: a, config: i });
          });
        })(e, r);
      }, e.props.__root), Ze(`${e.props.id}`, (r) => {
        r instanceof HTMLElement && (function(n, s) {
          if (!n.context) return;
          function o() {
            return n.props.targetOptions.map((l) => R(l));
          }
          function a(l, p) {
            n.props.sourceListOrigin = !0, n.input(l);
          }
          const i = { longTouch: !0, root: n.props.__root, group: n.props.id, disabled: !n.props.draggable, draggingClass: n.context.classes.dragging, dropZoneClass: n.context.classes.dropZone, touchDraggingClass: n.context.classes.touchDragging, touchDropZoneClass: n.context.classes.touchDropZone, selectionDraggingClass: n.context.classes.selectionDragging, selectionDropZoneClass: n.context.classes.selectionDropZone, touchSelectionDraggingClass: n.context.classes.touchSelectionDragging, touchSelectionDropZoneClass: n.context.classes.touchSelectionDropZone, longTouchClass: n.context.classes.longTouch, draggable: (l) => l.getAttribute("role") === "option", plugins: [] };
          i.plugins = [ql({ handleDragstart(l) {
            n.props.isDragging = !0, n.props.trackHover = !1, n.props.activeValue = void 0, ao(l);
          }, handleEnd(l) {
            io(l), n.props.selectedTargetItems = [], n.props.selectedSourceItems = [], n.props.activeValue = void 0, n.props.trackHover = !0, n.props.isDragging = !1;
          }, handleTouchstart(l) {
            n.props.trackHover = !1, n.props.activeValue = void 0, n.props.isDragging = !0, n.props.activeDescendant = void 0, lo(l);
          }, selections: () => n.props.selectedTargetItems.map((l) => R(l)) })], ze({ parent: s, getValues: o, setValues: a, config: i }), n.on("prop:disabled", ({ payload: l }) => {
            i.disabled = l, ze({ parent: s, getValues: o, setValues: a, config: i });
          }), n.on("prop:draggable", ({ payload: l }) => {
            i.disabled = !l, ze({ parent: s, getValues: o, setValues: a, config: i });
          });
        })(e, r);
      }, e.props.__root);
      const t = (r) => {
        var n;
        if (e.props.isDragging) return;
        e.props.mouseX = r.clientX, e.props.mouseY = r.clientY;
        const s = e.props.mouseOnSource ? `${e.props.id}_source_list_items` : `${e.props.id}`, o = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(s);
        if (o) {
          const a = o.getBoundingClientRect();
          r.clientX > a.x && r.clientX < a.x + a.width && r.clientY > a.y && r.clientY < a.y + a.height && (e.props.trackHover = !0);
        }
      };
      document.addEventListener("mousemove", t);
    }
  });
}
function ai(e, t) {
  var r;
  let n = null, s = "", o = [];
  if (e.props.mouseOnSource) {
    if (n = wn.has(e), s = `${e.props.id}_source_list_item`, o = [...e.props.sourceOptions], !o || !o.length || n) return o = [], s = "", void (n = null);
  } else if (e.props.mouseOnTarget && (n = as.has(e), s = `${e.props.id}_target_list_item`, o = [...e.props.targetOptions], !o || !o.length || n)) return o = [], s = "", void (n = null);
  const a = o.reduce((l, p, u) => {
    var c, f;
    if (!((c = p.attrs) === null || c === void 0) && c.disabled) return l;
    const d = (f = e.props.__root) === null || f === void 0 ? void 0 : f.getElementById(s + `_${u}`);
    return d && l.push([d, p]), l;
  }, []), i = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_load_more`);
  i && a.push([i, e.props.loadMoreOption]), e.props.mouseOnSource && wn.add(e), e.props.mouseOnTarget && as.add(e), a.length && zd(e, a, null, t);
}
function zd(e, t, r, n) {
  const s = n ? n.getBoundingClientRect() : { top: 0, bottom: 0 };
  if (r = null, e.props.trackHover) {
    if (e.props.mouseY > s.top && e.props.mouseY < s.bottom) {
      let o = r || 0, a = r;
      const i = (l, p) => {
        var u;
        const c = p[0], { y: f, height: d, x: g, width: v } = c.getBoundingClientRect();
        if (e.props.mouseX > g && e.props.mouseX < g + v && e.props.mouseY > f && e.props.mouseY < f + d) {
          r = l;
          const $ = p[1];
          return e.props.activeValue = $ && !(!((u = $.attrs) === null || u === void 0) && u.disabled) ? R($) : void 0, !0;
        }
        return !1;
      };
      do {
        if (o !== null && i(o, t[o]) || a !== null && i(a, t[a])) break;
        o !== null && (o++, o > t.length - 1 && (o = null)), a !== null && (a--, a < 0 && (a = null));
      } while (o !== null || a !== null);
    }
  } else Wd(e);
  e.props.mouseOnSource || e.props.mouseOnTarget ? e.props.mouseOnSource && wn.has(e) || e.props.mouseOnTarget && as.has(e) ? requestAnimationFrame(zd.bind(null, e, t, r, n)) : ai(e, n) : (wn.delete(e), as.delete(e));
}
const tS = { schema: /* @__PURE__ */ hk(/* @__PURE__ */ $k(/* @__PURE__ */ bk("$label"), /* @__PURE__ */ vk("$help"), /* @__PURE__ */ mk(/* @__PURE__ */ _k(/* @__PURE__ */ xk(/* @__PURE__ */ wk(), /* @__PURE__ */ kk(/* @__PURE__ */ U("$optionsLoadingCounter > 0", /* @__PURE__ */ Tt("loader"), "$fns.getSourceItemCount($selectedSourceItems)"))), /* @__PURE__ */ Dk(/* @__PURE__ */ Ak(/* @__PURE__ */ Tk(), /* @__PURE__ */ Lk(/* @__PURE__ */ Tt("close")))), /* @__PURE__ */ Pk(/* @__PURE__ */ Gk(/* @__PURE__ */ qp("$sourceEmptyMessage")), /* @__PURE__ */ Vk(/* @__PURE__ */ U("$transferOnSelect !== true && $fns.isSelected($option, $selectedSourceItems)", /* @__PURE__ */ Tt("selected")), /* @__PURE__ */ Nk("$option.label")), /* @__PURE__ */ Fk(/* @__PURE__ */ U("$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage", /* @__PURE__ */ Rk(/* @__PURE__ */ U("$state.loading", /* @__PURE__ */ Tt("loader")), "$state.loading && $ui.isLoading.value || $ui.loadMore.value"))))), /* @__PURE__ */ Kk(/* @__PURE__ */ zk(/* @__PURE__ */ Es("$ui.addAllValues.value"), /* @__PURE__ */ Tt("fastForward")), /* @__PURE__ */ Uk(/* @__PURE__ */ Es("$ui.addSelectedValues.value"), /* @__PURE__ */ Tt("moveRight")), /* @__PURE__ */ Yk(/* @__PURE__ */ Es("$ui.removeSelectedValues.value"), /* @__PURE__ */ Tt("moveLeft")), /* @__PURE__ */ qk(/* @__PURE__ */ Es("$ui.removeAllValues.value"), /* @__PURE__ */ Tt("rewind"))), /* @__PURE__ */ Bk(/* @__PURE__ */ jk(/* @__PURE__ */ Sk(), /* @__PURE__ */ Ck("$fns.getTargetItemCount($selectedTargetItems)")), /* @__PURE__ */ Ik(/* @__PURE__ */ Ok(/* @__PURE__ */ Ek(), /* @__PURE__ */ Mk(/* @__PURE__ */ Tt("close")))), /* @__PURE__ */ Hk(/* @__PURE__ */ Xk(/* @__PURE__ */ U("$state.loading !== true", /* @__PURE__ */ qp("$targetEmptyMessage"))), /* @__PURE__ */ Zk(/* @__PURE__ */ U("$transferOnSelect !== true && $fns.isSelected($option, $selectedTargetItems)", /* @__PURE__ */ Tt("selected")), /* @__PURE__ */ Wk(/* @__PURE__ */ U("$fns.optionLoading($option, $optionLoaderValues)", "$ui.isLoading.value", "$option.label")))))), /* @__PURE__ */ gk(/* @__PURE__ */ yk("$message.value")))), type: "input", props: [], features: [
  /* @__PURE__ */ he("moveRight", "right"),
  /* @__PURE__ */ he("moveLeft", "left"),
  /* @__PURE__ */ he("fastForward", "fastForward"),
  /* @__PURE__ */ he("rewind", "rewind"),
  /* @__PURE__ */ he("close", "close"),
  /* @__PURE__ */ he("loader", "spinner"),
  /* @__PURE__ */ he("selected", "check"),
  /* @__PURE__ */ xe("isLoading"),
  /* @__PURE__ */ xe("loadMore"),
  /* @__PURE__ */ xe("addAllValues"),
  /* @__PURE__ */ xe("addSelectedValues"),
  /* @__PURE__ */ xe("removeSelectedValues"),
  /* @__PURE__ */ xe("removeAllValues"),
  tr,
  function(e) {
    (function(t) {
      t.addProps(["search", "options", "selectedItems", "activeValue", "activeIndex", "activeDescendant", "targetOptions", "sourceOptions", "optionLoader", "isLoadingOptions", "filterOptions", "inputText", "hasNextPage", "page", "targetLoading", "searchable", "sourceLabel", "targetLabel", "transferOnSelect", "disabled", "placeholder", "filter", "showSourceEmptyMessage", "showTargetEmptyMessage", "sourceEmptyMessage", "targetEmptyMessage", "clearOnSelect", "max", "maxReached", "debounce", "sourceListActive", "optionLoaderValues", "optionLoadingCounter", "optionsLoadingCounter", "memoOptions", "optionsLoaded", "selectedSourceItems", "selectedTargetItems", "draggable", "loadMore", "loadMoreOption", "targetSearchable", "targetInputText"]), t.props.loadMoreOption = { label: "Load more", value: xn }, t.props.draggable === void 0 ? t.props.draggable = !0 : t.props.draggable === "false" && (t.props.draggable = !1), t.props.optionsLoaderValues = [], t.props.selectedSourceItems = [], t.props.selectedTargetItems = [], t.props.optionsLoaded = void 0, t.props.memoOptions = [], t.props.multiple = !0, t.props.debounce = t.props.debounce ? parseInt(t.props.debounce) : 200, t.props.optionLoaderValues = [], t.props.optionsLoadingCounter = 0, t.props.optionLoadingCounter = 0, t.props.page = 1, t.props.hasNextPage = pd.bind(null, t), t.props.options ? t.props.options = [...t.props.options] : t.props.options = [], t.props.sourceOptions = [], t.props.targetOptions = [], "disabled" in t.props && (t.props.disabled = Y(t.props.disabled)), t.props.searchable = Y(t.props.searchable), t.props.searchable && (t.props.inputText = ""), t.props.targetSearchable = Y(t.props.targetSearchable), t.props.targetSearchable && (t.props.targetInputText = ""), t.props.clearOnSelect = Y(t.props.clearOnSelect), t.props.transferOnSelect === void 0 ? t.props.transferOnSelect = !0 : t.props.transferOnSelect === "false" && (t.props.transferOnSelect = !1), t.props.targetOptions.length && (t.props.targetOptionValues = t.props.targetOptions.map((r) => R(r))), t.props.initialOptions = [...t.props.options], t.props.max && (t.props.max = parseInt(t.props.max)), t.props.sourceListOrigin = void 0, typeof t.props.filter != "function" && (t.props.filter = (r, n) => r.label.toLowerCase().includes(n.toLowerCase()));
    })(e), (function(t) {
      t.on("commit", async ({ payload: r }) => {
        t.props.activeValue = void 0, t.props.max && (t.props.maxReached = r.length >= t.props.max), t.props.clearOnSelect && t.props.inputText && (t.props.reFilter = !0, t.props.inputText = ""), t.props.memoOptions = [.../* @__PURE__ */ new Set([...t.props.targetOptions, ...t.props.memoOptions])], t.props.searchable && t.props.reFilter && !t.props.initialLoad ? (Ct(t, t.props.inputText), t.props.reFilter = !1) : t.props.initialLoad || (t.isCreated || (t.props.skipSetActiveValue = !0), Is(t)), typeof t.props.optionLoader == "function" ? Jk(t) : t.props.initialLoad || (t.props.memoOptions = [.../* @__PURE__ */ new Set([...t.props.targetOptions, ...t.props.memoOptions])]);
      });
    })(e), eS(e), (function(t) {
      t.on("prop:options", () => {
        t.props.appendingOptions && (t.props.skipSetActiveValue = !0, t.props.appendingOptions = !1), Is(t);
      }), t.on("prop:memoOptions", () => {
        t.props.skipSetActiveValue = !0, Is(t);
      }), t.on("prop:sourceOptions", () => {
        t.props.sourceOptions.length === 0 ? t.props.showSourceEmptyMessage = !0 : t.props.showSourceEmptyMessage = !1, wn.delete(t);
      }), t.on("prop:targetOptions", () => {
        t.props.targetOptions.length === 0 ? t.props.showTargetEmptyMessage = !0 : t.props.showTargetEmptyMessage = !1;
      }), t.on("prop:activeValue", ({ payload: r }) => {
        if (t.props.isDragging) return void (t.props.activeDescendant = void 0);
        if (r === xn) return void (t.props.activeDescendant = `${t.props.id}_load_more`);
        const n = (t.props.sourceListOrigin ? t.props.sourceOptions : t.props.targetOptions).findIndex((s) => J(R(s), r));
        n >= 0 && t.props.sourceListOrigin ? t.props.activeDescendant = `${t.props.id}_source_list_item_${n}` : t.props.activeDescendant = n >= 0 ? `${t.props.id}_target_list_item_${n}` : void 0;
      }), t.on("prop:mouseOnSource", ({ payload: r }) => {
        var n;
        if (r && t.props.disabled !== !0 && !t.props.isDragging) {
          const s = (n = t.props.__root) === null || n === void 0 ? void 0 : n.getElementById(t.props.id + "_source_list_items");
          if (!s) return;
          t.props.mouseOnTarget = !1, t.props.sourceListOrigin = !0, wn.delete(t), ai(t, s);
        }
      }), t.on("prop:mouseOnTarget", ({ payload: r }) => {
        var n;
        if (r && t.props.disabled !== !0 && !t.props.isDragging) {
          const s = (n = t.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${t.props.id}`);
          if (!s) return;
          t.props.mouseOnSource = !1, t.props.sourceListOrigin = !1, as.delete(t), ai(t, s);
        }
      }), t.on("prop:optionsLoadingCounter", ({ payload: r }) => {
        r === 0 && t.props.optionLoadingCounter === 0 && t.store.set(ns);
      }), t.on("prop:optionLoadingCounter", ({ payload: r }) => {
        r === 0 && t.props.optionsLoadingCounter === 0 && (t.store.set(ns), t.props.skipSetActiveValue = !0, Is(t));
      });
    })(e);
  }
] }, Be = /* @__PURE__ */ lt("sl"), { outer: rS, wrapper: nS, icon: Xp, prefix: sS, suffix: oS, help: aS, messages: iS, message: lS } = /* @__PURE__ */ pt(Be), pS = Be("label", () => ({ if: "$label", $el: "label", attrs: { id: "$id + '_label'" } })), uS = Be("chart", () => ({ $el: "div", if: "$chart" })), cS = Be("chartBar", () => ({ $el: "div", for: ["bar", "index", "$chart"], attrs: { "data-active": { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: "$bar.at >= $_value.0 && $bar.at <= $_value.1", else: "$bar.at >= $_value.1 && $bar.at <= $_value.0" }, else: "$bar.at <= $_value" }, style: { left: '$bar.at / ($max - $min) * 100 + "%"', width: '$: "calc(" + (100 / $chart.length) + "% - 2px)"', height: { if: "$largestBar", then: '$bar.value / $largestBar * 100 + "%"' } } } })), dS = Be("sliderInner", () => ({ $el: "div", attrs: { "data-has-mark-labels": "$markLabels && $marks.length > 0" } })), fS = Be("track", () => ({ $el: "div", attrs: { id: "$: 'track-' + $id", onClick: "$handlers.clickTrack" } })), hS = Be("trackWrapper", () => ({ $el: "div" })), mS = Be("trackInner", () => ({ $el: "div" })), vS = Be("fill", () => ({ $el: "div", attrs: { style: "$fillStyles" } })), gS = Be("linkedValues", () => ({ $el: "div" })), Jp = Be("maxValue", () => ({ $formkit: "number", bind: "$computedMaxInputAttrs", ignore: !0, number: !0, value: { if: "$isMulti", then: "$_value.1", else: "$_value" }, tabindex: { if: "$disabled", then: -1 }, onNode: "$handlers.maxNode", onBlur: "$handlers.inputBlur" })), yS = Be("minValue", () => ({ $formkit: "number", if: "$isMulti", bind: "$computedMinInputAttrs", ignore: !0, number: !0, value: { if: "$isMulti", then: "$_value.0", else: "$_value" }, tabindex: { if: "$disabled", then: -1 }, onNode: "$handlers.minNode", onBlur: "$handlers.inputBlur" })), $S = Be("marks", () => ({ $el: "div", if: "$marks" })), bS = Be("mark", () => ({ $el: "span", for: ["step", "index", "$marks"], attrs: { "data-active": { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: "$step.at >= $_value.0 && $step.at <= $_value.1", else: "$step.at >= $_value.1 && $step.at <= $_value.0" }, else: "$step.at <= $_value" }, class: { if: "$step.class", then: '$: $classes.mark + " " + $step.class', else: "$classes.mark" }, style: { left: '$: $fns.calculateMarkPosition($step.at) + "%"' } } })), _S = Be("markLabel", () => ({ $el: "span", if: "$markLabels", children: { if: "$step.label !== undefined", then: "$step.label", else: "" }, attrs: { class: '$: $classes.markLabel + " " + $step.labelClass' } })), xS = Be("handles", () => ({ $el: "ul" })), wS = Be("handleMax", () => ({ $el: "li", attrs: { "data-active": "$dragging", "data-is-target": '$lastHandleInteraction === "max"', "data-handle": "max", "data-show-tooltip": "$tooltip", class: "$: 'formkit-handle ' + $classes.handle + ' ' + $classes.handleMax", onFocus: "$handlers.focus", onClick: "$handlers.clickHandle", onMousedown: "$handlers.startDrag", onTouchstartPassive: "$handlers.startDrag", style: "$maxHandleStyles", tabindex: { if: "$disabled", then: -1, else: 0 }, onBlur: "$handlers.blur", onKeydown: "$handlers.keydown" } })), kS = Be("handleMin", () => ({ $el: "li", if: "$isMulti", attrs: { "data-active": "$dragging", "data-is-target": '$lastHandleInteraction === "min"', "data-handle": "min", "data-show-tooltip": "$tooltip", class: "$: $classes.handle + ' ' + $classes.handleMin", onFocus: "$handlers.focus", onClick: "$handlers.clickHandle", onMousedown: "$handlers.startDrag", onTouchstartPassive: "$handlers.startDrag", style: "$minHandleStyles", tabindex: { if: "$disabled", then: -1, else: 0 }, onBlur: "$handlers.blur", onKeydown: "$handlers.keydown" } })), SS = Be("handleMinInner", () => ({ $el: "div", attrs: { class: '$: $classes.handleInner + " " + $classes.handleMinInner' } })), CS = Be("handleMaxInner", () => ({ $el: "div", attrs: { class: '$: $classes.handleInner + " " + $classes.handleMaxInner' } })), DS = Be("tooltipMax", () => ({ $el: "div", if: '$tooltip === true || $tooltip === "auto"', children: { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: '$tooltipFormat($_value.1, "max")', else: '$tooltipFormat($_value.0, "max")' }, else: '$tooltipFormat($_value, "max")' }, attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMax" } })), AS = Be("tooltipMin", () => ({ $el: "div", if: '$isMulti && ($tooltip === true || $tooltip === "auto")', children: { if: "$_value.0 < $_value.1", then: '$tooltipFormat($_value.0, "min")', else: '$tooltipFormat($_value.1, "min")' }, attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMin" } })), TS = { schema: /* @__PURE__ */ rS(/* @__PURE__ */ nS(/* @__PURE__ */ pS("$label"), /* @__PURE__ */ aS("$help"), /* @__PURE__ */ dS(/* @__PURE__ */ Xp("prefix"), /* @__PURE__ */ sS(), /* @__PURE__ */ fS(/* @__PURE__ */ uS(/* @__PURE__ */ cS()), /* @__PURE__ */ hS(/* @__PURE__ */ mS(/* @__PURE__ */ vS(), /* @__PURE__ */ $S(/* @__PURE__ */ bS(/* @__PURE__ */ _S())), /* @__PURE__ */ xS(/* @__PURE__ */ kS(/* @__PURE__ */ AS(), /* @__PURE__ */ SS()), /* @__PURE__ */ wS(/* @__PURE__ */ DS(), /* @__PURE__ */ CS()))))), /* @__PURE__ */ oS(), /* @__PURE__ */ Xp("suffix"), /* @__PURE__ */ U("$showInput && $isMulti === false", /* @__PURE__ */ Jp())), /* @__PURE__ */ U("$showInput && $isMulti", /* @__PURE__ */ gS(/* @__PURE__ */ yS(), /* @__PURE__ */ Jp())), /* @__PURE__ */ iS(/* @__PURE__ */ lS("$message.value")))), type: "input", family: "", props: ["min", "max", "step", "showInput", "tooltip", "tooltipFormat", "inputAttrs", "maxInputAttrs", "minInputAttrs", "marks", "markLabels", "snapToMarks", "chart", "scalingFunction", "intervals"], features: [function(e) {
  let t, r, n;
  e.addProps(["isMulti", "maxHandleStyles", "minHandleStyles", "fillStyles", "decimals", "dragging", "lastHandleInteraction", "largestBar", "computedMaxInputAttrs", "computedMinInputAttrs"]);
  const s = { linear: { forward: (m) => m, reverse: (m) => m }, log: { forward: (m, w = e.props.min, C = e.props.max) => C * Math.pow(m / C, 1.5), reverse: (m, w = e.props.min, C = e.props.max) => C * Math.pow(m / C, 1 / 1.5) } };
  let o = !1;
  function a() {
    const m = document.activeElement;
    if (m instanceof HTMLInputElement) {
      const w = m.value;
      m.value = "", m.value = w;
    }
  }
  function i(m) {
    if (!m) return;
    const w = { disabled: m.props.disabled, min: typeof m.props.min == "number" ? m.props.min : 0, max: typeof m.props.max == "number" ? m.props.max : void 0, step: m.props.step || 1 };
    m.props.minInputAttrs = Object.assign(m.props.minInputAttrs || {}, w), m.props.maxInputAttrs = Object.assign(m.props.maxInputAttrs || {}, w), m.props.inputAttrs = m.props.inputAttrs && typeof m.props.inputAttrs == "object" ? Object.assign(m.props.inputAttrs, w) : w, m.props.computedMaxInputAttrs = m.props.maxInputAttrs && typeof m.props.maxInputAttrs == "object" ? Object.assign({}, m.props.inputAttrs, m.props.maxInputAttrs) : m.props.inputAttrs, m.props.computedMinInputAttrs = m.props.minInputAttrs && typeof m.props.minInputAttrs == "object" ? Object.assign({}, m.props.inputAttrs, m.props.minInputAttrs) : m.props.inputAttrs;
  }
  function l(m) {
    const { min: w, max: C, intervals: x } = e.props;
    if (m = Math.min(Math.max(m, 0), 100), !x || x.length === 0) {
      S();
      const _ = w + m / 100 * (C - w);
      return e.props.scalingFunction.reverse(_, w, C);
    }
    const D = u(x, w, C);
    for (let _ = 0; _ < D.length; _++) {
      const { value: A, step: k, left: b, width: y, stepsInInterval: I } = D[_];
      if (m >= b && m <= b + y) {
        const B = A + (m - b) / y * I * k, te = B % k;
        return v(te < k / 2 ? B - te : B + (k - te));
      }
    }
    return m > 100 ? C : m < 0 ? w : void 0;
  }
  function p(m, w = e.props.min, C = e.props.max) {
    const x = e.props.intervals;
    if (!x || x.length === 0)
      return S(), (e.props.scalingFunction.forward(m, w, C) - w) / (C - w) * 100;
    const D = u(x, w, C);
    for (let _ = 0; _ < D.length; _++) {
      const { value: A, step: k, left: b, width: y, stepsInInterval: I } = D[_], B = _ < D.length - 1 ? D[_ + 1].value : C;
      if (m >= A && m <= B)
        return 100 * ((b + (m - A) / k / I * y) / 100);
    }
    return 100;
  }
  function u(m, w = e.props.min, C = e.props.max) {
    (m = [...m]).sort((_, A) => _.value - A.value), m[0].value !== w && m.unshift({ value: w, step: e.props.step });
    let x = 0;
    for (let _ = 0; _ < m.length; _++) {
      const A = m[_].value, k = ((_ < m.length - 1 ? m[_ + 1].value : C) - A) / m[_].step;
      x += k;
    }
    let D = 0;
    return m.map((_, A) => {
      const k = _.value, b = ((A < m.length - 1 ? m[A + 1].value : C) - k) / _.step, y = D / x * 100;
      return D += b, { value: _.value, step: _.step, left: y, width: b / x * 100, stepsInInterval: b, totalSteps: x };
    });
  }
  function c() {
    const m = parseFloat(`${e.props.min}`), w = parseFloat(`${e.props.max}`);
    let C, x = 0;
    if (Array.isArray(e._value)) {
      const D = [...e._value].sort(f);
      x = parseFloat(`${D[0]}`), C = parseFloat(`${D[1]}`);
    } else C = parseFloat(`${e._value}`);
    e.props.maxHandleStyles = { left: `${p(C, m, w)}%` }, e.props.isMulti && Array.isArray(e._value) ? (e.props.minHandleStyles = { left: `${p(x, m, w)}%` }, e.props.fillStyles = { left: `${p(x, m, w)}%`, width: p(C, m, w) - p(x, m, w) + "%" }) : e.props.fillStyles = { left: "0%", width: `${p(C, m, w)}%` };
  }
  function f(m, w) {
    return parseFloat(`${m}`) - parseFloat(`${w}`);
  }
  function d(m, w = !0) {
    if (e.props.disabled) return;
    let C;
    if (m === void 0) {
      if (e.props.isMulti) e.input([$(e.props.min), $(e.props.max)]);
      else {
        const D = e.props.min + (e.props.max - e.props.min) / 2;
        e.input($(D));
      }
      return void c();
    }
    if (e.props.isMulti && Array.isArray(e._value) && !Array.isArray(m)) {
      const D = e.props.lastHandleInteraction === "min" ? 0 : 1, _ = [...e._value];
      _[D] = m;
      const [A, k] = _;
      if (A >= k) {
        const b = t?.querySelector(`[data-handle="${e.props.lastHandleInteraction === "min" ? "max" : "min"}"]`);
        b?.focus();
      }
      C = $([..._].sort(f));
    } else Array.isArray(m) ? C = $(m) : (C = $(m), C = isNaN(C) ? e.props.min : C);
    e.props.snapToMarks && (C = h(C));
    const x = $(g(C));
    w && e.input(x), c();
  }
  function g(m) {
    return e.props.isMulti && Array.isArray(m) ? [g(m[0]), g(m[1])] : (m = isNaN(m) ? e.props.min : m, Math.min(Math.max(parseFloat(`${m}`), e.props.min), e.props.max));
  }
  function v(m) {
    return parseFloat(m.toFixed(e.props.decimals));
  }
  function $(m) {
    if (e.props.snapToMarks) return m;
    if (!e.props.intervals) return Array.isArray(m) ? m.map((C) => v(Math.round(C / e.props.step) * e.props.step)) : v(Math.round(m / e.props.step) * e.props.step);
    const w = u(e.props.intervals);
    if (Array.isArray(m)) return m.map((C) => {
      const x = w.find((D, _) => {
        var A;
        return C >= D.value && C < (((A = w[_ + 1]) === null || A === void 0 ? void 0 : A.value) || e.props.max);
      });
      return x ? v(x.value + Math.round((C - x.value) / x.step) * x.step) : C;
    });
    {
      const C = w.find((x, D) => {
        var _;
        return m >= x.value && m < (((_ = w[D + 1]) === null || _ === void 0 ? void 0 : _.value) || e.props.max);
      });
      return C ? v(C.value + Math.round((m - C.value) / C.step) * C.step) : m;
    }
  }
  function h(m) {
    if (Array.isArray(m)) return m[0] = h(m[0]), m[1] = h(m[1]), m;
    {
      const w = e.props.marks;
      return w.reduce((x, D) => Math.abs(D.at - m) < Math.abs(x.at - m) ? D : x, w[0]).at;
    }
  }
  function S() {
    o || (Y(e.props.scalingFunction) ? typeof e.props.scalingFunction == "string" ? e.props.scalingFunction = s[e.props.scalingFunction] || s.linear : typeof e.props.scalingFunction == "object" && (e.props.scalingFunction = { ...s.linear, ...e.props.scalingFunction }) : e.props.scalingFunction = s.linear, o = !0);
  }
  e.props.maxHandleStyles = { left: "0%" }, e.props.fillStyles = { left: "0%", width: "0%" }, e.props.isMulti = !1, e.props.step = 1, e.props.min = 0, e.props.max = 100, e.props.tooltipFormat = typeof e.props.tooltipFormat == "function" ? e.props.tooltipFormat : (m, w) => {
    if (w) return m;
  }, e.props.largestBar = 0, "disabled" in e.props && (e.props.disabled = Y(e.props.disabled)), e.on("created", () => {
    var m;
    S(), e.props.isMulti = Array.isArray(e.value), e.props.step = parseFloat(`${e.props.step}`), e.props.decimals = ((m = e.props.step.toString().split(".")[1]) === null || m === void 0 ? void 0 : m.length) || 0, e.props.min = e.props.min ? parseFloat(`${e.props.min}`) : 0, e.props.max = e.props.max ? parseFloat(`${e.props.max}`) : 100;
    const w = Y(e.props.tooltip);
    e.props.tooltip = e.props.tooltip === void 0 ? "auto" : w;
    const C = Y(e.props.marks);
    if (e.props.marks = !!C && (Array.isArray(e.props.marks) ? e.props.marks : (function() {
      const { min: _, max: A, step: k } = e.props, b = [];
      for (let y = _; y <= A; y += k) b.push({ at: y, label: y });
      return b;
    })()), e.props.markLabels = Y(e.props.markLabels), e.props.snapToMarks = Y(e.props.snapToMarks), e.props.showInput = Y(e.props.showInput), e.props.largestBar = e.props.chart ? e.props.chart.reduce((_, A) => A.value > _ ? A.value : _, 0) : e.props.largestBar, i(e), Ze(`track-${e.props.id}`, () => {
      var _;
      t = (_ = e.props.__root) === null || _ === void 0 ? void 0 : _.getElementById(`track-${e.props.id}`), d(e.value, !1), c();
    }, e.props.__root), e.context) {
      let _ = 0, A = "";
      const k = e.context.handlers.blur;
      e.context.handlers.blur = (b) => {
        k(b), e.emit("blur");
      }, e.context.handlers.clickTrack = (b) => {
        if (!t) return;
        e.props.dragging = !1;
        const { left: y, width: I } = t.getBoundingClientRect(), B = (b.clientX - y) / I;
        if (e.props.isMulti && Array.isArray(e.value)) {
          const [te, ne] = e.value, W = Math.abs(te - B * e.props.max) < Math.abs(ne - B * e.props.max) ? "min" : "max", Ce = W === "min" ? 0 : 1;
          e.props.lastHandleInteraction = W, e.value[Ce] = l(100 * B), d(e._value);
        } else d(l(100 * B));
      }, e.context.handlers.focus = (b) => {
        if (!t) return;
        const y = b.target.dataset.handle;
        y && (e.props.lastHandleInteraction = y);
      }, e.context.handlers.clickHandle = (b) => {
        b.stopPropagation(), e.props.attrs.onClick && e.props.attrs.onClick(b), e.props.dragging = !1, d(e._value);
      }, e.context.handlers.startDrag = (b) => {
        if (!t) return;
        e.props.dragging = !0;
        const y = b.type === "touchstart", I = y ? "touchmove" : "mousemove", B = y ? "touchend" : "mouseup";
        e.props.lastHandleInteraction = b.target.dataset.handle || e.props.lastHandleInteraction, document.addEventListener(I, D, { passive: !1 }), document.addEventListener(B, () => {
          e.context && (e.props.dragging = !1, document.removeEventListener(I, D), y && b.target instanceof HTMLElement && b.target.blur());
        });
      }, e.context.handlers.keydown = (b) => {
        if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "-"].includes(b.key)) {
          b.preventDefault(), clearTimeout(_), A += b.key;
          const y = A === "-" ? -1 : 1;
          _ = window.setTimeout(() => {
            A !== "-" && d(parseFloat(A) * y), A = "";
          }, 350);
        }
        if (["ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp", "PageUp", "PageDown", "Home", "End"].includes(b.key)) {
          b.preventDefault();
          const y = e.props.lastHandleInteraction === "min" ? 0 : 1, I = Array.isArray(e._value) ? e._value[y] : e._value, B = (function(te, ne) {
            if (!e.props.intervals) return e.props.step;
            const W = u(e.props.intervals);
            if (te >= e.props.max) return W[W.length - 1].step;
            let Ce = W.find((De, Ue) => {
              var de;
              return te >= De.value && te < (((de = W[Ue + 1]) === null || de === void 0 ? void 0 : de.value) || e.props.max);
            });
            return Ce ? (ne === -1 && te - Ce.step < Ce.value && (Ce = W[W.indexOf(Ce) - 1] || Ce), Ce.step) : e.props.step;
          })(I, ["ArrowLeft", "ArrowDown", "PageDown"].includes(b.key) ? -1 : 1);
          if (e.props.marks && e.props.snapToMarks) {
            const te = h(I), ne = e.props.marks.find((Ue) => Ue.at === te), W = e.props.marks.indexOf(ne), Ce = ["ArrowLeft", "ArrowDown"].includes(b.key) ? -1 : 1, De = Math.min(Math.max(0, W + Ce), e.props.marks.length - 1);
            return void d(e.props.marks[De].at);
          }
          if (b.metaKey) return void (b.key === "ArrowLeft" || b.key === "ArrowDown" ? d(e.props.min) : d(e.props.max));
          if (b.key === "Home") return void d(e.props.min);
          if (b.key === "End") return void d(e.props.max);
          ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(b.key) && d(I + (b.shiftKey ? 10 * B : B) * (["ArrowLeft", "ArrowDown"].includes(b.key) ? -1 : 1)), b.key === "PageUp" ? d(I + 10 * B) : b.key === "PageDown" && d(I - 10 * B);
        }
      }, e.context.handlers.maxNode = (b) => {
        n = b, b.hook.commit((y, I) => J(b.value, y) ? I(y) : (`${b.value}`.includes(".") && !`${y}`.includes(".") && a(), e.props.isMulti && Array.isArray(e._value) ? d([e._value[0], y]) : d(y), I(g(y))));
      }, e.context.handlers.minNode = (b) => {
        r = b, b.hook.commit((y, I) => J(b.value, y) ? I(y) : (`${b.value}`.includes(".") && !`${y}`.includes(".") && a(), e.props.isMulti && Array.isArray(e._value) ? d([y, e._value[1]]) : d(y), I(g(y))));
      }, e.context.handlers.inputBlur = () => {
        e.props.isMulti && Array.isArray(e._value) && d([...e._value].sort(f));
      }, e.context.fns.calculateMarkPosition = (b) => p(b, e.props.min, e.props.max);
    }
    let x;
    function D(_) {
      var A;
      if (!t || !e.props.dragging) return;
      _.preventDefault();
      const k = _.clientX || ((A = _.touches) === null || A === void 0 ? void 0 : A.length) && _.touches[0].clientX, { left: b, width: y } = t.getBoundingClientRect(), I = $(l((k - b) / y * 100));
      x !== I && (x = I, d(I));
    }
    d(e.value);
  }), e.on("input", ({ payload: m }) => {
    Array.isArray(e.value) && Array.isArray(m) ? e.value[0] === m[0] && e.value[1] === m[1] || d(m, !1) : e.value !== m && d(m, !1), (function() {
      if (e.props.isMulti && Array.isArray(e._value)) {
        const [w, C] = [...e._value];
        r && r.input(v(w)), n && n.input(v(C));
      } else n && n.input(e._value);
    })();
  }), e.on("prop:max", () => {
    e.props.max = e.props.max ? parseFloat(`${e.props.max}`) : 100, d(e.value), i(e);
  }), e.on("prop:min", () => {
    e.props.min = e.props.min ? parseFloat(`${e.props.min}`) : 0, d(e.value), i(e);
  });
}] }, Se = /* @__PURE__ */ lt("cp"), { outer: OS, wrapper: ES, inner: IS, label: LS, prefix: MS, suffix: PS, help: Qp, messages: VS, message: NS, icon: Fn } = /* @__PURE__ */ pt(Se), FS = Se("swatchPreview", () => ({ $el: "div", attrs: { id: "$id", class: "$classes.swatchPreview", tabindex: { if: "$disabled", then: -1, else: 0 }, onClick: "$handlers.inputPreviewClick", onFocusout: "$handlers.inputPreviewFocusout", onKeydown: "$handlers.inputPreviewKeydown", role: "button", "aria-valuetext": '$: "Current color: " + $value' } })), RS = Se("valueString", () => ({ $el: "span", attrs: { class: "$classes.valueString" }, children: { if: '$format === "hex"', then: "$hex", else: { if: '$format === "rgba"', then: "$rgbaString", else: { if: '$format === "hsla"', then: "$hslaString", else: "" } } } })), BS = Se("panel", () => ({ $el: "div", attrs: { id: '$: $id + "_popover"', class: "$classes.panel", onKeydown: "$handlers.panelKeydown", "aria-role": { if: "$layout === popover", then: "dialog" }, "aria-modal": { if: "$layout === popover", then: "true" }, "aria-label": "$label", popover: "$popover", style: { if: "$usePopover", then: { margin: 0, top: '$popoverCoordinates.y + "px"', left: '$popoverCoordinates.x + "px"' }, else: { position: { if: "$inline === undefined || $inline === false", then: "absolute" } } } } })), jS = Se("panelClose", () => ({ $el: "button", attrs: { type: "button", class: "$classes.panelClose", onClick: "$handlers.closePanel", tabindex: { if: "$showPanelClose", then: -1, else: 0 }, onKeydown: "$handlers.panelCloseKeydown", "aria-label": "$ui.close.value" } })), HS = Se("controlGroup", () => ({ $el: "div", attrs: { class: "$classes.controlGroup", "data-eye-dropper": "$hasNativeEyeDropper && $eyeDropper", role: "group" } })), ZS = Se("LS", () => ({ $el: "div", attrs: { class: "$classes.LS" } })), WS = Se("canvasLS", () => ({ $el: "canvas", attrs: { id: '$: "canvas-ls-" + $id', class: '$classes.canvas + " " + $classes.canvasLS', width: 256, height: 256, "aria-hidden": "true" } })), KS = Se("controlLS", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, class: '$classes.control + " " + $classes.controlLS', onKeydown: "$handlers.lsKeydown", style: { left: '$controlLSPosition.x + "%"', top: '$controlLSPosition.y + "%"', backgroundColor: '$: "hsl(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%)"' }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuetext": '$: "Lightness: " + $hslaPercent.l + "%, Saturation: " + $hslaPercent.s + "%"' } })), US = Se("hue", () => ({ $el: "div", attrs: { class: "$classes.hue" } })), zS = Se("canvasHue", () => ({ $el: "canvas", attrs: { id: '$: "canvas-hue-" + $id', class: '$classes.canvas + " " + $classes.canvasHue', width: 256, height: 10, "aria-hidden": "true" } })), YS = Se("controlHue", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, onKeydown: "$handlers.hueControlKeydown", class: '$classes.control + " " + $classes.controlHue', style: { left: '$: "min(max(" + (($hsla.h / 360) * 100) + "%, 3px), calc(100% - 3px))"', backgroundColor: '$: "hsl(" + $hsla.h + "deg, 100%, 50%)"' }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 360, "aria-valuenow": "$h" } })), qS = Se("alpha", () => ({ $el: "div", attrs: { class: "$classes.alpha", style: { opacity: { if: "$alpha", then: "1", else: "0.5" }, cursor: { if: "$alpha", then: "", else: "not-allowed" }, filter: { if: "$alpha", then: "", else: "grayscale(1)" } } } })), GS = Se("canvasAlpha", () => ({ $el: "canvas", attrs: { id: '$: "canvas-alpha-" + $id', class: '$classes.canvas + " " + $classes.canvasAlpha', width: 256, height: 10, "aria-hidden": "true", style: { pointerEvents: { if: "$alpha", then: "auto", else: "none" } } } })), XS = Se("controlAlpha", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled || $alpha === undefined", then: -1, else: 0 }, onKeydown: "$handlers.alphaControlKeydown", class: '$classes.control + " " + $classes.controlAlpha', style: { left: '$: "min(max(" + ($hsla.a * 100) + "%, 3px), calc(100% - 3px))"', backgroundImage: '$: "linear-gradient(to right, hsla(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%, " + $hsla.a + "), hsla(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%, " + $hsla.a + ")), linear-gradient(to right, white, white)"', pointerEvents: { if: "$alpha", then: "auto", else: "none" } }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": "$hsla.a" } })), JS = Se("preview", () => ({ $el: "div", attrs: { class: "$classes.preview" } })), QS = Se("canvasPreview", () => ({ $el: "canvas", attrs: { id: '$: "canvas-preview-" + $id', class: '$classes.canvas + " " + $classes.canvasPreview', width: 33, height: 33, "aria-hidden": "true" } })), eC = Se("canvasSwatchPreview", () => ({ $el: "div", attrs: { class: "$classes.canvasSwatchPreviewWrapper" }, children: [{ $el: "canvas", attrs: { id: '$: "canvas-swatch-preview-" + $id', class: '$classes.canvas + " " + $classes.canvasSwatchPreview', width: 33, height: 33, "aria-hidden": "true" } }] })), tC = Se("eyeDropper", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, role: "button", onKeydown: "$handlers.eyeDropperKeydown", id: '$: "eye-dropper-" + $id', class: "$classes.eyeDropper" } })), rC = Se("formatField", () => ({ $el: "div", attrs: { class: "$classes.formatField" } })), nC = Se("colorInputGroup", () => ({ $el: "div", attrs: { class: "$classes.colorInputGroup", "aria-role": "group" } })), sC = Se("hexField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.hexFieldGroup' }, children: [{ $el: "input", attrs: { onInput: "$handlers.hexInput", onKeydown: "$handlers.hexKeydown", onFocus: "$handlers.hexFocus", onBlur: "$handlers.hexBlur", id: '$: "hex-" + $id', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", class: '$classes.colorField + " " + $classes.hexField', value: "$hex", autocomplete: "off" } }, { $el: "label", children: "HEX", attrs: { for: '$: "hex-" + $id', class: "$classes.fieldLabel" } }] })), oC = Se("rField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.rFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "r-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.rField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.r", autocomplete: "off" } }, { $el: "label", children: "R", attrs: { for: '$: "r-" + $id', class: "$classes.fieldLabel" } }] })), aC = Se("gField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.gFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "g-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.gField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.g", autocomplete: "off" } }, { $el: "label", children: "G", attrs: { for: '$: "g-" + $id', class: "$classes.fieldLabel" } }] })), iC = Se("bField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.bFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "b-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.bField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.b", autocomplete: "off" } }, { $el: "label", children: "B", attrs: { for: '$: "b-" + $id', class: "$classes.fieldLabel" } }] })), lC = Se("aField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.aFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "a-" + $id', onInput: '$handlers.rangeLimitInput("alpha", 0, 1)', onKeydown: '$handlers.rangeLimitKeydown("alpha", 0, 1, 0.01)', type: "text", class: '$classes.colorField + " " + $classes.aField', value: "$rgba.a", tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled || $alpha === undefined", autocomplete: "off", style: { opacity: { if: "$alpha", then: "1", else: "0.33" }, cursor: { if: "$alpha", then: void 0, else: "not-allowed" } }, "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": "$rgba.a" } }, { $el: "label", children: "A", attrs: { for: '$: "a-" + $id', class: "$classes.fieldLabel", style: { opacity: { if: "$alpha", then: "1", else: "0.33" } } } }] })), pC = Se("hField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.hFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "h-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 360)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 360, 1)', type: "text", class: '$classes.colorField + " " + $classes.hField', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$hslaPercent.h", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 360, "aria-valuenow": "$hsla.h" } }, { $el: "label", children: "H", attrs: { for: '$: "h-" + $id', class: "$classes.fieldLabel" } }] })), uC = Se("sField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.sFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "s-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 100)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 100, 1)', type: "text", class: '$classes.colorField + " " + $classes.sField', tabindex: { if: "$disabled", then: -1, else: 0 }, value: "$hslaPercent.s", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": "$hsla.s" } }, { $el: "label", children: "S", attrs: { for: '$: "s-" + $id', class: "$classes.fieldLabel" } }] })), cC = Se("lField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.lFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "l-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 100)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 100, 1)', type: "text", class: '$classes.colorField + " " + $classes.lField', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$hslaPercent.l", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": "$hsla.l" } }, { $el: "label", children: "L", attrs: { for: '$: "l-" + $id', class: "$classes.fieldLabel" } }] })), dC = Se("formatSwitcher", () => ({ $el: "div", attrs: { class: "$classes.formatSwitcher", onClick: "$handlers.toggleFormat", tabindex: { if: "$disabled", then: -1, else: 0 }, onKeydown: "$handlers.formatSwitcherKeydown", role: "button", "aria-label": "$ui.next.value" } })), fC = Se("swatches", () => ({ $el: "div", attrs: { id: '$: "swatches-" + $id', class: "$classes.swatches", "data-keyboard-nav": "$swatchIsUsingKeyboardNav" } })), hC = Se("swatch", () => ({ $el: "div", for: ["swatch", "index", "$options"], if: "$swatch", attrs: { if: "$swatch.group", then: { class: "$classes.swatchGroup" }, else: { class: "$classes.swatch", title: "$swatch.label" } }, children: { if: "$swatch.group", then: [{ $el: "span", attrs: { class: "$classes.swatchGroupLabel" }, children: "$swatch.group" }, { $el: "div", for: ["groupSwatch", "swatchIndex", "$swatch.options"], attrs: { class: "$classes.swatch", title: "$groupSwatch.label" }, children: [{ $el: "canvas", attrs: { class: "$classes.swatchCanvas", width: 21, height: 21, onClick: "$handlers.swatchClick", onKeydown: "$handlers.swatchKeydown", tabindex: { if: "$: ($focusedSwatch === $fns.anyToHsvaString($groupSwatch.value, 0))", then: { if: "$disabled", then: -1, else: 0 }, else: -1 }, key: '$groupSwatch.label + "-" + $groupSwatch.value', "data-color": "$fns.anyToHsvaString($groupSwatch.value, 0)", "data-color-precise": "$fns.anyToHsvaString($groupSwatch.value, 2)", "data-group": "$index", "data-label": "$swatch.label", role: "button", "aria-label": "$swatch.label" } }] }], else: { $el: "canvas", attrs: { class: "$classes.swatchCanvas", width: 21, height: 21, onClick: "$handlers.swatchClick", onKeydown: "$handlers.swatchKeydown", tabindex: { if: "$: ($focusedSwatch === $fns.anyToHsvaString($swatch.value, 0))", then: { if: "$disabled", then: -1, else: 0 }, else: -1 }, key: '$swatch.label + "-" + $swatch.value', "data-color": "$fns.anyToHsvaString($swatch.value, 0)", "data-color-precise": "$fns.anyToHsvaString($swatch.value, 2)", "data-group": 0, "data-label": "$swatch.label", role: "button", "aria-label": "$swatch.label" } } } })), Yd = /rgba?\((\d+%?)\s*(?:,?\s*|\s+)(\d+%?)\s*(?:,?\s*|\s+)(\d+%?)(?:\s*(?:,?\s*|\s+|\/\s*)(\d*(?:\.\d+)?%?))?\)/i, qd = /^hsla?\((\d{1,3}deg|[\d.]+)\s*,?\s*([\d.]+%)\s*,?\s*([\d.]+%)(?:\s*,?\s*([\d.]+%?))?\)$/i;
function ve(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
function ii(e) {
  const [t, r, n, s] = (function(o) {
    o = o.replace("#", ""), o.length === 3 && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]);
    const a = parseInt(o.slice(0, 2), 16), i = parseInt(o.slice(2, 4), 16), l = parseInt(o.slice(4, 6), 16), p = o.length >= 8 ? parseInt(o.slice(6, 8), 16) / 255 : 1;
    return (function(u, c, f, d = 1) {
      const g = u / 255, v = c / 255, $ = f / 255, h = Math.max(g, v, $), S = Math.min(g, v, $);
      let m, w = 0;
      const C = (h + S) / 2;
      if (h === S) w = m = 0;
      else {
        const x = h - S;
        switch (m = C > 0.5 ? x / (2 - h - S) : x / (h + S), h) {
          case g:
            w = (v - $) / x + (v < $ ? 6 : 0);
            break;
          case v:
            w = ($ - g) / x + 2;
            break;
          case $:
            w = (g - v) / x + 4;
        }
        w *= 60;
      }
      return [w, 255 * m, 255 * C, d];
    })(a, i, l, p);
  })(e);
  return [...Hi(t, r, n, s)];
}
function eu(e, t, r, n = 1) {
  const s = t / 100, o = r / 100, a = (2 - s) * o / 2;
  return a !== 0 && (a === 1 || (t = a < 0.5 ? s * o / (2 * a) : s * o / (2 - 2 * a))), [e, ve(255 * t, 2), ve(255 * a, 2), n];
}
function Hi(e, t, r, n = 1) {
  const s = ve(t / 255, 4), o = ve(r / 255, 4);
  if (o === 1) return [e, 0, 100, n];
  const a = ve(o + s * Math.min(o, 1 - o), 4);
  let i = t / 2.55;
  return a !== 0 && (i = o !== 1 && o !== 0 ? 2 * (a - o) / a * 100 : t / 2.55), [e, ve(i, 2), ve(100 * a, 2), n];
}
function Gd(e, t, r, n = 1) {
  const s = r / 100, o = s * (t / 100), a = o * (1 - Math.abs(e / 60 % 2 - 1)), i = s - o;
  let l = 0, p = 0, u = 0;
  return [l, p, u] = e < 60 ? [o, a, 0] : e < 120 ? [a, o, 0] : e < 180 ? [0, o, a] : e < 240 ? [0, a, o] : e < 300 ? [a, 0, o] : [o, 0, a], l = Math.round(255 * (l + i)), p = Math.round(255 * (p + i)), u = Math.round(255 * (u + i)), [Math.min(Math.max(l, 0), 255), Math.min(Math.max(p, 0), 255), Math.min(Math.max(u, 0), 255), n];
}
function Xd(e, t, r, n = 1) {
  const s = e / 255, o = t / 255, a = r / 255, i = Math.max(s, o, a), l = Math.min(s, o, a);
  let p = 0;
  const u = i, c = i - l, f = i === 0 ? 0 : c / i;
  if (i !== l) {
    switch (i) {
      case s:
        p = (o - a) / c + (o < a ? 6 : 0);
        break;
      case o:
        p = (a - s) / c + 2;
        break;
      case a:
        p = (s - o) / c + 4;
    }
    p /= 6;
  }
  return [360 * p, 100 * f, 100 * u, n];
}
function mC(e, t, r, n = 1) {
  const [s, o, a, i] = Gd(e, t, r, n);
  return (function(l, p, u, c = 1) {
    const f = (g) => Math.round(g).toString(16).padStart(2, "0").toUpperCase(), d = (function(g) {
      return Math.round(255 * g).toString(16).padStart(2, "0").toUpperCase();
    })(c);
    return "#" + f(l) + f(p) + f(u) + `${d === "FF" ? "" : d}`;
  })(s, o, a, i);
}
function Xr(e) {
  return /^(#?)([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(e);
}
function ya(e) {
  if (e) {
    if (Xr(e)) return ii(e);
    if (e.startsWith("rgb")) {
      const t = e.match(Yd);
      if (!t) return [0, 0, 0, 1];
      const r = (n) => n.endsWith("%") ? Math.round(2.55 * Number(n.slice(0, -1))) : Number(n);
      return Xd(r(t[1]), r(t[2]), r(t[3]), t[4] ? t[4].endsWith("%") ? Number(t[4].slice(0, -1)) / 100 : Number(t[4]) : 1);
    }
    if (e.startsWith("hsl")) {
      const t = e.match(qd);
      if (!t) return [0, 0, 0, 1];
      const r = Number(t[1].replace("deg", "").trim()), n = Number(t[2].slice(0, -1)) / 100, s = Number(t[3].slice(0, -1)) / 100, o = t[4] ? t[4].endsWith("%") ? Number(t[4].slice(0, -1)) / 100 : Number(t[4]) : 1;
      return Hi(r, ve(255 * n, 2), ve(255 * s, 2), o);
    }
  }
}
function tu(e) {
  const [t, r, n, s] = e.split("-").map((o) => Number(o));
  return [t, r, n, s];
}
function Ur(e, t = 150, r = !0) {
  let n = null, s = !0;
  return (...o) => {
    const a = () => {
      e(...o), n = null;
    };
    r && s && (s = !1, a()), n || (n = setTimeout(a, t));
  };
}
function Rn(e) {
  return e !== !1 && e !== "false";
}
function vC(e) {
  return e.tabIndex >= 0 && !e.disabled && e.offsetParent !== null;
}
const ru = { "canvas-ls": "LS", "canvas-hue": "Hue", "canvas-alpha": "Alpha" }, gC = { schema: /* @__PURE__ */ OS(/* @__PURE__ */ ES(/* @__PURE__ */ LS("$label"), /* @__PURE__ */ U("$inline && $help", /* @__PURE__ */ Qp("$help")), /* @__PURE__ */ IS(/* @__PURE__ */ U("($inline === undefined || $inline === false) && $prefixIcon !== undefined", /* @__PURE__ */ Fn("prefix", "label")), /* @__PURE__ */ U("$inline === undefined || $inline === false", /* @__PURE__ */ MS()), /* @__PURE__ */ U("$inline === undefined || $inline === false", /* @__PURE__ */ FS(/* @__PURE__ */ eC(), /* @__PURE__ */ U("$showValue", /* @__PURE__ */ RS()))), /* @__PURE__ */ U("$inline || $expanded)", /* @__PURE__ */ BS(/* @__PURE__ */ U("$showPanelClose && ($inline === undefined || $inline === false)", /* @__PURE__ */ jS(/* @__PURE__ */ Fn("close"))), /* @__PURE__ */ U("$panelControls", /* @__PURE__ */ HS(/* @__PURE__ */ ZS(/* @__PURE__ */ WS(), /* @__PURE__ */ KS()), /* @__PURE__ */ JS(/* @__PURE__ */ QS()), /* @__PURE__ */ US(/* @__PURE__ */ zS(), /* @__PURE__ */ YS()), /* @__PURE__ */ qS(/* @__PURE__ */ GS(), /* @__PURE__ */ XS()), /* @__PURE__ */ U("$eyeDropper && $hasNativeEyeDropper", /* @__PURE__ */ tC(/* @__PURE__ */ Fn("eyeDropper"))))), /* @__PURE__ */ U("$panelFormat", /* @__PURE__ */ rC(/* @__PURE__ */ nC(/* @__PURE__ */ U('$panelActiveFormat === "hex"', /* @__PURE__ */ sC()), /* @__PURE__ */ U('$panelActiveFormat === "rgba"', /* @__PURE__ */ oC()), /* @__PURE__ */ U('$panelActiveFormat === "rgba"', /* @__PURE__ */ aC()), /* @__PURE__ */ U('$panelActiveFormat === "rgba"', /* @__PURE__ */ iC()), /* @__PURE__ */ U('$panelActiveFormat === "hsla"', /* @__PURE__ */ pC()), /* @__PURE__ */ U('$panelActiveFormat === "hsla"', /* @__PURE__ */ uC()), /* @__PURE__ */ U('$panelActiveFormat === "hsla"', /* @__PURE__ */ cC()), /* @__PURE__ */ U('$panelActiveFormat === "rgba" || $panelActiveFormat === "hsla"', /* @__PURE__ */ lC())), /* @__PURE__ */ dC(/* @__PURE__ */ Fn("switch")))), /* @__PURE__ */ U("$options", /* @__PURE__ */ fC(/* @__PURE__ */ hC())))), /* @__PURE__ */ U("$inline === undefined || $inline === false", /* @__PURE__ */ PS()), /* @__PURE__ */ U("($inline === undefined || $inline === false) && $suffixIcon !== undefined", /* @__PURE__ */ Fn("suffix"))), /* @__PURE__ */ U("$: ($inline === undefined || $inline === false) && $help", /* @__PURE__ */ Qp("$help"))), /* @__PURE__ */ VS(/* @__PURE__ */ NS("$message.value"))), type: "input", family: "text", props: ["disbaled", "format", "valueFormat", "alpha", "panelControls", "panelFormat", "eyeDropper", "inline", "options", "showValue", "closeOnSelect", "allowPaste"], features: [
  function(e) {
    let t, r = null, n = null, s = null, o = null, a = null, i = null, l = null, p = 0;
    const u = ["hex", "rgba", "hsla"], c = Ur(function() {
      if (!n) return;
      const P = n.getContext("2d");
      if (!P) return;
      const { width: Z, height: E } = n, M = e.props.h || 0;
      P.fillStyle = `hsl(${M}, 100%, 50%)`, P.fillRect(0, 0, Z, E);
      const L = P.createLinearGradient(0, 0, Z, 0);
      L.addColorStop(0, "rgba(255, 255, 255, 1)"), L.addColorStop(1, "rgba(255, 255, 255, 0)"), P.fillStyle = L, P.fillRect(0, 0, Z, E);
      const V = P.createLinearGradient(0, 0, 0, E);
      V.addColorStop(0, "rgba(0,0,0,0)"), V.addColorStop(1, "rgba(0,0,0,1)"), P.fillStyle = V, P.fillRect(0, 0, Z, E);
    }, 2), f = Ur(function() {
      if (!o) return;
      const P = o.getContext("2d");
      if (!P) return;
      const Z = Math.round(o.width), E = Math.round(o.height);
      P.clearRect(0, 0, Z, E), Ce(o, E / 2);
      const M = e.props.rgba.r || 0, L = e.props.rgba.g || 0, V = e.props.rgba.b || 0, F = P.createLinearGradient(0, 0, Z, 0);
      F.addColorStop(0, `rgba(${M}, ${L}, ${V}, 0)`), F.addColorStop(1, `rgba(${M}, ${L}, ${V}, 1)`), P.fillStyle = F, P.fillRect(0, 0, Z, E);
    }, 2), d = Ur(b, 2), g = Ur(y, 2), v = Ur(de, 2), $ = Ur(De, 10, !1);
    function h(P) {
      var Z, E;
      if (!e.context || !e.props.allowPaste || e.props.disabled) return;
      const M = (Z = e.props.__root) === null || Z === void 0 ? void 0 : Z.activeElement;
      if (r && r.contains(M)) {
        const L = (E = P.clipboardData) === null || E === void 0 ? void 0 : E.getData("text");
        if (!L || M.tagName === "INPUT" && !Xr(L) && !Yd.test(L) && !qd.test(L)) return;
        (Xr(L) || L.startsWith("hsl") || L.startsWith("rgb")) && (e.props.hexInputFocused && (e.props.hexInputFocused = !1, setTimeout(() => {
          e.props.hexInputFocused = !0;
        }, 10)), P.preventDefault(), S(L));
      }
    }
    function S(P) {
      var Z;
      if (!P) return;
      const E = ya(P);
      if (E) {
        const [M, L, V, F] = E;
        P !== "undefined" && (typeof M != "number" || isNaN(M) || typeof L != "number" || isNaN(L) || typeof V != "number" || isNaN(V) || typeof F != "number" || isNaN(F) || ve(M, 2) === e.props.h && ve(L, 2) === e.props.s && ve(V, 2) === e.props.v && ve(F, 2) === e.props.a) || (e.props.alpha && (e.props.a = ve(F, 2)), de(M, L, V));
      } else {
        const M = (Z = e.props.options) === null || Z === void 0 ? void 0 : Z.find((L) => {
          var V;
          return ((V = L.label) === null || V === void 0 ? void 0 : V.toLowerCase()) === P.toLowerCase();
        });
        if (M && M.value) {
          const L = ya(M.value);
          if (L) {
            const [V, F, X, q] = L;
            e.props.alpha && (e.props.a = ve(q, 2)), de(V, F, X);
          } else de(e.props.h, e.props.s, e.props.v);
        } else de(e.props.h, e.props.s, e.props.v);
      }
    }
    function m(P) {
      if (!e.context || !l) return;
      const Z = l[P];
      Z && (e.props.focusedSwatch = Z.dataset.color);
    }
    function w(P, Z) {
      new ResizeObserver(() => {
        const E = P.getBoundingClientRect();
        P.width = Math.round(E.width), P.height = Math.round(E.height), Z(P);
      }).observe(P);
    }
    function C() {
      e.context && e.props.eyeDropper && (e.context.hasNativeEyeDropper = !(typeof window > "u" || !window.EyeDropper), Ze(`eye-dropper-${e.props.id}`, () => {
        var P;
        const Z = new window.EyeDropper(), E = (P = e.props.__root) === null || P === void 0 ? void 0 : P.getElementById(`eye-dropper-${e.props.id}`);
        E?.addEventListener("click", async () => {
          const M = await Z.open();
          if (!M.sRGBHex) return;
          const [L, V, F] = ii(M.sRGBHex);
          e.props.alpha && (e.props.a = 1), de(L, V, F);
        });
      }, e.props.__root));
    }
    function x() {
      D("canvas-ls", (P) => {
        n = P;
      }, c, te), D("canvas-hue", (P) => {
        s = P;
      }, k, ne), D("canvas-alpha", (P) => {
        o = P;
      }, f, W), _(`canvas-preview-${e.props.id}`, (P) => {
        a = P, b();
      }, d), _(`canvas-swatch-preview-${e.props.id}`, (P) => {
        i = P, y();
      }, g), A();
    }
    function D(P, Z, E, M) {
      let L = !1;
      const V = () => {
        document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", q), document.removeEventListener("touchmove", X), document.removeEventListener("touchend", G);
      }, F = (pe) => {
        pe.buttons === 1 && t && M(pe);
      }, X = (pe) => {
        t && M(pe);
      }, q = () => {
        t = void 0, V();
      }, G = () => {
        t = void 0, V();
      };
      _(`${P}-${e.props.id}`, (pe) => {
        const ae = pe.nextElementSibling;
        Z(pe), E(), (function(oe, Ve) {
          const tt = (je) => {
            oe && (je.preventDefault(), Ve(je));
          };
          oe?.addEventListener("mousedown", tt), oe?.addEventListener("touchstart", tt);
        })(pe, M), L || (function(oe, Ve) {
          L = !0, oe.addEventListener("blur", () => {
            oe.removeAttribute("data-prevent-focus-style");
          }), Ve.addEventListener("touchend", () => {
            oe.removeAttribute("data-prevent-focus-style"), oe.blur();
          }), oe.addEventListener("keydown", (tt) => {
            ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(tt.key) && oe.removeAttribute("data-prevent-focus-style");
          });
        })(ae, pe), pe.addEventListener("mousedown", (oe) => {
          ae.focus(), ae.setAttribute("data-prevent-focus-style", "true"), t = ru[P], M(oe), document.addEventListener("mousemove", F), document.addEventListener("mouseup", q);
        }), pe.addEventListener("touchstart", () => {
          ae.setAttribute("data-prevent-focus-style", "true"), ae.focus(), t = ru[P], document.addEventListener("touchmove", X), document.addEventListener("touchend", G);
        });
      }, E);
    }
    function _(P, Z, E) {
      Ze(P, () => {
        var M;
        const L = (M = e.props.__root) === null || M === void 0 ? void 0 : M.getElementById(P);
        L && (Z(L), E && w(L, E));
      }, e.props.__root);
    }
    function A() {
      Ze(`swatches-${e.props.id}`, () => {
        var P, Z, E;
        l = Array.from(((P = e.props.__root) === null || P === void 0 ? void 0 : P.querySelectorAll(`#swatches-${e.props.id} canvas`)) || []), l.forEach((M) => {
          w(M, I);
        }), e.props.focusedSwatch = (E = (Z = l[0]) === null || Z === void 0 ? void 0 : Z.dataset) === null || E === void 0 ? void 0 : E.color, De();
      }, e.props.__root);
    }
    function k() {
      if (!s) return;
      const P = s.getContext("2d");
      if (!P) return;
      const Z = s.width, E = s.height;
      for (let M = 0; M < Z; M++) {
        const L = Math.floor(M / Z * 360);
        P.fillStyle = `hsl(${L}, 100%, 50%)`, P.fillRect(M, 0, 1, E);
      }
    }
    function b() {
      if (!a) return;
      const P = a.getContext("2d");
      if (!P) return;
      Ce(a, a.width / 3);
      const { r: Z, g: E, b: M, a: L } = e.props.rgba;
      P.fillStyle = `rgba(${Z}, ${E}, ${M}, ${L})`, P.fillRect(0, 0, a.width, a.height);
    }
    function y() {
      if (!i) return;
      const P = i.getContext("2d");
      if (!P) return;
      Ce(i, i.height / 2);
      const { r: Z, g: E, b: M, a: L } = e.props.rgba;
      P.fillStyle = `rgba(${Z}, ${E}, ${M}, ${L})`, P.fillRect(0, 0, i.width, i.height);
    }
    function I(P) {
      if (!P) return;
      const Z = P.getContext("2d");
      if (!Z) return;
      Ce(P, P.width / 2);
      const E = P.dataset.colorPrecise;
      if (!E) return;
      const [M, L, V, F] = tu(E), [X, q, G, pe] = eu(M, L, V, F);
      Z.fillStyle = `hsla(${X}, ${q / 255 * 100}%, ${G / 255 * 100}%, ${pe})`, Z.fillRect(0, 0, Math.round(P.width), Math.round(P.height));
    }
    function B(P, Z, E) {
      let M = null;
      const L = (G) => {
        M !== null && cancelAnimationFrame(M), M = requestAnimationFrame(() => {
          if (!Z) return;
          const pe = Z.getBoundingClientRect();
          let ae, oe;
          "touches" in G ? (ae = G.touches[0].clientX - pe.left, oe = G.touches[0].clientY - pe.top) : (ae = G.clientX - pe.left, oe = G.clientY - pe.top), ae = Math.min(Math.max(ae, 0), pe.width), oe = Math.min(Math.max(oe, 0), pe.height), E(ae, oe);
        });
      };
      L(P);
      const V = (G) => {
        G.preventDefault(), L(G);
      }, F = (G) => {
        G.preventDefault(), L(G);
      }, X = () => {
        t = void 0, document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", X);
      }, q = () => {
        t = void 0, document.removeEventListener("touchmove", F), document.removeEventListener("touchend", q);
      };
      "touches" in P ? (document.addEventListener("touchmove", F), document.addEventListener("touchend", q)) : (document.addEventListener("mousemove", V), document.addEventListener("mouseup", X));
    }
    function te(P) {
      B(P, n, (Z, E) => {
        const M = Z / n.width * 100, L = 100 - E / n.height * 100;
        v(e.props.hue, M, L);
      });
    }
    function ne(P) {
      B(P, s, (Z, E) => {
        if (!s) return;
        const M = s.width, L = Math.floor(Z / M * 360);
        e.props.h = L, v(e.props.h, e.props.s, e.props.v);
      });
    }
    function W(P) {
      e.props.alpha && B(P, o, (Z, E) => {
        const M = Z / o.width * 100 / 100;
        e.props.a = M, v(e.props.hue, e.props.s, e.props.v);
      });
    }
    function Ce(P, Z) {
      const E = P.getContext("2d");
      if (!E) return;
      const M = Math.ceil(P.height / Z), L = Math.ceil(P.width / Z);
      for (let V = 0; V < M; V++) for (let F = 0; F < L; F++) E.fillStyle = (V + F) % 2 == 1 ? "#FFFFFF" : "#CCCCCC", E.fillRect(F * Z, V * Z, Z, Z);
    }
    function De() {
      var P, Z;
      if (!e.context || !e.props.options || !l) return;
      const { h: E, s: M, v: L, a: V } = e.props, F = (function(G, pe, ae, oe = 1) {
        const Ve = ae === 0 ? 0 : pe;
        return `${ve(ae === 0 || ae === 100 && pe === 0 ? 0 : G, 0)}-${ve(Ve, 0)}-${ve(ae, 0)}-${ve(oe, 2)}`;
      })(E, M, L, V);
      let X = !1, q = !1;
      l.forEach((G) => {
        const pe = G.dataset.color;
        if (!pe) return;
        const [ae, oe, Ve, tt] = pe.split("-");
        Ve === "0" && L === 0 && tt === `${V}` && (q = !0);
        const je = G.parentElement;
        q || pe === F ? (je.dataset.active = "true", G.ariaSelected = "true", q = !1, !X && l && (m(l.indexOf(G)), X = !0)) : (delete je.dataset.active, G.ariaSelected = "false");
      }), X || (e.props.focusedSwatch = (Z = (P = l[0]) === null || P === void 0 ? void 0 : P.dataset) === null || Z === void 0 ? void 0 : Z.color);
    }
    function Ue(P) {
      P = P.replace("#", ""), e.props.hexInputFocused || P.length !== 3 || (P = P[0] + P[0] + P[1] + P[1] + P[2] + P[2]), P = `#${P = P.toUpperCase()}`, e.props.hex = P.slice(0, 9);
    }
    function de(P, Z, E, M = !1) {
      e.props.h = P === void 0 || isNaN(P) ? e.props.h : ve(Math.max(Math.min(P, 360), 0), 2), e.props.s = Z === void 0 || isNaN(Z) ? e.props.s : ve(Math.max(Math.min(Z, 100), 0), 2), e.props.v = E === void 0 || isNaN(E) ? e.props.v : ve(Math.max(Math.min(E, 100), 0), 2);
      const { h: L, s: V, v: F, a: X } = e.props, [q, G, pe] = eu(L, V, F), [ae, oe, Ve] = Gd(L, V, F), tt = e.props.hexInputFocused ? e.props.hex : mC(L, V, F, X), je = ve(X, 2);
      e.props.hsla = { h: L, s: G, l: pe, a: je }, e.props.hslaPercent = { h: ve(L, 0), s: F === 100 && V === 0 ? 0 : ve(F === 0 ? G / 255 : Math.max(Math.min(G / 255 * 100, 100), 0), 0), l: ve(Math.max(Math.min(e.props.hsla.l / 255 * 100, 100), 0), 0), a: je }, e.props.hslaString = `hsla(${e.props.hslaPercent.h}, ${e.props.hslaPercent.s}%, ${e.props.hslaPercent.l}%, ${je})`, e.props.hslaStringPrecise = `hsla(${L}, ${ve(F === 0 ? G / 255 : G / 255 * 100, 2)}%, ${ve(pe / 255 * 100, 2)}%, ${je})`, e.props.rgba = { r: ae, g: oe, b: Ve, a: je }, e.props.rgbaString = `rgba(${ae}, ${oe}, ${Ve}, ${je})`, Ue(tt), setTimeout(() => {
        var Ne;
        Rr(), (function() {
          const ut = e.props.s, nr = 100 - e.props.v;
          e.props.controlLSPosition = { x: ut, y: nr };
        })(), $(), r || typeof window > "u" || (r = (Ne = e.props.__root) === null || Ne === void 0 ? void 0 : Ne.querySelector(`[data-id="${e.props.id}"]`));
      }, 0);
      const Ae = e.props.valueFormat ? e.props.valueFormat : e.props.format;
      M || (Ae === "hex" ? e.input(e.props.hex) : Ae === "rgba" ? e.input(e.props.rgbaString) : Ae === "hsla" && e.input(e.props.hslaStringPrecise));
    }
    function Rr() {
      c(), f(), d(), g();
    }
    e.addProps(["expanded", "h", "s", "v", "a", "hsla", "hslaPercent", "hslaString", "hslaStringPrecise", "rgba", "rgbaString", "hex", "controlLSPosition", "panelActiveFormat", "hexInputFocused", "hasNativeEyeDropper", "focusedSwatch", "swatchIsUsingKeyboardNav", "showPanelClose"]), e.props.h = e.props.h || void 0, e.props.s = e.props.s || void 0, e.props.v = e.props.v || void 0, e.props.a = e.props.a || 1, e.props.controlLSPosition = e.props.controlLSPosition || { x: 0, y: 0 }, e.props.switchIcon = e.props.switchIcon || '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.2 179.7L154.4 66.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2 .8 5.6 2.2L285.8 179.7c1.4 1.3 2.2 3.2 2.2 5.2c0 3.9-3.2 7.1-7.1 7.1H39.1c-3.9 0-7.1-3.2-7.1-7.1c0-2 .8-3.8 2.2-5.2zm-22-23.3C4.4 163.8 0 174.1 0 184.9C0 206.5 17.5 224 39.1 224H280.9c21.6 0 39.1-17.5 39.1-39.1c0-10.8-4.4-21.1-12.3-28.4L187.6 42.9C180.1 35.9 170.2 32 160 32s-20.1 3.9-27.6 10.9L12.3 156.4zm22 175.9c-1.4-1.3-2.2-3.2-2.2-5.2c0-3.9 3.2-7.1 7.1-7.1H280.9c3.9 0 7.1 3.2 7.1 7.1c0 2-.8 3.8-2.2 5.2L165.6 445.8c-1.4 1.3-3.5 2.2-5.6 2.2s-4.2-.8-5.6-2.2L34.2 332.3zm-22 23.3L132.4 469.1c7.4 7 17.4 10.9 27.6 10.9s20.1-3.9 27.6-10.9L307.7 355.6c7.8-7.4 12.3-17.7 12.3-28.5c0-21.6-17.5-39.1-39.1-39.1H39.1C17.5 288 0 305.5 0 327.1c0 10.8 4.4 21.1 12.3 28.5z"/></svg>', e.props.hexInputFocused = !1, e.props.swatchIsUsingKeyboardNav = !1, e.on("destroying", () => {
      e.context && typeof document < "u" && document.removeEventListener("paste", h);
    }), e.on("created", () => {
      var P, Z;
      e.context && (typeof window < "u" && document.addEventListener("paste", h), e.props.expanded = !1, e.props.panelActiveFormat = e.props.format || u[0], e.props.panelControls = Rn(e.props.panelControls), e.props.eyeDropper = Rn(e.props.eyeDropper), e.props.panelFormat = Rn(e.props.panelFormat), e.props.showValue = Rn(e.props.showValue), e.props.allowPaste = Rn(e.props.allowPaste), e.props.inline = Y(e.props.inline), e.props.disabled = Y(e.props.disabled), e.props.format = e.props.format || "hex", e.props.alpha = Y((Z = (P = e.props) === null || P === void 0 ? void 0 : P.alpha) === null || Z === void 0 || Z), e.props.valueFormat = e.props.valueFormat || e.props.format, e.props.closeOnSelect = Y(e.props.closeOnSelect), e.props.focusedSwatch = void 0, e.value === void 0 || e.value === "" || e.value === null ? (e.props.rgba = { r: 0, g: 0, b: 0 }, de(0, 0, 0, !0)) : S(`${e.value}`), e.on("input", ({ payload: E }) => {
        r && e.props.__root !== void 0 && !r.contains(e.props.__root.activeElement) && S(E);
      }), setTimeout(() => {
        C();
      }, 5), x(), e.on("prop:expanded", () => {
        var E;
        e.props.expanded ? (C(), x(), A(), document.addEventListener("keydown", M), window.innerWidth <= 430 && !window.matchMedia("(hover: hover)").matches ? e.props.showPanelClose = !0 : e.props.showPanelClose = !1, setTimeout(() => {
          var L;
          const V = (L = e.props.__root) === null || L === void 0 ? void 0 : L.querySelector(`[data-id="${e.props.id}"] *:not(.formkit-swatch-preview)[tabindex="0"]`);
          V && V.focus();
        }, 0)) : (document.removeEventListener("keydown", M), ((E = e.props.__root) === null || E === void 0 ? void 0 : E.querySelector(`[data-id="${e.props.id}"] *[tabindex="0"]`)).focus());
        function M(L) {
          L.key === "Escape" && (L.preventDefault(), e.props.expanded = !1);
        }
      }), e.context.fns.anyToHsvaString = (E, M) => {
        const L = ya(E);
        if (!L) return "0-0-0-1";
        let [V, F, X, q] = L;
        return M === 0 && (V = X === 0 || X === 100 && F === 0 ? 0 : V), `${ve(V, M)}-${ve(F, M)}-${ve(X, M)}-${ve(q, 2)}`;
      }, e.context.handlers.inputPreviewClick = (E) => {
        e.props.expanded = !e.props.expanded;
      }, e.context.handlers.inputPreviewFocusout = (E) => {
        var M, L, V;
        const F = (M = e.props.__root) === null || M === void 0 ? void 0 : M.querySelector(`[data-id="${e.props.id}"] .formkit-inner`), X = E.relatedTarget;
        if (F.contains(X)) {
          let q = function(G) {
            var pe, ae;
            F.contains(G.target) || (e.props.expanded = !1, (pe = e.props.__root) === null || pe === void 0 || pe.removeEventListener("mousedown", q), (ae = e.props.__root) === null || ae === void 0 || ae.removeEventListener("touchstart", q));
          };
          (L = e.props.__root) === null || L === void 0 || L.addEventListener("mousedown", q), (V = e.props.__root) === null || V === void 0 || V.addEventListener("touchstart", q);
        } else e.props.expanded = !1;
      }, e.context.handlers.inputPreviewKeydown = (E) => {
        E.key === "Escape" && (E.preventDefault(), e.props.expanded = !1), E.key !== "Enter" && E.key !== " " || (E.preventDefault(), e.props.expanded = !e.props.expanded);
      }, e.context.handlers.closePanel = () => {
        e.props.expanded = !1;
      }, e.context.handlers.panelCloseKeydown = (E) => {
        E.key !== "Enter" && E.key !== " " || (E.preventDefault(), e.props.expanded = !1);
      }, e.context.handlers.toggleFormat = (E = 1) => {
        E = typeof E == "number" ? E : 1;
        const M = (u.indexOf(e.props.panelActiveFormat) + E + u.length) % u.length;
        e.props.panelActiveFormat = u[M];
      }, e.context.handlers.panelKeydown = (E) => {
        var M, L, V;
        if (E.key === "Tab" && e.props.expanded) {
          E.preventDefault();
          const F = Array.from(((M = e.props.__root) === null || M === void 0 ? void 0 : M.querySelectorAll(`[data-id="${e.props.id}"] *:not(.formkit-swatch-preview)[tabindex="0"]`)) || []).filter(vC), X = F.indexOf(!((L = e.props.__root) === null || L === void 0) && L.activeElement ? (V = e.props.__root) === null || V === void 0 ? void 0 : V.activeElement : e.props.__root);
          let q;
          q = E.shiftKey ? (X - 1 + F.length) % F.length : (X + 1) % F.length, F[q].focus();
        }
      }, e.context.handlers.lsKeydown = (E) => {
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(E.key)) {
          E.preventDefault();
          const { h: M, s: L, v: V } = e.props, F = E.shiftKey ? 10 : 1;
          switch (E.key) {
            case "ArrowLeft":
              de(M, L - F, V);
              break;
            case "ArrowRight":
              de(M, L + F, V);
              break;
            case "ArrowUp":
              de(M, L, V + F);
              break;
            case "ArrowDown":
              de(M, L, V - F);
              break;
            case "PageUp":
              de(M, L, V + 10);
              break;
            case "PageDown":
              de(M, L, V - 10);
              break;
            case "Home":
              de(M, L - 10, V);
              break;
            case "End":
              de(M, L + 10, V);
          }
          Rr();
        }
      }, e.context.handlers.hueControlKeydown = (E) => {
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(E.key)) {
          E.preventDefault();
          const { h: M, s: L, v: V } = e.props, F = E.shiftKey ? 10 : 1;
          switch (E.key) {
            case "ArrowLeft":
            case "ArrowDown":
              de(M - F, L, V);
              break;
            case "ArrowRight":
            case "ArrowUp":
              de(M + F, L, V);
              break;
            case "PageUp":
              de(M + 10, L, V);
              break;
            case "PageDown":
              de(M - 10, L, V);
              break;
            case "Home":
              de(0, L, V);
              break;
            case "End":
              de(360, L, V);
          }
          Rr();
        }
      }, e.context.handlers.alphaControlKeydown = (E) => {
        if (e.props.alpha && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(E.key)) {
          E.preventDefault();
          const { h: M, s: L, v: V, a: F } = e.props, X = E.shiftKey ? 0.1 : 0.01;
          switch (E.key) {
            case "ArrowLeft":
            case "ArrowDown":
              e.props.a = ve(Math.min(Math.max(F - X, 0), 1), 2);
              break;
            case "ArrowRight":
            case "ArrowUp":
              e.props.a = ve(Math.min(Math.max(F + X, 0), 1), 2);
              break;
            case "PageUp":
              e.props.a = ve(Math.min(Math.max(F + 0.1, 0), 1), 2);
              break;
            case "PageDown":
              e.props.a = ve(Math.min(Math.max(F - 0.1, 0), 1), 2);
              break;
            case "Home":
              e.props.a = 0;
              break;
            case "End":
              e.props.a = 1;
          }
          de(M, L, V);
        }
      }, e.context.handlers.eyeDropperKeydown = (E) => {
        var M;
        if (E.key === "Enter" || E.key === " ") {
          E.preventDefault();
          const L = (M = e.props.__root) === null || M === void 0 ? void 0 : M.getElementById(`eye-dropper-${e.props.id}`);
          L?.click();
        }
      }, e.context.handlers.formatSwitcherKeydown = (E) => {
        e.context && (E.key !== "Enter" && E.key !== " " && E.key !== "ArrowDown" || (E.preventDefault(), e.context.handlers.toggleFormat()), E.key === "ArrowUp" && (E.preventDefault(), e.context.handlers.toggleFormat(-1)));
      }, e.context.handlers.hexInput = (E) => {
        const M = E.target, L = M.value.startsWith("#") ? 9 : 8, V = M.value.slice(0, L);
        if (M.value = e.props.alpha ? V : V.slice(0, 7), Xr(V)) {
          const [F, X, q, G] = ii(V);
          e.props.alpha && (e.props.a = G), Ue(V), de(F, X, q);
        }
      }, e.context.handlers.hexKeydown = (E) => {
        const M = E.target, L = M.value;
        let V = "";
        if (!Xr(L)) return;
        const F = L.startsWith("#") ? L.slice(1) : L, X = F.length === 8, q = X ? F.substring(0, 6) : F, G = X ? F.substring(6, 8) : "", pe = E.shiftKey ? 10 : 1, ae = 16777215;
        let oe;
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(E.key)) switch (E.preventDefault(), E.key) {
          case "ArrowUp":
            oe = (parseInt(q, 16) + pe) % 16777216;
            break;
          case "ArrowDown":
            oe = (parseInt(q, 16) - pe + ae + 1) % 16777216;
            break;
          case "PageUp":
            oe = (parseInt(q, 16) + 10) % 16777216;
            break;
          case "PageDown":
            oe = (parseInt(q, 16) - 10 + ae + 1) % 16777216;
            break;
          case "Home":
            oe = 0;
            break;
          case "End":
            oe = ae;
        }
        oe !== void 0 && (V = oe.toString(16).padStart(6, "0").toUpperCase()), V && (M.value = X ? `#${V}${G}` : `#${V}`), e.context && e.context.handlers.hexInput(E);
      }, e.context.handlers.hexFocus = () => {
        e.context && (e.props.hexInputFocused = !0);
      }, e.context.handlers.hexBlur = (E) => {
        if (!e.context) return;
        e.props.hexInputFocused = !1;
        const M = E.target.value;
        Xr(M) && Ue(M);
      }, e.context.handlers.rangeLimitInput = (E, M, L, V) => (F) => {
        const X = V || F;
        if (!X || !e.context) return;
        const q = X.target;
        if (q.value.endsWith(".")) return;
        const G = Math.max(Math.min(Number(q.value), L), M);
        q.value = `${G}`;
        const pe = q.id;
        if (E === "hsla") {
          switch (pe) {
            case `h-${e.props.id}`:
              e.props.h = G;
              break;
            case `s-${e.props.id}`:
              e.props.hslaPercent.s = G;
              break;
            case `l-${e.props.id}`:
              e.props.hslaPercent.l = G;
          }
          const [ae, oe, Ve] = Hi(e.props.h, 2.55 * e.props.hslaPercent.s, 2.55 * e.props.hslaPercent.l);
          de(ae, oe, Ve);
        } else if (E === "rgba") {
          switch (pe) {
            case `r-${e.props.id}`:
              e.props.rgba.r = G;
              break;
            case `g-${e.props.id}`:
              e.props.rgba.g = G;
              break;
            case `b-${e.props.id}`:
              e.props.rgba.b = G;
          }
          const [ae, oe, Ve] = Xd(e.props.rgba.r, e.props.rgba.g, e.props.rgba.b);
          de(ae, oe, Ve);
        } else E == "alpha" && e.props.alpha && (e.props.a = G, de());
      }, e.context.handlers.rangeLimitKeydown = (E, M, L, V) => (F) => {
        if (e.context)
          if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", "Backspace", "Tab", "Enter"].includes(F.key) || F.metaKey || !/[a-zA-Z!@#$%^&*()_+={}\[\]:;"'<,>?\/|\\`~]/g.test(F.key)) {
            if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(F.key)) {
              const X = F.target, q = Number(X.value), G = F.shiftKey ? 10 * V : V;
              switch (F.key) {
                case "ArrowUp":
                  F.preventDefault(), X.value = `${Math.min(q + G, L)}`;
                  break;
                case "ArrowDown":
                  F.preventDefault(), X.value = `${Math.max(q - G, M)}`;
                  break;
                case "PageUp":
                  F.preventDefault(), X.value = `${Math.min(q + 10 * V, L)}`;
                  break;
                case "PageDown":
                  F.preventDefault(), X.value = `${Math.max(q - 10 * V, M)}`;
                  break;
                case "Home":
                  F.preventDefault(), X.value = `${M}`;
                  break;
                case "End":
                  F.preventDefault(), X.value = `${L}`;
              }
              e.context.handlers.rangeLimitInput(E, M, L, F)();
            }
          } else F.preventDefault();
      }, e.context.handlers.swatchClick = (E) => {
        const M = E.target;
        if (M.dataset.colorPrecise) {
          const [L, V, F, X] = tu(M.dataset.colorPrecise);
          e.props.alpha && (e.props.a = X), de(L, V, F), e.props.closeOnSelect && (e.props.expanded = !1);
        }
        e.context && E.type !== "keydown" && e.context.handlers.swatchKeydown(E);
      }, e.context.handlers.swatchKeydown = (E) => {
        var M, L, V, F;
        if (!e.context || !l || !l.length) return;
        const X = l.indexOf(E.currentTarget);
        let q = null;
        const G = (function(Ae) {
          var Ne;
          if (!Ae.length) return 0;
          const ut = (Ne = Ae[0].parentElement) === null || Ne === void 0 ? void 0 : Ne.parentElement;
          if (!ut) return 0;
          const nr = ut.getBoundingClientRect().width, Nt = Ae[0].parentElement;
          if (!Nt) return 0;
          const Br = Nt.getBoundingClientRect(), _t = window.getComputedStyle(Nt), An = parseFloat(_t.marginLeft) + parseFloat(_t.marginRight), No = Br.width + An;
          return Math.floor(nr / No);
        })(l), pe = l.length;
        let ae = 0, oe = pe, Ve = !1;
        const tt = l[X].dataset.group;
        if (tt !== void 0) {
          const Ae = l.filter((Ne) => Ne.dataset.group === tt);
          ae = l.indexOf(Ae[0]), oe = l.indexOf(Ae[Ae.length - 1]);
        }
        const je = (X - ae) % G;
        if (!E.key || E.key === "Tab") return E.key || (e.props.swatchIsUsingKeyboardNav = !1, p = je, m(X)), E.key === "Tab" && (e.props.swatchIsUsingKeyboardNav = !1), void l.forEach((Ae) => {
          delete Ae.parentElement.dataset.focused;
        });
        if (E.key === "Enter" || E.key === " ") return E.preventDefault(), p = je, e.context.handlers.swatchClick(E), void m(X);
        switch (E.key !== "ArrowUp" && E.key !== "ArrowDown" && E.key !== "ArrowLeft" && E.key !== "ArrowRight" || (e.props.swatchIsUsingKeyboardNav = !0, E.preventDefault()), E.key) {
          case "ArrowUp":
            q = Math.max(X - G, X - (G - (p - je))), Ve = !0;
            break;
          case "ArrowDown":
            q = Math.max(X + G, X + (G + (p - je))), Ve = !0;
            break;
          case "ArrowLeft":
            q = X - 1, p = (q - ae) % G;
            break;
          case "ArrowRight":
            q = X + 1, p = (q - ae) % G;
        }
        if (Ve && q !== null && (q < ae || q > oe)) {
          let Ae;
          Ae = q < ae ? (L = (M = l[ae - 1]) === null || M === void 0 ? void 0 : M.dataset) === null || L === void 0 ? void 0 : L.group : (F = (V = l[oe + 1]) === null || V === void 0 ? void 0 : V.dataset) === null || F === void 0 ? void 0 : F.group;
          const Ne = l.filter((_t) => _t.dataset.group === tt), ut = l.filter((_t) => _t.dataset.group === Ae), nr = (X - ae) % G, Nt = Ne.length % G || G, Br = X >= ae + Ne.length - Nt;
          if (q < ae) {
            const _t = ut.length % G || G;
            q = ae - _t + Math.min(Math.max(nr, p), _t - 1);
          } else q > oe && (q = Br ? Math.min(oe + Math.max(nr, p) + 1, l.indexOf(ut[ut.length - 1])) : Math.min(q, oe));
        }
        if (q !== null && q >= 0 && q < pe) {
          m(q), l.forEach((ut) => {
            delete ut.parentElement.dataset.focused;
          });
          const Ae = l[q], Ne = Ae.parentElement;
          Ae.focus(), Ne.dataset.focused = "true";
        }
      });
    });
  },
  fs,
  tr,
  /* @__PURE__ */ he("eyeDropper", "color"),
  /* @__PURE__ */ he("close", "close"),
  /* @__PURE__ */ xe("close"),
  /* @__PURE__ */ xe("next")
] }, Fr = /* @__PURE__ */ lt("tb"), { outer: yC, wrapper: nu, prefix: $C, suffix: bC, help: _C, messages: xC, message: wC, icon: su } = /* @__PURE__ */ pt(Fr), ou = Fr("label", () => ({ if: "$label", $el: "label", attrs: { id: "$id + '_label'" } })), kC = Fr("singleToggle", () => ({ bind: "$attrs", $el: "button", attrs: { id: "$id", type: "button", "aria-label": "$label", "aria-pressed": "$fns.isChecked($onValue, $value)", onClick: "$handlers.toggleValue()", disabled: "$disabled", class: "$classes.input", onBlur: "$handlers.blur" } })), SC = Fr("multiToggle", () => ({ bind: "$attrs", $el: "button", attrs: { type: "button", id: "$id+'_'+$index", "aria-label": "$label", "aria-pressed": "$fns.isChecked($option, $value)", onClick: "$handlers.toggleValue($option)", class: "$classes.input", title: "$option.help", disabled: "$disabled || $option.disabled", onBlur: "$handlers.blur" } })), Ps = Fr("inputInner", () => ({ bind: "$attrs", $el: "span" })), CC = Fr("options", () => ({ $el: "ul", attrs: { id: "$id", "data-vertical": '$vertical && "true" || "false"', "aria-labelledby": "$id" } })), DC = Fr("option", () => ({ $el: "li", for: ["option", "index", "$options"], attrs: { key: "$option.value", "data-index": "$index" } }));
function au(e, t) {
  return t = t?.hasOwnProperty("__original") ? t?.__original : t?.value, e.props.multiple ? !!Array.isArray(e.value) && e.value.filter((r) => J(r, t)).length > 0 : t !== void 0 ? J(e.value, t) : (e.props._isChecked = J(e.value, e.props.onValue), e.props._isChecked);
}
const AC = { schema: /* @__PURE__ */ yC(/* @__PURE__ */ U("$options", /* @__PURE__ */ nu(/* @__PURE__ */ ou("$label"), /* @__PURE__ */ CC(/* @__PURE__ */ DC(/* @__PURE__ */ SC(/* @__PURE__ */ U("$fns.isChecked($option) === true", /* @__PURE__ */ Ps("$slots.default || $slots.on || $option.onLabel || $option.label"), /* @__PURE__ */ Ps("$slots.default || $slots.off || $option.offLabel || $option.label")))))), /* @__PURE__ */ nu(/* @__PURE__ */ U("$label && ($slots.default || $slots.on || $onLabel)", /* @__PURE__ */ ou("$label")), /* @__PURE__ */ kC(/* @__PURE__ */ su("prefix"), /* @__PURE__ */ $C(), /* @__PURE__ */ U("$_isChecked === true", /* @__PURE__ */ Ps("$slots.default || $slots.on || $onLabel || $label"), /* @__PURE__ */ Ps("$slots.default || $slots.off || $offLabel || $label")), /* @__PURE__ */ bC(), /* @__PURE__ */ su("suffix")))), /* @__PURE__ */ _C("$help"), /* @__PURE__ */ xC(/* @__PURE__ */ wC("$message.value"))), type: "input", family: "button", props: ["options"], features: [function(e) {
  var t, r, n, s;
  e.addProps(["enforced", "multiple", "offLabel", "offValue", "disabled", "onLabel", "onValue", "vertical", "_isChecked"]), e.props._isChecked = !1, e.props.enforced = Y(e.props.enforced), e.props.multiple = Y(e.props.multiple), e.props.vertical = Y(e.props.vertical), "disabled" in e.props && (e.props.disabled = Y(e.props.disabled)), (t = (n = e.props).onValue) !== null && t !== void 0 || (n.onValue = !0), (r = (s = e.props).offValue) !== null && r !== void 0 || (s.offValue = !1), e.on("created", () => {
    var o;
    e.props._isChecked = au(e, null), e.props.options && e.props.multiple && e.input((o = e.value) !== null && o !== void 0 ? o : [], !1), e.context && (e.context.fns.isChecked = (a) => au(e, a), e.context.handlers.toggleValue = (a) => (i) => (function(l, p, u) {
      if (u.preventDefault(), p = p && R(p), l.props.options) if (l.props.multiple) {
        const c = Array.isArray(l.value) ? [...l.value] : [], f = c.findIndex((d) => J(d, p));
        f > -1 && (!l.props.enforced || c.length > 1) ? c.splice(f, 1) : f === -1 && c.push(p), l.input(c);
      } else J(l.value, p) && !l.props.enforced ? l.input(void 0) : l.input(p);
      else l.input(J(l.value, l.props.onValue) ? l.props.offValue : l.props.onValue);
    })(e, a, i));
  });
}, tr] }, Jd = /* @__PURE__ */ lt("ut"), { outer: TC, inner: OC, wrapper: EC, label: IC, prefix: LC, suffix: MC, help: PC, messages: VC, message: NC, icon: iu } = /* @__PURE__ */ pt(Jd), FC = Jd("input", () => ({ $el: "input", bind: "$attrs", attrs: { name: "$node.name", autocomplete: "$attrs.autocomplete || off", id: "$id", onChange: "$handlers.handleInput", onBlur: "$handlers.unitBlur", onInput: "$handlers.handleInput", onKeydown: "$handlers.handleKeyDown", onBeforeinput: "$handlers.handleBeforeInput", readonly: "$readonly", inputmode: "decimal", placeholder: "$placeholder || $unitParts.unit", disabled: "$disabled", "data-unit": "$unit", "data-currency": "$currency", "data-display-locale": "$displayLocale", "data-value-locale": "$valueLocale", "data-decimals": "$decimals", "data-trailing": "$trailingZeros", "data-numeric-value": "$_numericValue", "data-align": "$_valueAlignAuto", "aria-required": "$state.required || undefined" } })), $a = { meter: { kilometer: 1e-3, meter: 1, centimeter: 100, millimeter: 1e3, mile: 621371e-9, yard: 1.09361, foot: 3.28084, inch: 39.3701, "mile-scandinavian": 1e-4 }, kilometer: { kilometer: 1, meter: 1e3, centimeter: 1e5, millimeter: 1e6, mile: 0.621371, yard: 1093.61, foot: 3280.84, inch: 39370.1, "mile-scandinavian": 10 }, centimeter: { kilometer: 1e-5, meter: 0.01, centimeter: 1, millimeter: 10, mile: 62137e-10, yard: 0.0109361, foot: 0.0328084, inch: 0.393701, "mile-scandinavian": 1e-6 }, millimeter: { kilometer: 1e-6, meter: 1e-3, centimeter: 0.1, millimeter: 1, mile: 621371e-12, yard: 109361e-8, foot: 328084e-8, inch: 0.0393701, "mile-scandinavian": 1e-7 }, mile: { kilometer: 1.60934, meter: 1609.34, centimeter: 160934, millimeter: 1609340, mile: 1, yard: 1760, foot: 5280, inch: 63360, "mile-scandinavian": 0.160934 }, yard: { kilometer: 9144e-7, meter: 0.9144, centimeter: 91.44, millimeter: 914.4, mile: 568182e-9, yard: 1, foot: 3, inch: 36, "mile-scandinavian": 9144e-8 }, foot: { kilometer: 3048e-7, meter: 0.3048, centimeter: 30.48, millimeter: 304.8, mile: 189394e-9, yard: 0.333333, foot: 1, inch: 12, "mile-scandinavian": 3048e-8 }, inch: { kilometer: 254e-7, meter: 0.0254, centimeter: 2.54, millimeter: 25.4, mile: 15783e-9, yard: 0.0277778, foot: 0.0833333, inch: 1, "mile-scandinavian": 254e-8 }, "mile-scandinavian": { kilometer: 10, meter: 1e4, centimeter: 1e6, millimeter: 1e7, mile: 6.21371, yard: 10936.1, foot: 32808.4, inch: 393701, "mile-scandinavian": 1 } }, ba = { celsius: { celsius: (e) => e, fahrenheit: (e) => 1.8 * e + 32 }, fahrenheit: { celsius: (e) => 5 / 9 * (e - 32), fahrenheit: (e) => e } }, _a = { acre: { acre: 1, hectare: 0.404686 }, hectare: { acre: 2.47105, hectare: 1 } }, xa = { gram: { gram: 1, kilogram: 1e-3, ounce: 0.035274, pound: 220462e-8 }, kilogram: { gram: 1e3, kilogram: 1, ounce: 35.274, pound: 2.20462 }, ounce: { gram: 28.3495, kilogram: 0.0283495, ounce: 1, pound: 0.0625 }, pound: { gram: 453.592, kilogram: 0.453592, ounce: 16, pound: 1 }, stone: { gram: 6350.29, kilogram: 6.35029, ounce: 224, pound: 14, stone: 1 } }, wa = { liter: { liter: 1, milliliter: 1e3, gallon: 0.264172, "fluid-ounce": 33.814 }, milliliter: { liter: 1e-3, milliliter: 1, gallon: 264172e-9, "fluid-ounce": 0.033814 }, gallon: { liter: 3.78541, milliliter: 3785.41, gallon: 1, "fluid-ounce": 128 }, "fluid-ounce": { liter: 0.0295735, milliliter: 29.5735, gallon: 78125e-7, "fluid-ounce": 1 } }, ka = { day: { day: 1, hour: 24, microsecond: 864e8, millisecond: 864e5, minute: 1440, month: 0.0328767, nanosecond: 864e14, second: 86400, week: 0.142857, year: 273973e-8 }, hour: { day: 0.0416667, hour: 1, microsecond: 36e8, millisecond: 36e5, minute: 60, month: 136986e-8, nanosecond: 36e11, second: 3600, week: 595238e-8, year: 114155e-9 }, microsecond: { day: 115741e-19, hour: 277778e-18, microsecond: 1, millisecond: 1e-3, minute: 166667e-13, month: 380517e-24, nanosecond: 1e3, second: 1e-6, week: 165344e-20, year: 3171e-20 }, millisecond: { day: 115741e-13, hour: 277778e-12, microsecond: 1e3, millisecond: 1, minute: 166667e-10, month: 380517e-19, nanosecond: 1e6, second: 1e-3, week: 165344e-16, year: 3171e-16 }, minute: { day: 694444e-9, hour: 0.0166667, microsecond: 6e7, millisecond: 6e4, minute: 1, month: 228311e-10, nanosecond: 6e10, second: 60, week: 992063e-10, year: 190132e-11 }, month: { day: 30.4368, hour: 730.484, microsecond: 2628e12, millisecond: 2628e9, minute: 43800, month: 1, nanosecond: 2628e15, second: 2628e6, week: 4.34524, year: 0.0833333 }, nanosecond: { day: 115741e-25, hour: 277778e-24, microsecond: 1e-3, millisecond: 1e-6, minute: 166667e-19, month: 380517e-28, nanosecond: 1, second: 1e-9, week: 165344e-26, year: 3171e-26 }, second: { day: 115741e-10, hour: 277778e-9, microsecond: 1e6, millisecond: 1e3, minute: 0.0166667, month: 380517e-16, nanosecond: 1e9, second: 1, week: 165344e-13, year: 3171e-13 }, week: { day: 7, hour: 168, microsecond: 6048e11, millisecond: 6048e8, minute: 10080, month: 0.230137, nanosecond: 6048e14, second: 604800, week: 1, year: 0.0191781 }, year: { day: 365, hour: 8760, microsecond: 3154e13, millisecond: 3154e10, minute: 525600, month: 12, nanosecond: 3154e16, second: 3154e4, week: 52.1429, year: 1 } }, Sa = { bit: { bit: 1, byte: 0.125, kilobit: 1e-3, kilobyte: 125e-6, megabit: 1e-6, megabyte: 125e-9, gigabit: 1e-9, gigabyte: 125e-12, terabit: 1e-12, terabyte: 125e-15, petabyte: 125e-18 }, byte: { bit: 8, byte: 1, kilobit: 8e-3, kilobyte: 1e-3, megabit: 8e-6, megabyte: 1e-6, gigabit: 8e-9, gigabyte: 1e-9, terabit: 8e-12, terabyte: 1e-12, petabyte: 1e-15 }, kilobit: { bit: 1e3, byte: 125, kilobit: 1, kilobyte: 0.125, megabit: 1e-3, megabyte: 125e-6, gigabit: 1e-6, gigabyte: 125e-9, terabit: 1e-9, terabyte: 125e-12, petabyte: 125e-15 }, kilobyte: { bit: 8e3, byte: 1e3, kilobit: 8, kilobyte: 1, megabit: 8e-3, megabyte: 1e-3, gigabit: 8e-6, gigabyte: 1e-6, terabit: 8e-9, terabyte: 1e-9, petabyte: 1e-12 }, megabit: { bit: 1e6, byte: 125e3, kilobit: 1e3, kilobyte: 125, megabit: 1, megabyte: 0.125, gigabit: 1e-3, gigabyte: 125e-6, terabit: 1e-6, terabyte: 125e-9, petabyte: 125e-12 }, megabyte: { bit: 8e6, byte: 1e6, kilobit: 8e3, kilobyte: 1e3, megabit: 8, megabyte: 1, gigabit: 8e-3, gigabyte: 1e-3, terabit: 8e-6, terabyte: 1e-6, petabyte: 1e-9 }, gigabit: { bit: 1e9, byte: 125e6, kilobit: 1e6, kilobyte: 125e3, megabit: 1e3, megabyte: 125, gigabit: 1, gigabyte: 0.125, terabit: 1e-3, terabyte: 125e-6, petabyte: 125e-9 }, gigabyte: { bit: 8e9, byte: 1e9, kilobit: 8e6, kilobyte: 1e6, megabit: 8e3, megabyte: 1e3, gigabit: 8, gigabyte: 1, terabit: 8e-3, terabyte: 1e-3, petabyte: 1e-6 }, terabit: { bit: 1e12, byte: 125e9, kilobit: 1e9, kilobyte: 125e6, megabit: 1e6, megabyte: 125e3, gigabit: 1e3, gigabyte: 125, terabit: 1, terabyte: 0.125, petabyte: 125e-6 }, terabyte: { bit: 8e12, byte: 1e12, kilobit: 8e9, kilobyte: 1e9, megabit: 8e6, megabyte: 1e6, gigabit: 8e3, gigabyte: 1e3, terabit: 8, terabyte: 1, petabyte: 1e-3 }, petabyte: { bit: 1e15, byte: 125e12, kilobit: 1e12, kilobyte: 125e9, megabit: 1e9, megabyte: 125e6, gigabit: 1e6, gigabyte: 125e3, terabit: 1e3, terabyte: 125, petabyte: 1 } };
function Qd(e) {
  let t = !1;
  function r(p) {
    var u, c, f;
    const d = (`${p}`.match(/\-/g) || []).length % 2 == 1;
    p = (function(S) {
      if (S = (function(m) {
        return m.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (w) => (15 & w.charCodeAt(0)).toString());
      })(`${S}`), isNaN(S) && (S = S.split(e.props.unitParts.decimal).map((m) => m.replace(/[^0-9]/g, "")).join(".")), S = S.replace(/[^0-9\.]/g, ""), S.includes(".")) {
        const m = S.split(".");
        e.props.decimals === 0 ? S = m[0] : e.props.type === "currency" && (m[1] = m[1].padEnd(l(), "0").slice(0, l()), S = m.join("."));
      }
      return S;
    })(p);
    const g = {};
    o() !== "unit" && o() !== "decimal" || (g.minimumFractionDigits = p.includes(".") ? 1 : 0), g.maximumFractionDigits = e.props.type === "currency" ? l() : e.props.decimals, e.props.minDecimals && (g.minimumFractionDigits = e.props.minDecimals, p && !p.includes(".") && (p += ".".padEnd(e.props.minDecimals + 1, "0"))), g.maximumFractionDigits === 0 && p.includes(".") && (p = p.split(".")[0]);
    let v = "";
    if (!isNaN(p) && p.trim() !== "" && (p = d ? `-${p}` : p, e.props.max && !isNaN(e.props.max) && (p = Number(p) > e.props.max ? `${e.props.max}` : p), e.props.min && !isNaN(e.props.min) && (p = Number(p) < e.props.min ? `${e.props.min}` : p), p.includes(".") && e.props.type === "currency" ? p = p.split(".")[0].padStart(1, "0") + "." + ((u = p.split(".")[1]) !== null && u !== void 0 ? u : "0") : e.props.type === "currency" && (g.maximumFractionDigits = (c = g.minimumFractionDigits) !== null && c !== void 0 ? c : 0), v = a(e.props.displayLocale, g).format(p), e.props.type === "unit" && p[p.length - 1] === ".")) {
      const S = v.lastIndexOf(e.props.unitParts.decimal);
      v = v.slice(0, S + 1) + v.slice(S + 2), p = p.slice(0, -1);
    }
    let $, h = p.split(".");
    e.props.type === "currency" && (h = h[0] + ((f = h[1]) !== null && f !== void 0 ? f : "").padEnd(l(), "0"), h.length > 1 && (h = h.replace(/^0+/, ""), h = p !== "" && h === "" ? "0" : h)), e.props.valueStore = { number: p, integer: h, string: v }, t = !0, e.props.valueStore && ($ = e.props.valueStore.hasOwnProperty(e.props.valueFormat) ? e.props.valueStore[e.props.valueFormat] : e.props.valueStore.number), e.input($ === "" ? void 0 : $).then(() => (t = !1, Promise.resolve()));
  }
  function n() {
    Ze(`${e.props.id}`, (p) => {
      var u, c;
      p instanceof HTMLInputElement && (p.value = (c = (u = e.props.valueStore) === null || u === void 0 ? void 0 : u.string) !== null && c !== void 0 ? c : "");
    }, e.props.__root);
  }
  function s() {
    var p, u;
    const c = (p = e.props.__root) === null || p === void 0 ? void 0 : p.querySelector(`#${e.props.id}_inner input`);
    return (u = c?.value) !== null && u !== void 0 ? u : "";
  }
  function o() {
    return e.props.currency ? "currency" : e.props.unit ? "unit" : "decimal";
  }
  function a(p, u = {}) {
    const c = o(), f = Object.assign({}, { style: c, roundingMode: "trunc" }, u);
    return e.props.type === "unit" && (f.unitDisplay = e.props.unitDisplay), e.props.type === "currency" && (f.currencyDisplay = e.props.currencyDisplay), f[c] = e.props[c], new Intl.NumberFormat(p, f);
  }
  function i(p, u) {
    var c, f, d, g, v;
    const $ = (c = e.props.__root) === null || c === void 0 ? void 0 : c.querySelector(`#${e.props.id}_inner input`);
    if (!$) return;
    const h = ((d = (f = e.props.unitParts.unit) === null || f === void 0 ? void 0 : f.length) !== null && d !== void 0 ? d : 0) + ((v = (g = e.props.unitParts.literal) === null || g === void 0 ? void 0 : g.length) !== null && v !== void 0 ? v : 0);
    e.props.unitParts.unitLeft ? p = Math.max(p, h) : (p = Math.min(p, s().length - h), u === "insertText" && p === 0 && (p = 1)), $.setSelectionRange(p, p);
  }
  function l() {
    return e.props.decimals !== void 0 ? e.props.decimals : e.props.minDecimals !== void 0 && e.props.minDecimals > e.props.unitParts.fractionLength ? e.props.minDecimals : e.props.unitParts.fractionLength;
  }
  e.props.valueStore = null, e.on("input", ({ payload: p }) => {
    t || (r(p), n());
  }), e.context && (e.context.handlers.init = (p = null) => {
    var u;
    e.props.skipInit ? e.props.skipInit = !1 : (function() {
      var f, d, g, v, $, h, S;
      e.props.skipInit = !0;
      const m = a(e.props.displayLocale).formatToParts(1234567812345678e-8);
      e.props.unitParts = { decimal: (f = m.find((w) => w.type == "decimal")) === null || f === void 0 ? void 0 : f.value, group: (d = m.find((w) => w.type == "group")) === null || d === void 0 ? void 0 : d.value, unit: (g = m.find((w) => ["unit", "currency"].includes(w.type))) === null || g === void 0 ? void 0 : g.value, unitLeft: ["unit", "currency"].includes(m[0].type), literal: ($ = (v = m.find((w) => w.type == "literal")) === null || v === void 0 ? void 0 : v.value) !== null && $ !== void 0 ? $ : "", fractionLength: (S = (h = m.find((w) => w.type == "fraction")) === null || h === void 0 ? void 0 : h.value.length) !== null && S !== void 0 ? S : 0 };
    })();
    let c = (u = p ?? e._value) !== null && u !== void 0 ? u : "";
    e.props.valueStore ? c = e.props.valueStore.number : e.props.valueFormat === "integer" && (c = (function(f) {
      var d;
      return (parseFloat(`${f}`) / Math.pow(10, (d = l()) !== null && d !== void 0 ? d : 0)).toString().replace(".", l());
    })(`${c ?? ""}`)), e.props.type === "unit" && e.props.valueUnit && e.props.unit && e.props.valueUnit !== e.props.unit && e.hook.input((f, d) => {
      const g = (function(v, $, h) {
        if ($a[v] && $a[v][h]) return $ * $a[v][h];
        if (ba[v] && ba[v][h]) return ba[v][h]($);
        if (_a[v] && _a[v][h]) return $ * _a[v][h];
        if (xa[v] && xa[v][h]) return $ * xa[v][h];
        if (wa[v] && wa[v][h]) return $ * wa[v][h];
        if (ka[v] && ka[v][h]) return $ * ka[v][h];
        if (Sa[v] && Sa[v][h]) return $ * Sa[v][h];
        throw new Error("Conversion not supported");
      })(e.props.unit, f, e.props.valueUnit);
      return isNaN(g) ? d(f) : d(+g.toFixed(Number(e.props.valueDecimals) || 2));
    }), r(c), n();
  }, e.context.handlers.handleBeforeInput = (p) => {
    var u, c, f, d, g, v, $, h, S;
    if (!e.props.inExecCommand && p.inputType !== "insertLineBreak" && (p.preventDefault(), p.stopPropagation(), p.target instanceof HTMLInputElement)) {
      const m = p.target, w = (u = p.data) !== null && u !== void 0 ? u : "", C = (c = p.target.value) !== null && c !== void 0 ? c : "", x = (f = p.target.selectionStart) !== null && f !== void 0 ? f : 0, D = (d = p.target.selectionEnd) !== null && d !== void 0 ? d : 0, _ = D - x, A = C.indexOf(e.props.unitParts.decimal);
      let k = ((g = p.target.selectionStart) !== null && g !== void 0 ? g : 0) + (p.data ? 0 : -1), b = C, y = 1;
      if (C.includes(e.props.unitParts.decimal) && w === e.props.unitParts.decimal) return w === e.props.unitParts.decimal && (k = b.indexOf(e.props.unitParts.decimal) + 1), void i(k);
      if (!(e.props.min === null || e.props.min < 0 || e.props.max < 0) && w === "-" || w.match(/[a-zA-Z]/) || w === e.props.unitParts.decimal && e.props.decimals === 0) return;
      if (p.inputType === "deleteByCut" && _ > 0 && (b = b.slice(0, x) + b.slice(D), k = D), p.inputType === "insertFromPaste") {
        const I = (v = p.data) !== null && v !== void 0 ? v : "";
        b = b.slice(0, x) + I + b.slice(D);
      }
      if (p.inputType === "deleteContentBackward" && C[x - 1] === e.props.unitParts.group ? (y += 1, k -= 1) : p.inputType === "deleteContentForward" && C[x] === e.props.unitParts.group && (y += 1, k += 1), A !== -1 && k > A && p.inputType === "insertText" ? b = (function(I, B, te) {
        return I.substring(0, B) + te + I.substring(B + te.length);
      })(b, k, ($ = p.data) !== null && $ !== void 0 ? $ : "0") : p.inputType === "insertText" ? (k = D, b = b.slice(0, x) + p.data + b.slice(D)) : p.inputType === "deleteContentForward" ? (k += 2, b = _ === 0 ? b.slice(0, x) + b.slice(D + y) : b.slice(0, x) + b.slice(D)) : p.inputType === "deleteContentBackward" && (k += 1, _ === 0 ? b = b.slice(0, Math.max(x - y, 0)) + b.slice(D) : _ > 0 && (b = b.slice(0, x) + b.slice(D))), p.inputType === "deleteContentForward" && C[x] === e.props.unitParts.decimal) {
        const I = b.slice(x - 1);
        b = b.slice(0, x), I.includes(e.props.unitParts.unit) && (b += " " + e.props.unitParts.unit);
      } else if (p.inputType === "deleteContentBackward" && C[x - 1] === e.props.unitParts.decimal) {
        const I = b.slice(x - 1);
        b = b.slice(0, x - 1), I.includes(e.props.unitParts.unit) && (b += " " + e.props.unitParts.unit);
      }
      if (r(b), b = ((h = e.props.valueStore) === null || h === void 0 ? void 0 : h.string) || ((S = e.props.valueStore) === null || S === void 0 ? void 0 : S.number) || "", k = b.length - C.length + k, b.length === C.length && k > A && (k += p.inputType.includes("delete") ? -1 : 1), m.setSelectionRange(0, C.length), e.props.inExecCommand = !0, document.execCommand("insertText", void 0, b), e.props.inExecCommand = !1, w === e.props.unitParts.decimal ? k = b.indexOf(e.props.unitParts.decimal) + 1 : C.includes(e.props.unitParts.decimal) && !b.includes(e.props.unitParts.decimal) && (k = b.length), p.inputType === "insertText" && e.props.minDecimals && (!e.value || x === 0 && D === C.length || A === -1 && e.props.minDecimals && C)) {
        let I = 0;
        I = e.props.unitParts.unit ? e.props.unitParts.unit.length + 1 : 0, k -= e.props.minDecimals, e.props.unitParts.unitLeft ? k -= I - 1 : k -= I + 1;
      }
      i(Math.max(0, k), p.inputType);
    }
  }, e.context.handlers.handleInput = (p) => {
    e.emit("dom-input-event", p), p.target instanceof HTMLInputElement && (e.props.inputText = p.target.value, r(p.target.value));
  }, e.context.handlers.handleKeyDown = (p) => {
    var u, c;
    if (p.target instanceof HTMLInputElement && (p.key === "ArrowUp" || p.key === "ArrowDown")) {
      const f = p.key === "ArrowUp" ? 1 * e.props.step : -1 * e.props.step;
      r((function(d, g) {
        var v, $, h, S;
        const m = `${d}`.split("."), w = `${g}`.split(".");
        let C = (v = m[0]) !== null && v !== void 0 ? v : "0", x = ($ = w[0]) !== null && $ !== void 0 ? $ : "0";
        const D = (h = m[1]) !== null && h !== void 0 ? h : "", _ = (S = w[1]) !== null && S !== void 0 ? S : "", A = Math.max(D.length, _.length);
        A > 0 && (C += D.padEnd(A, "0"), x += _.padEnd(A, "0"));
        const k = BigInt(BigInt(C) + BigInt(x)).toString();
        return A > 0 ? k.slice(0, -1 * A) + "." + k.slice(-1 * A) : k;
      })((c = (u = e.props.valueStore) === null || u === void 0 ? void 0 : u.number) !== null && c !== void 0 ? c : 0, f)), n(), setTimeout(() => {
        i(s().length);
      }, 1);
    }
  });
}
const RC = { schema: /* @__PURE__ */ TC(/* @__PURE__ */ EC(/* @__PURE__ */ IC("$label"), /* @__PURE__ */ OC(/* @__PURE__ */ iu("prefix"), /* @__PURE__ */ LC(), /* @__PURE__ */ FC(), /* @__PURE__ */ MC(), /* @__PURE__ */ iu("suffix"))), /* @__PURE__ */ PC("$help"), /* @__PURE__ */ VC(/* @__PURE__ */ NC("$message.value"))), type: "input", family: "text", features: [function(e) {
  var t, r, n, s, o, a;
  const i = ["unit", "decimals", "minDecimals", "displayLocale", "min", "max", "step", "valueFormat", "unitDisplay", "placeholder", "unitParts", "valueUnit", "valueDecimals"];
  e.addProps(i), (t = (s = e.props).displayLocale) !== null && t !== void 0 || (s.displayLocale = e.props.locale || "en-US"), e.props.unitDisplay = e.props.unitDisplay || "short", e.props.decimals === "false" || e.props.decimals === !1 ? e.props.decimals = 0 : e.props.decimals !== void 0 ? e.props.decimals = Number(e.props.decimals) : e.props.decimals = 2, e.props.minDecimals = e.props.minDecimals !== void 0 ? Number(e.props.minDecimals) : void 0, e.props.min !== void 0 && (e.props.min = Number(e.props.min)), e.props.max !== void 0 && (e.props.max = Number(e.props.max)), (r = (o = e.props).step) !== null && r !== void 0 || (o.step = 1), (n = (a = e.props).valueFormat) !== null && n !== void 0 || (a.valueFormat = "number"), ["string", "number"].indexOf(e.props.valueFormat) === -1 && (e.props.valueFormat = "number"), e.on("created", () => {
    e.context && (e.context.handlers.unitBlur = (l) => {
      if (!(l.target instanceof HTMLInputElement)) return;
      let p = l.target.value;
      (function(u) {
        u = u.trim();
        const c = /\d+\,\s*%?$/;
        return /\d+\.\s*%?$/.test(u) || c.test(u);
      })(p) && (p = p.replace(e.props.unitParts.decimal, ""), l.target.value = p), e.context && e.context.handlers.blur(l);
    }, Qd(e), e.context.handlers.init(), i.forEach((l) => {
      e.on(`prop:${l}`, () => {
        var p;
        (p = e?.context) === null || p === void 0 || p.handlers.init();
      });
    }));
  });
}] }, ef = /* @__PURE__ */ lt("cr"), { outer: BC, inner: jC, wrapper: HC, label: ZC, prefix: WC, suffix: KC, help: UC, messages: zC, message: YC, icon: lu } = /* @__PURE__ */ pt(ef), qC = ef("input", () => ({ $el: "input", bind: "$attrs", attrs: { name: "$node.name", autocomplete: "$attrs.autocomplete || off", id: "$id", onChange: "$handlers.handleInput", onBlur: "$handlers.blur", onInput: "$handlers.handleInput", onKeydown: "$handlers.handleKeyDown", onBeforeinput: "$handlers.handleBeforeInput", readonly: "$readonly", disabled: "$disabled", placeholder: "$placeholder || $unitParts.unit", inputmode: "decimal", "data-unit": "$unit", "data-currency": "$currency", "data-display-locale": "$displayLocale", "data-value-locale": "$valueLocale", "data-decimals": "$decimals", "data-trailing": "$trailingZeros", "data-numeric-value": "$_numericValue", "data-align": "$_valueAlignAuto", "aria-required": "$state.required || undefined" } })), GC = { schema: /* @__PURE__ */ BC(/* @__PURE__ */ HC(/* @__PURE__ */ ZC("$label"), /* @__PURE__ */ jC(/* @__PURE__ */ lu("prefix"), /* @__PURE__ */ WC(), /* @__PURE__ */ qC(), /* @__PURE__ */ KC(), /* @__PURE__ */ lu("suffix"))), /* @__PURE__ */ UC("$help"), /* @__PURE__ */ zC(/* @__PURE__ */ YC("$message.value"))), type: "input", family: "text", props: ["options"], features: [function(e) {
  var t, r, n, s, o, a, i, l;
  const p = ["currency", "decimals", "maxDecimals", "minDecimals", "displayLocale", "min", "max", "step", "valueFormat", "currencyDisplay", "placeholder", "unitParts"];
  e.addProps(p), e.addProps(["inputText"]), (t = (o = e.props).displayLocale) !== null && t !== void 0 || (o.displayLocale = e.props.locale || "en-US"), (r = (a = e.props).currency) !== null && r !== void 0 || (a.currency = e.props.currency || "USD"), e.props.decimals === "false" || e.props.decimals === !1 ? e.props.decimals = 0 : e.props.decimals !== void 0 && (e.props.decimals = Number(e.props.decimals)), e.props.minDecimals = e.props.minDecimals !== void 0 ? Number(e.props.minDecimals) : void 0, e.props.min !== void 0 && (e.props.min = Number(e.props.min)), e.props.max !== void 0 && (e.props.max = Number(e.props.max)), (n = (i = e.props).step) !== null && n !== void 0 || (i.step = 1), (s = (l = e.props).valueFormat) !== null && s !== void 0 || (l.valueFormat = "number"), ["string", "number", "integer"].indexOf(e.props.valueFormat) === -1 && (e.props.valueFormat = "number"), e.on("created", () => {
    e.context && (Qd(e), e.context.handlers.init(), p.forEach((u) => {
      e.on(`prop:${u}`, () => {
        var c;
        (c = e?.context) === null || c === void 0 || c.handlers.init();
      });
    }));
  });
}] };
var XC = /* @__PURE__ */ Object.freeze({ __proto__: null, autocomplete: vw, colorpicker: gC, currency: GC, datepicker: D1, dropdown: A_, mask: fk, rating: Xx, repeater: bx, slider: TS, taglist: Y1, toggle: U_, togglebuttons: AC, transferlist: tS, unit: RC });
const JC = typeof window < "u" ? setInterval : () => 0, pu = /* @__PURE__ */ new WeakSet();
function QC(e, t = {}) {
  const r = e;
  try {
    let n = function(s) {
      pu.has(s) && (function(a, i) {
        Kn[a] ? Kn[a].add(i) : Kn[a] = /* @__PURE__ */ new Set([i]);
      })(e, (a) => {
        s.props.definition && (s.props.definition.schema = a || [{ $el: Zt(13919), children: `${Zt(451228594)}${Zt(32863693)}` }]), s.emit("schema"), setTimeout(() => s.destroy(), 1e3);
      });
    };
    return (function(s) {
      const o = () => {
        throw new Error(`InvalidFormKitKey ${s}`);
      };
      if (!/^fk-/i.test(s)) return o();
      const a = s.substring(3);
      if (!ib.test(a)) return o();
      const i = parseInt(a, 16).toString(), l = Number(i[0]) < 6 ? Number(i[0]) : 6, p = i.substring(l, l + (i.length - 6)), u = i.substring(0, l) + i.substring(l + p.length), c = u.slice(0, 2), f = `${u[u.length - 1]}${u[0]}`;
      Number(p) !== Math.floor(Number(u) * Number(c) / Number(f)) && o();
    })(r), n.library = (s) => {
      if (s.props.type in t) {
        const { schema: o, ...a } = t[s.props.type];
        pu.add(s), s.define({ ...a, schema: o(e) });
      }
      JC(() => Io.has(e) && s.emit("schema"), 4e3);
    }, n;
  } catch (n) {
    throw n instanceof Error && (function(s) {
      if (s.message === "FormKitNoKey") throw new Error("A FormKit API key is required, please visit https://formkit.com/pro");
    })(n), n;
  }
}
const eD = QC("fk-2e7e557c8", XC), rD = async (e) => {
  let t, r = !1;
  return {
    set: async (n) => {
      const s = document.getElementById(e.f.name("vue-root"));
      return r || (t = vf(lm, {
        schema: n.data?.curr?.data,
        _p: e,
        _$p: n
      }), t.use(
        R0,
        _i({
          plugins: [eD]
        })
      ), t.mount(s), r = !0), {
        r: "",
        style: "",
        evt: {}
      };
    }
  };
};
export {
  rD as hydrator,
  rD as index
};
