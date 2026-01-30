import { r as q, m as O, d as x, c as d, t as _, a as ue, n as se, b as p, o as de, e as ce, F as he, f as w, h as j, i as fe, g as Ae, w as z, j as Ne, k as Ie, l as be, p as Le } from "./runtime-dom.esm-bundler-CGwg54h5.js";
const H = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
}, M = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored",
  AUTO: "auto"
}, m = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
}, Oe = {
  BOUNCE: "bounce",
  SLIDE: "slide",
  FLIP: "flip",
  ZOOM: "zoom",
  NONE: "none"
}, Pe = {
  dangerouslyHTMLString: !1,
  multiple: !0,
  position: H.TOP_RIGHT,
  autoClose: 5e3,
  transition: "bounce",
  hideProgressBar: !1,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  closeOnClick: !0,
  className: "",
  bodyClassName: "",
  style: {},
  progressClassName: "",
  progressStyle: {},
  role: "alert",
  theme: "light"
}, qe = {
  rtl: !1,
  newestOnTop: !1,
  toastClassName: ""
}, pe = {
  ...Pe,
  ...qe
};
m.DEFAULT;
var i = /* @__PURE__ */ ((e) => (e[e.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", e[e.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", e.CSS_NAMESPACE = "Toastify", e))(i || {}), ee = /* @__PURE__ */ ((e) => (e.ENTRANCE_ANIMATION_END = "d", e))(ee || {});
const Be = {
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: !0
}, we = {
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: !0
}, $e = {
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
}, Me = {
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
}, re = "Toastify--animate Toastify__none-enter";
function me(e, t = !1) {
  var n;
  let o = Be;
  if (!e || typeof e == "string")
    switch (e) {
      case "flip":
        o = Me;
        break;
      case "zoom":
        o = $e;
        break;
      case "slide":
        o = we;
        break;
    }
  else
    o = e;
  if (t)
    o.enter = re;
  else if (o.enter === re) {
    const a = (n = o.exit.split("__")[1]) == null ? void 0 : n.split("-")[0];
    o.enter = `Toastify--animate Toastify__${a}-enter`;
  }
  return o;
}
function Fe(e) {
  return e.containerId || String(e.position);
}
const Y = "will-unmount";
function Re(e = H.TOP_RIGHT) {
  return !!document.querySelector(`.${i.CSS_NAMESPACE}__toast-container--${e}`);
}
function Ue(e = H.TOP_RIGHT) {
  return `${i.CSS_NAMESPACE}__toast-container--${e}`;
}
function ke(e, t, n = !1) {
  const o = [
    `${i.CSS_NAMESPACE}__toast-container`,
    `${i.CSS_NAMESPACE}__toast-container--${e}`,
    n ? `${i.CSS_NAMESPACE}__toast-container--rtl` : null
  ].filter(Boolean).join(" ");
  return $(t) ? t({
    position: e,
    rtl: n,
    defaultClassName: o
  }) : `${o} ${t || ""}`;
}
function De(e) {
  var t;
  const { position: n, containerClassName: o, rtl: a = !1, style: s = {} } = e, l = i.CSS_NAMESPACE, y = Ue(n), u = document.querySelector(`.${l}`), C = document.querySelector(`.${y}`), g = !!C && !((t = C.className) != null && t.includes(Y)), h = u || document.createElement("div"), f = document.createElement("div");
  f.className = ke(
    n,
    o,
    a
  ), f.dataset.testid = `${i.CSS_NAMESPACE}__toast-container--${n}`, f.id = Fe(e);
  for (const S in s)
    if (Object.prototype.hasOwnProperty.call(s, S)) {
      const A = s[S];
      f.style[S] = A;
    }
  return u || (h.className = i.CSS_NAMESPACE, document.body.appendChild(h)), g || h.appendChild(f), f;
}
function te(e) {
  var t, n, o;
  const a = typeof e == "string" ? e : ((t = e.currentTarget) == null ? void 0 : t.id) || ((n = e.target) == null ? void 0 : n.id), s = document.getElementById(a);
  s && s.removeEventListener("animationend", te, !1);
  try {
    D[a].unmount(), (o = document.getElementById(a)) == null || o.remove(), delete D[a], delete c[a];
  } catch {
  }
}
const D = q({});
function xe(e, t) {
  const n = document.getElementById(String(t));
  n && (D[n.id] = e);
}
function ne(e, t = !0) {
  const n = String(e);
  if (!D[n]) return;
  const o = document.getElementById(n);
  o && o.classList.add(Y), t ? (je(e), o && o.addEventListener("animationend", te, !1)) : te(n), T.items = T.items.filter((a) => a.containerId !== e);
}
function He(e) {
  for (const t in D)
    ne(t, e);
  T.items = [];
}
function ye(e, t) {
  const n = document.getElementById(e.toastId);
  if (n) {
    let o = e;
    o = {
      ...o,
      ...me(o.transition)
    };
    const a = o.appendPosition ? `${o.exit}--${o.position}` : o.exit;
    n.className += ` ${a}`, t && t(n);
  }
}
function je(e) {
  for (const t in c)
    if (t === e)
      for (const n of c[t] || [])
        ye(n);
}
function ze(e) {
  const t = F().find((n) => n.toastId === e);
  return t?.containerId;
}
function ie(e) {
  return document.getElementById(e);
}
function Ge(e) {
  const t = ie(e.containerId);
  return t && t.classList.contains(Y);
}
function le(e) {
  var t;
  const n = fe(e.content) ? _(e.content.props) : null;
  return n ?? _((t = e.data) != null ? t : {});
}
function Ve(e) {
  return e ? T.items.filter((t) => t.containerId === e).length > 0 : T.items.length > 0;
}
function We() {
  if (T.items.length > 0) {
    const e = T.items.shift();
    G(e?.toastContent, e?.toastProps);
  }
}
const c = q({}), T = q({ items: [] });
function F() {
  const e = _(c);
  return Object.values(e).reduce((t, n) => [...t, ...n], []);
}
function Ke(e) {
  return F().find((t) => t.toastId === e);
}
function G(e, t = {}) {
  if (Ge(t)) {
    const n = ie(t.containerId);
    n && n.addEventListener("animationend", oe.bind(null, e, t), !1);
  } else
    oe(e, t);
}
function oe(e, t = {}) {
  const n = ie(t.containerId);
  n && n.removeEventListener("animationend", oe.bind(null, e, t), !1);
  const o = c[t.containerId] || [], a = o.length > 0;
  if (!a && !Re(t.position)) {
    const s = De(t), l = ue(mt, t);
    t.useHandler && t.useHandler(l), l.mount(s), xe(l, s.id);
  }
  a && !t.updateId && (t.position = o[0].position), se(() => {
    t.updateId ? v.update(t) : v.add(e, t);
  });
}
const v = {
  /**
   * add a toast
   * @param _ ..
   * @param opts toast props
   */
  add(e, t) {
    const { containerId: n = "" } = t;
    n && (c[n] = c[n] || [], c[n].find((o) => o.toastId === t.toastId) || setTimeout(() => {
      var o, a;
      t.newestOnTop ? (o = c[n]) == null || o.unshift(t) : (a = c[n]) == null || a.push(t), t.onOpen && t.onOpen(le(t));
    }, t.delay || 0));
  },
  /**
   * remove a toast
   * @param id toastId
   */
  remove(e) {
    if (e) {
      const t = ze(e);
      if (t) {
        const n = c[t];
        let o = n.find((a) => a.toastId === e);
        c[t] = n.filter((a) => a.toastId !== e), !c[t].length && !Ve(t) && ne(t, !1), We(), se(() => {
          o != null && o.onClose && (o.onClose(le(o)), o = void 0);
        });
      }
    }
  },
  /**
   * update the toast
   * @param opts toast props
   */
  update(e = {}) {
    const { containerId: t = "" } = e;
    if (t && e.updateId) {
      c[t] = c[t] || [];
      const n = c[t].find((s) => s.toastId === e.toastId), o = n?.position !== e.position || n?.transition !== e.transition, a = {
        ...e,
        disabledEnterTransition: !o,
        updateId: void 0
      };
      v.dismissForce(e?.toastId), setTimeout(() => {
        r(a.content, a);
      }, e.delay || 0);
    }
  },
  /**
   * clear all toasts in container.
   * @param containerId container id
   */
  clear(e, t = !0) {
    e ? ne(e, t) : He(t);
  },
  dismissCallback(e) {
    var t;
    const n = (t = e.currentTarget) == null ? void 0 : t.id, o = document.getElementById(n);
    o && (o.removeEventListener("animationend", v.dismissCallback, !1), setTimeout(() => {
      v.remove(n);
    }));
  },
  dismiss(e) {
    if (e) {
      const t = F();
      for (const n of t)
        if (n.toastId === e) {
          ye(n, (o) => {
            o.addEventListener("animationend", v.dismissCallback, !1);
          });
          break;
        }
    }
  },
  dismissForce(e) {
    if (e) {
      const t = F();
      for (const n of t)
        if (n.toastId === e) {
          const o = document.getElementById(e);
          o && (o.remove(), o.removeEventListener("animationend", v.dismissCallback, !1), v.remove(e));
          break;
        }
    }
  }
}, Xe = q({ useHandler: void 0 }), ve = q({}), X = q({});
function ge() {
  return Math.random().toString(36).substring(2, 9);
}
function Ye(e) {
  return typeof e == "number" && !isNaN(e);
}
function ae(e) {
  return typeof e == "string";
}
function $(e) {
  return typeof e == "function";
}
function Z(...e) {
  return O(...e);
}
function V(e) {
  return typeof e == "object" && (!!(e != null && e.render) || !!(e != null && e.setup) || typeof e?.type == "object");
}
function Ze(e = {}) {
  ve[`${i.CSS_NAMESPACE}-default-options`] = e;
}
function Je() {
  return ve[`${i.CSS_NAMESPACE}-default-options`] || pe;
}
function Qe() {
  const e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return document.documentElement.classList.contains("dark") || e ? "dark" : "light";
}
var W = /* @__PURE__ */ ((e) => (e[e.Enter = 0] = "Enter", e[e.Exit = 1] = "Exit", e))(W || {});
const Ee = {
  containerId: {
    type: [String, Number],
    required: !1,
    default: ""
  },
  clearOnUrlChange: {
    type: Boolean,
    required: !1,
    default: !0
  },
  disabledEnterTransition: {
    type: Boolean,
    required: !1,
    default: !1
  },
  dangerouslyHTMLString: {
    type: Boolean,
    required: !1,
    default: !1
  },
  multiple: {
    type: Boolean,
    required: !1,
    default: !0
  },
  limit: {
    type: Number,
    required: !1,
    default: void 0
  },
  position: {
    type: String,
    required: !1,
    default: H.TOP_LEFT
  },
  bodyClassName: {
    type: String,
    required: !1,
    default: ""
  },
  autoClose: {
    type: [Number, Boolean],
    required: !1,
    default: !1
  },
  closeButton: {
    type: [Boolean, Function, Object],
    required: !1,
    default: void 0
  },
  transition: {
    type: [String, Object],
    required: !1,
    default: "bounce"
  },
  hideProgressBar: {
    type: Boolean,
    required: !1,
    default: !1
  },
  pauseOnHover: {
    type: Boolean,
    required: !1,
    default: !0
  },
  pauseOnFocusLoss: {
    type: Boolean,
    required: !1,
    default: !0
  },
  closeOnClick: {
    type: Boolean,
    required: !1,
    default: !0
  },
  progress: {
    type: Number,
    required: !1,
    default: void 0
  },
  progressClassName: {
    type: String,
    required: !1,
    default: ""
  },
  toastStyle: {
    type: Object,
    required: !1,
    default() {
      return {};
    }
  },
  progressStyle: {
    type: Object,
    required: !1,
    default() {
      return {};
    }
  },
  role: {
    type: String,
    required: !1,
    default: "alert"
  },
  theme: {
    type: String,
    required: !1,
    default: M.AUTO
  },
  content: {
    type: [String, Object, Function],
    required: !1,
    default: ""
  },
  toastId: {
    type: [String, Number],
    required: !1,
    default: ""
  },
  data: {
    type: [Object, String],
    required: !1,
    default() {
      return {};
    }
  },
  type: {
    type: String,
    required: !1,
    default: m.DEFAULT
  },
  icon: {
    type: [Boolean, String, Number, Object, Function],
    required: !1,
    default: void 0
  },
  delay: {
    type: Number,
    required: !1,
    default: void 0
  },
  onOpen: {
    type: Function,
    required: !1,
    default: void 0
  },
  onClose: {
    type: Function,
    required: !1,
    default: void 0
  },
  onClick: {
    type: Function,
    required: !1,
    default: void 0
  },
  isLoading: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  rtl: {
    type: Boolean,
    required: !1,
    default: !1
  },
  toastClassName: {
    type: String,
    required: !1,
    default: ""
  },
  updateId: {
    type: [String, Number],
    required: !1,
    default: ""
  },
  contentProps: {
    type: Object,
    required: !1,
    default: null
  },
  expandCustomProps: {
    type: Boolean,
    required: !1,
    default: !1
  }
}, et = {
  autoClose: {
    type: [Number, Boolean],
    required: !0
  },
  isRunning: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  type: {
    type: String,
    required: !1,
    default: m.DEFAULT
  },
  theme: {
    type: String,
    required: !1,
    default: M.AUTO
  },
  hide: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  className: {
    type: [String, Function],
    required: !1,
    default: ""
  },
  controlledProgress: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  rtl: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  isIn: {
    type: Boolean,
    required: !1,
    default: void 0
  },
  progress: {
    type: Number,
    required: !1,
    default: void 0
  },
  closeToast: {
    type: Function,
    required: !1,
    default: void 0
  }
}, tt = /* @__PURE__ */ x({
  name: "ProgressBar",
  props: et,
  // @ts-ignore
  setup(e, {
    attrs: t
  }) {
    const n = w(), o = p(() => e.hide ? "true" : "false"), a = p(() => ({
      ...t.style || {},
      animationDuration: `${e.autoClose === !0 ? 5e3 : e.autoClose}ms`,
      animationPlayState: e.isRunning ? "running" : "paused",
      opacity: e.hide || e.autoClose === !1 ? 0 : 1,
      transform: e.controlledProgress ? `scaleX(${e.progress})` : "none"
    })), s = p(() => [`${i.CSS_NAMESPACE}__progress-bar`, e.controlledProgress ? `${i.CSS_NAMESPACE}__progress-bar--controlled` : `${i.CSS_NAMESPACE}__progress-bar--animated`, `${i.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`, `${i.CSS_NAMESPACE}__progress-bar--${e.type}`, e.rtl ? `${i.CSS_NAMESPACE}__progress-bar--rtl` : null].filter(Boolean).join(" ")), l = p(() => `${s.value} ${t?.class || ""}`), y = () => {
      n.value && (n.value.onanimationend = null, n.value.ontransitionend = null);
    }, u = () => {
      e.isIn && e.closeToast && e.autoClose !== !1 && (e.closeToast(), y());
    }, C = p(() => e.controlledProgress ? null : u), g = p(() => e.controlledProgress ? u : null);
    return z(() => {
      n.value && (y(), n.value.onanimationend = C.value, n.value.ontransitionend = g.value);
    }), () => d("div", {
      ref: n,
      role: "progressbar",
      "aria-hidden": o.value,
      "aria-label": "notification timer",
      class: l.value,
      style: a.value
    }, null);
  }
}), nt = /* @__PURE__ */ x({
  name: "CloseButton",
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      required: !1,
      default: M.AUTO
    },
    type: {
      type: String,
      required: !1,
      default: M.LIGHT
    },
    ariaLabel: {
      type: String,
      required: !1,
      default: "close"
    },
    closeToast: {
      type: Function,
      required: !1,
      default: void 0
    }
  },
  setup(e) {
    return () => d("button", {
      class: `${i.CSS_NAMESPACE}__close-button ${i.CSS_NAMESPACE}__close-button--${e.theme}`,
      type: "button",
      onClick: (t) => {
        t.stopPropagation(), e.closeToast && e.closeToast(t);
      },
      "aria-label": e.ariaLabel
    }, [d("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 14 16"
    }, [d("path", {
      "fill-rule": "evenodd",
      d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    }, null)])]);
  }
}), J = ({
  theme: e,
  type: t,
  path: n,
  ...o
}) => d("svg", O({
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`
}, o), [d("path", {
  d: n
}, null)]);
function ot(e) {
  return d(J, O(e, {
    path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }), null);
}
function at(e) {
  return d(J, O(e, {
    path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }), null);
}
function st(e) {
  return d(J, O(e, {
    path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }), null);
}
function it(e) {
  return d(J, O(e, {
    path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }), null);
}
function rt() {
  return d("div", {
    class: `${i.CSS_NAMESPACE}__spinner`
  }, null);
}
const K = {
  info: at,
  warning: ot,
  success: st,
  error: it,
  spinner: rt
}, lt = (e) => e in K;
function ut({
  theme: e,
  type: t,
  isLoading: n,
  icon: o
}) {
  let a;
  const s = !!n || t === "loading", l = {
    theme: e,
    type: t
  };
  if (s && (o === void 0 || typeof o == "boolean")) return K.spinner();
  if (o !== !1) {
    if (V(o))
      a = _(o);
    else if ($(o)) {
      const y = o;
      l.type = s ? "loading" : t, a = y(l), a = !a && s ? K.spinner() : a;
    } else fe(o) ? a = Ae(o, l) : ae(o) || Ye(o) ? a = o : lt(t) && (a = K[t](l));
    return a;
  }
}
const dt = () => {
};
function ct(e, t, n = i.COLLAPSE_DURATION) {
  const { scrollHeight: o, style: a } = e, s = n;
  requestAnimationFrame(() => {
    a.minHeight = "initial", a.height = o + "px", a.transition = `all ${s}ms`, requestAnimationFrame(() => {
      a.height = "0", a.padding = "0", a.margin = "0", setTimeout(t, s);
    });
  });
}
function ft(e) {
  const t = w(!1), n = w(!1), o = w(!1), a = w(W.Enter), s = q({
    ...e,
    appendPosition: e.appendPosition || !1,
    collapse: typeof e.collapse > "u" ? !0 : e.collapse,
    collapseDuration: e.collapseDuration || i.COLLAPSE_DURATION
  }), l = s.done || dt, y = p(() => s.appendPosition ? `${s.enter}--${s.position}` : s.enter), u = p(() => s.appendPosition ? `${s.exit}--${s.position}` : s.exit), C = p(() => e.pauseOnHover ? {
    onMouseenter: I,
    onMouseleave: N
  } : {});
  function g() {
    const E = y.value.split(" ");
    f().addEventListener(
      ee.ENTRANCE_ANIMATION_END,
      N,
      { once: !0 }
    );
    const b = (B) => {
      const U = f();
      B.target === U && (U.dispatchEvent(new Event(ee.ENTRANCE_ANIMATION_END)), U.removeEventListener("animationend", b), U.removeEventListener("animationcancel", b), a.value === W.Enter && B.type !== "animationcancel" && U.classList.remove(...E));
    }, L = () => {
      const B = f();
      B.classList.add(...E), B.addEventListener("animationend", b), B.addEventListener("animationcancel", b);
    };
    e.pauseOnFocusLoss && S(), L();
  }
  function h() {
    if (!f()) return;
    const E = () => {
      const L = f();
      L.removeEventListener("animationend", E), s.collapse ? ct(L, l, s.collapseDuration) : l();
    }, b = () => {
      const L = f();
      a.value = W.Exit, L && (L.className += ` ${u.value}`, L.addEventListener("animationend", E));
    };
    n.value || (o.value ? E() : setTimeout(b));
  }
  function f() {
    return e.toastRef.value;
  }
  function S() {
    document.hasFocus() || I(), window.addEventListener("focus", N), window.addEventListener("blur", I);
  }
  function A() {
    window.removeEventListener("focus", N), window.removeEventListener("blur", I);
  }
  function N() {
    (!e.loading.value || e.isLoading === void 0) && (t.value = !0);
  }
  function I() {
    t.value = !1;
  }
  function R(E) {
    E && (E.stopPropagation(), E.preventDefault()), n.value = !1;
  }
  return z(h), z(() => {
    const E = F();
    n.value = E.findIndex((b) => b.toastId === s.toastId) > -1;
  }), z(() => {
    e.isLoading !== void 0 && (e.loading.value ? I() : N());
  }), de(g), ce(() => {
    e.pauseOnFocusLoss && A();
  }), {
    isIn: n,
    isRunning: t,
    hideToast: R,
    eventHandlers: C
  };
}
const pt = /* @__PURE__ */ x({
  name: "ToastItem",
  inheritAttrs: !1,
  props: Ee,
  // @ts-ignore
  setup(e) {
    const t = w(), n = p(() => !!e.isLoading), o = p(() => e.progress !== void 0 && e.progress !== null), a = p(() => ut(e)), s = p(() => [`${i.CSS_NAMESPACE}__toast`, `${i.CSS_NAMESPACE}__toast-theme--${e.theme}`, `${i.CSS_NAMESPACE}__toast--${e.type}`, e.rtl ? `${i.CSS_NAMESPACE}__toast--rtl` : void 0, e.toastClassName || ""].filter(Boolean).join(" ")), {
      isRunning: l,
      isIn: y,
      hideToast: u,
      eventHandlers: C
    } = ft({
      toastRef: t,
      loading: n,
      done: () => {
        v.remove(e.toastId);
      },
      ...me(e.transition, e.disabledEnterTransition),
      ...e
    });
    return () => d("div", O({
      id: e.toastId,
      class: s.value,
      style: e.toastStyle || {},
      ref: t,
      "data-testid": `toast-item-${e.toastId}`,
      onClick: (g) => {
        e.closeOnClick && u(), e.onClick && e.onClick(g);
      }
    }, C.value), [d("div", {
      role: e.role,
      "data-testid": "toast-body",
      class: `${i.CSS_NAMESPACE}__toast-body ${e.bodyClassName || ""}`
    }, [a.value != null && d("div", {
      "data-testid": `toast-icon-${e.type}`,
      class: [`${i.CSS_NAMESPACE}__toast-icon`, e.isLoading ? "" : `${i.CSS_NAMESPACE}--animate-icon ${i.CSS_NAMESPACE}__zoom-enter`].join(" ")
    }, [V(a.value) ? j(_(a.value), {
      theme: e.theme,
      type: e.type
    }) : $(a.value) ? a.value({
      theme: e.theme,
      type: e.type
    }) : a.value]), d("div", {
      "data-testid": "toast-content"
    }, [V(e.content) ? j(_(e.content), {
      toastProps: _(e),
      closeToast: u,
      data: e.data,
      ...e.expandCustomProps ? e.contentProps : {
        contentProps: e.contentProps || {}
      }
    }) : $(e.content) ? e.content({
      toastProps: _(e),
      closeToast: u,
      data: e.data
    }) : e.dangerouslyHTMLString ? j("div", {
      innerHTML: e.content
    }) : e.content])]), (e.closeButton === void 0 || e.closeButton === !0) && d(nt, {
      theme: e.theme,
      closeToast: (g) => {
        g.stopPropagation(), g.preventDefault(), u();
      }
    }, null), V(e.closeButton) ? j(_(e.closeButton), {
      closeToast: u,
      type: e.type,
      theme: e.theme
    }) : $(e.closeButton) ? e.closeButton({
      closeToast: u,
      type: e.type,
      theme: e.theme
    }) : null, d(tt, {
      className: e.progressClassName,
      style: e.progressStyle,
      rtl: e.rtl,
      theme: e.theme,
      isIn: y.value,
      type: e.type,
      hide: e.hideProgressBar,
      isRunning: l.value,
      autoClose: e.autoClose,
      controlledProgress: o.value,
      progress: e.progress,
      closeToast: e.isLoading ? void 0 : u
    }, null)]);
  }
});
let k = 0;
function Ce() {
  typeof window > "u" || (k && window.cancelAnimationFrame(k), k = window.requestAnimationFrame(Ce), X.lastUrl !== window.location.href && (X.lastUrl = window.location.href, v.clear()));
}
const mt = /* @__PURE__ */ x({
  name: "ToastifyContainer",
  inheritAttrs: !1,
  props: Ee,
  // @ts-ignore
  setup(e) {
    const t = p(() => e.containerId), n = p(() => c[t.value] || []), o = p(() => n.value.filter((a) => a.position === e.position));
    return de(() => {
      typeof window < "u" && e.clearOnUrlChange && window.requestAnimationFrame(Ce);
    }), ce(() => {
      typeof window < "u" && k && (window.cancelAnimationFrame(k), X.lastUrl = "");
    }), () => d(he, null, [o.value.map((a) => {
      const {
        toastId: s = ""
      } = a;
      return d(pt, O({
        key: s
      }, a), null);
    })]);
  }
});
let Q = !1;
const Se = {
  isLoading: !0,
  autoClose: !1,
  closeOnClick: !1,
  closeButton: !1,
  draggable: !1
};
function _e() {
  const e = [];
  return F().forEach((t) => {
    const n = document.getElementById(t.containerId);
    n && !n.classList.contains(Y) && e.push(t);
  }), e;
}
function yt(e) {
  const t = _e().length, n = e ?? 0;
  return n > 0 && t + T.items.length >= n;
}
function vt(e) {
  yt(e.limit) && !e.updateId && T.items.push({
    toastId: e.toastId,
    containerId: e.containerId,
    toastContent: e.content,
    toastProps: e
  });
}
function P(e, t, n = {}) {
  if (Q) return;
  n = Z(Je(), {
    type: t
  }, _(n)), (!n.toastId || typeof n.toastId != "string" && typeof n.toastId != "number") && (n.toastId = ge()), n = {
    ...n,
    ...n.type === "loading" ? Se : {},
    content: e,
    containerId: n.containerId || String(n.position)
  };
  const o = Number(n?.progress);
  return !isNaN(o) && o < 0 && (n.progress = 0), o > 1 && (n.progress = 1), n.theme === "auto" && (n.theme = Qe()), vt(n), X.lastUrl = window.location.href, n.multiple ? T.items.length ? n.updateId && G(e, n) : G(e, n) : (Q = !0, r.clearAll(void 0, !1), setTimeout(() => {
    G(e, n);
  }, 0), setTimeout(() => {
    Q = !1;
  }, 390)), n.toastId;
}
const r = (e, t) => P(e, m.DEFAULT, t);
r.info = (e, t) => P(e, m.DEFAULT, {
  ...t,
  type: m.INFO
});
r.error = (e, t) => P(e, m.DEFAULT, {
  ...t,
  type: m.ERROR
});
r.warning = (e, t) => P(e, m.DEFAULT, {
  ...t,
  type: m.WARNING
});
r.warn = r.warning;
r.success = (e, t) => P(e, m.DEFAULT, {
  ...t,
  type: m.SUCCESS
});
r.loading = (e, t) => P(e, m.DEFAULT, Z(t, Se));
r.dark = (e, t) => P(e, m.DEFAULT, Z(t, {
  theme: M.DARK
}));
r.remove = (e) => {
  e ? v.dismiss(e) : v.clear();
};
r.clearAll = (e, t) => {
  se(() => {
    v.clear(e, t);
  });
};
r.isActive = (e) => {
  let t = !1;
  return t = _e().findIndex((n) => n.toastId === e) > -1, t;
};
r.update = (e, t = {}) => {
  setTimeout(() => {
    const n = Ke(e);
    if (n) {
      const o = _(n), {
        content: a
      } = o, s = {
        ...o,
        ...t,
        toastId: t.toastId || e,
        updateId: ge()
      }, l = s.render || a;
      delete s.render, P(l, s.type, s);
    }
  }, 0);
};
r.done = (e) => {
  r.update(e, {
    isLoading: !1,
    progress: 1
  });
};
r.promise = gt;
function gt(e, {
  pending: t,
  error: n,
  success: o
}, a) {
  var s, l, y;
  let u;
  const C = {
    ...a || {},
    autoClose: !1
  };
  t && (u = ae(t) ? r.loading(t, C) : r.loading(t.render, {
    ...C,
    ...t
  }));
  const g = {
    autoClose: (s = a?.autoClose) != null ? s : !0,
    closeOnClick: (l = a?.closeOnClick) != null ? l : !0,
    closeButton: (y = a?.autoClose) != null ? y : null,
    isLoading: void 0,
    draggable: null,
    delay: 100
  }, h = (S, A, N) => {
    if (A == null) {
      r.remove(u);
      return;
    }
    const I = {
      type: S,
      ...g,
      ...a,
      data: N
    }, R = ae(A) ? {
      render: A
    } : A;
    return u ? r.update(u, {
      ...I,
      ...R,
      isLoading: !1
    }) : r(R.render, {
      ...I,
      ...R,
      isLoading: !1
    }), N;
  }, f = $(e) ? e() : e;
  return f.then((S) => {
    h("success", o, S);
  }).catch((S) => {
    h("error", n, S);
  }), f;
}
r.POSITION = H;
r.THEME = M;
r.TYPE = m;
r.TRANSITIONS = Oe;
const Te = {
  install(e, t = {}) {
    Xe.useHandler = t.useHandler || (() => {
    }), Et(t);
  }
};
typeof window < "u" && (window.Vue3Toastify = Te);
function Et(e = {}) {
  const t = Z(pe, e);
  Ze(t);
}
const Ct = { key: 0 }, St = /* @__PURE__ */ x({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    (async () => e._p.f.listen("msg", async (n) => {
      console.log("_p.f.listen", n), n.type == "show" && r(
        n.custom.msg,
        //'Custom toast',
        n.custom.options
        /*{
            type: 'success',
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 5000,
            theme: 'dark',
        }*/
      );
    }))();
    const t = () => {
      r.success("Test 🚀");
    };
    return (n, o) => e._$p.data.curr.data.env == "dev" ? (be(), Ne("div", Ct, [
      Le("button", { onClick: t }, "Test")
    ])) : Ie("", !0);
  }
}), Tt = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const o = ue(St, {
      _p: e,
      _$p: t
    });
    o.use(Te, {
      /*
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT,
      */
    });
    const a = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: t,
            custom: {}
          });
        }
      }
    }, s = document.getElementById(e.f.name("vue-root"));
    return o.mount(s), a;
  }
});
export {
  Tt as hydrator,
  Tt as index
};
