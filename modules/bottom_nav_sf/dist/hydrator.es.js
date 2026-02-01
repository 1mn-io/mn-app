import { d as x, o as i, c as b, a as e, F as h, r as g, n as l, b as w, e as _, f as v, g as k, h as C, t as f, i as y, j as M } from "./runtime-dom.esm-bundler-DJRVW5DP.js";
const z = { class: "lg:hidden pointer-events-none fixed inset-x-0 bottom-0 z-50" }, B = { class: "pointer-events-auto bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-md border-t border-gray-100 dark:border-white/5 pb-safe rounded-t-[24px] shadow-[0_-5px_20px_rgba(0,0,0,0.03)] dark:shadow-none transition-all duration-300" }, j = { class: "flex items-center justify-around h-[68px] px-2" }, L = ["onClick"], E = {
  key: 0,
  class: "absolute inset-0 bg-[#cb11ab]/5 dark:bg-[#cb11ab]/10 rounded-2xl scale-90 transition-transform duration-200"
}, H = {
  key: 0,
  class: "absolute -top-1 -right-2 bg-[#cb11ab] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white dark:ring-[#1a1a1a] shadow-sm"
}, I = { class: "flex-1 overflow-y-auto py-4 px-3" }, $ = { class: "space-y-1" }, D = {
  href: "#",
  class: "flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 active:scale-[0.98] transition-all group"
}, A = /* @__PURE__ */ x({
  __name: "navbar",
  setup(t) {
    const a = (d) => () => y("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, [y("path", { d })]), n = [
      { icon: a("m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"), label: "Home" },
      { icon: a("M4 6h16M4 12h16M4 18h16"), label: "Catalog" },
      { icon: a("m21 21-4.3-4.3 M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16"), label: "Search" },
      { icon: a("M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"), label: "Cart" },
      { icon: a("M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8"), label: "Profile" }
    ], o = _(0), s = w(() => o.value === 1), m = (d) => {
      o.value = o.value === d ? 0 : d;
    }, p = () => {
      o.value = 0;
    };
    return (d, c) => (i(), b("div", z, [
      e("div", B, [
        e("div", j, [
          (i(), b(h, null, g(n, (u, r) => e("button", {
            key: r,
            onClick: (O) => m(r),
            class: l(["flex-1 flex flex-col items-center justify-center gap-1.5 py-1 rounded-2xl transition-all duration-200 active:scale-95 group relative overflow-hidden", o.value === r ? "text-[#cb11ab]" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"])
          }, [
            o.value === r ? (i(), b("div", E)) : v("", !0),
            e("div", {
              class: l(["relative z-10 transition-transform duration-200", { "-translate-y-0.5": o.value === r }])
            }, [
              (i(), k(C(u.icon), {
                class: l(["w-6 h-6 transition-all duration-200", { "fill-[#cb11ab]/10": o.value === r }]),
                "stroke-width": o.value === r ? 2.5 : 2
              }, null, 8, ["stroke-width", "class"])),
              r === 3 ? (i(), b("span", H, " 3 ")) : v("", !0)
            ], 2),
            e("span", {
              class: l(["text-[10px] font-bold tracking-wide transition-opacity duration-200 z-10", o.value === r ? "opacity-100" : "opacity-80"])
            }, f(u.label), 3)
          ], 10, L)), 64))
        ])
      ]),
      e("aside", {
        class: l(["fixed inset-0 z-[100] pointer-events-auto", s.value ? "visible" : "invisible"])
      }, [
        e("div", {
          class: l(["absolute inset-0 bg-black/40 backdrop-blur-[3px] transition-opacity duration-300", s.value ? "opacity-100" : "opacity-0"]),
          onClick: p
        }, null, 2),
        e("div", {
          class: l(["absolute top-0 left-0 h-full w-[85%] max-w-[320px] bg-white dark:bg-[#121212] shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) flex flex-col rounded-r-[24px]", s.value ? "translate-x-0" : "-translate-x-full"])
        }, [
          e("div", { class: "h-20 flex items-end justify-between px-6 pb-4 bg-gradient-to-r from-[#f6f6f9] to-white dark:from-[#1a1a1a] dark:to-[#121212] border-b border-gray-100 dark:border-white/5" }, [
            c[1] || (c[1] = e("span", { class: "text-xl font-black italic tracking-tighter text-[#481173] dark:text-[#cb11ab]" }, "Catalog", -1)),
            e("button", {
              onClick: p,
              class: "p-2 -mr-2 text-gray-400 hover:text-[#cb11ab] transition-colors bg-white dark:bg-[#1a1a1a] rounded-full shadow-sm dark:shadow-none border border-gray-100 dark:border-white/5"
            }, [...c[0] || (c[0] = [
              e("svg", {
                class: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                e("path", {
                  d: "M6 18L18 6M6 6l12 12",
                  "stroke-width": "2.5",
                  "stroke-linecap": "round"
                })
              ], -1)
            ])])
          ]),
          e("div", I, [
            e("ul", $, [
              (i(), b(h, null, g(["Women", "Men", "Kids", "Home", "Beauty", "Electronics", "Toys", "Accessories"], (u) => e("li", { key: u }, [
                e("a", D, [
                  e("span", null, f(u), 1),
                  c[2] || (c[2] = e("svg", {
                    class: "w-4 h-4 text-gray-300 group-hover:text-[#cb11ab] transition-colors",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    e("path", {
                      d: "M9 5l7 7-7 7",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ], -1))
                ])
              ])), 64))
            ])
          ])
        ], 2)
      ], 2)
    ]));
  }
}), S = (t, a) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of a)
    n[o] = s;
  return n;
}, F = /* @__PURE__ */ S(A, [["__scopeId", "data-v-dbe09b69"]]), N = /* @__PURE__ */ x({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    return (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (a) => {
      console.log("_p.my.emitter.on", a);
    }), await t._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: t._p,
      _$p: t._$p
    }), t._p.f.listen("msg", async (a) => {
      if (console.log("_p.f.listen", a), a?.type === "change") {
        const n = a.custom?.theme;
        console.log("theme change detected:", n), n == "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), localStorage.setItem("theme", n);
      }
    }), setTimeout(async () => {
      await t._p.f.call("msg", {
        type: "on:change",
        _p: t._p,
        _$p: t._$p
      });
    }, 500)))(), (a, n) => (i(), k(F));
  }
}), V = async (t) => ({
  set: async (a) => {
    console.log(`--hydrator [${a.data.curr.type}]`);
    const o = M(N, {
      _p: t,
      _$p: a
    }), s = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: a,
            custom: {}
          });
        }
      }
    }, m = document.getElementById(t.f.name("vue-root"));
    return o.mount(m), s;
  }
});
export {
  V as hydrator,
  V as index
};
