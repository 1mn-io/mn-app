import { j as B, i as E, k as N, s as _, l as C, m as g, N as b, p as V, q as u, F as M, S as j, C as H, u as L, T as O, v as p, x as P, y as U, z as S, A as F, B as I, D, E as G, G as W, H as K, I as q, J, K as Q, L as X, M as Y, O as Z, P as ee, Q as te, d as re, e as ie, c as oe, R as ne } from "./runtime-dom.esm-bundler-CrCCl09J.js";
function se(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", r === "top" && i.firstChild ? i.insertBefore(o, i.firstChild) : i.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const ae = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-blue-500:oklch(62.3% .214 259.815);--color-gray-400:oklch(70.7% .022 261.325);--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.mt-2{margin-top:calc(var(--spacing) * 2)}.flex{display:flex}.w-auto{width:auto}.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.max-w-xs{max-width:var(--container-xs)}.items-center{align-items:center}.gap-2{gap:calc(var(--spacing) * 2)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.rounded-lg{border-radius:var(--radius-lg)}.bg-white{background-color:var(--color-white)}.p-8{padding:calc(var(--spacing) * 8)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-blue-500{color:var(--color-blue-500)}.text-gray-400{color:var(--color-gray-400)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}';
const le = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function de(e, t) {
  let r = "";
  for (let i in e) {
    if (le(i) || F(i) || t === "textarea" && i === "value" || // force as property (not rendered in SSR)
    i.startsWith("."))
      continue;
    const o = e[i];
    i.startsWith("^") && (i = i.slice(1)), i === "class" ? r += ` class="${ce(o)}"` : i === "style" ? r += ` style="${pe(o)}"` : i === "className" ? o != null && (r += ` class="${p(String(o))}"`) : r += fe(i, o, t);
  }
  return r;
}
function fe(e, t, r) {
  if (!K(t))
    return "";
  const i = r && (r.indexOf("-") > 0 || q(r)) ? e : J[e] || e.toLowerCase();
  return Q(i) ? X(t) ? ` ${i}` : "" : Y(i) ? t === "" ? ` ${i}` : ` ${i}="${p(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${i}`
  ), "");
}
function ce(e) {
  return p(D(e));
}
function pe(e) {
  if (!e)
    return "";
  if (u(e))
    return p(e);
  const t = G(ue(e));
  return p(W(t));
}
function ue(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = ee(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
function he(e, t, r, i, o) {
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
  const e = B(), t = (r, i) => {
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
function me(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: ge,
  setCurrentRenderingInstance: x,
  setupComponent: we,
  renderComponentRoot: v,
  normalizeVNode: be
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
      t.push(r), e = i, (g(r) || S(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function R(e, t = null, r) {
  const i = e.component = ge(
    e,
    t,
    null
  ), o = we(
    i,
    !0
    /* isSSR */
  ), n = g(o);
  let s = i.sp;
  return n || s ? Promise.resolve(o).then(() => {
    if (n && (s = i.sp), s)
      return Promise.all(
        s.map((d) => d.call(i.proxy))
      );
  }).catch(b).then(() => k(i, r)) : k(i, r);
}
function k(e, t) {
  const r = e.type, { getBuffer: i, push: o } = T();
  if (V(r)) {
    let n = v(e);
    if (!r.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((n.props || (n.props = {}))[s] = "");
    w(o, e.subTree = n, e, t);
  } else {
    (!e.render || e.render === b) && !e.ssrRender && !r.ssrRender && u(r.template) && (r.ssrRender = me(r.template));
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
    ) : (r.name || r.__file, o("<!---->"));
  }
  return i();
}
function w(e, t, r, i) {
  const { type: o, shapeFlag: n, children: s, dirs: a, props: d } = t;
  switch (a && (t.props = xe(t, d, a)), o) {
    case O:
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
      n & 1 ? ye(e, t, r, i) : n & 6 ? e(R(t, r, i)) : n & 64 ? ve(e, t, r, i) : n & 128 && w(e, t.ssContent, r, i);
  }
}
function y(e, t, r, i) {
  for (let o = 0; o < t.length; o++)
    w(e, be(t[o]), r, i);
}
function ye(e, t, r, i) {
  const o = t.type;
  let { props: n, children: s, shapeFlag: a, scopeId: d } = t, c = `<${o}`;
  n && (c += de(n, o)), d && (c += ` ${d}`);
  let f = r, l = t;
  for (; f && l === f.subTree; )
    l = f.vnode, l.scopeId && (c += ` ${l.scopeId}`), f = f.parent;
  if (i && (c += ` ${i}`), e(c + ">"), !U(o)) {
    let h = !1;
    n && (n.innerHTML ? (h = !0, e(n.innerHTML)) : n.textContent ? (h = !0, e(p(n.textContent))) : o === "textarea" && n.value && (h = !0, e(p(n.value)))), h || (a & 8 ? e(p(s)) : a & 16 && y(
      e,
      s,
      r,
      i
    )), e(`</${o}>`);
  }
}
function xe(e, t, r) {
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
  return P(t || {}, ...i);
}
function ve(e, t, r, i) {
  const o = t.props && t.props.to, n = t.props && t.props.disabled;
  if (!o)
    return [];
  if (!u(o))
    return [];
  he(
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
const { isVNode: ke } = C;
function m(e, t, r) {
  if (!e.hasAsync)
    return t + $(e);
  let i = t;
  for (let o = r; o < e.length; o += 1) {
    const n = e[o];
    if (u(n)) {
      i += n;
      continue;
    }
    if (g(n))
      return n.then((a) => (e[o] = a, m(e, i, o)));
    const s = m(n, i, 0);
    if (g(s))
      return s.then((a) => (e[o] = a, m(e, "", o)));
    i = s;
  }
  return i;
}
function A(e) {
  return m(e, "", 0);
}
function $(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    u(i) ? t += i : t += $(i);
  }
  return t;
}
async function z(e, t = {}) {
  if (ke(e))
    return z(E({ render: () => e }), t);
  const r = N(e._component, e._props);
  r.appContext = e._context, e.provide(_, t);
  const i = await R(r), o = await A(i);
  if (await _e(t), t.__watcherHandles)
    for (const n of t.__watcherHandles)
      n();
  return o;
}
async function _e(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await A(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
te();
const Ce = ["id"], Se = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, r) => (oe(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Ce));
  }
});
se(ae);
const Re = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const i = ne(Se, {
      _p: e,
      _$p: t
    });
    return {
      r: `
                 <div>
                    ${await z(i)}
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
