import { d as k, o as v, a as T, c as I, b as E, e as O, r as N, f as C } from "./runtime-dom.esm-bundler-D2b0Kur0.js";
const p = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  })
}), b = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
}), g = async () => ({
  set: async (t) => {
    console.log("--theme");
    try {
      if (!t.el_id)
        throw new Error("[el_id] is required");
      const e = t.name, n = document.getElementById(t.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((c) => {
        const l = (s) => {
          ((a) => {
            const r = a.getAttribute("data-ce");
            if (!r)
              return;
            const o = JSON.parse(r).filter((i) => i?.k.startsWith("t-"));
            if (o.length != 0)
              for (const i of o) {
                const d = i.k, f = i.v.split(" ");
                if (d == `t-${e}-class`)
                  for (const h of f)
                    a.classList.add(h);
                else
                  for (const h of f)
                    a.classList.remove(h);
              }
          })(s);
        };
        for (const s of c.getElementsByTagName("*"))
          l(s);
        l(c);
      })(n);
    } catch (e) {
      const n = `err: [theme] ${e}`;
      throw console.log(n), n;
    }
  }
});
function w(t, e = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((c) => {
    const l = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        t() && (clearInterval(s), c());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${e}]`);
      }
      n.cnt += 1;
    }, s = setInterval(() => {
      l();
    }, e);
    l();
  });
}
let L = class {
  listeners = {};
  on = (t, e) => ((this.listeners[t] ||= []).push(e), () => this.off(t, e));
  off = (t, e) => {
    this.listeners[t] = this.listeners[t]?.filter((n) => n !== e);
  };
  /** Sequential execution (await each listener) */
  emit = async (t, ...e) => {
    for (const n of this.listeners[t] ?? [])
      await n(...e);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (t, ...e) => {
    await Promise.all(
      (this.listeners[t] ?? []).map((n) => n(...e))
    );
  };
  //Error-safe emit
  emitSafe = async (t, ...e) => {
    for (const n of this.listeners[t] ?? [])
      try {
        await n(...e);
      } catch (c) {
        this.listeners.error?.forEach(
          (l) => l(c)
        );
      }
  };
};
const _ = () => new L();
class x {
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
    set: async (t) => {
      const e = t?.lib || [];
      for (const [n, c] of e.entries()) {
        const l = c, s = `${l.name}:${t.run_from}`, a = `${t.run_from}_src`;
        let r = l[a];
        const o = `${t.run_from}_src`;
        let i = t?.lazy_lib?.[o] || null;
        if (i && (i = i.replace("{*}", `${l.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${r}`), m.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(r) && r.includes("/") == !1 && m.lib.inbuilt_lib.indexOf(`${l.name}`) === -1)
            if (i)
              r = i;
            else
              throw `[lib-name=${l.name},lib-src=${r}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (r.startsWith("./") || r.startsWith("../")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${r}`
            );
            m.lib.l[`${s}`] = {
              lib: d,
              src: r
            };
          }
          if (r.startsWith("http://") || r.startsWith("https://")) {
            const d = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${r}`
            );
            m.lib.l[`${s}`] = {
              lib: d,
              src: r
            };
          }
        }
      }
      console.log(await m.lib.get_all({}));
    },
    get: async (t) => {
      let e = null;
      const n = `${t.name}:${t.run_from}`;
      return m.lib.l.hasOwnProperty(`${n}`) == !1 && await m.lib.set({
        lib: [
          {
            renderer_src: t.name,
            hydrator_src: t.name,
            editor_src: t.name,
            name: t.name
          }
        ],
        run_from: t.run_from,
        lazy_lib: t.lazy_lib
      }), e = m.lib.l[`${n}`], e;
    },
    get_all: async (t) => m.lib.l
  },
  path: {
    set: (t) => {
      let e = "", n = "";
      const c = t.src.split("/");
      if (t.src.indexOf("://localhost") !== -1 || t.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), c.indexOf(t.type) !== -1)
        for (const [l, s] of c.entries()) {
          let a = l == 0 ? "" : "/";
          if (e += `${a}${s}`, s == t.type)
            return `${e}${n}${t.name}`;
        }
      else
        for (const [l, s] of c.entries()) {
          let a = l == 0 ? "" : "/";
          if (e += `${a}${s}`, s == "src")
            return `${e}${n}${t.name}`;
        }
      return `${e}${n}${t.name}`;
    }
  }
};
const $ = _(), z = _(), R = $.on, j = $.emit, S = z.emit, A = z.on, B = async (t) => {
  const e = await b();
  return await m.lib.set({ lib: t.lib, run_from: "renderer", lazy_lib: t.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const c = new x();
      c.start();
      let l = n.data?.value?.l || n.data.l, s = {
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
        for (const a of l) {
          const r = await await m.lib.get({ name: a.type, run_from: "renderer", lazy_lib: t.lazy_lib }), o = await (await r.lib.index({
            f: {
              name: (i) => e.f.name({ id: a.id, name: i }),
              get_lib: async (i) => await await m.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (i) => await (await g()).set(i),
              path: (i) => m.path.set({ src: r.src, type: a.type, name: i }),
              //set..
              uuid: () => p().set(),
              wait_until: w
            }
          })).set(
            {
              data: {
                curr: a
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? s.r += o?.r || "" : s.r.push(o?.r || ""), s.style += o?.style || "", s.head += o?.head || "";
        }
      })(), c.stop(), s.benchmark = c.result(), s;
    }
  };
}, J = async (t) => {
  const e = await b();
  return await m.lib.set({ lib: t.lib, run_from: "hydrator", lazy_lib: t.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const c = new x();
      c.start();
      let l = {
        r: "",
        style: ""
      }, s = {
        style_id: `${p().set()}_stl`
      }, a = n.data?.value?.l || n.data.l;
      const r = async () => {
        for (const o of a) {
          const i = await await m.lib.get({ name: o.type, run_from: "hydrator", lazy_lib: t.lazy_lib }), d = i.lib, f = _(), h = f.on, y = await (await d.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => e.f.name({ id: o.id, name: u }),
              get_lib: async (u) => await await m.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (u) => await (await g()).set(u),
              path: (u) => m.path.set({ src: i.src, type: o.type, name: u }),
              //set..
              uuid: () => p().set(),
              wait_until: w,
              //set..
              call: S,
              listen: h,
              //set..
              new_emitter: () => _()
            }
          })).set(
            {
              data: {
                curr: o
              }
            }
            /*_$cb*/
          );
          R("msg", async (u) => {
            try {
              if (Object.keys(u.where || {}).length == 0) {
                await f.emit("msg", u);
                return;
              }
            } catch {
            }
            try {
              if (o?.[u.where?.key || ""] == u.where?.value) {
                await f.emit("msg", u);
                return;
              }
            } catch {
            }
          }), l.style += y.style;
        }
      };
      await w(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await r();
      try {
        ((o) => {
          const i = document.getElementById(`${s.style_id}`);
          i && i.remove();
          const d = document.createElement("style");
          d.id = `${s.style_id}`, d.innerHTML = `${l.style}`, o.appendChild(d);
        })(document.head);
      } catch (o) {
        console.log(`${o}, Failed to set style..`);
      }
      return c.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: c.result()
      };
    }
  };
}, M = { key: 0 }, P = ["innerHTML"], W = /* @__PURE__ */ k({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    const e = N({
      html: {
        table: null
      }
    }), n = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=list_collection",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function c() {
      try {
        const a = await fetch(n.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${n.token}`
          },
          body: JSON.stringify({})
        });
        if (!a.ok) throw new Error(a.statusText);
        return await a.json();
      } catch (a) {
        return console.error(a), null;
      }
    }
    function l(a) {
      return a?.success ? a.collections.map((r, o) => ({
        id: r.name,
        sno: o + 1,
        name: r.name,
        num_documents: r.num_documents,
        status: r.num_documents > 0 ? '<button class="px-2 py-1 rounded bg-emerald-100 text-emerald-700">Active</button>' : '<button class="px-2 py-1 rounded bg-red-100 text-red-700">Empty</button>'
      })) : [];
    }
    async function s(a) {
      const r = await c();
      if (!r?.success) return;
      const o = l(r);
      a._$p.data.curr.data.table.rows = o, j("msg", {
        type: "load_more",
        _p: a._p,
        _$p: a._$p,
        where: {
          key: "id",
          value: "3e1bc78c-104f-4f6f-aa87-75"
        }
      });
    }
    return v(() => {
      (async () => {
        let a = "", r = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-75",
              type: "table",
              slug: "table",
              data: {
                theme: t._$p.data.curr.data.theme,
                //"light",
                foo: {},
                config: {},
                table: {
                  columns: [
                    { title: "#", field: "sno", hozAlign: "center", width: 60 },
                    { title: "Collection Name", field: "name", minWidth: 250 },
                    { title: "Total Documents", field: "num_documents", hozAlign: "center", width: 180 },
                    { title: "Status", field: "status", formatter: "html", hozAlign: "center", width: 120 }
                  ],
                  rows: []
                }
              }
            }
          ]
        };
        const o = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, i = await B(o), d = await J(o);
        (async () => A("msg", async (h) => {
          h.type === "load_more" && h._$p.data.curr.id === "3e1bc78c-104f-4f6f-aa87-75" && s(h);
        }))(), await (async () => {
          const h = await i.set({
            data: r,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          a = h.style, e.value.html.table = h.r[0] || "";
          const y = document.createElement("style");
          document.head.appendChild(y), y.innerHTML = a, setTimeout(async () => {
            const u = await d.set({
              data: r
            });
            console.log(u);
          }, 20);
        })();
      })();
    }), (a, r) => e.value.html.table ? (T(), I("div", M, [
      E("div", {
        innerHTML: e.value.html.table
      }, null, 8, P)
    ])) : O("", !0);
  }
}), U = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const c = C(W, {
      _p: t,
      _$p: e
    }), l = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: e,
            custom: {}
          });
        }
      }
    }, s = document.getElementById(t.f.name("vue-root"));
    return c.mount(s), l;
  }
});
export {
  U as hydrator,
  U as index
};
