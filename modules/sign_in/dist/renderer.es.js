import { q as B, s as _, p as N, j as E, u as z, x as v, N as y, y as V, z as u, F as j, S as M, C as U, A as H, B as L, D as p, E as C, G as O, H as P, I as F, J as I, n as D, K as G, L as K, M as W, O as q, P as J, Q, R as X, U as Y, V as Z, W as rr, X as er, d as tr, b as or, e as ar, t as ir, o as nr, Y as lr } from "./runtime-dom.esm-bundler-BvynFkjI.js";
function sr(r, e) {
  e === void 0 && (e = {});
  var t = e.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", t === "top" && o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a), a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r));
  }
}
const cr = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-300:oklch(80.8% .114 19.571);--color-red-400:oklch(70.4% .191 22.216);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-red-900:oklch(39.6% .141 25.723);--color-green-50:oklch(98.2% .018 155.826);--color-green-200:oklch(92.5% .084 155.995);--color-green-300:oklch(87.1% .15 154.449);--color-green-400:oklch(79.2% .209 151.711);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-green-900:oklch(39.3% .095 152.535);--color-indigo-600:oklch(51.1% .262 276.966);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-600:oklch(55.8% .288 302.321);--color-purple-700:oklch(49.6% .265 301.924);--color-purple-800:oklch(43.8% .218 303.724);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-gray-950:oklch(13% .028 261.692);--color-neutral-50:oklch(98.5% 0 0);--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wider:.05em;--radius-xs:.125rem;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.top-4{top:calc(var(--spacing)*4)}.right-4{right:calc(var(--spacing)*4)}.bottom-10{bottom:calc(var(--spacing)*10)}.left-1\\/2{left:50%}.z-50{z-index:50}.m-0{margin:calc(var(--spacing)*0)}.mx-auto{margin-inline:auto}.my-8{margin-block:calc(var(--spacing)*8)}.ms-2{margin-inline-start:calc(var(--spacing)*2)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-8{margin-top:calc(var(--spacing)*8)}.mt-10{margin-top:calc(var(--spacing)*10)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-5{margin-right:calc(var(--spacing)*5)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.h-0\\.5{height:calc(var(--spacing)*.5)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-10{height:calc(var(--spacing)*10)}.h-full{height:100%}.min-h-full{min-height:100%}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-11{width:calc(var(--spacing)*11)}.w-auto{width:auto}.w-full{width:100%}.max-w-sm{max-width:var(--container-sm)}.flex-1{flex:1}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-1{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-6{--tw-translate-x:calc(var(--spacing)*6);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-2{--tw-translate-y:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xs{border-radius:var(--radius-xs)}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-700{border-color:var(--color-gray-700)}.border-green-200{border-color:var(--color-green-200)}.border-red-200{border-color:var(--color-red-200)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-gray-700{background-color:var(--color-gray-700)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-950{background-color:var(--color-gray-950)}.bg-green-50{background-color:var(--color-green-50)}.bg-purple-600{background-color:var(--color-purple-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-white{background-color:var(--color-white)}.stroke-gray-800{stroke:var(--color-gray-800)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-12{padding-block:calc(var(--spacing)*12)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\/9{font-size:var(--text-2xl);line-height:calc(var(--spacing)*9)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\/6{font-size:var(--text-sm);line-height:calc(var(--spacing)*6)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[1em\\]{--tw-tracking:1em;letter-spacing:1em}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-gray-100{color:var(--color-gray-100)}.text-gray-200{color:var(--color-gray-200)}.text-gray-300{color:var(--color-gray-300)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-green-400{color:var(--color-green-400)}.text-green-700{color:var(--color-green-700)}.text-green-800{color:var(--color-green-800)}.text-purple-600{color:var(--color-purple-600)}.text-purple-700{color:var(--color-purple-700)}.text-red-400{color:var(--color-red-400)}.text-red-700{color:var(--color-red-700)}.text-red-800{color:var(--color-red-800)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.accent-gray-800{accent-color:var(--color-gray-800)}.accent-purple-600{accent-color:var(--color-purple-600)}.accent-white{accent-color:var(--color-white)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-100{opacity:1}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.-outline-offset-1{outline-offset:-1px}.outline-gray-300{outline-color:var(--color-gray-300)}.outline-gray-700{outline-color:var(--color-gray-700)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-100{--tw-duration:.1s;transition-duration:.1s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.placeholder\\:text-gray-400::placeholder{color:var(--color-gray-400)}.placeholder\\:text-gray-500::placeholder{color:var(--color-gray-500)}@media(hover:hover){.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-200:hover{background-color:var(--color-gray-200)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-gray-800:hover{background-color:var(--color-gray-800)}.hover\\:bg-neutral-50:hover{background-color:var(--color-neutral-50)}.hover\\:bg-purple-700:hover{background-color:var(--color-purple-700)}.hover\\:text-gray-300:hover{color:var(--color-gray-300)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-900:hover{color:var(--color-gray-900)}.hover\\:text-purple-800:hover{color:var(--color-purple-800)}.hover\\:text-white:hover{color:var(--color-white)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-gray-900:focus{--tw-ring-color:var(--color-gray-900)}.focus\\:ring-purple-600:focus{--tw-ring-color:var(--color-purple-600)}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:-outline-offset-2:focus{outline-offset:-2px}.focus\\:outline-gray-900:focus{outline-color:var(--color-gray-900)}.focus\\:outline-purple-600:focus{outline-color:var(--color-purple-600)}.focus\\:outline-white:focus{outline-color:var(--color-white)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-transparent:focus-visible{--tw-ring-color:transparent}.focus-visible\\:outline:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-gray-900:focus-visible{outline-color:var(--color-gray-900)}.focus-visible\\:outline-indigo-600:focus-visible{outline-color:var(--color-indigo-600)}.focus-visible\\:outline-purple-600:focus-visible{outline-color:var(--color-purple-600)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-gray-100:disabled{background-color:var(--color-gray-100)}.disabled\\:text-gray-400:disabled{color:var(--color-gray-400)}.disabled\\:opacity-50:disabled{opacity:.5}@media(min-width:40rem){.sm\\:mx-auto{margin-inline:auto}.sm\\:w-full{width:100%}.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:translate-x-2{--tw-translate-x:calc(var(--spacing)*2);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:translate-y-0{--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.sm\\:text-sm\\/6{font-size:var(--text-sm);line-height:calc(var(--spacing)*6)}}@media(min-width:64rem){.lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}.dark\\:border-gray-700:where(.dark,.dark *){border-color:var(--color-gray-700)}.dark\\:border-green-700:where(.dark,.dark *){border-color:var(--color-green-700)}.dark\\:border-red-800:where(.dark,.dark *){border-color:var(--color-red-800)}.dark\\:bg-gray-800:where(.dark,.dark *){background-color:var(--color-gray-800)}.dark\\:bg-gray-900:where(.dark,.dark *){background-color:var(--color-gray-900)}.dark\\:bg-green-900\\/30:where(.dark,.dark *){background-color:#0d542b4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-green-900\\/30:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-green-900)30%,transparent)}}.dark\\:bg-purple-700:where(.dark,.dark *){background-color:var(--color-purple-700)}.dark\\:bg-red-900\\/30:where(.dark,.dark *){background-color:#82181a4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-900\\/30:where(.dark,.dark *){background-color:color-mix(in oklab,var(--color-red-900)30%,transparent)}}.dark\\:stroke-gray-200:where(.dark,.dark *){stroke:var(--color-gray-200)}.dark\\:text-gray-100:where(.dark,.dark *){color:var(--color-gray-100)}.dark\\:text-gray-200:where(.dark,.dark *){color:var(--color-gray-200)}.dark\\:text-gray-300:where(.dark,.dark *){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark,.dark *){color:var(--color-gray-400)}.dark\\:text-gray-500:where(.dark,.dark *){color:var(--color-gray-500)}.dark\\:text-green-200:where(.dark,.dark *){color:var(--color-green-200)}.dark\\:text-green-300:where(.dark,.dark *){color:var(--color-green-300)}.dark\\:text-purple-300:where(.dark,.dark *){color:var(--color-purple-300)}.dark\\:text-purple-400:where(.dark,.dark *){color:var(--color-purple-400)}.dark\\:text-purple-500:where(.dark,.dark *){color:var(--color-purple-500)}.dark\\:text-red-200:where(.dark,.dark *){color:var(--color-red-200)}.dark\\:text-red-300:where(.dark,.dark *){color:var(--color-red-300)}.dark\\:outline-gray-700:where(.dark,.dark *){outline-color:var(--color-gray-700)}@media(hover:hover){.dark\\:hover\\:bg-gray-700:where(.dark,.dark *):hover{background-color:var(--color-gray-700)}.dark\\:hover\\:bg-purple-600:where(.dark,.dark *):hover{background-color:var(--color-purple-600)}.dark\\:hover\\:text-purple-300:where(.dark,.dark *):hover{color:var(--color-purple-300)}}.dark\\:focus\\:ring-purple-500:where(.dark,.dark *):focus{--tw-ring-color:var(--color-purple-500)}.dark\\:focus\\:outline-purple-500:where(.dark,.dark *):focus,.dark\\:focus-visible\\:outline-purple-500:where(.dark,.dark *):focus-visible{outline-color:var(--color-purple-500)}.dark\\:disabled\\:text-gray-500:where(.dark,.dark *):disabled{color:var(--color-gray-500)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}';
const dr = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function gr(r, e) {
  let t = "";
  for (const o in r) {
    if (dr(o) || I(o) || e === "textarea" && o === "value")
      continue;
    const a = r[o];
    o === "class" ? t += ` class="${ur(a)}"` : o === "style" ? t += ` style="${hr(a)}"` : o === "className" ? t += ` class="${String(a)}"` : t += pr(o, a, e);
  }
  return t;
}
function pr(r, e, t) {
  if (!W(e))
    return "";
  const o = t && (t.indexOf("-") > 0 || q(t)) ? r : J[r] || r.toLowerCase();
  return Q(o) ? X(e) ? ` ${o}` : "" : Y(o) ? e === "" ? ` ${o}` : ` ${o}="${p(e)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function ur(r) {
  return p(D(r));
}
function hr(r) {
  if (!r)
    return "";
  if (u(r))
    return p(r);
  const e = G(fr(r));
  return p(K(e));
}
function fr(r) {
  if (!C(r) && Z(r)) {
    const e = {};
    for (const t in r)
      t.startsWith(":--") ? e[t.slice(1)] = rr(r[t]) : e[t] = r[t];
    return e;
  }
  return r;
}
function vr(r, e, t, o, a) {
  r("<!--teleport start-->");
  const i = a.appContext.provides[z], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[t] || (n[t] = []), c = l.length;
  let g;
  if (o)
    e(r), g = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = S();
    s("<!--teleport start anchor-->"), e(s), s("<!--teleport anchor-->"), g = d();
  }
  l.splice(c, 0, g), r("<!--teleport end-->");
}
{
  const r = B(), e = (t, o) => {
    let a;
    return (a = r[t]) || (a = r[t] = []), a.push(o), (i) => {
      a.length > 1 ? a.forEach((n) => n(i)) : a[0](i);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (t) => t
  ), e(
    "__VUE_SSR_SETTERS__",
    (t) => t
  );
}
function wr(r, e) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: yr,
  setCurrentRenderingInstance: m,
  setupComponent: br,
  renderComponentRoot: k,
  normalizeVNode: mr
} = _;
function S() {
  let r = !1;
  const e = [];
  return {
    getBuffer() {
      return e;
    },
    push(t) {
      const o = u(t);
      if (r && o) {
        e[e.length - 1] += t;
        return;
      }
      e.push(t), r = o, (v(t) || C(t) && t.hasAsync) && (e.hasAsync = !0);
    }
  };
}
function T(r, e = null, t) {
  const o = r.component = yr(
    r,
    e,
    null
  ), a = br(
    o,
    !0
    /* isSSR */
  ), i = v(a);
  let n = o.sp;
  return i || n ? Promise.resolve(a).then(() => {
    if (i && (n = o.sp), n)
      return Promise.all(
        n.map((c) => c.call(o.proxy))
      );
  }).catch(y).then(() => x(o, t)) : x(o, t);
}
function x(r, e) {
  const t = r.type, { getBuffer: o, push: a } = S();
  if (V(t)) {
    let i = k(r);
    if (!t.props)
      for (const n in r.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    w(a, r.subTree = i, r, e);
  } else {
    (!r.render || r.render === y) && !r.ssrRender && !t.ssrRender && u(t.template) && (t.ssrRender = wr(t.template));
    const i = r.ssrRender || t.ssrRender;
    if (i) {
      let n = r.inheritAttrs !== !1 ? r.attrs : void 0, l = !1, c = r;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (l || (n = { ...n }, l = !0), n[d] = "");
        const s = c.parent;
        if (s && s.subTree && s.subTree === c.vnode)
          c = s;
        else
          break;
      }
      if (e) {
        l || (n = { ...n });
        const d = e.trim().split(" ");
        for (let s = 0; s < d.length; s++)
          n[d[s]] = "";
      }
      const g = m(r);
      try {
        i(
          r.proxy,
          a,
          r,
          n,
          // compiler-optimized bindings
          r.props,
          r.setupState,
          r.data,
          r.ctx
        );
      } finally {
        m(g);
      }
    } else r.render && r.render !== y ? w(
      a,
      r.subTree = k(r),
      r,
      e
    ) : (t.name || t.__file, a("<!---->"));
  }
  return o();
}
function w(r, e, t, o) {
  const { type: a, shapeFlag: i, children: n, dirs: l, props: c } = e;
  switch (l && (e.props = xr(e, c, l)), a) {
    case L:
      r(p(n));
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
      e.slotScopeIds && (o = (o ? o + " " : "") + e.slotScopeIds.join(" ")), r("<!--[-->"), b(
        r,
        n,
        t,
        o
      ), r("<!--]-->");
      break;
    default:
      i & 1 ? kr(r, e, t, o) : i & 6 ? r(T(e, t, o)) : i & 64 ? _r(r, e, t, o) : i & 128 && w(r, e.ssContent, t, o);
  }
}
function b(r, e, t, o) {
  for (let a = 0; a < e.length; a++)
    w(r, mr(e[a]), t, o);
}
function kr(r, e, t, o) {
  const a = e.type;
  let { props: i, children: n, shapeFlag: l, scopeId: c } = e, g = `<${a}`;
  i && (g += gr(i, a)), c && (g += ` ${c}`);
  let d = t, s = e;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (g += ` ${s.scopeId}`), d = d.parent;
  if (o && (g += ` ${o}`), r(g + ">"), !P(a)) {
    let h = !1;
    i && (i.innerHTML ? (h = !0, r(i.innerHTML)) : i.textContent ? (h = !0, r(p(i.textContent))) : a === "textarea" && i.value && (h = !0, r(p(i.value)))), h || (l & 8 ? r(p(n)) : l & 16 && b(
      r,
      n,
      t,
      o
    )), r(`</${a}>`);
  }
}
function xr(r, e, t) {
  const o = [];
  for (let a = 0; a < t.length; a++) {
    const i = t[a], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const l = n(i, r);
      l && o.push(l);
    }
  }
  return O(e || {}, ...o);
}
function _r(r, e, t, o) {
  const a = e.props && e.props.to, i = e.props && e.props.disabled;
  if (!a)
    return [];
  if (!u(a))
    return [];
  vr(
    r,
    (n) => {
      b(
        n,
        e.children,
        t,
        o
      );
    },
    a,
    i || i === "",
    t
  );
}
const { isVNode: zr } = _;
function f(r, e, t) {
  if (!r.hasAsync)
    return e + R(r);
  let o = e;
  for (let a = t; a < r.length; a += 1) {
    const i = r[a];
    if (u(i)) {
      o += i;
      continue;
    }
    if (v(i))
      return i.then((l) => (r[a] = l, f(r, o, a)));
    const n = f(i, o, 0);
    if (v(n))
      return n.then((l) => (r[a] = l, f(r, "", a)));
    o = n;
  }
  return o;
}
function $(r) {
  return f(r, "", 0);
}
function R(r) {
  let e = "";
  for (let t = 0; t < r.length; t++) {
    let o = r[t];
    u(o) ? e += o : e += R(o);
  }
  return e;
}
async function A(r, e = {}) {
  if (zr(r))
    return A(N({ render: () => r }), e);
  const t = E(r._component, r._props);
  t.appContext = r._context, r.provide(z, e);
  const o = await T(t), a = await $(o);
  if (await Cr(e), e.__watcherHandles)
    for (const i of e.__watcherHandles)
      i();
  return a;
}
async function Cr(r) {
  if (r.__teleportBuffers) {
    r.teleports = r.teleports || {};
    for (const e in r.__teleportBuffers)
      r.teleports[e] = await $(
        await Promise.all([r.__teleportBuffers[e]])
      );
  }
}
er();
const Sr = ["id"], Tr = /* @__PURE__ */ tr({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(r) {
    return (e, t) => (nr(), or("div", {
      id: r._p.f.name("root"),
      class: "box"
    }, [
      ar("p", null, ir(r._$p.data.curr.data.data), 1)
    ], 8, Sr));
  }
});
sr(cr);
const Rr = async (r) => ({
  set: async (e, t) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const a = lr(Tr, {
      _p: r,
      _$p: e,
      _$cb: t
    });
    return {
      r: `
                 <div>
                    ${await A(a)}
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
