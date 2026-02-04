import { L as N, K as B, l as E, M as _, N as C, O as b, P as y, Q as V, R as u, F as M, S as j, U, V as L, W as O, X as p, m as P, Y as F, Z as S, _ as H, $ as I, v as W, D, a0 as G, a1 as K, a2 as Q, a3 as X, a4 as Y, a5 as Z, a6 as q, a7 as J, a8 as ee, a9 as te, I as re, d as ie, c as oe, aa as ne } from "./runtime-dom.esm-bundler-nh-HHVkj.js";
function se(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const ae = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mb-1{margin-bottom:calc(var(--spacing)*1)}.block{display:block}.flex{display:flex}.table{display:table}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.flex-col{flex-direction:column}.items-center{align-items:center}.gap-3{gap:calc(var(--spacing)*3)}.border{border-style:var(--tw-border-style);border-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-\\[\\#e3e8ef\\]{border-color:#e3e8ef}.\\!p-0{padding:calc(var(--spacing)*0)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-red-500{color:var(--color-red-500)}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}';
const le = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function de(e, t) {
  let i = "";
  for (let r in e) {
    if (le(r) || H(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const o = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? i += ` class="${fe(o)}"` : r === "style" ? i += ` style="${pe(o)}"` : i += ce(r, o, t);
  }
  return i;
}
function ce(e, t, i) {
  if (!K(t))
    return "";
  const r = i && (i.indexOf("-") > 0 || Q(i)) ? e : X[e] || e.toLowerCase();
  return Y(r) ? Z(t) ? ` ${r}` : "" : q(r) ? t === "" ? ` ${r}` : ` ${r}="${p(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function fe(e) {
  return p(W(e));
}
function pe(e) {
  if (!e)
    return "";
  if (u(e))
    return p(e);
  const t = D(ue(e));
  return p(G(t));
}
function ue(e) {
  if (!S(e) && J(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function me(e, t, i, r, o) {
  e("<!--teleport start-->");
  const n = o.appContext.provides[_], s = n.__teleportBuffers || (n.__teleportBuffers = {}), a = s[i] || (s[i] = []), d = a.length;
  let f;
  if (r)
    t(e), f = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: l } = T();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), f = c();
  }
  a.splice(d, 0, f), e("<!--teleport end-->");
}
{
  const e = N(), t = (i, r) => {
    let o;
    return (o = e[i]) || (o = e[i] = []), o.push(r), (n) => {
      o.length > 1 ? o.forEach((s) => s(n)) : o[0](n);
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
  setCurrentRenderingInstance: k,
  setupComponent: ge,
  renderComponentRoot: v,
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
  ), o = ge(
    r,
    !0
    /* isSSR */
  ), n = b(o);
  let s = r.sp;
  return n || s ? Promise.resolve(o).then(() => {
    if (n && (s = r.sp), s)
      return Promise.all(
        s.map((d) => d.call(r.proxy))
      );
  }).catch(y).then(() => w(r, i)) : w(r, i);
}
function w(e, t) {
  const i = e.type, { getBuffer: r, push: o } = T();
  if (V(i)) {
    let n = v(e);
    if (!i.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((n.props || (n.props = {}))[s] = "");
    g(o, e.subTree = n, e, t);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !i.ssrRender && u(i.template) && (i.ssrRender = he(i.template));
    const n = e.ssrRender || i.ssrRender;
    if (n) {
      let s = e.inheritAttrs !== !1 ? e.attrs : void 0, a = !1, d = e;
      for (; ; ) {
        const c = d.vnode.scopeId;
        c && (a || (s = { ...s }, a = !0), s[c] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (t) {
        a || (s = { ...s });
        const c = t.trim().split(" ");
        for (let l = 0; l < c.length; l++)
          s[c[l]] = "";
      }
      const f = k(e);
      try {
        n(
          e.proxy,
          o,
          e,
          s,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        k(f);
      }
    } else e.render && e.render !== y ? g(
      o,
      e.subTree = v(e),
      e,
      t
    ) : (i.name || i.__file, o("<!---->"));
  }
  return r();
}
function g(e, t, i, r) {
  const { type: o, shapeFlag: n, children: s, dirs: a, props: d } = t;
  switch (a && (t.props = ke(t, d, a)), o) {
    case O:
      e(p(s));
      break;
    case U:
      e(
        s ? `<!--${L(s)}-->` : "<!---->"
      );
      break;
    case j:
      e(s);
      break;
    case M:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), x(
        e,
        s,
        i,
        r
      ), e("<!--]-->");
      break;
    default:
      n & 1 ? xe(e, t, i, r) : n & 6 ? e(R(t, i, r)) : n & 64 ? ve(e, t, i, r) : n & 128 && g(e, t.ssContent, i, r);
  }
}
function x(e, t, i, r) {
  for (let o = 0; o < t.length; o++)
    g(e, ye(t[o]), i, r);
}
function xe(e, t, i, r) {
  const o = t.type;
  let { props: n, children: s, shapeFlag: a, scopeId: d } = t, f = `<${o}`;
  n && (f += de(n, o)), d && (f += ` ${d}`);
  let c = i, l = t;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (f += ` ${l.scopeId}`), c = c.parent;
  if (r && (f += ` ${r}`), e(f + ">"), !F(o)) {
    let m = !1;
    n && (n.innerHTML ? (m = !0, e(n.innerHTML)) : n.textContent ? (m = !0, e(p(n.textContent))) : o === "textarea" && n.value && (m = !0, e(p(n.value)))), m || (a & 8 ? e(p(s)) : a & 16 && x(
      e,
      s,
      i,
      r
    )), e(`</${o}>`);
  }
}
function ke(e, t, i) {
  const r = [];
  for (let o = 0; o < i.length; o++) {
    const n = i[o], {
      dir: { getSSRProps: s }
    } = n;
    if (s) {
      const a = s(n, e);
      a && r.push(a);
    }
  }
  return P(t || {}, ...r);
}
function ve(e, t, i, r) {
  const o = t.props && t.props.to, n = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!u(o))
    return [];
  me(
    e,
    (s) => {
      x(
        s,
        t.children,
        i,
        r
      );
    },
    o,
    n || n === "",
    i
  );
}
const { isVNode: we } = C;
function h(e, t, i) {
  if (!e.hasAsync)
    return t + z(e);
  let r = t;
  for (let o = i; o < e.length; o += 1) {
    const n = e[o];
    if (u(n)) {
      r += n;
      continue;
    }
    if (b(n))
      return n.then((a) => (e[o] = a, h(e, r, o)));
    const s = h(n, r, 0);
    if (b(s))
      return s.then((a) => (e[o] = a, h(e, "", o)));
    r = s;
  }
  return r;
}
function $(e) {
  return h(e, "", 0);
}
function z(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    u(r) ? t += r : t += z(r);
  }
  return t;
}
async function A(e, t = {}) {
  if (we(e))
    return A(B({ render: () => e }), t);
  const i = E(e._component, e._props);
  i.appContext = e._context, e.provide(_, t);
  const r = await R(i), o = await $(r);
  if (await _e(t), t.__watcherHandles)
    for (const n of t.__watcherHandles)
      n();
  return o;
}
async function _e(e) {
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
    return (t, i) => (oe(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Ce));
  }
});
se(ae);
const Re = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = ne(Se, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await A(r)}
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
