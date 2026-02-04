import { d as v, o as k, a as w, b as r, c as a, e, F as g, r as p, f as b, t as d, n as _, g as B, h as S, i as E } from "./runtime-dom.esm-bundler-DI1G6KE3.js";
const C = { class: "bg-[#f6f6f9] dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 py-8 lg:py-12 mt-auto border-t border-gray-200 dark:border-gray-800 transition-colors duration-300" }, A = { class: "max-w-[1440px] mx-auto px-4 lg:px-6" }, D = { class: "flex flex-col lg:grid lg:grid-cols-4 lg:gap-8 mb-8" }, j = ["onClick"], L = { class: "text-[15px] lg:text-lg font-bold text-black dark:text-white" }, P = { class: "space-y-3 text-sm" }, $ = {
  href: "#",
  class: "hover:text-[#cb11ab] transition block py-1"
}, G = { class: "flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 border-t border-gray-200 dark:border-gray-700 pt-8" }, O = { class: "w-full lg:w-auto" }, R = { class: "grid grid-cols-2 gap-3 max-w-[400px] mx-auto lg:flex lg:max-w-none" }, W = { class: "text-left leading-none" }, z = { class: "text-[8px] opacity-70" }, F = { class: "font-bold text-xs" }, T = { class: "flex gap-4" }, I = 768, K = /* @__PURE__ */ v({
  __name: "footer",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    const s = b(!1), n = () => {
      s.value = window.innerWidth >= I;
    };
    k(() => {
      n(), window.addEventListener("resize", n);
    }), w(() => {
      window.removeEventListener("resize", n);
    });
    const l = [
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
    ], y = [
      { name: "App Store", sub: "Download on" },
      { name: "Google Play", sub: "Get it on" },
      { name: "AppGallery", sub: "Explore it on" },
      { name: "RuStore", sub: "Download on" }
    ], i = b(/* @__PURE__ */ new Set()), f = (c) => {
      s.value || (i.value.has(c) ? i.value.delete(c) : i.value.add(c));
    }, x = (c) => s.value ? !0 : i.value.has(c);
    return (c, u) => (r(), a("footer", C, [
      e("div", A, [
        e("div", D, [
          (r(), a(g, null, p(l, (o, m) => e("div", {
            key: m,
            class: "border-b lg:border-none border-gray-200 dark:border-gray-700"
          }, [
            e("button", {
              onClick: (h) => f(m),
              class: "w-full flex justify-between items-center py-4 lg:py-0 lg:mb-4 text-left"
            }, [
              e("h3", L, d(o.title), 1),
              s.value ? B("", !0) : (r(), a("svg", {
                key: 0,
                class: _(["w-4 h-4 transition-transform duration-300", { "rotate-180": x(m) }]),
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [...u[0] || (u[0] = [
                e("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M19 9l-7 7-7-7"
                }, null, -1)
              ])], 2))
            ], 8, j),
            e("div", {
              class: _(["overflow-hidden transition-all duration-300", x(m) ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"])
            }, [
              e("ul", P, [
                (r(!0), a(g, null, p(o.links, (h) => (r(), a("li", { key: h }, [
                  e("a", $, d(h), 1)
                ]))), 128))
              ])
            ], 2)
          ])), 64))
        ]),
        e("div", G, [
          e("div", O, [
            e("div", R, [
              (r(), a(g, null, p(y, (o) => e("button", {
                key: o.name,
                class: "bg-black dark:bg-[#2b2b2b] text-white p-2 rounded-lg flex items-center justify-center gap-2 min-h-[44px]"
              }, [
                e("div", W, [
                  e("div", z, d(o.sub), 1),
                  e("div", F, d(o.name), 1)
                ])
              ])), 64))
            ]),
            u[1] || (u[1] = e("div", { class: "text-center lg:text-left mt-6 text-xs text-gray-400 space-y-2" }, [
              e("p", null, "© Storefront 2004–2026. All rights reserved."),
              e("p", null, "Application recommended for users over 18 years of age")
            ], -1))
          ]),
          e("div", T, [
            (r(), a(g, null, p(["VK", "OK", "TG"], (o) => e("a", {
              key: o,
              href: "#",
              class: "w-10 h-10 rounded-full bg-gray-200 dark:bg-[#2b2b2b] flex items-center justify-center font-bold text-xs"
            }, d(o), 1)), 64))
          ])
        ])
      ])
    ]));
  }
}), M = /* @__PURE__ */ v({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    return (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (s) => {
      console.log("_p.my.emitter.on", s);
    }), await t._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: t._p,
      _$p: t._$p
    }), t._p.f.listen("msg", async (s) => {
      if (console.log("_p.f.listen", s), s.type === "theme:change") {
        const n = s.custom?.theme;
        console.log("Applying theme:", n);
        const l = document.documentElement;
        n === "dark" ? l.classList.add("dark") : l.classList.remove("dark");
      }
    }), setTimeout(async () => {
      await t._p.f.call("msg", {
        type: "on:change",
        _p: t._p,
        _$p: t._$p
      });
    }, 500)))(), (s, n) => (r(), S(K));
  }
}), V = async (t) => ({
  set: async (s) => {
    console.log(`--hydrator [${s.data.curr.type}]`);
    const l = E(M, {
      _p: t,
      _$p: s
    }), y = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: s,
            custom: {}
          });
        }
      }
    }, i = document.getElementById(t.f.name("vue-root"));
    return l.mount(i), y;
  }
});
export {
  V as hydrator,
  V as index
};
