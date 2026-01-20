import { d as C, o as S, r as g, c as w, a as x, b as T, e as $, F as L, f as M } from "./runtime-dom.esm-bundler-BQkxs8ZT.js";
const v = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), O = async () => ({
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
      ((c) => {
        const i = (n) => {
          ((p) => {
            const d = p.getAttribute("data-ce");
            if (!d)
              return;
            const u = JSON.parse(d).filter((r) => r?.k.startsWith("t-"));
            if (u.length != 0)
              for (const r of u) {
                const l = r.k, y = r.v.split(" ");
                if (l == `t-${t}-class`)
                  for (const m of y)
                    p.classList.add(m);
                else
                  for (const m of y)
                    p.classList.remove(m);
              }
          })(n);
        };
        for (const n of c.getElementsByTagName("*"))
          i(n);
        i(c);
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
  return new Promise((c) => {
    const i = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(n), c());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, n = setInterval(() => {
      i();
    }, t);
    i();
  });
}
let D = class {
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
      } catch (c) {
        this.listeners.error?.forEach(
          (i) => i(c)
        );
      }
  };
};
const b = () => new D();
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
let _ = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [a, c] of t.entries()) {
        const i = c, n = `${i.name}:${e.run_from}`, p = `${e.run_from}_src`;
        let d = i[p];
        const u = `${e.run_from}_src`;
        let r = e?.lazy_lib?.[u] || null;
        if (r && (r = r.replace("{*}", `${i.name}`)), console.log(`_lazy_src: ${r}`), console.log(`_src: ${d}`), _.lib.l.hasOwnProperty(`${n}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(d) && d.includes("/") == !1 && _.lib.inbuilt_lib.indexOf(`${i.name}`) === -1)
            if (r)
              d = r;
            else
              throw `[lib-name=${i.name},lib-src=${d}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (d.startsWith("./") || d.startsWith("../")) {
            const l = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            _.lib.l[`${n}`] = {
              lib: l,
              src: d
            };
          }
          if (d.startsWith("http://") || d.startsWith("https://")) {
            const l = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            _.lib.l[`${n}`] = {
              lib: l,
              src: d
            };
          }
        }
      }
      console.log(await _.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return _.lib.l.hasOwnProperty(`${a}`) == !1 && await _.lib.set({
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
      }), t = _.lib.l[`${a}`], t;
    },
    get_all: async (e) => _.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const c = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), c.indexOf(e.type) !== -1)
        for (const [i, n] of c.entries()) {
          let p = i == 0 ? "" : "/";
          if (t += `${p}${n}`, n == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [i, n] of c.entries()) {
          let p = i == 0 ? "" : "/";
          if (t += `${p}${n}`, n == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const R = b(), A = b(), P = R.on, I = R.emit, J = A.emit, j = A.on, B = async (e) => {
  const t = await O();
  return await _.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const c = new N();
      c.start();
      let i = a.data?.value?.l || a.data.l, n = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return a.return.r == "full" ? n.r = "" : n.r = [], await (async () => {
        for (const p of i) {
          const d = await await _.lib.get({ name: p.type, run_from: "renderer", lazy_lib: e.lazy_lib }), u = await (await d.lib.index({
            f: {
              name: (r) => t.f.name({ id: p.id, name: r }),
              get_lib: async (r) => await await _.lib.get({ name: r.name, run_from: r.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (r) => await (await E()).set(r),
              path: (r) => _.path.set({ src: d.src, type: p.type, name: r }),
              //set..
              uuid: () => v().set(),
              wait_until: z
            }
          })).set(
            {
              data: {
                curr: p
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? n.r += u?.r || "" : n.r.push(u?.r || ""), n.style += u?.style || "", n.head += u?.head || "";
        }
      })(), c.stop(), n.benchmark = c.result(), n;
    }
  };
}, F = async (e) => {
  const t = await O();
  return await _.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const c = new N();
      c.start();
      let i = {
        r: "",
        style: ""
      }, n = {
        style_id: `${v().set()}_stl`
      }, p = a.data?.value?.l || a.data.l;
      const d = async () => {
        for (const u of p) {
          const r = await await _.lib.get({ name: u.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), l = r.lib, y = b(), m = y.on, f = await (await l.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (h) => t.f.name({ id: u.id, name: h }),
              get_lib: async (h) => await await _.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (h) => await (await E()).set(h),
              path: (h) => _.path.set({ src: r.src, type: u.type, name: h }),
              //set..
              uuid: () => v().set(),
              wait_until: z,
              //set..
              call: J,
              listen: m,
              //set..
              new_emitter: () => b()
            }
          })).set(
            {
              data: {
                curr: u
              }
            }
            /*_$cb*/
          );
          P("msg", async (h) => {
            try {
              if (Object.keys(h.where || {}).length == 0) {
                await y.emit("msg", h);
                return;
              }
            } catch {
            }
            try {
              if (u?.[h.where?.key || ""] == h.where?.value) {
                await y.emit("msg", h);
                return;
              }
            } catch {
            }
          }), i.style += f.style;
        }
      };
      await z(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await d();
      try {
        ((u) => {
          const r = document.getElementById(`${n.style_id}`);
          r && r.remove();
          const l = document.createElement("style");
          l.id = `${n.style_id}`, l.innerHTML = `${i.style}`, u.appendChild(l);
        })(document.head);
      } catch (u) {
        console.log(`${u}, Failed to set style..`);
      }
      return c.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: c.result()
      };
    }
  };
}, V = {
  key: 0,
  class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10"
}, W = ["innerHTML"], U = { key: 1 }, Z = ["innerHTML"], G = /* @__PURE__ */ C({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = g(""), a = g(0), c = g(20), i = g({
      html: {
        table: null,
        search_panel: null
      }
    }), n = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function p(r, l = 1, y = 20) {
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
            operation: "get_orders",
            user_id: "user_1",
            //"status": "pending",
            search: r,
            //"wireless",
            page: l,
            limit: y
          })
        });
        if (!m.ok)
          throw new Error(`API error: ${m.status}`);
        return await m.json();
      } catch (m) {
        return console.error("Error fetching product list:", m), null;
      }
    }
    function d(r) {
      return !r?.success || !Array.isArray(r.orders) ? [] : r.orders.map((l) => {
        const y = l.pricing || {}, m = l.shipping_address || {};
        return {
          // ===== Parent (Order) =====
          id: `ORDER-${l.order_id}`,
          type: "order",
          order_id: l.order_id,
          order_number: l.order_number,
          customer: m.name,
          phone: m.phone_number,
          city: m.city,
          total_items: l.items?.length || 0,
          total_price: `₹${y.total_price}`,
          tax: `₹${y.tax_amount}`,
          final_amount: `₹${y.final_amount}`,
          currency: y.currency,
          status: "-",
          //order.items?.[0]?.order_status ?? "N/A",
          // ===== Children (Order Items) =====
          _children: (l.items || []).map((f) => {
            const h = f.reference_data?.product_data || {}, s = f.reference_data?.variant_product_data || {};
            return {
              id: `ITEM-${f.order_item_id}`,
              type: "item",
              order_item_id: f.order_item_id,
              product_id: h.id,
              name: h.title,
              /*brand: product.brand,
              category: Array.isArray(product.category)
                  ? product.category.join(", ")
                  : "",*/
              size: s.size,
              color: s.color,
              price: `₹${f.price}`,
              payable_price: `₹${f.payable_price}`,
              mrp: s.mrp ? `₹${s.mrp}` : "N/A",
              stock: s.stock,
              status: f.order_status,
              created_at: f.created_at
            };
          })
        };
      });
    }
    async function u(r, l, y = 1) {
      const m = await p(l, y, c.value);
      if (m && m.success) {
        const f = d(m);
        try {
          if (!(f.length > 0))
            throw new Error("no more data..");
        } catch (h) {
          console.log(h);
          return;
        }
        r._$p.data.curr.data.table.rows = f, I("msg", {
          type: "load_more",
          _p: r._p,
          _$p: r._$p,
          custom: {
            searchText: l,
            page: y
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
        let r = "", l = {
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
                      title: "Order / Item",
                      field: "order_number",
                      width: 260,
                      formatter: (s) => {
                        const o = s.getRow().getData();
                        return o.type === "order" ? `
          <div class="font-semibold text-gray-800">
            ${o.order_number}
          </div>
          <div class="text-xs text-gray-500">
            ${o.customer} • ${o.city}
          </div>
        ` : `
        <div class="pl-6 text-sm text-gray-700">
          ${o.name}
        </div>
      `;
                      }
                    },
                    /*{
                                                        title: "Brand / Size",
                                                        field: "brand",
                                                        //width: 160,
                                                        formatter: (cell: any) => {
                                                            const data = cell.getRow().getData();
                    
                                                            if (data.type === "order") {
                                                                return `<span class="text-gray-400">—</span>`;
                                                            }
                    
                                                            return `
                            <div class="text-sm">
                              <div class="font-medium">${data.brand}</div>
                              <div class="text-xs text-gray-500">Size: ${data.size}</div>
                            </div>
                          `;
                                                        }
                                                    },
                    
                                                    {
                                                        title: "Category",
                                                        field: "category",
                                                        //width: 200,
                                                        formatter: (cell: any) => {
                                                            const data = cell.getRow().getData();
                                                            return data.type === "order" ? "—" : data.category;
                                                        }
                                                    },*/
                    {
                      title: "Price",
                      field: "price",
                      hozAlign: "right",
                      //width: 110,
                      formatter: (s) => {
                        const o = s.getRow().getData();
                        return o.type === "order" ? "—" : o.price;
                      }
                    },
                    {
                      title: "Payable",
                      field: "payable_price",
                      hozAlign: "right",
                      //width: 110,
                      formatter: (s) => {
                        const o = s.getRow().getData();
                        return o.type === "order" ? "—" : o.payable_price;
                      }
                    },
                    {
                      title: "Qty / Items",
                      field: "total_items",
                      hozAlign: "center",
                      //width: 120,
                      formatter: (s) => {
                        const o = s.getRow().getData();
                        return o.type === "order" ? `<span class="font-semibold">${o.total_items}</span>` : "1";
                      }
                    },
                    {
                      title: "Status",
                      field: "status",
                      //width: 120,
                      formatter: (s) => {
                        const o = s.getValue();
                        return s.getRow().getData(), `
        <span class="px-2 py-1 rounded text-xs font-semibold
          ${{
                          pending: "bg-yellow-100 text-yellow-700",
                          shipped: "bg-blue-100 text-blue-700",
                          delivered: "bg-green-100 text-green-700",
                          cancelled: "bg-red-100 text-red-700"
                        }[o] || "bg-gray-100 text-gray-600"}">
          ${o}
        </span>
      `;
                      }
                    },
                    {
                      title: "Final Amount",
                      field: "final_amount",
                      hozAlign: "right",
                      //width: 140,
                      formatter: (s) => {
                        const o = s.getRow().getData();
                        return o.type === "order" ? o.final_amount : "—";
                      }
                    },
                    {
                      title: "Created",
                      field: "created_at",
                      //width: 170,
                      formatter: (s) => {
                        const o = s.getRow().getData();
                        return o.type === "order" ? '<span class="text-gray-600">—</span>' : `<span class="text-xs text-gray-500">${o.created_at}</span>`;
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
        const y = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, m = await B(y), f = await F(y);
        (async () => j("msg", async (s) => {
          if (console.log("[ce_listen]", s), s.type == "load_more" && s._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (a.value += 1, u(s, t.value, a.value)), s.type == "search:query" && s._$p.data.curr.id == "3e1bc78c-aa87-search-panel") {
            I("msg", {
              type: "remove_all_rows",
              custom: {},
              where: {
                key: "id",
                value: "3e1bc78c-104f-4f6f-aa87-75"
              }
            }), a.value = 1, t.value = s._p.query;
            let o = JSON.parse(JSON.stringify({
              data: {
                curr: l.l[0]
              }
            }));
            u({
              _$p: o,
              _p: e._p
            }, t.value, a.value), console.log();
          }
        }))(), await (async () => {
          const s = await m.set({
            data: l,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          r = s.style, i.value.html.table = s.r[0] || "", i.value.html.search_panel = s.r[1] || "";
          const o = document.createElement("style");
          document.head.appendChild(o), o.innerHTML = r, setTimeout(async () => {
            const k = await f.set({
              data: l
            });
            console.log(k);
          }, 20);
        })();
      })();
    }), (r, l) => (x(), w(L, null, [
      i.value.html.search_panel ? (x(), w("div", V, [
        $("div", null, [
          $("div", {
            innerHTML: i.value.html.search_panel
          }, null, 8, W)
        ])
      ])) : T("", !0),
      i.value.html.table ? (x(), w("div", U, [
        $("div", {
          innerHTML: i.value.html.table
        }, null, 8, Z)
      ])) : T("", !0)
    ], 64));
  }
}), Y = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const c = M(G, {
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
    }, n = document.getElementById(e.f.name("vue-root"));
    return c.mount(n), i;
  }
});
export {
  Y as hydrator,
  Y as index
};
