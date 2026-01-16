import { s as B, x as z, q as E, e as N, y as _, z as u, N as v, A as V, B as h, F as j, S as M, C as U, D as H, T as L, E as p, G as C, H as O, I as P, J as F, K as I, n as D, L as G, M as K, O as W, P as q, Q as J, R as Q, U as X, V as Y, W as Z, X as ee, Y as re, k as te, a as oe, o as ae, Z as ie } from "./runtime-dom.esm-bundler-CO4_3xJR.js";
function ne(e, r) {
  r === void 0 && (r = {});
  var t = r.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", t === "top" && o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
const le = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-100:oklch(95.4% .038 75.164);--color-orange-500:oklch(70.5% .213 47.604);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-900:oklch(39.3% .095 152.535);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-900:oklch(37.9% .146 265.522);--color-violet-100:oklch(94.3% .029 294.588);--color-violet-500:oklch(60.6% .25 292.717);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.top-1\\/2{top:50%}.right-0{right:calc(var(--spacing)*0)}.right-4{right:calc(var(--spacing)*4)}.bottom-0{bottom:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.z-50{z-index:50}.order-1{order:1}.order-2{order:2}.order-3{order:3}.mx-4{margin-inline:calc(var(--spacing)*4)}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-6{margin-top:calc(var(--spacing)*6)}.mr-1{margin-right:calc(var(--spacing)*1)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-flex{display:inline-flex}.aspect-square{aspect-ratio:1}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-12{height:calc(var(--spacing)*12)}.h-24{height:calc(var(--spacing)*24)}.min-h-16{min-height:calc(var(--spacing)*16)}.min-h-screen{min-height:100vh}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-12{width:calc(var(--spacing)*12)}.w-24{width:calc(var(--spacing)*24)}.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.flex-1{flex:1}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.appearance-none{appearance:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}.self-start{align-self:flex-start}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-b-2xl{border-bottom-right-radius:var(--radius-2xl);border-bottom-left-radius:var(--radius-2xl)}.rounded-br-lg{border-bottom-right-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.bg-\\[\\#f0f2f5\\]{background-color:#f0f2f5}.bg-\\[\\#f1117e\\]{background-color:#f1117e}.bg-\\[\\#fceef4\\]{background-color:#fceef4}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-green-100{background-color:var(--color-green-100)}.bg-green-500{background-color:var(--color-green-500)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-violet-500{background-color:var(--color-violet-500)}.bg-white{background-color:var(--color-white)}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3\\.5{padding-block:calc(var(--spacing)*3.5)}.py-4{padding-block:calc(var(--spacing)*4)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-6{padding-top:calc(var(--spacing)*6)}.pr-1\\.5{padding-right:calc(var(--spacing)*1.5)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pb-6{padding-bottom:calc(var(--spacing)*6)}.pl-4{padding-left:calc(var(--spacing)*4)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-\\[\\#f1117e\\]{color:#f1117e}.text-blue-600{color:var(--color-blue-600)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-green-500{color:var(--color-green-500)}.text-green-600{color:var(--color-green-600)}.text-orange-500{color:var(--color-orange-500)}.text-violet-100{color:var(--color-violet-100)}.text-white{color:var(--color-white)}.text-zinc-900{color:var(--color-zinc-900)}.uppercase{text-transform:uppercase}.line-through{text-decoration-line:line-through}.opacity-50{opacity:.5}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:shadow-2xl:hover{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-green-500:focus{border-color:var(--color-green-500)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:ring-green-200:focus{--tw-ring-color:var(--color-green-200)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:scale-\\[0\\.98\\]:active{scale:.98}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-blue-200:disabled{background-color:var(--color-blue-200)}.disabled\\:opacity-40:disabled{opacity:.4}.disabled\\:opacity-50:disabled{opacity:.5}@media(hover:hover){.disabled\\:hover\\:shadow-lg:disabled:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media(min-width:48rem){.md\\:order-1{order:1}.md\\:order-2{order:2}.md\\:mb-1{margin-bottom:calc(var(--spacing)*1)}.md\\:mb-10{margin-bottom:calc(var(--spacing)*10)}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:h-5{height:calc(var(--spacing)*5)}.md\\:min-h-16{min-height:calc(var(--spacing)*16)}.md\\:w-5{width:calc(var(--spacing)*5)}.md\\:max-w-md{max-width:var(--container-md)}.md\\:flex-col{flex-direction:column}.md\\:flex-row{flex-direction:row}.md\\:gap-3{gap:calc(var(--spacing)*3)}.md\\:rounded-2xl{border-radius:var(--radius-2xl)}.md\\:border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.md\\:bg-\\[\\#fceef4\\]{background-color:#fceef4}.md\\:bg-gray-100{background-color:var(--color-gray-100)}.md\\:bg-green-500{background-color:var(--color-green-500)}.md\\:bg-transparent{background-color:#0000}.md\\:p-2{padding:calc(var(--spacing)*2)}.md\\:px-4{padding-inline:calc(var(--spacing)*4)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}.md\\:py-1{padding-block:calc(var(--spacing)*1)}.md\\:py-2{padding-block:calc(var(--spacing)*2)}.md\\:pl-0{padding-left:calc(var(--spacing)*0)}.md\\:text-center{text-align:center}.md\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.md\\:text-\\[1rem\\]{font-size:1rem}.md\\:font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.md\\:text-gray-500{color:var(--color-gray-500)}.md\\:disabled\\:bg-green-200:disabled{background-color:var(--color-green-200)}}.dark\\:border-zinc-700:where(.dark .dark\\:border-zinc-700){border-color:var(--color-zinc-700)}.dark\\:bg-blue-600:where(.dark .dark\\:bg-blue-600){background-color:var(--color-blue-600)}.dark\\:bg-green-600:where(.dark .dark\\:bg-green-600){background-color:var(--color-green-600)}.dark\\:bg-zinc-700:where(.dark .dark\\:bg-zinc-700){background-color:var(--color-zinc-700)}.dark\\:bg-zinc-800:where(.dark .dark\\:bg-zinc-800){background-color:var(--color-zinc-800)}.dark\\:bg-zinc-900:where(.dark .dark\\:bg-zinc-900){background-color:var(--color-zinc-900)}.dark\\:text-blue-400:where(.dark .dark\\:text-blue-400){color:var(--color-blue-400)}.dark\\:text-gray-100:where(.dark .dark\\:text-gray-100){color:var(--color-gray-100)}.dark\\:text-gray-400:where(.dark .dark\\:text-gray-400){color:var(--color-gray-400)}.dark\\:text-green-400:where(.dark .dark\\:text-green-400){color:var(--color-green-400)}.dark\\:text-zinc-100:where(.dark .dark\\:text-zinc-100){color:var(--color-zinc-100)}.dark\\:text-zinc-300:where(.dark .dark\\:text-zinc-300){color:var(--color-zinc-300)}.dark\\:text-zinc-400:where(.dark .dark\\:text-zinc-400){color:var(--color-zinc-400)}.dark\\:text-zinc-500:where(.dark .dark\\:text-zinc-500){color:var(--color-zinc-500)}@media(hover:hover){.dark\\:hover\\:bg-zinc-700:where(.dark .dark\\:hover\\:bg-zinc-700):hover{background-color:var(--color-zinc-700)}}.dark\\:focus\\:ring-green-900:where(.dark .dark\\:focus\\:ring-green-900):focus{--tw-ring-color:var(--color-green-900)}.dark\\:disabled\\:bg-blue-900:where(.dark .dark\\:disabled\\:bg-blue-900):disabled{background-color:var(--color-blue-900)}@media(min-width:48rem){.dark\\:md\\:bg-green-600:where(.dark .dark\\:md\\:bg-green-600){background-color:var(--color-green-600)}.dark\\:md\\:bg-zinc-800:where(.dark .dark\\:md\\:bg-zinc-800){background-color:var(--color-zinc-800)}.dark\\:md\\:bg-zinc-900:where(.dark .dark\\:md\\:bg-zinc-900){background-color:var(--color-zinc-900)}.dark\\:md\\:disabled\\:bg-green-900:where(.dark .dark\\:md\\:disabled\\:bg-green-900):disabled{background-color:var(--color-green-900)}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}';
const se = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ce(e, r) {
  let t = "";
  for (const o in e) {
    if (se(o) || I(o) || r === "textarea" && o === "value")
      continue;
    const a = e[o];
    o === "class" ? t += ` class="${ge(a)}"` : o === "style" ? t += ` style="${pe(a)}"` : o === "className" ? t += ` class="${String(a)}"` : t += de(o, a, r);
  }
  return t;
}
function de(e, r, t) {
  if (!W(r))
    return "";
  const o = t && (t.indexOf("-") > 0 || q(t)) ? e : J[e] || e.toLowerCase();
  return Q(o) ? X(r) ? ` ${o}` : "" : Y(o) ? r === "" ? ` ${o}` : ` ${o}="${p(r)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function ge(e) {
  return p(D(e));
}
function pe(e) {
  if (!e)
    return "";
  if (h(e))
    return p(e);
  const r = G(he(e));
  return p(K(r));
}
function he(e) {
  if (!C(e) && Z(e)) {
    const r = {};
    for (const t in e)
      t.startsWith(":--") ? r[t.slice(1)] = ee(e[t]) : r[t] = e[t];
    return r;
  }
  return e;
}
function fe(e, r, t, o, a) {
  e("<!--teleport start-->");
  const i = a.appContext.provides[_], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[t] || (n[t] = []), c = l.length;
  let g;
  if (o)
    r(e), g = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = S();
    s("<!--teleport start anchor-->"), r(s), s("<!--teleport anchor-->"), g = d();
  }
  l.splice(c, 0, g), e("<!--teleport end-->");
}
{
  const e = B(), r = (t, o) => {
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
function we(e, r) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ue,
  setCurrentRenderingInstance: x,
  setupComponent: be,
  renderComponentRoot: y,
  normalizeVNode: ve
} = z;
function S() {
  let e = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(t) {
      const o = h(t);
      if (e && o) {
        r[r.length - 1] += t;
        return;
      }
      r.push(t), e = o, (u(t) || C(t) && t.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function T(e, r = null, t) {
  const o = e.component = ue(
    e,
    r,
    null
  ), a = be(
    o,
    !0
    /* isSSR */
  ), i = u(a);
  let n = o.sp;
  return i || n ? Promise.resolve(a).then(() => {
    if (i && (n = o.sp), n)
      return Promise.all(
        n.map((c) => c.call(o.proxy))
      );
  }).catch(v).then(() => k(o, t)) : k(o, t);
}
function k(e, r) {
  const t = e.type, { getBuffer: o, push: a } = S();
  if (V(t)) {
    let i = y(e);
    if (!t.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    b(a, e.subTree = i, e, r);
  } else {
    (!e.render || e.render === v) && !e.ssrRender && !t.ssrRender && h(t.template) && (t.ssrRender = we(t.template));
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
      const g = x(e);
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
        x(g);
      }
    } else e.render && e.render !== v ? b(
      a,
      e.subTree = y(e),
      e,
      r
    ) : (t.name || t.__file, a("<!---->"));
  }
  return o();
}
function b(e, r, t, o) {
  const { type: a, shapeFlag: i, children: n, dirs: l, props: c } = r;
  switch (l && (r.props = xe(r, c, l)), a) {
    case L:
      e(p(n));
      break;
    case U:
      e(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case M:
      e(n);
      break;
    case j:
      r.slotScopeIds && (o = (o ? o + " " : "") + r.slotScopeIds.join(" ")), e("<!--[-->"), m(
        e,
        n,
        t,
        o
      ), e("<!--]-->");
      break;
    default:
      i & 1 ? me(e, r, t, o) : i & 6 ? e(T(r, t, o)) : i & 64 ? ye(e, r, t, o) : i & 128 && b(e, r.ssContent, t, o);
  }
}
function m(e, r, t, o) {
  for (let a = 0; a < r.length; a++)
    b(e, ve(r[a]), t, o);
}
function me(e, r, t, o) {
  const a = r.type;
  let { props: i, children: n, shapeFlag: l, scopeId: c } = r, g = `<${a}`;
  i && (g += ce(i, a)), c && (g += ` ${c}`);
  let d = t, s = r;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (g += ` ${s.scopeId}`), d = d.parent;
  if (o && (g += ` ${o}`), e(g + ">"), !P(a)) {
    let f = !1;
    i && (i.innerHTML ? (f = !0, e(i.innerHTML)) : i.textContent ? (f = !0, e(p(i.textContent))) : a === "textarea" && i.value && (f = !0, e(p(i.value)))), f || (l & 8 ? e(p(n)) : l & 16 && m(
      e,
      n,
      t,
      o
    )), e(`</${a}>`);
  }
}
function xe(e, r, t) {
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
function ye(e, r, t, o) {
  const a = r.props && r.props.to, i = r.props && r.props.disabled;
  if (!a)
    return [];
  if (!h(a))
    return [];
  fe(
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
const { isVNode: ke } = z;
function w(e, r, t) {
  if (!e.hasAsync)
    return r + A(e);
  let o = r;
  for (let a = t; a < e.length; a += 1) {
    const i = e[a];
    if (h(i)) {
      o += i;
      continue;
    }
    if (u(i))
      return i.then((l) => (e[a] = l, w(e, o, a)));
    const n = w(i, o, 0);
    if (u(n))
      return n.then((l) => (e[a] = l, w(e, "", a)));
    o = n;
  }
  return o;
}
function R(e) {
  return w(e, "", 0);
}
function A(e) {
  let r = "";
  for (let t = 0; t < e.length; t++) {
    let o = e[t];
    h(o) ? r += o : r += A(o);
  }
  return r;
}
async function $(e, r = {}) {
  if (ke(e))
    return $(E({ render: () => e }), r);
  const t = N(e._component, e._props);
  t.appContext = e._context, e.provide(_, r);
  const o = await T(t), a = await R(o);
  if (await ze(r), r.__watcherHandles)
    for (const i of r.__watcherHandles)
      i();
  return a;
}
async function ze(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const r in e.__teleportBuffers)
      e.teleports[r] = await R(
        await Promise.all([e.__teleportBuffers[r]])
      );
  }
}
re();
const _e = ["id"], Ce = /* @__PURE__ */ te({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (r, t) => (ae(), oe("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, _e));
  }
});
ne(le);
const Te = async (e) => ({
  set: async (r) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const o = ie(Ce, {
      _p: e,
      _$p: r
    });
    return {
      r: `
                 <div>
                    ${await $(o)}
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
