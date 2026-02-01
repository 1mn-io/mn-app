import { d as x, o as a, c as l, a as t, F as p, r as m, t as d, n as h, b, e as v, f as _ } from "./runtime-dom.esm-bundler-CWQPdnm9.js";
const k = { class: "bg-[#f6f6f9] dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 py-8 lg:py-12 mt-auto transition-colors duration-300 font-sans border-t border-gray-200 dark:border-gray-800" }, w = { class: "container mx-auto px-4 lg:px-6" }, B = { class: "flex flex-col lg:grid lg:grid-cols-4 lg:gap-8 mb-8" }, S = ["onClick"], C = { class: "text-[15px] lg:text-lg font-bold text-black dark:text-white transition-colors group-hover:text-[#cb11ab]" }, A = { class: "space-y-3 text-sm" }, j = {
  href: "#",
  class: "hover:text-[#cb11ab] dark:hover:text-[#d0299e] transition block py-1 lg:py-0"
}, D = { class: "flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 border-t border-gray-200 dark:border-gray-700 pt-8" }, E = { class: "w-full lg:w-auto" }, $ = { class: "grid grid-cols-2 gap-3 max-w-[400px] mx-auto lg:flex lg:max-w-none" }, G = { class: "text-left leading-none" }, P = { class: "text-[8px] opacity-70" }, z = { class: "font-bold text-xs whitespace-nowrap" }, F = { class: "flex gap-4" }, L = /* @__PURE__ */ x({
  __name: "footer",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const o = [
      {
        title: "Buyers",
        links: ["How to order", "Payment methods", "Delivery", "Return policy", "Rules of sale", "Questions and answers"]
      },
      {
        title: "Partners",
        links: ["Sell on Storefront", "Courier partnership", "Franchise point of issue", "Freight transport", "Digital goods"]
      },
      {
        title: "Company",
        links: ["About us", "Requisites", "Press center", "Contacts", "Bug bounty"]
      },
      {
        title: "Our Projects",
        links: ["WB Guru", "WB Stream", "WB Travel", "WB Digital"]
      }
    ], i = [
      { name: "App Store", sub: "Download on" },
      { name: "Google Play", sub: "Get it on" },
      { name: "AppGallery", sub: "Explore it on" },
      { name: "RuStore", sub: "Download on" }
    ], s = b(/* @__PURE__ */ new Set()), y = (r) => {
      s.value.has(r) ? s.value.delete(r) : s.value.add(r);
    }, g = (r) => s.value.has(r);
    return (r, c) => (a(), l("footer", k, [
      t("div", w, [
        t("div", B, [
          (a(), l(p, null, m(o, (n, u) => t("div", {
            key: u,
            class: "border-b border-gray-200 dark:border-gray-700 lg:border-none last:border-none"
          }, [
            t("button", {
              onClick: (f) => y(u),
              class: "w-full flex justify-between items-center py-4 lg:py-0 lg:mb-4 text-left focus:outline-none group"
            }, [
              t("h3", C, d(n.title), 1),
              (a(), l("svg", {
                class: h(["w-4 h-4 lg:hidden transition-transform duration-300 text-gray-400", { "rotate-180": g(u) }]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...c[0] || (c[0] = [
                t("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M19 9l-7 7-7-7"
                }, null, -1)
              ])], 2))
            ], 8, S),
            t("div", {
              class: h(["overflow-hidden transition-all duration-300 lg:h-auto lg:opacity-100 lg:block", g(u) ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0 lg:max-h-none"])
            }, [
              t("ul", A, [
                (a(!0), l(p, null, m(n.links, (f) => (a(), l("li", { key: f }, [
                  t("a", j, d(f), 1)
                ]))), 128))
              ])
            ], 2)
          ])), 64))
        ]),
        t("div", D, [
          t("div", E, [
            t("div", $, [
              (a(), l(p, null, m(i, (n) => t("button", {
                key: n.name,
                class: "bg-black dark:bg-[#2b2b2b] text-white p-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-80 transition min-h-[44px]"
              }, [
                c[1] || (c[1] = t("svg", {
                  class: "w-5 h-5 flex-shrink-0",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  t("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" })
                ], -1)),
                t("div", G, [
                  t("div", P, d(n.sub), 1),
                  t("div", z, d(n.name), 1)
                ])
              ])), 64))
            ]),
            c[2] || (c[2] = t("div", { class: "text-center lg:text-left mt-6 text-xs text-gray-400 dark:text-gray-500 space-y-2" }, [
              t("p", null, "© Storefront 2004-2026. All rights reserved."),
              t("p", null, "Application recommended for users over 18 years of age")
            ], -1))
          ]),
          t("div", F, [
            (a(), l(p, null, m(["VK", "OK", "TG"], (n) => t("a", {
              key: n,
              href: "#",
              class: "w-10 h-10 rounded-full bg-gray-200 dark:bg-[#2b2b2b] text-gray-600 dark:text-gray-300 hover:bg-[#cb11ab] hover:text-white transition flex items-center justify-center font-bold text-xs"
            }, d(n), 1)), 64))
          ])
        ])
      ])
    ]));
  }
}), R = /* @__PURE__ */ x({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    return (async () => (e._p.my.emitter = e._p.f.new_emitter(), e._p.my.emitter.on("msg", async (o) => {
      console.log("_p.my.emitter.on", o);
    }), await e._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: e._p,
      _$p: e._$p
    }), e._p.f.listen("msg", async (o) => {
      if (console.log("_p.f.listen", o), o.type === "theme:change") {
        const i = o.custom?.theme;
        console.log("Applying theme:", i);
        const s = document.documentElement;
        i === "dark" ? s.classList.add("dark") : s.classList.remove("dark");
      }
    }), setTimeout(async () => {
      await e._p.f.call("msg", {
        type: "on:change",
        _p: e._p,
        _$p: e._$p
      });
    }, 500)))(), (o, i) => (a(), v(L));
  }
}), O = async (e) => ({
  set: async (o) => {
    console.log(`--hydrator [${o.data.curr.type}]`);
    const s = _(R, {
      _p: e,
      _$p: o
    }), y = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: o,
            custom: {}
          });
        }
      }
    }, g = document.getElementById(e.f.name("vue-root"));
    return s.mount(g), y;
  }
});
export {
  O as hydrator,
  O as index
};
