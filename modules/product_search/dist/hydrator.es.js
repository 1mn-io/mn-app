import { d as j, r as i, c as X, o as Z, a as G, b as s, e as r, f as a, g as Y, h as x, i as A, t as w, n as _, F as $, j as U, w as F, v as Q, k as C, l as W, T as q, m as P, p as K } from "./runtime-dom.esm-bundler-CbE7ofbY.js";
const H = { class: "relative flex items-center group px-4 md:px-0" }, ee = { class: "hidden md:block relative flex-shrink-0 h-full" }, te = {
  key: 0,
  class: "absolute top-full left-0 z-[60] mt-1 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-xl py-2"
}, ae = ["onClick"], ne = { class: "relative flex-1" }, re = ["placeholder"], oe = ["disabled"], se = {
  key: 0,
  class: "absolute top-full left-0 right-0 z-50 mt-2 mx-4 md:mx-0 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
}, le = {
  key: 0,
  class: "p-6 flex justify-center"
}, ie = {
  key: 1,
  class: "max-h-[60vh] overflow-y-auto"
}, de = { class: "px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-b dark:border-gray-800 flex justify-between items-center" }, ue = { class: "text-[10px] text-pink-600 font-bold uppercase" }, ce = { class: "p-2" }, pe = ["onClick"], ge = { class: "flex-1" }, ve = ["innerHTML"], he = {
  key: 0,
  class: "text-[10px] text-gray-400 uppercase"
}, fe = /* @__PURE__ */ j({
  __name: "SearchBar",
  props: {
    _p: {},
    _$p: {},
    _$cb: {},
    config: {}
  },
  setup(u) {
    const f = u, v = i(!1), k = () => {
      v.value = window.innerWidth < 768;
    }, y = i([
      { id: "all", name: "All Categories" }
    ]), c = i(y.value[0]), p = i(!1), I = (n) => {
      c.value = n, p.value = !1, o.value && z();
    }, E = async () => {
      try {
        const t = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_filter_data", {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
          },
          body: JSON.stringify({
            raw_text: "_",
            collection: "products",
            sattr_k: "category",
            sattr_v: ""
          })
        })).json();
        if (t.success && t.filters) {
          const h = t.filters.find((b) => b.typ === "category");
          if (h && h.l) {
            const b = h.l.map((O) => ({
              id: O.name.toLowerCase(),
              // Used for API calls/URLs
              name: O.name
              // Used for Display
            }));
            y.value = [
              { id: "all", name: "All Categories" },
              ...b
            ];
          }
        }
      } catch (n) {
        console.error("Failed to fetch categories:", n);
      }
    }, o = i(""), g = i(!1), m = i(!1), d = i([]), l = i(-1), N = i(null), V = i(), T = X(() => ({
      placeholder: "Search products...",
      debounceTime: 300,
      maxSuggestions: 8,
      theme: "light",
      ...f.config
    })), B = () => {
      if (clearTimeout(N.value), l.value = -1, !o.value.trim()) {
        g.value = !1;
        return;
      }
      m.value = !0, g.value = !0, N.value = setTimeout(() => z(), T.value.debounceTime);
    }, z = async () => {
      try {
        const t = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=search_suggestion", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk" },
          body: JSON.stringify({
            search_text: o.value,
            collection: "products",
            // Use the selected category in the search payload
            category_context: v.value ? "all" : c.value.id
          })
        })).json();
        t.success && (d.value = (t.l || []).slice(0, T.value.maxSuggestions));
      } catch (n) {
        console.error(n);
      } finally {
        m.value = !1;
      }
    }, D = (n, e) => {
      if (!e || !n) return n;
      const t = new RegExp(`(${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
      return n.replace(t, '<span class="font-bold text-pink-600">$1</span>');
    }, S = () => {
      if (l.value >= 0 && d.value[l.value]) {
        L(d.value[l.value]);
        return;
      }
      if (!o.value.trim()) return;
      g.value = !1;
      let e = `/search?q=${encodeURIComponent(o.value.trim())}`;
      c.value.id !== "all" && (e += `&category=${c.value.id}`), window.location.href = e;
    }, L = (n) => {
      n.slug && (g.value = !1, o.value = n.title, window.location.href = n.slug);
    }, R = () => {
      o.value = "", d.value = [], g.value = !1;
    }, M = (n) => {
      d.value.length && (n === "down" ? l.value = (l.value + 1) % d.value.length : l.value = l.value <= 0 ? d.value.length - 1 : l.value - 1);
    }, J = () => {
      g.value = !1, l.value = -1;
    };
    return Z(() => {
      k(), E(), window.addEventListener("resize", k), document.addEventListener("click", (n) => {
        n.target.closest(".search-container") || (J(), p.value = !1);
      });
    }), G(() => {
      window.removeEventListener("resize", k);
    }), (n, e) => (r(), s("div", {
      class: _(["search-container w-full max-w-4xl mx-auto", { dark: T.value.theme === "dark" }])
    }, [
      a("div", H, [
        a("div", ee, [
          a("button", {
            onClick: e[0] || (e[0] = (t) => p.value = !p.value),
            class: "flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 border-y border-l border-gray-300 dark:border-gray-700 rounded-l-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap"
          }, [
            A(w(c.value.name) + " ", 1),
            (r(), s("svg", {
              class: _(["w-4 h-4 transition-transform", { "rotate-180": p.value }]),
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [...e[5] || (e[5] = [
              a("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              }, null, -1)
            ])], 2))
          ]),
          p.value ? (r(), s("div", te, [
            (r(!0), s($, null, U(y.value, (t) => (r(), s("button", {
              key: t.id,
              onClick: (h) => I(t),
              class: "w-full text-left px-4 py-2 text-sm hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:text-pink-600 dark:text-gray-300 transition-colors"
            }, w(t.name), 9, ae))), 128))
          ])) : x("", !0)
        ]),
        a("div", ne, [
          F(a("input", {
            ref_key: "searchInput",
            ref: V,
            "onUpdate:modelValue": e[1] || (e[1] = (t) => o.value = t),
            placeholder: `Search ${v.value ? "products" : "in " + c.value.name}...`,
            onInput: B,
            onFocus: e[2] || (e[2] = (t) => g.value = !0),
            onKeydown: [
              C(S, ["enter"]),
              C(J, ["escape"]),
              e[3] || (e[3] = C((t) => M("down"), ["down"])),
              e[4] || (e[4] = C((t) => M("up"), ["up"]))
            ],
            class: _([
              "w-full pl-4 pr-12 py-3 text-sm focus:outline-none dark:bg-gray-900 dark:text-white placeholder-gray-400 transition-all",
              "border dark:border-gray-700",
              // Base border for mobile
              "rounded-l-lg md:rounded-none md:border-y md:border-x-0"
              // Reset on Desktop to sandwich between category and search button
            ])
          }, null, 40, re), [
            [Q, o.value]
          ]),
          o.value ? (r(), s("button", {
            key: 0,
            onClick: R,
            class: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-600"
          }, [...e[6] || (e[6] = [
            a("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              a("path", {
                d: "M6 18L18 6M6 6l12 12",
                "stroke-width": "2"
              })
            ], -1)
          ])])) : x("", !0)
        ]),
        a("button", {
          onClick: S,
          disabled: !o.value,
          class: "flex-shrink-0 px-5 md:px-6 py-3 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 dark:disabled:bg-gray-800 text-white font-bold text-sm uppercase tracking-wide rounded-r-lg shadow-lg transition-all active:scale-95"
        }, [...e[7] || (e[7] = [
          a("svg", {
            class: "w-5 h-5 md:hidden",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            a("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            })
          ], -1),
          a("span", { class: "hidden md:block" }, "Search", -1)
        ])], 8, oe),
        Y(q, { name: "slide-up" }, {
          default: W(() => [
            g.value && (d.value.length > 0 || m.value) ? (r(), s("div", se, [
              m.value ? (r(), s("div", le, [...e[8] || (e[8] = [
                a("div", { class: "w-6 h-6 border-2 border-pink-500 border-t-transparent rounded-full animate-spin" }, null, -1)
              ])])) : (r(), s("div", ie, [
                a("div", de, [
                  e[9] || (e[9] = a("h3", { class: "text-[10px] font-black uppercase tracking-widest text-gray-500" }, "Suggested Results", -1)),
                  a("span", ue, w(d.value.length) + " found", 1)
                ]),
                a("div", ce, [
                  (r(!0), s($, null, U(d.value, (t, h) => (r(), s("button", {
                    key: h,
                    onClick: (b) => L(t),
                    class: _(["flex items-center w-full p-3 rounded-lg text-left transition-all", l.value === h ? "bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-400" : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"])
                  }, [
                    e[10] || (e[10] = a("div", { class: "w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3 flex-shrink-0" }, [
                      a("svg", {
                        class: "w-4 h-4 text-gray-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24"
                      }, [
                        a("path", {
                          d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                          "stroke-width": "2"
                        })
                      ])
                    ], -1)),
                    a("div", ge, [
                      a("span", {
                        class: "text-sm font-medium",
                        innerHTML: D(t.title, o.value)
                      }, null, 8, ve),
                      t.category ? (r(), s("p", he, w(t.category), 1)) : x("", !0)
                    ])
                  ], 10, pe))), 128))
                ])
              ]))
            ])) : x("", !0)
          ]),
          _: 1
        })
      ])
    ], 2));
  }
}), ye = /* @__PURE__ */ j({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(u) {
    return (f, v) => (r(), P(fe, {
      _p: u._p,
      _$p: u._$p,
      _$cb: u._$cb
    }, null, 8, ["_p", "_$p", "_$cb"]));
  }
}), me = async (u) => ({
  set: async (f, v) => {
    console.log(`--hydrator [${f.data.curr.type}]`);
    const y = K(ye, {
      _p: u,
      _$p: f,
      _$cb: v
    }), c = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          v?.change({ _$p: f });
        }
      }
    }, p = document.getElementById(u.f.name("vue-root"));
    return y.mount(p), c;
  }
});
export {
  me as hydrator,
  me as index
};
