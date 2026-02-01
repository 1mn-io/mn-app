import { d as R, o as s, c as r, a as e, b as O, t as y, n as I, e as m, w, F as k, r as C, f as u, T as z, g as $, v as E, h as f, i as Z, j as W, k as G } from "./runtime-dom.esm-bundler-sAtSPiO9.js";
const P = { class: "w-full text-white font-sans relative transition-colors duration-300" }, X = { class: "relative z-10 w-full max-w-[1440px] mx-auto" }, Y = { class: "hidden lg:flex justify-between items-center px-6 py-2 text-[13px] tracking-wide" }, K = { class: "flex items-center gap-5 relative" }, Q = { class: "relative" }, q = { class: "uppercase font-bold text-[13px]" }, ee = {
  key: 0,
  class: "absolute right-0 top-full mt-2 w-36 bg-white dark:bg-[#2b2b2b] rounded-xl shadow-2xl py-1.5 z-50 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
}, te = ["onClick"], oe = { class: "text-[11px] opacity-60 font-mono" }, ae = { class: "flex flex-wrap items-center gap-4 px-4 pb-4 pt-2.5 lg:pt-2.5 lg:gap-6 relative z-30" }, se = { class: "order-3 w-full mt-2 lg:order-none lg:mt-0 lg:flex-1 relative group z-50" }, re = { class: "relative" }, le = {
  key: 0,
  class: "hidden lg:block absolute top-[50px] left-0 w-full bg-white text-gray-800 rounded-b-[25px] shadow-2xl overflow-hidden z-[60] border border-gray-100"
}, ne = { class: "max-h-[420px] overflow-y-auto" }, ie = ["onClick"], ce = ["innerHTML"], de = {
  key: 0,
  class: "px-6 py-5 text-gray-400 text-[13px] flex items-center gap-2"
}, ue = {
  key: 0,
  class: "fixed inset-0 bg-white z-[999] flex flex-col lg:hidden"
}, pe = { class: "flex items-center gap-3 p-3.5 border-b border-gray-200 shadow-sm bg-white" }, fe = { class: "flex-1 relative" }, ve = { class: "flex-1 overflow-y-auto bg-white" }, ge = {
  key: 0,
  class: "divide-y divide-gray-50"
}, xe = ["onClick"], he = ["innerHTML"], be = {
  key: 1,
  class: "p-8 text-center text-gray-400"
}, ye = {
  key: 2,
  class: "p-8 text-center text-gray-400"
}, me = {
  key: 0,
  class: "fixed top-0 left-0 h-full w-[340px] bg-white dark:bg-[#1a1a1a] z-[101] shadow-2xl flex flex-col text-gray-800 dark:text-gray-200"
}, we = { class: "flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#f6f6f9] to-[#ffffff] dark:from-[#252525] dark:to-[#1f1f1f] border-b border-gray-100 dark:border-gray-800" }, ke = { class: "flex-1 overflow-y-auto py-1" }, Ce = { class: "flex flex-col" }, ze = {
  href: "#",
  class: "block px-6 py-3.5 font-semibold text-[15.5px] hover:text-[#cb11ab] hover:bg-gradient-to-r hover:from-[#f6f6f9] hover:to-transparent dark:hover:from-[#2a2a2a] dark:hover:to-transparent transition-all flex items-center justify-between"
}, _e = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=search_suggestion", Me = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", Se = /* @__PURE__ */ R({
  __name: "header",
  props: {
    _p: {},
    _$p: {}
  },
  setup(a) {
    const l = f(!1), p = [
      "Women",
      "Men",
      "Shoes",
      "Children",
      "Electronics",
      "Home",
      "Beauty",
      "Accessories",
      "Appliances",
      "Toys",
      "Sport",
      "Auto",
      "Books",
      "Stationery"
    ], n = f(!1), v = f("RUB"), _ = [
      { code: "RUB", label: "Russian Ruble" },
      { code: "BYN", label: "Belarusian Ruble" },
      { code: "KZT", label: "Kazakhstani Tenge" },
      { code: "AMD", label: "Armenian Dram" },
      { code: "KGS", label: "Kyrgyzstani Som" },
      { code: "UZS", label: "Uzbekistani Som" }
    ], M = () => {
      n.value = !n.value;
    }, U = (d) => {
      v.value = d.code, n.value = !1, a._p.my && a._p.my.emitter && a._p.my.emitter.emit("msg", { type: "currency:change", value: d.code });
    }, i = f(""), c = f([]), x = f(!1), g = f(!1), h = f(!1), S = f(null);
    let B = null;
    const T = () => {
      if (B && clearTimeout(B), i.value.length < 2) {
        c.value = [], g.value = !1;
        return;
      }
      h.value || (g.value = !0), x.value = !0, B = setTimeout(async () => {
        await V(i.value), x.value = !1;
      }, 300);
    }, V = async (d) => {
      try {
        const t = await fetch(_e, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Me}`
          },
          body: JSON.stringify({ search_text: d })
        });
        if (!t.ok) throw new Error("Network response was not ok");
        const o = await t.json();
        console.log("Full API Response:", o), o && o.l && Array.isArray(o.l) ? c.value = o.l : c.value = [];
      } catch (t) {
        console.error("Search API Error:", t), c.value = [];
      }
    }, L = (d) => {
      if (!i.value) return d;
      const t = new RegExp(`(${i.value})`, "gi");
      return d.replace(t, '<span class="font-bold text-[#cb11ab]">$1</span>');
    }, N = (d) => {
      i.value = d, j(), A(), console.log("Searching for:", d);
    }, D = () => {
      i.value.length >= 2 && c.value.length > 0 && (g.value = !0);
    }, j = () => {
      g.value = !1;
    }, H = () => {
      h.value = !0, Z(() => {
        S.value?.focus();
      });
    }, A = () => {
      h.value = !1;
    }, J = () => {
      i.value = "", c.value = [], S.value?.focus();
    };
    return (d, t) => (s(), r("header", P, [
      t[27] || (t[27] = e("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,_#cb11ab_0%,_#6c1887_35%,_#481173_100%)] z-0 transition-opacity" }, null, -1)),
      e("div", X, [
        e("div", Y, [
          t[9] || (t[9] = O('<div class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" data-v-87ec7765><svg class="w-3.5 h-3.5 text-white/90" fill="currentColor" viewBox="0 0 24 24" data-v-87ec7765><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-87ec7765></path></svg><span class="border-b border-dashed border-white/50 hover:border-white transition-colors" data-v-87ec7765>New Delhi</span></div><div class="flex gap-7 text-white/95 font-medium" data-v-87ec7765><a href="#" class="hover:text-white transition-colors relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#ffd900] after:opacity-0 hover:after:opacity-100 after:transition-opacity" data-v-87ec7765>Wibes</a><a href="#" class="hover:text-white transition-colors" data-v-87ec7765>Hotels</a><a href="#" class="hover:text-white transition-colors" data-v-87ec7765>Flights</a><a href="#" class="hover:text-white transition-colors" data-v-87ec7765>Trends</a><a href="#" class="hover:text-white transition-colors" data-v-87ec7765>Brands</a></div>', 2)),
          e("div", K, [
            t[8] || (t[8] = e("span", { class: "opacity-90 hover:opacity-100 cursor-pointer transition-opacity text-[12px]" }, "Work at WB", -1)),
            e("div", Q, [
              e("button", {
                onClick: M,
                class: "flex items-center gap-1.5 cursor-pointer hover:opacity-90 focus:outline-none transition-opacity"
              }, [
                e("span", q, y(v.value), 1),
                (s(), r("svg", {
                  class: I(["w-3.5 h-3.5 transition-transform duration-200", { "rotate-180": n.value }]),
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...t[6] || (t[6] = [
                  e("path", { d: "M7 10l5 5 5-5z" }, null, -1)
                ])], 2))
              ]),
              m(z, { name: "fade-scale" }, {
                default: w(() => [
                  n.value ? (s(), r("div", ee, [
                    t[7] || (t[7] = e("div", { class: "px-3 py-1.5 text-[10px] text-gray-400 uppercase tracking-wider font-bold" }, "Currency", -1)),
                    (s(), r(k, null, C(_, (o) => e("button", {
                      key: o.code,
                      onClick: (b) => U(o),
                      class: I(["w-full text-left px-3 py-2 hover:bg-[#f6f6f9] dark:hover:bg-[#3d3d3d] flex items-center justify-between text-[13px] transition-colors", { "text-[#cb11ab] font-bold bg-[#f6f6f9]/50": v.value === o.code }])
                    }, [
                      e("span", null, y(o.label), 1),
                      e("span", oe, y(o.code), 1)
                    ], 10, te)), 64))
                  ])) : u("", !0)
                ]),
                _: 1
              }),
              n.value ? (s(), r("div", {
                key: 0,
                onClick: t[0] || (t[0] = (o) => n.value = !1),
                class: "fixed inset-0 z-40 cursor-default"
              })) : u("", !0)
            ])
          ])
        ]),
        e("div", ae, [
          t[15] || (t[15] = e("a", {
            href: "/",
            class: "flex-shrink-0 text-[40px] font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#ffd900] via-[#ffed4e] to-[#e6ac00] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] pr-2"
          }, " wb ", -1)),
          e("button", {
            onClick: t[1] || (t[1] = (o) => l.value = !0),
            class: "hidden lg:flex items-center justify-center w-11 h-11 border-2 border-white/40 rounded-xl hover:bg-white/15 hover:border-white/60 transition-all flex-shrink-0"
          }, [...t[10] || (t[10] = [
            e("div", { class: "flex flex-col gap-[4.5px] w-5" }, [
              e("span", { class: "h-[2px] w-full bg-white rounded-full" }),
              e("span", { class: "h-[2px] w-full bg-white rounded-full" }),
              e("span", { class: "h-[2px] w-full bg-white rounded-full" })
            ], -1)
          ])]),
          e("div", se, [
            e("div", re, [
              $(e("input", {
                "onUpdate:modelValue": t[2] || (t[2] = (o) => i.value = o),
                onInput: T,
                onFocus: D,
                type: "text",
                placeholder: "Search on Wildberries",
                class: I(["w-full h-[50px] pl-6 pr-14 rounded-[25px] bg-white/20 text-white placeholder:text-white/80 border-2 border-white/30 lg:bg-white lg:text-gray-800 lg:placeholder:text-gray-400 focus:outline-none focus:bg-white focus:text-gray-800 lg:focus:ring-2 lg:focus:ring-[#cb11ab] lg:focus:border-transparent transition-all shadow-lg text-[15px] truncate font-normal", { "lg:rounded-b-none lg:shadow-none": g.value && c.value.length > 0 }])
              }, null, 34), [
                [E, i.value]
              ]),
              e("div", {
                onClick: H,
                class: "absolute inset-0 lg:hidden cursor-text z-10"
              }),
              t[11] || (t[11] = e("button", { class: "absolute right-5 top-1/2 -translate-y-1/2 text-white lg:text-gray-400 lg:hover:text-[#cb11ab] transition-colors z-20" }, [
                e("svg", {
                  class: "w-[22px] h-[22px]",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  e("path", { d: "M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z" }),
                  e("path", { d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" })
                ])
              ], -1))
            ]),
            g.value && c.value.length > 0 ? (s(), r("div", le, [
              e("ul", ne, [
                (s(!0), r(k, null, C(c.value, (o, b) => (s(), r("li", {
                  key: b,
                  onClick: (F) => N(o.title),
                  class: "px-6 py-3 hover:bg-[#f6f6f9] cursor-pointer flex items-center gap-3.5 transition-colors border-b border-gray-50 last:border-b-0 group"
                }, [
                  t[12] || (t[12] = e("svg", {
                    class: "w-[18px] h-[18px] text-gray-300 group-hover:text-[#cb11ab] transition-colors flex-shrink-0",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    })
                  ], -1)),
                  e("span", {
                    class: "text-[14.5px] leading-tight flex-1",
                    innerHTML: L(o.title)
                  }, null, 8, ce),
                  t[13] || (t[13] = e("svg", {
                    class: "w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 flex-shrink-0",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M5 10l7-7m0 0l7 7m-7-7v18"
                    })
                  ], -1))
                ], 8, ie))), 128))
              ]),
              x.value ? (s(), r("div", de, [...t[14] || (t[14] = [
                e("div", { class: "inline-block animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-[#cb11ab]" }, null, -1),
                e("span", null, "Searching...", -1)
              ])])) : u("", !0)
            ])) : u("", !0),
            g.value ? (s(), r("div", {
              key: 1,
              onClick: j,
              class: "fixed inset-0 z-40 bg-transparent"
            })) : u("", !0)
          ]),
          t[16] || (t[16] = O('<nav class="flex items-center gap-2 lg:gap-5 ml-auto order-2 lg:order-none" data-v-87ec7765><a href="#" class="flex flex-col items-center gap-1 group min-w-[64px] hover:scale-105 transition-transform" data-v-87ec7765><svg class="w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24" data-v-87ec7765><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-87ec7765></path></svg><span class="text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" data-v-87ec7765>Addresses</span></a><a href="#" class="flex flex-col items-center gap-1 group min-w-[64px] hover:scale-105 transition-transform" data-v-87ec7765><svg class="w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24" data-v-87ec7765><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-87ec7765></path></svg><span class="text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" data-v-87ec7765>Log in</span></a><a href="#" class="flex flex-col items-center gap-1 group min-w-[64px] relative hover:scale-105 transition-transform" data-v-87ec7765><div class="relative" data-v-87ec7765><svg class="w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24" data-v-87ec7765><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.83 14.83 5.37 16 6.5 16H19v-2H7.42c-.14 0-.25-.11-.25-.25L7.1 13z" data-v-87ec7765></path></svg><span class="absolute -top-1 -right-2 bg-[#f44336] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#481173] min-w-[18px] text-center shadow-md" data-v-87ec7765>9</span></div><span class="text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" data-v-87ec7765>Cart</span></a></nav>', 1))
        ])
      ]),
      m(z, { name: "fade-up" }, {
        default: w(() => [
          h.value ? (s(), r("div", ue, [
            e("div", pe, [
              e("button", {
                onClick: A,
                class: "p-2 -ml-2 text-gray-500 hover:text-gray-700 transition-colors"
              }, [...t[17] || (t[17] = [
                e("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  "stroke-width": "2.5"
                }, [
                  e("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M15 19l-7-7 7-7"
                  })
                ], -1)
              ])]),
              e("div", fe, [
                $(e("input", {
                  ref_key: "mobileInputRef",
                  ref: S,
                  "onUpdate:modelValue": t[3] || (t[3] = (o) => i.value = o),
                  onInput: T,
                  type: "text",
                  placeholder: "Search...",
                  class: "w-full h-11 pl-4 pr-10 bg-[#f6f6f9] rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cb11ab] focus:bg-white transition-all text-[15px]"
                }, null, 544), [
                  [E, i.value]
                ]),
                i.value ? (s(), r("button", {
                  key: 0,
                  onClick: J,
                  class: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                }, [...t[18] || (t[18] = [
                  e("svg", {
                    class: "w-4.5 h-4.5",
                    fill: "currentColor",
                    viewBox: "0 0 20 20"
                  }, [
                    e("path", {
                      "fill-rule": "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                      "clip-rule": "evenodd"
                    })
                  ], -1)
                ])])) : u("", !0)
              ]),
              t[19] || (t[19] = e("button", { class: "text-[#cb11ab] font-semibold text-[14px] px-2" }, "Search", -1))
            ]),
            e("div", ve, [
              c.value.length > 0 ? (s(), r("ul", ge, [
                (s(!0), r(k, null, C(c.value, (o, b) => (s(), r("li", {
                  key: b,
                  onClick: (F) => N(o.title),
                  class: "flex items-center gap-4 px-4 py-3.5 active:bg-[#f6f6f9] transition-colors"
                }, [
                  t[20] || (t[20] = e("svg", {
                    class: "w-[19px] h-[19px] text-gray-300 flex-shrink-0",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    })
                  ], -1)),
                  e("span", {
                    class: "text-[15px] text-gray-800 flex-1 leading-tight",
                    innerHTML: L(o.title)
                  }, null, 8, he),
                  t[21] || (t[21] = e("svg", {
                    class: "w-4 h-4 text-gray-300 ml-auto -rotate-45 flex-shrink-0",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2"
                  }, [
                    e("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M5 10l7-7m0 0l7 7m-7-7v18"
                    })
                  ], -1))
                ], 8, xe))), 128))
              ])) : x.value ? (s(), r("div", be, [...t[22] || (t[22] = [
                e("div", { class: "inline-block animate-spin rounded-full h-7 w-7 border-2 border-gray-200 border-t-[#cb11ab]" }, null, -1),
                e("p", { class: "mt-3 text-[13px]" }, "Searching...", -1)
              ])])) : i.value.length > 0 ? (s(), r("div", ye, [...t[23] || (t[23] = [
                e("svg", {
                  class: "w-12 h-12 mx-auto mb-3 opacity-30",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  e("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  })
                ], -1),
                e("p", { class: "text-[14px] font-medium" }, "No results found", -1)
              ])])) : u("", !0)
            ])
          ])) : u("", !0)
        ]),
        _: 1
      }),
      m(z, { name: "fade" }, {
        default: w(() => [
          l.value ? (s(), r("div", {
            key: 0,
            onClick: t[4] || (t[4] = (o) => l.value = !1),
            class: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          })) : u("", !0)
        ]),
        _: 1
      }),
      m(z, { name: "slide" }, {
        default: w(() => [
          l.value ? (s(), r("div", me, [
            e("div", we, [
              t[25] || (t[25] = e("h2", { class: "text-[26px] font-black italic tracking-tighter uppercase text-[#481173] dark:text-[#cb11ab]" }, "Catalog", -1)),
              e("button", {
                onClick: t[5] || (t[5] = (o) => l.value = !1),
                class: "text-gray-400 hover:text-[#cb11ab] transition-colors p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
              }, [...t[24] || (t[24] = [
                e("svg", {
                  class: "w-7 h-7",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  "stroke-width": "2"
                }, [
                  e("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ]),
            e("div", ke, [
              e("ul", Ce, [
                (s(), r(k, null, C(p, (o) => e("li", {
                  key: o,
                  class: "group"
                }, [
                  e("a", ze, [
                    e("span", null, y(o), 1),
                    t[26] || (t[26] = e("svg", {
                      class: "w-4 h-4 opacity-0 group-hover:opacity-100 text-[#cb11ab] transform -rotate-90 transition-all",
                      fill: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      e("path", { d: "M7 10l5 5 5-5z" })
                    ], -1))
                  ])
                ])), 64))
              ])
            ])
          ])) : u("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Be = (a, l) => {
  const p = a.__vccOpts || a;
  for (const [n, v] of l)
    p[n] = v;
  return p;
}, Ie = /* @__PURE__ */ Be(Se, [["__scopeId", "data-v-87ec7765"]]), Te = /* @__PURE__ */ R({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(a) {
    return (async () => (a._p.my.emitter = a._p.f.new_emitter(), a._p.my.emitter.on("msg", async (l) => {
      console.log("_p.my.emitter.on", l);
    }), await a._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: a._p,
      _$p: a._$p
    }), a._p.f.listen("msg", async (l) => {
      if (l.type === "theme:change") {
        const p = l.custom?.theme;
        console.log("Applying theme:", p);
        const n = document.documentElement;
        p === "dark" ? n.classList.add("dark") : n.classList.remove("dark");
      }
      console.log("_p.f.listen", l);
    }), setTimeout(async () => {
      await a._p.f.call("msg", {
        type: "on:change",
        _p: a._p,
        _$p: a._$p
      });
    }, 500)))(), (l, p) => (s(), W(Ie, {
      _p: a._p,
      _$p: a._$p
    }, null, 8, ["_p", "_$p"]));
  }
}), Ne = async (a) => ({
  set: async (l) => {
    console.log(`--hydrator [${l.data.curr.type}]`);
    const n = G(Te, {
      _p: a,
      _$p: l
    }), v = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          a.f.call("msg", {
            type: "change",
            _p: a,
            _$p: l,
            custom: {}
          });
        }
      }
    }, _ = document.getElementById(a.f.name("vue-root"));
    return n.mount(_), v;
  }
});
export {
  Ne as hydrator,
  Ne as index
};
