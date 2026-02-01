import { g as B, f as N, h as E, s as _, i as C, j as m, N as y, k as V, l as g, F as j, S as M, C as H, m as L, T as U, p as f, q as F, u as I, v as S, w as O, x as P, n as D, y as G, z as W, A as K, B as q, D as J, E as Q, G as X, H as Y, I as Z, J as ee, K as te, d as re, c as oe, a as ie, t as ae, o as ne, L as le } from "./runtime-dom.esm-bundler-CWQPdnm9.js";
function se(e, t) {
  t === void 0 && (t = {});
  var o = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", o === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const ce = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-bold:700;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-auto{margin-top:auto}.mb-8{margin-bottom:calc(var(--spacing)*8)}.block{display:block}.flex{display:flex}.grid{display:grid}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-10{height:calc(var(--spacing)*10)}.max-h-0{max-height:calc(var(--spacing)*0)}.max-h-\\[500px\\]{max-height:500px}.min-h-\\[44px\\]{min-height:44px}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-10{width:calc(var(--spacing)*10)}.w-full{width:100%}.max-w-\\[400px\\]{max-width:400px}.flex-shrink-0{flex-shrink:0}.rotate-180{rotate:180deg}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-8{gap:calc(var(--spacing)*8)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-\\[\\#f6f6f9\\]{background-color:#f6f6f9}.bg-black{background-color:var(--color-black)}.bg-gray-200{background-color:var(--color-gray-200)}.p-2{padding:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-4{padding-block:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.pt-8{padding-top:calc(var(--spacing)*8)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.font-sans{font-family:var(--font-sans)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[8px\\]{font-size:8px}.text-\\[15px\\]{font-size:15px}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.whitespace-nowrap{white-space:nowrap}.text-black{color:var(--color-black)}.text-gray-400{color:var(--color-gray-400)}.text-gray-600{color:var(--color-gray-600)}.text-white{color:var(--color-white)}.opacity-0{opacity:0}.opacity-70{opacity:.7}.opacity-100{opacity:1}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.group-hover\\:text-\\[\\#cb11ab\\]:is(:where(.group):hover *){color:#cb11ab}}.last\\:border-none:last-child{--tw-border-style:none;border-style:none}@media(hover:hover){.hover\\:bg-\\[\\#cb11ab\\]:hover{background-color:#cb11ab}.hover\\:text-\\[\\#cb11ab\\]:hover{color:#cb11ab}.hover\\:text-white:hover{color:var(--color-white)}.hover\\:opacity-80:hover{opacity:.8}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}@media(min-width:64rem){.lg\\:mb-4{margin-bottom:calc(var(--spacing)*4)}.lg\\:block{display:block}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:hidden{display:none}.lg\\:h-auto{height:auto}.lg\\:max-h-none{max-height:none}.lg\\:w-auto{width:auto}.lg\\:max-w-none{max-width:none}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:gap-8{gap:calc(var(--spacing)*8)}.lg\\:border-none{--tw-border-style:none;border-style:none}.lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.lg\\:py-0{padding-block:calc(var(--spacing)*0)}.lg\\:py-12{padding-block:calc(var(--spacing)*12)}.lg\\:text-left{text-align:left}.lg\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.lg\\:opacity-100{opacity:1}}.dark\\:border-gray-700:where(.dark,.dark *){border-color:var(--color-gray-700)}.dark\\:border-gray-800:where(.dark,.dark *){border-color:var(--color-gray-800)}.dark\\:bg-\\[\\#1a1a1a\\]:where(.dark,.dark *){background-color:#1a1a1a}.dark\\:bg-\\[\\#2b2b2b\\]:where(.dark,.dark *){background-color:#2b2b2b}.dark\\:text-gray-300:where(.dark,.dark *){color:var(--color-gray-300)}.dark\\:text-gray-400:where(.dark,.dark *){color:var(--color-gray-400)}.dark\\:text-gray-500:where(.dark,.dark *){color:var(--color-gray-500)}.dark\\:text-white:where(.dark,.dark *){color:var(--color-white)}@media(hover:hover){.dark\\:hover\\:text-\\[\\#d0299e\\]:where(.dark,.dark *):hover{color:#d0299e}}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}';
const de = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pe(e, t) {
  let o = "";
  for (let r in e) {
    if (de(r) || O(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const i = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? o += ` class="${ge(i)}"` : r === "style" ? o += ` style="${ue(i)}"` : o += fe(r, i, t);
  }
  return o;
}
function fe(e, t, o) {
  if (!K(t))
    return "";
  const r = o && (o.indexOf("-") > 0 || q(o)) ? e : J[e] || e.toLowerCase();
  return Q(r) ? X(t) ? ` ${r}` : "" : Y(r) ? t === "" ? ` ${r}` : ` ${r}="${f(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function ge(e) {
  return f(D(e));
}
function ue(e) {
  if (!e)
    return "";
  if (g(e))
    return f(e);
  const t = G(he(e));
  return f(W(t));
}
function he(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const o in e)
      o.startsWith(":--") ? t[o.slice(1)] = ee(e[o]) : t[o] = e[o];
    return t;
  }
  return e;
}
function me(e, t, o, r, i) {
  e("<!--teleport start-->");
  const a = i.appContext.provides[_], n = a.__teleportBuffers || (a.__teleportBuffers = {}), l = n[o] || (n[o] = []), c = l.length;
  let p;
  if (r)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = T();
    s("<!--teleport start anchor-->"), t(s), s("<!--teleport anchor-->"), p = d();
  }
  l.splice(c, 0, p), e("<!--teleport end-->");
}
{
  const e = B(), t = (o, r) => {
    let i;
    return (i = e[o]) || (i = e[o] = []), i.push(r), (a) => {
      i.length > 1 ? i.forEach((n) => n(a)) : i[0](a);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => o
  ), t(
    "__VUE_SSR_SETTERS__",
    (o) => o
  );
}
function be(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ye,
  setCurrentRenderingInstance: v,
  setupComponent: we,
  renderComponentRoot: x,
  normalizeVNode: ve
} = C;
function T() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(o) {
      const r = g(o);
      if (e && r) {
        t[t.length - 1] += o;
        return;
      }
      t.push(o), e = r, (m(o) || S(o) && o.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function z(e, t = null, o) {
  const r = e.component = ye(
    e,
    t,
    null
  ), i = we(
    r,
    !0
    /* isSSR */
  ), a = m(i);
  let n = r.sp;
  return a || n ? Promise.resolve(i).then(() => {
    if (a && (n = r.sp), n)
      return Promise.all(
        n.map((c) => c.call(r.proxy))
      );
  }).catch(y).then(() => k(r, o)) : k(r, o);
}
function k(e, t) {
  const o = e.type, { getBuffer: r, push: i } = T();
  if (V(o)) {
    let a = x(e);
    if (!o.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((a.props || (a.props = {}))[n] = "");
    b(i, e.subTree = a, e, t);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !o.ssrRender && g(o.template) && (o.ssrRender = be(o.template));
    const a = e.ssrRender || o.ssrRender;
    if (a) {
      let n = e.inheritAttrs !== !1 ? e.attrs : void 0, l = !1, c = e;
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
      const p = v(e);
      try {
        a(
          e.proxy,
          i,
          e,
          n,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        v(p);
      }
    } else e.render && e.render !== y ? b(
      i,
      e.subTree = x(e),
      e,
      t
    ) : (o.name || o.__file, i("<!---->"));
  }
  return r();
}
function b(e, t, o, r) {
  const { type: i, shapeFlag: a, children: n, dirs: l, props: c } = t;
  switch (l && (t.props = ke(t, c, l)), i) {
    case U:
      e(f(n));
      break;
    case H:
      e(
        n ? `<!--${L(n)}-->` : "<!---->"
      );
      break;
    case M:
      e(n);
      break;
    case j:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), w(
        e,
        n,
        o,
        r
      ), e("<!--]-->");
      break;
    default:
      a & 1 ? xe(e, t, o, r) : a & 6 ? e(z(t, o, r)) : a & 64 ? _e(e, t, o, r) : a & 128 && b(e, t.ssContent, o, r);
  }
}
function w(e, t, o, r) {
  for (let i = 0; i < t.length; i++)
    b(e, ve(t[i]), o, r);
}
function xe(e, t, o, r) {
  const i = t.type;
  let { props: a, children: n, shapeFlag: l, scopeId: c } = t, p = `<${i}`;
  a && (p += pe(a, i)), c && (p += ` ${c}`);
  let d = o, s = t;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (r && (p += ` ${r}`), e(p + ">"), !I(i)) {
    let u = !1;
    a && (a.innerHTML ? (u = !0, e(a.innerHTML)) : a.textContent ? (u = !0, e(f(a.textContent))) : i === "textarea" && a.value && (u = !0, e(f(a.value)))), u || (l & 8 ? e(f(n)) : l & 16 && w(
      e,
      n,
      o,
      r
    )), e(`</${i}>`);
  }
}
function ke(e, t, o) {
  const r = [];
  for (let i = 0; i < o.length; i++) {
    const a = o[i], {
      dir: { getSSRProps: n }
    } = a;
    if (n) {
      const l = n(a, e);
      l && r.push(l);
    }
  }
  return F(t || {}, ...r);
}
function _e(e, t, o, r) {
  const i = t.props && t.props.to, a = t.props && t.props.disabled;
  if (!i)
    return [];
  if (!g(i))
    return [];
  me(
    e,
    (n) => {
      w(
        n,
        t.children,
        o,
        r
      );
    },
    i,
    a || a === "",
    o
  );
}
const { isVNode: Ce } = C;
function h(e, t, o) {
  if (!e.hasAsync)
    return t + R(e);
  let r = t;
  for (let i = o; i < e.length; i += 1) {
    const a = e[i];
    if (g(a)) {
      r += a;
      continue;
    }
    if (m(a))
      return a.then((l) => (e[i] = l, h(e, r, i)));
    const n = h(a, r, 0);
    if (m(n))
      return n.then((l) => (e[i] = l, h(e, "", i)));
    r = n;
  }
  return r;
}
function A(e) {
  return h(e, "", 0);
}
function R(e) {
  let t = "";
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    g(r) ? t += r : t += R(r);
  }
  return t;
}
async function $(e, t = {}) {
  if (Ce(e))
    return $(N({ render: () => e }), t);
  const o = E(e._component, e._props);
  o.appContext = e._context, e.provide(_, t);
  const r = await z(o), i = await A(r);
  if (await Se(t), t.__watcherHandles)
    for (const a of t.__watcherHandles)
      a();
  return i;
}
async function Se(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await A(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const Te = ["id"], ze = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, o) => (ne(), oe("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      ie("p", null, ae(e._$p.data.curr.data.data), 1)
    ], 8, Te));
  }
});
se(ce);
const Re = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = le(ze, {
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
  Re as index,
  Re as renderer
};
