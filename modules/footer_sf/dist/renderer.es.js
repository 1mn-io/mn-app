import { j as B, i as N, k as E, s as _, l as C, m as h, N as y, p as V, q as g, F as j, S as M, C as H, u as L, T as O, v as f, w as P, x as U, y as S, z as F, A as I, n as D, B as G, D as W, E as K, G as q, H as J, I as Q, J as X, K as Y, L as Z, M as ee, O as te, d as re, c as ie, e as oe, t as ae, b as ne, P as se } from "./runtime-dom.esm-bundler-DI1G6KE3.js";
function le(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const ce = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-bold:700;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mx-auto{margin-inline:auto}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-auto{margin-top:auto}.mb-8{margin-bottom:calc(var(--spacing)*8)}.block{display:block}.flex{display:flex}.grid{display:grid}.h-4{height:calc(var(--spacing)*4)}.h-10{height:calc(var(--spacing)*10)}.max-h-0{max-height:calc(var(--spacing)*0)}.max-h-\\[500px\\]{max-height:500px}.min-h-\\[44px\\]{min-height:44px}.w-4{width:calc(var(--spacing)*4)}.w-10{width:calc(var(--spacing)*10)}.w-full{width:100%}.max-w-\\[400px\\]{max-width:400px}.max-w-\\[1440px\\]{max-width:1440px}.rotate-180{rotate:180deg}.resize{resize:both}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.gap-8{gap:calc(var(--spacing)*8)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-200{border-color:var(--color-gray-200)}.bg-\\[\\#f6f6f9\\]{background-color:#f6f6f9}.bg-black{background-color:var(--color-black)}.bg-gray-200{background-color:var(--color-gray-200)}.p-2{padding:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-4{padding-block:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.pt-8{padding-top:calc(var(--spacing)*8)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.text-center{text-align:center}.text-left{text-align:left}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[8px\\]{font-size:8px}.text-\\[15px\\]{font-size:15px}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-black{color:var(--color-black)}.text-gray-400{color:var(--color-gray-400)}.text-gray-600{color:var(--color-gray-600)}.text-white{color:var(--color-white)}.opacity-0{opacity:0}.opacity-70{opacity:.7}.opacity-100{opacity:1}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:text-\\[\\#cb11ab\\]:hover{color:#cb11ab}}@media(min-width:64rem){.lg\\:mb-4{margin-bottom:calc(var(--spacing)*4)}.lg\\:flex{display:flex}.lg\\:grid{display:grid}.lg\\:max-h-none{max-height:none}.lg\\:w-auto{width:auto}.lg\\:max-w-none{max-width:none}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:gap-8{gap:calc(var(--spacing)*8)}.lg\\:border-none{--tw-border-style:none;border-style:none}.lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.lg\\:py-0{padding-block:calc(var(--spacing)*0)}.lg\\:py-12{padding-block:calc(var(--spacing)*12)}.lg\\:text-left{text-align:left}.lg\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.lg\\:opacity-100{opacity:1}}.dark\\:border-gray-700:where(.dark,.dark *){border-color:var(--color-gray-700)}.dark\\:border-gray-800:where(.dark,.dark *){border-color:var(--color-gray-800)}.dark\\:bg-\\[\\#1a1a1a\\]:where(.dark,.dark *){background-color:#1a1a1a}.dark\\:bg-\\[\\#2b2b2b\\]:where(.dark,.dark *){background-color:#2b2b2b}.dark\\:text-gray-400:where(.dark,.dark *){color:var(--color-gray-400)}.dark\\:text-white:where(.dark,.dark *){color:var(--color-white)}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}';
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
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? i += ` class="${ge(o)}"` : r === "style" ? i += ` style="${ue(o)}"` : i += fe(r, o, t);
  }
  return i;
}
function fe(e, t, i) {
  if (!K(t))
    return "";
  const r = i && (i.indexOf("-") > 0 || q(i)) ? e : J[e] || e.toLowerCase();
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
  const t = G(me(e));
  return f(W(t));
}
function me(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function he(e, t, i, r, o) {
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
function be(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ye,
  setCurrentRenderingInstance: w,
  setupComponent: ve,
  renderComponentRoot: x,
  normalizeVNode: we
} = C;
function z() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(i) {
      const r = g(i);
      if (e && r) {
        t[t.length - 1] += i;
        return;
      }
      t.push(i), e = r, (h(i) || S(i) && i.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, i) {
  const r = e.component = ye(
    e,
    t,
    null
  ), o = ve(
    r,
    !0
    /* isSSR */
  ), a = h(o);
  let n = r.sp;
  return a || n ? Promise.resolve(o).then(() => {
    if (a && (n = r.sp), n)
      return Promise.all(
        n.map((c) => c.call(r.proxy))
      );
  }).catch(y).then(() => k(r, i)) : k(r, i);
}
function k(e, t) {
  const i = e.type, { getBuffer: r, push: o } = z();
  if (V(i)) {
    let a = x(e);
    if (!i.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((a.props || (a.props = {}))[n] = "");
    b(o, e.subTree = a, e, t);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !i.ssrRender && g(i.template) && (i.ssrRender = be(i.template));
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
      const p = w(e);
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
        w(p);
      }
    } else e.render && e.render !== y ? b(
      o,
      e.subTree = x(e),
      e,
      t
    ) : (i.name || i.__file, o("<!---->"));
  }
  return r();
}
function b(e, t, i, r) {
  const { type: o, shapeFlag: a, children: n, dirs: s, props: c } = t;
  switch (s && (t.props = ke(t, c, s)), o) {
    case O:
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
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), v(
        e,
        n,
        i,
        r
      ), e("<!--]-->");
      break;
    default:
      a & 1 ? xe(e, t, i, r) : a & 6 ? e(T(t, i, r)) : a & 64 ? _e(e, t, i, r) : a & 128 && b(e, t.ssContent, i, r);
  }
}
function v(e, t, i, r) {
  for (let o = 0; o < t.length; o++)
    b(e, we(t[o]), i, r);
}
function xe(e, t, i, r) {
  const o = t.type;
  let { props: a, children: n, shapeFlag: s, scopeId: c } = t, p = `<${o}`;
  a && (p += pe(a, o)), c && (p += ` ${c}`);
  let d = i, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (p += ` ${l.scopeId}`), d = d.parent;
  if (r && (p += ` ${r}`), e(p + ">"), !U(o)) {
    let u = !1;
    a && (a.innerHTML ? (u = !0, e(a.innerHTML)) : a.textContent ? (u = !0, e(f(a.textContent))) : o === "textarea" && a.value && (u = !0, e(f(a.value)))), u || (s & 8 ? e(f(n)) : s & 16 && v(
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
  return P(t || {}, ...r);
}
function _e(e, t, i, r) {
  const o = t.props && t.props.to, a = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!g(o))
    return [];
  he(
    e,
    (n) => {
      v(
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
function m(e, t, i) {
  if (!e.hasAsync)
    return t + R(e);
  let r = t;
  for (let o = i; o < e.length; o += 1) {
    const a = e[o];
    if (g(a)) {
      r += a;
      continue;
    }
    if (h(a))
      return a.then((s) => (e[o] = s, m(e, r, o)));
    const n = m(a, r, 0);
    if (h(n))
      return n.then((s) => (e[o] = s, m(e, "", o)));
    r = n;
  }
  return r;
}
function A(e) {
  return m(e, "", 0);
}
function R(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    g(r) ? t += r : t += R(r);
  }
  return t;
}
async function $(e, t = {}) {
  if (Ce(e))
    return $(N({ render: () => e }), t);
  const i = E(e._component, e._props);
  i.appContext = e._context, e.provide(_, t);
  const r = await T(i), o = await A(r);
  if (await Se(t), t.__watcherHandles)
    for (const a of t.__watcherHandles)
      a();
  return o;
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
const Re = async (e) => ({
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
  Re as index,
  Re as renderer
};
