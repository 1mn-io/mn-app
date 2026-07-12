import "./style.es.js";
const { ssrUtils: A, initDirectivesForSSR: z, createApp: H, createVNode: W, ssrContextKey: M, warn: C, Fragment: q, Static: U, Comment: v, Text: K, mergeProps: Z, defineComponent: J, openBlock: Q, createElementBlock: X, createElementVNode: Y, toDisplayString: ee, createSSRApp: te } = window.Vue;
// @__NO_SIDE_EFFECTS__
function R(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const k = () => {
}, re = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ne = Object.prototype.hasOwnProperty, se = (e, t) => ne.call(e, t), y = Array.isArray, b = (e) => typeof e == "function", u = (e) => typeof e == "string", $ = (e) => e !== null && typeof e == "object", g = (e) => ($(e) || b(e)) && b(e.then) && b(e.catch), oe = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, ie = /\B([A-Z])/g, le = oe(
  (e) => e.replace(ie, "-$1").toLowerCase()
);
let B;
const ce = () => B || (B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function L(e) {
  if (y(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = u(n) ? ue(n) : L(n);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (u(e) || $(e))
    return e;
}
const ae = /;(?![^(]*\))/g, fe = /:([^]+)/, pe = /\/\*[^]*?\*\//g;
function ue(e) {
  const t = {};
  return e.replace(pe, "").split(ae).forEach((r) => {
    if (r) {
      const n = r.split(fe);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function de(e) {
  if (!e) return "";
  if (u(e)) return e;
  let t = "";
  for (const r in e) {
    const n = e[r];
    if (u(n) || typeof n == "number") {
      const s = r.startsWith("--") ? r : le(r);
      t += `${s}:${n};`;
    }
  }
  return t;
}
function P(e) {
  let t = "";
  if (u(e))
    t = e;
  else if (y(e))
    for (let r = 0; r < e.length; r++) {
      const n = P(e[r]);
      n && (t += n + " ");
    }
  else if ($(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const he = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", me = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", ge = /* @__PURE__ */ R(he), ye = /* @__PURE__ */ R(me), _e = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", be = /* @__PURE__ */ R(
  _e + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function Se(e) {
  return !!e || e === "";
}
const Ce = /[>/="'\u0009\u000a\u000c\u0020]/, w = {};
function Te(e) {
  if (w.hasOwnProperty(e))
    return w[e];
  const t = Ce.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), w[e] = !t;
}
const Ae = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function Re(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const $e = /["'&<>]/;
function h(e) {
  const t = "" + e, r = $e.exec(t);
  if (!r)
    return t;
  let n = "", s, o, i = 0;
  for (o = r.index; o < t.length; o++) {
    switch (t.charCodeAt(o)) {
      case 34:
        s = "&quot;";
        break;
      case 38:
        s = "&amp;";
        break;
      case 39:
        s = "&#39;";
        break;
      case 60:
        s = "&lt;";
        break;
      case 62:
        s = "&gt;";
        break;
      default:
        continue;
    }
    i !== o && (n += t.slice(i, o)), i = o + 1, n += s;
  }
  return i !== o ? n + t.slice(i, o) : n;
}
const Ve = /^-?>|<!--|-->|--!>|<!-$/g;
function we(e) {
  return e.replace(Ve, "");
}
function ke(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
const xe = /* @__PURE__ */ R(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Be(e, t) {
  let r = "";
  for (let n in e) {
    if (xe(n) || re(n) || t === "textarea" && n === "value" || // force as property (not rendered in SSR)
    n.startsWith("."))
      continue;
    const s = e[n];
    n.startsWith("^") && (n = n.slice(1)), n === "class" ? r += ` class="${Ne(s)}"` : n === "style" ? r += ` style="${Oe(s)}"` : n === "className" ? s != null && (r += ` class="${h(String(s))}"`) : r += Ee(n, s, t);
  }
  return r;
}
function Ee(e, t, r) {
  if (!Re(t))
    return "";
  const n = r && (r.indexOf("-") > 0 || ge(r)) ? e : Ae[e] || e.toLowerCase();
  return be(n) ? Se(t) ? ` ${n}` : "" : Te(n) ? t === "" ? ` ${n}` : ` ${n}="${h(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${n}`
  ), "");
}
function Ne(e) {
  return h(P(e));
}
function Oe(e) {
  if (!e)
    return "";
  if (u(e))
    return h(e);
  const t = L(Me(e));
  return h(de(t));
}
function Me(e) {
  if (!y(e) && $(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = ke(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
const { ensureValidVNode: Ze } = A;
function Le(e, t, r, n, s) {
  e("<!--teleport start-->");
  const o = s.appContext.provides[M], i = o.__teleportBuffers || (o.__teleportBuffers = {}), l = i[r] || (i[r] = []), a = l.length;
  let p;
  if (n)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: c } = D();
    c("<!--teleport start anchor-->"), t(c), c("<!--teleport anchor-->"), p = d();
  }
  l.splice(a, 0, p), (g(p) || y(p) && p.hasAsync) && (l.hasAsync = !0), e("<!--teleport end-->");
}
{
  const e = ce(), t = (r, n) => {
    let s;
    return (s = e[r]) || (s = e[r] = []), s.push(n), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => r
  ), t(
    "__VUE_SSR_SETTERS__",
    (r) => r
  );
}
function Pe(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: De,
  setCurrentRenderingInstance: E,
  setupComponent: Fe,
  renderComponentRoot: N,
  normalizeVNode: Ge,
  pushWarningContext: Je,
  popWarningContext: Qe
} = A;
function D() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const n = u(r);
      if (e && n) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = n, (g(r) || y(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function F(e, t = null, r) {
  const n = e.component = De(
    e,
    t,
    null
  ), s = Fe(
    n,
    !0
    /* isSSR */
  ), o = g(s);
  let i = n.sp;
  return o || i ? Promise.resolve(s).then(() => {
    if (o && (i = n.sp), i)
      return Promise.all(
        i.map((a) => a.call(n.proxy))
      );
  }).catch(k).then(() => O(n, r)) : O(n, r);
}
function O(e, t) {
  const r = e.type, { getBuffer: n, push: s } = D();
  if (b(r)) {
    let o = N(e);
    if (!r.props)
      for (const i in e.attrs)
        i.startsWith("data-v-") && ((o.props || (o.props = {}))[i] = "");
    T(s, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === k) && !e.ssrRender && !r.ssrRender && u(r.template) && (r.ssrRender = Pe(r.template));
    const o = e.ssrRender || r.ssrRender;
    if (o) {
      let i = e.inheritAttrs !== !1 ? e.attrs : void 0, l = !1, a = e;
      for (; ; ) {
        const d = a.vnode.scopeId;
        d && (l || (i = { ...i }, l = !0), i[d] = "");
        const c = a.parent;
        if (c && c.subTree && c.subTree === a.vnode)
          a = c;
        else
          break;
      }
      if (t) {
        l || (i = { ...i });
        const d = t.trim().split(" ");
        for (let c = 0; c < d.length; c++)
          i[d[c]] = "";
      }
      const p = E(e);
      try {
        o(
          e.proxy,
          s,
          e,
          i,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        E(p);
      }
    } else if (e.render && e.render !== k)
      T(
        s,
        e.subTree = N(e),
        e,
        t
      );
    else {
      const i = r.name || r.__file || "<Anonymous>";
      C(`Component ${i} is missing template or render function.`), s("<!---->");
    }
  }
  return n();
}
function T(e, t, r, n) {
  const { type: s, shapeFlag: o, children: i, dirs: l, props: a } = t;
  switch (l && (t.props = je(t, a, l)), s) {
    case K:
      e(h(i));
      break;
    case v:
      e(
        i ? `<!--${we(i)}-->` : "<!---->"
      );
      break;
    case U:
      e(i);
      break;
    case q:
      t.slotScopeIds && (n = (n ? n + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), x(
        e,
        i,
        r,
        n
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? Ie(e, t, r, n) : o & 6 ? e(F(t, r, n)) : o & 64 ? ze(e, t, r, n) : o & 128 ? T(e, t.ssContent, r, n) : C(
        "[@vue/server-renderer] Invalid VNode type:",
        s,
        `(${typeof s})`
      );
  }
}
function x(e, t, r, n) {
  for (let s = 0; s < t.length; s++)
    T(e, Ge(t[s]), r, n);
}
function Ie(e, t, r, n) {
  const s = t.type;
  let { props: o, children: i, shapeFlag: l, scopeId: a } = t, p = `<${s}`;
  o && (p += Be(o, s));
  const d = [], c = (f) => {
    f && (!o || !se(o, f)) && !d.includes(f) && (p += ` ${f}`, d.push(f));
  };
  a && c(a);
  let m = r, _ = t;
  for (; m && _ === m.subTree; )
    _ = m.vnode, _.scopeId && c(_.scopeId), m = m.parent;
  if (n) {
    const f = n.trim().split(" ");
    for (let V = 0; V < f.length; V++)
      c(f[V]);
  }
  if (e(p + ">"), !ye(s)) {
    let f = !1;
    o && (o.innerHTML ? (f = !0, e(o.innerHTML)) : o.textContent ? (f = !0, e(h(o.textContent))) : s === "textarea" && o.value && (f = !0, e(h(o.value)))), f || (l & 8 ? e(h(i)) : l & 16 && x(
      e,
      i,
      r,
      n
    )), e(`</${s}>`);
  }
}
function je(e, t, r) {
  const n = [];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], {
      dir: { getSSRProps: i }
    } = o;
    if (i) {
      const l = i(o, e);
      l && n.push(l);
    }
  }
  return Z(t || {}, ...n);
}
function ze(e, t, r, n) {
  const s = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!s)
    return o || C("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!u(s))
    return C(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  Le(
    e,
    (i) => {
      x(
        i,
        t.children,
        r,
        n
      );
    },
    s,
    o || o === "",
    r
  );
}
const { isVNode: He } = A;
function S(e, t, r) {
  if (!e.hasAsync)
    return t + I(e);
  let n = t;
  for (let s = r; s < e.length; s += 1) {
    const o = e[s];
    if (u(o)) {
      n += o;
      continue;
    }
    if (g(o))
      return o.then((l) => (e[s] = l, S(e, n, s)));
    const i = S(o, n, 0);
    if (g(i))
      return i.then((l) => (e[s] = l, S(e, "", s)));
    n = i;
  }
  return n;
}
function G(e) {
  return S(e, "", 0);
}
function I(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    u(n) ? t += n : t += I(n);
  }
  return t;
}
async function j(e, t = {}) {
  if (He(e))
    return j(H({ render: () => e }), t);
  const r = W(e._component, e._props);
  r.appContext = e._context, e.provide(M, t);
  const n = await F(r), s = await G(n);
  if (await We(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return s;
}
async function We(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await G(
        e.__teleportBuffers[t]
      );
  }
}
const { isVNode: Xe } = A;
z();
const qe = ["id"], Ue = /* @__PURE__ */ J({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, r) => (Q(), X("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      Y("p", null, ee(e._$p.data.curr.data.data), 1)
    ], 8, qe));
  }
}), Ye = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const n = te(Ue, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await j(n)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let i = "";
        return i = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, i;
      })()
    };
  }
});
export {
  Ye as index,
  Ye as renderer
};
