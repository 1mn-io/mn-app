import { D as N, a as j, c as B, E as _, G as z, H as v, N as u, I as E, J as g, F as V, S as M, K as I, L as F, M as U, O as w, m as H, P as L, Q as C, R as O, U as P, x as D, y as W, V as G, W as K, X as J, Y as Q, Z as X, _ as Y, $ as Z, a0 as q, a1 as rr, a2 as tr, d as ar, p as er, k as or, s as ir, u as nr, a3 as sr } from "./runtime-dom.esm-bundler-Djf_Aa32.js";
function lr(r, t) {
  t === void 0 && (t = {});
  var a = t.insertAt;
  if (!(typeof document > "u")) {
    var e = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", a === "top" && e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r));
  }
}
const cr = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-scroll-snap-strictness:proximity;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-500:oklch(63.7% .237 25.331);--color-red-900:oklch(39.6% .141 25.723);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-5xl:64rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-black:900;--tracking-tight:-.025em;--tracking-wide:.025em;--tracking-wider:.05em;--tracking-widest:.1em;--leading-relaxed:1.625;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--drop-shadow-xl:0 9px 7px #0000001a;--ease-in:cubic-bezier(.4, 0, 1, 1);--ease-out:cubic-bezier(0, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--blur-md:12px;--blur-xl:24px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing) * 0)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.top-0\\.5{top:calc(var(--spacing) * .5)}.top-4{top:calc(var(--spacing) * 4)}.top-5{top:calc(var(--spacing) * 5)}.right-0{right:calc(var(--spacing) * 0)}.right-4{right:calc(var(--spacing) * 4)}.right-5{right:calc(var(--spacing) * 5)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-4{bottom:calc(var(--spacing) * 4)}.left-0{left:calc(var(--spacing) * 0)}.z-10{z-index:10}.z-20{z-index:20}.z-50,.z-\\[50\\]{z-index:50}.z-\\[60\\]{z-index:60}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-8{margin-top:calc(var(--spacing) * 8)}.-mr-2{margin-right:calc(var(--spacing) * -2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.mb-12{margin-bottom:calc(var(--spacing) * 12)}.-ml-2{margin-left:calc(var(--spacing) * -2)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-16{height:calc(var(--spacing) * 16)}.h-64{height:calc(var(--spacing) * 64)}.h-\\[85vh\\]{height:85vh}.h-auto{height:auto}.h-full{height:100%}.max-h-\\[200px\\]{max-height:200px}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-\\[280px\\]{min-height:280px}.min-h-screen{min-height:100vh}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-1\\/3{width:33.3333%}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing) * 4)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-8{width:calc(var(--spacing) * 8)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-16{width:calc(var(--spacing) * 16)}.w-24{width:calc(var(--spacing) * 24)}.w-auto{width:auto}.w-full{width:100%}.max-w-\\[140px\\]{max-width:140px}.max-w-full{max-width:100%}.min-w-\\[400px\\]{min-width:400px}.flex-1{flex:1}.flex-\\[1\\.5\\]{flex:1.5}.shrink-0{flex-shrink:0}.border-collapse{border-collapse:collapse}.-translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-125{--tw-scale-x:125%;--tw-scale-y:125%;--tw-scale-z:125%;scale:var(--tw-scale-x) var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-\\[fadeIn_0\\.2s_ease-out\\]{animation:.2s ease-out fadeIn}.animate-\\[fadeIn_0\\.3s_ease-out\\]{animation:.3s ease-out fadeIn}.animate-pulse{animation:var(--animate-pulse)}.animate-spin{animation:var(--animate-spin)}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness:mandatory}.snap-center{scroll-snap-align:center}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-8{gap:calc(var(--spacing) * 8)}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-6>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing) * 6) * var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-x-reverse)))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-t-\\[32px\\]{border-top-left-radius:32px;border-top-right-radius:32px}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-black{border-color:var(--color-black)}.border-black\\/5{border-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.border-black\\/5{border-color:color-mix(in oklab,var(--color-black) 5%,transparent)}}.border-blue-600{border-color:var(--color-blue-600)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-200\\/50{border-color:#e5e7eb80}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/50{border-color:color-mix(in oklab,var(--color-gray-200) 50%,transparent)}}.border-gray-400{border-color:var(--color-gray-400)}.border-transparent{border-color:#0000}.border-t-transparent{border-top-color:#0000}.bg-\\[\\#F4F4F5\\]{background-color:#f4f4f5}.bg-black{background-color:var(--color-black)}.bg-black\\/15{background-color:#00000026}@supports (color:color-mix(in lab,red,red)){.bg-black\\/15{background-color:color-mix(in oklab,var(--color-black) 15%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-red-50{background-color:var(--color-red-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-transparent{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-white\\/10{--tw-gradient-via:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.via-white\\/10{--tw-gradient-via:color-mix(in oklab, var(--color-white) 10%, transparent)}}.via-white\\/10{--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.stroke-gray-300{stroke:var(--color-gray-300)}.object-contain{object-fit:contain}.p-0{padding:calc(var(--spacing) * 0)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-2\\.5{padding:calc(var(--spacing) * 2.5)}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-12{padding:calc(var(--spacing) * 12)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.pt-8{padding-top:calc(var(--spacing) * 8)}.pb-0{padding-bottom:calc(var(--spacing) * 0)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-12{padding-bottom:calc(var(--spacing) * 12)}.pb-\\[max\\(1\\.25rem\\,env\\(safe-area-inset-bottom\\)\\)\\]{padding-bottom:max(1.25rem,env(safe-area-inset-bottom))}.pb-\\[max\\(2rem\\,env\\(safe-area-inset-bottom\\)\\)\\]{padding-bottom:max(2rem,env(safe-area-inset-bottom))}.pl-10{padding-left:calc(var(--spacing) * 10)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.leading-\\[1\\.1\\]{--tw-leading:1.1;line-height:1.1}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-black{--tw-font-weight:var(--font-weight-black);font-weight:var(--font-weight-black)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.2em\\]{--tw-tracking:.2em;letter-spacing:.2em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-black{color:var(--color-black)}.text-blue-600{color:var(--color-blue-600)}.text-current{color:currentColor}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-900{color:var(--color-gray-900)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.line-through{text-decoration-line:line-through}.underline{text-decoration-line:underline}.decoration-1{text-decoration-thickness:1px}.underline-offset-2{text-underline-offset:2px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-0{opacity:0}.opacity-25{opacity:.25}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-75{opacity:.75}.opacity-80{opacity:.8}.opacity-100{opacity:1}.mix-blend-multiply{mix-blend-mode:multiply}.shadow-\\[0_-10px_40px_-10px_rgba\\(0\\,0\\,0\\,0\\.05\\)\\]{--tw-shadow:0 -10px 40px -10px var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_8px_20px_-6px_rgba\\(37\\,99\\,235\\,0\\.4\\)\\]{--tw-shadow:0 8px 20px -6px var(--tw-shadow-color,#2563eb66);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[0_40px_80px_-12px_rgba\\(0\\,0\\,0\\,0\\.3\\)\\]{--tw-shadow:0 40px 80px -12px var(--tw-shadow-color,#0000004d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-blue-500\\/20{--tw-shadow-color:#3080ff33}@supports (color:color-mix(in lab,red,red)){.shadow-blue-500\\/20{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-blue-500) 20%, transparent) var(--tw-shadow-alpha), transparent)}}.shadow-blue-500\\/30{--tw-shadow-color:#3080ff4d}@supports (color:color-mix(in lab,red,red)){.shadow-blue-500\\/30{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-blue-500) 30%, transparent) var(--tw-shadow-alpha), transparent)}}.ring-black\\/5{--tw-ring-color:#0000000d}@supports (color:color-mix(in lab,red,red)){.ring-black\\/5{--tw-ring-color:color-mix(in oklab, var(--color-black) 5%, transparent)}}.drop-shadow-xl{--tw-drop-shadow-size:drop-shadow(0 9px 7px var(--tw-drop-shadow-color,#0000001a));--tw-drop-shadow:drop-shadow(var(--drop-shadow-xl));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-\\[4px\\]{--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-xl{--tw-backdrop-blur:blur(var(--blur-xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-700{--tw-duration:.7s;transition-duration:.7s}.duration-\\[600ms\\]{--tw-duration:.6s;transition-duration:.6s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.will-change-transform{will-change:transform}.outline-none{--tw-outline-style:none;outline-style:none}@media(hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:rotate-90:hover{rotate:90deg}.hover\\:border-gray-400:hover{border-color:var(--color-gray-400)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:text-black:hover{color:var(--color-black)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-800:hover{color:var(--color-gray-800)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:scale-90:active{--tw-scale-x:90%;--tw-scale-y:90%;--tw-scale-z:90%;scale:var(--tw-scale-x) var(--tw-scale-y)}.active\\:scale-\\[0\\.96\\]:active{scale:.96}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70:disabled{opacity:.7}@media(min-width:40rem){.sm\\:inset-0{inset:calc(var(--spacing) * 0)}.sm\\:bottom-6{bottom:calc(var(--spacing) * 6)}.sm\\:mt-0{margin-top:calc(var(--spacing) * 0)}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:h-auto{height:auto}.sm\\:h-full{height:100%}.sm\\:max-h-\\[65\\%\\]{max-height:65%}.sm\\:max-h-\\[680px\\]{max-height:680px}.sm\\:min-h-0{min-height:calc(var(--spacing) * 0)}.sm\\:w-\\[50\\%\\]{width:50%}.sm\\:max-w-5xl{max-width:var(--container-5xl)}.sm\\:translate-y-12{--tw-translate-y:calc(var(--spacing) * 12);translate:var(--tw-translate-x) var(--tw-translate-y)}.sm\\:scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x) var(--tw-scale-y)}.sm\\:scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.sm\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.sm\\:grid-cols-\\[180px_1fr\\]{grid-template-columns:180px 1fr}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:justify-center{justify-content:center}.sm\\:gap-4{gap:calc(var(--spacing) * 4)}.sm\\:rounded-\\[32px\\]{border-radius:32px}.sm\\:p-0{padding:calc(var(--spacing) * 0)}.sm\\:p-4{padding:calc(var(--spacing) * 4)}.sm\\:p-6{padding:calc(var(--spacing) * 6)}.sm\\:p-8{padding:calc(var(--spacing) * 8)}.sm\\:p-12{padding:calc(var(--spacing) * 12)}.sm\\:pt-6{padding-top:calc(var(--spacing) * 6)}.sm\\:pb-8{padding-bottom:calc(var(--spacing) * 8)}.sm\\:text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}}.dark\\:border-blue-400:where(.dark .dark\\:border-blue-400){border-color:var(--color-blue-400)}.dark\\:border-gray-600:where(.dark .dark\\:border-gray-600){border-color:var(--color-gray-600)}.dark\\:border-gray-700:where(.dark .dark\\:border-gray-700){border-color:var(--color-gray-700)}.dark\\:border-gray-800:where(.dark .dark\\:border-gray-800){border-color:var(--color-gray-800)}.dark\\:border-slate-700:where(.dark .dark\\:border-slate-700){border-color:var(--color-slate-700)}.dark\\:border-slate-800:where(.dark .dark\\:border-slate-800){border-color:var(--color-slate-800)}.dark\\:border-white:where(.dark .dark\\:border-white){border-color:var(--color-white)}.dark\\:border-white\\/5:where(.dark .dark\\:border-white\\/5){border-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.dark\\:border-white\\/5:where(.dark .dark\\:border-white\\/5){border-color:color-mix(in oklab,var(--color-white) 5%,transparent)}}.dark\\:border-white\\/10:where(.dark .dark\\:border-white\\/10){border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:border-white\\/10:where(.dark .dark\\:border-white\\/10){border-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.dark\\:bg-\\[\\#0f172a\\]:where(.dark .dark\\:bg-\\[\\#0f172a\\]){background-color:#0f172a}.dark\\:bg-\\[\\#1a1a1c\\]:where(.dark .dark\\:bg-\\[\\#1a1a1c\\]){background-color:#1a1a1c}.dark\\:bg-\\[\\#1e293b\\]:where(.dark .dark\\:bg-\\[\\#1e293b\\]){background-color:#1e293b}.dark\\:bg-\\[\\#09090b\\]:where(.dark .dark\\:bg-\\[\\#09090b\\]){background-color:#09090b}.dark\\:bg-\\[\\#09090b\\]\\/95:where(.dark .dark\\:bg-\\[\\#09090b\\]\\/95){background-color:#09090bf2}.dark\\:bg-\\[\\#121212\\]:where(.dark .dark\\:bg-\\[\\#121212\\]){background-color:#121212}.dark\\:bg-black\\/40:where(.dark .dark\\:bg-black\\/40){background-color:#0006}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-black\\/40:where(.dark .dark\\:bg-black\\/40){background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.dark\\:bg-black\\/50:where(.dark .dark\\:bg-black\\/50){background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-black\\/50:where(.dark .dark\\:bg-black\\/50){background-color:color-mix(in oklab,var(--color-black) 50%,transparent)}}.dark\\:bg-gray-600:where(.dark .dark\\:bg-gray-600){background-color:var(--color-gray-600)}.dark\\:bg-gray-800:where(.dark .dark\\:bg-gray-800){background-color:var(--color-gray-800)}.dark\\:bg-red-900\\/20:where(.dark .dark\\:bg-red-900\\/20){background-color:#82181a33}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-900\\/20:where(.dark .dark\\:bg-red-900\\/20){background-color:color-mix(in oklab,var(--color-red-900) 20%,transparent)}}.dark\\:bg-slate-800:where(.dark .dark\\:bg-slate-800){background-color:var(--color-slate-800)}.dark\\:bg-slate-800\\/50:where(.dark .dark\\:bg-slate-800\\/50){background-color:#1d293d80}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-slate-800\\/50:where(.dark .dark\\:bg-slate-800\\/50){background-color:color-mix(in oklab,var(--color-slate-800) 50%,transparent)}}.dark\\:bg-white:where(.dark .dark\\:bg-white){background-color:var(--color-white)}.dark\\:bg-white\\/20:where(.dark .dark\\:bg-white\\/20){background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-white\\/20:where(.dark .dark\\:bg-white\\/20){background-color:color-mix(in oklab,var(--color-white) 20%,transparent)}}.dark\\:stroke-slate-600:where(.dark .dark\\:stroke-slate-600){stroke:var(--color-slate-600)}.dark\\:text-black:where(.dark .dark\\:text-black){color:var(--color-black)}.dark\\:text-blue-400:where(.dark .dark\\:text-blue-400){color:var(--color-blue-400)}.dark\\:text-gray-100:where(.dark .dark\\:text-gray-100){color:var(--color-gray-100)}.dark\\:text-gray-300:where(.dark .dark\\:text-gray-300){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark .dark\\:text-gray-400){color:var(--color-gray-400)}.dark\\:text-gray-500:where(.dark .dark\\:text-gray-500){color:var(--color-gray-500)}.dark\\:text-slate-300:where(.dark .dark\\:text-slate-300){color:var(--color-slate-300)}.dark\\:text-slate-400:where(.dark .dark\\:text-slate-400){color:var(--color-slate-400)}.dark\\:text-white:where(.dark .dark\\:text-white){color:var(--color-white)}.dark\\:mix-blend-normal:where(.dark .dark\\:mix-blend-normal){mix-blend-mode:normal}.dark\\:ring-white\\/10:where(.dark .dark\\:ring-white\\/10){--tw-ring-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:ring-white\\/10:where(.dark .dark\\:ring-white\\/10){--tw-ring-color:color-mix(in oklab, var(--color-white) 10%, transparent)}}@media(hover:hover){.dark\\:hover\\:border-gray-600:where(.dark .dark\\:hover\\:border-gray-600):hover{border-color:var(--color-gray-600)}.dark\\:hover\\:bg-\\[\\#27272a\\]:where(.dark .dark\\:hover\\:bg-\\[\\#27272a\\]):hover{background-color:#27272a}.dark\\:hover\\:bg-gray-700:where(.dark .dark\\:hover\\:bg-gray-700):hover{background-color:var(--color-gray-700)}.dark\\:hover\\:bg-slate-800:where(.dark .dark\\:hover\\:bg-slate-800):hover{background-color:var(--color-slate-800)}.dark\\:hover\\:bg-slate-800\\/30:where(.dark .dark\\:hover\\:bg-slate-800\\/30):hover{background-color:#1d293d4d}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-slate-800\\/30:where(.dark .dark\\:hover\\:bg-slate-800\\/30):hover{background-color:color-mix(in oklab,var(--color-slate-800) 30%,transparent)}}.dark\\:hover\\:bg-white\\/10:where(.dark .dark\\:hover\\:bg-white\\/10):hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:hover\\:bg-white\\/10:where(.dark .dark\\:hover\\:bg-white\\/10):hover{background-color:color-mix(in oklab,var(--color-white) 10%,transparent)}}.dark\\:hover\\:text-gray-200:where(.dark .dark\\:hover\\:text-gray-200):hover{color:var(--color-gray-200)}.dark\\:hover\\:text-white:where(.dark .dark\\:hover\\:text-white):hover{color:var(--color-white)}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-scroll-snap-strictness{syntax:"*";inherits:false;initial-value:proximity}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}';
const dr = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pr(r, t) {
  let a = "";
  for (let e in r) {
    if (dr(e) || O(e) || t === "textarea" && e === "value" || // force as property (not rendered in SSR)
    e.startsWith("."))
      continue;
    const o = r[e];
    e.startsWith("^") && (e = e.slice(1)), e === "class" ? a += ` class="${gr(o)}"` : e === "style" ? a += ` style="${hr(o)}"` : e === "className" ? o != null && (a += ` class="${w(String(o))}"`) : a += wr(e, o, t);
  }
  return a;
}
function wr(r, t, a) {
  if (!K(t))
    return "";
  const e = a && (a.indexOf("-") > 0 || J(a)) ? r : Q[r] || r.toLowerCase();
  return X(e) ? Y(t) ? ` ${e}` : "" : Z(e) ? t === "" ? ` ${e}` : ` ${e}="${w(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${e}`
  ), "");
}
function gr(r) {
  return w(D(r));
}
function hr(r) {
  if (!r)
    return "";
  if (g(r))
    return w(r);
  const t = W(br(r));
  return w(G(t));
}
function br(r) {
  if (!C(r) && q(r)) {
    const t = {};
    for (const a in r)
      a.startsWith(":--") ? t[a.slice(1)] = rr(r[a]) : t[a] = r[a];
    return t;
  }
  return r;
}
function vr(r, t, a, e, o) {
  r("<!--teleport start-->");
  const i = o.appContext.provides[_], n = i.__teleportBuffers || (i.__teleportBuffers = {}), s = n[a] || (n[a] = []), c = s.length;
  let p;
  if (e)
    t(r), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = S();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = d();
  }
  s.splice(c, 0, p), r("<!--teleport end-->");
}
{
  const r = N(), t = (a, e) => {
    let o;
    return (o = r[a]) || (o = r[a] = []), o.push(e), (i) => {
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
function fr(r, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ur,
  setCurrentRenderingInstance: x,
  setupComponent: kr,
  renderComponentRoot: m,
  normalizeVNode: xr
} = z;
function S() {
  let r = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(a) {
      const e = g(a);
      if (r && e) {
        t[t.length - 1] += a;
        return;
      }
      t.push(a), r = e, (v(a) || C(a) && a.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(r, t = null, a) {
  const e = r.component = ur(
    r,
    t,
    null
  ), o = kr(
    e,
    !0
    /* isSSR */
  ), i = v(o);
  let n = e.sp;
  return i || n ? Promise.resolve(o).then(() => {
    if (i && (n = e.sp), n)
      return Promise.all(
        n.map((c) => c.call(e.proxy))
      );
  }).catch(u).then(() => y(e, a)) : y(e, a);
}
function y(r, t) {
  const a = r.type, { getBuffer: e, push: o } = S();
  if (E(a)) {
    let i = m(r);
    if (!a.props)
      for (const n in r.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    f(o, r.subTree = i, r, t);
  } else {
    (!r.render || r.render === u) && !r.ssrRender && !a.ssrRender && g(a.template) && (a.ssrRender = fr(a.template));
    const i = r.ssrRender || a.ssrRender;
    if (i) {
      let n = r.inheritAttrs !== !1 ? r.attrs : void 0, s = !1, c = r;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (s || (n = { ...n }, s = !0), n[d] = "");
        const l = c.parent;
        if (l && l.subTree && l.subTree === c.vnode)
          c = l;
        else
          break;
      }
      if (t) {
        s || (n = { ...n });
        const d = t.trim().split(" ");
        for (let l = 0; l < d.length; l++)
          n[d[l]] = "";
      }
      const p = x(r);
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
        x(p);
      }
    } else r.render && r.render !== u ? f(
      o,
      r.subTree = m(r),
      r,
      t
    ) : (a.name || a.__file, o("<!---->"));
  }
  return e();
}
function f(r, t, a, e) {
  const { type: o, shapeFlag: i, children: n, dirs: s, props: c } = t;
  switch (s && (t.props = yr(t, c, s)), o) {
    case U:
      r(w(n));
      break;
    case I:
      r(
        n ? `<!--${F(n)}-->` : "<!---->"
      );
      break;
    case M:
      r(n);
      break;
    case V:
      t.slotScopeIds && (e = (e ? e + " " : "") + t.slotScopeIds.join(" ")), r("<!--[-->"), k(
        r,
        n,
        a,
        e
      ), r("<!--]-->");
      break;
    default:
      i & 1 ? mr(r, t, a, e) : i & 6 ? r(T(t, a, e)) : i & 64 ? _r(r, t, a, e) : i & 128 && f(r, t.ssContent, a, e);
  }
}
function k(r, t, a, e) {
  for (let o = 0; o < t.length; o++)
    f(r, xr(t[o]), a, e);
}
function mr(r, t, a, e) {
  const o = t.type;
  let { props: i, children: n, shapeFlag: s, scopeId: c } = t, p = `<${o}`;
  i && (p += pr(i, o)), c && (p += ` ${c}`);
  let d = a, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (p += ` ${l.scopeId}`), d = d.parent;
  if (e && (p += ` ${e}`), r(p + ">"), !L(o)) {
    let h = !1;
    i && (i.innerHTML ? (h = !0, r(i.innerHTML)) : i.textContent ? (h = !0, r(w(i.textContent))) : o === "textarea" && i.value && (h = !0, r(w(i.value)))), h || (s & 8 ? r(w(n)) : s & 16 && k(
      r,
      n,
      a,
      e
    )), r(`</${o}>`);
  }
}
function yr(r, t, a) {
  const e = [];
  for (let o = 0; o < a.length; o++) {
    const i = a[o], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const s = n(i, r);
      s && e.push(s);
    }
  }
  return H(t || {}, ...e);
}
function _r(r, t, a, e) {
  const o = t.props && t.props.to, i = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!g(o))
    return [];
  vr(
    r,
    (n) => {
      k(
        n,
        t.children,
        a,
        e
      );
    },
    o,
    i || i === "",
    a
  );
}
const { isVNode: zr } = z;
function b(r, t, a) {
  if (!r.hasAsync)
    return t + R(r);
  let e = t;
  for (let o = a; o < r.length; o += 1) {
    const i = r[o];
    if (g(i)) {
      e += i;
      continue;
    }
    if (v(i))
      return i.then((s) => (r[o] = s, b(r, e, o)));
    const n = b(i, e, 0);
    if (v(n))
      return n.then((s) => (r[o] = s, b(r, "", o)));
    e = n;
  }
  return e;
}
function $(r) {
  return b(r, "", 0);
}
function R(r) {
  let t = "";
  for (let a = 0; a < r.length; a++) {
    let e = r[a];
    g(e) ? t += e : t += R(e);
  }
  return t;
}
async function A(r, t = {}) {
  if (zr(r))
    return A(j({ render: () => r }), t);
  const a = B(r._component, r._props);
  a.appContext = r._context, r.provide(_, t);
  const e = await T(a), o = await $(e);
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
const Sr = ["id"], Tr = /* @__PURE__ */ ar({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(r) {
    return (t, a) => (er(), or("div", {
      id: r._p.f.name("root"),
      class: "box"
    }, [
      ir("p", null, nr(r._$p.data.curr.data.data), 1)
    ], 8, Sr));
  }
});
lr(cr);
const Rr = async (r) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const e = sr(Tr, {
      _p: r,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await A(e)}
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
  Rr as index,
  Rr as renderer
};
