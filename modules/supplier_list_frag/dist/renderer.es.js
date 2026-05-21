const { ssrUtils: k, initDirectivesForSSR: O, createApp: D, createVNode: P, ssrContextKey: E, warn: m, Fragment: G, Static: I, Comment: U, Text: H, mergeProps: W, defineComponent: q, openBlock: K, createElementBlock: Z, createElementVNode: J, toDisplayString: Q, createSSRApp: X } = window.Vue;
function Y(r, t) {
  t === void 0 && (t = {});
  var e = t.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", e === "top" && o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a), a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r));
  }
}
const rr = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-amber-400:oklch(82.8% .189 84.429);--color-amber-500:oklch(76.9% .188 70.08);--color-yellow-500:oklch(79.5% .184 86.047);--color-emerald-400:oklch(76.5% .177 163.223);--color-emerald-500:oklch(69.6% .17 162.48);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-500:oklch(62.7% .265 303.9);--color-rose-400:oklch(71.2% .194 13.428);--color-rose-500:oklch(64.5% .246 16.439);--color-rose-600:oklch(58.6% .253 17.585);--color-rose-800:oklch(45.5% .188 13.697);--color-rose-950:oklch(27.1% .105 12.094);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-slate-900:oklch(20.8% .042 265.755);--color-slate-950:oklch(12.9% .042 264.695);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wider:.05em;--radius-lg:.5rem;--radius-xl:.75rem;--animate-spin:spin 1s linear infinite;--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.top-1\\/2{top:50%}.left-3{left:calc(var(--spacing) * 3)}.mx-auto{margin-inline:auto}.my-4{margin-block:calc(var(--spacing) * 4)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.ml-auto{margin-left:auto}.flex{display:flex}.grid{display:grid}.h-4{height:calc(var(--spacing) * 4)}.h-6{height:calc(var(--spacing) * 6)}.max-h-\\[300px\\]{max-height:300px}.min-h-screen{min-height:100vh}.w-4{width:calc(var(--spacing) * 4)}.w-12{width:calc(var(--spacing) * 12)}.w-\\[80px\\]{width:80px}.w-full{width:100%}.max-w-full{max-width:100%}.max-w-md{max-width:var(--container-md)}.flex-1{flex:1}.translate-x-0{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-6{--tw-translate-x:calc(var(--spacing) * 6);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.list-disc{list-style-type:disc}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-none{--tw-border-style:none;border-style:none}.border-amber-500\\/20{border-color:#f99c0033}@supports (color:color-mix(in lab,red,red)){.border-amber-500\\/20{border-color:color-mix(in oklab,var(--color-amber-500) 20%,transparent)}}.border-emerald-500\\/20{border-color:#00bb7f33}@supports (color:color-mix(in lab,red,red)){.border-emerald-500\\/20{border-color:color-mix(in oklab,var(--color-emerald-500) 20%,transparent)}}.border-purple-500\\/20{border-color:#ac4bff33}@supports (color:color-mix(in lab,red,red)){.border-purple-500\\/20{border-color:color-mix(in oklab,var(--color-purple-500) 20%,transparent)}}.border-rose-500\\/20{border-color:#ff235733}@supports (color:color-mix(in lab,red,red)){.border-rose-500\\/20{border-color:color-mix(in oklab,var(--color-rose-500) 20%,transparent)}}.border-rose-800\\/40{border-color:#a3003766}@supports (color:color-mix(in lab,red,red)){.border-rose-800\\/40{border-color:color-mix(in oklab,var(--color-rose-800) 40%,transparent)}}.border-slate-300\\/50{border-color:#cad5e280}@supports (color:color-mix(in lab,red,red)){.border-slate-300\\/50{border-color:color-mix(in oklab,var(--color-slate-300) 50%,transparent)}}.border-slate-500\\/20{border-color:#62748e33}@supports (color:color-mix(in lab,red,red)){.border-slate-500\\/20{border-color:color-mix(in oklab,var(--color-slate-500) 20%,transparent)}}.border-slate-700{border-color:var(--color-slate-700)}.border-slate-800{border-color:var(--color-slate-800)}.border-slate-800\\/80{border-color:#1d293dcc}@supports (color:color-mix(in lab,red,red)){.border-slate-800\\/80{border-color:color-mix(in oklab,var(--color-slate-800) 80%,transparent)}}.bg-\\[\\#0f172a\\]{background-color:#0f172a}.bg-amber-500\\/10{background-color:#f99c001a}@supports (color:color-mix(in lab,red,red)){.bg-amber-500\\/10{background-color:color-mix(in oklab,var(--color-amber-500) 10%,transparent)}}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black) 40%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-emerald-500\\/10{background-color:#00bb7f1a}@supports (color:color-mix(in lab,red,red)){.bg-emerald-500\\/10{background-color:color-mix(in oklab,var(--color-emerald-500) 10%,transparent)}}.bg-gray-900{background-color:var(--color-gray-900)}.bg-purple-500\\/10{background-color:#ac4bff1a}@supports (color:color-mix(in lab,red,red)){.bg-purple-500\\/10{background-color:color-mix(in oklab,var(--color-purple-500) 10%,transparent)}}.bg-rose-500\\/10{background-color:#ff23571a}@supports (color:color-mix(in lab,red,red)){.bg-rose-500\\/10{background-color:color-mix(in oklab,var(--color-rose-500) 10%,transparent)}}.bg-rose-600{background-color:var(--color-rose-600)}.bg-rose-950\\/20{background-color:#4d021833}@supports (color:color-mix(in lab,red,red)){.bg-rose-950\\/20{background-color:color-mix(in oklab,var(--color-rose-950) 20%,transparent)}}.bg-slate-200{background-color:var(--color-slate-200)}.bg-slate-500\\/10{background-color:#62748e1a}@supports (color:color-mix(in lab,red,red)){.bg-slate-500\\/10{background-color:color-mix(in oklab,var(--color-slate-500) 10%,transparent)}}.bg-slate-800{background-color:var(--color-slate-800)}.bg-slate-900{background-color:var(--color-slate-900)}.bg-slate-900\\/10{background-color:#0f172b1a}@supports (color:color-mix(in lab,red,red)){.bg-slate-900\\/10{background-color:color-mix(in oklab,var(--color-slate-900) 10%,transparent)}}.bg-slate-900\\/40{background-color:#0f172b66}@supports (color:color-mix(in lab,red,red)){.bg-slate-900\\/40{background-color:color-mix(in oklab,var(--color-slate-900) 40%,transparent)}}.bg-slate-900\\/50{background-color:#0f172b80}@supports (color:color-mix(in lab,red,red)){.bg-slate-900\\/50{background-color:color-mix(in oklab,var(--color-slate-900) 50%,transparent)}}.bg-slate-950{background-color:var(--color-slate-950)}.bg-slate-950\\/40{background-color:#02061866}@supports (color:color-mix(in lab,red,red)){.bg-slate-950\\/40{background-color:color-mix(in oklab,var(--color-slate-950) 40%,transparent)}}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing) * 1)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-9{padding-left:calc(var(--spacing) * 9)}.text-center{text-align:center}.text-right{text-align:right}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-amber-400{color:var(--color-amber-400)}.text-blue-400{color:var(--color-blue-400)}.text-blue-600{color:var(--color-blue-600)}.text-emerald-400{color:var(--color-emerald-400)}.text-emerald-500{color:var(--color-emerald-500)}.text-gray-100{color:var(--color-gray-100)}.text-purple-400{color:var(--color-purple-400)}.text-rose-400{color:var(--color-rose-400)}.text-slate-100{color:var(--color-slate-100)}.text-slate-200{color:var(--color-slate-200)}.text-slate-300{color:var(--color-slate-300)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-800{color:var(--color-slate-800)}.text-yellow-500{color:var(--color-yellow-500)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.placeholder-slate-500::placeholder{color:var(--color-slate-500)}.opacity-60{opacity:.6}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}.select-none{-webkit-user-select:none;user-select:none}.last\\:mb-0:last-child{margin-bottom:calc(var(--spacing) * 0)}@media(hover:hover){.hover\\:bg-blue-500:hover{background-color:var(--color-blue-500)}.hover\\:bg-rose-500:hover{background-color:var(--color-rose-500)}.hover\\:bg-slate-800:hover{background-color:var(--color-slate-800)}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}@media(min-width:48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(prefers-color-scheme:dark){.dark\\:border-slate-700\\/50{border-color:#31415880}@supports (color:color-mix(in lab,red,red)){.dark\\:border-slate-700\\/50{border-color:color-mix(in oklab,var(--color-slate-700) 50%,transparent)}}.dark\\:bg-slate-800{background-color:var(--color-slate-800)}.dark\\:bg-white{background-color:var(--color-white)}.dark\\:text-slate-100{color:var(--color-slate-100)}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}';
// @__NO_SIDE_EFFECTS__
function y(r) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const e of r.split(",")) t[e] = 1;
  return (e) => e in t;
}
const S = () => {
}, tr = (r) => r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && // uppercase letter
(r.charCodeAt(2) > 122 || r.charCodeAt(2) < 97), x = Array.isArray, g = (r) => typeof r == "function", f = (r) => typeof r == "string", C = (r) => r !== null && typeof r == "object", w = (r) => (C(r) || g(r)) && g(r.then) && g(r.catch), er = (r) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((e) => t[e] || (t[e] = r(e)));
}, or = /\B([A-Z])/g, ar = er(
  (r) => r.replace(or, "-$1").toLowerCase()
);
let A;
const ir = () => A || (A = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function N(r) {
  if (x(r)) {
    const t = {};
    for (let e = 0; e < r.length; e++) {
      const o = r[e], a = f(o) ? cr(o) : N(o);
      if (a)
        for (const i in a)
          t[i] = a[i];
    }
    return t;
  } else if (f(r) || C(r))
    return r;
}
const nr = /;(?![^(]*\))/g, lr = /:([^]+)/, sr = /\/\*[^]*?\*\//g;
function cr(r) {
  const t = {};
  return r.replace(sr, "").split(nr).forEach((e) => {
    if (e) {
      const o = e.split(lr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function dr(r) {
  if (!r) return "";
  if (f(r)) return r;
  let t = "";
  for (const e in r) {
    const o = r[e];
    if (f(o) || typeof o == "number") {
      const a = e.startsWith("--") ? e : ar(e);
      t += `${a}:${o};`;
    }
  }
  return t;
}
function V(r) {
  let t = "";
  if (f(r))
    t = r;
  else if (x(r))
    for (let e = 0; e < r.length; e++) {
      const o = V(r[e]);
      o && (t += o + " ");
    }
  else if (C(r))
    for (const e in r)
      r[e] && (t += e + " ");
  return t.trim();
}
const pr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fr = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", br = /* @__PURE__ */ y(pr), ur = /* @__PURE__ */ y(fr), gr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hr = /* @__PURE__ */ y(
  gr + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function mr(r) {
  return !!r || r === "";
}
const wr = /[>/="'\u0009\u000a\u000c\u0020]/, _ = {};
function vr(r) {
  if (_.hasOwnProperty(r))
    return _[r];
  const t = wr.test(r);
  return t && console.error(`unsafe attribute name: ${r}`), _[r] = !t;
}
const kr = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function yr(r) {
  if (r == null)
    return !1;
  const t = typeof r;
  return t === "string" || t === "number" || t === "boolean";
}
const xr = /["'&<>]/;
function b(r) {
  const t = "" + r, e = xr.exec(t);
  if (!e)
    return t;
  let o = "", a, i, n = 0;
  for (i = e.index; i < t.length; i++) {
    switch (t.charCodeAt(i)) {
      case 34:
        a = "&quot;";
        break;
      case 38:
        a = "&amp;";
        break;
      case 39:
        a = "&#39;";
        break;
      case 60:
        a = "&lt;";
        break;
      case 62:
        a = "&gt;";
        break;
      default:
        continue;
    }
    n !== i && (o += t.slice(n, i)), n = i + 1, o += a;
  }
  return n !== i ? o + t.slice(n, i) : o;
}
const Cr = /^-?>|<!--|-->|--!>|<!-$/g;
function _r(r) {
  return r.replace(Cr, "");
}
function Sr(r) {
  return r == null ? "initial" : typeof r == "string" ? r === "" ? " " : r : String(r);
}
const Tr = /* @__PURE__ */ y(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Ar(r, t) {
  let e = "";
  for (let o in r) {
    if (Tr(o) || tr(o) || t === "textarea" && o === "value" || // force as property (not rendered in SSR)
    o.startsWith("."))
      continue;
    const a = r[o];
    o.startsWith("^") && (o = o.slice(1)), o === "class" ? e += ` class="${Rr(a)}"` : o === "style" ? e += ` style="${$r(a)}"` : o === "className" ? a != null && (e += ` class="${b(String(a))}"`) : e += zr(o, a, t);
  }
  return e;
}
function zr(r, t, e) {
  if (!yr(t))
    return "";
  const o = e && (e.indexOf("-") > 0 || br(e)) ? r : kr[r] || r.toLowerCase();
  return hr(o) ? mr(t) ? ` ${o}` : "" : vr(o) ? t === "" ? ` ${o}` : ` ${o}="${b(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function Rr(r) {
  return b(V(r));
}
function $r(r) {
  if (!r)
    return "";
  if (f(r))
    return b(r);
  const t = N(Er(r));
  return b(dr(t));
}
function Er(r) {
  if (!x(r) && C(r)) {
    const t = {};
    for (const e in r)
      e.startsWith(":--") ? t[e.slice(1)] = Sr(r[e]) : t[e] = r[e];
    return t;
  }
  return r;
}
const { ensureValidVNode: Hr } = k;
function Nr(r, t, e, o, a) {
  r("<!--teleport start-->");
  const i = a.appContext.provides[E], n = i.__teleportBuffers || (i.__teleportBuffers = {}), l = n[e] || (n[e] = []), c = l.length;
  let p;
  if (o)
    t(r), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = B();
    s("<!--teleport start anchor-->"), t(s), s("<!--teleport anchor-->"), p = d();
  }
  l.splice(c, 0, p), r("<!--teleport end-->");
}
{
  const r = ir(), t = (e, o) => {
    let a;
    return (a = r[e]) || (a = r[e] = []), a.push(o), (i) => {
      a.length > 1 ? a.forEach((n) => n(i)) : a[0](i);
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
function Vr(r, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Br,
  setCurrentRenderingInstance: z,
  setupComponent: Mr,
  renderComponentRoot: R,
  normalizeVNode: jr,
  pushWarningContext: Wr,
  popWarningContext: qr
} = k;
function B() {
  let r = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(e) {
      const o = f(e);
      if (r && o) {
        t[t.length - 1] += e;
        return;
      }
      t.push(e), r = o, (w(e) || x(e) && e.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function M(r, t = null, e) {
  const o = r.component = Br(
    r,
    t,
    null
  ), a = Mr(
    o,
    !0
    /* isSSR */
  ), i = w(a);
  let n = o.sp;
  return i || n ? Promise.resolve(a).then(() => {
    if (i && (n = o.sp), n)
      return Promise.all(
        n.map((c) => c.call(o.proxy))
      );
  }).catch(S).then(() => $(o, e)) : $(o, e);
}
function $(r, t) {
  const e = r.type, { getBuffer: o, push: a } = B();
  if (g(e)) {
    let i = R(r);
    if (!e.props)
      for (const n in r.attrs)
        n.startsWith("data-v-") && ((i.props || (i.props = {}))[n] = "");
    v(a, r.subTree = i, r, t);
  } else {
    (!r.render || r.render === S) && !r.ssrRender && !e.ssrRender && f(e.template) && (e.ssrRender = Vr(e.template));
    const i = r.ssrRender || e.ssrRender;
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
      if (t) {
        l || (n = { ...n });
        const d = t.trim().split(" ");
        for (let s = 0; s < d.length; s++)
          n[d[s]] = "";
      }
      const p = z(r);
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
        z(p);
      }
    } else if (r.render && r.render !== S)
      v(
        a,
        r.subTree = R(r),
        r,
        t
      );
    else {
      const n = e.name || e.__file || "<Anonymous>";
      m(`Component ${n} is missing template or render function.`), a("<!---->");
    }
  }
  return o();
}
function v(r, t, e, o) {
  const { type: a, shapeFlag: i, children: n, dirs: l, props: c } = t;
  switch (l && (t.props = Lr(t, c, l)), a) {
    case H:
      r(b(n));
      break;
    case U:
      r(
        n ? `<!--${_r(n)}-->` : "<!---->"
      );
      break;
    case I:
      r(n);
      break;
    case G:
      t.slotScopeIds && (o = (o ? o + " " : "") + t.slotScopeIds.join(" ")), r("<!--[-->"), T(
        r,
        n,
        e,
        o
      ), r("<!--]-->");
      break;
    default:
      i & 1 ? Fr(r, t, e, o) : i & 6 ? r(M(t, e, o)) : i & 64 ? Or(r, t, e, o) : i & 128 ? v(r, t.ssContent, e, o) : m(
        "[@vue/server-renderer] Invalid VNode type:",
        a,
        `(${typeof a})`
      );
  }
}
function T(r, t, e, o) {
  for (let a = 0; a < t.length; a++)
    v(r, jr(t[a]), e, o);
}
function Fr(r, t, e, o) {
  const a = t.type;
  let { props: i, children: n, shapeFlag: l, scopeId: c } = t, p = `<${a}`;
  i && (p += Ar(i, a)), c && (p += ` ${c}`);
  let d = e, s = t;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (o && (p += ` ${o}`), r(p + ">"), !ur(a)) {
    let u = !1;
    i && (i.innerHTML ? (u = !0, r(i.innerHTML)) : i.textContent ? (u = !0, r(b(i.textContent))) : a === "textarea" && i.value && (u = !0, r(b(i.value)))), u || (l & 8 ? r(b(n)) : l & 16 && T(
      r,
      n,
      e,
      o
    )), r(`</${a}>`);
  }
}
function Lr(r, t, e) {
  const o = [];
  for (let a = 0; a < e.length; a++) {
    const i = e[a], {
      dir: { getSSRProps: n }
    } = i;
    if (n) {
      const l = n(i, r);
      l && o.push(l);
    }
  }
  return W(t || {}, ...o);
}
function Or(r, t, e, o) {
  const a = t.props && t.props.to, i = t.props && t.props.disabled;
  if (!a)
    return i || m("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!f(a))
    return m(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  Nr(
    r,
    (n) => {
      T(
        n,
        t.children,
        e,
        o
      );
    },
    a,
    i || i === "",
    e
  );
}
const { isVNode: Dr } = k;
function h(r, t, e) {
  if (!r.hasAsync)
    return t + F(r);
  let o = t;
  for (let a = e; a < r.length; a += 1) {
    const i = r[a];
    if (f(i)) {
      o += i;
      continue;
    }
    if (w(i))
      return i.then((l) => (r[a] = l, h(r, o, a)));
    const n = h(i, o, 0);
    if (w(n))
      return n.then((l) => (r[a] = l, h(r, "", a)));
    o = n;
  }
  return o;
}
function j(r) {
  return h(r, "", 0);
}
function F(r) {
  let t = "";
  for (let e = 0; e < r.length; e++) {
    let o = r[e];
    f(o) ? t += o : t += F(o);
  }
  return t;
}
async function L(r, t = {}) {
  if (Dr(r))
    return L(D({ render: () => r }), t);
  const e = P(r._component, r._props);
  e.appContext = r._context, r.provide(E, t);
  const o = await M(e), a = await j(o);
  if (await Pr(t), t.__watcherHandles)
    for (const i of t.__watcherHandles)
      i();
  return a;
}
async function Pr(r) {
  if (r.__teleportBuffers) {
    r.teleports = r.teleports || {};
    for (const t in r.__teleportBuffers)
      r.teleports[t] = await j(
        await Promise.all([r.__teleportBuffers[t]])
      );
  }
}
const { isVNode: Kr } = k;
O();
const Gr = ["id"], Ir = /* @__PURE__ */ q({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(r) {
    return (t, e) => (K(), Z("div", {
      id: r._p.f.name("root"),
      class: "box"
    }, [
      J("p", null, Q(r._$p.data.curr.data.data), 1)
    ], 8, Gr));
  }
});
Y(rr);
const Zr = async (r) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const o = X(Ir, {
      _p: r,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await L(o)}
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
  Zr as index,
  Zr as renderer
};
