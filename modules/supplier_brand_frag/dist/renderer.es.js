const { ssrUtils: y, initDirectivesForSSR: O, createApp: P, createVNode: D, ssrContextKey: E, warn: w, Fragment: G, Static: I, Comment: U, Text: H, mergeProps: W, defineComponent: q, openBlock: K, createElementBlock: Z, createSSRApp: J } = window.Vue;
function Q(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", r === "top" && i.firstChild ? i.insertBefore(n, i.firstChild) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
const X = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer tailwind-base{@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-100:oklch(93.6% .032 17.717);--color-red-500:oklch(63.7% .237 25.331);--color-red-900:oklch(39.6% .141 25.723);--color-green-500:oklch(72.3% .219 149.579);--spacing:.25rem;--container-xs:20rem;--container-md:28rem;--container-7xl:80rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\!relative{position:relative!important}.relative{position:relative}.mx-auto{margin-inline:auto}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mr-1{margin-right:calc(var(--spacing) * 1)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.\\!flex{display:flex!important}.flex{display:flex}.table{display:table}.h-4{height:calc(var(--spacing) * 4)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-16{height:calc(var(--spacing) * 16)}.h-full{height:100%}.min-h-screen{min-height:100vh}.\\!w-full{width:100%!important}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-14{width:calc(var(--spacing) * 14)}.w-16{width:calc(var(--spacing) * 16)}.w-full{width:100%}.max-w-7xl{max-width:var(--container-7xl)}.max-w-md{max-width:var(--container-md)}.max-w-xs{max-width:var(--container-xs)}.\\!flex-1{flex:1!important}.flex-1{flex:1}.\\!flex-shrink-0{flex-shrink:0!important}.flex-shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.\\!flex-col{flex-direction:column!important}.flex-col{flex-direction:column}.\\!items-center{align-items:center!important}.\\!items-start{align-items:flex-start!important}.items-center{align-items:center}.items-start{align-items:flex-start}.\\!justify-between{justify-content:space-between!important}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.\\!gap-3{gap:calc(var(--spacing) * 3)!important}.\\!gap-4{gap:calc(var(--spacing) * 4)!important}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.bg-red-100{background-color:var(--color-red-100)}.object-cover{object-fit:cover}.p-4{padding:calc(var(--spacing) * 4)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-12{padding-block:calc(var(--spacing) * 12)}.py-20{padding-block:calc(var(--spacing) * 20)}.pl-10{padding-left:calc(var(--spacing) * 10)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.\\!whitespace-nowrap{white-space:nowrap!important}.whitespace-nowrap{white-space:nowrap}.text-green-500{color:var(--color-green-500)}.text-red-500{color:var(--color-red-500)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-shadow{transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media(min-width:40rem){.sm\\:w-64{width:calc(var(--spacing) * 64)}.sm\\:w-auto{width:auto}.sm\\:flex-none{flex:none}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:p-6{padding:calc(var(--spacing) * 6)}}@media(min-width:48rem){.md\\:w-80{width:calc(var(--spacing) * 80)}}@media(min-width:64rem){.lg\\:\\!w-64{width:calc(var(--spacing) * 64)!important}.lg\\:\\!w-auto{width:auto!important}.lg\\:\\!flex-none{flex:none!important}.lg\\:\\!flex-row{flex-direction:row!important}.lg\\:\\!items-center{align-items:center!important}.lg\\:p-8{padding:calc(var(--spacing) * 8)}}@media(min-width:80rem){.xl\\:\\!w-80{width:calc(var(--spacing) * 80)!important}}@media(prefers-color-scheme:dark){.dark\\:bg-red-900\\/30{background-color:#82181a4d}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-red-900\\/30{background-color:color-mix(in oklab,var(--color-red-900) 30%,transparent)}}}}}@layer primevue,tailwind-utilities;@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}';
// @__NO_SIDE_EFFECTS__
function v(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const S = () => {
}, Y = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), k = Array.isArray, g = (e) => typeof e == "function", p = (e) => typeof e == "string", C = (e) => e !== null && typeof e == "object", b = (e) => (C(e) || g(e)) && g(e.then) && g(e.catch), ee = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, te = /\B([A-Z])/g, re = ee(
  (e) => e.replace(te, "-$1").toLowerCase()
);
let A;
const ie = () => A || (A = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function N(e) {
  if (k(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const i = e[r], n = p(i) ? se(i) : N(i);
      if (n)
        for (const o in n)
          t[o] = n[o];
    }
    return t;
  } else if (p(e) || C(e))
    return e;
}
const ne = /;(?![^(]*\))/g, oe = /:([^]+)/, ae = /\/\*[^]*?\*\//g;
function se(e) {
  const t = {};
  return e.replace(ae, "").split(ne).forEach((r) => {
    if (r) {
      const i = r.split(oe);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function le(e) {
  if (!e) return "";
  if (p(e)) return e;
  let t = "";
  for (const r in e) {
    const i = e[r];
    if (p(i) || typeof i == "number") {
      const n = r.startsWith("--") ? r : re(r);
      t += `${n}:${i};`;
    }
  }
  return t;
}
function j(e) {
  let t = "";
  if (p(e))
    t = e;
  else if (k(e))
    for (let r = 0; r < e.length; r++) {
      const i = j(e[r]);
      i && (t += i + " ");
    }
  else if (C(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const ce = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", de = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", fe = /* @__PURE__ */ v(ce), pe = /* @__PURE__ */ v(de), he = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ue = /* @__PURE__ */ v(
  he + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ge(e) {
  return !!e || e === "";
}
const me = /[>/="'\u0009\u000a\u000c\u0020]/, _ = {};
function we(e) {
  if (_.hasOwnProperty(e))
    return _[e];
  const t = me.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), _[e] = !t;
}
const be = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function xe(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const ye = /["'&<>]/;
function h(e) {
  const t = "" + e, r = ye.exec(t);
  if (!r)
    return t;
  let i = "", n, o, a = 0;
  for (o = r.index; o < t.length; o++) {
    switch (t.charCodeAt(o)) {
      case 34:
        n = "&quot;";
        break;
      case 38:
        n = "&amp;";
        break;
      case 39:
        n = "&#39;";
        break;
      case 60:
        n = "&lt;";
        break;
      case 62:
        n = "&gt;";
        break;
      default:
        continue;
    }
    a !== o && (i += t.slice(a, o)), a = o + 1, i += n;
  }
  return a !== o ? i + t.slice(a, o) : i;
}
const ve = /^-?>|<!--|-->|--!>|<!-$/g;
function ke(e) {
  return e.replace(ve, "");
}
function Ce(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
const _e = /* @__PURE__ */ v(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Se(e, t) {
  let r = "";
  for (let i in e) {
    if (_e(i) || Y(i) || t === "textarea" && i === "value" || // force as property (not rendered in SSR)
    i.startsWith("."))
      continue;
    const n = e[i];
    i.startsWith("^") && (i = i.slice(1)), i === "class" ? r += ` class="${Ae(n)}"` : i === "style" ? r += ` style="${ze(n)}"` : i === "className" ? n != null && (r += ` class="${h(String(n))}"`) : r += Te(i, n, t);
  }
  return r;
}
function Te(e, t, r) {
  if (!xe(t))
    return "";
  const i = r && (r.indexOf("-") > 0 || fe(r)) ? e : be[e] || e.toLowerCase();
  return ue(i) ? ge(t) ? ` ${i}` : "" : we(i) ? t === "" ? ` ${i}` : ` ${i}="${h(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${i}`
  ), "");
}
function Ae(e) {
  return h(j(e));
}
function ze(e) {
  if (!e)
    return "";
  if (p(e))
    return h(e);
  const t = N(Re(e));
  return h(le(t));
}
function Re(e) {
  if (!k(e) && C(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = Ce(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
const { ensureValidVNode: Ie } = y;
function $e(e, t, r, i, n) {
  e("<!--teleport start-->");
  const o = n.appContext.provides[E], a = o.__teleportBuffers || (o.__teleportBuffers = {}), s = a[r] || (a[r] = []), c = s.length;
  let f;
  if (i)
    t(e), f = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = B();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), f = d();
  }
  s.splice(c, 0, f), e("<!--teleport end-->");
}
{
  const e = ie(), t = (r, i) => {
    let n;
    return (n = e[r]) || (n = e[r] = []), n.push(i), (o) => {
      n.length > 1 ? n.forEach((a) => a(o)) : n[0](o);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => r
  ), t(
    "__VUE_SSR_SETTERS__",
    (r) => r
  );
}
function Ee(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Ne,
  setCurrentRenderingInstance: z,
  setupComponent: je,
  renderComponentRoot: R,
  normalizeVNode: Be,
  pushWarningContext: Ue,
  popWarningContext: He
} = y;
function B() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const i = p(r);
      if (e && i) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = i, (b(r) || k(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function V(e, t = null, r) {
  const i = e.component = Ne(
    e,
    t,
    null
  ), n = je(
    i,
    !0
    /* isSSR */
  ), o = b(n);
  let a = i.sp;
  return o || a ? Promise.resolve(n).then(() => {
    if (o && (a = i.sp), a)
      return Promise.all(
        a.map((c) => c.call(i.proxy))
      );
  }).catch(S).then(() => $(i, r)) : $(i, r);
}
function $(e, t) {
  const r = e.type, { getBuffer: i, push: n } = B();
  if (g(r)) {
    let o = R(e);
    if (!r.props)
      for (const a in e.attrs)
        a.startsWith("data-v-") && ((o.props || (o.props = {}))[a] = "");
    x(n, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === S) && !e.ssrRender && !r.ssrRender && p(r.template) && (r.ssrRender = Ee(r.template));
    const o = e.ssrRender || r.ssrRender;
    if (o) {
      let a = e.inheritAttrs !== !1 ? e.attrs : void 0, s = !1, c = e;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (s || (a = { ...a }, s = !0), a[d] = "");
        const l = c.parent;
        if (l && l.subTree && l.subTree === c.vnode)
          c = l;
        else
          break;
      }
      if (t) {
        s || (a = { ...a });
        const d = t.trim().split(" ");
        for (let l = 0; l < d.length; l++)
          a[d[l]] = "";
      }
      const f = z(e);
      try {
        o(
          e.proxy,
          n,
          e,
          a,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        z(f);
      }
    } else if (e.render && e.render !== S)
      x(
        n,
        e.subTree = R(e),
        e,
        t
      );
    else {
      const a = r.name || r.__file || "<Anonymous>";
      w(`Component ${a} is missing template or render function.`), n("<!---->");
    }
  }
  return i();
}
function x(e, t, r, i) {
  const { type: n, shapeFlag: o, children: a, dirs: s, props: c } = t;
  switch (s && (t.props = Me(t, c, s)), n) {
    case H:
      e(h(a));
      break;
    case U:
      e(
        a ? `<!--${ke(a)}-->` : "<!---->"
      );
      break;
    case I:
      e(a);
      break;
    case G:
      t.slotScopeIds && (i = (i ? i + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), T(
        e,
        a,
        r,
        i
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? Ve(e, t, r, i) : o & 6 ? e(V(t, r, i)) : o & 64 ? Fe(e, t, r, i) : o & 128 ? x(e, t.ssContent, r, i) : w(
        "[@vue/server-renderer] Invalid VNode type:",
        n,
        `(${typeof n})`
      );
  }
}
function T(e, t, r, i) {
  for (let n = 0; n < t.length; n++)
    x(e, Be(t[n]), r, i);
}
function Ve(e, t, r, i) {
  const n = t.type;
  let { props: o, children: a, shapeFlag: s, scopeId: c } = t, f = `<${n}`;
  o && (f += Se(o, n)), c && (f += ` ${c}`);
  let d = r, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (f += ` ${l.scopeId}`), d = d.parent;
  if (i && (f += ` ${i}`), e(f + ">"), !pe(n)) {
    let u = !1;
    o && (o.innerHTML ? (u = !0, e(o.innerHTML)) : o.textContent ? (u = !0, e(h(o.textContent))) : n === "textarea" && o.value && (u = !0, e(h(o.value)))), u || (s & 8 ? e(h(a)) : s & 16 && T(
      e,
      a,
      r,
      i
    )), e(`</${n}>`);
  }
}
function Me(e, t, r) {
  const i = [];
  for (let n = 0; n < r.length; n++) {
    const o = r[n], {
      dir: { getSSRProps: a }
    } = o;
    if (a) {
      const s = a(o, e);
      s && i.push(s);
    }
  }
  return W(t || {}, ...i);
}
function Fe(e, t, r, i) {
  const n = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!n)
    return o || w("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!p(n))
    return w(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  $e(
    e,
    (a) => {
      T(
        a,
        t.children,
        r,
        i
      );
    },
    n,
    o || o === "",
    r
  );
}
const { isVNode: Le } = y;
function m(e, t, r) {
  if (!e.hasAsync)
    return t + F(e);
  let i = t;
  for (let n = r; n < e.length; n += 1) {
    const o = e[n];
    if (p(o)) {
      i += o;
      continue;
    }
    if (b(o))
      return o.then((s) => (e[n] = s, m(e, i, n)));
    const a = m(o, i, 0);
    if (b(a))
      return a.then((s) => (e[n] = s, m(e, "", n)));
    i = a;
  }
  return i;
}
function M(e) {
  return m(e, "", 0);
}
function F(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    p(i) ? t += i : t += F(i);
  }
  return t;
}
async function L(e, t = {}) {
  if (Le(e))
    return L(P({ render: () => e }), t);
  const r = D(e._component, e._props);
  r.appContext = e._context, e.provide(E, t);
  const i = await V(r), n = await M(i);
  if (await Oe(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return n;
}
async function Oe(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await M(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
const { isVNode: We } = y;
O();
const Pe = ["id"], De = /* @__PURE__ */ q({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(e) {
    return (t, r) => (K(), Z("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Pe));
  }
});
Q(X);
const qe = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const i = J(De, {
      _p: e,
      _pp: t
    });
    return {
      r: `
                 <div>
                    ${await L(i)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let a = "";
        return a = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, a;
      })()
    };
  }
});
export {
  qe as index,
  qe as renderer
};
