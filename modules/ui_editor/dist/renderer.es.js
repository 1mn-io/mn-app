import { v as B, s as N, l as E, x as _, y as C, z as w, N as b, A as V, B as f, F as M, S as j, C as U, D as H, E as L, G as g, H as O, I as P, J as S, K as F, L as I, n as D, k as W, M as G, O as K, P as J, Q, R as X, U as Y, V as Z, W as q, X as ee, Y as te, e as re, c as ie, a as oe, t as ae, o as ne, Z as se } from "./runtime-dom.esm-bundler-5O696vqa.js";
function le(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const ce = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial;--tw-ease:initial;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-600:oklch(57.7% .245 27.325);--color-indigo-50:oklch(96.2% .018 272.314);--color-indigo-100:oklch(93% .034 272.788);--color-indigo-300:oklch(78.5% .115 274.713);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-600:oklch(51.1% .262 276.966);--color-indigo-800:oklch(39.8% .195 277.366);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--tracking-wider:.05em;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--ease-out:cubic-bezier(0,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.invisible{visibility:hidden}.visible{visibility:visible}.relative{position:relative}.z-20{z-index:20}.m-4{margin:calc(var(--spacing)*4)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.ml-4{margin-left:calc(var(--spacing)*4)}.block{display:block}.flex{display:flex}.grid{display:grid}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.h-50{height:calc(var(--spacing)*50)}.h-64{height:calc(var(--spacing)*64)}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.max-h-32{max-height:calc(var(--spacing)*32)}.min-h-\\[80vh\\]{min-height:80vh}.min-h-\\[100px\\]{min-height:100px}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-8{width:calc(var(--spacing)*8)}.w-10{width:calc(var(--spacing)*10)}.w-80{width:calc(var(--spacing)*80)}.w-full{width:100%}.flex-1{flex:1}.flex-shrink{flex-shrink:1}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.cursor-grab{cursor:grab}.cursor-pointer{cursor:pointer}.grid-cols-\\[220px_1fr_320px\\]{grid-template-columns:220px 1fr 320px}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.overflow-auto{overflow:auto}.overflow-clip{overflow:clip}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-red-200{border-color:var(--color-red-200)}.border-t-gray-300{border-top-color:var(--color-gray-300)}.border-r-gray-300{border-right-color:var(--color-gray-300)}.border-b-gray-300{border-bottom-color:var(--color-gray-300)}.border-l-gray-300{border-left-color:var(--color-gray-300)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-indigo-100{background-color:var(--color-indigo-100)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-8{padding-block:calc(var(--spacing)*8)}.pt-4{padding-top:calc(var(--spacing)*4)}.pb-32{padding-bottom:calc(var(--spacing)*32)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-indigo-600{color:var(--color-indigo-600)}.text-red-600{color:var(--color-red-600)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media(hover:hover){.group-hover\\:text-indigo-600:is(:where(.group):hover *){color:var(--color-indigo-600)}.hover\\:border-indigo-300:hover{border-color:var(--color-indigo-300)}.hover\\:bg-indigo-50:hover{background-color:var(--color-indigo-50)}.hover\\:bg-red-50:hover{background-color:var(--color-red-50)}.hover\\:text-indigo-800:hover{color:var(--color-indigo-800)}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:border-indigo-500:focus{border-color:var(--color-indigo-500)}.focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-indigo-500:focus{--tw-ring-color:var(--color-indigo-500)}.active\\:scale-95:active{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.active\\:cursor-grabbing:active{cursor:grabbing}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}';
const de = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pe(e, t) {
  let i = "";
  for (let r in e) {
    if (de(r) || F(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const o = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? i += ` class="${fe(o)}"` : r === "style" ? i += ` style="${he(o)}"` : i += ge(r, o, t);
  }
  return i;
}
function ge(e, t, i) {
  if (!K(t))
    return "";
  const r = i && (i.indexOf("-") > 0 || J(i)) ? e : Q[e] || e.toLowerCase();
  return X(r) ? Y(t) ? ` ${r}` : "" : Z(r) ? t === "" ? ` ${r}` : ` ${r}="${g(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function fe(e) {
  return g(D(e));
}
function he(e) {
  if (!e)
    return "";
  if (f(e))
    return g(e);
  const t = W(ue(e));
  return g(G(t));
}
function ue(e) {
  if (!S(e) && q(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function we(e, t, i, r, o) {
  e("<!--teleport start-->");
  const a = o.appContext.provides[_], n = a.__teleportBuffers || (a.__teleportBuffers = {}), s = n[i] || (n[i] = []), c = s.length;
  let p;
  if (r)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = z();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = d();
  }
  s.splice(c, 0, p), e("<!--teleport end-->");
}
{
  const e = B(), t = (i, r) => {
    let o;
    return (o = e[i]) || (o = e[i] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((n) => n(a)) : o[0](a);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => i
  ), t(
    "__VUE_SSR_SETTERS__",
    (i) => i
  );
}
function ve(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: be,
  setCurrentRenderingInstance: m,
  setupComponent: ye,
  renderComponentRoot: x,
  normalizeVNode: me
} = C;
function z() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(i) {
      const r = f(i);
      if (e && r) {
        t[t.length - 1] += i;
        return;
      }
      t.push(i), e = r, (w(i) || S(i) && i.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, i) {
  const r = e.component = be(
    e,
    t,
    null
  ), o = ye(
    r,
    !0
    /* isSSR */
  ), a = w(o);
  let n = r.sp;
  return a || n ? Promise.resolve(o).then(() => {
    if (a && (n = r.sp), n)
      return Promise.all(
        n.map((c) => c.call(r.proxy))
      );
  }).catch(b).then(() => k(r, i)) : k(r, i);
}
function k(e, t) {
  const i = e.type, { getBuffer: r, push: o } = z();
  if (V(i)) {
    let a = x(e);
    if (!i.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((a.props || (a.props = {}))[n] = "");
    v(o, e.subTree = a, e, t);
  } else {
    (!e.render || e.render === b) && !e.ssrRender && !i.ssrRender && f(i.template) && (i.ssrRender = ve(i.template));
    const a = e.ssrRender || i.ssrRender;
    if (a) {
      let n = e.inheritAttrs !== !1 ? e.attrs : void 0, s = !1, c = e;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (s || (n = { ...n }, s = !0), n[d] = "");
        const l = c.parent;
        if (l && l.subTree && l.subTree === c.vnode)
          c = l;
        else
          break;
      }
      if (t) {
        s || (n = { ...n });
        const d = t.trim().split(" ");
        for (let l = 0; l < d.length; l++)
          n[d[l]] = "";
      }
      const p = m(e);
      try {
        a(
          e.proxy,
          o,
          e,
          n,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        m(p);
      }
    } else e.render && e.render !== b ? v(
      o,
      e.subTree = x(e),
      e,
      t
    ) : (i.name || i.__file, o("<!---->"));
  }
  return r();
}
function v(e, t, i, r) {
  const { type: o, shapeFlag: a, children: n, dirs: s, props: c } = t;
  switch (s && (t.props = ke(t, c, s)), o) {
    case L:
      e(g(n));
      break;
    case U:
      e(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case j:
      e(n);
      break;
    case M:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), y(
        e,
        n,
        i,
        r
      ), e("<!--]-->");
      break;
    default:
      a & 1 ? xe(e, t, i, r) : a & 6 ? e(T(t, i, r)) : a & 64 ? _e(e, t, i, r) : a & 128 && v(e, t.ssContent, i, r);
  }
}
function y(e, t, i, r) {
  for (let o = 0; o < t.length; o++)
    v(e, me(t[o]), i, r);
}
function xe(e, t, i, r) {
  const o = t.type;
  let { props: a, children: n, shapeFlag: s, scopeId: c } = t, p = `<${o}`;
  a && (p += pe(a, o)), c && (p += ` ${c}`);
  let d = i, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (p += ` ${l.scopeId}`), d = d.parent;
  if (r && (p += ` ${r}`), e(p + ">"), !P(o)) {
    let h = !1;
    a && (a.innerHTML ? (h = !0, e(a.innerHTML)) : a.textContent ? (h = !0, e(g(a.textContent))) : o === "textarea" && a.value && (h = !0, e(g(a.value)))), h || (s & 8 ? e(g(n)) : s & 16 && y(
      e,
      n,
      i,
      r
    )), e(`</${o}>`);
  }
}
function ke(e, t, i) {
  const r = [];
  for (let o = 0; o < i.length; o++) {
    const a = i[o], {
      dir: { getSSRProps: n }
    } = a;
    if (n) {
      const s = n(a, e);
      s && r.push(s);
    }
  }
  return O(t || {}, ...r);
}
function _e(e, t, i, r) {
  const o = t.props && t.props.to, a = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!f(o))
    return [];
  we(
    e,
    (n) => {
      y(
        n,
        t.children,
        i,
        r
      );
    },
    o,
    a || a === "",
    i
  );
}
const { isVNode: Ce } = C;
function u(e, t, i) {
  if (!e.hasAsync)
    return t + A(e);
  let r = t;
  for (let o = i; o < e.length; o += 1) {
    const a = e[o];
    if (f(a)) {
      r += a;
      continue;
    }
    if (w(a))
      return a.then((s) => (e[o] = s, u(e, r, o)));
    const n = u(a, r, 0);
    if (w(n))
      return n.then((s) => (e[o] = s, u(e, "", o)));
    r = n;
  }
  return r;
}
function R(e) {
  return u(e, "", 0);
}
function A(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    f(r) ? t += r : t += A(r);
  }
  return t;
}
async function $(e, t = {}) {
  if (Ce(e))
    return $(N({ render: () => e }), t);
  const i = E(e._component, e._props);
  i.appContext = e._context, e.provide(_, t);
  const r = await T(i), o = await R(r);
  if (await Se(t), t.__watcherHandles)
    for (const a of t.__watcherHandles)
      a();
  return o;
}
async function Se(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await R(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const ze = ["id"], Te = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, i) => (ne(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      oe("p", null, ae(e._$p.data.curr.data.data), 1)
    ], 8, ze));
  }
});
le(ce);
const Ae = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = se(Te, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await $(r)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let n = "";
        return n = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, n;
      })()
    };
  }
});
export {
  Ae as index,
  Ae as renderer
};
