import { y as B, z as _, x as N, k as E, A as z, B as f, N as b, C as V, D as w, F as M, S as j, E as U, G as H, H as L, I as g, J as C, K as O, L as P, M as F, O as I, n as D, P as G, Q as K, R as W, U as J, V as Q, W as X, X as Y, Y as Z, Z as q, _ as rr, $ as tr, d as er, b as ar, f as or, t as ir, e as nr, a0 as lr } from "./runtime-dom.esm-bundler-SrCaS0sf.js";
function sr(r, t) {
  t === void 0 && (t = {});
  var e = t.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", e === "top" && a.firstChild ? a.insertBefore(o, a.firstChild) : a.appendChild(o), o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r));
  }
}
const cr = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-800:oklch(44.4% .177 26.899);--color-orange-500:oklch(70.5% .213 47.604);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-500:oklch(72.3% .219 149.579);--color-teal-500:oklch(70.4% .14 182.503);--color-cyan-400:oklch(78.9% .154 211.53);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-900:oklch(37.9% .146 265.522);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-800:oklch(43.8% .218 303.724);--color-purple-900:oklch(38.1% .176 304.987);--color-pink-300:oklch(82.3% .12 346.018);--color-pink-400:oklch(71.8% .202 349.761);--color-pink-500:oklch(65.6% .241 354.308);--color-pink-600:oklch(59.2% .249 .584);--color-pink-700:oklch(52.5% .223 3.958);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--container-6xl:72rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-spin:spin 1s linear infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-2\\.5{top:calc(var(--spacing)*2.5)}.right-6{right:calc(var(--spacing)*6)}.bottom-6{bottom:calc(var(--spacing)*6)}.left-0{left:calc(var(--spacing)*0)}.left-3{left:calc(var(--spacing)*3)}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.z-\\[100\\]{z-index:100}.z-\\[110\\]{z-index:110}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-flex{display:inline-flex}.table{display:table}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-3{height:calc(var(--spacing)*3)}.h-3\\.5{height:calc(var(--spacing)*3.5)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-16{height:calc(var(--spacing)*16)}.h-\\[85vh\\]{height:85vh}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[90vh\\]{max-height:90vh}.max-h-\\[calc\\(90vh-200px\\)\\]{max-height:calc(90vh - 200px)}.min-h-full{min-height:100%}.w-1{width:calc(var(--spacing)*1)}.w-1\\/3{width:33.3333%}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-2\\/3{width:66.6667%}.w-3{width:calc(var(--spacing)*3)}.w-3\\.5{width:calc(var(--spacing)*3.5)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-16{width:calc(var(--spacing)*16)}.w-64{width:calc(var(--spacing)*64)}.w-80{width:calc(var(--spacing)*80)}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.max-w-6xl{max-width:var(--container-6xl)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.scroll-ml-8{scroll-margin-left:calc(var(--spacing)*8)}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-8{gap:calc(var(--spacing)*8)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-600{border-color:var(--color-gray-600)}.border-gray-700{border-color:var(--color-gray-700)}.border-gray-800{border-color:var(--color-gray-800)}.border-pink-400{border-color:var(--color-pink-400)}.border-pink-500{border-color:var(--color-pink-500)}.border-purple-500{border-color:var(--color-purple-500)}.border-purple-600{border-color:var(--color-purple-600)}.border-transparent{border-color:#0000}.border-t-transparent{border-top-color:#0000}.bg-black{background-color:var(--color-black)}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.bg-black\\/60{background-color:#0009}@supports (color:color-mix(in lab,red,red)){.bg-black\\/60{background-color:color-mix(in oklab,var(--color-black)60%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-900{background-color:var(--color-blue-900)}.bg-cyan-400{background-color:var(--color-cyan-400)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-green-500{background-color:var(--color-green-500)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-pink-500{background-color:var(--color-pink-500)}.bg-pink-600{background-color:var(--color-pink-600)}.bg-purple-100{background-color:var(--color-purple-100)}.bg-purple-200{background-color:var(--color-purple-200)}.bg-purple-500{background-color:var(--color-purple-500)}.bg-purple-600{background-color:var(--color-purple-600)}.bg-red-500{background-color:var(--color-red-500)}.bg-red-800{background-color:var(--color-red-800)}.bg-teal-500{background-color:var(--color-teal-500)}.bg-white{background-color:var(--color-white)}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-400{background-color:var(--color-yellow-400)}.bg-yellow-800{background-color:var(--color-yellow-800)}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-red-400{--tw-gradient-from:var(--color-red-400);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-purple-500{--tw-gradient-via:var(--color-purple-500);--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-blue-400{--tw-gradient-to:var(--color-blue-400);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.fill-yellow-400{fill:var(--color-yellow-400)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-8{padding:calc(var(--spacing)*8)}.p-10{padding:calc(var(--spacing)*10)}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-2{padding-top:calc(var(--spacing)*2)}.pt-4{padding-top:calc(var(--spacing)*4)}.pr-4{padding-right:calc(var(--spacing)*4)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pl-1{padding-left:calc(var(--spacing)*1)}.pl-10{padding-left:calc(var(--spacing)*10)}.text-center{text-align:center}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-gray-100{color:var(--color-gray-100)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-pink-400{color:var(--color-pink-400)}.text-pink-500{color:var(--color-pink-500)}.text-pink-600{color:var(--color-pink-600)}.text-purple-600{color:var(--color-purple-600)}.text-purple-700{color:var(--color-purple-700)}.text-white{color:var(--color-white)}.text-yellow-400{color:var(--color-yellow-400)}.uppercase{text-transform:uppercase}.placeholder-gray-400::placeholder{color:var(--color-gray-400)}.placeholder-gray-500::placeholder{color:var(--color-gray-500)}.accent-pink-500{accent-color:var(--color-pink-500)}.accent-purple-600{accent-color:var(--color-purple-600)}.opacity-75{opacity:.75}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_-4px_10px_rgba\\(0\\,0\\,0\\,0\\.05\\)\\]{--tw-shadow:0 -4px 10px var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-purple-500{--tw-ring-color:var(--color-purple-500)}.ring-white{--tw-ring-color:var(--color-white)}.ring-offset-1{--tw-ring-offset-width:1px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}@media(hover:hover){.group-hover\\:border-gray-400:is(:where(.group):hover *){border-color:var(--color-gray-400)}.group-hover\\:text-gray-300:is(:where(.group):hover *){color:var(--color-gray-300)}.group-hover\\:text-gray-900:is(:where(.group):hover *){color:var(--color-gray-900)}.group-hover\\:text-pink-600:is(:where(.group):hover *){color:var(--color-pink-600)}.group-hover\\:text-white:is(:where(.group):hover *){color:var(--color-white)}}.last\\:mb-0:last-child{margin-bottom:calc(var(--spacing)*0)}@media(hover:hover){.hover\\:border-gray-300:hover{border-color:var(--color-gray-300)}.hover\\:border-purple-400:hover{border-color:var(--color-purple-400)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-pink-700:hover{background-color:var(--color-pink-700)}.hover\\:bg-purple-700:hover{background-color:var(--color-purple-700)}.hover\\:text-gray-300:hover{color:var(--color-gray-300)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-gray-800:hover{color:var(--color-gray-800)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:text-pink-400:hover{color:var(--color-pink-400)}.hover\\:text-pink-600:hover{color:var(--color-pink-600)}.hover\\:text-pink-700:hover{color:var(--color-pink-700)}.hover\\:text-purple-800:hover{color:var(--color-purple-800)}.hover\\:underline:hover{text-decoration-line:underline}}.focus\\:border-pink-500:focus{border-color:var(--color-pink-500)}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-purple-500:focus{--tw-ring-color:var(--color-purple-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:48rem){.md\\:flex{display:flex}.md\\:hidden{display:none}}@media(min-width:64rem){.lg\\:mt-6{margin-top:calc(var(--spacing)*6)}.lg\\:hidden{display:none}.lg\\:translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}}@media(prefers-color-scheme:dark){.dark\\:border-gray-600{border-color:var(--color-gray-600)}.dark\\:border-gray-700{border-color:var(--color-gray-700)}.dark\\:border-gray-800{border-color:var(--color-gray-800)}.dark\\:border-pink-600{border-color:var(--color-pink-600)}.dark\\:bg-gray-800{background-color:var(--color-gray-800)}.dark\\:bg-gray-900{background-color:var(--color-gray-900)}.dark\\:bg-pink-500{background-color:var(--color-pink-500)}.dark\\:bg-pink-600{background-color:var(--color-pink-600)}.dark\\:bg-purple-900{background-color:var(--color-purple-900)}.dark\\:text-gray-100{color:var(--color-gray-100)}.dark\\:text-gray-200{color:var(--color-gray-200)}.dark\\:text-gray-300{color:var(--color-gray-300)}.dark\\:text-gray-400{color:var(--color-gray-400)}.dark\\:text-gray-600{color:var(--color-gray-600)}.dark\\:text-pink-400{color:var(--color-pink-400)}.dark\\:text-pink-500{color:var(--color-pink-500)}.dark\\:text-purple-300{color:var(--color-purple-300)}.dark\\:text-purple-400{color:var(--color-purple-400)}.dark\\:text-white{color:var(--color-white)}.dark\\:placeholder-gray-500::placeholder{color:var(--color-gray-500)}@media(hover:hover){.dark\\:hover\\:border-gray-600:hover{border-color:var(--color-gray-600)}.dark\\:hover\\:border-purple-500:hover{border-color:var(--color-purple-500)}.dark\\:hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.dark\\:hover\\:bg-pink-600:hover{background-color:var(--color-pink-600)}.dark\\:hover\\:text-gray-200:hover{color:var(--color-gray-200)}.dark\\:hover\\:text-gray-300:hover{color:var(--color-gray-300)}.dark\\:hover\\:text-pink-300:hover{color:var(--color-pink-300)}.dark\\:hover\\:text-purple-200:hover{color:var(--color-purple-200)}.dark\\:hover\\:text-purple-300:hover{color:var(--color-purple-300)}}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}';
const pr = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function dr(r, t) {
  let e = "";
  for (const a in r) {
    if (pr(a) || I(a) || t === "textarea" && a === "value")
      continue;
    const o = r[a];
    a === "class" ? e += ` class="${wr(o)}"` : a === "style" ? e += ` style="${hr(o)}"` : a === "className" ? e += ` class="${String(o)}"` : e += gr(a, o, t);
  }
  return e;
}
function gr(r, t, e) {
  if (!W(t))
    return "";
  const a = e && (e.indexOf("-") > 0 || J(e)) ? r : Q[r] || r.toLowerCase();
  return X(a) ? Y(t) ? ` ${a}` : "" : Z(a) ? t === "" ? ` ${a}` : ` ${a}="${g(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${a}`
  ), "");
}
function wr(r) {
  return g(D(r));
}
function hr(r) {
  if (!r)
    return "";
  if (w(r))
    return g(r);
  const t = G(vr(r));
  return g(K(t));
}
function vr(r) {
  if (!C(r) && q(r)) {
    const t = {};
    for (const e in r)
      e.startsWith(":--") ? t[e.slice(1)] = rr(r[e]) : t[e] = r[e];
    return t;
  }
  return r;
}
function fr(r, t, e, a, o) {
  r("<!--teleport start-->");
  const i = o.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[e] || (n[e] = []), c = l.length;
  let d;
  if (a)
    t(r), d = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: p, push: s } = S();
    s("<!--teleport start anchor-->"), t(s), s("<!--teleport anchor-->"), d = p();
  }
  l.splice(c, 0, d), r("<!--teleport end-->");
}
{
  const r = B(), t = (e, a) => {
    let o;
    return (o = r[e]) || (o = r[e] = []), o.push(a), (i) => {
      o.length > 1 ? o.forEach((n) => n(i)) : o[0](i);
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
function ur(r, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: br,
  setCurrentRenderingInstance: m,
  setupComponent: yr,
  renderComponentRoot: x,
  normalizeVNode: mr
} = _;
function S() {
  let r = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(e) {
      const a = w(e);
      if (r && a) {
        t[t.length - 1] += e;
        return;
      }
      t.push(e), r = a, (f(e) || C(e) && e.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(r, t = null, e) {
  const a = r.component = br(
    r,
    t,
    null
  ), o = yr(
    a,
    !0
    /* isSSR */
  ), i = f(o);
  let n = a.sp;
  return i || n ? Promise.resolve(o).then(() => {
    if (i && (n = a.sp), n)
      return Promise.all(
        n.map((c) => c.call(a.proxy))
      );
  }).catch(b).then(() => k(a, e)) : k(a, e);
}
function k(r, t) {
  const e = r.type, { getBuffer: a, push: o } = S();
  if (V(e)) {
    let i = x(r);
    if (!e.props)
      for (const n in r.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    u(o, r.subTree = i, r, t);
  } else {
    (!r.render || r.render === b) && !r.ssrRender && !e.ssrRender && w(e.template) && (e.ssrRender = ur(e.template));
    const i = r.ssrRender || e.ssrRender;
    if (i) {
      let n = r.inheritAttrs !== !1 ? r.attrs : void 0, l = !1, c = r;
      for (; ; ) {
        const p = c.vnode.scopeId;
        p && (l || (n = { ...n }, l = !0), n[p] = "");
        const s = c.parent;
        if (s && s.subTree && s.subTree === c.vnode)
          c = s;
        else
          break;
      }
      if (t) {
        l || (n = { ...n });
        const p = t.trim().split(" ");
        for (let s = 0; s < p.length; s++)
          n[p[s]] = "";
      }
      const d = m(r);
      try {
        i(
          r.proxy,
          o,
          r,
          n,
          // compiler-optimized bindings
          r.props,
          r.setupState,
          r.data,
          r.ctx
        );
      } finally {
        m(d);
      }
    } else r.render && r.render !== b ? u(
      o,
      r.subTree = x(r),
      r,
      t
    ) : (e.name || e.__file, o("<!---->"));
  }
  return a();
}
function u(r, t, e, a) {
  const { type: o, shapeFlag: i, children: n, dirs: l, props: c } = t;
  switch (l && (t.props = kr(t, c, l)), o) {
    case L:
      r(g(n));
      break;
    case U:
      r(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case j:
      r(n);
      break;
    case M:
      t.slotScopeIds && (a = (a ? a + " " : "") + t.slotScopeIds.join(" ")), r("<!--[-->"), y(
        r,
        n,
        e,
        a
      ), r("<!--]-->");
      break;
    default:
      i & 1 ? xr(r, t, e, a) : i & 6 ? r(T(t, e, a)) : i & 64 ? _r(r, t, e, a) : i & 128 && u(r, t.ssContent, e, a);
  }
}
function y(r, t, e, a) {
  for (let o = 0; o < t.length; o++)
    u(r, mr(t[o]), e, a);
}
function xr(r, t, e, a) {
  const o = t.type;
  let { props: i, children: n, shapeFlag: l, scopeId: c } = t, d = `<${o}`;
  i && (d += dr(i, o)), c && (d += ` ${c}`);
  let p = e, s = t;
  for (; p && s === p.subTree; )
    s = p.vnode, s.scopeId && (d += ` ${s.scopeId}`), p = p.parent;
  if (a && (d += ` ${a}`), r(d + ">"), !P(o)) {
    let h = !1;
    i && (i.innerHTML ? (h = !0, r(i.innerHTML)) : i.textContent ? (h = !0, r(g(i.textContent))) : o === "textarea" && i.value && (h = !0, r(g(i.value)))), h || (l & 8 ? r(g(n)) : l & 16 && y(
      r,
      n,
      e,
      a
    )), r(`</${o}>`);
  }
}
function kr(r, t, e) {
  const a = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const l = n(i, r);
      l && a.push(l);
    }
  }
  return O(t || {}, ...a);
}
function _r(r, t, e, a) {
  const o = t.props && t.props.to, i = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!w(o))
    return [];
  fr(
    r,
    (n) => {
      y(
        n,
        t.children,
        e,
        a
      );
    },
    o,
    i || i === "",
    e
  );
}
const { isVNode: zr } = _;
function v(r, t, e) {
  if (!r.hasAsync)
    return t + R(r);
  let a = t;
  for (let o = e; o < r.length; o += 1) {
    const i = r[o];
    if (w(i)) {
      a += i;
      continue;
    }
    if (f(i))
      return i.then((l) => (r[o] = l, v(r, a, o)));
    const n = v(i, a, 0);
    if (f(n))
      return n.then((l) => (r[o] = l, v(r, "", o)));
    a = n;
  }
  return a;
}
function $(r) {
  return v(r, "", 0);
}
function R(r) {
  let t = "";
  for (let e = 0; e < r.length; e++) {
    let a = r[e];
    w(a) ? t += a : t += R(a);
  }
  return t;
}
async function A(r, t = {}) {
  if (zr(r))
    return A(N({ render: () => r }), t);
  const e = E(r._component, r._props);
  e.appContext = r._context, r.provide(z, t);
  const a = await T(e), o = await $(a);
  if (await Cr(t), t.__watcherHandles)
    for (const i of t.__watcherHandles)
      i();
  return o;
}
async function Cr(r) {
  if (r.__teleportBuffers) {
    r.teleports = r.teleports || {};
    for (const t in r.__teleportBuffers)
      r.teleports[t] = await $(
        await Promise.all([r.__teleportBuffers[t]])
      );
  }
}
tr();
const Sr = ["id"], Tr = /* @__PURE__ */ er({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(r) {
    return (t, e) => (nr(), ar("div", {
      id: r._p.f.name("root"),
      class: "box"
    }, [
      or("p", null, ir(r._$p.data.curr.data.data), 1)
    ], 8, Sr));
  }
});
sr(cr);
const Rr = async (r) => ({
  set: async (t, e) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const o = lr(Tr, {
      _p: r,
      _$p: t,
      _$cb: e
    });
    return {
      r: `
                 <div>
                    ${await A(o)}
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
  Rr as index,
  Rr as renderer
};
