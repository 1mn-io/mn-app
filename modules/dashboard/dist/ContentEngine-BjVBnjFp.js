import { u as O } from "./main-CqXdokfd.js";
import { d as b, X as h, a1 as R, a2 as S, H as g, G as j, K as B, L as N } from "./runtime-dom.esm-bundler-7m8Vyt41.js";
const p = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), $ = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), x = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((r) => {
        const s = (o) => {
          ((l) => {
            const a = l.getAttribute("data-ce");
            if (!a)
              return;
            const f = JSON.parse(a).filter((i) => i?.k.startsWith("t-"));
            if (f.length != 0)
              for (const i of f) {
                const c = i.k, m = i.v.split(" ");
                if (c == `t-${t}-class`)
                  for (const d of m)
                    l.classList.add(d);
                else
                  for (const d of m)
                    l.classList.remove(d);
              }
          })(o);
        };
        for (const o of r.getElementsByTagName("*"))
          s(o);
        s(r);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function w(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((r) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(o), r());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, o = setInterval(() => {
      s();
    }, t);
    s();
  });
}
let L = class {
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
      } catch (r) {
        this.listeners.error?.forEach(
          (s) => s(r)
        );
      }
  };
};
const y = () => new L();
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
      const t = e?.lib || [];
      for (const [n, r] of t.entries()) {
        const s = r, o = `${s.name}:${e.run_from}`, l = `${e.run_from}_src`;
        let a = s[l];
        const f = `${e.run_from}_src`;
        let i = e?.lazy_lib?.[f] || null;
        if (i && (i = i.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${a}`), u.lib.l.hasOwnProperty(`${o}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(a) && a.includes("/") == !1 && u.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (i)
              a = i;
            else
              throw `[lib-name=${s.name},lib-src=${a}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (a.startsWith("./") || a.startsWith("../")) {
            const c = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${a}`
            );
            u.lib.l[`${o}`] = {
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
            u.lib.l[`${o}`] = {
              lib: c,
              src: a
            };
          }
        }
      }
      console.log(await u.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      if (u.lib.l.hasOwnProperty(`${n}`) == !1) {
        let r = [{
          renderer_src: e.name,
          hydrator_src: e.name,
          editor_src: e.name,
          name: e.name
        }];
        try {
          ["name", "renderer", "hydrator", "editor"].indexOf(e.run_from) === -1 && (r[0][`${e.run_from}_src`] = e.name);
        } catch (s) {
          console.log(`_lib_a[0] failed to set custom run_from ${s}`);
        }
        await u.lib.set({
          lib: r,
          run_from: e.run_from,
          lazy_lib: e.lazy_lib
        });
      }
      return t = u.lib.l[`${n}`], t;
    },
    get_all: async (e) => u.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const r = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), r.indexOf(e.type) !== -1)
        for (const [s, o] of r.entries()) {
          let l = s == 0 ? "" : "/";
          if (t += `${l}${o}`, o == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [s, o] of r.entries()) {
          let l = s == 0 ? "" : "/";
          if (t += `${l}${o}`, o == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const z = y(), k = y(), I = z.on, P = z.emit, C = k.emit, J = k.on, H = async (e) => {
  const t = await $(), n = JSON.parse(JSON.stringify(e));
  return n.run ??= "renderer", await u.lib.set({ lib: e.lib, run_from: n.run, lazy_lib: e.lazy_lib }), {
    set: async (r) => {
      console.log("--renderer [set]"), r.return = r?.return || {}, r.return.r = r?.return?.r || "full";
      const s = new v();
      s.start();
      let o = r.data?.value?.l || r.data.l, l = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return r.return.r == "full" ? l.r = "" : l.r = [], await (async () => {
        for (const a of o) {
          const f = await await u.lib.get({ name: a.type, run_from: n.run, lazy_lib: e.lazy_lib }), i = await (await f.lib.index({
            f: {
              name: (c) => t.f.name({ id: a.id, name: c }),
              get_lib: async (c) => await await u.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (c) => await (await x()).set(c),
              path: (c) => u.path.set({ src: f.src, type: a.type, name: c }),
              //set..
              uuid: () => p().set(),
              wait_until: w
            },
            //set..
            custom: e.custom
          })).set(
            {
              data: {
                curr: a
              }
            }
            /*_$cb*/
          );
          r?.return?.r == "full" ? l.r += i?.r || "" : l.r.push(i?.r || ""), l.style += i?.style || "", l.head += i?.head || "";
        }
      })(), s.stop(), l.benchmark = s.result(), l;
    }
  };
}, M = async (e) => {
  const t = JSON.parse(JSON.stringify(e));
  t.run ??= "hydrator";
  const n = await $();
  return await u.lib.set({ lib: e.lib, run_from: t.run, lazy_lib: e.lazy_lib }), {
    set: async (r) => {
      console.log("--hydrator [set]");
      const s = new v();
      s.start();
      let o = {
        r: "",
        style: ""
      }, l = {
        style_id: `${p().set()}_stl`
      }, a = r.data?.value?.l || r.data.l;
      const f = async () => {
        for (const i of a) {
          const c = await await u.lib.get({ name: i.type, run_from: t.run, lazy_lib: e.lazy_lib }), m = c.lib, d = y(), E = d.on, T = await (await m.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (_) => n.f.name({ id: i.id, name: _ }),
              get_lib: async (_) => await await u.lib.get({ name: _.name, run_from: _.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (_) => await (await x()).set(_),
              path: (_) => u.path.set({ src: c.src, type: i.type, name: _ }),
              //set..
              uuid: () => p().set(),
              wait_until: w,
              //set..
              call: C,
              listen: E,
              //set..
              new_emitter: () => y()
            },
            //set..
            custom: e.custom
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          I("msg", async (_) => {
            try {
              if (Object.keys(_.where || {}).length == 0) {
                await d.emit("msg", _);
                return;
              }
            } catch {
            }
            try {
              if (i?.[_.where?.key || ""] == _.where?.value) {
                await d.emit("msg", _);
                return;
              }
            } catch {
            }
          }), o.style += T.style;
        }
      };
      await w(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await f();
      try {
        ((i) => {
          const c = document.getElementById(`${l.style_id}`);
          c && c.remove();
          const m = document.createElement("style");
          m.id = `${l.style_id}`, m.innerHTML = `${o.style}`, i.appendChild(m);
        })(document.head);
      } catch (i) {
        console.log(`${i}, Failed to set style..`);
      }
      return s.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: s.result()
      };
    }
  };
}, W = ["innerHTML"], A = /* @__PURE__ */ b({
  __name: "ContentEngine",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const t = O(), n = h({
      ce_file: t?.meta?.ce_file
    }), r = h(null), s = h(null);
    let o = "";
    return (async () => {
      try {
        if (typeof n.value.ce_file == "string") {
          const d = await (await fetch(n.value.ce_file)).json();
          r.value = d;
        } else
          r.value = n.value.ce_file;
      } catch (m) {
        console.log(m);
        return;
      }
      let l = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, a = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        },
        custom: {
          fn: {
            ce_call: P,
            ce_listen: J
          },
          var: {}
        }
      };
      l = r.value.data, a.lazy_lib = r.value.config.lazy_lib;
      const f = await H(a), i = await M(a);
      await (async () => {
        const m = await f.set({
          data: l
        });
        s.value = m.r, o = m.style;
        const d = document.createElement("style");
        document.head.appendChild(d), d.innerHTML = o, setTimeout(async () => {
          await i.set({
            data: l
          });
        }, 10);
      })();
    })(), (l, a) => s.value ? (g(), R("div", {
      key: 0,
      innerHTML: s.value
    }, null, 8, W)) : S("", !0);
  }
}), G = /* @__PURE__ */ b({
  __name: "ContentEngine",
  props: {
    _p: {},
    __p: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (g(), j(A, B(N(t)), null, 16));
  }
});
export {
  G as default
};
