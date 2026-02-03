import { r as z, w as B, d as _, o as l, c as a, a as e, b as y, e as m, v as g, n as f, u as x, F as S, f as C, g as b, t as k, h as R, i as $, s as A, j as w, k as O } from "./runtime-dom.esm-bundler-TS0XTwcF.js";
const D = z({ label: "Home", value: "Home", type: "Fragments" });
function H() {
  return { setMenu: D };
}
const j = z(localStorage.getItem("page") || "DASHBOARD");
B(j, (i) => localStorage.setItem("page", i));
function M() {
  return { set_page: j };
}
const E = { class: "md:w-64 w-full self-start md:bg-white md:dark:bg-zinc-800 rounded-xl md:p-4 md:space-y-6" }, P = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
}, Z = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18 18 6M6 6l12 12"
}, L = {
  key: 0,
  class: "md:hidden px-3 py-2 text-xl font-semibold dark:text-white flex justify-between items-center"
}, V = {
  key: 1,
  class: "hidden md:block px-3 text-sm font-semibold text-gray-900 dark:text-zinc-200"
}, N = ["onClick"], I = {
  key: 0,
  class: "text-xs bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-zinc-200 px-2 rounded"
}, G = /* @__PURE__ */ _({
  __name: "SideBar",
  setup(i) {
    const { setMenu: s } = H(), { set_page: o } = M(), t = z(!1), c = (r) => {
      r.type === "Fragments" ? (s.value = { label: r.label, value: r.value, type: r.type }, console.log("Set menu to fragment:", s.value)) : r.type === "Routes" ? console.log("Navigate to route:", r) : r.type === "Settings" && console.log("Set menu to settings:", r);
    }, u = (r) => s.value?.label === r.label, d = [
      {
        title: "Personal information",
        items: [
          { label: "Edit Profile", value: "EditProfile", type: "Fragments" },
          { label: "Home", value: "Home", type: "Fragments" },
          { label: "Orders", value: "Orders", type: "Fragments" },
          { label: "Returns", value: "Returns", type: "Fragments" },
          { label: "Purchased goods", value: "PurchasedGoods", type: "Fragments" },
          { label: "Featured stores and brands", value: "Brands", type: "Fragments" },
          { label: "Tickets, hotels and tours", value: "Travel", type: "Fragments" }
        ]
      },
      {
        title: "Finance & activity",
        items: [
          { label: "Reviews", value: "reviews", type: "Routes" },
          { label: "Codes and certificates", value: "codes", type: "Routes" },
          { label: "Balance of funds", value: "balance", type: "Routes" },
          { label: "Ozon Premium", value: "premium", type: "Routes" },
          { label: "Procurement for business", value: "business", type: "Routes" },
          { label: "My questions and answers", value: "qa", type: "Routes" }
        ]
      },
      {
        title: "Preferences",
        items: [
          { label: "Settings", value: "settings", type: "Settings" },
          { label: "Vacancies", value: "vacancies", type: "Settings" },
          { label: "Language", value: "Language", type: "Settings" },
          { label: "Currency", value: "Currency", type: "Settings", badge: "RUB" }
        ]
      }
    ];
    return (r, n) => (l(), a("aside", E, [
      e("div", {
        class: f(["flex items-center justify-between gap-3 px-4 md:p-0", x(s).value !== "Home" ? "hidden md:block" : "block"])
      }, [
        n[4] || (n[4] = y('<div class="flex flex-row flex-1 items-center gap-2 bg-white dark:bg-zinc-800 md:bg-transparent rounded-full p-1 md:p-0 md:rounded-none"><img src="https://i.pinimg.com/736x/82/85/96/828596ef925a10e8c1a76d3a3be1d3e5.jpg" alt="Profile" class="w-10 h-10 rounded-full"><div><p class="text-sm dark:text-zinc-200 font-semibold leading-none">John Doe</p><p class="text-sm text-gray-500 hidden md:block">john.doe@example.com</p><p class="text-sm text-gray-500 md:hidden">go to profile</p></div></div>', 1)),
        (l(), a("svg", {
          onClick: n[0] || (n[0] = (v) => o.value = "MESSAGE"),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "size-6 md:hidden block dark:text-white"
        }, [...n[3] || (n[3] = [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          }, null, -1)
        ])])),
        (l(), a("svg", {
          onClick: n[1] || (n[1] = (v) => t.value = !t.value),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "size-6 md:hidden block dark:text-white"
        }, [
          m(e("path", P, null, 512), [
            [g, !t.value]
          ]),
          m(e("path", Z, null, 512), [
            [g, t.value]
          ])
        ]))
      ], 2),
      e("div", {
        class: f(["md:hidden mt-2 bg-white dark:bg-zinc-800 dark:text-white p-4 rounded-xl flex items-center gap-4", x(s).value !== "Home" ? "hidden md:block" : "block"])
      }, [...n[5] || (n[5] = [
        y('<div class="bg-gray-100 dark:bg-zinc-700 p-2 rounded-lg w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg><p class="text-xs font-semibold">Favorites</p><p class="text-xs text-gray-500">1 product</p></div><div class="bg-gray-100 dark:bg-zinc-700 p-2 rounded-lg w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path></svg><p class="text-xs font-semibold">History</p><p class="text-xs text-gray-500">Order again</p></div><div class="bg-gray-100 dark:bg-zinc-700 p-2 rounded-lg w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path></svg><p class="text-xs font-semibold">Reviews</p><p class="text-xs text-gray-500">No items</p></div>', 3)
      ])], 2),
      e("div", {
        class: f(["fixed inset-x-0 bottom-0 z-40 bg-[#f0f2f5] dark:bg-zinc-900 space-y-1 md:space-y-6 md:bg-transparent md:dark:bg-transparent transition-transform duration-300 ease-in-out md:static md:translate-y-0 md:block rounded-t-2xl", t.value ? "translate-y-0" : "translate-y-full"])
      }, [
        (l(), a(S, null, C(d, (v, F) => e("div", {
          key: v.title,
          class: "rounded-2xl bg-white dark:bg-zinc-800 md:block px-3 md:px-0"
        }, [
          F === 0 ? (l(), a("div", L, [
            n[7] || (n[7] = e("p", null, "Menu", -1)),
            (l(), a("svg", {
              onClick: n[2] || (n[2] = (p) => t.value = !1),
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "stroke-width": "1.5",
              stroke: "currentColor",
              class: "size-6"
            }, [...n[6] || (n[6] = [
              e("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M6 18 18 6M6 6l12 12"
              }, null, -1)
            ])]))
          ])) : b("", !0),
          v.title ? (l(), a("div", V, k(v.title), 1)) : b("", !0),
          e("ul", null, [
            (l(!0), a(S, null, C(v.items, (p) => (l(), a("li", {
              onClick: (te) => {
                c(p), t.value = !1;
              },
              key: p.label,
              class: f(["flex items-center justify-between px-3 py-2 md:border-0 border-b border-[#f0f2f5] dark:border-zinc-900 md:rounded-lg cursor-pointer text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-700", u(p) ? "md:bg-gray-100 md:dark:bg-zinc-700" : ""])
            }, [
              e("span", null, k(p.label), 1),
              p.badge ? (l(), a("span", I, k(p.badge), 1)) : b("", !0)
            ], 10, N))), 128))
          ])
        ])), 64))
      ], 2)
    ]));
  }
}), q = { class: "flex-1" }, T = /* @__PURE__ */ _({
  __name: "Fragment",
  setup(i) {
    const { setMenu: s } = H(), o = /* @__PURE__ */ Object.assign({ "./fragments/EditProfile.vue": () => import("./EditProfile-CZplTaq1.js"), "./fragments/Home.vue": () => import("./Home-aFm71GLv.js"), "./fragments/Orders.vue": () => import("./Orders-CpwCKzBb.js"), "./fragments/Returns.vue": () => import("./Returns-CYWCakyz.js") }), t = A(null), c = async () => {
      if (s.value.type === "Fragments") {
        const u = `./fragments/${s.value.value}.vue`;
        t.value = u in o ? (await o[u]()).default : (await o["./fragments/Home.vue"]()).default;
      } else
        t.value = (await o["./fragments/Home.vue"]()).default;
    };
    return c(), B(s, c), (u, d) => (l(), a("main", q, [
      e("div", {
        class: f(["bg-white dark:bg-zinc-800 dark:text-white rounded-b-2xl flex items-center justify-between gap-3 px-4 mb-4", x(s).value === "Home" ? "hidden" : "block md:hidden"])
      }, [
        e("div", {
          onClick: d[0] || (d[0] = (r) => s.value = { label: "Home", value: "Home", type: "Fragments" }),
          class: "h-12 flex flex-row flex-1 items-center gap-2 p-1 md:p-0 md:rounded-none"
        }, [...d[1] || (d[1] = [
          e("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15.75 19.5 8.25 12l7.5-7.5"
            })
          ], -1),
          e("p", { class: "font-semibold" }, "Back to home", -1)
        ])])
      ], 2),
      (l(), R($(t.value)))
    ]));
  }
}), h = "/noti.png", J = { class: "flex flex-col gap-2 h-screen" }, U = { class: "bg-white dark:bg-zinc-800 dark:text-white rounded-b-2xl flex items-center justify-between gap-3 px-4 md:p-0" }, K = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "size-6 md:hidden block dark:text-white"
}, Q = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
}, W = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18 18 6M6 6l12 12"
}, X = {
  __name: "Message",
  setup(i) {
    const { set_page: s } = M();
    return (o, t) => (l(), a("div", J, [
      e("div", U, [
        e("div", {
          onClick: t[0] || (t[0] = (c) => s.value = "DASHBOARD"),
          class: "h-12 flex flex-row flex-1 items-center gap-2 p-1 md:p-0 md:rounded-none"
        }, [...t[1] || (t[1] = [
          e("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "size-6"
          }, [
            e("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15.75 19.5 8.25 12l7.5-7.5"
            })
          ], -1),
          e("p", { class: "font-semibold" }, "Message", -1)
        ])]),
        t[2] || (t[2] = e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          class: "size-6 md:hidden block dark:text-white"
        }, [
          e("path", {
            "fill-rule": "evenodd",
            d: "M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z",
            "clip-rule": "evenodd"
          })
        ], -1)),
        (l(), a("svg", K, [
          m(e("path", Q, null, 512), [
            [g, !o.isMenuOpen]
          ]),
          m(e("path", W, null, 512), [
            [g, o.isMenuOpen]
          ])
        ]))
      ]),
      t[3] || (t[3] = y('<div class="flex-1 rounded-t-2xl bg-white dark:bg-zinc-800 p-4"><div class="bg-zinc-100 dark:bg-zinc-700 rounded-xl p-4 mt-4 flex flex-col gap-1"><p class="dark:text-white font-semibold leading-none">Looking for a gift? 😍</p><p class="text-zinc-500 dark:text-zinc-400 text-xs">we found it! Ozon certificated</p><p class="text-blue-500 text-xs cursor-pointer">learn more</p></div><div class="flex items-start gap-3 mt-4 bg-blue-50 rounded-2xl p-2"><img src="' + h + '" alt="notification icon" class="w-14 h-14 rounded-lg bg-blue-200 p-2"><div><p class="font-semibold leading-none">Safety</p><p class="text-zinc-500 dark:text-zinc-400 text-xs">login from new device</p></div></div><div class="flex items-start gap-3 mt-4 bg-green-50 rounded-2xl p-2"><img src="' + h + '" alt="notification icon" class="w-14 h-14 rounded-lg bg-green-200 p-2"><div><p class="font-semibold leading-none">Safety</p><p class="text-zinc-500 dark:text-zinc-400 text-xs">login from new device</p></div></div><div class="flex items-start gap-3 mt-4 bg-violet-50 rounded-2xl p-2"><img src="' + h + '" alt="notification icon" class="w-14 h-14 rounded-lg bg-violet-200 p-2"><div><p class="font-semibold leading-none">Safety</p><p class="text-zinc-500 dark:text-zinc-400 text-xs">login from new device</p></div></div></div>', 1))
    ]));
  }
}, Y = { class: "bg-[#f0f2f5] dark:bg-zinc-900 min-h-screen flex md:flex-row flex-col md:gap-6 md:p-6" }, ee = /* @__PURE__ */ _({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(i) {
    const { set_page: s } = M();
    return (async () => i._p.f.listen("msg", async (o) => {
      o.type === "theme:change" && (o.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))(), (o, t) => (l(), a("div", Y, [
      m(w(G, null, null, 512), [
        [g, x(s) === "DASHBOARD"]
      ]),
      m(w(T, null, null, 512), [
        [g, x(s) === "DASHBOARD"]
      ]),
      m(w(X, null, null, 512), [
        [g, x(s) === "MESSAGE"]
      ])
    ]));
  }
}), ne = async (i) => ({
  set: async (s) => {
    console.log(`--hydrator [${s.data.curr.type}]`);
    const t = O(ee, {
      _p: i,
      _$p: s
    }), c = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          i.f.call("msg", {
            type: "change",
            _p: i,
            _$p: s,
            custom: {}
          });
        }
      }
    }, u = document.getElementById(i.f.name("vue-root"));
    return t.mount(u), c;
  }
});
export {
  ne as hydrator,
  ne as index
};
