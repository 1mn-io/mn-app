import { g as B, f as N, h as E, s as _, i as C, j as b, N as m, k as V, l as u, F as M, S as j, C as H, m as L, T as U, n as f, p as F, q as I, t as S, u as O, v as P, w as D, x as G, y as W, z as K, A as q, B as J, D as Q, E as X, G as Y, H as Z, I as ee, J as te, d as re, c as oe, b as ie, K as ae, a as ne, L as se } from "./runtime-dom.esm-bundler-BEcgbega.js";
function le(e, t) {
  t === void 0 && (t = {});
  var o = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", o === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const de = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-amber-100:oklch(96.2% .059 95.617);--color-amber-400:oklch(82.8% .189 84.429);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-400:oklch(76.5% .177 163.223);--color-emerald-500:oklch(69.6% .17 162.48);--color-emerald-600:oklch(59.6% .145 163.225);--color-emerald-700:oklch(50.8% .118 165.612);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-rose-100:oklch(94.1% .03 12.58);--color-rose-400:oklch(71.2% .194 13.428);--color-rose-500:oklch(64.5% .246 16.439);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.sticky{position:sticky}.top-0{top:calc(var(--spacing)*0)}.z-10{z-index:10}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.w-full{width:100%}.max-w-lg{max-width:var(--container-lg)}.items-center{align-items:center}.justify-center{justify-content:center}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-transparent{border-color:#0000}.bg-amber-100{background-color:var(--color-amber-100)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-emerald-500{background-color:var(--color-emerald-500)}.bg-rose-100{background-color:var(--color-rose-100)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.pt-3{padding-top:calc(var(--spacing)*3)}.pr-3{padding-right:calc(var(--spacing)*3)}.pb-3{padding-bottom:calc(var(--spacing)*3)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-amber-700{color:var(--color-amber-700)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-emerald-700{color:var(--color-emerald-700)}.text-gray-700{color:var(--color-gray-700)}.text-rose-700{color:var(--color-rose-700)}.text-slate-700{color:var(--color-slate-700)}.text-white{color:var(--color-white)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}@media(hover:hover){.hover\\:bg-emerald-600:hover{background-color:var(--color-emerald-600)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:shadow-md:hover{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@media(prefers-color-scheme:dark){.dark\\:bg-amber-500\\/10{background-color:#f99c001a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-amber-500\\/10{background-color:color-mix(in oklab,var(--color-amber-500)10%,transparent)}}.dark\\:bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500)10%,transparent)}}.dark\\:bg-emerald-500\\/10{background-color:#00bb7f1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-emerald-500\\/10{background-color:color-mix(in oklab,var(--color-emerald-500)10%,transparent)}}.dark\\:bg-rose-500\\/10{background-color:#ff23571a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-rose-500\\/10{background-color:color-mix(in oklab,var(--color-rose-500)10%,transparent)}}.dark\\:bg-slate-800{background-color:var(--color-slate-800)}.dark\\:text-amber-400{color:var(--color-amber-400)}.dark\\:text-blue-400{color:var(--color-blue-400)}.dark\\:text-emerald-400{color:var(--color-emerald-400)}.dark\\:text-rose-400{color:var(--color-rose-400)}.dark\\:text-slate-400{color:var(--color-slate-400)}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}';
const ce = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pe(e, t) {
  let o = "";
  for (let r in e) {
    if (ce(r) || O(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const i = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? o += ` class="${ue(i)}"` : r === "style" ? o += ` style="${he(i)}"` : o += fe(r, i, t);
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
function ue(e) {
  return f(D(e));
}
function he(e) {
  if (!e)
    return "";
  if (u(e))
    return f(e);
  const t = G(ge(e));
  return f(W(t));
}
function ge(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const o in e)
      o.startsWith(":--") ? t[o.slice(1)] = ee(e[o]) : t[o] = e[o];
    return t;
  }
  return e;
}
function be(e, t, o, r, i) {
  e("<!--teleport start-->");
  const a = i.appContext.provides[_], n = a.__teleportBuffers || (a.__teleportBuffers = {}), s = n[o] || (n[o] = []), d = s.length;
  let p;
  if (r)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: l } = T();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = c();
  }
  s.splice(d, 0, p), e("<!--teleport end-->");
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
function we(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: me,
  setCurrentRenderingInstance: v,
  setupComponent: ye,
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
      const r = u(o);
      if (e && r) {
        t[t.length - 1] += o;
        return;
      }
      t.push(o), e = r, (b(o) || S(o) && o.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function z(e, t = null, o) {
  const r = e.component = me(
    e,
    t,
    null
  ), i = ye(
    r,
    !0
    /* isSSR */
  ), a = b(i);
  let n = r.sp;
  return a || n ? Promise.resolve(i).then(() => {
    if (a && (n = r.sp), n)
      return Promise.all(
        n.map((d) => d.call(r.proxy))
      );
  }).catch(m).then(() => k(r, o)) : k(r, o);
}
function k(e, t) {
  const o = e.type, { getBuffer: r, push: i } = T();
  if (V(o)) {
    let a = x(e);
    if (!o.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((a.props || (a.props = {}))[n] = "");
    w(i, e.subTree = a, e, t);
  } else {
    (!e.render || e.render === m) && !e.ssrRender && !o.ssrRender && u(o.template) && (o.ssrRender = we(o.template));
    const a = e.ssrRender || o.ssrRender;
    if (a) {
      let n = e.inheritAttrs !== !1 ? e.attrs : void 0, s = !1, d = e;
      for (; ; ) {
        const c = d.vnode.scopeId;
        c && (s || (n = { ...n }, s = !0), n[c] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (t) {
        s || (n = { ...n });
        const c = t.trim().split(" ");
        for (let l = 0; l < c.length; l++)
          n[c[l]] = "";
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
    } else e.render && e.render !== m ? w(
      i,
      e.subTree = x(e),
      e,
      t
    ) : (o.name || o.__file, i("<!---->"));
  }
  return r();
}
function w(e, t, o, r) {
  const { type: i, shapeFlag: a, children: n, dirs: s, props: d } = t;
  switch (s && (t.props = ke(t, d, s)), i) {
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
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), y(
        e,
        n,
        o,
        r
      ), e("<!--]-->");
      break;
    default:
      a & 1 ? xe(e, t, o, r) : a & 6 ? e(z(t, o, r)) : a & 64 ? _e(e, t, o, r) : a & 128 && w(e, t.ssContent, o, r);
  }
}
function y(e, t, o, r) {
  for (let i = 0; i < t.length; i++)
    w(e, ve(t[i]), o, r);
}
function xe(e, t, o, r) {
  const i = t.type;
  let { props: a, children: n, shapeFlag: s, scopeId: d } = t, p = `<${i}`;
  a && (p += pe(a, i)), d && (p += ` ${d}`);
  let c = o, l = t;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (p += ` ${l.scopeId}`), c = c.parent;
  if (r && (p += ` ${r}`), e(p + ">"), !I(i)) {
    let h = !1;
    a && (a.innerHTML ? (h = !0, e(a.innerHTML)) : a.textContent ? (h = !0, e(f(a.textContent))) : i === "textarea" && a.value && (h = !0, e(f(a.value)))), h || (s & 8 ? e(f(n)) : s & 16 && y(
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
      const s = n(a, e);
      s && r.push(s);
    }
  }
  return F(t || {}, ...r);
}
function _e(e, t, o, r) {
  const i = t.props && t.props.to, a = t.props && t.props.disabled;
  if (!i)
    return [];
  if (!u(i))
    return [];
  be(
    e,
    (n) => {
      y(
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
function g(e, t, o) {
  if (!e.hasAsync)
    return t + R(e);
  let r = t;
  for (let i = o; i < e.length; i += 1) {
    const a = e[i];
    if (u(a)) {
      r += a;
      continue;
    }
    if (b(a))
      return a.then((s) => (e[i] = s, g(e, r, i)));
    const n = g(a, r, 0);
    if (b(n))
      return n.then((s) => (e[i] = s, g(e, "", i)));
    r = n;
  }
  return r;
}
function A(e) {
  return g(e, "", 0);
}
function R(e) {
  let t = "";
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    u(r) ? t += r : t += R(r);
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
le(de);
const Re = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = se(ze, {
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
