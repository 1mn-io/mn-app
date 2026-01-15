import { d as F, r as w, a as j, w as L, o as A, n as W, c as x, b as v, e as m, f as Z, t as z, g as T, h as U, i as G, T as X, j as Y } from "./runtime-dom.esm-bundler-BqrXMFYn.js";
const E = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), B = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), D = async () => ({
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
          ((c) => {
            const r = c.getAttribute("data-ce");
            if (!r)
              return;
            const d = JSON.parse(r).filter((o) => o?.k.startsWith("t-"));
            if (d.length != 0)
              for (const o of d) {
                const f = o.k, h = o.v.split(" ");
                if (f == `t-${t}-class`)
                  for (const g of h)
                    c.classList.add(g);
                else
                  for (const g of h)
                    c.classList.remove(g);
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
function I(e, t = 1e3) {
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
let H = class {
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
const N = () => new H();
class M {
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
let y = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [a, i] of t.entries()) {
        const l = i, s = `${l.name}:${e.run_from}`, c = `${e.run_from}_src`;
        let r = l[c];
        const d = `${e.run_from}_src`;
        let o = e?.lazy_lib?.[d] || null;
        if (o && (o = o.replace("{*}", `${l.name}`)), console.log(`_lazy_src: ${o}`), console.log(`_src: ${r}`), y.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(r) && r.includes("/") == !1 && y.lib.inbuilt_lib.indexOf(`${l.name}`) === -1)
            if (o)
              r = o;
            else
              throw `[lib-name=${l.name},lib-src=${r}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (r.startsWith("./") || r.startsWith("../")) {
            const f = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${r}`
            );
            y.lib.l[`${s}`] = {
              lib: f,
              src: r
            };
          }
          if (r.startsWith("http://") || r.startsWith("https://")) {
            const f = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${r}`
            );
            y.lib.l[`${s}`] = {
              lib: f,
              src: r
            };
          }
        }
      }
      console.log(await y.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return y.lib.l.hasOwnProperty(`${a}`) == !1 && await y.lib.set({
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
      }), t = y.lib.l[`${a}`], t;
    },
    get_all: async (e) => y.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const i = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), i.indexOf(e.type) !== -1)
        for (const [l, s] of i.entries()) {
          let c = l == 0 ? "" : "/";
          if (t += `${c}${s}`, s == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [l, s] of i.entries()) {
          let c = l == 0 ? "" : "/";
          if (t += `${c}${s}`, s == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const R = N(), q = N(), Q = R.on, K = R.emit, ee = q.emit, te = q.on, ae = async (e) => {
  const t = await B();
  return await y.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const i = new M();
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
        for (const c of l) {
          const r = await await y.lib.get({ name: c.type, run_from: "renderer", lazy_lib: e.lazy_lib }), d = await (await r.lib.index({
            f: {
              name: (o) => t.f.name({ id: c.id, name: o }),
              get_lib: async (o) => await await y.lib.get({ name: o.name, run_from: o.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (o) => await (await D()).set(o),
              path: (o) => y.path.set({ src: r.src, type: c.type, name: o }),
              //set..
              uuid: () => E().set(),
              wait_until: I
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? s.r += d?.r || "" : s.r.push(d?.r || ""), s.style += d?.style || "", s.head += d?.head || "";
        }
      })(), i.stop(), s.benchmark = i.result(), s;
    }
  };
}, se = async (e) => {
  const t = await B();
  return await y.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const i = new M();
      i.start();
      let l = {
        r: "",
        style: ""
      }, s = {
        style_id: `${E().set()}_stl`
      }, c = a.data?.value?.l || a.data.l;
      const r = async () => {
        for (const d of c) {
          const o = await await y.lib.get({ name: d.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), f = o.lib, h = N(), g = h.on, _ = await (await f.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => t.f.name({ id: d.id, name: u }),
              get_lib: async (u) => await await y.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (u) => await (await D()).set(u),
              path: (u) => y.path.set({ src: o.src, type: d.type, name: u }),
              //set..
              uuid: () => E().set(),
              wait_until: I,
              //set..
              call: ee,
              listen: g,
              //set..
              new_emitter: () => N()
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          Q("msg", async (u) => {
            try {
              if (Object.keys(u.where || {}).length == 0) {
                await h.emit("msg", u);
                return;
              }
            } catch {
            }
            try {
              if (d?.[u.where?.key || ""] == u.where?.value) {
                await h.emit("msg", u);
                return;
              }
            } catch {
            }
          }), l.style += _.style;
        }
      };
      await I(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await r();
      try {
        ((d) => {
          const o = document.getElementById(`${s.style_id}`);
          o && o.remove();
          const f = document.createElement("style");
          f.id = `${s.style_id}`, f.innerHTML = `${l.style}`, d.appendChild(f);
        })(document.head);
      } catch (d) {
        console.log(`${d}, Failed to set style..`);
      }
      return i.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: i.result()
      };
    }
  };
}, re = { class: "min-h-screen font-sans transition-colors duration-300 bg-gray-100 text-gray-900 dark:bg-[#0b1220] dark:text-gray-100 relative" }, ne = { class: "pt-24 pb-28 px-6" }, ie = { class: "max-w-4xl mx-auto" }, oe = { class: "mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100" }, le = ["innerHTML"], ce = {
  key: 1,
  class: "flex justify-center py-20"
}, de = { class: "fixed bottom-0 left-0 right-0 h-20 px-8 flex items-center justify-end gap-4 border-t backdrop-blur-md bg-white/90 border-gray-200 dark:bg-[#0f172a]/90 dark:border-gray-700 z-40" }, ue = { class: "w-auto" }, me = ["disabled"], ye = {
  key: 0,
  class: "animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"
}, pe = {
  key: 0,
  class: "fixed top-24 right-6 z-[100] max-w-sm w-full pointer-events-auto"
}, _e = { class: "p-4" }, fe = { class: "flex items-start" }, he = { class: "flex-shrink-0" }, be = { key: 0 }, ge = { key: 1 }, we = { class: "ml-3 flex-1" }, xe = { class: "text-sm font-bold text-gray-900 dark:text-gray-100" }, ve = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, ke = /* @__PURE__ */ F({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = w(""), a = w(null), i = w(!1);
    w(!1);
    const l = w("admin_1"), s = w(e._$p?.data?.curr.data.theme || "light"), c = w({
      s_param: Object.fromEntries(new URLSearchParams(window.location.search || {}))
    });
    c.value.s_param?.mode || (c.value.s_param.mode = "create"), c.value.s_param.mode == "update" && !c.value.s_param.coupon_id && (c.value.s_param.mode = "create");
    const r = j({ show: !1, type: "success", title: "", message: "" }), d = (n, p, C) => {
      r.type = n, r.title = p, r.message = C, r.show = !0, setTimeout(() => {
        r.show = !1;
      }, 3500);
    }, o = (n) => {
      n === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    };
    L(s, (n) => {
      o(n), _.l[0] && _.l[0].data && (_.l[0].data.theme = n);
    });
    const f = {
      section: "Basic Details",
      name: "coupon_id",
      label: "Coupon ID (Required)",
      type: "text",
      //"number", 
      placeholder: "Enter ID to update",
      validation: "required|min:1",
      columns: 12,
      //set..
      value: c.value.s_param.coupon_id
    }, h = [
      { section: "Basic Details", name: "code", label: "Coupon Code", type: "text", placeholder: "SAVE20", validation: "required|length:3,20", columns: 6 },
      { name: "description", label: "Description", type: "textarea", validation: "required|length:10,200", columns: 6, rows: 3 },
      { section: "Discount", name: "discount_type", label: "Type", type: "radio", columns: 6, validation: "required", options: [{ label: "% Percentage", value: "percentage" }, { label: "₹ Flat Amount", value: "flat" }] },
      { name: "discount_value", label: "Value", type: "number", validation: "required|min:1", columns: 6 },
      { section: "Limits", name: "min_order_value", label: "Minimum Order (₹)", type: "number", validation: "required|min:0", columns: 4 },
      { name: "max_discount", label: "Maximum Discount (₹)", type: "number", validation: "min:0", columns: 4 },
      { name: "valid_days", label: "Validity (Days)", type: "number", validation: "required|min:1", columns: 4 },
      { section: "Usage", name: "max_usage_per_user", label: "Usage Per User", type: "number", validation: "required|min:1", columns: 6 },
      { name: "total_usage_limit", label: "Total Usage Limit", type: "number", validation: "required|min:1", columns: 6 }
    ], g = (n) => n === "update" ? [f, ...h] : [...h], _ = j({
      l: [{
        id: "coupon-form",
        type: "form",
        slug: "coupon",
        data: {
          mode: c.value.s_param?.mode,
          //"create", //create, update // <--- CHANGE THIS MANUALLY TO 'update' TO SEE THE ID FIELD
          defaults: { code: "", discount: "", expiry: "" },
          actions: { back: !1, submit: !1 },
          fields: [...h],
          // Initial load
          ui: {
            title_create: "Create New Coupon",
            title_update: "Update Coupon",
            submit_create: "Submit",
            submit_update: "Submit",
            submit_position: "none"
          },
          env: "prod",
          theme: "auto"
        }
      }]
    }), u = w(_.l[0].data.mode);
    let $;
    L(() => _.l[0].data.mode, async (n) => {
      u.value = n, _.l[0].data.fields = g(n), $ && await $();
    }, { immediate: !0 }), A(async () => {
      e._p.my.emitter = e._p.f.new_emitter(), o(s.value);
      const n = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
        }
      };
      try {
        const p = await ae(n), C = await se(n);
        te("msg", async (b) => {
          if (b.type === "form_submit") {
            const k = b.custom?.payload;
            k && await P(k);
          }
        }), $ = async () => {
          const b = JSON.parse(JSON.stringify(_)), k = await p.set({ data: b });
          if (k?.r) {
            if (t.value = k.r, k.style) {
              const S = document.createElement("style");
              S.innerHTML = k.style, document.head.appendChild(S);
            }
            await W(), await C.set({ data: b });
          }
        }, _.l[0].data.fields = g(_.l[0].data.mode), await $();
      } catch (p) {
        console.error("Error initializing form:", p);
      }
    });
    const J = () => {
      if (!a.value) return;
      const n = a.value.querySelector("form");
      n && n.requestSubmit();
    }, P = async (n) => {
      i.value = !0;
      const p = {
        user_id: l.value,
        code: n.code,
        description: n.description,
        coupon_type: "cart_level",
        discount_type: n.discount_type,
        discount_value: Number(n.discount_value),
        max_discount: Number(n.max_discount || 0),
        min_order_value: Number(n.min_order_value || 0),
        max_usage_per_user: Number(n.max_usage_per_user || 1),
        total_usage_limit: Number(n.total_usage_limit || 1),
        valid_days: Number(n.valid_days || 1),
        where: { id: "", brand: "", category: [] }
      };
      u.value === "create" ? p.operation = "create_coupon" : (p.operation = "update_coupon", n.coupon_id ? p.coupon_id = Number(n.coupon_id) : _.l[0].data.defaults.coupon_id && (p.coupon_id = Number(_.l[0].data.defaults.coupon_id)), p.is_active = !0), console.log("Sending Payload:", p);
      try {
        const b = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
          },
          body: JSON.stringify(p)
        })).json();
        b.success || b.status === "success" || b.code === 200 ? (d("success", "Operation Successful", "Coupon saved successfully."), u.value === "create" && O()) : d("error", "Action Failed", b.message || "Validation failed.");
      } catch (C) {
        d("error", "Network Error", "Check console for details."), console.error(C);
      } finally {
        i.value = !1;
      }
    }, O = async () => {
      _.l[0].data.mode = "create", _.l[0].data.defaults = {
        code: "",
        description: "",
        discount_value: "",
        min_order_value: "",
        max_discount: "",
        valid_days: "",
        max_usage_per_user: "",
        total_usage_limit: "",
        discount_type: ""
      }, $ && await $();
    }, V = () => {
      K("msg", { type: "navigate_back", _p: e._p, _$p: e._$p });
    };
    return (n, p) => (v(), x("div", re, [
      m("header", { class: "fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between border-b backdrop-blur-md bg-white/80 border-gray-200 dark:bg-[#0f172a]/90 dark:border-gray-700" }, [
        m("button", {
          onClick: V,
          class: "flex items-center gap-2 px-4 py-2 rounded-lg border bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
        }, " ← Back ")
      ]),
      m("main", ne, [
        m("div", ie, [
          m("h1", oe, z(u.value === "create" ? "Create New Coupon" : "Update Existing Coupon"), 1),
          t.value ? (v(), x("div", {
            key: u.value,
            ref_key: "formContainer",
            ref: a,
            innerHTML: t.value,
            class: "rounded-xl border shadow-xl overflow-hidden bg-white border-gray-200 dark:bg-[#020617] dark:border-gray-700"
          }, null, 8, le)) : (v(), x("div", ce, [...p[0] || (p[0] = [
            m("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }, null, -1)
          ])]))
        ])
      ]),
      m("footer", de, [
        u.value === "update" ? (v(), x("button", {
          key: 0,
          onClick: O,
          class: "px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition"
        }, " Cancel Update ")) : T("", !0),
        m("div", ue, [
          m("button", {
            onClick: J,
            disabled: i.value,
            class: U(["px-8 py-2.5 rounded-lg font-semibold text-white shadow-lg transition active:scale-95 flex items-center justify-center gap-2", [
              i.value ? "opacity-75 cursor-not-allowed" : "",
              u.value === "create" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-blue-600 hover:bg-blue-700"
            ]])
          }, [
            i.value ? (v(), x("span", ye)) : T("", !0),
            m("span", null, z(i.value ? "Processing..." : u.value === "create" ? "Generate Coupon" : "Save Changes"), 1)
          ], 10, me)
        ])
      ]),
      Z(X, {
        "enter-active-class": "transform ease-out duration-300 transition",
        "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
        "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
        "leave-active-class": "transition ease-in duration-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: G(() => [
          r.show ? (v(), x("div", pe, [
            m("div", {
              class: U(["rounded-lg overflow-hidden toast-card", r.type === "success" ? "toast-success" : "toast-error"])
            }, [
              m("div", _e, [
                m("div", fe, [
                  m("div", he, [
                    r.type === "success" ? (v(), x("span", be, "✅")) : (v(), x("span", ge, "⚠️"))
                  ]),
                  m("div", we, [
                    m("p", xe, z(r.title), 1),
                    m("p", ve, z(r.message), 1)
                  ])
                ])
              ])
            ], 2)
          ])) : T("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ce = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const i = Y(ke, {
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
  Ce as hydrator,
  Ce as index
};
