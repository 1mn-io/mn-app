import { d as R, o as j, r as w, c as v, a as $, b as E, e as k, F as M, f as J } from "./runtime-dom.esm-bundler-BQkxs8ZT.js";
const z = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const a = Math.random() * 16 | 0;
    return (e == "x" ? a : a & 3 | 8).toString(16);
  })
}), O = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), N = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const a = e.name, t = document.getElementById(e.el_id);
      if (!t)
        throw new Error("[el_id] is invalid");
      ((l) => {
        const s = (n) => {
          ((i) => {
            const o = i.getAttribute("data-ce");
            if (!o)
              return;
            const d = JSON.parse(o).filter((r) => r?.k.startsWith("t-"));
            if (d.length != 0)
              for (const r of d) {
                const c = r.k, u = r.v.split(" ");
                if (c == `t-${a}-class`)
                  for (const m of u)
                    i.classList.add(m);
                else
                  for (const m of u)
                    i.classList.remove(m);
              }
          })(n);
        };
        for (const n of l.getElementsByTagName("*"))
          s(n);
        s(l);
      })(t);
    } catch (a) {
      const t = `err: [theme] ${a}`;
      throw console.log(t), t;
    }
  }
});
function T(e, a = 1e3) {
  let t = {
    cnt: 0
  };
  return new Promise((l) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${t.cnt}]`);
      try {
        e() && (clearInterval(n), l());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${a}]`);
      }
      t.cnt += 1;
    }, n = setInterval(() => {
      s();
    }, a);
    s();
  });
}
let P = class {
  listeners = {};
  on = (e, a) => ((this.listeners[e] ||= []).push(a), () => this.off(e, a));
  off = (e, a) => {
    this.listeners[e] = this.listeners[e]?.filter((t) => t !== a);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...a) => {
    for (const t of this.listeners[e] ?? [])
      await t(...a);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...a) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((t) => t(...a))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...a) => {
    for (const t of this.listeners[e] ?? [])
      try {
        await t(...a);
      } catch (l) {
        this.listeners.error?.forEach(
          (s) => s(l)
        );
      }
  };
};
const x = () => new P();
class C {
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
let f = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const a = e?.lib || [];
      for (const [t, l] of a.entries()) {
        const s = l, n = `${s.name}:${e.run_from}`, i = `${e.run_from}_src`;
        let o = s[i];
        const d = `${e.run_from}_src`;
        let r = e?.lazy_lib?.[d] || null;
        if (r && (r = r.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${r}`), console.log(`_src: ${o}`), f.lib.l.hasOwnProperty(`${n}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && f.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (r)
              o = r;
            else
              throw `[lib-name=${s.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const c = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            f.lib.l[`${n}`] = {
              lib: c,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const c = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            f.lib.l[`${n}`] = {
              lib: c,
              src: o
            };
          }
        }
      }
      console.log(await f.lib.get_all({}));
    },
    get: async (e) => {
      let a = null;
      const t = `${e.name}:${e.run_from}`;
      return f.lib.l.hasOwnProperty(`${t}`) == !1 && await f.lib.set({
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
      }), a = f.lib.l[`${t}`], a;
    },
    get_all: async (e) => f.lib.l
  },
  path: {
    set: (e) => {
      let a = "", t = "";
      const l = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (t = "/dist"), l.indexOf(e.type) !== -1)
        for (const [s, n] of l.entries()) {
          let i = s == 0 ? "" : "/";
          if (a += `${i}${n}`, n == e.type)
            return `${a}${t}${e.name}`;
        }
      else
        for (const [s, n] of l.entries()) {
          let i = s == 0 ? "" : "/";
          if (a += `${i}${n}`, n == "src")
            return `${a}${t}${e.name}`;
        }
      return `${a}${t}${e.name}`;
    }
  }
};
const A = x(), S = x(), V = A.on, I = A.emit, B = S.emit, D = S.on, F = async (e) => {
  const a = await O();
  return await f.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (t) => {
      console.log("--renderer [set]"), t.return = t?.return || {}, t.return.r = t?.return?.r || "full";
      const l = new C();
      l.start();
      let s = t.data?.value?.l || t.data.l, n = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return t.return.r == "full" ? n.r = "" : n.r = [], await (async () => {
        for (const i of s) {
          const o = await await f.lib.get({ name: i.type, run_from: "renderer", lazy_lib: e.lazy_lib }), d = await (await o.lib.index({
            f: {
              name: (r) => a.f.name({ id: i.id, name: r }),
              get_lib: async (r) => await await f.lib.get({ name: r.name, run_from: r.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (r) => await (await N()).set(r),
              path: (r) => f.path.set({ src: o.src, type: i.type, name: r }),
              //set..
              uuid: () => z().set(),
              wait_until: T
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          t?.return?.r == "full" ? n.r += d?.r || "" : n.r.push(d?.r || ""), n.style += d?.style || "", n.head += d?.head || "";
        }
      })(), l.stop(), n.benchmark = l.result(), n;
    }
  };
}, W = async (e) => {
  const a = await O();
  return await f.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (t) => {
      console.log("--hydrator [set]");
      const l = new C();
      l.start();
      let s = {
        r: "",
        style: ""
      }, n = {
        style_id: `${z().set()}_stl`
      }, i = t.data?.value?.l || t.data.l;
      const o = async () => {
        for (const d of i) {
          const r = await await f.lib.get({ name: d.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), c = r.lib, u = x(), m = u.on, y = await (await c.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (h) => a.f.name({ id: d.id, name: h }),
              get_lib: async (h) => await await f.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (h) => await (await N()).set(h),
              path: (h) => f.path.set({ src: r.src, type: d.type, name: h }),
              //set..
              uuid: () => z().set(),
              wait_until: T,
              //set..
              call: B,
              listen: m,
              //set..
              new_emitter: () => x()
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          V("msg", async (h) => {
            try {
              if (Object.keys(h.where || {}).length == 0) {
                await u.emit("msg", h);
                return;
              }
            } catch {
            }
            try {
              if (d?.[h.where?.key || ""] == h.where?.value) {
                await u.emit("msg", h);
                return;
              }
            } catch {
            }
          }), s.style += y.style;
        }
      };
      await T(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((d) => {
          const r = document.getElementById(`${n.style_id}`);
          r && r.remove();
          const c = document.createElement("style");
          c.id = `${n.style_id}`, c.innerHTML = `${s.style}`, d.appendChild(c);
        })(document.head);
      } catch (d) {
        console.log(`${d}, Failed to set style..`);
      }
      return l.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: l.result()
      };
    }
  };
};
function U(e, a) {
  return a.split(".").reduce((t, l) => t?.[l], e);
}
function Z(e, a) {
  const { open: t, close: l } = a, s = [];
  let n = 0;
  for (; n < e.length; ) {
    const i = e.indexOf(t, n);
    if (i === -1) {
      s.push({ type: "text", value: e.slice(n) });
      break;
    }
    i > n && s.push({ type: "text", value: e.slice(n, i) });
    const o = e.indexOf(l, i + t.length);
    if (o === -1)
      throw new Error(`Unclosed template placeholder starting at ${i}`);
    const d = e.slice(i + t.length, o).trim(), [r, c] = d.split("=");
    s.push({ type: "param", value: r, defaultValue: c }), n = o + l.length;
  }
  return s;
}
function G(e, a, t) {
  const l = /* @__PURE__ */ new Set();
  return e.map((n) => {
    if (n.type === "text") return n.value;
    const i = U(a, n.value);
    return l.add(n.value.split(".")[0]), i === void 0 || i === "" ? n.defaultValue !== void 0 ? n.defaultValue : "" : String(i);
  }).join("");
}
function X(e, a) {
  const t = {
    open: "{",
    close: "}"
  }, l = Z(e, t);
  return (s) => G(l, s);
}
const q = {
  key: 0,
  class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10"
}, Y = ["innerHTML"], H = { key: 1 }, Q = ["innerHTML"], K = /* @__PURE__ */ R({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const a = w(""), t = w(0), l = w(20), s = w({
      html: {
        table: null,
        search_panel: null
      }
    }), n = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/ui_management?typ=list_ui_info",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function i(r, c = 1, u = 20) {
      try {
        const m = await fetch(n.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${n.token}`
          },
          body: JSON.stringify({
            /* q: query,
             page: page,
             per_page: per_page*/
            //set..
            //"typ_filter": "on-boarding",
            page: c,
            page_size: u
          })
        });
        if (!m.ok)
          throw new Error(`API error: ${m.status}`);
        return await m.json();
      } catch (m) {
        return console.error("Error fetching product list:", m), null;
      }
    }
    function o(r) {
      if (!r?.success || !Array.isArray(r?.data?.items))
        return [];
      const c = (u) => ({
        id: u.id,
        type: u.typ,
        name: u.name,
        parent_id: u.parent_id,
        created_at: u.created_at,
        updated_at: u.updated_at,
        // optional: keep raw data if needed later
        dta: u.dta,
        // Tabulator nested rows
        _children: Array.isArray(u.children) && u.children.length ? u.children.map(c) : void 0
      });
      return r.data.items.map(c);
    }
    async function d(r, c, u = 1) {
      const m = await i(c, u, l.value);
      if (m && m.success) {
        const y = o(m);
        try {
          if (!(y.length > 0))
            throw new Error("no more data..");
        } catch (h) {
          console.log(h);
          return;
        }
        r._$p.data.curr.data.table.rows = y, I("msg", {
          type: "load_more",
          _p: r._p,
          _$p: r._$p,
          custom: {
            searchText: c,
            page: u
            //totalPages: total_pages,
            //found: found
          },
          where: {
            key: "id",
            value: "3e1bc78c-104f-4f6f-aa87-75"
          }
        });
      }
    }
    return j(() => {
      (async () => {
        let r = "", c = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-75",
              type: "table",
              slug: "table",
              data: {
                theme: e._$p.data.curr.data.theme,
                //"light",
                foo: {
                  txt: ""
                  /*apiResponse?.success 
                  ? `Found ${apiResponse.data.found} products in ${apiResponse.data.search_time_ms}ms - Page ${apiResponse.data.page} of ${apiResponse.data.total_pages}`
                  : "Product Directory - Search for products"*/
                },
                config: {
                  search: {
                    placeholder: "Search Products (e.g., Nike shirts, Adidas shoes)...",
                    field: "name"
                  },
                  filter: {
                    label: "All Categories",
                    field: "category"
                  },
                  filterOptions: [
                    "Men",
                    "Women",
                    "Footwear",
                    "Apparel",
                    "Accessories"
                  ]
                },
                table: {
                  columns: [
                    { title: "Name", field: "name" },
                    { title: "Type", field: "type" },
                    { title: "Created", field: "created_at" },
                    {
                      title: "Actions",
                      field: "actions",
                      hozAlign: "center",
                      width: 200,
                      formatter: (p) => (p.getRow().getData(), `
            <div class="flex items-center justify-center gap-2">
                <button
                    class="px-2 py-1 text-xs font-medium text-blue-600 border border-blue-200 rounded hover:bg-blue-50 focus:outline-none"
                    data-action="view"
                >
                    View
                </button>

                <button
                    class="px-2 py-1 text-xs font-medium text-emerald-600 border border-emerald-200 rounded hover:bg-emerald-50 focus:outline-none"
                    data-action="edit"
                >
                    Edit
                </button>

                
                    <button
                        class="px-2 py-1 text-xs font-medium text-red-600 border border-red-200 rounded hover:bg-red-50 focus:outline-none"
                        data-action="delete"
                    >
                        Delete
                    </button>
                
            </div>
        `),
                      cellClick: (p, _) => {
                        const b = p.target.getAttribute("data-action");
                        if (!b) return;
                        const g = _.getRow().getData();
                        switch (b) {
                          case "view":
                            console.log("VIEW", g);
                            break;
                          case "edit":
                            console.log("EDIT", g);
                            const L = X(e._$p.data.curr.data.event.onClickEdit)({
                              id: g.id
                            });
                            location.href = L;
                            break;
                          case "delete":
                            console.log("DELETE", g);
                            break;
                        }
                      }
                    }
                  ],
                  rows: [],
                  //apiRows
                  //set..
                  //rowHeight: 175,
                  dataTree: !0,
                  dataTreeChildField: "_children",
                  //set..
                  layout: "fitColumns",
                  resizableColumnFit: !0
                  //set..     
                  //dataTreeStartExpanded: true,
                }
              }
            },
            {
              id: "3e1bc78c-aa87-search-panel",
              type: "search_panel",
              slug: "search_panel",
              data: {
                data: "",
                placeholder: "Search..",
                show_sugg: !1,
                size: "sm",
                //sm, md, xl
                class: "p-1 max-w-lg",
                //"p-1",
                sugg: [],
                map: {
                  title: "title",
                  label: "type"
                }
              }
            }
          ]
        };
        const u = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, m = await F(u), y = await W(u);
        (async () => D("msg", async (p) => {
          if (console.log("[ce_listen]", p), p.type == "load_more" && p._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (t.value += 1, d(p, a.value, t.value)), p.type == "search:query" && p._$p.data.curr.id == "3e1bc78c-aa87-search-panel") {
            I("msg", {
              type: "remove_all_rows",
              custom: {},
              where: {
                key: "id",
                value: "3e1bc78c-104f-4f6f-aa87-75"
              }
            }), t.value = 1, a.value = p._p.query;
            let _ = JSON.parse(JSON.stringify({
              data: {
                curr: c.l[0]
              }
            }));
            d({
              _$p: _,
              _p: e._p
            }, a.value, t.value), console.log();
          }
        }))(), await (async () => {
          const p = await m.set({
            data: c,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          r = p.style, s.value.html.table = p.r[0] || "", s.value.html.search_panel = p.r[1] || "";
          const _ = document.createElement("style");
          document.head.appendChild(_), _.innerHTML = r, setTimeout(async () => {
            const b = await y.set({
              data: c
            });
            console.log(b);
          }, 20);
        })();
      })();
    }), (r, c) => ($(), v(M, null, [
      s.value.html.search_panel ? ($(), v("div", q, [
        k("div", null, [
          k("div", {
            innerHTML: s.value.html.search_panel
          }, null, 8, Y)
        ])
      ])) : E("", !0),
      s.value.html.table ? ($(), v("div", H, [
        k("div", {
          innerHTML: s.value.html.table
        }, null, 8, Q)
      ])) : E("", !0)
    ], 64));
  }
}), ae = async (e) => ({
  set: async (a) => {
    console.log(`--hydrator [${a.data.curr.type}]`);
    const l = J(K, {
      _p: e,
      _$p: a
    }), s = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: a,
            custom: {}
          });
        }
      }
    }, n = document.getElementById(e.f.name("vue-root"));
    return l.mount(n), s;
  }
});
export {
  ae as hydrator,
  ae as index
};
