import { i as B, h as E, e as N, s as _, j as C, k as m, N as b, l as V, m as u, F as M, S as j, C as H, p as L, T as O, q as p, x as P, y as U, z as S, A as F, B as I, D, E as G, G as W, H as K, I as q, J, K as Q, L as X, M as Y, O as Z, P as ee, Q as te, d as re, c as ie, o as oe, R as ne } from "./runtime-dom.esm-bundler-C5keawql.js";
function ae(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const se = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-indigo-600:oklch(51.1% .262 276.966);--color-violet-500:oklch(60.6% .25 292.717);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-900:oklch(21% .034 264.665);--color-zinc-900:oklch(21% .006 285.885);--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-medium:500;--font-weight-semibold:600;--radius-md:.375rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mx-auto{margin-inline:auto}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-10{margin-top:calc(var(--spacing)*10)}.block{display:block}.flex{display:flex}.grid{display:grid}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.justify-end{justify-content:flex-end}:where(.space-y-12>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*12)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*12)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-6{column-gap:calc(var(--spacing)*6)}.gap-y-8{row-gap:calc(var(--spacing)*8)}.rounded-md{border-radius:var(--radius-md)}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-900\\/10{border-color:#1018281a}@supports (color:color-mix(in lab,red,red)){.border-gray-900\\/10{border-color:color-mix(in oklab,var(--color-gray-900)10%,transparent)}}.bg-violet-500{background-color:var(--color-violet-500)}.bg-white{background-color:var(--color-white)}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.pb-12{padding-bottom:calc(var(--spacing)*12)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\/7{font-size:var(--text-base);line-height:calc(var(--spacing)*7)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\/6{font-size:var(--text-sm);line-height:calc(var(--spacing)*6)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-600{color:var(--color-gray-600)}.text-gray-900{color:var(--color-gray-900)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.-outline-offset-1{outline-offset:-1px}.outline-gray-300{outline-color:var(--color-gray-300)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:-outline-offset-2:focus{outline-offset:-2px}.focus\\:outline-indigo-600:focus{outline-color:var(--color-indigo-600)}@media(min-width:40rem){.sm\\:col-span-3{grid-column:span 3/span 3}.sm\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.sm\\:text-sm\\/6{font-size:var(--text-sm);line-height:calc(var(--spacing)*6)}}.dark\\:bg-zinc-900:where(.dark .dark\\:bg-zinc-900){background-color:var(--color-zinc-900)}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}';
const le = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ce(e, t) {
  let i = "";
  for (let r in e) {
    if (le(r) || F(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const o = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? i += ` class="${fe(o)}"` : r === "style" ? i += ` style="${pe(o)}"` : i += de(r, o, t);
  }
  return i;
}
function de(e, t, i) {
  if (!K(t))
    return "";
  const r = i && (i.indexOf("-") > 0 || q(i)) ? e : J[e] || e.toLowerCase();
  return Q(r) ? X(t) ? ` ${r}` : "" : Y(r) ? t === "" ? ` ${r}` : ` ${r}="${p(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function fe(e) {
  return p(D(e));
}
function pe(e) {
  if (!e)
    return "";
  if (u(e))
    return p(e);
  const t = G(ue(e));
  return p(W(t));
}
function ue(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function he(e, t, i, r, o) {
  e("<!--teleport start-->");
  const n = o.appContext.provides[_], a = n.__teleportBuffers || (n.__teleportBuffers = {}), s = a[i] || (a[i] = []), c = s.length;
  let f;
  if (r)
    t(e), f = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = z();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), f = d();
  }
  s.splice(c, 0, f), e("<!--teleport end-->");
}
{
  const e = B(), t = (i, r) => {
    let o;
    return (o = e[i]) || (o = e[i] = []), o.push(r), (n) => {
      o.length > 1 ? o.forEach((a) => a(n)) : o[0](n);
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
function ge(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: me,
  setCurrentRenderingInstance: v,
  setupComponent: we,
  renderComponentRoot: x,
  normalizeVNode: be
} = C;
function z() {
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
      t.push(i), e = r, (m(i) || S(i) && i.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, i) {
  const r = e.component = me(
    e,
    t,
    null
  ), o = we(
    r,
    !0
    /* isSSR */
  ), n = m(o);
  let a = r.sp;
  return n || a ? Promise.resolve(o).then(() => {
    if (n && (a = r.sp), a)
      return Promise.all(
        a.map((c) => c.call(r.proxy))
      );
  }).catch(b).then(() => k(r, i)) : k(r, i);
}
function k(e, t) {
  const i = e.type, { getBuffer: r, push: o } = z();
  if (V(i)) {
    let n = x(e);
    if (!i.props)
      for (const a in e.attrs)
        a.startsWith("data-v-") && ((n.props || (n.props = {}))[a] = "");
    w(o, e.subTree = n, e, t);
  } else {
    (!e.render || e.render === b) && !e.ssrRender && !i.ssrRender && u(i.template) && (i.ssrRender = ge(i.template));
    const n = e.ssrRender || i.ssrRender;
    if (n) {
      let a = e.inheritAttrs !== !1 ? e.attrs : void 0, s = !1, c = e;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (s || (a = { ...a }, s = !0), a[d] = "");
        const l = c.parent;
        if (l && l.subTree && l.subTree === c.vnode)
          c = l;
        else
          break;
      }
      if (t) {
        s || (a = { ...a });
        const d = t.trim().split(" ");
        for (let l = 0; l < d.length; l++)
          a[d[l]] = "";
      }
      const f = v(e);
      try {
        n(
          e.proxy,
          o,
          e,
          a,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        v(f);
      }
    } else e.render && e.render !== b ? w(
      o,
      e.subTree = x(e),
      e,
      t
    ) : (i.name || i.__file, o("<!---->"));
  }
  return r();
}
function w(e, t, i, r) {
  const { type: o, shapeFlag: n, children: a, dirs: s, props: c } = t;
  switch (s && (t.props = ve(t, c, s)), o) {
    case O:
      e(p(a));
      break;
    case H:
      e(
        a ? `<!--${L(a)}-->` : "<!---->"
      );
      break;
    case j:
      e(a);
      break;
    case M:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), y(
        e,
        a,
        i,
        r
      ), e("<!--]-->");
      break;
    default:
      n & 1 ? ye(e, t, i, r) : n & 6 ? e(T(t, i, r)) : n & 64 ? xe(e, t, i, r) : n & 128 && w(e, t.ssContent, i, r);
  }
}
function y(e, t, i, r) {
  for (let o = 0; o < t.length; o++)
    w(e, be(t[o]), i, r);
}
function ye(e, t, i, r) {
  const o = t.type;
  let { props: n, children: a, shapeFlag: s, scopeId: c } = t, f = `<${o}`;
  n && (f += ce(n, o)), c && (f += ` ${c}`);
  let d = i, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (f += ` ${l.scopeId}`), d = d.parent;
  if (r && (f += ` ${r}`), e(f + ">"), !U(o)) {
    let h = !1;
    n && (n.innerHTML ? (h = !0, e(n.innerHTML)) : n.textContent ? (h = !0, e(p(n.textContent))) : o === "textarea" && n.value && (h = !0, e(p(n.value)))), h || (s & 8 ? e(p(a)) : s & 16 && y(
      e,
      a,
      i,
      r
    )), e(`</${o}>`);
  }
}
function ve(e, t, i) {
  const r = [];
  for (let o = 0; o < i.length; o++) {
    const n = i[o], {
      dir: { getSSRProps: a }
    } = n;
    if (a) {
      const s = a(n, e);
      s && r.push(s);
    }
  }
  return P(t || {}, ...r);
}
function xe(e, t, i, r) {
  const o = t.props && t.props.to, n = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!u(o))
    return [];
  he(
    e,
    (a) => {
      y(
        a,
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
const { isVNode: ke } = C;
function g(e, t, i) {
  if (!e.hasAsync)
    return t + A(e);
  let r = t;
  for (let o = i; o < e.length; o += 1) {
    const n = e[o];
    if (u(n)) {
      r += n;
      continue;
    }
    if (m(n))
      return n.then((s) => (e[o] = s, g(e, r, o)));
    const a = g(n, r, 0);
    if (m(a))
      return a.then((s) => (e[o] = s, g(e, "", o)));
    r = a;
  }
  return r;
}
function R(e) {
  return g(e, "", 0);
}
function A(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    u(r) ? t += r : t += A(r);
  }
  return t;
}
async function $(e, t = {}) {
  if (ke(e))
    return $(E({ render: () => e }), t);
  const i = N(e._component, e._props);
  i.appContext = e._context, e.provide(_, t);
  const r = await T(i), o = await R(r);
  if (await _e(t), t.__watcherHandles)
    for (const n of t.__watcherHandles)
      n();
  return o;
}
async function _e(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await R(
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
ae(se);
const Te = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = ne(Se, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await $(r)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let a = "";
        return a = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, a;
      })()
    };
  }
});
export {
  Te as index,
  Te as renderer
};
