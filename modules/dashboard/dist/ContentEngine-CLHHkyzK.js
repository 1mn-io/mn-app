import { u as T } from "./main-BOMyx_no.js";
import { d as b, X as h, a1 as j, a2 as B, H as g, G as O, K as R, L } from "./runtime-dom.esm-bundler-7m8Vyt41.js";
const w = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const n = Math.random() * 16 | 0;
    return (e == "x" ? n : n & 3 | 8).toString(16);
  })
}), x = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), $ = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const n = e.name, t = document.getElementById(e.el_id);
      if (!t)
        throw new Error("[el_id] is invalid");
      ((r) => {
        const i = (a) => {
          ((o) => {
            const l = o.getAttribute("data-ce");
            if (!l)
              return;
            const c = JSON.parse(l).filter((s) => s?.k.startsWith("t-"));
            if (c.length != 0)
              for (const s of c) {
                const d = s.k, _ = s.v.split(" ");
                if (d == `t-${n}-class`)
                  for (const f of _)
                    o.classList.add(f);
                else
                  for (const f of _)
                    o.classList.remove(f);
              }
          })(a);
        };
        for (const a of r.getElementsByTagName("*"))
          i(a);
        i(r);
      })(t);
    } catch (n) {
      const t = `err: [theme] ${n}`;
      throw console.log(t), t;
    }
  }
});
function p(e, n = 1e3) {
  let t = {
    cnt: 0
  };
  return new Promise((r) => {
    const i = () => {
      console.log(`[setInterval] is running.. [count=${t.cnt}]`);
      try {
        e() && (clearInterval(a), r());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${n}]`);
      }
      t.cnt += 1;
    }, a = setInterval(() => {
      i();
    }, n);
    i();
  });
}
let P = class {
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
      } catch (r) {
        this.listeners.error?.forEach(
          (i) => i(r)
        );
      }
  };
};
const y = () => new P();
class v {
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
let u = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const n = e?.lib || [];
      for (const [t, r] of n.entries()) {
        const i = r, a = `${i.name}:${e.run_from}`, o = `${e.run_from}_src`;
        let l = i[o];
        const c = `${e.run_from}_src`;
        let s = e?.lazy_lib?.[c] || null;
        if (s && (s = s.replace("{*}", `${i.name}`)), console.log(`_lazy_src: ${s}`), console.log(`_src: ${l}`), u.lib.l.hasOwnProperty(`${a}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(l) && l.includes("/") == !1 && u.lib.inbuilt_lib.indexOf(`${i.name}`) === -1)
            if (s)
              l = s;
            else
              throw `[lib-name=${i.name},lib-src=${l}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (l.startsWith("./") || l.startsWith("../")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            u.lib.l[`${a}`] = {
              lib: d,
              src: l
            };
          }
          if (l.startsWith("http://") || l.startsWith("https://")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            u.lib.l[`${a}`] = {
              lib: d,
              src: l
            };
          }
        }
      }
      console.log(await u.lib.get_all({}));
    },
    get: async (e) => {
      let n = null;
      const t = `${e.name}:${e.run_from}`;
      return u.lib.l.hasOwnProperty(`${t}`) == !1 && await u.lib.set({
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
      }), n = u.lib.l[`${t}`], n;
    },
    get_all: async (e) => u.lib.l
  },
  path: {
    set: (e) => {
      let n = "", t = "";
      const r = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (t = "/dist"), r.indexOf(e.type) !== -1)
        for (const [i, a] of r.entries()) {
          let o = i == 0 ? "" : "/";
          if (n += `${o}${a}`, a == e.type)
            return `${n}${t}${e.name}`;
        }
      else
        for (const [i, a] of r.entries()) {
          let o = i == 0 ? "" : "/";
          if (n += `${o}${a}`, a == "src")
            return `${n}${t}${e.name}`;
        }
      return `${n}${t}${e.name}`;
    }
  }
};
const z = y(), k = y(), C = z.on;
z.emit;
const I = k.emit;
k.on;
const W = async (e) => {
  const n = await x();
  return await u.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (t) => {
      console.log("--renderer [set]"), t.return = t?.return || {}, t.return.r = t?.return?.r || "full";
      const r = new v();
      r.start();
      let i = t.data?.value?.l || t.data.l, a = {
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
        for (const o of i) {
          const l = await await u.lib.get({ name: o.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await l.lib.index({
            f: {
              name: (s) => n.f.name({ id: o.id, name: s }),
              get_lib: async (s) => await await u.lib.get({ name: s.name, run_from: s.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (s) => await (await $()).set(s),
              path: (s) => u.path.set({ src: l.src, type: o.type, name: s }),
              //set..
              uuid: () => w().set(),
              wait_until: p
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
      })(), r.stop(), a.benchmark = r.result(), a;
    }
  };
}, H = async (e) => {
  const n = await x();
  return await u.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (t) => {
      console.log("--hydrator [set]");
      const r = new v();
      r.start();
      let i = {
        r: "",
        style: ""
      }, a = {
        style_id: `${w().set()}_stl`
      }, o = t.data?.value?.l || t.data.l;
      const l = async () => {
        for (const c of o) {
          const s = await await u.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), d = s.lib, _ = y(), f = _.on, E = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (m) => n.f.name({ id: c.id, name: m }),
              get_lib: async (m) => await await u.lib.get({ name: m.name, run_from: m.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (m) => await (await $()).set(m),
              path: (m) => u.path.set({ src: s.src, type: c.type, name: m }),
              //set..
              uuid: () => w().set(),
              wait_until: p,
              //set..
              call: I,
              listen: f,
              //set..
              new_emitter: () => y()
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          C("msg", async (m) => {
            try {
              if (Object.keys(m.where || {}).length == 0) {
                await _.emit("msg", m);
                return;
              }
            } catch {
            }
            try {
              if (c?.[m.where?.key || ""] == m.where?.value) {
                await _.emit("msg", m);
                return;
              }
            } catch {
            }
          }), i.style += E.style;
        }
      };
      await p(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await l();
      try {
        ((c) => {
          const s = document.getElementById(`${a.style_id}`);
          s && s.remove();
          const d = document.createElement("style");
          d.id = `${a.style_id}`, d.innerHTML = `${i.style}`, c.appendChild(d);
        })(document.head);
      } catch (c) {
        console.log(`${c}, Failed to set style..`);
      }
      return r.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: r.result()
      };
    }
  };
}, M = ["innerHTML"], S = /* @__PURE__ */ b({
  __name: "ContentEngine",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const n = T(), t = h({
      ce_file: n?.meta?.ce_file
    }), r = h(null), i = h(null);
    let a = "";
    return (async () => {
      try {
        if (typeof t.value.ce_file == "string") {
          const f = await (await fetch(t.value.ce_file)).json();
          r.value = f;
        } else
          r.value = t.value.ce_file;
      } catch (_) {
        console.log(_);
        return;
      }
      let o = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, l = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      o = r.value.data, l.lazy_lib = r.value.config.lazy_lib;
      const c = await W(l), s = await H(l);
      await (async () => {
        const _ = await c.set({
          data: o
        });
        i.value = _.r, a = _.style;
        const f = document.createElement("style");
        document.head.appendChild(f), f.innerHTML = a, setTimeout(async () => {
          await s.set({
            data: o
          });
        }, 10);
      })();
    })(), (o, l) => i.value ? (g(), j("div", {
      key: 0,
      innerHTML: i.value
    }, null, 8, M)) : B("", !0);
  }
}), F = /* @__PURE__ */ b({
  __name: "ContentEngine",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const n = e;
    return (t, r) => (g(), O(S, R(L(n)), null, 16));
  }
});
export {
  F as default
};
