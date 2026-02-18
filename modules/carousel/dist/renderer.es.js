import { m as B, s as _, l as E, p as N, q as z, v as u, N as b, w as j, x as g, F as V, S as M, C as U, y as H, T as L, z as w, A as C, B as O, D as P, E as F, G as I, n as D, g as G, H as W, I as K, J as q, K as J, L as Q, M as X, O as Y, P as Z, Q as tt, R as et, d as rt, c as at, b as it, U as ot } from "./runtime-dom.esm-bundler-CVxkd4vz.js";
function nt(t, e) {
  e === void 0 && (e = {});
  var r = e.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && a.firstChild ? a.insertBefore(i, a.firstChild) : a.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
}
const st = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-400:oklch(70.7% .022 261.325);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--container-xl:36rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--text-6xl:3.75rem;--text-6xl--line-height:1;--font-weight-medium:500;--font-weight-bold:700;--font-weight-extrabold:800;--tracking-wider:.05em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--drop-shadow-md:0 3px 3px #0000001f;--ease-out:cubic-bezier(0,0,.2,1);--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.right-2{right:calc(var(--spacing)*2)}.bottom-4{bottom:calc(var(--spacing)*4)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.z-20{z-index:20}.mx-auto{margin-inline:auto}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-2{margin-left:calc(var(--spacing)*2)}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.h-2{height:calc(var(--spacing)*2)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-\\[380px\\]{height:380px}.h-\\[500px\\]{height:500px}.h-full{height:100%}.w-2{width:calc(var(--spacing)*2)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-full{width:100%}.max-w-7xl{max-width:var(--container-7xl)}.max-w-md{max-width:var(--container-md)}.max-w-xl{max-width:var(--container-xl)}.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-4{--tw-translate-y:calc(var(--spacing)*4);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.overflow-hidden{overflow:hidden}.rounded-full{border-radius:3.40282e38px}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-white\\/20{border-color:#fff3}@supports (color:color-mix(in lab,red,red)){.border-white\\/20{border-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-white{background-color:var(--color-white)}.bg-white\\/30{background-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/30{background-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white)50%,transparent)}}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab,var(--color-black)80%,transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-transparent{--tw-gradient-via:transparent;--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-3{padding-block:calc(var(--spacing)*3)}.pb-12{padding-bottom:calc(var(--spacing)*12)}.font-sans{font-family:var(--font-sans)}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-extrabold{--tw-font-weight:var(--font-weight-extrabold);font-weight:var(--font-weight-extrabold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-black{color:var(--color-black)}.text-gray-100{color:var(--color-gray-100)}.text-gray-400{color:var(--color-gray-400)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.drop-shadow-md{--tw-drop-shadow-size:drop-shadow(0 3px 3px var(--tw-drop-shadow-color,#0000001f));--tw-drop-shadow:drop-shadow(var(--drop-shadow-md));filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.select-none{-webkit-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:flex:is(:where(.group):hover *){display:flex}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:bg-white\\/80:hover{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/80:hover{background-color:color-mix(in oklab,var(--color-white)80%,transparent)}}.hover\\:text-black:hover{color:var(--color-black)}}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}@media(min-width:40rem){.sm\\:h-\\[450px\\]{height:450px}.sm\\:text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}}@media(min-width:48rem){.md\\:right-4{right:calc(var(--spacing)*4)}.md\\:left-4{left:calc(var(--spacing)*4)}.md\\:mb-8{margin-bottom:calc(var(--spacing)*8)}.md\\:line-clamp-3{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.md\\:h-6{height:calc(var(--spacing)*6)}.md\\:h-\\[500px\\]{height:500px}.md\\:w-6{width:calc(var(--spacing)*6)}.md\\:justify-center{justify-content:center}.md\\:bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.md\\:from-black\\/70{--tw-gradient-from:#000000b3}@supports (color:color-mix(in lab,red,red)){.md\\:from-black\\/70{--tw-gradient-from:color-mix(in oklab,var(--color-black)70%,transparent)}}.md\\:from-black\\/70{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.md\\:via-black\\/20{--tw-gradient-via:#0003}@supports (color:color-mix(in lab,red,red)){.md\\:via-black\\/20{--tw-gradient-via:color-mix(in oklab,var(--color-black)20%,transparent)}}.md\\:via-black\\/20{--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.md\\:to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.md\\:p-3{padding:calc(var(--spacing)*3)}.md\\:px-16{padding-inline:calc(var(--spacing)*16)}.md\\:pb-0{padding-bottom:calc(var(--spacing)*0)}.md\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}}@media(min-width:64rem){.lg\\:h-\\[600px\\]{height:600px}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes pulse{50%{opacity:.5}}';
const lt = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function dt(t, e) {
  let r = "";
  for (let a in t) {
    if (lt(a) || I(a) || e === "textarea" && a === "value" || // force as property (not rendered in SSR)
    a.startsWith("."))
      continue;
    const i = t[a];
    a.startsWith("^") && (a = a.slice(1)), a === "class" || a === "className" ? r += ` class="${ct(i)}"` : a === "style" ? r += ` style="${wt(i)}"` : r += pt(a, i, e);
  }
  return r;
}
function pt(t, e, r) {
  if (!K(e))
    return "";
  const a = r && (r.indexOf("-") > 0 || q(r)) ? t : J[t] || t.toLowerCase();
  return Q(a) ? X(e) ? ` ${a}` : "" : Y(a) ? e === "" ? ` ${a}` : ` ${a}="${w(e)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${a}`
  ), "");
}
function ct(t) {
  return w(D(t));
}
function wt(t) {
  if (!t)
    return "";
  if (g(t))
    return w(t);
  const e = G(gt(t));
  return w(W(e));
}
function gt(t) {
  if (!C(t) && Z(t)) {
    const e = {};
    for (const r in t)
      r.startsWith(":--") ? e[r.slice(1)] = tt(t[r]) : e[r] = t[r];
    return e;
  }
  return t;
}
function ft(t, e, r, a, i) {
  t("<!--teleport start-->");
  const o = i.appContext.provides[z], n = o.__teleportBuffers || (o.__teleportBuffers = {}), s = n[r] || (n[r] = []), d = s.length;
  let c;
  if (a)
    e(t), c = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: p, push: l } = S();
    l("<!--teleport start anchor-->"), e(l), l("<!--teleport anchor-->"), c = p();
  }
  s.splice(d, 0, c), t("<!--teleport end-->");
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
function ht(t, e) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ut,
  setCurrentRenderingInstance: y,
  setupComponent: vt,
  renderComponentRoot: x,
  normalizeVNode: bt
} = _;
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
  const a = t.component = ut(
    t,
    e,
    null
  ), i = vt(
    a,
    !0
    /* isSSR */
  ), o = u(i);
  let n = a.sp;
  return o || n ? Promise.resolve(i).then(() => {
    if (o && (n = a.sp), n)
      return Promise.all(
        n.map((d) => d.call(a.proxy))
      );
  }).catch(b).then(() => k(a, r)) : k(a, r);
}
function k(t, e) {
  const r = t.type, { getBuffer: a, push: i } = S();
  if (j(r)) {
    let o = x(t);
    if (!r.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((o.props || (o.props = {}))[n] = "");
    v(i, t.subTree = o, t, e);
  } else {
    (!t.render || t.render === b) && !t.ssrRender && !r.ssrRender && g(r.template) && (r.ssrRender = ht(r.template));
    const o = t.ssrRender || r.ssrRender;
    if (o) {
      let n = t.inheritAttrs !== !1 ? t.attrs : void 0, s = !1, d = t;
      for (; ; ) {
        const p = d.vnode.scopeId;
        p && (s || (n = { ...n }, s = !0), n[p] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (e) {
        s || (n = { ...n });
        const p = e.trim().split(" ");
        for (let l = 0; l < p.length; l++)
          n[p[l]] = "";
      }
      const c = y(t);
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
        y(c);
      }
    } else t.render && t.render !== b ? v(
      i,
      t.subTree = x(t),
      t,
      e
    ) : (r.name || r.__file, i("<!---->"));
  }
  return a();
}
function v(t, e, r, a) {
  const { type: i, shapeFlag: o, children: n, dirs: s, props: d } = e;
  switch (s && (e.props = yt(e, d, s)), i) {
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
    case V:
      e.slotScopeIds && (a = (a ? a + " " : "") + e.slotScopeIds.join(" ")), t("<!--[-->"), m(
        t,
        n,
        r,
        a
      ), t("<!--]-->");
      break;
    default:
      o & 1 ? mt(t, e, r, a) : o & 6 ? t(T(e, r, a)) : o & 64 ? xt(t, e, r, a) : o & 128 && v(t, e.ssContent, r, a);
  }
}
function m(t, e, r, a) {
  for (let i = 0; i < e.length; i++)
    v(t, bt(e[i]), r, a);
}
function mt(t, e, r, a) {
  const i = e.type;
  let { props: o, children: n, shapeFlag: s, scopeId: d } = e, c = `<${i}`;
  o && (c += dt(o, i)), d && (c += ` ${d}`);
  let p = r, l = e;
  for (; p && l === p.subTree; )
    l = p.vnode, l.scopeId && (c += ` ${l.scopeId}`), p = p.parent;
  if (a && (c += ` ${a}`), t(c + ">"), !P(i)) {
    let f = !1;
    o && (o.innerHTML ? (f = !0, t(o.innerHTML)) : o.textContent ? (f = !0, t(w(o.textContent))) : i === "textarea" && o.value && (f = !0, t(w(o.value)))), f || (s & 8 ? t(w(n)) : s & 16 && m(
      t,
      n,
      r,
      a
    )), t(`</${i}>`);
  }
}
function yt(t, e, r) {
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
function xt(t, e, r, a) {
  const i = e.props && e.props.to, o = e.props && e.props.disabled;
  if (!i)
    return [];
  if (!g(i))
    return [];
  ft(
    t,
    (n) => {
      m(
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
const { isVNode: kt } = _;
function h(t, e, r) {
  if (!t.hasAsync)
    return e + A(t);
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
function A(t) {
  let e = "";
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    g(a) ? e += a : e += A(a);
  }
  return e;
}
async function $(t, e = {}) {
  if (kt(t))
    return $(E({ render: () => t }), e);
  const r = N(t._component, t._props);
  r.appContext = t._context, t.provide(z, e);
  const a = await T(r), i = await R(a);
  if (await _t(e), e.__watcherHandles)
    for (const o of e.__watcherHandles)
      o();
  return i;
}
async function _t(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const e in t.__teleportBuffers)
      t.teleports[e] = await R(
        await Promise.all([t.__teleportBuffers[e]])
      );
  }
}
et();
const zt = ["id"], Ct = /* @__PURE__ */ rt({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(t) {
    return (e, r) => (it(), at("div", {
      id: t._p.f.name("root"),
      class: "box"
    }, null, 8, zt));
  }
});
nt(st);
const Tt = async (t) => ({
  set: async (e, r) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const i = ot(Ct, {
      _p: t,
      _$p: e,
      _$cb: r
    });
    return {
      r: `
                 <div>
                    ${await $(i)}
                    <div id="${t.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let s = "";
        return s = `
                .${t.f.name("text")} {
                   background: transparent;
                }
                `, s;
      })()
    };
  }
});
export {
  Tt as index,
  Tt as renderer
};
