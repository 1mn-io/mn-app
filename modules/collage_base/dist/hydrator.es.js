import { d as j, w as B, o as $, a as m, c as d, b as o, F as v, r as y, n as f, e as M, f as D, t as _, T as L, g as N, h as q, i as g, j as P, k as W, l as J } from "./runtime-dom.esm-bundler-DiAqTU8G.js";
const A = { class: "min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-pink-500 selection:text-white" }, F = { class: "max-w-[1920px] mx-auto px-4 md:px-8" }, K = { class: "flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4" }, O = { class: "overflow-x-auto no-scrollbar w-full flex md:justify-center" }, G = { class: "flex px-1 gap-4 md:gap-12 min-w-max md:min-w-0 md:justify-center" }, R = ["onClick"], Q = { class: "px-3 py-4 md:px-8 md:py-10 max-w-[1920px] mx-auto" }, U = { class: "flex flex-wrap gap-3 md:hidden" }, X = ["src"], Y = { class: "absolute bottom-3 left-3 bg-white/95 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg z-10" }, Z = { class: "text-[10px] font-bold uppercase tracking-widest text-black dark:text-white" }, tt = { class: "hidden md:flex md:gap-6 items-start" }, et = ["src"], at = { class: "absolute bottom-5 left-5 bg-white/95 dark:bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg z-10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300" }, ot = { class: "text-xs font-bold uppercase tracking-widest" }, st = {
  key: 0,
  class: "flex gap-2"
}, rt = /* @__PURE__ */ j({
  __name: "collage",
  props: {
    mode: {}
  },
  setup(a) {
    const c = a, l = q(() => c.mode ?? "normal"), i = g("Men"), u = ["Men", "Women", "Beauty", "Kids", "Home", "himanshu", "gooo"], p = g([]), x = (n, e) => {
      i.value = n;
      const t = p.value[e];
      t && t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }, C = [
      "bg-gradient-to-br from-orange-50 to-orange-100",
      "bg-gradient-to-br from-blue-50 to-blue-100",
      "bg-gradient-to-br from-purple-50 to-purple-100",
      "bg-gradient-to-br from-emerald-50 to-emerald-100",
      "bg-gradient-to-br from-rose-50 to-rose-100",
      "bg-gradient-to-br from-amber-50 to-yellow-100",
      "bg-gradient-to-br from-indigo-50 to-violet-100",
      "bg-gradient-to-br from-slate-50 to-gray-100"
    ], I = (n) => ({ gradient: C[n % C.length] }), T = {
      Men: [
        { id: "m1", title: "Sweatpants", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=500" },
        { id: "m2", title: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500" },
        { id: "m3", title: "Hoodies", full: !0, image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=500" },
        { id: "m4", title: "Jeans", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=500" },
        { id: "m5", title: "Sneakers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500" },
        { id: "m6", title: "Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=500" },
        { id: "m7", title: "Jackets", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500" }
      ],
      Women: [
        { id: "w1", title: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500" },
        { id: "w2", title: "Skirts", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=500" },
        { id: "w3", title: "Tops", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500" },
        { id: "w4", title: "Heels", full: !0, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500" },
        { id: "w5", title: "Bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500" },
        { id: "w6", title: "Jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500" },
        { id: "w7", title: "Activewear", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=500" },
        { id: "w8", title: "Sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500" }
      ],
      Beauty: [
        { id: "b1", title: "Perfume", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=500" },
        { id: "b2", title: "Lipstick", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500" },
        { id: "b3", title: "Skincare", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500" },
        { id: "b4", title: "Palettes", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=500" },
        { id: "b5", title: "Serums", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500" }
      ],
      Kids: [
        { id: "k1", title: "Toys", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500" },
        { id: "k2", title: "School", image: "https://images.unsplash.com/photo-1503919545885-d94c035542be?auto=format&fit=crop&q=80&w=500" },
        { id: "k3", title: "Baby Wear", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=500" },
        { id: "k4", title: "Sneakers", image: "https://images.unsplash.com/photo-1514989940723-e8a51630c71f?auto=format&fit=crop&q=80&w=500" }
      ],
      Home: [
        { id: "h1", title: "Decor", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=500" },
        { id: "h2", title: "Bedding", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=500" },
        { id: "h3", title: "Plants", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=500" },
        { id: "h4", title: "Chairs", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=500" },
        { id: "h5", title: "Lighting", image: "https://images.unsplash.com/photo-1507473888900-52e1adad5420?auto=format&fit=crop&q=80&w=500" }
      ]
    }, z = (n) => {
      let e = 0;
      return n.map((t, r) => {
        let s = "";
        if (t.full)
          s = "w-full", e = 0;
        else {
          const S = e % 2 === 0;
          s = Math.floor(e / 2) % 2 === 0 ? S ? "w-[calc(60%-0.375rem)]" : "w-[calc(40%-0.375rem)]" : S ? "w-[calc(40%-0.375rem)]" : "w-[calc(60%-0.375rem)]", e++;
        }
        return { ...t, mobileClass: s, heightClass: "h-48 sm:h-56", globalIndex: r };
      });
    }, E = q(() => {
      const n = [[], [], [], []];
      return h.value.forEach((e, t) => {
        const r = t % 4;
        let s = "";
        const k = Math.floor(t / 4);
        r % 2 === 0 ? s = k % 2 === 0 ? "h-[22rem]" : "h-[28rem]" : s = k % 2 === 0 ? "h-[28rem]" : "h-[22rem]", n[r].push({
          ...e,
          pcHeight: s,
          globalIndex: t
        });
      }), n;
    }), h = g([]), b = g(!1), w = g(null), H = async () => {
      if (b.value) return;
      b.value = !0, await new Promise((r) => setTimeout(r, 800));
      const e = (T[i.value] || []).map((r) => ({
        ...r,
        id: r.id + "_" + Date.now() + Math.random()
      })), t = [...h.value, ...e];
      h.value = t, b.value = !1;
    }, V = q(() => z(h.value));
    return B(i, () => {
      h.value = [...T[i.value] || []];
    }, { immediate: !0 }), $(() => {
      const n = new IntersectionObserver((e) => {
        e[0].isIntersecting && H();
      }, { rootMargin: "100px", threshold: 0.1 });
      w.value && n.observe(w.value), B(w, (e) => {
        e && n.observe(e);
      });
    }), (n, e) => (m(), d("div", A, [
      o("nav", {
        class: f(["bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all duration-300", l.value === "sticky" ? "sticky top-0 z-50" : "relative"])
      }, [
        o("div", F, [
          o("div", K, [
            o("div", O, [
              o("div", G, [
                (m(), d(v, null, y(u, (t, r) => o("button", {
                  key: t,
                  ref_for: !0,
                  ref: (s) => {
                    s && (p.value[r] = s);
                  },
                  onClick: (s) => x(t, r),
                  class: f(["relative px-2 py-4 text-sm md:text-lg font-bold transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-lg", i.value === t ? "text-black dark:text-white" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"])
                }, [
                  P(_(t) + " ", 1),
                  o("span", {
                    class: f(["absolute bottom-2 left-0 w-full h-1 rounded-full transition-all duration-300 origin-center", i.value === t ? "bg-black dark:bg-white scale-x-100" : "bg-transparent scale-x-0 group-hover:bg-gray-300 group-hover:scale-x-50"])
                  }, null, 2)
                ], 10, R)), 64))
              ])
            ])
          ])
        ])
      ], 2),
      o("main", Q, [
        o("div", U, [
          M(L, { name: "stagger" }, {
            default: D(() => [
              (m(!0), d(v, null, y(V.value, (t) => (m(), d("div", {
                key: t.id,
                class: f(["relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl bg-white dark:bg-gray-900 transition-all duration-500 ease-out hover:-translate-y-1", [
                  t.mobileClass,
                  t.heightClass,
                  I(t.globalIndex).gradient
                ]])
              }, [
                o("img", {
                  src: t.image,
                  loading: "lazy",
                  class: "absolute inset-0 w-full h-full object-cover",
                  alt: "Item"
                }, null, 8, X),
                e[0] || (e[0] = o("div", { class: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" }, null, -1)),
                o("div", Y, [
                  o("span", Z, _(t.title), 1)
                ])
              ], 2))), 128))
            ]),
            _: 1
          })
        ]),
        o("div", tt, [
          (m(!0), d(v, null, y(E.value, (t, r) => (m(), d("div", {
            key: r,
            class: "flex-1 flex flex-col gap-6"
          }, [
            M(L, { name: "stagger" }, {
              default: D(() => [
                (m(!0), d(v, null, y(t, (s) => (m(), d("div", {
                  key: s.id,
                  class: f(["relative group cursor-pointer overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl bg-white dark:bg-gray-900 w-full transition-all duration-500 ease-out hover:-translate-y-1", [
                    s.pcHeight,
                    // Zigzag Height (22rem or 28rem)
                    I(s.globalIndex).gradient
                  ]])
                }, [
                  o("img", {
                    src: s.image,
                    loading: "lazy",
                    class: "absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    alt: "Item"
                  }, null, 8, et),
                  e[1] || (e[1] = o("div", { class: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" }, null, -1)),
                  o("div", at, [
                    o("span", ot, _(s.title), 1)
                  ])
                ], 2))), 128))
              ]),
              _: 2
            }, 1024)
          ]))), 128))
        ]),
        o("div", {
          ref_key: "loadTrigger",
          ref: w,
          class: "h-24 w-full flex items-center justify-center mt-10"
        }, [
          b.value ? (m(), d("div", st, [...e[2] || (e[2] = [
            o("span", { class: "w-3 h-3 bg-pink-500 rounded-full animate-bounce" }, null, -1),
            o("span", { class: "w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-100" }, null, -1),
            o("span", { class: "w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-200" }, null, -1)
          ])])) : N("", !0)
        ], 512)
      ])
    ]));
  }
}), lt = (a, c) => {
  const l = a.__vccOpts || a;
  for (const [i, u] of c)
    l[i] = u;
  return l;
}, it = /* @__PURE__ */ lt(rt, [["__scopeId", "data-v-fe1f7d6a"]]), nt = /* @__PURE__ */ j({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(a) {
    const c = g("normal");
    return (async () => (a._p.my.emitter = a._p.f.new_emitter(), a._p.my.emitter.on("msg", async (l) => {
      console.log("_p.my.emitter.on", l);
    }), await a._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: a._p,
      _$p: a._$p
    }), a._p.f.listen("msg", async (l) => {
      if (console.log("_p.f.listen", l), l.type === "on:change") {
        const i = l.custom?.mode, u = l.custom.theme;
        console.log("Theme changed to: ", u), c.value = i;
        const p = document.documentElement;
        u === "dark" ? p.classList.add("dark") : p.classList.remove("dark");
      }
    }), setTimeout(async () => {
      await a._p.f.call("msg", {
        type: "on:change",
        _p: a._p,
        _$p: a._$p
      });
    }, 500)))(), (l, i) => (m(), W(it, {
      _p: a._p,
      __p: a._$p,
      mode: c.value
    }, null, 8, ["_p", "__p", "mode"]));
  }
}), dt = async (a) => ({
  set: async (c) => {
    console.log(`--hydrator [${c.data.curr.type}]`);
    const i = J(nt, {
      _p: a,
      _$p: c
    }), u = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          a.f.call("msg", {
            type: "change",
            _p: a,
            _$p: c,
            custom: {}
          });
        }
      }
    }, p = document.getElementById(a.f.name("vue-root"));
    return i.mount(p), u;
  }
});
export {
  dt as hydrator,
  dt as index
};
