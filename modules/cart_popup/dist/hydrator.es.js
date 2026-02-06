import { r as H, m as R, d as J, c as m, t as L, a as Ee, n as he, b as _, o as Se, e as ke, F as fe, f as S, h as Q, i as Te, g as Re, w as ee, j as h, k as b, T as de, l as ue, p as j, q as r, s as z, u as _e, v as xe, x as Ue, y as De, z as ze, A as je } from "./runtime-dom.esm-bundler-DOmFF1cl.js";
const X = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
}, V = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored",
  AUTO: "auto"
}, T = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
}, He = {
  BOUNCE: "bounce",
  SLIDE: "slide",
  FLIP: "flip",
  ZOOM: "zoom",
  NONE: "none"
}, Ge = {
  dangerouslyHTMLString: !1,
  multiple: !0,
  position: X.TOP_RIGHT,
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
}, Ve = {
  rtl: !1,
  newestOnTop: !1,
  toastClassName: ""
}, Ae = {
  ...Ge,
  ...Ve
};
T.DEFAULT;
var u = /* @__PURE__ */ ((e) => (e[e.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", e[e.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", e.CSS_NAMESPACE = "Toastify", e))(u || {}), pe = /* @__PURE__ */ ((e) => (e.ENTRANCE_ANIMATION_END = "d", e))(pe || {});
const We = {
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: !0
}, Je = {
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: !0
}, Ke = {
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
}, Ye = {
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
}, Ce = "Toastify--animate Toastify__none-enter";
function Ie(e, t = !1) {
  var a;
  let n = We;
  if (!e || typeof e == "string")
    switch (e) {
      case "flip":
        n = Ye;
        break;
      case "zoom":
        n = Ke;
        break;
      case "slide":
        n = Je;
        break;
    }
  else
    n = e;
  if (t)
    n.enter = Ce;
  else if (n.enter === Ce) {
    const o = (a = n.exit.split("__")[1]) == null ? void 0 : a.split("-")[0];
    n.enter = `Toastify--animate Toastify__${o}-enter`;
  }
  return n;
}
function Xe(e) {
  return e.containerId || String(e.position);
}
const re = "will-unmount";
function Ze(e = X.TOP_RIGHT) {
  return !!document.querySelector(`.${u.CSS_NAMESPACE}__toast-container--${e}`);
}
function Qe(e = X.TOP_RIGHT) {
  return `${u.CSS_NAMESPACE}__toast-container--${e}`;
}
function et(e, t, a = !1) {
  const n = [
    `${u.CSS_NAMESPACE}__toast-container`,
    `${u.CSS_NAMESPACE}__toast-container--${e}`,
    a ? `${u.CSS_NAMESPACE}__toast-container--rtl` : null
  ].filter(Boolean).join(" ");
  return G(t) ? t({
    position: e,
    rtl: a,
    defaultClassName: n
  }) : `${n} ${t || ""}`;
}
function tt(e) {
  var t;
  const { position: a, containerClassName: n, rtl: o = !1, style: s = {} } = e, l = u.CSS_NAMESPACE, y = Qe(a), p = document.querySelector(`.${l}`), x = document.querySelector(`.${y}`), d = !!x && !((t = x.className) != null && t.includes(re)), E = p || document.createElement("div"), f = document.createElement("div");
  f.className = et(
    a,
    n,
    o
  ), f.dataset.testid = `${u.CSS_NAMESPACE}__toast-container--${a}`, f.id = Xe(e);
  for (const C in s)
    if (Object.prototype.hasOwnProperty.call(s, C)) {
      const g = s[C];
      f.style[C] = g;
    }
  return p || (E.className = u.CSS_NAMESPACE, document.body.appendChild(E)), d || E.appendChild(f), f;
}
function me(e) {
  var t, a, n;
  const o = typeof e == "string" ? e : ((t = e.currentTarget) == null ? void 0 : t.id) || ((a = e.target) == null ? void 0 : a.id), s = document.getElementById(o);
  s && s.removeEventListener("animationend", me, !1);
  try {
    Y[o].unmount(), (n = document.getElementById(o)) == null || n.remove(), delete Y[o], delete w[o];
  } catch {
  }
}
const Y = H({});
function at(e, t) {
  const a = document.getElementById(String(t));
  a && (Y[a.id] = e);
}
function ve(e, t = !0) {
  const a = String(e);
  if (!Y[a]) return;
  const n = document.getElementById(a);
  n && n.classList.add(re), t ? (ot(e), n && n.addEventListener("animationend", me, !1)) : me(a), q.items = q.items.filter((o) => o.containerId !== e);
}
function nt(e) {
  for (const t in Y)
    ve(t, e);
  q.items = [];
}
function Ne(e, t) {
  const a = document.getElementById(e.toastId);
  if (a) {
    let n = e;
    n = {
      ...n,
      ...Ie(n.transition)
    };
    const o = n.appendPosition ? `${n.exit}--${n.position}` : n.exit;
    a.className += ` ${o}`, t && t(a);
  }
}
function ot(e) {
  for (const t in w)
    if (t === e)
      for (const a of w[t] || [])
        Ne(a);
}
function st(e) {
  const t = W().find((a) => a.toastId === e);
  return t?.containerId;
}
function be(e) {
  return document.getElementById(e);
}
function rt(e) {
  const t = be(e.containerId);
  return t && t.classList.contains(re);
}
function we(e) {
  var t;
  const a = Te(e.content) ? L(e.content.props) : null;
  return a ?? L((t = e.data) != null ? t : {});
}
function lt(e) {
  return e ? q.items.filter((t) => t.containerId === e).length > 0 : q.items.length > 0;
}
function it() {
  if (q.items.length > 0) {
    const e = q.items.shift();
    te(e?.toastContent, e?.toastProps);
  }
}
const w = H({}), q = H({ items: [] });
function W() {
  const e = L(w);
  return Object.values(e).reduce((t, a) => [...t, ...a], []);
}
function dt(e) {
  return W().find((t) => t.toastId === e);
}
function te(e, t = {}) {
  if (rt(t)) {
    const a = be(t.containerId);
    a && a.addEventListener("animationend", ge.bind(null, e, t), !1);
  } else
    ge(e, t);
}
function ge(e, t = {}) {
  const a = be(t.containerId);
  a && a.removeEventListener("animationend", ge.bind(null, e, t), !1);
  const n = w[t.containerId] || [], o = n.length > 0;
  if (!o && !Ze(t.position)) {
    const s = tt(t), l = Ee(It, t);
    t.useHandler && t.useHandler(l), l.mount(s), at(l, s.id);
  }
  o && !t.updateId && (t.position = n[0].position), he(() => {
    t.updateId ? I.update(t) : I.add(e, t);
  });
}
const I = {
  /**
   * add a toast
   * @param _ ..
   * @param opts toast props
   */
  add(e, t) {
    const { containerId: a = "" } = t;
    a && (w[a] = w[a] || [], w[a].find((n) => n.toastId === t.toastId) || setTimeout(() => {
      var n, o;
      t.newestOnTop ? (n = w[a]) == null || n.unshift(t) : (o = w[a]) == null || o.push(t), t.onOpen && t.onOpen(we(t));
    }, t.delay || 0));
  },
  /**
   * remove a toast
   * @param id toastId
   */
  remove(e) {
    if (e) {
      const t = st(e);
      if (t) {
        const a = w[t];
        let n = a.find((o) => o.toastId === e);
        w[t] = a.filter((o) => o.toastId !== e), !w[t].length && !lt(t) && ve(t, !1), it(), he(() => {
          n != null && n.onClose && (n.onClose(we(n)), n = void 0);
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
      w[t] = w[t] || [];
      const a = w[t].find((s) => s.toastId === e.toastId), n = a?.position !== e.position || a?.transition !== e.transition, o = {
        ...e,
        disabledEnterTransition: !n,
        updateId: void 0
      };
      I.dismissForce(e?.toastId), setTimeout(() => {
        c(o.content, o);
      }, e.delay || 0);
    }
  },
  /**
   * clear all toasts in container.
   * @param containerId container id
   */
  clear(e, t = !0) {
    e ? ve(e, t) : nt(t);
  },
  dismissCallback(e) {
    var t;
    const a = (t = e.currentTarget) == null ? void 0 : t.id, n = document.getElementById(a);
    n && (n.removeEventListener("animationend", I.dismissCallback, !1), setTimeout(() => {
      I.remove(a);
    }));
  },
  dismiss(e) {
    if (e) {
      const t = W();
      for (const a of t)
        if (a.toastId === e) {
          Ne(a, (n) => {
            n.addEventListener("animationend", I.dismissCallback, !1);
          });
          break;
        }
    }
  },
  dismissForce(e) {
    if (e) {
      const t = W();
      for (const a of t)
        if (a.toastId === e) {
          const n = document.getElementById(e);
          n && (n.remove(), n.removeEventListener("animationend", I.dismissCallback, !1), I.remove(e));
          break;
        }
    }
  }
}, ut = H({ useHandler: void 0 }), Pe = H({}), se = H({});
function Oe() {
  return Math.random().toString(36).substring(2, 9);
}
function ct(e) {
  return typeof e == "number" && !isNaN(e);
}
function ye(e) {
  return typeof e == "string";
}
function G(e) {
  return typeof e == "function";
}
function le(...e) {
  return R(...e);
}
function ae(e) {
  return typeof e == "object" && (!!(e != null && e.render) || !!(e != null && e.setup) || typeof e?.type == "object");
}
function ft(e = {}) {
  Pe[`${u.CSS_NAMESPACE}-default-options`] = e;
}
function pt() {
  return Pe[`${u.CSS_NAMESPACE}-default-options`] || Ae;
}
function mt() {
  const e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return document.documentElement.classList.contains("dark") || e ? "dark" : "light";
}
var ne = /* @__PURE__ */ ((e) => (e[e.Enter = 0] = "Enter", e[e.Exit = 1] = "Exit", e))(ne || {});
const Le = {
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
    default: X.TOP_LEFT
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
    default: V.AUTO
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
    default: T.DEFAULT
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
}, vt = {
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
    default: T.DEFAULT
  },
  theme: {
    type: String,
    required: !1,
    default: V.AUTO
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
}, gt = /* @__PURE__ */ J({
  name: "ProgressBar",
  props: vt,
  // @ts-ignore
  setup(e, {
    attrs: t
  }) {
    const a = S(), n = _(() => e.hide ? "true" : "false"), o = _(() => ({
      ...t.style || {},
      animationDuration: `${e.autoClose === !0 ? 5e3 : e.autoClose}ms`,
      animationPlayState: e.isRunning ? "running" : "paused",
      opacity: e.hide || e.autoClose === !1 ? 0 : 1,
      transform: e.controlledProgress ? `scaleX(${e.progress})` : "none"
    })), s = _(() => [`${u.CSS_NAMESPACE}__progress-bar`, e.controlledProgress ? `${u.CSS_NAMESPACE}__progress-bar--controlled` : `${u.CSS_NAMESPACE}__progress-bar--animated`, `${u.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`, `${u.CSS_NAMESPACE}__progress-bar--${e.type}`, e.rtl ? `${u.CSS_NAMESPACE}__progress-bar--rtl` : null].filter(Boolean).join(" ")), l = _(() => `${s.value} ${t?.class || ""}`), y = () => {
      a.value && (a.value.onanimationend = null, a.value.ontransitionend = null);
    }, p = () => {
      e.isIn && e.closeToast && e.autoClose !== !1 && (e.closeToast(), y());
    }, x = _(() => e.controlledProgress ? null : p), d = _(() => e.controlledProgress ? p : null);
    return ee(() => {
      a.value && (y(), a.value.onanimationend = x.value, a.value.ontransitionend = d.value);
    }), () => m("div", {
      ref: a,
      role: "progressbar",
      "aria-hidden": n.value,
      "aria-label": "notification timer",
      class: l.value,
      style: o.value
    }, null);
  }
}), yt = /* @__PURE__ */ J({
  name: "CloseButton",
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      required: !1,
      default: V.AUTO
    },
    type: {
      type: String,
      required: !1,
      default: V.LIGHT
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
    return () => m("button", {
      class: `${u.CSS_NAMESPACE}__close-button ${u.CSS_NAMESPACE}__close-button--${e.theme}`,
      type: "button",
      onClick: (t) => {
        t.stopPropagation(), e.closeToast && e.closeToast(t);
      },
      "aria-label": e.ariaLabel
    }, [m("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 14 16"
    }, [m("path", {
      "fill-rule": "evenodd",
      d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    }, null)])]);
  }
}), ie = ({
  theme: e,
  type: t,
  path: a,
  ...n
}) => m("svg", R({
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`
}, n), [m("path", {
  d: a
}, null)]);
function ht(e) {
  return m(ie, R(e, {
    path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }), null);
}
function bt(e) {
  return m(ie, R(e, {
    path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }), null);
}
function _t(e) {
  return m(ie, R(e, {
    path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }), null);
}
function xt(e) {
  return m(ie, R(e, {
    path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }), null);
}
function Ct() {
  return m("div", {
    class: `${u.CSS_NAMESPACE}__spinner`
  }, null);
}
const oe = {
  info: bt,
  warning: ht,
  success: _t,
  error: xt,
  spinner: Ct
}, wt = (e) => e in oe;
function Et({
  theme: e,
  type: t,
  isLoading: a,
  icon: n
}) {
  let o;
  const s = !!a || t === "loading", l = {
    theme: e,
    type: t
  };
  if (s && (n === void 0 || typeof n == "boolean")) return oe.spinner();
  if (n !== !1) {
    if (ae(n))
      o = L(n);
    else if (G(n)) {
      const y = n;
      l.type = s ? "loading" : t, o = y(l), o = !o && s ? oe.spinner() : o;
    } else Te(n) ? o = Re(n, l) : ye(n) || ct(n) ? o = n : wt(t) && (o = oe[t](l));
    return o;
  }
}
const St = () => {
};
function kt(e, t, a = u.COLLAPSE_DURATION) {
  const { scrollHeight: n, style: o } = e, s = a;
  requestAnimationFrame(() => {
    o.minHeight = "initial", o.height = n + "px", o.transition = `all ${s}ms`, requestAnimationFrame(() => {
      o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, s);
    });
  });
}
function Tt(e) {
  const t = S(!1), a = S(!1), n = S(!1), o = S(ne.Enter), s = H({
    ...e,
    appendPosition: e.appendPosition || !1,
    collapse: typeof e.collapse > "u" ? !0 : e.collapse,
    collapseDuration: e.collapseDuration || u.COLLAPSE_DURATION
  }), l = s.done || St, y = _(() => s.appendPosition ? `${s.enter}--${s.position}` : s.enter), p = _(() => s.appendPosition ? `${s.exit}--${s.position}` : s.exit), x = _(() => e.pauseOnHover ? {
    onMouseenter: B,
    onMouseleave: $
  } : {});
  function d() {
    const A = y.value.split(" ");
    f().addEventListener(
      pe.ENTRANCE_ANIMATION_END,
      $,
      { once: !0 }
    );
    const N = (F) => {
      const D = f();
      F.target === D && (D.dispatchEvent(new Event(pe.ENTRANCE_ANIMATION_END)), D.removeEventListener("animationend", N), D.removeEventListener("animationcancel", N), o.value === ne.Enter && F.type !== "animationcancel" && D.classList.remove(...A));
    }, P = () => {
      const F = f();
      F.classList.add(...A), F.addEventListener("animationend", N), F.addEventListener("animationcancel", N);
    };
    e.pauseOnFocusLoss && C(), P();
  }
  function E() {
    if (!f()) return;
    const A = () => {
      const P = f();
      P.removeEventListener("animationend", A), s.collapse ? kt(P, l, s.collapseDuration) : l();
    }, N = () => {
      const P = f();
      o.value = ne.Exit, P && (P.className += ` ${p.value}`, P.addEventListener("animationend", A));
    };
    a.value || (n.value ? A() : setTimeout(N));
  }
  function f() {
    return e.toastRef.value;
  }
  function C() {
    document.hasFocus() || B(), window.addEventListener("focus", $), window.addEventListener("blur", B);
  }
  function g() {
    window.removeEventListener("focus", $), window.removeEventListener("blur", B);
  }
  function $() {
    (!e.loading.value || e.isLoading === void 0) && (t.value = !0);
  }
  function B() {
    t.value = !1;
  }
  function M(A) {
    A && (A.stopPropagation(), A.preventDefault()), a.value = !1;
  }
  return ee(E), ee(() => {
    const A = W();
    a.value = A.findIndex((N) => N.toastId === s.toastId) > -1;
  }), ee(() => {
    e.isLoading !== void 0 && (e.loading.value ? B() : $());
  }), Se(d), ke(() => {
    e.pauseOnFocusLoss && g();
  }), {
    isIn: a,
    isRunning: t,
    hideToast: M,
    eventHandlers: x
  };
}
const At = /* @__PURE__ */ J({
  name: "ToastItem",
  inheritAttrs: !1,
  props: Le,
  // @ts-ignore
  setup(e) {
    const t = S(), a = _(() => !!e.isLoading), n = _(() => e.progress !== void 0 && e.progress !== null), o = _(() => Et(e)), s = _(() => [`${u.CSS_NAMESPACE}__toast`, `${u.CSS_NAMESPACE}__toast-theme--${e.theme}`, `${u.CSS_NAMESPACE}__toast--${e.type}`, e.rtl ? `${u.CSS_NAMESPACE}__toast--rtl` : void 0, e.toastClassName || ""].filter(Boolean).join(" ")), {
      isRunning: l,
      isIn: y,
      hideToast: p,
      eventHandlers: x
    } = Tt({
      toastRef: t,
      loading: a,
      done: () => {
        I.remove(e.toastId);
      },
      ...Ie(e.transition, e.disabledEnterTransition),
      ...e
    });
    return () => m("div", R({
      id: e.toastId,
      class: s.value,
      style: e.toastStyle || {},
      ref: t,
      "data-testid": `toast-item-${e.toastId}`,
      onClick: (d) => {
        e.closeOnClick && p(), e.onClick && e.onClick(d);
      }
    }, x.value), [m("div", {
      role: e.role,
      "data-testid": "toast-body",
      class: `${u.CSS_NAMESPACE}__toast-body ${e.bodyClassName || ""}`
    }, [o.value != null && m("div", {
      "data-testid": `toast-icon-${e.type}`,
      class: [`${u.CSS_NAMESPACE}__toast-icon`, e.isLoading ? "" : `${u.CSS_NAMESPACE}--animate-icon ${u.CSS_NAMESPACE}__zoom-enter`].join(" ")
    }, [ae(o.value) ? Q(L(o.value), {
      theme: e.theme,
      type: e.type
    }) : G(o.value) ? o.value({
      theme: e.theme,
      type: e.type
    }) : o.value]), m("div", {
      "data-testid": "toast-content"
    }, [ae(e.content) ? Q(L(e.content), {
      toastProps: L(e),
      closeToast: p,
      data: e.data,
      ...e.expandCustomProps ? e.contentProps : {
        contentProps: e.contentProps || {}
      }
    }) : G(e.content) ? e.content({
      toastProps: L(e),
      closeToast: p,
      data: e.data
    }) : e.dangerouslyHTMLString ? Q("div", {
      innerHTML: e.content
    }) : e.content])]), (e.closeButton === void 0 || e.closeButton === !0) && m(yt, {
      theme: e.theme,
      closeToast: (d) => {
        d.stopPropagation(), d.preventDefault(), p();
      }
    }, null), ae(e.closeButton) ? Q(L(e.closeButton), {
      closeToast: p,
      type: e.type,
      theme: e.theme
    }) : G(e.closeButton) ? e.closeButton({
      closeToast: p,
      type: e.type,
      theme: e.theme
    }) : null, m(gt, {
      className: e.progressClassName,
      style: e.progressStyle,
      rtl: e.rtl,
      theme: e.theme,
      isIn: y.value,
      type: e.type,
      hide: e.hideProgressBar,
      isRunning: l.value,
      autoClose: e.autoClose,
      controlledProgress: n.value,
      progress: e.progress,
      closeToast: e.isLoading ? void 0 : p
    }, null)]);
  }
});
let K = 0;
function $e() {
  typeof window > "u" || (K && window.cancelAnimationFrame(K), K = window.requestAnimationFrame($e), se.lastUrl !== window.location.href && (se.lastUrl = window.location.href, I.clear()));
}
const It = /* @__PURE__ */ J({
  name: "ToastifyContainer",
  inheritAttrs: !1,
  props: Le,
  // @ts-ignore
  setup(e) {
    const t = _(() => e.containerId), a = _(() => w[t.value] || []), n = _(() => a.value.filter((o) => o.position === e.position));
    return Se(() => {
      typeof window < "u" && e.clearOnUrlChange && window.requestAnimationFrame($e);
    }), ke(() => {
      typeof window < "u" && K && (window.cancelAnimationFrame(K), se.lastUrl = "");
    }), () => m(fe, null, [n.value.map((o) => {
      const {
        toastId: s = ""
      } = o;
      return m(At, R({
        key: s
      }, o), null);
    })]);
  }
});
let ce = !1;
const Be = {
  isLoading: !0,
  autoClose: !1,
  closeOnClick: !1,
  closeButton: !1,
  draggable: !1
};
function Me() {
  const e = [];
  return W().forEach((t) => {
    const a = document.getElementById(t.containerId);
    a && !a.classList.contains(re) && e.push(t);
  }), e;
}
function Nt(e) {
  const t = Me().length, a = e ?? 0;
  return a > 0 && t + q.items.length >= a;
}
function Pt(e) {
  Nt(e.limit) && !e.updateId && q.items.push({
    toastId: e.toastId,
    containerId: e.containerId,
    toastContent: e.content,
    toastProps: e
  });
}
function U(e, t, a = {}) {
  if (ce) return;
  a = le(pt(), {
    type: t
  }, L(a)), (!a.toastId || typeof a.toastId != "string" && typeof a.toastId != "number") && (a.toastId = Oe()), a = {
    ...a,
    ...a.type === "loading" ? Be : {},
    content: e,
    containerId: a.containerId || String(a.position)
  };
  const n = Number(a?.progress);
  return !isNaN(n) && n < 0 && (a.progress = 0), n > 1 && (a.progress = 1), a.theme === "auto" && (a.theme = mt()), Pt(a), se.lastUrl = window.location.href, a.multiple ? q.items.length ? a.updateId && te(e, a) : te(e, a) : (ce = !0, c.clearAll(void 0, !1), setTimeout(() => {
    te(e, a);
  }, 0), setTimeout(() => {
    ce = !1;
  }, 390)), a.toastId;
}
const c = (e, t) => U(e, T.DEFAULT, t);
c.info = (e, t) => U(e, T.DEFAULT, {
  ...t,
  type: T.INFO
});
c.error = (e, t) => U(e, T.DEFAULT, {
  ...t,
  type: T.ERROR
});
c.warning = (e, t) => U(e, T.DEFAULT, {
  ...t,
  type: T.WARNING
});
c.warn = c.warning;
c.success = (e, t) => U(e, T.DEFAULT, {
  ...t,
  type: T.SUCCESS
});
c.loading = (e, t) => U(e, T.DEFAULT, le(t, Be));
c.dark = (e, t) => U(e, T.DEFAULT, le(t, {
  theme: V.DARK
}));
c.remove = (e) => {
  e ? I.dismiss(e) : I.clear();
};
c.clearAll = (e, t) => {
  he(() => {
    I.clear(e, t);
  });
};
c.isActive = (e) => {
  let t = !1;
  return t = Me().findIndex((a) => a.toastId === e) > -1, t;
};
c.update = (e, t = {}) => {
  setTimeout(() => {
    const a = dt(e);
    if (a) {
      const n = L(a), {
        content: o
      } = n, s = {
        ...n,
        ...t,
        toastId: t.toastId || e,
        updateId: Oe()
      }, l = s.render || o;
      delete s.render, U(l, s.type, s);
    }
  }, 0);
};
c.done = (e) => {
  c.update(e, {
    isLoading: !1,
    progress: 1
  });
};
c.promise = Ot;
function Ot(e, {
  pending: t,
  error: a,
  success: n
}, o) {
  var s, l, y;
  let p;
  const x = {
    ...o || {},
    autoClose: !1
  };
  t && (p = ye(t) ? c.loading(t, x) : c.loading(t.render, {
    ...x,
    ...t
  }));
  const d = {
    autoClose: (s = o?.autoClose) != null ? s : !0,
    closeOnClick: (l = o?.closeOnClick) != null ? l : !0,
    closeButton: (y = o?.autoClose) != null ? y : null,
    isLoading: void 0,
    draggable: null,
    delay: 100
  }, E = (C, g, $) => {
    if (g == null) {
      c.remove(p);
      return;
    }
    const B = {
      type: C,
      ...d,
      ...o,
      data: $
    }, M = ye(g) ? {
      render: g
    } : g;
    return p ? c.update(p, {
      ...B,
      ...M,
      isLoading: !1
    }) : c(M.render, {
      ...B,
      ...M,
      isLoading: !1
    }), $;
  }, f = G(e) ? e() : e;
  return f.then((C) => {
    E("success", n, C);
  }).catch((C) => {
    E("error", a, C);
  }), f;
}
c.POSITION = X;
c.THEME = V;
c.TYPE = T;
c.TRANSITIONS = He;
const Lt = {
  install(e, t = {}) {
    ut.useHandler = t.useHandler || (() => {
    }), $t(t);
  }
};
typeof window < "u" && (window.Vue3Toastify = Lt);
function $t(e = {}) {
  const t = le(Ae, e);
  ft(t);
}
function Bt(e, t) {
  return t.split(".").reduce((a, n) => a?.[n], e);
}
function Mt(e, t) {
  const { open: a, close: n } = t, o = [];
  let s = 0;
  for (; s < e.length; ) {
    const l = e.indexOf(a, s);
    if (l === -1) {
      o.push({ type: "text", value: e.slice(s) });
      break;
    }
    l > s && o.push({ type: "text", value: e.slice(s, l) });
    const y = e.indexOf(n, l + a.length);
    if (y === -1)
      throw new Error(`Unclosed template placeholder starting at ${l}`);
    const p = e.slice(l + a.length, y).trim(), [x, d] = p.split("=");
    o.push({ type: "param", value: x, defaultValue: d }), s = y + n.length;
  }
  return o;
}
function qt(e, t, a) {
  const n = /* @__PURE__ */ new Set(), o = e.map((s) => {
    if (s.type === "text") return s.value;
    const l = Bt(t, s.value);
    if (n.add(s.value.split(".")[0]), l === void 0 || l === "") {
      if (s.defaultValue !== void 0) return s.defaultValue;
      if (a.strict) throw new Error(`Missing param: ${s.value}`);
      return "";
    }
    return a.encode ? encodeURIComponent(String(l)) : String(l);
  }).join("");
  if (a.strict) {
    for (const s of Object.keys(t))
      if (!n.has(s))
        throw new Error(`Unused param provided: ${s}`);
  }
  return o;
}
function Ft(e, t) {
  const a = {
    open: t?.open,
    close: t?.close,
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, n = Mt(e, a);
  return (o) => qt(n, o, a);
}
const Rt = { class: "font-sans antialiased text-gray-900 dark:text-gray-100" }, Ut = {
  key: 0,
  class: "fixed z-[60] inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center pointer-events-none sm:p-6"
}, Dt = { class: "pointer-events-auto relative w-full bg-white dark:bg-[#09090b] shadow-[0_40px_80px_-12px_rgba(0,0,0,0.2)] flex flex-col sm:flex-row overflow-hidden rounded-t-[32px] sm:rounded-[32px] h-[80vh] sm:h-auto sm:max-h-[680px] sm:max-w-5xl ring-1 ring-black/5 dark:ring-white/5 will-change-transform" }, zt = {
  key: 0,
  class: "flex flex-col sm:flex-row w-full h-full animate-pulse"
}, jt = {
  key: 1,
  class: "w-full h-full flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-[#09090b]"
}, Ht = { class: "text-sm text-gray-500 mb-8" }, Gt = {
  key: 2,
  class: "flex flex-col sm:flex-row w-full h-full"
}, Vt = { class: "relative w-full sm:w-[50%] shrink-0 bg-[#F4F4F5] dark:bg-[#121212] flex items-center justify-center p-6 sm:p-0 group" }, Wt = ["src"], Jt = { class: "flex-1 flex flex-col w-full bg-white dark:bg-[#09090b] min-h-0 relative" }, Kt = { class: "flex-1 overflow-y-auto p-6 sm:p-12 scrollbar-hide" }, Yt = { class: "mb-8" }, Xt = { class: "flex items-center gap-3 mb-3" }, Zt = { class: "text-[11px] font-bold tracking-[0.2em] text-gray-400 dark:text-gray-500 uppercase" }, Qt = { class: "text-2xl sm:text-4xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-4" }, ea = { class: "flex items-baseline gap-3" }, ta = { class: "text-3xl font-bold text-gray-900 dark:text-white" }, aa = {
  key: 0,
  class: "text-lg text-gray-400 line-through decoration-1"
}, na = {
  key: 0,
  class: "mb-8"
}, oa = { class: "flex flex-wrap gap-3" }, sa = ["onClick"], ra = {
  key: 1,
  class: "mb-6"
}, la = { class: "grid grid-cols-4 sm:grid-cols-5 gap-2.5" }, ia = ["onClick"], da = {
  key: 0,
  class: "flex items-center gap-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-900/30"
}, ua = { class: "font-medium" }, ca = { class: "shrink-0 p-6 sm:p-8 border-t border-gray-100 dark:border-white/5 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl z-20 pb-8 sm:pb-8" }, fa = ["disabled"], pa = {
  key: 0,
  class: "flex items-center gap-3"
}, ma = {
  key: 1,
  class: "flex items-center gap-2"
}, va = /* @__PURE__ */ J({
  __name: "cartpopup",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e, { expose: t }) {
    const n = e._$p, s = Ft(n?.data.curr.data.api.token, { open: "<", close: ">" })({
      localStorage: {
        token: localStorage.getItem("token") || ""
      }
    }), l = n?.data.curr.data.api[0].url, y = s, p = S(!1), x = S(!1), d = S({}), E = S(""), f = S(""), C = S(!1), g = S(""), $ = S(""), B = async (v = "") => {
      if (!(!v || x.value)) {
        $.value = v, d.value = {}, E.value = "", f.value = "", g.value = "", p.value = !0, x.value = !0;
        try {
          const i = await fetch(l, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${y}`
            },
            body: JSON.stringify({ slug: String(v).trim(), collection: "products" })
          });
          if (!i.ok) throw new Error(`Server Error (${i.status})`);
          const k = await i.json();
          if (k.data && k.data.length > 0) {
            const O = k.data[0].document;
            let Z = {};
            try {
              Z = JSON.parse(O.metadata);
            } catch {
              Z = O.metadata || {};
            }
            d.value = {
              id: O.id,
              title: O.title,
              brand: O.brand,
              variant_prices: O.variant_prices,
              variant_mrp: O.variant_mrp,
              metadata: Z,
              variant: Z.variant || []
            }, d.value.metadata?.color?.length && (f.value = d.value.metadata.color[0].id);
          } else
            g.value = "Product details unavailable.";
        } catch {
          g.value = "Unable to load product.";
        } finally {
          x.value = !1;
        }
      }
    }, M = () => {
      C.value || (p.value = !1);
    }, A = (v) => {
      v.target.src = "https://placehold.co/600x600/png?text=No+Image";
    }, N = _(() => d.value.metadata?.color || []), P = _(() => (d.value.metadata?.size || []).map((v) => typeof v == "string" ? { id: v, name: v } : v)), F = () => {
      if (E.value && f.value) {
        const v = d.value.variant?.find((i) => i.size_id === E.value && i.color_id === f.value);
        if (v?.price) return v.price;
      }
      return d.value.variant_prices?.[0] || 0;
    }, D = _(() => {
      if (f.value) {
        const v = d.value.metadata?.color?.find((i) => i.id === f.value);
        if (v?.image?.[0]?.url) return v.image[0].url;
      }
      return d.value.metadata?.color?.[0]?.image?.[0]?.url || d.value.url || "";
    }), qe = (v) => ({
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
    })[v] || "#e5e7eb", Fe = async () => {
      if (!E.value || !f.value) return g.value = "Please select a size and color";
      const v = d.value.variant?.find((i) => i.size_id === E.value && i.color_id === f.value);
      if (!v) return g.value = "Selected combination is out of stock";
      C.value = !0, g.value = "";
      try {
        const i = await fetch(
          n?.data.curr.data.api[1].url,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${y}` },
            body: JSON.stringify({ operation: "add_to_cart", user_id: "user_1", product_id: d.value.id, variant_id: v.id, quantity: 1 })
          }
        ), k = await i.json();
        if (!i.ok) throw new Error(k.error || "Failed to add");
        await new Promise((O) => setTimeout(O, 600)), M(), setTimeout(() => {
          c.success("Added to Bag Successfully", {
            autoClose: 2e3,
            position: c.POSITION.TOP_RIGHT,
            //toast.POSITION.BOTTOM_CENTER,
            theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
            transition: "slide",
            hideProgressBar: !0
          });
        }, 300);
      } catch (i) {
        g.value = i.message || "Failed to add to cart.", c.error(g.value, { position: c.POSITION.TOP_RIGHT, theme: "colored" });
      } finally {
        C.value = !1;
      }
    };
    return t({ openProduct: B }), (v, i) => (b(), h("div", Rt, [
      m(de, {
        "enter-active-class": "transition duration-500 ease-out",
        "enter-from-class": "opacity-0",
        "enter-to-class": "opacity-100",
        "leave-active-class": "transition duration-300 ease-in",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: ue(() => [
          p.value ? (b(), h("div", {
            key: 0,
            class: "fixed inset-0 z-[50] bg-black/30 backdrop-blur-[4px]",
            onClick: M
          })) : j("", !0)
        ]),
        _: 1
      }),
      m(de, {
        "enter-active-class": "transition duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1)",
        "enter-from-class": "translate-y-full opacity-0 sm:translate-y-12 sm:scale-95",
        "enter-to-class": "translate-y-0 opacity-100 sm:scale-100",
        "leave-active-class": "transition duration-300 ease-in",
        "leave-from-class": "translate-y-0 opacity-100 sm:scale-100",
        "leave-to-class": "translate-y-full opacity-0 sm:translate-y-12 sm:scale-95"
      }, {
        default: ue(() => [
          p.value ? (b(), h("div", Ut, [
            r("div", Dt, [
              r("button", {
                onClick: M,
                class: "absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/80 dark:bg-black/40 hover:bg-gray-100 dark:hover:bg-white/10 backdrop-blur-md border border-black/5 dark:border-white/10 transition-all duration-300 hover:rotate-90"
              }, [...i[0] || (i[0] = [
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
              x.value ? (b(), h("div", zt, [...i[1] || (i[1] = [
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
              ])])) : !d.value.id && g.value ? (b(), h("div", jt, [
                i[2] || (i[2] = r("div", { class: "w-16 h-16 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center mb-6" }, [
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
                i[3] || (i[3] = r("h3", { class: "text-xl font-bold text-gray-900 dark:text-white mb-2" }, "Unavailable", -1)),
                r("p", Ht, z(g.value), 1),
                r("button", {
                  onClick: M,
                  class: "px-6 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-semibold rounded-lg transition-colors"
                }, "Close")
              ])) : (b(), h("div", Gt, [
                r("div", Vt, [
                  i[4] || (i[4] = r("div", { class: "sm:hidden absolute top-3 inset-x-0 flex justify-center z-10" }, [
                    r("div", { class: "w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full opacity-60" })
                  ], -1)),
                  (b(), h("img", {
                    key: f.value,
                    src: D.value,
                    onError: A,
                    class: "max-h-[180px] sm:max-h-[65%] w-auto object-contain mix-blend-multiply dark:mix-blend-normal transition-all duration-700 ease-out hover:scale-110 hover:-rotate-2 drop-shadow-xl",
                    alt: "Product"
                  }, null, 40, Wt))
                ]),
                r("div", Jt, [
                  r("div", Kt, [
                    r("div", Yt, [
                      r("div", Xt, [
                        r("h3", Zt, z(d.value.brand || "Brand"), 1)
                      ]),
                      r("h2", Qt, z(d.value.title), 1),
                      r("div", ea, [
                        r("span", ta, "₹" + z(new Intl.NumberFormat("en-IN").format(F())), 1),
                        d.value.variant_mrp && d.value.variant_mrp[0] ? (b(), h("span", aa, "₹" + z(new Intl.NumberFormat("en-IN").format(d.value.variant_mrp[0])), 1)) : j("", !0)
                      ])
                    ]),
                    N.value.length ? (b(), h("div", na, [
                      i[5] || (i[5] = r("span", { class: "text-[11px] font-bold text-gray-900 dark:text-white block mb-4 uppercase tracking-widest" }, "Select Color", -1)),
                      r("div", oa, [
                        (b(!0), h(fe, null, _e(N.value, (k) => (b(), h("button", {
                          key: k.id,
                          onClick: (O) => f.value = k.id,
                          class: "group relative w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
                        }, [
                          r("div", {
                            class: xe(["absolute inset-0 rounded-full border-2 transition-all duration-300", f.value === k.id ? "border-black dark:border-white scale-125 opacity-100" : "border-transparent scale-100 opacity-0 group-hover:scale-110"])
                          }, null, 2),
                          r("span", {
                            class: "w-full h-full rounded-full border border-black/5 dark:border-white/10 shadow-sm",
                            style: Ue({ backgroundColor: qe(k.name) })
                          }, null, 4)
                        ], 8, sa))), 128))
                      ])
                    ])) : j("", !0),
                    P.value.length ? (b(), h("div", ra, [
                      i[6] || (i[6] = r("div", { class: "flex justify-between items-center mb-4" }, [
                        r("span", { class: "text-[11px] font-bold text-gray-900 dark:text-white uppercase tracking-widest" }, "Select Size"),
                        r("button", { class: "text-[11px] font-semibold text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors" }, "Size Guide")
                      ], -1)),
                      r("div", la, [
                        (b(!0), h(fe, null, _e(P.value, (k) => (b(), h("button", {
                          key: k.id,
                          onClick: (O) => E.value = k.id,
                          class: xe(["py-3 text-[13px] font-semibold rounded-xl transition-all duration-200 focus:outline-none border", E.value === k.id ? "bg-black dark:bg-white text-white dark:text-black border-transparent shadow-lg transform -translate-y-0.5" : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-transparent hover:border-gray-400 dark:hover:border-gray-600"])
                        }, z(k.name), 11, ia))), 128))
                      ])
                    ])) : j("", !0),
                    m(de, {
                      "enter-active-class": "transition duration-200 ease-out",
                      "enter-from-class": "opacity-0 -translate-y-2",
                      "enter-to-class": "opacity-100 translate-y-0"
                    }, {
                      default: ue(() => [
                        g.value && d.value.id ? (b(), h("div", da, [
                          i[7] || (i[7] = r("svg", {
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
                          r("span", ua, z(g.value), 1)
                        ])) : j("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  r("div", ca, [
                    r("button", {
                      onClick: Fe,
                      disabled: C.value,
                      class: "w-full h-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold tracking-wide rounded-2xl transition-all active:scale-[0.98] disabled:opacity-80 disabled:cursor-not-allowed shadow-xl shadow-blue-600/20"
                    }, [
                      C.value ? (b(), h("div", pa, [...i[8] || (i[8] = [
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
                      ])])) : (b(), h("span", ma, [...i[9] || (i[9] = [
                        De(" Add to Cart ", -1),
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
                    ], 8, fa)
                  ])
                ])
              ]))
            ])
          ])) : j("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), ga = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, o] of t)
    a[n] = o;
  return a;
}, ya = /* @__PURE__ */ ga(va, [["__scopeId", "data-v-4c2bc883"]]), ha = { class: "w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#0f172a] transition-colors duration-300" }, ba = {
  key: 0,
  class: "p-8 bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col gap-4"
}, _a = /* @__PURE__ */ J({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = S(null), a = S("Nike__9041"), n = () => {
      a.value && t.value?.openProduct(a.value);
    };
    return (async () => (e._p.my.emitter = e._p.f.new_emitter(), e._p.f.listen("msg", async (o) => {
      if (o.type === "product:open") {
        const s = o.custom?.product_id;
        console.log("👂 Index received ID:", s), s && (a.value = s, t.value && t.value.openProduct(s));
      }
      o.type === "theme:change" && (o.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }), await e._p.my.emitter.emit("msg", { type: "on:change", _p: e._p, _$p: e._$p })))(), (o, s) => (b(), h("div", ha, [
      e._$p.data.curr.data.env == "dev" ? (b(), h("div", ba, [
        r("div", null, [
          s[1] || (s[1] = r("label", { class: "text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2" }, "Product ID", -1)),
          ze(r("input", {
            "onUpdate:modelValue": s[0] || (s[0] = (l) => a.value = l),
            type: "text",
            class: "w-full px-4 py-3 bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          }, null, 512), [
            [je, a.value]
          ])
        ]),
        r("button", {
          onClick: n,
          class: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30"
        }, " Open Modal ")
      ])) : j("", !0),
      m(ya, {
        ref_key: "popupRef",
        ref: t,
        _p: e._p,
        _$p: e._$p
      }, null, 8, ["_p", "_$p"])
    ]));
  }
}), wa = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = Ee(_a, {
      _p: e,
      _$p: t
    }), o = {
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
    return n.mount(s), o;
  }
});
export {
  wa as hydrator,
  wa as index
};
