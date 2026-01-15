import { d as S, r as w, o as M, c as b, a as x, b as T, e as $, F as A, f as L } from "./runtime-dom.esm-bundler-C-eixKsW.js";
const v = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), N = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), O = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, a = document.getElementById(e.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((i) => {
        const l = (s) => {
          ((u) => {
            const o = u.getAttribute("data-ce");
            if (!o)
              return;
            const c = JSON.parse(o).filter((r) => r?.k.startsWith("t-"));
            if (c.length != 0)
              for (const r of c) {
                const n = r.k, f = r.v.split(" ");
                if (n == `t-${t}-class`)
                  for (const d of f)
                    u.classList.add(d);
                else
                  for (const d of f)
                    u.classList.remove(d);
              }
          })(s);
        };
        for (const s of i.getElementsByTagName("*"))
          l(s);
        l(i);
      })(a);
    } catch (t) {
      const a = `err: [theme] ${t}`;
      throw console.log(a), a;
    }
  }
});
function k(e, t = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((i) => {
    const l = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(s), i());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, s = setInterval(() => {
      l();
    }, t);
    l();
  });
}
let j = class {
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
const g = () => new j();
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
let h = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [a, i] of t.entries()) {
        const l = i, s = `${l.name}:${e.run_from}`, u = `${e.run_from}_src`;
        let o = l[u];
        const c = `${e.run_from}_src`;
        let r = e?.lazy_lib?.[c] || null;
        if (r && (r = r.replace("{*}", `${l.name}`)), console.log(`_lazy_src: ${r}`), console.log(`_src: ${o}`), h.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && h.lib.inbuilt_lib.indexOf(`${l.name}`) === -1)
            if (r)
              o = r;
            else
              throw `[lib-name=${l.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const n = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            h.lib.l[`${s}`] = {
              lib: n,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const n = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            h.lib.l[`${s}`] = {
              lib: n,
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
        for (const [l, s] of i.entries()) {
          let u = l == 0 ? "" : "/";
          if (t += `${u}${s}`, s == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [l, s] of i.entries()) {
          let u = l == 0 ? "" : "/";
          if (t += `${u}${s}`, s == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const P = g(), C = g(), J = P.on, I = P.emit, B = C.emit, W = C.on, R = async (e) => {
  const t = await N();
  return await h.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const i = new E();
      i.start();
      let l = a.data?.value?.l || a.data.l, s = {
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
        for (const u of l) {
          const o = await await h.lib.get({ name: u.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await o.lib.index({
            f: {
              name: (r) => t.f.name({ id: u.id, name: r }),
              get_lib: async (r) => await await h.lib.get({ name: r.name, run_from: r.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (r) => await (await O()).set(r),
              path: (r) => h.path.set({ src: o.src, type: u.type, name: r }),
              //set..
              uuid: () => v().set(),
              wait_until: k
            }
          })).set(
            {
              data: {
                curr: u
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? s.r += c?.r || "" : s.r.push(c?.r || ""), s.style += c?.style || "", s.head += c?.head || "";
        }
      })(), i.stop(), s.benchmark = i.result(), s;
    }
  };
}, G = async (e) => {
  const t = await N();
  return await h.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const i = new E();
      i.start();
      let l = {
        r: "",
        style: ""
      }, s = {
        style_id: `${v().set()}_stl`
      }, u = a.data?.value?.l || a.data.l;
      const o = async () => {
        for (const c of u) {
          const r = await await h.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), n = r.lib, f = g(), d = f.on, p = await (await n.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (m) => t.f.name({ id: c.id, name: m }),
              get_lib: async (m) => await await h.lib.get({ name: m.name, run_from: m.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (m) => await (await O()).set(m),
              path: (m) => h.path.set({ src: r.src, type: c.type, name: m }),
              //set..
              uuid: () => v().set(),
              wait_until: k,
              //set..
              call: B,
              listen: d,
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
          J("msg", async (m) => {
            try {
              if (Object.keys(m.where || {}).length == 0) {
                await f.emit("msg", m);
                return;
              }
            } catch {
            }
            try {
              if (c?.[m.where?.key || ""] == m.where?.value) {
                await f.emit("msg", m);
                return;
              }
            } catch {
            }
          }), l.style += p.style;
        }
      };
      await k(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((c) => {
          const r = document.getElementById(`${s.style_id}`);
          r && r.remove();
          const n = document.createElement("style");
          n.id = `${s.style_id}`, n.innerHTML = `${l.style}`, c.appendChild(n);
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
}, F = ["innerHTML"], U = { key: 1 }, V = ["innerHTML"], Z = /* @__PURE__ */ S({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    w(null);
    const t = w("Ni"), a = w(0), i = w(20), l = w({
      html: {
        table: null,
        search_panel: null
      }
    }), s = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_product_list",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function u(r, n = 1, f = 20) {
      try {
        const d = await fetch(s.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${s.token}`
          },
          body: JSON.stringify({
            q: r,
            page: n,
            per_page: f
          })
        });
        if (!d.ok)
          throw new Error(`API error: ${d.status}`);
        return await d.json();
      } catch (d) {
        return console.error("Error fetching product list:", d), null;
      }
    }
    function o(r) {
      return !r || !r.success || !r.data || !r.data.products ? [] : r.data.products.map((n, f) => {
        const d = Math.min(...n.variant_prices), p = Math.max(...n.variant_prices), m = d === p ? `₹${d}` : `₹${d} - ₹${p}`;
        return {
          id: n.id,
          sku: `SKU-${n.id.slice(0, 8)}`,
          name: `<a href="#" class="text-blue-600 hover:underline font-medium">${n.title}</a>`,
          brand: `<span class="font-semibold text-gray-700">${n.brand}</span>`,
          category: n.category.join(", "),
          price: m,
          stock: n.variant_prices.length,
          rating: n._relevance_score ? (n._relevance_score * 5).toFixed(1) : "N/A",
          slug: `<span class="inline-flex items-center justify-center px-2 py-1 rounded text-xs font-bold border border-transparent bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">${n.category[0] || "Product"}</span>`
        };
      });
    }
    async function c(r, n, f = 1) {
      const d = await u(n, f, i.value);
      if (d && d.success) {
        const p = o(d);
        try {
          if (!(p.length > 0))
            throw new Error("no more data..");
        } catch {
          return;
        }
        const { found: m, total_pages: y, search_time_ms: _ } = d.data;
        r._$p.data.curr.data.table.rows = p, I("msg", {
          type: "load_more",
          _p: r._p,
          _$p: r._$p,
          custom: {
            searchText: n,
            page: f,
            totalPages: y,
            found: m
          },
          where: {
            key: "id",
            value: "3e1bc78c-104f-4f6f-aa87-75"
          }
        });
      }
    }
    return M(() => {
      (async () => {
        let r = "", n = {
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
                      title: "Product ID",
                      field: "id",
                      width: 150,
                      headerSort: !1
                    },
                    {
                      title: "Product Name",
                      field: "name",
                      widthGrow: 3,
                      minWidth: 250,
                      formatter: "html"
                    },
                    {
                      title: "Brand",
                      field: "brand",
                      widthGrow: 1,
                      minWidth: 120,
                      formatter: "html"
                    },
                    {
                      title: "Category",
                      field: "category",
                      widthGrow: 1,
                      minWidth: 150
                    },
                    {
                      title: "Price",
                      field: "price",
                      width: 140,
                      hozAlign: "right"
                    },
                    // {
                    //     "title": "Variants",
                    //     "field": "stock",
                    //     "width": 80,
                    //     "hozAlign": "center"
                    // },
                    // {
                    //     "title": "Score",
                    //     "field": "rating",
                    //     "width": 80,
                    //     "hozAlign": "center"
                    // },
                    {
                      title: "Type",
                      field: "slug",
                      formatter: "html",
                      widthGrow: 1,
                      minWidth: 110,
                      hozAlign: "center"
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
        }, d = await R(f), p = await G(f);
        (async () => W("msg", async (y) => {
          if (console.log("[ce_listen]", y), y.type == "load_more" && y._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (a.value += 1, c(y, t.value, a.value)), y.type == "search:query" && y._$p.data.curr.id == "3e1bc78c-aa87-search-panel") {
            I("msg", {
              type: "remove_all_rows",
              custom: {},
              where: {
                key: "id",
                value: "3e1bc78c-104f-4f6f-aa87-75"
              }
            }), t.value = y._p.query;
            let _ = JSON.parse(JSON.stringify({
              data: {
                curr: n.l[0]
              }
            }));
            c({
              _$p: _,
              _p: e._p
            }, t.value, a.value), console.log();
          }
        }))(), await (async () => {
          const y = await d.set({
            data: n,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          r = y.style, l.value.html.table = y.r[0] || "", l.value.html.search_panel = y.r[1] || "";
          const _ = document.createElement("style");
          document.head.appendChild(_), _.innerHTML = r, setTimeout(async () => {
            const z = await p.set({
              data: n
            });
            console.log(z);
          }, 20);
        })();
      })();
    }), (r, n) => (x(), b(A, null, [
      l.value.html.search_panel ? (x(), b("div", D, [
        $("div", null, [
          $("div", {
            innerHTML: l.value.html.search_panel
          }, null, 8, F)
        ])
      ])) : T("", !0),
      l.value.html.table ? (x(), b("div", U, [
        $("div", {
          innerHTML: l.value.html.table
        }, null, 8, V)
      ])) : T("", !0)
    ], 64));
  }
}), q = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const i = L(Z, {
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
    }, s = document.getElementById(e.f.name("vue-root"));
    return i.mount(s), l;
  }
});
export {
  q as hydrator,
  q as index
};
