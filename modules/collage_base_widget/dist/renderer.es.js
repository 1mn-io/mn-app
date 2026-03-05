import { l as B, k as N, f as E, s as _, m as z, p as u, N as v, q as V, u as g, F as j, S as M, C as U, v as H, x as L, y as w, z as O, A as P, B as C, D as F, E as I, n as D, G, H as W, I as K, J as q, K as J, L as Q, M as Y, O as X, P as Z, Q as tt, R as et, d as rt, c as at, b as it, t as ot, a as nt, U as st } from "./runtime-dom.esm-bundler-CvtXE6HH.js";
function lt(t, e) {
  e === void 0 && (e = {});
  var r = e.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && a.firstChild ? a.insertBefore(i, a.firstChild) : a.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
}
const ct = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-700:oklch(50.5% .213 27.518);--color-pink-500:oklch(65.6% .241 354.308);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--font-weight-bold:700;--tracking-widest:.1em;--radius-lg:.5rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--ease-out:cubic-bezier(0, 0, .2, 1);--blur-md:12px;--blur-xl:24px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.top-0{top:calc(var(--spacing) * 0)}.bottom-2{bottom:calc(var(--spacing) * 2)}.bottom-3{bottom:calc(var(--spacing) * 3)}.bottom-5{bottom:calc(var(--spacing) * 5)}.left-0{left:calc(var(--spacing) * 0)}.left-3{left:calc(var(--spacing) * 3)}.left-5{left:calc(var(--spacing) * 5)}.z-10{z-index:10}.z-50{z-index:50}.mx-auto{margin-inline:auto}.flex{display:flex}.hidden{display:none}.h-1{height:calc(var(--spacing) * 1)}.h-48{height:calc(var(--spacing) * 48)}.h-\\[22rem\\]{height:22rem}.h-\\[28rem\\]{height:28rem}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-\\[calc\\(40\\%-0\\.375rem\\)\\]{width:calc(40% - .375rem)}.w-\\[calc\\(60\\%-0\\.375rem\\)\\]{width:calc(60% - .375rem)}.w-full{width:100%}.max-w-480{max-width:calc(var(--spacing) * 480)}.min-w-max{min-width:max-content}.flex-1{flex:1}.origin-center{transform-origin:50%}.scale-x-0{--tw-scale-x:0%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-x-100{--tw-scale-x:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-black{background-color:var(--color-black)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-red-700{background-color:var(--color-red-700)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/80{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.bg-white\\/80{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.bg-white\\/95{background-color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.bg-white\\/95{background-color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.bg-linear-to-t{--tw-gradient-position:to top}@supports (background-image:linear-gradient(in lab,red,red)){.bg-linear-to-t{--tw-gradient-position:to top in oklab}}.bg-linear-to-t{background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/50{--tw-gradient-from:#00000080}@supports (color:color-mix(in lab,red,red)){.from-black\\/50{--tw-gradient-from:color-mix(in oklab, var(--color-black) 50%, transparent)}}.from-black\\/50{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-transparent{--tw-gradient-via:transparent;--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.font-sans{font-family:var(--font-sans)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-black{color:var(--color-black)}.text-gray-400{color:var(--color-gray-400)}.text-gray-900{color:var(--color-gray-900)}.uppercase{text-transform:uppercase}.opacity-60{opacity:.6}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-xl{--tw-backdrop-blur:blur(var(--blur-xl));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-700{--tw-duration:.7s;transition-duration:.7s}.ease-\\[cubic-bezier\\(0\\.25\\,1\\,0\\.5\\,1\\)\\]{--tw-ease:cubic-bezier(.25,1,.5,1);transition-timing-function:cubic-bezier(.25,1,.5,1)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}@media(hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:scale-x-50:is(:where(.group):hover *){--tw-scale-x:50%;scale:var(--tw-scale-x) var(--tw-scale-y)}.group-hover\\:bg-black:is(:where(.group):hover *){background-color:var(--color-black)}.group-hover\\:bg-gray-300:is(:where(.group):hover *){background-color:var(--color-gray-300)}.group-hover\\:text-white:is(:where(.group):hover *){color:var(--color-white)}}.selection\\:bg-pink-500 ::selection{background-color:var(--color-pink-500)}.selection\\:bg-pink-500::selection{background-color:var(--color-pink-500)}.selection\\:text-white ::selection{color:var(--color-white)}.selection\\:text-white::selection{color:var(--color-white)}@media(hover:hover){.hover\\:-translate-y-1:hover{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:shadow-2xl:hover{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-pink-500:focus-visible{--tw-ring-color:var(--color-pink-500)}@media(min-width:40rem){.sm\\:h-56{height:calc(var(--spacing) * 56)}}@media(min-width:48rem){.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:min-w-0{min-width:calc(var(--spacing) * 0)}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-between{justify-content:space-between}.md\\:justify-center{justify-content:center}.md\\:gap-6{gap:calc(var(--spacing) * 6)}.md\\:gap-12{gap:calc(var(--spacing) * 12)}.md\\:px-8{padding-inline:calc(var(--spacing) * 8)}.md\\:py-10{padding-block:calc(var(--spacing) * 10)}.md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}}.dark\\:border-gray-800:where(.dark,.dark *){border-color:var(--color-gray-800)}.dark\\:bg-black:where(.dark,.dark *){background-color:var(--color-black)}.dark\\:bg-black\\/80:where(.dark,.dark *){background-color:#000c}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-black\\/80:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-black) 80%,transparent)}}.dark\\:bg-gray-900:where(.dark,.dark *){background-color:var(--color-gray-900)}.dark\\:bg-white:where(.dark,.dark *){background-color:var(--color-white)}.dark\\:text-gray-100:where(.dark,.dark *){color:var(--color-gray-100)}.dark\\:text-white:where(.dark,.dark *){color:var(--color-white)}@media(hover:hover){.dark\\:group-hover\\:bg-white:where(.dark,.dark *):is(:where(.group):hover *){background-color:var(--color-white)}.dark\\:group-hover\\:text-black:where(.dark,.dark *):is(:where(.group):hover *){color:var(--color-black)}.dark\\:hover\\:text-gray-300:where(.dark,.dark *):hover{color:var(--color-gray-300)}}}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.stagger-move,.stagger-enter-active,.stagger-leave-active{transition:all .5s cubic-bezier(.55,0,.1,1)}.stagger-enter-from,.stagger-leave-to{opacity:0;transform:scale(.9)translateY(20px)}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}';
const dt = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pt(t, e) {
  let r = "";
  for (let a in t) {
    if (dt(a) || F(a) || e === "textarea" && a === "value" || // force as property (not rendered in SSR)
    a.startsWith("."))
      continue;
    const i = t[a];
    a.startsWith("^") && (a = a.slice(1)), a === "class" ? r += ` class="${gt(i)}"` : a === "style" ? r += ` style="${ft(i)}"` : a === "className" ? i != null && (r += ` class="${w(String(i))}"`) : r += wt(a, i, e);
  }
  return r;
}
function wt(t, e, r) {
  if (!K(e))
    return "";
  const a = r && (r.indexOf("-") > 0 || q(r)) ? t : J[t] || t.toLowerCase();
  return Q(a) ? Y(e) ? ` ${a}` : "" : X(a) ? e === "" ? ` ${a}` : ` ${a}="${w(e)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${a}`
  ), "");
}
function gt(t) {
  return w(D(t));
}
function ft(t) {
  if (!t)
    return "";
  if (g(t))
    return w(t);
  const e = G(ht(t));
  return w(W(e));
}
function ht(t) {
  if (!C(t) && Z(t)) {
    const e = {};
    for (const r in t)
      r.startsWith(":--") ? e[r.slice(1)] = tt(t[r]) : e[r] = t[r];
    return e;
  }
  return t;
}
function ut(t, e, r, a, i) {
  t("<!--teleport start-->");
  const o = i.appContext.provides[_], n = o.__teleportBuffers || (o.__teleportBuffers = {}), s = n[r] || (n[r] = []), c = s.length;
  let p;
  if (a)
    e(t), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = S();
    l("<!--teleport start anchor-->"), e(l), l("<!--teleport anchor-->"), p = d();
  }
  s.splice(c, 0, p), t("<!--teleport end-->");
}
{
  const t = B(), e = (r, a) => {
    let i;
    return (i = t[r]) || (i = t[r] = []), i.push(a), (o) => {
      i.length > 1 ? i.forEach((n) => n(o)) : i[0](o);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (r) => r
  ), e(
    "__VUE_SSR_SETTERS__",
    (r) => r
  );
}
function bt(t, e) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: vt,
  setCurrentRenderingInstance: m,
  setupComponent: yt,
  renderComponentRoot: k,
  normalizeVNode: mt
} = z;
function S() {
  let t = !1;
  const e = [];
  return {
    getBuffer() {
      return e;
    },
    push(r) {
      const a = g(r);
      if (t && a) {
        e[e.length - 1] += r;
        return;
      }
      e.push(r), t = a, (u(r) || C(r) && r.hasAsync) && (e.hasAsync = !0);
    }
  };
}
function T(t, e = null, r) {
  const a = t.component = vt(
    t,
    e,
    null
  ), i = yt(
    a,
    !0
    /* isSSR */
  ), o = u(i);
  let n = a.sp;
  return o || n ? Promise.resolve(i).then(() => {
    if (o && (n = a.sp), n)
      return Promise.all(
        n.map((c) => c.call(a.proxy))
      );
  }).catch(v).then(() => x(a, r)) : x(a, r);
}
function x(t, e) {
  const r = t.type, { getBuffer: a, push: i } = S();
  if (V(r)) {
    let o = k(t);
    if (!r.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((o.props || (o.props = {}))[n] = "");
    b(i, t.subTree = o, t, e);
  } else {
    (!t.render || t.render === v) && !t.ssrRender && !r.ssrRender && g(r.template) && (r.ssrRender = bt(r.template));
    const o = t.ssrRender || r.ssrRender;
    if (o) {
      let n = t.inheritAttrs !== !1 ? t.attrs : void 0, s = !1, c = t;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (s || (n = { ...n }, s = !0), n[d] = "");
        const l = c.parent;
        if (l && l.subTree && l.subTree === c.vnode)
          c = l;
        else
          break;
      }
      if (e) {
        s || (n = { ...n });
        const d = e.trim().split(" ");
        for (let l = 0; l < d.length; l++)
          n[d[l]] = "";
      }
      const p = m(t);
      try {
        o(
          t.proxy,
          i,
          t,
          n,
          // compiler-optimized bindings
          t.props,
          t.setupState,
          t.data,
          t.ctx
        );
      } finally {
        m(p);
      }
    } else t.render && t.render !== v ? b(
      i,
      t.subTree = k(t),
      t,
      e
    ) : (r.name || r.__file, i("<!---->"));
  }
  return a();
}
function b(t, e, r, a) {
  const { type: i, shapeFlag: o, children: n, dirs: s, props: c } = e;
  switch (s && (e.props = xt(e, c, s)), i) {
    case L:
      t(w(n));
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
      e.slotScopeIds && (a = (a ? a + " " : "") + e.slotScopeIds.join(" ")), t("<!--[-->"), y(
        t,
        n,
        r,
        a
      ), t("<!--]-->");
      break;
    default:
      o & 1 ? kt(t, e, r, a) : o & 6 ? t(T(e, r, a)) : o & 64 ? _t(t, e, r, a) : o & 128 && b(t, e.ssContent, r, a);
  }
}
function y(t, e, r, a) {
  for (let i = 0; i < e.length; i++)
    b(t, mt(e[i]), r, a);
}
function kt(t, e, r, a) {
  const i = e.type;
  let { props: o, children: n, shapeFlag: s, scopeId: c } = e, p = `<${i}`;
  o && (p += pt(o, i)), c && (p += ` ${c}`);
  let d = r, l = e;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (p += ` ${l.scopeId}`), d = d.parent;
  if (a && (p += ` ${a}`), t(p + ">"), !P(i)) {
    let f = !1;
    o && (o.innerHTML ? (f = !0, t(o.innerHTML)) : o.textContent ? (f = !0, t(w(o.textContent))) : i === "textarea" && o.value && (f = !0, t(w(o.value)))), f || (s & 8 ? t(w(n)) : s & 16 && y(
      t,
      n,
      r,
      a
    )), t(`</${i}>`);
  }
}
function xt(t, e, r) {
  const a = [];
  for (let i = 0; i < r.length; i++) {
    const o = r[i], {
      dir: { getSSRProps: n }
    } = o;
    if (n) {
      const s = n(o, t);
      s && a.push(s);
    }
  }
  return O(e || {}, ...a);
}
function _t(t, e, r, a) {
  const i = e.props && e.props.to, o = e.props && e.props.disabled;
  if (!i)
    return [];
  if (!g(i))
    return [];
  ut(
    t,
    (n) => {
      y(
        n,
        e.children,
        r,
        a
      );
    },
    i,
    o || o === "",
    r
  );
}
const { isVNode: zt } = z;
function h(t, e, r) {
  if (!t.hasAsync)
    return e + $(t);
  let a = e;
  for (let i = r; i < t.length; i += 1) {
    const o = t[i];
    if (g(o)) {
      a += o;
      continue;
    }
    if (u(o))
      return o.then((s) => (t[i] = s, h(t, a, i)));
    const n = h(o, a, 0);
    if (u(n))
      return n.then((s) => (t[i] = s, h(t, "", i)));
    a = n;
  }
  return a;
}
function R(t) {
  return h(t, "", 0);
}
function $(t) {
  let e = "";
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    g(a) ? e += a : e += $(a);
  }
  return e;
}
async function A(t, e = {}) {
  if (zt(t))
    return A(N({ render: () => t }), e);
  const r = E(t._component, t._props);
  r.appContext = t._context, t.provide(_, e);
  const a = await T(r), i = await R(a);
  if (await Ct(e), e.__watcherHandles)
    for (const o of e.__watcherHandles)
      o();
  return i;
}
async function Ct(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const e in t.__teleportBuffers)
      t.teleports[e] = await R(
        await Promise.all([t.__teleportBuffers[e]])
      );
  }
}
et();
const St = ["id"], Tt = /* @__PURE__ */ rt({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    return (e, r) => (nt(), at("div", {
      id: t._p.f.name("root"),
      class: "box"
    }, [
      it("p", null, ot(t._$p.data.curr.data.data), 1)
    ], 8, St));
  }
});
lt(ct);
const $t = async (t) => ({
  set: async (e) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const a = st(Tt, {
      _p: t,
      _$p: e
    });
    return {
      r: `
                 <div>
                    ${await A(a)}
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
  $t as index,
  $t as renderer
};
