import { B as j, A as B, q as E, C as z, D as _, E as b, N as k, G as N, H as w, F as V, S as M, I as U, J as H, K as L, L as g, M as O, O as P, P as C, Q as F, R as I, n as W, U as D, V as G, W as Y, X as K, Y as q, Z as J, _ as Q, $ as X, a0 as Z, a1 as rr, a2 as tr, x as or, f as ar, o as er, a3 as ir } from "./runtime-dom.esm-bundler-DutLLhah.js";
function nr(r, t) {
  t === void 0 && (t = {});
  var o = t.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", o === "top" && a.firstChild ? a.insertBefore(e, a.firstChild) : a.appendChild(e), e.styleSheet ? e.styleSheet.cssText = r : e.appendChild(document.createTextNode(r));
  }
}
const lr = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-scroll-snap-strictness:proximity;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-400:oklch(70.4% .191 22.216);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-yellow-400:oklch(85.2% .199 91.936);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-emerald-500:oklch(69.6% .17 162.48);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-indigo-500:oklch(58.5% .233 277.117);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-100:oklch(94.3% .029 294.588);--color-violet-200:oklch(89.4% .057 293.283);--color-violet-300:oklch(81.1% .111 293.571);--color-violet-400:oklch(70.2% .183 293.541);--color-violet-500:oklch(60.6% .25 292.717);--color-violet-600:oklch(54.1% .281 293.009);--color-violet-700:oklch(49.1% .27 292.581);--color-violet-800:oklch(43.2% .232 292.759);--color-violet-900:oklch(38% .189 293.745);--color-violet-950:oklch(28.3% .141 291.089);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-950:oklch(29.1% .149 302.717);--color-rose-500:oklch(64.5% .246 16.439);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-light:300;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-widest:.1em;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-ping:ping 1s cubic-bezier(0, 0, .2, 1) infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--blur-sm:8px;--blur-md:12px;--blur-lg:16px;--blur-xl:24px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.invisible{visibility:hidden}.visible{visibility:visible}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing) * 0)}.-top-1{top:calc(var(--spacing) * -1)}.top-0{top:calc(var(--spacing) * 0)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-5{top:calc(var(--spacing) * 5)}.-right-1{right:calc(var(--spacing) * -1)}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-3{right:calc(var(--spacing) * 3)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-24{bottom:calc(var(--spacing) * 24)}.left-0{left:calc(var(--spacing) * 0)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.z-5{z-index:5}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-50{z-index:50}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-2{margin-block:calc(var(--spacing) * 2)}.my-8{margin-block:calc(var(--spacing) * 8)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.-ml-1{margin-left:calc(var(--spacing) * -1)}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-2{margin-left:calc(var(--spacing) * 2)}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-3{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.aspect-square{aspect-ratio:1}.size-1\\.5{width:calc(var(--spacing) * 1.5);height:calc(var(--spacing) * 1.5)}.size-2{width:calc(var(--spacing) * 2);height:calc(var(--spacing) * 2)}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.size-5{width:calc(var(--spacing) * 5);height:calc(var(--spacing) * 5)}.size-6{width:calc(var(--spacing) * 6);height:calc(var(--spacing) * 6)}.size-8{width:calc(var(--spacing) * 8);height:calc(var(--spacing) * 8)}.size-10{width:calc(var(--spacing) * 10);height:calc(var(--spacing) * 10)}.h-1{height:calc(var(--spacing) * 1)}.h-2{height:calc(var(--spacing) * 2)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-12{height:calc(var(--spacing) * 12)}.h-16{height:calc(var(--spacing) * 16)}.h-24{height:calc(var(--spacing) * 24)}.h-48{height:calc(var(--spacing) * 48)}.h-64{height:calc(var(--spacing) * 64)}.h-full{height:100%}.h-screen{height:100vh}.min-h-10{min-height:calc(var(--spacing) * 10)}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing) * 2)}.w-4{width:calc(var(--spacing) * 4)}.w-5{width:calc(var(--spacing) * 5)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-24{width:calc(var(--spacing) * 24)}.w-28{width:calc(var(--spacing) * 28)}.w-40{width:calc(var(--spacing) * 40)}.w-48{width:calc(var(--spacing) * 48)}.w-52{width:calc(var(--spacing) * 52)}.w-64{width:calc(var(--spacing) * 64)}.w-96{width:calc(var(--spacing) * 96)}.w-full{width:100%}.w-px{width:1px}.w-screen{width:100vw}.max-w-7xl{max-width:var(--container-7xl)}.max-w-sm{max-width:var(--container-sm)}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-ping{animation:var(--animate-ping)}.animate-pulse{animation:var(--animate-pulse)}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness:mandatory}.snap-start{scroll-snap-align:start}.appearance-none{appearance:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2.5) * calc(1 - var(--tw-space-y-reverse)))}.self-start{align-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-xl{border-top-left-radius:var(--radius-xl);border-top-right-radius:var(--radius-xl)}.rounded-b-2xl{border-bottom-right-radius:var(--radius-2xl);border-bottom-left-radius:var(--radius-2xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/50{border-color:#e5e7eb80}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/50{border-color:color-mix(in oklab,var(--color-gray-200) 50%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.border-white\\/30{border-color:color-mix(in oklab,var(--color-white) 30%,transparent)}}.border-zinc-300{border-color:var(--color-zinc-300)}.bg-\\[\\#f0f2f5\\]{background-color:#f0f2f5}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black) 20%,transparent)}}.bg-black\\/60{background-color:#0009}@supports (color:color-mix(in lab,red,red)){.bg-black\\/60{background-color:color-mix(in oklab,var(--color-black) 60%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-500\\/90{background-color:#3080ffe6}@supports (color:color-mix(in lab,red,red)){.bg-blue-500\\/90{background-color:color-mix(in oklab,var(--color-blue-500) 90%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-50\\/20{background-color:#f9fafb33}@supports (color:color-mix(in lab,red,red)){.bg-gray-50\\/20{background-color:color-mix(in oklab,var(--color-gray-50) 20%,transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-green-400{background-color:var(--color-green-400)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-500\\/90{background-color:#00c758e6}@supports (color:color-mix(in lab,red,red)){.bg-green-500\\/90{background-color:color-mix(in oklab,var(--color-green-500) 90%,transparent)}}.bg-red-500{background-color:var(--color-red-500)}.bg-red-500\\/40{background-color:#fb2c3666}@supports (color:color-mix(in lab,red,red)){.bg-red-500\\/40{background-color:color-mix(in oklab,var(--color-red-500) 40%,transparent)}}.bg-red-500\\/90{background-color:#fb2c36e6}@supports (color:color-mix(in lab,red,red)){.bg-red-500\\/90{background-color:color-mix(in oklab,var(--color-red-500) 90%,transparent)}}.bg-transparent{background-color:#0000}.bg-violet-50{background-color:var(--color-violet-50)}.bg-violet-100{background-color:var(--color-violet-100)}.bg-violet-500{background-color:var(--color-violet-500)}.bg-white{background-color:var(--color-white)}.bg-white\\/40{background-color:#fff6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/40{background-color:color-mix(in oklab,var(--color-white) 40%,transparent)}}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/70{background-color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/70{background-color:color-mix(in oklab,var(--color-white) 70%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\/90{background-color:#edb200e6}@supports (color:color-mix(in lab,red,red)){.bg-yellow-500\\/90{background-color:color-mix(in oklab,var(--color-yellow-500) 90%,transparent)}}.bg-zinc-50{background-color:var(--color-zinc-50)}.bg-linear-to-b{--tw-gradient-position:to bottom}@supports (background-image:linear-gradient(in lab,red,red)){.bg-linear-to-b{--tw-gradient-position:to bottom in oklab}}.bg-linear-to-b{background-image:linear-gradient(var(--tw-gradient-stops))}.bg-linear-to-br{--tw-gradient-position:to bottom right}@supports (background-image:linear-gradient(in lab,red,red)){.bg-linear-to-br{--tw-gradient-position:to bottom right in oklab}}.bg-linear-to-br{background-image:linear-gradient(var(--tw-gradient-stops))}.bg-linear-to-r{--tw-gradient-position:to right}@supports (background-image:linear-gradient(in lab,red,red)){.bg-linear-to-r{--tw-gradient-position:to right in oklab}}.bg-linear-to-r{background-image:linear-gradient(var(--tw-gradient-stops))}.from-blue-500{--tw-gradient-from:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-blue-500\\/10{--tw-gradient-from:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.from-blue-500\\/10{--tw-gradient-from:color-mix(in oklab, var(--color-blue-500) 10%, transparent)}}.from-blue-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-50{--tw-gradient-from:var(--color-gray-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-gray-500\\/10{--tw-gradient-from:#6a72821a}@supports (color:color-mix(in lab,red,red)){.from-gray-500\\/10{--tw-gradient-from:color-mix(in oklab, var(--color-gray-500) 10%, transparent)}}.from-gray-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-500{--tw-gradient-from:var(--color-green-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-green-500\\/10{--tw-gradient-from:#00c7581a}@supports (color:color-mix(in lab,red,red)){.from-green-500\\/10{--tw-gradient-from:color-mix(in oklab, var(--color-green-500) 10%, transparent)}}.from-green-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-red-500\\/10{--tw-gradient-from:#fb2c361a}@supports (color:color-mix(in lab,red,red)){.from-red-500\\/10{--tw-gradient-from:color-mix(in oklab, var(--color-red-500) 10%, transparent)}}.from-red-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-transparent{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-50{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-500{--tw-gradient-from:var(--color-violet-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-500\\/10{--tw-gradient-from:#8d54ff1a}@supports (color:color-mix(in lab,red,red)){.from-violet-500\\/10{--tw-gradient-from:color-mix(in oklab, var(--color-violet-500) 10%, transparent)}}.from-violet-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-gray-300{--tw-gradient-via:var(--color-gray-300);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-blue-700{--tw-gradient-to:var(--color-blue-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-emerald-500{--tw-gradient-to:var(--color-emerald-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-emerald-500\\/10{--tw-gradient-to:#00bb7f1a}@supports (color:color-mix(in lab,red,red)){.to-emerald-500\\/10{--tw-gradient-to:color-mix(in oklab, var(--color-emerald-500) 10%, transparent)}}.to-emerald-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-100{--tw-gradient-to:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-gray-600\\/10{--tw-gradient-to:#4a55651a}@supports (color:color-mix(in lab,red,red)){.to-gray-600\\/10{--tw-gradient-to:color-mix(in oklab, var(--color-gray-600) 10%, transparent)}}.to-gray-600\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-indigo-500\\/10{--tw-gradient-to:#625fff1a}@supports (color:color-mix(in lab,red,red)){.to-indigo-500\\/10{--tw-gradient-to:color-mix(in oklab, var(--color-indigo-500) 10%, transparent)}}.to-indigo-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-50{--tw-gradient-to:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-500{--tw-gradient-to:var(--color-purple-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-purple-500\\/10{--tw-gradient-to:#ac4bff1a}@supports (color:color-mix(in lab,red,red)){.to-purple-500\\/10{--tw-gradient-to:color-mix(in oklab, var(--color-purple-500) 10%, transparent)}}.to-purple-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-rose-500\\/10{--tw-gradient-to:#ff23571a}@supports (color:color-mix(in lab,red,red)){.to-rose-500\\/10{--tw-gradient-to:color-mix(in oklab, var(--color-rose-500) 10%, transparent)}}.to-rose-500\\/10{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.fill-gray-300{fill:var(--color-gray-300)}.fill-yellow-400{fill:var(--color-yellow-400)}.object-cover{object-fit:cover}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-16{padding-block:calc(var(--spacing) * 16)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-24{padding-bottom:calc(var(--spacing) * 24)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-blue-600{color:var(--color-blue-600)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-600{color:var(--color-green-600)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-violet-500{color:var(--color-violet-500)}.text-violet-600{color:var(--color-violet-600)}.text-violet-700{color:var(--color-violet-700)}.text-white{color:var(--color-white)}.text-yellow-400{color:var(--color-yellow-400)}.text-yellow-500{color:var(--color-yellow-500)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-600{color:var(--color-zinc-600)}.text-zinc-900{color:var(--color-zinc-900)}.capitalize{text-transform:capitalize}.line-through{text-decoration-line:line-through}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-75{opacity:.75}.opacity-100{opacity:1}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-gray-200\\/50{--tw-shadow-color:#e5e7eb80}@supports (color:color-mix(in lab,red,red)){.shadow-gray-200\\/50{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-gray-200) 50%, transparent) var(--tw-shadow-alpha), transparent)}}.shadow-violet-500\\/10{--tw-shadow-color:#8d54ff1a}@supports (color:color-mix(in lab,red,red)){.shadow-violet-500\\/10{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-violet-500) 10%, transparent) var(--tw-shadow-alpha), transparent)}}.shadow-violet-500\\/25{--tw-shadow-color:#8d54ff40}@supports (color:color-mix(in lab,red,red)){.shadow-violet-500\\/25{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-violet-500) 25%, transparent) var(--tw-shadow-alpha), transparent)}}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-lg{--tw-backdrop-blur:blur(var(--blur-lg));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-xl{--tw-backdrop-blur:blur(var(--blur-xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.outline-none{--tw-outline-style:none;outline-style:none}@media(hover:hover){.group-hover\\:visible:is(:where(.group):hover *){visibility:visible}.group-hover\\:-translate-x-0\\.5:is(:where(.group):hover *){--tw-translate-x:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.group-hover\\:scale-105:is(:where(.group):hover *){--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-500::placeholder{color:var(--color-gray-500)}@media(hover:hover){.hover\\:scale-110:hover{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:scale-\\[1\\.02\\]:hover{scale:1.02}.hover\\:border-violet-200:hover{border-color:var(--color-violet-200)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-red-500\\/20:hover{background-color:#fb2c3633}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-red-500\\/20:hover{background-color:color-mix(in oklab,var(--color-red-500) 20%,transparent)}}.hover\\:bg-violet-100:hover{background-color:var(--color-violet-100)}.hover\\:bg-white\\/25:hover{background-color:#ffffff40}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/25:hover{background-color:color-mix(in oklab,var(--color-white) 25%,transparent)}}.hover\\:bg-yellow-600:hover{background-color:var(--color-yellow-600)}.hover\\:bg-linear-to-r:hover{--tw-gradient-position:to right}@supports (background-image:linear-gradient(in lab,red,red)){.hover\\:bg-linear-to-r:hover{--tw-gradient-position:to right in oklab}}.hover\\:bg-linear-to-r:hover{background-image:linear-gradient(var(--tw-gradient-stops))}.hover\\:from-violet-50:hover{--tw-gradient-from:var(--color-violet-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:from-violet-600:hover{--tw-gradient-from:var(--color-violet-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:to-purple-50:hover{--tw-gradient-to:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:to-purple-600:hover{--tw-gradient-to:var(--color-purple-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:to-violet-100:hover{--tw-gradient-to:var(--color-violet-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-zinc-900:hover{color:var(--color-zinc-900)}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-violet-500\\/5:hover{--tw-shadow-color:#8d54ff0d}@supports (color:color-mix(in lab,red,red)){.hover\\:shadow-violet-500\\/5:hover{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-violet-500) 5%, transparent) var(--tw-shadow-alpha), transparent)}}.hover\\:shadow-violet-500\\/25:hover{--tw-shadow-color:#8d54ff40}@supports (color:color-mix(in lab,red,red)){.hover\\:shadow-violet-500\\/25:hover{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-violet-500) 25%, transparent) var(--tw-shadow-alpha), transparent)}}}.focus\\:ring-0:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-red-500:focus{--tw-ring-color:var(--color-red-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:scale-\\[0\\.98\\]:active{scale:.98}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:48rem){.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:size-6{width:calc(var(--spacing) * 6);height:calc(var(--spacing) * 6)}.md\\:h-40{height:calc(var(--spacing) * 40)}.md\\:w-40{width:calc(var(--spacing) * 40)}.md\\:w-\\[30vw\\]{width:30vw}.md\\:w-\\[50vw\\]{width:50vw}.md\\:max-w-sm{max-width:var(--container-sm)}.md\\:flex-1{flex:1}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-end{justify-content:flex-end}.md\\:gap-4{gap:calc(var(--spacing) * 4)}.md\\:rounded-2xl{border-radius:var(--radius-2xl)}.md\\:bg-black\\/30{background-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.md\\:bg-black\\/30{background-color:color-mix(in oklab,var(--color-black) 30%,transparent)}}.md\\:bg-transparent{background-color:#0000}.md\\:p-4{padding:calc(var(--spacing) * 4)}.md\\:px-0{padding-inline:calc(var(--spacing) * 0)}.md\\:px-6{padding-inline:calc(var(--spacing) * 6)}.md\\:py-4{padding-block:calc(var(--spacing) * 4)}.md\\:pb-10{padding-bottom:calc(var(--spacing) * 10)}.md\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.md\\:font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}.dark\\:block:where(.dark .dark\\:block){display:block}.dark\\:hidden:where(.dark .dark\\:hidden){display:none}.dark\\:border-white\\/10:where(.dark .dark\\:border-white\\/10){border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:border-white\\/10:where(.dark .dark\\:border-white\\/10){border-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.dark\\:border-zinc-600:where(.dark .dark\\:border-zinc-600){border-color:var(--color-zinc-600)}.dark\\:border-zinc-700:where(.dark .dark\\:border-zinc-700){border-color:var(--color-zinc-700)}.dark\\:border-zinc-700\\/50:where(.dark .dark\\:border-zinc-700\\/50){border-color:#3f3f4680}@supports (color:color-mix(in lab,red,red)){.dark\\:border-zinc-700\\/50:where(.dark .dark\\:border-zinc-700\\/50){border-color:color-mix(in oklab,var(--color-zinc-700) 50%,transparent)}}.dark\\:bg-blue-600\\/90:where(.dark .dark\\:bg-blue-600\\/90){background-color:#155dfce6}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-blue-600\\/90:where(.dark .dark\\:bg-blue-600\\/90){background-color:color-mix(in oklab,var(--color-blue-600) 90%,transparent)}}.dark\\:bg-green-600\\/90:where(.dark .dark\\:bg-green-600\\/90){background-color:#00a544e6}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-green-600\\/90:where(.dark .dark\\:bg-green-600\\/90){background-color:color-mix(in oklab,var(--color-green-600) 90%,transparent)}}.dark\\:bg-red-600\\/90:where(.dark .dark\\:bg-red-600\\/90){background-color:#e40014e6}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-600\\/90:where(.dark .dark\\:bg-red-600\\/90){background-color:color-mix(in oklab,var(--color-red-600) 90%,transparent)}}.dark\\:bg-violet-900\\/30:where(.dark .dark\\:bg-violet-900\\/30){background-color:#4d179a4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-violet-900\\/30:where(.dark .dark\\:bg-violet-900\\/30){background-color:color-mix(in oklab,var(--color-violet-900) 30%,transparent)}}.dark\\:bg-yellow-600\\/90:where(.dark .dark\\:bg-yellow-600\\/90){background-color:#cd8900e6}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-yellow-600\\/90:where(.dark .dark\\:bg-yellow-600\\/90){background-color:color-mix(in oklab,var(--color-yellow-600) 90%,transparent)}}.dark\\:bg-zinc-500:where(.dark .dark\\:bg-zinc-500){background-color:var(--color-zinc-500)}.dark\\:bg-zinc-700:where(.dark .dark\\:bg-zinc-700){background-color:var(--color-zinc-700)}.dark\\:bg-zinc-700\\/50:where(.dark .dark\\:bg-zinc-700\\/50){background-color:#3f3f4680}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-zinc-700\\/50:where(.dark .dark\\:bg-zinc-700\\/50){background-color:color-mix(in oklab,var(--color-zinc-700) 50%,transparent)}}.dark\\:bg-zinc-800:where(.dark .dark\\:bg-zinc-800){background-color:var(--color-zinc-800)}.dark\\:bg-zinc-800\\/30:where(.dark .dark\\:bg-zinc-800\\/30){background-color:#27272a4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-zinc-800\\/30:where(.dark .dark\\:bg-zinc-800\\/30){background-color:color-mix(in oklab,var(--color-zinc-800) 30%,transparent)}}.dark\\:bg-zinc-800\\/90:where(.dark .dark\\:bg-zinc-800\\/90){background-color:#27272ae6}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-zinc-800\\/90:where(.dark .dark\\:bg-zinc-800\\/90){background-color:color-mix(in oklab,var(--color-zinc-800) 90%,transparent)}}.dark\\:bg-zinc-800\\/95:where(.dark .dark\\:bg-zinc-800\\/95){background-color:#27272af2}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-zinc-800\\/95:where(.dark .dark\\:bg-zinc-800\\/95){background-color:color-mix(in oklab,var(--color-zinc-800) 95%,transparent)}}.dark\\:bg-zinc-900:where(.dark .dark\\:bg-zinc-900){background-color:var(--color-zinc-900)}.dark\\:bg-zinc-900\\/90:where(.dark .dark\\:bg-zinc-900\\/90){background-color:#18181be6}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-zinc-900\\/90:where(.dark .dark\\:bg-zinc-900\\/90){background-color:color-mix(in oklab,var(--color-zinc-900) 90%,transparent)}}.dark\\:from-violet-950\\/50:where(.dark .dark\\:from-violet-950\\/50){--tw-gradient-from:#2f0d6880}@supports (color:color-mix(in lab,red,red)){.dark\\:from-violet-950\\/50:where(.dark .dark\\:from-violet-950\\/50){--tw-gradient-from:color-mix(in oklab, var(--color-violet-950) 50%, transparent)}}.dark\\:from-violet-950\\/50:where(.dark .dark\\:from-violet-950\\/50){--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:from-zinc-700:where(.dark .dark\\:from-zinc-700){--tw-gradient-from:var(--color-zinc-700);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:via-zinc-600:where(.dark .dark\\:via-zinc-600){--tw-gradient-via:var(--color-zinc-600);--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.dark\\:to-purple-950\\/50:where(.dark .dark\\:to-purple-950\\/50){--tw-gradient-to:#3c036680}@supports (color:color-mix(in lab,red,red)){.dark\\:to-purple-950\\/50:where(.dark .dark\\:to-purple-950\\/50){--tw-gradient-to:color-mix(in oklab, var(--color-purple-950) 50%, transparent)}}.dark\\:to-purple-950\\/50:where(.dark .dark\\:to-purple-950\\/50){--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:to-zinc-800:where(.dark .dark\\:to-zinc-800){--tw-gradient-to:var(--color-zinc-800);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:text-blue-400:where(.dark .dark\\:text-blue-400){color:var(--color-blue-400)}.dark\\:text-gray-200:where(.dark .dark\\:text-gray-200){color:var(--color-gray-200)}.dark\\:text-gray-300:where(.dark .dark\\:text-gray-300){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark .dark\\:text-gray-400){color:var(--color-gray-400)}.dark\\:text-gray-600:where(.dark .dark\\:text-gray-600){color:var(--color-gray-600)}.dark\\:text-green-400:where(.dark .dark\\:text-green-400){color:var(--color-green-400)}.dark\\:text-red-400:where(.dark .dark\\:text-red-400){color:var(--color-red-400)}.dark\\:text-violet-300:where(.dark .dark\\:text-violet-300){color:var(--color-violet-300)}.dark\\:text-violet-400:where(.dark .dark\\:text-violet-400){color:var(--color-violet-400)}.dark\\:text-white:where(.dark .dark\\:text-white){color:var(--color-white)}.dark\\:text-zinc-100:where(.dark .dark\\:text-zinc-100){color:var(--color-zinc-100)}.dark\\:text-zinc-400:where(.dark .dark\\:text-zinc-400){color:var(--color-zinc-400)}.dark\\:shadow-black\\/30:where(.dark .dark\\:shadow-black\\/30){--tw-shadow-color:#0000004d}@supports (color:color-mix(in lab,red,red)){.dark\\:shadow-black\\/30:where(.dark .dark\\:shadow-black\\/30){--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-black) 30%, transparent) var(--tw-shadow-alpha), transparent)}}.dark\\:shadow-zinc-900\\/50:where(.dark .dark\\:shadow-zinc-900\\/50){--tw-shadow-color:#18181b80}@supports (color:color-mix(in lab,red,red)){.dark\\:shadow-zinc-900\\/50:where(.dark .dark\\:shadow-zinc-900\\/50){--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-zinc-900) 50%, transparent) var(--tw-shadow-alpha), transparent)}}.dark\\:placeholder\\:text-zinc-400:where(.dark .dark\\:placeholder\\:text-zinc-400)::placeholder{color:var(--color-zinc-400)}.dark\\:placeholder\\:text-zinc-500:where(.dark .dark\\:placeholder\\:text-zinc-500)::placeholder{color:var(--color-zinc-500)}@media(hover:hover){.dark\\:hover\\:border-violet-700:where(.dark .dark\\:hover\\:border-violet-700):hover{border-color:var(--color-violet-700)}.dark\\:hover\\:border-violet-800\\/50:where(.dark .dark\\:hover\\:border-violet-800\\/50):hover{border-color:#5d0ec080}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:border-violet-800\\/50:where(.dark .dark\\:hover\\:border-violet-800\\/50):hover{border-color:color-mix(in oklab,var(--color-violet-800) 50%,transparent)}}.dark\\:hover\\:bg-violet-900\\/50:where(.dark .dark\\:hover\\:bg-violet-900\\/50):hover{background-color:#4d179a80}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-violet-900\\/50:where(.dark .dark\\:hover\\:bg-violet-900\\/50):hover{background-color:color-mix(in oklab,var(--color-violet-900) 50%,transparent)}}.dark\\:hover\\:bg-white\\/10:where(.dark .dark\\:hover\\:bg-white\\/10):hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-white\\/10:where(.dark .dark\\:hover\\:bg-white\\/10):hover{background-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.dark\\:hover\\:bg-zinc-600:where(.dark .dark\\:hover\\:bg-zinc-600):hover{background-color:var(--color-zinc-600)}.dark\\:hover\\:bg-zinc-700:where(.dark .dark\\:hover\\:bg-zinc-700):hover{background-color:var(--color-zinc-700)}.dark\\:hover\\:from-violet-900\\/30:where(.dark .dark\\:hover\\:from-violet-900\\/30):hover{--tw-gradient-from:#4d179a4d}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:from-violet-900\\/30:where(.dark .dark\\:hover\\:from-violet-900\\/30):hover{--tw-gradient-from:color-mix(in oklab, var(--color-violet-900) 30%, transparent)}}.dark\\:hover\\:from-violet-900\\/30:where(.dark .dark\\:hover\\:from-violet-900\\/30):hover{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:hover\\:from-violet-950\\/50:where(.dark .dark\\:hover\\:from-violet-950\\/50):hover{--tw-gradient-from:#2f0d6880}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:from-violet-950\\/50:where(.dark .dark\\:hover\\:from-violet-950\\/50):hover{--tw-gradient-from:color-mix(in oklab, var(--color-violet-950) 50%, transparent)}}.dark\\:hover\\:from-violet-950\\/50:where(.dark .dark\\:hover\\:from-violet-950\\/50):hover{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:hover\\:to-purple-950\\/50:where(.dark .dark\\:hover\\:to-purple-950\\/50):hover{--tw-gradient-to:#3c036680}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:to-purple-950\\/50:where(.dark .dark\\:hover\\:to-purple-950\\/50):hover{--tw-gradient-to:color-mix(in oklab, var(--color-purple-950) 50%, transparent)}}.dark\\:hover\\:to-purple-950\\/50:where(.dark .dark\\:hover\\:to-purple-950\\/50):hover{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:hover\\:to-violet-800\\/30:where(.dark .dark\\:hover\\:to-violet-800\\/30):hover{--tw-gradient-to:#5d0ec04d}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:to-violet-800\\/30:where(.dark .dark\\:hover\\:to-violet-800\\/30):hover{--tw-gradient-to:color-mix(in oklab, var(--color-violet-800) 30%, transparent)}}.dark\\:hover\\:to-violet-800\\/30:where(.dark .dark\\:hover\\:to-violet-800\\/30):hover{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:hover\\:text-gray-300:where(.dark .dark\\:hover\\:text-gray-300):hover{color:var(--color-gray-300)}.dark\\:hover\\:text-zinc-100:where(.dark .dark\\:hover\\:text-zinc-100):hover{color:var(--color-zinc-100)}.dark\\:hover\\:shadow-violet-500\\/10:where(.dark .dark\\:hover\\:shadow-violet-500\\/10):hover{--tw-shadow-color:#8d54ff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:shadow-violet-500\\/10:where(.dark .dark\\:hover\\:shadow-violet-500\\/10):hover{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-violet-500) 10%, transparent) var(--tw-shadow-alpha), transparent)}}}.dark\\:focus\\:ring-red-400:where(.dark .dark\\:focus\\:ring-red-400):focus{--tw-ring-color:var(--color-red-400)}@media(min-width:48rem){.md\\:dark\\:bg-transparent:where(.dark .md\\:dark\\:bg-transparent){background-color:#0000}}.\\[\\&\\:\\:-webkit-search-cancel-button\\]\\:hidden::-webkit-search-cancel-button{display:none}.\\[\\&\\:\\:-webkit-search-cancel-button\\]\\:appearance-none::-webkit-search-cancel-button{appearance:none}}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}.scrollbar-hide::-webkit-scrollbar{display:none}.slide-up-enter-from{transform:translateY(100%)}.slide-up-enter-to{transform:translateY(0)}.slide-up-leave-to{transform:translateY(100%)}.slide-up-enter-active,.slide-up-leave-active{transition:all .25s}.fade-enter-from{opacity:0}.fade-enter-to{opacity:1}.fade-leave-to{opacity:0}.fade-enter-active,.fade-leave-active{transition:all .2s}:global(body){scroll-behavior:smooth}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-scroll-snap-strictness{syntax:"*";inherits:false;initial-value:proximity}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes ping{75%,to{opacity:0;transform:scale(2)}}@keyframes pulse{50%{opacity:.5}}';
const sr = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function dr(r, t) {
  let o = "";
  for (let a in r) {
    if (sr(a) || F(a) || t === "textarea" && a === "value" || // force as property (not rendered in SSR)
    a.startsWith("."))
      continue;
    const e = r[a];
    a.startsWith("^") && (a = a.slice(1)), a === "class" ? o += ` class="${pr(e)}"` : a === "style" ? o += ` style="${gr(e)}"` : a === "className" ? e != null && (o += ` class="${g(String(e))}"`) : o += cr(a, e, t);
  }
  return o;
}
function cr(r, t, o) {
  if (!Y(t))
    return "";
  const a = o && (o.indexOf("-") > 0 || K(o)) ? r : q[r] || r.toLowerCase();
  return J(a) ? Q(t) ? ` ${a}` : "" : X(a) ? t === "" ? ` ${a}` : ` ${a}="${g(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${a}`
  ), "");
}
function pr(r) {
  return g(W(r));
}
function gr(r) {
  if (!r)
    return "";
  if (w(r))
    return g(r);
  const t = D(wr(r));
  return g(G(t));
}
function wr(r) {
  if (!C(r) && Z(r)) {
    const t = {};
    for (const o in r)
      o.startsWith(":--") ? t[o.slice(1)] = rr(r[o]) : t[o] = r[o];
    return t;
  }
  return r;
}
function vr(r, t, o, a, e) {
  r("<!--teleport start-->");
  const i = e.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[o] || (n[o] = []), d = l.length;
  let p;
  if (a)
    t(r), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: s } = S();
    s("<!--teleport start anchor-->"), t(s), s("<!--teleport anchor-->"), p = c();
  }
  l.splice(d, 0, p), r("<!--teleport end-->");
}
{
  const r = j(), t = (o, a) => {
    let e;
    return (e = r[o]) || (e = r[o] = []), e.push(a), (i) => {
      e.length > 1 ? e.forEach((n) => n(i)) : e[0](i);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => o
  ), t(
    "__VUE_SSR_SETTERS__",
    (o) => o
  );
}
function hr(r, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: br,
  setCurrentRenderingInstance: u,
  setupComponent: fr,
  renderComponentRoot: x,
  normalizeVNode: kr
} = _;
function S() {
  let r = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(o) {
      const a = w(o);
      if (r && a) {
        t[t.length - 1] += o;
        return;
      }
      t.push(o), r = a, (b(o) || C(o) && o.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(r, t = null, o) {
  const a = r.component = br(
    r,
    t,
    null
  ), e = fr(
    a,
    !0
    /* isSSR */
  ), i = b(e);
  let n = a.sp;
  return i || n ? Promise.resolve(e).then(() => {
    if (i && (n = a.sp), n)
      return Promise.all(
        n.map((d) => d.call(a.proxy))
      );
  }).catch(k).then(() => y(a, o)) : y(a, o);
}
function y(r, t) {
  const o = r.type, { getBuffer: a, push: e } = S();
  if (N(o)) {
    let i = x(r);
    if (!o.props)
      for (const n in r.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    f(e, r.subTree = i, r, t);
  } else {
    (!r.render || r.render === k) && !r.ssrRender && !o.ssrRender && w(o.template) && (o.ssrRender = hr(o.template));
    const i = r.ssrRender || o.ssrRender;
    if (i) {
      let n = r.inheritAttrs !== !1 ? r.attrs : void 0, l = !1, d = r;
      for (; ; ) {
        const c = d.vnode.scopeId;
        c && (l || (n = { ...n }, l = !0), n[c] = "");
        const s = d.parent;
        if (s && s.subTree && s.subTree === d.vnode)
          d = s;
        else
          break;
      }
      if (t) {
        l || (n = { ...n });
        const c = t.trim().split(" ");
        for (let s = 0; s < c.length; s++)
          n[c[s]] = "";
      }
      const p = u(r);
      try {
        i(
          r.proxy,
          e,
          r,
          n,
          // compiler-optimized bindings
          r.props,
          r.setupState,
          r.data,
          r.ctx
        );
      } finally {
        u(p);
      }
    } else r.render && r.render !== k ? f(
      e,
      r.subTree = x(r),
      r,
      t
    ) : (o.name || o.__file, e("<!---->"));
  }
  return a();
}
function f(r, t, o, a) {
  const { type: e, shapeFlag: i, children: n, dirs: l, props: d } = t;
  switch (l && (t.props = ur(t, d, l)), e) {
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
    case V:
      t.slotScopeIds && (a = (a ? a + " " : "") + t.slotScopeIds.join(" ")), r("<!--[-->"), m(
        r,
        n,
        o,
        a
      ), r("<!--]-->");
      break;
    default:
      i & 1 ? mr(r, t, o, a) : i & 6 ? r(T(t, o, a)) : i & 64 ? xr(r, t, o, a) : i & 128 && f(r, t.ssContent, o, a);
  }
}
function m(r, t, o, a) {
  for (let e = 0; e < t.length; e++)
    f(r, kr(t[e]), o, a);
}
function mr(r, t, o, a) {
  const e = t.type;
  let { props: i, children: n, shapeFlag: l, scopeId: d } = t, p = `<${e}`;
  i && (p += dr(i, e)), d && (p += ` ${d}`);
  let c = o, s = t;
  for (; c && s === c.subTree; )
    s = c.vnode, s.scopeId && (p += ` ${s.scopeId}`), c = c.parent;
  if (a && (p += ` ${a}`), r(p + ">"), !P(e)) {
    let v = !1;
    i && (i.innerHTML ? (v = !0, r(i.innerHTML)) : i.textContent ? (v = !0, r(g(i.textContent))) : e === "textarea" && i.value && (v = !0, r(g(i.value)))), v || (l & 8 ? r(g(n)) : l & 16 && m(
      r,
      n,
      o,
      a
    )), r(`</${e}>`);
  }
}
function ur(r, t, o) {
  const a = [];
  for (let e = 0; e < o.length; e++) {
    const i = o[e], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const l = n(i, r);
      l && a.push(l);
    }
  }
  return O(t || {}, ...a);
}
function xr(r, t, o, a) {
  const e = t.props && t.props.to, i = t.props && t.props.disabled;
  if (!e)
    return [];
  if (!w(e))
    return [];
  vr(
    r,
    (n) => {
      m(
        n,
        t.children,
        o,
        a
      );
    },
    e,
    i || i === "",
    o
  );
}
const { isVNode: yr } = _;
function h(r, t, o) {
  if (!r.hasAsync)
    return t + $(r);
  let a = t;
  for (let e = o; e < r.length; e += 1) {
    const i = r[e];
    if (w(i)) {
      a += i;
      continue;
    }
    if (b(i))
      return i.then((l) => (r[e] = l, h(r, a, e)));
    const n = h(i, a, 0);
    if (b(n))
      return n.then((l) => (r[e] = l, h(r, "", e)));
    a = n;
  }
  return a;
}
function R(r) {
  return h(r, "", 0);
}
function $(r) {
  let t = "";
  for (let o = 0; o < r.length; o++) {
    let a = r[o];
    w(a) ? t += a : t += $(a);
  }
  return t;
}
async function A(r, t = {}) {
  if (yr(r))
    return A(B({ render: () => r }), t);
  const o = E(r._component, r._props);
  o.appContext = r._context, r.provide(z, t);
  const a = await T(o), e = await R(a);
  if (await zr(t), t.__watcherHandles)
    for (const i of t.__watcherHandles)
      i();
  return e;
}
async function zr(r) {
  if (r.__teleportBuffers) {
    r.teleports = r.teleports || {};
    for (const t in r.__teleportBuffers)
      r.teleports[t] = await R(
        await Promise.all([r.__teleportBuffers[t]])
      );
  }
}
tr();
const _r = ["id"], Cr = /* @__PURE__ */ or({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(r) {
    return (t, o) => (er(), ar("div", {
      id: r._p.f.name("root"),
      class: "box"
    }, null, 8, _r));
  }
});
nr(lr);
const Tr = async (r) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const a = ir(Cr, {
      _p: r,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await A(a)}
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
  Tr as index,
  Tr as renderer
};
