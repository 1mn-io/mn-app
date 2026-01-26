import { k as B, j as E, i as N, l as z, m as _, p as m, N as b, q as V, u as f, F as M, S as j, C as H, v as L, T as O, x as p, y as P, z as U, A as C, B as F, D as I, n as D, E as G, G as W, H as K, I as q, J, K as Q, L as X, M as Y, O as Z, P as ee, Q as te, d as re, c as ie, o as oe, R as ae } from "./runtime-dom.esm-bundler-0qMN5c3K.js";
function ne(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const le = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--radius-xl:.75rem;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-3{height:calc(var(--spacing)*3)}.h-10{height:calc(var(--spacing)*10)}.h-32{height:calc(var(--spacing)*32)}.h-40{height:calc(var(--spacing)*40)}.h-auto{height:auto}.max-h-\\[35vh\\]{max-height:35vh}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-1\\/3{width:33.3333%}.w-2\\/3{width:66.6667%}.w-10{width:calc(var(--spacing)*10)}.w-16{width:calc(var(--spacing)*16)}.w-full{width:100%}.flex-1{flex:1}.animate-pulse{animation:var(--animate-pulse)}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.self-start{align-self:flex-start}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.bg-\\[\\#f0f2f5\\]{background-color:#f0f2f5}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-white{background-color:var(--color-white)}.bg-zinc-100{background-color:var(--color-zinc-100)}.bg-zinc-200{background-color:var(--color-zinc-200)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-blue-500{color:var(--color-blue-500)}.text-gray-500{color:var(--color-gray-500)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-white{color:var(--color-white)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-900{color:var(--color-zinc-900)}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@media(hover:hover){.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}}@media(min-width:40rem){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:48rem){.md\\:block{display:block}.md\\:h-64{height:calc(var(--spacing)*64)}.md\\:max-h-none{max-height:none}.md\\:w-40{width:calc(var(--spacing)*40)}.md\\:w-64{width:calc(var(--spacing)*64)}.md\\:w-fit{width:fit-content}.md\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:overflow-visible{overflow:visible}.md\\:bg-white{background-color:var(--color-white)}.md\\:p-4{padding:calc(var(--spacing)*4)}.md\\:p-6{padding:calc(var(--spacing)*6)}.md\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.md\\:shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.dark\\:bg-zinc-700:where(.dark .dark\\:bg-zinc-700){background-color:var(--color-zinc-700)}.dark\\:bg-zinc-800:where(.dark .dark\\:bg-zinc-800){background-color:var(--color-zinc-800)}.dark\\:bg-zinc-900:where(.dark .dark\\:bg-zinc-900){background-color:var(--color-zinc-900)}.dark\\:text-white:where(.dark .dark\\:text-white){color:var(--color-white)}.dark\\:text-zinc-100:where(.dark .dark\\:text-zinc-100){color:var(--color-zinc-100)}.dark\\:text-zinc-200:where(.dark .dark\\:text-zinc-200){color:var(--color-zinc-200)}.dark\\:text-zinc-300:where(.dark .dark\\:text-zinc-300){color:var(--color-zinc-300)}.dark\\:text-zinc-400:where(.dark .dark\\:text-zinc-400){color:var(--color-zinc-400)}@media(hover:hover){.dark\\:hover\\:bg-zinc-700:where(.dark .dark\\:hover\\:bg-zinc-700):hover{background-color:var(--color-zinc-700)}}@media(min-width:48rem){.dark\\:md\\:bg-zinc-800:where(.dark .dark\\:md\\:bg-zinc-800){background-color:var(--color-zinc-800)}}}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@keyframes pulse{50%{opacity:.5}}';
const se = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ce(e, t) {
  let i = "";
  for (let r in e) {
    if (se(r) || F(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const o = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? i += ` class="${he(o)}"` : r === "style" ? i += ` style="${pe(o)}"` : i += de(r, o, t);
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
function he(e) {
  return p(D(e));
}
function pe(e) {
  if (!e)
    return "";
  if (f(e))
    return p(e);
  const t = G(fe(e));
  return p(W(t));
}
function fe(e) {
  if (!C(e) && Z(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function ge(e, t, i, r, o) {
  e("<!--teleport start-->");
  const a = o.appContext.provides[z], n = a.__teleportBuffers || (a.__teleportBuffers = {}), l = n[i] || (n[i] = []), c = l.length;
  let h;
  if (r)
    t(e), h = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = S();
    s("<!--teleport start anchor-->"), t(s), s("<!--teleport anchor-->"), h = d();
  }
  l.splice(c, 0, h), e("<!--teleport end-->");
}
{
  const e = B(), t = (i, r) => {
    let o;
    return (o = e[i]) || (o = e[i] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((n) => n(a)) : o[0](a);
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
function ue(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: me,
  setCurrentRenderingInstance: x,
  setupComponent: we,
  renderComponentRoot: y,
  normalizeVNode: be
} = _;
function S() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(i) {
      const r = f(i);
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
  ), o = we(
    r,
    !0
    /* isSSR */
  ), a = m(o);
  let n = r.sp;
  return a || n ? Promise.resolve(o).then(() => {
    if (a && (n = r.sp), n)
      return Promise.all(
        n.map((c) => c.call(r.proxy))
      );
  }).catch(b).then(() => k(r, i)) : k(r, i);
}
function k(e, t) {
  const i = e.type, { getBuffer: r, push: o } = S();
  if (V(i)) {
    let a = y(e);
    if (!i.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((a.props || (a.props = {}))[n] = "");
    w(o, e.subTree = a, e, t);
  } else {
    (!e.render || e.render === b) && !e.ssrRender && !i.ssrRender && f(i.template) && (i.ssrRender = ue(i.template));
    const a = e.ssrRender || i.ssrRender;
    if (a) {
      let n = e.inheritAttrs !== !1 ? e.attrs : void 0, l = !1, c = e;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (l || (n = { ...n }, l = !0), n[d] = "");
        const s = c.parent;
        if (s && s.subTree && s.subTree === c.vnode)
          c = s;
        else
          break;
      }
      if (t) {
        l || (n = { ...n });
        const d = t.trim().split(" ");
        for (let s = 0; s < d.length; s++)
          n[d[s]] = "";
      }
      const h = x(e);
      try {
        a(
          e.proxy,
          o,
          e,
          n,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        x(h);
      }
    } else e.render && e.render !== b ? w(
      o,
      e.subTree = y(e),
      e,
      t
    ) : (i.name || i.__file, o("<!---->"));
  }
  return r();
}
function w(e, t, i, r) {
  const { type: o, shapeFlag: a, children: n, dirs: l, props: c } = t;
  switch (l && (t.props = xe(t, c, l)), o) {
    case O:
      e(p(n));
      break;
    case H:
      e(
        n ? `<!--${L(n)}-->` : "<!---->"
      );
      break;
    case j:
      e(n);
      break;
    case M:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), v(
        e,
        n,
        i,
        r
      ), e("<!--]-->");
      break;
    default:
      a & 1 ? ve(e, t, i, r) : a & 6 ? e(T(t, i, r)) : a & 64 ? ye(e, t, i, r) : a & 128 && w(e, t.ssContent, i, r);
  }
}
function v(e, t, i, r) {
  for (let o = 0; o < t.length; o++)
    w(e, be(t[o]), i, r);
}
function ve(e, t, i, r) {
  const o = t.type;
  let { props: a, children: n, shapeFlag: l, scopeId: c } = t, h = `<${o}`;
  a && (h += ce(a, o)), c && (h += ` ${c}`);
  let d = i, s = t;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (h += ` ${s.scopeId}`), d = d.parent;
  if (r && (h += ` ${r}`), e(h + ">"), !U(o)) {
    let g = !1;
    a && (a.innerHTML ? (g = !0, e(a.innerHTML)) : a.textContent ? (g = !0, e(p(a.textContent))) : o === "textarea" && a.value && (g = !0, e(p(a.value)))), g || (l & 8 ? e(p(n)) : l & 16 && v(
      e,
      n,
      i,
      r
    )), e(`</${o}>`);
  }
}
function xe(e, t, i) {
  const r = [];
  for (let o = 0; o < i.length; o++) {
    const a = i[o], {
      dir: { getSSRProps: n }
    } = a;
    if (n) {
      const l = n(a, e);
      l && r.push(l);
    }
  }
  return P(t || {}, ...r);
}
function ye(e, t, i, r) {
  const o = t.props && t.props.to, a = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!f(o))
    return [];
  ge(
    e,
    (n) => {
      v(
        n,
        t.children,
        i,
        r
      );
    },
    o,
    a || a === "",
    i
  );
}
const { isVNode: ke } = _;
function u(e, t, i) {
  if (!e.hasAsync)
    return t + A(e);
  let r = t;
  for (let o = i; o < e.length; o += 1) {
    const a = e[o];
    if (f(a)) {
      r += a;
      continue;
    }
    if (m(a))
      return a.then((l) => (e[o] = l, u(e, r, o)));
    const n = u(a, r, 0);
    if (m(n))
      return n.then((l) => (e[o] = l, u(e, "", o)));
    r = n;
  }
  return r;
}
function R(e) {
  return u(e, "", 0);
}
function A(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    f(r) ? t += r : t += A(r);
  }
  return t;
}
async function $(e, t = {}) {
  if (ke(e))
    return $(E({ render: () => e }), t);
  const i = N(e._component, e._props);
  i.appContext = e._context, e.provide(z, t);
  const r = await T(i), o = await R(r);
  if (await ze(t), t.__watcherHandles)
    for (const a of t.__watcherHandles)
      a();
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
ne(le);
const Te = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = ae(Ce, {
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
        let n = "";
        return n = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, n;
      })()
    };
  }
});
export {
  Te as index,
  Te as renderer
};
