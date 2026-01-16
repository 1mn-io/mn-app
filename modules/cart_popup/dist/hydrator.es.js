import { r as z, m as M, d as H, c as p, t as O, a as Ce, n as me, b as h, o as xe, e as Ee, F as ie, f as x, h as Y, i as we, g as Be, w as Z, j as g, k as y, T as se, l as re, p as R, q as r, s as F, u as ge, v as ye, x as Me, y as $e, z as qe, A as Fe } from "./runtime-dom.esm-bundler-DOmFF1cl.js";
const J = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
}, D = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored",
  AUTO: "auto"
}, E = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
}, Re = {
  BOUNCE: "bounce",
  SLIDE: "slide",
  FLIP: "flip",
  ZOOM: "zoom",
  NONE: "none"
}, ze = {
  dangerouslyHTMLString: !1,
  multiple: !0,
  position: J.TOP_RIGHT,
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
}, Ue = {
  rtl: !1,
  newestOnTop: !1,
  toastClassName: ""
}, ke = {
  ...ze,
  ...Ue
};
E.DEFAULT;
var c = /* @__PURE__ */ ((e) => (e[e.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", e[e.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", e.CSS_NAMESPACE = "Toastify", e))(c || {}), de = /* @__PURE__ */ ((e) => (e.ENTRANCE_ANIMATION_END = "d", e))(de || {});
const De = {
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: !0
}, je = {
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: !0
}, He = {
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
}, Ge = {
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
}, he = "Toastify--animate Toastify__none-enter";
function Se(e, t = !1) {
  var a;
  let o = De;
  if (!e || typeof e == "string")
    switch (e) {
      case "flip":
        o = Ge;
        break;
      case "zoom":
        o = He;
        break;
      case "slide":
        o = je;
        break;
    }
  else
    o = e;
  if (t)
    o.enter = he;
  else if (o.enter === he) {
    const n = (a = o.exit.split("__")[1]) == null ? void 0 : a.split("-")[0];
    o.enter = `Toastify--animate Toastify__${n}-enter`;
  }
  return o;
}
function Ve(e) {
  return e.containerId || String(e.position);
}
const ae = "will-unmount";
function Je(e = J.TOP_RIGHT) {
  return !!document.querySelector(`.${c.CSS_NAMESPACE}__toast-container--${e}`);
}
function Xe(e = J.TOP_RIGHT) {
  return `${c.CSS_NAMESPACE}__toast-container--${e}`;
}
function Ye(e, t, a = !1) {
  const o = [
    `${c.CSS_NAMESPACE}__toast-container`,
    `${c.CSS_NAMESPACE}__toast-container--${e}`,
    a ? `${c.CSS_NAMESPACE}__toast-container--rtl` : null
  ].filter(Boolean).join(" ");
  return U(t) ? t({
    position: e,
    rtl: a,
    defaultClassName: o
  }) : `${o} ${t || ""}`;
}
function Ze(e) {
  var t;
  const { position: a, containerClassName: o, rtl: n = !1, style: s = {} } = e, i = c.CSS_NAMESPACE, v = Xe(a), d = document.querySelector(`.${i}`), T = document.querySelector(`.${v}`), w = !!T && !((t = T.className) != null && t.includes(ae)), I = d || document.createElement("div"), b = document.createElement("div");
  b.className = Ye(
    a,
    o,
    n
  ), b.dataset.testid = `${c.CSS_NAMESPACE}__toast-container--${a}`, b.id = Ve(e);
  for (const k in s)
    if (Object.prototype.hasOwnProperty.call(s, k)) {
      const A = s[k];
      b.style[k] = A;
    }
  return d || (I.className = c.CSS_NAMESPACE, document.body.appendChild(I)), w || I.appendChild(b), b;
}
function ue(e) {
  var t, a, o;
  const n = typeof e == "string" ? e : ((t = e.currentTarget) == null ? void 0 : t.id) || ((a = e.target) == null ? void 0 : a.id), s = document.getElementById(n);
  s && s.removeEventListener("animationend", ue, !1);
  try {
    V[n].unmount(), (o = document.getElementById(n)) == null || o.remove(), delete V[n], delete C[n];
  } catch {
  }
}
const V = z({});
function We(e, t) {
  const a = document.getElementById(String(t));
  a && (V[a.id] = e);
}
function ce(e, t = !0) {
  const a = String(e);
  if (!V[a]) return;
  const o = document.getElementById(a);
  o && o.classList.add(ae), t ? (Qe(e), o && o.addEventListener("animationend", ue, !1)) : ue(a), B.items = B.items.filter((n) => n.containerId !== e);
}
function Ke(e) {
  for (const t in V)
    ce(t, e);
  B.items = [];
}
function Te(e, t) {
  const a = document.getElementById(e.toastId);
  if (a) {
    let o = e;
    o = {
      ...o,
      ...Se(o.transition)
    };
    const n = o.appendPosition ? `${o.exit}--${o.position}` : o.exit;
    a.className += ` ${n}`, t && t(a);
  }
}
function Qe(e) {
  for (const t in C)
    if (t === e)
      for (const a of C[t] || [])
        Te(a);
}
function et(e) {
  const t = j().find((a) => a.toastId === e);
  return t?.containerId;
}
function ve(e) {
  return document.getElementById(e);
}
function tt(e) {
  const t = ve(e.containerId);
  return t && t.classList.contains(ae);
}
function be(e) {
  var t;
  const a = we(e.content) ? O(e.content.props) : null;
  return a ?? O((t = e.data) != null ? t : {});
}
function at(e) {
  return e ? B.items.filter((t) => t.containerId === e).length > 0 : B.items.length > 0;
}
function nt() {
  if (B.items.length > 0) {
    const e = B.items.shift();
    W(e?.toastContent, e?.toastProps);
  }
}
const C = z({}), B = z({ items: [] });
function j() {
  const e = O(C);
  return Object.values(e).reduce((t, a) => [...t, ...a], []);
}
function ot(e) {
  return j().find((t) => t.toastId === e);
}
function W(e, t = {}) {
  if (tt(t)) {
    const a = ve(t.containerId);
    a && a.addEventListener("animationend", fe.bind(null, e, t), !1);
  } else
    fe(e, t);
}
function fe(e, t = {}) {
  const a = ve(t.containerId);
  a && a.removeEventListener("animationend", fe.bind(null, e, t), !1);
  const o = C[t.containerId] || [], n = o.length > 0;
  if (!n && !Je(t.position)) {
    const s = Ze(t), i = Ce(wt, t);
    t.useHandler && t.useHandler(i), i.mount(s), We(i, s.id);
  }
  n && !t.updateId && (t.position = o[0].position), me(() => {
    t.updateId ? N.update(t) : N.add(e, t);
  });
}
const N = {
  /**
   * add a toast
   * @param _ ..
   * @param opts toast props
   */
  add(e, t) {
    const { containerId: a = "" } = t;
    a && (C[a] = C[a] || [], C[a].find((o) => o.toastId === t.toastId) || setTimeout(() => {
      var o, n;
      t.newestOnTop ? (o = C[a]) == null || o.unshift(t) : (n = C[a]) == null || n.push(t), t.onOpen && t.onOpen(be(t));
    }, t.delay || 0));
  },
  /**
   * remove a toast
   * @param id toastId
   */
  remove(e) {
    if (e) {
      const t = et(e);
      if (t) {
        const a = C[t];
        let o = a.find((n) => n.toastId === e);
        C[t] = a.filter((n) => n.toastId !== e), !C[t].length && !at(t) && ce(t, !1), nt(), me(() => {
          o != null && o.onClose && (o.onClose(be(o)), o = void 0);
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
      C[t] = C[t] || [];
      const a = C[t].find((s) => s.toastId === e.toastId), o = a?.position !== e.position || a?.transition !== e.transition, n = {
        ...e,
        disabledEnterTransition: !o,
        updateId: void 0
      };
      N.dismissForce(e?.toastId), setTimeout(() => {
        f(n.content, n);
      }, e.delay || 0);
    }
  },
  /**
   * clear all toasts in container.
   * @param containerId container id
   */
  clear(e, t = !0) {
    e ? ce(e, t) : Ke(t);
  },
  dismissCallback(e) {
    var t;
    const a = (t = e.currentTarget) == null ? void 0 : t.id, o = document.getElementById(a);
    o && (o.removeEventListener("animationend", N.dismissCallback, !1), setTimeout(() => {
      N.remove(a);
    }));
  },
  dismiss(e) {
    if (e) {
      const t = j();
      for (const a of t)
        if (a.toastId === e) {
          Te(a, (o) => {
            o.addEventListener("animationend", N.dismissCallback, !1);
          });
          break;
        }
    }
  },
  dismissForce(e) {
    if (e) {
      const t = j();
      for (const a of t)
        if (a.toastId === e) {
          const o = document.getElementById(e);
          o && (o.remove(), o.removeEventListener("animationend", N.dismissCallback, !1), N.remove(e));
          break;
        }
    }
  }
}, st = z({ useHandler: void 0 }), Ie = z({}), te = z({});
function Ne() {
  return Math.random().toString(36).substring(2, 9);
}
function rt(e) {
  return typeof e == "number" && !isNaN(e);
}
function pe(e) {
  return typeof e == "string";
}
function U(e) {
  return typeof e == "function";
}
function ne(...e) {
  return M(...e);
}
function K(e) {
  return typeof e == "object" && (!!(e != null && e.render) || !!(e != null && e.setup) || typeof e?.type == "object");
}
function lt(e = {}) {
  Ie[`${c.CSS_NAMESPACE}-default-options`] = e;
}
function it() {
  return Ie[`${c.CSS_NAMESPACE}-default-options`] || ke;
}
function dt() {
  const e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return document.documentElement.classList.contains("dark") || e ? "dark" : "light";
}
var Q = /* @__PURE__ */ ((e) => (e[e.Enter = 0] = "Enter", e[e.Exit = 1] = "Exit", e))(Q || {});
const Ae = {
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
    default: J.TOP_LEFT
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
    default: D.AUTO
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
    default: E.DEFAULT
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
}, ut = {
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
    default: E.DEFAULT
  },
  theme: {
    type: String,
    required: !1,
    default: D.AUTO
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
}, ct = /* @__PURE__ */ H({
  name: "ProgressBar",
  props: ut,
  // @ts-ignore
  setup(e, {
    attrs: t
  }) {
    const a = x(), o = h(() => e.hide ? "true" : "false"), n = h(() => ({
      ...t.style || {},
      animationDuration: `${e.autoClose === !0 ? 5e3 : e.autoClose}ms`,
      animationPlayState: e.isRunning ? "running" : "paused",
      opacity: e.hide || e.autoClose === !1 ? 0 : 1,
      transform: e.controlledProgress ? `scaleX(${e.progress})` : "none"
    })), s = h(() => [`${c.CSS_NAMESPACE}__progress-bar`, e.controlledProgress ? `${c.CSS_NAMESPACE}__progress-bar--controlled` : `${c.CSS_NAMESPACE}__progress-bar--animated`, `${c.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`, `${c.CSS_NAMESPACE}__progress-bar--${e.type}`, e.rtl ? `${c.CSS_NAMESPACE}__progress-bar--rtl` : null].filter(Boolean).join(" ")), i = h(() => `${s.value} ${t?.class || ""}`), v = () => {
      a.value && (a.value.onanimationend = null, a.value.ontransitionend = null);
    }, d = () => {
      e.isIn && e.closeToast && e.autoClose !== !1 && (e.closeToast(), v());
    }, T = h(() => e.controlledProgress ? null : d), w = h(() => e.controlledProgress ? d : null);
    return Z(() => {
      a.value && (v(), a.value.onanimationend = T.value, a.value.ontransitionend = w.value);
    }), () => p("div", {
      ref: a,
      role: "progressbar",
      "aria-hidden": o.value,
      "aria-label": "notification timer",
      class: i.value,
      style: n.value
    }, null);
  }
}), ft = /* @__PURE__ */ H({
  name: "CloseButton",
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      required: !1,
      default: D.AUTO
    },
    type: {
      type: String,
      required: !1,
      default: D.LIGHT
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
    return () => p("button", {
      class: `${c.CSS_NAMESPACE}__close-button ${c.CSS_NAMESPACE}__close-button--${e.theme}`,
      type: "button",
      onClick: (t) => {
        t.stopPropagation(), e.closeToast && e.closeToast(t);
      },
      "aria-label": e.ariaLabel
    }, [p("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 14 16"
    }, [p("path", {
      "fill-rule": "evenodd",
      d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    }, null)])]);
  }
}), oe = ({
  theme: e,
  type: t,
  path: a,
  ...o
}) => p("svg", M({
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`
}, o), [p("path", {
  d: a
}, null)]);
function pt(e) {
  return p(oe, M(e, {
    path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }), null);
}
function mt(e) {
  return p(oe, M(e, {
    path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }), null);
}
function vt(e) {
  return p(oe, M(e, {
    path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }), null);
}
function gt(e) {
  return p(oe, M(e, {
    path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }), null);
}
function yt() {
  return p("div", {
    class: `${c.CSS_NAMESPACE}__spinner`
  }, null);
}
const ee = {
  info: mt,
  warning: pt,
  success: vt,
  error: gt,
  spinner: yt
}, ht = (e) => e in ee;
function bt({
  theme: e,
  type: t,
  isLoading: a,
  icon: o
}) {
  let n;
  const s = !!a || t === "loading", i = {
    theme: e,
    type: t
  };
  if (s && (o === void 0 || typeof o == "boolean")) return ee.spinner();
  if (o !== !1) {
    if (K(o))
      n = O(o);
    else if (U(o)) {
      const v = o;
      i.type = s ? "loading" : t, n = v(i), n = !n && s ? ee.spinner() : n;
    } else we(o) ? n = Be(o, i) : pe(o) || rt(o) ? n = o : ht(t) && (n = ee[t](i));
    return n;
  }
}
const _t = () => {
};
function Ct(e, t, a = c.COLLAPSE_DURATION) {
  const { scrollHeight: o, style: n } = e, s = a;
  requestAnimationFrame(() => {
    n.minHeight = "initial", n.height = o + "px", n.transition = `all ${s}ms`, requestAnimationFrame(() => {
      n.height = "0", n.padding = "0", n.margin = "0", setTimeout(t, s);
    });
  });
}
function xt(e) {
  const t = x(!1), a = x(!1), o = x(!1), n = x(Q.Enter), s = z({
    ...e,
    appendPosition: e.appendPosition || !1,
    collapse: typeof e.collapse > "u" ? !0 : e.collapse,
    collapseDuration: e.collapseDuration || c.COLLAPSE_DURATION
  }), i = s.done || _t, v = h(() => s.appendPosition ? `${s.enter}--${s.position}` : s.enter), d = h(() => s.appendPosition ? `${s.exit}--${s.position}` : s.exit), T = h(() => e.pauseOnHover ? {
    onMouseenter: P,
    onMouseleave: L
  } : {});
  function w() {
    const S = v.value.split(" ");
    b().addEventListener(
      de.ENTRANCE_ANIMATION_END,
      L,
      { once: !0 }
    );
    const u = (m) => {
      const _ = b();
      m.target === _ && (_.dispatchEvent(new Event(de.ENTRANCE_ANIMATION_END)), _.removeEventListener("animationend", u), _.removeEventListener("animationcancel", u), n.value === Q.Enter && m.type !== "animationcancel" && _.classList.remove(...S));
    }, l = () => {
      const m = b();
      m.classList.add(...S), m.addEventListener("animationend", u), m.addEventListener("animationcancel", u);
    };
    e.pauseOnFocusLoss && k(), l();
  }
  function I() {
    if (!b()) return;
    const S = () => {
      const l = b();
      l.removeEventListener("animationend", S), s.collapse ? Ct(l, i, s.collapseDuration) : i();
    }, u = () => {
      const l = b();
      n.value = Q.Exit, l && (l.className += ` ${d.value}`, l.addEventListener("animationend", S));
    };
    a.value || (o.value ? S() : setTimeout(u));
  }
  function b() {
    return e.toastRef.value;
  }
  function k() {
    document.hasFocus() || P(), window.addEventListener("focus", L), window.addEventListener("blur", P);
  }
  function A() {
    window.removeEventListener("focus", L), window.removeEventListener("blur", P);
  }
  function L() {
    (!e.loading.value || e.isLoading === void 0) && (t.value = !0);
  }
  function P() {
    t.value = !1;
  }
  function q(S) {
    S && (S.stopPropagation(), S.preventDefault()), a.value = !1;
  }
  return Z(I), Z(() => {
    const S = j();
    a.value = S.findIndex((u) => u.toastId === s.toastId) > -1;
  }), Z(() => {
    e.isLoading !== void 0 && (e.loading.value ? P() : L());
  }), xe(w), Ee(() => {
    e.pauseOnFocusLoss && A();
  }), {
    isIn: a,
    isRunning: t,
    hideToast: q,
    eventHandlers: T
  };
}
const Et = /* @__PURE__ */ H({
  name: "ToastItem",
  inheritAttrs: !1,
  props: Ae,
  // @ts-ignore
  setup(e) {
    const t = x(), a = h(() => !!e.isLoading), o = h(() => e.progress !== void 0 && e.progress !== null), n = h(() => bt(e)), s = h(() => [`${c.CSS_NAMESPACE}__toast`, `${c.CSS_NAMESPACE}__toast-theme--${e.theme}`, `${c.CSS_NAMESPACE}__toast--${e.type}`, e.rtl ? `${c.CSS_NAMESPACE}__toast--rtl` : void 0, e.toastClassName || ""].filter(Boolean).join(" ")), {
      isRunning: i,
      isIn: v,
      hideToast: d,
      eventHandlers: T
    } = xt({
      toastRef: t,
      loading: a,
      done: () => {
        N.remove(e.toastId);
      },
      ...Se(e.transition, e.disabledEnterTransition),
      ...e
    });
    return () => p("div", M({
      id: e.toastId,
      class: s.value,
      style: e.toastStyle || {},
      ref: t,
      "data-testid": `toast-item-${e.toastId}`,
      onClick: (w) => {
        e.closeOnClick && d(), e.onClick && e.onClick(w);
      }
    }, T.value), [p("div", {
      role: e.role,
      "data-testid": "toast-body",
      class: `${c.CSS_NAMESPACE}__toast-body ${e.bodyClassName || ""}`
    }, [n.value != null && p("div", {
      "data-testid": `toast-icon-${e.type}`,
      class: [`${c.CSS_NAMESPACE}__toast-icon`, e.isLoading ? "" : `${c.CSS_NAMESPACE}--animate-icon ${c.CSS_NAMESPACE}__zoom-enter`].join(" ")
    }, [K(n.value) ? Y(O(n.value), {
      theme: e.theme,
      type: e.type
    }) : U(n.value) ? n.value({
      theme: e.theme,
      type: e.type
    }) : n.value]), p("div", {
      "data-testid": "toast-content"
    }, [K(e.content) ? Y(O(e.content), {
      toastProps: O(e),
      closeToast: d,
      data: e.data,
      ...e.expandCustomProps ? e.contentProps : {
        contentProps: e.contentProps || {}
      }
    }) : U(e.content) ? e.content({
      toastProps: O(e),
      closeToast: d,
      data: e.data
    }) : e.dangerouslyHTMLString ? Y("div", {
      innerHTML: e.content
    }) : e.content])]), (e.closeButton === void 0 || e.closeButton === !0) && p(ft, {
      theme: e.theme,
      closeToast: (w) => {
        w.stopPropagation(), w.preventDefault(), d();
      }
    }, null), K(e.closeButton) ? Y(O(e.closeButton), {
      closeToast: d,
      type: e.type,
      theme: e.theme
    }) : U(e.closeButton) ? e.closeButton({
      closeToast: d,
      type: e.type,
      theme: e.theme
    }) : null, p(ct, {
      className: e.progressClassName,
      style: e.progressStyle,
      rtl: e.rtl,
      theme: e.theme,
      isIn: v.value,
      type: e.type,
      hide: e.hideProgressBar,
      isRunning: i.value,
      autoClose: e.autoClose,
      controlledProgress: o.value,
      progress: e.progress,
      closeToast: e.isLoading ? void 0 : d
    }, null)]);
  }
});
let G = 0;
function Oe() {
  typeof window > "u" || (G && window.cancelAnimationFrame(G), G = window.requestAnimationFrame(Oe), te.lastUrl !== window.location.href && (te.lastUrl = window.location.href, N.clear()));
}
const wt = /* @__PURE__ */ H({
  name: "ToastifyContainer",
  inheritAttrs: !1,
  props: Ae,
  // @ts-ignore
  setup(e) {
    const t = h(() => e.containerId), a = h(() => C[t.value] || []), o = h(() => a.value.filter((n) => n.position === e.position));
    return xe(() => {
      typeof window < "u" && e.clearOnUrlChange && window.requestAnimationFrame(Oe);
    }), Ee(() => {
      typeof window < "u" && G && (window.cancelAnimationFrame(G), te.lastUrl = "");
    }), () => p(ie, null, [o.value.map((n) => {
      const {
        toastId: s = ""
      } = n;
      return p(Et, M({
        key: s
      }, n), null);
    })]);
  }
});
let le = !1;
const Le = {
  isLoading: !0,
  autoClose: !1,
  closeOnClick: !1,
  closeButton: !1,
  draggable: !1
};
function Pe() {
  const e = [];
  return j().forEach((t) => {
    const a = document.getElementById(t.containerId);
    a && !a.classList.contains(ae) && e.push(t);
  }), e;
}
function kt(e) {
  const t = Pe().length, a = e ?? 0;
  return a > 0 && t + B.items.length >= a;
}
function St(e) {
  kt(e.limit) && !e.updateId && B.items.push({
    toastId: e.toastId,
    containerId: e.containerId,
    toastContent: e.content,
    toastProps: e
  });
}
function $(e, t, a = {}) {
  if (le) return;
  a = ne(it(), {
    type: t
  }, O(a)), (!a.toastId || typeof a.toastId != "string" && typeof a.toastId != "number") && (a.toastId = Ne()), a = {
    ...a,
    ...a.type === "loading" ? Le : {},
    content: e,
    containerId: a.containerId || String(a.position)
  };
  const o = Number(a?.progress);
  return !isNaN(o) && o < 0 && (a.progress = 0), o > 1 && (a.progress = 1), a.theme === "auto" && (a.theme = dt()), St(a), te.lastUrl = window.location.href, a.multiple ? B.items.length ? a.updateId && W(e, a) : W(e, a) : (le = !0, f.clearAll(void 0, !1), setTimeout(() => {
    W(e, a);
  }, 0), setTimeout(() => {
    le = !1;
  }, 390)), a.toastId;
}
const f = (e, t) => $(e, E.DEFAULT, t);
f.info = (e, t) => $(e, E.DEFAULT, {
  ...t,
  type: E.INFO
});
f.error = (e, t) => $(e, E.DEFAULT, {
  ...t,
  type: E.ERROR
});
f.warning = (e, t) => $(e, E.DEFAULT, {
  ...t,
  type: E.WARNING
});
f.warn = f.warning;
f.success = (e, t) => $(e, E.DEFAULT, {
  ...t,
  type: E.SUCCESS
});
f.loading = (e, t) => $(e, E.DEFAULT, ne(t, Le));
f.dark = (e, t) => $(e, E.DEFAULT, ne(t, {
  theme: D.DARK
}));
f.remove = (e) => {
  e ? N.dismiss(e) : N.clear();
};
f.clearAll = (e, t) => {
  me(() => {
    N.clear(e, t);
  });
};
f.isActive = (e) => {
  let t = !1;
  return t = Pe().findIndex((a) => a.toastId === e) > -1, t;
};
f.update = (e, t = {}) => {
  setTimeout(() => {
    const a = ot(e);
    if (a) {
      const o = O(a), {
        content: n
      } = o, s = {
        ...o,
        ...t,
        toastId: t.toastId || e,
        updateId: Ne()
      }, i = s.render || n;
      delete s.render, $(i, s.type, s);
    }
  }, 0);
};
f.done = (e) => {
  f.update(e, {
    isLoading: !1,
    progress: 1
  });
};
f.promise = Tt;
function Tt(e, {
  pending: t,
  error: a,
  success: o
}, n) {
  var s, i, v;
  let d;
  const T = {
    ...n || {},
    autoClose: !1
  };
  t && (d = pe(t) ? f.loading(t, T) : f.loading(t.render, {
    ...T,
    ...t
  }));
  const w = {
    autoClose: (s = n?.autoClose) != null ? s : !0,
    closeOnClick: (i = n?.closeOnClick) != null ? i : !0,
    closeButton: (v = n?.autoClose) != null ? v : null,
    isLoading: void 0,
    draggable: null,
    delay: 100
  }, I = (k, A, L) => {
    if (A == null) {
      f.remove(d);
      return;
    }
    const P = {
      type: k,
      ...w,
      ...n,
      data: L
    }, q = pe(A) ? {
      render: A
    } : A;
    return d ? f.update(d, {
      ...P,
      ...q,
      isLoading: !1
    }) : f(q.render, {
      ...P,
      ...q,
      isLoading: !1
    }), L;
  }, b = U(e) ? e() : e;
  return b.then((k) => {
    I("success", o, k);
  }).catch((k) => {
    I("error", a, k);
  }), b;
}
f.POSITION = J;
f.THEME = D;
f.TYPE = E;
f.TRANSITIONS = Re;
const It = {
  install(e, t = {}) {
    st.useHandler = t.useHandler || (() => {
    }), Nt(t);
  }
};
typeof window < "u" && (window.Vue3Toastify = It);
function Nt(e = {}) {
  const t = ne(ke, e);
  lt(t);
}
const At = { class: "font-sans antialiased text-gray-900 dark:text-gray-100" }, Ot = {
  key: 0,
  class: "fixed z-[60] inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center pointer-events-none sm:p-6"
}, Lt = { class: "pointer-events-auto relative w-full bg-white dark:bg-[#09090b] shadow-[0_40px_80px_-12px_rgba(0,0,0,0.2)] flex flex-col sm:flex-row overflow-hidden rounded-t-[32px] sm:rounded-[32px] h-[80vh] sm:h-auto sm:max-h-[680px] sm:max-w-5xl ring-1 ring-black/5 dark:ring-white/5 will-change-transform" }, Pt = {
  key: 0,
  class: "flex flex-col sm:flex-row w-full h-full animate-pulse"
}, Bt = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-[#09090b]"
}, Mt = { class: "text-sm text-gray-500 mb-8" }, $t = {
  key: 2,
  class: "flex flex-col sm:flex-row w-full h-full"
}, qt = { class: "relative w-full sm:w-[50%] shrink-0 bg-[#F4F4F5] dark:bg-[#121212] flex items-center justify-center p-6 sm:p-0 group" }, Ft = ["src"], Rt = { class: "flex-1 flex flex-col w-full bg-white dark:bg-[#09090b] min-h-0 relative" }, zt = { class: "flex-1 overflow-y-auto p-6 sm:p-12 scrollbar-hide" }, Ut = { class: "mb-8" }, Dt = { class: "flex items-center gap-3 mb-3" }, jt = { class: "text-[11px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase" }, Ht = { class: "text-2xl sm:text-4xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-4" }, Gt = { class: "flex items-baseline gap-3" }, Vt = { class: "text-3xl font-bold text-gray-900 dark:text-white" }, Jt = {
  key: 0,
  class: "text-lg text-gray-400 line-through decoration-1"
}, Xt = {
  key: 0,
  class: "mb-8"
}, Yt = { class: "flex flex-wrap gap-3" }, Zt = ["onClick"], Wt = {
  key: 1,
  class: "mb-6"
}, Kt = { class: "grid grid-cols-4 sm:grid-cols-5 gap-2.5" }, Qt = ["onClick"], ea = {
  key: 0,
  class: "flex items-center gap-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-900/30"
}, ta = { class: "font-medium" }, aa = { class: "shrink-0 p-6 sm:p-8 border-t border-gray-100 dark:border-white/5 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl z-20 pb-8 sm:pb-8" }, na = ["disabled"], oa = {
  key: 0,
  class: "flex items-center gap-3"
}, sa = {
  key: 1,
  class: "flex items-center gap-2"
}, ra = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_product", _e = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", la = /* @__PURE__ */ H({
  __name: "cartpopup",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e, { expose: t }) {
    const a = x(!1), o = x(!1), n = x({}), s = x(""), i = x(""), v = x(!1), d = x(""), T = x(""), w = async (u = "") => {
      if (!(!u || o.value)) {
        T.value = u, n.value = {}, s.value = "", i.value = "", d.value = "", a.value = !0, o.value = !0;
        try {
          const l = await fetch(ra, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${_e}` },
            body: JSON.stringify({ slug: String(u).trim(), collection: "products" })
          });
          if (!l.ok) throw new Error(`Server Error (${l.status})`);
          const m = await l.json();
          if (m.data && m.data.length > 0) {
            const _ = m.data[0].document;
            let X = {};
            try {
              X = JSON.parse(_.metadata);
            } catch {
              X = _.metadata || {};
            }
            n.value = {
              id: _.id,
              title: _.title,
              brand: _.brand,
              variant_prices: _.variant_prices,
              variant_mrp: _.variant_mrp,
              metadata: X,
              variant: X.variant || []
            }, n.value.metadata?.color?.length && (i.value = n.value.metadata.color[0].id);
          } else
            d.value = "Product details unavailable.";
        } catch {
          d.value = "Unable to load product.";
        } finally {
          o.value = !1;
        }
      }
    }, I = () => {
      v.value || (a.value = !1);
    }, b = (u) => {
      u.target.src = "https://placehold.co/600x600/png?text=No+Image";
    }, k = h(() => n.value.metadata?.color || []), A = h(() => (n.value.metadata?.size || []).map((u) => typeof u == "string" ? { id: u, name: u } : u)), L = () => {
      if (s.value && i.value) {
        const u = n.value.variant?.find((l) => l.size_id === s.value && l.color_id === i.value);
        if (u?.price) return u.price;
      }
      return n.value.variant_prices?.[0] || 0;
    }, P = h(() => {
      if (i.value) {
        const u = n.value.metadata?.color?.find((l) => l.id === i.value);
        if (u?.image?.[0]?.url) return u.image[0].url;
      }
      return n.value.metadata?.color?.[0]?.image?.[0]?.url || n.value.url || "";
    }), q = (u) => ({
      // basics
      Black: "#000000",
      White: "#ffffff",
      Red: "#ef4444",
      Blue: "#3b82f6",
      Yellow: "#fbbf24",
      Slate: "#64748b",
      Stone: "#78716c",
      "Pearl White": "#f3f4f6",
      "Rose Gold": "#fda4af",
      // browns / neutrals
      Tan: "#D2B48C",
      Camel: "#C19A6B",
      Coffee: "#6F4E37",
      Mocha: "#6B4F3F",
      Cream: "#FFF4E6",
      // greens
      Emerald: "#10B981"
    })[u] || "#e5e7eb", S = async () => {
      if (!s.value || !i.value) return d.value = "Please select a size and color";
      const u = n.value.variant?.find((l) => l.size_id === s.value && l.color_id === i.value);
      if (!u) return d.value = "Selected combination is out of stock";
      v.value = !0, d.value = "";
      try {
        const l = await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${_e}` },
          body: JSON.stringify({ operation: "add_to_cart", user_id: "user_demo", product_id: n.value.id, variant_id: u.id, quantity: 1 })
        }), m = await l.json();
        if (!l.ok) throw new Error(m.error || "Failed to add");
        await new Promise((_) => setTimeout(_, 600)), I(), setTimeout(() => {
          f.success("Added to Bag Successfully", {
            autoClose: 2e3,
            position: f.POSITION.BOTTOM_CENTER,
            theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
            transition: "slide",
            hideProgressBar: !0
          });
        }, 300);
      } catch (l) {
        d.value = l.message || "Failed to add to cart.", f.error(d.value, { position: f.POSITION.BOTTOM_CENTER, theme: "colored" });
      } finally {
        v.value = !1;
      }
    };
    return t({ openProduct: w }), (u, l) => (y(), g("div", At, [
      p(se, {
        "enter-active-class": "transition duration-500 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition duration-300 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: re(() => [
          a.value ? (y(), g("div", {
            key: 0,
            class: "fixed inset-0 z-[50] bg-black/30 backdrop-blur-[4px]",
            onClick: I
          })) : R("", !0)
        ]),
        _: 1
      }),
      p(se, {
        "enter-active-class": "transition duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1)",
        "enter-from-class": "translate-y-full opacity-0 sm:translate-y-12 sm:scale-95",
        "enter-to-class": "translate-y-0 opacity-100 sm:scale-100",
        "leave-active-class": "transition duration-300 ease-in",
        "leave-from-class": "translate-y-0 opacity-100 sm:scale-100",
        "leave-to-class": "translate-y-full opacity-0 sm:translate-y-12 sm:scale-95"
      }, {
        default: re(() => [
          a.value ? (y(), g("div", Ot, [
            r("div", Lt, [
              r("button", {
                onClick: I,
                class: "absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/80 dark:bg-black/40 hover:bg-gray-100 dark:hover:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 transition-all duration-300 hover:rotate-90"
              }, [...l[0] || (l[0] = [
                r("svg", {
                  class: "w-5 h-5 text-gray-500 dark:text-gray-300",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  r("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])]),
              o.value ? (y(), g("div", Pt, [...l[1] || (l[1] = [
                r("div", { class: "w-full sm:w-[50%] bg-gray-50 dark:bg-[#121212] h-64 sm:h-full relative" }, [
                  r("div", { class: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" })
                ], -1),
                r("div", { class: "flex-1 p-8 sm:p-12 flex flex-col bg-white dark:bg-[#09090b]" }, [
                  r("div", { class: "h-4 bg-gray-100 dark:bg-gray-800 rounded-full w-24 mb-6" }),
                  r("div", { class: "h-10 bg-gray-100 dark:bg-gray-800 rounded-xl w-3/4 mb-4" }),
                  r("div", { class: "h-8 bg-gray-100 dark:bg-gray-800 rounded-lg w-1/3 mb-12" }),
                  r("div", { class: "space-y-6 flex-1" }, [
                    r("div", { class: "h-12 w-full bg-gray-100 dark:bg-gray-800 rounded-xl" }),
                    r("div", { class: "h-12 w-full bg-gray-100 dark:bg-gray-800 rounded-xl" })
                  ]),
                  r("div", { class: "h-14 w-full bg-gray-100 dark:bg-gray-800 rounded-full mt-8" })
                ], -1)
              ])])) : !n.value.id && d.value ? (y(), g("div", Bt, [
                l[2] || (l[2] = r("div", { class: "w-16 h-16 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center mb-6" }, [
                  r("svg", {
                    class: "w-8 h-8",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    r("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "1.5",
                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                  ])
                ], -1)),
                l[3] || (l[3] = r("h3", { class: "text-xl font-bold text-gray-900 dark:text-white mb-2" }, "Unavailable", -1)),
                r("p", Mt, F(d.value), 1),
                r("button", {
                  onClick: I,
                  class: "px-6 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-semibold rounded-lg transition-colors"
                }, "Close")
              ])) : (y(), g("div", $t, [
                r("div", qt, [
                  l[4] || (l[4] = r("div", { class: "sm:hidden absolute top-3 inset-x-0 flex justify-center z-10" }, [
                    r("div", { class: "w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full opacity-60" })
                  ], -1)),
                  (y(), g("img", {
                    key: i.value,
                    src: P.value,
                    onError: b,
                    class: "max-h-[180px] sm:max-h-[65%] w-auto object-contain mix-blend-multiply dark:mix-blend-normal transition-all duration-700 ease-out hover:scale-110 hover:-rotate-2 drop-shadow-xl",
                    alt: "Product"
                  }, null, 40, Ft))
                ]),
                r("div", Rt, [
                  r("div", zt, [
                    r("div", Ut, [
                      r("div", Dt, [
                        r("h3", jt, F(n.value.brand || "Brand"), 1)
                      ]),
                      r("h2", Ht, F(n.value.title), 1),
                      r("div", Gt, [
                        r("span", Vt, "₹" + F(new Intl.NumberFormat("en-IN").format(L())), 1),
                        n.value.variant_mrp && n.value.variant_mrp[0] ? (y(), g("span", Jt, "₹" + F(new Intl.NumberFormat("en-IN").format(n.value.variant_mrp[0])), 1)) : R("", !0)
                      ])
                    ]),
                    k.value.length ? (y(), g("div", Xt, [
                      l[5] || (l[5] = r("span", { class: "text-[11px] font-bold text-gray-900 dark:text-white block mb-4 uppercase tracking-widest" }, "Select Color", -1)),
                      r("div", Yt, [
                        (y(!0), g(ie, null, ge(k.value, (m) => (y(), g("button", {
                          key: m.id,
                          onClick: (_) => i.value = m.id,
                          class: "group relative w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
                        }, [
                          r("div", {
                            class: ye(["absolute inset-0 rounded-full border-2 transition-all duration-300", i.value === m.id ? "border-black dark:border-white scale-125 opacity-100" : "border-transparent scale-100 opacity-0 group-hover:scale-110"])
                          }, null, 2),
                          r("span", {
                            class: "w-full h-full rounded-full border border-black/5 dark:border-white/10 shadow-sm",
                            style: Me({ backgroundColor: q(m.name) })
                          }, null, 4)
                        ], 8, Zt))), 128))
                      ])
                    ])) : R("", !0),
                    A.value.length ? (y(), g("div", Wt, [
                      l[6] || (l[6] = r("div", { class: "flex justify-between items-center mb-4" }, [
                        r("span", { class: "text-[11px] font-bold text-gray-900 dark:text-white uppercase tracking-widest" }, "Select Size"),
                        r("button", { class: "text-[11px] font-semibold text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors" }, "Size Guide")
                      ], -1)),
                      r("div", Kt, [
                        (y(!0), g(ie, null, ge(A.value, (m) => (y(), g("button", {
                          key: m.id,
                          onClick: (_) => s.value = m.id,
                          class: ye(["py-3 text-[13px] font-semibold rounded-xl transition-all duration-200 focus:outline-none border", s.value === m.id ? "bg-black dark:bg-white text-white dark:text-black border-transparent shadow-lg transform -translate-y-0.5" : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-transparent hover:border-gray-400 dark:hover:border-gray-600"])
                        }, F(m.name), 11, Qt))), 128))
                      ])
                    ])) : R("", !0),
                    p(se, {
                      "enter-active-class": "transition duration-200 ease-out",
                      "enter-from-class": "opacity-0 -translate-y-2",
                      "enter-to-class": "opacity-100 translate-y-0"
                    }, {
                      default: re(() => [
                        d.value && n.value.id ? (y(), g("div", ea, [
                          l[7] || (l[7] = r("svg", {
                            class: "w-5 h-5 shrink-0",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                          }, [
                            r("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                          ], -1)),
                          r("span", ta, F(d.value), 1)
                        ])) : R("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  r("div", aa, [
                    r("button", {
                      onClick: S,
                      disabled: v.value,
                      class: "w-full h-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold tracking-wide rounded-2xl transition-all active:scale-[0.98] disabled:opacity-80 disabled:cursor-not-allowed shadow-xl shadow-blue-600/20"
                    }, [
                      v.value ? (y(), g("div", oa, [...l[8] || (l[8] = [
                        r("svg", {
                          class: "animate-spin h-5 w-5 text-white",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24"
                        }, [
                          r("circle", {
                            class: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            "stroke-width": "4"
                          }),
                          r("path", {
                            class: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          })
                        ], -1),
                        r("span", null, "Processing...", -1)
                      ])])) : (y(), g("span", sa, [...l[9] || (l[9] = [
                        $e(" Add to Cart ", -1),
                        r("svg", {
                          class: "w-5 h-5 opacity-70",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor"
                        }, [
                          r("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          })
                        ], -1)
                      ])]))
                    ], 8, na)
                  ])
                ])
              ]))
            ])
          ])) : R("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), ia = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, n] of t)
    a[o] = n;
  return a;
}, da = /* @__PURE__ */ ia(la, [["__scopeId", "data-v-be18f6c1"]]), ua = { class: "w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#0f172a] transition-colors duration-300" }, ca = {
  key: 0,
  class: "p-8 bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col gap-4"
}, fa = /* @__PURE__ */ H({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = x(null), a = x("Nike__9041"), o = () => {
      a.value && t.value?.openProduct(a.value);
    };
    return (async () => (e._p.my.emitter = e._p.f.new_emitter(), e._p.f.listen("msg", async (n) => {
      if (n.type === "product:open") {
        const s = n.custom?.product_id;
        console.log("👂 Index received ID:", s), s && (a.value = s, t.value && t.value.openProduct(s));
      }
      n.type === "theme:change" && (n.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }), await e._p.my.emitter.emit("msg", { type: "on:change", _p: e._p, _$p: e._$p })))(), (n, s) => (y(), g("div", ua, [
      e._$p.data.curr.data.env == "dev" ? (y(), g("div", ca, [
        r("div", null, [
          s[1] || (s[1] = r("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2" }, "Product ID", -1)),
          qe(r("input", {
            "onUpdate:modelValue": s[0] || (s[0] = (i) => a.value = i),
            type: "text",
            class: "w-full px-4 py-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          }, null, 512), [
            [Fe, a.value]
          ])
        ]),
        r("button", {
          onClick: o,
          class: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30"
        }, " Open Modal ")
      ])) : R("", !0),
      p(da, {
        ref_key: "popupRef",
        ref: t,
        _p: e._p,
        _$p: e._$p
      }, null, 8, ["_p", "_$p"])
    ]));
  }
}), va = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const o = Ce(fa, {
      _p: e,
      _$p: t
    }), n = {
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
    return o.mount(s), n;
  }
});
export {
  va as hydrator,
  va as index
};
