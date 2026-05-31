const { ssrUtils: x, initDirectivesForSSR: O, createApp: P, createVNode: D, ssrContextKey: z, warn: b, Fragment: G, Static: I, Comment: U, Text: H, mergeProps: W, defineComponent: q, openBlock: K, createElementBlock: Z, createSSRApp: J } = window.Vue;
function Q(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", r === "top" && i.firstChild ? i.insertBefore(n, i.firstChild) : i.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
const X = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer tailwind-base{@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-green-500:oklch(72.3% .219 149.579);--color-gray-500:oklch(55.1% .027 264.364);--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--font-weight-semibold:600;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.visible{visibility:visible}.mr-2{margin-right:calc(var(--spacing) * 2)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-full{width:100%}.flex-1{flex:1}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-8{gap:calc(var(--spacing) * 8)}.rounded{border-radius:.25rem}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.object-cover{object-fit:cover}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.py-4{padding-block:calc(var(--spacing) * 4)}.text-center{text-align:center}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-500{color:var(--color-gray-500)}.text-green-500{color:var(--color-green-500)}.text-red-500{color:var(--color-red-500)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}@media(min-width:48rem){.md\\:col-span-2{grid-column:span 2/span 2}.md\\:w-1\\/2{width:50%}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}}}@layer primevue,tailwind-utilities;@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}';
// @__NO_SIDE_EFFECTS__
function v(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const S = () => {
}, Y = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), k = Array.isArray, m = (e) => typeof e == "function", p = (e) => typeof e == "string", C = (e) => e !== null && typeof e == "object", y = (e) => (C(e) || m(e)) && m(e.then) && m(e.catch), ee = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, te = /\B([A-Z])/g, re = ee(
  (e) => e.replace(te, "-$1").toLowerCase()
);
let A;
const ie = () => A || (A = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function N(e) {
  if (k(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const i = e[r], n = p(i) ? ae(i) : N(i);
      if (n)
        for (const o in n)
          t[o] = n[o];
    }
    return t;
  } else if (p(e) || C(e))
    return e;
}
const ne = /;(?![^(]*\))/g, oe = /:([^]+)/, se = /\/\*[^]*?\*\//g;
function ae(e) {
  const t = {};
  return e.replace(se, "").split(ne).forEach((r) => {
    if (r) {
      const i = r.split(oe);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function le(e) {
  if (!e) return "";
  if (p(e)) return e;
  let t = "";
  for (const r in e) {
    const i = e[r];
    if (p(i) || typeof i == "number") {
      const n = r.startsWith("--") ? r : re(r);
      t += `${n}:${i};`;
    }
  }
  return t;
}
function B(e) {
  let t = "";
  if (p(e))
    t = e;
  else if (k(e))
    for (let r = 0; r < e.length; r++) {
      const i = B(e[r]);
      i && (t += i + " ");
    }
  else if (C(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const ce = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", de = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", fe = /* @__PURE__ */ v(ce), pe = /* @__PURE__ */ v(de), ue = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", he = /* @__PURE__ */ v(
  ue + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function me(e) {
  return !!e || e === "";
}
const ge = /[>/="'\u0009\u000a\u000c\u0020]/, _ = {};
function be(e) {
  if (_.hasOwnProperty(e))
    return _[e];
  const t = ge.test(e);
  return t && console.error(`unsafe attribute name: ${e}`), _[e] = !t;
}
const ye = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function we(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const xe = /["'&<>]/;
function u(e) {
  const t = "" + e, r = xe.exec(t);
  if (!r)
    return t;
  let i = "", n, o, s = 0;
  for (o = r.index; o < t.length; o++) {
    switch (t.charCodeAt(o)) {
      case 34:
        n = "&quot;";
        break;
      case 38:
        n = "&amp;";
        break;
      case 39:
        n = "&#39;";
        break;
      case 60:
        n = "&lt;";
        break;
      case 62:
        n = "&gt;";
        break;
      default:
        continue;
    }
    s !== o && (i += t.slice(s, o)), s = o + 1, i += n;
  }
  return s !== o ? i + t.slice(s, o) : i;
}
const ve = /^-?>|<!--|-->|--!>|<!-$/g;
function ke(e) {
  return e.replace(ve, "");
}
function Ce(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
const _e = /* @__PURE__ */ v(
  ",key,ref,innerHTML,textContent,ref_key,ref_for"
);
function Se(e, t) {
  let r = "";
  for (let i in e) {
    if (_e(i) || Y(i) || t === "textarea" && i === "value" || // force as property (not rendered in SSR)
    i.startsWith("."))
      continue;
    const n = e[i];
    i.startsWith("^") && (i = i.slice(1)), i === "class" ? r += ` class="${Ae(n)}"` : i === "style" ? r += ` style="${Re(n)}"` : i === "className" ? n != null && (r += ` class="${u(String(n))}"`) : r += Te(i, n, t);
  }
  return r;
}
function Te(e, t, r) {
  if (!we(t))
    return "";
  const i = r && (r.indexOf("-") > 0 || fe(r)) ? e : ye[e] || e.toLowerCase();
  return he(i) ? me(t) ? ` ${i}` : "" : be(i) ? t === "" ? ` ${i}` : ` ${i}="${u(t)}"` : (console.warn(
    `[@vue/server-renderer] Skipped rendering unsafe attribute name: ${i}`
  ), "");
}
function Ae(e) {
  return u(B(e));
}
function Re(e) {
  if (!e)
    return "";
  if (p(e))
    return u(e);
  const t = N($e(e));
  return u(le(t));
}
function $e(e) {
  if (!k(e) && C(e)) {
    const t = {};
    for (const r in e)
      r.startsWith(":--") ? t[r.slice(1)] = Ce(e[r]) : t[r] = e[r];
    return t;
  }
  return e;
}
const { ensureValidVNode: Ie } = x;
function Ee(e, t, r, i, n) {
  e("<!--teleport start-->");
  const o = n.appContext.provides[z], s = o.__teleportBuffers || (o.__teleportBuffers = {}), a = s[r] || (s[r] = []), c = a.length;
  let f;
  if (i)
    t(e), f = "<!--teleport start anchor--><!--teleport anchor-->";
  else {
    const { getBuffer: d, push: l } = V();
    l("<!--teleport start anchor-->"), t(l), l("<!--teleport anchor-->"), f = d();
  }
  a.splice(c, 0, f), e("<!--teleport end-->");
}
{
  const e = ie(), t = (r, i) => {
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
function ze(e, t) {
  throw new Error(
    "On-the-fly template compilation is not supported in the ESM build of @vue/server-renderer. All templates must be pre-compiled into render functions."
  );
}
const {
  createComponentInstance: Ne,
  setCurrentRenderingInstance: R,
  setupComponent: Be,
  renderComponentRoot: $,
  normalizeVNode: Ve,
  pushWarningContext: Ue,
  popWarningContext: He
} = x;
function V() {
  let e = !1;
  const t = [];
  return {
    getBuffer() {
      return t;
    },
    push(r) {
      const i = p(r);
      if (e && i) {
        t[t.length - 1] += r;
        return;
      }
      t.push(r), e = i, (y(r) || k(r) && r.hasAsync) && (t.hasAsync = !0);
    }
  };
}
function M(e, t = null, r) {
  const i = e.component = Ne(
    e,
    t,
    null
  ), n = Be(
    i,
    !0
    /* isSSR */
  ), o = y(n);
  let s = i.sp;
  return o || s ? Promise.resolve(n).then(() => {
    if (o && (s = i.sp), s)
      return Promise.all(
        s.map((c) => c.call(i.proxy))
      );
  }).catch(S).then(() => E(i, r)) : E(i, r);
}
function E(e, t) {
  const r = e.type, { getBuffer: i, push: n } = V();
  if (m(r)) {
    let o = $(e);
    if (!r.props)
      for (const s in e.attrs)
        s.startsWith("data-v-") && ((o.props || (o.props = {}))[s] = "");
    w(n, e.subTree = o, e, t);
  } else {
    (!e.render || e.render === S) && !e.ssrRender && !r.ssrRender && p(r.template) && (r.ssrRender = ze(r.template));
    const o = e.ssrRender || r.ssrRender;
    if (o) {
      let s = e.inheritAttrs !== !1 ? e.attrs : void 0, a = !1, c = e;
      for (; ; ) {
        const d = c.vnode.scopeId;
        d && (a || (s = { ...s }, a = !0), s[d] = "");
        const l = c.parent;
        if (l && l.subTree && l.subTree === c.vnode)
          c = l;
        else
          break;
      }
      if (t) {
        a || (s = { ...s });
        const d = t.trim().split(" ");
        for (let l = 0; l < d.length; l++)
          s[d[l]] = "";
      }
      const f = R(e);
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
        R(f);
      }
    } else if (e.render && e.render !== S)
      w(
        n,
        e.subTree = $(e),
        e,
        t
      );
    else {
      const s = r.name || r.__file || "<Anonymous>";
      b(`Component ${s} is missing template or render function.`), n("<!---->");
    }
  }
  return i();
}
function w(e, t, r, i) {
  const { type: n, shapeFlag: o, children: s, dirs: a, props: c } = t;
  switch (a && (t.props = je(t, c, a)), n) {
    case H:
      e(u(s));
      break;
    case U:
      e(
        s ? `<!--${ke(s)}-->` : "<!---->"
      );
      break;
    case I:
      e(s);
      break;
    case G:
      t.slotScopeIds && (i = (i ? i + " " : "") + t.slotScopeIds.join(" ")), e("<!--[-->"), T(
        e,
        s,
        r,
        i
      ), e("<!--]-->");
      break;
    default:
      o & 1 ? Me(e, t, r, i) : o & 6 ? e(M(t, r, i)) : o & 64 ? Fe(e, t, r, i) : o & 128 ? w(e, t.ssContent, r, i) : b(
        "[@vue/server-renderer] Invalid VNode type:",
        n,
        `(${typeof n})`
      );
  }
}
function T(e, t, r, i) {
  for (let n = 0; n < t.length; n++)
    w(e, Ve(t[n]), r, i);
}
function Me(e, t, r, i) {
  const n = t.type;
  let { props: o, children: s, shapeFlag: a, scopeId: c } = t, f = `<${n}`;
  o && (f += Se(o, n)), c && (f += ` ${c}`);
  let d = r, l = t;
  for (; d && l === d.subTree; )
    l = d.vnode, l.scopeId && (f += ` ${l.scopeId}`), d = d.parent;
  if (i && (f += ` ${i}`), e(f + ">"), !pe(n)) {
    let h = !1;
    o && (o.innerHTML ? (h = !0, e(o.innerHTML)) : o.textContent ? (h = !0, e(u(o.textContent))) : n === "textarea" && o.value && (h = !0, e(u(o.value)))), h || (a & 8 ? e(u(s)) : a & 16 && T(
      e,
      s,
      r,
      i
    )), e(`</${n}>`);
  }
}
function je(e, t, r) {
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
  return W(t || {}, ...i);
}
function Fe(e, t, r, i) {
  const n = t.props && t.props.to, o = t.props && t.props.disabled;
  if (!n)
    return o || b("[@vue/server-renderer] Teleport is missing target prop."), [];
  if (!p(n))
    return b(
      "[@vue/server-renderer] Teleport target must be a query selector string."
    ), [];
  Ee(
    e,
    (s) => {
      T(
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
const { isVNode: Le } = x;
function g(e, t, r) {
  if (!e.hasAsync)
    return t + F(e);
  let i = t;
  for (let n = r; n < e.length; n += 1) {
    const o = e[n];
    if (p(o)) {
      i += o;
      continue;
    }
    if (y(o))
      return o.then((a) => (e[n] = a, g(e, i, n)));
    const s = g(o, i, 0);
    if (y(s))
      return s.then((a) => (e[n] = a, g(e, "", n)));
    i = s;
  }
  return i;
}
function j(e) {
  return g(e, "", 0);
}
function F(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    p(i) ? t += i : t += F(i);
  }
  return t;
}
async function L(e, t = {}) {
  if (Le(e))
    return L(P({ render: () => e }), t);
  const r = D(e._component, e._props);
  r.appContext = e._context, e.provide(z, t);
  const i = await M(r), n = await j(i);
  if (await Oe(t), t.__watcherHandles)
    for (const o of t.__watcherHandles)
      o();
  return n;
}
async function Oe(e) {
  if (e.__teleportBuffers) {
    e.teleports = e.teleports || {};
    for (const t in e.__teleportBuffers)
      e.teleports[t] = await j(
        await Promise.all([e.__teleportBuffers[t]])
      );
  }
}
const { isVNode: We } = x;
O();
const Pe = ["id"], De = /* @__PURE__ */ q({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(e) {
    return (t, r) => (K(), Z("div", {
      id: e._p.f.name("root"),
      class: "box"
    }, null, 8, Pe));
  }
});
Q(X);
const qe = async (e) => ({
  set: async (t) => {
    console.log(`--renderer [${t.data.curr.type}]`);
    const i = J(De, {
      _p: e,
      _pp: t
    });
    return {
      r: `
                 <div>
                    ${await L(i)}
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
  qe as index,
  qe as renderer
};
