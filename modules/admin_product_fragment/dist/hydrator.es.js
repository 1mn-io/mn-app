import { d as E, r as p, o as N, c as O, a as P, b as C, e as A, f as j } from "./runtime-dom.esm-bundler-DXfIk_T8.js";
const b = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), v = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), k = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, a = document.getElementById(e.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((o) => {
        const i = (s) => {
          ((d) => {
            const l = d.getAttribute("data-ce");
            if (!l)
              return;
            const m = JSON.parse(l).filter((n) => n?.k.startsWith("t-"));
            if (m.length != 0)
              for (const n of m) {
                const r = n.k, f = n.v.split(" ");
                if (r == `t-${t}-class`)
                  for (const c of f)
                    d.classList.add(c);
                else
                  for (const c of f)
                    d.classList.remove(c);
              }
          })(s);
        };
        for (const s of o.getElementsByTagName("*"))
          i(s);
        i(o);
      })(a);
    } catch (t) {
      const a = `err: [theme] ${t}`;
      throw console.log(a), a;
    }
  }
});
function x(e, t = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((o) => {
    const i = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(s), o());
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
let M = class {
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
      } catch (o) {
        this.listeners.error?.forEach(
          (i) => i(o)
        );
      }
  };
};
const w = () => new M();
class z {
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
      for (const [a, o] of t.entries()) {
        const i = o, s = `${i.name}:${e.run_from}`, d = `${e.run_from}_src`;
        let l = i[d];
        const m = `${e.run_from}_src`;
        let n = e?.lazy_lib?.[m] || null;
        if (n && (n = n.replace("{*}", `${i.name}`)), console.log(`_lazy_src: ${n}`), console.log(`_src: ${l}`), h.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(l) && l.includes("/") == !1 && h.lib.inbuilt_lib.indexOf(`${i.name}`) === -1)
            if (n)
              l = n;
            else
              throw `[lib-name=${i.name},lib-src=${l}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (l.startsWith("./") || l.startsWith("../")) {
            const r = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            h.lib.l[`${s}`] = {
              lib: r,
              src: l
            };
          }
          if (l.startsWith("http://") || l.startsWith("https://")) {
            const r = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${l}`
            );
            h.lib.l[`${s}`] = {
              lib: r,
              src: l
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
      const o = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), o.indexOf(e.type) !== -1)
        for (const [i, s] of o.entries()) {
          let d = i == 0 ? "" : "/";
          if (t += `${d}${s}`, s == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [i, s] of o.entries()) {
          let d = i == 0 ? "" : "/";
          if (t += `${d}${s}`, s == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const I = w(), T = w(), S = I.on, L = I.emit, B = T.emit, W = T.on, J = async (e) => {
  const t = await v();
  return await h.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]");
      const o = new z();
      o.start();
      let i = a.data?.value?.l || a.data.l, s = {
        r: "",
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return await (async () => {
        for (const d of i) {
          const l = await await h.lib.get({ name: d.type, run_from: "renderer", lazy_lib: e.lazy_lib }), m = await (await l.lib.index({
            f: {
              name: (n) => t.f.name({ id: d.id, name: n }),
              get_lib: async (n) => await await h.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (n) => await (await k()).set(n),
              path: (n) => h.path.set({ src: l.src, type: d.type, name: n }),
              //set..
              uuid: () => b().set(),
              wait_until: x
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          s.r += m?.r || "", s.style += m?.style || "", s.head += m?.head || "";
        }
      })(), o.stop(), s.benchmark = o.result(), s;
    }
  };
}, R = async (e) => {
  const t = await v();
  return await h.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const o = new z();
      o.start();
      let i = {
        r: "",
        style: ""
      }, s = {
        style_id: `${b().set()}_stl`
      }, d = a.data?.value?.l || a.data.l;
      const l = async () => {
        for (const m of d) {
          const n = await await h.lib.get({ name: m.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), r = n.lib, f = w(), c = f.on, y = await (await r.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => t.f.name({ id: m.id, name: u }),
              get_lib: async (u) => await await h.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (u) => await (await k()).set(u),
              path: (u) => h.path.set({ src: n.src, type: m.type, name: u }),
              //set..
              uuid: () => b().set(),
              wait_until: x,
              //set..
              call: B,
              listen: c,
              //set..
              new_emitter: () => w()
            }
          })).set(
            {
              data: {
                curr: m
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
              if (m?.[u.where?.key || ""] == u.where?.value) {
                await f.emit("msg", u);
                return;
              }
            } catch {
            }
          }), i.style += y.style;
        }
      };
      await x(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await l();
      try {
        ((m) => {
          const n = document.getElementById(`${s.style_id}`);
          n && n.remove();
          const r = document.createElement("style");
          r.id = `${s.style_id}`, r.innerHTML = `${i.style}`, m.appendChild(r);
        })(document.head);
      } catch (m) {
        console.log(`${m}, Failed to set style..`);
      }
      return o.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: o.result()
      };
    }
  };
}, G = { key: 0 }, D = ["innerHTML"], U = /* @__PURE__ */ E({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = p(null), a = p("Ni"), o = p(0), i = p(20), s = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_product_list",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function d(n, r = 1, f = 20) {
      try {
        const c = await fetch(s.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${s.token}`
          },
          body: JSON.stringify({
            q: n,
            page: r,
            per_page: f
          })
        });
        if (!c.ok)
          throw new Error(`API error: ${c.status}`);
        return await c.json();
      } catch (c) {
        return console.error("Error fetching product list:", c), null;
      }
    }
    function l(n) {
      return !n || !n.success || !n.data || !n.data.products ? [] : n.data.products.map((r, f) => {
        const c = Math.min(...r.variant_prices), y = Math.max(...r.variant_prices), u = c === y ? `₹${c}` : `₹${c} - ₹${y}`;
        return {
          id: r.id,
          sku: `SKU-${r.id.slice(0, 8)}`,
          name: `<a href="#" class="text-blue-600 hover:underline font-medium">${r.title}</a>`,
          brand: `<span class="font-semibold text-gray-700">${r.brand}</span>`,
          category: r.category.join(", "),
          price: u,
          stock: r.variant_prices.length,
          rating: r._relevance_score ? (r._relevance_score * 5).toFixed(1) : "N/A",
          slug: `<span class="inline-flex items-center justify-center px-2 py-1 rounded text-xs font-bold border border-transparent bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">${r.category[0] || "Product"}</span>`
        };
      });
    }
    async function m(n, r, f = 1) {
      const c = await d(r, f, i.value);
      if (c && c.success) {
        const y = l(c);
        try {
          if (!(y.length > 0))
            throw new Error("no more data..");
        } catch {
          return;
        }
        const { found: u, total_pages: _, search_time_ms: g } = c.data;
        n._$p.data.curr.data.table.rows = y, L("msg", {
          type: "load_more",
          _p: n._p,
          _$p: n._$p,
          custom: {
            searchText: r,
            page: f,
            totalPages: _,
            found: u
          },
          where: {
            key: "id",
            value: "3e1bc78c-104f-4f6f-aa87-75"
          }
        });
      }
    }
    return N(() => {
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
            }
          ]
        };
        const f = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, c = await J(f), y = await R(f);
        (async () => W("msg", async (_) => {
          console.log("[ce_listen]", _), _.type == "load_more" && _._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (o.value += 1, m(_, a.value, o.value));
        }))(), await (async () => {
          const _ = await c.set({
            data: r
          });
          t.value = _.r || "", n = _.style;
          const g = document.createElement("style");
          document.head.appendChild(g), g.innerHTML = n, setTimeout(async () => {
            const $ = await y.set({
              data: r
            });
            console.log($);
          }, 20);
        })();
      })();
    }), (n, r) => t.value ? (C(), O("div", G, [
      A("div", { innerHTML: t.value }, null, 8, D)
    ])) : P("", !0);
  }
}), F = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const o = j(U, {
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
    return o.mount(s), i;
  }
});
export {
  F as hydrator,
  F as index
};
