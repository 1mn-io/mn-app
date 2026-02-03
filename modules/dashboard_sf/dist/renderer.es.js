import { l as B, k as E, j as N, m as z, p as _, q as m, N as w, x as V, y as h, F as M, S as j, C as U, z as H, T as L, A as g, B as O, D as P, E as C, G as F, H as I, n as W, I as D, J as G, K, L as q, M as J, O as Q, P as X, Q as Y, R as Z, U as ee, V as te, d as re, c as ae, o as ie, W as oe } from "./runtime-dom.esm-bundler-TS0XTwcF.js";
function ne(e, t) {
  t === void 0 && (t = {});
  var a = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", a === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const le = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-green-50:oklch(98.2% .018 155.826);--color-green-200:oklch(92.5% .084 155.995);--color-blue-50:oklch(97% .014 254.604);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-200:oklch(89.4% .057 293.283);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.fixed{position:fixed}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.bottom-0{bottom:calc(var(--spacing)*0)}.z-40{z-index:40}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.h-3{height:calc(var(--spacing)*3)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-32{height:calc(var(--spacing)*32)}.h-48{height:calc(var(--spacing)*48)}.h-auto{height:auto}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-1\\/3{width:33.3333%}.w-2\\/3{width:66.6667%}.w-10{width:calc(var(--spacing)*10)}.w-14{width:calc(var(--spacing)*14)}.w-16{width:calc(var(--spacing)*16)}.w-full{width:100%}.flex-1{flex:1}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.animate-pulse{animation:var(--animate-pulse)}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.self-start{align-self:flex-start}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-2xl{border-top-left-radius:var(--radius-2xl);border-top-right-radius:var(--radius-2xl)}.rounded-b-2xl{border-bottom-right-radius:var(--radius-2xl);border-bottom-left-radius:var(--radius-2xl)}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-\\[\\#f0f2f5\\]{border-color:#f0f2f5}.bg-\\[\\#f0f2f5\\]{background-color:#f0f2f5}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-200{background-color:var(--color-green-200)}.bg-violet-50{background-color:var(--color-violet-50)}.bg-violet-200{background-color:var(--color-violet-200)}.bg-white{background-color:var(--color-white)}.bg-zinc-100{background-color:var(--color-zinc-100)}.bg-zinc-200{background-color:var(--color-zinc-200)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-blue-500{color:var(--color-blue-500)}.text-gray-500{color:var(--color-gray-500)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-white{color:var(--color-white)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-900{color:var(--color-zinc-900)}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}@media(hover:hover){.hover\\:bg-blue-600:hover{background-color:var(--color-blue-600)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}}@media(min-width:40rem){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:48rem){.md\\:static{position:static}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:h-48{height:calc(var(--spacing)*48)}.md\\:w-40{width:calc(var(--spacing)*40)}.md\\:w-64{width:calc(var(--spacing)*64)}.md\\:w-fit{width:fit-content}.md\\:translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:gap-6{gap:calc(var(--spacing)*6)}:where(.md\\:space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.md\\:rounded-lg{border-radius:var(--radius-lg)}.md\\:rounded-none{border-radius:0}.md\\:border-0{border-style:var(--tw-border-style);border-width:0}.md\\:bg-gray-100{background-color:var(--color-gray-100)}.md\\:bg-transparent{background-color:#0000}.md\\:bg-white{background-color:var(--color-white)}.md\\:p-0{padding:calc(var(--spacing)*0)}.md\\:p-4{padding:calc(var(--spacing)*4)}.md\\:p-6{padding:calc(var(--spacing)*6)}.md\\:px-0{padding-inline:calc(var(--spacing)*0)}.md\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.md\\:shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media(min-width:64rem){.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}.dark\\:border-zinc-900:where(.dark .dark\\:border-zinc-900){border-color:var(--color-zinc-900)}.dark\\:bg-zinc-700:where(.dark .dark\\:bg-zinc-700){background-color:var(--color-zinc-700)}.dark\\:bg-zinc-800:where(.dark .dark\\:bg-zinc-800){background-color:var(--color-zinc-800)}.dark\\:bg-zinc-900:where(.dark .dark\\:bg-zinc-900){background-color:var(--color-zinc-900)}.dark\\:text-white:where(.dark .dark\\:text-white){color:var(--color-white)}.dark\\:text-zinc-100:where(.dark .dark\\:text-zinc-100){color:var(--color-zinc-100)}.dark\\:text-zinc-200:where(.dark .dark\\:text-zinc-200){color:var(--color-zinc-200)}.dark\\:text-zinc-300:where(.dark .dark\\:text-zinc-300){color:var(--color-zinc-300)}.dark\\:text-zinc-400:where(.dark .dark\\:text-zinc-400){color:var(--color-zinc-400)}@media(hover:hover){.dark\\:hover\\:bg-zinc-700:where(.dark .dark\\:hover\\:bg-zinc-700):hover{background-color:var(--color-zinc-700)}}@media(min-width:48rem){.dark\\:md\\:bg-zinc-800:where(.dark .dark\\:md\\:bg-zinc-800){background-color:var(--color-zinc-800)}.md\\:dark\\:bg-transparent:where(.dark .md\\:dark\\:bg-transparent){background-color:#0000}.md\\:dark\\:bg-zinc-700:where(.dark .md\\:dark\\:bg-zinc-700){background-color:var(--color-zinc-700)}.md\\:dark\\:bg-zinc-800:where(.dark .md\\:dark\\:bg-zinc-800){background-color:var(--color-zinc-800)}}}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes pulse{50%{opacity:.5}}';
const se = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ce(e, t) {
  let a = "";
  for (let r in e) {
    if (se(r) || F(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const i = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? a += ` class="${pe(i)}"` : r === "style" ? a += ` style="${ge(i)}"` : a += de(r, i, t);
  }
  return a;
}
function de(e, t, a) {
  if (!K(t))
    return "";
  const r = a && (a.indexOf("-") > 0 || q(a)) ? e : J[e] || e.toLowerCase();
  return Q(r) ? X(t) ? ` ${r}` : "" : Y(r) ? t === "" ? ` ${r}` : ` ${r}="${g(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function pe(e) {
  return g(W(e));
}
function ge(e) {
  if (!e)
    return "";
  if (h(e))
    return g(e);
  const t = D(he(e));
  return g(G(t));
}
function he(e) {
  if (!C(e) && Z(e)) {
    const t = {};
    for (const a in e)
      a.startsWith(":--") ? t[a.slice(1)] = ee(e[a]) : t[a] = e[a];
    return t;
  }
  return e;
}
function fe(e, t, a, r, i) {
  e("<!--teleport start-->");
  const o = i.appContext.provides[z], n = o.__teleportBuffers || (o.__teleportBuffers = {}), l = n[a] || (n[a] = []), c = l.length;
  let p;
  if (r)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = S();
    s("<!--teleport start anchor-->"), t(s), s("<!--teleport anchor-->"), p = d();
  }
  l.splice(c, 0, p), e("<!--teleport end-->");
}
{
  const e = B(), t = (a, r) => {
    let i;
    return (i = e[a]) || (i = e[a] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((n) => n(o)) : i[0](o);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (a) => a
  ), t(
    "__VUE_SSR_SETTERS__",
    (a) => a
  );
}
function ue(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: me,
  setCurrentRenderingInstance: y,
  setupComponent: be,
  renderComponentRoot: x,
  normalizeVNode: we
} = _;
function S() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(a) {
      const r = h(a);
      if (e && r) {
        t[t.length - 1] += a;
        return;
      }
      t.push(a), e = r, (m(a) || C(a) && a.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, a) {
  const r = e.component = me(
    e,
    t,
    null
  ), i = be(
    r,
    !0
    /* isSSR */
  ), o = m(i);
  let n = r.sp;
  return o || n ? Promise.resolve(i).then(() => {
    if (o && (n = r.sp), n)
      return Promise.all(
        n.map((c) => c.call(r.proxy))
      );
  }).catch(w).then(() => k(r, a)) : k(r, a);
}
function k(e, t) {
  const a = e.type, { getBuffer: r, push: i } = S();
  if (V(a)) {
    let o = x(e);
    if (!a.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((o.props || (o.props = {}))[n] = "");
    b(i, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === w) && !e.ssrRender && !a.ssrRender && h(a.template) && (a.ssrRender = ue(a.template));
    const o = e.ssrRender || a.ssrRender;
    if (o) {
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
      const p = y(e);
      try {
        o(
          e.proxy,
          i,
          e,
          n,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        y(p);
      }
    } else e.render && e.render !== w ? b(
      i,
      e.subTree = x(e),
      e,
      t
    ) : (a.name || a.__file, i("<!---->"));
  }
  return r();
}
function b(e, t, a, r) {
  const { type: i, shapeFlag: o, children: n, dirs: l, props: c } = t;
  switch (l && (t.props = ye(t, c, l)), i) {
    case L:
      e(g(n));
      break;
    case U:
      e(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case j:
      e(n);
      break;
    case M:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), v(
        e,
        n,
        a,
        r
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? ve(e, t, a, r) : o & 6 ? e(T(t, a, r)) : o & 64 ? xe(e, t, a, r) : o & 128 && b(e, t.ssContent, a, r);
  }
}
function v(e, t, a, r) {
  for (let i = 0; i < t.length; i++)
    b(e, we(t[i]), a, r);
}
function ve(e, t, a, r) {
  const i = t.type;
  let { props: o, children: n, shapeFlag: l, scopeId: c } = t, p = `<${i}`;
  o && (p += ce(o, i)), c && (p += ` ${c}`);
  let d = a, s = t;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (r && (p += ` ${r}`), e(p + ">"), !P(i)) {
    let f = !1;
    o && (o.innerHTML ? (f = !0, e(o.innerHTML)) : o.textContent ? (f = !0, e(g(o.textContent))) : i === "textarea" && o.value && (f = !0, e(g(o.value)))), f || (l & 8 ? e(g(n)) : l & 16 && v(
      e,
      n,
      a,
      r
    )), e(`</${i}>`);
  }
}
function ye(e, t, a) {
  const r = [];
  for (let i = 0; i < a.length; i++) {
    const o = a[i], {
      dir: { getSSRProps: n }
    } = o;
    if (n) {
      const l = n(o, e);
      l && r.push(l);
    }
  }
  return O(t || {}, ...r);
}
function xe(e, t, a, r) {
  const i = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!i)
    return [];
  if (!h(i))
    return [];
  fe(
    e,
    (n) => {
      v(
        n,
        t.children,
        a,
        r
      );
    },
    i,
    o || o === "",
    a
  );
}
const { isVNode: ke } = _;
function u(e, t, a) {
  if (!e.hasAsync)
    return t + A(e);
  let r = t;
  for (let i = a; i < e.length; i += 1) {
    const o = e[i];
    if (h(o)) {
      r += o;
      continue;
    }
    if (m(o))
      return o.then((l) => (e[i] = l, u(e, r, i)));
    const n = u(o, r, 0);
    if (m(n))
      return n.then((l) => (e[i] = l, u(e, "", i)));
    r = n;
  }
  return r;
}
function R(e) {
  return u(e, "", 0);
}
function A(e) {
  let t = "";
  for (let a = 0; a < e.length; a++) {
    let r = e[a];
    h(r) ? t += r : t += A(r);
  }
  return t;
}
async function $(e, t = {}) {
  if (ke(e))
    return $(E({ render: () => e }), t);
  const a = N(e._component, e._props);
  a.appContext = e._context, e.provide(z, t);
  const r = await T(a), i = await R(r);
  if (await ze(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return i;
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
    return (t, a) => (ie(), ae("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, _e));
  }
});
ne(le);
const Te = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = oe(Ce, {
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
