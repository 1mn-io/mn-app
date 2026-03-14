import { d as V, o as Y, a as r, c as s, b as e, e as W, t as x, f as c, n as _, g as z, w as S, F as M, r as I, T as B, h as Q, i as R, v as E, j as U, k as p, l as q, m as ee, p as te } from "./runtime-dom.esm-bundler-CLBiBu8r.js";
const oe = { class: "w-full text-white font-sans relative transition-colors duration-300" }, ae = { class: "relative z-10 w-full max-w-[1440px] mx-auto" }, re = { class: "hidden lg:flex justify-between items-center px-6 py-2 text-[13px] tracking-wide" }, se = { class: "flex items-center gap-5 relative" }, le = { class: "relative" }, ne = { class: "uppercase font-bold text-[13px]" }, ie = {
  key: 0,
  class: "absolute right-0 top-full mt-2 w-36 bg-white dark:bg-[#2b2b2b] rounded-xl shadow-2xl py-1.5 z-50 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
}, ce = ["onClick"], de = { class: "text-[11px] opacity-60 font-mono" }, ue = { class: "flex flex-wrap items-center gap-4 px-4 pb-4 pt-2.5 lg:pt-2.5 lg:gap-6 relative z-30" }, pe = { href: "/" }, fe = ["src"], ge = { class: "order-3 w-full mt-2 lg:order-none lg:mt-0 lg:flex-1 relative group z-50" }, he = { class: "relative" }, ve = {
  key: 0,
  class: "hidden lg:block absolute top-[50px] left-0 w-full bg-white text-gray-800 rounded-b-[25px] shadow-2xl overflow-hidden z-[60] border border-gray-100"
}, xe = { class: "max-h-[420px] overflow-y-auto" }, ye = ["onClick"], be = ["innerHTML"], me = {
  key: 0,
  class: "px-6 py-5 text-gray-400 text-[13px] flex items-center gap-2"
}, we = { class: "flex items-center gap-2 lg:gap-5 ml-auto order-2 lg:order-none" }, ke = ["href"], Ce = ["href"], _e = ["href"], ze = ["href"], Se = { class: "relative" }, Me = {
  key: 0,
  class: "absolute -top-1 -right-2 bg-[#f44336] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#481173] min-w-[18px] text-center shadow-md"
}, Ie = {
  key: 0,
  class: "fixed inset-0 bg-white z-[999] flex flex-col lg:hidden"
}, Be = { class: "flex items-center gap-3 p-3.5 border-b border-gray-200 shadow-sm bg-white" }, $e = { class: "flex-1 relative" }, Te = { class: "flex-1 overflow-y-auto bg-white" }, Le = {
  key: 0,
  class: "divide-y divide-gray-50"
}, Ae = ["onClick"], Ne = ["innerHTML"], je = {
  key: 1,
  class: "p-8 text-center text-gray-400"
}, Oe = {
  key: 2,
  class: "p-8 text-center text-gray-400"
}, Re = {
  key: 0,
  class: "fixed top-0 left-0 h-full w-[340px] bg-white dark:bg-[#1a1a1a] z-[101] shadow-2xl flex flex-col text-gray-800 dark:text-gray-200"
}, Ee = { class: "flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#f6f6f9] to-[#ffffff] dark:from-[#252525] dark:to-[#1f1f1f] border-b border-gray-100 dark:border-gray-800" }, Ue = { class: "flex-1 overflow-y-auto py-1" }, Ve = { class: "flex flex-col" }, De = {
  href: "#",
  class: "block px-6 py-3.5 font-semibold text-[15.5px] hover:text-[#cb11ab] hover:bg-gradient-to-r hover:from-[#f6f6f9] hover:to-transparent dark:hover:from-[#2a2a2a] dark:hover:to-transparent transition-all flex items-center justify-between"
}, He = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=search_suggestion", Je = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", Fe = /* @__PURE__ */ V({
  __name: "header",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    const n = p(!1), f = [
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
    ], d = p(0), v = () => {
      try {
        const l = localStorage.getItem("total_cart_item");
        l ? d.value = parseInt(l, 10) || 0 : d.value = 0;
      } catch (l) {
        console.error("Failed to read cart count from localStorage", l), d.value = 0;
      }
    };
    Y(() => {
      v(), o._p.f && o._p.f.listen && o._p.f.listen("msg", (l) => {
        const t = l?.type;
        (t === "refresh:cart" || t === "refnec" || t === "refresh") && (v(), console.log("✅ Cart count successfully updated from global listener! New count:", d.value));
      });
    });
    const g = p(!1), y = p("RUB"), D = [
      { code: "RUB", label: "Russian Ruble" },
      { code: "BYN", label: "Belarusian Ruble" },
      { code: "KZT", label: "Kazakhstani Tenge" },
      { code: "AMD", label: "Armenian Dram" },
      { code: "KGS", label: "Kyrgyzstani Som" },
      { code: "UZS", label: "Uzbekistani Som" }
    ], H = () => {
      g.value = !g.value;
    }, J = (l) => {
      y.value = l.code, g.value = !1, o._p.my && o._p.my.emitter && o._p.my.emitter.emit("msg", { type: "currency:change", value: l.code });
    }, i = p(""), u = p([]), m = p(!1), h = p(!1), w = p(!1), $ = p(null), k = p({
      var: {
        login: null
      },
      fn: {
        set_login: () => {
          try {
            if ((localStorage.getItem("token") || "")?.length == 0)
              throw new Error("invalid token");
            k.value.var.login = {
              name: ""
            };
          } catch {
          }
        }
      }
    });
    k.value.fn.set_login();
    let T = null;
    const F = () => {
      location.href = o._$p.data.curr.data.event.onClickItemA;
    }, N = () => {
      if (T && clearTimeout(T), i.value.length < 2) {
        u.value = [], h.value = !1;
        return;
      }
      w.value || (h.value = !0), m.value = !0, T = setTimeout(async () => {
        await K(i.value), m.value = !1;
      }, 300);
    }, K = async (l) => {
      try {
        const t = await fetch(He, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Je}`
          },
          body: JSON.stringify({ search_text: l })
        });
        if (!t.ok) throw new Error("Network response was not ok");
        const a = await t.json();
        console.log("Full API Response:", a), a && a.data && Array.isArray(a.data) ? u.value = a.data : u.value = [];
      } catch (t) {
        console.error("Search API Error:", t), u.value = [];
      }
    }, j = (l) => {
      if (!i.value || !l) return l;
      const t = new RegExp(`(${i.value})`, "gi");
      return String(l).replace(t, '<span class="font-bold text-[#cb11ab]">$1</span>');
    }, O = (l) => {
      i.value = l.title, L(), A(), console.log("Searching for:", l.title), l.slug ? window.location.href = l.slug : b();
    }, b = () => {
      i.value.trim() && (L(), A(), window.location.href = `/search?f_raw_text=${encodeURIComponent(i.value.trim())}`);
    }, Z = () => {
      i.value.length >= 2 && u.value.length > 0 && (h.value = !0);
    }, L = () => {
      h.value = !1;
    }, G = () => {
      w.value = !0, q(() => {
        $.value?.focus();
      });
    }, A = () => {
      w.value = !1;
    }, P = () => {
      i.value = "", u.value = [], $.value?.focus();
    };
    return (l, t) => (r(), s("header", oe, [
      t[28] || (t[28] = e("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,_#cb11ab_0%,_#6c1887_35%,_#481173_100%)] z-0 transition-opacity" }, null, -1)),
      e("div", ae, [
        e("div", re, [
          t[8] || (t[8] = W('<div class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" data-v-3e75e2b5><svg class="w-3.5 h-3.5 text-white/90" fill="currentColor" viewBox="0 0 24 24" data-v-3e75e2b5><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-3e75e2b5></path></svg><span class="border-b border-dashed border-white/50 hover:border-white transition-colors" data-v-3e75e2b5>New Delhi</span></div><div class="flex gap-7 text-white/95 font-medium" data-v-3e75e2b5><a href="#" class="hover:text-white transition-colors relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#ffd900] after:opacity-0 hover:after:opacity-100 after:transition-opacity" data-v-3e75e2b5>Wibes</a><a href="#" class="hover:text-white transition-colors" data-v-3e75e2b5>Hotels</a><a href="#" class="hover:text-white transition-colors" data-v-3e75e2b5>Flights</a><a href="#" class="hover:text-white transition-colors" data-v-3e75e2b5>Trends</a><a href="#" class="hover:text-white transition-colors" data-v-3e75e2b5>Brands</a></div>', 2)),
          e("div", se, [
            o._$p.data.curr.data.itemA ? (r(), s("span", {
              key: 0,
              onClick: F,
              class: "opacity-90 hover:opacity-100 cursor-pointer transition-opacity text-[12px]"
            }, x(o._$p.data.curr.data.itemA.label), 1)) : c("", !0),
            e("div", le, [
              e("button", {
                onClick: H,
                class: "flex items-center gap-1.5 cursor-pointer hover:opacity-90 focus:outline-none transition-opacity"
              }, [
                e("span", ne, x(y.value), 1),
                (r(), s("svg", {
                  class: _(["w-3.5 h-3.5 transition-transform duration-200", { "rotate-180": g.value }]),
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [...t[6] || (t[6] = [
                  e("path", { d: "M7 10l5 5 5-5z" }, null, -1)
                ])], 2))
              ]),
              z(B, { name: "fade-scale" }, {
                default: S(() => [
                  g.value ? (r(), s("div", ie, [
                    t[7] || (t[7] = e("div", { class: "px-3 py-1.5 text-[10px] text-gray-400 uppercase tracking-wider font-bold" }, "Currency", -1)),
                    (r(), s(M, null, I(D, (a) => e("button", {
                      key: a.code,
                      onClick: (C) => J(a),
                      class: _(["w-full text-left px-3 py-2 hover:bg-[#f6f6f9] dark:hover:bg-[#3d3d3d] flex items-center justify-between text-[13px] transition-colors", { "text-[#cb11ab] font-bold bg-[#f6f6f9]/50": y.value === a.code }])
                    }, [
                      e("span", null, x(a.label), 1),
                      e("span", de, x(a.code), 1)
                    ], 10, ce)), 64))
                  ])) : c("", !0)
                ]),
                _: 1
              }),
              g.value ? (r(), s("div", {
                key: 0,
                onClick: t[0] || (t[0] = (a) => g.value = !1),
                class: "fixed inset-0 z-40 cursor-default"
              })) : c("", !0)
            ])
          ])
        ]),
        e("div", ue, [
          e("a", pe, [
            e("img", {
              class: _(o._$p.data.curr.data.logo.class),
              style: Q(o._$p.data.curr.data.logo.style),
              src: o._$p.data.curr.data.logo.src,
              alt: "logo"
            }, null, 14, fe)
          ]),
          e("button", {
            onClick: t[1] || (t[1] = (a) => n.value = !0),
            class: "hidden lg:flex items-center justify-center w-11 h-11 border-2 border-white/40 rounded-xl hover:bg-white/15 hover:border-white/60 transition-all flex-shrink-0"
          }, [...t[9] || (t[9] = [
            e("div", { class: "flex flex-col gap-[4.5px] w-5" }, [
              e("span", { class: "h-[2px] w-full bg-white rounded-full" }),
              e("span", { class: "h-[2px] w-full bg-white rounded-full" }),
              e("span", { class: "h-[2px] w-full bg-white rounded-full" })
            ], -1)
          ])]),
          e("div", ge, [
            e("div", he, [
              R(e("input", {
                "onUpdate:modelValue": t[2] || (t[2] = (a) => i.value = a),
                onInput: N,
                onFocus: Z,
                onKeyup: U(b, ["enter"]),
                type: "text",
                placeholder: "Search",
                class: _(["w-full h-[50px] pl-6 pr-14 rounded-[25px] bg-white/20 text-white placeholder:text-white/80 border-2 border-white/30 lg:bg-white lg:text-gray-800 lg:placeholder:text-gray-400 focus:outline-none focus:bg-white focus:text-gray-800 lg:focus:ring-2 lg:focus:ring-[#cb11ab] lg:focus:border-transparent transition-all shadow-lg text-[15px] truncate font-normal", { "lg:rounded-b-none lg:shadow-none": h.value && u.value.length > 0 }])
              }, null, 34), [
                [E, i.value]
              ]),
              e("div", {
                onClick: G,
                class: "absolute inset-0 lg:hidden cursor-text z-10"
              }),
              e("button", {
                onClick: b,
                class: "absolute right-5 top-1/2 -translate-y-1/2 text-white lg:text-gray-400 lg:hover:text-[#cb11ab] transition-colors z-20"
              }, [...t[10] || (t[10] = [
                e("svg", {
                  class: "w-[22px] h-[22px]",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  e("path", { d: "M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z" }),
                  e("path", { d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" })
                ], -1)
              ])])
            ]),
            h.value && u.value.length > 0 ? (r(), s("div", ve, [
              e("ul", xe, [
                (r(!0), s(M, null, I(u.value, (a, C) => (r(), s("li", {
                  key: C,
                  onClick: (X) => O(a),
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
                    innerHTML: j(a.title)
                  }, null, 8, be),
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
                ], 8, ye))), 128))
              ]),
              m.value ? (r(), s("div", me, [...t[13] || (t[13] = [
                e("div", { class: "inline-block animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-[#cb11ab]" }, null, -1),
                e("span", null, "Searching...", -1)
              ])])) : c("", !0)
            ])) : c("", !0),
            h.value ? (r(), s("div", {
              key: 1,
              onClick: L,
              class: "fixed inset-0 z-40 bg-transparent"
            })) : c("", !0)
          ]),
          e("nav", we, [
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
            ])], 8, ke),
            k.value.var.login ? c("", !0) : (r(), s("a", {
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
            ])], 8, Ce)),
            k.value.var.login ? (r(), s("a", {
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
            ])], 8, _e)) : c("", !0),
            e("a", {
              href: o._$p.data.curr.data.event.onClickCart || "#",
              class: "flex flex-col items-center gap-1 group min-w-[64px] relative hover:scale-105 transition-transform"
            }, [
              e("div", Se, [
                t[17] || (t[17] = e("svg", {
                  class: "w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  e("path", { d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.83 14.83 5.37 16 6.5 16H19v-2H7.42c-.14 0-.25-.11-.25-.25L7.1 13z" })
                ], -1)),
                d.value > 0 ? (r(), s("span", Me, x(d.value), 1)) : c("", !0)
              ]),
              t[18] || (t[18] = e("span", { class: "text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" }, "Cart", -1))
            ], 8, ze)
          ])
        ])
      ]),
      z(B, { name: "fade-up" }, {
        default: S(() => [
          w.value ? (r(), s("div", Ie, [
            e("div", Be, [
              e("button", {
                onClick: A,
                class: "p-2 -ml-2 text-gray-500 hover:text-gray-700 transition-colors"
              }, [...t[19] || (t[19] = [
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
              e("div", $e, [
                R(e("input", {
                  ref_key: "mobileInputRef",
                  ref: $,
                  "onUpdate:modelValue": t[3] || (t[3] = (a) => i.value = a),
                  onInput: N,
                  onKeyup: U(b, ["enter"]),
                  type: "text",
                  placeholder: "Search...",
                  class: "w-full h-11 pl-4 pr-10 bg-[#f6f6f9] rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cb11ab] focus:bg-white transition-all text-[15px]"
                }, null, 544), [
                  [E, i.value]
                ]),
                i.value ? (r(), s("button", {
                  key: 0,
                  onClick: P,
                  class: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                }, [...t[20] || (t[20] = [
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
                ])])) : c("", !0)
              ]),
              e("button", {
                onClick: b,
                class: "text-[#cb11ab] font-semibold text-[14px] px-2"
              }, "Search")
            ]),
            e("div", Te, [
              u.value.length > 0 ? (r(), s("ul", Le, [
                (r(!0), s(M, null, I(u.value, (a, C) => (r(), s("li", {
                  key: C,
                  onClick: (X) => O(a),
                  class: "flex items-center gap-4 px-4 py-3.5 active:bg-[#f6f6f9] transition-colors cursor-pointer"
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
                    innerHTML: j(a.title)
                  }, null, 8, Ne),
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
                ], 8, Ae))), 128))
              ])) : m.value ? (r(), s("div", je, [...t[23] || (t[23] = [
                e("div", { class: "inline-block animate-spin rounded-full h-7 w-7 border-2 border-gray-200 border-t-[#cb11ab]" }, null, -1),
                e("p", { class: "mt-3 text-[13px]" }, "Searching...", -1)
              ])])) : i.value.length > 0 ? (r(), s("div", Oe, [...t[24] || (t[24] = [
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
              ])])) : c("", !0)
            ])
          ])) : c("", !0)
        ]),
        _: 1
      }),
      z(B, { name: "fade" }, {
        default: S(() => [
          n.value ? (r(), s("div", {
            key: 0,
            onClick: t[4] || (t[4] = (a) => n.value = !1),
            class: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          })) : c("", !0)
        ]),
        _: 1
      }),
      z(B, { name: "slide" }, {
        default: S(() => [
          n.value ? (r(), s("div", Re, [
            e("div", Ee, [
              t[26] || (t[26] = e("h2", { class: "text-[26px] font-black italic tracking-tighter uppercase text-[#481173] dark:text-[#cb11ab]" }, "Catalog", -1)),
              e("button", {
                onClick: t[5] || (t[5] = (a) => n.value = !1),
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
            e("div", Ue, [
              e("ul", Ve, [
                (r(), s(M, null, I(f, (a) => e("li", {
                  key: a,
                  class: "group"
                }, [
                  e("a", De, [
                    e("span", null, x(a), 1),
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
          ])) : c("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ke = (o, n) => {
  const f = o.__vccOpts || o;
  for (const [d, v] of n)
    f[d] = v;
  return f;
}, Ze = /* @__PURE__ */ Ke(Fe, [["__scopeId", "data-v-3e75e2b5"]]), Ge = /* @__PURE__ */ V({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(o) {
    return o._$p.data.curr.data.logo || (o._$p.data.curr.data.logo = { src: "", class: "", style: "" }), (async () => (o._p.my.emitter = o._p.f.new_emitter(), o._p.my.emitter.on("msg", async (n) => {
      console.log("_p.my.emitter.on", n);
    }), await o._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: o._p,
      _$p: o._$p
    }), o._p.f.listen("msg", async (n) => {
      if (n.type === "theme:change") {
        const f = n.custom?.theme;
        console.log("Applying theme:", f);
        const d = document.documentElement;
        f === "dark" ? d.classList.add("dark") : d.classList.remove("dark");
      }
      console.log("_p.f.listen", n);
    }), setTimeout(async () => {
      await o._p.f.call("msg", {
        type: "on:change",
        _p: o._p,
        _$p: o._$p
      });
    }, 500)))(), (n, f) => (r(), ee(Ze, {
      _p: o._p,
      _$p: o._$p
    }, null, 8, ["_p", "_$p"]));
  }
}), Xe = async (o) => ({
  set: async (n) => {
    console.log(`--hydrator [${n.data.curr.type}]`);
    const d = te(Ge, {
      _p: o,
      _$p: n
    }), v = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          o.f.call("msg", {
            type: "change",
            _p: o,
            _$p: n,
            custom: {}
          });
        }
      }
    }, g = document.getElementById(o.f.name("vue-root"));
    return d.mount(g), v;
  }
});
export {
  Xe as hydrator,
  Xe as index
};
