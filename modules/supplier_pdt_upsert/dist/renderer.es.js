import "./style.es.js";
const { ssrUtils: C, initDirectivesForSSR: G, createApp: z, createVNode: H, ssrContextKey: E, warn: y, Fragment: W, Static: j, Comment: q, Text: I, mergeProps: U, defineComponent: v, openBlock: K, createElementBlock: Z, createSSRApp: J } = window.Vue;
// @__NO_SIDE_EFFECTS__
function S(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const R = () => {
}, Q = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), T = Array.isArray, h = (e) => typeof e == "function", p = (e) => typeof e == "string", A = (e) => e !== null && typeof e == "object", _ = (e) => (A(e) || h(e)) && h(e.then) && h(e.catch), X = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Y = /\B([A-Z])/g, ee = X(
  (e) => e.replace(Y, "-$1").toLowerCase()
);
let k;
const te = () => k || (k = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function N(e) {
  if (T(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], s = p(n) ? oe(n) : N(n);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (p(e) || A(e))
    return e;
}
const re = /;(?![^(]*\))/g, ne = /:([^]+)/, se = /\/\*[^]*?\*\//g;
function oe(e) {
  const t = {};
  return e.replace(se, "").split(re).forEach((r) => {
    if (r) {
      const n = r.split(ne);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ie(e) {
  if (!e) return "";
  if (p(e)) return e;
  let t = "";
  for (const r in e) {
    const n = e[r];
    if (p(n) || typeof n == "number") {
      const s = r.startsWith("--") ? r : ee(r);
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
const le = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ce = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", fe = /* @__PURE__ */ S(le), ae = /* @__PURE__ */ S(ce), ue = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pe = /* @__PURE__ */ S(
  ue + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function de(e) {
  return !!e || e === "";
}
const me = /[>/="'\u0009\u000a\u000c\u0020]/, $ = {};
function he(e) {
  if ($.hasOwnProperty(e))
    return $[e];
  const t = me.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), $[e] = !t;
}
const ge = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function ye(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const _e = /["'&<>]/;
function d(e) {
  const t = "" + e, r = _e.exec(t);
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
const be = /^-?>|<!--|-->|--!>|<!-$/g;
function Ce(e) {
  return e.replace(be, "");
}
function Se(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
const Te = /* @__PURE__ */ S(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Ae(e, t) {
  let r = "";
  for (let n in e) {
    if (Te(n) || Q(n) || t === "textarea" && n === "value" || // force as property (not rendered in SSR)
    n.startsWith("."))
      continue;
    const s = e[n];
    n.startsWith("^") && (n = n.slice(1)), n === "class" ? r += ` class="${Re(s)}"` : n === "style" ? r += ` style="${Ve(s)}"` : n === "className" ? s != null && (r += ` class="${d(String(s))}"`) : r += $e(n, s, t);
  }
  return r;
}
function $e(e, t, r) {
  if (!ye(t))
    return "";
  const n = r && (r.indexOf("-") > 0 || fe(r)) ? e : ge[e] || e.toLowerCase();
  return pe(n) ? de(t) ? ` ${n}` : "" : he(n) ? t === "" ? ` ${n}` : ` ${n}="${d(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${n}`
  ), "");
}
function Re(e) {
  return d(M(e));
}
function Ve(e) {
  if (!e)
    return "";
  if (p(e))
    return d(e);
  const t = N(ke(e));
  return d(ie(t));
}
function ke(e) {
  if (!T(e) && A(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = Se(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
const { ensureValidVNode: We } = C;
function we(e, t, r, n, s) {
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
  const e = te(), t = (r, n) => {
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
function xe(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Be,
  setCurrentRenderingInstance: w,
  setupComponent: Ee,
  renderComponentRoot: x,
  normalizeVNode: Ne,
  pushWarningContext: je,
  popWarningContext: qe
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
  const n = e.component = Be(
    e,
    t,
    null
  ), s = Ee(
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
    (!e.render || e.render === R) && !e.ssrRender && !r.ssrRender && p(r.template) && (r.ssrRender = xe(r.template));
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
  const { type: s, shapeFlag: o, children: i, dirs: l, props: f } = t;
  switch (l && (t.props = Oe(t, f, l)), s) {
    case I:
      e(d(i));
      break;
    case q:
      e(
        i ? `<!--${Ce(i)}-->` : "<!---->"
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
      o & 1 ? Me(e, t, r, n) : o & 6 ? e(F(t, r, n)) : o & 64 ? Fe(e, t, r, n) : o & 128 ? b(e, t.ssContent, r, n) : y(
        "[@vue/server-renderer] Invalid VNode type:",
        s,
        `(${typeof s})`
      );
  }
}
function V(e, t, r, n) {
  for (let s = 0; s < t.length; s++)
    b(e, Ne(t[s]), r, n);
}
function Me(e, t, r, n) {
  const s = t.type;
  let { props: o, children: i, shapeFlag: l, scopeId: f } = t, u = `<${s}`;
  o && (u += Ae(o, s)), f && (u += ` ${f}`);
  let a = r, c = t;
  for (; a && c === a.subTree; )
    c = a.vnode, c.scopeId && (u += ` ${c.scopeId}`), a = a.parent;
  if (n && (u += ` ${n}`), e(u + ">"), !ae(s)) {
    let m = !1;
    o && (o.innerHTML ? (m = !0, e(o.innerHTML)) : o.textContent ? (m = !0, e(d(o.textContent))) : s === "textarea" && o.value && (m = !0, e(d(o.value)))), m || (l & 8 ? e(d(i)) : l & 16 && V(
      e,
      i,
      r,
      n
    )), e(`</${s}>`);
  }
}
function Oe(e, t, r) {
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
function Fe(e, t, r, n) {
  const s = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!s)
    return o || y("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!p(s))
    return y(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  we(
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
const { isVNode: Le } = C;
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
  if (Le(e))
    return D(z({ render: () => e }), t);
  const r = H(e._component, e._props);
  r.appContext = e._context, e.provide(E, t);
  const n = await F(r), s = await L(n);
  if (await Pe(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return s;
}
async function Pe(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await L(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
const { isVNode: Ie } = C;
G();
const De = ["id"], Ge = /* @__PURE__ */ v({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(e) {
    return (t, r) => (K(), Z("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, De));
  }
}), Ue = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const n = J(Ge, {
      _p: e,
      _pp: t
    });
    return {
      r: `
                 <div>
                    ${await D(n)}
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
  Ue as index,
  Ue as renderer
};
