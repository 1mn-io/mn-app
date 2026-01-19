import { d as I, o as B, a as D, c as m, b as h, n as g, u as M, e, F as _, r as $, f as T, g as z, h as w, i as F, t as v, j as V, k as X, l as H, m as P } from "./runtime-dom.esm-bundler-RESc_Ie8.js";
const U = ["id"], L = ["src", "alt"], G = { class: "absolute inset-0 flex flex-col justify-end md:justify-center px-6 pb-12 md:pb-0 md:px-16 max-w-7xl mx-auto w-full" }, K = {
  key: 0,
  class: "inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-sm shadow-sm"
}, O = { class: "text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 drop-shadow-md" }, R = { class: "text-sm sm:text-base md:text-lg text-gray-100 mb-6 font-medium leading-relaxed drop-shadow max-w-md line-clamp-2 md:line-clamp-3" }, W = ["onClick"], J = { class: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm" }, Q = ["onClick"], Y = /* @__PURE__ */ I({
  __name: "carousel",
  props: {
    _p: {},
    $p: {},
    _$p: {},
    _$cb: {}
  },
  setup(o) {
    const t = o, a = w(0), r = w(null), l = w(0), d = w(0), n = t._p.f.name("vue-root"), u = T(() => {
      const s = t._$p.data.curr.data.data;
      return Array.isArray(s) && s.length > 0 && "image" in s[0] ? s : C;
    }), C = [
      {
        title: "Summer 2024",
        desc: "Minimalist essentials designed for the modern wardrobe. Crafted with sustainable materials.",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        tag: "New Arrival",
        linkId: "summer"
      },
      {
        title: "Sonic Fidelity",
        desc: "Experience sound as the artist intended. Active noise cancellation meets premium comfort.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
        tag: "Tech",
        linkId: "tech"
      }
    ], x = () => {
      a.value = (a.value + 1) % u.value.length, k();
    }, y = () => {
      a.value = a.value === 0 ? u.value.length - 1 : a.value - 1, k();
    }, S = (s) => {
      a.value = s, k();
    }, A = (s) => {
      l.value = s.changedTouches[0].screenX, b();
    }, j = (s) => {
      d.value = s.changedTouches[0].screenX, q(), f();
    }, q = () => {
      d.value < l.value - 50 && x(), d.value > l.value + 50 && y();
    }, f = () => {
      r.value && clearInterval(r.value), r.value = setInterval(x, 5e3);
    }, b = () => {
      r.value && clearInterval(r.value);
    }, k = () => {
      b(), f();
    }, E = (s) => {
      t._$cb && t._$cb.add && t._$cb.add({
        $d: { data: s.linkId, theme: "light" },
        el: document.getElementById(n)
      });
    };
    return B(() => {
      f();
    }), D(() => {
      b();
    }), (s, c) => (h(), m("div", {
      id: M(n),
      class: g(`${o._p.f.name("carousel-wrapper")} relative w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden group select-none font-sans bg-gray-100`),
      onMouseenter: b,
      onMouseleave: f,
      onTouchstart: A,
      onTouchend: j
    }, [
      e("div", {
        class: g(`${o._p.f.name("slider-track")} flex h-full transition-transform duration-500 ease-out`),
        style: z({ transform: `translateX(-${a.value * 100}%)` })
      }, [
        (h(!0), m(_, null, $(u.value, (i, p) => (h(), m("div", {
          key: p,
          class: "w-full h-full shrink-0 relative bg-gray-200"
        }, [
          e("img", {
            src: i.image,
            alt: i.title,
            class: "w-full h-full object-cover",
            loading: "lazy"
          }, null, 8, L),
          c[1] || (c[1] = e("div", { class: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/20 md:to-transparent" }, null, -1)),
          e("div", G, [
            e("div", {
              class: g(["max-w-xl md:mb-8 transition-opacity duration-300", a.value === p ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"])
            }, [
              i.tag ? (h(), m("span", K, v(i.tag), 1)) : F("", !0),
              e("h2", O, v(i.title), 1),
              e("p", R, v(i.desc), 1),
              e("button", {
                onClick: (N) => E(i),
                class: g(`${o._p.f.name("cta-btn")} inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-bold text-black bg-white hover:bg-gray-100 transition-colors duration-200 rounded-md shadow-lg transform active:scale-95`)
              }, [
                V(v(i.ctaText || "Shop Now") + " ", 1),
                c[0] || (c[0] = e("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "2.5",
                  stroke: "currentColor",
                  class: "w-4 h-4 ml-2"
                }, [
                  e("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                  })
                ], -1))
              ], 10, W)
            ], 2)
          ])
        ]))), 128))
      ], 6),
      e("button", {
        onClick: y,
        class: "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 hover:bg-white text-white hover:text-black backdrop-blur-sm transition-all duration-200 shadow-lg border border-white/20 hidden group-hover:flex"
      }, [...c[2] || (c[2] = [
        e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "2.5",
          stroke: "currentColor",
          class: "w-5 h-5 md:w-6 md:h-6"
        }, [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 19.5L8.25 12l7.5-7.5"
          })
        ], -1)
      ])]),
      e("button", {
        onClick: x,
        class: "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 hover:bg-white text-white hover:text-black backdrop-blur-sm transition-all duration-200 shadow-lg border border-white/20 hidden group-hover:flex"
      }, [...c[3] || (c[3] = [
        e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "2.5",
          stroke: "currentColor",
          class: "w-5 h-5 md:w-6 md:h-6"
        }, [
          e("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
          })
        ], -1)
      ])]),
      e("div", J, [
        (h(!0), m(_, null, $(u.value, (i, p) => (h(), m("button", {
          key: p,
          onClick: (N) => S(p),
          class: "relative transition-all duration-300 p-1"
        }, [
          e("div", {
            class: g([
              "h-2 w-2 rounded-full transition-all duration-300 shadow-sm",
              a.value === p ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            ])
          }, null, 2)
        ], 8, Q))), 128))
      ])
    ], 42, U));
  }
}), Z = (o, t) => {
  const a = o.__vccOpts || o;
  for (const [r, l] of t)
    a[r] = l;
  return a;
}, tt = /* @__PURE__ */ Z(Y, [["__scopeId", "data-v-318c5a1a"]]), et = ["id"], at = /* @__PURE__ */ I({
  __name: "index",
  props: {
    _p: {},
    $p: {},
    _$p: {},
    _$cb: {}
  },
  setup(o) {
    const t = o, a = T(() => t._p.f.name("entry-root")), l = X({
      data: {
        curr: {
          id: "carousel-1",
          type: "slider",
          data: {
            // PASS SLIDES HERE
            data: [
              {
                title: "Premium Headphones",
                desc: "Immerse yourself in crystal clear sound with active noise cancellation.",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
                tag: "Audio Gear",
                ctaText: "Listen Now",
                linkId: "electronics"
              },
              {
                title: "Urban Streetwear",
                desc: "Redefine your style with our limited edition summer drops.",
                image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
                tag: "Fashion",
                ctaText: "View Collection",
                linkId: "fashion"
              },
              {
                title: "Smart Home",
                desc: "Automate your life with intelligent devices designed for comfort.",
                image: "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2070&auto=format&fit=crop",
                tag: "Technology",
                ctaText: "Upgrade Home",
                linkId: "home"
              },
              {
                title: "Fitness Essentials",
                desc: "Gear up for your fitness journey with our top-rated equipment.",
                image: "https://images.unsplash.com/photo-1554284126-3e3b0e4f3b4c?q=80&w=2070&auto=format&fit=crop",
                tag: "Health & Wellness",
                ctaText: "Shop Now",
                linkId: "fitness"
              },
              {
                title: "Travel in Style",
                desc: "Explore the world with our durable and stylish luggage collection.",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
                tag: "Travel",
                ctaText: "Discover More",
                linkId: "travel"
              },
              {
                title: "Culinary Delights",
                desc: "Upgrade your kitchen with our premium cookware and gadgets.",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
                tag: "Kitchenware",
                ctaText: "Cook Now",
                linkId: "kitchen"
              }
            ],
            theme: t._$p.data.curr.data.theme || "light"
          }
        }
      }
    }), d = {
      change: ((n) => {
        t._$cb && t._$cb.change && t._$cb.change(n);
      }),
      add: ((n) => {
        console.log("Parent received click action for ID:", n.$d.data), t._$cb && t._$cb.add && t._$cb.add(n);
      })
    };
    return (n, u) => (h(), m("div", { id: a.value }, [
      H(tt, {
        _p: o._p,
        $p: o.$p,
        _$p: l,
        _$cb: d
      }, null, 8, ["_p", "$p", "_$p"])
    ], 8, et));
  }
}), st = async (o) => ({
  set: async (t, a) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const l = P(at, {
      _p: o,
      _$p: t,
      _$cb: a
    }), d = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          a?.change({ _$p: t });
        }
      }
    }, n = document.getElementById(o.f.name("vue-root"));
    return l.mount(n), d;
  }
});
export {
  st as hydrator,
  st as index
};
