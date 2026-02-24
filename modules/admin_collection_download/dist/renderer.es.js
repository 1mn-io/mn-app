import { g as N, f as E, h as z, s as _, i as C, j as m, N as w, k as V, l as u, F as M, S as j, C as H, m as L, T as U, n as p, p as F, q as I, t as S, u as O, v as P, w as D, x as G, y as W, z as K, A as q, B as J, D as Q, E as X, G as Y, H as Z, I as ee, J as te, d as re, c as ie, b as oe, K as ne, a as se, L as ae } from "./runtime-dom.esm-bundler-D2b0Kur0.js";
function le(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", r === "top" && i.firstChild ? i.insertBefore(o, i.firstChild) : i.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const de = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-white:#fff;--spacing:.25rem;--container-md:28rem;--font-weight-bold:700;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mb-4{margin-bottom:calc(var(--spacing) * 4)}.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-white{background-color:var(--color-white)}.p-8{padding:calc(var(--spacing) * 8)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-2{padding-block:calc(var(--spacing) * 2)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-white{color:var(--color-white)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@media(hover:hover){.hover\\:bg-blue-700:hover{background-color:var(--color-blue-700)}}}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}';
const fe = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ce(e, t) {
  let r = "";
  for (let i in e) {
    if (fe(i) || O(i) || t === "textarea" && i === "value" || // force as property (not rendered in SSR)
    i.startsWith("."))
      continue;
    const o = e[i];
    i.startsWith("^") && (i = i.slice(1)), i === "class" ? r += ` class="${ue(o)}"` : i === "style" ? r += ` style="${he(o)}"` : i === "className" ? o != null && (r += ` class="${p(String(o))}"`) : r += pe(i, o, t);
  }
  return r;
}
function pe(e, t, r) {
  if (!K(t))
    return "";
  const i = r && (r.indexOf("-") > 0 || q(r)) ? e : J[e] || e.toLowerCase();
  return Q(i) ? X(t) ? ` ${i}` : "" : Y(i) ? t === "" ? ` ${i}` : ` ${i}="${p(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${i}`
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
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = ee(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
function me(e, t, r, i, o) {
  e("<!--teleport start-->");
  const n = o.appContext.provides[_], s = n.__teleportBuffers || (n.__teleportBuffers = {}), a = s[r] || (s[r] = []), d = a.length;
  let c;
  if (i)
    t(e), c = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: f, push: l } = T();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), c = f();
  }
  a.splice(d, 0, c), e("<!--teleport end-->");
}
{
  const e = N(), t = (r, i) => {
    let o;
    return (o = e[r]) || (o = e[r] = []), o.push(i), (n) => {
      o.length > 1 ? o.forEach((s) => s(n)) : o[0](n);
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
    push(r) {
      const i = u(r);
      if (e && i) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = i, (m(r) || S(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function $(e, t = null, r) {
  const i = e.component = we(
    e,
    t,
    null
  ), o = ye(
    i,
    !0
    /* isSSR */
  ), n = m(o);
  let s = i.sp;
  return n || s ? Promise.resolve(o).then(() => {
    if (n && (s = i.sp), s)
      return Promise.all(
        s.map((d) => d.call(i.proxy))
      );
  }).catch(w).then(() => k(i, r)) : k(i, r);
}
function k(e, t) {
  const r = e.type, { getBuffer: i, push: o } = T();
  if (V(r)) {
    let n = x(e);
    if (!r.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((n.props || (n.props = {}))[s] = "");
    b(o, e.subTree = n, e, t);
  } else {
    (!e.render || e.render === w) && !e.ssrRender && !r.ssrRender && u(r.template) && (r.ssrRender = be(r.template));
    const n = e.ssrRender || r.ssrRender;
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
      const c = v(e);
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
        v(c);
      }
    } else e.render && e.render !== w ? b(
      o,
      e.subTree = x(e),
      e,
      t
    ) : (r.name || r.__file, o("<!---->"));
  }
  return i();
}
function b(e, t, r, i) {
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
      t.slotScopeIds && (i = (i ? i + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), y(
        e,
        s,
        r,
        i
      ), e("<!--]-->");
      break;
    default:
      n & 1 ? xe(e, t, r, i) : n & 6 ? e($(t, r, i)) : n & 64 ? _e(e, t, r, i) : n & 128 && b(e, t.ssContent, r, i);
  }
}
function y(e, t, r, i) {
  for (let o = 0; o < t.length; o++)
    b(e, ve(t[o]), r, i);
}
function xe(e, t, r, i) {
  const o = t.type;
  let { props: n, children: s, shapeFlag: a, scopeId: d } = t, c = `<${o}`;
  n && (c += ce(n, o)), d && (c += ` ${d}`);
  let f = r, l = t;
  for (; f && l === f.subTree; )
    l = f.vnode, l.scopeId && (c += ` ${l.scopeId}`), f = f.parent;
  if (i && (c += ` ${i}`), e(c + ">"), !I(o)) {
    let h = !1;
    n && (n.innerHTML ? (h = !0, e(n.innerHTML)) : n.textContent ? (h = !0, e(p(n.textContent))) : o === "textarea" && n.value && (h = !0, e(p(n.value)))), h || (a & 8 ? e(p(s)) : a & 16 && y(
      e,
      s,
      r,
      i
    )), e(`</${o}>`);
  }
}
function ke(e, t, r) {
  const i = [];
  for (let o = 0; o < r.length; o++) {
    const n = r[o], {
      dir: { getSSRProps: s }
    } = n;
    if (s) {
      const a = s(n, e);
      a && i.push(a);
    }
  }
  return F(t || {}, ...i);
}
function _e(e, t, r, i) {
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
        r,
        i
      );
    },
    o,
    n || n === "",
    r
  );
}
const { isVNode: Ce } = C;
function g(e, t, r) {
  if (!e.hasAsync)
    return t + R(e);
  let i = t;
  for (let o = r; o < e.length; o += 1) {
    const n = e[o];
    if (u(n)) {
      i += n;
      continue;
    }
    if (m(n))
      return n.then((a) => (e[o] = a, g(e, i, o)));
    const s = g(n, i, 0);
    if (m(s))
      return s.then((a) => (e[o] = a, g(e, "", o)));
    i = s;
  }
  return i;
}
function A(e) {
  return g(e, "", 0);
}
function R(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    u(i) ? t += i : t += R(i);
  }
  return t;
}
async function B(e, t = {}) {
  if (Ce(e))
    return B(E({ render: () => e }), t);
  const r = z(e._component, e._props);
  r.appContext = e._context, e.provide(_, t);
  const i = await $(r), o = await A(i);
  if (await Se(t), t.__watcherHandles)
    for (const n of t.__watcherHandles)
      n();
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
const Te = ["id"], $e = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, r) => (se(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      oe("p", null, ne(e._$p.data.curr.data.data), 1)
    ], 8, Te));
  }
});
le(de);
const Re = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const i = ae($e, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await B(i)}
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
  Re as index,
  Re as renderer
};
