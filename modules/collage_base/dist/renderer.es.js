import { m as B, l as N, e as E, s as _, p as z, q as h, N as b, u as V, v as w, F as j, S as M, C as U, x as H, y as L, z as g, A as O, B as P, D as C, E as F, G as I, n as D, H as G, I as W, J as K, K as q, L as J, M as Q, O as Y, P as X, Q as Z, R as tt, U as rt, d as et, c as at, b as ot, t as it, a as nt, V as st } from "./runtime-dom.esm-bundler-DiAqTU8G.js";
function lt(t, r) {
  r === void 0 && (r = {});
  var a = r.insertAt;
  if (!(typeof document > "u")) {
    var e = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", a === "top" && e.firstChild ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t));
  }
}
const dt = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-amber-50:oklch(98.7% .022 95.277);--color-yellow-100:oklch(97.3% .071 103.193);--color-emerald-50:oklch(97.9% .021 166.113);--color-emerald-100:oklch(95% .052 163.051);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-indigo-50:oklch(96.2% .018 272.314);--color-violet-100:oklch(94.3% .029 294.588);--color-purple-50:oklch(97.7% .014 308.299);--color-purple-100:oklch(94.6% .033 307.174);--color-pink-500:oklch(65.6% .241 354.308);--color-rose-50:oklch(96.9% .015 12.422);--color-rose-100:oklch(94.1% .03 12.58);--color-slate-50:oklch(98.4% .003 247.858);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-bold:700;--tracking-widest:.1em;--radius-lg:.5rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--ease-out:cubic-bezier(0,0,.2,1);--animate-bounce:bounce 1s infinite;--blur-md:12px;--blur-xl:24px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.bottom-2{bottom:calc(var(--spacing)*2)}.bottom-3{bottom:calc(var(--spacing)*3)}.bottom-5{bottom:calc(var(--spacing)*5)}.left-0{left:calc(var(--spacing)*0)}.left-3{left:calc(var(--spacing)*3)}.left-5{left:calc(var(--spacing)*5)}.z-10{z-index:10}.z-50{z-index:50}.mx-auto{margin-inline:auto}.mt-10{margin-top:calc(var(--spacing)*10)}.block{display:block}.flex{display:flex}.hidden{display:none}.inline{display:inline}.h-1{height:calc(var(--spacing)*1)}.h-3{height:calc(var(--spacing)*3)}.h-24{height:calc(var(--spacing)*24)}.h-48{height:calc(var(--spacing)*48)}.h-\\[22rem\\]{height:22rem}.h-\\[28rem\\]{height:28rem}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-3{width:calc(var(--spacing)*3)}.w-\\[calc\\(40\\%-0\\.375rem\\)\\]{width:calc(40% - .375rem)}.w-\\[calc\\(60\\%-0\\.375rem\\)\\]{width:calc(60% - .375rem)}.w-full{width:100%}.max-w-\\[1920px\\]{max-width:1920px}.min-w-max{min-width:max-content}.flex-1{flex:1}.origin-center{transform-origin:50%}.scale-x-0{--tw-scale-x:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-x-100{--tw-scale-x:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-bounce{animation:var(--animate-bounce)}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-start{align-items:flex-start}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-black{background-color:var(--color-black)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-pink-500{background-color:var(--color-pink-500)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white)95%,transparent)}}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-amber-50{--tw-gradient-from:var(--color-amber-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-black\\/50{--tw-gradient-from:#00000080}@supports (color:color-mix(in lab,red,red)){.from-black\\/50{--tw-gradient-from:color-mix(in oklab,var(--color-black)50%,transparent)}}.from-black\\/50{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-blue-50{--tw-gradient-from:var(--color-blue-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-emerald-50{--tw-gradient-from:var(--color-emerald-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-indigo-50{--tw-gradient-from:var(--color-indigo-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-orange-50{--tw-gradient-from:var(--color-orange-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-purple-50{--tw-gradient-from:var(--color-purple-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-rose-50{--tw-gradient-from:var(--color-rose-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-slate-50{--tw-gradient-from:var(--color-slate-50);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-transparent{--tw-gradient-via:transparent;--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-blue-100{--tw-gradient-to:var(--color-blue-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-emerald-100{--tw-gradient-to:var(--color-emerald-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-gray-100{--tw-gradient-to:var(--color-gray-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-orange-100{--tw-gradient-to:var(--color-orange-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-purple-100{--tw-gradient-to:var(--color-purple-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-rose-100{--tw-gradient-to:var(--color-rose-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-violet-100{--tw-gradient-to:var(--color-violet-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-yellow-100{--tw-gradient-to:var(--color-yellow-100);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.px-1{padding-inline:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-4{padding-block:calc(var(--spacing)*4)}.font-sans{font-family:var(--font-sans)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-black{color:var(--color-black)}.text-gray-400{color:var(--color-gray-400)}.text-gray-900{color:var(--color-gray-900)}.uppercase{text-transform:uppercase}.opacity-60{opacity:.6}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-blur-xl{--tw-backdrop-blur:blur(var(--blur-xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.delay-100{transition-delay:.1s}.delay-200{transition-delay:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-700{--tw-duration:.7s;transition-duration:.7s}.ease-\\[cubic-bezier\\(0\\.25\\,1\\,0\\.5\\,1\\)\\]{--tw-ease:cubic-bezier(.25,1,.5,1);transition-timing-function:cubic-bezier(.25,1,.5,1)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}@media(hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.group-hover\\:scale-x-50:is(:where(.group):hover *){--tw-scale-x:50%;scale:var(--tw-scale-x)var(--tw-scale-y)}.group-hover\\:bg-black:is(:where(.group):hover *){background-color:var(--color-black)}.group-hover\\:bg-gray-300:is(:where(.group):hover *){background-color:var(--color-gray-300)}.group-hover\\:text-white:is(:where(.group):hover *){color:var(--color-white)}}.selection\\:bg-pink-500 ::selection{background-color:var(--color-pink-500)}.selection\\:bg-pink-500::selection{background-color:var(--color-pink-500)}.selection\\:text-white ::selection{color:var(--color-white)}.selection\\:text-white::selection{color:var(--color-white)}@media(hover:hover){.hover\\:-translate-y-1:hover{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:shadow-2xl:hover{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-pink-500:focus-visible{--tw-ring-color:var(--color-pink-500)}@media(min-width:40rem){.sm\\:h-56{height:calc(var(--spacing)*56)}}@media(min-width:48rem){.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:min-w-0{min-width:calc(var(--spacing)*0)}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}.md\\:justify-center{justify-content:center}.md\\:gap-6{gap:calc(var(--spacing)*6)}.md\\:gap-12{gap:calc(var(--spacing)*12)}.md\\:px-8{padding-inline:calc(var(--spacing)*8)}.md\\:py-10{padding-block:calc(var(--spacing)*10)}.md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}}.dark\\:border-gray-800:where(.dark,.dark *){border-color:var(--color-gray-800)}.dark\\:bg-black:where(.dark,.dark *){background-color:var(--color-black)}.dark\\:bg-black\\/80:where(.dark,.dark *){background-color:#000c}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-black\\/80:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-black)80%,transparent)}}.dark\\:bg-gray-900:where(.dark,.dark *){background-color:var(--color-gray-900)}.dark\\:bg-white:where(.dark,.dark *){background-color:var(--color-white)}.dark\\:text-gray-100:where(.dark,.dark *){color:var(--color-gray-100)}.dark\\:text-white:where(.dark,.dark *){color:var(--color-white)}@media(hover:hover){.dark\\:group-hover\\:bg-white:where(.dark,.dark *):is(:where(.group):hover *){background-color:var(--color-white)}.dark\\:group-hover\\:text-black:where(.dark,.dark *):is(:where(.group):hover *){color:var(--color-black)}.dark\\:hover\\:text-gray-300:where(.dark,.dark *):hover{color:var(--color-gray-300)}}}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}';
const ct = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pt(t, r) {
  let a = "";
  for (let e in t) {
    if (ct(e) || F(e) || r === "textarea" && e === "value" || // force as property (not rendered in SSR)
    e.startsWith("."))
      continue;
    const o = t[e];
    e.startsWith("^") && (e = e.slice(1)), e === "class" || e === "className" ? a += ` class="${wt(o)}"` : e === "style" ? a += ` style="${ft(o)}"` : a += gt(e, o, r);
  }
  return a;
}
function gt(t, r, a) {
  if (!K(r))
    return "";
  const e = a && (a.indexOf("-") > 0 || q(a)) ? t : J[t] || t.toLowerCase();
  return Q(e) ? Y(r) ? ` ${e}` : "" : X(e) ? r === "" ? ` ${e}` : ` ${e}="${g(r)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${e}`
  ), "");
}
function wt(t) {
  return g(D(t));
}
function ft(t) {
  if (!t)
    return "";
  if (w(t))
    return g(t);
  const r = G(vt(t));
  return g(W(r));
}
function vt(t) {
  if (!C(t) && Z(t)) {
    const r = {};
    for (const a in t)
      a.startsWith(":--") ? r[a.slice(1)] = tt(t[a]) : r[a] = t[a];
    return r;
  }
  return t;
}
function ht(t, r, a, e, o) {
  t("<!--teleport start-->");
  const i = o.appContext.provides[_], n = i.__teleportBuffers || (i.__teleportBuffers = {}), s = n[a] || (n[a] = []), d = s.length;
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
    let o;
    return (o = t[a]) || (o = t[a] = []), o.push(e), (i) => {
      o.length > 1 ? o.forEach((n) => n(i)) : o[0](i);
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
  createComponentInstance: bt,
  setCurrentRenderingInstance: y,
  setupComponent: mt,
  renderComponentRoot: k,
  normalizeVNode: yt
} = z;
function S() {
  let t = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(a) {
      const e = w(a);
      if (t && e) {
        r[r.length - 1] += a;
        return;
      }
      r.push(a), t = e, (h(a) || C(a) && a.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function T(t, r = null, a) {
  const e = t.component = bt(
    t,
    r,
    null
  ), o = mt(
    e,
    !0
    /* isSSR */
  ), i = h(o);
  let n = e.sp;
  return i || n ? Promise.resolve(o).then(() => {
    if (i && (n = e.sp), n)
      return Promise.all(
        n.map((d) => d.call(e.proxy))
      );
  }).catch(b).then(() => x(e, a)) : x(e, a);
}
function x(t, r) {
  const a = t.type, { getBuffer: e, push: o } = S();
  if (V(a)) {
    let i = k(t);
    if (!a.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    u(o, t.subTree = i, t, r);
  } else {
    (!t.render || t.render === b) && !t.ssrRender && !a.ssrRender && w(a.template) && (a.ssrRender = ut(a.template));
    const i = t.ssrRender || a.ssrRender;
    if (i) {
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
      const p = y(t);
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
        y(p);
      }
    } else t.render && t.render !== b ? u(
      o,
      t.subTree = k(t),
      t,
      r
    ) : (a.name || a.__file, o("<!---->"));
  }
  return e();
}
function u(t, r, a, e) {
  const { type: o, shapeFlag: i, children: n, dirs: s, props: d } = r;
  switch (s && (r.props = xt(r, d, s)), o) {
    case L:
      t(g(n));
      break;
    case U:
      t(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case M:
      t(n);
      break;
    case j:
      r.slotScopeIds && (e = (e ? e + " " : "") + r.slotScopeIds.join(" ")), t("<!--[-->"), m(
        t,
        n,
        a,
        e
      ), t("<!--]-->");
      break;
    default:
      i & 1 ? kt(t, r, a, e) : i & 6 ? t(T(r, a, e)) : i & 64 ? _t(t, r, a, e) : i & 128 && u(t, r.ssContent, a, e);
  }
}
function m(t, r, a, e) {
  for (let o = 0; o < r.length; o++)
    u(t, yt(r[o]), a, e);
}
function kt(t, r, a, e) {
  const o = r.type;
  let { props: i, children: n, shapeFlag: s, scopeId: d } = r, p = `<${o}`;
  i && (p += pt(i, o)), d && (p += ` ${d}`);
  let c = a, l = r;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (p += ` ${l.scopeId}`), c = c.parent;
  if (e && (p += ` ${e}`), t(p + ">"), !P(o)) {
    let f = !1;
    i && (i.innerHTML ? (f = !0, t(i.innerHTML)) : i.textContent ? (f = !0, t(g(i.textContent))) : o === "textarea" && i.value && (f = !0, t(g(i.value)))), f || (s & 8 ? t(g(n)) : s & 16 && m(
      t,
      n,
      a,
      e
    )), t(`</${o}>`);
  }
}
function xt(t, r, a) {
  const e = [];
  for (let o = 0; o < a.length; o++) {
    const i = a[o], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const s = n(i, t);
      s && e.push(s);
    }
  }
  return O(r || {}, ...e);
}
function _t(t, r, a, e) {
  const o = r.props && r.props.to, i = r.props && r.props.disabled;
  if (!o)
    return [];
  if (!w(o))
    return [];
  ht(
    t,
    (n) => {
      m(
        n,
        r.children,
        a,
        e
      );
    },
    o,
    i || i === "",
    a
  );
}
const { isVNode: zt } = z;
function v(t, r, a) {
  if (!t.hasAsync)
    return r + A(t);
  let e = r;
  for (let o = a; o < t.length; o += 1) {
    const i = t[o];
    if (w(i)) {
      e += i;
      continue;
    }
    if (h(i))
      return i.then((s) => (t[o] = s, v(t, e, o)));
    const n = v(i, e, 0);
    if (h(n))
      return n.then((s) => (t[o] = s, v(t, "", o)));
    e = n;
  }
  return e;
}
function R(t) {
  return v(t, "", 0);
}
function A(t) {
  let r = "";
  for (let a = 0; a < t.length; a++) {
    let e = t[a];
    w(e) ? r += e : r += A(e);
  }
  return r;
}
async function $(t, r = {}) {
  if (zt(t))
    return $(N({ render: () => t }), r);
  const a = E(t._component, t._props);
  a.appContext = t._context, t.provide(_, r);
  const e = await T(a), o = await R(e);
  if (await Ct(r), r.__watcherHandles)
    for (const i of r.__watcherHandles)
      i();
  return o;
}
async function Ct(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const r in t.__teleportBuffers)
      t.teleports[r] = await R(
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
      ot("p", null, it(t._$p.data.curr.data.data), 1)
    ], 8, St));
  }
});
lt(dt);
const At = async (t) => ({
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
  At as index,
  At as renderer
};
