import { q as B, p as N, g as E, s as z, u as _, x as v, N as u, y as V, z as g, F as M, S as j, C as U, A as H, B as L, D as w, E as O, G as P, H as C, I as F, J as I, n as D, h as W, K as G, L as K, M as q, O as J, P as Q, Q as X, R as Y, U as Z, V as tt, W as rt, d as et, c as at, b as ot, t as it, a as nt, X as st } from "./runtime-dom.esm-bundler-CLBiBu8r.js";
function lt(t, r) {
  r === void 0 && (r = {});
  var e = r.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", e === "top" && a.firstChild ? a.insertBefore(o, a.firstChild) : a.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t));
  }
}
const dt = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-content:"";--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--color-white:#fff;--spacing:.25rem;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-black:900;--tracking-tighter:-.05em;--tracking-wide:.025em;--tracking-wider:.05em;--leading-tight:1.25;--radius-lg:.5rem;--radius-xl:.75rem;--drop-shadow-sm:0 1px 2px #00000026;--animate-spin:spin 1s linear infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing) * 0)}.-top-1{top:calc(var(--spacing) * -1)}.top-0{top:calc(var(--spacing) * 0)}.top-1\\/2{top:50%}.top-\\[50px\\]{top:50px}.top-full{top:100%}.-right-2{right:calc(var(--spacing) * -2)}.right-0{right:calc(var(--spacing) * 0)}.right-2\\.5{right:calc(var(--spacing) * 2.5)}.right-5{right:calc(var(--spacing) * 5)}.left-0{left:calc(var(--spacing) * 0)}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[60\\]{z-index:60}.z-\\[100\\]{z-index:100}.z-\\[101\\]{z-index:101}.z-\\[999\\]{z-index:999}.order-2{order:2}.order-3{order:3}.mx-auto{margin-inline:auto}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.-ml-2{margin-left:calc(var(--spacing) * -2)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-block{display:inline-block}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-4\\.5{height:calc(var(--spacing) * 4.5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-11{height:calc(var(--spacing) * 11)}.h-12{height:calc(var(--spacing) * 12)}.h-\\[2px\\]{height:2px}.h-\\[18px\\]{height:18px}.h-\\[19px\\]{height:19px}.h-\\[22px\\]{height:22px}.h-\\[26px\\]{height:26px}.h-\\[50px\\]{height:50px}.h-full{height:100%}.max-h-\\[420px\\]{max-height:420px}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-4\\.5{width:calc(var(--spacing) * 4.5)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-11{width:calc(var(--spacing) * 11)}.w-12{width:calc(var(--spacing) * 12)}.w-15{width:calc(var(--spacing) * 15)}.w-36{width:calc(var(--spacing) * 36)}.w-\\[18px\\]{width:18px}.w-\\[19px\\]{width:19px}.w-\\[22px\\]{width:22px}.w-\\[26px\\]{width:26px}.w-\\[340px\\]{width:340px}.w-full{width:100%}.max-w-\\[1440px\\]{max-width:1440px}.min-w-\\[18px\\]{min-width:18px}.min-w-\\[64px\\]{min-width:64px}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.-rotate-45{rotate:-45deg}.-rotate-90{rotate:-90deg}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-3\\.5{gap:calc(var(--spacing) * 3.5)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-7{gap:calc(var(--spacing) * 7)}.gap-\\[4\\.5px\\]{gap:4.5px}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-gray-50>:not(:last-child)){border-color:var(--color-gray-50)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded-\\[25px\\]{border-radius:25px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-b-\\[25px\\]{border-bottom-right-radius:25px;border-bottom-left-radius:25px}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-\\[\\#481173\\]{border-color:#481173}.border-gray-50{border-color:var(--color-gray-50)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.border-white\\/30{border-color:color-mix(in oklab,var(--color-white) 30%,transparent)}}.border-white\\/40{border-color:#fff6}@supports (color:color-mix(in lab,red,red)){.border-white\\/40{border-color:color-mix(in oklab,var(--color-white) 40%,transparent)}}.border-white\\/50{border-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.border-white\\/50{border-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.border-t-\\[\\#cb11ab\\]{border-top-color:#cb11ab}.bg-\\[\\#f6f6f9\\]{background-color:#f6f6f9}.bg-\\[\\#f6f6f9\\]\\/50{background-color:#f6f6f980}.bg-\\[\\#f44336\\]{background-color:#f44336}.bg-black\\/60{background-color:#0009}@supports (color:color-mix(in lab,red,red)){.bg-black\\/60{background-color:color-mix(in oklab,var(--color-black) 60%,transparent)}}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/20{background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/20{background-color:color-mix(in oklab,var(--color-white) 20%,transparent)}}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-\\[radial-gradient\\(circle_at_15\\%_50\\%\\,_\\#cb11ab_0\\%\\,_\\#6c1887_35\\%\\,_\\#481173_100\\%\\)\\]{background-image:radial-gradient(circle at 15%,#cb11ab,#6c1887 35%,#481173)}.from-\\[\\#f6f6f9\\]{--tw-gradient-from:#f6f6f9;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-\\[\\#ffffff\\]{--tw-gradient-to:#fff;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-3\\.5{padding:calc(var(--spacing) * 3.5)}.p-8{padding:calc(var(--spacing) * 8)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-6{padding-inline:calc(var(--spacing) * 6)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-5{padding-block:calc(var(--spacing) * 5)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pr-10{padding-right:calc(var(--spacing) * 10)}.pr-14{padding-right:calc(var(--spacing) * 14)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-6{padding-left:calc(var(--spacing) * 6)}.text-center{text-align:center}.text-left{text-align:left}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14\\.5px\\]{font-size:14.5px}.text-\\[14px\\]{font-size:14px}.text-\\[15\\.5px\\]{font-size:15.5px}.text-\\[15px\\]{font-size:15px}.text-\\[26px\\]{font-size:26px}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-black{--tw-font-weight:var(--font-weight-black);font-weight:var(--font-weight-black)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tighter{--tw-tracking:var(--tracking-tighter);letter-spacing:var(--tracking-tighter)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-\\[\\#481173\\]{color:#481173}.text-\\[\\#cb11ab\\]{color:#cb11ab}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-800{color:var(--color-gray-800)}.text-white{color:var(--color-white)}.text-white\\/90{color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.text-white\\/90{color:color-mix(in oklab,var(--color-white) 90%,transparent)}}.text-white\\/95{color:#fffffff2}@supports (color:color-mix(in lab,red,red)){.text-white\\/95{color:color-mix(in oklab,var(--color-white) 95%,transparent)}}.uppercase{text-transform:uppercase}.italic{font-style:italic}.opacity-0{opacity:0}.opacity-30{opacity:.3}.opacity-60{opacity:.6}.opacity-90{opacity:.9}.opacity-95{opacity:.95}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.drop-shadow-sm{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#00000026));--tw-drop-shadow:drop-shadow(var(--drop-shadow-sm));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.group-hover\\:text-\\[\\#cb11ab\\]:is(:where(.group):hover *){color:#cb11ab}.group-hover\\:text-white:is(:where(.group):hover *){color:var(--color-white)}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.placeholder\\:text-white\\/80::placeholder{color:#fffc}@supports (color:color-mix(in lab,red,red)){.placeholder\\:text-white\\/80::placeholder{color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:bottom-\\[-8px\\]:after{content:var(--tw-content);bottom:-8px}.after\\:left-0:after{content:var(--tw-content);left:calc(var(--spacing) * 0)}.after\\:h-0\\.5:after{content:var(--tw-content);height:calc(var(--spacing) * .5)}.after\\:w-full:after{content:var(--tw-content);width:100%}.after\\:bg-\\[\\#ffd900\\]:after{content:var(--tw-content);background-color:#ffd900}.after\\:opacity-0:after{content:var(--tw-content);opacity:0}.after\\:transition-opacity:after{content:var(--tw-content);transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y)}.hover\\:border-white:hover{border-color:var(--color-white)}.hover\\:border-white\\/60:hover{border-color:#fff9}@supports (color:color-mix(in lab,red,red)){.hover\\:border-white\\/60:hover{border-color:color-mix(in oklab,var(--color-white) 60%,transparent)}}.hover\\:bg-\\[\\#f6f6f9\\]:hover{background-color:#f6f6f9}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-white\\/15:hover{background-color:#ffffff26}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/15:hover{background-color:color-mix(in oklab,var(--color-white) 15%,transparent)}}.hover\\:bg-gradient-to-r:hover{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.hover\\:from-\\[\\#f6f6f9\\]:hover{--tw-gradient-from:#f6f6f9;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:to-transparent:hover{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.hover\\:text-\\[\\#cb11ab\\]:hover{color:#cb11ab}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-white:hover{color:var(--color-white)}.hover\\:opacity-80:hover{opacity:.8}.hover\\:opacity-90:hover{opacity:.9}.hover\\:opacity-100:hover{opacity:1}.hover\\:after\\:opacity-100:hover:after{content:var(--tw-content);opacity:1}}.focus\\:bg-white:focus{background-color:var(--color-white)}.focus\\:text-gray-800:focus{color:var(--color-gray-800)}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-\\[\\#cb11ab\\]:focus{--tw-ring-color:#cb11ab}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.active\\:bg-\\[\\#f6f6f9\\]:active{background-color:#f6f6f9}@media(min-width:48rem){.md\\:w-17{width:calc(var(--spacing) * 17)}}@media(min-width:64rem){.lg\\:order-none{order:0}.lg\\:mt-0{margin-top:calc(var(--spacing) * 0)}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:flex-1{flex:1}.lg\\:gap-5{gap:calc(var(--spacing) * 5)}.lg\\:gap-6{gap:calc(var(--spacing) * 6)}.lg\\:rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.lg\\:bg-white{background-color:var(--color-white)}.lg\\:pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.lg\\:text-gray-400{color:var(--color-gray-400)}.lg\\:text-gray-800{color:var(--color-gray-800)}.lg\\:shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.lg\\:placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}@media(hover:hover){.lg\\:hover\\:text-\\[\\#cb11ab\\]:hover{color:#cb11ab}}.lg\\:focus\\:border-transparent:focus{border-color:#0000}.lg\\:focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.lg\\:focus\\:ring-\\[\\#cb11ab\\]:focus{--tw-ring-color:#cb11ab}}.dark\\:border-gray-700:where(.dark,.dark *){border-color:var(--color-gray-700)}.dark\\:border-gray-800:where(.dark,.dark *){border-color:var(--color-gray-800)}.dark\\:bg-\\[\\#1a1a1a\\]:where(.dark,.dark *){background-color:#1a1a1a}.dark\\:bg-\\[\\#2b2b2b\\]:where(.dark,.dark *){background-color:#2b2b2b}.dark\\:from-\\[\\#252525\\]:where(.dark,.dark *){--tw-gradient-from:#252525;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:to-\\[\\#1f1f1f\\]:where(.dark,.dark *){--tw-gradient-to:#1f1f1f;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:text-\\[\\#cb11ab\\]:where(.dark,.dark *){color:#cb11ab}.dark\\:text-gray-200:where(.dark,.dark *){color:var(--color-gray-200)}@media(hover:hover){.dark\\:hover\\:bg-\\[\\#2a2a2a\\]:where(.dark,.dark *):hover{background-color:#2a2a2a}.dark\\:hover\\:bg-\\[\\#3d3d3d\\]:where(.dark,.dark *):hover{background-color:#3d3d3d}.dark\\:hover\\:from-\\[\\#2a2a2a\\]:where(.dark,.dark *):hover{--tw-gradient-from:#2a2a2a;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.dark\\:hover\\:to-transparent:where(.dark,.dark *):hover{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}';
const ct = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pt(t, r) {
  let e = "";
  for (let a in t) {
    if (ct(a) || F(a) || r === "textarea" && a === "value" || // force as property (not rendered in SSR)
    a.startsWith("."))
      continue;
    const o = t[a];
    a.startsWith("^") && (a = a.slice(1)), a === "class" ? e += ` class="${gt(o)}"` : a === "style" ? e += ` style="${ft(o)}"` : a === "className" ? o != null && (e += ` class="${w(String(o))}"`) : e += wt(a, o, r);
  }
  return e;
}
function wt(t, r, e) {
  if (!K(r))
    return "";
  const a = e && (e.indexOf("-") > 0 || q(e)) ? t : J[t] || t.toLowerCase();
  return Q(a) ? X(r) ? ` ${a}` : "" : Y(a) ? r === "" ? ` ${a}` : ` ${a}="${w(r)}"` : (console.warn(
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
  const r = W(ht(t));
  return w(G(r));
}
function ht(t) {
  if (!C(t) && Z(t)) {
    const r = {};
    for (const e in t)
      e.startsWith(":--") ? r[e.slice(1)] = tt(t[e]) : r[e] = t[e];
    return r;
  }
  return t;
}
function vt(t, r, e, a, o) {
  t("<!--teleport start-->");
  const i = o.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), s = n[e] || (n[e] = []), d = s.length;
  let p;
  if (a)
    r(t), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: l } = S();
    l("<!--teleport start anchor-->"), r(l), l("<!--teleport anchor-->"), p = c();
  }
  s.splice(d, 0, p), t("<!--teleport end-->");
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
function bt(t, r) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ut,
  setCurrentRenderingInstance: x,
  setupComponent: yt,
  renderComponentRoot: m,
  normalizeVNode: xt
} = _;
function S() {
  let t = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(e) {
      const a = g(e);
      if (t && a) {
        r[r.length - 1] += e;
        return;
      }
      r.push(e), t = a, (v(e) || C(e) && e.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function T(t, r = null, e) {
  const a = t.component = ut(
    t,
    r,
    null
  ), o = yt(
    a,
    !0
    /* isSSR */
  ), i = v(o);
  let n = a.sp;
  return i || n ? Promise.resolve(o).then(() => {
    if (i && (n = a.sp), n)
      return Promise.all(
        n.map((d) => d.call(a.proxy))
      );
  }).catch(u).then(() => k(a, e)) : k(a, e);
}
function k(t, r) {
  const e = t.type, { getBuffer: a, push: o } = S();
  if (V(e)) {
    let i = m(t);
    if (!e.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    b(o, t.subTree = i, t, r);
  } else {
    (!t.render || t.render === u) && !t.ssrRender && !e.ssrRender && g(e.template) && (e.ssrRender = bt(e.template));
    const i = t.ssrRender || e.ssrRender;
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
      const p = x(t);
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
        x(p);
      }
    } else t.render && t.render !== u ? b(
      o,
      t.subTree = m(t),
      t,
      r
    ) : (e.name || e.__file, o("<!---->"));
  }
  return a();
}
function b(t, r, e, a) {
  const { type: o, shapeFlag: i, children: n, dirs: s, props: d } = r;
  switch (s && (r.props = kt(r, d, s)), o) {
    case L:
      t(w(n));
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
      r.slotScopeIds && (a = (a ? a + " " : "") + r.slotScopeIds.join(" ")), t("<!--[-->"), y(
        t,
        n,
        e,
        a
      ), t("<!--]-->");
      break;
    default:
      i & 1 ? mt(t, r, e, a) : i & 6 ? t(T(r, e, a)) : i & 64 ? zt(t, r, e, a) : i & 128 && b(t, r.ssContent, e, a);
  }
}
function y(t, r, e, a) {
  for (let o = 0; o < r.length; o++)
    b(t, xt(r[o]), e, a);
}
function mt(t, r, e, a) {
  const o = r.type;
  let { props: i, children: n, shapeFlag: s, scopeId: d } = r, p = `<${o}`;
  i && (p += pt(i, o)), d && (p += ` ${d}`);
  let c = e, l = r;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (p += ` ${l.scopeId}`), c = c.parent;
  if (a && (p += ` ${a}`), t(p + ">"), !P(o)) {
    let f = !1;
    i && (i.innerHTML ? (f = !0, t(i.innerHTML)) : i.textContent ? (f = !0, t(w(i.textContent))) : o === "textarea" && i.value && (f = !0, t(w(i.value)))), f || (s & 8 ? t(w(n)) : s & 16 && y(
      t,
      n,
      e,
      a
    )), t(`</${o}>`);
  }
}
function kt(t, r, e) {
  const a = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const s = n(i, t);
      s && a.push(s);
    }
  }
  return O(r || {}, ...a);
}
function zt(t, r, e, a) {
  const o = r.props && r.props.to, i = r.props && r.props.disabled;
  if (!o)
    return [];
  if (!g(o))
    return [];
  vt(
    t,
    (n) => {
      y(
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
const { isVNode: _t } = _;
function h(t, r, e) {
  if (!t.hasAsync)
    return r + $(t);
  let a = r;
  for (let o = e; o < t.length; o += 1) {
    const i = t[o];
    if (g(i)) {
      a += i;
      continue;
    }
    if (v(i))
      return i.then((s) => (t[o] = s, h(t, a, o)));
    const n = h(i, a, 0);
    if (v(n))
      return n.then((s) => (t[o] = s, h(t, "", o)));
    a = n;
  }
  return a;
}
function R(t) {
  return h(t, "", 0);
}
function $(t) {
  let r = "";
  for (let e = 0; e < t.length; e++) {
    let a = t[e];
    g(a) ? r += a : r += $(a);
  }
  return r;
}
async function A(t, r = {}) {
  if (_t(t))
    return A(N({ render: () => t }), r);
  const e = E(t._component, t._props);
  e.appContext = t._context, t.provide(z, r);
  const a = await T(e), o = await R(a);
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
    return (r, e) => (nt(), at("div", {
      id: t._p.f.name("root"),
      class: "box"
    }, [
      ot("p", null, it(t._$p.data.curr.data.data), 1)
    ], 8, St));
  }
});
lt(dt);
const $t = async (t) => ({
  set: async (r) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const a = st(Tt, {
      _p: t,
      _$p: r
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
