import { G as N, E as B, p as V, H as x, I as C, J as b, N as y, K as z, L as u, F as M, S as j, M as U, O as H, P as L, Q as p, m as O, R as P, U as S, V as F, W as I, v as W, s as G, X as D, Y as K, Z as J, _ as Q, $ as X, a0 as Y, a1 as Z, a2 as q, a3 as ee, a4 as te, C as re, d as ie, c as ne, a5 as oe } from "./runtime-dom.esm-bundler-CmmLJxNk.js";
function se(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
const ae = '@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--spacing:.25rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.w-full{width:100%}@media(min-width:48rem){.md\\:w-56{width:calc(var(--spacing)*56)}}}';
const le = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function de(e, t) {
  let i = "";
  for (let r in e) {
    if (le(r) || F(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const n = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? i += ` class="${ce(n)}"` : r === "style" ? i += ` style="${pe(n)}"` : i += fe(r, n, t);
  }
  return i;
}
function fe(e, t, i) {
  if (!K(t))
    return "";
  const r = i && (i.indexOf("-") > 0 || J(i)) ? e : Q[e] || e.toLowerCase();
  return X(r) ? Y(t) ? ` ${r}` : "" : Z(r) ? t === "" ? ` ${r}` : ` ${r}="${p(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function ce(e) {
  return p(W(e));
}
function pe(e) {
  if (!e)
    return "";
  if (u(e))
    return p(e);
  const t = G(ue(e));
  return p(D(t));
}
function ue(e) {
  if (!S(e) && q(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function me(e, t, i, r, n) {
  e("<!--teleport start-->");
  const o = n.appContext.provides[x], s = o.__teleportBuffers || (o.__teleportBuffers = {}), a = s[i] || (s[i] = []), d = a.length;
  let c;
  if (r)
    t(e), c = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: f, push: l } = T();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), c = f();
  }
  a.splice(d, 0, c), e("<!--teleport end-->");
}
{
  const e = N(), t = (i, r) => {
    let n;
    return (n = e[i]) || (n = e[i] = []), n.push(r), (o) => {
      n.length > 1 ? n.forEach((s) => s(o)) : n[0](o);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => i
  ), t(
    "__VUE_SSR_SETTERS__",
    (i) => i
  );
}
function he(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: be,
  setCurrentRenderingInstance: w,
  setupComponent: ge,
  renderComponentRoot: _,
  normalizeVNode: ye
} = C;
function T() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(i) {
      const r = u(i);
      if (e && r) {
        t[t.length - 1] += i;
        return;
      }
      t.push(i), e = r, (b(i) || S(i) && i.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function R(e, t = null, i) {
  const r = e.component = be(
    e,
    t,
    null
  ), n = ge(
    r,
    !0
    /* isSSR */
  ), o = b(n);
  let s = r.sp;
  return o || s ? Promise.resolve(n).then(() => {
    if (o && (s = r.sp), s)
      return Promise.all(
        s.map((d) => d.call(r.proxy))
      );
  }).catch(y).then(() => v(r, i)) : v(r, i);
}
function v(e, t) {
  const i = e.type, { getBuffer: r, push: n } = T();
  if (z(i)) {
    let o = _(e);
    if (!i.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((o.props || (o.props = {}))[s] = "");
    g(n, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !i.ssrRender && u(i.template) && (i.ssrRender = he(i.template));
    const o = e.ssrRender || i.ssrRender;
    if (o) {
      let s = e.inheritAttrs !== !1 ? e.attrs : void 0, a = !1, d = e;
      for (; ; ) {
        const f = d.vnode.scopeId;
        f && (a || (s = { ...s }, a = !0), s[f] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (t) {
        a || (s = { ...s });
        const f = t.trim().split(" ");
        for (let l = 0; l < f.length; l++)
          s[f[l]] = "";
      }
      const c = w(e);
      try {
        o(
          e.proxy,
          n,
          e,
          s,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        w(c);
      }
    } else e.render && e.render !== y ? g(
      n,
      e.subTree = _(e),
      e,
      t
    ) : (i.name || i.__file, n("<!---->"));
  }
  return r();
}
function g(e, t, i, r) {
  const { type: n, shapeFlag: o, children: s, dirs: a, props: d } = t;
  switch (a && (t.props = we(t, d, a)), n) {
    case L:
      e(p(s));
      break;
    case U:
      e(
        s ? `<!--${H(s)}-->` : "<!---->"
      );
      break;
    case j:
      e(s);
      break;
    case M:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), k(
        e,
        s,
        i,
        r
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? ke(e, t, i, r) : o & 6 ? e(R(t, i, r)) : o & 64 ? _e(e, t, i, r) : o & 128 && g(e, t.ssContent, i, r);
  }
}
function k(e, t, i, r) {
  for (let n = 0; n < t.length; n++)
    g(e, ye(t[n]), i, r);
}
function ke(e, t, i, r) {
  const n = t.type;
  let { props: o, children: s, shapeFlag: a, scopeId: d } = t, c = `<${n}`;
  o && (c += de(o, n)), d && (c += ` ${d}`);
  let f = i, l = t;
  for (; f && l === f.subTree; )
    l = f.vnode, l.scopeId && (c += ` ${l.scopeId}`), f = f.parent;
  if (r && (c += ` ${r}`), e(c + ">"), !P(n)) {
    let m = !1;
    o && (o.innerHTML ? (m = !0, e(o.innerHTML)) : o.textContent ? (m = !0, e(p(o.textContent))) : n === "textarea" && o.value && (m = !0, e(p(o.value)))), m || (a & 8 ? e(p(s)) : a & 16 && k(
      e,
      s,
      i,
      r
    )), e(`</${n}>`);
  }
}
function we(e, t, i) {
  const r = [];
  for (let n = 0; n < i.length; n++) {
    const o = i[n], {
      dir: { getSSRProps: s }
    } = o;
    if (s) {
      const a = s(o, e);
      a && r.push(a);
    }
  }
  return O(t || {}, ...r);
}
function _e(e, t, i, r) {
  const n = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!n)
    return [];
  if (!u(n))
    return [];
  me(
    e,
    (s) => {
      k(
        s,
        t.children,
        i,
        r
      );
    },
    n,
    o || o === "",
    i
  );
}
const { isVNode: ve } = C;
function h(e, t, i) {
  if (!e.hasAsync)
    return t + A(e);
  let r = t;
  for (let n = i; n < e.length; n += 1) {
    const o = e[n];
    if (u(o)) {
      r += o;
      continue;
    }
    if (b(o))
      return o.then((a) => (e[n] = a, h(e, r, n)));
    const s = h(o, r, 0);
    if (b(s))
      return s.then((a) => (e[n] = a, h(e, "", n)));
    r = s;
  }
  return r;
}
function $(e) {
  return h(e, "", 0);
}
function A(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    u(r) ? t += r : t += A(r);
  }
  return t;
}
async function E(e, t = {}) {
  if (ve(e))
    return E(B({ render: () => e }), t);
  const i = V(e._component, e._props);
  i.appContext = e._context, e.provide(x, t);
  const r = await R(i), n = await $(r);
  if (await xe(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return n;
}
async function xe(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await $(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const Ce = ["id"], Se = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, i) => (ne(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Ce));
  }
});
se(ae);
const Re = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = oe(Se, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await E(r)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let s = "";
        return s = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, s;
      })()
    };
  }
});
export {
  Re as index,
  Re as renderer
};
