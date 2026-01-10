import { P as B, Q as _, O as N, R as E, S as C, T as u, U as v, V, W as f, F as M, X as j, Y as U, Z as O, _ as P, $ as g, a0 as S, x as F, a1 as H, a2 as L, a3 as I, m as D, a4 as G, a5 as W, a6 as K, a7 as Q, a8 as X, a9 as Y, aa as Z, ab as q, ac as J, ad as rr, ae as tr, e as er, f as or, h as ar, l as ir, g as nr, af as sr } from "./runtime-dom.esm-bundler-DLmeZNr2.js";
function lr(r, t) {
  t === void 0 && (t = {});
  var e = t.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", e === "top" && o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a), a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r));
  }
}
const dr = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-indigo-400:oklch(67.3% .182 276.935);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-600:oklch(51.1% .262 276.966);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-5xl:64rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-widest:.1em;--radius-xl:.75rem;--radius-2xl:1rem;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-y-0{inset-block:calc(var(--spacing)*0)}.right-0{right:calc(var(--spacing)*0)}.bottom-0{bottom:calc(var(--spacing)*0)}.z-20{z-index:20}.z-50{z-index:50}.col-span-12{grid-column:span 12/span 12}.mx-auto{margin-inline:auto}.mt-1\\.5{margin-top:calc(var(--spacing)*1.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-8{margin-top:calc(var(--spacing)*8)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.ml-1{margin-left:calc(var(--spacing)*1)}.block{display:block}.flex{display:flex}.grid{display:grid}.h-4{height:calc(var(--spacing)*4)}.h-px{height:1px}.max-h-60{max-height:calc(var(--spacing)*60)}.min-h-screen{min-height:100vh}.w-4{width:calc(var(--spacing)*4)}.w-full{width:100%}.max-w-5xl{max-width:var(--container-5xl)}.animate-pulse{animation:var(--animate-pulse)}.cursor-pointer{cursor:pointer}.appearance-none{appearance:none}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-8{column-gap:calc(var(--spacing)*8)}.gap-y-8{row-gap:calc(var(--spacing)*8)}.overflow-auto{overflow:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-indigo-500{border-color:var(--color-indigo-500)}.border-red-500{border-color:var(--color-red-500)}.bg-black{background-color:var(--color-black)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-white{background-color:var(--color-white)}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white)95%,transparent)}}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-indigo-500\\/50{--tw-gradient-from:#625fff80}@supports (color:color-mix(in lab,red,red)){.from-indigo-500\\/50{--tw-gradient-from:color-mix(in oklab,var(--color-indigo-500)50%,transparent)}}.from-indigo-500\\/50{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.p-3{padding:calc(var(--spacing)*3)}.p-8{padding:calc(var(--spacing)*8)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.px-10{padding-inline:calc(var(--spacing)*10)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.pr-10{padding-right:calc(var(--spacing)*10)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[11px\\]{font-size:11px}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.whitespace-nowrap{white-space:nowrap}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-indigo-500{color:var(--color-indigo-500)}.text-indigo-600{color:var(--color-indigo-600)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.opacity-50{opacity:.5}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-indigo-500{--tw-ring-color:var(--color-indigo-500)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.first\\:mt-0:first-child{margin-top:calc(var(--spacing)*0)}.checked\\:border-indigo-500:checked{border-color:var(--color-indigo-500)}.checked\\:bg-indigo-500:checked{background-color:var(--color-indigo-500)}@media(hover:hover){.hover\\:-translate-y-px:hover{--tw-translate-y:-1px;translate:var(--tw-translate-x)var(--tw-translate-y)}.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-indigo-500\\/50:hover{border-color:#625fff80}@supports (color:color-mix(in lab,red,red)){.hover\\:border-indigo-500\\/50:hover{border-color:color-mix(in oklab,var(--color-indigo-500)50%,transparent)}}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-black:hover{color:var(--color-black)}.hover\\:opacity-90:hover{opacity:.9}}.focus\\:border-indigo-500:focus{border-color:var(--color-indigo-500)}.focus\\:border-red-500:focus{border-color:var(--color-red-500)}.focus\\:ring-4:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(4px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-indigo-500\\/10:focus{--tw-ring-color:#625fff1a}@supports (color:color-mix(in lab,red,red)){.focus\\:ring-indigo-500\\/10:focus{--tw-ring-color:color-mix(in oklab,var(--color-indigo-500)10%,transparent)}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}@media(min-width:40rem){.sm\\:px-6{padding-inline:calc(var(--spacing)*6)}}@media(min-width:48rem){.md\\:col-span-6{grid-column:span 6/span 6}.md\\:w-auto{width:auto}}.dark\\:border-gray-600:where(.dark,.dark *){border-color:var(--color-gray-600)}.dark\\:border-indigo-400:where(.dark,.dark *){border-color:var(--color-indigo-400)}.dark\\:border-white\\/5:where(.dark,.dark *){border-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.dark\\:border-white\\/5:where(.dark,.dark *){border-color:color-mix(in oklab,var(--color-white)5%,transparent)}}.dark\\:border-white\\/10:where(.dark,.dark *){border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:border-white\\/10:where(.dark,.dark *){border-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.dark\\:bg-\\[\\#0b0b0e\\]:where(.dark,.dark *){background-color:#0b0b0e}.dark\\:bg-\\[\\#0d0d0f\\]:where(.dark,.dark *){background-color:#0d0d0f}.dark\\:bg-\\[\\#0d0d0f\\]\\/95:where(.dark,.dark *){background-color:#0d0d0ff2}.dark\\:bg-\\[\\#1A1A1C\\]:where(.dark,.dark *){background-color:#1a1a1c}.dark\\:bg-\\[\\#141416\\]:where(.dark,.dark *){background-color:#141416}.dark\\:bg-\\[\\#161618\\]:where(.dark,.dark *){background-color:#161618}.dark\\:bg-white:where(.dark,.dark *){background-color:var(--color-white)}.dark\\:from-indigo-400\\/50:where(.dark,.dark *){--tw-gradient-from:#7d87ff80}@supports (color:color-mix(in lab,red,red)){.dark\\:from-indigo-400\\/50:where(.dark,.dark *){--tw-gradient-from:color-mix(in oklab,var(--color-indigo-400)50%,transparent)}}.dark\\:from-indigo-400\\/50:where(.dark,.dark *){--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.dark\\:text-black:where(.dark,.dark *){color:var(--color-black)}.dark\\:text-gray-100:where(.dark,.dark *){color:var(--color-gray-100)}.dark\\:text-gray-200:where(.dark,.dark *){color:var(--color-gray-200)}.dark\\:text-gray-300:where(.dark,.dark *){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark,.dark *){color:var(--color-gray-400)}.dark\\:text-gray-500:where(.dark,.dark *){color:var(--color-gray-500)}.dark\\:text-indigo-400:where(.dark,.dark *){color:var(--color-indigo-400)}.dark\\:text-white:where(.dark,.dark *){color:var(--color-white)}@media(hover:hover){.dark\\:hover\\:border-white\\/20:where(.dark,.dark *):hover{border-color:#fff3}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:border-white\\/20:where(.dark,.dark *):hover{border-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.dark\\:hover\\:bg-white\\/5:where(.dark,.dark *):hover{background-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-white\\/5:where(.dark,.dark *):hover{background-color:color-mix(in oklab,var(--color-white)5%,transparent)}}.dark\\:hover\\:text-white:where(.dark,.dark *):hover{color:var(--color-white)}}.dark\\:focus\\:border-indigo-400:where(.dark,.dark *):focus{border-color:var(--color-indigo-400)}}:root{--vf-color-input:var(--text-input);--vf-bg-input:var(--bg-input);--vf-border-input:var(--border-color)}:root.dark .vf-input-group{color:#fff;background-color:#161618}:root.dark input,:root.dark textarea,:root.dark select{color:#fff!important}input:-webkit-autofill{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#111827!important;box-shadow:inset 0 0 0 1000px #fff!important}input:-webkit-autofill:hover{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#111827!important;box-shadow:inset 0 0 0 1000px #fff!important}input:-webkit-autofill:focus{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#111827!important;box-shadow:inset 0 0 0 1000px #fff!important}textarea:-webkit-autofill{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#111827!important;box-shadow:inset 0 0 0 1000px #fff!important}select:-webkit-autofill{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#111827!important;box-shadow:inset 0 0 0 1000px #fff!important}:root.dark input:-webkit-autofill{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#fff!important;box-shadow:inset 0 0 0 1000px #161618!important}:root.dark input:-webkit-autofill:hover{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#fff!important;box-shadow:inset 0 0 0 1000px #161618!important}:root.dark input:-webkit-autofill:focus{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#fff!important;box-shadow:inset 0 0 0 1000px #161618!important}:root.dark textarea:-webkit-autofill{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#fff!important;box-shadow:inset 0 0 0 1000px #161618!important}:root.dark select:-webkit-autofill{transition:background-color 5000s ease-in-out;-webkit-text-fill-color:#fff!important;box-shadow:inset 0 0 0 1000px #161618!important}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@keyframes pulse{50%{opacity:.5}}';
const cr = /* @__PURE__ */ L(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pr(r, t) {
  let e = "";
  for (const o in r) {
    if (cr(o) || I(o) || t === "textarea" && o === "value")
      continue;
    const a = r[o];
    o === "class" ? e += ` class="${fr(a)}"` : o === "style" ? e += ` style="${wr(a)}"` : o === "className" ? e += ` class="${String(a)}"` : e += gr(o, a, t);
  }
  return e;
}
function gr(r, t, e) {
  if (!K(t))
    return "";
  const o = e && (e.indexOf("-") > 0 || Q(e)) ? r : X[r] || r.toLowerCase();
  return Y(o) ? Z(t) ? ` ${o}` : "" : q(o) ? t === "" ? ` ${o}` : ` ${o}="${g(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function fr(r) {
  return g(D(r));
}
function wr(r) {
  if (!r)
    return "";
  if (f(r))
    return g(r);
  const t = G(hr(r));
  return g(W(t));
}
function hr(r) {
  if (!S(r) && J(r)) {
    const t = {};
    for (const e in r)
      e.startsWith(":--") ? t[e.slice(1)] = rr(r[e]) : t[e] = r[e];
    return t;
  }
  return r;
}
function ur(r, t, e, o, a) {
  r("<!--teleport start-->");
  const i = a.appContext.provides[C], n = i.__teleportBuffers || (i.__teleportBuffers = {}), s = n[e] || (n[e] = []), d = s.length;
  let p;
  if (o)
    t(r), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: l } = z();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = c();
  }
  s.splice(d, 0, p), r("<!--teleport end-->");
}
{
  const r = B(), t = (e, o) => {
    let a;
    return (a = r[e]) || (a = r[e] = []), a.push(o), (i) => {
      a.length > 1 ? a.forEach((n) => n(i)) : a[0](i);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (e) => e
  ), t(
    "__VUE_SSR_SETTERS__",
    (e) => e
  );
}
function br(r, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: vr,
  setCurrentRenderingInstance: m,
  setupComponent: kr,
  renderComponentRoot: y,
  normalizeVNode: mr
} = _;
function z() {
  let r = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(e) {
      const o = f(e);
      if (r && o) {
        t[t.length - 1] += e;
        return;
      }
      t.push(e), r = o, (u(e) || S(e) && e.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(r, t = null, e) {
  const o = r.component = vr(
    r,
    t,
    null
  ), a = kr(
    o,
    !0
    /* isSSR */
  ), i = u(a);
  let n = o.sp;
  return i || n ? Promise.resolve(a).then(() => {
    if (i && (n = o.sp), n)
      return Promise.all(
        n.map((d) => d.call(o.proxy))
      );
  }).catch(v).then(() => x(o, e)) : x(o, e);
}
function x(r, t) {
  const e = r.type, { getBuffer: o, push: a } = z();
  if (V(e)) {
    let i = y(r);
    if (!e.props)
      for (const n in r.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    b(a, r.subTree = i, r, t);
  } else {
    (!r.render || r.render === v) && !r.ssrRender && !e.ssrRender && f(e.template) && (e.ssrRender = br(e.template));
    const i = r.ssrRender || e.ssrRender;
    if (i) {
      let n = r.inheritAttrs !== !1 ? r.attrs : void 0, s = !1, d = r;
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
      const p = m(r);
      try {
        i(
          r.proxy,
          a,
          r,
          n,
          // compiler-optimized bindings
          r.props,
          r.setupState,
          r.data,
          r.ctx
        );
      } finally {
        m(p);
      }
    } else r.render && r.render !== v ? b(
      a,
      r.subTree = y(r),
      r,
      t
    ) : (e.name || e.__file, a("<!---->"));
  }
  return o();
}
function b(r, t, e, o) {
  const { type: a, shapeFlag: i, children: n, dirs: s, props: d } = t;
  switch (s && (t.props = xr(t, d, s)), a) {
    case P:
      r(g(n));
      break;
    case U:
      r(
        n ? `<!--${O(n)}-->` : "<!---->"
      );
      break;
    case j:
      r(n);
      break;
    case M:
      t.slotScopeIds && (o = (o ? o + " " : "") + t.slotScopeIds.join(" ")), r("<!--[-->"), k(
        r,
        n,
        e,
        o
      ), r("<!--]-->");
      break;
    default:
      i & 1 ? yr(r, t, e, o) : i & 6 ? r(T(t, e, o)) : i & 64 ? _r(r, t, e, o) : i & 128 && b(r, t.ssContent, e, o);
  }
}
function k(r, t, e, o) {
  for (let a = 0; a < t.length; a++)
    b(r, mr(t[a]), e, o);
}
function yr(r, t, e, o) {
  const a = t.type;
  let { props: i, children: n, shapeFlag: s, scopeId: d } = t, p = `<${a}`;
  i && (p += pr(i, a)), d && (p += ` ${d}`);
  let c = e, l = t;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (p += ` ${l.scopeId}`), c = c.parent;
  if (o && (p += ` ${o}`), r(p + ">"), !H(a)) {
    let w = !1;
    i && (i.innerHTML ? (w = !0, r(i.innerHTML)) : i.textContent ? (w = !0, r(g(i.textContent))) : a === "textarea" && i.value && (w = !0, r(g(i.value)))), w || (s & 8 ? r(g(n)) : s & 16 && k(
      r,
      n,
      e,
      o
    )), r(`</${a}>`);
  }
}
function xr(r, t, e) {
  const o = [];
  for (let a = 0; a < e.length; a++) {
    const i = e[a], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const s = n(i, r);
      s && o.push(s);
    }
  }
  return F(t || {}, ...o);
}
function _r(r, t, e, o) {
  const a = t.props && t.props.to, i = t.props && t.props.disabled;
  if (!a)
    return [];
  if (!f(a))
    return [];
  ur(
    r,
    (n) => {
      k(
        n,
        t.children,
        e,
        o
      );
    },
    a,
    i || i === "",
    e
  );
}
const { isVNode: Cr } = _;
function h(r, t, e) {
  if (!r.hasAsync)
    return t + A(r);
  let o = t;
  for (let a = e; a < r.length; a += 1) {
    const i = r[a];
    if (f(i)) {
      o += i;
      continue;
    }
    if (u(i))
      return i.then((s) => (r[a] = s, h(r, o, a)));
    const n = h(i, o, 0);
    if (u(n))
      return n.then((s) => (r[a] = s, h(r, "", a)));
    o = n;
  }
  return o;
}
function $(r) {
  return h(r, "", 0);
}
function A(r) {
  let t = "";
  for (let e = 0; e < r.length; e++) {
    let o = r[e];
    f(o) ? t += o : t += A(o);
  }
  return t;
}
async function R(r, t = {}) {
  if (Cr(r))
    return R(N({ render: () => r }), t);
  const e = E(r._component, r._props);
  e.appContext = r._context, r.provide(C, t);
  const o = await T(e), a = await $(o);
  if (await Sr(t), t.__watcherHandles)
    for (const i of t.__watcherHandles)
      i();
  return a;
}
async function Sr(r) {
  if (r.__teleportBuffers) {
    r.teleports = r.teleports || {};
    for (const t in r.__teleportBuffers)
      r.teleports[t] = await $(
        await Promise.all([r.__teleportBuffers[t]])
      );
  }
}
tr();
const zr = ["id"], Tr = /* @__PURE__ */ er({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(r) {
    return (t, e) => (nr(), or("div", {
      id: r._p.f.name("root"),
      class: "box"
    }, [
      ar("p", null, ir(r._$p.data.curr.data.data), 1)
    ], 8, zr));
  }
});
lr(dr);
const Ar = async (r) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const o = sr(Tr, {
      _p: r,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await R(o)}
                    <div id="${r.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let n = "";
        return n = `
                .${r.f.name("text")} {
                   background: transparent;
                }
                `, n;
      })()
    };
  }
});
export {
  Ar as index,
  Ar as renderer
};
