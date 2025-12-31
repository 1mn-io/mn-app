import { B as N, C as _, A as E, D as B, E as z, G as v, N as f, H as V, I as h, F as j, S as M, J as U, K as H, T as L, L as g, M as C, O, P, Q as F, R as I, n as D, x as G, U as K, V as W, W as J, X as Q, Y as X, Z as Y, _ as Z, $ as q, a0 as rr, a1 as er, d as ar, a2 as or } from "./runtime-dom.esm-bundler-C-IhLZUr.js";
function tr(r, e) {
  e === void 0 && (e = {});
  var a = e.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], t = document.createElement("style");
    t.type = "text/css", a === "top" && o.firstChild ? o.insertBefore(t, o.firstChild) : o.appendChild(t), t.styleSheet ? t.styleSheet.cssText = r : t.appendChild(document.createTextNode(r));
  }
}
const ir = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-300:oklch(80.8% .114 19.571);--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-400:oklch(79.2% .209 151.711);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-900:oklch(38.1% .176 304.987);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-2xl:42rem;--container-4xl:56rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--animate-spin:spin 1s linear infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.-top-2{top:calc(var(--spacing)*-2)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-4{top:calc(var(--spacing)*4)}.right-0{right:calc(var(--spacing)*0)}.right-3{right:calc(var(--spacing)*3)}.right-4{right:calc(var(--spacing)*4)}.right-8{right:calc(var(--spacing)*8)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-10{bottom:calc(var(--spacing)*10)}.left-1\\/2{left:50%}.left-3{left:calc(var(--spacing)*3)}.z-10{z-index:10}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.col-span-2{grid-column:span 2/span 2}.col-span-12{grid-column:span 12/span 12}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-10{margin-top:calc(var(--spacing)*10)}.mr-3{margin-right:calc(var(--spacing)*3)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.h-1{height:calc(var(--spacing)*1)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-12{height:calc(var(--spacing)*12)}.h-96{height:calc(var(--spacing)*96)}.h-\\[70vh\\]{height:70vh}.h-auto{height:auto}.h-full{height:100%}.max-h-60{max-height:calc(var(--spacing)*60)}.max-h-\\[90vh\\]{max-height:90vh}.max-h-full{max-height:100%}.min-h-\\[56px\\]{min-height:56px}.min-h-full{min-height:100%}.min-h-screen{min-height:100vh}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-12{width:calc(var(--spacing)*12)}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-4xl{max-width:var(--container-4xl)}.max-w-full{max-width:100%}.max-w-sm{max-width:var(--container-sm)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-\\[50px\\]{min-width:50px}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-2{--tw-translate-y:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.cursor-wait{cursor:wait}.resize-y{resize:vertical}.appearance-none{appearance:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-3>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*3)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-x-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-blue-200{border-color:var(--color-blue-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-green-200{border-color:var(--color-green-200)}.border-purple-500{border-color:var(--color-purple-500)}.border-purple-600{border-color:var(--color-purple-600)}.border-red-200{border-color:var(--color-red-200)}.border-transparent{border-color:#0000}.bg-black\\/70{background-color:#000000b3}@supports (color:color-mix(in lab,red,red)){.bg-black\\/70{background-color:color-mix(in oklab,var(--color-black)70%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-500{background-color:var(--color-gray-500)}.bg-green-50{background-color:var(--color-green-50)}.bg-green-100{background-color:var(--color-green-100)}.bg-purple-50{background-color:var(--color-purple-50)}.bg-purple-50\\/50{background-color:#faf5ff80}@supports (color:color-mix(in lab,red,red)){.bg-purple-50\\/50{background-color:color-mix(in oklab,var(--color-purple-50)50%,transparent)}}.bg-purple-100{background-color:var(--color-purple-100)}.bg-purple-600{background-color:var(--color-purple-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-red-100{background-color:var(--color-red-100)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-\\[length\\:1\\.5em_1\\.5em\\]{background-size:1.5em 1.5em}.bg-\\[right_0\\.5rem_center\\]{background-position:right .5rem center}.bg-no-repeat{background-repeat:no-repeat}.stroke-gray-800{stroke:var(--color-gray-800)}.object-contain{object-fit:contain}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-10{padding:calc(var(--spacing)*10)}.px-0{padding-inline:calc(var(--spacing)*0)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-5{padding-top:calc(var(--spacing)*5)}.pt-6{padding-top:calc(var(--spacing)*6)}.pr-4{padding-right:calc(var(--spacing)*4)}.pr-10{padding-right:calc(var(--spacing)*10)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pb-20{padding-bottom:calc(var(--spacing)*20)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.text-left{text-align:left}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-6{--tw-leading:calc(var(--spacing)*6);line-height:calc(var(--spacing)*6)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.text-blue-400{color:var(--color-blue-400)}.text-blue-800{color:var(--color-blue-800)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-green-400{color:var(--color-green-400)}.text-green-800{color:var(--color-green-800)}.text-purple-500{color:var(--color-purple-500)}.text-purple-600{color:var(--color-purple-600)}.text-purple-700{color:var(--color-purple-700)}.text-red-400{color:var(--color-red-400)}.text-red-500{color:var(--color-red-500)}.text-red-800{color:var(--color-red-800)}.text-transparent{color:#0000}.text-white{color:var(--color-white)}.italic{font-style:italic}.underline{text-decoration-line:underline}.accent-purple-600{accent-color:var(--color-purple-600)}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-100{opacity:1}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-purple-600{--tw-ring-color:var(--color-purple-600)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.-outline-offset-1{outline-offset:-1px}.outline-gray-300{outline-color:var(--color-gray-300)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-100{--tw-duration:.1s;transition-duration:.1s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.peer-placeholder-shown\\:top-4:is(:where(.peer):placeholder-shown~*){top:calc(var(--spacing)*4)}.peer-placeholder-shown\\:left-3:is(:where(.peer):placeholder-shown~*){left:calc(var(--spacing)*3)}.peer-placeholder-shown\\:bg-transparent:is(:where(.peer):placeholder-shown~*){background-color:#0000}.peer-placeholder-shown\\:px-0:is(:where(.peer):placeholder-shown~*){padding-inline:calc(var(--spacing)*0)}.peer-placeholder-shown\\:text-base:is(:where(.peer):placeholder-shown~*){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.peer-placeholder-shown\\:text-gray-400:is(:where(.peer):placeholder-shown~*){color:var(--color-gray-400)}.peer-focus\\:-top-2:is(:where(.peer):focus~*){top:calc(var(--spacing)*-2)}.peer-focus\\:bg-white:is(:where(.peer):focus~*){background-color:var(--color-white)}.peer-focus\\:px-1:is(:where(.peer):focus~*){padding-inline:calc(var(--spacing)*1)}.peer-focus\\:text-xs:is(:where(.peer):focus~*){font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.peer-focus\\:text-purple-600:is(:where(.peer):focus~*){color:var(--color-purple-600)}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.placeholder\\:text-transparent::placeholder{color:#0000}@media(hover:hover){.hover\\:border-purple-400:hover{border-color:var(--color-purple-400)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-purple-50:hover{background-color:var(--color-purple-50)}.hover\\:bg-purple-700:hover{background-color:var(--color-purple-700)}.hover\\:text-gray-500:hover{color:var(--color-gray-500)}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-purple-600:hover{color:var(--color-purple-600)}.hover\\:text-purple-900:hover{color:var(--color-purple-900)}.hover\\:text-red-500:hover{color:var(--color-red-500)}.hover\\:opacity-100:hover{opacity:1}}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-purple-600:focus{--tw-ring-color:var(--color-purple-600)}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:-outline-offset-2:focus{outline-offset:-2px}.focus\\:outline-purple-600:focus{outline-color:var(--color-purple-600)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus\\:placeholder\\:text-gray-400:focus::placeholder{color:var(--color-gray-400)}.focus-visible\\:outline:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-gray-300:focus-visible{outline-color:var(--color-gray-300)}.focus-visible\\:outline-purple-600:focus-visible{outline-color:var(--color-purple-600)}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:col-span-1{grid-column:span 1/span 1}.sm\\:col-span-2{grid-column:span 2/span 2}.sm\\:col-span-3{grid-column:span 3/span 3}.sm\\:col-span-4{grid-column:span 4/span 4}.sm\\:col-span-5{grid-column:span 5/span 5}.sm\\:col-span-6{grid-column:span 6/span 6}.sm\\:col-span-7{grid-column:span 7/span 7}.sm\\:col-span-8{grid-column:span 8/span 8}.sm\\:col-span-9{grid-column:span 9/span 9}.sm\\:col-span-10{grid-column:span 10/span 10}.sm\\:col-span-11{grid-column:span 11/span 11}.sm\\:mx-auto{margin-inline:auto}.sm\\:my-8{margin-block:calc(var(--spacing)*8)}.sm\\:mt-0{margin-top:calc(var(--spacing)*0)}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:inline-block{display:inline-block}.sm\\:h-screen{height:100vh}.sm\\:w-full{width:100%}.sm\\:max-w-2xl{max-width:var(--container-2xl)}.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:translate-x-2{--tw-translate-x:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:flex-row{flex-direction:row}.sm\\:items-start{align-items:flex-start}.sm\\:p-0{padding:calc(var(--spacing)*0)}.sm\\:p-6{padding:calc(var(--spacing)*6)}.sm\\:text-left{text-align:left}.sm\\:align-middle{vertical-align:middle}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media(min-width:48rem){.md\\:col-span-1{grid-column:span 1/span 1}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}.dark\\:border-blue-700:where(.dark,.dark *){border-color:var(--color-blue-700)}.dark\\:border-gray-600:where(.dark,.dark *){border-color:var(--color-gray-600)}.dark\\:border-gray-700:where(.dark,.dark *){border-color:var(--color-gray-700)}.dark\\:border-green-700:where(.dark,.dark *){border-color:var(--color-green-700)}.dark\\:border-purple-400:where(.dark,.dark *){border-color:var(--color-purple-400)}.dark\\:border-red-800:where(.dark,.dark *){border-color:var(--color-red-800)}.dark\\:bg-blue-900:where(.dark,.dark *){background-color:var(--color-blue-900)}.dark\\:bg-blue-900\\/30:where(.dark,.dark *){background-color:#1c398e4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-blue-900\\/30:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-blue-900)30%,transparent)}}.dark\\:bg-gray-700:where(.dark,.dark *){background-color:var(--color-gray-700)}.dark\\:bg-gray-800:where(.dark,.dark *){background-color:var(--color-gray-800)}.dark\\:bg-gray-900:where(.dark,.dark *){background-color:var(--color-gray-900)}.dark\\:bg-green-900:where(.dark,.dark *){background-color:var(--color-green-900)}.dark\\:bg-green-900\\/30:where(.dark,.dark *){background-color:#0d542b4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-green-900\\/30:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-green-900)30%,transparent)}}.dark\\:bg-purple-500:where(.dark,.dark *){background-color:var(--color-purple-500)}.dark\\:bg-purple-700:where(.dark,.dark *){background-color:var(--color-purple-700)}.dark\\:bg-purple-900\\/10:where(.dark,.dark *){background-color:#59168b1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-purple-900\\/10:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-purple-900)10%,transparent)}}.dark\\:bg-purple-900\\/20:where(.dark,.dark *){background-color:#59168b33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-purple-900\\/20:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-purple-900)20%,transparent)}}.dark\\:bg-purple-900\\/40:where(.dark,.dark *){background-color:#59168b66}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-purple-900\\/40:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-purple-900)40%,transparent)}}.dark\\:bg-red-900:where(.dark,.dark *){background-color:var(--color-red-900)}.dark\\:bg-red-900\\/30:where(.dark,.dark *){background-color:#82181a4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-900\\/30:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-red-900)30%,transparent)}}.dark\\:stroke-gray-200:where(.dark,.dark *){stroke:var(--color-gray-200)}.dark\\:text-blue-200:where(.dark,.dark *){color:var(--color-blue-200)}.dark\\:text-blue-300:where(.dark,.dark *){color:var(--color-blue-300)}.dark\\:text-gray-100:where(.dark,.dark *){color:var(--color-gray-100)}.dark\\:text-gray-200:where(.dark,.dark *){color:var(--color-gray-200)}.dark\\:text-gray-300:where(.dark,.dark *){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark,.dark *){color:var(--color-gray-400)}.dark\\:text-gray-500:where(.dark,.dark *){color:var(--color-gray-500)}.dark\\:text-green-200:where(.dark,.dark *){color:var(--color-green-200)}.dark\\:text-green-300:where(.dark,.dark *){color:var(--color-green-300)}.dark\\:text-purple-300:where(.dark,.dark *){color:var(--color-purple-300)}.dark\\:text-purple-400:where(.dark,.dark *){color:var(--color-purple-400)}.dark\\:text-purple-500:where(.dark,.dark *){color:var(--color-purple-500)}.dark\\:text-red-200:where(.dark,.dark *){color:var(--color-red-200)}.dark\\:text-red-300:where(.dark,.dark *){color:var(--color-red-300)}.dark\\:outline-gray-700:where(.dark,.dark *){outline-color:var(--color-gray-700)}.dark\\:peer-placeholder-shown\\:text-gray-500:where(.dark,.dark *):is(:where(.peer):placeholder-shown~*){color:var(--color-gray-500)}.dark\\:peer-focus\\:bg-gray-800:where(.dark,.dark *):is(:where(.peer):focus~*){background-color:var(--color-gray-800)}.dark\\:peer-focus\\:text-purple-400:where(.dark,.dark *):is(:where(.peer):focus~*){color:var(--color-purple-400)}@media(hover:hover){.dark\\:hover\\:border-purple-500:where(.dark,.dark *):hover{border-color:var(--color-purple-500)}.dark\\:hover\\:bg-gray-700:where(.dark,.dark *):hover{background-color:var(--color-gray-700)}.dark\\:hover\\:bg-gray-800:where(.dark,.dark *):hover{background-color:var(--color-gray-800)}.dark\\:hover\\:bg-purple-600:where(.dark,.dark *):hover{background-color:var(--color-purple-600)}.dark\\:hover\\:bg-purple-900\\/20:where(.dark,.dark *):hover{background-color:#59168b33}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-purple-900\\/20:where(.dark,.dark *):hover{background-color:color-mix(in oklab,var(--color-purple-900)20%,transparent)}}.dark\\:hover\\:bg-purple-900\\/30:where(.dark,.dark *):hover{background-color:#59168b4d}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-purple-900\\/30:where(.dark,.dark *):hover{background-color:color-mix(in oklab,var(--color-purple-900)30%,transparent)}}.dark\\:hover\\:text-purple-400:where(.dark,.dark *):hover{color:var(--color-purple-400)}}.dark\\:focus\\:ring-purple-500:where(.dark,.dark *):focus{--tw-ring-color:var(--color-purple-500)}.dark\\:focus\\:outline-purple-500:where(.dark,.dark *):focus{outline-color:var(--color-purple-500)}.dark\\:focus\\:placeholder\\:text-gray-500:where(.dark,.dark *):focus::placeholder{color:var(--color-gray-500)}.dark\\:focus-visible\\:outline-gray-600:where(.dark,.dark *):focus-visible{outline-color:var(--color-gray-600)}.dark\\:focus-visible\\:outline-purple-500:where(.dark,.dark *):focus-visible{outline-color:var(--color-purple-500)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}';
const nr = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function lr(r, e) {
  let a = "";
  for (const o in r) {
    if (nr(o) || I(o) || e === "textarea" && o === "value")
      continue;
    const t = r[o];
    o === "class" ? a += ` class="${sr(t)}"` : o === "style" ? a += ` style="${dr(t)}"` : o === "className" ? a += ` class="${String(t)}"` : a += cr(o, t, e);
  }
  return a;
}
function cr(r, e, a) {
  if (!W(e))
    return "";
  const o = a && (a.indexOf("-") > 0 || J(a)) ? r : Q[r] || r.toLowerCase();
  return X(o) ? Y(e) ? ` ${o}` : "" : Z(o) ? e === "" ? ` ${o}` : ` ${o}="${g(e)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function sr(r) {
  return g(D(r));
}
function dr(r) {
  if (!r)
    return "";
  if (h(r))
    return g(r);
  const e = G(pr(r));
  return g(K(e));
}
function pr(r) {
  if (!C(r) && q(r)) {
    const e = {};
    for (const a in r)
      a.startsWith(":--") ? e[a.slice(1)] = rr(r[a]) : e[a] = r[a];
    return e;
  }
  return r;
}
function gr(r, e, a, o, t) {
  r("<!--teleport start-->");
  const i = t.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[a] || (n[a] = []), s = l.length;
  let p;
  if (o)
    e(r), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: c } = S();
    c("<!--teleport start anchor-->"), e(c), c("<!--teleport anchor-->"), p = d();
  }
  l.splice(s, 0, p), r("<!--teleport end-->");
}
{
  const r = N(), e = (a, o) => {
    let t;
    return (t = r[a]) || (t = r[a] = []), t.push(o), (i) => {
      t.length > 1 ? t.forEach((n) => n(i)) : t[0](i);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (a) => a
  ), e(
    "__VUE_SSR_SETTERS__",
    (a) => a
  );
}
function hr(r, e) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ur,
  setCurrentRenderingInstance: m,
  setupComponent: wr,
  renderComponentRoot: y,
  normalizeVNode: vr
} = _;
function S() {
  let r = !1;
  const e = [];
  return {
    getBuffer() {
      return e;
    },
    push(a) {
      const o = h(a);
      if (r && o) {
        e[e.length - 1] += a;
        return;
      }
      e.push(a), r = o, (v(a) || C(a) && a.hasAsync) && (e.hasAsync = !0);
    }
  };
}
function T(r, e = null, a) {
  const o = r.component = ur(
    r,
    e,
    null
  ), t = wr(
    o,
    !0
    /* isSSR */
  ), i = v(t);
  let n = o.sp;
  return i || n ? Promise.resolve(t).then(() => {
    if (i && (n = o.sp), n)
      return Promise.all(
        n.map((s) => s.call(o.proxy))
      );
  }).catch(f).then(() => x(o, a)) : x(o, a);
}
function x(r, e) {
  const a = r.type, { getBuffer: o, push: t } = S();
  if (V(a)) {
    let i = y(r);
    if (!a.props)
      for (const n in r.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    b(t, r.subTree = i, r, e);
  } else {
    (!r.render || r.render === f) && !r.ssrRender && !a.ssrRender && h(a.template) && (a.ssrRender = hr(a.template));
    const i = r.ssrRender || a.ssrRender;
    if (i) {
      let n = r.inheritAttrs !== !1 ? r.attrs : void 0, l = !1, s = r;
      for (; ; ) {
        const d = s.vnode.scopeId;
        d && (l || (n = { ...n }, l = !0), n[d] = "");
        const c = s.parent;
        if (c && c.subTree && c.subTree === s.vnode)
          s = c;
        else
          break;
      }
      if (e) {
        l || (n = { ...n });
        const d = e.trim().split(" ");
        for (let c = 0; c < d.length; c++)
          n[d[c]] = "";
      }
      const p = m(r);
      try {
        i(
          r.proxy,
          t,
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
    } else r.render && r.render !== f ? b(
      t,
      r.subTree = y(r),
      r,
      e
    ) : (a.name || a.__file, t("<!---->"));
  }
  return o();
}
function b(r, e, a, o) {
  const { type: t, shapeFlag: i, children: n, dirs: l, props: s } = e;
  switch (l && (e.props = fr(e, s, l)), t) {
    case L:
      r(g(n));
      break;
    case U:
      r(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case M:
      r(n);
      break;
    case j:
      e.slotScopeIds && (o = (o ? o + " " : "") + e.slotScopeIds.join(" ")), r("<!--[-->"), k(
        r,
        n,
        a,
        o
      ), r("<!--]-->");
      break;
    default:
      i & 1 ? br(r, e, a, o) : i & 6 ? r(T(e, a, o)) : i & 64 ? kr(r, e, a, o) : i & 128 && b(r, e.ssContent, a, o);
  }
}
function k(r, e, a, o) {
  for (let t = 0; t < e.length; t++)
    b(r, vr(e[t]), a, o);
}
function br(r, e, a, o) {
  const t = e.type;
  let { props: i, children: n, shapeFlag: l, scopeId: s } = e, p = `<${t}`;
  i && (p += lr(i, t)), s && (p += ` ${s}`);
  let d = a, c = e;
  for (; d && c === d.subTree; )
    c = d.vnode, c.scopeId && (p += ` ${c.scopeId}`), d = d.parent;
  if (o && (p += ` ${o}`), r(p + ">"), !P(t)) {
    let u = !1;
    i && (i.innerHTML ? (u = !0, r(i.innerHTML)) : i.textContent ? (u = !0, r(g(i.textContent))) : t === "textarea" && i.value && (u = !0, r(g(i.value)))), u || (l & 8 ? r(g(n)) : l & 16 && k(
      r,
      n,
      a,
      o
    )), r(`</${t}>`);
  }
}
function fr(r, e, a) {
  const o = [];
  for (let t = 0; t < a.length; t++) {
    const i = a[t], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const l = n(i, r);
      l && o.push(l);
    }
  }
  return O(e || {}, ...o);
}
function kr(r, e, a, o) {
  const t = e.props && e.props.to, i = e.props && e.props.disabled;
  if (!t)
    return [];
  if (!h(t))
    return [];
  gr(
    r,
    (n) => {
      k(
        n,
        e.children,
        a,
        o
      );
    },
    t,
    i || i === "",
    a
  );
}
const { isVNode: mr } = _;
function w(r, e, a) {
  if (!r.hasAsync)
    return e + R(r);
  let o = e;
  for (let t = a; t < r.length; t += 1) {
    const i = r[t];
    if (h(i)) {
      o += i;
      continue;
    }
    if (v(i))
      return i.then((l) => (r[t] = l, w(r, o, t)));
    const n = w(i, o, 0);
    if (v(n))
      return n.then((l) => (r[t] = l, w(r, "", t)));
    o = n;
  }
  return o;
}
function $(r) {
  return w(r, "", 0);
}
function R(r) {
  let e = "";
  for (let a = 0; a < r.length; a++) {
    let o = r[a];
    h(o) ? e += o : e += R(o);
  }
  return e;
}
async function A(r, e = {}) {
  if (mr(r))
    return A(E({ render: () => r }), e);
  const a = B(r._component, r._props);
  a.appContext = r._context, r.provide(z, e);
  const o = await T(a), t = await $(o);
  if (await yr(e), e.__watcherHandles)
    for (const i of e.__watcherHandles)
      i();
  return t;
}
async function yr(r) {
  if (r.__teleportBuffers) {
    r.teleports = r.teleports || {};
    for (const e in r.__teleportBuffers)
      r.teleports[e] = await $(
        await Promise.all([r.__teleportBuffers[e]])
      );
  }
}
er();
const xr = /* @__PURE__ */ ar({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(r) {
    return (e, a) => null;
  }
});
tr(ir);
const zr = async (r) => ({
  set: async (e, a) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const t = or(xr, {
      _p: r,
      _$p: e,
      _$cb: a
    });
    return {
      r: `
                 <div>
                    ${await A(t)}
                    <div id="${r.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let l = "";
        return l = `
                .${r.f.name("text")} {
                   background: transparent;
                }
                `, l;
      })()
    };
  }
});
export {
  zr as index,
  zr as renderer
};
