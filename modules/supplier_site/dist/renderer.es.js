import { s as O } from "./style-inject.es-CQKlVflb.js";
const { ssrUtils: x, initDirectivesForSSR: I, createApp: P, createVNode: D, ssrContextKey: $, warn: m, Fragment: G, Static: U, Comment: H, Text: q, mergeProps: W, defineComponent: K, createElementBlock: Z, openBlock: J, createSSRApp: Q } = window.Vue;
const X = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-content:"";--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-700:oklch(52.7% .154 150.069);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-md:28rem;--container-2xl:42rem;--container-3xl:48rem;--container-4xl:56rem;--container-5xl:64rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:3rem;--text-5xl--line-height:1;--text-6xl:3.75rem;--text-6xl--line-height:1;--text-7xl:4.5rem;--text-7xl--line-height:1;--font-weight-light:300;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wider:.05em;--tracking-widest:.1em;--leading-tight:1.25;--leading-relaxed:1.625;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--blur-sm:8px;--blur-md:12px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-1\\/2{top:50%}.top-\\[-1rem\\]{top:-1rem}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.bottom-4{bottom:calc(var(--spacing)*4)}.bottom-10{bottom:calc(var(--spacing)*10)}.left-0{left:calc(var(--spacing)*0)}.left-\\[8\\.5rem\\]{left:8.5rem}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-4{margin-inline:calc(var(--spacing)*4)}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-12{margin-top:calc(var(--spacing)*12)}.mt-auto{margin-top:auto}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.mb-10{margin-bottom:calc(var(--spacing)*10)}.mb-12{margin-bottom:calc(var(--spacing)*12)}.mb-16{margin-bottom:calc(var(--spacing)*16)}.mb-20{margin-bottom:calc(var(--spacing)*20)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.h-1{height:calc(var(--spacing)*1)}.h-2{height:calc(var(--spacing)*2)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-14{height:calc(var(--spacing)*14)}.h-20{height:calc(var(--spacing)*20)}.h-32{height:calc(var(--spacing)*32)}.h-full{height:100%}.h-px{height:1px}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-1\\/3{width:33.3333%}.w-2{width:calc(var(--spacing)*2)}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-12{width:calc(var(--spacing)*12)}.w-20{width:calc(var(--spacing)*20)}.w-32{width:calc(var(--spacing)*32)}.w-\\[calc\\(100\\%-4rem\\)\\]{width:calc(100% - 4rem)}.w-auto{width:auto}.w-full{width:100%}.w-px{width:1px}.max-w-2xl{max-width:var(--container-2xl)}.max-w-3xl{max-width:var(--container-3xl)}.max-w-4xl{max-width:var(--container-4xl)}.max-w-5xl{max-width:var(--container-5xl)}.max-w-md{max-width:var(--container-md)}.max-w-xs{max-width:var(--container-xs)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.-rotate-45{rotate:-45deg}.rotate-45{rotate:45deg}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-6{gap:calc(var(--spacing)*6)}.gap-8{gap:calc(var(--spacing)*8)}.gap-12{gap:calc(var(--spacing)*12)}.gap-16{gap:calc(var(--spacing)*16)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-8>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*8)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*8)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-12>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*12)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*12)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-3xl{border-radius:var(--radius-3xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-bl-full{border-bottom-left-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.border-green-100{border-color:var(--color-green-100)}.border-white\\/10{border-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.border-white\\/10{border-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.border-white\\/20{border-color:#fff3}@supports (color:color-mix(in lab,red,red)){.border-white\\/20{border-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.bg-black{background-color:var(--color-black)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-300{background-color:var(--color-gray-300)}.bg-green-50{background-color:var(--color-green-50)}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-white\\/5{background-color:#ffffff0d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/5{background-color:color-mix(in oklab,var(--color-white)5%,transparent)}}.bg-white\\/10{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.bg-white\\/10{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.bg-white\\/20{background-color:#fff3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/20{background-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.bg-white\\/30{background-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.bg-white\\/30{background-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.bg-white\\/90{background-color:#ffffffe6}@supports (color:color-mix(in lab,red,red)){.bg-white\\/90{background-color:color-mix(in oklab,var(--color-white)90%,transparent)}}.bg-gradient-to-br{--tw-gradient-position:to bottom right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-l{--tw-gradient-position:to left in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.from-black\\/80{--tw-gradient-from:#000c}@supports (color:color-mix(in lab,red,red)){.from-black\\/80{--tw-gradient-from:color-mix(in oklab,var(--color-black)80%,transparent)}}.from-black\\/80{--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.via-black\\/50{--tw-gradient-via:#00000080}@supports (color:color-mix(in lab,red,red)){.via-black\\/50{--tw-gradient-via:color-mix(in oklab,var(--color-black)50%,transparent)}}.via-black\\/50{--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-via-stops)}.to-black{--tw-gradient-to:var(--color-black);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-transparent{--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.p-6{padding:calc(var(--spacing)*6)}.p-7{padding:calc(var(--spacing)*7)}.p-8{padding:calc(var(--spacing)*8)}.p-10{padding:calc(var(--spacing)*10)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-6{padding-inline:calc(var(--spacing)*6)}.px-8{padding-inline:calc(var(--spacing)*8)}.px-10{padding-inline:calc(var(--spacing)*10)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.py-24{padding-block:calc(var(--spacing)*24)}.py-32{padding-block:calc(var(--spacing)*32)}.pt-8{padding-top:calc(var(--spacing)*8)}.pt-10{padding-top:calc(var(--spacing)*10)}.pt-20{padding-top:calc(var(--spacing)*20)}.pb-10{padding-bottom:calc(var(--spacing)*10)}.pl-32{padding-left:calc(var(--spacing)*32)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-sans{font-family:var(--font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-gray-600{color:var(--color-gray-600)}.text-gray-900{color:var(--color-gray-900)}.text-green-700{color:var(--color-green-700)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.text-white\\/80{color:#fffc}@supports (color:color-mix(in lab,red,red)){.text-white\\/80{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.uppercase{text-transform:uppercase}.opacity-0{opacity:0}.opacity-10{opacity:.1}.opacity-70{opacity:.7}.opacity-90{opacity:.9}.opacity-100{opacity:1}.opacity-\\[0\\.04\\]{opacity:.04}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.brightness-0{--tw-brightness:brightness(0%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-1000{--tw-duration:1s;transition-duration:1s}@media(hover:hover){.group-hover\\:scale-110:is(:where(.group):hover *){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.group-hover\\:text-white:is(:where(.group):hover *){color:var(--color-white)}}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:inset-0:before{content:var(--tw-content);inset:calc(var(--spacing)*0)}.before\\:ml-5:before{content:var(--tw-content);margin-left:calc(var(--spacing)*5)}.before\\:h-full:before{content:var(--tw-content);height:100%}.before\\:w-0\\.5:before{content:var(--tw-content);width:calc(var(--spacing)*.5)}.before\\:-translate-x-px:before{content:var(--tw-content);--tw-translate-x:-1px;translate:var(--tw-translate-x)var(--tw-translate-y)}.before\\:bg-gradient-to-b:before{content:var(--tw-content);--tw-gradient-position:to bottom in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.before\\:from-transparent:before{content:var(--tw-content);--tw-gradient-from:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.before\\:to-transparent:before{content:var(--tw-content);--tw-gradient-to:transparent;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}@media(hover:hover){.hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}}@media(min-width:48rem){.md\\:order-1{order:1}.md\\:col-span-1{grid-column:span 1/span 1}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-\\[calc\\(50\\%-2\\.5rem\\)\\]{width:calc(50% - 2.5rem)}.md\\:-translate-y-4{--tw-translate-y:calc(var(--spacing)*-4);translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:justify-normal{justify-content:normal}.md\\:p-8{padding:calc(var(--spacing)*8)}.md\\:p-12{padding:calc(var(--spacing)*12)}.md\\:p-14{padding:calc(var(--spacing)*14)}.md\\:px-6{padding-inline:calc(var(--spacing)*6)}.md\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.md\\:text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.md\\:text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.md\\:text-6xl{font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.md\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.md\\:group-odd\\:-translate-x-1\\/2:is(:where(.group):nth-child(odd) *){--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:group-even\\:translate-x-1\\/2:is(:where(.group):nth-child(2n) *){--tw-translate-x: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:before\\:mx-auto:before{content:var(--tw-content);margin-inline:auto}.md\\:before\\:translate-x-0:before{content:var(--tw-content);--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.md\\:odd\\:flex-row-reverse:nth-child(odd){flex-direction:row-reverse}}@media(min-width:64rem){.lg\\:w-1\\/2{width:50%}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:text-7xl{font-size:var(--text-7xl);line-height:var(--tw-leading,var(--text-7xl--line-height))}}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-content{syntax:"*";inherits:false;initial-value:""}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}';
// @__NO_SIDE_EFFECTS__
function y(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const r of t.split(",")) e[r] = 1;
  return (r) => r in e;
}
const S = () => {
}, Y = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), k = Array.isArray, f = (t) => typeof t == "function", g = (t) => typeof t == "string", z = (t) => t !== null && typeof t == "object", u = (t) => (z(t) || f(t)) && f(t.then) && f(t.catch), tt = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((r) => e[r] || (e[r] = t(r)));
}, et = /\B([A-Z])/g, rt = tt(
  (t) => t.replace(et, "-$1").toLowerCase()
);
let T;
const at = () => T || (T = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function M(t) {
  if (k(t)) {
    const e = {};
    for (let r = 0; r < t.length; r++) {
      const a = t[r], i = g(a) ? st(a) : M(a);
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
function E(t) {
  let e = "";
  if (g(t))
    e = t;
  else if (k(t))
    for (let r = 0; r < t.length; r++) {
      const a = E(t[r]);
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
const vt = /[>/="'\u0009\u000a\u000c\u0020]/, _ = {};
function mt(t) {
  if (_.hasOwnProperty(t))
    return _[t];
  const e = vt.test(t);
  return e && console.error(`unsafe attribute name: ${t}`), _[t] = !e;
}
const ut = {
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
const _t = /* @__PURE__ */ y(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function St(t, e) {
  let r = "";
  for (const a in t) {
    if (_t(a) || Y(a) || e === "textarea" && a === "value")
      continue;
    const i = t[a];
    a === "class" ? r += ` class="${Tt(i)}"` : a === "style" ? r += ` style="${At(i)}"` : a === "className" ? r += ` class="${String(i)}"` : r += Ct(a, i, e);
  }
  return r;
}
function Ct(t, e, r) {
  if (!bt(e))
    return "";
  const a = r && (r.indexOf("-") > 0 || pt(r)) ? t : ut[t] || t.toLowerCase();
  return ht(a) ? ft(e) ? ` ${a}` : "" : mt(a) ? e === "" ? ` ${a}` : ` ${a}="${w(e)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${a}`
  ), "");
}
function Tt(t) {
  return w(E(t));
}
function At(t) {
  if (!t)
    return "";
  if (g(t))
    return w(t);
  const e = M(Rt(t));
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
const { ensureValidVNode: Ut } = x;
function Nt(t, e, r, a, i) {
  t("<!--teleport start-->");
  const o = i.appContext.provides[$], n = o.__teleportBuffers || (o.__teleportBuffers = {}), s = n[r] || (n[r] = []), c = s.length;
  let p;
  if (a)
    e(t), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = V();
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
function $t(t, e) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Mt,
  setCurrentRenderingInstance: A,
  setupComponent: Et,
  renderComponentRoot: R,
  normalizeVNode: Vt,
  pushWarningContext: Ht,
  popWarningContext: qt
} = x;
function V() {
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
      e.push(r), t = a, (u(r) || k(r) && r.hasAsync) && (e.hasAsync = !0);
    }
  };
}
function j(t, e = null, r) {
  const a = t.component = Mt(
    t,
    e,
    null
  ), i = Et(
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
  }).catch(S).then(() => N(a, r)) : N(a, r);
}
function N(t, e) {
  const r = t.type, { getBuffer: a, push: i } = V();
  if (f(r)) {
    let o = R(t);
    if (!r.props)
      for (const n in t.attrs)
        n.startsWith("data-v-") && ((o.props || (o.props = {}))[n] = "");
    b(i, t.subTree = o, t, e);
  } else {
    (!t.render || t.render === S) && !t.ssrRender && !r.ssrRender && g(r.template) && (r.ssrRender = $t(r.template));
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
    } else if (t.render && t.render !== S)
      b(
        i,
        t.subTree = R(t),
        t,
        e
      );
    else {
      const n = r.name || r.__file || "<Anonymous>";
      m(`Component ${n} is missing template or render function.`), i("<!---->");
    }
  }
  return a();
}
function b(t, e, r, a) {
  const { type: i, shapeFlag: o, children: n, dirs: s, props: c } = e;
  switch (s && (e.props = Bt(e, c, s)), i) {
    case q:
      t(w(n));
      break;
    case H:
      t(
        n ? `<!--${kt(n)}-->` : "<!---->"
      );
      break;
    case U:
      t(n);
      break;
    case G:
      e.slotScopeIds && (a = (a ? a + " " : "") + e.slotScopeIds.join(" ")), t("<!--[-->"), C(
        t,
        n,
        r,
        a
      ), t("<!--]-->");
      break;
    default:
      o & 1 ? jt(t, e, r, a) : o & 6 ? t(j(e, r, a)) : o & 64 ? Ft(t, e, r, a) : o & 128 ? b(t, e.ssContent, r, a) : m(
        "[@vue/server-renderer] Invalid VNode type:",
        i,
        `(${typeof i})`
      );
  }
}
function C(t, e, r, a) {
  for (let i = 0; i < e.length; i++)
    b(t, Vt(e[i]), r, a);
}
function jt(t, e, r, a) {
  const i = e.type;
  let { props: o, children: n, shapeFlag: s, scopeId: c } = e, p = `<${i}`;
  o && (p += St(o, i)), c && (p += ` ${c}`);
  let d = r, l = e;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (p += ` ${l.scopeId}`), d = d.parent;
  if (a && (p += ` ${a}`), t(p + ">"), !gt(i)) {
    let h = !1;
    o && (o.innerHTML ? (h = !0, t(o.innerHTML)) : o.textContent ? (h = !0, t(w(o.textContent))) : i === "textarea" && o.value && (h = !0, t(w(o.value)))), h || (s & 8 ? t(w(n)) : s & 16 && C(
      t,
      n,
      r,
      a
    )), t(`</${i}>`);
  }
}
function Bt(t, e, r) {
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
    return o || m("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!g(i))
    return m(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  Nt(
    t,
    (n) => {
      C(
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
    if (u(o))
      return o.then((s) => (t[i] = s, v(t, a, i)));
    const n = v(o, a, 0);
    if (u(n))
      return n.then((s) => (t[i] = s, v(t, "", i)));
    a = n;
  }
  return a;
}
function B(t) {
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
  r.appContext = t._context, t.provide($, e);
  const a = await j(r), i = await B(a);
  if (await Ot(e), e.__watcherHandles)
    for (const o of e.__watcherHandles)
      o();
  return i;
}
async function Ot(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const e in t.__teleportBuffers)
      t.teleports[e] = await B(
        await Promise.all([t.__teleportBuffers[e]])
      );
  }
}
const { isVNode: Wt } = x;
I();
const It = ["id"], Pt = /* @__PURE__ */ K({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(t) {
    return (e, r) => (J(), Z("div", {
      id: t._p.f.name("root"),
      class: "box"
    }, null, 8, It));
  }
});
O(X);
const Kt = async (t) => ({
  set: async (e) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const a = Q(Pt, {
      _p: t,
      _pp: e
    });
    return {
      r: `
                 <div>
                    ${await L(a)}
                    <div id="${t.f.name("vue-root")}"></div>

                    <div id="app-hfgjebdfh657gc"></div>

                  </div>
                `,
      head: `
                <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>MN Supplierhub</title>
    <meta name="description" content="MN Supplierhub — The global infrastructure connecting fashion manufacturers to worldwide markets." />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="MN Supplierhub" />
    <meta property="og:description" content="MN Supplierhub — The global infrastructure connecting fashion manufacturers to worldwide markets." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="MN Supplierhub" />
    <meta name="twitter:description" content="MN Supplierhub — The global infrastructure connecting fashion manufacturers to worldwide markets." />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  </head>
                
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
  Kt as index,
  Kt as renderer
};
