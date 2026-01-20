import { d as M, o as S, r as g, c as b, a as x, b as T, e as v, F as L, f as J } from "./runtime-dom.esm-bundler-BQkxs8ZT.js";
const $ = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), O = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), A = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, a = document.getElementById(e.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((l) => {
        const i = (s) => {
          ((d) => {
            const o = d.getAttribute("data-ce");
            if (!o)
              return;
            const c = JSON.parse(o).filter((n) => n?.k.startsWith("t-"));
            if (c.length != 0)
              for (const n of c) {
                const r = n.k, f = n.v.split(" ");
                if (r == `t-${t}-class`)
                  for (const u of f)
                    d.classList.add(u);
                else
                  for (const u of f)
                    d.classList.remove(u);
              }
          })(s);
        };
        for (const s of l.getElementsByTagName("*"))
          i(s);
        i(l);
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
  return new Promise((l) => {
    const i = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(s), l());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, s = setInterval(() => {
      i();
    }, t);
    i();
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
      } catch (l) {
        this.listeners.error?.forEach(
          (i) => i(l)
        );
      }
  };
};
const w = () => new R();
class E {
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
      for (const [a, l] of t.entries()) {
        const i = l, s = `${i.name}:${e.run_from}`, d = `${e.run_from}_src`;
        let o = i[d];
        const c = `${e.run_from}_src`;
        let n = e?.lazy_lib?.[c] || null;
        if (n && (n = n.replace("{*}", `${i.name}`)), console.log(`_lazy_src: ${n}`), console.log(`_src: ${o}`), m.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && m.lib.inbuilt_lib.indexOf(`${i.name}`) === -1)
            if (n)
              o = n;
            else
              throw `[lib-name=${i.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const r = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            m.lib.l[`${s}`] = {
              lib: r,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const r = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            m.lib.l[`${s}`] = {
              lib: r,
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
      const l = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), l.indexOf(e.type) !== -1)
        for (const [i, s] of l.entries()) {
          let d = i == 0 ? "" : "/";
          if (t += `${d}${s}`, s == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [i, s] of l.entries()) {
          let d = i == 0 ? "" : "/";
          if (t += `${d}${s}`, s == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const N = w(), C = w(), j = N.on, I = N.emit, F = C.emit, P = C.on, B = async (e) => {
  const t = await O();
  return await m.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const l = new E();
      l.start();
      let i = a.data?.value?.l || a.data.l, s = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return a.return.r == "full" ? s.r = "" : s.r = [], await (async () => {
        for (const d of i) {
          const o = await await m.lib.get({ name: d.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await o.lib.index({
            f: {
              name: (n) => t.f.name({ id: d.id, name: n }),
              get_lib: async (n) => await await m.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (n) => await (await A()).set(n),
              path: (n) => m.path.set({ src: o.src, type: d.type, name: n }),
              //set..
              uuid: () => $().set(),
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
          a?.return?.r == "full" ? s.r += c?.r || "" : s.r.push(c?.r || ""), s.style += c?.style || "", s.head += c?.head || "";
        }
      })(), l.stop(), s.benchmark = l.result(), s;
    }
  };
}, D = async (e) => {
  const t = await O();
  return await m.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const l = new E();
      l.start();
      let i = {
        r: "",
        style: ""
      }, s = {
        style_id: `${$().set()}_stl`
      }, d = a.data?.value?.l || a.data.l;
      const o = async () => {
        for (const c of d) {
          const n = await await m.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), r = n.lib, f = w(), u = f.on, _ = await (await r.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (h) => t.f.name({ id: c.id, name: h }),
              get_lib: async (h) => await await m.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (h) => await (await A()).set(h),
              path: (h) => m.path.set({ src: n.src, type: c.type, name: h }),
              //set..
              uuid: () => $().set(),
              wait_until: z,
              //set..
              call: F,
              listen: u,
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
          j("msg", async (h) => {
            try {
              if (Object.keys(h.where || {}).length == 0) {
                await f.emit("msg", h);
                return;
              }
            } catch {
            }
            try {
              if (c?.[h.where?.key || ""] == h.where?.value) {
                await f.emit("msg", h);
                return;
              }
            } catch {
            }
          }), i.style += _.style;
        }
      };
      await z(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((c) => {
          const n = document.getElementById(`${s.style_id}`);
          n && n.remove();
          const r = document.createElement("style");
          r.id = `${s.style_id}`, r.innerHTML = `${i.style}`, c.appendChild(r);
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
}, U = {
  key: 0,
  class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10"
}, V = ["innerHTML"], W = { key: 1 }, Z = ["innerHTML"], G = /* @__PURE__ */ M({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = g(""), a = g(0), l = g(20), i = g({
      html: {
        table: null,
        search_panel: null
      }
    }), s = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function d(n, r = 1, f = 20) {
      try {
        const u = await fetch(s.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${s.token}`
          },
          body: JSON.stringify({
            /*q: query,
            page: page,
            per_page: per_page*/
            operation: "list_coupons",
            user_id: "admin_1",
            page: r,
            limit: f,
            //"status": "active",
            search: n
          })
        });
        if (!u.ok)
          throw new Error(`API error: ${u.status}`);
        return await u.json();
      } catch (u) {
        return console.error("Error fetching product list:", u), null;
      }
    }
    function o(n) {
      return !n?.success || !Array.isArray(n.coupons) ? [] : n.coupons.map((r) => ({
        id: r.id,
        // REQUIRED by Tabulator
        code: r.code,
        description: r.description,
        discount: r.discount_type === "percentage" ? `${r.discount_value}%` : `₹${r.discount_value}`,
        minOrder: `₹${r.min_order_value}`,
        maxDiscount: `₹${r.max_discount}`,
        usage: `${r.current_usage_count}/${r.total_usage_limit}`,
        status: r.status,
        validFrom: r.valid_from,
        validUntil: r.valid_until
      }));
    }
    async function c(n, r, f = 1) {
      const u = await d(r, f, l.value);
      if (u && u.success) {
        const _ = o(u);
        try {
          if (!(_.length > 0))
            throw new Error("no more data..");
        } catch {
          return;
        }
        n._$p.data.curr.data.table.rows = _, I("msg", {
          type: "load_more",
          _p: n._p,
          _$p: n._$p,
          custom: {
            searchText: r,
            page: f
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
    return S(() => {
      (async () => {
        let n = "", r = {
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
                    {
                      title: "Code",
                      field: "code",
                      headerFilter: "input",
                      hozAlign: "center",
                      width: 120,
                      formatter: "plaintext"
                    },
                    {
                      title: "Description",
                      field: "description",
                      headerFilter: "input",
                      minWidth: 250,
                      formatter: "textarea"
                    },
                    {
                      title: "Discount",
                      field: "discount",
                      hozAlign: "center",
                      width: 110
                    },
                    {
                      title: "Min Order",
                      field: "minOrder",
                      hozAlign: "right",
                      width: 120
                    },
                    {
                      title: "Max Discount",
                      field: "maxDiscount",
                      hozAlign: "right",
                      width: 130
                    },
                    {
                      title: "Usage",
                      field: "usage",
                      hozAlign: "center",
                      width: 110
                    },
                    {
                      title: "Status",
                      field: "status",
                      hozAlign: "center",
                      width: 100,
                      formatter: (y) => {
                        const p = y.getValue();
                        return `
        <span class="px-2 py-1 rounded text-xs font-semibold
          ${p === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}">
          ${p}
        </span>
      `;
                      }
                    },
                    {
                      title: "Valid From",
                      field: "validFrom",
                      sorter: "datetime",
                      hozAlign: "center",
                      width: 170
                    },
                    {
                      title: "Valid Until",
                      field: "validUntil",
                      sorter: "datetime",
                      hozAlign: "center",
                      width: 170
                    }
                  ],
                  rows: []
                  //apiRows
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
        const f = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, u = await B(f), _ = await D(f);
        (async () => P("msg", async (y) => {
          if (console.log("[ce_listen]", y), y.type == "load_more" && y._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (a.value += 1, c(y, t.value, a.value)), y.type == "search:query" && y._$p.data.curr.id == "3e1bc78c-aa87-search-panel") {
            I("msg", {
              type: "remove_all_rows",
              custom: {},
              where: {
                key: "id",
                value: "3e1bc78c-104f-4f6f-aa87-75"
              }
            }), a.value = 1, t.value = y._p.query;
            let p = JSON.parse(JSON.stringify({
              data: {
                curr: r.l[0]
              }
            }));
            c({
              _$p: p,
              _p: e._p
            }, t.value, a.value), console.log();
          }
        }))(), await (async () => {
          const y = await u.set({
            data: r,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          n = y.style, i.value.html.table = y.r[0] || "", i.value.html.search_panel = y.r[1] || "";
          const p = document.createElement("style");
          document.head.appendChild(p), p.innerHTML = n, setTimeout(async () => {
            const k = await _.set({
              data: r
            });
            console.log(k);
          }, 20);
        })();
      })();
    }), (n, r) => (x(), b(L, null, [
      i.value.html.search_panel ? (x(), b("div", U, [
        v("div", null, [
          v("div", {
            innerHTML: i.value.html.search_panel
          }, null, 8, V)
        ])
      ])) : T("", !0),
      i.value.html.table ? (x(), b("div", W, [
        v("div", {
          innerHTML: i.value.html.table
        }, null, 8, Z)
      ])) : T("", !0)
    ], 64));
  }
}), Y = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const l = J(G, {
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
  Y as hydrator,
  Y as index
};
