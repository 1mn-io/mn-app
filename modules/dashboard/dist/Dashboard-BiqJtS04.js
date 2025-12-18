import { s as h } from "./index-ClsLx3Xc.js";
import { s as v } from "./index-K_bgEQaW.js";
import { L as c, V as u, H as p, W as r, af as g, a as t, P as y, a0 as b, ag as k, Z as w, R as _ } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
import { s as S } from "./index-CNj2q7qa.js";
import { s as j } from "./index-CZ-PeEFT.js";
import { P as $ } from "./ProductService-bZb9w0YO.js";
import { s as C } from "./index-DyEdEP4K.js";
import { u as R, _ as P } from "./main-DmGEeWOh.js";
const T = { class: "card" }, A = { class: "flex justify-between items-center mb-6" }, V = {
  __name: "BestSellingWidget",
  setup(m) {
    const s = c(null), n = c([
      { label: "Add New", icon: "pi pi-fw pi-plus" },
      { label: "Remove", icon: "pi pi-fw pi-trash" }
    ]);
    return (i, e) => {
      const a = v, d = h;
      return p(), u("div", T, [
        r("div", A, [
          e[1] || (e[1] = r("div", { class: "font-semibold text-xl" }, "Best Selling Products", -1)),
          r("div", null, [
            t(a, {
              icon: "pi pi-ellipsis-v",
              class: "p-button-text p-button-plain p-button-rounded",
              onClick: e[0] || (e[0] = (o) => i.$refs.menu.toggle(o))
            }),
            t(d, {
              ref_key: "menu",
              ref: s,
              popup: "",
              model: n.value,
              class: "min-w-40!"
            }, null, 8, ["model"])
          ])
        ]),
        e[2] || (e[2] = g('<ul class="list-none p-0 m-0"><li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"><div><span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span><div class="mt-1 text-muted-color">Clothing</div></div><div class="mt-2 md:mt-0 flex items-center"><div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height:8px;"><div class="bg-orange-500 h-full" style="width:50%;"></div></div><span class="text-orange-500 ml-4 font-medium">%50</span></div></li><li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"><div><span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span><div class="mt-1 text-muted-color">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center"><div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height:8px;"><div class="bg-cyan-500 h-full" style="width:16%;"></div></div><span class="text-cyan-500 ml-4 font-medium">%16</span></div></li><li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"><div><span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span><div class="mt-1 text-muted-color">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center"><div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height:8px;"><div class="bg-pink-500 h-full" style="width:67%;"></div></div><span class="text-pink-500 ml-4 font-medium">%67</span></div></li><li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"><div><span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span><div class="mt-1 text-muted-color">Office</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center"><div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height:8px;"><div class="bg-green-500 h-full" style="width:35%;"></div></div><span class="text-primary ml-4 font-medium">%35</span></div></li><li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"><div><span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span><div class="mt-1 text-muted-color">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center"><div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height:8px;"><div class="bg-purple-500 h-full" style="width:75%;"></div></div><span class="text-purple-500 ml-4 font-medium">%75</span></div></li><li class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"><div><span class="text-surface-900 dark:text-surface-0 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span><div class="mt-1 text-muted-color">Clothing</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center"><div class="bg-surface-300 dark:bg-surface-500 rounded-border overflow-hidden w-40 lg:w-24" style="height:8px;"><div class="bg-teal-500 h-full" style="width:40%;"></div></div><span class="text-teal-500 ml-4 font-medium">%40</span></div></li></ul>', 1))
      ]);
    };
  }
}, D = { class: "card" }, N = { class: "flex items-center justify-between mb-6" }, B = {
  __name: "NotificationsWidget",
  setup(m) {
    const s = c(null), n = c([
      { label: "Add New", icon: "pi pi-fw pi-plus" },
      { label: "Remove", icon: "pi pi-fw pi-trash" }
    ]);
    return (i, e) => {
      const a = v, d = h;
      return p(), u("div", D, [
        r("div", N, [
          e[1] || (e[1] = r("div", { class: "font-semibold text-xl" }, "Notifications", -1)),
          r("div", null, [
            t(a, {
              icon: "pi pi-ellipsis-v",
              class: "p-button-text p-button-plain p-button-rounded",
              onClick: e[0] || (e[0] = (o) => i.$refs.menu.toggle(o))
            }),
            t(d, {
              ref_key: "menu",
              ref: s,
              popup: "",
              model: n.value,
              class: "min-w-40!"
            }, null, 8, ["model"])
          ])
        ]),
        e[2] || (e[2] = g('<span class="block text-muted-color font-medium mb-4">TODAY</span><ul class="p-0 mx-0 mt-0 mb-6 list-none"><li class="flex items-center py-2 border-b border-surface"><div class="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full mr-4 shrink-0"><i class="pi pi-dollar text-xl! text-blue-500"></i></div><span class="text-surface-900 dark:text-surface-0 leading-normal">Richard Jones <span class="text-surface-700 dark:text-surface-100">has purchased a blue t-shirt for <span class="text-primary font-bold">$79.00</span></span></span></li><li class="flex items-center py-2"><div class="w-12 h-12 flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-full mr-4 shrink-0"><i class="pi pi-download text-xl! text-orange-500"></i></div><span class="text-surface-700 dark:text-surface-100 leading-normal">Your request for withdrawal of <span class="text-primary font-bold">$2500.00</span> has been initiated.</span></li></ul><span class="block text-muted-color font-medium mb-4">YESTERDAY</span><ul class="p-0 m-0 list-none mb-6"><li class="flex items-center py-2 border-b border-surface"><div class="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full mr-4 shrink-0"><i class="pi pi-dollar text-xl! text-blue-500"></i></div><span class="text-surface-900 dark:text-surface-0 leading-normal">Keyser Wick <span class="text-surface-700 dark:text-surface-100">has purchased a black jacket for <span class="text-primary font-bold">$59.00</span></span></span></li><li class="flex items-center py-2 border-b border-surface"><div class="w-12 h-12 flex items-center justify-center bg-pink-100 dark:bg-pink-400/10 rounded-full mr-4 shrink-0"><i class="pi pi-question text-xl! text-pink-500"></i></div><span class="text-surface-900 dark:text-surface-0 leading-normal">Jane Davis <span class="text-surface-700 dark:text-surface-100">has posted a new questions about your product.</span></span></li></ul><span class="block text-muted-color font-medium mb-4">LAST WEEK</span><ul class="p-0 m-0 list-none"><li class="flex items-center py-2 border-b border-surface"><div class="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full mr-4 shrink-0"><i class="pi pi-arrow-up text-xl! text-green-500"></i></div><span class="text-surface-900 dark:text-surface-0 leading-normal">Your revenue has increased by <span class="text-primary font-bold">%25</span>.</span></li><li class="flex items-center py-2 border-b border-surface"><div class="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-full mr-4 shrink-0"><i class="pi pi-heart text-xl! text-purple-500"></i></div><span class="text-surface-900 dark:text-surface-0 leading-normal"><span class="text-primary font-bold">12</span> users have added your products to their wishlist.</span></li></ul>', 6))
      ]);
    };
  }
}, W = { class: "card" }, E = ["src", "alt"], L = {
  __name: "RecentSalesWidget",
  setup(m) {
    const s = c(null);
    function n(i) {
      return i.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }
    return y(() => {
      $.getProductsSmall().then((i) => s.value = i);
    }), (i, e) => {
      const a = j, d = v, o = S;
      return p(), u("div", W, [
        e[0] || (e[0] = r("div", { class: "font-semibold text-xl mb-4" }, "Recent Sales", -1)),
        t(o, {
          value: s.value,
          rows: 5,
          paginator: !0,
          responsiveLayout: "scroll"
        }, {
          default: b(() => [
            t(a, {
              style: { width: "15%" },
              header: "Image"
            }, {
              body: b((l) => [
                r("img", {
                  src: `https://primefaces.org/cdn/primevue/images/product/${l.data.image}`,
                  alt: l.data.image,
                  width: "50",
                  class: "shadow"
                }, null, 8, E)
              ]),
              _: 1
            }),
            t(a, {
              field: "name",
              header: "Name",
              sortable: !0,
              style: { width: "35%" }
            }),
            t(a, {
              field: "price",
              header: "Price",
              sortable: !0,
              style: { width: "35%" }
            }, {
              body: b((l) => [
                k(w(n(l.data.price)), 1)
              ]),
              _: 1
            }),
            t(a, {
              style: { width: "15%" },
              header: "View"
            }, {
              body: b(() => [
                t(d, {
                  icon: "pi pi-search",
                  type: "button",
                  class: "p-button-text"
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"])
      ]);
    };
  }
}, M = { class: "card" }, O = {
  __name: "RevenueStreamWidget",
  setup(m) {
    const { getPrimary: s, getSurface: n, isDarkTheme: i } = R(), e = c(null), a = c(null);
    function d() {
      const l = getComputedStyle(document.documentElement);
      return {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            type: "bar",
            label: "Subscriptions",
            backgroundColor: l.getPropertyValue("--p-primary-400"),
            data: [4e3, 1e4, 15e3, 4e3],
            barThickness: 32
          },
          {
            type: "bar",
            label: "Advertising",
            backgroundColor: l.getPropertyValue("--p-primary-300"),
            data: [2100, 8400, 2400, 7500],
            barThickness: 32
          },
          {
            type: "bar",
            label: "Affiliate",
            backgroundColor: l.getPropertyValue("--p-primary-200"),
            data: [4100, 5200, 3400, 7400],
            borderRadius: {
              topLeft: 8,
              topRight: 8
            },
            borderSkipped: !0,
            barThickness: 32
          }
        ]
      };
    }
    function o() {
      const l = getComputedStyle(document.documentElement), f = l.getPropertyValue("--surface-border"), x = l.getPropertyValue("--text-color-secondary");
      return {
        maintainAspectRatio: !1,
        aspectRatio: 0.8,
        scales: {
          x: {
            stacked: !0,
            ticks: {
              color: x
            },
            grid: {
              color: "transparent",
              borderColor: "transparent"
            }
          },
          y: {
            stacked: !0,
            ticks: {
              color: x
            },
            grid: {
              color: f,
              borderColor: "transparent",
              drawTicks: !1
            }
          }
        }
      };
    }
    return _([s, n, i], () => {
      e.value = d(), a.value = o();
    }), y(() => {
      e.value = d(), a.value = o();
    }), (l, f) => {
      const x = C;
      return p(), u("div", M, [
        f[0] || (f[0] = r("div", { class: "font-semibold text-xl mb-4" }, "Revenue Stream", -1)),
        t(x, {
          type: "bar",
          data: e.value,
          options: a.value,
          class: "h-80"
        }, null, 8, ["data", "options"])
      ]);
    };
  }
}, Y = {};
function Q(m, s) {
  return s[0] || (s[0] = g('<div class="col-span-12 lg:col-span-6 xl:col-span-3"><div class="card mb-0"><div class="flex justify-between mb-4"><div><span class="block text-muted-color font-medium mb-4">Orders</span><div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div></div><div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width:2.5rem;height:2.5rem;"><i class="pi pi-shopping-cart text-blue-500 text-xl!"></i></div></div><span class="text-primary font-medium">24 new </span><span class="text-muted-color">since last visit</span></div></div><div class="col-span-12 lg:col-span-6 xl:col-span-3"><div class="card mb-0"><div class="flex justify-between mb-4"><div><span class="block text-muted-color font-medium mb-4">Revenue</span><div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$2.100</div></div><div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width:2.5rem;height:2.5rem;"><i class="pi pi-dollar text-orange-500 text-xl!"></i></div></div><span class="text-primary font-medium">%52+ </span><span class="text-muted-color">since last week</span></div></div><div class="col-span-12 lg:col-span-6 xl:col-span-3"><div class="card mb-0"><div class="flex justify-between mb-4"><div><span class="block text-muted-color font-medium mb-4">Customers</span><div class="text-surface-900 dark:text-surface-0 font-medium text-xl">28441</div></div><div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width:2.5rem;height:2.5rem;"><i class="pi pi-users text-cyan-500 text-xl!"></i></div></div><span class="text-primary font-medium">520 </span><span class="text-muted-color">newly registered</span></div></div><div class="col-span-12 lg:col-span-6 xl:col-span-3"><div class="card mb-0"><div class="flex justify-between mb-4"><div><span class="block text-muted-color font-medium mb-4">Comments</span><div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 Unread</div></div><div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width:2.5rem;height:2.5rem;"><i class="pi pi-comment text-purple-500 text-xl!"></i></div></div><span class="text-primary font-medium">85 </span><span class="text-muted-color">responded</span></div></div>', 4));
}
const q = /* @__PURE__ */ P(Y, [["render", Q]]), U = { class: "grid grid-cols-12 gap-8" }, J = { class: "col-span-12 xl:col-span-6" }, K = { class: "col-span-12 xl:col-span-6" }, te = {
  __name: "Dashboard",
  setup(m) {
    return (s, n) => (p(), u("div", U, [
      t(q),
      r("div", J, [
        t(L),
        t(V)
      ]),
      r("div", K, [
        t(O),
        t(B)
      ])
    ]));
  }
};
export {
  te as default
};
