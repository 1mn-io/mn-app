import { k as B, s as z, j as N, l as E, m as _, p as m, N as w, q as V, t as u, F as j, S as M, C as U, v as H, T as L, x as f, y as C, z as O, A as P, B as F, D as I, h as D, E as G, G as K, H as W, I as q, J, K as Q, L as X, M as Y, O as Z, P as ee, Q as te, d as re, b as oe, f as ie, R as ae, e as ne, U as le } from "./runtime-dom.esm-bundler-BZthCCKq.js";
function se(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const ce = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-amber-100:oklch(96.2% .059 95.617);--color-amber-400:oklch(82.8% .189 84.429);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-400:oklch(76.5% .177 163.223);--color-emerald-500:oklch(69.6% .17 162.48);--color-emerald-700:oklch(50.8% .118 165.612);--color-indigo-500:oklch(58.5% .233 277.117);--color-indigo-600:oklch(51.1% .262 276.966);--color-rose-100:oklch(94.1% .03 12.58);--color-rose-400:oklch(71.2% .194 13.428);--color-rose-500:oklch(64.5% .246 16.439);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-500:oklch(55.4% .046 257.417);--color-slate-600:oklch(44.6% .043 257.281);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-slate-900:oklch(20.8% .042 265.755);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-widest:.1em;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:calc(var(--spacing)*0)}.mt-1{margin-top:calc(var(--spacing)*1)}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.h-2{height:calc(var(--spacing)*2)}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-2{width:calc(var(--spacing)*2)}.w-full{width:100%}.flex-1{flex:1}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-slate-200{border-color:var(--color-slate-200)}.border-slate-300{border-color:var(--color-slate-300)}.border-transparent{border-color:#0000}.border-zinc-700{border-color:var(--color-zinc-700)}.border-zinc-800{border-color:var(--color-zinc-800)}.bg-\\[\\#09090b\\]{background-color:#09090b}.bg-amber-100{background-color:var(--color-amber-100)}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-indigo-500{background-color:var(--color-indigo-500)}.bg-rose-100{background-color:var(--color-rose-100)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-white{background-color:var(--color-white)}.bg-zinc-800{background-color:var(--color-zinc-800)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-6{padding-inline:calc(var(--spacing)*6)}.py-1{padding-block:calc(var(--spacing)*1)}.py-4{padding-block:calc(var(--spacing)*4)}.py-20{padding-block:calc(var(--spacing)*20)}.text-center{text-align:center}.font-mono{font-family:var(--font-mono)}.font-sans{font-family:var(--font-sans)}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-amber-400{color:var(--color-amber-400)}.text-amber-700{color:var(--color-amber-700)}.text-emerald-700{color:var(--color-emerald-700)}.text-rose-700{color:var(--color-rose-700)}.text-slate-500{color:var(--color-slate-500)}.text-slate-600{color:var(--color-slate-600)}.text-slate-700{color:var(--color-slate-700)}.text-slate-800{color:var(--color-slate-800)}.text-slate-900{color:var(--color-slate-900)}.text-white{color:var(--color-white)}.text-zinc-200{color:var(--color-zinc-200)}.text-zinc-400{color:var(--color-zinc-400)}.uppercase{text-transform:uppercase}.opacity-40{opacity:.4}.opacity-50{opacity:.5}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-300{--tw-duration:.3s;transition-duration:.3s}@media(hover:hover){.hover\\:text-indigo-600:hover{color:var(--color-indigo-600)}.hover\\:text-white:hover{color:var(--color-white)}}@media(min-width:48rem){.md\\:w-auto{width:auto}.md\\:flex-row{flex-direction:row}}@media(prefers-color-scheme:dark){.dark\\:bg-amber-500\\/10{background-color:#f99c001a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-amber-500\\/10{background-color:color-mix(in oklab,var(--color-amber-500)10%,transparent)}}.dark\\:bg-emerald-500\\/10{background-color:#00bb7f1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-emerald-500\\/10{background-color:color-mix(in oklab,var(--color-emerald-500)10%,transparent)}}.dark\\:bg-rose-500\\/10{background-color:#ff23571a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-rose-500\\/10{background-color:color-mix(in oklab,var(--color-rose-500)10%,transparent)}}.dark\\:bg-slate-800{background-color:var(--color-slate-800)}.dark\\:text-amber-400{color:var(--color-amber-400)}.dark\\:text-emerald-400{color:var(--color-emerald-400)}.dark\\:text-rose-400{color:var(--color-rose-400)}.dark\\:text-slate-400{color:var(--color-slate-400)}.dark\\:text-zinc-100{color:var(--color-zinc-100)}.dark\\:text-zinc-300{color:var(--color-zinc-300)}.dark\\:text-zinc-400{color:var(--color-zinc-400)}.dark\\:text-zinc-500{color:var(--color-zinc-500)}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}';
const de = /* @__PURE__ */ F(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pe(e, t) {
  let r = "";
  for (const o in e) {
    if (de(o) || I(o) || t === "textarea" && o === "value")
      continue;
    const i = e[o];
    o === "class" ? r += ` class="${ue(i)}"` : o === "style" ? r += ` style="${he(i)}"` : o === "className" ? r += ` class="${String(i)}"` : r += fe(o, i, t);
  }
  return r;
}
function fe(e, t, r) {
  if (!W(t))
    return "";
  const o = r && (r.indexOf("-") > 0 || q(r)) ? e : J[e] || e.toLowerCase();
  return Q(o) ? X(t) ? ` ${o}` : "" : Y(o) ? t === "" ? ` ${o}` : ` ${o}="${f(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${o}`
  ), "");
}
function ue(e) {
  return f(D(e));
}
function he(e) {
  if (!e)
    return "";
  if (u(e))
    return f(e);
  const t = G(ge(e));
  return f(K(t));
}
function ge(e) {
  if (!C(e) && Z(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = ee(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
function me(e, t, r, o, i) {
  e("<!--teleport start-->");
  const a = i.appContext.provides[_], n = a.__teleportBuffers || (a.__teleportBuffers = {}), l = n[r] || (n[r] = []), c = l.length;
  let p;
  if (o)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = S();
    s("<!--teleport start anchor-->"), t(s), s("<!--teleport anchor-->"), p = d();
  }
  l.splice(c, 0, p), e("<!--teleport end-->");
}
{
  const e = B(), t = (r, o) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(o), (a) => {
      i.length > 1 ? i.forEach((n) => n(a)) : i[0](a);
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
function be(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: we,
  setCurrentRenderingInstance: y,
  setupComponent: ve,
  renderComponentRoot: k,
  normalizeVNode: ye
} = z;
function S() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const o = u(r);
      if (e && o) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = o, (m(r) || C(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, r) {
  const o = e.component = we(
    e,
    t,
    null
  ), i = ve(
    o,
    !0
    /* isSSR */
  ), a = m(i);
  let n = o.sp;
  return a || n ? Promise.resolve(i).then(() => {
    if (a && (n = o.sp), n)
      return Promise.all(
        n.map((c) => c.call(o.proxy))
      );
  }).catch(w).then(() => x(o, r)) : x(o, r);
}
function x(e, t) {
  const r = e.type, { getBuffer: o, push: i } = S();
  if (V(r)) {
    let a = k(e);
    if (!r.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((a.props || (a.props = {}))[n] = "");
    b(i, e.subTree = a, e, t);
  } else {
    (!e.render || e.render === w) && !e.ssrRender && !r.ssrRender && u(r.template) && (r.ssrRender = be(r.template));
    const a = e.ssrRender || r.ssrRender;
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
      const p = y(e);
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
        y(p);
      }
    } else e.render && e.render !== w ? b(
      i,
      e.subTree = k(e),
      e,
      t
    ) : (r.name || r.__file, i("<!---->"));
  }
  return o();
}
function b(e, t, r, o) {
  const { type: i, shapeFlag: a, children: n, dirs: l, props: c } = t;
  switch (l && (t.props = xe(t, c, l)), i) {
    case L:
      e(f(n));
      break;
    case U:
      e(
        n ? `<!--${H(n)}-->` : "<!---->"
      );
      break;
    case M:
      e(n);
      break;
    case j:
      t.slotScopeIds && (o = (o ? o + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), v(
        e,
        n,
        r,
        o
      ), e("<!--]-->");
      break;
    default:
      a & 1 ? ke(e, t, r, o) : a & 6 ? e(T(t, r, o)) : a & 64 ? ze(e, t, r, o) : a & 128 && b(e, t.ssContent, r, o);
  }
}
function v(e, t, r, o) {
  for (let i = 0; i < t.length; i++)
    b(e, ye(t[i]), r, o);
}
function ke(e, t, r, o) {
  const i = t.type;
  let { props: a, children: n, shapeFlag: l, scopeId: c } = t, p = `<${i}`;
  a && (p += pe(a, i)), c && (p += ` ${c}`);
  let d = r, s = t;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (o && (p += ` ${o}`), e(p + ">"), !P(i)) {
    let h = !1;
    a && (a.innerHTML ? (h = !0, e(a.innerHTML)) : a.textContent ? (h = !0, e(f(a.textContent))) : i === "textarea" && a.value && (h = !0, e(f(a.value)))), h || (l & 8 ? e(f(n)) : l & 16 && v(
      e,
      n,
      r,
      o
    )), e(`</${i}>`);
  }
}
function xe(e, t, r) {
  const o = [];
  for (let i = 0; i < r.length; i++) {
    const a = r[i], {
      dir: { getSSRProps: n }
    } = a;
    if (n) {
      const l = n(a, e);
      l && o.push(l);
    }
  }
  return O(t || {}, ...o);
}
function ze(e, t, r, o) {
  const i = t.props && t.props.to, a = t.props && t.props.disabled;
  if (!i)
    return [];
  if (!u(i))
    return [];
  me(
    e,
    (n) => {
      v(
        n,
        t.children,
        r,
        o
      );
    },
    i,
    a || a === "",
    r
  );
}
const { isVNode: _e } = z;
function g(e, t, r) {
  if (!e.hasAsync)
    return t + R(e);
  let o = t;
  for (let i = r; i < e.length; i += 1) {
    const a = e[i];
    if (u(a)) {
      o += a;
      continue;
    }
    if (m(a))
      return a.then((l) => (e[i] = l, g(e, o, i)));
    const n = g(a, o, 0);
    if (m(n))
      return n.then((l) => (e[i] = l, g(e, "", i)));
    o = n;
  }
  return o;
}
function $(e) {
  return g(e, "", 0);
}
function R(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    u(o) ? t += o : t += R(o);
  }
  return t;
}
async function A(e, t = {}) {
  if (_e(e))
    return A(N({ render: () => e }), t);
  const r = E(e._component, e._props);
  r.appContext = e._context, e.provide(_, t);
  const o = await T(r), i = await $(o);
  if (await Ce(t), t.__watcherHandles)
    for (const a of t.__watcherHandles)
      a();
  return i;
}
async function Ce(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await $(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const Se = ["id"], Te = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, r) => (ne(), oe("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      ie("p", null, ae(e._$p.data.curr.data.data), 1)
    ], 8, Se));
  }
});
se(ce);
const Re = async (e) => ({
  set: async (t, r) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const i = le(Te, {
      _p: e,
      _$p: t,
      _$cb: r
    });
    return {
      r: `
                 <div>
                    ${await A(i)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let l = "";
        return l = `
                @import url('${e.f.path("/sample.css")}');
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, l;
      })()
    };
  }
});
export {
  Re as index,
  Re as renderer
};
