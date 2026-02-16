import { d as A, o as M, a as g, c as w, b as v, e as x, r as b, f as P } from "./runtime-dom.esm-bundler-Cyp0UzkF.js";
const T = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), C = async () => ({
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
      ((c) => {
        const r = (n) => {
          ((u) => {
            const d = u.getAttribute("data-ce");
            if (!d)
              return;
            const m = JSON.parse(d).filter((s) => s?.k.startsWith("t-"));
            if (m.length != 0)
              for (const s of m) {
                const o = s.k, l = s.v.split(" ");
                if (o == `t-${t}-class`)
                  for (const h of l)
                    u.classList.add(h);
                else
                  for (const h of l)
                    u.classList.remove(h);
              }
          })(n);
        };
        for (const n of c.getElementsByTagName("*"))
          r(n);
        r(c);
      })(a);
    } catch (t) {
      const a = `err: [theme] ${t}`;
      throw console.log(a), a;
    }
  }
});
function I(e, t = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((c) => {
    const r = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(n), c());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, n = setInterval(() => {
      r();
    }, t);
    r();
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
      } catch (c) {
        this.listeners.error?.forEach(
          (r) => r(c)
        );
      }
  };
};
const $ = () => new R();
class L {
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
      const t = e?.lib || [];
      for (const [a, c] of t.entries()) {
        const r = c, n = `${r.name}:${e.run_from}`, u = `${e.run_from}_src`;
        let d = r[u];
        const m = `${e.run_from}_src`;
        let s = e?.lazy_lib?.[m] || null;
        if (s && (s = s.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${s}`), console.log(`_src: ${d}`), f.lib.l.hasOwnProperty(`${n}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(d) && d.includes("/") == !1 && f.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (s)
              d = s;
            else
              throw `[lib-name=${r.name},lib-src=${d}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (d.startsWith("./") || d.startsWith("../")) {
            const o = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            f.lib.l[`${n}`] = {
              lib: o,
              src: d
            };
          }
          if (d.startsWith("http://") || d.startsWith("https://")) {
            const o = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            f.lib.l[`${n}`] = {
              lib: o,
              src: d
            };
          }
        }
      }
      console.log(await f.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return f.lib.l.hasOwnProperty(`${a}`) == !1 && await f.lib.set({
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
      }), t = f.lib.l[`${a}`], t;
    },
    get_all: async (e) => f.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const c = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), c.indexOf(e.type) !== -1)
        for (const [r, n] of c.entries()) {
          let u = r == 0 ? "" : "/";
          if (t += `${u}${n}`, n == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [r, n] of c.entries()) {
          let u = r == 0 ? "" : "/";
          if (t += `${u}${n}`, n == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const E = $(), N = $(), S = E.on, z = E.emit, D = N.emit, J = N.on, B = async (e) => {
  const t = await C();
  return await f.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const c = new L();
      c.start();
      let r = a.data?.value?.l || a.data.l, n = {
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
        for (const u of r) {
          const d = await await f.lib.get({ name: u.type, run_from: "renderer", lazy_lib: e.lazy_lib }), m = await (await d.lib.index({
            f: {
              name: (s) => t.f.name({ id: u.id, name: s }),
              get_lib: async (s) => await await f.lib.get({ name: s.name, run_from: s.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (s) => await (await O()).set(s),
              path: (s) => f.path.set({ src: d.src, type: u.type, name: s }),
              //set..
              uuid: () => T().set(),
              wait_until: I
            }
          })).set(
            {
              data: {
                curr: u
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? n.r += m?.r || "" : n.r.push(m?.r || ""), n.style += m?.style || "", n.head += m?.head || "";
        }
      })(), c.stop(), n.benchmark = c.result(), n;
    }
  };
}, W = async (e) => {
  const t = await C();
  return await f.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const c = new L();
      c.start();
      let r = {
        r: "",
        style: ""
      }, n = {
        style_id: `${T().set()}_stl`
      }, u = a.data?.value?.l || a.data.l;
      const d = async () => {
        for (const m of u) {
          const s = await await f.lib.get({ name: m.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), o = s.lib, l = $(), h = l.on, y = await (await o.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (i) => t.f.name({ id: m.id, name: i }),
              get_lib: async (i) => await await f.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (i) => await (await O()).set(i),
              path: (i) => f.path.set({ src: s.src, type: m.type, name: i }),
              //set..
              uuid: () => T().set(),
              wait_until: I,
              //set..
              call: D,
              listen: h,
              //set..
              new_emitter: () => $()
            }
          })).set(
            {
              data: {
                curr: m
              }
            }
            /*_$cb*/
          );
          S("msg", async (i) => {
            try {
              if (Object.keys(i.where || {}).length == 0) {
                await l.emit("msg", i);
                return;
              }
            } catch {
            }
            try {
              if (m?.[i.where?.key || ""] == i.where?.value) {
                await l.emit("msg", i);
                return;
              }
            } catch {
            }
          }), r.style += y.style;
        }
      };
      await I(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await d();
      try {
        ((m) => {
          const s = document.getElementById(`${n.style_id}`);
          s && s.remove();
          const o = document.createElement("style");
          o.id = `${n.style_id}`, o.innerHTML = `${r.style}`, m.appendChild(o);
        })(document.head);
      } catch (m) {
        console.log(`${m}, Failed to set style..`);
      }
      return c.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: c.result()
      };
    }
  };
}, U = { class: "w-full h-full flex flex-col" }, H = {
  key: 0,
  class: "p-3 sticky top-0 bg-white z-10 border-b border-gray-100 flex justify-between items-center gap-4"
}, V = ["innerHTML"], Z = {
  key: 0,
  class: "flex-shrink-0"
}, F = ["innerHTML"], G = {
  key: 1,
  class: "flex-grow w-full"
}, X = ["innerHTML"], Y = {
  key: 2,
  class: "flex-grow w-full"
}, q = ["innerHTML"], Q = /* @__PURE__ */ A({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = b(""), a = b(1), c = b(20), r = b(null), n = b({
      html: {
        table: null,
        search_panel: null,
        form_button: null,
        // Added for the button
        dialog: null
        // Added for the dialog
      }
    }), u = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function d(o, l, h, y) {
      try {
        const i = await fetch(u.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${u.token}`
          },
          body: JSON.stringify({
            operation: "get_refund_lists",
            page: l,
            page_size: h,
            search: o,
            exclude_key: [
              "user_id",
              "payment_reference_id",
              "payment_provider"
            ],
            analytics: y
          })
        });
        if (!i.ok) throw new Error(`API error ${i.status}`);
        return await i.json();
      } catch (i) {
        return console.error("API error:", i), null;
      }
    }
    function m(o) {
      return !o?.success || !o.refunds ? [] : o.refunds.map((l) => ({
        id: l.id,
        order_id: l.order_id,
        user_id: l.user_id,
        status: l.status,
        payment_provider: l.payment_provider,
        payment_reference_id: l.payment_reference_id,
        amount: l.amount,
        currency: l.currency,
        description: l.description,
        created_at: l.created_at ? new Date(l.created_at).toLocaleString() : "-",
        updated_at: l.updated_at ? new Date(l.updated_at).toLocaleString() : "-"
      }));
    }
    async function s(o, l, h) {
      const y = h === 1 && !r.value, i = await d(
        l,
        h,
        c.value,
        y
      );
      if (!i || !i.success) return;
      y && i.analytics && (r.value = i.analytics, console.log("Analytics Cached:", r.value));
      const k = m(i);
      k.length === 0 && h > 1 || (o._$p.data.curr.data.table.rows = k, z("msg", {
        type: "load_more",
        _p: o._p,
        _$p: o._$p,
        custom: { searchText: l, page: h },
        where: { key: "id", value: "project-table-01" }
      }));
    }
    return M(() => {
      (async () => {
        let o = "";
        const l = {
          l: [
            {
              id: "project-table-01",
              type: "table",
              slug: "table",
              data: {
                theme: e._$p.data.curr.data.theme,
                foo: { txt: "Refund List" },
                config: {
                  search: {
                    placeholder: "Search refunds...",
                    field: "name"
                  }
                },
                table: {
                  layout: "fitColumns",
                  columns: [
                    { title: "Refund ID", field: "id", minWidth: 280 },
                    { title: "Order ID", field: "order_id", width: 90 },
                    { title: "User ID", field: "user_id", minWidth: 280 },
                    { title: "Status", field: "status", width: 110 },
                    { title: "Payment Provider", field: "payment_provider", width: 160 },
                    { title: "Payment Ref ID", field: "payment_reference_id", minWidth: 180 },
                    { title: "Amount", field: "amount", width: 100, hozAlign: "right" },
                    { title: "Currency", field: "currency", width: 90 },
                    { title: "Description", field: "description", minWidth: 300 },
                    { title: "Created At", field: "created_at", width: 180 },
                    { title: "Updated At", field: "updated_at", width: 180 }
                  ],
                  rows: []
                }
              }
            },
            {
              id: "project-search-panel",
              type: "search_panel",
              slug: "search_panel",
              data: {
                placeholder: "Search refunds...",
                size: "sm",
                class: "w-full",
                // Ensure search fills its container
                sugg: []
              }
            },
            // BUTTON DEFINITION
            {
              id: "38c-form_button_refund",
              type: "form_button",
              slug: "form_button",
              data: {
                data: "analytics_click",
                // Event payload
                label: "Click to see analytics",
                size: "normal",
                variant: "filled"
              }
            },
            {
              id: "38c-dialog1",
              type: "dialog",
              slug: "dialog",
              data: {
                label: "Refund Analytics",
                visible: !1,
                // important
                modal: !0,
                class: "w-sm md:w-md",
                positive: { label: "Ok" },
                negative: { label: "Cancel" },
                content: {
                  value: `<div>${r.value}<div>`,
                  ce_file: {
                    data: {
                      l: []
                    },
                    config: {
                      lazy_lib: {}
                    }
                  }
                }
              }
            }
          ]
        }, h = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, y = await B(h), i = await W(h);
        J("msg", async (_) => {
          if (_.type === "load_more" && _._$p.data.curr.id === "project-table-01" && (a.value += 1, s(_, t.value, a.value)), _.type === "search:query" && _._$p.data.curr.id === "project-search-panel") {
            z("msg", {
              type: "remove_all_rows",
              where: { key: "id", value: "project-table-01" }
            }), a.value = 1, t.value = _._p.query, r.value = null;
            const p = JSON.parse(
              JSON.stringify({ data: { curr: l.l[0] } })
            );
            s(
              { _$p: p, _p: e._p },
              t.value,
              a.value
            );
          }
          if (_.type === "click" && _._$p.data.curr.id === "38c-form_button_refund") {
            if (console.log("Analytics Data:", r.value), !r.value) return;
            const p = l.l.find((j) => j.id === "38c-dialog1");
            if (!p) return;
            p.data.content.value = `<div class="flex flex-col gap-4 p-4">

    <!-- Total Amount -->
    <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
      <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">
        Total Refund Amount
      </div>
      <div class="text-3xl font-bold text-gray-800">
        ₹ ${r.value?.total_refund_amount ?? 0}
      </div>
    </div>

    <!-- Pending & Completed -->
    <div class="grid grid-cols-2 gap-4">

      <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
        <div class="text-xs uppercase tracking-wider text-orange-600 mb-1">
          Pending
        </div>
        <div class="text-xl font-semibold text-orange-700">
          ₹ ${r.value?.total_refund_pending ?? 0}
        </div>
      </div>

      <div class="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <div class="text-xs uppercase tracking-wider text-green-600 mb-1">
          Completed
        </div>
        <div class="text-xl font-semibold text-green-700">
          ₹ ${r.value?.total_refund_completed ?? 0}
        </div>
      </div>

    </div>
  </div>`, p.data.visible = !0, await i.set({ data: l }), await z("msg", {
              type: "open",
              where: {
                key: "id",
                value: "38c-dialog1"
              }
            });
          }
        }), await (async () => {
          const _ = await y.set({
            data: l,
            return: { r: "chunk" }
          });
          o = _.style, n.value.html.table = _.r[0] || "", n.value.html.search_panel = _.r[1] || "", n.value.html.form_button = _.r[2] || "", n.value.html.dialog = _.r[3] || "";
          const p = document.createElement("style");
          p.innerHTML = o, document.head.appendChild(p), setTimeout(async () => {
            await i.set({ data: l }), s(
              { _$p: { data: { curr: l.l[0] } }, _p: e._p },
              "",
              1
            );
          }, 20);
        })();
      })();
    }), (o, l) => (g(), w("div", U, [
      n.value.html.search_panel ? (g(), w("div", H, [
        v("div", {
          class: "flex-grow max-w-lg",
          innerHTML: n.value.html.search_panel
        }, null, 8, V),
        n.value.html.form_button ? (g(), w("div", Z, [
          v("div", {
            innerHTML: n.value.html.form_button
          }, null, 8, F)
        ])) : x("", !0)
      ])) : x("", !0),
      n.value.html.table ? (g(), w("div", G, [
        v("div", {
          innerHTML: n.value.html.table,
          class: "w-full"
        }, null, 8, X)
      ])) : x("", !0),
      n.value.html.dialog ? (g(), w("div", Y, [
        v("div", {
          innerHTML: n.value.html.dialog,
          class: "w-full"
        }, null, 8, q)
      ])) : x("", !0)
    ]));
  }
}), ee = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const c = P(Q, {
      _p: e,
      _$p: t
    }), r = {
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
    return c.mount(n), r;
  }
});
export {
  ee as hydrator,
  ee as index
};
