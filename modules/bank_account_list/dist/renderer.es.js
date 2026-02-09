import { m as B, l as E, e as N, s as _, p as C, q as m, N as w, v as V, x as h, F as M, S as j, C as U, y as H, T as L, z as p, A as O, B as P, D as z, E as F, G as I, n as D, H as G, I as W, J as K, K as q, L as J, M as Q, O as X, P as Y, Q as Z, R as ee, U as te, d as re, c as oe, o as ie, V as ne } from "./runtime-dom.esm-bundler-DSnzm-ld.js";
function ae(e, t) {
  t === void 0 && (t = {});
  var o = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", o === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const se = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-violet-500:oklch(60.6% .25 292.717);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-2xl:42rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-medium:500;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mx-auto{margin-inline:auto}.my-4{margin-block:calc(var(--spacing)*4)}.mt-2{margin-top:calc(var(--spacing)*2)}.block{display:block}.flex{display:flex}.h-4{height:calc(var(--spacing)*4)}.w-4{width:calc(var(--spacing)*4)}.w-full{width:100%}.max-w-2xl{max-width:var(--container-2xl)}.flex-1{flex:1}.cursor-pointer{cursor:pointer}.items-center{align-items:center}.justify-between{justify-content:space-between}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-black\\/20{border-color:#0003}@supports (color:color-mix(in lab,red,red)){.border-black\\/20{border-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.bg-white{background-color:var(--color-white)}.p-2{padding:calc(var(--spacing)*2)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.pt-4{padding-top:calc(var(--spacing)*4)}.pl-2{padding-left:calc(var(--spacing)*2)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.text-black\\/20{color:#0003}@supports (color:color-mix(in lab,red,red)){.text-black\\/20{color:color-mix(in oklab,var(--color-black)20%,transparent)}}.text-blue-600{color:var(--color-blue-600)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-violet-500{color:var(--color-violet-500)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@media(hover:hover){.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.dark\\:border-white\\/20:where(.dark .dark\\:border-white\\/20){border-color:#fff3}@supports (color:color-mix(in lab,red,red)){.dark\\:border-white\\/20:where(.dark .dark\\:border-white\\/20){border-color:color-mix(in oklab,var(--color-white)20%,transparent)}}.dark\\:bg-zinc-800:where(.dark .dark\\:bg-zinc-800){background-color:var(--color-zinc-800)}.dark\\:bg-zinc-900:where(.dark .dark\\:bg-zinc-900){background-color:var(--color-zinc-900)}.dark\\:text-white:where(.dark .dark\\:text-white){color:var(--color-white)}@media(hover:hover){.dark\\:hover\\:bg-zinc-700:where(.dark .dark\\:hover\\:bg-zinc-700):hover{background-color:var(--color-zinc-700)}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}';
const le = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ce(e, t) {
  let o = "";
  for (let r in e) {
    if (le(r) || F(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const i = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? o += ` class="${fe(i)}"` : r === "style" ? o += ` style="${pe(i)}"` : o += de(r, i, t);
  }
  return o;
}
function de(e, t, o) {
  if (!K(t))
    return "";
  const r = o && (o.indexOf("-") > 0 || q(o)) ? e : J[e] || e.toLowerCase();
  return Q(r) ? X(t) ? ` ${r}` : "" : Y(r) ? t === "" ? ` ${r}` : ` ${r}="${p(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function fe(e) {
  return p(D(e));
}
function pe(e) {
  if (!e)
    return "";
  if (h(e))
    return p(e);
  const t = G(he(e));
  return p(W(t));
}
function he(e) {
  if (!z(e) && Z(e)) {
    const t = {};
    for (const o in e)
      o.startsWith(":--") ? t[o.slice(1)] = ee(e[o]) : t[o] = e[o];
    return t;
  }
  return e;
}
function ue(e, t, o, r, i) {
  e("<!--teleport start-->");
  const n = i.appContext.provides[_], a = n.__teleportBuffers || (n.__teleportBuffers = {}), s = a[o] || (a[o] = []), c = s.length;
  let f;
  if (r)
    t(e), f = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = S();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), f = d();
  }
  s.splice(c, 0, f), e("<!--teleport end-->");
}
{
  const e = B(), t = (o, r) => {
    let i;
    return (i = e[o]) || (i = e[o] = []), i.push(r), (n) => {
      i.length > 1 ? i.forEach((a) => a(n)) : i[0](n);
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
function ge(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: me,
  setCurrentRenderingInstance: x,
  setupComponent: be,
  renderComponentRoot: v,
  normalizeVNode: we
} = C;
function S() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(o) {
      const r = h(o);
      if (e && r) {
        t[t.length - 1] += o;
        return;
      }
      t.push(o), e = r, (m(o) || z(o) && o.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, o) {
  const r = e.component = me(
    e,
    t,
    null
  ), i = be(
    r,
    !0
    /* isSSR */
  ), n = m(i);
  let a = r.sp;
  return n || a ? Promise.resolve(i).then(() => {
    if (n && (a = r.sp), a)
      return Promise.all(
        a.map((c) => c.call(r.proxy))
      );
  }).catch(w).then(() => k(r, o)) : k(r, o);
}
function k(e, t) {
  const o = e.type, { getBuffer: r, push: i } = S();
  if (V(o)) {
    let n = v(e);
    if (!o.props)
      for (const a in e.attrs)
        a.startsWith("data-v-") && ((n.props || (n.props = {}))[a] = "");
    b(i, e.subTree = n, e, t);
  } else {
    (!e.render || e.render === w) && !e.ssrRender && !o.ssrRender && h(o.template) && (o.ssrRender = ge(o.template));
    const n = e.ssrRender || o.ssrRender;
    if (n) {
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
      const f = x(e);
      try {
        n(
          e.proxy,
          i,
          e,
          a,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        x(f);
      }
    } else e.render && e.render !== w ? b(
      i,
      e.subTree = v(e),
      e,
      t
    ) : (o.name || o.__file, i("<!---->"));
  }
  return r();
}
function b(e, t, o, r) {
  const { type: i, shapeFlag: n, children: a, dirs: s, props: c } = t;
  switch (s && (t.props = xe(t, c, s)), i) {
    case L:
      e(p(a));
      break;
    case U:
      e(
        a ? `<!--${H(a)}-->` : "<!---->"
      );
      break;
    case j:
      e(a);
      break;
    case M:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), y(
        e,
        a,
        o,
        r
      ), e("<!--]-->");
      break;
    default:
      n & 1 ? ye(e, t, o, r) : n & 6 ? e(T(t, o, r)) : n & 64 ? ve(e, t, o, r) : n & 128 && b(e, t.ssContent, o, r);
  }
}
function y(e, t, o, r) {
  for (let i = 0; i < t.length; i++)
    b(e, we(t[i]), o, r);
}
function ye(e, t, o, r) {
  const i = t.type;
  let { props: n, children: a, shapeFlag: s, scopeId: c } = t, f = `<${i}`;
  n && (f += ce(n, i)), c && (f += ` ${c}`);
  let d = o, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (f += ` ${l.scopeId}`), d = d.parent;
  if (r && (f += ` ${r}`), e(f + ">"), !P(i)) {
    let u = !1;
    n && (n.innerHTML ? (u = !0, e(n.innerHTML)) : n.textContent ? (u = !0, e(p(n.textContent))) : i === "textarea" && n.value && (u = !0, e(p(n.value)))), u || (s & 8 ? e(p(a)) : s & 16 && y(
      e,
      a,
      o,
      r
    )), e(`</${i}>`);
  }
}
function xe(e, t, o) {
  const r = [];
  for (let i = 0; i < o.length; i++) {
    const n = o[i], {
      dir: { getSSRProps: a }
    } = n;
    if (a) {
      const s = a(n, e);
      s && r.push(s);
    }
  }
  return O(t || {}, ...r);
}
function ve(e, t, o, r) {
  const i = t.props && t.props.to, n = t.props && t.props.disabled;
  if (!i)
    return [];
  if (!h(i))
    return [];
  ue(
    e,
    (a) => {
      y(
        a,
        t.children,
        o,
        r
      );
    },
    i,
    n || n === "",
    o
  );
}
const { isVNode: ke } = C;
function g(e, t, o) {
  if (!e.hasAsync)
    return t + A(e);
  let r = t;
  for (let i = o; i < e.length; i += 1) {
    const n = e[i];
    if (h(n)) {
      r += n;
      continue;
    }
    if (m(n))
      return n.then((s) => (e[i] = s, g(e, r, i)));
    const a = g(n, r, 0);
    if (m(a))
      return a.then((s) => (e[i] = s, g(e, "", i)));
    r = a;
  }
  return r;
}
function R(e) {
  return g(e, "", 0);
}
function A(e) {
  let t = "";
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    h(r) ? t += r : t += A(r);
  }
  return t;
}
async function $(e, t = {}) {
  if (ke(e))
    return $(E({ render: () => e }), t);
  const o = N(e._component, e._props);
  o.appContext = e._context, e.provide(_, t);
  const r = await T(o), i = await R(r);
  if (await _e(t), t.__watcherHandles)
    for (const n of t.__watcherHandles)
      n();
  return i;
}
async function _e(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await R(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const Ce = ["id"], ze = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, o) => (ie(), oe("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Ce));
  }
});
ae(se);
const Te = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = ne(ze, {
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
  Te as index,
  Te as renderer
};
