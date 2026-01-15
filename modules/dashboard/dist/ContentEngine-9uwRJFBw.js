import { u as T } from "./main-BuXBcYFI.js";
import { d as b, X as y, a1 as j, a2 as B, H as g, G as O, K as R, L } from "./runtime-dom.esm-bundler-C71lIG0B.js";
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
      ((l) => {
        const r = (a) => {
          ((o) => {
            const i = o.getAttribute("data-ce");
            if (!i)
              return;
            const c = JSON.parse(i).filter((s) => s?.k.startsWith("t-"));
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
        for (const a of l.getElementsByTagName("*"))
          r(a);
        r(l);
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
  return new Promise((l) => {
    const r = () => {
      console.log(`[setInterval] is running.. [count=${t.cnt}]`);
      try {
        e() && (clearInterval(a), l());
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
      } catch (l) {
        this.listeners.error?.forEach(
          (r) => r(l)
        );
      }
  };
};
const h = () => new P();
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
let m = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const n = e?.lib || [];
      for (const [t, l] of n.entries()) {
        const r = l, a = `${r.name}:${e.run_from}`, o = `${e.run_from}_src`;
        let i = r[o];
        const c = `${e.run_from}_src`;
        let s = e?.lazy_lib?.[c] || null;
        if (s && (s = s.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${s}`), console.log(`_src: ${i}`), m.lib.l.hasOwnProperty(`${a}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(i) && i.includes("/") == !1 && m.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (s)
              i = s;
            else
              throw `[lib-name=${r.name},lib-src=${i}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (i.startsWith("./") || i.startsWith("../")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${i}`
            );
            m.lib.l[`${a}`] = {
              lib: d,
              src: i
            };
          }
          if (i.startsWith("http://") || i.startsWith("https://")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${i}`
            );
            m.lib.l[`${a}`] = {
              lib: d,
              src: i
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
      const l = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (t = "/dist"), l.indexOf(e.type) !== -1)
        for (const [r, a] of l.entries()) {
          let o = r == 0 ? "" : "/";
          if (n += `${o}${a}`, a == e.type)
            return `${n}${t}${e.name}`;
        }
      else
        for (const [r, a] of l.entries()) {
          let o = r == 0 ? "" : "/";
          if (n += `${o}${a}`, a == "src")
            return `${n}${t}${e.name}`;
        }
      return `${n}${t}${e.name}`;
    }
  }
};
const z = h(), k = h(), C = z.on;
z.emit;
const I = k.emit;
k.on;
const W = async (e) => {
  const n = await x();
  return await m.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (t) => {
      console.log("--renderer [set]"), t.return = t?.return || {}, t.return.r = t?.return?.r || "full";
      const l = new v();
      l.start();
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
          const i = await await m.lib.get({ name: o.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await i.lib.index({
            f: {
              name: (s) => n.f.name({ id: o.id, name: s }),
              get_lib: async (s) => await await m.lib.get({ name: s.name, run_from: s.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (s) => await (await $()).set(s),
              path: (s) => m.path.set({ src: i.src, type: o.type, name: s }),
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
      })(), l.stop(), a.benchmark = l.result(), a;
    }
  };
}, H = async (e) => {
  const n = await x();
  return await m.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (t) => {
      console.log("--hydrator [set]");
      const l = new v();
      l.start();
      let r = {
        r: "",
        style: ""
      }, a = {
        style_id: `${w().set()}_stl`
      }, o = t.data?.value?.l || t.data.l;
      const i = async () => {
        for (const c of o) {
          const s = await await m.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), d = s.lib, _ = h(), f = _.on, E = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => n.f.name({ id: c.id, name: u }),
              get_lib: async (u) => await await m.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (u) => await (await $()).set(u),
              path: (u) => m.path.set({ src: s.src, type: c.type, name: u }),
              //set..
              uuid: () => w().set(),
              wait_until: p,
              //set..
              call: I,
              listen: f,
              //set..
              new_emitter: () => h()
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          C("msg", async (u) => {
            try {
              if (Object.keys(u.where || {}).length == 0) {
                await _.emit("msg", u);
                return;
              }
            } catch {
            }
            try {
              if (c?.[u.where?.key || ""] == u.where?.value) {
                await _.emit("msg", u);
                return;
              }
            } catch {
            }
          }), r.style += E.style;
        }
      };
      await p(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await i();
      try {
        ((c) => {
          const s = document.getElementById(`${a.style_id}`);
          s && s.remove();
          const d = document.createElement("style");
          d.id = `${a.style_id}`, d.innerHTML = `${r.style}`, c.appendChild(d);
        })(document.head);
      } catch (c) {
        console.log(`${c}, Failed to set style..`);
      }
      return l.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: l.result()
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
    const n = T(), t = y({
      ce_file: n?.meta?.ce_file
    }), l = y(null), r = y(null);
    let a = "";
    return (async () => {
      try {
        const f = await (await fetch(t.value.ce_file)).json();
        l.value = f;
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
      }, i = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      o = l.value.data, i.lazy_lib = l.value.config.lazy_lib;
      const c = await W(i), s = await H(i);
      await (async () => {
        const _ = await c.set({
          data: o
        });
        r.value = _.r, a = _.style;
        const f = document.createElement("style");
        document.head.appendChild(f), f.innerHTML = a, setTimeout(async () => {
          await s.set({
            data: o
          });
        }, 10);
      })();
    })(), (o, i) => r.value ? (g(), j("div", {
      key: 0,
      innerHTML: r.value
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
    return (t, l) => (g(), O(S, R(L(n)), null, 16));
  }
});
export {
  F as default
};
