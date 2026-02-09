import { j as E, i as N, k as z, s as _, l as C, m as g, N as b, p as V, q as u, F as M, S as j, C as H, t as L, T as O, u as c, v as P, x as U, y as S, z as F, A as I, B as D, D as G, E as W, G as K, H as q, I as J, J as Q, K as X, L as Y, M as Z, O as ee, P as te, d as re, e as ie, c as ne, Q as oe } from "./runtime-dom.esm-bundler-Crm1kotq.js";
function se(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(n, r.firstChild) : r.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
const ae = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--radius-lg:.5rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.rounded-lg{border-radius:var(--radius-lg)}.bg-white{background-color:var(--color-white)}.p-8{padding:calc(var(--spacing)*8)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}';
const le = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function de(e, t) {
  let i = "";
  for (let r in e) {
    if (le(r) || F(r) || t === "textarea" && r === "value" || // force as property (not rendered in SSR)
    r.startsWith("."))
      continue;
    const n = e[r];
    r.startsWith("^") && (r = r.slice(1)), r === "class" || r === "className" ? i += ` class="${pe(n)}"` : r === "style" ? i += ` style="${ce(n)}"` : i += fe(r, n, t);
  }
  return i;
}
function fe(e, t, i) {
  if (!K(t))
    return "";
  const r = i && (i.indexOf("-") > 0 || q(i)) ? e : J[e] || e.toLowerCase();
  return Q(r) ? X(t) ? ` ${r}` : "" : Y(r) ? t === "" ? ` ${r}` : ` ${r}="${c(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function pe(e) {
  return c(D(e));
}
function ce(e) {
  if (!e)
    return "";
  if (u(e))
    return c(e);
  const t = G(ue(e));
  return c(W(t));
}
function ue(e) {
  if (!S(e) && Z(e)) {
    const t = {};
    for (const i in e)
      i.startsWith(":--") ? t[i.slice(1)] = ee(e[i]) : t[i] = e[i];
    return t;
  }
  return e;
}
function he(e, t, i, r, n) {
  e("<!--teleport start-->");
  const o = n.appContext.provides[_], s = o.__teleportBuffers || (o.__teleportBuffers = {}), a = s[i] || (s[i] = []), d = a.length;
  let p;
  if (r)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: f, push: l } = T();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = f();
  }
  a.splice(d, 0, p), e("<!--teleport end-->");
}
{
  const e = E(), t = (i, r) => {
    let n;
    return (n = e[i]) || (n = e[i] = []), n.push(r), (o) => {
      n.length > 1 ? n.forEach((s) => s(o)) : n[0](o);
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
    push(i) {
      const r = u(i);
      if (e && r) {
        t[t.length - 1] += i;
        return;
      }
      t.push(i), e = r, (g(i) || S(i) && i.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function A(e, t = null, i) {
  const r = e.component = ge(
    e,
    t,
    null
  ), n = we(
    r,
    !0
    /* isSSR */
  ), o = g(n);
  let s = r.sp;
  return o || s ? Promise.resolve(n).then(() => {
    if (o && (s = r.sp), s)
      return Promise.all(
        s.map((d) => d.call(r.proxy))
      );
  }).catch(b).then(() => k(r, i)) : k(r, i);
}
function k(e, t) {
  const i = e.type, { getBuffer: r, push: n } = T();
  if (V(i)) {
    let o = v(e);
    if (!i.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((o.props || (o.props = {}))[s] = "");
    w(n, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === b) && !e.ssrRender && !i.ssrRender && u(i.template) && (i.ssrRender = me(i.template));
    const o = e.ssrRender || i.ssrRender;
    if (o) {
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
      const p = x(e);
      try {
        o(
          e.proxy,
          n,
          e,
          s,
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
    ) : (i.name || i.__file, n("<!---->"));
  }
  return r();
}
function w(e, t, i, r) {
  const { type: n, shapeFlag: o, children: s, dirs: a, props: d } = t;
  switch (a && (t.props = xe(t, d, a)), n) {
    case O:
      e(c(s));
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
      o & 1 ? ye(e, t, i, r) : o & 6 ? e(A(t, i, r)) : o & 64 ? ve(e, t, i, r) : o & 128 && w(e, t.ssContent, i, r);
  }
}
function y(e, t, i, r) {
  for (let n = 0; n < t.length; n++)
    w(e, be(t[n]), i, r);
}
function ye(e, t, i, r) {
  const n = t.type;
  let { props: o, children: s, shapeFlag: a, scopeId: d } = t, p = `<${n}`;
  o && (p += de(o, n)), d && (p += ` ${d}`);
  let f = i, l = t;
  for (; f && l === f.subTree; )
    l = f.vnode, l.scopeId && (p += ` ${l.scopeId}`), f = f.parent;
  if (r && (p += ` ${r}`), e(p + ">"), !U(n)) {
    let h = !1;
    o && (o.innerHTML ? (h = !0, e(o.innerHTML)) : o.textContent ? (h = !0, e(c(o.textContent))) : n === "textarea" && o.value && (h = !0, e(c(o.value)))), h || (a & 8 ? e(c(s)) : a & 16 && y(
      e,
      s,
      i,
      r
    )), e(`</${n}>`);
  }
}
function xe(e, t, i) {
  const r = [];
  for (let n = 0; n < i.length; n++) {
    const o = i[n], {
      dir: { getSSRProps: s }
    } = o;
    if (s) {
      const a = s(o, e);
      a && r.push(a);
    }
  }
  return P(t || {}, ...r);
}
function ve(e, t, i, r) {
  const n = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!n)
    return [];
  if (!u(n))
    return [];
  he(
    e,
    (s) => {
      y(
        s,
        t.children,
        i,
        r
      );
    },
    n,
    o || o === "",
    i
  );
}
const { isVNode: ke } = C;
function m(e, t, i) {
  if (!e.hasAsync)
    return t + $(e);
  let r = t;
  for (let n = i; n < e.length; n += 1) {
    const o = e[n];
    if (u(o)) {
      r += o;
      continue;
    }
    if (g(o))
      return o.then((a) => (e[n] = a, m(e, r, n)));
    const s = m(o, r, 0);
    if (g(s))
      return s.then((a) => (e[n] = a, m(e, "", n)));
    r = s;
  }
  return r;
}
function R(e) {
  return m(e, "", 0);
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
  if (ke(e))
    return B(N({ render: () => e }), t);
  const i = z(e._component, e._props);
  i.appContext = e._context, e.provide(_, t);
  const r = await A(i), n = await R(r);
  if (await _e(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return n;
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
const Ce = ["id"], Se = /* @__PURE__ */ re({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (t, i) => (ne(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Ce));
  }
});
se(ae);
const Ae = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const r = oe(Se, {
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
  Ae as index,
  Ae as renderer
};
