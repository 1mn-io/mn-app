import { d as defineComponent, o as onMounted, a as onUnmounted, c as createElementBlock, b as openBlock, n as normalizeClass, u as unref, e as createBaseVNode, F as Fragment, r as renderList, f as computed, g as normalizeStyle, h as ref, i as createCommentVNode, t as toDisplayString, j as createTextVNode, k as createBlock, l as createApp } from "./runtime-dom.esm-bundler-CVxkd4vz.js";
const _hoisted_1$1 = ["id"], _hoisted_2 = ["onClick"], _hoisted_3 = ["src", "alt"], _hoisted_4 = { class: "absolute inset-0 flex flex-col justify-end md:justify-center px-6 pb-12 md:pb-0 md:px-16 max-w-7xl mx-auto w-full" }, _hoisted_5 = {
  key: 0,
  class: "inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-sm shadow-sm"
}, _hoisted_6 = { class: "text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 drop-shadow-md" }, _hoisted_7 = { class: "text-sm sm:text-base md:text-lg text-gray-100 mb-6 font-medium leading-relaxed drop-shadow max-w-md line-clamp-2 md:line-clamp-3" }, _hoisted_8 = ["onClick"], _hoisted_9 = { class: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm" }, _hoisted_10 = ["onClick"], _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "carousel",
  props: {
    _p: {},
    $p: {},
    _$p: {},
    _$cb: {}
  },
  setup(e) {
    const a = e, t = a._$p;
    console.log(a._$p);
    const r = ref(0), n = ref(null), o = ref(0), s = ref(0), u = a._p.f.name("vue-root"), b = (l) => {
      console.log(l);
      try {
        const c = l[t.data.curr.data.map.onClick];
        if (!c)
          throw new Error("invalid link");
        location.href = c;
      } catch {
      }
    }, m = computed(() => {
      const l = a._$p.data.curr.data.value.l;
      return Array.isArray(l) && l.length > 0 && t.data.curr.data.map.image in l[0] ? l : k;
    }), k = [
      /* { 
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
       }*/
    ], w = () => {
      r.value = (r.value + 1) % m.value.length, x();
    }, y = () => {
      r.value = r.value === 0 ? m.value.length - 1 : r.value - 1, x();
    }, B = (l) => {
      r.value = l, x();
    }, C = (l) => {
      o.value = l.changedTouches[0].screenX, v();
    }, N = (l) => {
      s.value = l.changedTouches[0].screenX, V(), g();
    }, V = () => {
      s.value < o.value - 50 && w(), s.value > o.value + 50 && y();
    }, g = () => {
      n.value && clearInterval(n.value), n.value = setInterval(w, 5e3);
    }, v = () => {
      n.value && clearInterval(n.value);
    }, x = () => {
      v(), g();
    }, S = (l) => {
    };
    return onMounted(() => {
      g();
    }), onUnmounted(() => {
      v();
    }), (l, c) => (openBlock(), createElementBlock("div", {
      id: unref(u),
      class: normalizeClass(`${e._p.f.name("carousel-wrapper")} relative w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden group select-none font-sans bg-gray-100`),
      onMouseenter: v,
      onMouseleave: g,
      onTouchstart: C,
      onTouchend: N
    }, [
      createBaseVNode("div", {
        class: normalizeClass(`${e._p.f.name("slider-track")} flex h-full transition-transform duration-500 ease-out`),
        style: normalizeStyle({ transform: `translateX(-${r.value * 100}%)` })
      }, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(m.value, (i, _) => (openBlock(), createElementBlock("div", {
          key: _,
          class: "w-full h-full shrink-0 relative bg-gray-200",
          onClick: ($) => b(i)
        }, [
          createBaseVNode("img", {
            src: i[unref(t).data.curr.data.map.image],
            alt: i[unref(t).data.curr.data.map.title],
            class: "w-full h-full object-cover",
            loading: "lazy"
          }, null, 8, _hoisted_3),
          c[1] || (c[1] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/20 md:to-transparent" }, null, -1)),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", {
              class: normalizeClass(["max-w-xl md:mb-8 transition-opacity duration-300", r.value === _ ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"])
            }, [
              i[unref(t).data.curr.data.map.tag] ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(i[unref(t).data.curr.data.map.tag]), 1)) : createCommentVNode("", !0),
              createBaseVNode("h2", _hoisted_6, toDisplayString(i[unref(t).data.curr.data.map.title]), 1),
              createBaseVNode("p", _hoisted_7, toDisplayString(i[unref(t).data.curr.data.map.desc]), 1),
              i[unref(t).data.curr.data.map.ctaText] ? (openBlock(), createElementBlock("button", {
                key: 1,
                onClick: ($) => S(),
                class: normalizeClass(`${e._p.f.name("cta-btn")} inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-bold text-black bg-white hover:bg-gray-100 transition-colors duration-200 rounded-md shadow-lg transform active:scale-95`)
              }, [
                createTextVNode(toDisplayString(i[unref(t).data.curr.data.map.ctaText]) + " ", 1),
                c[0] || (c[0] = createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "2.5",
                  stroke: "currentColor",
                  class: "w-4 h-4 ml-2"
                }, [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                  })
                ], -1))
              ], 10, _hoisted_8)) : createCommentVNode("", !0)
            ], 2)
          ])
        ], 8, _hoisted_2))), 128))
      ], 6),
      createBaseVNode("button", {
        onClick: y,
        class: "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 hover:bg-white text-white hover:text-black backdrop-blur-sm transition-all duration-200 shadow-lg border border-white/20 hidden group-hover:flex"
      }, [...c[2] || (c[2] = [
        createBaseVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "2.5",
          stroke: "currentColor",
          class: "w-5 h-5 md:w-6 md:h-6"
        }, [
          createBaseVNode("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 19.5L8.25 12l7.5-7.5"
          })
        ], -1)
      ])]),
      createBaseVNode("button", {
        onClick: w,
        class: "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/30 hover:bg-white text-white hover:text-black backdrop-blur-sm transition-all duration-200 shadow-lg border border-white/20 hidden group-hover:flex"
      }, [...c[3] || (c[3] = [
        createBaseVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "2.5",
          stroke: "currentColor",
          class: "w-5 h-5 md:w-6 md:h-6"
        }, [
          createBaseVNode("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
          })
        ], -1)
      ])]),
      createBaseVNode("div", _hoisted_9, [
        (openBlock(!0), createElementBlock(Fragment, null, renderList(m.value, (i, _) => (openBlock(), createElementBlock("button", {
          key: _,
          onClick: ($) => B(_),
          class: "relative transition-all duration-300 p-1"
        }, [
          createBaseVNode("div", {
            class: normalizeClass([
              "h-2 w-2 rounded-full transition-all duration-300 shadow-sm",
              r.value === _ ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            ])
          }, null, 2)
        ], 8, _hoisted_10))), 128))
      ])
    ], 42, _hoisted_1$1));
  }
}), _export_sfc = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [r, n] of a)
    t[r] = n;
  return t;
}, Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0eb925f9"]]);
function d(e, a) {
  return a.split(".").reduce((t, r) => t?.[r], e);
}
function f(e, a) {
  const { open: t, close: r } = a, n = [];
  let o = 0;
  for (; o < e.length; ) {
    const s = e.indexOf(t, o);
    if (s === -1) {
      n.push({ type: "text", value: e.slice(o) });
      break;
    }
    s > o && n.push({ type: "text", value: e.slice(o, s) });
    const u = e.indexOf(r, s + t.length);
    if (u === -1)
      throw new Error(`Unclosed template placeholder starting at ${s}`);
    const b = e.slice(s + t.length, u).trim(), [m, k] = b.split("=");
    n.push({ type: "param", value: m, defaultValue: k }), o = u + r.length;
  }
  return n;
}
function p(e, a, t) {
  const r = /* @__PURE__ */ new Set(), n = e.map((o) => {
    if (o.type === "text") return o.value;
    const s = d(a, o.value);
    if (r.add(o.value.split(".")[0]), s === void 0 || s === "") {
      if (o.defaultValue !== void 0) return o.defaultValue;
      if (t.strict) throw new Error(`Missing param: ${o.value}`);
      return "";
    }
    return t.encode ? encodeURIComponent(String(s)) : String(s);
  }).join("");
  if (t.strict) {
    for (const o of Object.keys(a))
      if (!r.has(o))
        throw new Error(`Unused param provided: ${o}`);
  }
  return n;
}
function h(e, a) {
  const t = {
    open: a?.open,
    close: a?.close,
    encode: a?.encode ?? !1,
    strict: a?.strict ?? !1
  }, r = f(e, t);
  return (n) => p(r, n, t);
}
const _hoisted_1 = ["id"], _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    _p: {},
    $p: {},
    _$p: {},
    _$cb: {}
  },
  setup(__props) {
    const props = __props, _$p = props._$p, rootId = computed(() => props._p.f.name("entry-root")), _ready = ref(!1);
    (async () => {
      try {
        if (!_$p.data.curr.data.api.url)
          throw new Error("api not set");
        let _headers = {}, _body = null;
        try {
          const a = h(JSON.stringify(_$p.data.curr.data.api.headers), { open: "<", close: ">" })({
            localStorage: {
              token: localStorage.getItem("token") || ""
            }
          });
          _headers = JSON.parse(a);
        } catch (e) {
        }
        let _o = {
          method: _$p.data.curr.data.api.method,
          headers: _headers
        };
        try {
          _body = JSON.stringify(_$p.data.curr.data.api.body), _body && (_o.body = _body);
        } catch (e) {
        }
        console.log(_o);
        const _r = await fetch(_$p.data.curr.data.api.url, _o), json = await _r.json(), _d = eval(`${_$p.data.curr.data.api.rsp_path}`);
        console.log(_d), _$p.data.curr.data.value.l = _d, _ready.value = !0;
      } catch (e) {
      }
      try {
        _$p.data.curr.data.value.l.length > 0 && (_ready.value = !0);
      } catch (e) {
      }
    })();
    const carouselCallbacks = {
      change: ((e) => {
        props._$cb && props._$cb.change && props._$cb.change(e);
      }),
      add: ((e) => {
        console.log("Parent received click action for ID:", e.$d.data), props._$cb && props._$cb.add && props._$cb.add(e);
      })
    };
    return (e, a) => (openBlock(), createElementBlock("div", { id: rootId.value }, [
      _ready.value ? (openBlock(), createBlock(Carousel, {
        key: 0,
        _p: __props._p,
        $p: __props.$p,
        _$p: unref(_$p),
        _$cb: carouselCallbacks
      }, null, 8, ["_p", "$p", "_$p"])) : createCommentVNode("", !0)
    ], 8, _hoisted_1));
  }
}), index = async (e) => ({
  set: async (a, t) => {
    console.log(`--hydrator [${a.data.curr.type}]`);
    const n = createApp(_sfc_main, {
      _p: e,
      _$p: a,
      _$cb: t
    }), o = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t?.change({ _$p: a });
        }
      }
    }, s = document.getElementById(e.f.name("vue-root"));
    return n.mount(s), o;
  }
});
export {
  index as hydrator,
  index
};
