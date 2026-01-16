import { g as N, s as _, c as B, a as E, b as C, i as g, N as b, e as V, f as h, F as M, S as j, C as U, h as F, T as H, j as c, k as S, m as L, l as O, n as P, o as I, p as D, q as G, r as K, t as W, u as q, v as J, w as Q, x as X, y as Y, z as Z, A as ee, B as te, d as re, D as ie } from "./runtime-dom.esm-bundler-DX3hrXra.js";
function ne(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", r === "top" && i.firstChild ? i.insertBefore(n, i.firstChild) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
const oe = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--spacing:.25rem;--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.static{position:static}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.ml-6{margin-left:calc(var(--spacing)*6)}.block{display:block}.flex{display:flex}.grid{display:grid}.table{display:table}.min-h-screen{min-height:100vh}.w-32{width:calc(var(--spacing)*32)}.w-full{width:100%}.shrink-0{flex-shrink:0}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.overflow-hidden{overflow:hidden}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.px-8{padding-inline:calc(var(--spacing)*8)}.py-8{padding-block:calc(var(--spacing)*8)}.py-20{padding-block:calc(var(--spacing)*20)}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}@media(min-width:40rem){.sm\\:px-20{padding-inline:calc(var(--spacing)*20)}}@media(min-width:64rem){.lg\\:text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.lg\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}';
const ae = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function se(e, t) {
  let r = "";
  for (const i in e) {
    if (ae(i) || I(i) || t === "textarea" && i === "value")
      continue;
    const n = e[i];
    i === "class" ? r += ` class="${de(n)}"` : i === "style" ? r += ` style="${fe(n)}"` : i === "className" ? r += ` class="${String(n)}"` : r += le(i, n, t);
  }
  return r;
}
function le(e, t, r) {
  if (!W(t))
    return "";
  const i = r && (r.indexOf("-") > 0 || q(r)) ? e : J[e] || e.toLowerCase();
  return Q(i) ? X(t) ? ` ${i}` : "" : Y(i) ? t === "" ? ` ${i}` : ` ${i}="${c(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${i}`
  ), "");
}
function de(e) {
  return c(D(e));
}
function fe(e) {
  if (!e)
    return "";
  if (h(e))
    return c(e);
  const t = G(pe(e));
  return c(K(t));
}
function pe(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = ee(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
function ce(e, t, r, i, n) {
  e("<!--teleport start-->");
  const o = n.appContext.provides[C], a = o.__teleportBuffers || (o.__teleportBuffers = {}), s = a[r] || (a[r] = []), d = s.length;
  let p;
  if (i)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: f, push: l } = z();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = f();
  }
  s.splice(d, 0, p), e("<!--teleport end-->");
}
{
  const e = N(), t = (r, i) => {
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
function he(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ue,
  setCurrentRenderingInstance: x,
  setupComponent: me,
  renderComponentRoot: v,
  normalizeVNode: ge
} = _;
function z() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const i = h(r);
      if (e && i) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = i, (g(r) || S(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function T(e, t = null, r) {
  const i = e.component = ue(
    e,
    t,
    null
  ), n = me(
    i,
    !0
    /* isSSR */
  ), o = g(n);
  let a = i.sp;
  return o || a ? Promise.resolve(n).then(() => {
    if (o && (a = i.sp), a)
      return Promise.all(
        a.map((d) => d.call(i.proxy))
      );
  }).catch(b).then(() => k(i, r)) : k(i, r);
}
function k(e, t) {
  const r = e.type, { getBuffer: i, push: n } = z();
  if (V(r)) {
    let o = v(e);
    if (!r.props)
      for (const a in e.attrs)
        a.startsWith("data-v-") && ((o.props || (o.props = {}))[a] = "");
    w(n, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === b) && !e.ssrRender && !r.ssrRender && h(r.template) && (r.ssrRender = he(r.template));
    const o = e.ssrRender || r.ssrRender;
    if (o) {
      let a = e.inheritAttrs !== !1 ? e.attrs : void 0, s = !1, d = e;
      for (; ; ) {
        const f = d.vnode.scopeId;
        f && (s || (a = { ...a }, s = !0), a[f] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (t) {
        s || (a = { ...a });
        const f = t.trim().split(" ");
        for (let l = 0; l < f.length; l++)
          a[f[l]] = "";
      }
      const p = x(e);
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
        x(p);
      }
    } else e.render && e.render !== b ? w(
      n,
      e.subTree = v(e),
      e,
      t
    ) : (r.name || r.__file, n("<!---->"));
  }
  return i();
}
function w(e, t, r, i) {
  const { type: n, shapeFlag: o, children: a, dirs: s, props: d } = t;
  switch (s && (t.props = be(t, d, s)), n) {
    case H:
      e(c(a));
      break;
    case U:
      e(
        a ? `<!--${F(a)}-->` : "<!---->"
      );
      break;
    case j:
      e(a);
      break;
    case M:
      t.slotScopeIds && (i = (i ? i + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), y(
        e,
        a,
        r,
        i
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? we(e, t, r, i) : o & 6 ? e(T(t, r, i)) : o & 64 ? ye(e, t, r, i) : o & 128 && w(e, t.ssContent, r, i);
  }
}
function y(e, t, r, i) {
  for (let n = 0; n < t.length; n++)
    w(e, ge(t[n]), r, i);
}
function we(e, t, r, i) {
  const n = t.type;
  let { props: o, children: a, shapeFlag: s, scopeId: d } = t, p = `<${n}`;
  o && (p += se(o, n)), d && (p += ` ${d}`);
  let f = r, l = t;
  for (; f && l === f.subTree; )
    l = f.vnode, l.scopeId && (p += ` ${l.scopeId}`), f = f.parent;
  if (i && (p += ` ${i}`), e(p + ">"), !O(n)) {
    let u = !1;
    o && (o.innerHTML ? (u = !0, e(o.innerHTML)) : o.textContent ? (u = !0, e(c(o.textContent))) : n === "textarea" && o.value && (u = !0, e(c(o.value)))), u || (s & 8 ? e(c(a)) : s & 16 && y(
      e,
      a,
      r,
      i
    )), e(`</${n}>`);
  }
}
function be(e, t, r) {
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
  return L(t || {}, ...i);
}
function ye(e, t, r, i) {
  const n = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!n)
    return [];
  if (!h(n))
    return [];
  ce(
    e,
    (a) => {
      y(
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
const { isVNode: xe } = _;
function m(e, t, r) {
  if (!e.hasAsync)
    return t + R(e);
  let i = t;
  for (let n = r; n < e.length; n += 1) {
    const o = e[n];
    if (h(o)) {
      i += o;
      continue;
    }
    if (g(o))
      return o.then((s) => (e[n] = s, m(e, i, n)));
    const a = m(o, i, 0);
    if (g(a))
      return a.then((s) => (e[n] = s, m(e, "", n)));
    i = a;
  }
  return i;
}
function A(e) {
  return m(e, "", 0);
}
function R(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    h(i) ? t += i : t += R(i);
  }
  return t;
}
async function $(e, t = {}) {
  if (xe(e))
    return $(B({ render: () => e }), t);
  const r = E(e._component, e._props);
  r.appContext = e._context, e.provide(C, t);
  const i = await T(r), n = await A(i);
  if (await ve(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return n;
}
async function ve(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await A(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const ke = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, r) => null;
  }
});
ne(oe);
const Ce = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const i = ie(ke, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await $(i)}
                    <div id="${e.f.name("vue-root")}"></div>
                    <div id="app-3e1bsf"></div>

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
  Ce as index,
  Ce as renderer
};
