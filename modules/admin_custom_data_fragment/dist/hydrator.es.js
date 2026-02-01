import { d as S, o as A, a as x, c as $, b as v, e as I, F as J, r as w, f as P } from "./runtime-dom.esm-bundler-BEcgbega.js";
const k = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), O = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), C = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, a = document.getElementById(e.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((i) => {
        const l = (r) => {
          ((d) => {
            const o = d.getAttribute("data-ce");
            if (!o)
              return;
            const c = JSON.parse(o).filter((n) => n?.k.startsWith("t-"));
            if (c.length != 0)
              for (const n of c) {
                const s = n.k, p = n.v.split(" ");
                if (s == `t-${t}-class`)
                  for (const u of p)
                    d.classList.add(u);
                else
                  for (const u of p)
                    d.classList.remove(u);
              }
          })(r);
        };
        for (const r of i.getElementsByTagName("*"))
          l(r);
        l(i);
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
    const l = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(r), i());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, r = setInterval(() => {
      l();
    }, t);
    l();
  });
}
let R = class {
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
          (l) => l(i)
        );
      }
  };
};
const g = () => new R();
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
let h = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [a, i] of t.entries()) {
        const l = i, r = `${l.name}:${e.run_from}`, d = `${e.run_from}_src`;
        let o = l[d];
        const c = `${e.run_from}_src`;
        let n = e?.lazy_lib?.[c] || null;
        if (n && (n = n.replace("{*}", `${l.name}`)), console.log(`_lazy_src: ${n}`), console.log(`_src: ${o}`), h.lib.l.hasOwnProperty(`${r}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && h.lib.inbuilt_lib.indexOf(`${l.name}`) === -1)
            if (n)
              o = n;
            else
              throw `[lib-name=${l.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const s = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            h.lib.l[`${r}`] = {
              lib: s,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const s = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            h.lib.l[`${r}`] = {
              lib: s,
              src: o
            };
          }
        }
      }
      console.log(await h.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return h.lib.l.hasOwnProperty(`${a}`) == !1 && await h.lib.set({
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
      }), t = h.lib.l[`${a}`], t;
    },
    get_all: async (e) => h.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const i = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), i.indexOf(e.type) !== -1)
        for (const [l, r] of i.entries()) {
          let d = l == 0 ? "" : "/";
          if (t += `${d}${r}`, r == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [l, r] of i.entries()) {
          let d = l == 0 ? "" : "/";
          if (t += `${d}${r}`, r == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const M = g(), L = g(), j = M.on, E = M.emit, B = L.emit, W = L.on, D = async (e) => {
  const t = await O();
  return await h.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const i = new N();
      i.start();
      let l = a.data?.value?.l || a.data.l, r = {
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
        for (const d of l) {
          const o = await await h.lib.get({ name: d.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await o.lib.index({
            f: {
              name: (n) => t.f.name({ id: d.id, name: n }),
              get_lib: async (n) => await await h.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (n) => await (await C()).set(n),
              path: (n) => h.path.set({ src: o.src, type: d.type, name: n }),
              //set..
              uuid: () => k().set(),
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
}, G = async (e) => {
  const t = await O();
  return await h.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const i = new N();
      i.start();
      let l = {
        r: "",
        style: ""
      }, r = {
        style_id: `${k().set()}_stl`
      }, d = a.data?.value?.l || a.data.l;
      const o = async () => {
        for (const c of d) {
          const n = await await h.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), s = n.lib, p = g(), u = p.on, y = await (await s.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (m) => t.f.name({ id: c.id, name: m }),
              get_lib: async (m) => await await h.lib.get({ name: m.name, run_from: m.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (m) => await (await C()).set(m),
              path: (m) => h.path.set({ src: n.src, type: c.type, name: m }),
              //set..
              uuid: () => k().set(),
              wait_until: z,
              //set..
              call: B,
              listen: u,
              //set..
              new_emitter: () => g()
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          j("msg", async (m) => {
            try {
              if (Object.keys(m.where || {}).length == 0) {
                await p.emit("msg", m);
                return;
              }
            } catch {
            }
            try {
              if (c?.[m.where?.key || ""] == m.where?.value) {
                await p.emit("msg", m);
                return;
              }
            } catch {
            }
          }), l.style += y.style;
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
          const s = document.createElement("style");
          s.id = `${r.style_id}`, s.innerHTML = `${l.style}`, c.appendChild(s);
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
}, U = {
  key: 0,
  class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10"
}, F = ["innerHTML"], V = { key: 1 }, Z = ["innerHTML"], X = /* @__PURE__ */ S({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = w({
      html: {
        table: null,
        search_panel: null
      }
    }), a = w(""), i = w(1), l = w(20), r = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/ui_management?typ=list_custom_data",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function d(n, s = 1, p = 20) {
      try {
        const u = await fetch(r.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${r.token}`
          },
          body: JSON.stringify({
            search: n,
            page: s,
            page_size: p
          })
        });
        if (!u.ok) throw new Error(`API error: ${u.status}`);
        return await u.json();
      } catch (u) {
        return console.error("Error fetching list:", u), null;
      }
    }
    function o(n) {
      return !n || !n.success || !n.data || !Array.isArray(n.data.items) ? [] : n.data.items.map((s) => {
        const u = {
          on0: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
          admin: "bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
          guest: "bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400"
        }[s.typ] || "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400", y = s.created_at ? new Date(s.created_at).toLocaleDateString() : "-";
        return {
          id: s.id,
          user_id: s.user_id,
          name: `<span class="text-blue-600 font-medium cursor-pointer hover:underline">${s.dta?.name || "—"}</span>`,
          email: `<span class="text-gray-500 text-sm">${s.dta?.email || "—"}</span>`,
          phone: s.dta?.phone || "—",
          company: `<span class="text-gray-700 font-medium">${s.dta?.company || "—"}</span>`,
          type: `<span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${u}">${s.typ || "user"}</span>`,
          created_at: y
        };
      });
    }
    async function c(n, s, p = 1) {
      const u = await d(s, p, l.value);
      if (u && u.success) {
        const y = o(u);
        try {
          if (!(y.length > 0))
            throw new Error("no more data..");
        } catch {
          return;
        }
        n._$p.data.curr.data.table.rows = y;
        const m = u.data.total || 0, b = Math.ceil(m / l.value);
        E("msg", {
          type: "load_more",
          _p: e._p,
          _$p: e._$p,
          custom: {
            searchText: s,
            page: p,
            totalPages: b,
            found: m
          },
          where: {
            key: "id",
            value: "3e1bc78c-104f-4f6f-aa87-75"
          }
        });
      }
    }
    return A(() => {
      (async () => {
        let n = "";
        const s = await d(a.value, i.value, l.value), p = o(s), u = s?.data?.total || 0;
        Math.ceil(u / l.value);
        let y = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-75",
              type: "table",
              slug: "table",
              data: {
                theme: "light",
                foo: {
                  txt: s?.success ? `Found ${u} records` : "Custom Data Management"
                },
                config: {
                  // Disable internal search since we use external panel
                  search: { show: !1 },
                  filter: { show: !1 }
                },
                table: {
                  columns: [
                    { title: "Name", field: "name", widthGrow: 2, minWidth: 180, formatter: "html" },
                    { title: "Email", field: "email", widthGrow: 2, minWidth: 220, formatter: "html" },
                    { title: "Phone", field: "phone", width: 150, hozAlign: "center" },
                    { title: "Company", field: "company", widthGrow: 1, minWidth: 150, formatter: "html" },
                    { title: "Type", field: "type", formatter: "html", width: 130, hozAlign: "center" },
                    { title: "Created At", field: "created_at", width: 140, hozAlign: "right" }
                  ],
                  rows: p
                }
              }
            },
            {
              id: "3e1bc78c-aa87-search-panel",
              type: "search_panel",
              slug: "search_panel",
              data: {
                data: "",
                placeholder: "Search Users...",
                show_sugg: !1,
                size: "sm",
                class: "p-1 max-w-lg",
                sugg: [],
                map: { title: "title", label: "type" }
              }
            }
          ]
        };
        const m = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, b = await D(m), T = await G(m);
        (async () => W("msg", async (f) => {
          if (f.type == "load_more" && f._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (i.value += 1, c(f, a.value, i.value)), f.type == "search:query" && f._$p.data.curr.id == "3e1bc78c-aa87-search-panel") {
            E("msg", {
              type: "remove_all_rows",
              custom: {},
              where: {
                key: "id",
                value: "3e1bc78c-104f-4f6f-aa87-75"
              }
            }), i.value = 1, a.value = f._p.query;
            let _ = JSON.parse(JSON.stringify({
              data: {
                curr: y.l[0]
              }
            }));
            c({
              _$p: _,
              _p: e._p
            }, a.value, i.value);
          }
        }))(), await (async () => {
          const f = await b.set({
            data: y,
            return: {
              r: "chunk"
              // Split into chunks
            }
          });
          n = f.style, t.value.html.table = f.r[0] || "", t.value.html.search_panel = f.r[1] || "";
          const _ = document.createElement("style");
          document.head.appendChild(_), _.innerHTML = n, setTimeout(async () => {
            await T.set({
              data: y
            });
          }, 200);
        })();
      })();
    }), (n, s) => (x(), $(J, null, [
      t.value.html.search_panel ? (x(), $("div", U, [
        v("div", null, [
          v("div", {
            innerHTML: t.value.html.search_panel
          }, null, 8, F)
        ])
      ])) : I("", !0),
      t.value.html.table ? (x(), $("div", V, [
        v("div", {
          innerHTML: t.value.html.table
        }, null, 8, Z)
      ])) : I("", !0)
    ], 64));
  }
}), H = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const i = P(X, {
      _p: e,
      _$p: t
    }), l = {
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
    return i.mount(r), l;
  }
});
export {
  H as hydrator,
  H as index
};
