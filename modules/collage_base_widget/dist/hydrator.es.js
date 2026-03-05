import { d as S, r as f, w as V, o as B, a as g, c as h, b as c, F as _, e as k, n as x, f as E, g as T, t as $, T as O, h as C, i as L, j as J, k as U } from "./runtime-dom.esm-bundler-CvtXE6HH.js";
function A(e, o) {
  return o.split(".").reduce((s, n) => s?.[n], e);
}
function D(e, o) {
  const { open: s, close: n } = o, i = [];
  let t = 0;
  for (; t < e.length; ) {
    const d = e.indexOf(s, t);
    if (d === -1) {
      i.push({ type: "text", value: e.slice(t) });
      break;
    }
    d > t && i.push({ type: "text", value: e.slice(t, d) });
    const m = e.indexOf(n, d + s.length);
    if (m === -1)
      throw new Error(`Unclosed template placeholder starting at ${d}`);
    const w = e.slice(d + s.length, m).trim(), [v, y] = w.split("=");
    i.push({ type: "param", value: v, defaultValue: y }), t = m + n.length;
  }
  return i;
}
function F(e, o, s) {
  const n = /* @__PURE__ */ new Set(), i = e.map((t) => {
    if (t.type === "text") return t.value;
    const d = A(o, t.value);
    if (n.add(t.value.split(".")[0]), d === void 0 || d === "") {
      if (t.defaultValue !== void 0) return t.defaultValue;
      if (s.strict) throw new Error(`Missing param: ${t.value}`);
      return "";
    }
    return s.encode ? encodeURIComponent(String(d)) : String(d);
  }).join("");
  if (s.strict) {
    for (const t of Object.keys(o))
      if (!n.has(t))
        throw new Error(`Unused param provided: ${t}`);
  }
  return i;
}
function H(e, o) {
  const s = {
    open: o?.open,
    close: o?.close,
    encode: o?.encode ?? !1,
    strict: o?.strict ?? !1
  }, n = D(e, s);
  return (i) => F(n, i, s);
}
const G = { class: "min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 font-sans selection:bg-pink-500 selection:text-white" }, P = { class: "max-w-480 mx-auto px-4 md:px-8" }, R = { class: "flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4" }, q = { class: "overflow-x-auto no-scrollbar w-full flex md:justify-center" }, K = { class: "flex px-1 gap-4 md:gap-12 min-w-max md:min-w-0 md:justify-center" }, Q = ["onClick"], W = { class: "px-3 py-4 md:px-8 md:py-10 max-w-480 mx-auto" }, X = {
  "class-old": "flex flex-wrap gap-3 md:hidden bg-red-700",
  class: "flex flex-wrap gap-3 md:hidden"
}, Y = ["src"], Z = { class: "absolute bottom-3 left-3 bg-white/95 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg z-10" }, ee = { class: "text-[10px] font-bold uppercase tracking-widest text-black dark:text-white" }, te = { class: "hidden md:flex md:gap-6 items-start" }, ae = ["src"], oe = { class: "absolute bottom-5 left-5 bg-white/95 dark:bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg z-10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300" }, se = { class: "text-xs font-bold uppercase tracking-widest" }, le = /* @__PURE__ */ S({
  __name: "collage",
  props: {
    mode: {},
    _$p: {}
  },
  setup(e) {
    const o = e, s = C(() => o.mode ?? "normal"), n = f(o._$p.data.curr.data.value.l || []), i = f([]), t = f(""), d = C(() => n.value), m = f(1), w = f(1), v = f(!1), y = f(null);
    V(t, (p) => {
      console.log("Active tab changed:", p), m.value = 1, I(!1);
    }), B(() => {
      if (!y.value) return;
      new IntersectionObserver(
        (l) => {
          l[0].isIntersecting && m.value < w.value && !v.value && (m.value++, I(!0), console.log("load_more"));
        },
        { threshold: 0.5 }
      ).observe(y.value);
    });
    const I = async (p = !1) => {
      const l = o._$p.data.curr.data.api, a = H(JSON.stringify(l.body), { open: "<", close: ">" }), u = JSON.parse(a({ page: m.value, tab_id: t.value }));
      u.body.page = Number(u.body.page), console.log("binded body updated", u), v.value = !0;
      try {
        const b = await (await fetch(l.url, {
          method: l.method,
          headers: l.headers,
          body: JSON.stringify(u)
        })).json();
        w.value = b.data.total_pages, n.value = p ? [...n.value, ...b.data.documents] : b.data.documents;
      } catch (r) {
        console.error("Error fetching items:", r);
      } finally {
        v.value = !1;
      }
    };
    (async () => {
      const p = o._$p.data.curr.data.tabs.api;
      try {
        const a = await (await fetch(p.url, {
          method: p.method,
          headers: p.headers,
          body: JSON.stringify(p.body)
        })).json(), u = Object.keys(a.data.facets.category).map((r) => ({
          id: r,
          title: r.charAt(0).toUpperCase() + r.slice(1)
        }));
        i.value = u, u.length && (t.value = u[0].id, m.value = 1, I(!1));
      } catch (l) {
        console.error("Error fetching tabs:", l);
      }
    })();
    const N = (p) => {
      let l = 0;
      return p.map((a, u) => {
        let r = "";
        if (a.full)
          r = "w-full", l = 0;
        else {
          const j = l % 2 === 0;
          r = Math.floor(l / 2) % 2 === 0 ? j ? "w-[calc(60%-0.375rem)]" : "w-[calc(40%-0.375rem)]" : j ? "w-[calc(40%-0.375rem)]" : "w-[calc(60%-0.375rem)]", l++;
        }
        return { ...a, mobileClass: r, heightClass: "h-48 sm:h-56", globalIndex: u };
      });
    }, z = C(() => {
      const p = [[], [], [], []];
      return d.value.forEach((l, a) => {
        const u = a % 4;
        let r = "";
        const b = Math.floor(a / 4);
        u % 2 === 0 ? r = b % 2 === 0 ? "h-[22rem]" : "h-[28rem]" : r = b % 2 === 0 ? "h-[28rem]" : "h-[22rem]", p[u].push({
          ...l,
          pcHeight: r,
          globalIndex: a
        });
      }), p;
    }), M = C(() => N(d.value));
    return (p, l) => (g(), h("div", G, [
      c("nav", {
        class: x(["bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-all duration-300", s.value === "sticky" ? "sticky top-0 z-50" : "relative"])
      }, [
        c("div", P, [
          c("div", R, [
            c("div", q, [
              c("div", K, [
                (g(!0), h(_, null, k(i.value, (a, u) => (g(), h("button", {
                  key: a.id,
                  onClick: (r) => t.value = a.id,
                  class: x(["relative cursor-pointer px-2 py-4 text-sm md:text-lg font-bold transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-lg", t.value === a.id ? "text-black dark:text-white" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"])
                }, [
                  L($(a.title) + " ", 1),
                  c("span", {
                    class: x(["absolute bottom-2 left-0 w-full h-1 rounded-full transition-all duration-300 origin-center", t.value === a.id ? "bg-black dark:bg-white scale-x-100" : "bg-transparent scale-x-0 group-hover:bg-gray-300 group-hover:scale-x-50"])
                  }, null, 2)
                ], 10, Q))), 128))
              ])
            ])
          ])
        ])
      ], 2),
      c("main", W, [
        c("div", X, [
          E(O, { name: "stagger" }, {
            default: T(() => [
              (g(!0), h(_, null, k(M.value, (a) => (g(), h("div", {
                key: a.id,
                class: x(["relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl bg-white dark:bg-gray-900 transition-all duration-500 ease-out hover:-translate-y-1", [
                  a.mobileClass,
                  a.heightClass
                ]])
              }, [
                c("img", {
                  src: a.image,
                  loading: "lazy",
                  class: "absolute inset-0 w-full h-full object-cover",
                  alt: "Item"
                }, null, 8, Y),
                l[0] || (l[0] = c("div", { class: "absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" }, null, -1)),
                c("div", Z, [
                  c("span", ee, $(a.title), 1)
                ])
              ], 2))), 128))
            ]),
            _: 1
          })
        ]),
        c("div", te, [
          (g(!0), h(_, null, k(z.value, (a, u) => (g(), h("div", {
            key: u,
            class: "flex-1 flex flex-col gap-6"
          }, [
            E(O, { name: "stagger" }, {
              default: T(() => [
                (g(!0), h(_, null, k(a, (r) => (g(), h("div", {
                  key: r.id,
                  class: x(["relative group cursor-pointer overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl bg-white dark:bg-gray-900 w-full transition-all duration-500 ease-out hover:-translate-y-1", [
                    r.pcHeight
                    // Zigzag Height (22rem or 28rem)
                  ]])
                }, [
                  c("img", {
                    src: r.image,
                    loading: "lazy",
                    class: "absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    alt: "Item"
                  }, null, 8, ae),
                  l[1] || (l[1] = c("div", { class: "absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60" }, null, -1)),
                  c("div", oe, [
                    c("span", se, $(r.title), 1)
                  ])
                ], 2))), 128))
              ]),
              _: 2
            }, 1024)
          ]))), 128))
        ]),
        c("div", {
          ref_key: "loadTrigger",
          ref: y,
          class: "h-1 w-full"
        }, null, 512)
      ])
    ]));
  }
}), re = /* @__PURE__ */ S({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const o = f("normal");
    return (async () => (e._p.my.emitter = e._p.f.new_emitter(), e._p.my.emitter.on("msg", async (s) => {
      console.log("_p.my.emitter.on", s);
    }), await e._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: e._p,
      _$p: e._$p
    }), e._p.f.listen("msg", async (s) => {
      if (console.log("_p.f.listen", s), s.type === "on:change") {
        const n = s.custom?.mode, i = s.custom.theme;
        console.log("Theme changed to: ", i), o.value = n;
        const t = document.documentElement;
        i === "dark" ? t.classList.add("dark") : t.classList.remove("dark");
      }
    }), setTimeout(async () => {
      await e._p.f.call("msg", {
        type: "on:change",
        _p: e._p,
        _$p: e._$p
      });
    }, 500)))(), (s, n) => (g(), J(le, {
      _p: e._p,
      _$p: e._$p,
      mode: o.value
    }, null, 8, ["_p", "_$p", "mode"]));
  }
}), de = async (e) => ({
  set: async (o) => {
    console.log(`--hydrator [${o.data.curr.type}]`);
    const n = U(re, {
      _p: e,
      _$p: o
    }), i = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: o,
            custom: {}
          });
        }
      }
    }, t = document.getElementById(e.f.name("vue-root"));
    return n.mount(t), i;
  }
});
export {
  de as hydrator,
  de as index
};
