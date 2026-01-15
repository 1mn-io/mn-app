import { k as B, s as _, j as N, f as E, l as z, m as u, N as m, p as V, q as g, F as j, S as M, C as H, u as L, v as O, x as f, y as C, z as P, A as U, B as F, D as I, h as D, E as G, G as K, H as W, I as q, J, K as Q, L as X, M as Y, O as Z, P as tt, Q as rt, d as et, c as at, e as ot, t as it, b as nt, R as st } from "./runtime-dom.esm-bundler-BqrXMFYn.js";
function lt(t, r) {
  r === void 0 && (r = {});
  var e = r.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", e === "top" && a.firstChild ? a.insertBefore(o, a.firstChild) : a.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t));
  }
}
const ct = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--radius-lg:.5rem;--radius-xl:.75rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--animate-spin:spin 1s linear infinite;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.fixed{position:fixed}.relative{position:relative}.top-0{top:calc(var(--spacing)*0)}.top-24{top:calc(var(--spacing)*24)}.right-0{right:calc(var(--spacing)*0)}.right-6{right:calc(var(--spacing)*6)}.bottom-0{bottom:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.z-40{z-index:40}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-4{margin-left:calc(var(--spacing)*4)}.flex{display:flex}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-12{height:calc(var(--spacing)*12)}.h-16{height:calc(var(--spacing)*16)}.h-20{height:calc(var(--spacing)*20)}.min-h-screen{min-height:100vh}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-12{width:calc(var(--spacing)*12)}.w-auto{width:auto}.w-full{width:100%}.max-w-4xl{max-width:var(--container-4xl)}.max-w-sm{max-width:var(--container-sm)}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-2{--tw-translate-y:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-not-allowed{cursor:not-allowed}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-blue-600{border-color:var(--color-blue-600)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-white{border-color:var(--color-white)}.border-t-transparent{border-top-color:#0000}.bg-blue-600{background-color:var(--color-blue-600)}.bg-emerald-600{background-color:var(--color-emerald-600)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-purple-600{background-color:var(--color-purple-600)}.bg-white{background-color:var(--color-white)}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white)90%,transparent)}}.p-4{padding:calc(var(--spacing)*4)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-20{padding-block:calc(var(--spacing)*20)}.pt-24{padding-top:calc(var(--spacing)*24)}.pb-28{padding-bottom:calc(var(--spacing)*28)}.font-sans{font-family:var(--font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-white{color:var(--color-white)}.opacity-0{opacity:0}.opacity-75{opacity:.75}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-100{--tw-duration:.1s;transition-duration:.1s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media(hover:hover){.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-emerald-700:hover{background-color:var(--color-emerald-700)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-purple-700:hover{background-color:var(--color-purple-700)}}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}@media(min-width:40rem){.sm\\:translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:translate-x-2{--tw-translate-x:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}}.dark\\:border-gray-600:where(.dark,.dark *){border-color:var(--color-gray-600)}.dark\\:border-gray-700:where(.dark,.dark *){border-color:var(--color-gray-700)}.dark\\:bg-\\[\\#0b1220\\]:where(.dark,.dark *){background-color:#0b1220}.dark\\:bg-\\[\\#0f172a\\]\\/90:where(.dark,.dark *){background-color:#0f172ae6}.dark\\:bg-\\[\\#020617\\]:where(.dark,.dark *){background-color:#020617}.dark\\:bg-gray-700:where(.dark,.dark *){background-color:var(--color-gray-700)}.dark\\:text-gray-100:where(.dark,.dark *){color:var(--color-gray-100)}.dark\\:text-gray-300:where(.dark,.dark *){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark,.dark *){color:var(--color-gray-400)}@media(hover:hover){.dark\\:hover\\:bg-gray-600:where(.dark,.dark *):hover{background-color:var(--color-gray-600)}.dark\\:hover\\:bg-gray-800:where(.dark,.dark *):hover{background-color:var(--color-gray-800)}}}html.dark,html.dark body{color:#e5e7eb;background-color:#0b1220}body{background-color:inherit}.dark header,.dark footer{background:linear-gradient(#0f172af2,#0f172ad9);border-color:#94a3b826}.dark header button{color:#f8fafc;background-color:#334155e6;border-color:#94a3b833}.dark header button:hover{background-color:#475569f2}.dark .form-content{background:radial-gradient(1200px at top,#1e293b99,#0000 40%),linear-gradient(#020617,#020617);border:1px solid #94a3b826;box-shadow:0 20px 50px #0009,inset 0 1px #ffffff08}.dark .form-content form,.dark .form-content>div{background-color:#0000!important}.dark .form-content h2,.dark .form-content h3{color:#f8fafc;letter-spacing:.04em;border-bottom:1px solid #94a3b833;margin-bottom:1.5rem;padding-bottom:.75rem;font-weight:700}.dark .form-content label{color:#cbd5f5;letter-spacing:.03em;font-weight:600}.dark .form-content input,.dark .form-content textarea,.dark .form-content select{color:#f8fafc;background:linear-gradient(#0f172a,#020617);border:1px solid #94a3b840;border-radius:.6rem;box-shadow:inset 0 1px 2px #0009}.dark .form-content input::placeholder,.dark .form-content textarea::placeholder{color:#64748b}.dark .form-content input:focus,.dark .form-content textarea:focus,.dark .form-content select:focus{background-color:#020617;border-color:#38bdf8;outline:none;box-shadow:0 0 0 3px #38bdf840,inset 0 1px 2px #0009}.dark .form-content .radio-option{color:#e5e7eb;background:linear-gradient(#0f172a,#020617);border:1px solid #94a3b840;border-radius:.75rem;transition:all .2s}.dark .form-content .radio-option:hover{background-color:#020617;border-color:#38bdf8}.dark .form-content .radio-option input:checked+label{color:#38bdf8}.form-content{padding-bottom:6rem!important}.ce-status,.engine-status,.form-status,.ce-footer,.ce-loading-text{display:none!important}.dark .toast-card{border:1px solid #94a3b833;box-shadow:0 20px 40px #000000bf,inset 0 1px #ffffff0a;background:linear-gradient(#0f172a,#020617)!important}.dark .toast-success{border-left:4px solid #10b981!important}.dark .toast-error{border-left:4px solid #ef4444!important}.dark .toast-title{letter-spacing:.02em;font-weight:700;color:#f8fafc!important}.dark .toast-message{line-height:1.45;color:#cbd5f5!important}.dark .toast-icon-success{color:#10b981!important}.dark .toast-icon-error{color:#ef4444!important}.dark .toast-close{color:#94a3b8!important}.dark .toast-close:hover{color:#f8fafc!important}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}';
const dt = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pt(t, r) {
  let e = "";
  for (const a in t) {
    if (dt(a) || I(a) || r === "textarea" && a === "value")
      continue;
    const o = t[a];
    a === "class" ? e += ` class="${gt(o)}"` : a === "style" ? e += ` style="${ht(o)}"` : a === "className" ? e += ` class="${String(o)}"` : e += ft(a, o, r);
  }
  return e;
}
function ft(t, r, e) {
  if (!W(r))
    return "";
  const a = e && (e.indexOf("-") > 0 || q(e)) ? t : J[t] || t.toLowerCase();
  return Q(a) ? X(r) ? ` ${a}` : "" : Y(a) ? r === "" ? ` ${a}` : ` ${a}="${f(r)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${a}`
  ), "");
}
function gt(t) {
  return f(D(t));
}
function ht(t) {
  if (!t)
    return "";
  if (g(t))
    return f(t);
  const r = G(bt(t));
  return f(K(r));
}
function bt(t) {
  if (!C(t) && Z(t)) {
    const r = {};
    for (const e in t)
      e.startsWith(":--") ? r[e.slice(1)] = tt(t[e]) : r[e] = t[e];
    return r;
  }
  return t;
}
function ut(t, r, e, a, o) {
  t("<!--teleport start-->");
  const i = o.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), s = n[e] || (n[e] = []), c = s.length;
  let p;
  if (a)
    r(t), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = S();
    l("<!--teleport start anchor-->"), r(l), l("<!--teleport anchor-->"), p = d();
  }
  s.splice(c, 0, p), t("<!--teleport end-->");
}
{
  const t = B(), r = (e, a) => {
    let o;
    return (o = t[e]) || (o = t[e] = []), o.push(a), (i) => {
      o.length > 1 ? o.forEach((n) => n(i)) : o[0](i);
    };
  };
  r(
    "__VUE_INSTANCE_SETTERS__",
    (e) => e
  ), r(
    "__VUE_SSR_SETTERS__",
    (e) => e
  );
}
function wt(t, r) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: mt,
  setCurrentRenderingInstance: v,
  setupComponent: yt,
  renderComponentRoot: k,
  normalizeVNode: vt
} = _;
function S() {
  let t = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(e) {
      const a = g(e);
      if (t && a) {
        r[r.length - 1] += e;
        return;
      }
      r.push(e), t = a, (u(e) || C(e) && e.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function T(t, r = null, e) {
  const a = t.component = mt(
    t,
    r,
    null
  ), o = yt(
    a,
    !0
    /* isSSR */
  ), i = u(o);
  let n = a.sp;
  return i || n ? Promise.resolve(o).then(() => {
    if (i && (n = a.sp), n)
      return Promise.all(
        n.map((c) => c.call(a.proxy))
      );
  }).catch(m).then(() => x(a, e)) : x(a, e);
}
function x(t, r) {
  const e = t.type, { getBuffer: a, push: o } = S();
  if (V(e)) {
    let i = k(t);
    if (!e.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    w(o, t.subTree = i, t, r);
  } else {
    (!t.render || t.render === m) && !t.ssrRender && !e.ssrRender && g(e.template) && (e.ssrRender = wt(e.template));
    const i = t.ssrRender || e.ssrRender;
    if (i) {
      let n = t.inheritAttrs !== !1 ? t.attrs : void 0, s = !1, c = t;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (s || (n = { ...n }, s = !0), n[d] = "");
        const l = c.parent;
        if (l && l.subTree && l.subTree === c.vnode)
          c = l;
        else
          break;
      }
      if (r) {
        s || (n = { ...n });
        const d = r.trim().split(" ");
        for (let l = 0; l < d.length; l++)
          n[d[l]] = "";
      }
      const p = v(t);
      try {
        i(
          t.proxy,
          o,
          t,
          n,
          // compiler-optimized bindings
          t.props,
          t.setupState,
          t.data,
          t.ctx
        );
      } finally {
        v(p);
      }
    } else t.render && t.render !== m ? w(
      o,
      t.subTree = k(t),
      t,
      r
    ) : (e.name || e.__file, o("<!---->"));
  }
  return a();
}
function w(t, r, e, a) {
  const { type: o, shapeFlag: i, children: n, dirs: s, props: c } = r;
  switch (s && (r.props = xt(r, c, s)), o) {
    case O:
      t(f(n));
      break;
    case H:
      t(
        n ? `<!--${L(n)}-->` : "<!---->"
      );
      break;
    case M:
      t(n);
      break;
    case j:
      r.slotScopeIds && (a = (a ? a + " " : "") + r.slotScopeIds.join(" ")), t("<!--[-->"), y(
        t,
        n,
        e,
        a
      ), t("<!--]-->");
      break;
    default:
      i & 1 ? kt(t, r, e, a) : i & 6 ? t(T(r, e, a)) : i & 64 ? _t(t, r, e, a) : i & 128 && w(t, r.ssContent, e, a);
  }
}
function y(t, r, e, a) {
  for (let o = 0; o < r.length; o++)
    w(t, vt(r[o]), e, a);
}
function kt(t, r, e, a) {
  const o = r.type;
  let { props: i, children: n, shapeFlag: s, scopeId: c } = r, p = `<${o}`;
  i && (p += pt(i, o)), c && (p += ` ${c}`);
  let d = e, l = r;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (p += ` ${l.scopeId}`), d = d.parent;
  if (a && (p += ` ${a}`), t(p + ">"), !U(o)) {
    let h = !1;
    i && (i.innerHTML ? (h = !0, t(i.innerHTML)) : i.textContent ? (h = !0, t(f(i.textContent))) : o === "textarea" && i.value && (h = !0, t(f(i.value)))), h || (s & 8 ? t(f(n)) : s & 16 && y(
      t,
      n,
      e,
      a
    )), t(`</${o}>`);
  }
}
function xt(t, r, e) {
  const a = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const s = n(i, t);
      s && a.push(s);
    }
  }
  return P(r || {}, ...a);
}
function _t(t, r, e, a) {
  const o = r.props && r.props.to, i = r.props && r.props.disabled;
  if (!o)
    return [];
  if (!g(o))
    return [];
  ut(
    t,
    (n) => {
      y(
        n,
        r.children,
        e,
        a
      );
    },
    o,
    i || i === "",
    e
  );
}
const { isVNode: zt } = _;
function b(t, r, e) {
  if (!t.hasAsync)
    return r + $(t);
  let a = r;
  for (let o = e; o < t.length; o += 1) {
    const i = t[o];
    if (g(i)) {
      a += i;
      continue;
    }
    if (u(i))
      return i.then((s) => (t[o] = s, b(t, a, o)));
    const n = b(i, a, 0);
    if (u(n))
      return n.then((s) => (t[o] = s, b(t, "", o)));
    a = n;
  }
  return a;
}
function R(t) {
  return b(t, "", 0);
}
function $(t) {
  let r = "";
  for (let e = 0; e < t.length; e++) {
    let a = t[e];
    g(a) ? r += a : r += $(a);
  }
  return r;
}
async function A(t, r = {}) {
  if (zt(t))
    return A(N({ render: () => t }), r);
  const e = E(t._component, t._props);
  e.appContext = t._context, t.provide(z, r);
  const a = await T(e), o = await R(a);
  if (await Ct(r), r.__watcherHandles)
    for (const i of r.__watcherHandles)
      i();
  return o;
}
async function Ct(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const r in t.__teleportBuffers)
      t.teleports[r] = await R(
        await Promise.all([t.__teleportBuffers[r]])
      );
  }
}
rt();
const St = ["id"], Tt = /* @__PURE__ */ et({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    return (r, e) => (nt(), at("div", {
      id: t._p.f.name("root"),
      class: "box"
    }, [
      ot("p", null, it(t._$p.data.curr.data.data), 1)
    ], 8, St));
  }
});
lt(ct);
const $t = async (t) => ({
  set: async (r) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const a = st(Tt, {
      _p: t,
      _$p: r
    });
    return {
      r: `
                 <div>
                    ${await A(a)}
                    <div id="${t.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let n = "";
        return n = `
                .${t.f.name("text")} {
                   background: transparent;
                }
                `, n;
      })()
    };
  }
});
export {
  $t as index,
  $t as renderer
};
