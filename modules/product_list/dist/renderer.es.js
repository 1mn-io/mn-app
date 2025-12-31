import { n as B, s as _, m as N, p as E, q as z, u as f, N as u, x as V, y as w, F as M, S as j, C as U, z as H, T as L, A as g, B as C, D as O, E as P, G as F, H as I, I as D, J as G, K, L as W, M as q, O as J, P as Q, Q as X, R as Y, U as Z, V as tt, W as rt, d as et, c as at, e as ot, t as it, b as nt, X as lt } from "./runtime-dom.esm-bundler-BsjW_VaU.js";
function st(t, r) {
  r === void 0 && (r = {});
  var e = r.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", e === "top" && a.firstChild ? a.insertBefore(o, a.firstChild) : a.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t));
  }
}
const ct = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-500:oklch(63.7% .237 25.331);--color-amber-400:oklch(82.8% .189 84.429);--color-yellow-400:oklch(85.2% .199 91.936);--color-green-100:oklch(96.2% .044 156.743);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-900:oklch(39.3% .095 152.535);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-900:oklch(37.9% .146 265.522);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-slate-900:oklch(20.8% .042 265.755);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-black:900;--tracking-wide:.025em;--tracking-wider:.05em;--leading-snug:1.375;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-bounce:bounce 1s infinite;--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing)*2)}.right-2{right:calc(var(--spacing)*2)}.right-3{right:calc(var(--spacing)*3)}.bottom-2{bottom:calc(var(--spacing)*2)}.left-2{left:calc(var(--spacing)*2)}.left-4{left:calc(var(--spacing)*4)}.z-50{z-index:50}.mx-auto{margin-inline:auto}.my-8{margin-block:calc(var(--spacing)*8)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\.5{margin-bottom:calc(var(--spacing)*1.5)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.aspect-\\[4\\/5\\]{aspect-ratio:4/5}.h-1{height:calc(var(--spacing)*1)}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-11{height:calc(var(--spacing)*11)}.h-20{height:calc(var(--spacing)*20)}.h-full{height:100%}.min-h-\\[2\\.5em\\]{min-height:2.5em}.min-h-screen{min-height:100vh}.w-1{width:calc(var(--spacing)*1)}.w-1\\/3{width:33.3333%}.w-2{width:calc(var(--spacing)*2)}.w-4{width:calc(var(--spacing)*4)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-20{width:calc(var(--spacing)*20)}.w-full{width:100%}.max-w-\\[1440px\\]{max-width:1440px}.max-w-md{max-width:var(--container-md)}.flex-1{flex:1}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-0{--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-\\[shimmer_1\\.5s_infinite\\]{animation:1.5s infinite shimmer}.animate-bounce{animation:var(--animate-bounce)}.cursor-pointer{cursor:pointer}.list-none{list-style-type:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-baseline{align-items:baseline}.items-center{align-items:center}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200\\/50{border-color:#e5e7eb80}@supports (color:color-mix(in lab,red,red)){.border-gray-200\\/50{border-color:color-mix(in oklab,var(--color-gray-200)50%,transparent)}}.border-transparent{border-color:#0000}.bg-\\[\\#f4f6f8\\]{background-color:#f4f6f8}.bg-blue-600{background-color:var(--color-blue-600)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-green-100{background-color:var(--color-green-100)}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-red-500{background-color:var(--color-red-500)}.bg-white{background-color:var(--color-white)}.bg-white\\/70{background-color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/70{background-color:color-mix(in oklab,var(--color-white)70%,transparent)}}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-transparent{--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-white\\/20{--tw-gradient-via:#fff3}@supports (color:color-mix(in lab,red,red)){.via-white\\/20{--tw-gradient-via:color-mix(in oklab,var(--color-white)20%,transparent)}}.via-white\\/20{--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing)*2)}.p-3{padding:calc(var(--spacing)*3)}.px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-20{padding-block:calc(var(--spacing)*20)}.pr-10{padding-right:calc(var(--spacing)*10)}.pb-0{padding-bottom:calc(var(--spacing)*0)}.pb-20{padding-bottom:calc(var(--spacing)*20)}.pl-12{padding-left:calc(var(--spacing)*12)}.text-center{text-align:center}.font-sans{font-family:var(--font-sans)}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[15px\\]{font-size:15px}.leading-none{--tw-leading:1;line-height:1}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.font-black{--tw-font-weight:var(--font-weight-black);font-weight:var(--font-weight-black)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-amber-400{color:var(--color-amber-400)}.text-green-700{color:var(--color-green-700)}.text-red-500{color:var(--color-red-500)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-slate-900{color:var(--color-slate-900)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.line-through{text-decoration-line:line-through}.decoration-slate-400\\/50{text-decoration-color:#90a1b980}@supports (color:color-mix(in lab,red,red)){.decoration-slate-400\\/50{-webkit-text-decoration-color:color-mix(in oklab,var(--color-slate-400)50%,transparent);text-decoration-color:color-mix(in oklab,var(--color-slate-400)50%,transparent)}}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mix-blend-multiply{mix-blend-mode:multiply}.shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\]{--tw-shadow:0 2px 8px var(--tw-shadow-color,#0000000a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-blue-500\\/20{--tw-shadow-color:#3080ff33}@supports (color:color-mix(in lab,red,red)){.shadow-blue-500\\/20{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-blue-500)20%,transparent)var(--tw-shadow-alpha),transparent)}}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-700{--tw-duration:.7s;transition-duration:.7s}.outline-none{--tw-outline-style:none;outline-style:none}.\\[animation-delay\\:-0\\.3s\\]{animation-delay:-.3s}.\\[animation-delay\\:-0\\.15s\\]{animation-delay:-.15s}.group-focus-within\\:text-blue-600:is(:where(.group):focus-within *){color:var(--color-blue-600)}@media(hover:hover){.group-hover\\:scale-100:is(:where(.group):hover *){--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.group-hover\\/btn\\:translate-x-1:is(:where(.group\\/btn):hover *){--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}}.selection\\:bg-blue-100 ::selection{background-color:var(--color-blue-100)}.selection\\:bg-blue-100::selection{background-color:var(--color-blue-100)}.selection\\:text-blue-900 ::selection{color:var(--color-blue-900)}.selection\\:text-blue-900::selection{color:var(--color-blue-900)}.placeholder\\:text-slate-400::placeholder{color:var(--color-slate-400)}@media(hover:hover){.hover\\:-translate-y-1:hover{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.hover\\:border-blue-100:hover{border-color:var(--color-blue-100)}.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-green-700:hover{background-color:var(--color-green-700)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:text-red-500:hover{color:var(--color-red-500)}.hover\\:shadow-\\[0_12px_24px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\]:hover{--tw-shadow:0 12px 24px var(--tw-shadow-color,#00000014);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:bg-white:focus{background-color:var(--color-white)}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.active\\:scale-\\[0\\.98\\]:active{scale:.98}@media(min-width:48rem){.md\\:block{display:block}.md\\:h-12{height:calc(var(--spacing)*12)}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:gap-6{gap:calc(var(--spacing)*6)}.md\\:p-2\\.5{padding:calc(var(--spacing)*2.5)}.md\\:p-4{padding:calc(var(--spacing)*4)}.md\\:px-8{padding-inline:calc(var(--spacing)*8)}.md\\:py-4{padding-block:calc(var(--spacing)*4)}.md\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.md\\:text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}@media(min-width:64rem){.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:80rem){.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}}.dark\\:border-slate-800:where(.dark,.dark *){border-color:var(--color-slate-800)}.dark\\:border-slate-800\\/50:where(.dark,.dark *){border-color:#1d293d80}@supports (color:color-mix(in lab,red,red)){.dark\\:border-slate-800\\/50:where(.dark,.dark *){border-color:color-mix(in oklab,var(--color-slate-800)50%,transparent)}}.dark\\:bg-\\[\\#0b1120\\]:where(.dark,.dark *){background-color:#0b1120}.dark\\:bg-\\[\\#0f172a\\]\\/80:where(.dark,.dark *){background-color:#0f172acc}.dark\\:bg-\\[\\#1e293b\\]:where(.dark,.dark *){background-color:#1e293b}.dark\\:bg-black\\/40:where(.dark,.dark *){background-color:#0006}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-black\\/40:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.dark\\:bg-green-900\\/40:where(.dark,.dark *){background-color:#0d542b66}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-green-900\\/40:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-green-900)40%,transparent)}}.dark\\:bg-slate-700:where(.dark,.dark *){background-color:var(--color-slate-700)}.dark\\:bg-slate-800:where(.dark,.dark *){background-color:var(--color-slate-800)}.dark\\:text-green-400:where(.dark,.dark *){color:var(--color-green-400)}.dark\\:text-slate-100:where(.dark,.dark *){color:var(--color-slate-100)}.dark\\:text-slate-300:where(.dark,.dark *){color:var(--color-slate-300)}.dark\\:text-white:where(.dark,.dark *){color:var(--color-white)}.dark\\:text-yellow-400:where(.dark,.dark *){color:var(--color-yellow-400)}.dark\\:mix-blend-normal:where(.dark,.dark *){mix-blend-mode:normal}.dark\\:shadow-none:where(.dark,.dark *){--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@media(hover:hover){.dark\\:hover\\:border-slate-600:where(.dark,.dark *):hover{border-color:var(--color-slate-600)}.dark\\:hover\\:bg-slate-700:where(.dark,.dark *):hover{background-color:var(--color-slate-700)}.dark\\:hover\\:shadow-\\[0_4px_20px_rgba\\(0\\,0\\,0\\,0\\.3\\)\\]:where(.dark,.dark *):hover{--tw-shadow:0 4px 20px var(--tw-shadow-color,#0000004d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.dark\\:focus\\:bg-slate-900:where(.dark,.dark *):focus{background-color:var(--color-slate-900)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}';
const dt = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pt(t, r) {
  let e = "";
  for (const a in t) {
    if (dt(a) || I(a) || r === "textarea" && a === "value")
      continue;
    const o = t[a];
    a === "class" ? e += ` class="${wt(o)}"` : a === "style" ? e += ` style="${ht(o)}"` : a === "className" ? e += ` class="${String(o)}"` : e += gt(a, o, r);
  }
  return e;
}
function gt(t, r, e) {
  if (!W(r))
    return "";
  const a = e && (e.indexOf("-") > 0 || q(e)) ? t : J[t] || t.toLowerCase();
  return Q(a) ? X(r) ? ` ${a}` : "" : Y(a) ? r === "" ? ` ${a}` : ` ${a}="${g(r)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${a}`
  ), "");
}
function wt(t) {
  return g(D(t));
}
function ht(t) {
  if (!t)
    return "";
  if (w(t))
    return g(t);
  const r = G(bt(t));
  return g(K(r));
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
function ft(t, r, e, a, o) {
  t("<!--teleport start-->");
  const i = o.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[e] || (n[e] = []), c = l.length;
  let p;
  if (a)
    r(t), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = S();
    s("<!--teleport start anchor-->"), r(s), s("<!--teleport anchor-->"), p = d();
  }
  l.splice(c, 0, p), t("<!--teleport end-->");
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
function vt(t, r) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ut,
  setCurrentRenderingInstance: k,
  setupComponent: mt,
  renderComponentRoot: x,
  normalizeVNode: kt
} = _;
function S() {
  let t = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(e) {
      const a = w(e);
      if (t && a) {
        r[r.length - 1] += e;
        return;
      }
      r.push(e), t = a, (f(e) || C(e) && e.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function T(t, r = null, e) {
  const a = t.component = ut(
    t,
    r,
    null
  ), o = mt(
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
  }).catch(u).then(() => y(a, e)) : y(a, e);
}
function y(t, r) {
  const e = t.type, { getBuffer: a, push: o } = S();
  if (V(e)) {
    let i = x(t);
    if (!e.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    v(o, t.subTree = i, t, r);
  } else {
    (!t.render || t.render === u) && !t.ssrRender && !e.ssrRender && w(e.template) && (e.ssrRender = vt(e.template));
    const i = t.ssrRender || e.ssrRender;
    if (i) {
      let n = t.inheritAttrs !== !1 ? t.attrs : void 0, l = !1, c = t;
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
      const p = k(t);
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
        k(p);
      }
    } else t.render && t.render !== u ? v(
      o,
      t.subTree = x(t),
      t,
      r
    ) : (e.name || e.__file, o("<!---->"));
  }
  return a();
}
function v(t, r, e, a) {
  const { type: o, shapeFlag: i, children: n, dirs: l, props: c } = r;
  switch (l && (r.props = yt(r, c, l)), o) {
    case L:
      t(g(n));
      break;
    case U:
      t(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case j:
      t(n);
      break;
    case M:
      r.slotScopeIds && (a = (a ? a + " " : "") + r.slotScopeIds.join(" ")), t("<!--[-->"), m(
        t,
        n,
        e,
        a
      ), t("<!--]-->");
      break;
    default:
      i & 1 ? xt(t, r, e, a) : i & 6 ? t(T(r, e, a)) : i & 64 ? _t(t, r, e, a) : i & 128 && v(t, r.ssContent, e, a);
  }
}
function m(t, r, e, a) {
  for (let o = 0; o < r.length; o++)
    v(t, kt(r[o]), e, a);
}
function xt(t, r, e, a) {
  const o = r.type;
  let { props: i, children: n, shapeFlag: l, scopeId: c } = r, p = `<${o}`;
  i && (p += pt(i, o)), c && (p += ` ${c}`);
  let d = e, s = r;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (a && (p += ` ${a}`), t(p + ">"), !P(o)) {
    let h = !1;
    i && (i.innerHTML ? (h = !0, t(i.innerHTML)) : i.textContent ? (h = !0, t(g(i.textContent))) : o === "textarea" && i.value && (h = !0, t(g(i.value)))), h || (l & 8 ? t(g(n)) : l & 16 && m(
      t,
      n,
      e,
      a
    )), t(`</${o}>`);
  }
}
function yt(t, r, e) {
  const a = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const l = n(i, t);
      l && a.push(l);
    }
  }
  return O(r || {}, ...a);
}
function _t(t, r, e, a) {
  const o = r.props && r.props.to, i = r.props && r.props.disabled;
  if (!o)
    return [];
  if (!w(o))
    return [];
  ft(
    t,
    (n) => {
      m(
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
    return r + R(t);
  let a = r;
  for (let o = e; o < t.length; o += 1) {
    const i = t[o];
    if (w(i)) {
      a += i;
      continue;
    }
    if (f(i))
      return i.then((l) => (t[o] = l, b(t, a, o)));
    const n = b(i, a, 0);
    if (f(n))
      return n.then((l) => (t[o] = l, b(t, "", o)));
    a = n;
  }
  return a;
}
function $(t) {
  return b(t, "", 0);
}
function R(t) {
  let r = "";
  for (let e = 0; e < t.length; e++) {
    let a = t[e];
    w(a) ? r += a : r += R(a);
  }
  return r;
}
async function A(t, r = {}) {
  if (zt(t))
    return A(N({ render: () => t }), r);
  const e = E(t._component, t._props);
  e.appContext = t._context, t.provide(z, r);
  const a = await T(e), o = await $(a);
  if (await Ct(r), r.__watcherHandles)
    for (const i of r.__watcherHandles)
      i();
  return o;
}
async function Ct(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const r in t.__teleportBuffers)
      t.teleports[r] = await $(
        await Promise.all([t.__teleportBuffers[r]])
      );
  }
}
rt();
const St = ["id"], Tt = /* @__PURE__ */ et({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
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
st(ct);
const Rt = async (t) => ({
  set: async (r, e) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const o = lt(Tt, {
      _p: t,
      _$p: r,
      _$cb: e
    });
    return {
      r: `
                 <div>
                    ${await A(o)}
                    <div id="${t.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let l = "";
        return l = `
                .${t.f.name("text")} {
                   background: transparent;
                }
                `, l;
      })()
    };
  }
});
export {
  Rt as index,
  Rt as renderer
};
