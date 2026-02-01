import { k as B, j as N, l as E, s as _, m as z, p as b, N as v, q as V, u as f, F as j, S as M, C as H, v as L, T as O, w, x as P, y as U, z as C, A as F, B as I, n as D, D as G, E as W, G as K, H as q, I as J, J as Q, K as X, L as Y, M as Z, O as tt, P as rt, d as et, c as at, a as it, t as ot, o as nt, Q as st } from "./runtime-dom.esm-bundler-DJRVW5DP.js";
function lt(t, r) {
  r === void 0 && (r = {});
  var a = r.insertAt;
  if (!(typeof document > "u")) {
    var e = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", a === "top" && e.firstChild ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
}
const dt = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-semibold:600;--font-weight-bold:700;--font-weight-black:900;--tracking-tighter:-.05em;--tracking-wide:.025em;--radius-xl:.75rem;--radius-2xl:1rem;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.-top-1{top:calc(var(--spacing)*-1)}.top-0{top:calc(var(--spacing)*0)}.-right-2{right:calc(var(--spacing)*-2)}.bottom-0{bottom:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.z-10{z-index:10}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.-mr-2{margin-right:calc(var(--spacing)*-2)}.flex{display:flex}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-20{height:calc(var(--spacing)*20)}.h-\\[68px\\]{height:68px}.h-full{height:100%}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-\\[85\\%\\]{width:85%}.max-w-\\[320px\\]{max-width:320px}.flex-1{flex:1}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-0\\.5{--tw-translate-y:calc(var(--spacing)*-.5);translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-90{--tw-scale-x:90%;--tw-scale-y:90%;--tw-scale-z:90%;scale:var(--tw-scale-x)var(--tw-scale-y)}.flex-col{flex-direction:column}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-around{justify-content:space-around}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-\\[24px\\]{border-top-left-radius:24px;border-top-right-radius:24px}.rounded-r-\\[24px\\]{border-top-right-radius:24px;border-bottom-right-radius:24px}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-100{border-color:var(--color-gray-100)}.bg-\\[\\#cb11ab\\]{background-color:#cb11ab}.bg-\\[\\#cb11ab\\]\\/5{background-color:#cb11ab0d}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-white{background-color:var(--color-white)}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white)95%,transparent)}}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-\\[\\#f6f6f9\\]{--tw-gradient-from:#f6f6f9;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-white{--tw-gradient-to:var(--color-white);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.fill-\\[\\#cb11ab\\]\\/10{fill:#cb11ab1a}.p-2{padding:calc(var(--spacing)*2)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-3\\.5{padding-block:calc(var(--spacing)*3.5)}.py-4{padding-block:calc(var(--spacing)*4)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[15px\\]{font-size:15px}.font-black{--tw-font-weight:var(--font-weight-black);font-weight:var(--font-weight-black)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tighter{--tw-tracking:var(--tracking-tighter);letter-spacing:var(--tracking-tighter)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.text-\\[\\#481173\\]{color:#481173}.text-\\[\\#cb11ab\\]{color:#cb11ab}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-700{color:var(--color-gray-700)}.text-white{color:var(--color-white)}.italic{font-style:italic}.opacity-0{opacity:0}.opacity-80{opacity:.8}.opacity-100{opacity:1}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_-5px_20px_rgba\\(0\\,0\\,0\\,0\\.03\\)\\]{--tw-shadow:0 -5px 20px var(--tw-shadow-color,#00000008);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-white{--tw-ring-color:var(--color-white)}.backdrop-blur-\\[3px\\]{--tw-backdrop-blur:blur(3px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}@media(hover:hover){.group-hover\\:text-\\[\\#cb11ab\\]:is(:where(.group):hover *){color:#cb11ab}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-\\[\\#cb11ab\\]:hover{color:#cb11ab}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.active\\:scale-\\[0\\.98\\]:active{scale:.98}@media(min-width:64rem){.lg\\:hidden{display:none}}.dark\\:border-white\\/5:where(.dark,.dark *){border-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.dark\\:border-white\\/5:where(.dark,.dark *){border-color:color-mix(in oklab,var(--color-white)5%,transparent)}}.dark\\:bg-\\[\\#1a1a1a\\]:where(.dark,.dark *){background-color:#1a1a1a}.dark\\:bg-\\[\\#1a1a1a\\]\\/95:where(.dark,.dark *){background-color:#1a1a1af2}.dark\\:bg-\\[\\#121212\\]:where(.dark,.dark *){background-color:#121212}.dark\\:bg-\\[\\#cb11ab\\]\\/10:where(.dark,.dark *){background-color:#cb11ab1a}.dark\\:from-\\[\\#1a1a1a\\]:where(.dark,.dark *){--tw-gradient-from:#1a1a1a;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.dark\\:to-\\[\\#121212\\]:where(.dark,.dark *){--tw-gradient-to:#121212;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.dark\\:text-\\[\\#cb11ab\\]:where(.dark,.dark *){color:#cb11ab}.dark\\:text-gray-200:where(.dark,.dark *){color:var(--color-gray-200)}.dark\\:text-gray-500:where(.dark,.dark *){color:var(--color-gray-500)}.dark\\:shadow-none:where(.dark,.dark *){--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.dark\\:ring-\\[\\#1a1a1a\\]:where(.dark,.dark *){--tw-ring-color:#1a1a1a}@media(hover:hover){.dark\\:hover\\:bg-white\\/5:where(.dark,.dark *):hover{background-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-white\\/5:where(.dark,.dark *):hover{background-color:color-mix(in oklab,var(--color-white)5%,transparent)}}.dark\\:hover\\:text-gray-300:where(.dark,.dark *):hover{color:var(--color-gray-300)}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}';
const ct = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pt(t, r) {
  let a = "";
  for (let e in t) {
    if (ct(e) || F(e) || r === "textarea" && e === "value" || // force as property (not rendered in SSR)
    e.startsWith("."))
      continue;
    const i = t[e];
    e.startsWith("^") && (e = e.slice(1)), e === "class" || e === "className" ? a += ` class="${ft(i)}"` : e === "style" ? a += ` style="${gt(i)}"` : a += wt(e, i, r);
  }
  return a;
}
function wt(t, r, a) {
  if (!K(r))
    return "";
  const e = a && (a.indexOf("-") > 0 || q(a)) ? t : J[t] || t.toLowerCase();
  return Q(e) ? X(r) ? ` ${e}` : "" : Y(e) ? r === "" ? ` ${e}` : ` ${e}="${w(r)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${e}`
  ), "");
}
function ft(t) {
  return w(D(t));
}
function gt(t) {
  if (!t)
    return "";
  if (f(t))
    return w(t);
  const r = G(ht(t));
  return w(W(r));
}
function ht(t) {
  if (!C(t) && Z(t)) {
    const r = {};
    for (const a in t)
      a.startsWith(":--") ? r[a.slice(1)] = tt(t[a]) : r[a] = t[a];
    return r;
  }
  return t;
}
function bt(t, r, a, e, i) {
  t("<!--teleport start-->");
  const o = i.appContext.provides[_], n = o.__teleportBuffers || (o.__teleportBuffers = {}), s = n[a] || (n[a] = []), d = s.length;
  let p;
  if (e)
    r(t), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: l } = S();
    l("<!--teleport start anchor-->"), r(l), l("<!--teleport anchor-->"), p = c();
  }
  s.splice(d, 0, p), t("<!--teleport end-->");
}
{
  const t = B(), r = (a, e) => {
    let i;
    return (i = t[a]) || (i = t[a] = []), i.push(e), (o) => {
      i.length > 1 ? i.forEach((n) => n(o)) : i[0](o);
    };
  };
  r(
    "__VUE_INSTANCE_SETTERS__",
    (a) => a
  ), r(
    "__VUE_SSR_SETTERS__",
    (a) => a
  );
}
function ut(t, r) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: vt,
  setCurrentRenderingInstance: k,
  setupComponent: yt,
  renderComponentRoot: m,
  normalizeVNode: kt
} = z;
function S() {
  let t = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(a) {
      const e = f(a);
      if (t && e) {
        r[r.length - 1] += a;
        return;
      }
      r.push(a), t = e, (b(a) || C(a) && a.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function T(t, r = null, a) {
  const e = t.component = vt(
    t,
    r,
    null
  ), i = yt(
    e,
    !0
    /* isSSR */
  ), o = b(i);
  let n = e.sp;
  return o || n ? Promise.resolve(i).then(() => {
    if (o && (n = e.sp), n)
      return Promise.all(
        n.map((d) => d.call(e.proxy))
      );
  }).catch(v).then(() => x(e, a)) : x(e, a);
}
function x(t, r) {
  const a = t.type, { getBuffer: e, push: i } = S();
  if (V(a)) {
    let o = m(t);
    if (!a.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((o.props || (o.props = {}))[n] = "");
    u(i, t.subTree = o, t, r);
  } else {
    (!t.render || t.render === v) && !t.ssrRender && !a.ssrRender && f(a.template) && (a.ssrRender = ut(a.template));
    const o = t.ssrRender || a.ssrRender;
    if (o) {
      let n = t.inheritAttrs !== !1 ? t.attrs : void 0, s = !1, d = t;
      for (; ; ) {
        const c = d.vnode.scopeId;
        c && (s || (n = { ...n }, s = !0), n[c] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (r) {
        s || (n = { ...n });
        const c = r.trim().split(" ");
        for (let l = 0; l < c.length; l++)
          n[c[l]] = "";
      }
      const p = k(t);
      try {
        o(
          t.proxy,
          i,
          t,
          n,
          // compiler-optimized bindings
          t.props,
          t.setupState,
          t.data,
          t.ctx
        );
      } finally {
        k(p);
      }
    } else t.render && t.render !== v ? u(
      i,
      t.subTree = m(t),
      t,
      r
    ) : (a.name || a.__file, i("<!---->"));
  }
  return e();
}
function u(t, r, a, e) {
  const { type: i, shapeFlag: o, children: n, dirs: s, props: d } = r;
  switch (s && (r.props = xt(r, d, s)), i) {
    case O:
      t(w(n));
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
      r.slotScopeIds && (e = (e ? e + " " : "") + r.slotScopeIds.join(" ")), t("<!--[-->"), y(
        t,
        n,
        a,
        e
      ), t("<!--]-->");
      break;
    default:
      o & 1 ? mt(t, r, a, e) : o & 6 ? t(T(r, a, e)) : o & 64 ? _t(t, r, a, e) : o & 128 && u(t, r.ssContent, a, e);
  }
}
function y(t, r, a, e) {
  for (let i = 0; i < r.length; i++)
    u(t, kt(r[i]), a, e);
}
function mt(t, r, a, e) {
  const i = r.type;
  let { props: o, children: n, shapeFlag: s, scopeId: d } = r, p = `<${i}`;
  o && (p += pt(o, i)), d && (p += ` ${d}`);
  let c = a, l = r;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (p += ` ${l.scopeId}`), c = c.parent;
  if (e && (p += ` ${e}`), t(p + ">"), !U(i)) {
    let g = !1;
    o && (o.innerHTML ? (g = !0, t(o.innerHTML)) : o.textContent ? (g = !0, t(w(o.textContent))) : i === "textarea" && o.value && (g = !0, t(w(o.value)))), g || (s & 8 ? t(w(n)) : s & 16 && y(
      t,
      n,
      a,
      e
    )), t(`</${i}>`);
  }
}
function xt(t, r, a) {
  const e = [];
  for (let i = 0; i < a.length; i++) {
    const o = a[i], {
      dir: { getSSRProps: n }
    } = o;
    if (n) {
      const s = n(o, t);
      s && e.push(s);
    }
  }
  return P(r || {}, ...e);
}
function _t(t, r, a, e) {
  const i = r.props && r.props.to, o = r.props && r.props.disabled;
  if (!i)
    return [];
  if (!f(i))
    return [];
  bt(
    t,
    (n) => {
      y(
        n,
        r.children,
        a,
        e
      );
    },
    i,
    o || o === "",
    a
  );
}
const { isVNode: zt } = z;
function h(t, r, a) {
  if (!t.hasAsync)
    return r + R(t);
  let e = r;
  for (let i = a; i < t.length; i += 1) {
    const o = t[i];
    if (f(o)) {
      e += o;
      continue;
    }
    if (b(o))
      return o.then((s) => (t[i] = s, h(t, e, i)));
    const n = h(o, e, 0);
    if (b(n))
      return n.then((s) => (t[i] = s, h(t, "", i)));
    e = n;
  }
  return e;
}
function A(t) {
  return h(t, "", 0);
}
function R(t) {
  let r = "";
  for (let a = 0; a < t.length; a++) {
    let e = t[a];
    f(e) ? r += e : r += R(e);
  }
  return r;
}
async function $(t, r = {}) {
  if (zt(t))
    return $(N({ render: () => t }), r);
  const a = E(t._component, t._props);
  a.appContext = t._context, t.provide(_, r);
  const e = await T(a), i = await A(e);
  if (await Ct(r), r.__watcherHandles)
    for (const o of r.__watcherHandles)
      o();
  return i;
}
async function Ct(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const r in t.__teleportBuffers)
      t.teleports[r] = await A(
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
    return (r, a) => (nt(), at("div", {
      id: t._p.f.name("root"),
      class: "box"
    }, [
      it("p", null, ot(t._$p.data.curr.data.data), 1)
    ], 8, St));
  }
});
lt(dt);
const Rt = async (t) => ({
  set: async (r) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const e = st(Tt, {
      _p: t,
      _$p: r
    });
    return {
      r: `
                 <div>
                    ${await $(e)}
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
  Rt as index,
  Rt as renderer
};
