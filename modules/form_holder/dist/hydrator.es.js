import { d as B, o as y, c as p, a as v, t as O, b as L, F as I, r as R, e as b, f as P } from "./runtime-dom.esm-bundler-BQo8LPmC.js";
const x = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const n = Math.random() * 16 | 0;
    return (e == "x" ? n : n & 3 | 8).toString(16);
  })
}), z = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), k = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const n = e.name, t = document.getElementById(e.el_id);
      if (!t)
        throw new Error("[el_id] is invalid");
      ((i) => {
        const r = (a) => {
          ((o) => {
            const l = o.getAttribute("data-ce");
            if (!l)
              return;
            const c = JSON.parse(l).filter((s) => s?.k.startsWith("t-"));
            if (c.length != 0)
              for (const s of c) {
                const u = s.k, f = s.v.split(" ");
                if (u == `t-${n}-class`)
                  for (const _ of f)
                    o.classList.add(_);
                else
                  for (const _ of f)
                    o.classList.remove(_);
              }
          })(a);
        };
        for (const a of i.getElementsByTagName("*"))
          r(a);
        r(i);
      })(t);
    } catch (n) {
      const t = `err: [theme] ${n}`;
      throw console.log(t), t;
    }
  }
});
function $(e, n = 1e3) {
  let t = {
    cnt: 0
  };
  return new Promise((i) => {
    const r = () => {
      console.log(`[setInterval] is running.. [count=${t.cnt}]`);
      try {
        e() && (clearInterval(a), i());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${n}]`);
      }
      t.cnt += 1;
    }, a = setInterval(() => {
      r();
    }, n);
    r();
  });
}
let S = class {
  listeners = {};
  on = (e, n) => ((this.listeners[e] ||= []).push(n), () => this.off(e, n));
  off = (e, n) => {
    this.listeners[e] = this.listeners[e]?.filter((t) => t !== n);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...n) => {
    for (const t of this.listeners[e] ?? [])
      await t(...n);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...n) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((t) => t(...n))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...n) => {
    for (const t of this.listeners[e] ?? [])
      try {
        await t(...n);
      } catch (i) {
        this.listeners.error?.forEach(
          (r) => r(i)
        );
      }
  };
};
const w = () => new S();
class j {
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
let m = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const n = e?.lib || [];
      for (const [t, i] of n.entries()) {
        const r = i, a = `${r.name}:${e.run_from}`, o = `${e.run_from}_src`;
        let l = r[o];
        const c = `${e.run_from}_src`;
        let s = e?.lazy_lib?.[c] || null;
        if (s && (s = s.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${s}`), console.log(`_src: ${l}`), m.lib.l.hasOwnProperty(`${a}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(l) && l.includes("/") == !1 && m.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (s)
              l = s;
            else
              throw `[lib-name=${r.name},lib-src=${l}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (l.startsWith("./") || l.startsWith("../")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            m.lib.l[`${a}`] = {
              lib: u,
              src: l
            };
          }
          if (l.startsWith("http://") || l.startsWith("https://")) {
            const u = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            m.lib.l[`${a}`] = {
              lib: u,
              src: l
            };
          }
        }
      }
      console.log(await m.lib.get_all({}));
    },
    get: async (e) => {
      let n = null;
      const t = `${e.name}:${e.run_from}`;
      return m.lib.l.hasOwnProperty(`${t}`) == !1 && await m.lib.set({
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
      }), n = m.lib.l[`${t}`], n;
    },
    get_all: async (e) => m.lib.l
  },
  path: {
    set: (e) => {
      let n = "", t = "";
      const i = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (t = "/dist"), i.indexOf(e.type) !== -1)
        for (const [r, a] of i.entries()) {
          let o = r == 0 ? "" : "/";
          if (n += `${o}${a}`, a == e.type)
            return `${n}${t}${e.name}`;
        }
      else
        for (const [r, a] of i.entries()) {
          let o = r == 0 ? "" : "/";
          if (n += `${o}${a}`, a == "src")
            return `${n}${t}${e.name}`;
        }
      return `${n}${t}${e.name}`;
    }
  }
};
const E = w(), T = w(), W = E.on;
E.emit;
const M = T.emit;
T.on;
const N = async (e) => {
  const n = await z();
  return await m.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (t) => {
      console.log("--renderer [set]"), t.return = t?.return || {}, t.return.r = t?.return?.r || "full";
      const i = new j();
      i.start();
      let r = t.data?.value?.l || t.data.l, a = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return t.return.r == "full" ? a.r = "" : a.r = [], await (async () => {
        for (const o of r) {
          const l = await await m.lib.get({ name: o.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await l.lib.index({
            f: {
              name: (s) => n.f.name({ id: o.id, name: s }),
              get_lib: async (s) => await await m.lib.get({ name: s.name, run_from: s.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (s) => await (await k()).set(s),
              path: (s) => m.path.set({ src: l.src, type: o.type, name: s }),
              //set..
              uuid: () => x().set(),
              wait_until: $
            }
          })).set(
            {
              data: {
                curr: o
              }
            }
            /*_$cb*/
          );
          t?.return?.r == "full" ? a.r += c?.r || "" : a.r.push(c?.r || ""), a.style += c?.style || "", a.head += c?.head || "";
        }
      })(), i.stop(), a.benchmark = i.result(), a;
    }
  };
}, C = async (e) => {
  const n = await z();
  return await m.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (t) => {
      console.log("--hydrator [set]");
      const i = new j();
      i.start();
      let r = {
        r: "",
        style: ""
      }, a = {
        style_id: `${x().set()}_stl`
      }, o = t.data?.value?.l || t.data.l;
      const l = async () => {
        for (const c of o) {
          const s = await await m.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), u = s.lib, f = w(), _ = f.on, h = await (await u.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (d) => n.f.name({ id: c.id, name: d }),
              get_lib: async (d) => await await m.lib.get({ name: d.name, run_from: d.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (d) => await (await k()).set(d),
              path: (d) => m.path.set({ src: s.src, type: c.type, name: d }),
              //set..
              uuid: () => x().set(),
              wait_until: $,
              //set..
              call: M,
              listen: _,
              //set..
              new_emitter: () => w()
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          W("msg", async (d) => {
            try {
              if (Object.keys(d.where || {}).length == 0) {
                await f.emit("msg", d);
                return;
              }
            } catch {
            }
            try {
              if (c?.[d.where?.key || ""] == d.where?.value) {
                await f.emit("msg", d);
                return;
              }
            } catch {
            }
          }), r.style += h.style;
        }
      };
      await $(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await l();
      try {
        ((c) => {
          const s = document.getElementById(`${a.style_id}`);
          s && s.remove();
          const u = document.createElement("style");
          u.id = `${a.style_id}`, u.innerHTML = `${r.style}`, c.appendChild(u);
        })(document.head);
      } catch (c) {
        console.log(`${c}, Failed to set style..`);
      }
      return i.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: i.result()
      };
    }
  };
}, F = { class: "bg-gray-100 flex items-center justify-center min-h-screen" }, H = {
  "class-old": "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm",
  class: "bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
}, A = {
  key: 0,
  class: "text-2xl font-bold text-center mb-6"
}, V = ["innerHTML"], q = /* @__PURE__ */ B({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const n = e;
    let t = [];
    const i = b([]), r = b(null), a = b(null);
    let o = "";
    const l = () => {
      i.value = [];
      const s = t, u = [...s.keys()].filter((f) => s[f].type == "form_section");
      for (const f of u) {
        let _ = {
          _s: ""
        };
        for (const [h, d] of s.entries())
          try {
            s[f].id == d.data.form.section_id && (_._s += ` ${a.value[h]} `);
          } catch {
          }
        i.value.push(` 
        <div class='p-2'>
        
        <div>
        ${a.value[f]} 
        </div>

        <div class='flex flex-wrap gap-2 md:gap-3' >
        ${_._s}
        </div>

        </div>
        
        `);
      }
    }, c = async () => {
      (async () => {
        r.value = {
          config: {
            lazy_lib: {
              renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
              hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
              editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
            }
          },
          data: {
            // "l": [
            //     {
            //         "id": "7bc78c-carousel",
            //         "type": "carousel",
            //         "slug": "carousel",
            //         "data": {
            //             "data": "",
            //             "theme": "light",
            //             "foo": ""
            //         }
            //     },
            //     {
            //         "id": "3e1bc78c-cart_popup",
            //         "type": "cart_popup",
            //         "slug": "cart_popup",
            //         "data": {
            //             "data": "",
            //             "theme": "light",
            //             "env": "dev"
            //         }
            //     }
            // ]
            l: t
          }
        };
        let s = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
              type: "text",
              data: {
                data: "Loading.."
              }
            }
          ]
        }, u = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
          }
        };
        s = r.value.data, u.lazy_lib = r.value.config.lazy_lib;
        const f = await N(u), _ = await C(u);
        await (async () => {
          const d = await f.set({
            data: s,
            return: {
              r: "chunk"
            }
          });
          console.log(d.r), a.value = d.r, o = d.style, i.value = a.value, l();
          const g = document.createElement("style");
          document.head.appendChild(g), g.innerHTML = o, setTimeout(async () => {
            await _.set({
              data: s
            });
          }, 10);
        })();
      })();
    };
    return (async () => {
      try {
        typeof n._$p.data.curr.data.ce_file == "string" ? t = (await (await fetch(n._$p.data.curr.data.ce_file)).json()).data.l : t = n._$p.data.curr.data.ce_file.data.l;
      } catch (s) {
        console.log(s);
        return;
      }
      console.log(t), await c();
    })(), (s, u) => (y(), p("div", F, [
      v("div", H, [
        e._$p.data.curr.data.title ? (y(), p("h2", A, O(e._$p.data.curr.data.title), 1)) : L("", !0),
        (y(!0), p(I, null, R(i.value, (f) => (y(), p("div", null, [
          v("div", { innerHTML: f }, null, 8, V)
        ]))), 256))
      ])
    ]));
  }
}), J = async (e) => ({
  set: async (n) => {
    console.log(`--hydrator [${n.data.curr.type}]`);
    const i = P(q, {
      _p: e,
      _$p: n
    }), r = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: n,
            custom: {}
          });
        }
      }
    }, a = document.getElementById(e.f.name("vue-root"));
    return i.mount(a), r;
  }
});
export {
  J as hydrator,
  J as index
};
