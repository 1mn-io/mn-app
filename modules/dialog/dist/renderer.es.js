import { E as B, D as E, y as N, G as z, H as _, I as m, N as w, J as V, K as u, F as M, S as j, L as U, M as H, O as L, P as p, m as O, Q as P, R as C, U as F, V as I, s as W, B as D, W as G, X as K, Y as J, Z as Q, _ as X, $ as Y, a0 as Z, a1 as q, a2 as ee, a3 as te, A as re, d as ie, c as oe, a4 as ne } from "./runtime-dom.esm-bundler-GBcsiUg9.js";
function ae(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const se = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-700:oklch(45.7% .24 277.023);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-md:28rem;--container-lg:32rem;--radius-md:.375rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.m-4{margin:calc(var(--spacing)*4)}.flex{display:flex}.w-full{width:100%}.w-md{width:var(--container-md)}.w-sm{width:var(--container-sm)}.max-w-lg{max-width:var(--container-lg)}.flex-col-reverse{flex-direction:column-reverse}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-xl{border-top-left-radius:var(--radius-xl);border-top-right-radius:var(--radius-xl)}.rounded-b-xl{border-bottom-right-radius:var(--radius-xl);border-bottom-left-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-zinc-200{border-color:var(--color-zinc-200)}.bg-indigo-600{background-color:var(--color-indigo-600)}.bg-white{background-color:var(--color-white)}.bg-zinc-200{background-color:var(--color-zinc-200)}.p-6{padding:calc(var(--spacing)*6)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-4{padding-top:calc(var(--spacing)*4)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.text-white{color:var(--color-white)}.text-zinc-800{color:var(--color-zinc-800)}.text-zinc-900{color:var(--color-zinc-900)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media(hover:hover){.hover\\:bg-indigo-700:hover{background-color:var(--color-indigo-700)}.hover\\:bg-zinc-300:hover{background-color:var(--color-zinc-300)}}@media(min-width:40rem){.sm\\:w-auto{width:auto}.sm\\:flex-row{flex-direction:row}}@media(min-width:48rem){.md\\:w-md{width:var(--container-md)}}.dark\\:border-white\\/10:where(.dark,.dark *){border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:border-white\\/10:where(.dark,.dark *){border-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.dark\\:bg-zinc-700:where(.dark,.dark *){background-color:var(--color-zinc-700)}.dark\\:bg-zinc-900:where(.dark,.dark *){background-color:var(--color-zinc-900)}.dark\\:text-zinc-100:where(.dark,.dark *){color:var(--color-zinc-100)}.dark\\:text-zinc-200:where(.dark,.dark *){color:var(--color-zinc-200)}@media(hover:hover){.dark\\:hover\\:bg-zinc-600:where(.dark,.dark *):hover{background-color:var(--color-zinc-600)}}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}';
const le = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function de(e, t) {
  let i = "";
  for (let r in e) {
    if (le(r) || F(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
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
  const r = i && (i.indexOf("-") > 0 || J(i)) ? e : Q[e] || e.toLowerCase();
  return X(r) ? Y(t) ? ` ${r}` : "" : Z(r) ? t === "" ? ` ${r}` : ` ${r}="${p(t)}"` : (console.warn(
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
  if (!C(e) && q(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function he(e, t, i, r, o) {
  e("<!--teleport start-->");
  const n = o.appContext.provides[z], a = n.__teleportBuffers || (n.__teleportBuffers = {}), s = a[i] || (a[i] = []), d = s.length;
  let f;
  if (r)
    t(e), f = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: l } = S();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), f = c();
  }
  s.splice(d, 0, f), e("<!--teleport end-->");
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
  setupComponent: be,
  renderComponentRoot: k,
  normalizeVNode: we
} = _;
function S() {
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
      t.push(i), e = r, (m(i) || C(i) && i.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, i) {
  const r = e.component = me(
    e,
    t,
    null
  ), o = be(
    r,
    !0
    /* isSSR */
  ), n = m(o);
  let a = r.sp;
  return n || a ? Promise.resolve(o).then(() => {
    if (n && (a = r.sp), a)
      return Promise.all(
        a.map((d) => d.call(r.proxy))
      );
  }).catch(w).then(() => x(r, i)) : x(r, i);
}
function x(e, t) {
  const i = e.type, { getBuffer: r, push: o } = S();
  if (V(i)) {
    let n = k(e);
    if (!i.props)
      for (const a in e.attrs)
        a.startsWith("data-v-") && ((n.props || (n.props = {}))[a] = "");
    b(o, e.subTree = n, e, t);
  } else {
    (!e.render || e.render === w) && !e.ssrRender && !i.ssrRender && u(i.template) && (i.ssrRender = ge(i.template));
    const n = e.ssrRender || i.ssrRender;
    if (n) {
      let a = e.inheritAttrs !== !1 ? e.attrs : void 0, s = !1, d = e;
      for (; ; ) {
        const c = d.vnode.scopeId;
        c && (s || (a = { ...a }, s = !0), a[c] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (t) {
        s || (a = { ...a });
        const c = t.trim().split(" ");
        for (let l = 0; l < c.length; l++)
          a[c[l]] = "";
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
    } else e.render && e.render !== w ? b(
      o,
      e.subTree = k(e),
      e,
      t
    ) : (i.name || i.__file, o("<!---->"));
  }
  return r();
}
function b(e, t, i, r) {
  const { type: o, shapeFlag: n, children: a, dirs: s, props: d } = t;
  switch (s && (t.props = ve(t, d, s)), o) {
    case L:
      e(p(a));
      break;
    case U:
      e(
        a ? `<!--${H(a)}-->` : "<!---->"
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
      n & 1 ? ye(e, t, i, r) : n & 6 ? e(T(t, i, r)) : n & 64 ? ke(e, t, i, r) : n & 128 && b(e, t.ssContent, i, r);
  }
}
function y(e, t, i, r) {
  for (let o = 0; o < t.length; o++)
    b(e, we(t[o]), i, r);
}
function ye(e, t, i, r) {
  const o = t.type;
  let { props: n, children: a, shapeFlag: s, scopeId: d } = t, f = `<${o}`;
  n && (f += de(n, o)), d && (f += ` ${d}`);
  let c = i, l = t;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (f += ` ${l.scopeId}`), c = c.parent;
  if (r && (f += ` ${r}`), e(f + ">"), !P(o)) {
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
  return O(t || {}, ...r);
}
function ke(e, t, i, r) {
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
const { isVNode: xe } = _;
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
  if (xe(e))
    return $(E({ render: () => e }), t);
  const i = N(e._component, e._props);
  i.appContext = e._context, e.provide(z, t);
  const r = await T(i), o = await R(r);
  if (await ze(t), t.__watcherHandles)
    for (const n of t.__watcherHandles)
      n();
  return o;
}
async function ze(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await R(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const _e = ["id"], Ce = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, i) => (oe(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, _e));
  }
});
ae(se);
const Te = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = ne(Ce, {
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
