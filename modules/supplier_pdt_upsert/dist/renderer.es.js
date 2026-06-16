const { ssrUtils: w, initDirectivesForSSR: O, createApp: P, createVNode: D, ssrContextKey: z, warn: b, Fragment: G, Static: I, Comment: U, Text: H, mergeProps: W, defineComponent: q, openBlock: K, createElementBlock: Z, createSSRApp: J } = window.Vue;
function Q(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", r === "top" && i.firstChild ? i.insertBefore(n, i.firstChild) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
const X = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-duration:initial}}}@layer tailwind-base{@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-yellow-500:oklch(79.5% .184 86.047);--color-green-500:oklch(72.3% .219 149.579);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-medium:500;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:calc(var(--spacing) * 0)}.top-2{top:calc(var(--spacing) * 2)}.left-2{left:calc(var(--spacing) * 2)}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.\\!m-0{margin:calc(var(--spacing) * 0)!important}.mx-auto{margin-inline:auto}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-6{margin-bottom:calc(var(--spacing) * 6)}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-2{margin-left:calc(var(--spacing) * 2)}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.h-6{height:calc(var(--spacing) * 6)}.h-8{height:calc(var(--spacing) * 8)}.h-40{height:calc(var(--spacing) * 40)}.h-auto{height:auto}.h-full{height:100%}.max-h-\\[70vh\\]{max-height:70vh}.min-h-screen{min-height:100vh}.w-6{width:calc(var(--spacing) * 6)}.w-8{width:calc(var(--spacing) * 8)}.w-full{width:100%}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-1{gap:calc(var(--spacing) * 1)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}.overflow-y-auto{overflow-y:auto}.\\!rounded-none{border-radius:0!important}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.bg-black{background-color:var(--color-black)}.object-contain{object-fit:contain}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-8{padding-block:calc(var(--spacing) * 8)}.pr-4{padding-right:calc(var(--spacing) * 4)}.pl-0{padding-left:calc(var(--spacing) * 0)}.pl-8{padding-left:calc(var(--spacing) * 8)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.text-green-500{color:var(--color-green-500)}.text-red-500{color:var(--color-red-500)}.text-white{color:var(--color-white)}.text-yellow-500{color:var(--color-yellow-500)}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}}@media(min-width:40rem){.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:48rem){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(min-width:64rem){.lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}}}}@layer primevue;@layer tailwind-utilities{.p-dialog{border-radius:.75rem}.product-dialog .p-tabview-nav{gap:.25rem}.product-dialog .p-tabview-panels{padding:1.5rem 0}.variant-table .p-datatable-thead>tr>th{background:var(--p-surface-100);font-weight:600}.dark .variant-table .p-datatable-thead>tr>th{background:var(--p-surface-800)}.color-chip{border:2px solid var(--p-surface-300);border-radius:50%;width:24px;height:24px;display:inline-block}.image-upload-area{border:2px dashed var(--p-surface-300);text-align:center;cursor:pointer;border-radius:.5rem;padding:1.5rem;transition:all .2s}.image-upload-area:hover{border-color:var(--p-primary-color);background:var(--p-primary-50)}.dark .image-upload-area:hover{background:var(--p-surface-800)}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter-from,.fade-leave-to{opacity:0}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}';
// @__NO_SIDE_EFFECTS__
function x(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const S = () => {
}, Y = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), k = Array.isArray, g = (e) => typeof e == "function", f = (e) => typeof e == "string", C = (e) => e !== null && typeof e == "object", y = (e) => (C(e) || g(e)) && g(e.then) && g(e.catch), ee = (e) => {
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
      const i = e[r], n = f(i) ? se(i) : N(i);
      if (n)
        for (const o in n)
          t[o] = n[o];
    }
    return t;
  } else if (f(e) || C(e))
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
  if (f(e)) return e;
  let t = "";
  for (const r in e) {
    const i = e[r];
    if (f(i) || typeof i == "number") {
      const n = r.startsWith("--") ? r : re(r);
      t += `${n}:${i};`;
    }
  }
  return t;
}
function j(e) {
  let t = "";
  if (f(e))
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
const ce = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", de = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", pe = /* @__PURE__ */ x(ce), fe = /* @__PURE__ */ x(de), ue = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", me = /* @__PURE__ */ x(
  ue + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ge(e) {
  return !!e || e === "";
}
const he = /[>/="'\u0009\u000a\u000c\u0020]/, _ = {};
function be(e) {
  if (_.hasOwnProperty(e))
    return _[e];
  const t = he.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), _[e] = !t;
}
const ye = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function ve(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const we = /["'&<>]/;
function u(e) {
  const t = "" + e, r = we.exec(t);
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
const xe = /^-?>|<!--|-->|--!>|<!-$/g;
function ke(e) {
  return e.replace(xe, "");
}
function Ce(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
const _e = /* @__PURE__ */ x(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Se(e, t) {
  let r = "";
  for (let i in e) {
    if (_e(i) || Y(i) || t === "textarea" && i === "value" || // force as property (not rendered in SSR)
    i.startsWith("."))
      continue;
    const n = e[i];
    i.startsWith("^") && (i = i.slice(1)), i === "class" ? r += ` class="${Ae(n)}"` : i === "style" ? r += ` style="${Re(n)}"` : i === "className" ? n != null && (r += ` class="${u(String(n))}"`) : r += Te(i, n, t);
  }
  return r;
}
function Te(e, t, r) {
  if (!ve(t))
    return "";
  const i = r && (r.indexOf("-") > 0 || pe(r)) ? e : ye[e] || e.toLowerCase();
  return me(i) ? ge(t) ? ` ${i}` : "" : be(i) ? t === "" ? ` ${i}` : ` ${i}="${u(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${i}`
  ), "");
}
function Ae(e) {
  return u(j(e));
}
function Re(e) {
  if (!e)
    return "";
  if (f(e))
    return u(e);
  const t = N($e(e));
  return u(le(t));
}
function $e(e) {
  if (!k(e) && C(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = Ce(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
const { ensureValidVNode: Ie } = w;
function Ee(e, t, r, i, n) {
  e("<!--teleport start-->");
  const o = n.appContext.provides[z], a = o.__teleportBuffers || (o.__teleportBuffers = {}), s = a[r] || (a[r] = []), c = s.length;
  let p;
  if (i)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = B();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = d();
  }
  s.splice(c, 0, p), e("<!--teleport end-->");
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
function ze(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Ne,
  setCurrentRenderingInstance: R,
  setupComponent: je,
  renderComponentRoot: $,
  normalizeVNode: Be,
  pushWarningContext: Ue,
  popWarningContext: He
} = w;
function B() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const i = f(r);
      if (e && i) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = i, (y(r) || k(r) && r.hasAsync) && (t.hasAsync = !0);
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
  ), o = y(n);
  let a = i.sp;
  return o || a ? Promise.resolve(n).then(() => {
    if (o && (a = i.sp), a)
      return Promise.all(
        a.map((c) => c.call(i.proxy))
      );
  }).catch(S).then(() => E(i, r)) : E(i, r);
}
function E(e, t) {
  const r = e.type, { getBuffer: i, push: n } = B();
  if (g(r)) {
    let o = $(e);
    if (!r.props)
      for (const a in e.attrs)
        a.startsWith("data-v-") && ((o.props || (o.props = {}))[a] = "");
    v(n, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === S) && !e.ssrRender && !r.ssrRender && f(r.template) && (r.ssrRender = ze(r.template));
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
      const p = R(e);
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
        R(p);
      }
    } else if (e.render && e.render !== S)
      v(
        n,
        e.subTree = $(e),
        e,
        t
      );
    else {
      const a = r.name || r.__file || "<Anonymous>";
      b(`Component ${a} is missing template or render function.`), n("<!---->");
    }
  }
  return i();
}
function v(e, t, r, i) {
  const { type: n, shapeFlag: o, children: a, dirs: s, props: c } = t;
  switch (s && (t.props = Me(t, c, s)), n) {
    case H:
      e(u(a));
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
      o & 1 ? Ve(e, t, r, i) : o & 6 ? e(V(t, r, i)) : o & 64 ? Fe(e, t, r, i) : o & 128 ? v(e, t.ssContent, r, i) : b(
        "[@vue/server-renderer] Invalid VNode type:",
        n,
        `(${typeof n})`
      );
  }
}
function T(e, t, r, i) {
  for (let n = 0; n < t.length; n++)
    v(e, Be(t[n]), r, i);
}
function Ve(e, t, r, i) {
  const n = t.type;
  let { props: o, children: a, shapeFlag: s, scopeId: c } = t, p = `<${n}`;
  o && (p += Se(o, n)), c && (p += ` ${c}`);
  let d = r, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (p += ` ${l.scopeId}`), d = d.parent;
  if (i && (p += ` ${i}`), e(p + ">"), !fe(n)) {
    let m = !1;
    o && (o.innerHTML ? (m = !0, e(o.innerHTML)) : o.textContent ? (m = !0, e(u(o.textContent))) : n === "textarea" && o.value && (m = !0, e(u(o.value)))), m || (s & 8 ? e(u(a)) : s & 16 && T(
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
    return o || b("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!f(n))
    return b(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  Ee(
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
const { isVNode: Le } = w;
function h(e, t, r) {
  if (!e.hasAsync)
    return t + F(e);
  let i = t;
  for (let n = r; n < e.length; n += 1) {
    const o = e[n];
    if (f(o)) {
      i += o;
      continue;
    }
    if (y(o))
      return o.then((s) => (e[n] = s, h(e, i, n)));
    const a = h(o, i, 0);
    if (y(a))
      return a.then((s) => (e[n] = s, h(e, "", n)));
    i = a;
  }
  return i;
}
function M(e) {
  return h(e, "", 0);
}
function F(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    f(i) ? t += i : t += F(i);
  }
  return t;
}
async function L(e, t = {}) {
  if (Le(e))
    return L(P({ render: () => e }), t);
  const r = D(e._component, e._props);
  r.appContext = e._context, e.provide(z, t);
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
const { isVNode: We } = w;
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
