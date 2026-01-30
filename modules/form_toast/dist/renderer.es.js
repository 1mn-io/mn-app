import { q as $, s as k, a as N, c as E, u as w, v as u, N as g, x as B, y as m, F as V, S as U, C as L, z as M, T as j, A as p, B as z, m as D, D as Z, E as P, G as H, H as X, I as F, J as G, K, L as W, M as q, O as J, P as Q, Q as Y, R as tt, U as et, V as ot, d as rt, W as at } from "./runtime-dom.esm-bundler-CGwg54h5.js";
function C(t, e) {
  e === void 0 && (e = {});
  var o = e.insertAt;
  if (!(!t || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", o === "top" && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
  }
}
const it = '@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components,utilities;', st = ":root{--toastify-color-light:#fff;--toastify-color-dark:#121212;--toastify-color-info:#3498db;--toastify-color-success:#07bc0c;--toastify-color-warning:#f1c40f;--toastify-color-error:#e74c3c;--toastify-color-transparent:#ffffffb3;--toastify-icon-color-info:var(--toastify-color-info);--toastify-icon-color-success:var(--toastify-color-success);--toastify-icon-color-warning:var(--toastify-color-warning);--toastify-icon-color-error:var(--toastify-color-error);--toastify-toast-width:320px;--toastify-toast-background:#fff;--toastify-toast-min-height:64px;--toastify-toast-max-height:800px;--toastify-font-family:sans-serif;--toastify-z-index:9999;--toastify-text-color-light:#757575;--toastify-text-color-dark:#fff;--toastify-text-color-info:#fff;--toastify-text-color-success:#fff;--toastify-text-color-warning:#fff;--toastify-text-color-error:#fff;--toastify-spinner-color:#616161;--toastify-spinner-color-empty-area:#e0e0e0;--toastify-color-progress-light:linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);--toastify-color-progress-dark:#bb86fc;--toastify-color-progress-info:var(--toastify-color-info);--toastify-color-progress-success:var(--toastify-color-success);--toastify-color-progress-warning:var(--toastify-color-warning);--toastify-color-progress-error:var(--toastify-color-error);--toastify-color-progress-colored:#ddd}.Toastify__toast-container{box-sizing:border-box;color:#fff;padding:4px;position:fixed;transform:translate3d(0,0,var(--toastify-z-index) px);width:var(--toastify-toast-width);z-index:var(--toastify-z-index)}.Toastify__toast-container--top-left{left:1em;top:1em}.Toastify__toast-container--top-center{left:50%;top:1em;transform:translate(-50%)}.Toastify__toast-container--top-right{right:1em;top:1em}.Toastify__toast-container--bottom-left{bottom:1em;left:1em}.Toastify__toast-container--bottom-center{bottom:1em;left:50%;transform:translate(-50%)}.Toastify__toast-container--bottom-right{bottom:1em;right:1em}@media only screen and (max-width:480px){.Toastify__toast-container{left:0;margin:0;padding:0;width:100vw}.Toastify__toast-container--top-center,.Toastify__toast-container--top-left,.Toastify__toast-container--top-right{top:0;transform:translate(0)}.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-right{bottom:0;transform:translate(0)}.Toastify__toast-container--rtl{left:auto;right:0}}.Toastify__toast{border-radius:4px;box-shadow:0 1px 10px #0000001a,0 2px 15px #0000000d;box-sizing:border-box;cursor:pointer;direction:ltr;display:flex;font-family:var(--toastify-font-family);justify-content:space-between;margin-bottom:1rem;max-height:var(--toastify-toast-max-height);min-height:var(--toastify-toast-min-height);overflow:hidden;padding:8px;position:relative;z-index:0}.Toastify__toast--rtl{direction:rtl}.Toastify__toast-body{align-items:center;display:flex;flex:1 1 auto;margin:auto 0;padding:6px;white-space:pre-wrap}.Toastify__toast-body>div:last-child{flex:1}.Toastify__toast-icon{display:flex;flex-shrink:0;margin-inline-end:10px;width:20px}.Toastify--animate{animation-duration:.7s;animation-fill-mode:both}.Toastify--animate-icon{animation-duration:.3s;animation-fill-mode:both}@media only screen and (max-width:480px){.Toastify__toast{border-radius:0;margin-bottom:0}}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--colored.Toastify__toast--default,.Toastify__toast-theme--light{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{background:var(--toastify-color-info);color:var(--toastify-text-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{background:var(--toastify-color-success);color:var(--toastify-text-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{background:var(--toastify-color-warning);color:var(--toastify-text-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{background:var(--toastify-color-error);color:var(--toastify-text-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--default{background:var(--toastify-color-progress-colored)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning{background:var(--toastify-color-transparent)}.Toastify__close-button{align-self:flex-start;background:#0000;border:none;color:#fff;cursor:pointer;opacity:.7;outline:none;padding:0;transition:.3s ease}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentcolor;height:16px;width:14px}.Toastify__close-button:focus,.Toastify__close-button:hover{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{bottom:0;height:5px;left:0;opacity:.7;position:absolute;transform-origin:left;width:100%;z-index:var(--toastify-z-index)}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{left:auto;right:0;transform-origin:right}.Toastify__spinner{animation:Toastify__spin .65s linear infinite;border:2px solid;border-color:var(--toastify-spinner-color-empty-area);border-radius:100%;border-right-color:var(--toastify-spinner-color);box-sizing:border-box;height:20px;width:20px}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--bottom-left,.Toastify__bounce-enter--top-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--bottom-right,.Toastify__bounce-enter--top-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--bottom-left,.Toastify__bounce-exit--top-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--bottom-right,.Toastify__bounce-exit--top-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__none{0%,60%,75%,90%,to{animation-duration:0;animation-timing-function:none}0%{opacity:1;transform:translateZ(0)}to{transform:translateZ(0)}}.Toastify__none-enter--bottom-center,.Toastify__none-enter--bottom-left,.Toastify__none-enter--bottom-right,.Toastify__none-enter--top-center,.Toastify__none-enter--top-left,.Toastify__none-enter--top-right{animation-name:Toastify__none}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{animation-timing-function:ease-in;opacity:0;transform:perspective(400px) rotateX(90deg)}40%{animation-timing-function:ease-in;transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;transform:perspective(400px) rotateX(10deg)}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:perspective(400px)}30%{opacity:1;transform:perspective(400px) rotateX(-20deg)}to{opacity:0;transform:perspective(400px) rotateX(90deg)}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideOutRight{0%{transform:translateZ(0)}to{transform:translate3d(110%,0,0);visibility:hidden}}@keyframes Toastify__slideOutLeft{0%{transform:translateZ(0)}to{transform:translate3d(-110%,0,0);visibility:hidden}}@keyframes Toastify__slideOutDown{0%{transform:translateZ(0)}to{transform:translate3d(0,500px,0);visibility:hidden}}@keyframes Toastify__slideOutUp{0%{transform:translateZ(0)}to{transform:translate3d(0,-500px,0);visibility:hidden}}.Toastify__slide-enter--bottom-left,.Toastify__slide-enter--top-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--bottom-right,.Toastify__slide-enter--top-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--bottom-left,.Toastify__slide-exit--top-left{animation-name:Toastify__slideOutLeft}.Toastify__slide-exit--bottom-right,.Toastify__slide-exit--top-right{animation-name:Toastify__slideOutRight}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}";
const nt = /* @__PURE__ */ P(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function ft(t, e) {
  let o = "";
  for (const r in t) {
    if (nt(r) || H(r) || e === "textarea" && r === "value")
      continue;
    const a = t[r];
    r === "class" ? o += ` class="${ct(a)}"` : r === "style" ? o += ` style="${dt(a)}"` : r === "className" ? o += ` class="${String(a)}"` : o += lt(r, a, e);
  }
  return o;
}
function lt(t, e, o) {
  if (!K(e))
    return "";
  const r = o && (o.indexOf("-") > 0 || W(o)) ? t : q[t] || t.toLowerCase();
  return J(r) ? Q(e) ? ` ${r}` : "" : Y(r) ? e === "" ? ` ${r}` : ` ${r}="${p(e)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${r}`
  ), "");
}
function ct(t) {
  return p(X(t));
}
function dt(t) {
  if (!t)
    return "";
  if (m(t))
    return p(t);
  const e = F(pt(t));
  return p(G(e));
}
function pt(t) {
  if (!z(t) && tt(t)) {
    const e = {};
    for (const o in t)
      o.startsWith(":--") ? e[o.slice(1)] = et(t[o]) : e[o] = t[o];
    return e;
  }
  return t;
}
function mt(t, e, o, r, a) {
  t("<!--teleport start-->");
  const i = a.appContext.provides[w], s = i.__teleportBuffers || (i.__teleportBuffers = {}), n = s[o] || (s[o] = []), l = n.length;
  let d;
  if (r)
    e(t), d = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: c, push: f } = S();
    f("<!--teleport start anchor-->"), e(f), f("<!--teleport anchor-->"), d = c();
  }
  n.splice(l, 0, d), t("<!--teleport end-->");
}
{
  const t = $(), e = (o, r) => {
    let a;
    return (a = t[o]) || (a = t[o] = []), a.push(r), (i) => {
      a.length > 1 ? a.forEach((s) => s(i)) : a[0](i);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (o) => o
  ), e(
    "__VUE_SSR_SETTERS__",
    (o) => o
  );
}
function yt(t, e) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: _t,
  setCurrentRenderingInstance: T,
  setupComponent: ut,
  renderComponentRoot: x,
  normalizeVNode: bt
} = k;
function S() {
  let t = !1;
  const e = [];
  return {
    getBuffer() {
      return e;
    },
    push(o) {
      const r = m(o);
      if (t && r) {
        e[e.length - 1] += o;
        return;
      }
      e.push(o), t = r, (u(o) || z(o) && o.hasAsync) && (e.hasAsync = !0);
    }
  };
}
function R(t, e = null, o) {
  const r = t.component = _t(
    t,
    e,
    null
  ), a = ut(
    r,
    !0
    /* isSSR */
  ), i = u(a);
  let s = r.sp;
  return i || s ? Promise.resolve(a).then(() => {
    if (i && (s = r.sp), s)
      return Promise.all(
        s.map((l) => l.call(r.proxy))
      );
  }).catch(g).then(() => v(r, o)) : v(r, o);
}
function v(t, e) {
  const o = t.type, { getBuffer: r, push: a } = S();
  if (B(o)) {
    let i = x(t);
    if (!o.props)
      for (const s in t.attrs)
        s.startsWith("data-v-") && ((i.props || (i.props = {}))[s] = "");
    b(a, t.subTree = i, t, e);
  } else {
    (!t.render || t.render === g) && !t.ssrRender && !o.ssrRender && m(o.template) && (o.ssrRender = yt(o.template));
    const i = t.ssrRender || o.ssrRender;
    if (i) {
      let s = t.inheritAttrs !== !1 ? t.attrs : void 0, n = !1, l = t;
      for (; ; ) {
        const c = l.vnode.scopeId;
        c && (n || (s = { ...s }, n = !0), s[c] = "");
        const f = l.parent;
        if (f && f.subTree && f.subTree === l.vnode)
          l = f;
        else
          break;
      }
      if (e) {
        n || (s = { ...s });
        const c = e.trim().split(" ");
        for (let f = 0; f < c.length; f++)
          s[c[f]] = "";
      }
      const d = T(t);
      try {
        i(
          t.proxy,
          a,
          t,
          s,
          // compiler-optimized bindings
          t.props,
          t.setupState,
          t.data,
          t.ctx
        );
      } finally {
        T(d);
      }
    } else t.render && t.render !== g ? b(
      a,
      t.subTree = x(t),
      t,
      e
    ) : (o.name || o.__file, a("<!---->"));
  }
  return r();
}
function b(t, e, o, r) {
  const { type: a, shapeFlag: i, children: s, dirs: n, props: l } = e;
  switch (n && (e.props = ht(e, l, n)), a) {
    case j:
      t(p(s));
      break;
    case L:
      t(
        s ? `<!--${M(s)}-->` : "<!---->"
      );
      break;
    case U:
      t(s);
      break;
    case V:
      e.slotScopeIds && (r = (r ? r + " " : "") + e.slotScopeIds.join(" ")), t("<!--[-->"), h(
        t,
        s,
        o,
        r
      ), t("<!--]-->");
      break;
    default:
      i & 1 ? gt(t, e, o, r) : i & 6 ? t(R(e, o, r)) : i & 64 ? Tt(t, e, o, r) : i & 128 && b(t, e.ssContent, o, r);
  }
}
function h(t, e, o, r) {
  for (let a = 0; a < e.length; a++)
    b(t, bt(e[a]), o, r);
}
function gt(t, e, o, r) {
  const a = e.type;
  let { props: i, children: s, shapeFlag: n, scopeId: l } = e, d = `<${a}`;
  i && (d += ft(i, a)), l && (d += ` ${l}`);
  let c = o, f = e;
  for (; c && f === c.subTree; )
    f = c.vnode, f.scopeId && (d += ` ${f.scopeId}`), c = c.parent;
  if (r && (d += ` ${r}`), t(d + ">"), !Z(a)) {
    let y = !1;
    i && (i.innerHTML ? (y = !0, t(i.innerHTML)) : i.textContent ? (y = !0, t(p(i.textContent))) : a === "textarea" && i.value && (y = !0, t(p(i.value)))), y || (n & 8 ? t(p(s)) : n & 16 && h(
      t,
      s,
      o,
      r
    )), t(`</${a}>`);
  }
}
function ht(t, e, o) {
  const r = [];
  for (let a = 0; a < o.length; a++) {
    const i = o[a], {
      dir: { getSSRProps: s }
    } = i;
    if (s) {
      const n = s(i, t);
      n && r.push(n);
    }
  }
  return D(e || {}, ...r);
}
function Tt(t, e, o, r) {
  const a = e.props && e.props.to, i = e.props && e.props.disabled;
  if (!a)
    return [];
  if (!m(a))
    return [];
  mt(
    t,
    (s) => {
      h(
        s,
        e.children,
        o,
        r
      );
    },
    a,
    i || i === "",
    o
  );
}
const { isVNode: xt } = k;
function _(t, e, o) {
  if (!t.hasAsync)
    return e + I(t);
  let r = e;
  for (let a = o; a < t.length; a += 1) {
    const i = t[a];
    if (m(i)) {
      r += i;
      continue;
    }
    if (u(i))
      return i.then((n) => (t[a] = n, _(t, r, a)));
    const s = _(i, r, 0);
    if (u(s))
      return s.then((n) => (t[a] = n, _(t, "", a)));
    r = s;
  }
  return r;
}
function O(t) {
  return _(t, "", 0);
}
function I(t) {
  let e = "";
  for (let o = 0; o < t.length; o++) {
    let r = t[o];
    m(r) ? e += r : e += I(r);
  }
  return e;
}
async function A(t, e = {}) {
  if (xt(t))
    return A(N({ render: () => t }), e);
  const o = E(t._component, t._props);
  o.appContext = t._context, t.provide(w, e);
  const r = await R(o), a = await O(r);
  if (await vt(e), e.__watcherHandles)
    for (const i of e.__watcherHandles)
      i();
  return a;
}
async function vt(t) {
  if (t.__teleportBuffers) {
    t.teleports = t.teleports || {};
    for (const e in t.__teleportBuffers)
      t.teleports[e] = await O(
        await Promise.all([t.__teleportBuffers[e]])
      );
  }
}
ot();
const kt = /* @__PURE__ */ rt({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    return (e, o) => null;
  }
});
C(it);
C(st);
const zt = async (t) => ({
  set: async (e) => {
    console.log(`--renderer [${e.data.curr.type}]`);
    const r = at(kt, {
      _p: t,
      _$p: e
    });
    return {
      r: `
                 <div>
                    ${await A(r)}
                    <div id="${t.f.name("vue-root")}"></div>
                  </div>
                `,
      style: (() => {
        let s = "";
        return s = `
                .${t.f.name("text")} {
                   background: transparent;
                }
                `, s;
      })()
    };
  }
});
export {
  zt as index,
  zt as renderer
};
