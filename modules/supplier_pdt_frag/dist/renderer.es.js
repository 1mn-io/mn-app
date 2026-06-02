const { ssrUtils: x, initDirectivesForSSR: O, createApp: I, createVNode: P, ssrContextKey: E, warn: w, Fragment: D, Static: G, Comment: U, Text: H, mergeProps: W, defineComponent: q, openBlock: K, createElementBlock: Y, createSSRApp: Z } = window.Vue;
function J(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const Q = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer tailwind-base{@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-500:oklch(63.7% .237 25.331);--color-red-900:oklch(39.6% .141 25.723);--color-green-500:oklch(72.3% .219 149.579);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-6xl:3.75rem;--text-6xl--line-height:1;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mt-2{margin-top:calc(var(--spacing) * 2)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.\\!flex{display:flex!important}.flex{display:flex}.h-12{height:calc(var(--spacing) * 12)}.min-h-screen{min-height:100vh}.\\!w-full{width:100%!important}.w-12{width:calc(var(--spacing) * 12)}.w-full{width:100%}.min-w-\\[100px\\]{min-width:100px}.min-w-\\[120px\\]{min-width:120px}.min-w-\\[150px\\]{min-width:150px}.min-w-\\[200px\\]{min-width:200px}.\\!flex-1{flex:1!important}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.\\!flex-col{flex-direction:column!important}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.\\!items-start{align-items:flex-start!important}.items-center{align-items:center}.items-start{align-items:flex-start}.\\!justify-between{justify-content:space-between!important}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.\\!gap-4{gap:calc(var(--spacing) * 4)!important}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-white{background-color:var(--color-white)}.p-4{padding:calc(var(--spacing) * 4)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-8{padding-block:calc(var(--spacing) * 8)}.py-12{padding-block:calc(var(--spacing) * 12)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\!text-gray-500{color:var(--color-gray-500)!important}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-900{color:var(--color-gray-900)}.text-green-500{color:var(--color-green-500)}.text-red-500{color:var(--color-red-500)}.capitalize{text-transform:capitalize}.\\!shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(min-width:40rem){.sm\\:\\!w-48{width:calc(var(--spacing) * 48)!important}.sm\\:\\!w-96{width:calc(var(--spacing) * 96)!important}.sm\\:\\!w-auto{width:auto!important}.sm\\:w-48{width:calc(var(--spacing) * 48)}.sm\\:w-96{width:calc(var(--spacing) * 96)}.sm\\:w-auto{width:auto}.sm\\:\\!flex-row{flex-direction:row!important}.sm\\:flex-row{flex-direction:row}.sm\\:\\!items-center{align-items:center!important}.sm\\:items-center{align-items:center}}@media(min-width:48rem){.md\\:p-6{padding:calc(var(--spacing) * 6)}}@media(min-width:64rem){.lg\\:p-8{padding:calc(var(--spacing) * 8)}}@media(prefers-color-scheme:dark){.dark\\:border-gray-700{border-color:var(--color-gray-700)}.dark\\:bg-gray-800{background-color:var(--color-gray-800)}.dark\\:bg-gray-800\\/50{background-color:#1e293980}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-gray-800\\/50{background-color:color-mix(in oklab,var(--color-gray-800) 50%,transparent)}}.dark\\:bg-gray-900{background-color:var(--color-gray-900)}.dark\\:bg-red-900\\/30{background-color:#82181a4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-900\\/30{background-color:color-mix(in oklab,var(--color-red-900) 30%,transparent)}}.dark\\:\\!text-gray-400{color:var(--color-gray-400)!important}.dark\\:text-gray-300{color:var(--color-gray-300)}.dark\\:text-gray-400{color:var(--color-gray-400)}.dark\\:text-gray-500{color:var(--color-gray-500)}.dark\\:text-gray-600{color:var(--color-gray-600)}.dark\\:text-white{color:var(--color-white)}}}}@layer primevue;@layer tailwind-utilities{::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888;border-radius:4px}::-webkit-scrollbar-thumb:hover{background:#555}.dark ::-webkit-scrollbar-track{background:#374151}.dark ::-webkit-scrollbar-thumb{background:#6b7280}.dark ::-webkit-scrollbar-thumb:hover{background:#9ca3af}*{transition:background-color .3s,border-color .3s,color .3s}}.p-inputtext,.p-select,.p-button{font-family:inherit}.p-datatable-loading-overlay{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.p-tag{animation:.3s ease-in-out fadeIn}@keyframes fadeIn{0%{opacity:0;transform:translateY(-2px)}to{opacity:1;transform:translateY(0)}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}';
// @__NO_SIDE_EFFECTS__
function v(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const S = () => {
}, X = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), k = Array.isArray, u = (e) => typeof e == "function", p = (e) => typeof e == "string", C = (e) => e !== null && typeof e == "object", b = (e) => (C(e) || u(e)) && u(e.then) && u(e.catch), ee = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, te = /\B([A-Z])/g, re = ee(
  (e) => e.replace(te, "-$1").toLowerCase()
);
let z;
const oe = () => z || (z = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function N(e) {
  if (k(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const o = e[r], i = p(o) ? se(o) : N(o);
      if (i)
        for (const n in i)
          t[n] = i[n];
    }
    return t;
  } else if (p(e) || C(e))
    return e;
}
const ie = /;(?![^(]*\))/g, ne = /:([^]+)/, ae = /\/\*[^]*?\*\//g;
function se(e) {
  const t = {};
  return e.replace(ae, "").split(ie).forEach((r) => {
    if (r) {
      const o = r.split(ne);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function le(e) {
  if (!e) return "";
  if (p(e)) return e;
  let t = "";
  for (const r in e) {
    const o = e[r];
    if (p(o) || typeof o == "number") {
      const i = r.startsWith("--") ? r : re(r);
      t += `${i}:${o};`;
    }
  }
  return t;
}
function B(e) {
  let t = "";
  if (p(e))
    t = e;
  else if (k(e))
    for (let r = 0; r < e.length; r++) {
      const o = B(e[r]);
      o && (t += o + " ");
    }
  else if (C(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const ce = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", de = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", fe = /* @__PURE__ */ v(ce), pe = /* @__PURE__ */ v(de), he = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ge = /* @__PURE__ */ v(
  he + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ue(e) {
  return !!e || e === "";
}
const me = /[>/="'\u0009\u000a\u000c\u0020]/, _ = {};
function we(e) {
  if (_.hasOwnProperty(e))
    return _[e];
  const t = me.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), _[e] = !t;
}
const be = {
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
const xe = /["'&<>]/;
function h(e) {
  const t = "" + e, r = xe.exec(t);
  if (!r)
    return t;
  let o = "", i, n, a = 0;
  for (n = r.index; n < t.length; n++) {
    switch (t.charCodeAt(n)) {
      case 34:
        i = "&quot;";
        break;
      case 38:
        i = "&amp;";
        break;
      case 39:
        i = "&#39;";
        break;
      case 60:
        i = "&lt;";
        break;
      case 62:
        i = "&gt;";
        break;
      default:
        continue;
    }
    a !== n && (o += t.slice(a, n)), a = n + 1, o += i;
  }
  return a !== n ? o + t.slice(a, n) : o;
}
const ve = /^-?>|<!--|-->|--!>|<!-$/g;
function ke(e) {
  return e.replace(ve, "");
}
function Ce(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
const _e = /* @__PURE__ */ v(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Se(e, t) {
  let r = "";
  for (let o in e) {
    if (_e(o) || X(o) || t === "textarea" && o === "value" || // force as property (not rendered in SSR)
    o.startsWith("."))
      continue;
    const i = e[o];
    o.startsWith("^") && (o = o.slice(1)), o === "class" ? r += ` class="${ze(i)}"` : o === "style" ? r += ` style="${Ae(i)}"` : o === "className" ? i != null && (r += ` class="${h(String(i))}"`) : r += Te(o, i, t);
  }
  return r;
}
function Te(e, t, r) {
  if (!ye(t))
    return "";
  const o = r && (r.indexOf("-") > 0 || fe(r)) ? e : be[e] || e.toLowerCase();
  return ge(o) ? ue(t) ? ` ${o}` : "" : we(o) ? t === "" ? ` ${o}` : ` ${o}="${h(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function ze(e) {
  return h(B(e));
}
function Ae(e) {
  if (!e)
    return "";
  if (p(e))
    return h(e);
  const t = N(Re(e));
  return h(le(t));
}
function Re(e) {
  if (!k(e) && C(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = Ce(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
const { ensureValidVNode: Ge } = x;
function $e(e, t, r, o, i) {
  e("<!--teleport start-->");
  const n = i.appContext.provides[E], a = n.__teleportBuffers || (n.__teleportBuffers = {}), s = a[r] || (a[r] = []), c = s.length;
  let f;
  if (o)
    t(e), f = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = V();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), f = d();
  }
  s.splice(c, 0, f), e("<!--teleport end-->");
}
{
  const e = oe(), t = (r, o) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(o), (n) => {
      i.length > 1 ? i.forEach((a) => a(n)) : i[0](n);
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
function Ee(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Ne,
  setCurrentRenderingInstance: A,
  setupComponent: Be,
  renderComponentRoot: R,
  normalizeVNode: Ve,
  pushWarningContext: Ue,
  popWarningContext: He
} = x;
function V() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const o = p(r);
      if (e && o) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = o, (b(r) || k(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function M(e, t = null, r) {
  const o = e.component = Ne(
    e,
    t,
    null
  ), i = Be(
    o,
    !0
    /* isSSR */
  ), n = b(i);
  let a = o.sp;
  return n || a ? Promise.resolve(i).then(() => {
    if (n && (a = o.sp), a)
      return Promise.all(
        a.map((c) => c.call(o.proxy))
      );
  }).catch(S).then(() => $(o, r)) : $(o, r);
}
function $(e, t) {
  const r = e.type, { getBuffer: o, push: i } = V();
  if (u(r)) {
    let n = R(e);
    if (!r.props)
      for (const a in e.attrs)
        a.startsWith("data-v-") && ((n.props || (n.props = {}))[a] = "");
    y(i, e.subTree = n, e, t);
  } else {
    (!e.render || e.render === S) && !e.ssrRender && !r.ssrRender && p(r.template) && (r.ssrRender = Ee(r.template));
    const n = e.ssrRender || r.ssrRender;
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
      const f = A(e);
      try {
        n(
          e.proxy,
          i,
          e,
          a,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        A(f);
      }
    } else if (e.render && e.render !== S)
      y(
        i,
        e.subTree = R(e),
        e,
        t
      );
    else {
      const a = r.name || r.__file || "<Anonymous>";
      w(`Component ${a} is missing template or render function.`), i("<!---->");
    }
  }
  return o();
}
function y(e, t, r, o) {
  const { type: i, shapeFlag: n, children: a, dirs: s, props: c } = t;
  switch (s && (t.props = je(t, c, s)), i) {
    case H:
      e(h(a));
      break;
    case U:
      e(
        a ? `<!--${ke(a)}-->` : "<!---->"
      );
      break;
    case G:
      e(a);
      break;
    case D:
      t.slotScopeIds && (o = (o ? o + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), T(
        e,
        a,
        r,
        o
      ), e("<!--]-->");
      break;
    default:
      n & 1 ? Me(e, t, r, o) : n & 6 ? e(M(t, r, o)) : n & 64 ? Fe(e, t, r, o) : n & 128 ? y(e, t.ssContent, r, o) : w(
        "[@vue/server-renderer] Invalid VNode type:",
        i,
        `(${typeof i})`
      );
  }
}
function T(e, t, r, o) {
  for (let i = 0; i < t.length; i++)
    y(e, Ve(t[i]), r, o);
}
function Me(e, t, r, o) {
  const i = t.type;
  let { props: n, children: a, shapeFlag: s, scopeId: c } = t, f = `<${i}`;
  n && (f += Se(n, i)), c && (f += ` ${c}`);
  let d = r, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (f += ` ${l.scopeId}`), d = d.parent;
  if (o && (f += ` ${o}`), e(f + ">"), !pe(i)) {
    let g = !1;
    n && (n.innerHTML ? (g = !0, e(n.innerHTML)) : n.textContent ? (g = !0, e(h(n.textContent))) : i === "textarea" && n.value && (g = !0, e(h(n.value)))), g || (s & 8 ? e(h(a)) : s & 16 && T(
      e,
      a,
      r,
      o
    )), e(`</${i}>`);
  }
}
function je(e, t, r) {
  const o = [];
  for (let i = 0; i < r.length; i++) {
    const n = r[i], {
      dir: { getSSRProps: a }
    } = n;
    if (a) {
      const s = a(n, e);
      s && o.push(s);
    }
  }
  return W(t || {}, ...o);
}
function Fe(e, t, r, o) {
  const i = t.props && t.props.to, n = t.props && t.props.disabled;
  if (!i)
    return n || w("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!p(i))
    return w(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  $e(
    e,
    (a) => {
      T(
        a,
        t.children,
        r,
        o
      );
    },
    i,
    n || n === "",
    r
  );
}
const { isVNode: Le } = x;
function m(e, t, r) {
  if (!e.hasAsync)
    return t + F(e);
  let o = t;
  for (let i = r; i < e.length; i += 1) {
    const n = e[i];
    if (p(n)) {
      o += n;
      continue;
    }
    if (b(n))
      return n.then((s) => (e[i] = s, m(e, o, i)));
    const a = m(n, o, 0);
    if (b(a))
      return a.then((s) => (e[i] = s, m(e, "", i)));
    o = a;
  }
  return o;
}
function j(e) {
  return m(e, "", 0);
}
function F(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    p(o) ? t += o : t += F(o);
  }
  return t;
}
async function L(e, t = {}) {
  if (Le(e))
    return L(I({ render: () => e }), t);
  const r = P(e._component, e._props);
  r.appContext = e._context, e.provide(E, t);
  const o = await M(r), i = await j(o);
  if (await Oe(t), t.__watcherHandles)
    for (const n of t.__watcherHandles)
      n();
  return i;
}
async function Oe(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await j(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
const { isVNode: We } = x;
O();
const Ie = ["id"], Pe = /* @__PURE__ */ q({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(e) {
    return (t, r) => (K(), Y("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Ie));
  }
});
J(Q);
const qe = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const o = Z(Pe, {
      _p: e,
      _pp: t
    });
    return {
      r: `
                 <div>
                    ${await L(o)}
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
  qe as index,
  qe as renderer
};
