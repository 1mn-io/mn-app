import { g as N, f as z, h as E, s as _, i as C, j as m, N as b, k as V, l as u, F as M, S as j, C as H, m as L, T as U, n as p, p as F, q as I, u as S, v as O, w as P, x as D, y as G, z as W, A as K, B as q, D as J, E as Q, G as X, H as Y, I as Z, J as ee, K as te, d as re, c as ie, a as oe, t as ne, o as se, L as ae } from "./runtime-dom.esm-bundler-BQo8LPmC.js";
function le(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const de = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-blue-600:oklch(54.6% .245 262.881);--color-gray-100:oklch(96.7% .003 264.542);--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-xl:36rem;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-bold:700;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mb-6{margin-bottom:calc(var(--spacing)*6)}.block{display:block}.flex{display:flex}.grid{display:grid}.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-sm{max-width:var(--container-sm)}.max-w-xl{max-width:var(--container-xl)}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing)*2)}.rounded-lg{border-radius:var(--radius-lg)}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-blue-600{border-color:var(--color-blue-600)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-white{background-color:var(--color-white)}.p-2{padding:calc(var(--spacing)*2)}.p-8{padding:calc(var(--spacing)*8)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@media(min-width:48rem){.md\\:gap-3{gap:calc(var(--spacing)*3)}}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}';
const fe = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ce(e, t) {
  let i = "";
  for (let r in e) {
    if (fe(r) || O(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const o = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? i += ` class="${ue(o)}"` : r === "style" ? i += ` style="${he(o)}"` : i += pe(r, o, t);
  }
  return i;
}
function pe(e, t, i) {
  if (!K(t))
    return "";
  const r = i && (i.indexOf("-") > 0 || q(i)) ? e : J[e] || e.toLowerCase();
  return Q(r) ? X(t) ? ` ${r}` : "" : Y(r) ? t === "" ? ` ${r}` : ` ${r}="${p(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function ue(e) {
  return p(D(e));
}
function he(e) {
  if (!e)
    return "";
  if (u(e))
    return p(e);
  const t = G(ge(e));
  return p(W(t));
}
function ge(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function me(e, t, i, r, o) {
  e("<!--teleport start-->");
  const n = o.appContext.provides[_], s = n.__teleportBuffers || (n.__teleportBuffers = {}), a = s[i] || (s[i] = []), d = a.length;
  let c;
  if (r)
    t(e), c = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: f, push: l } = T();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), c = f();
  }
  a.splice(d, 0, c), e("<!--teleport end-->");
}
{
  const e = N(), t = (i, r) => {
    let o;
    return (o = e[i]) || (o = e[i] = []), o.push(r), (n) => {
      o.length > 1 ? o.forEach((s) => s(n)) : o[0](n);
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
function we(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: be,
  setCurrentRenderingInstance: x,
  setupComponent: ye,
  renderComponentRoot: v,
  normalizeVNode: xe
} = C;
function T() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(i) {
      const r = u(i);
      if (e && r) {
        t[t.length - 1] += i;
        return;
      }
      t.push(i), e = r, (m(i) || S(i) && i.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function A(e, t = null, i) {
  const r = e.component = be(
    e,
    t,
    null
  ), o = ye(
    r,
    !0
    /* isSSR */
  ), n = m(o);
  let s = r.sp;
  return n || s ? Promise.resolve(o).then(() => {
    if (n && (s = r.sp), s)
      return Promise.all(
        s.map((d) => d.call(r.proxy))
      );
  }).catch(b).then(() => k(r, i)) : k(r, i);
}
function k(e, t) {
  const i = e.type, { getBuffer: r, push: o } = T();
  if (V(i)) {
    let n = v(e);
    if (!i.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((n.props || (n.props = {}))[s] = "");
    w(o, e.subTree = n, e, t);
  } else {
    (!e.render || e.render === b) && !e.ssrRender && !i.ssrRender && u(i.template) && (i.ssrRender = we(i.template));
    const n = e.ssrRender || i.ssrRender;
    if (n) {
      let s = e.inheritAttrs !== !1 ? e.attrs : void 0, a = !1, d = e;
      for (; ; ) {
        const f = d.vnode.scopeId;
        f && (a || (s = { ...s }, a = !0), s[f] = "");
        const l = d.parent;
        if (l && l.subTree && l.subTree === d.vnode)
          d = l;
        else
          break;
      }
      if (t) {
        a || (s = { ...s });
        const f = t.trim().split(" ");
        for (let l = 0; l < f.length; l++)
          s[f[l]] = "";
      }
      const c = x(e);
      try {
        n(
          e.proxy,
          o,
          e,
          s,
          // compiler-optimized bindings
          e.props,
          e.setupState,
          e.data,
          e.ctx
        );
      } finally {
        x(c);
      }
    } else e.render && e.render !== b ? w(
      o,
      e.subTree = v(e),
      e,
      t
    ) : (i.name || i.__file, o("<!---->"));
  }
  return r();
}
function w(e, t, i, r) {
  const { type: o, shapeFlag: n, children: s, dirs: a, props: d } = t;
  switch (a && (t.props = ke(t, d, a)), o) {
    case U:
      e(p(s));
      break;
    case H:
      e(
        s ? `<!--${L(s)}-->` : "<!---->"
      );
      break;
    case j:
      e(s);
      break;
    case M:
      t.slotScopeIds && (r = (r ? r + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), y(
        e,
        s,
        i,
        r
      ), e("<!--]-->");
      break;
    default:
      n & 1 ? ve(e, t, i, r) : n & 6 ? e(A(t, i, r)) : n & 64 ? _e(e, t, i, r) : n & 128 && w(e, t.ssContent, i, r);
  }
}
function y(e, t, i, r) {
  for (let o = 0; o < t.length; o++)
    w(e, xe(t[o]), i, r);
}
function ve(e, t, i, r) {
  const o = t.type;
  let { props: n, children: s, shapeFlag: a, scopeId: d } = t, c = `<${o}`;
  n && (c += ce(n, o)), d && (c += ` ${d}`);
  let f = i, l = t;
  for (; f && l === f.subTree; )
    l = f.vnode, l.scopeId && (c += ` ${l.scopeId}`), f = f.parent;
  if (r && (c += ` ${r}`), e(c + ">"), !I(o)) {
    let h = !1;
    n && (n.innerHTML ? (h = !0, e(n.innerHTML)) : n.textContent ? (h = !0, e(p(n.textContent))) : o === "textarea" && n.value && (h = !0, e(p(n.value)))), h || (a & 8 ? e(p(s)) : a & 16 && y(
      e,
      s,
      i,
      r
    )), e(`</${o}>`);
  }
}
function ke(e, t, i) {
  const r = [];
  for (let o = 0; o < i.length; o++) {
    const n = i[o], {
      dir: { getSSRProps: s }
    } = n;
    if (s) {
      const a = s(n, e);
      a && r.push(a);
    }
  }
  return F(t || {}, ...r);
}
function _e(e, t, i, r) {
  const o = t.props && t.props.to, n = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!u(o))
    return [];
  me(
    e,
    (s) => {
      y(
        s,
        t.children,
        i,
        r
      );
    },
    o,
    n || n === "",
    i
  );
}
const { isVNode: Ce } = C;
function g(e, t, i) {
  if (!e.hasAsync)
    return t + $(e);
  let r = t;
  for (let o = i; o < e.length; o += 1) {
    const n = e[o];
    if (u(n)) {
      r += n;
      continue;
    }
    if (m(n))
      return n.then((a) => (e[o] = a, g(e, r, o)));
    const s = g(n, r, 0);
    if (m(s))
      return s.then((a) => (e[o] = a, g(e, "", o)));
    r = s;
  }
  return r;
}
function R(e) {
  return g(e, "", 0);
}
function $(e) {
  let t = "";
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    u(r) ? t += r : t += $(r);
  }
  return t;
}
async function B(e, t = {}) {
  if (Ce(e))
    return B(z({ render: () => e }), t);
  const i = E(e._component, e._props);
  i.appContext = e._context, e.provide(_, t);
  const r = await A(i), o = await R(r);
  if (await Se(t), t.__watcherHandles)
    for (const n of t.__watcherHandles)
      n();
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
const Te = ["id"], Ae = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, i) => (se(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      oe("p", null, ne(e._$p.data.curr.data.data), 1)
    ], 8, Te));
  }
});
le(de);
const $e = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = ae(Ae, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await B(r)}
                    <div id="${e.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let s = "";
        return s = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, s;
      })()
    };
  }
});
export {
  $e as index,
  $e as renderer
};
