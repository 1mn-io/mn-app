import { d as T, o as y, c as p, a as $, t as B, b as O, F as L, r as I, e as g, f as R } from "./runtime-dom.esm-bundler-BQo8LPmC.js";
const b = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), v = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), z = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((l) => {
        const i = (s) => {
          ((c) => {
            const o = c.getAttribute("data-ce");
            if (!o)
              return;
            const r = JSON.parse(o).filter((a) => a?.k.startsWith("t-"));
            if (r.length != 0)
              for (const a of r) {
                const d = a.k, f = a.v.split(" ");
                if (d == `t-${t}-class`)
                  for (const _ of f)
                    c.classList.add(_);
                else
                  for (const _ of f)
                    c.classList.remove(_);
              }
          })(s);
        };
        for (const s of l.getElementsByTagName("*"))
          i(s);
        i(l);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function x(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((l) => {
    const i = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(s), l());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, s = setInterval(() => {
      i();
    }, t);
    i();
  });
}
let P = class {
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
      } catch (l) {
        this.listeners.error?.forEach(
          (i) => i(l)
        );
      }
  };
};
const w = () => new P();
class k {
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
      const t = e?.lib || [];
      for (const [n, l] of t.entries()) {
        const i = l, s = `${i.name}:${e.run_from}`, c = `${e.run_from}_src`;
        let o = i[c];
        const r = `${e.run_from}_src`;
        let a = e?.lazy_lib?.[r] || null;
        if (a && (a = a.replace("{*}", `${i.name}`)), console.log(`_lazy_src: ${a}`), console.log(`_src: ${o}`), m.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && m.lib.inbuilt_lib.indexOf(`${i.name}`) === -1)
            if (a)
              o = a;
            else
              throw `[lib-name=${i.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            m.lib.l[`${s}`] = {
              lib: d,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            m.lib.l[`${s}`] = {
              lib: d,
              src: o
            };
          }
        }
      }
      console.log(await m.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return m.lib.l.hasOwnProperty(`${n}`) == !1 && await m.lib.set({
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
      }), t = m.lib.l[`${n}`], t;
    },
    get_all: async (e) => m.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const l = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), l.indexOf(e.type) !== -1)
        for (const [i, s] of l.entries()) {
          let c = i == 0 ? "" : "/";
          if (t += `${c}${s}`, s == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [i, s] of l.entries()) {
          let c = i == 0 ? "" : "/";
          if (t += `${c}${s}`, s == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const j = w(), E = w(), S = j.on;
j.emit;
const W = E.emit;
E.on;
const M = async (e) => {
  const t = await v();
  return await m.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const l = new k();
      l.start();
      let i = n.data?.value?.l || n.data.l, s = {
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
        for (const c of i) {
          const o = await await m.lib.get({ name: c.type, run_from: "renderer", lazy_lib: e.lazy_lib }), r = await (await o.lib.index({
            f: {
              name: (a) => t.f.name({ id: c.id, name: a }),
              get_lib: async (a) => await await m.lib.get({ name: a.name, run_from: a.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (a) => await (await z()).set(a),
              path: (a) => m.path.set({ src: o.src, type: c.type, name: a }),
              //set..
              uuid: () => b().set(),
              wait_until: x
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? s.r += r?.r || "" : s.r.push(r?.r || ""), s.style += r?.style || "", s.head += r?.head || "";
        }
      })(), l.stop(), s.benchmark = l.result(), s;
    }
  };
}, N = async (e) => {
  const t = await v();
  return await m.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const l = new k();
      l.start();
      let i = {
        r: "",
        style: ""
      }, s = {
        style_id: `${b().set()}_stl`
      }, c = n.data?.value?.l || n.data.l;
      const o = async () => {
        for (const r of c) {
          const a = await await m.lib.get({ name: r.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), d = a.lib, f = w(), _ = f.on, h = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => t.f.name({ id: r.id, name: u }),
              get_lib: async (u) => await await m.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (u) => await (await z()).set(u),
              path: (u) => m.path.set({ src: a.src, type: r.type, name: u }),
              //set..
              uuid: () => b().set(),
              wait_until: x,
              //set..
              call: W,
              listen: _,
              //set..
              new_emitter: () => w()
            }
          })).set(
            {
              data: {
                curr: r
              }
            }
            /*_$cb*/
          );
          S("msg", async (u) => {
            try {
              if (Object.keys(u.where || {}).length == 0) {
                await f.emit("msg", u);
                return;
              }
            } catch {
            }
            try {
              if (r?.[u.where?.key || ""] == u.where?.value) {
                await f.emit("msg", u);
                return;
              }
            } catch {
            }
          }), i.style += h.style;
        }
      };
      await x(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((r) => {
          const a = document.getElementById(`${s.style_id}`);
          a && a.remove();
          const d = document.createElement("style");
          d.id = `${s.style_id}`, d.innerHTML = `${i.style}`, r.appendChild(d);
        })(document.head);
      } catch (r) {
        console.log(`${r}, Failed to set style..`);
      }
      return l.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: l.result()
      };
    }
  };
}, C = { class: "bg-gray-100 flex items-center justify-center min-h-screen" }, F = {
  "class-old": "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm",
  class: "bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
}, H = {
  key: 0,
  class: "text-2xl font-bold text-center mb-6"
}, A = ["innerHTML"], V = /* @__PURE__ */ T({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = e;
    let n = [];
    const l = g([]), i = g(null);
    (async () => typeof t._$p.data.curr.data.ce_file == "string" ? n = (await (await fetch(t._$p.data.curr.data.ce_file)).json()).data.l : n = t._$p.data.curr.data.ce_file.data.l)();
    const s = g(null);
    let c = "";
    const o = () => {
      l.value = [];
      const r = n, a = [...r.keys()].filter((d) => r[d].type == "form_section");
      for (const d of a) {
        let f = {
          _s: ""
        };
        for (const [_, h] of r.entries())
          try {
            r[d].id == h.data.form.section_id && (f._s += ` ${s.value[_]} `);
          } catch {
          }
        l.value.push(` 
        <div class='p-2'>
        
        <div>
        ${s.value[d]} 
        </div>

        <div class='flex flex-wrap gap-2 md:gap-3' >
        ${f._s}
        </div>

        </div>
        
        `);
      }
    };
    return (async () => {
      i.value = {
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
          l: n
        }
      };
      let r = {
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
        }
      };
      r = i.value.data, a.lazy_lib = i.value.config.lazy_lib;
      const d = await M(a), f = await N(a);
      await (async () => {
        const h = await d.set({
          data: r,
          return: {
            r: "chunk"
          }
        });
        console.log(h.r), s.value = h.r, c = h.style, l.value = s.value, o();
        const u = document.createElement("style");
        document.head.appendChild(u), u.innerHTML = c, setTimeout(async () => {
          await f.set({
            data: r
          });
        }, 10);
      })();
    })(), (r, a) => (y(), p("div", C, [
      $("div", F, [
        e._$p.data.curr.data.title ? (y(), p("h2", H, B(e._$p.data.curr.data.title), 1)) : O("", !0),
        (y(!0), p(L, null, I(l.value, (d) => (y(), p("div", null, [
          $("div", { innerHTML: d }, null, 8, A)
        ]))), 256))
      ])
    ]));
  }
}), D = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const l = R(V, {
      _p: e,
      _$p: t
    }), i = {
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
    return l.mount(s), i;
  }
});
export {
  D as hydrator,
  D as index
};
