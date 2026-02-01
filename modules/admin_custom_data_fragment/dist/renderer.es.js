import { g as B, f as N, h as E, s as _, i as C, j as h, N as k, k as V, l as u, F as M, S as j, C as H, m as L, T as U, n as f, p as F, q as I, t as S, u as O, v as P, w as D, x as G, y as W, z as K, A as q, B as J, D as Q, E as X, G as Y, H as Z, I as ee, J as re, d as te, c as oe, b as ie, K as ae, a as ne, L as le } from "./runtime-dom.esm-bundler-BEcgbega.js";
function se(e, r) {
  r === void 0 && (r = {});
  var o = r.insertAt;
  if (!(typeof document > "u")) {
    var t = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", o === "top" && t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const ce = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-tracking:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-amber-100:oklch(96.2% .059 95.617);--color-amber-400:oklch(82.8% .189 84.429);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-green-100:oklch(96.2% .044 156.743);--color-green-400:oklch(79.2% .209 151.711);--color-green-500:oklch(72.3% .219 149.579);--color-green-700:oklch(52.7% .154 150.069);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-400:oklch(76.5% .177 163.223);--color-emerald-500:oklch(69.6% .17 162.48);--color-emerald-700:oklch(50.8% .118 165.612);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-purple-100:oklch(94.6% .033 307.174);--color-purple-400:oklch(71.4% .203 305.504);--color-purple-500:oklch(62.7% .265 303.9);--color-purple-700:oklch(49.6% .265 301.924);--color-rose-100:oklch(94.1% .03 12.58);--color-rose-400:oklch(71.2% .194 13.428);--color-rose-500:oklch(64.5% .246 16.439);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.sticky{position:sticky}.top-0{top:calc(var(--spacing)*0)}.z-10{z-index:10}.inline-flex{display:inline-flex}.table{display:table}.w-full{width:100%}.max-w-lg{max-width:var(--container-lg)}.cursor-pointer{cursor:pointer}.items-center{align-items:center}.justify-center{justify-content:center}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-transparent{border-color:#0000}.bg-amber-100{background-color:var(--color-amber-100)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-green-100{background-color:var(--color-green-100)}.bg-purple-100{background-color:var(--color-purple-100)}.bg-rose-100{background-color:var(--color-rose-100)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.pt-3{padding-top:calc(var(--spacing)*3)}.pr-3{padding-right:calc(var(--spacing)*3)}.pb-3{padding-bottom:calc(var(--spacing)*3)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[10px\\]{font-size:10px}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.text-amber-700{color:var(--color-amber-700)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-emerald-700{color:var(--color-emerald-700)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-green-700{color:var(--color-green-700)}.text-purple-700{color:var(--color-purple-700)}.text-rose-700{color:var(--color-rose-700)}.text-slate-700{color:var(--color-slate-700)}.uppercase{text-transform:uppercase}.underline{text-decoration-line:underline}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}@media(hover:hover){.hover\\:underline:hover{text-decoration-line:underline}}@media(prefers-color-scheme:dark){.dark\\:bg-amber-500\\/10{background-color:#f99c001a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-amber-500\\/10{background-color:color-mix(in oklab,var(--color-amber-500)10%,transparent)}}.dark\\:bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500)10%,transparent)}}.dark\\:bg-emerald-500\\/10{background-color:#00bb7f1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-emerald-500\\/10{background-color:color-mix(in oklab,var(--color-emerald-500)10%,transparent)}}.dark\\:bg-gray-500\\/10{background-color:#6a72821a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-gray-500\\/10{background-color:color-mix(in oklab,var(--color-gray-500)10%,transparent)}}.dark\\:bg-green-500\\/10{background-color:#00c7581a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-green-500\\/10{background-color:color-mix(in oklab,var(--color-green-500)10%,transparent)}}.dark\\:bg-purple-500\\/10{background-color:#ac4bff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-purple-500\\/10{background-color:color-mix(in oklab,var(--color-purple-500)10%,transparent)}}.dark\\:bg-rose-500\\/10{background-color:#ff23571a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-rose-500\\/10{background-color:color-mix(in oklab,var(--color-rose-500)10%,transparent)}}.dark\\:bg-slate-800{background-color:var(--color-slate-800)}.dark\\:text-amber-400{color:var(--color-amber-400)}.dark\\:text-blue-400{color:var(--color-blue-400)}.dark\\:text-emerald-400{color:var(--color-emerald-400)}.dark\\:text-gray-400{color:var(--color-gray-400)}.dark\\:text-green-400{color:var(--color-green-400)}.dark\\:text-purple-400{color:var(--color-purple-400)}.dark\\:text-rose-400{color:var(--color-rose-400)}.dark\\:text-slate-400{color:var(--color-slate-400)}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}';
const de = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pe(e, r) {
  let o = "";
  for (let t in e) {
    if (de(t) || O(t) || r === "textarea" && t === "value" || // force as property (not rendered in SSR)
    t.startsWith("."))
      continue;
    const i = e[t];
    t.startsWith("^") && (t = t.slice(1)), t === "class" || t === "className" ? o += ` class="${ue(i)}"` : t === "style" ? o += ` style="${ge(i)}"` : o += fe(t, i, r);
  }
  return o;
}
function fe(e, r, o) {
  if (!K(r))
    return "";
  const t = o && (o.indexOf("-") > 0 || q(o)) ? e : J[e] || e.toLowerCase();
  return Q(t) ? X(r) ? ` ${t}` : "" : Y(t) ? r === "" ? ` ${t}` : ` ${t}="${f(r)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${t}`
  ), "");
}
function ue(e) {
  return f(D(e));
}
function ge(e) {
  if (!e)
    return "";
  if (u(e))
    return f(e);
  const r = G(be(e));
  return f(W(r));
}
function be(e) {
  if (!S(e) && Z(e)) {
    const r = {};
    for (const o in e)
      o.startsWith(":--") ? r[o.slice(1)] = ee(e[o]) : r[o] = e[o];
    return r;
  }
  return e;
}
function he(e, r, o, t, i) {
  e("<!--teleport start-->");
  const a = i.appContext.provides[_], n = a.__teleportBuffers || (a.__teleportBuffers = {}), l = n[o] || (n[o] = []), c = l.length;
  let p;
  if (t)
    r(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = T();
    s("<!--teleport start anchor-->"), r(s), s("<!--teleport anchor-->"), p = d();
  }
  l.splice(c, 0, p), e("<!--teleport end-->");
}
{
  const e = B(), r = (o, t) => {
    let i;
    return (i = e[o]) || (i = e[o] = []), i.push(t), (a) => {
      i.length > 1 ? i.forEach((n) => n(a)) : i[0](a);
    };
  };
  r(
    "__VUE_INSTANCE_SETTERS__",
    (o) => o
  ), r(
    "__VUE_SSR_SETTERS__",
    (o) => o
  );
}
function me(e, r) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ke,
  setCurrentRenderingInstance: w,
  setupComponent: ye,
  renderComponentRoot: v,
  normalizeVNode: we
} = C;
function T() {
  let e = !1;
  const r = [];
  return {
    getBuffer() {
      return r;
    },
    push(o) {
      const t = u(o);
      if (e && t) {
        r[r.length - 1] += o;
        return;
      }
      r.push(o), e = t, (h(o) || S(o) && o.hasAsync) && (r.hasAsync = !0);
    }
  };
}
function z(e, r = null, o) {
  const t = e.component = ke(
    e,
    r,
    null
  ), i = ye(
    t,
    !0
    /* isSSR */
  ), a = h(i);
  let n = t.sp;
  return a || n ? Promise.resolve(i).then(() => {
    if (a && (n = t.sp), n)
      return Promise.all(
        n.map((c) => c.call(t.proxy))
      );
  }).catch(k).then(() => x(t, o)) : x(t, o);
}
function x(e, r) {
  const o = e.type, { getBuffer: t, push: i } = T();
  if (V(o)) {
    let a = v(e);
    if (!o.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((a.props || (a.props = {}))[n] = "");
    m(i, e.subTree = a, e, r);
  } else {
    (!e.render || e.render === k) && !e.ssrRender && !o.ssrRender && u(o.template) && (o.ssrRender = me(o.template));
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
      if (r) {
        l || (n = { ...n });
        const d = r.trim().split(" ");
        for (let s = 0; s < d.length; s++)
          n[d[s]] = "";
      }
      const p = w(e);
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
        w(p);
      }
    } else e.render && e.render !== k ? m(
      i,
      e.subTree = v(e),
      e,
      r
    ) : (o.name || o.__file, i("<!---->"));
  }
  return t();
}
function m(e, r, o, t) {
  const { type: i, shapeFlag: a, children: n, dirs: l, props: c } = r;
  switch (l && (r.props = xe(r, c, l)), i) {
    case U:
      e(f(n));
      break;
    case H:
      e(
        n ? `<!--${L(n)}-->` : "<!---->"
      );
      break;
    case j:
      e(n);
      break;
    case M:
      r.slotScopeIds && (t = (t ? t + " " : "") + r.slotScopeIds.join(" ")), e("<!--[-->"), y(
        e,
        n,
        o,
        t
      ), e("<!--]-->");
      break;
    default:
      a & 1 ? ve(e, r, o, t) : a & 6 ? e(z(r, o, t)) : a & 64 ? _e(e, r, o, t) : a & 128 && m(e, r.ssContent, o, t);
  }
}
function y(e, r, o, t) {
  for (let i = 0; i < r.length; i++)
    m(e, we(r[i]), o, t);
}
function ve(e, r, o, t) {
  const i = r.type;
  let { props: a, children: n, shapeFlag: l, scopeId: c } = r, p = `<${i}`;
  a && (p += pe(a, i)), c && (p += ` ${c}`);
  let d = o, s = r;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (t && (p += ` ${t}`), e(p + ">"), !I(i)) {
    let g = !1;
    a && (a.innerHTML ? (g = !0, e(a.innerHTML)) : a.textContent ? (g = !0, e(f(a.textContent))) : i === "textarea" && a.value && (g = !0, e(f(a.value)))), g || (l & 8 ? e(f(n)) : l & 16 && y(
      e,
      n,
      o,
      t
    )), e(`</${i}>`);
  }
}
function xe(e, r, o) {
  const t = [];
  for (let i = 0; i < o.length; i++) {
    const a = o[i], {
      dir: { getSSRProps: n }
    } = a;
    if (n) {
      const l = n(a, e);
      l && t.push(l);
    }
  }
  return F(r || {}, ...t);
}
function _e(e, r, o, t) {
  const i = r.props && r.props.to, a = r.props && r.props.disabled;
  if (!i)
    return [];
  if (!u(i))
    return [];
  he(
    e,
    (n) => {
      y(
        n,
        r.children,
        o,
        t
      );
    },
    i,
    a || a === "",
    o
  );
}
const { isVNode: Ce } = C;
function b(e, r, o) {
  if (!e.hasAsync)
    return r + R(e);
  let t = r;
  for (let i = o; i < e.length; i += 1) {
    const a = e[i];
    if (u(a)) {
      t += a;
      continue;
    }
    if (h(a))
      return a.then((l) => (e[i] = l, b(e, t, i)));
    const n = b(a, t, 0);
    if (h(n))
      return n.then((l) => (e[i] = l, b(e, "", i)));
    t = n;
  }
  return t;
}
function A(e) {
  return b(e, "", 0);
}
function R(e) {
  let r = "";
  for (let o = 0; o < e.length; o++) {
    let t = e[o];
    u(t) ? r += t : r += R(t);
  }
  return r;
}
async function $(e, r = {}) {
  if (Ce(e))
    return $(N({ render: () => e }), r);
  const o = E(e._component, e._props);
  o.appContext = e._context, e.provide(_, r);
  const t = await z(o), i = await A(t);
  if (await Se(r), r.__watcherHandles)
    for (const a of r.__watcherHandles)
      a();
  return i;
}
async function Se(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const r in e.__teleportBuffers)
      e.teleports[r] = await A(
        await Promise.all([e.__teleportBuffers[r]])
      );
  }
}
re();
const Te = ["id"], ze = /* @__PURE__ */ te({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (r, o) => (ne(), oe("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      ie("p", null, ae(e._$p.data.curr.data.data), 1)
    ], 8, Te));
  }
});
se(ce);
const Re = async (e) => ({
  set: async (r) => {
    console.log(`--renderer [${r.data.curr.type}]`);
    const t = le(ze, {
      _p: e,
      _$p: r
    });
    return {
      r: `
                 <div>
                    ${await $(t)}
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
