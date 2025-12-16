import { N as y, g as K, E as G, i as N, a as m, s as V, c as J, b as Y, e as O, f as k, w, F as q, S as Q, C as X, h as Z, T as ee, j as d, k as R, m as te, l as re, n as ne, o as oe, p as ie, q as se, r as ae, t as le, u as ce, v as fe, x as pe, y as de, z as ue, A as me, B as he, D as ge, d as be, G as _e, H as ye, I as ke, J as we, K as Ee } from "./vue.runtime.esm-bundler-xjh7zPY5.js";
function ve(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
const xe = '@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.table{display:table}}';
const Ne = /* @__PURE__ */ ne(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function $e(e, t) {
  let r = "";
  for (const n in e) {
    if (Ne(n) || oe(n) || t === "textarea" && n === "value")
      continue;
    const o = e[n];
    n === "class" ? r += ` class="${Se(o)}"` : n === "style" ? r += ` style="${Te(o)}"` : n === "className" ? r += ` class="${String(o)}"` : r += Ce(n, o, t);
  }
  return r;
}
function Ce(e, t, r) {
  if (!le(t))
    return "";
  const n = r && (r.indexOf("-") > 0 || ce(r)) ? e : fe[e] || e.toLowerCase();
  return pe(n) ? de(t) ? ` ${n}` : "" : ue(n) ? t === "" ? ` ${n}` : ` ${n}="${d(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${n}`
  ), "");
}
function Se(e) {
  return d(ie(e));
}
function Te(e) {
  if (!e)
    return "";
  if (m(e))
    return d(e);
  const t = se(Ve(e));
  return d(ae(t));
}
function Ve(e) {
  if (!R(e) && me(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = he(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
function Oe(e, t, r, n, o) {
  e("<!--teleport start-->");
  const i = o.appContext.provides[O], s = i.__teleportBuffers || (i.__teleportBuffers = {}), a = s[r] || (s[r] = []), f = a.length;
  let p;
  if (n)
    t(e), p = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: l } = U();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), p = c();
  }
  a.splice(f, 0, p), e("<!--teleport end-->");
}
function x(e) {
  const t = e && e.__v_raw;
  return t ? x(t) : e;
}
function Re(e) {
  return e ? e.__v_isRef === !0 : !1;
}
const u = [];
function Ae(e) {
  u.push(e);
}
function Be() {
  u.pop();
}
let v = !1;
function A(e, ...t) {
  if (v) return;
  v = !0;
  const r = u.length ? u[u.length - 1].component : null, n = r && r.appContext.config.warnHandler, o = ze();
  if (n)
    H(
      n,
      r,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, a;
          return (a = (s = i.toString) == null ? void 0 : s.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        r && r.proxy,
        o.map(
          ({ vnode: i }) => `at <${M(r, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...He(o)), console.warn(...i);
  }
  v = !1;
}
function ze() {
  let e = u[u.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e ? r.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function He(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push(...n === 0 ? [] : [`
`], ...De(r));
  }), t;
}
function De({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, o = ` at <${M(
    e.component,
    e.type,
    n
  )}`, i = ">" + r;
  return e.props ? [o, ...Me(e.props), i] : [o + i];
}
function Me(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((n) => {
    t.push(...B(n, e[n]));
  }), r.length > 3 && t.push(" ..."), t;
}
function B(e, t, r) {
  return m(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : Re(t) ? (t = B(e, x(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = x(t), r ? t : [`${e}=`, t]);
}
const z = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function H(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    je(o, t, r);
  }
}
function je(e, t, r, n = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || G;
  if (t) {
    let a = t.parent;
    const f = t.proxy, p = process.env.NODE_ENV !== "production" ? z[r] : `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let l = 0; l < c.length; l++)
          if (c[l](e, f, p) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      H(i, null, 10, [
        e,
        f,
        p
      ]);
      return;
    }
  }
  Pe(e, r, o, n, s);
}
function Pe(e, t, r, n = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = z[t];
    if (r && Ae(r), A(`Unhandled error${i ? ` during execution of ${i}` : ""}`), r && Be(), n)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
let h, b = [];
function D(e, t) {
  var r, n;
  h = e, h ? (h.enabled = !0, b.forEach(({ event: o, args: i }) => h.emit(o, ...i)), b = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((n = (r = window.navigator) == null ? void 0 : r.userAgent) != null && n.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    D(i, t);
  }), setTimeout(() => {
    h || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, b = []);
  }, 3e3)) : b = [];
}
{
  const e = K(), t = (r, n) => {
    let o;
    return (o = e[r]) || (o = e[r] = []), o.push(n), (i) => {
      o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
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
process.env.NODE_ENV;
const Ue = /(?:^|[-_])\w/g, Le = (e) => e.replace(Ue, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ie(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function M(e, t, r = !1) {
  let n = Ie(t);
  if (!n && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (n = o[1]);
  }
  if (!n && e) {
    const o = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    n = o(e.components) || e.parent && o(
      e.parent.type.components
    ) || o(e.appContext.components);
  }
  return n ? Le(n) : r ? "App" : "Anonymous";
}
process.env.NODE_ENV !== "production" || y;
process.env.NODE_ENV;
process.env.NODE_ENV;
function We(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Fe,
  setCurrentRenderingInstance: C,
  setupComponent: Ke,
  renderComponentRoot: S,
  normalizeVNode: Ge,
  pushWarningContext: j,
  popWarningContext: P
} = V;
function U() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const n = m(r);
      if (e && n) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = n, (k(r) || R(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function L(e, t = null, r) {
  const n = e.component = Fe(
    e,
    t,
    null
  );
  process.env.NODE_ENV !== "production" && j(e);
  const o = Ke(
    n,
    !0
    /* isSSR */
  );
  process.env.NODE_ENV !== "production" && P();
  const i = k(o);
  let s = n.sp;
  return i || s ? Promise.resolve(o).then(() => {
    if (i && (s = n.sp), s)
      return Promise.all(
        s.map((f) => f.call(n.proxy))
      );
  }).catch(y).then(() => T(n, r)) : T(n, r);
}
function T(e, t) {
  process.env.NODE_ENV !== "production" && j(e.vnode);
  const r = e.type, { getBuffer: n, push: o } = U();
  if (N(r)) {
    let i = S(e);
    if (!r.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((i.props || (i.props = {}))[s] = "");
    E(o, e.subTree = i, e, t);
  } else {
    (!e.render || e.render === y) && !e.ssrRender && !r.ssrRender && m(r.template) && (r.ssrRender = We(r.template));
    const i = e.ssrRender || r.ssrRender;
    if (i) {
      let s = e.inheritAttrs !== !1 ? e.attrs : void 0, a = !1, f = e;
      for (; ; ) {
        const c = f.vnode.scopeId;
        c && (a || (s = { ...s }, a = !0), s[c] = "");
        const l = f.parent;
        if (l && l.subTree && l.subTree === f.vnode)
          f = l;
        else
          break;
      }
      if (t) {
        a || (s = { ...s });
        const c = t.trim().split(" ");
        for (let l = 0; l < c.length; l++)
          s[c[l]] = "";
      }
      const p = C(e);
      try {
        i(
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
        C(p);
      }
    } else if (e.render && e.render !== y)
      E(
        o,
        e.subTree = S(e),
        e,
        t
      );
    else {
      const s = r.name || r.__file || "<Anonymous>";
      w(`Component ${s} is missing template or render function.`), o("<!---->");
    }
  }
  return process.env.NODE_ENV !== "production" && P(), n();
}
function E(e, t, r, n) {
  const { type: o, shapeFlag: i, children: s, dirs: a, props: f } = t;
  switch (a && (t.props = Ye(t, f, a)), o) {
    case ee:
      e(d(s));
      break;
    case X:
      e(
        s ? `<!--${Z(s)}-->` : "<!---->"
      );
      break;
    case Q:
      e(s);
      break;
    case q:
      t.slotScopeIds && (n = (n ? n + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), $(
        e,
        s,
        r,
        n
      ), e("<!--]-->");
      break;
    default:
      i & 1 ? Je(e, t, r, n) : i & 6 ? e(L(t, r, n)) : i & 64 ? qe(e, t, r, n) : i & 128 ? E(e, t.ssContent, r, n) : w(
        "[@vue/server-renderer] Invalid VNode type:",
        o,
        `(${typeof o})`
      );
  }
}
function $(e, t, r, n) {
  for (let o = 0; o < t.length; o++)
    E(e, Ge(t[o]), r, n);
}
function Je(e, t, r, n) {
  const o = t.type;
  let { props: i, children: s, shapeFlag: a, scopeId: f } = t, p = `<${o}`;
  i && (p += $e(i, o)), f && (p += ` ${f}`);
  let c = r, l = t;
  for (; c && l === c.subTree; )
    l = c.vnode, l.scopeId && (p += ` ${l.scopeId}`), c = c.parent;
  if (n && (p += ` ${n}`), e(p + ">"), !re(o)) {
    let g = !1;
    i && (i.innerHTML ? (g = !0, e(i.innerHTML)) : i.textContent ? (g = !0, e(d(i.textContent))) : o === "textarea" && i.value && (g = !0, e(d(i.value)))), g || (a & 8 ? e(d(s)) : a & 16 && $(
      e,
      s,
      r,
      n
    )), e(`</${o}>`);
  }
}
function Ye(e, t, r) {
  const n = [];
  for (let o = 0; o < r.length; o++) {
    const i = r[o], {
      dir: { getSSRProps: s }
    } = i;
    if (s) {
      const a = s(i, e);
      a && n.push(a);
    }
  }
  return te(t || {}, ...n);
}
function qe(e, t, r, n) {
  const o = t.props && t.props.to, i = t.props && t.props.disabled;
  if (!o)
    return i || w("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!m(o))
    return w(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  Oe(
    e,
    (s) => {
      $(
        s,
        t.children,
        r,
        n
      );
    },
    o,
    i || i === "",
    r
  );
}
const { isVNode: Qe } = V;
function _(e, t, r) {
  if (!e.hasAsync)
    return t + W(e);
  let n = t;
  for (let o = r; o < e.length; o += 1) {
    const i = e[o];
    if (m(i)) {
      n += i;
      continue;
    }
    if (k(i))
      return i.then((a) => (e[o] = a, _(e, n, o)));
    const s = _(i, n, 0);
    if (k(s))
      return s.then((a) => (e[o] = a, _(e, "", o)));
    n = s;
  }
  return n;
}
function I(e) {
  return _(e, "", 0);
}
function W(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    m(n) ? t += n : t += W(n);
  }
  return t;
}
async function F(e, t = {}) {
  if (Qe(e))
    return F(J({ render: () => e }), t);
  const r = Y(e._component, e._props);
  r.appContext = e._context, e.provide(O, t);
  const n = await L(r), o = await I(n);
  if (await Xe(t), t.__watcherHandles)
    for (const i of t.__watcherHandles)
      i();
  return o;
}
async function Xe(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await I(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
ge();
const Ze = ["id"], et = /* @__PURE__ */ be({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    return (t, r) => (we(), _e("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, [
      ye("p", null, ke(e._$p.data.curr.data.data), 1)
    ], 8, Ze));
  }
});
ve(xe);
const rt = async (e) => ({
  set: async (t, r) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const o = Ee(et, {
      _p: e,
      _$p: t,
      _$cb: r
    });
    return {
      r: `
                 <div>
                    ${await F(o)}
                    <div id="${e.f.name("vue-root")}"></div>
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
  rt as index,
  rt as renderer
};
