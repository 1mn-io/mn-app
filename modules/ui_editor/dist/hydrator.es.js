import { r as zt, o as R, c as S, a as f, F as se, b as ge, u as A, t as D, d as Ht, e as Me, f as ct, g as qt, w as ut, h as G, i as I, n as q, j as J, k as Jt, l as ne, T as Vt, m as Wt, p as Kt, q as fe, v as Xt, s as Oe, x as Gt, y as Zt } from "./runtime-dom.esm-bundler-D2D0tBjC.js";
const _ = zt({
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
    },
    //set..
    {
      id: "storefront",
      label: "Storefront",
      type: "storefront",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/storefront/dist/data.json"
    },
    {
      id: "dashboard",
      label: "Dashboard",
      type: "dashboard",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/dashboard/dist/data.json"
    },
    //set..
    {
      id: "form_inputtext",
      label: "Input-text (Form)",
      type: "form_inputtext",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/form_inputtext/dist/data.json"
    },
    {
      id: "form_button",
      label: "Button (Form)",
      type: "form_button",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/form_button/dist/data.json"
    },
    //set..
    {
      id: "form_section",
      label: "Section (Form)",
      type: "form_section",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/form_section/dist/data.json"
    },
    //set..
    {
      id: "form_holder",
      label: "Form holder",
      type: "form_holder",
      ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/form_holder/dist/data.json"
    }
  ],
  canvasModules: [
    //   {
    //   "uid": "c2a0d16a-adea-425a-98fb-154ace148205",
    //   "type": "carousel",
    //   "slug": "carousel",
    //   "ce_file": "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/carousel/dist/data.json",
    //   "ce_config": {
    //       "lazy_lib": {
    //           "renderer_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
    //           "hydrator_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
    //           "editor_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
    //       }
    //   },
    //   "ce_data": [
    //       {
    //           "id": "c2a0d16a-adea-425a-98fb-154ace148205",
    //           "type": "carousel",
    //           "slug": "carousel",
    //           "data": {
    //               "data": "",
    //               "theme": "light",
    //               "foo": ""
    //           }
    //       }
    //   ],
    //   "minimized": false,
    //   "collapsed": false,
    //   "state": {
    //       "theme": "light",
    //       "env": "dev"
    //   },
    //   "_created": 1769414479018
    // }
  ],
  selectedId: null,
  dragOverIndex: null,
  fetchCache: {},
  // Cache fetched CE data to avoid re-fetching
  async addToCanvas(e, t = null) {
    let n = null, s = crypto.randomUUID();
    try {
      typeof e.ce_file == "object" ? n = e.ce_file : this.fetchCache[e.ce_file] ? n = this.fetchCache[e.ce_file] : (n = await (await fetch(e.ce_file)).json(), this.fetchCache[e.ce_file] = n), n.data.l[0].id = s;
    } catch (i) {
      console.error("CE fetch failed:", i);
      return;
    }
    const r = JSON.parse(JSON.stringify(n)), o = {
      uid: s,
      //crypto.randomUUID(), // Unique ID for Vue 'key'
      type: e.type,
      slug: e.id,
      ce_file: e.ce_file,
      // USE THE CLONED DATA
      // Even if the original had "initialized: true" stuck to it from a previous
      // render, this clone is fresh (if the cache was clean) OR we rely on
      // the component to re-initialize because it's a new pointer.
      ce_config: r.config || {},
      ce_data: r.data?.l || [],
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
    const n = this.canvasModules.find((s) => s.uid === e);
    n && Object.assign(n.state, t);
  },
  remove(e) {
    const t = this.canvasModules.findIndex((n) => n.uid === e);
    t !== -1 && (this.canvasModules.splice(t, 1), this.selectedId === e && (this.selectedId = null));
  },
  // Move module from one position to another
  moveModule(e, t) {
    const n = this.canvasModules.findIndex((o) => o.uid === e);
    if (n === -1 || t < 0 || t > this.canvasModules.length) return;
    const [s] = this.canvasModules.splice(n, 1), r = n < t ? t - 1 : t;
    this.canvasModules.splice(r, 0, s);
  },
  // Get the drop index based on position
  getDropIndex(e, t) {
    if (this.canvasModules.length === 0) return 0;
    const n = Array.from(t.querySelectorAll(".ce-parent"));
    for (let s = 0; s < n.length; s++) {
      const r = n[s].getBoundingClientRect(), o = r.top + r.height / 2;
      if (e < o)
        return s;
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
  },
  formatBlock(e = { ce_file: null, curr: null }) {
    return {
      uid: e.curr.id,
      //c2a0d16a-adea-425a-98fb-154ace148205",
      type: "carousel",
      slug: "carousel",
      ce_file: `https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/${e.ce_file.data.l[0].type}/dist/data.json`,
      ce_config: {
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
        }
      },
      ce_data: (
        /*[
            {
                "id": "c2a0d16a-adea-425a-98fb-154ace148205",
                "type": "carousel",
                "slug": "carousel",
                "data": {
                    "data": "",
                    "theme": "light",
                    "foo": ""
                }
            }
        ], */
        [e.curr]
      ),
      minimized: !1,
      collapsed: !1,
      state: {
        theme: "light",
        env: "dev"
      },
      _created: 1769414479018
    };
  }
}), Yt = {
  "class-old": "w-full h-full border-r bg-gray-50 p-4 flex flex-col",
  class: "w-full h-full border-r border-r-gray-300 bg-gray-50 p-4 flex flex-col"
}, Qt = {
  "class-old": "space-y-2 flex-1 overflow-auto",
  class: "space-y-2 overflow-auto",
  style: { height: "75vh" }
}, en = ["onDragstart"], tn = { class: "w-8 h-8 rounded-md bg-indigo-100 flex items-center justify-center" }, nn = {
  key: 0,
  class: "w-5 h-5 text-indigo-600",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, sn = {
  key: 1,
  class: "w-5 h-5 text-indigo-600",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, rn = {
  key: 2,
  class: "w-5 h-5 text-indigo-600",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, on = { class: "flex-1 min-w-0" }, an = { class: "text-sm font-medium capitalize" }, ln = { class: "text-xs text-gray-500" }, cn = { class: "mt-4 pt-4 border-t border-gray-200" }, un = { class: "text-xs text-gray-500 space-y-1" }, dn = { class: "flex justify-between" }, fn = { class: "font-semibold text-gray-700" }, pn = { class: "flex justify-between" }, hn = { class: "font-semibold text-gray-700" }, mn = { class: "mt-3 text-xs" }, yn = { class: "mt-2 space-y-1 max-h-32 overflow-auto bg-gray-50 p-2 rounded" }, gn = {
  __name: "LeftPanel",
  setup(e) {
    function t(r, o) {
      o.dataTransfer.setData("module", JSON.stringify(r)), o.dataTransfer.effectAllowed = "copy", o.target.style.opacity = "0.5";
    }
    function n(r) {
      r.target.style.opacity = "1";
    }
    function s(r) {
      return _.canvasModules.filter((o) => o.type === r).length;
    }
    return (r, o) => (R(), S("aside", Yt, [
      o[7] || (o[7] = f("div", { class: "mb-6" }, [
        f("h2", { class: "text-sm font-semibold text-gray-700 mb-1 tracking-wide" }, " COMPONENTS "),
        f("p", { class: "text-xs text-gray-500" }, " Drag to canvas. Add multiple instances of any component. ")
      ], -1)),
      f("div", Qt, [
        (R(!0), S(se, null, ge(A(_).availableModules, (i) => (R(), S("div", {
          key: i.id,
          draggable: "true",
          onDragstart: (a) => t(i, a),
          onDragend: n,
          class: "group px-3 py-3 flex items-center gap-2 bg-white border-2 border-gray-200 rounded-lg cursor-grab transition-all hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-md active:cursor-grabbing active:scale-95"
        }, [
          f("div", tn, [
            i.type === "carousel" ? (R(), S("svg", nn, [...o[0] || (o[0] = [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              }, null, -1)
            ])])) : i.type === "cart_popup" ? (R(), S("svg", sn, [...o[1] || (o[1] = [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              }, null, -1)
            ])])) : (R(), S("svg", rn, [...o[2] || (o[2] = [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              }, null, -1)
            ])]))
          ]),
          f("div", on, [
            f("div", null, [
              f("p", an, D(i.label), 1),
              f("p", ln, D(s(i.type)) + " in use", 1)
            ]),
            o[3] || (o[3] = f("div", { class: "flex items-center justify-between" }, [
              f("p", { class: "text-xs text-gray-400 group-hover:text-indigo-600 transition font-medium" }, "DRAG"),
              f("svg", {
                class: "w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                f("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 5l7 7-7 7"
                })
              ])
            ], -1))
          ])
        ], 40, en))), 128))
      ]),
      f("div", cn, [
        f("div", un, [
          f("div", dn, [
            o[4] || (o[4] = f("span", null, "Total components:", -1)),
            f("span", fn, D(A(_).canvasModules.length), 1)
          ]),
          f("div", pn, [
            o[5] || (o[5] = f("span", null, "Available types:", -1)),
            f("span", hn, D(A(_).availableModules.length), 1)
          ])
        ]),
        f("details", mn, [
          o[6] || (o[6] = f("summary", { class: "cursor-pointer text-indigo-600 hover:text-indigo-800" }, " Debug: View all instances ", -1)),
          f("div", yn, [
            (R(!0), S(se, null, ge(A(_).canvasModules, (i) => (R(), S("div", {
              key: i.uid,
              class: "text-xs"
            }, [
              f("strong", null, D(i.type), 1),
              Ht(": " + D(i.uid.slice(0, 8)) + "... ", 1)
            ]))), 128))
          ])
        ])
      ])
    ]));
  }
}, Ae = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), dt = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), ft = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((s) => {
        const r = (o) => {
          ((i) => {
            const a = i.getAttribute("data-ce");
            if (!a)
              return;
            const p = JSON.parse(a).filter((u) => u?.k.startsWith("t-"));
            if (p.length != 0)
              for (const u of p) {
                const c = u.k, h = u.v.split(" ");
                if (c == `t-${t}-class`)
                  for (const b of h)
                    i.classList.add(b);
                else
                  for (const b of h)
                    i.classList.remove(b);
              }
          })(o);
        };
        for (const o of s.getElementsByTagName("*"))
          r(o);
        r(s);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function $e(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((s) => {
    const r = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(o), s());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, o = setInterval(() => {
      r();
    }, t);
    r();
  });
}
let wn = class {
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
      } catch (s) {
        this.listeners.error?.forEach(
          (r) => r(s)
        );
      }
  };
};
const we = () => new wn();
class pt {
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
let $ = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [n, s] of t.entries()) {
        const r = s, o = `${r.name}:${e.run_from}`, i = `${e.run_from}_src`;
        let a = r[i];
        const p = `${e.run_from}_src`;
        let u = e?.lazy_lib?.[p] || null;
        if (u && (u = u.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${u}`), console.log(`_src: ${a}`), $.lib.l.hasOwnProperty(`${o}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(a) && a.includes("/") == !1 && $.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (u)
              a = u;
            else
              throw `[lib-name=${r.name},lib-src=${a}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (a.startsWith("./") || a.startsWith("../")) {
            const c = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${a}`
            );
            $.lib.l[`${o}`] = {
              lib: c,
              src: a
            };
          }
          if (a.startsWith("http://") || a.startsWith("https://")) {
            const c = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${a}`
            );
            $.lib.l[`${o}`] = {
              lib: c,
              src: a
            };
          }
        }
      }
      console.log(await $.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return $.lib.l.hasOwnProperty(`${n}`) == !1 && await $.lib.set({
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
      }), t = $.lib.l[`${n}`], t;
    },
    get_all: async (e) => $.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const s = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), s.indexOf(e.type) !== -1)
        for (const [r, o] of s.entries()) {
          let i = r == 0 ? "" : "/";
          if (t += `${i}${o}`, o == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [r, o] of s.entries()) {
          let i = r == 0 ? "" : "/";
          if (t += `${i}${o}`, o == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const ht = we(), mt = we(), bn = ht.on;
ht.emit;
const xn = mt.emit;
mt.on;
const vn = async (e) => {
  const t = await dt();
  return await $.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const s = new pt();
      s.start();
      let r = n.data?.value?.l || n.data.l, o = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return n.return.r == "full" ? o.r = "" : o.r = [], await (async () => {
        for (const i of r) {
          const a = await await $.lib.get({ name: i.type, run_from: "renderer", lazy_lib: e.lazy_lib }), p = await (await a.lib.index({
            f: {
              name: (u) => t.f.name({ id: i.id, name: u }),
              get_lib: async (u) => await await $.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (u) => await (await ft()).set(u),
              path: (u) => $.path.set({ src: a.src, type: i.type, name: u }),
              //set..
              uuid: () => Ae().set(),
              wait_until: $e
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? o.r += p?.r || "" : o.r.push(p?.r || ""), o.style += p?.style || "", o.head += p?.head || "";
        }
      })(), s.stop(), o.benchmark = s.result(), o;
    }
  };
}, _n = async (e) => {
  const t = await dt();
  return await $.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const s = new pt();
      s.start();
      let r = {
        r: "",
        style: ""
      }, o = {
        style_id: `${Ae().set()}_stl`
      }, i = n.data?.value?.l || n.data.l;
      const a = async () => {
        for (const p of i) {
          const u = await await $.lib.get({ name: p.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), c = u.lib, h = we(), b = h.on, E = await (await c.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (d) => t.f.name({ id: p.id, name: d }),
              get_lib: async (d) => await await $.lib.get({ name: d.name, run_from: d.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (d) => await (await ft()).set(d),
              path: (d) => $.path.set({ src: u.src, type: p.type, name: d }),
              //set..
              uuid: () => Ae().set(),
              wait_until: $e,
              //set..
              call: xn,
              listen: b,
              //set..
              new_emitter: () => we()
            }
          })).set(
            {
              data: {
                curr: p
              }
            }
            /*_$cb*/
          );
          bn("msg", async (d) => {
            try {
              if (Object.keys(d.where || {}).length == 0) {
                await h.emit("msg", d);
                return;
              }
            } catch {
            }
            try {
              if (p?.[d.where?.key || ""] == d.where?.value) {
                await h.emit("msg", d);
                return;
              }
            } catch {
            }
          }), r.style += E.style;
        }
      };
      await $e(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await a();
      try {
        ((p) => {
          const u = document.getElementById(`${o.style_id}`);
          u && u.remove();
          const c = document.createElement("style");
          c.id = `${o.style_id}`, c.innerHTML = `${r.style}`, p.appendChild(c);
        })(document.head);
      } catch (p) {
        console.log(`${p}, Failed to set style..`);
      }
      return s.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: s.result()
      };
    }
  };
}, En = ["data-uid"], Rn = {
  key: 0,
  class: "loading-state"
}, Sn = {
  key: 1,
  class: "error-state"
}, On = ["innerHTML"], Cn = /* @__PURE__ */ Me({
  __name: "ContentEngine",
  props: {
    _p: {},
    __p: {},
    module: {}
  },
  setup(e) {
    const t = I(""), n = I(!0), s = I(null);
    let r = null;
    const o = `ce-${e.module.uid}`, i = async () => {
      n.value = !0, s.value = null;
      try {
        const a = {
          l: [...e.module.ce_data]
          // Additional safety: spread the array
        };
        if (console.log(`[${o}] Initializing with data:`, {
          uid: e.module.uid,
          type: e.module.type,
          dataItems: a.l.length
        }), a.l.length === 0)
          throw new Error("No data available for this component");
        const p = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, u = await vn(p), c = await _n(p), h = await u.set({
          data: a,
          return: {
            r: "chunk"
          }
        });
        console.log(`[${o}] Renderer response:`, {
          chunks: h.r?.length,
          hasStyle: !!h.style
        });
        let b = "";
        for (const E of h.r)
          typeof E == "string" && (b += `
          <div style="border:1px solid transparent; margin:4px; padding:4px;">
            ${E}
          </div>
        `);
        t.value = b, h.style && (r = document.createElement("style"), r.setAttribute("data-ce-instance", o), r.innerHTML = h.style, document.head.appendChild(r)), setTimeout(async () => {
          try {
            await c.set({
              data: a
            }), console.log(`[${o}] Hydration complete`);
          } catch (E) {
            console.error(`[${o}] Hydration error:`, E);
          }
        }, 10), n.value = !1;
      } catch (a) {
        console.error(`[${o}] Initialization error:`, a), s.value = a instanceof Error ? a.message : "Unknown error", n.value = !1;
      }
    };
    return ct(() => {
      i();
    }), qt(() => {
      r && r.parentNode && r.parentNode.removeChild(r);
    }), ut(() => e.module.ce_data, () => {
      console.log(`[${o}] Data changed, reinitializing...`), i();
    }, { deep: !0 }), (a, p) => (R(), S("div", {
      class: "ce-wrapper",
      "data-uid": e.module.uid
    }, [
      n.value ? (R(), S("div", Rn, [
        p[0] || (p[0] = f("div", { class: "spinner" }, null, -1)),
        f("p", null, "Loading " + D(e.module.type) + "...", 1)
      ])) : s.value ? (R(), S("div", Sn, [
        p[1] || (p[1] = f("p", null, "Error loading component", -1)),
        f("small", null, D(s.value), 1)
      ])) : t.value ? (R(), S("div", {
        key: 2,
        innerHTML: t.value
      }, null, 8, On)) : G("", !0)
    ], 8, En));
  }
}), yt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, kn = /* @__PURE__ */ yt(Cn, [["__scopeId", "data-v-0617a5ac"]]), Tn = { class: "flex flex-col h-full w-full bg-gray-200 overflow-hidden" }, An = { class: "h-12 bg-white border-b border-gray-300 flex items-center justify-center gap-4 px-4 shadow-sm z-20 flex-shrink-0" }, $n = { class: "ml-4 px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-600" }, Nn = {
  key: 0,
  class: "flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-xl m-4"
}, Un = {
  key: 0,
  class: "drop-indicator"
}, Dn = ["data-uid", "onDragstart", "onClick"], In = { class: "ce-actions" }, Mn = ["onClick"], jn = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12"
}, Ln = {
  key: 1,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12"
}, Pn = ["onClick", "disabled"], Bn = ["onClick", "disabled"], Fn = ["onClick"], zn = {
  key: 1,
  class: "drop-indicator"
}, Hn = /* @__PURE__ */ Me({
  __name: "Canvas",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const t = I(600), n = I(!1), s = I(!1);
    let r = 0, o = 0;
    function i(v) {
      v.minimized ? v.minimized = !1 : v.minimized = !0;
    }
    function a(v) {
      t.value = v, n.value = !1;
    }
    function p() {
      n.value = !0;
    }
    function u(v) {
      s.value = !0, r = v.clientX, o = t.value, window.addEventListener("mousemove", c), window.addEventListener("mouseup", h), document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none";
    }
    function c(v) {
      if (!s.value) return;
      const m = v.clientX - r, y = o + m * 2;
      y >= 320 && y <= 2500 && (t.value = y);
    }
    function h() {
      s.value = !1, window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", h), document.body.style.cursor = "", document.body.style.userSelect = "";
    }
    const b = I(null);
    let E = null;
    function d(v) {
      if (!b.value) return;
      const m = _.getDropIndex(v.clientY, b.value);
      _.setDragOverIndex(m);
    }
    function w(v) {
      v.target === b.value && _.clearDragOverIndex();
    }
    async function g(v) {
      v.preventDefault();
      const m = v.dataTransfer?.getData("module");
      if (m) {
        const y = JSON.parse(m);
        await _.addToCanvas(y, _.dragOverIndex);
      } else E && _.moveModule(E, _.dragOverIndex ?? _.canvasModules.length);
      _.clearDragOverIndex(), E = null;
    }
    function k(v, m) {
      E = v, m.dataTransfer.effectAllowed = "move", m.dataTransfer.setData("text/plain", v);
    }
    function N() {
      E = null, _.clearDragOverIndex();
    }
    return console.log("engine.available:", _.canvasModules), (v, m) => (R(), S("div", Tn, [
      f("div", An, [
        m[8] || (m[8] = f("span", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2" }, "Screen Size", -1)),
        f("button", {
          onClick: m[0] || (m[0] = (y) => a(375)),
          class: q(["device-btn", { active: t.value === 375 }]),
          title: "Mobile"
        }, [...m[4] || (m[4] = [
          f("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            f("rect", {
              x: "5",
              y: "2",
              width: "14",
              height: "20",
              rx: "2",
              ry: "2"
            }),
            f("line", {
              x1: "12",
              y1: "18",
              x2: "12",
              y2: "18"
            })
          ], -1)
        ])], 2),
        f("button", {
          onClick: m[1] || (m[1] = (y) => a(768)),
          class: q(["device-btn", { active: t.value === 768 }]),
          title: "Tablet"
        }, [...m[5] || (m[5] = [
          f("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            f("rect", {
              x: "4",
              y: "2",
              width: "16",
              height: "20",
              rx: "2",
              ry: "2"
            }),
            f("line", {
              x1: "12",
              y1: "18",
              x2: "12",
              y2: "18"
            })
          ], -1)
        ])], 2),
        f("button", {
          onClick: m[2] || (m[2] = (y) => a(1280)),
          class: q(["device-btn", { active: t.value === 1280 }]),
          title: "Desktop"
        }, [...m[6] || (m[6] = [
          f("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            f("rect", {
              x: "2",
              y: "3",
              width: "20",
              height: "14",
              rx: "2",
              ry: "2"
            }),
            f("line", {
              x1: "8",
              y1: "21",
              x2: "16",
              y2: "21"
            }),
            f("line", {
              x1: "12",
              y1: "17",
              x2: "12",
              y2: "21"
            })
          ], -1)
        ])], 2),
        f("button", {
          onClick: p,
          class: q(["device-btn", { active: n.value }]),
          title: "Full Width"
        }, [...m[7] || (m[7] = [
          f("span", { class: "text-xs font-bold" }, "100%", -1)
        ])], 2),
        f("div", $n, D(Math.round(t.value)) + "px ", 1)
      ]),
      f("div", {
        class: "flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col items-center py-8 pb-32",
        ref: "scrollContainer",
        onClick: m[3] || (m[3] = (y) => A(_).select(null))
      }, [
        f("main", {
          ref_key: "canvasRef",
          ref: b,
          class: q(["device-frame transition-all duration-200 ease-out h-auto min-h-[80vh]", { "is-resizing": s.value }]),
          style: Jt({ width: n.value ? "100%" : t.value + "px" }),
          onDragover: J(d, ["prevent"]),
          onDrop: g,
          onDragleave: w
        }, [
          A(_).canvasModules.length === 0 ? (R(), S("div", Nn, [...m[9] || (m[9] = [
            f("svg", {
              class: "h-10 w-10 text-gray-400 mb-2",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 4v16m8-8H4"
              })
            ], -1),
            f("p", { class: "text-sm text-gray-500" }, "Drag components here", -1)
          ])])) : G("", !0),
          ne(Vt, {
            name: "canvas",
            tag: "div",
            class: "space-y-1 min-h-[100px] h-auto w-full"
          }, {
            default: Wt(() => [
              (R(!0), S(se, null, ge(A(_).canvasModules, (y, O) => (R(), S(se, {
                key: y.uid
              }, [
                A(_).dragOverIndex === O ? (R(), S("div", Un, [...m[10] || (m[10] = [
                  f("div", { class: "line" }, null, -1)
                ])])) : G("", !0),
                f("div", {
                  class: q(["ce-parent draggable relative group flex-shrink-0", { selected: A(_).selectedId === y.uid }]),
                  "data-uid": y.uid,
                  draggable: "true",
                  onDragstart: (C) => k(y.uid, C),
                  onDragend: N,
                  onClick: J((C) => A(_).select(y.uid), ["stop"])
                }, [
                  f("div", In, [
                    f("button", {
                      onClick: J((C) => i(y), ["stop"]),
                      title: "Minimize / Maximize"
                    }, [
                      y.minimized ? (R(), S("svg", Ln, [...m[12] || (m[12] = [
                        f("rect", {
                          x: "2",
                          y: "6",
                          width: "8",
                          height: "1.5",
                          fill: "currentColor"
                        }, null, -1)
                      ])])) : (R(), S("svg", jn, [...m[11] || (m[11] = [
                        f("rect", {
                          x: "2",
                          y: "2",
                          width: "8",
                          height: "8",
                          stroke: "currentColor",
                          "stroke-width": "1.5",
                          fill: "none"
                        }, null, -1)
                      ])]))
                    ], 8, Mn),
                    f("button", {
                      onClick: J((C) => A(_).moveUp(y.uid), ["stop"]),
                      disabled: O === 0,
                      title: "Move Up"
                    }, [...m[13] || (m[13] = [
                      f("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        f("polyline", { points: "18 15 12 9 6 15" })
                      ], -1)
                    ])], 8, Pn),
                    f("button", {
                      onClick: J((C) => A(_).moveDown(y.uid), ["stop"]),
                      disabled: O === A(_).canvasModules.length - 1,
                      title: "Move Down"
                    }, [...m[14] || (m[14] = [
                      f("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        f("polyline", { points: "6 9 12 15 18 9" })
                      ], -1)
                    ])], 8, Bn),
                    f("button", {
                      class: "delete",
                      onClick: J((C) => A(_).remove(y.uid), ["stop"]),
                      title: "Delete"
                    }, [...m[15] || (m[15] = [
                      f("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        f("line", {
                          x1: "18",
                          y1: "6",
                          x2: "6",
                          y2: "18"
                        }),
                        f("line", {
                          x1: "6",
                          y1: "6",
                          x2: "18",
                          y2: "18"
                        })
                      ], -1)
                    ])], 8, Fn)
                  ]),
                  f("div", {
                    class: q(`p-1 ${y.minimized ? "" : "h-50 overflow-clip"}`)
                  }, [
                    ne(kn, {
                      module: y,
                      _p: e._p,
                      __p: e.__p
                    }, null, 8, ["module", "_p", "__p"])
                  ], 2)
                ], 42, Dn),
                O === A(_).canvasModules.length - 1 && A(_).dragOverIndex === A(_).canvasModules.length ? (R(), S("div", zn, [...m[16] || (m[16] = [
                  f("div", { class: "line" }, null, -1)
                ])])) : G("", !0)
              ], 64))), 128))
            ]),
            _: 1
          }),
          n.value ? G("", !0) : (R(), S("div", {
            key: 1,
            class: "resize-handle",
            onMousedown: J(u, ["prevent"])
          }, [...m[17] || (m[17] = [
            Kt('<div class="resize-icon" data-v-515ccd43><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-515ccd43><polyline points="15 3 21 3 21 9" data-v-515ccd43></polyline><polyline points="9 21 3 21 3 15" data-v-515ccd43></polyline><line x1="21" y1="3" x2="14" y2="10" data-v-515ccd43></line><line x1="3" y1="21" x2="10" y2="14" data-v-515ccd43></line></svg></div>', 1)
          ])], 32))
        ], 38)
      ], 512)
    ]));
  }
}), qn = /* @__PURE__ */ yt(Hn, [["__scopeId", "data-v-515ccd43"]]);
function gt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Jn } = Object.prototype, { getPrototypeOf: je } = Object, { iterator: xe, toStringTag: wt } = Symbol, ve = /* @__PURE__ */ ((e) => (t) => {
  const n = Jn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => ve(t) === e), _e = (e) => (t) => typeof t === e, { isArray: Y } = Array, Z = _e("undefined");
function re(e) {
  return e !== null && !Z(e) && e.constructor !== null && !Z(e.constructor) && M(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const bt = L("ArrayBuffer");
function Vn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && bt(e.buffer), t;
}
const Wn = _e("string"), M = _e("function"), xt = _e("number"), oe = (e) => e !== null && typeof e == "object", Kn = (e) => e === !0 || e === !1, he = (e) => {
  if (ve(e) !== "object")
    return !1;
  const t = je(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(wt in e) && !(xe in e);
}, Xn = (e) => {
  if (!oe(e) || re(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Gn = L("Date"), Zn = L("File"), Yn = L("Blob"), Qn = L("FileList"), es = (e) => oe(e) && M(e.pipe), ts = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || M(e.append) && ((t = ve(e)) === "formdata" || // detect form-data instance
  t === "object" && M(e.toString) && e.toString() === "[object FormData]"));
}, ns = L("URLSearchParams"), [ss, rs, os, is] = ["ReadableStream", "Request", "Response", "Headers"].map(L), as = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ie(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, r;
  if (typeof e != "object" && (e = [e]), Y(e))
    for (s = 0, r = e.length; s < r; s++)
      t.call(null, e[s], s, e);
  else {
    if (re(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (s = 0; s < i; s++)
      a = o[s], t.call(null, e[a], a, e);
  }
}
function vt(e, t) {
  if (re(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], t === r.toLowerCase())
      return r;
  return null;
}
const V = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, _t = (e) => !Z(e) && e !== V;
function Ne() {
  const { caseless: e, skipUndefined: t } = _t(this) && this || {}, n = {}, s = (r, o) => {
    const i = e && vt(n, o) || o;
    he(n[i]) && he(r) ? n[i] = Ne(n[i], r) : he(r) ? n[i] = Ne({}, r) : Y(r) ? n[i] = r.slice() : (!t || !Z(r)) && (n[i] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ie(arguments[r], s);
  return n;
}
const ls = (e, t, n, { allOwnKeys: s } = {}) => (ie(t, (r, o) => {
  n && M(r) ? Object.defineProperty(e, o, {
    value: gt(r, n),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(e, o, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: s }), e), cs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), us = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ds = (e, t, n, s) => {
  let r, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      i = r[o], (!s || s(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && je(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, fs = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, ps = (e) => {
  if (!e) return null;
  if (Y(e)) return e;
  let t = e.length;
  if (!xt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, hs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && je(Uint8Array)), ms = (e, t) => {
  const s = (e && e[xe]).call(e);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, ys = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, gs = L("HTMLFormElement"), ws = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, s, r) {
    return s.toUpperCase() + r;
  }
), We = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), bs = L("RegExp"), Et = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  ie(n, (r, o) => {
    let i;
    (i = t(r, o, e)) !== !1 && (s[o] = i || r);
  }), Object.defineProperties(e, s);
}, xs = (e) => {
  Et(e, (t, n) => {
    if (M(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (M(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, vs = (e, t) => {
  const n = {}, s = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return Y(e) ? s(e) : s(String(e).split(t)), n;
}, _s = () => {
}, Es = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Rs(e) {
  return !!(e && M(e.append) && e[wt] === "FormData" && e[xe]);
}
const Ss = (e) => {
  const t = new Array(10), n = (s, r) => {
    if (oe(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (re(s))
        return s;
      if (!("toJSON" in s)) {
        t[r] = s;
        const o = Y(s) ? [] : {};
        return ie(s, (i, a) => {
          const p = n(i, r + 1);
          !Z(p) && (o[a] = p);
        }), t[r] = void 0, o;
      }
    }
    return s;
  };
  return n(e, 0);
}, Os = L("AsyncFunction"), Cs = (e) => e && (oe(e) || M(e)) && M(e.then) && M(e.catch), Rt = ((e, t) => e ? setImmediate : t ? ((n, s) => (V.addEventListener("message", ({ source: r, data: o }) => {
  r === V && o === n && s.length && s.shift()();
}, !1), (r) => {
  s.push(r), V.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  M(V.postMessage)
), ks = typeof queueMicrotask < "u" ? queueMicrotask.bind(V) : typeof process < "u" && process.nextTick || Rt, Ts = (e) => e != null && M(e[xe]), l = {
  isArray: Y,
  isArrayBuffer: bt,
  isBuffer: re,
  isFormData: ts,
  isArrayBufferView: Vn,
  isString: Wn,
  isNumber: xt,
  isBoolean: Kn,
  isObject: oe,
  isPlainObject: he,
  isEmptyObject: Xn,
  isReadableStream: ss,
  isRequest: rs,
  isResponse: os,
  isHeaders: is,
  isUndefined: Z,
  isDate: Gn,
  isFile: Zn,
  isBlob: Yn,
  isRegExp: bs,
  isFunction: M,
  isStream: es,
  isURLSearchParams: ns,
  isTypedArray: hs,
  isFileList: Qn,
  forEach: ie,
  merge: Ne,
  extend: ls,
  trim: as,
  stripBOM: cs,
  inherits: us,
  toFlatObject: ds,
  kindOf: ve,
  kindOfTest: L,
  endsWith: fs,
  toArray: ps,
  forEachEntry: ms,
  matchAll: ys,
  isHTMLForm: gs,
  hasOwnProperty: We,
  hasOwnProp: We,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Et,
  freezeMethods: xs,
  toObjectSet: vs,
  toCamelCase: ws,
  noop: _s,
  toFiniteNumber: Es,
  findKey: vt,
  global: V,
  isContextDefined: _t,
  isSpecCompliantForm: Rs,
  toJSONObject: Ss,
  isAsyncFn: Os,
  isThenable: Cs,
  setImmediate: Rt,
  asap: ks,
  isIterable: Ts
};
let x = class St extends Error {
  static from(t, n, s, r, o, i) {
    const a = new St(t.message, n || t.code, s, r, o);
    return a.cause = t, a.name = t.name, i && Object.assign(a, i), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, s, r, o) {
    super(t), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), s && (this.config = s), r && (this.request = r), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
x.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
x.ERR_BAD_OPTION = "ERR_BAD_OPTION";
x.ECONNABORTED = "ECONNABORTED";
x.ETIMEDOUT = "ETIMEDOUT";
x.ERR_NETWORK = "ERR_NETWORK";
x.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
x.ERR_DEPRECATED = "ERR_DEPRECATED";
x.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
x.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
x.ERR_CANCELED = "ERR_CANCELED";
x.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
x.ERR_INVALID_URL = "ERR_INVALID_URL";
const As = null;
function Ue(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function Ot(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ke(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = Ot(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function $s(e) {
  return l.isArray(e) && !e.some(Ue);
}
const Ns = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ee(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, g) {
    return !l.isUndefined(g[w]);
  });
  const s = n.metaTokens, r = n.visitor || c, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(r))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (l.isDate(d))
      return d.toISOString();
    if (l.isBoolean(d))
      return d.toString();
    if (!p && l.isBlob(d))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(d) || l.isTypedArray(d) ? p && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, w, g) {
    let k = d;
    if (d && !g && typeof d == "object") {
      if (l.endsWith(w, "{}"))
        w = s ? w : w.slice(0, -2), d = JSON.stringify(d);
      else if (l.isArray(d) && $s(d) || (l.isFileList(d) || l.endsWith(w, "[]")) && (k = l.toArray(d)))
        return w = Ot(w), k.forEach(function(v, m) {
          !(l.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ke([w], m, o) : i === null ? w : w + "[]",
            u(v)
          );
        }), !1;
    }
    return Ue(d) ? !0 : (t.append(Ke(g, w, o), u(d)), !1);
  }
  const h = [], b = Object.assign(Ns, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Ue
  });
  function E(d, w) {
    if (!l.isUndefined(d)) {
      if (h.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      h.push(d), l.forEach(d, function(k, N) {
        (!(l.isUndefined(k) || k === null) && r.call(
          t,
          k,
          l.isString(N) ? N.trim() : N,
          w,
          b
        )) === !0 && E(k, w ? w.concat(N) : [N]);
      }), h.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Xe(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function Le(e, t) {
  this._pairs = [], e && Ee(e, this, t);
}
const Ct = Le.prototype;
Ct.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ct.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Xe);
  } : Xe;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function Us(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function kt(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || Us, r = l.isFunction(n) ? {
    serialize: n
  } : n, o = r && r.serialize;
  let i;
  if (o ? i = o(t, r) : i = l.isURLSearchParams(t) ? t.toString() : new Le(t, r).toString(s), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Ge {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    l.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const Tt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ds = typeof URLSearchParams < "u" ? URLSearchParams : Le, Is = typeof FormData < "u" ? FormData : null, Ms = typeof Blob < "u" ? Blob : null, js = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ds,
    FormData: Is,
    Blob: Ms
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Pe = typeof window < "u" && typeof document < "u", De = typeof navigator == "object" && navigator || void 0, Ls = Pe && (!De || ["ReactNative", "NativeScript", "NS"].indexOf(De.product) < 0), Ps = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bs = Pe && window.location.href || "http://localhost", Fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Pe,
  hasStandardBrowserEnv: Ls,
  hasStandardBrowserWebWorkerEnv: Ps,
  navigator: De,
  origin: Bs
}, Symbol.toStringTag, { value: "Module" })), U = {
  ...Fs,
  ...js
};
function zs(e, t) {
  return Ee(e, new U.classes.URLSearchParams(), {
    visitor: function(n, s, r, o) {
      return U.isNode && l.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Hs(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function qs(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++)
    o = n[s], t[o] = e[o];
  return t;
}
function At(e) {
  function t(n, s, r, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), p = o >= n.length;
    return i = !i && l.isArray(r) ? r.length : i, p ? (l.hasOwnProp(r, i) ? r[i] = [r[i], s] : r[i] = s, !a) : ((!r[i] || !l.isObject(r[i])) && (r[i] = []), t(n, s, r[i], o) && l.isArray(r[i]) && (r[i] = qs(r[i])), !a);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (s, r) => {
      t(Hs(s), r, n, 0);
    }), n;
  }
  return null;
}
function Js(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const ae = {
  transitional: Tt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = l.isObject(t);
    if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
      return r ? JSON.stringify(At(t)) : t;
    if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
      return t;
    if (l.isArrayBufferView(t))
      return t.buffer;
    if (l.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return zs(t, this.formSerializer).toString();
      if ((a = l.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Ee(
          a ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || r ? (n.setContentType("application/json", !1), Js(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ae.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (l.isResponse(t) || l.isReadableStream(t))
      return t;
    if (t && l.isString(t) && (s && !this.responseType || r)) {
      const i = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? x.from(a, x.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: U.classes.FormData,
    Blob: U.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
l.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ae.headers[e] = {};
});
const Vs = l.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ws = (e) => {
  const t = {};
  let n, s, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), n = i.substring(0, r).trim().toLowerCase(), s = i.substring(r + 1).trim(), !(!n || t[n] && Vs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Ze = /* @__PURE__ */ Symbol("internals");
function te(e) {
  return e && String(e).trim().toLowerCase();
}
function me(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(me) : String(e);
}
function Ks(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Xs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ce(e, t, n, s, r) {
  if (l.isFunction(s))
    return s.call(this, t, n);
  if (r && (t = n), !!l.isString(t)) {
    if (l.isString(s))
      return t.indexOf(s) !== -1;
    if (l.isRegExp(s))
      return s.test(t);
  }
}
function Gs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Zs(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(r, o, i) {
        return this[s].call(this, t, r, o, i);
      },
      configurable: !0
    });
  });
}
let j = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(a, p, u) {
      const c = te(p);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const h = l.findKey(r, c);
      (!h || r[h] === void 0 || u === !0 || u === void 0 && r[h] !== !1) && (r[h || p] = me(a));
    }
    const i = (a, p) => l.forEach(a, (u, c) => o(u, c, p));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (l.isString(t) && (t = t.trim()) && !Xs(t))
      i(Ws(t), n);
    else if (l.isObject(t) && l.isIterable(t)) {
      let a = {}, p, u;
      for (const c of t) {
        if (!l.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = c[0]] = (p = a[u]) ? l.isArray(p) ? [...p, c[1]] : [p, c[1]] : c[1];
      }
      i(a, n);
    } else
      t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = te(t), t) {
      const s = l.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return Ks(r);
        if (l.isFunction(n))
          return n.call(this, r, s);
        if (l.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = te(t), t) {
      const s = l.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || Ce(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(i) {
      if (i = te(i), i) {
        const a = l.findKey(s, i);
        a && (!n || Ce(s, s[a], a, n)) && (delete s[a], r = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || Ce(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, s = {};
    return l.forEach(this, (r, o) => {
      const i = l.findKey(s, o);
      if (i) {
        n[i] = me(r), delete n[o];
        return;
      }
      const a = t ? Gs(o) : String(o).trim();
      a !== o && delete n[o], n[a] = me(r), s[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = t && l.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[Ze] = this[Ze] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(i) {
      const a = te(i);
      s[a] || (Zs(r, i), s[a] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
j.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
l.reduceDescriptors(j.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
l.freezeMethods(j);
function ke(e, t) {
  const n = this || ae, s = t || n, r = j.from(s.headers);
  let o = s.data;
  return l.forEach(e, function(a) {
    o = a.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function $t(e) {
  return !!(e && e.__CANCEL__);
}
let le = class extends x {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, s) {
    super(t ?? "canceled", x.ERR_CANCELED, n, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Nt(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(new x(
    "Request failed with status code " + n.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ys(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Qs(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let r = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const u = Date.now(), c = s[o];
    i || (i = u), n[r] = p, s[r] = u;
    let h = o, b = 0;
    for (; h !== r; )
      b += n[h++], h = h % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), u - i < t)
      return;
    const E = c && u - c;
    return E ? Math.round(b * 1e3 / E) : void 0;
  };
}
function er(e, t) {
  let n = 0, s = 1e3 / t, r, o;
  const i = (u, c = Date.now()) => {
    n = c, r = null, o && (clearTimeout(o), o = null), e(...u);
  };
  return [(...u) => {
    const c = Date.now(), h = c - n;
    h >= s ? i(u, c) : (r = u, o || (o = setTimeout(() => {
      o = null, i(r);
    }, s - h)));
  }, () => r && i(r)];
}
const be = (e, t, n = 3) => {
  let s = 0;
  const r = Qs(50, 250);
  return er((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, p = i - s, u = r(p), c = i <= a;
    s = i;
    const h = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: p,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, Ye = (e, t) => {
  const n = e != null;
  return [(s) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: s
  }), t[1]];
}, Qe = (e) => (...t) => l.asap(() => e(...t)), tr = U.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, U.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(U.origin),
  U.navigator && /(msie|trident)/i.test(U.navigator.userAgent)
) : () => !0, nr = U.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, r, o, i) {
      if (typeof document > "u") return;
      const a = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`), l.isString(s) && a.push(`path=${s}`), l.isString(r) && a.push(`domain=${r}`), o === !0 && a.push("secure"), l.isString(i) && a.push(`SameSite=${i}`), document.cookie = a.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function sr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function rr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ut(e, t, n) {
  let s = !sr(t);
  return e && (s || n == !1) ? rr(e, t) : t;
}
const et = (e) => e instanceof j ? { ...e } : e;
function K(e, t) {
  t = t || {};
  const n = {};
  function s(u, c, h, b) {
    return l.isPlainObject(u) && l.isPlainObject(c) ? l.merge.call({ caseless: b }, u, c) : l.isPlainObject(c) ? l.merge({}, c) : l.isArray(c) ? c.slice() : c;
  }
  function r(u, c, h, b) {
    if (l.isUndefined(c)) {
      if (!l.isUndefined(u))
        return s(void 0, u, h, b);
    } else return s(u, c, h, b);
  }
  function o(u, c) {
    if (!l.isUndefined(c))
      return s(void 0, c);
  }
  function i(u, c) {
    if (l.isUndefined(c)) {
      if (!l.isUndefined(u))
        return s(void 0, u);
    } else return s(void 0, c);
  }
  function a(u, c, h) {
    if (h in t)
      return s(u, c);
    if (h in e)
      return s(void 0, u);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, c, h) => r(et(u), et(c), h, !0)
  };
  return l.forEach(Object.keys({ ...e, ...t }), function(c) {
    const h = p[c] || r, b = h(e[c], t[c], c);
    l.isUndefined(b) && h !== a || (n[c] = b);
  }), n;
}
const Dt = (e) => {
  const t = K({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: i, auth: a } = t;
  if (t.headers = i = j.from(i), t.url = kt(Ut(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  ), l.isFormData(n)) {
    if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if (l.isFunction(n.getHeaders)) {
      const p = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(p).forEach(([c, h]) => {
        u.includes(c.toLowerCase()) && i.set(c, h);
      });
    }
  }
  if (U.hasStandardBrowserEnv && (s && l.isFunction(s) && (s = s(t)), s || s !== !1 && tr(t.url))) {
    const p = r && o && nr.read(o);
    p && i.set(r, p);
  }
  return t;
}, or = typeof XMLHttpRequest < "u", ir = or && function(e) {
  return new Promise(function(n, s) {
    const r = Dt(e);
    let o = r.data;
    const i = j.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: p, onDownloadProgress: u } = r, c, h, b, E, d;
    function w() {
      E && E(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(c), r.signal && r.signal.removeEventListener("abort", c);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function k() {
      if (!g)
        return;
      const v = j.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: v,
        config: e,
        request: g
      };
      Nt(function(C) {
        n(C), w();
      }, function(C) {
        s(C), w();
      }, y), g = null;
    }
    "onloadend" in g ? g.onloadend = k : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, g.onabort = function() {
      g && (s(new x("Request aborted", x.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function(m) {
      const y = m && m.message ? m.message : "Network Error", O = new x(y, x.ERR_NETWORK, e, g);
      O.event = m || null, s(O), g = null;
    }, g.ontimeout = function() {
      let m = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const y = r.transitional || Tt;
      r.timeoutErrorMessage && (m = r.timeoutErrorMessage), s(new x(
        m,
        y.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        e,
        g
      )), g = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in g && l.forEach(i.toJSON(), function(m, y) {
      g.setRequestHeader(y, m);
    }), l.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), a && a !== "json" && (g.responseType = r.responseType), u && ([b, d] = be(u, !0), g.addEventListener("progress", b)), p && g.upload && ([h, E] = be(p), g.upload.addEventListener("progress", h), g.upload.addEventListener("loadend", E)), (r.cancelToken || r.signal) && (c = (v) => {
      g && (s(!v || v.type ? new le(null, e, g) : v), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(c), r.signal && (r.signal.aborted ? c() : r.signal.addEventListener("abort", c)));
    const N = Ys(r.url);
    if (N && U.protocols.indexOf(N) === -1) {
      s(new x("Unsupported protocol " + N + ":", x.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(o || null);
  });
}, ar = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), r;
    const o = function(u) {
      if (!r) {
        r = !0, a();
        const c = u instanceof Error ? u : this.reason;
        s.abort(c instanceof x ? c : new le(c instanceof Error ? c.message : c));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new x(`timeout of ${t}ms exceeded`, x.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: p } = s;
    return p.unsubscribe = () => l.asap(a), p;
  }
}, lr = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + t, yield e.slice(s, r), s = r;
}, cr = async function* (e, t) {
  for await (const n of ur(e))
    yield* lr(n, t);
}, ur = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: s } = await t.read();
      if (n)
        break;
      yield s;
    }
  } finally {
    await t.cancel();
  }
}, tt = (e, t, n, s) => {
  const r = cr(e, t);
  let o = 0, i, a = (p) => {
    i || (i = !0, s && s(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: u, value: c } = await r.next();
        if (u) {
          a(), p.close();
          return;
        }
        let h = c.byteLength;
        if (n) {
          let b = o += h;
          n(b);
        }
        p.enqueue(new Uint8Array(c));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(p) {
      return a(p), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, nt = 64 * 1024, { isFunction: pe } = l, dr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), {
  ReadableStream: st,
  TextEncoder: rt
} = l.global, ot = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, fr = (e) => {
  e = l.merge.call({
    skipUndefined: !0
  }, dr, e);
  const { fetch: t, Request: n, Response: s } = e, r = t ? pe(t) : typeof fetch == "function", o = pe(n), i = pe(s);
  if (!r)
    return !1;
  const a = r && pe(st), p = r && (typeof rt == "function" ? /* @__PURE__ */ ((d) => (w) => d.encode(w))(new rt()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), u = o && a && ot(() => {
    let d = !1;
    const w = new n(U.origin, {
      body: new st(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !w;
  }), c = i && a && ot(() => l.isReadableStream(new s("").body)), h = {
    stream: c && ((d) => d.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !h[d] && (h[d] = (w, g) => {
      let k = w && w[d];
      if (k)
        return k.call(w);
      throw new x(`Response type '${d}' is not supported`, x.ERR_NOT_SUPPORT, g);
    });
  });
  const b = async (d) => {
    if (d == null)
      return 0;
    if (l.isBlob(d))
      return d.size;
    if (l.isSpecCompliantForm(d))
      return (await new n(U.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(d) || l.isArrayBuffer(d))
      return d.byteLength;
    if (l.isURLSearchParams(d) && (d = d + ""), l.isString(d))
      return (await p(d)).byteLength;
  }, E = async (d, w) => {
    const g = l.toFiniteNumber(d.getContentLength());
    return g ?? b(w);
  };
  return async (d) => {
    let {
      url: w,
      method: g,
      data: k,
      signal: N,
      cancelToken: v,
      timeout: m,
      onDownloadProgress: y,
      onUploadProgress: O,
      responseType: C,
      headers: Q,
      withCredentials: ce = "same-origin",
      fetchOptions: Fe
    } = Dt(d), ze = t || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let ue = ar([N, v && v.toAbortSignal()], m), ee = null;
    const H = ue && ue.unsubscribe && (() => {
      ue.unsubscribe();
    });
    let He;
    try {
      if (O && u && g !== "get" && g !== "head" && (He = await E(Q, k)) !== 0) {
        let z = new n(w, {
          method: "POST",
          body: k,
          duplex: "half"
        }), X;
        if (l.isFormData(k) && (X = z.headers.get("content-type")) && Q.setContentType(X), z.body) {
          const [Se, de] = Ye(
            He,
            be(Qe(O))
          );
          k = tt(z.body, nt, Se, de);
        }
      }
      l.isString(ce) || (ce = ce ? "include" : "omit");
      const P = o && "credentials" in n.prototype, qe = {
        ...Fe,
        signal: ue,
        method: g.toUpperCase(),
        headers: Q.normalize().toJSON(),
        body: k,
        duplex: "half",
        credentials: P ? ce : void 0
      };
      ee = o && new n(w, qe);
      let F = await (o ? ze(ee, Fe) : ze(w, qe));
      const Je = c && (C === "stream" || C === "response");
      if (c && (y || Je && H)) {
        const z = {};
        ["status", "statusText", "headers"].forEach((Ve) => {
          z[Ve] = F[Ve];
        });
        const X = l.toFiniteNumber(F.headers.get("content-length")), [Se, de] = y && Ye(
          X,
          be(Qe(y), !0)
        ) || [];
        F = new s(
          tt(F.body, nt, Se, () => {
            de && de(), H && H();
          }),
          z
        );
      }
      C = C || "text";
      let Ft = await h[l.findKey(h, C) || "text"](F, d);
      return !Je && H && H(), await new Promise((z, X) => {
        Nt(z, X, {
          data: Ft,
          headers: j.from(F.headers),
          status: F.status,
          statusText: F.statusText,
          config: d,
          request: ee
        });
      });
    } catch (P) {
      throw H && H(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new x("Network Error", x.ERR_NETWORK, d, ee),
        {
          cause: P.cause || P
        }
      ) : x.from(P, P && P.code, d, ee);
    }
  };
}, pr = /* @__PURE__ */ new Map(), It = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: s, Response: r } = t, o = [
    s,
    r,
    n
  ];
  let i = o.length, a = i, p, u, c = pr;
  for (; a--; )
    p = o[a], u = c.get(p), u === void 0 && c.set(p, u = a ? /* @__PURE__ */ new Map() : fr(t)), c = u;
  return u;
};
It();
const Be = {
  http: As,
  xhr: ir,
  fetch: {
    get: It
  }
};
l.forEach(Be, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const it = (e) => `- ${e}`, hr = (e) => l.isFunction(e) || e === null || e === !1;
function mr(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: n } = e;
  let s, r;
  const o = {};
  for (let i = 0; i < n; i++) {
    s = e[i];
    let a;
    if (r = s, !hr(s) && (r = Be[(a = String(s)).toLowerCase()], r === void 0))
      throw new x(`Unknown adapter '${a}'`);
    if (r && (l.isFunction(r) || (r = r.get(t))))
      break;
    o[a || "#" + i] = r;
  }
  if (!r) {
    const i = Object.entries(o).map(
      ([p, u]) => `adapter ${p} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = n ? i.length > 1 ? `since :
` + i.map(it).join(`
`) : " " + it(i[0]) : "as no adapter specified";
    throw new x(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const Mt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: mr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Be
};
function Te(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new le(null, e);
}
function at(e) {
  return Te(e), e.headers = j.from(e.headers), e.data = ke.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mt.getAdapter(e.adapter || ae.adapter, e)(e).then(function(s) {
    return Te(e), s.data = ke.call(
      e,
      e.transformResponse,
      s
    ), s.headers = j.from(s.headers), s;
  }, function(s) {
    return $t(s) || (Te(e), s && s.response && (s.response.data = ke.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = j.from(s.response.headers))), Promise.reject(s);
  });
}
const jt = "1.13.3", Re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Re[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const lt = {};
Re.transitional = function(t, n, s) {
  function r(o, i) {
    return "[Axios v" + jt + "] Transitional option '" + o + "'" + i + (s ? ". " + s : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new x(
        r(i, " has been removed" + (n ? " in " + n : "")),
        x.ERR_DEPRECATED
      );
    return n && !lt[i] && (lt[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
Re.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function yr(e, t, n) {
  if (typeof e != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], i = t[o];
    if (i) {
      const a = e[o], p = a === void 0 || i(a, o, e);
      if (p !== !0)
        throw new x("option " + o + " must be " + p, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new x("Unknown option " + o, x.ERR_BAD_OPTION);
  }
}
const ye = {
  assertOptions: yr,
  validators: Re
}, B = ye.validators;
let W = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ge(),
      response: new Ge()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? o && !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + o) : s.stack = o;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = K(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 && ye.assertOptions(s, {
      silentJSONParsing: B.transitional(B.boolean),
      forcedJSONParsing: B.transitional(B.boolean),
      clarifyTimeoutError: B.transitional(B.boolean)
    }, !1), r != null && (l.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : ye.assertOptions(r, {
      encode: B.function,
      serialize: B.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ye.assertOptions(n, {
      baseUrl: B.spelling("baseURL"),
      withXsrfToken: B.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && l.merge(
      o.common,
      o[n.method]
    );
    o && l.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = j.concat(i, o);
    const a = [];
    let p = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (p = p && w.synchronous, a.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let c, h = 0, b;
    if (!p) {
      const d = [at.bind(this), void 0];
      d.unshift(...a), d.push(...u), b = d.length, c = Promise.resolve(n);
      let w = n;
      for (; h < b; )
        c = c.then(d[h++]).then((g) => {
          w = g !== void 0 ? g : w;
        }).catch(d[h++]).then(() => w);
      return c;
    }
    b = a.length;
    let E = n;
    for (; h < b; ) {
      const d = a[h++], w = a[h++];
      try {
        E = d(E);
      } catch (g) {
        w.call(this, g);
        break;
      }
    }
    try {
      c = at.call(this, E);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, b = u.length; h < b; )
      c = c.then(u[h++]).catch(u[h++]);
    return c;
  }
  getUri(t) {
    t = K(this.defaults, t);
    const n = Ut(t.baseURL, t.url, t.allowAbsoluteUrls);
    return kt(n, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  W.prototype[t] = function(n, s) {
    return this.request(K(s || {}, {
      method: t,
      url: n,
      data: (s || {}).data
    }));
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(o, i, a) {
      return this.request(K(a || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  W.prototype[t] = n(), W.prototype[t + "Form"] = n(!0);
});
let gr = class Lt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; )
        s._listeners[o](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const i = new Promise((a) => {
        s.subscribe(a), o = a;
      }).then(r);
      return i.cancel = function() {
        s.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      s.reason || (s.reason = new le(o, i, a), n(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (s) => {
      t.abort(s);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Lt(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function wr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function br(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Ie = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Ie).forEach(([e, t]) => {
  Ie[t] = e;
});
function Pt(e) {
  const t = new W(e), n = gt(W.prototype.request, t);
  return l.extend(n, W.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return Pt(K(e, r));
  }, n;
}
const T = Pt(ae);
T.Axios = W;
T.CanceledError = le;
T.CancelToken = gr;
T.isCancel = $t;
T.VERSION = jt;
T.toFormData = Ee;
T.AxiosError = x;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = wr;
T.isAxiosError = br;
T.mergeConfig = K;
T.AxiosHeaders = j;
T.formToJSON = (e) => At(l.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = Mt.getAdapter;
T.HttpStatusCode = Ie;
T.default = T;
const {
  Axios: Kr,
  AxiosError: Xr,
  CanceledError: Gr,
  isCancel: Zr,
  CancelToken: Yr,
  VERSION: Qr,
  all: eo,
  Cancel: to,
  isAxiosError: no,
  spread: so,
  toFormData: ro,
  AxiosHeaders: oo,
  HttpStatusCode: io,
  formToJSON: ao,
  getAdapter: lo,
  mergeConfig: co
} = T;
function xr() {
  const e = I(!1), t = I(null);
  return { post: async (s, r, o = null) => {
    e.value = !0, t.value = null;
    try {
      const { data: i } = await T.post(s, r, {
        headers: o ? { Authorization: `Bearer ${o}` } : {}
      });
      return i;
    } catch (i) {
      return t.value = i.response?.data?.message || "Error", null;
    } finally {
      e.value = !1;
    }
  }, loading: e, error: t };
}
const Bt = () => {
  const { post: e, loading: t, error: n } = xr(), s = "https://fastapi.dryutil.1mn.io/client/api/i/ona/ui_management", r = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", o = async (c) => {
    const h = {
      parent_id: "",
      typ: c.typ,
      name: c.name,
      dta: c.dta
      // { ce_file: {} }
    }, b = await e(`${s}?typ=create_ui_info`, h, r);
    if (!b.success) return console.error("Create UI failed:", b.message);
    _.canvasModules = [];
  }, i = async () => {
    const c = await e(`${s}?typ=list_ui_info`, { page: 1, page_size: 10 }, r);
    if (!c.success) return console.error("Load UI failed:", c.message);
    c.data.items.map((h) => ({
      id: h.id,
      label: h.name,
      type: h.typ,
      ce_file: h.dta?.ce_file || {}
    }));
  };
  return { url: s, token: r, loading: t, error: n, createUI: o, listUI: i, getUI: async (c) => {
    const h = await e(`${s}?typ=get_ui_info`, { id: c }, r);
    return h?.success ? h?.data : console.error("Get UI failed:", h?.message);
  }, updateUI: async (c) => {
    const h = {
      id: c.id,
      parent_id: "",
      typ: c.typ,
      name: c.name,
      dta: c.dta
      // { ce_file: {} }
    }, b = await e(`${s}?typ=update_ui_info`, h, r);
    if (!b.success) return console.error("Save UI failed:", b.message);
  }, deleteUI: async (c) => {
    const h = await e(`${s}?typ=delete_ui_info`, { id: c }, r);
    if (!h?.success) return console.error("Delete UI failed:", h.message);
    await i();
  } };
}, vr = { class: "flex flex-col" }, _r = { class: "px-4 py-4 bg-gray-50 flex flex-col gap-4" }, Er = { class: "flex justify-between items-center" }, Rr = { class: "capitalize leading-none text-sm" }, Sr = {
  key: 0,
  class: "text-xs text-gray-500"
}, Or = {
  key: 1,
  class: "text-xs text-gray-500"
}, Cr = { class: "flex flex-col gap-4" }, kr = { class: "flex flex-col text-sm" }, Tr = { class: "flex flex-col text-sm" }, Ar = { class: "flex flex-col text-sm" }, $r = { class: "flex items-center gap-4" }, Nr = ["disabled"], Ur = {
  key: 0,
  "class-old": "w-80 h-full border-l bg-white flex flex-col",
  class: "w-80 h-full border border-gray-300 bg-white flex flex-col"
}, Dr = {
  "class-old": "px-4 py-3 border-b bg-gray-50",
  class: "px-4 py-3 border-b border-b-gray-300 bg-gray-50"
}, Ir = { class: "text-xs text-gray-500 mt-1" }, Mr = { class: "text-xs font-medium text-gray-600 uppercase" }, jr = ["value", "onInput"], Lr = ["value"], Pr = {
  "class-old": "border-t p-4 bg-gray-50 space-y-2",
  class: "border-t border-t-gray-300 p-4 bg-gray-50 space-y-2"
}, Br = { class: "text-xs text-gray-400 text-center" }, Fr = {
  __name: "ConfigPanel",
  setup(e) {
    const { createUI: t, getUI: n, updateUI: s, deleteUI: r } = Bt(), o = Gt(
      () => _.canvasModules.find((m) => m.uid === _.selectedId)
    );
    function i(m, y) {
      _.update(o.value.uid, { [m]: y });
    }
    function a() {
      _.remove(o.value.uid);
    }
    const p = I(!1), u = I(""), c = I(""), h = I(""), b = I("create"), E = I(null), d = () => {
    }, w = (m) => {
      const O = `https://app.1mn.io/?run_module__d_e_v=${encodeURIComponent(`https://fastapi.dryutil.1mn.io/client-public/api/i/ona/ui_management?typ=ce_file&id=${m}`)}`;
      window.open(O, "_blank").focus();
    }, g = (m) => {
      const O = `https://fastapi.dryutil.1mn.io/client-public/api/i/ona/ui_management?typ=ce_file&id=${m}`, C = document.createElement("textarea");
      C.value = O, C.style.position = "fixed", document.body.appendChild(C), C.focus(), C.select(), document.execCommand("copy"), document.body.removeChild(C);
    }, k = async () => {
      console.log("--sync_dta");
      let m = {
        config: {
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        },
        data: {
          l: [
            // {
            //     "id": "3e1bc78c-checkout",
            //     "type": "checkout",
            //     "slug": "checkout",
            //     "data": {
            //         "data": "Hello world! ",
            //         "theme": "light"
            //     }
            // }
          ]
        }
      };
      for (const y of _.canvasModules)
        m.data.l.push(
          ...y.ce_data
        );
      console.log("saved _ce_file:", m), console.log("saved engine.canvasModules:", _.canvasModules), h.value = JSON.stringify(m || {}, null, 2);
    }, N = async () => {
      const m = JSON.parse(h.value || {});
      b.value === "create" ? await t({
        typ: c.value,
        name: u.value,
        dta: { ce_file: m }
      }) : await s({
        id: E.value,
        typ: c.value,
        name: u.value,
        dta: { ce_file: m }
        // dta.value
      });
    }, v = async () => {
      N();
    };
    return ut(_.canvasModules, async () => {
      await k();
    }), (async () => {
      const m = new URLSearchParams(location.search).get("id");
      if (!m) return d();
      b.value = "edit", E.value = m;
      const y = await n(m);
      if (y) {
        u.value = y.name, c.value = y.typ, h.value = JSON.stringify(y.dta, null, 2) ?? "";
        for (const O of y.dta.ce_file.data.l)
          _.canvasModules.push(_.formatBlock({ ce_file: y.dta.ce_file, curr: O }));
      }
    })(), (m, y) => (R(), S("aside", vr, [
      f("div", _r, [
        f("div", Er, [
          f("div", null, [
            f("p", Rr, D(b.value), 1),
            b.value === "create" ? (R(), S("p", Sr, "create new module")) : (R(), S("p", Or, "id: " + D(E.value), 1))
          ]),
          (R(), S("svg", {
            onClick: y[0] || (y[0] = (O) => g(E.value)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6 cursor-pointer"
          }, [...y[7] || (y[7] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15.75 17.25H8.25A2.25 2.25 0 0 1 6 15V6.75A2.25 2.25 0 0 1 8.25 4.5h4.5M15.75 17.25A2.25 2.25 0 0 0 18 15V9.75A2.25 2.25 0 0 0 15.75 7.5h-4.5A2.25 2.25 0 0 0 9 9.75v5.25A2.25 2.25 0 0 0 11.25 17.25h4.5Z"
            }, null, -1)
          ])])),
          (R(), S("svg", {
            onClick: y[1] || (y[1] = (O) => w(E.value)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6 cursor-pointer"
          }, [...y[8] || (y[8] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z"
            }, null, -1),
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            }, null, -1)
          ])])),
          (R(), S("svg", {
            onClick: y[2] || (y[2] = (O) => p.value = !p.value),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6 cursor-pointer"
          }, [...y[9] || (y[9] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            }, null, -1)
          ])])),
          (R(), S("svg", {
            onClick: y[3] || (y[3] = (O) => A(r)(E.value)),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6"
          }, [...y[10] || (y[10] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            }, null, -1)
          ])]))
        ]),
        fe(f("div", Cr, [
          f("div", kr, [
            y[11] || (y[11] = f("label", { class: "text-gray-600" }, "Name", -1)),
            fe(f("input", {
              "onUpdate:modelValue": y[4] || (y[4] = (O) => u.value = O),
              type: "text",
              placeholder: "Enter name",
              class: "p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            }, null, 512), [
              [Oe, u.value]
            ])
          ]),
          f("div", Tr, [
            y[12] || (y[12] = f("label", { class: "text-gray-600" }, "Type", -1)),
            fe(f("input", {
              "onUpdate:modelValue": y[5] || (y[5] = (O) => c.value = O),
              type: "text",
              placeholder: "Enter type",
              class: "p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            }, null, 512), [
              [Oe, c.value]
            ])
          ]),
          f("div", Ar, [
            y[13] || (y[13] = f("label", { class: "text-gray-600" }, "Dta", -1)),
            fe(f("textarea", {
              placeholder: "Enter dta",
              class: "p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500",
              "onUpdate:modelValue": y[6] || (y[6] = (O) => h.value = O),
              rows: "20",
              cols: "50"
            }, null, 512), [
              [Oe, h.value]
            ])
          ]),
          f("div", $r, [
            f("button", {
              onClick: v,
              disabled: !u.value || !c.value,
              class: "flex-1 p-2 bg-blue-500 text-white rounded capitalize disabled:opacity-50"
            }, D(b.value) + " UI", 9, Nr)
          ])
        ], 512), [
          [Xt, p.value]
        ])
      ]),
      o.value ? (R(), S("div", Ur, [
        f("div", Dr, [
          y[14] || (y[14] = f("h3", { class: "text-sm font-semibold text-gray-800" }, " CONFIGURATION ", -1)),
          f("p", Ir, D(o.value.type) + " component ", 1)
        ]),
        (R(!0), S(se, null, ge(o.value.ce_config, (O, C) => (R(), S("div", {
          key: C,
          class: "flex-1 overflow-auto p-4 space-y-1"
        }, [
          f("label", Mr, D(C), 1),
          typeof O != "object" ? (R(), S("input", {
            key: 0,
            class: "w-full rounded-md border px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500",
            value: O,
            onInput: (Q) => i(C, Q.target.value)
          }, null, 40, jr)) : (R(), S("textarea", {
            key: 1,
            class: "w-full rounded-md border px-3 py-2 text-sm font-mono whitespace-pre overflow-x-auto",
            value: JSON.stringify(O, null, 2),
            rows: "5",
            disabled: ""
          }, null, 8, Lr))
        ]))), 128)),
        f("div", Pr, [
          f("button", {
            onClick: a,
            class: "w-full text-sm font-medium text-red-600 border border-red-200 rounded-md py-2 hover:bg-red-50"
          }, " Remove Component "),
          f("p", Br, " ID: " + D(o.value.slug), 1)
        ])
      ])) : G("", !0)
    ]));
  }
}, zr = { class: "grid grid-cols-[220px_1fr_320px] h-screen" }, Hr = /* @__PURE__ */ Me({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const { listUI: t } = Bt();
    return ct(async () => await t()), (async () => (e._p.my.emitter = e._p.f.new_emitter(), e._p.my.emitter.on("msg", async (n) => {
      console.log("_p.my.emitter.on", n);
    }), await e._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: e._p,
      _$p: e._$p
    })))(), (n, s) => (R(), S("div", zr, [
      ne(gn, {
        _p: e._p,
        __p: e._$p
      }, null, 8, ["_p", "__p"]),
      ne(qn, {
        _p: e._p,
        __p: e._$p
      }, null, 8, ["_p", "__p"]),
      ne(Fr, {
        _p: e._p,
        __p: e._$p
      }, null, 8, ["_p", "__p"])
    ]));
  }
}), uo = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const s = Zt(Hr, {
      _p: e,
      _$p: t
    }), r = {
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
    }, o = document.getElementById(e.f.name("vue-root"));
    return s.mount(o), r;
  }
});
export {
  uo as hydrator,
  uo as index
};
