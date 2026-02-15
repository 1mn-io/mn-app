import { d as F, o as U, a as T, c as S, b as v, e as z, F as V, r as R, f as W, g as q } from "./runtime-dom.esm-bundler-FeUh2-HK.js";
const j = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const s = Math.random() * 16 | 0;
    return (e == "x" ? s : s & 3 | 8).toString(16);
  })
}), N = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), D = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const s = e.name, o = document.getElementById(e.el_id);
      if (!o)
        throw new Error("[el_id] is invalid");
      ((u) => {
        const r = (d) => {
          ((p) => {
            const y = p.getAttribute("data-ce");
            if (!y)
              return;
            const c = JSON.parse(y).filter((i) => i?.k.startsWith("t-"));
            if (c.length != 0)
              for (const i of c) {
                const b = i.k, w = i.v.split(" ");
                if (b == `t-${s}-class`)
                  for (const x of w)
                    p.classList.add(x);
                else
                  for (const x of w)
                    p.classList.remove(x);
              }
          })(d);
        };
        for (const d of u.getElementsByTagName("*"))
          r(d);
        r(u);
      })(o);
    } catch (s) {
      const o = `err: [theme] ${s}`;
      throw console.log(o), o;
    }
  }
});
function C(e, s = 1e3) {
  let o = {
    cnt: 0
  };
  return new Promise((u) => {
    const r = () => {
      console.log(`[setInterval] is running.. [count=${o.cnt}]`);
      try {
        e() && (clearInterval(d), u());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${s}]`);
      }
      o.cnt += 1;
    }, d = setInterval(() => {
      r();
    }, s);
    r();
  });
}
let Z = class {
  listeners = {};
  on = (e, s) => ((this.listeners[e] ||= []).push(s), () => this.off(e, s));
  off = (e, s) => {
    this.listeners[e] = this.listeners[e]?.filter((o) => o !== s);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...s) => {
    for (const o of this.listeners[e] ?? [])
      await o(...s);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...s) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((o) => o(...s))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...s) => {
    for (const o of this.listeners[e] ?? [])
      try {
        await o(...s);
      } catch (u) {
        this.listeners.error?.forEach(
          (r) => r(u)
        );
      }
  };
};
const I = () => new Z();
class P {
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
      const s = e?.lib || [];
      for (const [o, u] of s.entries()) {
        const r = u, d = `${r.name}:${e.run_from}`, p = `${e.run_from}_src`;
        let y = r[p];
        const c = `${e.run_from}_src`;
        let i = e?.lazy_lib?.[c] || null;
        if (i && (i = i.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${y}`), f.lib.l.hasOwnProperty(`${d}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(y) && y.includes("/") == !1 && f.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (i)
              y = i;
            else
              throw `[lib-name=${r.name},lib-src=${y}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (y.startsWith("./") || y.startsWith("../")) {
            const b = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${y}`
            );
            f.lib.l[`${d}`] = {
              lib: b,
              src: y
            };
          }
          if (y.startsWith("http://") || y.startsWith("https://")) {
            const b = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${y}`
            );
            f.lib.l[`${d}`] = {
              lib: b,
              src: y
            };
          }
        }
      }
      console.log(await f.lib.get_all({}));
    },
    get: async (e) => {
      let s = null;
      const o = `${e.name}:${e.run_from}`;
      return f.lib.l.hasOwnProperty(`${o}`) == !1 && await f.lib.set({
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
      }), s = f.lib.l[`${o}`], s;
    },
    get_all: async (e) => f.lib.l
  },
  path: {
    set: (e) => {
      let s = "", o = "";
      const u = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (o = "/dist"), u.indexOf(e.type) !== -1)
        for (const [r, d] of u.entries()) {
          let p = r == 0 ? "" : "/";
          if (s += `${p}${d}`, d == e.type)
            return `${s}${o}${e.name}`;
        }
      else
        for (const [r, d] of u.entries()) {
          let p = r == 0 ? "" : "/";
          if (s += `${p}${d}`, d == "src")
            return `${s}${o}${e.name}`;
        }
      return `${s}${o}${e.name}`;
    }
  }
};
const M = I(), J = I(), G = M.on, O = M.emit, X = J.emit, L = J.on, Y = async (e) => {
  const s = await N();
  return await f.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (o) => {
      console.log("--renderer [set]"), o.return = o?.return || {}, o.return.r = o?.return?.r || "full";
      const u = new P();
      u.start();
      let r = o.data?.value?.l || o.data.l, d = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return o.return.r == "full" ? d.r = "" : d.r = [], await (async () => {
        for (const p of r) {
          const y = await await f.lib.get({ name: p.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await y.lib.index({
            f: {
              name: (i) => s.f.name({ id: p.id, name: i }),
              get_lib: async (i) => await await f.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (i) => await (await D()).set(i),
              path: (i) => f.path.set({ src: y.src, type: p.type, name: i }),
              //set..
              uuid: () => j().set(),
              wait_until: C
            }
          })).set(
            {
              data: {
                curr: p
              }
            }
            /*_$cb*/
          );
          o?.return?.r == "full" ? d.r += c?.r || "" : d.r.push(c?.r || ""), d.style += c?.style || "", d.head += c?.head || "";
        }
      })(), u.stop(), d.benchmark = u.result(), d;
    }
  };
}, Q = async (e) => {
  const s = await N();
  return await f.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (o) => {
      console.log("--hydrator [set]");
      const u = new P();
      u.start();
      let r = {
        r: "",
        style: ""
      }, d = {
        style_id: `${j().set()}_stl`
      }, p = o.data?.value?.l || o.data.l;
      const y = async () => {
        for (const c of p) {
          const i = await await f.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), b = i.lib, w = I(), x = w.on, E = await (await b.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (h) => s.f.name({ id: c.id, name: h }),
              get_lib: async (h) => await await f.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (h) => await (await D()).set(h),
              path: (h) => f.path.set({ src: i.src, type: c.type, name: h }),
              //set..
              uuid: () => j().set(),
              wait_until: C,
              //set..
              call: X,
              listen: x,
              //set..
              new_emitter: () => I()
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          G("msg", async (h) => {
            try {
              if (Object.keys(h.where || {}).length == 0) {
                await w.emit("msg", h);
                return;
              }
            } catch {
            }
            try {
              if (c?.[h.where?.key || ""] == h.where?.value) {
                await w.emit("msg", h);
                return;
              }
            } catch {
            }
          }), r.style += E.style;
        }
      };
      await C(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await y();
      try {
        ((c) => {
          const i = document.getElementById(`${d.style_id}`);
          i && i.remove();
          const b = document.createElement("style");
          b.id = `${d.style_id}`, b.innerHTML = `${r.style}`, c.appendChild(b);
        })(document.head);
      } catch (c) {
        console.log(`${c}, Failed to set style..`);
      }
      return u.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: u.result()
      };
    }
  };
}, K = {
  key: 0,
  class: "bg-white p-3 sticky top-0 z-10 flex items-center gap-4"
}, ee = { class: "flex justify-between w-full flex-wrap" }, te = ["innerHTML"], re = { class: "flex gap-2 justify-end flex-wrap" }, ae = ["innerHTML"], ne = ["innerHTML"], se = ["innerHTML"], oe = ["innerHTML"], ie = { key: 1 }, le = ["innerHTML"], de = { key: 2 }, ce = ["innerHTML"], ue = { key: 3 }, pe = ["innerHTML"], me = /* @__PURE__ */ F({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const s = R(""), o = R(0), u = R(20), r = R({
      html: {
        table: null,
        search_panel: null,
        create_refund: null,
        process_refund: null,
        create_shipment: null,
        create_return: null,
        dialog: null,
        //set..
        form_toast: null
      }
    }), d = () => W({
      operation: "update_order_item",
      order_item_ids: [],
      //order_status: "",
      //return_status: "",
      //delivery_provider: "",
      //delivery_desc: "",
      //return_desc: "",
      exclude_key: ["user_id"]
    });
    let p = null;
    const y = (l) => {
      const a = l?.custom, g = l?.type, m = l?._$p.data.curr;
      console.log("custom", a), console.log("type", g), console.log("curr", m), console.log("body_key", m.data.form.body_key), l.type === "inputText:value" && (p[m.data.form.body_key] = a.value), l.type === "autocomplete:select" && (p[m.data.form.body_key] = a.selectedValue.id);
    }, c = (l) => {
      O("msg", {
        type: "show",
        _p: {},
        _$p: {},
        custom: {
          msg: l.msg,
          options: {
            type: l.type,
            //success | error | warn | info
            position: "top-right",
            //bottom-center | top-left | top-right
            autoClose: 5e3,
            theme: "light"
            //dark | light
          }
        },
        where: { key: "id", value: "form_toast" }
      });
    }, i = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function b(l, a = 1, g = 20) {
      try {
        const m = await fetch(i.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${i.token}`
          },
          body: JSON.stringify({
            /* q: query,
             page: page,
             per_page: per_page*/
            //set..
            operation: "get_orders",
            user_id: "user_1",
            //"status": "pending",
            search: l,
            //"wireless",
            page: a,
            limit: g,
            //set..
            exclude_key: ["user_id"]
          })
        });
        if (!m.ok)
          throw new Error(`API error: ${m.status}`);
        const _ = await m.json();
        return console.log(_), _;
      } catch (m) {
        return console.error("Error fetching product list:", m), null;
      }
    }
    async function w() {
      try {
        const a = await (await fetch(
          i.url,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${i.token}`
            },
            body: JSON.stringify({ operation: "create_refund" })
          }
        )).json();
        return c({
          type: "success",
          msg: a.message || "Success"
        }), a;
      } catch (l) {
        console.error("Refund API Error:", l), c({
          type: "error",
          msg: "Error"
        });
      }
    }
    async function x() {
      try {
        const a = await (await fetch(
          i.url,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${i.token}`
            },
            body: JSON.stringify({ operation: "processed_refund" })
          }
        )).json();
        return c({
          type: "success",
          msg: a.message || "Success"
        }), a;
      } catch (l) {
        console.error("Processed Refund Error:", l), c({
          type: "error",
          msg: "Error"
        });
      }
    }
    async function E() {
      try {
        const a = await (await fetch(
          i.url,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${i.token}`
            },
            body: JSON.stringify({
              operation: "create_delivery_shipment",
              item_limit: 10,
              condition: "",
              delivery_provider: "fedex"
            })
          }
        )).json();
        return console.log("Shipment Response:", a), a.success ? (c({
          type: "success",
          msg: a.message || "Shipment created successfully"
        }), a.details?.created?.length && console.log("Created Shipments:", a.details.created), a.details?.failed?.length && console.log("Failed Shipments:", a.details.failed)) : c({
          type: "error",
          msg: a.message || "Shipment creation failed"
        }), a;
      } catch (l) {
        return console.error("Shipment API Error:", l), c({
          type: "error",
          msg: "Something went wrong"
        }), null;
      }
    }
    async function h() {
      try {
        const a = await (await fetch(
          i.url,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${i.token}`
            },
            body: JSON.stringify({
              operation: "create_return_shipment",
              item_limit: 10,
              condition: "",
              delivery_provider: "fedex"
            })
          }
        )).json();
        return console.log("Return Shipment Response:", a), c({
          type: "success",
          msg: a.message || "Success"
        }), a;
      } catch (l) {
        return console.error("Return Shipment Error:", l), c({
          type: "error",
          msg: "Error"
        }), null;
      }
    }
    async function B(l) {
      try {
        const a = JSON.parse(JSON.stringify(l)), m = await (await fetch(
          i.url,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${i.token}`
            },
            body: JSON.stringify(a)
          }
        )).json();
        return console.log("Update Order Item Response:", m), c({
          type: "success",
          msg: m.message || "Success"
        }), m;
      } catch (a) {
        return console.error("Update Order Item Error:", a), c({
          type: "error",
          msg: "Error"
        }), null;
      }
    }
    function H(l) {
      return !l?.success || !Array.isArray(l.orders) ? [] : l.orders.map((a) => {
        const g = a.pricing || {}, m = a.shipping_address || {};
        return {
          // ===== Parent (Order) =====
          id: `ORDER-${a.order_id}`,
          type: "order",
          order_id: a.order_id,
          order_number: a.order_number,
          customer: m.name,
          phone: m.phone_number,
          city: m.city,
          total_items: a.items?.length || 0,
          total_price: `₹${g.total_price}`,
          tax: `₹${g.tax_amount}`,
          final_amount: `₹${g.final_amount}`,
          currency: g.currency,
          status: "-",
          //order.items?.[0]?.order_status ?? "N/A",
          //set..
          payment_status: a.payment_status,
          // ===== Children (Order Items) =====
          _children: (a.items || []).map((_) => {
            const $ = _.reference_data?.product_data || {}, t = _.reference_data?.variant_product_data || {};
            return {
              id: `ITEM-${_.order_item_id}`,
              type: "item",
              order_item_id: _.order_item_id,
              product_id: $.id,
              name: $.title,
              /*brand: product.brand,
              category: Array.isArray(product.category)
                  ? product.category.join(", ")
                  : "",*/
              size: t.size,
              color: t.color,
              price: `₹${_.price}`,
              payable_price: `₹${_.payable_price}`,
              mrp: t.mrp ? `₹${t.mrp}` : "N/A",
              stock: t.stock,
              status: _.order_status,
              created_at: _.created_at,
              //set..
              return_status: _.return_status,
              return_reason: _.return_reason,
              return_desc: _.return_desc,
              delivery_desc: _.delivery_desc,
              delivery_ref_id: _.delivery_ref_id,
              delivery_provider: _.delivery_provider
            };
          })
        };
      });
    }
    async function A(l, a, g = 1) {
      const m = await b(a, g, u.value);
      if (m && m.success) {
        const _ = H(m);
        try {
          if (!(_.length > 0))
            throw new Error("no more data..");
        } catch ($) {
          console.log($);
          return;
        }
        l._$p.data.curr.data.table.rows = _, O("msg", {
          type: "load_more",
          _p: l._p,
          _$p: l._$p,
          custom: {
            searchText: a,
            page: g
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
    return U(() => {
      (async () => {
        let l = "", a = {
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
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? `
                                                <div class="font-semibold text-gray-800">
                                                    ${n.order_number}
                                                </div>
                                                <div class="text-xs text-gray-500">
                                                    ${n.customer} • ${n.city}
                                                </div>
                                                ` : `
                                            <div class="pl-6 text-sm text-gray-700">
                                            ${n.name}
                                            </div>
                                        `;
                      }
                    },
                    {
                      title: "Id",
                      field: "id",
                      hozAlign: "right",
                      //width: 110,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? `
                                                <div class="pl-6 text-sm text-gray-700">
                                                 ${n.order_id}
                                                </div>
                                                ` : `
                                            <div class="pl-6 text-sm text-gray-700">
                                            ${n.order_item_id}
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
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? "—" : n.price;
                      }
                    },
                    {
                      title: "Payable",
                      field: "payable_price",
                      hozAlign: "right",
                      //width: 110,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? "—" : n.payable_price;
                      }
                    },
                    {
                      title: "Qty / Items",
                      field: "total_items",
                      hozAlign: "center",
                      //width: 120,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? `<span class="font-semibold">${n.total_items}</span>` : "1";
                      }
                    },
                    /*{
                                                        title: "Status",
                                                        field: "status",
                                                        //width: 120,
                                                        formatter: (cell: any) => {
                                                            const status = cell.getValue();
                                                            const data = cell.getRow().getData();
                    
                                                            const colors: any = {
                                                                pending: "bg-yellow-100 text-yellow-700",
                                                                shipped: "bg-blue-100 text-blue-700",
                                                                delivered: "bg-green-100 text-green-700",
                                                                cancelled: "bg-red-100 text-red-700",
                                                            };
                    
                                                            return `
                                                                <span class="px-2 py-1 rounded text-xs font-semibold
                                                                ${colors[status] || "bg-gray-100 text-gray-600"}">
                                                                ${status}
                                                                </span>
                                                            `;
                                                        }
                                                    },*/
                    {
                      title: "Delivery",
                      field: "delivery",
                      //width: 120,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? "—" : `
                                            <div>

                                            <div class="px-2 py-1 rounded text-xs">
                                            <span class="px-2 py-1 rounded text-xs font-semibold">
                                            Status: 
                                            </span>
                                            <span class="px-2 py-1 rounded bg-gray-100 text-gray-700">
                                            ${n.status}
                                            </span>

                                            </div>

                                            <div class="px-2 py-1 rounded text-xs">
                                            <span class="px-2 py-1 rounded text-xs font-semibold">
                                            Provider: 
                                            </span>
                                            ${n.delivery_provider}
                                            </div>


                                            <div class="px-2 py-1 rounded text-xs">
                                            <span class="px-2 py-1 rounded text-xs font-semibold">
                                            Tracking Id: 
                                            </span>
                                            ${n.delivery_ref_id}
                                            </div>


                                            <div class="px-2 py-1 rounded text-xs">
                                            <span class="px-2 py-1 rounded text-xs font-semibold">
                                            Info: 
                                            </span>
                                            ${n.delivery_desc}
                                            </div>


                                            </div>
                                        `;
                      }
                    },
                    {
                      title: "Return",
                      field: "return",
                      //width: 120,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? "—" : `
                                            <div>

                                            <div class="px-2 py-1 rounded text-xs">
                                            <span class="px-2 py-1 rounded text-xs font-semibold">
                                            Status: 
                                            </span>
                                            <span class="px-2 py-1 rounded bg-gray-100 text-gray-700">
                                            ${n.return_status}
                                            </span>

                                            </div>

                                            <div class="px-2 py-1 rounded text-xs">
                                            <span class="px-2 py-1 rounded text-xs font-semibold">
                                            Reason: 
                                            </span>
                                            ${n.return_reason}
                                            </div>

                                            <div class="px-2 py-1 rounded text-xs">
                                            <span class="px-2 py-1 rounded text-xs font-semibold">
                                            Info: 
                                            </span>
                                            ${n.return_desc}
                                            </div>


                                            </div>
                                        `;
                      }
                    },
                    {
                      title: "Payment",
                      field: "payment",
                      hozAlign: "right",
                      //width: 140,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? n.payment_status : "—";
                      }
                    },
                    {
                      title: "Final Amount",
                      field: "final_amount",
                      hozAlign: "right",
                      //width: 140,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? n.final_amount : "—";
                      }
                    },
                    {
                      title: "Created",
                      field: "created_at",
                      //width: 170,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? '<span class="text-gray-600">—</span>' : `<span class="text-xs text-gray-500">${n.created_at}</span>`;
                      }
                    },
                    {
                      title: "Action",
                      field: "action",
                      //width: 170,
                      formatter: (t) => {
                        const n = t.getRow().getData();
                        return n.type === "order" ? '<span class="text-gray-600">—</span>' : `<button data-typ='edit_btn' data-id='${n.order_item_id}' class="delete-btn px-2 py-1 rounded bg-green-100 text-green-700 ">Edit</button>`;
                      }
                    }
                  ],
                  rows: [],
                  //apiRows
                  //set..
                  //rowHeight: 175,
                  rowHeight: -1,
                  dataTree: !0,
                  dataTreeChildField: "_children",
                  //set..
                  layout: "fitColumns",
                  resizableColumnFit: !0,
                  dataTreeStartExpanded: !0
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
            },
            // dailog
            {
              id: "dialog-edit",
              type: "dialog",
              slug: "dialog",
              data: {
                label: "Edit Order Item",
                //"Dialog",
                visible: !1,
                modal: !0,
                style: "",
                class: "w-sm md:w-md",
                positive: {
                  label: "Update"
                  //"Ok"
                },
                negative: {
                  label: "Cancel"
                },
                content: {
                  ce_file: {
                    config: {
                      lazy_lib: {
                        renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
                        hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
                        editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
                      }
                    },
                    data: {
                      l: [
                        /*{
                          id: "section-id",
                          type: "form_section",
                          slug: "form_section",
                          data: {
                            label: "Id",
                            l: [],
                            theme: "light"
                          }
                        },
                        {
                          id: "input-id",
                          type: "form_inputtext",
                          slug: "form_inputtext",
                          data: {
                            value: payload.order_item_ids?.[0] || ``,
                            placeholder: "",
                            style: {
                               width: "100%",//"12rem",
                            },
                            variant: "outlined",
                            form: { section_id: "section-id" }
                          }
                        },*/
                        // Order Status
                        {
                          id: "section-order-status",
                          type: "form_section",
                          slug: "form_section",
                          data: {
                            label: "Order Status",
                            l: [],
                            theme: "light"
                          }
                        },
                        {
                          id: "input-order-status",
                          type: "form_autocomplete",
                          slug: "form_autocomplete",
                          data: {
                            data: "",
                            placeholder: "Select order status",
                            optionLabel: "title",
                            showClear: !0,
                            dropdown: !0,
                            value: null,
                            appendTo: "self",
                            options: [
                              /*{ title: "Pending", id: "pending" },
                              { title: "Processing", id: "processing" },
                              { title: "Shipped", id: "shipped" },
                              { title: "Delivered", id: "delivered" },
                              { title: "Cancelled", id: "cancelled" }*/
                              { title: "Pending", id: "pending" },
                              { title: "Confirmed", id: "confirmed" },
                              { title: "Cancelled", id: "cancelled" },
                              { title: "Delivered", id: "delivered" }
                            ],
                            style: {
                              width: "100%"
                              //"12rem",
                              //zIndex: "10",
                            },
                            api: {},
                            form: {
                              section_id: "section-order-status",
                              body_key: "order_status"
                            }
                          }
                        },
                        // Return Status
                        {
                          id: "section-return-status",
                          type: "form_section",
                          slug: "form_section",
                          data: {
                            label: "Return Status",
                            l: [],
                            theme: "light"
                          }
                        },
                        {
                          id: "input-return-status",
                          type: "form_autocomplete",
                          slug: "form_autocomplete",
                          data: {
                            data: "",
                            placeholder: "Select return status",
                            optionLabel: "title",
                            showClear: !0,
                            dropdown: !0,
                            value: null,
                            appendTo: "self",
                            options: [
                              { title: "Not Requested", id: "not_requested" },
                              { title: "Requested", id: "requested" },
                              { title: "Approved", id: "approved" },
                              { title: "Rejected", id: "rejected" },
                              { title: "Returned", id: "returned" }
                            ],
                            style: {
                              width: "100%"
                              //"12rem",
                            },
                            api: {},
                            form: {
                              section_id: "section-return-status",
                              body_key: "return_status"
                            }
                          }
                        },
                        // Delivery Provider
                        {
                          id: "section-delivery-provider",
                          type: "form_section",
                          slug: "form_section",
                          data: {
                            label: "Delivery Provider",
                            l: [],
                            theme: "light"
                          }
                        },
                        {
                          id: "input-delivery-provider",
                          type: "form_autocomplete",
                          slug: "form_autocomplete",
                          data: {
                            data: "",
                            placeholder: "Select delivery provider",
                            optionLabel: "title",
                            showClear: !0,
                            dropdown: !0,
                            value: null,
                            appendTo: "self",
                            options: [
                              { title: "Delhivery", id: "delhivery" },
                              { title: "Blue Dart", id: "bluedart" },
                              { title: "DTDC", id: "dtdc" },
                              { title: "Ekart", id: "ekart" },
                              { title: "India Post", id: "indiapost" }
                            ],
                            style: {
                              width: "100%"
                              //"12rem",
                            },
                            api: {},
                            form: {
                              section_id: "section-delivery-provider",
                              body_key: "delivery_provider"
                            }
                          }
                        },
                        // Delivery Description (unchanged)
                        {
                          id: "section-delivery-description",
                          type: "form_section",
                          slug: "form_section",
                          data: {
                            label: "Delivery Description",
                            l: [],
                            theme: "light"
                          }
                        },
                        {
                          id: "input-delivery-description",
                          type: "form_inputtext",
                          slug: "form_inputtext",
                          data: {
                            value: "",
                            placeholder: "Enter delivery description",
                            style: {
                              width: "100%"
                              //"12rem",
                            },
                            variant: "outlined",
                            form: {
                              section_id: "section-delivery-description",
                              body_key: "delivery_desc"
                            }
                          }
                        },
                        // Return Description (unchanged)
                        {
                          id: "section-return-description",
                          type: "form_section",
                          slug: "form_section",
                          data: {
                            label: "Return Description",
                            l: [],
                            theme: "light"
                          }
                        },
                        {
                          id: "input-return-description",
                          type: "form_inputtext",
                          slug: "form_inputtext",
                          data: {
                            value: "",
                            placeholder: "Enter return description",
                            style: {
                              width: "100%"
                              //"12rem",
                            },
                            variant: "outlined",
                            form: {
                              section_id: "section-return-description",
                              body_key: "return_desc"
                            }
                          }
                        }
                      ]
                    }
                  }
                  // "value": "<div>Hello world!</div>"
                }
              }
            },
            {
              id: "form_button-create-refund",
              type: "form_button",
              slug: "form_button",
              data: {
                label: "Create Refund",
                size: "small",
                variant: "filled",
                style: "background-color: black; border: 1px solid black"
              }
            },
            {
              id: "form_button-process-refund",
              type: "form_button",
              slug: "form_button",
              data: {
                label: "Process Refund",
                size: "small",
                variant: "filled",
                style: "background-color: black; border: 1px solid black"
              }
            },
            {
              id: "form_button-create-shipment",
              type: "form_button",
              slug: "form_button",
              data: {
                label: "Create Shipment",
                size: "small",
                variant: "filled"
                // "style": "background-color: black; border: none"
              }
            },
            {
              id: "form_button-create-return",
              type: "form_button",
              slug: "form_button",
              data: {
                label: "Create Return",
                size: "small",
                variant: "filled"
                // "style": "background-color: black; border: none"
              }
            },
            // Toast
            {
              id: "form_toast",
              type: "form_toast",
              slug: "form_toast",
              data: {
                env: "dev"
              }
            }
          ]
        };
        const g = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, m = await Y(g), _ = await Q(g);
        (async () => (L("msg", async (t) => {
          if (console.log("[ce_listen]", t), t.type == "load_more" && t._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (o.value += 1, A(t, s.value, o.value)), t.type == "search:query" && t._$p.data.curr.id == "3e1bc78c-aa87-search-panel") {
            O("msg", {
              type: "remove_all_rows",
              custom: {},
              where: {
                key: "id",
                value: "3e1bc78c-104f-4f6f-aa87-75"
              }
            }), o.value = 1, s.value = t._p.query;
            let n = JSON.parse(JSON.stringify({
              data: {
                curr: a.l[0]
              }
            }));
            A({
              _$p: n,
              _p: e._p
            }, s.value, o.value), console.log();
          }
          t.type == "click" && t._$p.data.curr.id == "form_button-create-refund" && await w(), t.type == "click" && t._$p.data.curr.id == "form_button-process-refund" && await x(), t.type == "click" && t._$p.data.curr.id == "form_button-create-shipment" && await E(), t.type == "click" && t._$p.data.curr.id == "form_button-create-return" && await h(), t.type === "btn:positive" && t._$p?.data?.curr?.id === "dialog-edit" && await B(p);
        }), L("child:msg", async (t) => {
          (t.type === "autocomplete:select" || t.type === "inputText:value") && (y(t), console.log("build payload"));
        })))(), await (async () => {
          const t = await m.set({
            data: a,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          l = t.style, r.value.html.table = t.r[0] || "", r.value.html.search_panel = t.r[1] || "", r.value.html.dialog = t.r[2] || "", r.value.html.create_refund = t.r[3] || "", r.value.html.process_refund = t.r[4] || "", r.value.html.create_shipment = t.r[5] || "", r.value.html.create_return = t.r[6] || "", r.value.html.form_toast = t.r[7] || "";
          const n = document.createElement("style");
          document.head.appendChild(n), n.innerHTML = l, setTimeout(async () => {
            const k = await _.set({
              data: a
            });
            console.log(k);
          }, 20);
        })(), document.addEventListener("click", async (t) => {
          (() => {
            let k = null;
            try {
              t.target.getAttribute("data-typ") == "edit_btn" && (k = t.target.getAttribute("data-typ"), p = d(), p.order_item_ids = [parseInt(`${t.target.getAttribute("data-id")}`)]);
            } catch {
            }
            return k;
          })() && (O("msg", {
            type: "open",
            custom: {},
            _$p: {},
            _p: {},
            where: { key: "id", value: "dialog-edit" }
          }), await _.set({
            data: { l: [a.l.find((k) => k.id === "dialog-edit")] }
          }));
        });
      })();
    }), (l, a) => (T(), S(V, null, [
      r.value.html.search_panel && r.value.html.create_refund && r.value.html.process_refund ? (T(), S("div", K, [
        v("div", ee, [
          v("div", {
            "class-old": "w-1/3",
            class: "",
            innerHTML: r.value.html.search_panel
          }, null, 8, te),
          v("div", re, [
            v("div", {
              innerHTML: r.value.html.create_refund
            }, null, 8, ae),
            v("div", {
              innerHTML: r.value.html.process_refund
            }, null, 8, ne),
            v("div", {
              innerHTML: r.value.html.create_shipment
            }, null, 8, se),
            v("div", {
              innerHTML: r.value.html.create_return
            }, null, 8, oe)
          ])
        ])
      ])) : z("", !0),
      r.value.html.table ? (T(), S("div", ie, [
        v("div", {
          innerHTML: r.value.html.table
        }, null, 8, le)
      ])) : z("", !0),
      r.value.html.dialog ? (T(), S("div", de, [
        v("div", {
          innerHTML: r.value.html.dialog
        }, null, 8, ce)
      ])) : z("", !0),
      r.value.html.form_toast ? (T(), S("div", ue, [
        v("div", {
          innerHTML: r.value.html.form_toast
        }, null, 8, pe)
      ])) : z("", !0)
    ], 64));
  }
}), fe = async (e) => ({
  set: async (s) => {
    console.log(`--hydrator [${s.data.curr.type}]`);
    const u = q(me, {
      _p: e,
      _$p: s
    }), r = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: s,
            custom: {}
          });
        }
      }
    }, d = document.getElementById(e.f.name("vue-root"));
    return u.mount(d), r;
  }
});
export {
  fe as hydrator,
  fe as index
};
