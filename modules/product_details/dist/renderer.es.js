import { s as R, q as j, u as B, x as _, y as z, z as v, N as m, A as N, B as h, F as V, S as F, C as M, D as U, T as I, E as g, G as H, H as L, I as C, J as O, K as P, e as D, m as W, L as G, M as K, O as q, P as J, Q, R as X, U as Y, V as Z, W as rr, X as ar, d as tr, c as or, b as er, t as ir, a as lr, Y as nr } from "./runtime-dom.esm-bundler-B1F-qcLg.js";
function sr(r, a) {
  a === void 0 && (a = {});
  var t = a.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", t === "top" && o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = r : e.appendChild(document.createTextNode(r));
  }
}
const cr = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-scroll-snap-strictness:proximity;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-amber-50:oklch(98.7% .022 95.277);--color-amber-100:oklch(96.2% .059 95.617);--color-amber-300:oklch(87.9% .169 91.605);--color-amber-400:oklch(82.8% .189 84.429);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-amber-800:oklch(47.3% .137 46.201);--color-amber-900:oklch(41.4% .112 45.904);--color-green-50:oklch(98.2% .018 155.826);--color-green-400:oklch(79.2% .209 151.711);--color-green-600:oklch(62.7% .194 149.214);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-400:oklch(76.5% .177 163.223);--color-emerald-700:oklch(50.8% .118 165.612);--color-emerald-900:oklch(37.8% .077 168.94);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-rose-500:oklch(64.5% .246 16.439);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-slate-900:oklch(20.8% .042 265.755);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-3xl:48rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-extrabold:800;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-wider:.05em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--drop-shadow-xl:0 9px 7px #0000001a;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--blur-md:12px;--blur-xl:24px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.top-0{top:calc(var(--spacing) * 0)}.top-0\\.5{top:calc(var(--spacing) * .5)}.top-4{top:calc(var(--spacing) * 4)}.top-24{top:calc(var(--spacing) * 24)}.right-0{right:calc(var(--spacing) * 0)}.right-4{right:calc(var(--spacing) * 4)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-4{bottom:calc(var(--spacing) * 4)}.left-0{left:calc(var(--spacing) * 0)}.left-1\\/2{left:50%}.z-10{z-index:10}.z-50{z-index:50}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mt-8{margin-top:calc(var(--spacing) * 8)}.mt-12{margin-top:calc(var(--spacing) * 12)}.mt-16{margin-top:calc(var(--spacing) * 16)}.-mr-2{margin-right:calc(var(--spacing) * -2)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-5{margin-bottom:calc(var(--spacing) * 5)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.mb-10{margin-bottom:calc(var(--spacing) * 10)}.mb-12{margin-bottom:calc(var(--spacing) * 12)}.mb-24{margin-bottom:calc(var(--spacing) * 24)}.-ml-2{margin-left:calc(var(--spacing) * -2)}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-2{margin-left:calc(var(--spacing) * 2)}.\\!hidden{display:none!important}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-\\[56px\\]{height:56px}.h-\\[90px\\]{height:90px}.h-\\[100px\\]{height:100px}.h-\\[100vw\\]{height:100vw}.h-\\[150px\\]{height:150px}.h-\\[300px\\]{height:300px}.h-\\[400px\\]{height:400px}.h-\\[500px\\]{height:500px}.h-\\[600px\\]{height:600px}.h-auto{height:auto}.h-full{height:100%}.max-h-\\[90vh\\]{max-height:90vh}.max-h-\\[500px\\]{max-height:500px}.max-h-full{max-height:100%}.min-h-\\[60vh\\]{min-height:60vh}.min-h-\\[250px\\]{min-height:250px}.min-h-screen{min-height:100vh}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-1\\/2{width:50%}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-64{width:calc(var(--spacing) * 64)}.w-\\[72px\\]{width:72px}.w-\\[80px\\]{width:80px}.w-\\[200px\\]{width:200px}.w-\\[380px\\]{width:380px}.w-full{width:100%}.max-w-3xl{max-width:var(--container-3xl)}.max-w-\\[60\\%\\]{max-width:60%}.max-w-\\[160px\\]{max-width:160px}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[1440px\\]{max-width:1440px}.max-w-full{max-width:100%}.max-w-sm{max-width:var(--container-sm)}.min-w-\\[3\\.5rem\\]{min-width:3.5rem}.min-w-\\[80px\\]{min-width:80px}.min-w-\\[500px\\]{min-width:500px}.min-w-full{min-width:100%}.flex-1{flex:1}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-\\[fadeIn_0\\.2s_ease-out\\]{animation:.2s ease-out fadeIn}.animate-\\[fadeIn_0\\.3s_ease-out\\]{animation:.3s ease-out fadeIn}.animate-\\[slideUp_0\\.2s_ease-out\\]{animation:.2s ease-out slideUp}.animate-\\[slideUp_0\\.3s_ease-out\\]{animation:.3s ease-out slideUp}.animate-\\[spin_3s_linear_infinite\\]{animation:3s linear infinite spin}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.cursor-zoom-in{cursor:zoom-in}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness:mandatory}.snap-center{scroll-snap-align:center}.scroll-mt-32{scroll-margin-top:calc(var(--spacing) * 32)}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-0{gap:calc(var(--spacing) * 0)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-8{gap:calc(var(--spacing) * 8)}.gap-10{gap:calc(var(--spacing) * 10)}.gap-12{gap:calc(var(--spacing) * 12)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-6>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 6) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-x-reverse)))}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-slate-100>:not(:last-child)){border-color:var(--color-slate-100)}:where(.divide-slate-800>:not(:last-child)){border-color:var(--color-slate-800)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-\\[32px\\]{border-radius:32px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-\\[32px\\]{border-top-left-radius:32px;border-top-right-radius:32px}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-dotted{--tw-border-style:dotted;border-style:dotted}.border-\\[\\#FF3E6C\\]{border-color:#ff3e6c}.border-amber-100{border-color:var(--color-amber-100)}.border-amber-800\\/50{border-color:#953d0080}@supports (color:color-mix(in lab,red,red)){.border-amber-800\\/50{border-color:color-mix(in oklab,var(--color-amber-800) 50%,transparent)}}.border-black\\/5{border-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.border-black\\/5{border-color:color-mix(in oklab,var(--color-black) 5%,transparent)}}.border-blue-100{border-color:var(--color-blue-100)}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-600{border-color:var(--color-blue-600)}.border-emerald-100{border-color:var(--color-emerald-100)}.border-emerald-900\\/30{border-color:#004e3b4d}@supports (color:color-mix(in lab,red,red)){.border-emerald-900\\/30{border-color:color-mix(in oklab,var(--color-emerald-900) 30%,transparent)}}.border-gray-100{border-color:var(--color-gray-100)}.border-slate-100{border-color:var(--color-slate-100)}.border-slate-200{border-color:var(--color-slate-200)}.border-slate-200\\/60{border-color:#e2e8f099}@supports (color:color-mix(in lab,red,red)){.border-slate-200\\/60{border-color:color-mix(in oklab,var(--color-slate-200) 60%,transparent)}}.border-slate-400{border-color:var(--color-slate-400)}.border-slate-600{border-color:var(--color-slate-600)}.border-slate-700{border-color:var(--color-slate-700)}.border-slate-700\\/50{border-color:#31415880}@supports (color:color-mix(in lab,red,red)){.border-slate-700\\/50{border-color:color-mix(in oklab,var(--color-slate-700) 50%,transparent)}}.border-slate-800{border-color:var(--color-slate-800)}.border-transparent{border-color:#0000}.border-white\\/10{border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.border-white\\/10{border-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.bg-\\[\\#0f172a\\]{background-color:#0f172a}.bg-\\[\\#0f172a\\]\\/80{background-color:#0f172acc}.bg-\\[\\#0f172a\\]\\/90{background-color:#0f172ae6}.bg-\\[\\#151e32\\]{background-color:#151e32}.bg-\\[\\#F9FAFB\\]{background-color:#f9fafb}.bg-\\[\\#FF3E6C\\]{background-color:#ff3e6c}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-900\\/30{background-color:#7b33064d}@supports (color:color-mix(in lab,red,red)){.bg-amber-900\\/30{background-color:color-mix(in oklab,var(--color-amber-900) 30%,transparent)}}.bg-black\\/5{background-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.bg-black\\/5{background-color:color-mix(in oklab,var(--color-black) 5%,transparent)}}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black) 20%,transparent)}}.bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.bg-black\\/50{background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-400\\/10{background-color:#54a2ff1a}@supports (color:color-mix(in lab,red,red)){.bg-blue-400\\/10{background-color:color-mix(in oklab,var(--color-blue-400) 10%,transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-emerald-50{background-color:var(--color-emerald-50)}.bg-emerald-900\\/20{background-color:#004e3b33}@supports (color:color-mix(in lab,red,red)){.bg-emerald-900\\/20{background-color:color-mix(in oklab,var(--color-emerald-900) 20%,transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-green-50{background-color:var(--color-green-50)}.bg-rose-500{background-color:var(--color-rose-500)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-50\\/50{background-color:#f8fafc80}@supports (color:color-mix(in lab,red,red)){.bg-slate-50\\/50{background-color:color-mix(in oklab,var(--color-slate-50) 50%,transparent)}}.bg-slate-100{background-color:var(--color-slate-100)}.bg-slate-700{background-color:var(--color-slate-700)}.bg-slate-800{background-color:var(--color-slate-800)}.bg-slate-800\\/20{background-color:#1d293d33}@supports (color:color-mix(in lab,red,red)){.bg-slate-800\\/20{background-color:color-mix(in oklab,var(--color-slate-800) 20%,transparent)}}.bg-slate-800\\/30{background-color:#1d293d4d}@supports (color:color-mix(in lab,red,red)){.bg-slate-800\\/30{background-color:color-mix(in oklab,var(--color-slate-800) 30%,transparent)}}.bg-slate-800\\/40{background-color:#1d293d66}@supports (color:color-mix(in lab,red,red)){.bg-slate-800\\/40{background-color:color-mix(in oklab,var(--color-slate-800) 40%,transparent)}}.bg-slate-800\\/50{background-color:#1d293d80}@supports (color:color-mix(in lab,red,red)){.bg-slate-800\\/50{background-color:color-mix(in oklab,var(--color-slate-800) 50%,transparent)}}.bg-slate-900{background-color:var(--color-slate-900)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/5{background-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/5{background-color:color-mix(in oklab,var(--color-white) 5%,transparent)}}.bg-white\\/30{background-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/30{background-color:color-mix(in oklab,var(--color-white) 30%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.fill-amber-400\\/20{fill:#fcbb0033}@supports (color:color-mix(in lab,red,red)){.fill-amber-400\\/20{fill:color-mix(in oklab,var(--color-amber-400) 20%,transparent)}}.fill-current{fill:currentColor}.fill-gray-300{fill:var(--color-gray-300)}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.p-0{padding:calc(var(--spacing) * 0)}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-8{padding-inline:calc(var(--spacing) * 8)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-5{padding-block:calc(var(--spacing) * 5)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-12{padding-block:calc(var(--spacing) * 12)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pt-10{padding-top:calc(var(--spacing) * 10)}.pb-0{padding-bottom:calc(var(--spacing) * 0)}.pb-1{padding-bottom:calc(var(--spacing) * 1)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[100px\\]{padding-bottom:100px}.pb-\\[max\\(16px\\,env\\(safe-area-inset-bottom\\)\\)\\]{padding-bottom:max(16px,env(safe-area-inset-bottom))}.pl-10{padding-left:calc(var(--spacing) * 10)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[1\\.05rem\\]{font-size:1.05rem}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[15px\\]{font-size:15px}.text-\\[26px\\]{font-size:26px}.text-\\[32px\\]{font-size:32px}.leading-\\[1\\.1\\]{--tw-leading:1.1;line-height:1.1}.leading-\\[1\\.2\\]{--tw-leading:1.2;line-height:1.2}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-extrabold{--tw-font-weight:var(--font-weight-extrabold);font-weight:var(--font-weight-extrabold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.whitespace-nowrap{white-space:nowrap}.text-\\[\\#FF3E6C\\]{color:#ff3e6c}.text-amber-300{color:var(--color-amber-300)}.text-amber-400{color:var(--color-amber-400)}.text-amber-500{color:var(--color-amber-500)}.text-amber-700{color:var(--color-amber-700)}.text-black{color:var(--color-black)}.text-blue-400{color:var(--color-blue-400)}.text-blue-600{color:var(--color-blue-600)}.text-current{color:currentColor}.text-emerald-400{color:var(--color-emerald-400)}.text-emerald-700{color:var(--color-emerald-700)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-green-400{color:var(--color-green-400)}.text-green-600{color:var(--color-green-600)}.text-rose-500{color:var(--color-rose-500)}.text-slate-200{color:var(--color-slate-200)}.text-slate-300{color:var(--color-slate-300)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-slate-800{color:var(--color-slate-800)}.text-slate-900{color:var(--color-slate-900)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.line-through{text-decoration-line:line-through}.decoration-slate-400\\/50{text-decoration-color:#90a1b980}@supports (color:color-mix(in lab,red,red)){.decoration-slate-400\\/50{-webkit-text-decoration-color:color-mix(in oklab,var(--color-slate-400) 50%,transparent);text-decoration-color:color-mix(in oklab,var(--color-slate-400) 50%,transparent)}}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-80{opacity:.8}.mix-blend-multiply{mix-blend-mode:multiply}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_-4px_30px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\]{--tw-shadow:0 -4px 30px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_0_15px_rgba\\(59\\,130\\,246\\,0\\.2\\)\\]{--tw-shadow:0 0 15px var(--tw-shadow-color,#3b82f633);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_8px_30px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\]{--tw-shadow:0 8px 30px var(--tw-shadow-color,#0000000f);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-black\\/20{--tw-shadow-color:#0003}@supports (color:color-mix(in lab,red,red)){.shadow-black\\/20{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-black) 20%, transparent) var(--tw-shadow-alpha), transparent)}}.shadow-blue-200{--tw-shadow-color:oklch(88.2% .059 254.128)}@supports (color:color-mix(in lab,red,red)){.shadow-blue-200{--tw-shadow-color:color-mix(in oklab, var(--color-blue-200) var(--tw-shadow-alpha), transparent)}}.shadow-blue-500\\/30{--tw-shadow-color:#3080ff4d}@supports (color:color-mix(in lab,red,red)){.shadow-blue-500\\/30{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-blue-500) 30%, transparent) var(--tw-shadow-alpha), transparent)}}.shadow-blue-500\\/40{--tw-shadow-color:#3080ff66}@supports (color:color-mix(in lab,red,red)){.shadow-blue-500\\/40{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-blue-500) 40%, transparent) var(--tw-shadow-alpha), transparent)}}.shadow-rose-500\\/20{--tw-shadow-color:#ff235733}@supports (color:color-mix(in lab,red,red)){.shadow-rose-500\\/20{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-rose-500) 20%, transparent) var(--tw-shadow-alpha), transparent)}}.shadow-rose-500\\/30{--tw-shadow-color:#ff23574d}@supports (color:color-mix(in lab,red,red)){.shadow-rose-500\\/30{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-rose-500) 30%, transparent) var(--tw-shadow-alpha), transparent)}}.ring-blue-500{--tw-ring-color:var(--color-blue-500)}.ring-white\\/5{--tw-ring-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.ring-white\\/5{--tw-ring-color:color-mix(in oklab, var(--color-white) 5%, transparent)}}.ring-offset-2{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.ring-offset-slate-900{--tw-ring-offset-color:var(--color-slate-900)}.ring-offset-white{--tw-ring-offset-color:var(--color-white)}.drop-shadow-xl{--tw-drop-shadow-size:drop-shadow(0 9px 7px var(--tw-drop-shadow-color,#0000001a));--tw-drop-shadow:drop-shadow(var(--drop-shadow-xl));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-xl{--tw-backdrop-blur:blur(var(--blur-xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}@media(hover:hover){.group-hover\\:translate-x-1:is(:where(.group):hover *){--tw-translate-x:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:text-blue-500:is(:where(.group):hover *){color:var(--color-blue-500)}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.selection\\:bg-rose-500 ::selection{background-color:var(--color-rose-500)}.selection\\:bg-rose-500::selection{background-color:var(--color-rose-500)}.selection\\:text-white ::selection{color:var(--color-white)}.selection\\:text-white::selection{color:var(--color-white)}.last\\:border-0:last-child{border-style:var(--tw-border-style);border-width:0}@media(hover:hover){.hover\\:scale-110:hover{--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-blue-500:hover{border-color:var(--color-blue-500)}.hover\\:border-blue-500\\/50:hover{border-color:#3080ff80}@supports (color:color-mix(in lab,red,red)){.hover\\:border-blue-500\\/50:hover{border-color:color-mix(in oklab,var(--color-blue-500) 50%,transparent)}}.hover\\:border-slate-300:hover{border-color:var(--color-slate-300)}.hover\\:border-slate-500:hover{border-color:var(--color-slate-500)}.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-blue-500:hover{background-color:var(--color-blue-500)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-slate-50:hover{background-color:var(--color-slate-50)}.hover\\:bg-slate-100:hover{background-color:var(--color-slate-100)}.hover\\:bg-slate-600:hover{background-color:var(--color-slate-600)}.hover\\:bg-slate-700:hover{background-color:var(--color-slate-700)}.hover\\:bg-slate-800:hover{background-color:var(--color-slate-800)}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.hover\\:text-blue-500:hover{color:var(--color-blue-500)}.hover\\:text-blue-600:hover{color:var(--color-blue-600)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-800:hover{color:var(--color-gray-800)}.hover\\:opacity-70:hover{opacity:.7}.hover\\:opacity-80:hover{opacity:.8}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-sm:hover{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-blue-500\\/50:hover{--tw-shadow-color:#3080ff80}@supports (color:color-mix(in lab,red,red)){.hover\\:shadow-blue-500\\/50:hover{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-blue-500) 50%, transparent) var(--tw-shadow-alpha), transparent)}}}.active\\:scale-90:active{--tw-scale-x:90%;--tw-scale-y:90%;--tw-scale-z:90%;scale:var(--tw-scale-x) var(--tw-scale-y)}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x) var(--tw-scale-y)}.active\\:scale-\\[0\\.98\\]:active{scale:.98}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:mb-0{margin-bottom:calc(var(--spacing) * 0)}.sm\\:w-auto{width:auto}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:justify-between{justify-content:space-between}.sm\\:rounded-2xl{border-radius:var(--radius-2xl)}.sm\\:p-4{padding:calc(var(--spacing) * 4)}.sm\\:px-6{padding-inline:calc(var(--spacing) * 6)}.sm\\:text-right{text-align:right}}@media(min-width:48rem){.md\\:\\!block{display:block!important}.md\\:\\!flex{display:flex!important}.md\\:\\!hidden{display:none!important}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-\\[200px_1fr\\]{grid-template-columns:200px 1fr}.md\\:items-center{align-items:center}.md\\:gap-14{gap:calc(var(--spacing) * 14)}.md\\:p-6{padding:calc(var(--spacing) * 6)}.md\\:p-8{padding:calc(var(--spacing) * 8)}.md\\:px-8{padding-inline:calc(var(--spacing) * 8)}.md\\:py-8{padding-block:calc(var(--spacing) * 8)}.md\\:pt-6{padding-top:calc(var(--spacing) * 6)}.md\\:pb-0{padding-bottom:calc(var(--spacing) * 0)}.md\\:text-center{text-align:center}}@media(min-width:64rem){.lg\\:\\!block{display:block!important}.lg\\:\\!grid-cols-\\[1fr_380px\\]{grid-template-columns:1fr 380px!important}.lg\\:\\!grid-cols-\\[1fr_400px\\]{grid-template-columns:1fr 400px!important}.lg\\:\\!grid-cols-\\[550px_1fr\\]{grid-template-columns:550px 1fr!important}.lg\\:\\!gap-16{gap:calc(var(--spacing) * 16)!important}.lg\\:px-0{padding-inline:calc(var(--spacing) * 0)}.lg\\:text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}}.dark\\:border-slate-800:where(.dark,.dark *){border-color:var(--color-slate-800)}.dark\\:bg-slate-700:where(.dark,.dark *){background-color:var(--color-slate-700)}.dark\\:bg-slate-800\\/90:where(.dark,.dark *){background-color:#1d293de6}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-slate-800\\/90:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-slate-800) 90%,transparent)}}.dark\\:bg-slate-900:where(.dark,.dark *){background-color:var(--color-slate-900)}.dark\\:text-slate-200:where(.dark,.dark *){color:var(--color-slate-200)}.dark\\:text-slate-400:where(.dark,.dark *){color:var(--color-slate-400)}.dark\\:mix-blend-normal:where(.dark,.dark *){mix-blend-mode:normal}@media(hover:hover){.dark\\:hover\\:bg-slate-800:where(.dark,.dark *):hover{background-color:var(--color-slate-800)}.dark\\:hover\\:bg-slate-800\\/30:where(.dark,.dark *):hover{background-color:#1d293d4d}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-slate-800\\/30:where(.dark,.dark *):hover{background-color:color-mix(in oklab,var(--color-slate-800) 30%,transparent)}}.dark\\:hover\\:text-gray-200:where(.dark,.dark *):hover{color:var(--color-gray-200)}.dark\\:hover\\:text-white:where(.dark,.dark *):hover{color:var(--color-white)}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-scroll-snap-strictness{syntax:"*";inherits:false;initial-value:proximity}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}';
const dr = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pr(r, a) {
  let t = "";
  for (let o in r) {
    if (dr(o) || O(o) || a === "textarea" && o === "value" || // force as property (not rendered in SSR)
    o.startsWith("."))
      continue;
    const e = r[o];
    o.startsWith("^") && (o = o.slice(1)), o === "class" ? t += ` class="${hr(e)}"` : o === "style" ? t += ` style="${wr(e)}"` : o === "className" ? e != null && (t += ` class="${g(String(e))}"`) : t += gr(o, e, a);
  }
  return t;
}
function gr(r, a, t) {
  if (!K(a))
    return "";
  const o = t && (t.indexOf("-") > 0 || q(t)) ? r : J[r] || r.toLowerCase();
  return Q(o) ? X(a) ? ` ${o}` : "" : Y(o) ? a === "" ? ` ${o}` : ` ${o}="${g(a)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function hr(r) {
  return g(D(r));
}
function wr(r) {
  if (!r)
    return "";
  if (h(r))
    return g(r);
  const a = W(br(r));
  return g(G(a));
}
function br(r) {
  if (!C(r) && Z(r)) {
    const a = {};
    for (const t in r)
      t.startsWith(":--") ? a[t.slice(1)] = rr(r[t]) : a[t] = r[t];
    return a;
  }
  return r;
}
function vr(r, a, t, o, e) {
  r("<!--teleport start-->");
  const i = e.appContext.provides[_], l = i.__teleportBuffers || (i.__teleportBuffers = {}), n = l[t] || (l[t] = []), c = n.length;
  let p;
  if (o)
    a(r), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = S();
    s("<!--teleport start anchor-->"), a(s), s("<!--teleport anchor-->"), p = d();
  }
  n.splice(c, 0, p), r("<!--teleport end-->");
}
{
  const r = R(), a = (t, o) => {
    let e;
    return (e = r[t]) || (e = r[t] = []), e.push(o), (i) => {
      e.length > 1 ? e.forEach((l) => l(i)) : e[0](i);
    };
  };
  a(
    "__VUE_INSTANCE_SETTERS__",
    (t) => t
  ), a(
    "__VUE_SSR_SETTERS__",
    (t) => t
  );
}
function fr(r, a) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: mr,
  setCurrentRenderingInstance: u,
  setupComponent: xr,
  renderComponentRoot: k,
  normalizeVNode: ur
} = z;
function S() {
  let r = !1;
  const a = [];
  return {
    getBuffer() {
      return a;
    },
    push(t) {
      const o = h(t);
      if (r && o) {
        a[a.length - 1] += t;
        return;
      }
      a.push(t), r = o, (v(t) || C(t) && t.hasAsync) && (a.hasAsync = !0);
    }
  };
}
function T(r, a = null, t) {
  const o = r.component = mr(
    r,
    a,
    null
  ), e = xr(
    o,
    !0
    /* isSSR */
  ), i = v(e);
  let l = o.sp;
  return i || l ? Promise.resolve(e).then(() => {
    if (i && (l = o.sp), l)
      return Promise.all(
        l.map((c) => c.call(o.proxy))
      );
  }).catch(m).then(() => y(o, t)) : y(o, t);
}
function y(r, a) {
  const t = r.type, { getBuffer: o, push: e } = S();
  if (N(t)) {
    let i = k(r);
    if (!t.props)
      for (const l in r.attrs)
        l.startsWith("data-v-") && ((i.props || (i.props = {}))[l] = "");
    f(e, r.subTree = i, r, a);
  } else {
    (!r.render || r.render === m) && !r.ssrRender && !t.ssrRender && h(t.template) && (t.ssrRender = fr(t.template));
    const i = r.ssrRender || t.ssrRender;
    if (i) {
      let l = r.inheritAttrs !== !1 ? r.attrs : void 0, n = !1, c = r;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (n || (l = { ...l }, n = !0), l[d] = "");
        const s = c.parent;
        if (s && s.subTree && s.subTree === c.vnode)
          c = s;
        else
          break;
      }
      if (a) {
        n || (l = { ...l });
        const d = a.trim().split(" ");
        for (let s = 0; s < d.length; s++)
          l[d[s]] = "";
      }
      const p = u(r);
      try {
        i(
          r.proxy,
          e,
          r,
          l,
          // compiler-optimized bindings
          r.props,
          r.setupState,
          r.data,
          r.ctx
        );
      } finally {
        u(p);
      }
    } else r.render && r.render !== m ? f(
      e,
      r.subTree = k(r),
      r,
      a
    ) : (t.name || t.__file, e("<!---->"));
  }
  return o();
}
function f(r, a, t, o) {
  const { type: e, shapeFlag: i, children: l, dirs: n, props: c } = a;
  switch (n && (a.props = yr(a, c, n)), e) {
    case I:
      r(g(l));
      break;
    case M:
      r(
        l ? `<!--${U(l)}-->` : "<!---->"
      );
      break;
    case F:
      r(l);
      break;
    case V:
      a.slotScopeIds && (o = (o ? o + " " : "") + a.slotScopeIds.join(" ")), r("<!--[-->"), x(
        r,
        l,
        t,
        o
      ), r("<!--]-->");
      break;
    default:
      i & 1 ? kr(r, a, t, o) : i & 6 ? r(T(a, t, o)) : i & 64 ? _r(r, a, t, o) : i & 128 && f(r, a.ssContent, t, o);
  }
}
function x(r, a, t, o) {
  for (let e = 0; e < a.length; e++)
    f(r, ur(a[e]), t, o);
}
function kr(r, a, t, o) {
  const e = a.type;
  let { props: i, children: l, shapeFlag: n, scopeId: c } = a, p = `<${e}`;
  i && (p += pr(i, e)), c && (p += ` ${c}`);
  let d = t, s = a;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (o && (p += ` ${o}`), r(p + ">"), !L(e)) {
    let w = !1;
    i && (i.innerHTML ? (w = !0, r(i.innerHTML)) : i.textContent ? (w = !0, r(g(i.textContent))) : e === "textarea" && i.value && (w = !0, r(g(i.value)))), w || (n & 8 ? r(g(l)) : n & 16 && x(
      r,
      l,
      t,
      o
    )), r(`</${e}>`);
  }
}
function yr(r, a, t) {
  const o = [];
  for (let e = 0; e < t.length; e++) {
    const i = t[e], {
      dir: { getSSRProps: l }
    } = i;
    if (l) {
      const n = l(i, r);
      n && o.push(n);
    }
  }
  return H(a || {}, ...o);
}
function _r(r, a, t, o) {
  const e = a.props && a.props.to, i = a.props && a.props.disabled;
  if (!e)
    return [];
  if (!h(e))
    return [];
  vr(
    r,
    (l) => {
      x(
        l,
        a.children,
        t,
        o
      );
    },
    e,
    i || i === "",
    t
  );
}
const { isVNode: zr } = z;
function b(r, a, t) {
  if (!r.hasAsync)
    return a + A(r);
  let o = a;
  for (let e = t; e < r.length; e += 1) {
    const i = r[e];
    if (h(i)) {
      o += i;
      continue;
    }
    if (v(i))
      return i.then((n) => (r[e] = n, b(r, o, e)));
    const l = b(i, o, 0);
    if (v(l))
      return l.then((n) => (r[e] = n, b(r, "", e)));
    o = l;
  }
  return o;
}
function $(r) {
  return b(r, "", 0);
}
function A(r) {
  let a = "";
  for (let t = 0; t < r.length; t++) {
    let o = r[t];
    h(o) ? a += o : a += A(o);
  }
  return a;
}
async function E(r, a = {}) {
  if (zr(r))
    return E(j({ render: () => r }), a);
  const t = B(r._component, r._props);
  t.appContext = r._context, r.provide(_, a);
  const o = await T(t), e = await $(o);
  if (await Cr(a), a.__watcherHandles)
    for (const i of a.__watcherHandles)
      i();
  return e;
}
async function Cr(r) {
  if (r.__teleportBuffers) {
    r.teleports = r.teleports || {};
    for (const a in r.__teleportBuffers)
      r.teleports[a] = await $(
        await Promise.all([r.__teleportBuffers[a]])
      );
  }
}
ar();
const Sr = ["id"], Tr = /* @__PURE__ */ tr({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(r) {
    return (a, t) => (lr(), or("div", {
      id: r._p.f.name("root"),
      class: "box"
    }, [
      er("p", null, ir(r._$p.data.curr.data.data), 1)
    ], 8, Sr));
  }
});
sr(cr);
const Ar = async (r) => ({
  set: async (a, t) => {
    console.log(`--renderer [${a.data.curr.type}]`);
    const e = nr(Tr, {
      _p: r,
      _$p: a,
      _$cb: t
    });
    return {
      r: `
                 <div>
                    ${await E(e)}
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
