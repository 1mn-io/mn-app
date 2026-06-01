const { ssrUtils: x, initDirectivesForSSR: O, createApp: P, createVNode: D, ssrContextKey: E, warn: u, Fragment: G, Static: I, Comment: U, Text: H, mergeProps: W, defineComponent: q, openBlock: K, createElementBlock: Z, createSSRApp: J } = window.Vue;
function Q(t, e) {
  e === void 0 && (e = {});
  var r = e.insertAt;
  if (!(typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && a.firstChild ? a.insertBefore(i, a.firstChild) : a.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
  }
}
const X = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-500:oklch(63.7% .237 25.331);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-violet-50:oklch(96.9% .016 293.756);--color-violet-400:oklch(70.2% .183 293.541);--color-violet-500:oklch(60.6% .25 292.717);--color-violet-600:oklch(54.1% .281 293.009);--color-violet-700:oklch(49.1% .27 292.581);--color-purple-600:oklch(55.8% .288 302.321);--color-slate-50:oklch(98.4% .003 247.858);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-400:oklch(70.7% .022 261.325);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--container-xl:36rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--text-5xl:3rem;--text-5xl--line-height:1;--text-6xl:3.75rem;--text-6xl--line-height:1;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-extrabold:800;--tracking-wide:.025em;--tracking-wider:.05em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-2xl:1rem;--drop-shadow-md:0 3px 3px #0000001f;--ease-out:cubic-bezier(0, 0, .2, 1);--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:calc(var(--spacing) * 0)}.top-1\\/2{top:50%}.right-2{right:calc(var(--spacing) * 2)}.bottom-4{bottom:calc(var(--spacing) * 4)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.z-20{z-index:20}.mx-auto{margin-inline:auto}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-6{margin-top:calc(var(--spacing) * 6)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-2{margin-left:calc(var(--spacing) * 2)}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.h-2{height:calc(var(--spacing) * 2)}.h-4{height:calc(var(--spacing) * 4)}.h-5{height:calc(var(--spacing) * 5)}.h-32{height:calc(var(--spacing) * 32)}.h-\\[380px\\]{height:380px}.h-\\[500px\\]{height:500px}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing) * 2)}.w-4{width:calc(var(--spacing) * 4)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-full{width:100%}.max-w-7xl{max-width:var(--container-7xl)}.max-w-md{max-width:var(--container-md)}.max-w-xl{max-width:var(--container-xl)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-4{--tw-translate-y:calc(var(--spacing) * 4);translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.resize-none{resize:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.\\!rounded-lg{border-radius:var(--radius-lg)!important}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.\\!border-green-600{border-color:var(--color-green-600)!important}.\\!border-slate-300{border-color:var(--color-slate-300)!important}.\\!border-slate-700{border-color:var(--color-slate-700)!important}.\\!border-violet-400{border-color:var(--color-violet-400)!important}.\\!border-violet-600{border-color:var(--color-violet-600)!important}.border-slate-200{border-color:var(--color-slate-200)}.border-white\\/20{border-color:#fff3}@supports (color:color-mix(in lab,red,red)){.border-white\\/20{border-color:color-mix(in oklab,var(--color-white) 20%,transparent)}}.\\!bg-green-600{background-color:var(--color-green-600)!important}.\\!bg-slate-700{background-color:var(--color-slate-700)!important}.\\!bg-violet-600{background-color:var(--color-violet-600)!important}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.bg-black\\/20{background-color:color-mix(in oklab,var(--color-black) 20%,transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-slate-50{background-color:var(--color-slate-50)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-white{background-color:var(--color-white)}.bg-white\\/30{background-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/30{background-color:color-mix(in oklab,var(--color-white) 30%,transparent)}}.bg-white\\/50{background-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.bg-white\\/50{background-color:color-mix(in oklab,var(--color-white) 50%,transparent)}}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-t{--tw-gradient-position:to top in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab, var(--color-black) 80%, transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-violet-600{--tw-gradient-from:var(--color-violet-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.via-transparent{--tw-gradient-via:transparent;--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-purple-600{--tw-gradient-to:var(--color-purple-600);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-5{padding:calc(var(--spacing) * 5)}.p-6{padding:calc(var(--spacing) * 6)}.\\!px-3{padding-inline:calc(var(--spacing) * 3)!important}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-8{padding-inline:calc(var(--spacing) * 8)}.\\!py-1{padding-block:calc(var(--spacing) * 1)!important}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-20{padding-block:calc(var(--spacing) * 20)}.pb-12{padding-bottom:calc(var(--spacing) * 12)}.text-center{text-align:center}.font-sans{font-family:var(--font-sans)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-extrabold{--tw-font-weight:var(--font-weight-extrabold);font-weight:var(--font-weight-extrabold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.whitespace-nowrap{white-space:nowrap}.\\!text-red-500{color:var(--color-red-500)!important}.\\!text-violet-600{color:var(--color-violet-600)!important}.\\!text-white{color:var(--color-white)!important}.text-black{color:var(--color-black)}.text-gray-100{color:var(--color-gray-100)}.text-gray-400{color:var(--color-gray-400)}.text-red-500{color:var(--color-red-500)}.text-slate-400{color:var(--color-slate-400)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-800{color:var(--color-slate-800)}.text-white{color:var(--color-white)}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.opacity-0{opacity:0}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a), 0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-violet-500\\/30{--tw-shadow-color:#8d54ff4d}@supports (color:color-mix(in lab,red,red)){.shadow-violet-500\\/30{--tw-shadow-color:color-mix(in oklab, color-mix(in oklab, var(--color-violet-500) 30%, transparent) var(--tw-shadow-alpha), transparent)}}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow-md{--tw-drop-shadow-size:drop-shadow(0 3px 3px var(--tw-drop-shadow-color,#0000001f));--tw-drop-shadow:drop-shadow(var(--drop-shadow-md));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.select-none{-webkit-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:flex:is(:where(.group):hover *){display:flex}.hover\\:\\!bg-green-700:hover{background-color:var(--color-green-700)!important}.hover\\:\\!bg-red-50:hover{background-color:var(--color-red-50)!important}.hover\\:\\!bg-slate-800:hover{background-color:var(--color-slate-800)!important}.hover\\:\\!bg-violet-50:hover{background-color:var(--color-violet-50)!important}.hover\\:\\!bg-violet-700:hover{background-color:var(--color-violet-700)!important}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-white:hover{background-color:var(--color-white)}.hover\\:bg-white\\/80:hover{background-color:#fffc}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/80:hover{background-color:color-mix(in oklab,var(--color-white) 80%,transparent)}}.hover\\:text-black:hover{color:var(--color-black)}}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x) var(--tw-scale-y)}@media(min-width:40rem){.sm\\:h-\\[450px\\]{height:450px}.sm\\:p-8{padding:calc(var(--spacing) * 8)}.sm\\:text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}}@media(min-width:48rem){.md\\:right-4{right:calc(var(--spacing) * 4)}.md\\:left-4{left:calc(var(--spacing) * 4)}.md\\:col-span-2{grid-column:span 2/span 2}.md\\:mb-8{margin-bottom:calc(var(--spacing) * 8)}.md\\:line-clamp-3{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.md\\:h-6{height:calc(var(--spacing) * 6)}.md\\:h-\\[500px\\]{height:500px}.md\\:w-6{width:calc(var(--spacing) * 6)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:justify-center{justify-content:center}.md\\:bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.md\\:from-black\\/70{--tw-gradient-from:#000000b3}@supports (color:color-mix(in lab,red,red)){.md\\:from-black\\/70{--tw-gradient-from:color-mix(in oklab, var(--color-black) 70%, transparent)}}.md\\:from-black\\/70{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.md\\:via-black\\/20{--tw-gradient-via:#0003}@supports (color:color-mix(in lab,red,red)){.md\\:via-black\\/20{--tw-gradient-via:color-mix(in oklab, var(--color-black) 20%, transparent)}}.md\\:via-black\\/20{--tw-gradient-via-stops:var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.md\\:to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))}.md\\:p-3{padding:calc(var(--spacing) * 3)}.md\\:px-16{padding-inline:calc(var(--spacing) * 16)}.md\\:pb-0{padding-bottom:calc(var(--spacing) * 0)}.md\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}}@media(min-width:64rem){.lg\\:h-\\[600px\\]{height:600px}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@keyframes pulse{50%{opacity:.5}}';
// @__NO_SIDE_EFFECTS__
function y(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) e[r] = 1;
  return (r) => r in e;
}
const _ = () => {
}, Y = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), k = Array.isArray, f = (t) => typeof t == "function", g = (t) => typeof t == "string", z = (t) => t !== null && typeof t == "object", m = (t) => (z(t) || f(t)) && f(t.then) && f(t.catch), tt = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((r) => e[r] || (e[r] = t(r)));
}, et = /\B([A-Z])/g, rt = tt(
  (t) => t.replace(et, "-$1").toLowerCase()
);
let T;
const at = () => T || (T = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function N(t) {
  if (k(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const a = t[r], i = g(a) ? st(a) : N(a);
      if (i)
        for (const o in i)
          e[o] = i[o];
    }
    return e;
  } else if (g(t) || z(t))
    return t;
}
const it = /;(?![^(]*\))/g, ot = /:([^]+)/, nt = /\/\*[^]*?\*\//g;
function st(t) {
  const e = {};
  return t.replace(nt, "").split(it).forEach((r) => {
    if (r) {
      const a = r.split(ot);
      a.length > 1 && (e[a[0].trim()] = a[1].trim());
    }
  }), e;
}
function lt(t) {
  if (!t) return "";
  if (g(t)) return t;
  let e = "";
  for (const r in t) {
    const a = t[r];
    if (g(a) || typeof a == "number") {
      const i = r.startsWith("--") ? r : rt(r);
      e += `${i}:${a};`;
    }
  }
  return e;
}
function j(t) {
  let e = "";
  if (g(t))
    e = t;
  else if (k(t))
    for (let r = 0; r < t.length; r++) {
      const a = j(t[r]);
      a && (e += a + " ");
    }
  else if (z(t))
    for (const r in t)
      t[r] && (e += r + " ");
  return e.trim();
}
const ct = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", dt = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", pt = /* @__PURE__ */ y(ct), gt = /* @__PURE__ */ y(dt), wt = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ht = /* @__PURE__ */ y(
  wt + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ft(t) {
  return !!t || t === "";
}
const vt = /[>/="'\u0009\u000a\u000c\u0020]/, C = {};
function ut(t) {
  if (C.hasOwnProperty(t))
    return C[t];
  const e = vt.test(t);
  return e && console.error(`unsafe attribute name: ${t}`), C[t] = !e;
}
const mt = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function bt(t) {
  if (t == null)
    return !1;
  const e = typeof t;
  return e === "string" || e === "number" || e === "boolean";
}
const xt = /["'&<>]/;
function w(t) {
  const e = "" + t, r = xt.exec(e);
  if (!r)
    return e;
  let a = "", i, o, n = 0;
  for (o = r.index; o < e.length; o++) {
    switch (e.charCodeAt(o)) {
      case 34:
        i = "&quot;";
        break;
      case 38:
        i = "&amp;";
        break;
      case 39:
        i = "&#39;";
        break;
      case 60:
        i = "&lt;";
        break;
      case 62:
        i = "&gt;";
        break;
      default:
        continue;
    }
    n !== o && (a += e.slice(n, o)), n = o + 1, a += i;
  }
  return n !== o ? a + e.slice(n, o) : a;
}
const yt = /^-?>|<!--|-->|--!>|<!-$/g;
function kt(t) {
  return t.replace(yt, "");
}
function zt(t) {
  return t == null ? "initial" : typeof t == "string" ? t === "" ? " " : t : String(t);
}
const Ct = /* @__PURE__ */ y(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function _t(t, e) {
  let r = "";
  for (let a in t) {
    if (Ct(a) || Y(a) || e === "textarea" && a === "value" || // force as property (not rendered in SSR)
    a.startsWith("."))
      continue;
    const i = t[a];
    a.startsWith("^") && (a = a.slice(1)), a === "class" ? r += ` class="${Tt(i)}"` : a === "style" ? r += ` style="${At(i)}"` : a === "className" ? i != null && (r += ` class="${w(String(i))}"`) : r += St(a, i, e);
  }
  return r;
}
function St(t, e, r) {
  if (!bt(e))
    return "";
  const a = r && (r.indexOf("-") > 0 || pt(r)) ? t : mt[t] || t.toLowerCase();
  return ht(a) ? ft(e) ? ` ${a}` : "" : ut(a) ? e === "" ? ` ${a}` : ` ${a}="${w(e)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${a}`
  ), "");
}
function Tt(t) {
  return w(j(t));
}
function At(t) {
  if (!t)
    return "";
  if (g(t))
    return w(t);
  const e = N(Rt(t));
  return w(lt(e));
}
function Rt(t) {
  if (!k(t) && z(t)) {
    const e = {};
    for (const r in t)
      r.startsWith(":--") ? e[r.slice(1)] = zt(t[r]) : e[r] = t[r];
    return e;
  }
  return t;
}
const { ensureValidVNode: It } = x;
function $t(t, e, r, a, i) {
  t("<!--teleport start-->");
  const o = i.appContext.provides[E], n = o.__teleportBuffers || (o.__teleportBuffers = {}), s = n[r] || (n[r] = []), c = s.length;
  let p;
  if (a)
    e(t), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = B();
    l("<!--teleport start anchor-->"), e(l), l("<!--teleport anchor-->"), p = d();
  }
  s.splice(c, 0, p), t("<!--teleport end-->");
}
{
  const t = at(), e = (r, a) => {
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
function Et(t, e) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Nt,
  setCurrentRenderingInstance: A,
  setupComponent: jt,
  renderComponentRoot: R,
  normalizeVNode: Bt,
  pushWarningContext: Ut,
  popWarningContext: Ht
} = x;
function B() {
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
      e.push(r), t = a, (m(r) || k(r) && r.hasAsync) && (e.hasAsync = !0);
    }
  };
}
function V(t, e = null, r) {
  const a = t.component = Nt(
    t,
    e,
    null
  ), i = jt(
    a,
    !0
    /* isSSR */
  ), o = m(i);
  let n = a.sp;
  return o || n ? Promise.resolve(i).then(() => {
    if (o && (n = a.sp), n)
      return Promise.all(
        n.map((c) => c.call(a.proxy))
      );
  }).catch(_).then(() => $(a, r)) : $(a, r);
}
function $(t, e) {
  const r = t.type, { getBuffer: a, push: i } = B();
  if (f(r)) {
    let o = R(t);
    if (!r.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((o.props || (o.props = {}))[n] = "");
    b(i, t.subTree = o, t, e);
  } else {
    (!t.render || t.render === _) && !t.ssrRender && !r.ssrRender && g(r.template) && (r.ssrRender = Et(r.template));
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
      const p = A(t);
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
        A(p);
      }
    } else if (t.render && t.render !== _)
      b(
        i,
        t.subTree = R(t),
        t,
        e
      );
    else {
      const n = r.name || r.__file || "<Anonymous>";
      u(`Component ${n} is missing template or render function.`), i("<!---->");
    }
  }
  return a();
}
function b(t, e, r, a) {
  const { type: i, shapeFlag: o, children: n, dirs: s, props: c } = e;
  switch (s && (e.props = Mt(e, c, s)), i) {
    case H:
      t(w(n));
      break;
    case U:
      t(
        n ? `<!--${kt(n)}-->` : "<!---->"
      );
      break;
    case I:
      t(n);
      break;
    case G:
      e.slotScopeIds && (a = (a ? a + " " : "") + e.slotScopeIds.join(" ")), t("<!--[-->"), S(
        t,
        n,
        r,
        a
      ), t("<!--]-->");
      break;
    default:
      o & 1 ? Vt(t, e, r, a) : o & 6 ? t(V(e, r, a)) : o & 64 ? Ft(t, e, r, a) : o & 128 ? b(t, e.ssContent, r, a) : u(
        "[@vue/server-renderer] Invalid VNode type:",
        i,
        `(${typeof i})`
      );
  }
}
function S(t, e, r, a) {
  for (let i = 0; i < e.length; i++)
    b(t, Bt(e[i]), r, a);
}
function Vt(t, e, r, a) {
  const i = e.type;
  let { props: o, children: n, shapeFlag: s, scopeId: c } = e, p = `<${i}`;
  o && (p += _t(o, i)), c && (p += ` ${c}`);
  let d = r, l = e;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (p += ` ${l.scopeId}`), d = d.parent;
  if (a && (p += ` ${a}`), t(p + ">"), !gt(i)) {
    let h = !1;
    o && (o.innerHTML ? (h = !0, t(o.innerHTML)) : o.textContent ? (h = !0, t(w(o.textContent))) : i === "textarea" && o.value && (h = !0, t(w(o.value)))), h || (s & 8 ? t(w(n)) : s & 16 && S(
      t,
      n,
      r,
      a
    )), t(`</${i}>`);
  }
}
function Mt(t, e, r) {
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
  return W(e || {}, ...a);
}
function Ft(t, e, r, a) {
  const i = e.props && e.props.to, o = e.props && e.props.disabled;
  if (!i)
    return o || u("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!g(i))
    return u(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  $t(
    t,
    (n) => {
      S(
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
const { isVNode: Lt } = x;
function v(t, e, r) {
  if (!t.hasAsync)
    return e + F(t);
  let a = e;
  for (let i = r; i < t.length; i += 1) {
    const o = t[i];
    if (g(o)) {
      a += o;
      continue;
    }
    if (m(o))
      return o.then((s) => (t[i] = s, v(t, a, i)));
    const n = v(o, a, 0);
    if (m(n))
      return n.then((s) => (t[i] = s, v(t, "", i)));
    a = n;
  }
  return a;
}
function M(t) {
  return v(t, "", 0);
}
function F(t) {
  let e = "";
  for (let r = 0; r < t.length; r++) {
    let a = t[r];
    g(a) ? e += a : e += F(a);
  }
  return e;
}
async function L(t, e = {}) {
  if (Lt(t))
    return L(P({ render: () => t }), e);
  const r = D(t._component, t._props);
  r.appContext = t._context, t.provide(E, e);
  const a = await V(r), i = await M(a);
  if (await Ot(e), e.__watcherHandles)
    for (const o of e.__watcherHandles)
      o();
  return i;
}
async function Ot(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const e in t.__teleportBuffers)
      t.teleports[e] = await M(
        await Promise.all([t.__teleportBuffers[e]])
      );
  }
}
const { isVNode: Wt } = x;
O();
const Pt = ["id"], Dt = /* @__PURE__ */ q({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(t) {
    return (e, r) => (K(), Z("div", {
      id: t._p.f.name("root"),
      class: "box"
    }, null, 8, Pt));
  }
});
Q(X);
const qt = async (t) => ({
  set: async (e, r) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const i = J(Dt, {
      _p: t,
      _$p: e,
      _$cb: r
    });
    return {
      r: `
                 <div>
                    ${await L(i)}
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
  qt as index,
  qt as renderer
};
