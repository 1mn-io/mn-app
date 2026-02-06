import { A as B, B as z, z as E, k as N, C as _, D as u, N as b, E as j, G as h, F as V, S as M, H as U, I as H, J as L, K as g, L as C, M as O, O as P, P as F, Q as I, n as W, R as D, U as G, V as Y, W as K, X as J, Y as Q, Z as X, _ as Z, $ as q, a0 as ee, a1 as te, s as re, f as ae, o as oe, a2 as ie } from "./runtime-dom.esm-bundler-PFVpN1vA.js";
function ne(e, t) {
  t === void 0 && (t = {});
  var a = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", a === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const le = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scroll-snap-strictness:proximity;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-100:oklch(93.6% .032 17.717);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-blue-500:oklch(62.3% .214 259.815);--color-violet-400:oklch(70.2% .183 293.541);--color-violet-500:oklch(60.6% .25 292.717);--color-violet-600:oklch(54.1% .281 293.009);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-widest:.1em;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.right-0{right:calc(var(--spacing)*0)}.bottom-0{bottom:calc(var(--spacing)*0)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-16{bottom:calc(var(--spacing)*16)}.left-2{left:calc(var(--spacing)*2)}.left-4{left:calc(var(--spacing)*4)}.z-50{z-index:50}.mx-4{margin-inline:calc(var(--spacing)*4)}.mx-auto{margin-inline:auto}.my-2{margin-block:calc(var(--spacing)*2)}.mt-0\\.5{margin-top:calc(var(--spacing)*.5)}.mt-1{margin-top:calc(var(--spacing)*1)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\.5{margin-bottom:calc(var(--spacing)*1.5)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-2{margin-left:calc(var(--spacing)*2)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-10{width:calc(var(--spacing)*10);height:calc(var(--spacing)*10)}.h-1{height:calc(var(--spacing)*1)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-48{height:calc(var(--spacing)*48)}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing)*2)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-16{width:calc(var(--spacing)*16)}.w-40{width:calc(var(--spacing)*40)}.w-full{width:100%}.w-screen{width:100vw}.max-w-sm{max-width:var(--container-sm)}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.cursor-pointer{cursor:pointer}.resize{resize:both}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness:mandatory}.snap-start{scroll-snap-align:start}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2.5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2.5)*calc(1 - var(--tw-space-y-reverse)))}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-x-auto{overflow-x:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-xl{border-top-left-radius:var(--radius-xl);border-top-right-radius:var(--radius-xl)}.rounded-b-2xl{border-bottom-right-radius:var(--radius-2xl);border-bottom-left-radius:var(--radius-2xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-500{border-color:var(--color-gray-500)}.border-white{border-color:var(--color-white)}.border-zinc-300{border-color:var(--color-zinc-300)}.bg-\\[\\#f0f2f5\\]{background-color:#f0f2f5}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-green-500{background-color:var(--color-green-500)}.bg-red-100{background-color:var(--color-red-100)}.bg-transparent{background-color:#0000}.bg-violet-500{background-color:var(--color-violet-500)}.bg-white{background-color:var(--color-white)}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-zinc-50{background-color:var(--color-zinc-50)}.fill-gray-300{fill:var(--color-gray-300)}.fill-yellow-400{fill:var(--color-yellow-400)}.object-cover{object-fit:cover}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-6{padding-block:calc(var(--spacing)*6)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-3{padding-top:calc(var(--spacing)*3)}.pt-6{padding-top:calc(var(--spacing)*6)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-900{color:var(--color-gray-900)}.text-green-500{color:var(--color-green-500)}.text-green-600{color:var(--color-green-600)}.text-violet-500{color:var(--color-violet-500)}.text-violet-600{color:var(--color-violet-600)}.text-white{color:var(--color-white)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-600{color:var(--color-zinc-600)}.text-zinc-900{color:var(--color-zinc-900)}.capitalize{text-transform:capitalize}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.outline-none{--tw-outline-style:none;outline-style:none}.placeholder\\:text-gray-500::placeholder{color:var(--color-gray-500)}@media(hover:hover){.hover\\:text-gray-700:hover{color:var(--color-gray-700)}}.focus\\:ring-0:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}@media(min-width:48rem){.md\\:block{display:block}.md\\:hidden{display:none}.md\\:size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.md\\:h-40{height:calc(var(--spacing)*40)}.md\\:w-40{width:calc(var(--spacing)*40)}.md\\:w-\\[35vw\\]{width:35vw}.md\\:w-\\[50vw\\]{width:50vw}.md\\:max-w-sm{max-width:var(--container-sm)}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-end{justify-content:flex-end}.md\\:rounded-2xl{border-radius:var(--radius-2xl)}.md\\:bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.md\\:bg-black\\/30{background-color:color-mix(in oklab,var(--color-black)30%,transparent)}}.md\\:bg-transparent{background-color:#0000}.md\\:p-4{padding:calc(var(--spacing)*4)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}.md\\:py-4{padding-block:calc(var(--spacing)*4)}.md\\:pb-10{padding-bottom:calc(var(--spacing)*10)}.md\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.md\\:font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}}.dark\\:block:where(.dark .dark\\:block){display:block}.dark\\:hidden:where(.dark .dark\\:hidden){display:none}.dark\\:border-zinc-600:where(.dark .dark\\:border-zinc-600){border-color:var(--color-zinc-600)}.dark\\:border-zinc-700:where(.dark .dark\\:border-zinc-700){border-color:var(--color-zinc-700)}.dark\\:bg-zinc-500:where(.dark .dark\\:bg-zinc-500){background-color:var(--color-zinc-500)}.dark\\:bg-zinc-700:where(.dark .dark\\:bg-zinc-700){background-color:var(--color-zinc-700)}.dark\\:bg-zinc-800:where(.dark .dark\\:bg-zinc-800){background-color:var(--color-zinc-800)}.dark\\:bg-zinc-900:where(.dark .dark\\:bg-zinc-900){background-color:var(--color-zinc-900)}.dark\\:text-gray-200:where(.dark .dark\\:text-gray-200){color:var(--color-gray-200)}.dark\\:text-gray-300:where(.dark .dark\\:text-gray-300){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark .dark\\:text-gray-400){color:var(--color-gray-400)}.dark\\:text-green-400:where(.dark .dark\\:text-green-400){color:var(--color-green-400)}.dark\\:text-violet-400:where(.dark .dark\\:text-violet-400){color:var(--color-violet-400)}.dark\\:text-white:where(.dark .dark\\:text-white){color:var(--color-white)}.dark\\:text-zinc-100:where(.dark .dark\\:text-zinc-100){color:var(--color-zinc-100)}.dark\\:text-zinc-400:where(.dark .dark\\:text-zinc-400),.dark\\:placeholder\\:text-zinc-400:where(.dark .dark\\:placeholder\\:text-zinc-400)::placeholder{color:var(--color-zinc-400)}@media(hover:hover){.dark\\:hover\\:text-gray-300:where(.dark .dark\\:hover\\:text-gray-300):hover{color:var(--color-gray-300)}}@media(min-width:48rem){.md\\:dark\\:bg-transparent:where(.dark .md\\:dark\\:bg-transparent){background-color:#0000}}}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}.slide-up-enter-from{transform:translateY(100%)}.slide-up-enter-to{transform:translateY(0)}.slide-up-leave-to{transform:translateY(100%)}.slide-up-enter-active,.slide-up-leave-active{transition:all .25s}.fade-enter-from{opacity:0}.fade-enter-to{opacity:1}.fade-leave-to{opacity:0}.fade-enter-active,.fade-leave-active{transition:all .2s}@property --tw-scroll-snap-strictness{syntax:"*";inherits:false;initial-value:proximity}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}';
const se = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ce(e, t) {
  let a = "";
  for (let r in e) {
    if (se(r) || I(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const o = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? a += ` class="${pe(o)}"` : r === "style" ? a += ` style="${ge(o)}"` : a += de(r, o, t);
  }
  return a;
}
function de(e, t, a) {
  if (!Y(t))
    return "";
  const r = a && (a.indexOf("-") > 0 || K(a)) ? e : J[e] || e.toLowerCase();
  return Q(r) ? X(t) ? ` ${r}` : "" : Z(r) ? t === "" ? ` ${r}` : ` ${r}="${g(t)}"` : (console.warn(
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
  if (!C(e) && q(e)) {
    const t = {};
    for (const a in e)
      a.startsWith(":--") ? t[a.slice(1)] = ee(e[a]) : t[a] = e[a];
    return t;
  }
  return e;
}
function fe(e, t, a, r, o) {
  e("<!--teleport start-->");
  const i = o.appContext.provides[_], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[a] || (n[a] = []), c = l.length;
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
    let o;
    return (o = e[a]) || (o = e[a] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((n) => n(i)) : o[0](i);
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
function we(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ue,
  setCurrentRenderingInstance: y,
  setupComponent: ve,
  renderComponentRoot: x,
  normalizeVNode: be
} = z;
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
      t.push(a), e = r, (u(a) || C(a) && a.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, a) {
  const r = e.component = ue(
    e,
    t,
    null
  ), o = ve(
    r,
    !0
    /* isSSR */
  ), i = u(o);
  let n = r.sp;
  return i || n ? Promise.resolve(o).then(() => {
    if (i && (n = r.sp), n)
      return Promise.all(
        n.map((c) => c.call(r.proxy))
      );
  }).catch(b).then(() => k(r, a)) : k(r, a);
}
function k(e, t) {
  const a = e.type, { getBuffer: r, push: o } = S();
  if (j(a)) {
    let i = x(e);
    if (!a.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    v(o, e.subTree = i, e, t);
  } else {
    (!e.render || e.render === b) && !e.ssrRender && !a.ssrRender && h(a.template) && (a.ssrRender = we(a.template));
    const i = e.ssrRender || a.ssrRender;
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
      if (t) {
        l || (n = { ...n });
        const d = t.trim().split(" ");
        for (let s = 0; s < d.length; s++)
          n[d[s]] = "";
      }
      const p = y(e);
      try {
        i(
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
        y(p);
      }
    } else e.render && e.render !== b ? v(
      o,
      e.subTree = x(e),
      e,
      t
    ) : (a.name || a.__file, o("<!---->"));
  }
  return r();
}
function v(e, t, a, r) {
  const { type: o, shapeFlag: i, children: n, dirs: l, props: c } = t;
  switch (l && (t.props = ye(t, c, l)), o) {
    case L:
      e(g(n));
      break;
    case U:
      e(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case M:
      e(n);
      break;
    case V:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), m(
        e,
        n,
        a,
        r
      ), e("<!--]-->");
      break;
    default:
      i & 1 ? me(e, t, a, r) : i & 6 ? e(T(t, a, r)) : i & 64 ? xe(e, t, a, r) : i & 128 && v(e, t.ssContent, a, r);
  }
}
function m(e, t, a, r) {
  for (let o = 0; o < t.length; o++)
    v(e, be(t[o]), a, r);
}
function me(e, t, a, r) {
  const o = t.type;
  let { props: i, children: n, shapeFlag: l, scopeId: c } = t, p = `<${o}`;
  i && (p += ce(i, o)), c && (p += ` ${c}`);
  let d = a, s = t;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (r && (p += ` ${r}`), e(p + ">"), !P(o)) {
    let f = !1;
    i && (i.innerHTML ? (f = !0, e(i.innerHTML)) : i.textContent ? (f = !0, e(g(i.textContent))) : o === "textarea" && i.value && (f = !0, e(g(i.value)))), f || (l & 8 ? e(g(n)) : l & 16 && m(
      e,
      n,
      a,
      r
    )), e(`</${o}>`);
  }
}
function ye(e, t, a) {
  const r = [];
  for (let o = 0; o < a.length; o++) {
    const i = a[o], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const l = n(i, e);
      l && r.push(l);
    }
  }
  return O(t || {}, ...r);
}
function xe(e, t, a, r) {
  const o = t.props && t.props.to, i = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!h(o))
    return [];
  fe(
    e,
    (n) => {
      m(
        n,
        t.children,
        a,
        r
      );
    },
    o,
    i || i === "",
    a
  );
}
const { isVNode: ke } = z;
function w(e, t, a) {
  if (!e.hasAsync)
    return t + A(e);
  let r = t;
  for (let o = a; o < e.length; o += 1) {
    const i = e[o];
    if (h(i)) {
      r += i;
      continue;
    }
    if (u(i))
      return i.then((l) => (e[o] = l, w(e, r, o)));
    const n = w(i, r, 0);
    if (u(n))
      return n.then((l) => (e[o] = l, w(e, "", o)));
    r = n;
  }
  return r;
}
function R(e) {
  return w(e, "", 0);
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
  a.appContext = e._context, e.provide(_, t);
  const r = await T(a), o = await R(r);
  if (await ze(t), t.__watcherHandles)
    for (const i of t.__watcherHandles)
      i();
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
    return (t, a) => (oe(), ae("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, _e));
  }
});
ne(le);
const Te = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = ie(Ce, {
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
