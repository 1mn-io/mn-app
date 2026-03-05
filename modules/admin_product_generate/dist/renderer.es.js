import { j as E, i as N, k as z, s as x, l as C, m as b, N as y, p as V, q as u, F as M, S as j, C as H, t as L, T as O, u as p, v as P, x as U, y as S, z as F, A as I, B as D, D as G, E as W, G as K, H as q, I as J, J as Q, K as X, L as Y, M as Z, O as ee, P as te, d as re, e as ie, c as ne, Q as oe } from "./runtime-dom.esm-bundler-W6r3jByx.js";
function se(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", r === "top" && i.firstChild ? i.insertBefore(n, i.firstChild) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
const ae = '@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components,utilities;';
const le = /* @__PURE__ */ I(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function de(e, t) {
  let r = "";
  for (let i in e) {
    if (le(i) || F(i) || t === "textarea" && i === "value" || // force as property (not rendered in SSR)
    i.startsWith("."))
      continue;
    const n = e[i];
    i.startsWith("^") && (i = i.slice(1)), i === "class" ? r += ` class="${ce(n)}"` : i === "style" ? r += ` style="${pe(n)}"` : i === "className" ? n != null && (r += ` class="${p(String(n))}"`) : r += fe(i, n, t);
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
function me(e, t, r, i, n) {
  e("<!--teleport start-->");
  const o = n.appContext.provides[x], s = o.__teleportBuffers || (o.__teleportBuffers = {}), a = s[r] || (s[r] = []), d = a.length;
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
  const e = E(), t = (r, i) => {
    let n;
    return (n = e[r]) || (n = e[r] = []), n.push(i), (o) => {
      n.length > 1 ? n.forEach((s) => s(o)) : n[0](o);
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
  createComponentInstance: be,
  setCurrentRenderingInstance: _,
  setupComponent: ge,
  renderComponentRoot: w,
  normalizeVNode: ye
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
      t.push(r), e = i, (b(r) || S(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function A(e, t = null, r) {
  const i = e.component = be(
    e,
    t,
    null
  ), n = ge(
    i,
    !0
    /* isSSR */
  ), o = b(n);
  let s = i.sp;
  return o || s ? Promise.resolve(n).then(() => {
    if (o && (s = i.sp), s)
      return Promise.all(
        s.map((d) => d.call(i.proxy))
      );
  }).catch(y).then(() => v(i, r)) : v(i, r);
}
function v(e, t) {
  const r = e.type, { getBuffer: i, push: n } = T();
  if (V(r)) {
    let o = w(e);
    if (!r.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((o.props || (o.props = {}))[s] = "");
    g(n, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !r.ssrRender && u(r.template) && (r.ssrRender = he(r.template));
    const o = e.ssrRender || r.ssrRender;
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
      const c = _(e);
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
        _(c);
      }
    } else e.render && e.render !== y ? g(
      n,
      e.subTree = w(e),
      e,
      t
    ) : (r.name || r.__file, n("<!---->"));
  }
  return i();
}
function g(e, t, r, i) {
  const { type: n, shapeFlag: o, children: s, dirs: a, props: d } = t;
  switch (a && (t.props = _e(t, d, a)), n) {
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
      t.slotScopeIds && (i = (i ? i + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), k(
        e,
        s,
        r,
        i
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? ke(e, t, r, i) : o & 6 ? e(A(t, r, i)) : o & 64 ? we(e, t, r, i) : o & 128 && g(e, t.ssContent, r, i);
  }
}
function k(e, t, r, i) {
  for (let n = 0; n < t.length; n++)
    g(e, ye(t[n]), r, i);
}
function ke(e, t, r, i) {
  const n = t.type;
  let { props: o, children: s, shapeFlag: a, scopeId: d } = t, c = `<${n}`;
  o && (c += de(o, n)), d && (c += ` ${d}`);
  let f = r, l = t;
  for (; f && l === f.subTree; )
    l = f.vnode, l.scopeId && (c += ` ${l.scopeId}`), f = f.parent;
  if (i && (c += ` ${i}`), e(c + ">"), !U(n)) {
    let m = !1;
    o && (o.innerHTML ? (m = !0, e(o.innerHTML)) : o.textContent ? (m = !0, e(p(o.textContent))) : n === "textarea" && o.value && (m = !0, e(p(o.value)))), m || (a & 8 ? e(p(s)) : a & 16 && k(
      e,
      s,
      r,
      i
    )), e(`</${n}>`);
  }
}
function _e(e, t, r) {
  const i = [];
  for (let n = 0; n < r.length; n++) {
    const o = r[n], {
      dir: { getSSRProps: s }
    } = o;
    if (s) {
      const a = s(o, e);
      a && i.push(a);
    }
  }
  return P(t || {}, ...i);
}
function we(e, t, r, i) {
  const n = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!n)
    return [];
  if (!u(n))
    return [];
  me(
    e,
    (s) => {
      k(
        s,
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
const { isVNode: ve } = C;
function h(e, t, r) {
  if (!e.hasAsync)
    return t + $(e);
  let i = t;
  for (let n = r; n < e.length; n += 1) {
    const o = e[n];
    if (u(o)) {
      i += o;
      continue;
    }
    if (b(o))
      return o.then((a) => (e[n] = a, h(e, i, n)));
    const s = h(o, i, 0);
    if (b(s))
      return s.then((a) => (e[n] = a, h(e, "", n)));
    i = s;
  }
  return i;
}
function R(e) {
  return h(e, "", 0);
}
function $(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    u(i) ? t += i : t += $(i);
  }
  return t;
}
async function B(e, t = {}) {
  if (ve(e))
    return B(N({ render: () => e }), t);
  const r = z(e._component, e._props);
  r.appContext = e._context, e.provide(x, t);
  const i = await A(r), n = await R(i);
  if (await xe(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return n;
}
async function xe(e) {
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
    return (t, r) => (ne(), ie("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Ce));
  }
});
se(ae);
const Ae = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const i = oe(Se, {
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
  Ae as index,
  Ae as renderer
};
