import { r as G, o as m, c as f, a as s, F as j, b as T, u as v, t as $, d as X, e as L, f as Y, g as Z, w as K, h as I, i as z, n as M, j as C, k as Q, l as O, T as ee, m as te, p as ne, q as se, s as ie } from "./runtime-dom.esm-bundler-5O696vqa.js";
const c = G({
  availableModules: [
    {
      id: "carousel",
      label: "Carousel",
      type: "carousel",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/carousel/dist/data.json"
    },
    {
      id: "collage",
      label: "Collage",
      type: "collage",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/collage/dist/data.json"
    },
    {
      id: "cart_popup",
      label: "Cart Popup",
      type: "cart_popup",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/cart_popup/dist/data.json"
    },
    {
      id: "admin_coupon_upsert",
      label: "Admin Coupon Upsert",
      type: "admin_coupon_upsert",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_coupon_upsert/dist/data.json"
    },
    {
      id: "product_fav",
      label: "Product Favorite",
      type: "product_fav",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/product_fav/dist/data.json"
    }
  ],
  canvasModules: [],
  selectedId: null,
  dragOverIndex: null,
  fetchCache: {},
  // Cache fetched CE data to avoid re-fetching
  async addToCanvas(e, t = null) {
    let n = null;
    try {
      this.fetchCache[e.ce_file] ? n = this.fetchCache[e.ce_file] : (n = await (await fetch(e.ce_file)).json(), this.fetchCache[e.ce_file] = n), n.data.l[0].id = crypto.randomUUID();
    } catch (i) {
      console.error("CE fetch failed:", i);
      return;
    }
    const a = JSON.parse(JSON.stringify(n)), o = {
      uid: crypto.randomUUID(),
      // Unique ID for Vue 'key'
      type: e.type,
      slug: e.id,
      ce_file: e.ce_file,
      // USE THE CLONED DATA
      // Even if the original had "initialized: true" stuck to it from a previous
      // render, this clone is fresh (if the cache was clean) OR we rely on
      // the component to re-initialize because it's a new pointer.
      ce_config: a.config || {},
      ce_data: a.data?.l || [],
      minimized: !1,
      collapsed: !1,
      state: {
        theme: "light",
        env: "dev"
      },
      _created: Date.now()
    };
    t !== null && t >= 0 && t <= this.canvasModules.length ? this.canvasModules.splice(t, 0, o) : this.canvasModules.push(o), this.select(o.uid);
  },
  select(e) {
    this.selectedId = e;
  },
  update(e, t) {
    const n = this.canvasModules.find((a) => a.uid === e);
    n && Object.assign(n.state, t);
  },
  remove(e) {
    const t = this.canvasModules.findIndex((n) => n.uid === e);
    t !== -1 && (this.canvasModules.splice(t, 1), this.selectedId === e && (this.selectedId = null));
  },
  // Move module from one position to another
  moveModule(e, t) {
    const n = this.canvasModules.findIndex((i) => i.uid === e);
    if (n === -1 || t < 0 || t > this.canvasModules.length) return;
    const [a] = this.canvasModules.splice(n, 1), o = n < t ? t - 1 : t;
    this.canvasModules.splice(o, 0, a);
  },
  // Get the drop index based on position
  getDropIndex(e, t) {
    if (this.canvasModules.length === 0) return 0;
    const n = Array.from(t.querySelectorAll(".ce-parent"));
    for (let a = 0; a < n.length; a++) {
      const o = n[a].getBoundingClientRect(), i = o.top + o.height / 2;
      if (e < i)
        return a;
    }
    return this.canvasModules.length;
  },
  setDragOverIndex(e) {
    this.dragOverIndex = e;
  },
  clearDragOverIndex() {
    this.dragOverIndex = null;
  },
  // Clear cache if needed
  clearCache() {
    this.fetchCache = {};
  },
  moveUp(e) {
    const t = this.canvasModules.findIndex((n) => n.uid === e);
    if (t > 0) {
      const n = this.canvasModules[t - 1];
      this.canvasModules[t - 1] = this.canvasModules[t], this.canvasModules[t] = n;
    }
  },
  moveDown(e) {
    const t = this.canvasModules.findIndex((n) => n.uid === e);
    if (t !== -1 && t < this.canvasModules.length - 1) {
      const n = this.canvasModules[t + 1];
      this.canvasModules[t + 1] = this.canvasModules[t], this.canvasModules[t] = n;
    }
  },
  toggleMinimize(e) {
    const t = this.canvasModules.find((n) => n.uid === e);
    t && (t.minimized = !t.minimized, t.minimized && this.selectedId === e && (this.selectedId = null), t.minimized || this.select(e));
  }
}), oe = {
  "class-old": "w-full h-full border-r bg-gray-50 p-4 flex flex-col",
  class: "w-full h-full border-r border-r-gray-300 bg-gray-50 p-4 flex flex-col"
}, ae = { class: "space-y-2 flex-1 overflow-auto" }, le = ["onDragstart"], re = { class: "flex items-center gap-3" }, de = { class: "w-8 h-8 rounded-md bg-indigo-100 flex items-center justify-center" }, ce = {
  key: 0,
  class: "w-5 h-5 text-indigo-600",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, ue = {
  key: 1,
  class: "w-5 h-5 text-indigo-600",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, he = {
  key: 2,
  class: "w-5 h-5 text-indigo-600",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, me = { class: "text-sm font-medium text-gray-800 capitalize block" }, fe = { class: "text-xs text-gray-500" }, pe = { class: "mt-4 pt-4 border-t border-gray-200" }, ge = { class: "text-xs text-gray-500 space-y-1" }, ve = { class: "flex justify-between" }, ye = { class: "font-semibold text-gray-700" }, xe = { class: "flex justify-between" }, _e = { class: "font-semibold text-gray-700" }, we = { class: "mt-3 text-xs" }, be = { class: "mt-2 space-y-1 max-h-32 overflow-auto bg-gray-50 p-2 rounded" }, ke = {
  __name: "LeftPanel",
  setup(e) {
    function t(o, i) {
      i.dataTransfer.setData("module", JSON.stringify(o)), i.dataTransfer.effectAllowed = "copy", i.target.style.opacity = "0.5";
    }
    function n(o) {
      o.target.style.opacity = "1";
    }
    function a(o) {
      return c.canvasModules.filter((i) => i.type === o).length;
    }
    return (o, i) => (m(), f("aside", oe, [
      i[7] || (i[7] = s("div", { class: "mb-6" }, [
        s("h2", { class: "text-sm font-semibold text-gray-700 mb-1 tracking-wide" }, " COMPONENTS "),
        s("p", { class: "text-xs text-gray-500" }, " Drag to canvas. Add multiple instances of any component. ")
      ], -1)),
      s("div", ae, [
        (m(!0), f(j, null, T(v(c).availableModules, (d) => (m(), f("div", {
          key: d.id,
          draggable: "true",
          onDragstart: (r) => t(d, r),
          onDragend: n,
          class: "group flex items-center justify-between px-3 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-grab transition-all hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-md active:cursor-grabbing active:scale-95"
        }, [
          s("div", re, [
            s("div", de, [
              d.type === "carousel" ? (m(), f("svg", ce, [...i[0] || (i[0] = [
                s("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                }, null, -1)
              ])])) : d.type === "cart_popup" ? (m(), f("svg", ue, [...i[1] || (i[1] = [
                s("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                }, null, -1)
              ])])) : (m(), f("svg", he, [...i[2] || (i[2] = [
                s("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                }, null, -1)
              ])]))
            ]),
            s("div", null, [
              s("span", me, $(d.label), 1),
              s("span", fe, $(a(d.type)) + " in use ", 1)
            ])
          ]),
          i[3] || (i[3] = s("div", { class: "flex items-center gap-2" }, [
            s("span", { class: "text-xs text-gray-400 group-hover:text-indigo-600 transition font-medium" }, " DRAG "),
            s("svg", {
              class: "w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ])
          ], -1))
        ], 40, le))), 128))
      ]),
      s("div", pe, [
        s("div", ge, [
          s("div", ve, [
            i[4] || (i[4] = s("span", null, "Total components:", -1)),
            s("span", ye, $(v(c).canvasModules.length), 1)
          ]),
          s("div", xe, [
            i[5] || (i[5] = s("span", null, "Available types:", -1)),
            s("span", _e, $(v(c).availableModules.length), 1)
          ])
        ]),
        s("details", we, [
          i[6] || (i[6] = s("summary", { class: "cursor-pointer text-indigo-600 hover:text-indigo-800" }, " Debug: View all instances ", -1)),
          s("div", be, [
            (m(!0), f(j, null, T(v(c).canvasModules, (d) => (m(), f("div", {
              key: d.uid,
              class: "text-xs"
            }, [
              s("strong", null, $(d.type), 1),
              X(": " + $(d.uid.slice(0, 8)) + "... ", 1)
            ]))), 128))
          ])
        ])
      ])
    ]));
  }
}, N = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), R = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), A = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((a) => {
        const o = (i) => {
          ((d) => {
            const r = d.getAttribute("data-ce");
            if (!r)
              return;
            const u = JSON.parse(r).filter((h) => h?.k.startsWith("t-"));
            if (u.length != 0)
              for (const h of u) {
                const x = h.k, w = h.v.split(" ");
                if (x == `t-${t}-class`)
                  for (const b of w)
                    d.classList.add(b);
                else
                  for (const b of w)
                    d.classList.remove(b);
              }
          })(i);
        };
        for (const i of a.getElementsByTagName("*"))
          o(i);
        o(a);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function S(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((a) => {
    const o = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(i), a());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, i = setInterval(() => {
      o();
    }, t);
    o();
  });
}
let $e = class {
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
const B = () => new $e();
class U {
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
let y = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [n, a] of t.entries()) {
        const o = a, i = `${o.name}:${e.run_from}`, d = `${e.run_from}_src`;
        let r = o[d];
        const u = `${e.run_from}_src`;
        let h = e?.lazy_lib?.[u] || null;
        if (h && (h = h.replace("{*}", `${o.name}`)), console.log(`_lazy_src: ${h}`), console.log(`_src: ${r}`), y.lib.l.hasOwnProperty(`${i}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(r) && r.includes("/") == !1 && y.lib.inbuilt_lib.indexOf(`${o.name}`) === -1)
            if (h)
              r = h;
            else
              throw `[lib-name=${o.name},lib-src=${r}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (r.startsWith("./") || r.startsWith("../")) {
            const x = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${r}`
            );
            y.lib.l[`${i}`] = {
              lib: x,
              src: r
            };
          }
          if (r.startsWith("http://") || r.startsWith("https://")) {
            const x = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${r}`
            );
            y.lib.l[`${i}`] = {
              lib: x,
              src: r
            };
          }
        }
      }
      console.log(await y.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return y.lib.l.hasOwnProperty(`${n}`) == !1 && await y.lib.set({
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
      }), t = y.lib.l[`${n}`], t;
    },
    get_all: async (e) => y.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const a = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), a.indexOf(e.type) !== -1)
        for (const [o, i] of a.entries()) {
          let d = o == 0 ? "" : "/";
          if (t += `${d}${i}`, i == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [o, i] of a.entries()) {
          let d = o == 0 ? "" : "/";
          if (t += `${d}${i}`, i == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const W = B(), H = B(), Me = W.on;
W.emit;
const Ce = H.emit;
H.on;
const ze = async (e) => {
  const t = await R();
  return await y.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const a = new U();
      a.start();
      let o = n.data?.value?.l || n.data.l, i = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return n.return.r == "full" ? i.r = "" : i.r = [], await (async () => {
        for (const d of o) {
          const r = await await y.lib.get({ name: d.type, run_from: "renderer", lazy_lib: e.lazy_lib }), u = await (await r.lib.index({
            f: {
              name: (h) => t.f.name({ id: d.id, name: h }),
              get_lib: async (h) => await await y.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (h) => await (await A()).set(h),
              path: (h) => y.path.set({ src: r.src, type: d.type, name: h }),
              //set..
              uuid: () => N().set(),
              wait_until: S
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? i.r += u?.r || "" : i.r.push(u?.r || ""), i.style += u?.style || "", i.head += u?.head || "";
        }
      })(), a.stop(), i.benchmark = a.result(), i;
    }
  };
}, De = async (e) => {
  const t = await R();
  return await y.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const a = new U();
      a.start();
      let o = {
        r: "",
        style: ""
      }, i = {
        style_id: `${N().set()}_stl`
      }, d = n.data?.value?.l || n.data.l;
      const r = async () => {
        for (const u of d) {
          const h = await await y.lib.get({ name: u.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), x = h.lib, w = B(), b = w.on, k = await (await x.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (_) => t.f.name({ id: u.id, name: _ }),
              get_lib: async (_) => await await y.lib.get({ name: _.name, run_from: _.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (_) => await (await A()).set(_),
              path: (_) => y.path.set({ src: h.src, type: u.type, name: _ }),
              //set..
              uuid: () => N().set(),
              wait_until: S,
              //set..
              call: Ce,
              listen: b,
              //set..
              new_emitter: () => B()
            }
          })).set(
            {
              data: {
                curr: u
              }
            }
            /*_$cb*/
          );
          Me("msg", async (_) => {
            try {
              if (Object.keys(_.where || {}).length == 0) {
                await w.emit("msg", _);
                return;
              }
            } catch {
            }
            try {
              if (u?.[_.where?.key || ""] == _.where?.value) {
                await w.emit("msg", _);
                return;
              }
            } catch {
            }
          }), o.style += k.style;
        }
      };
      await S(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await r();
      try {
        ((u) => {
          const h = document.getElementById(`${i.style_id}`);
          h && h.remove();
          const x = document.createElement("style");
          x.id = `${i.style_id}`, x.innerHTML = `${o.style}`, u.appendChild(x);
        })(document.head);
      } catch (u) {
        console.log(`${u}, Failed to set style..`);
      }
      return a.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: a.result()
      };
    }
  };
}, Ie = ["data-uid"], Oe = {
  key: 0,
  class: "loading-state"
}, je = {
  key: 1,
  class: "error-state"
}, Ee = ["innerHTML"], Te = /* @__PURE__ */ L({
  __name: "ContentEngine",
  props: {
    _p: {},
    __p: {},
    module: {}
  },
  setup(e) {
    const t = z(""), n = z(!0), a = z(null);
    let o = null;
    const i = `ce-${e.module.uid}`, d = async () => {
      n.value = !0, a.value = null;
      try {
        const r = {
          l: [...e.module.ce_data]
          // Additional safety: spread the array
        };
        if (console.log(`[${i}] Initializing with data:`, {
          uid: e.module.uid,
          type: e.module.type,
          dataItems: r.l.length
        }), r.l.length === 0)
          throw new Error("No data available for this component");
        const u = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, h = await ze(u), x = await De(u), w = await h.set({
          data: r,
          return: {
            r: "chunk"
          }
        });
        console.log(`[${i}] Renderer response:`, {
          chunks: w.r?.length,
          hasStyle: !!w.style
        });
        let b = "";
        for (const k of w.r)
          typeof k == "string" && (b += `
          <div style="border:1px solid transparent; margin:4px; padding:4px;">
            ${k}
          </div>
        `);
        t.value = b, w.style && (o = document.createElement("style"), o.setAttribute("data-ce-instance", i), o.innerHTML = w.style, document.head.appendChild(o)), setTimeout(async () => {
          try {
            await x.set({
              data: r
            }), console.log(`[${i}] Hydration complete`);
          } catch (k) {
            console.error(`[${i}] Hydration error:`, k);
          }
        }, 10), n.value = !1;
      } catch (r) {
        console.error(`[${i}] Initialization error:`, r), a.value = r instanceof Error ? r.message : "Unknown error", n.value = !1;
      }
    };
    return Y(() => {
      d();
    }), Z(() => {
      o && o.parentNode && o.parentNode.removeChild(o);
    }), K(() => e.module.ce_data, () => {
      console.log(`[${i}] Data changed, reinitializing...`), d();
    }, { deep: !0 }), (r, u) => (m(), f("div", {
      class: "ce-wrapper",
      "data-uid": e.module.uid
    }, [
      n.value ? (m(), f("div", Oe, [
        u[0] || (u[0] = s("div", { class: "spinner" }, null, -1)),
        s("p", null, "Loading " + $(e.module.type) + "...", 1)
      ])) : a.value ? (m(), f("div", je, [
        u[1] || (u[1] = s("p", null, "Error loading component", -1)),
        s("small", null, $(a.value), 1)
      ])) : t.value ? (m(), f("div", {
        key: 2,
        innerHTML: t.value
      }, null, 8, Ee)) : I("", !0)
    ], 8, Ie));
  }
}), P = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, Be = /* @__PURE__ */ P(Te, [["__scopeId", "data-v-0617a5ac"]]), Ne = { class: "flex flex-col h-full w-full bg-gray-200 overflow-hidden" }, Se = { class: "h-12 bg-white border-b border-gray-300 flex items-center justify-center gap-4 px-4 shadow-sm z-20 flex-shrink-0" }, Le = { class: "ml-4 px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-600" }, Re = {
  key: 0,
  class: "flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-xl m-4"
}, Ae = {
  key: 0,
  class: "drop-indicator"
}, Ue = ["data-uid", "onDragstart", "onClick"], We = { class: "ce-actions" }, He = ["onClick"], Pe = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12"
}, Fe = {
  key: 1,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12"
}, Ve = ["onClick", "disabled"], Je = ["onClick", "disabled"], qe = ["onClick"], Ge = {
  key: 1,
  class: "drop-indicator"
}, Xe = /* @__PURE__ */ L({
  __name: "Canvas",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const t = z(1e3), n = z(!1), a = z(!1);
    let o = 0, i = 0;
    function d(g) {
      console.log(g), g.minimized ? g.minimized = !1 : g.minimized = !0;
    }
    function r(g) {
      t.value = g, n.value = !1;
    }
    function u() {
      n.value = !0;
    }
    function h(g) {
      a.value = !0, o = g.clientX, i = t.value, window.addEventListener("mousemove", x), window.addEventListener("mouseup", w), document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none";
    }
    function x(g) {
      if (!a.value) return;
      const l = g.clientX - o, p = i + l * 2;
      p >= 320 && p <= 2500 && (t.value = p);
    }
    function w() {
      a.value = !1, window.removeEventListener("mousemove", x), window.removeEventListener("mouseup", w), document.body.style.cursor = "", document.body.style.userSelect = "";
    }
    const b = z(null);
    let k = null;
    function _(g) {
      if (!b.value) return;
      const l = c.getDropIndex(g.clientY, b.value);
      c.setDragOverIndex(l);
    }
    function F(g) {
      g.target === b.value && c.clearDragOverIndex();
    }
    async function V(g) {
      g.preventDefault();
      const l = g.dataTransfer?.getData("module");
      if (l) {
        const p = JSON.parse(l);
        await c.addToCanvas(p, c.dragOverIndex);
      } else k && c.moveModule(k, c.dragOverIndex ?? c.canvasModules.length);
      c.clearDragOverIndex(), k = null;
    }
    function J(g, l) {
      k = g, l.dataTransfer.effectAllowed = "move", l.dataTransfer.setData("text/plain", g);
    }
    function q() {
      k = null, c.clearDragOverIndex();
    }
    return (g, l) => (m(), f("div", Ne, [
      s("div", Se, [
        l[8] || (l[8] = s("span", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2" }, "Screen Size", -1)),
        s("button", {
          onClick: l[0] || (l[0] = (p) => r(375)),
          class: M(["device-btn", { active: t.value === 375 }]),
          title: "Mobile"
        }, [...l[4] || (l[4] = [
          s("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            s("rect", {
              x: "5",
              y: "2",
              width: "14",
              height: "20",
              rx: "2",
              ry: "2"
            }),
            s("line", {
              x1: "12",
              y1: "18",
              x2: "12",
              y2: "18"
            })
          ], -1)
        ])], 2),
        s("button", {
          onClick: l[1] || (l[1] = (p) => r(768)),
          class: M(["device-btn", { active: t.value === 768 }]),
          title: "Tablet"
        }, [...l[5] || (l[5] = [
          s("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            s("rect", {
              x: "4",
              y: "2",
              width: "16",
              height: "20",
              rx: "2",
              ry: "2"
            }),
            s("line", {
              x1: "12",
              y1: "18",
              x2: "12",
              y2: "18"
            })
          ], -1)
        ])], 2),
        s("button", {
          onClick: l[2] || (l[2] = (p) => r(1280)),
          class: M(["device-btn", { active: t.value === 1280 }]),
          title: "Desktop"
        }, [...l[6] || (l[6] = [
          s("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            s("rect", {
              x: "2",
              y: "3",
              width: "20",
              height: "14",
              rx: "2",
              ry: "2"
            }),
            s("line", {
              x1: "8",
              y1: "21",
              x2: "16",
              y2: "21"
            }),
            s("line", {
              x1: "12",
              y1: "17",
              x2: "12",
              y2: "21"
            })
          ], -1)
        ])], 2),
        s("button", {
          onClick: u,
          class: M(["device-btn", { active: n.value }]),
          title: "Full Width"
        }, [...l[7] || (l[7] = [
          s("span", { class: "text-xs font-bold" }, "100%", -1)
        ])], 2),
        s("div", Le, $(Math.round(t.value)) + "px ", 1)
      ]),
      s("div", {
        class: "flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col items-center py-8 pb-32",
        ref: "scrollContainer",
        onClick: l[3] || (l[3] = (p) => v(c).select(null))
      }, [
        s("main", {
          ref_key: "canvasRef",
          ref: b,
          class: M(["device-frame transition-all duration-200 ease-out h-auto min-h-[80vh]", { "is-resizing": a.value }]),
          style: Q({ width: n.value ? "100%" : t.value + "px" }),
          onDragover: C(_, ["prevent"]),
          onDrop: V,
          onDragleave: F
        }, [
          v(c).canvasModules.length === 0 ? (m(), f("div", Re, [...l[9] || (l[9] = [
            s("svg", {
              class: "h-10 w-10 text-gray-400 mb-2",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 4v16m8-8H4"
              })
            ], -1),
            s("p", { class: "text-sm text-gray-500" }, "Drag components here", -1)
          ])])) : I("", !0),
          O(ee, {
            name: "canvas",
            tag: "div",
            class: "space-y-1 min-h-[100px] h-auto w-full"
          }, {
            default: te(() => [
              (m(!0), f(j, null, T(v(c).canvasModules, (p, E) => (m(), f(j, {
                key: p.uid
              }, [
                v(c).dragOverIndex === E ? (m(), f("div", Ae, [...l[10] || (l[10] = [
                  s("div", { class: "line" }, null, -1)
                ])])) : I("", !0),
                s("div", {
                  class: M(["ce-parent draggable relative group flex-shrink-0", { selected: v(c).selectedId === p.uid }]),
                  "data-uid": p.uid,
                  draggable: "true",
                  onDragstart: (D) => J(p.uid, D),
                  onDragend: q,
                  onClick: C((D) => v(c).select(p.uid), ["stop"])
                }, [
                  s("div", We, [
                    s("button", {
                      onClick: C((D) => d(p), ["stop"]),
                      title: "Minimize / Maximize"
                    }, [
                      p.minimized ? (m(), f("svg", Fe, [...l[12] || (l[12] = [
                        s("rect", {
                          x: "2",
                          y: "6",
                          width: "8",
                          height: "1.5",
                          fill: "currentColor"
                        }, null, -1)
                      ])])) : (m(), f("svg", Pe, [...l[11] || (l[11] = [
                        s("rect", {
                          x: "2",
                          y: "2",
                          width: "8",
                          height: "8",
                          stroke: "currentColor",
                          "stroke-width": "1.5",
                          fill: "none"
                        }, null, -1)
                      ])]))
                    ], 8, He),
                    s("button", {
                      onClick: C((D) => v(c).moveUp(p.uid), ["stop"]),
                      disabled: E === 0,
                      title: "Move Up"
                    }, [...l[13] || (l[13] = [
                      s("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        s("polyline", { points: "18 15 12 9 6 15" })
                      ], -1)
                    ])], 8, Ve),
                    s("button", {
                      onClick: C((D) => v(c).moveDown(p.uid), ["stop"]),
                      disabled: E === v(c).canvasModules.length - 1,
                      title: "Move Down"
                    }, [...l[14] || (l[14] = [
                      s("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        s("polyline", { points: "6 9 12 15 18 9" })
                      ], -1)
                    ])], 8, Je),
                    s("button", {
                      class: "delete",
                      onClick: C((D) => v(c).remove(p.uid), ["stop"]),
                      title: "Delete"
                    }, [...l[15] || (l[15] = [
                      s("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        s("line", {
                          x1: "18",
                          y1: "6",
                          x2: "6",
                          y2: "18"
                        }),
                        s("line", {
                          x1: "6",
                          y1: "6",
                          x2: "18",
                          y2: "18"
                        })
                      ], -1)
                    ])], 8, qe)
                  ]),
                  s("div", {
                    class: M(`p-1 ${p.minimized ? "" : "h-50 overflow-clip"}`)
                  }, [
                    O(Be, {
                      module: p,
                      _p: e._p,
                      __p: e.__p
                    }, null, 8, ["module", "_p", "__p"])
                  ], 2)
                ], 42, Ue),
                E === v(c).canvasModules.length - 1 && v(c).dragOverIndex === v(c).canvasModules.length ? (m(), f("div", Ge, [...l[16] || (l[16] = [
                  s("div", { class: "line" }, null, -1)
                ])])) : I("", !0)
              ], 64))), 128))
            ]),
            _: 1
          }),
          n.value ? I("", !0) : (m(), f("div", {
            key: 1,
            class: "resize-handle",
            onMousedown: C(h, ["prevent"])
          }, [...l[17] || (l[17] = [
            ne('<div class="resize-icon" data-v-d29157f1><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-d29157f1><polyline points="15 3 21 3 21 9" data-v-d29157f1></polyline><polyline points="9 21 3 21 3 15" data-v-d29157f1></polyline><line x1="21" y1="3" x2="14" y2="10" data-v-d29157f1></line><line x1="3" y1="21" x2="10" y2="14" data-v-d29157f1></line></svg></div>', 1)
          ])], 32))
        ], 38)
      ], 512)
    ]));
  }
}), Ye = /* @__PURE__ */ P(Xe, [["__scopeId", "data-v-d29157f1"]]), Ze = {
  key: 0,
  "class-old": "w-80 h-full border-l bg-white flex flex-col",
  class: "w-80 h-full border-l border-l-gray-300 bg-white flex flex-col"
}, Ke = {
  "class-old": "px-4 py-3 border-b bg-gray-50",
  class: "px-4 py-3 border-b border-b-gray-300 bg-gray-50"
}, Qe = { class: "text-xs text-gray-500 mt-1" }, et = { class: "flex-1 overflow-auto p-4 space-y-4" }, tt = { class: "text-xs font-medium text-gray-600 uppercase" }, nt = ["value", "onInput"], st = {
  "class-old": "border-t p-4 bg-gray-50 space-y-2",
  class: "border-t border-t-gray-300 p-4 bg-gray-50 space-y-2"
}, it = { class: "text-xs text-gray-400 text-center" }, ot = {
  __name: "ConfigPanel",
  setup(e) {
    const t = se(
      () => c.canvasModules.find((o) => o.uid === c.selectedId)
    );
    function n(o, i) {
      c.update(t.value.uid, { [o]: i });
    }
    function a() {
      c.remove(t.value.uid);
    }
    return (o, i) => t.value ? (m(), f("aside", Ze, [
      s("div", Ke, [
        i[0] || (i[0] = s("h3", { class: "text-sm font-semibold text-gray-800" }, " CONFIGURATION ", -1)),
        s("p", Qe, $(t.value.type) + " component ", 1)
      ]),
      s("div", et, [
        (m(!0), f(j, null, T(t.value.config, (d, r) => (m(), f("div", {
          key: r,
          class: "space-y-1"
        }, [
          s("label", tt, $(r), 1),
          s("input", {
            class: "w-full rounded-md border px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            value: d,
            onInput: (u) => n(r, u.target.value)
          }, null, 40, nt)
        ]))), 128))
      ]),
      s("div", st, [
        s("button", {
          onClick: a,
          class: "w-full text-sm font-medium text-red-600 border border-red-200 rounded-md py-2 hover:bg-red-50"
        }, " Remove Component "),
        s("p", it, " ID: " + $(t.value.uid), 1)
      ])
    ])) : I("", !0);
  }
}, at = { class: "grid grid-cols-[220px_1fr_320px] h-screen" }, lt = /* @__PURE__ */ L({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (async () => (e._p.my.emitter = e._p.f.new_emitter(), e._p.my.emitter.on("msg", async (t) => {
      console.log("_p.my.emitter.on", t);
    }), await e._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: e._p,
      _$p: e._$p
    })))(), (t, n) => (m(), f("div", at, [
      O(ke, {
        _p: e._p,
        __p: e._$p
      }, null, 8, ["_p", "__p"]),
      O(Ye, {
        _p: e._p,
        __p: e._$p
      }, null, 8, ["_p", "__p"]),
      O(ot, {
        _p: e._p,
        __p: e._$p
      }, null, 8, ["_p", "__p"])
    ]));
  }
}), dt = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const a = ie(lt, {
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
    }, i = document.getElementById(e.f.name("vue-root"));
    return a.mount(i), o;
  }
});
export {
  dt as hydrator,
  dt as index
};
