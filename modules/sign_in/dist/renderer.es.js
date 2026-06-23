import "./style.es.js";
const { ssrUtils: C, initDirectivesForSSR: G, createApp: z, createVNode: H, ssrContextKey: E, warn: y, Fragment: W, Static: j, Comment: q, Text: I, mergeProps: U, defineComponent: v, openBlock: K, createElementBlock: Z, createElementVNode: J, toDisplayString: Q, createSSRApp: X } = window.Vue;
// @__NO_SIDE_EFFECTS__
function S(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const R = () => {
}, Y = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), T = Array.isArray, h = (e) => typeof e == "function", p = (e) => typeof e == "string", $ = (e) => e !== null && typeof e == "object", _ = (e) => ($(e) || h(e)) && h(e.then) && h(e.catch), ee = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, te = /\B([A-Z])/g, re = ee(
  (e) => e.replace(te, "-$1").toLowerCase()
);
let k;
const ne = () => k || (k = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function N(e) {
  if (T(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = p(n) ? le(n) : N(n);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (p(e) || $(e))
    return e;
}
const se = /;(?![^(]*\))/g, oe = /:([^]+)/, ie = /\/\*[^]*?\*\//g;
function le(e) {
  const t = {};
  return e.replace(ie, "").split(se).forEach((r) => {
    if (r) {
      const n = r.split(oe);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ce(e) {
  if (!e) return "";
  if (p(e)) return e;
  let t = "";
  for (const r in e) {
    const n = e[r];
    if (p(n) || typeof n == "number") {
      const s = r.startsWith("--") ? r : re(r);
      t += `${s}:${n};`;
    }
  }
  return t;
}
function M(e) {
  let t = "";
  if (p(e))
    t = e;
  else if (T(e))
    for (let r = 0; r < e.length; r++) {
      const n = M(e[r]);
      n && (t += n + " ");
    }
  else if ($(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const ae = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fe = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", ue = /* @__PURE__ */ S(ae), pe = /* @__PURE__ */ S(fe), de = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", me = /* @__PURE__ */ S(
  de + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function he(e) {
  return !!e || e === "";
}
const ge = /[>/="'\u0009\u000a\u000c\u0020]/, A = {};
function ye(e) {
  if (A.hasOwnProperty(e))
    return A[e];
  const t = ge.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), A[e] = !t;
}
const _e = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function be(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const Ce = /["'&<>]/;
function d(e) {
  const t = "" + e, r = Ce.exec(t);
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
const Se = /^-?>|<!--|-->|--!>|<!-$/g;
function Te(e) {
  return e.replace(Se, "");
}
function $e(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
const Ae = /* @__PURE__ */ S(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Re(e, t) {
  let r = "";
  for (let n in e) {
    if (Ae(n) || Y(n) || t === "textarea" && n === "value" || // force as property (not rendered in SSR)
    n.startsWith("."))
      continue;
    const s = e[n];
    n.startsWith("^") && (n = n.slice(1)), n === "class" ? r += ` class="${ke(s)}"` : n === "style" ? r += ` style="${we(s)}"` : n === "className" ? s != null && (r += ` class="${d(String(s))}"`) : r += Ve(n, s, t);
  }
  return r;
}
function Ve(e, t, r) {
  if (!be(t))
    return "";
  const n = r && (r.indexOf("-") > 0 || ue(r)) ? e : _e[e] || e.toLowerCase();
  return me(n) ? he(t) ? ` ${n}` : "" : ye(n) ? t === "" ? ` ${n}` : ` ${n}="${d(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${n}`
  ), "");
}
function ke(e) {
  return d(M(e));
}
function we(e) {
  if (!e)
    return "";
  if (p(e))
    return d(e);
  const t = N(xe(e));
  return d(ce(t));
}
function xe(e) {
  if (!T(e) && $(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = $e(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
const { ensureValidVNode: qe } = C;
function Be(e, t, r, n, s) {
  e("<!--teleport start-->");
  const o = s.appContext.provides[E], i = o.__teleportBuffers || (o.__teleportBuffers = {}), l = i[r] || (i[r] = []), a = l.length;
  let u;
  if (n)
    t(e), u = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: f, push: c } = O();
    c("<!--teleport start anchor-->"), t(c), c("<!--teleport anchor-->"), u = f();
  }
  l.splice(a, 0, u), e("<!--teleport end-->");
}
{
  const e = ne(), t = (r, n) => {
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
function Ee(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Ne,
  setCurrentRenderingInstance: w,
  setupComponent: Me,
  renderComponentRoot: x,
  normalizeVNode: Oe,
  pushWarningContext: Ie,
  popWarningContext: Ue
} = C;
function O() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const n = p(r);
      if (e && n) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = n, (_(r) || T(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function D(e, t = null, r) {
  const n = e.component = Ne(
    e,
    t,
    null
  ), s = Me(
    n,
    !0
    /* isSSR */
  ), o = _(s);
  let i = n.sp;
  return o || i ? Promise.resolve(s).then(() => {
    if (o && (i = n.sp), i)
      return Promise.all(
        i.map((a) => a.call(n.proxy))
      );
  }).catch(R).then(() => B(n, r)) : B(n, r);
}
function B(e, t) {
  const r = e.type, { getBuffer: n, push: s } = O();
  if (h(r)) {
    let o = x(e);
    if (!r.props)
      for (const i in e.attrs)
        i.startsWith("data-v-") && ((o.props || (o.props = {}))[i] = "");
    b(s, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === R) && !e.ssrRender && !r.ssrRender && p(r.template) && (r.ssrRender = Ee(r.template));
    const o = e.ssrRender || r.ssrRender;
    if (o) {
      let i = e.inheritAttrs !== !1 ? e.attrs : void 0, l = !1, a = e;
      for (; ; ) {
        const f = a.vnode.scopeId;
        f && (l || (i = { ...i }, l = !0), i[f] = "");
        const c = a.parent;
        if (c && c.subTree && c.subTree === a.vnode)
          a = c;
        else
          break;
      }
      if (t) {
        l || (i = { ...i });
        const f = t.trim().split(" ");
        for (let c = 0; c < f.length; c++)
          i[f[c]] = "";
      }
      const u = w(e);
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
        w(u);
      }
    } else if (e.render && e.render !== R)
      b(
        s,
        e.subTree = x(e),
        e,
        t
      );
    else {
      const i = r.name || r.__file || "<Anonymous>";
      y(`Component ${i} is missing template or render function.`), s("<!---->");
    }
  }
  return n();
}
function b(e, t, r, n) {
  const { type: s, shapeFlag: o, children: i, dirs: l, props: a } = t;
  switch (l && (t.props = Fe(t, a, l)), s) {
    case I:
      e(d(i));
      break;
    case q:
      e(
        i ? `<!--${Te(i)}-->` : "<!---->"
      );
      break;
    case j:
      e(i);
      break;
    case W:
      t.slotScopeIds && (n = (n ? n + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), V(
        e,
        i,
        r,
        n
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? De(e, t, r, n) : o & 6 ? e(D(t, r, n)) : o & 64 ? Le(e, t, r, n) : o & 128 ? b(e, t.ssContent, r, n) : y(
        "[@vue/server-renderer] Invalid VNode type:",
        s,
        `(${typeof s})`
      );
  }
}
function V(e, t, r, n) {
  for (let s = 0; s < t.length; s++)
    b(e, Oe(t[s]), r, n);
}
function De(e, t, r, n) {
  const s = t.type;
  let { props: o, children: i, shapeFlag: l, scopeId: a } = t, u = `<${s}`;
  o && (u += Re(o, s)), a && (u += ` ${a}`);
  let f = r, c = t;
  for (; f && c === f.subTree; )
    c = f.vnode, c.scopeId && (u += ` ${c.scopeId}`), f = f.parent;
  if (n && (u += ` ${n}`), e(u + ">"), !pe(s)) {
    let m = !1;
    o && (o.innerHTML ? (m = !0, e(o.innerHTML)) : o.textContent ? (m = !0, e(d(o.textContent))) : s === "textarea" && o.value && (m = !0, e(d(o.value)))), m || (l & 8 ? e(d(i)) : l & 16 && V(
      e,
      i,
      r,
      n
    )), e(`</${s}>`);
  }
}
function Fe(e, t, r) {
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
  return U(t || {}, ...n);
}
function Le(e, t, r, n) {
  const s = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!s)
    return o || y("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!p(s))
    return y(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  Be(
    e,
    (i) => {
      V(
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
const { isVNode: Pe } = C;
function g(e, t, r) {
  if (!e.hasAsync)
    return t + L(e);
  let n = t;
  for (let s = r; s < e.length; s += 1) {
    const o = e[s];
    if (p(o)) {
      n += o;
      continue;
    }
    if (_(o))
      return o.then((l) => (e[s] = l, g(e, n, s)));
    const i = g(o, n, 0);
    if (_(i))
      return i.then((l) => (e[s] = l, g(e, "", s)));
    n = i;
  }
  return n;
}
function F(e) {
  return g(e, "", 0);
}
function L(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    p(n) ? t += n : t += L(n);
  }
  return t;
}
async function P(e, t = {}) {
  if (Pe(e))
    return P(z({ render: () => e }), t);
  const r = H(e._component, e._props);
  r.appContext = e._context, e.provide(E, t);
  const n = await D(r), s = await F(n);
  if (await Ge(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return s;
}
async function Ge(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await F(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
const { isVNode: ve } = C;
G();
const ze = ["id"], He = /* @__PURE__ */ v({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, r) => (K(), Z("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      J("p", null, Q(e._$p.data.curr.data.data), 1)
    ], 8, ze));
  }
}), Ke = async (e) => ({
  set: async (t, r) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const s = X(He, {
      _p: e,
      _$p: t,
      _$cb: r
    });
    return {
      r: `
                 <div>
                    ${await P(s)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let l = "";
        return l = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, l;
      })()
    };
  }
});
export {
  Ke as index,
  Ke as renderer
};
