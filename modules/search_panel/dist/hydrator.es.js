import { d as z, r as m, s as j, c as q, w as R, o as V, a as I, b as u, e as n, f as r, g as P, h as b, i as O, n as x, v as H, u as _, j as K, F as E, k as M, l as h, t as T, T as Q, m as Y, p as G } from "./runtime-dom.esm-bundler-sESdHIZ_.js";
const J = ["placeholder"], W = {
  key: 0,
  class: "absolute top-14 left-0 w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 flex flex-col origin-top will-change-transform"
}, X = {
  key: 0,
  class: "p-4 space-y-3"
}, Z = {
  key: 1,
  class: "p-6 text-center text-gray-400 dark:text-gray-500"
}, ee = { class: "text-sm" }, te = { class: "font-bold text-gray-600 dark:text-gray-300" }, ae = {
  key: 2,
  class: "max-h-80 overflow-y-auto py-2 custom-scrollbar",
  role: "listbox"
}, re = ["onClick", "onMouseenter", "aria-selected"], se = { class: "flex flex-col" }, oe = ["innerHTML"], le = { class: "text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500" }, ne = {
  key: 3,
  class: "bg-gray-50 dark:bg-gray-900/50 px-4 py-2 text-[10px] uppercase tracking-wide text-gray-400 flex justify-between items-center"
}, ue = 300, ie = /* @__PURE__ */ z({
  __name: "Search",
  props: {
    suggestions: {},
    onFocus: { type: Function },
    _p: {},
    _$p: {}
  },
  emits: ["update:query", "select"],
  setup(a, { emit: c }) {
    const v = a, i = v._$p, s = c, l = m(""), o = j([]), y = m(!1), d = m(-1), $ = m(null), f = m(!1);
    let p;
    const L = {
      sm: {
        wrapper: "h-9 rounded-xl",
        iconBox: "w-9",
        icon: "h-4 w-4",
        input: "text-sm",
        dropdownTop: "top-11",
        itemPadding: "px-3 py-2"
      },
      md: {
        wrapper: "h-12 rounded-2xl",
        iconBox: "w-12",
        icon: "h-5 w-5",
        input: "text-base",
        dropdownTop: "top-14",
        itemPadding: "px-4 py-3"
      },
      xl: {
        wrapper: "h-14 rounded-2xl",
        iconBox: "w-14",
        icon: "h-6 w-6",
        input: "text-lg",
        dropdownTop: "top-16",
        itemPadding: "px-5 py-4"
      },
      xxl: {
        wrapper: "h-16 rounded-3xl",
        iconBox: "w-16",
        icon: "h-7 w-7",
        input: "text-xl",
        dropdownTop: "top-20",
        itemPadding: "px-6 py-5"
      }
    }, S = q(() => i.data.curr.data.size || "md"), w = q(() => L[S.value]);
    R(
      () => v.suggestions,
      (e) => {
        o.value = Array.isArray(e) ? e : [], y.value = !0, f.value = !1;
      },
      { immediate: !0 }
    );
    const D = () => {
      const e = l.value.trim();
      if (p && clearTimeout(p), !e) {
        o.value = [], y.value = !1, f.value = !1, s("update:query", { query: "", suggestions: [] });
        return;
      }
      f.value = !0, p = window.setTimeout(() => {
        s("update:query", { query: e, suggestions: o.value });
      }, ue);
    }, F = (e) => {
      !y.value || o.value.length === 0 || (e.key === "ArrowDown" ? (e.preventDefault(), d.value = (d.value + 1) % o.value.length) : e.key === "ArrowUp" ? (e.preventDefault(), d.value = (d.value - 1 + o.value.length) % o.value.length) : e.key === "Enter" && d.value >= 0 ? (e.preventDefault(), p && clearTimeout(p), C(o.value[d.value])) : e.key === "Escape" && (y.value = !1));
    }, C = (e) => {
      l.value = e.title, y.value = !1, d.value = -1, s("select", e);
    }, A = () => {
      p && clearTimeout(p), l.value = "", o.value = [], y.value = !1, d.value = -1, f.value = !1, s("update:query", { query: "", suggestions: [] });
    }, N = (e) => {
      if (!l.value) return e;
      const t = l.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return e.replace(
        new RegExp(`(${t})`, "gi"),
        '<span class="font-bold text-purple-600">$1</span>'
      );
    }, B = (e) => {
      $.value && !$.value.contains(e.target) && (y.value = !1);
    };
    return V(() => {
      document.addEventListener("mousedown", B);
    }), I(() => {
      p && clearTimeout(p), document.removeEventListener("mousedown", B);
    }), (e, t) => (n(), u("div", {
      ref_key: "searchContainer",
      ref: $,
      class: "relative w-full group z-50"
    }, [
      r("div", {
        class: x(["relative flex items-center w-full shadow-md overflow-hidden transition-all duration-200 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-100 dark:border-gray-700 group-focus-within:ring-2 group-focus-within:ring-purple-500/50 group-focus-within:border-transparent hover:scale-[1.005]", w.value.wrapper])
      }, [
        r("div", {
          class: x(["grid place-items-center h-full text-gray-400 group-focus-within:text-purple-500 transition-colors", w.value.iconBox])
        }, [
          (n(), u("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            class: x(w.value.icon)
          }, [...t[2] || (t[2] = [
            r("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }, null, -1)
          ])], 2))
        ], 2),
        O(r("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (g) => l.value = g),
          onInput: D,
          onKeydown: F,
          onFocus: t[1] || (t[1] = //@ts-ignore
          (...g) => a.onFocus && a.onFocus(...g)),
          class: x(["peer h-full w-full outline-none bg-transparent placeholder-gray-400 font-medium text-gray-700 dark:text-gray-100 pr-2", w.value.input]),
          type: "text",
          placeholder: `${_(i).data.curr.data.placeholder || "Search..."}`,
          autocomplete: "off"
        }, null, 42, J), [
          [H, l.value]
        ]),
        l.value ? (n(), u("div", {
          key: 0,
          onClick: A,
          class: "cursor-pointer p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        }, [...t[3] || (t[3] = [
          r("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4",
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }, [
            r("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            })
          ], -1)
        ])])) : b("", !0)
      ], 2),
      _(i).data.curr.data.show_sugg ? (n(), P(Q, {
        key: 0,
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "transform scale-95 opacity-0 translate-y-[-10px]",
        "enter-to-class": "transform scale-100 opacity-100 translate-y-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-from-class": "transform scale-100 opacity-100",
        "leave-to-class": "transform scale-95 opacity-0"
      }, {
        default: K(() => [
          y.value && l.value ? (n(), u("div", W, [
            f.value && o.value.length === 0 ? (n(), u("div", X, [
              (n(), u(E, null, M(3, (g) => r("div", {
                key: g,
                class: "flex items-center space-x-3 animate-pulse"
              }, [...t[4] || (t[4] = [
                r("div", { class: "h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full" }, null, -1),
                r("div", { class: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" }, null, -1)
              ])])), 64))
            ])) : !f.value && o.value.length === 0 ? (n(), u("div", Z, [
              r("p", ee, [
                t[5] || (t[5] = h('No result found for "', -1)),
                r("span", te, T(l.value), 1),
                t[6] || (t[6] = h('"', -1))
              ])
            ])) : (n(), u("ul", ae, [
              (n(!0), u(E, null, M(o.value, (g, k) => (n(), u("li", {
                key: k,
                onClick: (U) => C(g),
                onMouseenter: (U) => d.value = k,
                role: "option",
                "aria-selected": d.value === k,
                class: x(["px-4 py-3 cursor-pointer transition-colors flex items-center gap-3 border-b border-gray-50 dark:border-gray-700/30 last:border-0", d.value === k ? "bg-purple-50 dark:bg-purple-900/30" : "hover:bg-gray-50 dark:hover:bg-gray-700/30"])
              }, [
                t[7] || (t[7] = r("div", { class: "h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300 shrink-0" }, [
                  r("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    r("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    })
                  ])
                ], -1)),
                r("div", se, [
                  r("span", {
                    class: "text-sm font-medium text-gray-800 dark:text-gray-200",
                    innerHTML: N(g?.[_(i).data.curr.data.map.title] || "")
                  }, null, 8, oe),
                  r("span", le, T(g?.[_(i).data.curr.data.map.label] || ""), 1)
                ])
              ], 42, re))), 128))
            ])),
            o.value.length > 0 ? (n(), u("div", ne, [
              r("span", null, T(o.value.length) + " Results", 1),
              t[8] || (t[8] = h()),
              t[9] || (t[9] = r("span", { class: "hidden md:inline" }, [
                h("Use "),
                r("kbd", { class: "font-sans border border-gray-300 dark:border-gray-600 rounded px-1 mx-1" }, "↑↓"),
                h(" to navigate")
              ], -1))
            ])) : b("", !0)
          ])) : b("", !0)
        ]),
        _: 1
      })) : b("", !0)
    ], 512));
  }
}), de = (a, c) => {
  const v = a.__vccOpts || a;
  for (const [i, s] of c)
    v[i] = s;
  return v;
}, ce = /* @__PURE__ */ de(ie, [["__scopeId", "data-v-732773ec"]]), pe = /* @__PURE__ */ z({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(a) {
    const c = m([]);
    a._p.f.listen("msg", (s) => {
      s.type === "search:query" && (c.value = [
        ...s._$p?.data?.curr?.data?.sugg ?? []
      ]);
    });
    const v = async (s) => {
      await a._p.f.call("msg", {
        type: "search:query",
        _p: { query: s.query },
        _$p: a._$p
      });
    }, i = async (s) => {
      await a._p.f.call("msg", {
        type: "search:select",
        _p: { item: s },
        _$p: a._$p
      });
    };
    return (s, l) => (n(), u("div", {
      "class-old": "p-1 bg-red-100",
      class: x(a._$p.data.curr.data.class || "")
    }, [
      Y(ce, {
        suggestions: c.value,
        _p: a._p,
        _$p: a._$p,
        "onUpdate:query": v,
        onSelect: i
      }, null, 8, ["suggestions", "_p", "_$p"])
    ], 2));
  }
}), ve = async (a) => ({
  set: async (c) => {
    console.log(`--hydrator [${c.data.curr.type}]`);
    const i = G(pe, {
      _p: a,
      _$p: c
    }), s = {
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
    }, l = document.getElementById(a.f.name("vue-root"));
    return i.mount(l), s;
  }
});
export {
  ve as hydrator,
  ve as index
};
