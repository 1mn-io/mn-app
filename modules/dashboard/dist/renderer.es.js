const { ssrUtils: C, initDirectivesForSSR: G, createApp: z, createVNode: H, ssrContextKey: E, warn: y, Fragment: j, Static: q, Comment: v, Text: I, mergeProps: U, defineComponent: W, createSSRApp: K } = window.Vue;
// @__NO_SIDE_EFFECTS__
function S(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const R = () => {
}, Z = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), T = Array.isArray, h = (e) => typeof e == "function", p = (e) => typeof e == "string", A = (e) => e !== null && typeof e == "object", _ = (e) => (A(e) || h(e)) && h(e.then) && h(e.catch), J = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Q = /\B([A-Z])/g, X = J(
  (e) => e.replace(Q, "-$1").toLowerCase()
);
let w;
const Y = () => w || (w = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function N(e) {
  if (T(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = p(n) ? ne(n) : N(n);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (p(e) || A(e))
    return e;
}
const ee = /;(?![^(]*\))/g, te = /:([^]+)/, re = /\/\*[^]*?\*\//g;
function ne(e) {
  const t = {};
  return e.replace(re, "").split(ee).forEach((r) => {
    if (r) {
      const n = r.split(te);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function se(e) {
  if (!e) return "";
  if (p(e)) return e;
  let t = "";
  for (const r in e) {
    const n = e[r];
    if (p(n) || typeof n == "number") {
      const s = r.startsWith("--") ? r : X(r);
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
  else if (A(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const oe = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ie = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", le = /* @__PURE__ */ S(oe), ce = /* @__PURE__ */ S(ie), fe = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ae = /* @__PURE__ */ S(
  fe + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ue(e) {
  return !!e || e === "";
}
const pe = /[>/="'\u0009\u000a\u000c\u0020]/, $ = {};
function de(e) {
  if ($.hasOwnProperty(e))
    return $[e];
  const t = pe.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), $[e] = !t;
}
const me = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function he(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const ge = /["'&<>]/;
function d(e) {
  const t = "" + e, r = ge.exec(t);
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
const ye = /^-?>|<!--|-->|--!>|<!-$/g;
function _e(e) {
  return e.replace(ye, "");
}
function be(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
const Ce = /* @__PURE__ */ S(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Se(e, t) {
  let r = "";
  for (const n in e) {
    if (Ce(n) || Z(n) || t === "textarea" && n === "value")
      continue;
    const s = e[n];
    n === "class" ? r += ` class="${Ae(s)}"` : n === "style" ? r += ` style="${$e(s)}"` : n === "className" ? r += ` class="${String(s)}"` : r += Te(n, s, t);
  }
  return r;
}
function Te(e, t, r) {
  if (!he(t))
    return "";
  const n = r && (r.indexOf("-") > 0 || le(r)) ? e : me[e] || e.toLowerCase();
  return ae(n) ? ue(t) ? ` ${n}` : "" : de(n) ? t === "" ? ` ${n}` : ` ${n}="${d(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${n}`
  ), "");
}
function Ae(e) {
  return d(M(e));
}
function $e(e) {
  if (!e)
    return "";
  if (p(e))
    return d(e);
  const t = N(Re(e));
  return d(se(t));
}
function Re(e) {
  if (!T(e) && A(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = be(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
const { ensureValidVNode: De } = C;
function Ve(e, t, r, n, s) {
  e("<!--teleport start-->");
  const o = s.appContext.provides[E], i = o.__teleportBuffers || (o.__teleportBuffers = {}), l = i[r] || (i[r] = []), f = l.length;
  let u;
  if (n)
    t(e), u = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: a, push: c } = O();
    c("<!--teleport start anchor-->"), t(c), c("<!--teleport anchor-->"), u = a();
  }
  l.splice(f, 0, u), e("<!--teleport end-->");
}
{
  const e = Y(), t = (r, n) => {
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
function we(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ke,
  setCurrentRenderingInstance: k,
  setupComponent: xe,
  renderComponentRoot: x,
  normalizeVNode: Be,
  pushWarningContext: Ge,
  popWarningContext: ze
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
function F(e, t = null, r) {
  const n = e.component = ke(
    e,
    t,
    null
  ), s = xe(
    n,
    !0
    /* isSSR */
  ), o = _(s);
  let i = n.sp;
  return o || i ? Promise.resolve(s).then(() => {
    if (o && (i = n.sp), i)
      return Promise.all(
        i.map((f) => f.call(n.proxy))
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
    (!e.render || e.render === R) && !e.ssrRender && !r.ssrRender && p(r.template) && (r.ssrRender = we(r.template));
    const o = e.ssrRender || r.ssrRender;
    if (o) {
      let i = e.inheritAttrs !== !1 ? e.attrs : void 0, l = !1, f = e;
      for (; ; ) {
        const a = f.vnode.scopeId;
        a && (l || (i = { ...i }, l = !0), i[a] = "");
        const c = f.parent;
        if (c && c.subTree && c.subTree === f.vnode)
          f = c;
        else
          break;
      }
      if (t) {
        l || (i = { ...i });
        const a = t.trim().split(" ");
        for (let c = 0; c < a.length; c++)
          i[a[c]] = "";
      }
      const u = k(e);
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
        k(u);
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
  const { type: s, shapeFlag: o, children: i, dirs: l, props: f } = t;
  switch (l && (t.props = Ne(t, f, l)), s) {
    case I:
      e(d(i));
      break;
    case v:
      e(
        i ? `<!--${_e(i)}-->` : "<!---->"
      );
      break;
    case q:
      e(i);
      break;
    case j:
      t.slotScopeIds && (n = (n ? n + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), V(
        e,
        i,
        r,
        n
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? Ee(e, t, r, n) : o & 6 ? e(F(t, r, n)) : o & 64 ? Me(e, t, r, n) : o & 128 ? b(e, t.ssContent, r, n) : y(
        "[@vue/server-renderer] Invalid VNode type:",
        s,
        `(${typeof s})`
      );
  }
}
function V(e, t, r, n) {
  for (let s = 0; s < t.length; s++)
    b(e, Be(t[s]), r, n);
}
function Ee(e, t, r, n) {
  const s = t.type;
  let { props: o, children: i, shapeFlag: l, scopeId: f } = t, u = `<${s}`;
  o && (u += Se(o, s)), f && (u += ` ${f}`);
  let a = r, c = t;
  for (; a && c === a.subTree; )
    c = a.vnode, c.scopeId && (u += ` ${c.scopeId}`), a = a.parent;
  if (n && (u += ` ${n}`), e(u + ">"), !ce(s)) {
    let m = !1;
    o && (o.innerHTML ? (m = !0, e(o.innerHTML)) : o.textContent ? (m = !0, e(d(o.textContent))) : s === "textarea" && o.value && (m = !0, e(d(o.value)))), m || (l & 8 ? e(d(i)) : l & 16 && V(
      e,
      i,
      r,
      n
    )), e(`</${s}>`);
  }
}
function Ne(e, t, r) {
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
function Me(e, t, r, n) {
  const s = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!s)
    return o || y("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!p(s))
    return y(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  Ve(
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
const { isVNode: Oe } = C;
function g(e, t, r) {
  if (!e.hasAsync)
    return t + P(e);
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
function L(e) {
  return g(e, "", 0);
}
function P(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    p(n) ? t += n : t += P(n);
  }
  return t;
}
async function D(e, t = {}) {
  if (Oe(e))
    return D(z({ render: () => e }), t);
  const r = H(e._component, e._props);
  r.appContext = e._context, e.provide(E, t);
  const n = await F(r), s = await L(n);
  if (await Fe(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return s;
}
async function Fe(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await L(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
const { isVNode: He } = C;
G();
const Le = /* @__PURE__ */ W({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, r) => null;
  }
}), je = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const n = K(Le, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await D(n)}
                    <div id="${e.f.name("vue-root")}"></div>
                    <div id="app-3e1bg78c"></div>

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
  je as index,
  je as renderer
};
