import { d as L, r as c, a as T, w as j, o as q, n as J, c as u, b as m, e as t, f as M, t as h, g as w, h as E, i as V, T as B, j as F } from "./runtime-dom.esm-bundler-BqrXMFYn.js";
import { ce_renderer as A, ce_hydrator as P, ce_listen as R, ce_call as G } from "content-engine-lib";
const X = { class: "min-h-screen font-sans transition-colors duration-300 bg-gray-100 text-gray-900 dark:bg-[#0b1220] dark:text-gray-100 relative" }, Z = { class: "pt-24 pb-28 px-6" }, Y = { class: "max-w-4xl mx-auto" }, Q = { class: "mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100" }, W = ["innerHTML"], H = {
  key: 1,
  class: "flex justify-center py-20"
}, $ = { class: "fixed bottom-0 left-0 right-0 h-20 px-8 flex items-center justify-end gap-4 border-t backdrop-blur-md bg-white/90 border-gray-200 dark:bg-[#0f172a]/90 dark:border-gray-700 z-40" }, K = { class: "w-auto" }, ee = ["disabled"], te = {
  key: 0,
  class: "animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"
}, ae = {
  key: 0,
  class: "fixed top-24 right-6 z-[100] max-w-sm w-full pointer-events-auto"
}, se = { class: "p-4" }, oe = { class: "flex items-start" }, re = { class: "flex-shrink-0" }, ne = { key: 0 }, ie = { key: 1 }, de = { class: "ml-3 flex-1" }, le = { class: "text-sm font-bold text-gray-900 dark:text-gray-100" }, ce = { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, ue = /* @__PURE__ */ L({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const p = c(""), b = c(null), d = c(!1);
    c(!1);
    const v = c("admin_1"), f = c(o._$p?.data?.curr.data.theme || "light"), i = c({
      s_param: Object.fromEntries(new URLSearchParams(window.location.search || {}))
    });
    i.value.s_param?.mode || (i.value.s_param.mode = "create"), i.value.s_param.mode == "update" && !i.value.s_param.coupon_id && (i.value.s_param.mode = "create");
    const r = T({ show: !1, type: "success", title: "", message: "" }), x = (e, a, g) => {
      r.type = e, r.title = a, r.message = g, r.show = !0, setTimeout(() => {
        r.show = !1;
      }, 3500);
    }, C = (e) => {
      e === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    };
    j(f, (e) => {
      C(e), s.l[0] && s.l[0].data && (s.l[0].data.theme = e);
    });
    const z = {
      section: "Basic Details",
      name: "coupon_id",
      label: "Coupon ID (Required)",
      type: "text",
      //"number", 
      placeholder: "Enter ID to update",
      validation: "required|min:1",
      columns: 12,
      //set..
      value: i.value.s_param.coupon_id
    }, k = [
      { section: "Basic Details", name: "code", label: "Coupon Code", type: "text", placeholder: "SAVE20", validation: "required|length:3,20", columns: 6 },
      { name: "description", label: "Description", type: "textarea", validation: "required|length:10,200", columns: 6, rows: 3 },
      { section: "Discount", name: "discount_type", label: "Type", type: "radio", columns: 6, validation: "required", options: [{ label: "% Percentage", value: "percentage" }, { label: "₹ Flat Amount", value: "flat" }] },
      { name: "discount_value", label: "Value", type: "number", validation: "required|min:1", columns: 6 },
      { section: "Limits", name: "min_order_value", label: "Minimum Order (₹)", type: "number", validation: "required|min:0", columns: 4 },
      { name: "max_discount", label: "Maximum Discount (₹)", type: "number", validation: "min:0", columns: 4 },
      { name: "valid_days", label: "Validity (Days)", type: "number", validation: "required|min:1", columns: 4 },
      { section: "Usage", name: "max_usage_per_user", label: "Usage Per User", type: "number", validation: "required|min:1", columns: 6 },
      { name: "total_usage_limit", label: "Total Usage Limit", type: "number", validation: "required|min:1", columns: 6 }
    ], N = (e) => e === "update" ? [z, ...k] : [...k], s = T({
      l: [{
        id: "coupon-form",
        type: "form",
        slug: "coupon",
        data: {
          mode: i.value.s_param?.mode,
          //"create", //create, update // <--- CHANGE THIS MANUALLY TO 'update' TO SEE THE ID FIELD
          defaults: { code: "", discount: "", expiry: "" },
          actions: { back: !1, submit: !1 },
          fields: [...k],
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
    }), l = c(s.l[0].data.mode);
    let y;
    j(() => s.l[0].data.mode, async (e) => {
      l.value = e, s.l[0].data.fields = N(e), y && await y();
    }, { immediate: !0 }), q(async () => {
      o._p.my.emitter = o._p.f.new_emitter(), C(f.value);
      const e = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
        }
      };
      try {
        const a = await A(e), g = await P(e);
        R("msg", async (n) => {
          if (n.type === "form_submit") {
            const _ = n.custom?.payload;
            _ && await O(_);
          }
        }), y = async () => {
          const n = JSON.parse(JSON.stringify(s)), _ = await a.set({ data: n });
          if (_?.r) {
            if (p.value = _.r, _.style) {
              const S = document.createElement("style");
              S.innerHTML = _.style, document.head.appendChild(S);
            }
            await J(), await g.set({ data: n });
          }
        }, s.l[0].data.fields = N(s.l[0].data.mode), await y();
      } catch (a) {
        console.error("Error initializing form:", a);
      }
    });
    const U = () => {
      if (!b.value) return;
      const e = b.value.querySelector("form");
      e && e.requestSubmit();
    }, O = async (e) => {
      d.value = !0;
      const a = {
        user_id: v.value,
        code: e.code,
        description: e.description,
        coupon_type: "cart_level",
        discount_type: e.discount_type,
        discount_value: Number(e.discount_value),
        max_discount: Number(e.max_discount || 0),
        min_order_value: Number(e.min_order_value || 0),
        max_usage_per_user: Number(e.max_usage_per_user || 1),
        total_usage_limit: Number(e.total_usage_limit || 1),
        valid_days: Number(e.valid_days || 1),
        where: { id: "", brand: "", category: [] }
      };
      l.value === "create" ? a.operation = "create_coupon" : (a.operation = "update_coupon", e.coupon_id ? a.coupon_id = Number(e.coupon_id) : s.l[0].data.defaults.coupon_id && (a.coupon_id = Number(s.l[0].data.defaults.coupon_id)), a.is_active = !0), console.log("Sending Payload:", a);
      try {
        const n = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/order_management", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
          },
          body: JSON.stringify(a)
        })).json();
        n.success || n.status === "success" || n.code === 200 ? (x("success", "Operation Successful", "Coupon saved successfully."), l.value === "create" && I()) : x("error", "Action Failed", n.message || "Validation failed.");
      } catch (g) {
        x("error", "Network Error", "Check console for details."), console.error(g);
      } finally {
        d.value = !1;
      }
    }, I = async () => {
      s.l[0].data.mode = "create", s.l[0].data.defaults = {
        code: "",
        description: "",
        discount_value: "",
        min_order_value: "",
        max_discount: "",
        valid_days: "",
        max_usage_per_user: "",
        total_usage_limit: "",
        discount_type: ""
      }, y && await y();
    }, D = () => {
      G("msg", { type: "navigate_back", _p: o._p, _$p: o._$p });
    };
    return (e, a) => (m(), u("div", X, [
      t("header", { class: "fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between border-b backdrop-blur-md bg-white/80 border-gray-200 dark:bg-[#0f172a]/90 dark:border-gray-700" }, [
        t("button", {
          onClick: D,
          class: "flex items-center gap-2 px-4 py-2 rounded-lg border bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
        }, " ← Back ")
      ]),
      t("main", Z, [
        t("div", Y, [
          t("h1", Q, h(l.value === "create" ? "Create New Coupon" : "Update Existing Coupon"), 1),
          p.value ? (m(), u("div", {
            key: l.value,
            ref_key: "formContainer",
            ref: b,
            innerHTML: p.value,
            class: "rounded-xl border shadow-xl overflow-hidden bg-white border-gray-200 dark:bg-[#020617] dark:border-gray-700"
          }, null, 8, W)) : (m(), u("div", H, [...a[0] || (a[0] = [
            t("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }, null, -1)
          ])]))
        ])
      ]),
      t("footer", $, [
        l.value === "update" ? (m(), u("button", {
          key: 0,
          onClick: I,
          class: "px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition"
        }, " Cancel Update ")) : w("", !0),
        t("div", K, [
          t("button", {
            onClick: U,
            disabled: d.value,
            class: E(["px-8 py-2.5 rounded-lg font-semibold text-white shadow-lg transition active:scale-95 flex items-center justify-center gap-2", [
              d.value ? "opacity-75 cursor-not-allowed" : "",
              l.value === "create" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-blue-600 hover:bg-blue-700"
            ]])
          }, [
            d.value ? (m(), u("span", te)) : w("", !0),
            t("span", null, h(d.value ? "Processing..." : l.value === "create" ? "Generate Coupon" : "Save Changes"), 1)
          ], 10, ee)
        ])
      ]),
      M(B, {
        "enter-active-class": "transform ease-out duration-300 transition",
        "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
        "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
        "leave-active-class": "transition ease-in duration-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: V(() => [
          r.show ? (m(), u("div", ae, [
            t("div", {
              class: E(["rounded-lg overflow-hidden toast-card", r.type === "success" ? "toast-success" : "toast-error"])
            }, [
              t("div", se, [
                t("div", oe, [
                  t("div", re, [
                    r.type === "success" ? (m(), u("span", ne, "✅")) : (m(), u("span", ie, "⚠️"))
                  ]),
                  t("div", de, [
                    t("p", le, h(r.title), 1),
                    t("p", ce, h(r.message), 1)
                  ])
                ])
              ])
            ], 2)
          ])) : w("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), _e = async (o) => ({
  set: async (p) => {
    console.log(`--hydrator [${p.data.curr.type}]`);
    const d = F(ue, {
      _p: o,
      _$p: p
    }), v = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          o.f.call("msg", {
            type: "change",
            _p: o,
            _$p: p,
            custom: {}
          });
        }
      }
    }, f = document.getElementById(o.f.name("vue-root"));
    return d.mount(f), v;
  }
});
export {
  _e as hydrator,
  _e as index
};
