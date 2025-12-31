import { d as te, c as A, r as p, a as B, w as ke, o as xe, b as i, e as l, f as r, g as R, n as a, h as _, i as k, F as x, j as b, T as G, k as D, l as J, t as c, m as P, v as q, p as ee, u as fe, q as ve, s as be, x as me } from "./runtime-dom.esm-bundler-SrCaS0sf.js";
const pe = (o, m) => {
  const f = o.__vccOpts || o;
  for (const [S, M] of m)
    f[S] = M;
  return f;
}, we = { class: "md:hidden fixed bottom-6 right-6 z-40" }, Ce = { class: "flex-1 overflow-y-auto custom-scrollbar" }, $e = {
  key: 0,
  class: "p-10 flex justify-center"
}, Le = { class: "flex items-center justify-between mb-3" }, Se = ["onClick"], Me = {
  key: 0,
  class: "mb-3"
}, je = ["onUpdate:modelValue", "placeholder"], Ae = { class: "space-y-2" }, Fe = ["onClick"], Ie = ["name", "checked"], Te = ["onClick"], ze = {
  key: 0,
  class: "w-3 h-3 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ee = {
  key: 0,
  class: "mt-2"
}, Oe = ["onClick"], Be = ["onClick"], Ue = { class: "flex-1 flex overflow-hidden" }, Ne = ["onClick"], Ve = {
  key: 0,
  class: "ml-1 text-pink-500 dark:text-pink-400"
}, De = { key: 0 }, Je = {
  key: 0,
  class: "mb-4"
}, Pe = ["placeholder"], qe = { class: "space-y-5" }, Re = ["onClick"], Ze = ["checked"], Xe = ["onClick"], Qe = { class: "flex items-center gap-3" }, Ye = {
  key: 0,
  class: "w-3.5 h-3.5 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, He = {
  key: 0,
  class: "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
}, We = { class: "flex-shrink-0" }, Ke = { class: "relative flex-1" }, _e = ["onClick"], Ge = { class: "flex-1 overflow-x-auto custom-scrollbar-horizontal" }, et = ["id"], tt = { class: "text-xl font-bold text-pink-600 dark:text-pink-500 mb-4" }, rt = { class: "space-y-3" }, nt = ["onClick"], ot = {
  key: 0,
  class: "w-2.5 h-2.5 text-white",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, at = {
  key: 0,
  class: "w-full flex items-center justify-center"
}, st = { class: "text-center" }, lt = /* @__PURE__ */ te({
  __name: "ProductFilterv1",
  props: {
    _p: {},
    _$p: {},
    _$cb: {},
    config: {}
  },
  setup(o) {
    const m = o, f = A(() => m.config?.theme || Q.value?.theme || "light"), S = p(!1), M = p(null), d = B({}), j = p(!1), w = p("category"), I = p(""), Z = () => {
      const n = new URLSearchParams(window.location.search);
      I.value && n.set("q", I.value), Array.from(n.keys()).filter((s) => s !== "q").forEach((s) => n.delete(s)), Object.entries(d).forEach(([s, g]) => {
        Array.isArray(g) && g.length > 0 && n.set(s, g.join(","));
      });
      const e = `${window.location.pathname}?${n.toString()}`;
      window.history.replaceState({}, "", e);
    }, re = () => {
      const n = new URLSearchParams(window.location.search);
      I.value = n.get("q") || "", n.forEach((t, e) => {
        e !== "q" && (d[e] = t.split(","));
      });
    }, U = async () => {
      S.value = !0;
      const n = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", t = L.value.map((e) => ({
        title: e.title,
        typ: e.typ,
        l: e.l.map((s) => ({
          name: s.name,
          selected: v(e.typ, s.name)
          // This will now be false for all after Clear All
        }))
      }));
      try {
        const s = await (await fetch("https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_filter_data", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${n}` },
          body: JSON.stringify({
            raw_text: I.value || "_",
            collection: "products",
            filters: t
            // Send the full list with false selections
          })
        })).json();
        s.success && (M.value = s);
      } catch (e) {
        console.error("Filter API Error:", e);
      } finally {
        S.value = !1;
      }
    }, ne = (n) => {
      const t = C[n.typ]?.toLowerCase();
      return t ? n.l.filter((e) => e.name.toLowerCase().includes(t)) : n.l;
    }, T = B({}), C = B({}), z = B({}), N = p(!1), $ = p(null), E = p(""), oe = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), ae = p(null), X = A(() => {
      if (!$.value) return [];
      const n = $.value.l.filter(
        (u) => u.name.toLowerCase().includes(E.value.toLowerCase())
      ), t = {};
      n.forEach((u) => {
        let F = u.name.charAt(0).toUpperCase();
        /[A-Z]/.test(F) || (F = "#"), t[F] || (t[F] = []), t[F].push(u);
      });
      const s = Object.keys(t).sort().map((u) => ({
        letter: u,
        items: t[u],
        height: t[u].length * 32 + 60
        // Approximate height: items * itemHeight + headerHeight
      })), g = [[]];
      let O = 0, y = 0;
      const K = 600;
      return s.forEach((u) => {
        y + u.height > K && y > 0 && (g.push([]), O++, y = 0), g[O].push({
          letter: u.letter,
          items: u.items
        }), y += u.height;
      }), g;
    }), se = (n) => {
      ve(() => {
        const t = document.getElementById(`dir-letter-${n}`);
        t && t.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          // This aligns the element to the left of the container
          block: "nearest"
          // This prevents the whole page from jumping vertically
        });
      });
    }, le = (n) => {
      n.typ === "brand" && ($.value = n, E.value = "", N.value = !0);
    }, Q = A(() => M.value || m._$p?.data?.curr?.data || {}), L = A(() => Q.value.filters || []), h = A(() => L.value.find((n) => n.typ === w.value));
    ke(L, (n) => {
      n.length > 0 && !w.value && (w.value = n[0].typ);
    }, { immediate: !0 });
    const ie = A(() => Object.values(d).reduce((n, t) => n + (Array.isArray(t) ? t.length : 0), 0)), de = (n) => {
      T[n] = !T[n], T[n] || (C[n] = "");
    }, ce = (n) => {
      z[n] = !z[n];
    }, ge = (n) => {
      let t = n.l;
      const e = C[n.typ]?.toLowerCase();
      return e ? t.filter((s) => s.name.toLowerCase().includes(e)) : n.typ === "brand" || !z[n.typ] ? t.slice(0, 5) : t;
    }, ue = (n) => C[n.typ] ? !1 : n.l.length > 5, v = (n, t) => d[n]?.includes(t) || !1, Y = (n, t) => {
      const e = d.price?.[0];
      return e?.min === n && e?.max === t;
    }, H = (n, t) => {
      d.price = [{ min: n, max: t }], he();
    }, he = () => {
      Object.entries(d).forEach(([n, t]) => {
        Array.isArray(t) && t.length > 0;
      });
    }, V = (n, t) => {
      d[n] || (d[n] = []);
      const e = d[n], s = e.indexOf(t);
      s === -1 ? e.push(t) : e.splice(s, 1), Z(), U();
    }, W = async () => {
      Object.keys(d).forEach((n) => {
        Array.isArray(d[n]) && (d[n] = []);
      }), Z(), await U();
    }, ye = {
      render(n) {
        return be("transition", {
          name: "expand",
          onEnter(t) {
            t.style.height = "auto";
            const e = t.scrollHeight + "px";
            t.style.height = "0", t.offsetHeight, t.style.height = e;
          },
          onAfterEnter(t) {
            t.style.height = "auto";
          },
          onLeave(t) {
            t.style.height = t.scrollHeight + "px", t.offsetHeight, t.style.height = "0";
          }
        }, n.$slots);
      }
    };
    return xe(async () => {
      re(), await U(), L.value.length > 0 && (w.value = L.value[0].typ);
    }), (n, t) => (l(), i("div", {
      class: a(["dark-mode-wrapper", { dark: f.value === "dark" }])
    }, [
      r("div", we, [
        r("button", {
          onClick: t[0] || (t[0] = (e) => j.value = !0),
          class: a([
            "bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white px-6 py-4 rounded-full shadow-2xl font-bold flex items-center gap-2 uppercase tracking-wide active:scale-95 transition-transform duration-200",
            f.value === "dark" ? "dark:bg-pink-500 dark:hover:bg-pink-600" : ""
          ])
        }, [...t[6] || (t[6] = [
          r("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            r("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1),
          _(" Filters ", -1)
        ])], 2)
      ]),
      r("aside", {
        class: a([
          "hidden md:flex flex-col product-filter w-80 border-r h-screen sticky top-0",
          f.value === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
        ])
      }, [
        r("div", {
          class: a([
            "p-4 border-b flex justify-between items-center z-10",
            o.config?.theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
          ])
        }, [
          r("h2", {
            class: a([
              "text-md font-bold uppercase",
              o.config?.theme === "dark" ? "text-gray-100" : "text-gray-800"
            ])
          }, "Filters", 2),
          ie.value > 0 ? (l(), i("button", {
            key: 0,
            onClick: W,
            class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 uppercase transition-colors duration-200"
          }, " Clear All ")) : k("", !0)
        ], 2),
        r("div", Ce, [
          S.value ? (l(), i("div", $e, [
            r("div", {
              class: a([
                "w-6 h-6 border-2 rounded-full animate-spin",
                o.config?.theme === "dark" ? "border-pink-400 border-t-transparent" : "border-pink-500 border-t-transparent"
              ])
            }, null, 2)
          ])) : (l(!0), i(x, { key: 1 }, b(L.value, (e) => (l(), i("div", {
            key: e.typ,
            class: a([
              "border-b p-4",
              o.config?.theme === "dark" ? "border-gray-800" : "border-gray-100"
            ])
          }, [
            r("div", Le, [
              r("span", {
                class: a([
                  "text-sm font-bold uppercase",
                  o.config?.theme === "dark" ? "text-gray-200" : "text-gray-700"
                ])
              }, c(e.title), 3),
              r("button", {
                onClick: (s) => de(e.typ),
                class: a([
                  "p-1.5 rounded-full transition-colors duration-200",
                  o.config?.theme === "dark" ? "text-gray-400 hover:bg-gray-800 hover:text-gray-300" : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                ])
              }, [...t[7] || (t[7] = [
                r("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  r("path", {
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                    "stroke-width": "2"
                  })
                ], -1)
              ])], 10, Se)
            ]),
            D(ye, null, {
              default: J(() => [
                T[e.typ] ? (l(), i("div", Me, [
                  P(r("input", {
                    "onUpdate:modelValue": (s) => C[e.typ] = s,
                    type: "text",
                    placeholder: `Search ${e.title}`,
                    class: a([
                      "w-full px-3 py-1.5 text-xs border rounded-full focus:outline-none transition-colors duration-200",
                      o.config?.theme === "dark" ? "border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-pink-500"
                    ])
                  }, null, 10, je), [
                    [q, C[e.typ]]
                  ])
                ])) : k("", !0)
              ]),
              _: 2
            }, 1024),
            r("div", Ae, [
              e.typ === "price" ? (l(!0), i(x, { key: 0 }, b(e.l, (s) => (l(), i("div", {
                key: s.name,
                onClick: (g) => H(s.min, s.max),
                class: a([
                  "flex items-center group cursor-pointer transition-colors duration-200",
                  o.config?.theme === "dark" ? "hover:bg-gray-800 rounded-lg p-1" : "hover:bg-gray-50 rounded-lg p-1"
                ])
              }, [
                r("input", {
                  type: "radio",
                  name: "price-" + e.typ,
                  checked: Y(s.min, s.max),
                  class: a([
                    "h-4 w-4",
                    (o.config?.theme === "dark", "accent-pink-500")
                  ])
                }, null, 10, Ie),
                r("label", {
                  class: a([
                    "ml-3 text-sm cursor-pointer",
                    o.config?.theme === "dark" ? "text-gray-300 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                  ])
                }, c(s.name), 3)
              ], 10, Fe))), 128)) : (l(), i(x, { key: 1 }, [
                (l(!0), i(x, null, b(ge(e), (s) => (l(), i("div", {
                  key: s.name,
                  onClick: (g) => V(e.typ, s.name),
                  class: a([
                    "flex items-center cursor-pointer group transition-colors duration-200",
                    o.config?.theme === "dark" ? "hover:bg-gray-800 rounded-lg p-1" : "hover:bg-gray-50 rounded-lg p-1"
                  ])
                }, [
                  r("div", {
                    class: a([
                      "w-4 h-4 border rounded flex items-center justify-center transition-all duration-200",
                      v(e.typ, s.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : o.config?.theme === "dark" ? "bg-gray-800 border-gray-600 group-hover:border-gray-400" : "bg-white border-gray-300 group-hover:border-gray-400"
                    ])
                  }, [
                    v(e.typ, s.name) ? (l(), i("svg", ze, [...t[8] || (t[8] = [
                      r("path", {
                        d: "M5 13l4 4L19 7",
                        "stroke-width": "3"
                      }, null, -1)
                    ])])) : k("", !0)
                  ], 2),
                  r("span", {
                    class: a([
                      "ml-3 text-sm flex-1 truncate transition-colors duration-200",
                      v(e.typ, s.name) ? "font-medium dark:text-white text-gray-900" : o.config?.theme === "dark" ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-900"
                    ])
                  }, c(s.name), 3),
                  r("span", {
                    class: a([
                      "text-[10px] ml-2",
                      o.config?.theme === "dark" ? "text-gray-500" : "text-gray-400"
                    ])
                  }, c(s.count), 3)
                ], 10, Te))), 128)),
                ue(e) ? (l(), i("div", Ee, [
                  e.typ === "brand" ? (l(), i("button", {
                    key: 0,
                    onClick: (s) => le(e),
                    class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:underline transition-colors duration-200"
                  }, " + " + c(e.l.length - 5) + " more ", 9, Oe)) : (l(), i("button", {
                    key: 1,
                    onClick: (s) => ce(e.typ),
                    class: "text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 hover:underline transition-colors duration-200"
                  }, c(z[e.typ] ? "Show Less" : `+ ${e.l.length - 5} more`), 9, Be))
                ])) : k("", !0)
              ], 64))
            ])
          ], 2))), 128))
        ])
      ], 2),
      (l(), R(G, { to: "body" }, [
        D(ee, { name: "slide-up" }, {
          default: J(() => [
            j.value ? (l(), i("div", {
              key: 0,
              class: a([
                "fixed inset-0 z-[110] flex flex-col md:hidden overflow-hidden",
                o.config?.theme === "dark" ? "bg-gray-900" : "bg-white"
              ])
            }, [
              r("div", {
                class: a([
                  "p-4 border-b flex justify-between items-center shrink-0",
                  o.config?.theme === "dark" ? "border-gray-800" : "border-gray-200"
                ])
              }, [
                r("h2", {
                  class: a([
                    "font-bold uppercase",
                    o.config?.theme === "dark" ? "text-white" : "text-gray-800"
                  ])
                }, "Filters", 2),
                r("button", {
                  onClick: t[1] || (t[1] = (e) => j.value = !1),
                  class: a([
                    "p-2 rounded-full transition-colors duration-200",
                    o.config?.theme === "dark" ? "text-gray-400 hover:bg-gray-800 hover:text-gray-300" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  ])
                }, [...t[9] || (t[9] = [
                  r("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    r("path", {
                      d: "M6 18L18 6M6 6l12 12",
                      "stroke-width": "2"
                    })
                  ], -1)
                ])], 2)
              ], 2),
              r("div", Ue, [
                r("div", {
                  class: a([
                    "w-1/3 overflow-y-auto",
                    o.config?.theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  ])
                }, [
                  (l(!0), i(x, null, b(L.value, (e) => (l(), i("div", {
                    key: e.typ,
                    onClick: (s) => w.value = e.typ,
                    class: a([
                      "p-4 text-[11px] font-bold uppercase border-l-4 transition-all h-16 flex items-center",
                      w.value === e.typ ? o.config?.theme === "dark" ? "bg-gray-900 border-pink-500 text-pink-400" : "bg-white border-pink-500 text-pink-600" : o.config?.theme === "dark" ? "border-transparent text-gray-400 hover:bg-gray-700 hover:text-gray-300" : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    ])
                  }, [
                    _(c(e.title) + " ", 1),
                    d[e.typ]?.length ? (l(), i("span", Ve, "•")) : k("", !0)
                  ], 10, Ne))), 128))
                ], 2),
                r("div", {
                  class: a([
                    "w-2/3 overflow-y-auto p-4",
                    o.config?.theme === "dark" ? "bg-gray-900" : "bg-white"
                  ])
                }, [
                  h.value ? (l(), i("div", De, [
                    h.value.typ !== "price" ? (l(), i("div", Je, [
                      P(r("input", {
                        "onUpdate:modelValue": t[2] || (t[2] = (e) => C[h.value.typ] = e),
                        type: "text",
                        placeholder: `Search ${h.value.title}`,
                        class: a([
                          "w-full px-4 py-2 text-sm border rounded-lg transition-colors duration-200",
                          o.config?.theme === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-pink-500"
                        ])
                      }, null, 10, Pe), [
                        [q, C[h.value.typ]]
                      ])
                    ])) : k("", !0),
                    r("div", qe, [
                      h.value.typ === "price" ? (l(!0), i(x, { key: 0 }, b(h.value.l, (e) => (l(), i("div", {
                        key: e.name,
                        onClick: (s) => H(e.min, e.max),
                        class: a([
                          "flex items-center p-2 rounded-lg transition-colors duration-200 cursor-pointer",
                          o.config?.theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                        ])
                      }, [
                        r("input", {
                          type: "radio",
                          checked: Y(e.min, e.max),
                          class: a([
                            "h-5 w-5",
                            (o.config?.theme === "dark", "accent-pink-500")
                          ])
                        }, null, 10, Ze),
                        r("span", {
                          class: a([
                            "ml-3 text-sm",
                            o.config?.theme === "dark" ? "text-gray-300" : "text-gray-700"
                          ])
                        }, c(e.name), 3)
                      ], 10, Re))), 128)) : (l(!0), i(x, { key: 1 }, b(ne(h.value), (e) => (l(), i("div", {
                        key: e.name,
                        onClick: (s) => V(h.value.typ, e.name),
                        class: a([
                          "flex items-center justify-between p-2 rounded-lg transition-colors duration-200 cursor-pointer",
                          o.config?.theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                        ])
                      }, [
                        r("div", Qe, [
                          r("div", {
                            class: a([
                              "w-5 h-5 border rounded flex items-center justify-center transition-all duration-200",
                              v(h.value.typ, e.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : o.config?.theme === "dark" ? "border-gray-600" : "border-gray-300"
                            ])
                          }, [
                            v(h.value.typ, e.name) ? (l(), i("svg", Ye, [...t[10] || (t[10] = [
                              r("path", {
                                d: "M5 13l4 4L19 7",
                                "stroke-width": "3"
                              }, null, -1)
                            ])])) : k("", !0)
                          ], 2),
                          r("span", {
                            class: a([
                              "text-sm transition-colors duration-200",
                              v(h.value.typ, e.name) ? "dark:text-white text-gray-900 font-medium" : o.config?.theme === "dark" ? "text-gray-200" : "text-gray-700"
                            ])
                          }, c(e.name), 3)
                        ]),
                        r("span", {
                          class: a([
                            "text-[10px]",
                            o.config?.theme === "dark" ? "text-gray-500" : "text-gray-400"
                          ])
                        }, c(e.count), 3)
                      ], 10, Xe))), 128))
                    ])
                  ])) : k("", !0)
                ], 2)
              ]),
              r("div", {
                class: a([
                  "p-4 border-t flex gap-4 shrink-0 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]",
                  o.config?.theme === "dark" ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
                ])
              }, [
                r("button", {
                  onClick: W,
                  class: a([
                    "flex-1 py-3 text-sm font-bold uppercase rounded-lg transition-colors duration-200",
                    o.config?.theme === "dark" ? "text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-300" : "text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  ])
                }, "Clear All", 2),
                r("button", {
                  onClick: t[3] || (t[3] = (e) => j.value = !1),
                  class: "flex-1 py-3 text-sm font-bold uppercase bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white rounded-lg transition-colors duration-200"
                }, " Apply ")
              ], 2)
            ], 2)) : k("", !0)
          ]),
          _: 1
        })
      ])),
      (l(), R(G, { to: "body" }, [
        D(ee, { name: "fade" }, {
          default: J(() => [
            N.value ? (l(), i("div", He, [
              r("div", {
                class: a([
                  "w-full max-w-6xl h-[85vh] rounded-lg shadow-2xl flex flex-col overflow-hidden",
                  o.config?.theme === "dark" ? "bg-gray-900" : "bg-white"
                ])
              }, [
                r("div", {
                  class: a([
                    "p-6 border-b flex items-center gap-4",
                    o.config?.theme === "dark" ? "border-gray-800" : "border-gray-200"
                  ])
                }, [
                  r("div", We, [
                    r("h3", {
                      class: a([
                        "text-lg font-bold",
                        o.config?.theme === "dark" ? "text-gray-200" : "text-gray-800"
                      ])
                    }, "Brand Directory", 2),
                    r("p", {
                      class: a([
                        "text-xs",
                        o.config?.theme === "dark" ? "text-gray-400" : "text-gray-500"
                      ])
                    }, "Select from " + c($.value?.l?.length || 0) + " brands", 3)
                  ]),
                  r("div", Ke, [
                    P(r("input", {
                      "onUpdate:modelValue": t[4] || (t[4] = (e) => E.value = e),
                      type: "text",
                      placeholder: "Search brands by name",
                      class: a([
                        "w-full pl-10 pr-4 py-2 border rounded-full text-sm transition-colors duration-200",
                        o.config?.theme === "dark" ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-pink-500" : "border-gray-300 text-gray-900 placeholder-gray-400 focus:border-pink-500"
                      ])
                    }, null, 2), [
                      [q, E.value]
                    ]),
                    t[11] || (t[11] = r("svg", {
                      class: "w-4 h-4 absolute left-3 top-2.5 text-gray-400",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      r("path", {
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                        "stroke-width": "2"
                      })
                    ], -1))
                  ]),
                  r("div", {
                    class: a([
                      "flex-1 flex items-center gap-1 overflow-x-auto scrollbar-custom-alphabet px-2 border-x pb-2 pt-1",
                      o.config?.theme === "dark" ? "border-gray-800" : "border-gray-200"
                    ])
                  }, [
                    (l(!0), i(x, null, b(fe(oe), (e) => (l(), i("button", {
                      key: e,
                      onClick: (s) => se(e),
                      class: a([
                        "px-3 py-1 text-xs font-bold uppercase flex-shrink-0 transition-colors duration-200",
                        o.config?.theme === "dark" ? "text-gray-400 hover:text-pink-400" : "text-gray-400 hover:text-pink-600"
                      ])
                    }, c(e), 11, _e))), 128))
                  ], 2),
                  r("button", {
                    onClick: t[5] || (t[5] = (e) => N.value = !1),
                    class: a([
                      "p-2 flex-shrink-0 rounded-full transition-colors duration-200",
                      o.config?.theme === "dark" ? "hover:bg-gray-800 text-gray-400 hover:text-gray-300" : "hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                    ])
                  }, [...t[12] || (t[12] = [
                    r("svg", {
                      class: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      r("path", {
                        d: "M6 18L18 6M6 6l12 12",
                        "stroke-width": "2"
                      })
                    ], -1)
                  ])], 2)
                ], 2),
                r("div", Ge, [
                  r("div", {
                    ref_key: "directoryContainer",
                    ref: ae,
                    class: "flex min-h-full p-8 gap-8"
                  }, [
                    (l(!0), i(x, null, b(X.value, (e, s) => (l(), i("div", {
                      key: s,
                      class: "w-64 flex-shrink-0"
                    }, [
                      (l(!0), i(x, null, b(e, (g, O) => (l(), i("div", {
                        key: g.letter,
                        id: `dir-letter-${g.letter}`,
                        class: a(["mb-8 scroll-ml-8", { "last:mb-0": O === e.length - 1 }])
                      }, [
                        r("h3", tt, c(g.letter), 1),
                        r("div", rt, [
                          (l(!0), i(x, null, b(g.items, (y) => (l(), i("div", {
                            key: y.name,
                            onClick: (K) => V($.value?.typ, y.name),
                            class: a([
                              "flex items-center cursor-pointer group p-2 rounded-lg transition-colors duration-200",
                              o.config?.theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50"
                            ])
                          }, [
                            r("div", {
                              class: a([
                                "w-4 h-4 border rounded flex-shrink-0 flex items-center justify-center transition-all duration-200",
                                v($.value?.typ, y.name) ? "bg-pink-500 border-pink-500 dark:bg-pink-600 dark:border-pink-600" : o.config?.theme === "dark" ? "bg-gray-800 border-gray-600 group-hover:border-gray-400" : "border-gray-300 group-hover:border-gray-400"
                              ])
                            }, [
                              v($.value?.typ, y.name) ? (l(), i("svg", ot, [...t[13] || (t[13] = [
                                r("path", {
                                  d: "M5 13l4 4L19 7",
                                  "stroke-width": "3"
                                }, null, -1)
                              ])])) : k("", !0)
                            ], 2),
                            r("span", {
                              class: a([
                                "ml-3 text-sm truncate transition-colors duration-200",
                                v($.value?.typ, y.name) ? "dark:text-white text-gray-900 font-medium" : o.config?.theme === "dark" ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-900"
                              ])
                            }, c(y.name), 3),
                            r("span", {
                              class: a([
                                "text-[10px] ml-2 flex-shrink-0",
                                o.config?.theme === "dark" ? "text-gray-500" : "text-gray-400"
                              ])
                            }, c(y.count), 3)
                          ], 10, nt))), 128))
                        ])
                      ], 10, et))), 128))
                    ]))), 128)),
                    X.value.length === 0 ? (l(), i("div", at, [
                      r("div", st, [
                        (l(), i("svg", {
                          class: a([
                            "w-16 h-16 mx-auto mb-4",
                            o.config?.theme === "dark" ? "text-gray-700" : "text-gray-300"
                          ]),
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [...t[14] || (t[14] = [
                          r("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          }, null, -1)
                        ])], 2)),
                        r("p", {
                          class: a([
                            "mb-1",
                            o.config?.theme === "dark" ? "text-gray-400" : "text-gray-500"
                          ])
                        }, "No results found", 2),
                        r("p", {
                          class: a([
                            "text-sm",
                            o.config?.theme === "dark" ? "text-gray-500" : "text-gray-400"
                          ])
                        }, "Try a different search term", 2)
                      ])
                    ])) : k("", !0)
                  ], 512)
                ])
              ], 2)
            ])) : k("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), it = /* @__PURE__ */ pe(lt, [["__scopeId", "data-v-d79d3778"]]), dt = /* @__PURE__ */ te({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(o) {
    return (m, f) => (l(), R(it, {
      _p: o._p,
      _$p: o._$p,
      _$cb: o._$cb
    }, null, 8, ["_p", "_$p", "_$cb"]));
  }
}), gt = async (o) => ({
  set: async (m, f) => {
    console.log(`--hydrator [${m.data.curr.type}]`);
    const M = me(dt, {
      _p: o,
      _$p: m,
      _$cb: f
    }), d = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          f?.change({ _$p: m });
        }
      }
    }, j = document.getElementById(o.f.name("vue-root"));
    return M.mount(j), d;
  }
});
export {
  gt as hydrator,
  gt as index
};
