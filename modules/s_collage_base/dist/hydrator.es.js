const { defineComponent: H, computed: y, ref: d, watch: I, onMounted: J, openBlock: p, createElementBlock: c, createElementVNode: s, normalizeClass: v, Fragment: M, renderList: C, createTextVNode: A, toDisplayString: S, createVNode: E, TransitionGroup: z, withCtx: j, createCommentVNode: F, reactive: K, createBlock: N, unref: U, createApp: G } = window.Vue;
import { _ as O } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const R = { class: "min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-pink-500 selection:text-white" }, Q = { class: "max-w-[1920px] mx-auto px-4 md:px-8" }, X = { class: "flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4" }, Y = { class: "overflow-x-auto no-scrollbar w-full flex md:justify-center" }, Z = { class: "flex px-1 gap-4 md:gap-12 min-w-max md:min-w-0 md:justify-center" }, tt = ["onClick"], ot = { class: "px-3 py-4 md:px-8 md:py-10 max-w-[1920px] mx-auto" }, et = { class: "flex flex-wrap gap-3 md:hidden" }, at = ["src"], st = { class: "absolute bottom-3 left-3 bg-white/95 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg z-10" }, it = { class: "text-[10px] font-bold uppercase tracking-widest text-black dark:text-white" }, lt = { class: "hidden md:flex md:gap-6 items-start" }, rt = ["src"], nt = { class: "absolute bottom-5 left-5 bg-white/95 dark:bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg z-10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300" }, pt = { class: "text-xs font-bold uppercase tracking-widest" }, mt = {
  key: 0,
  class: "flex gap-2"
}, ct = /* @__PURE__ */ H({
  __name: "collage",
  props: {
    _p: {},
    _$p: {},
    mode: {}
  },
  setup(u) {
    const h = u, r = y(() => h.mode ?? "normal"), m = y(() => h._$p?.data?.curr?.data?.l ?? []), l = d("Men"), n = ["Men", "Women", "Beauty", "Kids", "Home", "himanshu", "gooo"], f = y(() => m.value.length > 0 ? m.value.map((e) => e.name ?? e.id) : n);
    I(f, (e) => {
      e.length > 0 && !e.includes(l.value) && (l.value = e[0]);
    }, { immediate: !0 });
    const g = d([]), x = (e, a) => {
      l.value = e;
      const t = g.value[a];
      t && t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }, T = [
      "bg-gradient-to-br from-orange-50 to-orange-100",
      "bg-gradient-to-br from-blue-50 to-blue-100",
      "bg-gradient-to-br from-purple-50 to-purple-100",
      "bg-gradient-to-br from-emerald-50 to-emerald-100",
      "bg-gradient-to-br from-rose-50 to-rose-100",
      "bg-gradient-to-br from-amber-50 to-yellow-100",
      "bg-gradient-to-br from-indigo-50 to-violet-100",
      "bg-gradient-to-br from-slate-50 to-gray-100"
    ], B = (e) => ({ gradient: T[e % T.length] }), L = {
      Men: [
        { id: "m1", title: "Sweatpants", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=700&h=900&fp-y=0.25", imageMobile: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=500&h=600&fp-y=0.2" },
        { id: "m2", title: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=700&h=900", imageMobile: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500&h=500&fp-y=0.35" },
        { id: "m3", title: "Hoodies", full: !0, image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=1200&h=700", imageMobile: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800&h=500&fp-y=0.4" },
        { id: "m4", title: "Jeans", image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=700&h=900", imageMobile: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.3" },
        { id: "m5", title: "Sneakers", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=700&h=900", imageMobile: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500&h=500&fp-y=0.5" },
        { id: "m6", title: "Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=700&h=900", imageMobile: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=500&h=500&fp-y=0.45" },
        { id: "m7", title: "Jackets", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=700&h=900", imageMobile: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.3" }
      ],
      Women: [
        { id: "w1", title: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "w2", title: "Skirts", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "w3", title: "Tops", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "w4", title: "Heels", full: !0, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "w5", title: "Bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "w6", title: "Jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "w7", title: "Activewear", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "w8", title: "Sunglasses", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" }
      ],
      Beauty: [
        { id: "b1", title: "Perfume", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "b2", title: "Lipstick", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "b3", title: "Skincare", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "b4", title: "Palettes", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "b5", title: "Serums", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" }
      ],
      Kids: [
        { id: "k1", title: "Toys", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "k2", title: "School", image: "https://images.unsplash.com/photo-1503919545885-d94c035542be?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1503919545885-d94c035542be?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "k3", title: "Baby Wear", image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "k4", title: "Sneakers", image: "https://images.unsplash.com/photo-1514989940723-e8a51630c71f?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1514989940723-e8a51630c71f?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" }
      ],
      Home: [
        { id: "h1", title: "Decor", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "h2", title: "Bedding", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "h3", title: "Plants", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "h4", title: "Chairs", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" },
        { id: "h5", title: "Lighting", image: "https://images.unsplash.com/photo-1507473888900-52e1adad5420?auto=format&fit=crop&q=80&w=500", imageMobile: "https://images.unsplash.com/photo-1507473888900-52e1adad5420?auto=format&fit=crop&q=80&w=500&h=560&fp-y=0.35" }
      ]
    }, V = (e) => {
      let a = 0;
      return e.map((t, o) => {
        let i = "";
        if (t.full)
          i = "w-full", a = 0;
        else {
          const w = a % 2 === 0;
          i = Math.floor(a / 2) % 2 === 0 ? w ? "w-[calc(60%-0.375rem)]" : "w-[calc(40%-0.375rem)]" : w ? "w-[calc(40%-0.375rem)]" : "w-[calc(60%-0.375rem)]", a++;
        }
        return { ...t, mobileClass: i, heightClass: "h-48 sm:h-56", globalIndex: o };
      });
    }, W = y(() => {
      const e = [[], [], [], []];
      return b.value.filter((t) => !!t.image).forEach((t, o) => {
        const i = o % 4;
        let q = "";
        const w = Math.floor(o / 4);
        i % 2 === 0 ? q = w % 2 === 0 ? "h-[22rem]" : "h-[28rem]" : q = w % 2 === 0 ? "h-[28rem]" : "h-[22rem]", e[i].push({
          ...t,
          pcHeight: q,
          globalIndex: o
        });
      }), e;
    }), b = d([]), k = d(!1), _ = d(null), D = (e) => {
      const a = m.value.find((o) => (o.name ?? o.id) === e), t = a?.items ?? a?.data?.data ?? [];
      return t.length === 0 && L[e]?.length ? L[e] : t.map((o) => ({
        id: o.id,
        title: o.title,
        image: o.imageUrl ?? o.image ?? "",
        imageMobile: o.imageUrlMobile ?? o.imageMobile ?? "",
        full: o.fullWidth ?? o.full ?? !1
      }));
    }, $ = async () => {
      if (k.value) return;
      k.value = !0, await new Promise((o) => setTimeout(o, 800));
      const a = D(l.value).map((o) => ({
        ...o,
        id: o.id + "_" + Date.now() + Math.random()
      })), t = [...b.value, ...a];
      b.value = t, k.value = !1;
    }, P = y(() => V(b.value.filter((e) => !!e.imageMobile)));
    return I([l, m], () => {
      b.value = [...D(l.value)];
    }, { deep: !0, immediate: !0 }), J(() => {
      const e = new IntersectionObserver((a) => {
        a[0].isIntersecting && $();
      }, { rootMargin: "100px", threshold: 0.1 });
      _.value && e.observe(_.value), I(_, (a) => {
        a && e.observe(a);
      });
    }), (e, a) => (p(), c("div", R, [
      s("nav", {
        class: v(["bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all duration-300", r.value === "sticky" ? "sticky top-0 z-50" : "relative"])
      }, [
        s("div", Q, [
          s("div", X, [
            s("div", Y, [
              s("div", Z, [
                (p(!0), c(M, null, C(f.value, (t, o) => (p(), c("button", {
                  key: t,
                  ref_for: !0,
                  ref: (i) => {
                    i && (g.value[o] = i);
                  },
                  onClick: (i) => x(t, o),
                  class: v(["relative px-2 py-4 text-sm md:text-lg font-bold transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-lg", l.value === t ? "text-black dark:text-white" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"])
                }, [
                  A(S(t) + " ", 1),
                  s("span", {
                    class: v(["absolute bottom-2 left-0 w-full h-1 rounded-full transition-all duration-300 origin-center", l.value === t ? "bg-black dark:bg-white scale-x-100" : "bg-transparent scale-x-0 group-hover:bg-gray-300 group-hover:scale-x-50"])
                  }, null, 2)
                ], 10, tt))), 128))
              ])
            ])
          ])
        ])
      ], 2),
      s("main", ot, [
        s("div", et, [
          E(z, { name: "stagger" }, {
            default: j(() => [
              (p(!0), c(M, null, C(P.value, (t) => (p(), c("div", {
                key: t.id,
                class: v(["relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl bg-white dark:bg-gray-900 transition-all duration-500 ease-out hover:-translate-y-1", [
                  t.mobileClass,
                  t.heightClass,
                  B(t.globalIndex).gradient
                ]])
              }, [
                s("img", {
                  src: t.imageMobile,
                  loading: "lazy",
                  class: "absolute inset-0 w-full h-full object-cover",
                  alt: "Item"
                }, null, 8, at),
                a[0] || (a[0] = s("div", { class: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" }, null, -1)),
                s("div", st, [
                  s("span", it, S(t.title), 1)
                ])
              ], 2))), 128))
            ]),
            _: 1
          })
        ]),
        s("div", lt, [
          (p(!0), c(M, null, C(W.value, (t, o) => (p(), c("div", {
            key: o,
            class: "flex-1 flex flex-col gap-6"
          }, [
            E(z, { name: "stagger" }, {
              default: j(() => [
                (p(!0), c(M, null, C(t, (i) => (p(), c("div", {
                  key: i.id,
                  class: v(["relative group cursor-pointer overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl bg-white dark:bg-gray-900 w-full transition-all duration-500 ease-out hover:-translate-y-1", [
                    i.pcHeight,
                    // Zigzag Height (22rem or 28rem)
                    B(i.globalIndex).gradient
                  ]])
                }, [
                  s("img", {
                    src: i.image,
                    loading: "lazy",
                    class: "absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    alt: "Item"
                  }, null, 8, rt),
                  a[1] || (a[1] = s("div", { class: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" }, null, -1)),
                  s("div", nt, [
                    s("span", pt, S(i.title), 1)
                  ])
                ], 2))), 128))
              ]),
              _: 2
            }, 1024)
          ]))), 128))
        ]),
        s("div", {
          ref_key: "loadTrigger",
          ref: _,
          class: "h-24 w-full flex items-center justify-center mt-10"
        }, [
          k.value ? (p(), c("div", mt, [...a[2] || (a[2] = [
            s("span", { class: "w-3 h-3 bg-pink-500 rounded-full animate-bounce" }, null, -1),
            s("span", { class: "w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-100" }, null, -1),
            s("span", { class: "w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-200" }, null, -1)
          ])])) : F("", !0)
        ], 512)
      ])
    ]));
  }
}), ht = /* @__PURE__ */ O(ct, [["__scopeId", "data-v-86ce1e2e"]]), ut = /* @__PURE__ */ H({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(u) {
    const h = u, r = h._p, m = K(h._$p), l = d("normal");
    return (async () => (r.my.emitter = r.f.new_emitter(), r.my.emitter.on("msg", async (n) => {
      console.log("_p.my.emitter.on", n);
    }), await r.my.emitter.emit("msg", {
      type: "on:change",
      _p: r,
      _$p: m
    }), r.f.listen("msg", async (n) => {
      if (console.log("_p.f.listen", n), n.type === "on:change") {
        const f = n.custom?.mode, g = n.custom.theme;
        console.log("Theme changed to: ", g), l.value = f;
        const x = document.documentElement;
        g === "dark" ? x.classList.add("dark") : x.classList.remove("dark");
      }
    }), setTimeout(async () => {
      await r.f.call("msg", {
        type: "on:change",
        _p: r,
        _$p: m
      });
    }, 500)))(), (n, f) => (p(), N(ht, {
      _p: U(r),
      _$p: m,
      mode: l.value
    }, null, 8, ["_p", "_$p", "mode"]));
  }
}), bt = async (u) => ({
  set: async (h) => {
    console.log(`--hydrator [${h.data.curr.type}]`);
    const m = G(ut, {
      _p: u,
      _$p: h
    }), l = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          u.f.call("msg", {
            type: "change",
            _p: u,
            _$p: h,
            custom: {}
          });
        }
      }
    }, n = document.getElementById(u.f.name("vue-root"));
    return m.mount(n), l;
  }
});
export {
  bt as hydrator,
  bt as index
};
