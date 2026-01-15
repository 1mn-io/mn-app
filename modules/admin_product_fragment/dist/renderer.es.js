import { g as B, s as _, f as N, h as E, i as C, j as m, N as y, k as V, l as u, F as M, S as j, C as H, m as L, T as U, n as f, p as S, q as F, t as I, u as O, v as P, w as D, x as G, y as K, z as W, A as q, B as J, D as Q, E as X, G as Y, H as Z, I as ee, J as te, d as re, c as oe, e as ie, K as ae, a as ne, L as le } from "./runtime-dom.esm-bundler-C-eixKsW.js";
function se(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", r === "top" && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
const ce = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-amber-100:oklch(96.2% .059 95.617);--color-amber-400:oklch(82.8% .189 84.429);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-700:oklch(55.5% .163 48.998);--color-emerald-100:oklch(95% .052 163.051);--color-emerald-400:oklch(76.5% .177 163.223);--color-emerald-500:oklch(69.6% .17 162.48);--color-emerald-700:oklch(50.8% .118 165.612);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-rose-100:oklch(94.1% .03 12.58);--color-rose-400:oklch(71.2% .194 13.428);--color-rose-500:oklch(64.5% .246 16.439);--color-rose-700:oklch(51.4% .222 16.935);--color-slate-100:oklch(96.8% .007 247.896);--color-slate-400:oklch(70.4% .04 256.788);--color-slate-700:oklch(37.2% .044 257.287);--color-slate-800:oklch(27.9% .041 260.031);--color-gray-700:oklch(37.3% .034 259.733);--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.sticky{position:sticky}.top-0{top:calc(var(--spacing)*0)}.z-10{z-index:10}.inline-flex{display:inline-flex}.table{display:table}.w-full{width:100%}.max-w-lg{max-width:var(--container-lg)}.items-center{align-items:center}.justify-center{justify-content:center}.rounded{border-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.border-transparent{border-color:#0000}.bg-amber-100{background-color:var(--color-amber-100)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-emerald-100{background-color:var(--color-emerald-100)}.bg-rose-100{background-color:var(--color-rose-100)}.bg-slate-100{background-color:var(--color-slate-100)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing)*1)}.px-2{padding-inline:calc(var(--spacing)*2)}.py-1{padding-block:calc(var(--spacing)*1)}.pt-3{padding-top:calc(var(--spacing)*3)}.pr-3{padding-right:calc(var(--spacing)*3)}.pb-3{padding-bottom:calc(var(--spacing)*3)}.pl-3{padding-left:calc(var(--spacing)*3)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-amber-700{color:var(--color-amber-700)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-emerald-700{color:var(--color-emerald-700)}.text-gray-700{color:var(--color-gray-700)}.text-rose-700{color:var(--color-rose-700)}.text-slate-700{color:var(--color-slate-700)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}@media(hover:hover){.hover\\:underline:hover{text-decoration-line:underline}}@media(prefers-color-scheme:dark){.dark\\:bg-amber-500\\/10{background-color:#f99c001a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-amber-500\\/10{background-color:color-mix(in oklab,var(--color-amber-500)10%,transparent)}}.dark\\:bg-blue-500\\/10{background-color:#3080ff1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-blue-500\\/10{background-color:color-mix(in oklab,var(--color-blue-500)10%,transparent)}}.dark\\:bg-emerald-500\\/10{background-color:#00bb7f1a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-emerald-500\\/10{background-color:color-mix(in oklab,var(--color-emerald-500)10%,transparent)}}.dark\\:bg-rose-500\\/10{background-color:#ff23571a}@supports (color:color-mix(in lab,red,red)){.dark\\:bg-rose-500\\/10{background-color:color-mix(in oklab,var(--color-rose-500)10%,transparent)}}.dark\\:bg-slate-800{background-color:var(--color-slate-800)}.dark\\:text-amber-400{color:var(--color-amber-400)}.dark\\:text-blue-400{color:var(--color-blue-400)}.dark\\:text-emerald-400{color:var(--color-emerald-400)}.dark\\:text-rose-400{color:var(--color-rose-400)}.dark\\:text-slate-400{color:var(--color-slate-400)}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}';
const de = /* @__PURE__ */ O(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function pe(e, t) {
  let r = "";
  for (const o in e) {
    if (de(o) || P(o) || t === "textarea" && o === "value")
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
  const t = G(be(e));
  return f(K(t));
}
function be(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = ee(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
function me(e, t, r, o, i) {
  e("<!--teleport start-->");
  const a = i.appContext.provides[C], n = a.__teleportBuffers || (a.__teleportBuffers = {}), l = n[r] || (n[r] = []), c = l.length;
  let p;
  if (o)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: s } = T();
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
function ge(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ye,
  setCurrentRenderingInstance: k,
  setupComponent: we,
  renderComponentRoot: v,
  normalizeVNode: ke
} = _;
function T() {
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
      t.push(r), e = o, (m(r) || S(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function z(e, t = null, r) {
  const o = e.component = ye(
    e,
    t,
    null
  ), i = we(
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
  }).catch(y).then(() => x(o, r)) : x(o, r);
}
function x(e, t) {
  const r = e.type, { getBuffer: o, push: i } = T();
  if (V(r)) {
    let a = v(e);
    if (!r.props)
      for (const n in e.attrs)
        n.startsWith("data-v-") && ((a.props || (a.props = {}))[n] = "");
    g(i, e.subTree = a, e, t);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !r.ssrRender && u(r.template) && (r.ssrRender = ge(r.template));
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
      const p = k(e);
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
        k(p);
      }
    } else e.render && e.render !== y ? g(
      i,
      e.subTree = v(e),
      e,
      t
    ) : (r.name || r.__file, i("<!---->"));
  }
  return o();
}
function g(e, t, r, o) {
  const { type: i, shapeFlag: a, children: n, dirs: l, props: c } = t;
  switch (l && (t.props = xe(t, c, l)), i) {
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
      t.slotScopeIds && (o = (o ? o + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), w(
        e,
        n,
        r,
        o
      ), e("<!--]-->");
      break;
    default:
      a & 1 ? ve(e, t, r, o) : a & 6 ? e(z(t, r, o)) : a & 64 ? _e(e, t, r, o) : a & 128 && g(e, t.ssContent, r, o);
  }
}
function w(e, t, r, o) {
  for (let i = 0; i < t.length; i++)
    g(e, ke(t[i]), r, o);
}
function ve(e, t, r, o) {
  const i = t.type;
  let { props: a, children: n, shapeFlag: l, scopeId: c } = t, p = `<${i}`;
  a && (p += pe(a, i)), c && (p += ` ${c}`);
  let d = r, s = t;
  for (; d && s === d.subTree; )
    s = d.vnode, s.scopeId && (p += ` ${s.scopeId}`), d = d.parent;
  if (o && (p += ` ${o}`), e(p + ">"), !I(i)) {
    let h = !1;
    a && (a.innerHTML ? (h = !0, e(a.innerHTML)) : a.textContent ? (h = !0, e(f(a.textContent))) : i === "textarea" && a.value && (h = !0, e(f(a.value)))), h || (l & 8 ? e(f(n)) : l & 16 && w(
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
  return F(t || {}, ...o);
}
function _e(e, t, r, o) {
  const i = t.props && t.props.to, a = t.props && t.props.disabled;
  if (!i)
    return [];
  if (!u(i))
    return [];
  me(
    e,
    (n) => {
      w(
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
const { isVNode: Ce } = _;
function b(e, t, r) {
  if (!e.hasAsync)
    return t + A(e);
  let o = t;
  for (let i = r; i < e.length; i += 1) {
    const a = e[i];
    if (u(a)) {
      o += a;
      continue;
    }
    if (m(a))
      return a.then((l) => (e[i] = l, b(e, o, i)));
    const n = b(a, o, 0);
    if (m(n))
      return n.then((l) => (e[i] = l, b(e, "", i)));
    o = n;
  }
  return o;
}
function $(e) {
  return b(e, "", 0);
}
function A(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    u(o) ? t += o : t += A(o);
  }
  return t;
}
async function R(e, t = {}) {
  if (Ce(e))
    return R(N({ render: () => e }), t);
  const r = E(e._component, e._props);
  r.appContext = e._context, e.provide(C, t);
  const o = await z(r), i = await $(o);
  if (await Se(t), t.__watcherHandles)
    for (const a of t.__watcherHandles)
      a();
  return i;
}
async function Se(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await $(
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
    return (t, r) => (ne(), oe("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      ie("p", null, ae(e._$p.data.curr.data.data), 1)
    ], 8, Te));
  }
});
se(ce);
const Ae = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const o = le(ze, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await R(o)}
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
