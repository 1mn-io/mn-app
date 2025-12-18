import { s as z } from "./index-Cbp_NgeB.js";
import { s as G } from "./index-BgtAwlhB.js";
import { s as X } from "./index-v_LDAzD4.js";
import { s as ee } from "./index-BqojmDQN.js";
import { s as te } from "./index-DAVmcROl.js";
import { s as le } from "./index-BBRGTOUs.js";
import { s as ae } from "./index-CSAjmApO.js";
import { s as oe } from "./index-CPzAk7vp.js";
import { s as se } from "./index-DCjW7nkO.js";
import { s as ie, a as ne } from "./index-Qy7YOLF_.js";
import { s as re } from "./index-1F8bg-R-.js";
import { s as ue } from "./index-D4aa0W3k.js";
import { s as de } from "./index-B4LaqIEm.js";
import { P as ce } from "./ProductService-bZb9w0YO.js";
import { ae as me, F as ve } from "./main-k5gsV9f8.js";
import { P as pe, L as u, V as y, H as g, W as o, a, a0 as n, ag as C, Z as N, J as k } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
const fe = { class: "card" }, ye = { class: "flex flex-wrap gap-2 items-center justify-between" }, ge = ["src", "alt"], be = { class: "flex flex-col gap-6" }, Se = ["src", "alt"], ke = {
  key: 0,
  class: "text-red-500"
}, xe = { class: "grid grid-cols-12 gap-4" }, Ve = { class: "flex items-center gap-2 col-span-6" }, Ce = { class: "flex items-center gap-2 col-span-6" }, we = { class: "flex items-center gap-2 col-span-6" }, Pe = { class: "flex items-center gap-2 col-span-6" }, Ue = { class: "grid grid-cols-12 gap-4" }, Te = { class: "col-span-6" }, Ne = { class: "col-span-6" }, _e = { class: "flex items-center gap-4" }, $e = { key: 0 }, De = { class: "flex items-center gap-4" }, Oe = { key: 0 }, Ze = {
  __name: "Crud",
  setup(Ie) {
    pe(() => {
      ce.getProducts().then((s) => r.value = s);
    });
    const b = me(), w = u(), r = u(), c = u(!1), v = u(!1), p = u(!1), t = u({}), m = u(), x = u({
      global: { value: null, matchMode: ve.CONTAINS }
    }), f = u(!1), _ = u([
      { label: "INSTOCK", value: "instock" },
      { label: "LOWSTOCK", value: "lowstock" },
      { label: "OUTOFSTOCK", value: "outofstock" }
    ]);
    function $(s) {
      if (s) return s.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    function D() {
      t.value = {}, f.value = !1, c.value = !0;
    }
    function O() {
      c.value = !1, f.value = !1;
    }
    function I() {
      f.value = !0, t?.value.name?.trim() && (t.value.id ? (t.value.inventoryStatus = t.value.inventoryStatus.value ? t.value.inventoryStatus.value : t.value.inventoryStatus, r.value[K(t.value.id)] = t.value, b.add({ severity: "success", summary: "Successful", detail: "Product Updated", life: 3e3 })) : (t.value.id = P(), t.value.code = P(), t.value.image = "product-placeholder.svg", t.value.inventoryStatus = t.value.inventoryStatus ? t.value.inventoryStatus.value : "INSTOCK", r.value.push(t.value), b.add({ severity: "success", summary: "Successful", detail: "Product Created", life: 3e3 })), c.value = !1, t.value = {});
    }
    function L(s) {
      t.value = { ...s }, c.value = !0;
    }
    function M(s) {
      t.value = s, v.value = !0;
    }
    function F() {
      r.value = r.value.filter((s) => s.id !== t.value.id), v.value = !1, t.value = {}, b.add({ severity: "success", summary: "Successful", detail: "Product Deleted", life: 3e3 });
    }
    function K(s) {
      let e = -1;
      for (let i = 0; i < r.value.length; i++)
        if (r.value[i].id === s) {
          e = i;
          break;
        }
      return e;
    }
    function P() {
      let s = "";
      for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < 5; i++)
        s += e.charAt(Math.floor(Math.random() * e.length));
      return s;
    }
    function h() {
      w.value.exportCSV();
    }
    function q() {
      p.value = !0;
    }
    function R() {
      r.value = r.value.filter((s) => !m.value.includes(s)), p.value = !1, m.value = null, b.add({ severity: "success", summary: "Successful", detail: "Products Deleted", life: 3e3 });
    }
    function A(s) {
      switch (s) {
        case "INSTOCK":
          return "success";
        case "LOWSTOCK":
          return "warn";
        case "OUTOFSTOCK":
          return "danger";
        default:
          return null;
      }
    }
    return (s, e) => {
      const i = de, B = ue, E = ne, U = re, W = ie, d = se, Y = oe, j = ae, H = le, J = te, Q = ee, S = X, T = G, V = z;
      return g(), y("div", null, [
        o("div", fe, [
          a(B, { class: "mb-6" }, {
            start: n(() => [
              a(i, {
                label: "New",
                icon: "pi pi-plus",
                severity: "secondary",
                class: "mr-2",
                onClick: D
              }),
              a(i, {
                label: "Delete",
                icon: "pi pi-trash",
                severity: "secondary",
                onClick: q,
                disabled: !m.value || !m.value.length
              }, null, 8, ["disabled"])
            ]),
            end: n(() => [
              a(i, {
                label: "Export",
                icon: "pi pi-upload",
                severity: "secondary",
                onClick: e[0] || (e[0] = (l) => h(l))
              })
            ]),
            _: 1
          }),
          a(H, {
            ref_key: "dt",
            ref: w,
            selection: m.value,
            "onUpdate:selection": e[2] || (e[2] = (l) => m.value = l),
            value: r.value,
            dataKey: "id",
            paginator: !0,
            rows: 10,
            filters: x.value,
            paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
            rowsPerPageOptions: [5, 10, 25],
            currentPageReportTemplate: "Showing {first} to {last} of {totalRecords} products"
          }, {
            header: n(() => [
              o("div", ye, [
                e[18] || (e[18] = o("h4", { class: "m-0" }, "Manage Products", -1)),
                a(W, null, {
                  default: n(() => [
                    a(E, null, {
                      default: n(() => [...e[17] || (e[17] = [
                        o("i", { class: "pi pi-search" }, null, -1)
                      ])]),
                      _: 1
                    }),
                    a(U, {
                      modelValue: x.value.global.value,
                      "onUpdate:modelValue": e[1] || (e[1] = (l) => x.value.global.value = l),
                      placeholder: "Search..."
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            default: n(() => [
              a(d, {
                selectionMode: "multiple",
                style: { width: "3rem" },
                exportable: !1
              }),
              a(d, {
                field: "code",
                header: "Code",
                sortable: "",
                style: { "min-width": "12rem" }
              }),
              a(d, {
                field: "name",
                header: "Name",
                sortable: "",
                style: { "min-width": "16rem" }
              }),
              a(d, { header: "Image" }, {
                body: n((l) => [
                  o("img", {
                    src: `https://primefaces.org/cdn/primevue/images/product/${l.data.image}`,
                    alt: l.data.image,
                    class: "rounded",
                    style: { width: "64px" }
                  }, null, 8, ge)
                ]),
                _: 1
              }),
              a(d, {
                field: "price",
                header: "Price",
                sortable: "",
                style: { "min-width": "8rem" }
              }, {
                body: n((l) => [
                  C(N($(l.data.price)), 1)
                ]),
                _: 1
              }),
              a(d, {
                field: "category",
                header: "Category",
                sortable: "",
                style: { "min-width": "10rem" }
              }),
              a(d, {
                field: "rating",
                header: "Reviews",
                sortable: "",
                style: { "min-width": "12rem" }
              }, {
                body: n((l) => [
                  a(Y, {
                    modelValue: l.data.rating,
                    readonly: !0
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              a(d, {
                field: "inventoryStatus",
                header: "Status",
                sortable: "",
                style: { "min-width": "12rem" }
              }, {
                body: n((l) => [
                  a(j, {
                    value: l.data.inventoryStatus,
                    severity: A(l.data.inventoryStatus)
                  }, null, 8, ["value", "severity"])
                ]),
                _: 1
              }),
              a(d, {
                exportable: !1,
                style: { "min-width": "12rem" }
              }, {
                body: n((l) => [
                  a(i, {
                    icon: "pi pi-pencil",
                    outlined: "",
                    rounded: "",
                    class: "mr-2",
                    onClick: (Z) => L(l.data)
                  }, null, 8, ["onClick"]),
                  a(i, {
                    icon: "pi pi-trash",
                    outlined: "",
                    rounded: "",
                    severity: "danger",
                    onClick: (Z) => M(l.data)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["selection", "value", "filters"])
        ]),
        a(V, {
          visible: c.value,
          "onUpdate:visible": e[12] || (e[12] = (l) => c.value = l),
          style: { width: "450px" },
          header: "Product Details",
          modal: !0
        }, {
          footer: n(() => [
            a(i, {
              label: "Cancel",
              icon: "pi pi-times",
              text: "",
              onClick: O
            }),
            a(i, {
              label: "Save",
              icon: "pi pi-check",
              onClick: I
            })
          ]),
          default: n(() => [
            o("div", be, [
              t.value.image ? (g(), y("img", {
                key: 0,
                src: `https://primefaces.org/cdn/primevue/images/product/${t.value.image}`,
                alt: t.value.image,
                class: "block m-auto pb-4"
              }, null, 8, Se)) : k("", !0),
              o("div", null, [
                e[19] || (e[19] = o("label", {
                  for: "name",
                  class: "block font-bold mb-3"
                }, "Name", -1)),
                a(U, {
                  id: "name",
                  modelValue: t.value.name,
                  "onUpdate:modelValue": e[3] || (e[3] = (l) => t.value.name = l),
                  modelModifiers: { trim: !0 },
                  required: "true",
                  autofocus: "",
                  invalid: f.value && !t.value.name,
                  fluid: ""
                }, null, 8, ["modelValue", "invalid"]),
                f.value && !t.value.name ? (g(), y("small", ke, "Name is required.")) : k("", !0)
              ]),
              o("div", null, [
                e[20] || (e[20] = o("label", {
                  for: "description",
                  class: "block font-bold mb-3"
                }, "Description", -1)),
                a(J, {
                  id: "description",
                  modelValue: t.value.description,
                  "onUpdate:modelValue": e[4] || (e[4] = (l) => t.value.description = l),
                  required: "true",
                  rows: "3",
                  cols: "20",
                  fluid: ""
                }, null, 8, ["modelValue"])
              ]),
              o("div", null, [
                e[21] || (e[21] = o("label", {
                  for: "inventoryStatus",
                  class: "block font-bold mb-3"
                }, "Inventory Status", -1)),
                a(Q, {
                  id: "inventoryStatus",
                  modelValue: t.value.inventoryStatus,
                  "onUpdate:modelValue": e[5] || (e[5] = (l) => t.value.inventoryStatus = l),
                  options: _.value,
                  optionLabel: "label",
                  placeholder: "Select a Status",
                  fluid: ""
                }, null, 8, ["modelValue", "options"])
              ]),
              o("div", null, [
                e[26] || (e[26] = o("span", { class: "block font-bold mb-4" }, "Category", -1)),
                o("div", xe, [
                  o("div", Ve, [
                    a(S, {
                      id: "category1",
                      modelValue: t.value.category,
                      "onUpdate:modelValue": e[6] || (e[6] = (l) => t.value.category = l),
                      name: "category",
                      value: "Accessories"
                    }, null, 8, ["modelValue"]),
                    e[22] || (e[22] = o("label", { for: "category1" }, "Accessories", -1))
                  ]),
                  o("div", Ce, [
                    a(S, {
                      id: "category2",
                      modelValue: t.value.category,
                      "onUpdate:modelValue": e[7] || (e[7] = (l) => t.value.category = l),
                      name: "category",
                      value: "Clothing"
                    }, null, 8, ["modelValue"]),
                    e[23] || (e[23] = o("label", { for: "category2" }, "Clothing", -1))
                  ]),
                  o("div", we, [
                    a(S, {
                      id: "category3",
                      modelValue: t.value.category,
                      "onUpdate:modelValue": e[8] || (e[8] = (l) => t.value.category = l),
                      name: "category",
                      value: "Electronics"
                    }, null, 8, ["modelValue"]),
                    e[24] || (e[24] = o("label", { for: "category3" }, "Electronics", -1))
                  ]),
                  o("div", Pe, [
                    a(S, {
                      id: "category4",
                      modelValue: t.value.category,
                      "onUpdate:modelValue": e[9] || (e[9] = (l) => t.value.category = l),
                      name: "category",
                      value: "Fitness"
                    }, null, 8, ["modelValue"]),
                    e[25] || (e[25] = o("label", { for: "category4" }, "Fitness", -1))
                  ])
                ])
              ]),
              o("div", Ue, [
                o("div", Te, [
                  e[27] || (e[27] = o("label", {
                    for: "price",
                    class: "block font-bold mb-3"
                  }, "Price", -1)),
                  a(T, {
                    id: "price",
                    modelValue: t.value.price,
                    "onUpdate:modelValue": e[10] || (e[10] = (l) => t.value.price = l),
                    mode: "currency",
                    currency: "USD",
                    locale: "en-US",
                    fluid: ""
                  }, null, 8, ["modelValue"])
                ]),
                o("div", Ne, [
                  e[28] || (e[28] = o("label", {
                    for: "quantity",
                    class: "block font-bold mb-3"
                  }, "Quantity", -1)),
                  a(T, {
                    id: "quantity",
                    modelValue: t.value.quantity,
                    "onUpdate:modelValue": e[11] || (e[11] = (l) => t.value.quantity = l),
                    integeronly: "",
                    fluid: ""
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible"]),
        a(V, {
          visible: v.value,
          "onUpdate:visible": e[14] || (e[14] = (l) => v.value = l),
          style: { width: "450px" },
          header: "Confirm",
          modal: !0
        }, {
          footer: n(() => [
            a(i, {
              label: "No",
              icon: "pi pi-times",
              text: "",
              onClick: e[13] || (e[13] = (l) => v.value = !1)
            }),
            a(i, {
              label: "Yes",
              icon: "pi pi-check",
              onClick: F
            })
          ]),
          default: n(() => [
            o("div", _e, [
              e[31] || (e[31] = o("i", { class: "pi pi-exclamation-triangle text-3xl!" }, null, -1)),
              t.value ? (g(), y("span", $e, [
                e[29] || (e[29] = C("Are you sure you want to delete ", -1)),
                o("b", null, N(t.value.name), 1),
                e[30] || (e[30] = C("?", -1))
              ])) : k("", !0)
            ])
          ]),
          _: 1
        }, 8, ["visible"]),
        a(V, {
          visible: p.value,
          "onUpdate:visible": e[16] || (e[16] = (l) => p.value = l),
          style: { width: "450px" },
          header: "Confirm",
          modal: !0
        }, {
          footer: n(() => [
            a(i, {
              label: "No",
              icon: "pi pi-times",
              text: "",
              onClick: e[15] || (e[15] = (l) => p.value = !1)
            }),
            a(i, {
              label: "Yes",
              icon: "pi pi-check",
              text: "",
              onClick: R
            })
          ]),
          default: n(() => [
            o("div", De, [
              e[32] || (e[32] = o("i", { class: "pi pi-exclamation-triangle text-3xl!" }, null, -1)),
              t.value ? (g(), y("span", Oe, "Are you sure you want to delete the selected products?")) : k("", !0)
            ])
          ]),
          _: 1
        }, 8, ["visible"])
      ]);
    };
  }
};
export {
  Ze as default
};
