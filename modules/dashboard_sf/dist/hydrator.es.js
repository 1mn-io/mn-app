import { r as h, d as g, o as s, c as l, a as x, F as p, b as v, e as d, t as m, f, n as _, w as k, g as w, h as F, s as S, i as y, j as R } from "./runtime-dom.esm-bundler-0qMN5c3K.js";
const z = h({ label: "Home", value: "Home", type: "Fragments" });
function b() {
  return { setMenu: z };
}
const B = { class: "md:w-64 w-full self-start md:bg-white dark:bg-zinc-800 rounded-xl md:p-4 space-y-6 md:overflow-visible overflow-y-auto max-h-[35vh] md:max-h-none" }, P = {
  key: 0,
  class: "hidden md:block px-3 text-sm font-semibold text-gray-900 dark:text-zinc-200"
}, C = ["onClick"], E = {
  key: 0,
  class: "text-xs bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-zinc-200 px-2 rounded"
}, H = /* @__PURE__ */ g({
  __name: "SideBar",
  setup(n) {
    const { setMenu: t } = b(), a = (e) => {
      e.type === "Fragments" ? (t.value = { label: e.label, value: e.value, type: e.type }, console.log("Set menu to fragment:", t.value)) : e.type === "Routes" ? console.log("Navigate to route:", e) : e.type === "Settings" && console.log("Set menu to settings:", e);
    }, r = (e) => t.value?.label === e.label, o = [
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
    return (e, u) => (s(), l("aside", B, [
      u[0] || (u[0] = x('<div class="hidden md:block"><div class="flex items-center flexrow gap-2"><img src="https://i.pinimg.com/736x/82/85/96/828596ef925a10e8c1a76d3a3be1d3e5.jpg" alt="Profile" class="w-10 h-10 rounded-full"><div><p class="text-sm text-white dark:text-zinc-200 font-semibold leading-none">John Doe</p><p class="text-sm text-gray-500">john.doe@example.com</p></div></div></div>', 1)),
      (s(), l(p, null, v(o, (i) => d("div", {
        key: i.title,
        class: "rounded-lg bg-white dark:bg-zinc-800"
      }, [
        i.title ? (s(), l("div", P, m(i.title), 1)) : f("", !0),
        d("ul", null, [
          (s(!0), l(p, null, v(i.items, (c) => (s(), l("li", {
            onClick: (N) => a(c),
            key: c.label,
            class: _(["flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-700", r(c) ? "bg-gray-100 dark:bg-zinc-700" : ""])
          }, [
            d("span", null, m(c.label), 1),
            c.badge ? (s(), l("span", E, m(c.badge), 1)) : f("", !0)
          ], 10, C))), 128))
        ])
      ])), 64))
    ]));
  }
}), $ = { class: "flex-1" }, j = /* @__PURE__ */ g({
  __name: "Fragment",
  setup(n) {
    const { setMenu: t } = b(), a = /* @__PURE__ */ Object.assign({ "./fragments/EditProfile.vue": () => import("./EditProfile-zd6Vfyue.js"), "./fragments/Home.vue": () => import("./Home-BendLID-.js"), "./fragments/Orders.vue": () => import("./Orders-C1CwDWzJ.js"), "./fragments/Returns.vue": () => import("./Returns-CmnkTEi-.js") }), r = S(null), o = async () => {
      if (t.value.type === "Fragments") {
        const e = `./fragments/${t.value.value}.vue`;
        r.value = e in a ? (await a[e]()).default : (await a["./fragments/Home.vue"]()).default;
      } else
        r.value = (await a["./fragments/Home.vue"]()).default;
    };
    return o(), k(t, o), (e, u) => (s(), l("main", $, [
      (s(), w(F(r.value)))
    ]));
  }
}), L = { class: "bg-[#f0f2f5] dark:bg-zinc-900 min-h-screen flex md:flex-row flex-col gap-6 md:p-6" }, M = /* @__PURE__ */ g({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(n) {
    return (async () => n._p.f.listen("msg", async (t) => {
      t.type === "theme:change" && (t.custom?.theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"));
    }))(), (t, a) => (s(), l("div", L, [
      y(H),
      y(j)
    ]));
  }
}), V = async (n) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const r = R(M, {
      _p: n,
      _$p: t
    }), o = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          n.f.call("msg", {
            type: "change",
            _p: n,
            _$p: t,
            custom: {}
          });
        }
      }
    }, e = document.getElementById(n.f.name("vue-root"));
    return r.mount(e), o;
  }
});
export {
  V as hydrator,
  V as index
};
