import { d as O, r as x, o as f, c as y, a as w, b as F, w as ee, e as c, f as te, v as ae, g as se, n as z, t as $, F as L, h as R, i as re, m as ne, j as le, k as N, l as A, p as oe, q as ie } from "./runtime-dom.esm-bundler-BDY_gRt8.js";
const S = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), V = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), H = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, a = document.getElementById(e.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((l) => {
        const n = (s) => {
          ((i) => {
            const o = i.getAttribute("data-ce");
            if (!o)
              return;
            const p = JSON.parse(o).filter((d) => d?.k.startsWith("t-"));
            if (p.length != 0)
              for (const d of p) {
                const g = d.k, m = d.v.split(" ");
                if (g == `t-${t}-class`)
                  for (const v of m)
                    i.classList.add(v);
                else
                  for (const v of m)
                    i.classList.remove(v);
              }
          })(s);
        };
        for (const s of l.getElementsByTagName("*"))
          n(s);
        n(l);
      })(a);
    } catch (t) {
      const a = `err: [theme] ${t}`;
      throw console.log(a), a;
    }
  }
});
function B(e, t = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((l) => {
    const n = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(s), l());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, s = setInterval(() => {
      n();
    }, t);
    n();
  });
}
let ce = class {
  listeners = {};
  on = (e, t) => ((this.listeners[e] ||= []).push(t), () => this.off(e, t));
  off = (e, t) => {
    this.listeners[e] = this.listeners[e]?.filter((a) => a !== t);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...t) => {
    for (const a of this.listeners[e] ?? [])
      await a(...t);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...t) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((a) => a(...t))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...t) => {
    for (const a of this.listeners[e] ?? [])
      try {
        await a(...t);
      } catch (l) {
        this.listeners.error?.forEach(
          (n) => n(l)
        );
      }
  };
};
const E = () => new ce();
class D {
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
let _ = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [a, l] of t.entries()) {
        const n = l, s = `${n.name}:${e.run_from}`, i = `${e.run_from}_src`;
        let o = n[i];
        const p = `${e.run_from}_src`;
        let d = e?.lazy_lib?.[p] || null;
        if (d && (d = d.replace("{*}", `${n.name}`)), console.log(`_lazy_src: ${d}`), console.log(`_src: ${o}`), _.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && _.lib.inbuilt_lib.indexOf(`${n.name}`) === -1)
            if (d)
              o = d;
            else
              throw `[lib-name=${n.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const g = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            _.lib.l[`${s}`] = {
              lib: g,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const g = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            _.lib.l[`${s}`] = {
              lib: g,
              src: o
            };
          }
        }
      }
      console.log(await _.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return _.lib.l.hasOwnProperty(`${a}`) == !1 && await _.lib.set({
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
      }), t = _.lib.l[`${a}`], t;
    },
    get_all: async (e) => _.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const l = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), l.indexOf(e.type) !== -1)
        for (const [n, s] of l.entries()) {
          let i = n == 0 ? "" : "/";
          if (t += `${i}${s}`, s == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [n, s] of l.entries()) {
          let i = n == 0 ? "" : "/";
          if (t += `${i}${s}`, s == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const U = E(), q = E(), de = U.on, ue = U.emit, pe = q.emit;
q.on;
const he = async (e) => {
  const t = await V();
  return await _.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const l = new D();
      l.start();
      let n = a.data?.value?.l || a.data.l, s = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return a.return.r == "full" ? s.r = "" : s.r = [], await (async () => {
        for (const i of n) {
          const o = await await _.lib.get({ name: i.type, run_from: "renderer", lazy_lib: e.lazy_lib }), p = await (await o.lib.index({
            f: {
              name: (d) => t.f.name({ id: i.id, name: d }),
              get_lib: async (d) => await await _.lib.get({ name: d.name, run_from: d.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (d) => await (await H()).set(d),
              path: (d) => _.path.set({ src: o.src, type: i.type, name: d }),
              //set..
              uuid: () => S().set(),
              wait_until: B
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? s.r += p?.r || "" : s.r.push(p?.r || ""), s.style += p?.style || "", s.head += p?.head || "";
        }
      })(), l.stop(), s.benchmark = l.result(), s;
    }
  };
}, me = async (e) => {
  const t = await V();
  return await _.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const l = new D();
      l.start();
      let n = {
        r: "",
        style: ""
      }, s = {
        style_id: `${S().set()}_stl`
      }, i = a.data?.value?.l || a.data.l;
      const o = async () => {
        for (const p of i) {
          const d = await await _.lib.get({ name: p.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), g = d.lib, m = E(), v = m.on, C = await (await g.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (b) => t.f.name({ id: p.id, name: b }),
              get_lib: async (b) => await await _.lib.get({ name: b.name, run_from: b.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (b) => await (await H()).set(b),
              path: (b) => _.path.set({ src: d.src, type: p.type, name: b }),
              //set..
              uuid: () => S().set(),
              wait_until: B,
              //set..
              call: pe,
              listen: v,
              //set..
              new_emitter: () => E()
            }
          })).set(
            {
              data: {
                curr: p
              }
            }
            /*_$cb*/
          );
          de("msg", async (b) => {
            try {
              if (Object.keys(b.where || {}).length == 0) {
                await m.emit("msg", b);
                return;
              }
            } catch {
            }
            try {
              if (p?.[b.where?.key || ""] == b.where?.value) {
                await m.emit("msg", b);
                return;
              }
            } catch {
            }
          }), n.style += C.style;
        }
      };
      await B(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((p) => {
          const d = document.getElementById(`${s.style_id}`);
          d && d.remove();
          const g = document.createElement("style");
          g.id = `${s.style_id}`, g.innerHTML = `${n.style}`, p.appendChild(g);
        })(document.head);
      } catch (p) {
        console.log(`${p}, Failed to set style..`);
      }
      return l.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: l.result()
      };
    }
  };
}, ge = ["innerHTML"], fe = /* @__PURE__ */ O({
  __name: "ContentEngine",
  props: {
    ce_file: {}
  },
  setup(e, { expose: t }) {
    const a = x({
      ce_file: e.ce_file
      //route?.meta?.ce_file,
    });
    t({
      ce_call: ue
    });
    const l = x(null), n = x(null);
    let s = "";
    return (async () => {
      try {
        if (typeof a.value.ce_file == "string") {
          const v = await (await fetch(a.value.ce_file)).json();
          l.value = v;
        } else
          l.value = a.value.ce_file;
      } catch (m) {
        console.log(m);
        return;
      }
      let i = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, o = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      i = l.value.data, o.lazy_lib = l.value.config.lazy_lib;
      const p = await he(o), d = await me(o);
      await (async () => {
        const m = await p.set({
          data: i
        });
        n.value = m.r, s = m.style;
        const v = document.createElement("style");
        document.head.appendChild(v), v.innerHTML = s, setTimeout(async () => {
          await d.set({
            data: i
          });
        }, 10);
      })();
    })(), (i, o) => n.value ? (f(), y("div", {
      key: 0,
      innerHTML: n.value
    }, null, 8, ge)) : w("", !0);
  }
});
function be(e, t) {
  return t.split(".").reduce((a, l) => a?.[l], e);
}
function ye(e, t) {
  const { open: a, close: l } = t, n = [];
  let s = 0;
  for (; s < e.length; ) {
    const i = e.indexOf(a, s);
    if (i === -1) {
      n.push({ type: "text", value: e.slice(s) });
      break;
    }
    i > s && n.push({ type: "text", value: e.slice(s, i) });
    const o = e.indexOf(l, i + a.length);
    if (o === -1)
      throw new Error(`Unclosed template placeholder starting at ${i}`);
    const p = e.slice(i + a.length, o).trim(), [d, g] = p.split("=");
    n.push({ type: "param", value: d, defaultValue: g }), s = o + l.length;
  }
  return n;
}
function _e(e, t, a) {
  const l = /* @__PURE__ */ new Set(), n = e.map((s) => {
    if (s.type === "text") return s.value;
    const i = be(t, s.value);
    if (l.add(s.value.split(".")[0]), i === void 0 || i === "") {
      if (s.defaultValue !== void 0) return s.defaultValue;
      if (a.strict) throw new Error(`Missing param: ${s.value}`);
      return "";
    }
    return a.encode ? encodeURIComponent(String(i)) : String(i);
  }).join("");
  if (a.strict) {
    for (const s of Object.keys(t))
      if (!l.has(s))
        throw new Error(`Unused param provided: ${s}`);
  }
  return n;
}
function W(e, t) {
  const a = {
    open: t?.open ?? "{",
    close: t?.close ?? "}",
    encode: t?.encode ?? !1,
    strict: t?.strict ?? !1
  }, l = ye(e, a);
  return (n) => _e(l, n, a);
}
const ve = { class: "min-h-screen bg-white text-slate-900 dark:bg-[#0b1120] dark:text-slate-100" }, xe = {
  key: 0,
  class: "sticky top-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 transition-all duration-300"
}, we = { class: "max-w-360 mx-auto px-4 py-3 md:px-8 md:py-4 flex gap-4 items-center" }, ke = {
  class: "flex-1 relative group",
  role: "search"
}, $e = ["disabled"], Ce = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "size-6"
}, Te = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "size-6"
}, ze = {
  key: 1,
  class: "max-w-360 mx-auto px-4 md:px-8 py-1 space-y-4"
}, Ee = ["onClick"], je = { class: "p-2 md:p-2.5 pb-0" }, Me = { class: "aspect-4/5 relative bg-[#f4f6f8] dark:bg-slate-800 rounded-xl overflow-hidden" }, Le = ["src", "alt"], Ie = {
  key: 0,
  class: "absolute bottom-2 left-2 bg-red-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-md font-bold shadow-sm"
}, Se = { class: "p-3 md:p-4 flex flex-col flex-1 gap-1" }, Be = { class: "flex items-baseline gap-2 mb-1" }, Oe = { class: "text-lg md:text-xl font-black text-slate-900 dark:text-white leading-none" }, Pe = {
  key: 0,
  class: "text-xs text-slate-400 line-through decoration-slate-400/50"
}, Re = { class: "text-[11px] font-bold text-slate-400 uppercase tracking-wider" }, Ne = { class: "text-[13px] leading-snug text-slate-700 dark:text-slate-300 font-medium line-clamp-2 min-h-[2.5em]" }, Ae = ["onClick"], We = {
  key: 0,
  class: "flex gap-2"
}, Fe = {
  key: 2,
  class: "max-w-360 mx-auto px-4 md:px-8 py-4 space-y-4"
}, Ve = {
  key: 0,
  class: "h-8 w-40 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"
}, He = {
  key: 3,
  class: "flex flex-col items-center justify-center py-20 px-4"
}, I = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500", De = /* @__PURE__ */ O({
  __name: "productsearch",
  props: {
    _p: {},
    _$p: {},
    _$cb: {},
    toggleTheme: { type: Function },
    isDark: {}
  },
  setup(e) {
    const t = e, a = t._$p.data.curr.data.value.l || [], l = x([...a]), n = x(!1), s = x(null), i = x(1), o = x("nike"), p = x(1), d = x(!1), g = x(null), m = x(null), v = async (h = !1) => {
      if (i.value > p.value) return;
      const r = t._$p.data.curr.data.api, u = W(JSON.stringify(r.body), { open: "<", close: ">" }), k = JSON.parse(u({ page: i.value, q: o.value }));
      if (k.page = Number(k.page), console.log("binded body updated", k), !o.value.trim()) return console.warn("Please enter a search query.");
      try {
        h ? d.value = !0 : n.value = !0;
        const P = await (await fetch(r.url, {
          method: r.method,
          headers: r.headers,
          body: JSON.stringify(k)
        })).json();
        p.value = P.data.total_pages;
        const M = P.data.products || [];
        i.value === 1 ? o.value.trim() ? l.value = M : l.value = [...a, ...M] : l.value = [...l.value, ...M];
      } catch (T) {
        console.error("Error fetching products:", T);
      } finally {
        n.value = !1, d.value = !1;
      }
    };
    let C = null;
    const b = async () => {
      await le();
      const h = t._$p.data.curr.data.oriantation === "h";
      C?.disconnect(), m.value && (m.value.onscroll = null), h && m.value && (m.value.onscroll = () => {
        const r = m.value;
        r.scrollLeft + r.clientWidth >= r.scrollWidth - 10 && i.value < p.value && !n.value && !d.value && (i.value++, v(!0));
      }), !h && g.value && (C = new IntersectionObserver(([r]) => {
        r.isIntersecting && i.value < p.value && !n.value && !d.value && (i.value++, v(!0));
      }, { threshold: 0.1 }), C.observe(g.value));
    };
    F(b), ee(l, b);
    const J = x({
      cart_popup: {
        ce_file: t._$p.data.curr.data.cart_popup.ce_file
      }
    }), j = async () => {
      i.value = 1, p.value = 1, o.value.trim() ? l.value = [] : l.value = [...a], await v(!1);
    }, K = () => {
      o.value = "", document.getElementById("site-search")?.focus(), j();
    }, Z = (h) => {
      try {
        const u = h.metadata;
        if (u.color?.[0]?.image?.[0]?.url && !u.color[0].image[0].url.includes("example"))
          return u.color[0].image[0].url;
      } catch {
      }
      const r = h.title ? h.title.toLowerCase() : "";
      return r.includes("dress") ? "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" : r.includes("shirt") || r.includes("top") ? "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" : r.includes("shoe") || r.includes("sneaker") ? "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" : r.includes("bag") ? "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" : I;
    }, G = (h) => {
      const r = h.target;
      r.src !== I && (r.src = I);
    }, Q = (h) => {
      if (!h.slug && !h.id) return;
      const u = W(t._$p.data.curr.data.event.onProductClick)({
        id: h.id,
        slug: h.slug
      });
      location.href = u;
    }, X = (h) => {
      s.value.ce_call("msg", {
        type: "product:open",
        custom: {
          product_id: h.slug
        },
        _p: {},
        _$p: {}
      });
    }, Y = (h) => {
      const r = h.currentTarget;
      r.classList.toggle("text-red-500"), r.classList.toggle("bg-red-50");
    };
    return (h, r) => (f(), y(L, null, [
      c("div", ve, [
        e._$p.data.curr.data.mode == "normal" ? (f(), y("header", xe, [
          c("div", we, [
            c("div", ke, [
              r[3] || (r[3] = c("svg", {
                class: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                c("circle", {
                  cx: "11",
                  cy: "11",
                  r: "8"
                }),
                c("line", {
                  x1: "21",
                  y1: "21",
                  x2: "16.65",
                  y2: "16.65"
                })
              ], -1)),
              te(c("input", {
                id: "site-search",
                "onUpdate:modelValue": r[0] || (r[0] = (u) => o.value = u),
                onKeyup: se(j, ["enter"]),
                type: "text",
                placeholder: "Search premium brands, styles...",
                class: "w-full h-11 md:h-12 pl-12 pr-10 bg-gray-100 dark:bg-slate-800 border-2 border-transparent focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 rounded-2xl text-[15px] outline-none transition-all duration-200 placeholder:text-slate-400 dark:text-white shadow-sm"
              }, null, 544), [
                [ae, o.value]
              ]),
              o.value ? (f(), y("button", {
                key: 0,
                class: "absolute right-3 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-slate-700 text-slate-500 hover:text-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors",
                onClick: K
              }, "✕")) : w("", !0)
            ]),
            c("button", {
              disabled: !o.value.trim(),
              class: "hidden md:block disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 active:scale-95 transition-all",
              onClick: j
            }, " SEARCH ", 8, $e),
            c("button", {
              onClick: r[1] || (r[1] = //@ts-ignore
              (...u) => t.toggleTheme && t.toggleTheme(...u)),
              class: "p-3 rounded-2xl bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors active:scale-95"
            }, [
              t.isDark ? (f(), y("svg", Te, [...r[5] || (r[5] = [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                }, null, -1)
              ])])) : (f(), y("svg", Ce, [...r[4] || (r[4] = [
                c("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                }, null, -1)
              ])]))
            ])
          ])
        ])) : w("", !0),
        l.value.length > 0 ? (f(), y("div", ze, [
          t._$p.data.curr.data.title ? (f(), y("h2", {
            key: 0,
            class: z(t._$p.data.curr.data.title.class)
          }, $(t._$p.data.curr.data.title.value), 3)) : w("", !0),
          c("ul", {
            ref_key: "listContainer",
            ref: m,
            class: z(t._$p.data.curr.data.oriantation === "v" ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 list-none" : "flex gap-3 overflow-x-auto py-2 list-none")
          }, [
            (f(!0), y(L, null, R(l.value, (u, k) => (f(), y("li", {
              key: u.slug + k,
              class: "group shrink-0 w-60 md:w-65 bg-white dark:bg-[#1e293b] rounded-2xl flex flex-col relative cursor-pointer border border-transparent hover:border-blue-100 dark:hover:border-slate-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300",
              onClick: (T) => Q(u)
            }, [
              c("div", je, [
                c("div", Me, [
                  c("img", {
                    src: Z(u),
                    loading: "lazy",
                    alt: u.title,
                    onError: G,
                    class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal"
                  }, null, 40, Le),
                  u.variant_mrp[0] > u.variant_prices[0] ? (f(), y("span", Ie, " -" + $(Math.round((u.variant_mrp[0] - u.variant_prices[0]) / u.variant_mrp[0] * 100)) + "% ", 1)) : w("", !0),
                  c("button", {
                    class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-white transition-all scale-0 group-hover:scale-100",
                    onClick: N(Y, ["stop"])
                  }, [...r[6] || (r[6] = [
                    c("svg", {
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2"
                    }, [
                      c("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
                    ], -1)
                  ])])
                ])
              ]),
              c("div", Se, [
                c("div", Be, [
                  c("span", Oe, $(new Intl.NumberFormat("ru-RU").format(u.variant_prices[0])) + " ₽ ", 1),
                  u.variant_mrp[0] > u.variant_prices[0] ? (f(), y("span", Pe, $(new Intl.NumberFormat("ru-RU").format(u.variant_mrp[0])), 1)) : w("", !0)
                ]),
                r[8] || (r[8] = A('<div class="flex items-center gap-2 mb-1.5"><span class="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1"><span class="w-1 h-1 rounded-full bg-green-500"></span> Ozon Card </span><div class="flex items-center gap-1 text-[10px] text-slate-400"><span class="text-amber-400">★</span> 4.9 (128) </div></div>', 1)),
                c("div", Re, $(u.brand), 1),
                c("h3", Ne, $(u.title), 1),
                c("button", {
                  class: "mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn",
                  onClick: N((T) => X(u), ["stop"])
                }, [...r[7] || (r[7] = [
                  c("span", null, "Add to Cart", -1),
                  c("svg", {
                    class: "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    c("path", { d: "M5 12h14M12 5l7 7-7 7" })
                  ], -1)
                ])], 8, Ae)
              ])
            ], 8, Ee))), 128)),
            c("li", {
              ref_key: "loadTrigger",
              ref: g,
              class: z(t._$p.data.curr.data.oriantation === "h" ? "group shrink-0 w-60 md:w-65 bg-white dark:bg-[#1e293b] rounded-2xl flex items-center justify-center border border-transparent" : "col-span-full h-20 flex justify-center items-center w-full")
            }, [
              d.value ? (f(), y("div", We, [...r[9] || (r[9] = [
                c("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce" }, null, -1),
                c("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]" }, null, -1),
                c("div", { class: "w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]" }, null, -1)
              ])])) : w("", !0)
            ], 2)
          ], 2)
        ])) : n.value && o.value.trim() ? (f(), y("div", Fe, [
          t._$p.data.curr.data.title ? (f(), y("div", Ve)) : w("", !0),
          c("div", {
            class: z(t._$p.data.curr.data.oriantation === "h" ? "flex gap-3 overflow-x-auto py-2" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6")
          }, [
            (f(), y(L, null, R(10, (u) => c("div", {
              key: u,
              class: "shrink-0 w-60 md:w-65 bg-white dark:bg-[#1e293b] rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-slate-800"
            }, [...r[10] || (r[10] = [
              A('<div class="aspect-4/5 bg-gray-200 dark:bg-slate-700 rounded-xl mb-3 animate-pulse"></div><div class="space-y-2"><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/3 animate-pulse"></div><div class="h-4 bg-gray-200 dark:bg-slate-700 rounded w-full animate-pulse"></div><div class="h-8 bg-gray-200 dark:bg-slate-700 rounded-lg mt-2 animate-pulse"></div></div>', 2)
            ])])), 64))
          ], 2)
        ])) : (f(), y("div", He, [
          r[11] || (r[11] = c("div", { class: "w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-4" }, "🔍", -1)),
          r[12] || (r[12] = c("h3", { class: "text-xl font-bold text-slate-900 dark:text-white mb-2" }, "No results found", -1)),
          r[13] || (r[13] = c("p", { class: "text-slate-500 mb-6 text-center max-w-md" }, "We couldn't find anything matching your search. Try checking for typos or use broader keywords.", -1)),
          c("button", {
            class: "bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors",
            onClick: r[2] || (r[2] = (u) => o.value = "")
          }, "Clear Filters")
        ]))
      ]),
      re(fe, ne({
        ref_key: "cartPopupRef",
        ref: s
      }, { ce_file: J.value.cart_popup.ce_file }), null, 16)
    ], 64));
  }
}), Ue = /* @__PURE__ */ O({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    e._$p.data.curr.data.mode = e._$p.data.curr.data.mode || "normal";
    const t = x(!0), a = (n) => {
      document.documentElement.classList.toggle("dark", n), localStorage.setItem("theme", n ? "dark" : "light"), t.value = n;
    }, l = () => {
      a(!t.value);
    };
    return F(() => {
      const n = localStorage.getItem("theme"), s = n === "dark" || !n && window.matchMedia("(prefers-color-scheme: dark)").matches;
      a(s);
    }), (n, s) => (f(), oe(De, {
      _p: e._p,
      _$p: e._$p,
      _$cb: e._$cb,
      toggleTheme: l,
      isDark: t.value
    }, null, 8, ["_p", "_$p", "_$cb", "isDark"]));
  }
}), Je = async (e) => ({
  set: async (t, a) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const n = ie(Ue, {
      _p: e,
      _$p: t,
      _$cb: a
    }), s = e.f.name("vue-root"), i = {
      r: `<div id="${s}" style="width:100%; height:100%;"></div>`,
      style: "",
      evt: {
        change: () => {
          a?.change({ _$p: t });
        }
      }
    };
    return setTimeout(() => {
      const o = document.getElementById(s);
      o ? n.mount(o) : console.error(`Hydrator Error: Element #${s} not found.`);
    }, 0), i;
  }
});
export {
  Je as hydrator,
  Je as index
};
