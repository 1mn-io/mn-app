import { q as B, s as _, p as N, g as E, u as z, x as w, N as y, y as V, z as g, F as M, S as j, C as U, A as H, B as L, D as f, E as C, G as O, H as P, I as F, J as I, n as D, K as G, L as K, M as W, O as q, P as J, Q, R as X, U as Y, V as Z, W as ee, X as te, d as re, b as oe, f as ae, t as ie, e as ne, Y as se } from "./runtime-dom.esm-bundler-CbE7ofbY.js";
function le(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", r === "top" && o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
const de = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-pink-50:oklch(97.1% .014 343.198);--color-pink-400:oklch(71.8% .202 349.761);--color-pink-500:oklch(65.6% .241 354.308);--color-pink-600:oklch(59.2% .249 .584);--color-pink-700:oklch(52.5% .223 3.958);--color-pink-900:oklch(40.8% .153 2.432);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-4xl:56rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-medium:500;--font-weight-bold:700;--font-weight-black:900;--tracking-wide:.025em;--tracking-widest:.1em;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.relative{position:relative}.top-1\\/2{top:50%}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.right-3{right:calc(var(--spacing)*3)}.left-0{left:calc(var(--spacing)*0)}.z-50{z-index:50}.z-\\[60\\]{z-index:60}.mx-4{margin-inline:calc(var(--spacing)*4)}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.flex{display:flex}.hidden{display:none}.table{display:table}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-full{height:100%}.max-h-\\[60vh\\]{max-height:60vh}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-48{width:calc(var(--spacing)*48)}.w-full{width:100%}.max-w-4xl{max-width:var(--container-4xl)}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.rotate-180{rotate:180deg}.animate-spin{animation:var(--animate-spin)}.resize{resize:both}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-l-lg{border-top-left-radius:var(--radius-lg);border-bottom-left-radius:var(--radius-lg)}.rounded-r-lg{border-top-right-radius:var(--radius-lg);border-bottom-right-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-pink-500{border-color:var(--color-pink-500)}.border-t-transparent{border-top-color:#0000}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-pink-50{background-color:var(--color-pink-50)}.bg-pink-600{background-color:var(--color-pink-600)}.bg-white{background-color:var(--color-white)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-6{padding:calc(var(--spacing)*6)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.pr-12{padding-right:calc(var(--spacing)*12)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-left{text-align:left}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-\\[10px\\]{font-size:10px}.font-black{--tw-font-weight:var(--font-weight-black);font-weight:var(--font-weight-black)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.whitespace-nowrap{white-space:nowrap}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-700{color:var(--color-gray-700)}.text-pink-600{color:var(--color-pink-600)}.text-pink-700{color:var(--color-pink-700)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.placeholder-gray-400::placeholder{color:var(--color-gray-400)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media(hover:hover){.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-pink-50:hover{background-color:var(--color-pink-50)}.hover\\:bg-pink-700:hover{background-color:var(--color-pink-700)}.hover\\:text-pink-600:hover{color:var(--color-pink-600)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.disabled\\:bg-gray-300:disabled{background-color:var(--color-gray-300)}@media(min-width:48rem){.md\\:mx-0{margin-inline:calc(var(--spacing)*0)}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:rounded-none{border-radius:0}.md\\:border-x-0{border-inline-style:var(--tw-border-style);border-inline-width:0}.md\\:border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.md\\:px-0{padding-inline:calc(var(--spacing)*0)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}}@media(prefers-color-scheme:dark){.dark\\:border-gray-700{border-color:var(--color-gray-700)}.dark\\:border-gray-800{border-color:var(--color-gray-800)}.dark\\:bg-gray-800{background-color:var(--color-gray-800)}.dark\\:bg-gray-800\\/50{background-color:#1e293980}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-gray-800\\/50{background-color:color-mix(in oklab,var(--color-gray-800)50%,transparent)}}.dark\\:bg-gray-900{background-color:var(--color-gray-900)}.dark\\:bg-pink-900\\/20{background-color:#86104333}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-pink-900\\/20{background-color:color-mix(in oklab,var(--color-pink-900)20%,transparent)}}.dark\\:text-gray-200{color:var(--color-gray-200)}.dark\\:text-gray-300{color:var(--color-gray-300)}.dark\\:text-pink-400{color:var(--color-pink-400)}.dark\\:text-white{color:var(--color-white)}@media(hover:hover){.dark\\:hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.dark\\:hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.dark\\:hover\\:bg-pink-900\\/20:hover{background-color:#86104333}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-pink-900\\/20:hover{background-color:color-mix(in oklab,var(--color-pink-900)20%,transparent)}}}.dark\\:disabled\\:bg-gray-800:disabled{background-color:var(--color-gray-800)}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}';
const ce = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pe(e, t) {
  let r = "";
  for (const o in e) {
    if (ce(o) || I(o) || t === "textarea" && o === "value")
      continue;
    const a = e[o];
    o === "class" ? r += ` class="${ge(a)}"` : o === "style" ? r += ` style="${he(a)}"` : o === "className" ? r += ` class="${String(a)}"` : r += fe(o, a, t);
  }
  return r;
}
function fe(e, t, r) {
  if (!W(t))
    return "";
  const o = r && (r.indexOf("-") > 0 || q(r)) ? e : J[e] || e.toLowerCase();
  return Q(o) ? X(t) ? ` ${o}` : "" : Y(o) ? t === "" ? ` ${o}` : ` ${o}="${f(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function ge(e) {
  return f(D(e));
}
function he(e) {
  if (!e)
    return "";
  if (g(e))
    return f(e);
  const t = G(ue(e));
  return f(K(t));
}
function ue(e) {
  if (!C(e) && Z(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = ee(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
function we(e, t, r, o, a) {
  e("<!--teleport start-->");
  const i = a.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), s = n[r] || (n[r] = []), d = s.length;
  let p;
  if (o)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: l } = S();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = c();
  }
  s.splice(d, 0, p), e("<!--teleport end-->");
}
{
  const e = B(), t = (r, o) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(o), (i) => {
      a.length > 1 ? a.forEach((n) => n(i)) : a[0](i);
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
function be(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ye,
  setCurrentRenderingInstance: m,
  setupComponent: ve,
  renderComponentRoot: k,
  normalizeVNode: me
} = _;
function S() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const o = g(r);
      if (e && o) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = o, (w(r) || C(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, r) {
  const o = e.component = ye(
    e,
    t,
    null
  ), a = ve(
    o,
    !0
    /* isSSR */
  ), i = w(a);
  let n = o.sp;
  return i || n ? Promise.resolve(a).then(() => {
    if (i && (n = o.sp), n)
      return Promise.all(
        n.map((d) => d.call(o.proxy))
      );
  }).catch(y).then(() => x(o, r)) : x(o, r);
}
function x(e, t) {
  const r = e.type, { getBuffer: o, push: a } = S();
  if (V(r)) {
    let i = k(e);
    if (!r.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    b(a, e.subTree = i, e, t);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !r.ssrRender && g(r.template) && (r.ssrRender = be(r.template));
    const i = e.ssrRender || r.ssrRender;
    if (i) {
      let n = e.inheritAttrs !== !1 ? e.attrs : void 0, s = !1, d = e;
      for (; ; ) {
        const c = d.vnode.scopeId;
        c && (s || (n = { ...n }, s = !0), n[c] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (t) {
        s || (n = { ...n });
        const c = t.trim().split(" ");
        for (let l = 0; l < c.length; l++)
          n[c[l]] = "";
      }
      const p = m(e);
      try {
        i(
          e.proxy,
          a,
          e,
          n,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        m(p);
      }
    } else e.render && e.render !== y ? b(
      a,
      e.subTree = k(e),
      e,
      t
    ) : (r.name || r.__file, a("<!---->"));
  }
  return o();
}
function b(e, t, r, o) {
  const { type: a, shapeFlag: i, children: n, dirs: s, props: d } = t;
  switch (s && (t.props = xe(t, d, s)), a) {
    case L:
      e(f(n));
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
      t.slotScopeIds && (o = (o ? o + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), v(
        e,
        n,
        r,
        o
      ), e("<!--]-->");
      break;
    default:
      i & 1 ? ke(e, t, r, o) : i & 6 ? e(T(t, r, o)) : i & 64 ? _e(e, t, r, o) : i & 128 && b(e, t.ssContent, r, o);
  }
}
function v(e, t, r, o) {
  for (let a = 0; a < t.length; a++)
    b(e, me(t[a]), r, o);
}
function ke(e, t, r, o) {
  const a = t.type;
  let { props: i, children: n, shapeFlag: s, scopeId: d } = t, p = `<${a}`;
  i && (p += pe(i, a)), d && (p += ` ${d}`);
  let c = r, l = t;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (p += ` ${l.scopeId}`), c = c.parent;
  if (o && (p += ` ${o}`), e(p + ">"), !P(a)) {
    let h = !1;
    i && (i.innerHTML ? (h = !0, e(i.innerHTML)) : i.textContent ? (h = !0, e(f(i.textContent))) : a === "textarea" && i.value && (h = !0, e(f(i.value)))), h || (s & 8 ? e(f(n)) : s & 16 && v(
      e,
      n,
      r,
      o
    )), e(`</${a}>`);
  }
}
function xe(e, t, r) {
  const o = [];
  for (let a = 0; a < r.length; a++) {
    const i = r[a], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const s = n(i, e);
      s && o.push(s);
    }
  }
  return O(t || {}, ...o);
}
function _e(e, t, r, o) {
  const a = t.props && t.props.to, i = t.props && t.props.disabled;
  if (!a)
    return [];
  if (!g(a))
    return [];
  we(
    e,
    (n) => {
      v(
        n,
        t.children,
        r,
        o
      );
    },
    a,
    i || i === "",
    r
  );
}
const { isVNode: ze } = _;
function u(e, t, r) {
  if (!e.hasAsync)
    return t + R(e);
  let o = t;
  for (let a = r; a < e.length; a += 1) {
    const i = e[a];
    if (g(i)) {
      o += i;
      continue;
    }
    if (w(i))
      return i.then((s) => (e[a] = s, u(e, o, a)));
    const n = u(i, o, 0);
    if (w(n))
      return n.then((s) => (e[a] = s, u(e, "", a)));
    o = n;
  }
  return o;
}
function $(e) {
  return u(e, "", 0);
}
function R(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    g(o) ? t += o : t += R(o);
  }
  return t;
}
async function A(e, t = {}) {
  if (ze(e))
    return A(N({ render: () => e }), t);
  const r = E(e._component, e._props);
  r.appContext = e._context, e.provide(z, t);
  const o = await T(r), a = await $(o);
  if (await Ce(t), t.__watcherHandles)
    for (const i of t.__watcherHandles)
      i();
  return a;
}
async function Ce(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await $(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const Se = ["id"], Te = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, r) => (ne(), oe("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      ae("p", null, ie(e._$p.data.curr.data.data), 1)
    ], 8, Se));
  }
});
le(de);
const Re = async (e) => ({
  set: async (t, r) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const a = se(Te, {
      _p: e,
      _$p: t,
      _$cb: r
    });
    return {
      r: `
                 <div>
                    ${await A(a)}
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
