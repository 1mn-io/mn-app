import { d as U, o as r, c as s, a as e, b as O, t as h, e as d, n as w, f as k, w as C, F as _, r as z, T as M, g as E, v as R, h as p, i as P, j as X, k as Y } from "./runtime-dom.esm-bundler-qx2JOWqd.js";
const K = { class: "w-full text-white font-sans relative transition-colors duration-300" }, W = { class: "relative z-10 w-full max-w-[1440px] mx-auto" }, Q = { class: "hidden lg:flex justify-between items-center px-6 py-2 text-[13px] tracking-wide" }, q = { class: "flex items-center gap-5 relative" }, ee = { class: "relative" }, te = { class: "uppercase font-bold text-[13px]" }, oe = {
  key: 0,
  class: "absolute right-0 top-full mt-2 w-36 bg-white dark:bg-[#2b2b2b] rounded-xl shadow-2xl py-1.5 z-50 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
}, ae = ["onClick"], re = { class: "text-[11px] opacity-60 font-mono" }, se = { class: "flex flex-wrap items-center gap-4 px-4 pb-4 pt-2.5 lg:pt-2.5 lg:gap-6 relative z-30" }, le = { href: "/" }, ne = ["src"], ie = { class: "order-3 w-full mt-2 lg:order-none lg:mt-0 lg:flex-1 relative group z-50" }, ce = { class: "relative" }, de = {
  key: 0,
  class: "hidden lg:block absolute top-[50px] left-0 w-full bg-white text-gray-800 rounded-b-[25px] shadow-2xl overflow-hidden z-[60] border border-gray-100"
}, ue = { class: "max-h-[420px] overflow-y-auto" }, pe = ["onClick"], fe = ["innerHTML"], ge = {
  key: 0,
  class: "px-6 py-5 text-gray-400 text-[13px] flex items-center gap-2"
}, ve = { class: "flex items-center gap-2 lg:gap-5 ml-auto order-2 lg:order-none" }, he = ["href"], xe = ["href"], me = ["href"], ye = ["href"], be = {
  key: 0,
  class: "fixed inset-0 bg-white z-[999] flex flex-col lg:hidden"
}, we = { class: "flex items-center gap-3 p-3.5 border-b border-gray-200 shadow-sm bg-white" }, ke = { class: "flex-1 relative" }, Ce = { class: "flex-1 overflow-y-auto bg-white" }, _e = {
  key: 0,
  class: "divide-y divide-gray-50"
}, ze = ["onClick"], Me = ["innerHTML"], Se = {
  key: 1,
  class: "p-8 text-center text-gray-400"
}, Ie = {
  key: 2,
  class: "p-8 text-center text-gray-400"
}, Be = {
  key: 0,
  class: "fixed top-0 left-0 h-full w-[340px] bg-white dark:bg-[#1a1a1a] z-[101] shadow-2xl flex flex-col text-gray-800 dark:text-gray-200"
}, $e = { class: "flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#f6f6f9] to-[#ffffff] dark:from-[#252525] dark:to-[#1f1f1f] border-b border-gray-100 dark:border-gray-800" }, Le = { class: "flex-1 overflow-y-auto py-1" }, Te = { class: "flex flex-col" }, Ae = {
  href: "#",
  class: "block px-6 py-3.5 font-semibold text-[15.5px] hover:text-[#cb11ab] hover:bg-gradient-to-r hover:from-[#f6f6f9] hover:to-transparent dark:hover:from-[#2a2a2a] dark:hover:to-transparent transition-all flex items-center justify-between"
}, Ne = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=search_suggestion", je = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", Oe = /* @__PURE__ */ U({
  __name: "header",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const l = p(!1), f = [
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
    ], n = p(!1), g = p("RUB"), S = [
      { code: "RUB", label: "Russian Ruble" },
      { code: "BYN", label: "Belarusian Ruble" },
      { code: "KZT", label: "Kazakhstani Tenge" },
      { code: "AMD", label: "Armenian Dram" },
      { code: "KGS", label: "Kyrgyzstani Som" },
      { code: "UZS", label: "Uzbekistani Som" }
    ], I = () => {
      n.value = !n.value;
    }, V = (c) => {
      g.value = c.code, n.value = !1, o._p.my && o._p.my.emitter && o._p.my.emitter.emit("msg", { type: "currency:change", value: c.code });
    }, i = p(""), u = p([]), x = p(!1), v = p(!1), m = p(!1), B = p(null), y = p({
      var: {
        login: null
      },
      fn: {
        set_login: () => {
          try {
            if ((localStorage.getItem("token") || "")?.length == 0)
              throw new Error("invalid token");
            y.value.var.login = {
              name: ""
            };
          } catch {
          }
        }
      }
    });
    y.value.fn.set_login();
    let $ = null;
    const D = () => {
      location.href = o._$p.data.curr.data.event.onClickItemA;
    }, L = () => {
      if ($ && clearTimeout($), i.value.length < 2) {
        u.value = [], v.value = !1;
        return;
      }
      m.value || (v.value = !0), x.value = !0, $ = setTimeout(async () => {
        await H(i.value), x.value = !1;
      }, 300);
    }, H = async (c) => {
      try {
        const t = await fetch(Ne, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${je}`
          },
          body: JSON.stringify({ search_text: c })
        });
        if (!t.ok) throw new Error("Network response was not ok");
        const a = await t.json();
        console.log("Full API Response:", a), a && a.l && Array.isArray(a.l) ? u.value = a.l : u.value = [];
      } catch (t) {
        console.error("Search API Error:", t), u.value = [];
      }
    }, T = (c) => {
      if (!i.value) return c;
      const t = new RegExp(`(${i.value})`, "gi");
      return c.replace(t, '<span class="font-bold text-[#cb11ab]">$1</span>');
    }, A = (c) => {
      i.value = c, N(), j(), console.log("Searching for:", c);
    }, J = () => {
      i.value.length >= 2 && u.value.length > 0 && (v.value = !0);
    }, N = () => {
      v.value = !1;
    }, F = () => {
      m.value = !0, P(() => {
        B.value?.focus();
      });
    }, j = () => {
      m.value = !1;
    }, Z = () => {
      i.value = "", u.value = [], B.value?.focus();
    };
    return (c, t) => (r(), s("header", K, [
      t[28] || (t[28] = e("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,_#cb11ab_0%,_#6c1887_35%,_#481173_100%)] z-0 transition-opacity" }, null, -1)),
      e("div", W, [
        e("div", Q, [
          t[8] || (t[8] = O('<div class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" data-v-937916d2><svg class="w-3.5 h-3.5 text-white/90" fill="currentColor" viewBox="0 0 24 24" data-v-937916d2><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-937916d2></path></svg><span class="border-b border-dashed border-white/50 hover:border-white transition-colors" data-v-937916d2>New Delhi</span></div><div class="flex gap-7 text-white/95 font-medium" data-v-937916d2><a href="#" class="hover:text-white transition-colors relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#ffd900] after:opacity-0 hover:after:opacity-100 after:transition-opacity" data-v-937916d2>Wibes</a><a href="#" class="hover:text-white transition-colors" data-v-937916d2>Hotels</a><a href="#" class="hover:text-white transition-colors" data-v-937916d2>Flights</a><a href="#" class="hover:text-white transition-colors" data-v-937916d2>Trends</a><a href="#" class="hover:text-white transition-colors" data-v-937916d2>Brands</a></div>', 2)),
          e("div", q, [
            o._$p.data.curr.data.itemA ? (r(), s("span", {
              key: 0,
              onClick: D,
              class: "opacity-90 hover:opacity-100 cursor-pointer transition-opacity text-[12px]"
            }, h(o._$p.data.curr.data.itemA.label), 1)) : d("", !0),
            e("div", ee, [
              e("button", {
                onClick: I,
                class: "flex items-center gap-1.5 cursor-pointer hover:opacity-90 focus:outline-none transition-opacity"
              }, [
                e("span", te, h(g.value), 1),
                (r(), s("svg", {
                  class: w(["w-3.5 h-3.5 transition-transform duration-200", { "rotate-180": n.value }]),
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...t[6] || (t[6] = [
                  e("path", { d: "M7 10l5 5 5-5z" }, null, -1)
                ])], 2))
              ]),
              k(M, { name: "fade-scale" }, {
                default: C(() => [
                  n.value ? (r(), s("div", oe, [
                    t[7] || (t[7] = e("div", { class: "px-3 py-1.5 text-[10px] text-gray-400 uppercase tracking-wider font-bold" }, "Currency", -1)),
                    (r(), s(_, null, z(S, (a) => e("button", {
                      key: a.code,
                      onClick: (b) => V(a),
                      class: w(["w-full text-left px-3 py-2 hover:bg-[#f6f6f9] dark:hover:bg-[#3d3d3d] flex items-center justify-between text-[13px] transition-colors", { "text-[#cb11ab] font-bold bg-[#f6f6f9]/50": g.value === a.code }])
                    }, [
                      e("span", null, h(a.label), 1),
                      e("span", re, h(a.code), 1)
                    ], 10, ae)), 64))
                  ])) : d("", !0)
                ]),
                _: 1
              }),
              n.value ? (r(), s("div", {
                key: 0,
                onClick: t[0] || (t[0] = (a) => n.value = !1),
                class: "fixed inset-0 z-40 cursor-default"
              })) : d("", !0)
            ])
          ])
        ]),
        e("div", se, [
          e("a", le, [
            e("img", {
              class: w(o._$p.data.curr.data.logo.class),
              src: o._$p.data.curr.data.logo.src,
              alt: "logo"
            }, null, 10, ne)
          ]),
          e("button", {
            onClick: t[1] || (t[1] = (a) => l.value = !0),
            class: "hidden lg:flex items-center justify-center w-11 h-11 border-2 border-white/40 rounded-xl hover:bg-white/15 hover:border-white/60 transition-all flex-shrink-0"
          }, [...t[9] || (t[9] = [
            e("div", { class: "flex flex-col gap-[4.5px] w-5" }, [
              e("span", { class: "h-[2px] w-full bg-white rounded-full" }),
              e("span", { class: "h-[2px] w-full bg-white rounded-full" }),
              e("span", { class: "h-[2px] w-full bg-white rounded-full" })
            ], -1)
          ])]),
          e("div", ie, [
            e("div", ce, [
              E(e("input", {
                "onUpdate:modelValue": t[2] || (t[2] = (a) => i.value = a),
                onInput: L,
                onFocus: J,
                type: "text",
                placeholder: "Search",
                class: w(["w-full h-[50px] pl-6 pr-14 rounded-[25px] bg-white/20 text-white placeholder:text-white/80 border-2 border-white/30 lg:bg-white lg:text-gray-800 lg:placeholder:text-gray-400 focus:outline-none focus:bg-white focus:text-gray-800 lg:focus:ring-2 lg:focus:ring-[#cb11ab] lg:focus:border-transparent transition-all shadow-lg text-[15px] truncate font-normal", { "lg:rounded-b-none lg:shadow-none": v.value && u.value.length > 0 }])
              }, null, 34), [
                [R, i.value]
              ]),
              e("div", {
                onClick: F,
                class: "absolute inset-0 lg:hidden cursor-text z-10"
              }),
              t[10] || (t[10] = e("button", { class: "absolute right-5 top-1/2 -translate-y-1/2 text-white lg:text-gray-400 lg:hover:text-[#cb11ab] transition-colors z-20" }, [
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
            v.value && u.value.length > 0 ? (r(), s("div", de, [
              e("ul", ue, [
                (r(!0), s(_, null, z(u.value, (a, b) => (r(), s("li", {
                  key: b,
                  onClick: (G) => A(a.title),
                  class: "px-6 py-3 hover:bg-[#f6f6f9] cursor-pointer flex items-center gap-3.5 transition-colors border-b border-gray-50 last:border-b-0 group"
                }, [
                  t[11] || (t[11] = e("svg", {
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
                    innerHTML: T(a.title)
                  }, null, 8, fe),
                  t[12] || (t[12] = e("svg", {
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
                ], 8, pe))), 128))
              ]),
              x.value ? (r(), s("div", ge, [...t[13] || (t[13] = [
                e("div", { class: "inline-block animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-[#cb11ab]" }, null, -1),
                e("span", null, "Searching...", -1)
              ])])) : d("", !0)
            ])) : d("", !0),
            v.value ? (r(), s("div", {
              key: 1,
              onClick: N,
              class: "fixed inset-0 z-40 bg-transparent"
            })) : d("", !0)
          ]),
          e("nav", ve, [
            e("a", {
              href: o._$p.data.curr.data.event.onClickAddresses || "#",
              class: "flex flex-col items-center gap-1 group min-w-[64px] hover:scale-105 transition-transform"
            }, [...t[14] || (t[14] = [
              e("svg", {
                class: "w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm",
                fill: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" })
              ], -1),
              e("span", { class: "text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" }, "Addresses", -1)
            ])], 8, he),
            y.value.var.login ? d("", !0) : (r(), s("a", {
              key: 0,
              href: o._$p.data.curr.data.event.onClickLogin || "#",
              class: "flex flex-col items-center gap-1 group min-w-[64px] hover:scale-105 transition-transform"
            }, [...t[15] || (t[15] = [
              e("svg", {
                class: "w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm",
                fill: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })
              ], -1),
              e("span", { class: "text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" }, "Log in", -1)
            ])], 8, xe)),
            y.value.var.login ? (r(), s("a", {
              key: 1,
              href: o._$p.data.curr.data.event.onClickAccount || "#",
              class: "flex flex-col items-center gap-1 group min-w-[64px] hover:scale-105 transition-transform"
            }, [...t[16] || (t[16] = [
              e("svg", {
                class: "w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm",
                fill: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })
              ], -1),
              e("span", { class: "text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" }, "Account", -1)
            ])], 8, me)) : d("", !0),
            e("a", {
              href: o._$p.data.curr.data.event.onClickCart || "#",
              class: "flex flex-col items-center gap-1 group min-w-[64px] relative hover:scale-105 transition-transform"
            }, [...t[17] || (t[17] = [
              O('<div class="relative" data-v-937916d2><svg class="w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24" data-v-937916d2><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.83 14.83 5.37 16 6.5 16H19v-2H7.42c-.14 0-.25-.11-.25-.25L7.1 13z" data-v-937916d2></path></svg><span class="absolute -top-1 -right-2 bg-[#f44336] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#481173] min-w-[18px] text-center shadow-md" data-v-937916d2>9</span></div><span class="text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" data-v-937916d2>Cart</span>', 2)
            ])], 8, ye)
          ])
        ])
      ]),
      k(M, { name: "fade-up" }, {
        default: C(() => [
          m.value ? (r(), s("div", be, [
            e("div", we, [
              e("button", {
                onClick: j,
                class: "p-2 -ml-2 text-gray-500 hover:text-gray-700 transition-colors"
              }, [...t[18] || (t[18] = [
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
              e("div", ke, [
                E(e("input", {
                  ref_key: "mobileInputRef",
                  ref: B,
                  "onUpdate:modelValue": t[3] || (t[3] = (a) => i.value = a),
                  onInput: L,
                  type: "text",
                  placeholder: "Search...",
                  class: "w-full h-11 pl-4 pr-10 bg-[#f6f6f9] rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cb11ab] focus:bg-white transition-all text-[15px]"
                }, null, 544), [
                  [R, i.value]
                ]),
                i.value ? (r(), s("button", {
                  key: 0,
                  onClick: Z,
                  class: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                }, [...t[19] || (t[19] = [
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
                ])])) : d("", !0)
              ]),
              t[20] || (t[20] = e("button", { class: "text-[#cb11ab] font-semibold text-[14px] px-2" }, "Search", -1))
            ]),
            e("div", Ce, [
              u.value.length > 0 ? (r(), s("ul", _e, [
                (r(!0), s(_, null, z(u.value, (a, b) => (r(), s("li", {
                  key: b,
                  onClick: (G) => A(a.title),
                  class: "flex items-center gap-4 px-4 py-3.5 active:bg-[#f6f6f9] transition-colors"
                }, [
                  t[21] || (t[21] = e("svg", {
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
                    innerHTML: T(a.title)
                  }, null, 8, Me),
                  t[22] || (t[22] = e("svg", {
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
                ], 8, ze))), 128))
              ])) : x.value ? (r(), s("div", Se, [...t[23] || (t[23] = [
                e("div", { class: "inline-block animate-spin rounded-full h-7 w-7 border-2 border-gray-200 border-t-[#cb11ab]" }, null, -1),
                e("p", { class: "mt-3 text-[13px]" }, "Searching...", -1)
              ])])) : i.value.length > 0 ? (r(), s("div", Ie, [...t[24] || (t[24] = [
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
              ])])) : d("", !0)
            ])
          ])) : d("", !0)
        ]),
        _: 1
      }),
      k(M, { name: "fade" }, {
        default: C(() => [
          l.value ? (r(), s("div", {
            key: 0,
            onClick: t[4] || (t[4] = (a) => l.value = !1),
            class: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          })) : d("", !0)
        ]),
        _: 1
      }),
      k(M, { name: "slide" }, {
        default: C(() => [
          l.value ? (r(), s("div", Be, [
            e("div", $e, [
              t[26] || (t[26] = e("h2", { class: "text-[26px] font-black italic tracking-tighter uppercase text-[#481173] dark:text-[#cb11ab]" }, "Catalog", -1)),
              e("button", {
                onClick: t[5] || (t[5] = (a) => l.value = !1),
                class: "text-gray-400 hover:text-[#cb11ab] transition-colors p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
              }, [...t[25] || (t[25] = [
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
            e("div", Le, [
              e("ul", Te, [
                (r(), s(_, null, z(f, (a) => e("li", {
                  key: a,
                  class: "group"
                }, [
                  e("a", Ae, [
                    e("span", null, h(a), 1),
                    t[27] || (t[27] = e("svg", {
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
          ])) : d("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ee = (o, l) => {
  const f = o.__vccOpts || o;
  for (const [n, g] of l)
    f[n] = g;
  return f;
}, Re = /* @__PURE__ */ Ee(Oe, [["__scopeId", "data-v-937916d2"]]), Ue = /* @__PURE__ */ U({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    return o._$p.data.curr.data.logo || (o._$p.data.curr.data.logo = { src: "", class: "" }), (async () => (o._p.my.emitter = o._p.f.new_emitter(), o._p.my.emitter.on("msg", async (l) => {
      console.log("_p.my.emitter.on", l);
    }), await o._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: o._p,
      _$p: o._$p
    }), o._p.f.listen("msg", async (l) => {
      if (l.type === "theme:change") {
        const f = l.custom?.theme;
        console.log("Applying theme:", f);
        const n = document.documentElement;
        f === "dark" ? n.classList.add("dark") : n.classList.remove("dark");
      }
      console.log("_p.f.listen", l);
    }), setTimeout(async () => {
      await o._p.f.call("msg", {
        type: "on:change",
        _p: o._p,
        _$p: o._$p
      });
    }, 500)))(), (l, f) => (r(), X(Re, {
      _p: o._p,
      _$p: o._$p
    }, null, 8, ["_p", "_$p"]));
  }
}), De = async (o) => ({
  set: async (l) => {
    console.log(`--hydrator [${l.data.curr.type}]`);
    const n = Y(Ue, {
      _p: o,
      _$p: l
    }), g = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          o.f.call("msg", {
            type: "change",
            _p: o,
            _$p: l,
            custom: {}
          });
        }
      }
    }, S = document.getElementById(o.f.name("vue-root"));
    return n.mount(S), g;
  }
});
export {
  De as hydrator,
  De as index
};
