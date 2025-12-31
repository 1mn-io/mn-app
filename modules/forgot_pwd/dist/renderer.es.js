import { q as N, s as _, p as E, k as B, u as z, x as w, N as y, y as V, z as g, F as M, S as j, C as U, A as H, B as L, D as u, E as C, G as O, H as P, I as F, J as I, n as D, K as G, L as K, M as W, O as q, P as J, Q, R as X, U as Y, V as Z, W as ee, X as re, d as te, Y as oe } from "./runtime-dom.esm-bundler-j-zIL_Z6.js";
function ae(e, r) {
  r === void 0 && (r = {});
  var t = r.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", t === "top" && o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
const ie = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-300:oklch(80.8% .114 19.571);--color-red-400:oklch(70.4% .191 22.216);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-green-50:oklch(98.2% .018 155.826);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-400:oklch(79.2% .209 151.711);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-800:oklch(43.8% .218 303.724);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-widest:.1em;--radius-md:.375rem;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.bottom-10{bottom:calc(var(--spacing)*10)}.left-1\\/2{left:50%}.z-50{z-index:50}.mx-auto{margin-inline:auto}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-10{margin-top:calc(var(--spacing)*10)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-5{margin-right:calc(var(--spacing)*5)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.table{display:table}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-10{height:calc(var(--spacing)*10)}.h-full{height:100%}.min-h-full{min-height:100%}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-auto{width:auto}.w-full{width:100%}.max-w-sm{max-width:var(--container-sm)}.flex-1{flex:1}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-2{--tw-translate-y:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-green-200{border-color:var(--color-green-200)}.border-red-200{border-color:var(--color-red-200)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-green-50{background-color:var(--color-green-50)}.bg-purple-600{background-color:var(--color-purple-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-white{background-color:var(--color-white)}.fill-purple-600{fill:var(--color-purple-600)}.stroke-gray-800{stroke:var(--color-gray-800)}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-12{padding-block:calc(var(--spacing)*12)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\/6{font-size:var(--text-sm);line-height:calc(var(--spacing)*6)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[1em\\]{--tw-tracking:1em;letter-spacing:1em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-green-400{color:var(--color-green-400)}.text-green-800{color:var(--color-green-800)}.text-purple-600{color:var(--color-purple-600)}.text-purple-700{color:var(--color-purple-700)}.text-red-400{color:var(--color-red-400)}.text-red-800{color:var(--color-red-800)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.-outline-offset-1{outline-offset:-1px}.outline-gray-300{outline-color:var(--color-gray-300)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-100{--tw-duration:.1s;transition-duration:.1s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}@media(hover:hover){.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-purple-700:hover{background-color:var(--color-purple-700)}.hover\\:text-purple-800:hover{color:var(--color-purple-800)}.hover\\:opacity-100:hover{opacity:1}}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:-outline-offset-2:focus{outline-offset:-2px}.focus\\:outline-purple-600:focus{outline-color:var(--color-purple-600)}.focus-visible\\:ring-transparent:focus-visible{--tw-ring-color:transparent}.focus-visible\\:outline:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-purple-600:focus-visible{outline-color:var(--color-purple-600)}.disabled\\:text-gray-400:disabled{color:var(--color-gray-400)}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:mx-auto{margin-inline:auto}.sm\\:w-full{width:100%}.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:translate-x-2{--tw-translate-x:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media(min-width:64rem){.lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}.dark\\:border-gray-700:where(.dark,.dark *){border-color:var(--color-gray-700)}.dark\\:border-green-700:where(.dark,.dark *){border-color:var(--color-green-700)}.dark\\:border-red-800:where(.dark,.dark *){border-color:var(--color-red-800)}.dark\\:bg-gray-800:where(.dark,.dark *){background-color:var(--color-gray-800)}.dark\\:bg-gray-900:where(.dark,.dark *){background-color:var(--color-gray-900)}.dark\\:bg-green-900\\/30:where(.dark,.dark *){background-color:#0d542b4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-green-900\\/30:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-green-900)30%,transparent)}}.dark\\:bg-purple-700:where(.dark,.dark *){background-color:var(--color-purple-700)}.dark\\:bg-red-900\\/30:where(.dark,.dark *){background-color:#82181a4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-900\\/30:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-red-900)30%,transparent)}}.dark\\:fill-purple-400:where(.dark,.dark *){fill:var(--color-purple-400)}.dark\\:stroke-gray-200:where(.dark,.dark *){stroke:var(--color-gray-200)}.dark\\:text-gray-100:where(.dark,.dark *){color:var(--color-gray-100)}.dark\\:text-gray-200:where(.dark,.dark *){color:var(--color-gray-200)}.dark\\:text-gray-300:where(.dark,.dark *){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark,.dark *){color:var(--color-gray-400)}.dark\\:text-gray-500:where(.dark,.dark *){color:var(--color-gray-500)}.dark\\:text-green-200:where(.dark,.dark *){color:var(--color-green-200)}.dark\\:text-green-300:where(.dark,.dark *){color:var(--color-green-300)}.dark\\:text-purple-300:where(.dark,.dark *){color:var(--color-purple-300)}.dark\\:text-purple-400:where(.dark,.dark *){color:var(--color-purple-400)}.dark\\:text-red-200:where(.dark,.dark *){color:var(--color-red-200)}.dark\\:text-red-300:where(.dark,.dark *){color:var(--color-red-300)}.dark\\:outline-gray-700:where(.dark,.dark *){outline-color:var(--color-gray-700)}@media(hover:hover){.dark\\:hover\\:bg-gray-700:where(.dark,.dark *):hover{background-color:var(--color-gray-700)}.dark\\:hover\\:bg-purple-600:where(.dark,.dark *):hover{background-color:var(--color-purple-600)}.dark\\:hover\\:text-purple-300:where(.dark,.dark *):hover{color:var(--color-purple-300)}}.dark\\:focus\\:outline-purple-500:where(.dark,.dark *):focus,.dark\\:focus-visible\\:outline-purple-500:where(.dark,.dark *):focus-visible{outline-color:var(--color-purple-500)}.dark\\:disabled\\:text-gray-500:where(.dark,.dark *):disabled{color:var(--color-gray-500)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}';
const ne = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function le(e, r) {
  let t = "";
  for (const o in e) {
    if (ne(o) || I(o) || r === "textarea" && o === "value")
      continue;
    const a = e[o];
    o === "class" ? t += ` class="${ce(a)}"` : o === "style" ? t += ` style="${de(a)}"` : o === "className" ? t += ` class="${String(a)}"` : t += se(o, a, r);
  }
  return t;
}
function se(e, r, t) {
  if (!W(r))
    return "";
  const o = t && (t.indexOf("-") > 0 || q(t)) ? e : J[e] || e.toLowerCase();
  return Q(o) ? X(r) ? ` ${o}` : "" : Y(o) ? r === "" ? ` ${o}` : ` ${o}="${u(r)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function ce(e) {
  return u(D(e));
}
function de(e) {
  if (!e)
    return "";
  if (g(e))
    return u(e);
  const r = G(pe(e));
  return u(K(r));
}
function pe(e) {
  if (!C(e) && Z(e)) {
    const r = {};
    for (const t in e)
      t.startsWith(":--") ? r[t.slice(1)] = ee(e[t]) : r[t] = e[t];
    return r;
  }
  return e;
}
function ue(e, r, t, o, a) {
  e("<!--teleport start-->");
  const i = a.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[t] || (n[t] = []), c = l.length;
  let p;
  if (o)
    r(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = S();
    s("<!--teleport start anchor-->"), r(s), s("<!--teleport anchor-->"), p = d();
  }
  l.splice(c, 0, p), e("<!--teleport end-->");
}
{
  const e = N(), r = (t, o) => {
    let a;
    return (a = e[t]) || (a = e[t] = []), a.push(o), (i) => {
      a.length > 1 ? a.forEach((n) => n(i)) : a[0](i);
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
function ge(e, r) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: fe,
  setCurrentRenderingInstance: b,
  setupComponent: he,
  renderComponentRoot: k,
  normalizeVNode: we
} = _;
function S() {
  let e = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(t) {
      const o = g(t);
      if (e && o) {
        r[r.length - 1] += t;
        return;
      }
      r.push(t), e = o, (w(t) || C(t) && t.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function T(e, r = null, t) {
  const o = e.component = fe(
    e,
    r,
    null
  ), a = he(
    o,
    !0
    /* isSSR */
  ), i = w(a);
  let n = o.sp;
  return i || n ? Promise.resolve(a).then(() => {
    if (i && (n = o.sp), n)
      return Promise.all(
        n.map((c) => c.call(o.proxy))
      );
  }).catch(y).then(() => x(o, t)) : x(o, t);
}
function x(e, r) {
  const t = e.type, { getBuffer: o, push: a } = S();
  if (V(t)) {
    let i = k(e);
    if (!t.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    v(a, e.subTree = i, e, r);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !t.ssrRender && g(t.template) && (t.ssrRender = ge(t.template));
    const i = e.ssrRender || t.ssrRender;
    if (i) {
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
      if (r) {
        l || (n = { ...n });
        const d = r.trim().split(" ");
        for (let s = 0; s < d.length; s++)
          n[d[s]] = "";
      }
      const p = b(e);
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
        b(p);
      }
    } else e.render && e.render !== y ? v(
      a,
      e.subTree = k(e),
      e,
      r
    ) : (t.name || t.__file, a("<!---->"));
  }
  return o();
}
function v(e, r, t, o) {
  const { type: a, shapeFlag: i, children: n, dirs: l, props: c } = r;
  switch (l && (r.props = ye(r, c, l)), a) {
    case L:
      e(u(n));
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
      r.slotScopeIds && (o = (o ? o + " " : "") + r.slotScopeIds.join(" ")), e("<!--[-->"), m(
        e,
        n,
        t,
        o
      ), e("<!--]-->");
      break;
    default:
      i & 1 ? ve(e, r, t, o) : i & 6 ? e(T(r, t, o)) : i & 64 ? me(e, r, t, o) : i & 128 && v(e, r.ssContent, t, o);
  }
}
function m(e, r, t, o) {
  for (let a = 0; a < r.length; a++)
    v(e, we(r[a]), t, o);
}
function ve(e, r, t, o) {
  const a = r.type;
  let { props: i, children: n, shapeFlag: l, scopeId: c } = r, p = `<${a}`;
  i && (p += le(i, a)), c && (p += ` ${c}`);
  let d = t, s = r;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (o && (p += ` ${o}`), e(p + ">"), !P(a)) {
    let f = !1;
    i && (i.innerHTML ? (f = !0, e(i.innerHTML)) : i.textContent ? (f = !0, e(u(i.textContent))) : a === "textarea" && i.value && (f = !0, e(u(i.value)))), f || (l & 8 ? e(u(n)) : l & 16 && m(
      e,
      n,
      t,
      o
    )), e(`</${a}>`);
  }
}
function ye(e, r, t) {
  const o = [];
  for (let a = 0; a < t.length; a++) {
    const i = t[a], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const l = n(i, e);
      l && o.push(l);
    }
  }
  return O(r || {}, ...o);
}
function me(e, r, t, o) {
  const a = r.props && r.props.to, i = r.props && r.props.disabled;
  if (!a)
    return [];
  if (!g(a))
    return [];
  ue(
    e,
    (n) => {
      m(
        n,
        r.children,
        t,
        o
      );
    },
    a,
    i || i === "",
    t
  );
}
const { isVNode: be } = _;
function h(e, r, t) {
  if (!e.hasAsync)
    return r + $(e);
  let o = r;
  for (let a = t; a < e.length; a += 1) {
    const i = e[a];
    if (g(i)) {
      o += i;
      continue;
    }
    if (w(i))
      return i.then((l) => (e[a] = l, h(e, o, a)));
    const n = h(i, o, 0);
    if (w(n))
      return n.then((l) => (e[a] = l, h(e, "", a)));
    o = n;
  }
  return o;
}
function R(e) {
  return h(e, "", 0);
}
function $(e) {
  let r = "";
  for (let t = 0; t < e.length; t++) {
    let o = e[t];
    g(o) ? r += o : r += $(o);
  }
  return r;
}
async function A(e, r = {}) {
  if (be(e))
    return A(E({ render: () => e }), r);
  const t = B(e._component, e._props);
  t.appContext = e._context, e.provide(z, r);
  const o = await T(t), a = await R(o);
  if (await ke(r), r.__watcherHandles)
    for (const i of r.__watcherHandles)
      i();
  return a;
}
async function ke(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const r in e.__teleportBuffers)
      e.teleports[r] = await R(
        await Promise.all([e.__teleportBuffers[r]])
      );
  }
}
re();
const xe = /* @__PURE__ */ te({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (r, t) => null;
  }
});
ae(ie);
const ze = async (e) => ({
  set: async (r, t) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const a = oe(xe, {
      _p: e,
      _$p: r,
      _$cb: t
    });
    return {
      r: `
                 <div>
                    ${await A(a)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let l = "";
        return l = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, l;
      })()
    };
  }
});
export {
  ze as index,
  ze as renderer
};
