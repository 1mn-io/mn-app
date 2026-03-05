import { d as G, r as k, m as P, t as N, c as ve, n as pe, o as me, a as be, b as _, F as Ee, e as S, h as W, f as $, w as Z, i as we, g as qe, j as U, k as B, l as V, p as D } from "./runtime-dom.esm-bundler-BvAO5ksV.js";
const re = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), Se = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), Ce = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((a) => {
        const o = (s) => {
          ((i) => {
            const f = i.getAttribute("data-ce");
            if (!f)
              return;
            const l = JSON.parse(f).filter((c) => c?.k.startsWith("t-"));
            if (l.length != 0)
              for (const c of l) {
                const h = c.k, d = c.v.split(" ");
                if (h == `t-${t}-class`)
                  for (const r of d)
                    i.classList.add(r);
                else
                  for (const r of d)
                    i.classList.remove(r);
              }
          })(s);
        };
        for (const s of a.getElementsByTagName("*"))
          o(s);
        o(a);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function ie(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((a) => {
    const o = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(s), a());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, s = setInterval(() => {
      o();
    }, t);
    o();
  });
}
let ze = class {
  listeners = {};
  on = (e, t) => ((this.listeners[e] ||= []).push(t), () => this.off(e, t));
  off = (e, t) => {
    this.listeners[e] = this.listeners[e]?.filter((n) => n !== t);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...t) => {
    for (const n of this.listeners[e] ?? [])
      await n(...t);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...t) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((n) => n(...t))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...t) => {
    for (const n of this.listeners[e] ?? [])
      try {
        await n(...t);
      } catch (a) {
        this.listeners.error?.forEach(
          (o) => o(a)
        );
      }
  };
};
const ee = () => new ze();
class Te {
  startTime;
  endTime;
  isRunning;
  constructor() {
    this.startTime = 0, this.endTime = 0, this.isRunning = !1;
  }
  // Starts the timer
  start() {
    if (this.isRunning)
      throw new Error("Benchmark has already started.");
    this.startTime = performance.now(), this.isRunning = !0;
  }
  // Stops the timer and records the end time
  stop() {
    if (!this.isRunning)
      throw new Error("Benchmark hasn't started.");
    this.endTime = performance.now(), this.isRunning = !1;
  }
  // Get the result in milliseconds
  result() {
    if (this.isRunning)
      throw new Error("Benchmark is still running.");
    return {
      time_taken_ms: (this.endTime - this.startTime).toFixed(4)
    };
  }
}
console.log("content-engine-lib");
let w = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [n, a] of t.entries()) {
        const o = a, s = `${o.name}:${e.run_from}`, i = `${e.run_from}_src`;
        let f = o[i];
        const l = `${e.run_from}_src`;
        let c = e?.lazy_lib?.[l] || null;
        if (c && (c = c.replace("{*}", `${o.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${f}`), w.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(f) && f.includes("/") == !1 && w.lib.inbuilt_lib.indexOf(`${o.name}`) === -1)
            if (c)
              f = c;
            else
              throw `[lib-name=${o.name},lib-src=${f}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (f.startsWith("./") || f.startsWith("../")) {
            const h = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${f}`
            );
            w.lib.l[`${s}`] = {
              lib: h,
              src: f
            };
          }
          if (f.startsWith("http://") || f.startsWith("https://")) {
            const h = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${f}`
            );
            w.lib.l[`${s}`] = {
              lib: h,
              src: f
            };
          }
        }
      }
      console.log(await w.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return w.lib.l.hasOwnProperty(`${n}`) == !1 && await w.lib.set({
        lib: [
          {
            renderer_src: e.name,
            hydrator_src: e.name,
            editor_src: e.name,
            name: e.name
          }
        ],
        run_from: e.run_from,
        lazy_lib: e.lazy_lib
      }), t = w.lib.l[`${n}`], t;
    },
    get_all: async (e) => w.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const a = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), a.indexOf(e.type) !== -1)
        for (const [o, s] of a.entries()) {
          let i = o == 0 ? "" : "/";
          if (t += `${i}${s}`, s == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [o, s] of a.entries()) {
          let i = o == 0 ? "" : "/";
          if (t += `${i}${s}`, s == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const Ae = ee(), Ie = ee(), Re = Ae.on, he = Ae.emit, Fe = Ie.emit, Ue = Ie.on, De = async (e) => {
  const t = await Se();
  return await w.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const a = new Te();
      a.start();
      let o = n.data?.value?.l || n.data.l, s = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return n.return.r == "full" ? s.r = "" : s.r = [], await (async () => {
        for (const i of o) {
          const f = await await w.lib.get({ name: i.type, run_from: "renderer", lazy_lib: e.lazy_lib }), l = await (await f.lib.index({
            f: {
              name: (c) => t.f.name({ id: i.id, name: c }),
              get_lib: async (c) => await await w.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (c) => await (await Ce()).set(c),
              path: (c) => w.path.set({ src: f.src, type: i.type, name: c }),
              //set..
              uuid: () => re().set(),
              wait_until: ie
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? s.r += l?.r || "" : s.r.push(l?.r || ""), s.style += l?.style || "", s.head += l?.head || "";
        }
      })(), a.stop(), s.benchmark = a.result(), s;
    }
  };
}, je = async (e) => {
  const t = await Se();
  return await w.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const a = new Te();
      a.start();
      let o = {
        r: "",
        style: ""
      }, s = {
        style_id: `${re().set()}_stl`
      }, i = n.data?.value?.l || n.data.l;
      const f = async () => {
        for (const l of i) {
          const c = await await w.lib.get({ name: l.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), h = c.lib, d = ee(), r = d.on, y = await (await h.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => t.f.name({ id: l.id, name: u }),
              get_lib: async (u) => await await w.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (u) => await (await Ce()).set(u),
              path: (u) => w.path.set({ src: c.src, type: l.type, name: u }),
              //set..
              uuid: () => re().set(),
              wait_until: ie,
              //set..
              call: Fe,
              listen: r,
              //set..
              new_emitter: () => ee()
            }
          })).set(
            {
              data: {
                curr: l
              }
            }
            /*_$cb*/
          );
          Re("msg", async (u) => {
            try {
              if (Object.keys(u.where || {}).length == 0) {
                await d.emit("msg", u);
                return;
              }
            } catch {
            }
            try {
              if (l?.[u.where?.key || ""] == u.where?.value) {
                await d.emit("msg", u);
                return;
              }
            } catch {
            }
          }), o.style += y.style;
        }
      };
      await ie(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await f();
      try {
        ((l) => {
          const c = document.getElementById(`${s.style_id}`);
          c && c.remove();
          const h = document.createElement("style");
          h.id = `${s.style_id}`, h.innerHTML = `${o.style}`, l.appendChild(h);
        })(document.head);
      } catch (l) {
        console.log(`${l}, Failed to set style..`);
      }
      return a.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: a.result()
      };
    }
  };
}, J = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
}, z = {
  LIGHT: "light",
  DARK: "dark",
  COLORED: "colored",
  AUTO: "auto"
}, C = {
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
}, Je = {
  rtl: !1,
  newestOnTop: !1,
  toastClassName: ""
}, Ne = {
  ...Ge,
  ...Je
};
C.DEFAULT;
var m = /* @__PURE__ */ ((e) => (e[e.COLLAPSE_DURATION = 300] = "COLLAPSE_DURATION", e[e.DEBOUNCE_DURATION = 50] = "DEBOUNCE_DURATION", e.CSS_NAMESPACE = "Toastify", e))(m || {}), le = /* @__PURE__ */ ((e) => (e.ENTRANCE_ANIMATION_END = "d", e))(le || {});
const We = {
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: !0
}, Ve = {
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: !0
}, Ze = {
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
}, Xe = {
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
}, ge = "Toastify--animate Toastify__none-enter";
function $e(e, t = !1) {
  var n;
  let a = We;
  if (!e || typeof e == "string")
    switch (e) {
      case "flip":
        a = Xe;
        break;
      case "zoom":
        a = Ze;
        break;
      case "slide":
        a = Ve;
        break;
    }
  else
    a = e;
  if (t)
    a.enter = ge;
  else if (a.enter === ge) {
    const o = (n = a.exit.split("__")[1]) == null ? void 0 : n.split("-")[0];
    a.enter = `Toastify--animate Toastify__${o}-enter`;
  }
  return a;
}
function Ye(e) {
  return e.containerId || String(e.position);
}
const ne = "will-unmount";
function Ke(e = J.TOP_RIGHT) {
  return !!document.querySelector(`.${m.CSS_NAMESPACE}__toast-container--${e}`);
}
function Qe(e = J.TOP_RIGHT) {
  return `${m.CSS_NAMESPACE}__toast-container--${e}`;
}
function et(e, t, n = !1) {
  const a = [
    `${m.CSS_NAMESPACE}__toast-container`,
    `${m.CSS_NAMESPACE}__toast-container--${e}`,
    n ? `${m.CSS_NAMESPACE}__toast-container--rtl` : null
  ].filter(Boolean).join(" ");
  return q(t) ? t({
    position: e,
    rtl: n,
    defaultClassName: a
  }) : `${a} ${t || ""}`;
}
function tt(e) {
  var t;
  const { position: n, containerClassName: a, rtl: o = !1, style: s = {} } = e, i = m.CSS_NAMESPACE, f = Qe(n), l = document.querySelector(`.${i}`), c = document.querySelector(`.${f}`), h = !!c && !((t = c.className) != null && t.includes(ne)), d = l || document.createElement("div"), r = document.createElement("div");
  r.className = et(
    n,
    a,
    o
  ), r.dataset.testid = `${m.CSS_NAMESPACE}__toast-container--${n}`, r.id = Ye(e);
  for (const y in s)
    if (Object.prototype.hasOwnProperty.call(s, y)) {
      const u = s[y];
      r.style[y] = u;
    }
  return l || (d.className = m.CSS_NAMESPACE, document.body.appendChild(d)), h || d.appendChild(r), r;
}
function ce(e) {
  var t, n, a;
  const o = typeof e == "string" ? e : ((t = e.currentTarget) == null ? void 0 : t.id) || ((n = e.target) == null ? void 0 : n.id), s = document.getElementById(o);
  s && s.removeEventListener("animationend", ce, !1);
  try {
    H[o].unmount(), (a = document.getElementById(o)) == null || a.remove(), delete H[o], delete E[o];
  } catch {
  }
}
const H = k({});
function nt(e, t) {
  const n = document.getElementById(String(t));
  n && (H[n.id] = e);
}
function ue(e, t = !0) {
  const n = String(e);
  if (!H[n]) return;
  const a = document.getElementById(n);
  a && a.classList.add(ne), t ? (ot(e), a && a.addEventListener("animationend", ce, !1)) : ce(n), O.items = O.items.filter((o) => o.containerId !== e);
}
function at(e) {
  for (const t in H)
    ue(t, e);
  O.items = [];
}
function Oe(e, t) {
  const n = document.getElementById(e.toastId);
  if (n) {
    let a = e;
    a = {
      ...a,
      ...$e(a.transition)
    };
    const o = a.appendPosition ? `${a.exit}--${a.position}` : a.exit;
    n.className += ` ${o}`, t && t(n);
  }
}
function ot(e) {
  for (const t in E)
    if (t === e)
      for (const n of E[t] || [])
        Oe(n);
}
function st(e) {
  const t = R().find((n) => n.toastId === e);
  return t?.containerId;
}
function ye(e) {
  return document.getElementById(e);
}
function rt(e) {
  const t = ye(e.containerId);
  return t && t.classList.contains(ne);
}
function _e(e) {
  var t;
  const n = we(e.content) ? N(e.content.props) : null;
  return n ?? N((t = e.data) != null ? t : {});
}
function it(e) {
  return e ? O.items.filter((t) => t.containerId === e).length > 0 : O.items.length > 0;
}
function lt() {
  if (O.items.length > 0) {
    const e = O.items.shift();
    X(e?.toastContent, e?.toastProps);
  }
}
const E = k({}), O = k({ items: [] });
function R() {
  const e = N(E);
  return Object.values(e).reduce((t, n) => [...t, ...n], []);
}
function ct(e) {
  return R().find((t) => t.toastId === e);
}
function X(e, t = {}) {
  if (rt(t)) {
    const n = ye(t.containerId);
    n && n.addEventListener("animationend", de.bind(null, e, t), !1);
  } else
    de(e, t);
}
function de(e, t = {}) {
  const n = ye(t.containerId);
  n && n.removeEventListener("animationend", de.bind(null, e, t), !1);
  const a = E[t.containerId] || [], o = a.length > 0;
  if (!o && !Ke(t.position)) {
    const s = tt(t), i = ve($t, t);
    t.useHandler && t.useHandler(i), i.mount(s), nt(i, s.id);
  }
  o && !t.updateId && (t.position = a[0].position), pe(() => {
    t.updateId ? A.update(t) : A.add(e, t);
  });
}
const A = {
  /**
   * add a toast
   * @param _ ..
   * @param opts toast props
   */
  add(e, t) {
    const { containerId: n = "" } = t;
    n && (E[n] = E[n] || [], E[n].find((a) => a.toastId === t.toastId) || setTimeout(() => {
      var a, o;
      t.newestOnTop ? (a = E[n]) == null || a.unshift(t) : (o = E[n]) == null || o.push(t), t.onOpen && t.onOpen(_e(t));
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
        const n = E[t];
        let a = n.find((o) => o.toastId === e);
        E[t] = n.filter((o) => o.toastId !== e), !E[t].length && !it(t) && ue(t, !1), lt(), pe(() => {
          a != null && a.onClose && (a.onClose(_e(a)), a = void 0);
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
      E[t] = E[t] || [];
      const n = E[t].find((s) => s.toastId === e.toastId), a = n?.position !== e.position || n?.transition !== e.transition, o = {
        ...e,
        disabledEnterTransition: !a,
        updateId: void 0
      };
      A.dismissForce(e?.toastId), setTimeout(() => {
        p(o.content, o);
      }, e.delay || 0);
    }
  },
  /**
   * clear all toasts in container.
   * @param containerId container id
   */
  clear(e, t = !0) {
    e ? ue(e, t) : at(t);
  },
  dismissCallback(e) {
    var t;
    const n = (t = e.currentTarget) == null ? void 0 : t.id, a = document.getElementById(n);
    a && (a.removeEventListener("animationend", A.dismissCallback, !1), setTimeout(() => {
      A.remove(n);
    }));
  },
  dismiss(e) {
    if (e) {
      const t = R();
      for (const n of t)
        if (n.toastId === e) {
          Oe(n, (a) => {
            a.addEventListener("animationend", A.dismissCallback, !1);
          });
          break;
        }
    }
  },
  dismissForce(e) {
    if (e) {
      const t = R();
      for (const n of t)
        if (n.toastId === e) {
          const a = document.getElementById(e);
          a && (a.remove(), a.removeEventListener("animationend", A.dismissCallback, !1), A.remove(e));
          break;
        }
    }
  }
}, ut = k({ useHandler: void 0 }), Le = k({}), te = k({});
function Pe() {
  return Math.random().toString(36).substring(2, 9);
}
function dt(e) {
  return typeof e == "number" && !isNaN(e);
}
function fe(e) {
  return typeof e == "string";
}
function q(e) {
  return typeof e == "function";
}
function ae(...e) {
  return P(...e);
}
function Y(e) {
  return typeof e == "object" && (!!(e != null && e.render) || !!(e != null && e.setup) || typeof e?.type == "object");
}
function ft(e = {}) {
  Le[`${m.CSS_NAMESPACE}-default-options`] = e;
}
function pt() {
  return Le[`${m.CSS_NAMESPACE}-default-options`] || Ne;
}
function mt() {
  const e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return document.documentElement.classList.contains("dark") || e ? "dark" : "light";
}
var K = /* @__PURE__ */ ((e) => (e[e.Enter = 0] = "Enter", e[e.Exit = 1] = "Exit", e))(K || {});
const xe = {
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
    default: z.AUTO
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
    default: C.DEFAULT
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
}, yt = {
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
    default: C.DEFAULT
  },
  theme: {
    type: String,
    required: !1,
    default: z.AUTO
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
}, ht = /* @__PURE__ */ G({
  name: "ProgressBar",
  props: yt,
  // @ts-ignore
  setup(e, {
    attrs: t
  }) {
    const n = $(), a = S(() => e.hide ? "true" : "false"), o = S(() => ({
      ...t.style || {},
      animationDuration: `${e.autoClose === !0 ? 5e3 : e.autoClose}ms`,
      animationPlayState: e.isRunning ? "running" : "paused",
      opacity: e.hide || e.autoClose === !1 ? 0 : 1,
      transform: e.controlledProgress ? `scaleX(${e.progress})` : "none"
    })), s = S(() => [`${m.CSS_NAMESPACE}__progress-bar`, e.controlledProgress ? `${m.CSS_NAMESPACE}__progress-bar--controlled` : `${m.CSS_NAMESPACE}__progress-bar--animated`, `${m.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`, `${m.CSS_NAMESPACE}__progress-bar--${e.type}`, e.rtl ? `${m.CSS_NAMESPACE}__progress-bar--rtl` : null].filter(Boolean).join(" ")), i = S(() => `${s.value} ${t?.class || ""}`), f = () => {
      n.value && (n.value.onanimationend = null, n.value.ontransitionend = null);
    }, l = () => {
      e.isIn && e.closeToast && e.autoClose !== !1 && (e.closeToast(), f());
    }, c = S(() => e.controlledProgress ? null : l), h = S(() => e.controlledProgress ? l : null);
    return Z(() => {
      n.value && (f(), n.value.onanimationend = c.value, n.value.ontransitionend = h.value);
    }), () => _("div", {
      ref: n,
      role: "progressbar",
      "aria-hidden": a.value,
      "aria-label": "notification timer",
      class: i.value,
      style: o.value
    }, null);
  }
}), gt = /* @__PURE__ */ G({
  name: "CloseButton",
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      required: !1,
      default: z.AUTO
    },
    type: {
      type: String,
      required: !1,
      default: z.LIGHT
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
    return () => _("button", {
      class: `${m.CSS_NAMESPACE}__close-button ${m.CSS_NAMESPACE}__close-button--${e.theme}`,
      type: "button",
      onClick: (t) => {
        t.stopPropagation(), e.closeToast && e.closeToast(t);
      },
      "aria-label": e.ariaLabel
    }, [_("svg", {
      "aria-hidden": "true",
      viewBox: "0 0 14 16"
    }, [_("path", {
      "fill-rule": "evenodd",
      d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    }, null)])]);
  }
}), oe = ({
  theme: e,
  type: t,
  path: n,
  ...a
}) => _("svg", P({
  viewBox: "0 0 24 24",
  width: "100%",
  height: "100%",
  fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`
}, a), [_("path", {
  d: n
}, null)]);
function _t(e) {
  return _(oe, P(e, {
    path: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }), null);
}
function vt(e) {
  return _(oe, P(e, {
    path: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }), null);
}
function bt(e) {
  return _(oe, P(e, {
    path: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }), null);
}
function Et(e) {
  return _(oe, P(e, {
    path: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }), null);
}
function wt() {
  return _("div", {
    class: `${m.CSS_NAMESPACE}__spinner`
  }, null);
}
const Q = {
  info: vt,
  warning: _t,
  success: bt,
  error: Et,
  spinner: wt
}, St = (e) => e in Q;
function Ct({
  theme: e,
  type: t,
  isLoading: n,
  icon: a
}) {
  let o;
  const s = !!n || t === "loading", i = {
    theme: e,
    type: t
  };
  if (s && (a === void 0 || typeof a == "boolean")) return Q.spinner();
  if (a !== !1) {
    if (Y(a))
      o = N(a);
    else if (q(a)) {
      const f = a;
      i.type = s ? "loading" : t, o = f(i), o = !o && s ? Q.spinner() : o;
    } else we(a) ? o = qe(a, i) : fe(a) || dt(a) ? o = a : St(t) && (o = Q[t](i));
    return o;
  }
}
const Tt = () => {
};
function At(e, t, n = m.COLLAPSE_DURATION) {
  const { scrollHeight: a, style: o } = e, s = n;
  requestAnimationFrame(() => {
    o.minHeight = "initial", o.height = a + "px", o.transition = `all ${s}ms`, requestAnimationFrame(() => {
      o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, s);
    });
  });
}
function It(e) {
  const t = $(!1), n = $(!1), a = $(!1), o = $(K.Enter), s = k({
    ...e,
    appendPosition: e.appendPosition || !1,
    collapse: typeof e.collapse > "u" ? !0 : e.collapse,
    collapseDuration: e.collapseDuration || m.COLLAPSE_DURATION
  }), i = s.done || Tt, f = S(() => s.appendPosition ? `${s.enter}--${s.position}` : s.enter), l = S(() => s.appendPosition ? `${s.exit}--${s.position}` : s.exit), c = S(() => e.pauseOnHover ? {
    onMouseenter: T,
    onMouseleave: b
  } : {});
  function h() {
    const v = f.value.split(" ");
    r().addEventListener(
      le.ENTRANCE_ANIMATION_END,
      b,
      { once: !0 }
    );
    const I = (M) => {
      const F = r();
      M.target === F && (F.dispatchEvent(new Event(le.ENTRANCE_ANIMATION_END)), F.removeEventListener("animationend", I), F.removeEventListener("animationcancel", I), o.value === K.Enter && M.type !== "animationcancel" && F.classList.remove(...v));
    }, L = () => {
      const M = r();
      M.classList.add(...v), M.addEventListener("animationend", I), M.addEventListener("animationcancel", I);
    };
    e.pauseOnFocusLoss && y(), L();
  }
  function d() {
    if (!r()) return;
    const v = () => {
      const L = r();
      L.removeEventListener("animationend", v), s.collapse ? At(L, i, s.collapseDuration) : i();
    }, I = () => {
      const L = r();
      o.value = K.Exit, L && (L.className += ` ${l.value}`, L.addEventListener("animationend", v));
    };
    n.value || (a.value ? v() : setTimeout(I));
  }
  function r() {
    return e.toastRef.value;
  }
  function y() {
    document.hasFocus() || T(), window.addEventListener("focus", b), window.addEventListener("blur", T);
  }
  function u() {
    window.removeEventListener("focus", b), window.removeEventListener("blur", T);
  }
  function b() {
    (!e.loading.value || e.isLoading === void 0) && (t.value = !0);
  }
  function T() {
    t.value = !1;
  }
  function g(v) {
    v && (v.stopPropagation(), v.preventDefault()), n.value = !1;
  }
  return Z(d), Z(() => {
    const v = R();
    n.value = v.findIndex((I) => I.toastId === s.toastId) > -1;
  }), Z(() => {
    e.isLoading !== void 0 && (e.loading.value ? T() : b());
  }), me(h), be(() => {
    e.pauseOnFocusLoss && u();
  }), {
    isIn: n,
    isRunning: t,
    hideToast: g,
    eventHandlers: c
  };
}
const Nt = /* @__PURE__ */ G({
  name: "ToastItem",
  inheritAttrs: !1,
  props: xe,
  // @ts-ignore
  setup(e) {
    const t = $(), n = S(() => !!e.isLoading), a = S(() => e.progress !== void 0 && e.progress !== null), o = S(() => Ct(e)), s = S(() => [`${m.CSS_NAMESPACE}__toast`, `${m.CSS_NAMESPACE}__toast-theme--${e.theme}`, `${m.CSS_NAMESPACE}__toast--${e.type}`, e.rtl ? `${m.CSS_NAMESPACE}__toast--rtl` : void 0, e.toastClassName || ""].filter(Boolean).join(" ")), {
      isRunning: i,
      isIn: f,
      hideToast: l,
      eventHandlers: c
    } = It({
      toastRef: t,
      loading: n,
      done: () => {
        A.remove(e.toastId);
      },
      ...$e(e.transition, e.disabledEnterTransition),
      ...e
    });
    return () => _("div", P({
      id: e.toastId,
      class: s.value,
      style: e.toastStyle || {},
      ref: t,
      "data-testid": `toast-item-${e.toastId}`,
      onClick: (h) => {
        e.closeOnClick && l(), e.onClick && e.onClick(h);
      }
    }, c.value), [_("div", {
      role: e.role,
      "data-testid": "toast-body",
      class: `${m.CSS_NAMESPACE}__toast-body ${e.bodyClassName || ""}`
    }, [o.value != null && _("div", {
      "data-testid": `toast-icon-${e.type}`,
      class: [`${m.CSS_NAMESPACE}__toast-icon`, e.isLoading ? "" : `${m.CSS_NAMESPACE}--animate-icon ${m.CSS_NAMESPACE}__zoom-enter`].join(" ")
    }, [Y(o.value) ? W(N(o.value), {
      theme: e.theme,
      type: e.type
    }) : q(o.value) ? o.value({
      theme: e.theme,
      type: e.type
    }) : o.value]), _("div", {
      "data-testid": "toast-content"
    }, [Y(e.content) ? W(N(e.content), {
      toastProps: N(e),
      closeToast: l,
      data: e.data,
      ...e.expandCustomProps ? e.contentProps : {
        contentProps: e.contentProps || {}
      }
    }) : q(e.content) ? e.content({
      toastProps: N(e),
      closeToast: l,
      data: e.data
    }) : e.dangerouslyHTMLString ? W("div", {
      innerHTML: e.content
    }) : e.content])]), (e.closeButton === void 0 || e.closeButton === !0) && _(gt, {
      theme: e.theme,
      closeToast: (h) => {
        h.stopPropagation(), h.preventDefault(), l();
      }
    }, null), Y(e.closeButton) ? W(N(e.closeButton), {
      closeToast: l,
      type: e.type,
      theme: e.theme
    }) : q(e.closeButton) ? e.closeButton({
      closeToast: l,
      type: e.type,
      theme: e.theme
    }) : null, _(ht, {
      className: e.progressClassName,
      style: e.progressStyle,
      rtl: e.rtl,
      theme: e.theme,
      isIn: f.value,
      type: e.type,
      hide: e.hideProgressBar,
      isRunning: i.value,
      autoClose: e.autoClose,
      controlledProgress: a.value,
      progress: e.progress,
      closeToast: e.isLoading ? void 0 : l
    }, null)]);
  }
});
let j = 0;
function ke() {
  typeof window > "u" || (j && window.cancelAnimationFrame(j), j = window.requestAnimationFrame(ke), te.lastUrl !== window.location.href && (te.lastUrl = window.location.href, A.clear()));
}
const $t = /* @__PURE__ */ G({
  name: "ToastifyContainer",
  inheritAttrs: !1,
  props: xe,
  // @ts-ignore
  setup(e) {
    const t = S(() => e.containerId), n = S(() => E[t.value] || []), a = S(() => n.value.filter((o) => o.position === e.position));
    return me(() => {
      typeof window < "u" && e.clearOnUrlChange && window.requestAnimationFrame(ke);
    }), be(() => {
      typeof window < "u" && j && (window.cancelAnimationFrame(j), te.lastUrl = "");
    }), () => _(Ee, null, [a.value.map((o) => {
      const {
        toastId: s = ""
      } = o;
      return _(Nt, P({
        key: s
      }, o), null);
    })]);
  }
});
let se = !1;
const Me = {
  isLoading: !0,
  autoClose: !1,
  closeOnClick: !1,
  closeButton: !1,
  draggable: !1
};
function Be() {
  const e = [];
  return R().forEach((t) => {
    const n = document.getElementById(t.containerId);
    n && !n.classList.contains(ne) && e.push(t);
  }), e;
}
function Ot(e) {
  const t = Be().length, n = e ?? 0;
  return n > 0 && t + O.items.length >= n;
}
function Lt(e) {
  Ot(e.limit) && !e.updateId && O.items.push({
    toastId: e.toastId,
    containerId: e.containerId,
    toastContent: e.content,
    toastProps: e
  });
}
function x(e, t, n = {}) {
  if (se) return;
  n = ae(pt(), {
    type: t
  }, N(n)), (!n.toastId || typeof n.toastId != "string" && typeof n.toastId != "number") && (n.toastId = Pe()), n = {
    ...n,
    ...n.type === "loading" ? Me : {},
    content: e,
    containerId: n.containerId || String(n.position)
  };
  const a = Number(n?.progress);
  return !isNaN(a) && a < 0 && (n.progress = 0), a > 1 && (n.progress = 1), n.theme === "auto" && (n.theme = mt()), Lt(n), te.lastUrl = window.location.href, n.multiple ? O.items.length ? n.updateId && X(e, n) : X(e, n) : (se = !0, p.clearAll(void 0, !1), setTimeout(() => {
    X(e, n);
  }, 0), setTimeout(() => {
    se = !1;
  }, 390)), n.toastId;
}
const p = (e, t) => x(e, C.DEFAULT, t);
p.info = (e, t) => x(e, C.DEFAULT, {
  ...t,
  type: C.INFO
});
p.error = (e, t) => x(e, C.DEFAULT, {
  ...t,
  type: C.ERROR
});
p.warning = (e, t) => x(e, C.DEFAULT, {
  ...t,
  type: C.WARNING
});
p.warn = p.warning;
p.success = (e, t) => x(e, C.DEFAULT, {
  ...t,
  type: C.SUCCESS
});
p.loading = (e, t) => x(e, C.DEFAULT, ae(t, Me));
p.dark = (e, t) => x(e, C.DEFAULT, ae(t, {
  theme: z.DARK
}));
p.remove = (e) => {
  e ? A.dismiss(e) : A.clear();
};
p.clearAll = (e, t) => {
  pe(() => {
    A.clear(e, t);
  });
};
p.isActive = (e) => {
  let t = !1;
  return t = Be().findIndex((n) => n.toastId === e) > -1, t;
};
p.update = (e, t = {}) => {
  setTimeout(() => {
    const n = ct(e);
    if (n) {
      const a = N(n), {
        content: o
      } = a, s = {
        ...a,
        ...t,
        toastId: t.toastId || e,
        updateId: Pe()
      }, i = s.render || o;
      delete s.render, x(i, s.type, s);
    }
  }, 0);
};
p.done = (e) => {
  p.update(e, {
    isLoading: !1,
    progress: 1
  });
};
p.promise = Pt;
function Pt(e, {
  pending: t,
  error: n,
  success: a
}, o) {
  var s, i, f;
  let l;
  const c = {
    ...o || {},
    autoClose: !1
  };
  t && (l = fe(t) ? p.loading(t, c) : p.loading(t.render, {
    ...c,
    ...t
  }));
  const h = {
    autoClose: (s = o?.autoClose) != null ? s : !0,
    closeOnClick: (i = o?.closeOnClick) != null ? i : !0,
    closeButton: (f = o?.autoClose) != null ? f : null,
    isLoading: void 0,
    draggable: null,
    delay: 100
  }, d = (y, u, b) => {
    if (u == null) {
      p.remove(l);
      return;
    }
    const T = {
      type: y,
      ...h,
      ...o,
      data: b
    }, g = fe(u) ? {
      render: u
    } : u;
    return l ? p.update(l, {
      ...T,
      ...g,
      isLoading: !1
    }) : p(g.render, {
      ...T,
      ...g,
      isLoading: !1
    }), b;
  }, r = q(e) ? e() : e;
  return r.then((y) => {
    d("success", a, y);
  }).catch((y) => {
    d("error", n, y);
  }), r;
}
p.POSITION = J;
p.THEME = z;
p.TYPE = C;
p.TRANSITIONS = He;
const xt = {
  install(e, t = {}) {
    ut.useHandler = t.useHandler || (() => {
    }), kt(t);
  }
};
typeof window < "u" && (window.Vue3Toastify = xt);
function kt(e = {}) {
  const t = ae(Ne, e);
  ft(t);
}
const Mt = {
  key: 0,
  class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10 flex items-center gap-4"
}, Bt = { class: "flex-grow" }, qt = ["innerHTML"], zt = { class: "flex items-center gap-2" }, Rt = { key: 0 }, Ft = ["innerHTML"], Ut = { key: 1 }, Dt = ["innerHTML"], jt = { key: 1 }, Ht = ["innerHTML"], Gt = /* @__PURE__ */ G({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = $("Ni"), n = $(0), a = $(20), o = $({
      html: {
        table: null,
        search_panel: null,
        form_button: null,
        // Added new property for the button
        suggestion_button: null
        // Added property for the 2nd button
      }
    }), s = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_product_list",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function i() {
      const d = p.loading("Generating search suggestions...");
      try {
        const r = await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=generate_search_suggestion", {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${s.token}`
          },
          body: JSON.stringify({})
        }), y = await r.json();
        console.log("Generate Suggestions Response:", y), r.ok ? p.update(d, {
          render: "Success! Suggestions generated.",
          type: "success",
          isLoading: !1,
          autoClose: 3e3
        }) : p.update(d, {
          render: "Operation failed. Please check the console.",
          type: "error",
          isLoading: !1,
          autoClose: 3e3
        });
      } catch (r) {
        console.error("API Error:", r), p.update(d, {
          render: "Network error occurred.",
          type: "error",
          isLoading: !1,
          autoClose: 3e3
        });
      }
    }
    async function f() {
      const d = p.loading("Generating attributes...");
      try {
        const y = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=gen_attribute_from_products", {
          method: "POST",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${s.token}`
          },
          body: JSON.stringify({ collection: "products" })
        })).json();
        console.log("Generate Attributes Response:", y), y.success ? p.update(d, {
          render: `Success! Processed ${y.data.products_processed} products.`,
          type: "success",
          isLoading: !1,
          autoClose: 3e3
        }) : p.update(d, {
          render: "Operation failed. Please check the console.",
          type: "error",
          isLoading: !1,
          autoClose: 3e3
        });
      } catch (r) {
        console.error("API Error:", r), p.update(d, {
          render: "Network error occurred.",
          type: "error",
          isLoading: !1,
          autoClose: 3e3
        });
      }
    }
    async function l(d, r = 1, y = 20) {
      try {
        const u = await fetch(s.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${s.token}`
          },
          body: JSON.stringify({
            q: d,
            page: r,
            per_page: y
          })
        });
        if (!u.ok)
          throw new Error(`API error: ${u.status}`);
        return await u.json();
      } catch (u) {
        return console.error("Error fetching product list:", u), null;
      }
    }
    function c(d) {
      return !d || !d.success || !d.data || !d.data.products ? [] : d.data.products.map((r, y) => {
        const u = Math.min(...r.variant_prices), b = Math.max(...r.variant_prices), T = u === b ? `₹${u}` : `₹${u} - ₹${b}`;
        return {
          id: r.id,
          sku: `SKU-${r.id.slice(0, 8)}`,
          name: `<a href="#" class="text-blue-600 hover:underline font-medium">${r.title}</a>`,
          brand: `<span class="font-semibold text-gray-700">${r.brand}</span>`,
          category: r.category.join(", "),
          price: T,
          stock: r.variant_prices.length,
          rating: r._relevance_score ? (r._relevance_score * 5).toFixed(1) : "N/A",
          slug: `<span class="inline-flex items-center justify-center px-2 py-1 rounded text-xs font-bold border border-transparent bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">${r.category[0] || "Product"}</span>`
        };
      });
    }
    async function h(d, r, y = 1) {
      const u = await l(r, y, a.value);
      if (u && u.success) {
        const b = c(u);
        try {
          if (!(b.length > 0))
            throw new Error("no more data..");
        } catch {
          return;
        }
        const { found: T, total_pages: g, search_time_ms: v } = u.data;
        d._$p.data.curr.data.table.rows = b, he("msg", {
          type: "load_more",
          _p: d._p,
          _$p: d._$p,
          custom: {
            searchText: r,
            page: y,
            totalPages: g,
            found: T
          },
          where: {
            key: "id",
            value: "3e1bc78c-104f-4f6f-aa87-75"
          }
        });
      }
    }
    return me(() => {
      (async () => {
        let d = "", r = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-75",
              type: "table",
              slug: "table",
              data: {
                theme: e._$p.data.curr.data.theme,
                //"light",
                foo: {
                  txt: ""
                },
                config: {
                  search: {
                    placeholder: "Search Products (e.g., Nike shirts, Adidas shoes)...",
                    field: "name"
                  },
                  filter: {
                    label: "All Categories",
                    field: "category"
                  },
                  filterOptions: [
                    "Men",
                    "Women",
                    "Footwear",
                    "Apparel",
                    "Accessories"
                  ]
                },
                table: {
                  columns: [
                    {
                      title: "Product ID",
                      field: "id",
                      width: 150,
                      headerSort: !1
                    },
                    {
                      title: "Product Name",
                      field: "name",
                      widthGrow: 3,
                      minWidth: 250,
                      formatter: "html"
                    },
                    {
                      title: "Brand",
                      field: "brand",
                      widthGrow: 1,
                      minWidth: 120,
                      formatter: "html"
                    },
                    {
                      title: "Category",
                      field: "category",
                      widthGrow: 1,
                      minWidth: 150
                    },
                    {
                      title: "Price",
                      field: "price",
                      width: 140,
                      hozAlign: "right"
                    },
                    {
                      title: "Type",
                      field: "slug",
                      formatter: "html",
                      widthGrow: 1,
                      minWidth: 110,
                      hozAlign: "center"
                    }
                  ],
                  rows: []
                  //apiRows
                }
              }
            },
            {
              id: "3e1bc78c-aa87-search-panel",
              type: "search_panel",
              slug: "search_panel",
              data: {
                data: "",
                placeholder: "Search..",
                show_sugg: !1,
                size: "sm",
                class: "p-1 max-w-lg",
                sugg: [],
                map: {
                  title: "title",
                  label: "type"
                }
              }
            },
            // --- COMPONENT 1: The original button ---
            {
              id: "38c-form_button",
              type: "form_button",
              slug: "form_button",
              data: {
                data: "Generate Attributes",
                label: "product attr",
                size: "normal",
                variant: "filled"
              }
            },
            // --- COMPONENT 2: Added suggestion button ---
            {
              id: "38c-suggestion_button",
              type: "form_button",
              slug: "form_button",
              data: {
                data: "Generate Suggestions",
                label: "Gen Suggestions",
                size: "normal",
                variant: "tonal"
              }
            }
            // -----------------------------------------------------------
          ]
        };
        const y = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, u = await De(y), b = await je(y);
        (async () => Ue("msg", async (g) => {
          if (console.log("[ce_listen]", g), g._$p?.data?.curr?.id === "38c-form_button") {
            await f();
            return;
          }
          if (g._$p?.data?.curr?.id === "38c-suggestion_button") {
            await i();
            return;
          }
          if (g.type == "load_more" && g._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (n.value += 1, h(g, t.value, n.value)), g.type == "search:query" && g._$p.data.curr.id == "3e1bc78c-aa87-search-panel") {
            he("msg", {
              type: "remove_all_rows",
              custom: {},
              where: {
                key: "id",
                value: "3e1bc78c-104f-4f6f-aa87-75"
              }
            }), n.value = 1, t.value = g._p.query;
            let v = JSON.parse(JSON.stringify({
              data: {
                curr: r.l[0]
              }
            }));
            h({
              _$p: v,
              _p: e._p
            }, t.value, n.value);
          }
        }))(), await (async () => {
          const g = await u.set({
            data: r,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          d = g.style, o.value.html.table = g.r[0] || "", o.value.html.search_panel = g.r[1] || "", o.value.html.form_button = g.r[2] || "", o.value.html.suggestion_button = g.r[3] || "";
          const v = document.createElement("style");
          document.head.appendChild(v), v.innerHTML = d, setTimeout(async () => {
            const I = await b.set({
              data: r
            });
            console.log(I);
          }, 20);
        })();
      })();
    }), (d, r) => (D(), U(Ee, null, [
      o.value.html.search_panel ? (D(), U("div", Mt, [
        B("div", Bt, [
          B("div", {
            innerHTML: o.value.html.search_panel
          }, null, 8, qt)
        ]),
        B("div", zt, [
          o.value.html.form_button ? (D(), U("div", Rt, [
            B("div", {
              innerHTML: o.value.html.form_button
            }, null, 8, Ft)
          ])) : V("", !0),
          o.value.html.suggestion_button ? (D(), U("div", Ut, [
            B("div", {
              innerHTML: o.value.html.suggestion_button
            }, null, 8, Dt)
          ])) : V("", !0)
        ])
      ])) : V("", !0),
      o.value.html.table ? (D(), U("div", jt, [
        B("div", {
          innerHTML: o.value.html.table
        }, null, 8, Ht)
      ])) : V("", !0)
    ], 64));
  }
}), Wt = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const a = ve(Gt, {
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
    return a.mount(s), o;
  }
});
export {
  Wt as hydrator,
  Wt as index
};
