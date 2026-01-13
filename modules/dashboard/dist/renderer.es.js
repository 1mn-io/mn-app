import { g as v, s as R, c as E, a as w, b, i as h, N as g, e as H, f as d, F as M, S as O, C as P, h as z, T as F, j as p, k as A, m as L, l as D, n as U, o as j, p as G, q as K, r as W, t as q, u as I, v as J, w as Q, x as X, y as Y, z as Z, A as ee, B as re, d as te, D as se } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const ne = /* @__PURE__ */ U(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function oe(e, r) {
  let t = "";
  for (const s in e) {
    if (ne(s) || j(s) || r === "textarea" && s === "value")
      continue;
    const n = e[s];
    s === "class" ? t += ` class="${le(n)}"` : s === "style" ? t += ` style="${ae(n)}"` : s === "className" ? t += ` class="${String(n)}"` : t += ie(s, n, r);
  }
  return t;
}
function ie(e, r, t) {
  if (!q(r))
    return "";
  const s = t && (t.indexOf("-") > 0 || I(t)) ? e : J[e] || e.toLowerCase();
  return Q(s) ? X(r) ? ` ${s}` : "" : Y(s) ? r === "" ? ` ${s}` : ` ${s}="${p(r)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${s}`
  ), "");
}
function le(e) {
  return p(G(e));
}
function ae(e) {
  if (!e)
    return "";
  if (d(e))
    return p(e);
  const r = K(fe(e));
  return p(W(r));
}
function fe(e) {
  if (!A(e) && Z(e)) {
    const r = {};
    for (const t in e)
      t.startsWith(":--") ? r[t.slice(1)] = ee(e[t]) : r[t] = e[t];
    return r;
  }
  return e;
}
function ce(e, r, t, s, n) {
  e("<!--teleport start-->");
  const o = n.appContext.provides[b], i = o.__teleportBuffers || (o.__teleportBuffers = {}), l = i[t] || (i[t] = []), f = l.length;
  let u;
  if (s)
    r(e), u = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: a } = V();
    a("<!--teleport start anchor-->"), r(a), a("<!--teleport anchor-->"), u = c();
  }
  l.splice(f, 0, u), e("<!--teleport end-->");
}
{
  const e = v(), r = (t, s) => {
    let n;
    return (n = e[t]) || (n = e[t] = []), n.push(s), (o) => {
      n.length > 1 ? n.forEach((i) => i(o)) : n[0](o);
    };
  };
  r(
    "__VUE_INSTANCE_SETTERS__",
    (t) => t
  ), r(
    "__VUE_SSR_SETTERS__",
    (t) => t
  );
}
function ue(e, r) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: pe,
  setCurrentRenderingInstance: T,
  setupComponent: de,
  renderComponentRoot: $,
  normalizeVNode: me
} = R;
function V() {
  let e = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(t) {
      const s = d(t);
      if (e && s) {
        r[r.length - 1] += t;
        return;
      }
      r.push(t), e = s, (h(t) || A(t) && t.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function B(e, r = null, t) {
  const s = e.component = pe(
    e,
    r,
    null
  ), n = de(
    s,
    !0
    /* isSSR */
  ), o = h(n);
  let i = s.sp;
  return o || i ? Promise.resolve(n).then(() => {
    if (o && (i = s.sp), i)
      return Promise.all(
        i.map((f) => f.call(s.proxy))
      );
  }).catch(g).then(() => C(s, t)) : C(s, t);
}
function C(e, r) {
  const t = e.type, { getBuffer: s, push: n } = V();
  if (H(t)) {
    let o = $(e);
    if (!t.props)
      for (const i in e.attrs)
        i.startsWith("data-v-") && ((o.props || (o.props = {}))[i] = "");
    y(n, e.subTree = o, e, r);
  } else {
    (!e.render || e.render === g) && !e.ssrRender && !t.ssrRender && d(t.template) && (t.ssrRender = ue(t.template));
    const o = e.ssrRender || t.ssrRender;
    if (o) {
      let i = e.inheritAttrs !== !1 ? e.attrs : void 0, l = !1, f = e;
      for (; ; ) {
        const c = f.vnode.scopeId;
        c && (l || (i = { ...i }, l = !0), i[c] = "");
        const a = f.parent;
        if (a && a.subTree && a.subTree === f.vnode)
          f = a;
        else
          break;
      }
      if (r) {
        l || (i = { ...i });
        const c = r.trim().split(" ");
        for (let a = 0; a < c.length; a++)
          i[c[a]] = "";
      }
      const u = T(e);
      try {
        o(
          e.proxy,
          n,
          e,
          i,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        T(u);
      }
    } else e.render && e.render !== g ? y(
      n,
      e.subTree = $(e),
      e,
      r
    ) : (t.name || t.__file, n("<!---->"));
  }
  return s();
}
function y(e, r, t, s) {
  const { type: n, shapeFlag: o, children: i, dirs: l, props: f } = r;
  switch (l && (r.props = he(r, f, l)), n) {
    case F:
      e(p(i));
      break;
    case P:
      e(
        i ? `<!--${z(i)}-->` : "<!---->"
      );
      break;
    case O:
      e(i);
      break;
    case M:
      r.slotScopeIds && (s = (s ? s + " " : "") + r.slotScopeIds.join(" ")), e("<!--[-->"), S(
        e,
        i,
        t,
        s
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? _e(e, r, t, s) : o & 6 ? e(B(r, t, s)) : o & 64 ? ye(e, r, t, s) : o & 128 && y(e, r.ssContent, t, s);
  }
}
function S(e, r, t, s) {
  for (let n = 0; n < r.length; n++)
    y(e, me(r[n]), t, s);
}
function _e(e, r, t, s) {
  const n = r.type;
  let { props: o, children: i, shapeFlag: l, scopeId: f } = r, u = `<${n}`;
  o && (u += oe(o, n)), f && (u += ` ${f}`);
  let c = t, a = r;
  for (; c && a === c.subTree; )
    a = c.vnode, a.scopeId && (u += ` ${a.scopeId}`), c = c.parent;
  if (s && (u += ` ${s}`), e(u + ">"), !D(n)) {
    let m = !1;
    o && (o.innerHTML ? (m = !0, e(o.innerHTML)) : o.textContent ? (m = !0, e(p(o.textContent))) : n === "textarea" && o.value && (m = !0, e(p(o.value)))), m || (l & 8 ? e(p(i)) : l & 16 && S(
      e,
      i,
      t,
      s
    )), e(`</${n}>`);
  }
}
function he(e, r, t) {
  const s = [];
  for (let n = 0; n < t.length; n++) {
    const o = t[n], {
      dir: { getSSRProps: i }
    } = o;
    if (i) {
      const l = i(o, e);
      l && s.push(l);
    }
  }
  return L(r || {}, ...s);
}
function ye(e, r, t, s) {
  const n = r.props && r.props.to, o = r.props && r.props.disabled;
  if (!n)
    return [];
  if (!d(n))
    return [];
  ce(
    e,
    (i) => {
      S(
        i,
        r.children,
        t,
        s
      );
    },
    n,
    o || o === "",
    t
  );
}
const { isVNode: ge } = R;
function _(e, r, t) {
  if (!e.hasAsync)
    return r + x(e);
  let s = r;
  for (let n = t; n < e.length; n += 1) {
    const o = e[n];
    if (d(o)) {
      s += o;
      continue;
    }
    if (h(o))
      return o.then((l) => (e[n] = l, _(e, s, n)));
    const i = _(o, s, 0);
    if (h(i))
      return i.then((l) => (e[n] = l, _(e, "", n)));
    s = i;
  }
  return s;
}
function N(e) {
  return _(e, "", 0);
}
function x(e) {
  let r = "";
  for (let t = 0; t < e.length; t++) {
    let s = e[t];
    d(s) ? r += s : r += x(s);
  }
  return r;
}
async function k(e, r = {}) {
  if (ge(e))
    return k(E({ render: () => e }), r);
  const t = w(e._component, e._props);
  t.appContext = e._context, e.provide(b, r);
  const s = await B(t), n = await N(s);
  if (await Se(r), r.__watcherHandles)
    for (const o of r.__watcherHandles)
      o();
  return n;
}
async function Se(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const r in e.__teleportBuffers)
      e.teleports[r] = await N(
        await Promise.all([e.__teleportBuffers[r]])
      );
  }
}
re();
const Te = /* @__PURE__ */ te({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (r, t) => null;
  }
}), Ce = async (e) => ({
  set: async (r) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const s = se(Te, {
      _p: e,
      _$p: r
    });
    return {
      r: `
                 <div>
                    ${await k(s)}
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
  Ce as index,
  Ce as renderer
};
