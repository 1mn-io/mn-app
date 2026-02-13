import { d as C, o as L, a as g, c as x, b as I, e as z, r as w, f as M } from "./runtime-dom.esm-bundler-Cyp0UzkF.js";
const $ = () => ({
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
      const t = e.name, n = document.getElementById(e.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((l) => {
        const s = (r) => {
          ((d) => {
            const o = d.getAttribute("data-ce");
            if (!o)
              return;
            const c = JSON.parse(o).filter((a) => a?.k.startsWith("t-"));
            if (c.length != 0)
              for (const a of c) {
                const i = a.k, h = a.v.split(" ");
                if (i == `t-${t}-class`)
                  for (const y of h)
                    d.classList.add(y);
                else
                  for (const y of h)
                    d.classList.remove(y);
              }
          })(r);
        };
        for (const r of l.getElementsByTagName("*"))
          s(r);
        s(l);
      })(n);
    } catch (t) {
      const n = `err: [theme] ${t}`;
      throw console.log(n), n;
    }
  }
});
function v(e, t = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((l) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        e() && (clearInterval(r), l());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      n.cnt += 1;
    }, r = setInterval(() => {
      s();
    }, t);
    s();
  });
}
let R = class {
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
          (s) => s(l)
        );
      }
  };
};
const b = () => new R();
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
let u = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [n, l] of t.entries()) {
        const s = l, r = `${s.name}:${e.run_from}`, d = `${e.run_from}_src`;
        let o = s[d];
        const c = `${e.run_from}_src`;
        let a = e?.lazy_lib?.[c] || null;
        if (a && (a = a.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${a}`), console.log(`_src: ${o}`), u.lib.l.hasOwnProperty(`${r}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && u.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (a)
              o = a;
            else
              throw `[lib-name=${s.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const i = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            u.lib.l[`${r}`] = {
              lib: i,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const i = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            u.lib.l[`${r}`] = {
              lib: i,
              src: o
            };
          }
        }
      }
      console.log(await u.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const n = `${e.name}:${e.run_from}`;
      return u.lib.l.hasOwnProperty(`${n}`) == !1 && await u.lib.set({
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
      }), t = u.lib.l[`${n}`], t;
    },
    get_all: async (e) => u.lib.l
  },
  path: {
    set: (e) => {
      let t = "", n = "";
      const l = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), l.indexOf(e.type) !== -1)
        for (const [s, r] of l.entries()) {
          let d = s == 0 ? "" : "/";
          if (t += `${d}${r}`, r == e.type)
            return `${t}${n}${e.name}`;
        }
      else
        for (const [s, r] of l.entries()) {
          let d = s == 0 ? "" : "/";
          if (t += `${d}${r}`, r == "src")
            return `${t}${n}${e.name}`;
        }
      return `${t}${n}${e.name}`;
    }
  }
};
const O = b(), j = b(), S = O.on, k = O.emit, J = j.emit, B = j.on, P = async (e) => {
  const t = await T();
  return await u.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const l = new N();
      l.start();
      let s = n.data?.value?.l || n.data.l, r = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return n.return.r == "full" ? r.r = "" : r.r = [], await (async () => {
        for (const d of s) {
          const o = await await u.lib.get({ name: d.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await o.lib.index({
            f: {
              name: (a) => t.f.name({ id: d.id, name: a }),
              get_lib: async (a) => await await u.lib.get({ name: a.name, run_from: a.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (a) => await (await E()).set(a),
              path: (a) => u.path.set({ src: o.src, type: d.type, name: a }),
              //set..
              uuid: () => $().set(),
              wait_until: v
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? r.r += c?.r || "" : r.r.push(c?.r || ""), r.style += c?.style || "", r.head += c?.head || "";
        }
      })(), l.stop(), r.benchmark = l.result(), r;
    }
  };
}, W = async (e) => {
  const t = await T();
  return await u.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const l = new N();
      l.start();
      let s = {
        r: "",
        style: ""
      }, r = {
        style_id: `${$().set()}_stl`
      }, d = n.data?.value?.l || n.data.l;
      const o = async () => {
        for (const c of d) {
          const a = await await u.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), i = a.lib, h = b(), y = h.on, f = await (await i.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (m) => t.f.name({ id: c.id, name: m }),
              get_lib: async (m) => await await u.lib.get({ name: m.name, run_from: m.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (m) => await (await E()).set(m),
              path: (m) => u.path.set({ src: a.src, type: c.type, name: m }),
              //set..
              uuid: () => $().set(),
              wait_until: v,
              //set..
              call: J,
              listen: y,
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
          S("msg", async (m) => {
            try {
              if (Object.keys(m.where || {}).length == 0) {
                await h.emit("msg", m);
                return;
              }
            } catch {
            }
            try {
              if (c?.[m.where?.key || ""] == m.where?.value) {
                await h.emit("msg", m);
                return;
              }
            } catch {
            }
          }), s.style += f.style;
        }
      };
      await v(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((c) => {
          const a = document.getElementById(`${r.style_id}`);
          a && a.remove();
          const i = document.createElement("style");
          i.id = `${r.style_id}`, i.innerHTML = `${s.style}`, c.appendChild(i);
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
}, D = { class: "w-full h-full flex flex-col" }, U = {
  key: 0,
  class: "p-3 sticky top-0 bg-white z-10 border-b border-gray-100"
}, A = ["innerHTML"], V = {
  key: 1,
  class: "flex-grow w-full"
}, G = ["innerHTML"], Z = /* @__PURE__ */ C({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = w(""), n = w(1), l = w(20), s = w({
      html: {
        table: null,
        search_panel: null
      }
    }), r = {
      url: "https://fastify.dryutil.1mn.io/admin/api/instance",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function d(a, i = 1, h = 20) {
      try {
        const y = `${r.url}?exclude_by=user_id&search=${a}&page=${i}&limit=${h}`, f = await fetch(y, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${r.token}`
          }
        });
        if (!f.ok) throw new Error(`API error: ${f.status}`);
        return await f.json();
      } catch (y) {
        return console.error("Error fetching list:", y), null;
      }
    }
    function o(a) {
      return !a?.success || !a.data?.l ? [] : a.data.l.map((i) => ({
        id: i.id,
        name: i.name || "Unnamed Instance",
        utility_id: i.utility_id,
        project_id: i.project_id,
        user_id: i.user_id
      }));
    }
    async function c(a, i, h = 1) {
      const y = await d(i, h, l.value);
      if (y && y.success) {
        const f = o(y);
        try {
          if (f.length === 0 && h > 1) throw new Error("no more data..");
        } catch {
          return;
        }
        a._$p.data.curr.data.table.rows = f, k("msg", {
          type: "load_more",
          _p: a._p,
          _$p: a._$p,
          custom: {
            searchText: i,
            page: h
          },
          where: {
            key: "id",
            value: "instance-table-01"
          }
        });
      }
    }
    return L(() => {
      (async () => {
        let a = "", i = {
          l: [
            {
              id: "instance-table-01",
              type: "table",
              slug: "table",
              data: {
                theme: e._$p.data.curr.data.theme,
                foo: { txt: "Instance Management" },
                config: {
                  search: {
                    placeholder: "Search by Name...",
                    field: "name"
                  }
                },
                table: {
                  layout: "fitColumns",
                  // 👈 KEY FIX: Forces columns to fill width
                  columns: [
                    { title: "Instance Name", field: "name", minWidth: 200, headerFilter: "input" },
                    { title: "Utility ID", field: "utility_id", width: 100, hozAlign: "center" },
                    { title: "Project ID", field: "project_id", minWidth: 250 },
                    // Removed fixed width
                    { title: "User ID", field: "user_id", minWidth: 250 },
                    // Removed fixed width
                    { title: "Instance ID", field: "id", minWidth: 300 }
                    // Removed fixed width
                  ],
                  rows: []
                }
              }
            },
            {
              id: "instance-search-panel",
              type: "search_panel",
              slug: "search_panel",
              data: {
                placeholder: "Search instances...",
                size: "sm",
                class: "p-1 max-w-lg",
                // 👈 KEY FIX: Changed max-w-lg to w-full
                sugg: []
              }
            }
          ]
        };
        const h = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, y = await P(h), f = await W(h);
        B("msg", async (_) => {
          if (_.type == "load_more" && _._$p.data.curr.id == "instance-table-01" && (n.value += 1, c(_, t.value, n.value)), _.type == "search:query" && _._$p.data.curr.id == "instance-search-panel") {
            k("msg", {
              type: "remove_all_rows",
              where: { key: "id", value: "instance-table-01" }
            }), n.value = 1, t.value = _._p.query;
            let p = JSON.parse(JSON.stringify({
              data: { curr: i.l[0] }
            }));
            c({
              _$p: p,
              _p: e._p
            }, t.value, n.value);
          }
        }), await (async () => {
          const _ = await y.set({
            data: i,
            return: { r: "chunk" }
          });
          a = _.style, s.value.html.table = _.r[0] || "", s.value.html.search_panel = _.r[1] || "";
          const p = document.createElement("style");
          document.head.appendChild(p), p.innerHTML = a, setTimeout(async () => {
            await f.set({ data: i }), c({ _$p: { data: { curr: i.l[0] } }, _p: e._p }, "", 1);
          }, 20);
        })();
      })();
    }), (a, i) => (g(), x("div", D, [
      s.value.html.search_panel ? (g(), x("div", U, [
        I("div", {
          innerHTML: s.value.html.search_panel
        }, null, 8, A)
      ])) : z("", !0),
      s.value.html.table ? (g(), x("div", V, [
        I("div", {
          innerHTML: s.value.html.table,
          class: "w-full"
        }, null, 8, G)
      ])) : z("", !0)
    ]));
  }
}), X = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const l = M(Z, {
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
    return l.mount(r), s;
  }
});
export {
  X as hydrator,
  X as index
};
