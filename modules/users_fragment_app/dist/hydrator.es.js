import { d as C, o as S, a as g, c as $, b as x, e as k, F as M, r as w, f as R } from "./runtime-dom.esm-bundler-Cyp0UzkF.js";
const v = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), T = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), E = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, a = document.getElementById(e.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((i) => {
        const s = (r) => {
          ((d) => {
            const o = d.getAttribute("data-ce");
            if (!o)
              return;
            const c = JSON.parse(o).filter((n) => n?.k.startsWith("t-"));
            if (c.length != 0)
              for (const n of c) {
                const l = n.k, y = n.v.split(" ");
                if (l == `t-${t}-class`)
                  for (const u of y)
                    d.classList.add(u);
                else
                  for (const u of y)
                    d.classList.remove(u);
              }
          })(r);
        };
        for (const r of i.getElementsByTagName("*"))
          s(r);
        s(i);
      })(a);
    } catch (t) {
      const a = `err: [theme] ${t}`;
      throw console.log(a), a;
    }
  }
});
function z(e, t = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((i) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(r), i());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, r = setInterval(() => {
      s();
    }, t);
    s();
  });
}
let J = class {
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
      } catch (i) {
        this.listeners.error?.forEach(
          (s) => s(i)
        );
      }
  };
};
const b = () => new J();
class N {
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
      for (const [a, i] of t.entries()) {
        const s = i, r = `${s.name}:${e.run_from}`, d = `${e.run_from}_src`;
        let o = s[d];
        const c = `${e.run_from}_src`;
        let n = e?.lazy_lib?.[c] || null;
        if (n && (n = n.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${n}`), console.log(`_src: ${o}`), m.lib.l.hasOwnProperty(`${r}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && m.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (n)
              o = n;
            else
              throw `[lib-name=${s.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const l = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            m.lib.l[`${r}`] = {
              lib: l,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const l = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            m.lib.l[`${r}`] = {
              lib: l,
              src: o
            };
          }
        }
      }
      console.log(await m.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return m.lib.l.hasOwnProperty(`${a}`) == !1 && await m.lib.set({
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
      }), t = m.lib.l[`${a}`], t;
    },
    get_all: async (e) => m.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const i = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), i.indexOf(e.type) !== -1)
        for (const [s, r] of i.entries()) {
          let d = s == 0 ? "" : "/";
          if (t += `${d}${r}`, r == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [s, r] of i.entries()) {
          let d = s == 0 ? "" : "/";
          if (t += `${d}${r}`, r == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const O = b(), L = b(), j = O.on, I = O.emit, B = L.emit, A = L.on, P = async (e) => {
  const t = await T();
  return await m.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const i = new N();
      i.start();
      let s = a.data?.value?.l || a.data.l, r = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return a.return.r == "full" ? r.r = "" : r.r = [], await (async () => {
        for (const d of s) {
          const o = await await m.lib.get({ name: d.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await o.lib.index({
            f: {
              name: (n) => t.f.name({ id: d.id, name: n }),
              get_lib: async (n) => await await m.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (n) => await (await E()).set(n),
              path: (n) => m.path.set({ src: o.src, type: d.type, name: n }),
              //set..
              uuid: () => v().set(),
              wait_until: z
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? r.r += c?.r || "" : r.r.push(c?.r || ""), r.style += c?.style || "", r.head += c?.head || "";
        }
      })(), i.stop(), r.benchmark = i.result(), r;
    }
  };
}, U = async (e) => {
  const t = await T();
  return await m.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const i = new N();
      i.start();
      let s = {
        r: "",
        style: ""
      }, r = {
        style_id: `${v().set()}_stl`
      }, d = a.data?.value?.l || a.data.l;
      const o = async () => {
        for (const c of d) {
          const n = await await m.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), l = n.lib, y = b(), u = y.on, p = await (await l.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (h) => t.f.name({ id: c.id, name: h }),
              get_lib: async (h) => await await m.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (h) => await (await E()).set(h),
              path: (h) => m.path.set({ src: n.src, type: c.type, name: h }),
              //set..
              uuid: () => v().set(),
              wait_until: z,
              //set..
              call: B,
              listen: u,
              //set..
              new_emitter: () => b()
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          j("msg", async (h) => {
            try {
              if (Object.keys(h.where || {}).length == 0) {
                await y.emit("msg", h);
                return;
              }
            } catch {
            }
            try {
              if (c?.[h.where?.key || ""] == h.where?.value) {
                await y.emit("msg", h);
                return;
              }
            } catch {
            }
          }), s.style += p.style;
        }
      };
      await z(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((c) => {
          const n = document.getElementById(`${r.style_id}`);
          n && n.remove();
          const l = document.createElement("style");
          l.id = `${r.style_id}`, l.innerHTML = `${s.style}`, c.appendChild(l);
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
}, D = {
  key: 0,
  class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10"
}, W = ["innerHTML"], F = { key: 1 }, V = ["innerHTML"], G = /* @__PURE__ */ C({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = w(""), a = w(1), i = w(20), s = w({
      html: {
        table: null,
        search_panel: null
      }
    }), r = {
      url: "https://fastify.dryutil.1mn.io/admin/api/user",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function d(n, l = 1, y = 20) {
      try {
        const u = await fetch(`${r.url}?search=${n}&page=${l}&limit=${y}`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${r.token}`
          }
        });
        if (!u.ok) throw new Error(`API error: ${u.status}`);
        return await u.json();
      } catch (u) {
        return console.error("Error fetching user list:", u), null;
      }
    }
    function o(n) {
      return !n?.success || !n.data?.l ? [] : n.data.l.map((l) => ({
        id: l.id,
        name: l.name,
        email: l.email,
        created_at: new Date(l.created_at).toLocaleString(),
        updated_at: new Date(l.updated_at).toLocaleString()
      }));
    }
    async function c(n, l, y = 1) {
      const u = await d(l, y, i.value);
      if (u && u.success) {
        const p = o(u);
        try {
          if (p.length === 0) throw new Error("no more data..");
        } catch {
          return;
        }
        n._$p.data.curr.data.table.rows = p, I("msg", {
          type: "load_more",
          _p: n._p,
          _$p: n._$p,
          custom: {
            searchText: l,
            page: y
          },
          where: {
            key: "id",
            value: "user-table-75"
          }
        });
      }
    }
    return S(() => {
      (async () => {
        let n = "", l = {
          l: [
            {
              id: "user-table-75",
              type: "table",
              slug: "table",
              data: {
                theme: e._$p.data.curr.data.theme,
                foo: { txt: "User Management" },
                config: {
                  search: {
                    placeholder: "Search Users...",
                    field: "name"
                  }
                },
                table: {
                  columns: [
                    { title: "ID", field: "id", width: 100 },
                    { title: "Name", field: "name", headerFilter: "input", minWidth: 150 },
                    { title: "Email", field: "email", headerFilter: "input", minWidth: 200 },
                    { title: "Created At", field: "created_at", width: 180 },
                    { title: "Updated At", field: "updated_at", width: 180 }
                  ],
                  rows: []
                }
              }
            },
            {
              id: "user-search-panel",
              type: "search_panel",
              slug: "search_panel",
              data: {
                placeholder: "Search..",
                size: "sm",
                class: "p-1 max-w-lg",
                sugg: []
              }
            }
          ]
        };
        const y = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, u = await P(y), p = await U(y);
        A("msg", async (f) => {
          if (f.type == "load_more" && f._$p.data.curr.id == "user-table-75" && (a.value += 1, c(f, t.value, a.value)), f.type == "search:query" && f._$p.data.curr.id == "user-search-panel") {
            I("msg", {
              type: "remove_all_rows",
              where: { key: "id", value: "user-table-75" }
            }), a.value = 1, t.value = f._p.query;
            let _ = JSON.parse(JSON.stringify({
              data: { curr: l.l[0] }
            }));
            c({
              _$p: _,
              _p: e._p
            }, t.value, a.value);
          }
        }), await (async () => {
          const f = await u.set({
            data: l,
            return: { r: "chunk" }
          });
          n = f.style, s.value.html.table = f.r[0] || "", s.value.html.search_panel = f.r[1] || "";
          const _ = document.createElement("style");
          document.head.appendChild(_), _.innerHTML = n, setTimeout(async () => {
            await p.set({ data: l }), c({ _$p: { data: { curr: l.l[0] } }, _p: e._p }, "", 1);
          }, 20);
        })();
      })();
    }), (n, l) => (g(), $(M, null, [
      s.value.html.search_panel ? (g(), $("div", D, [
        x("div", null, [
          x("div", {
            innerHTML: s.value.html.search_panel
          }, null, 8, W)
        ])
      ])) : k("", !0),
      s.value.html.table ? (g(), $("div", F, [
        x("div", {
          innerHTML: s.value.html.table
        }, null, 8, V)
      ])) : k("", !0)
    ], 64));
  }
}), X = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const i = R(G, {
      _p: e,
      _$p: t
    }), s = {
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
    }, r = document.getElementById(e.f.name("vue-root"));
    return i.mount(r), s;
  }
});
export {
  X as hydrator,
  X as index
};
