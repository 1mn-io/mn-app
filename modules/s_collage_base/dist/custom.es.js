const { defineComponent: ve, reactive: Ce, ref: i, watch: Me, computed: xe, onMounted: Ue, openBlock: a, createElementBlock: o, createElementVNode: t, toDisplayString: r, unref: H, normalizeClass: w, createTextVNode: y, createCommentVNode: u, Fragment: K, renderList: q, withDirectives: _, withKeys: X, vModelText: Y, vModelSelect: ee, vModelCheckbox: Ie, createVNode: ze, Transition: $e, withCtx: Be, withModifiers: Le, createBlock: Te, normalizeProps: Ve, guardReactiveProps: je, createApp: Ae } = window.Vue;
import { _ as Ee } from "./_plugin-vue_export-helper-CHgC5LLL.js";
const He = { class: "min-h-screen bg-slate-50 font-sans text-sm text-slate-900 antialiased" }, De = { class: "sticky top-0 z-40 bg-white border-b border-slate-200" }, Fe = { class: "max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3" }, Ne = { class: "flex items-center gap-3" }, Pe = { class: "text-slate-400 text-xs leading-tight" }, Se = { class: "flex flex-wrap items-center gap-3 sm:gap-4" }, Oe = { class: "flex items-center bg-slate-100 rounded-lg p-0.5" }, We = { class: "flex items-center gap-2.5 cursor-pointer select-none" }, Re = {
  key: 0,
  class: "bg-indigo-50 border-t border-indigo-100 px-4 sm:px-6 py-2 text-xs text-indigo-600 flex items-center gap-2"
}, Je = {
  key: 1,
  class: "bg-rose-50 border-t border-rose-100 px-4 sm:px-6 py-2 text-xs text-rose-600 flex items-center justify-between gap-2"
}, Ke = { class: "flex items-center gap-2" }, qe = { class: "max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6" }, Xe = { class: "bg-white border border-slate-200 rounded-xl overflow-hidden" }, Ye = {
  key: 0,
  class: "px-5 py-12 text-center"
}, Ge = { class: "flex flex-wrap items-center px-4 sm:px-5 py-3 sm:py-3.5 gap-2 sm:gap-3 hover:bg-slate-50/80 transition-colors duration-100" }, Qe = ["onClick", "aria-expanded", "aria-label"], Ze = { class: "flex-1 min-w-[100px] flex items-baseline gap-2" }, et = { class: "font-medium text-slate-800 truncate" }, tt = { class: "text-slate-300 text-xs font-mono truncate hidden sm:inline" }, st = { class: "flex items-center gap-1.5 shrink-0 order-3 sm:order-none w-full sm:w-auto pl-6 sm:pl-0" }, lt = { class: "px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-xs font-medium" }, at = { class: "px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs font-medium" }, ot = {
  key: 0,
  class: "px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs font-medium"
}, nt = { class: "flex items-center gap-2 shrink-0 sm:ml-2 sm:pl-2 sm:border-l border-slate-100" }, it = ["onClick"], rt = ["onClick"], dt = {
  key: 0,
  class: "px-4 sm:px-5 pb-4 pl-10 sm:pl-16"
}, ut = {
  key: 0,
  class: "text-slate-300 text-xs italic py-1"
}, pt = {
  key: 1,
  class: "flex flex-col gap-1.5 border-l-2 border-slate-100 pl-4"
}, mt = { class: "flex-1 min-w-[80px] font-medium text-slate-700 truncate" }, ct = {
  key: 0,
  class: "text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-medium shrink-0"
}, xt = {
  key: 1,
  class: "text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-md font-medium shrink-0"
}, vt = {
  key: 2,
  class: "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-medium shrink-0",
  title: "Has a separate mobile image"
}, gt = {
  key: 3,
  class: "text-slate-400 truncate max-w-[120px] sm:max-w-[180px] font-mono shrink-0 hidden sm:inline"
}, ft = ["onClick"], bt = { class: "bg-white border border-slate-200 rounded-xl p-4 sm:p-5" }, ht = { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, wt = { class: "flex flex-col gap-1.5" }, yt = { class: "flex flex-col gap-1.5" }, kt = { class: "flex flex-col gap-1.5" }, _t = { class: "flex flex-col gap-1.5" }, Ct = { class: "flex flex-wrap items-center gap-4 mt-5 pt-4 border-t border-slate-100" }, Mt = ["disabled"], Ut = { class: "flex items-center gap-2 cursor-pointer select-none" }, It = {
  key: 0,
  class: "bg-white border border-slate-200 rounded-xl overflow-hidden"
}, zt = { class: "flex flex-col sm:flex-row sm:items-center border-b border-slate-100 gap-1" }, $t = { class: "flex items-center gap-1 overflow-x-auto px-3 pt-2 sm:pt-0" }, Bt = ["onClick"], Lt = { class: "flex items-center gap-3 px-3 pb-2 sm:pb-0 sm:py-2 sm:pl-3 sm:ml-auto shrink-0" }, Tt = { class: "flex items-center gap-2 cursor-pointer select-none" }, Vt = { class: "px-4 sm:px-5 py-4" }, jt = { class: "flex items-center gap-2 mb-4" }, At = { class: "text-xs font-semibold uppercase tracking-wider text-slate-400" }, Et = { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, Ht = { class: "flex flex-col gap-1.5" }, Dt = { class: "flex flex-col gap-1.5" }, Ft = { class: "flex flex-wrap items-center gap-2 mt-0.5" }, Nt = ["disabled"], Pt = ["src"], St = {
  key: 0,
  class: "text-xs text-rose-500"
}, Ot = { class: "flex flex-col gap-1.5 sm:col-span-2" }, Wt = { class: "flex flex-wrap items-center gap-2 mt-0.5" }, Rt = ["disabled"], Jt = ["src"], Kt = {
  key: 0,
  class: "text-xs text-rose-500"
}, qt = { class: "flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-slate-100" }, Xt = ["disabled"], Yt = { class: "flex items-center gap-2 cursor-pointer select-none" }, Gt = {
  key: 0,
  class: "mt-5 pt-4 border-t border-slate-100 flex flex-col gap-1.5"
}, Qt = { class: "text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1" }, Zt = { class: "font-medium text-slate-700 flex-1 min-w-[80px] truncate" }, es = {
  key: 0,
  class: "text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-medium shrink-0"
}, ts = {
  key: 1,
  class: "text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-md font-medium shrink-0"
}, ss = {
  key: 2,
  class: "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-medium shrink-0",
  title: "Has a separate mobile image"
}, ls = {
  key: 3,
  class: "text-slate-400 truncate max-w-[120px] sm:max-w-[200px] font-mono shrink-0 hidden sm:inline"
}, as = ["onClick"], os = { class: "bg-white rounded-xl shadow-xl w-full max-w-sm p-6" }, ns = { class: "text-slate-500 text-sm mb-6 leading-relaxed" }, is = { class: "font-medium text-slate-700" }, rs = "http://localhost:4000/v1/uploads", ds = 3 * 1024 * 1024, us = /* @__PURE__ */ ve({
  __name: "form",
  props: {
    _p: {},
    _pp: {}
  },
  setup(C) {
    const v = C, j = Ce(v._pp ?? { data: { curr: { id: "", type: "", data: { l: [] } } } });
    Array.isArray(j.data.curr.data.l) || (j.data.curr.data.l = []);
    const k = {
      baseUrl: "http://localhost:4000/v1/collages",
      // TODO: replace with real backend URL
      endpoints: {
        // mock-api.js only implements flat GET /v1/collages + POST /v1/collages/reset,
        // so list() must resolve to baseUrl with nothing appended.
        // The rest (/admin/collages/...) are placeholders for the future real
        // backend and aren't implemented in mock-api.js yet — calling create/
        // update/delete while in API mode against the mock will still 404.
        list: () => "",
        create: () => "",
        update: (l) => `/${l}`,
        delete: (l) => `/${l}`,
        createItem: (l) => `/${l}/items`,
        updateItem: (l, e) => `/${l}/items/${e}`,
        deleteItem: (l, e) => `/${l}/items/${e}`
      },
      token: ""
      // TODO: set auth token (e.g. from localStorage / env) when wiring real API
    };
    async function M(l, e = {}) {
      const s = await fetch(`${k.baseUrl}${l}`, {
        ...e,
        headers: {
          "Content-Type": "application/json",
          ...e.headers || {}
        }
      });
      if (!s.ok) {
        let $ = `HTTP ${s.status}`;
        try {
          const B = await s.json();
          $ = B?.error || B?.message || $;
        } catch {
        }
        throw new Error($);
      }
      const n = await s.text();
      return n ? JSON.parse(n) : void 0;
    }
    const m = () => Math.random().toString(36).slice(2, 10), D = (l) => "c-" + l.toLowerCase().replace(/\s+/g, "-"), c = i("manual"), G = i(!1), g = i(!1), p = i(""), F = i(!1), te = () => [
      { id: m(), name: "Men", type: "sample", theme: "light", headerMode: "normal", items: [], expanded: !1 },
      { id: m(), name: "Women", type: "sample", theme: "light", headerMode: "normal", items: [], expanded: !1 },
      { id: m(), name: "Beauty", type: "sample", theme: "light", headerMode: "normal", items: [], expanded: !1 },
      { id: m(), name: "Kids", type: "sample", theme: "light", headerMode: "normal", items: [], expanded: !1 },
      { id: m(), name: "Home", type: "sample", theme: "light", headerMode: "normal", items: [], expanded: !1 }
    ], d = j.data.curr.data.l;
    d.length === 0 && d.push(...te());
    function se(l) {
      return {
        id: l.id ?? m(),
        name: l.name ?? l.title ?? "",
        type: l.type ?? "sample",
        theme: l.theme ?? "light",
        headerMode: l.header_mode ?? l.headerMode ?? "normal",
        expanded: !1,
        items: (l.items ?? []).map((e) => ({
          id: e.id ?? m(),
          title: e.title ?? "",
          imageUrl: e.image ?? e.imageUrl ?? "",
          imageUrlMobile: e.imageMobile ?? e.imageUrlMobile ?? "",
          fullWidth: e.full ?? e.fullWidth ?? !1,
          manual: e.manual ?? !1
        }))
      };
    }
    async function le() {
      G.value = !0, p.value = "";
      try {
        const l = await M(k.endpoints.list());
        d.splice(0, d.length, ...(Array.isArray(l) ? l : []).map(se));
      } catch (l) {
        p.value = l?.message ?? "Failed to load collages";
      } finally {
        G.value = !1;
      }
    }
    let ae = null;
    Me(c, async (l) => {
      p.value = "", l === "api" ? (ae = JSON.parse(JSON.stringify(d)), await le()) : d.splice(0, d.length, ...ae ?? te()), A();
    });
    const oe = () => {
      console.log("--form.vue _data.l updated", d), v._p?.f?.call && v._p.f.call("msg", {
        type: "on:change",
        _p: v._p,
        _pp: v._pp
      });
    }, A = () => {
      oe();
    }, L = i(""), N = i("sample"), P = i("light"), S = i("normal"), O = i(!1), f = i(null), x = xe(() => d.find((l) => l.id === f.value) ?? null), U = i(""), b = i(""), h = i(""), E = i(!1), I = i(!1), ne = i(null), ie = i(null), Q = i(!1), Z = i(!1), T = i(""), V = i("");
    function ge(l) {
      return new Promise((e, s) => {
        const n = new FileReader();
        n.onload = () => e(n.result), n.onerror = () => s(n.error ?? new Error("File read failed")), n.readAsDataURL(l);
      });
    }
    async function re(l, e) {
      const s = l.target, n = s.files?.[0];
      if (!n) return;
      const $ = e === "desktop" ? Q : Z, B = e === "desktop" ? T : V;
      if (B.value = "", !n.type.startsWith("image/")) {
        B.value = "Please choose an image file.", s.value = "";
        return;
      }
      if (n.size > ds) {
        B.value = "Image too large — please use one under 3MB.", s.value = "";
        return;
      }
      $.value = !0;
      try {
        const R = await ge(n), J = await fetch(rs, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: R, type: e })
        });
        if (!J.ok) {
          const _e = await J.json().catch(() => ({}));
          throw new Error(_e?.error ?? `Upload failed (HTTP ${J.status})`);
        }
        const { url: ce } = await J.json();
        e === "desktop" ? b.value = ce : h.value = ce;
      } catch (R) {
        B.value = R?.message?.includes("fetch") ? "Could not reach mock-api.js — is it running (node mock-api.js)?" : R?.message ?? "Upload failed";
      } finally {
        $.value = !1, s.value = "";
      }
    }
    function de(l) {
      l === "desktop" ? (b.value = "", T.value = "") : (h.value = "", V.value = "");
    }
    async function ue() {
      if (!L.value.trim()) return;
      const l = {
        name: L.value.trim(),
        type: N.value,
        theme: P.value,
        headerMode: S.value
      };
      if (c.value === "api") {
        g.value = !0, p.value = "";
        try {
          const e = await M(k.endpoints.create(), {
            method: "POST",
            body: JSON.stringify(l)
          }), s = se(e ?? { ...l, id: m(), items: [] });
          d.push(s), f.value = s.id;
        } catch (e) {
          p.value = e?.message ?? "Failed to create collage";
          return;
        } finally {
          g.value = !1;
        }
      } else {
        const e = { id: m(), ...l, items: [], expanded: !1 };
        d.push(e), f.value = e.id;
      }
      L.value = "", N.value = "sample", P.value = "light", S.value = "normal", A();
    }
    Ue(async () => {
      c.value === "api" && await le(), oe();
    });
    const z = i(null), fe = xe(() => d.find((l) => l.id === z.value)?.name ?? "");
    function be(l) {
      z.value = l;
    }
    function pe() {
      z.value = null;
    }
    async function he() {
      if (!z.value) return;
      const l = z.value;
      if (c.value === "api") {
        g.value = !0, p.value = "";
        try {
          await M(k.endpoints.delete(l), { method: "DELETE" });
        } catch (s) {
          p.value = s?.message ?? "Failed to delete collage", g.value = !1;
          return;
        }
        g.value = !1;
      }
      const e = d.findIndex((s) => s.id === l);
      e !== -1 && d.splice(e, 1), f.value === l && (f.value = null), z.value = null, A();
    }
    function we(l) {
      const e = d.find((s) => s.id === l);
      e && (e.expanded = !e.expanded);
    }
    function ye(l) {
      f.value = f.value === l ? null : l;
    }
    function ke() {
      f.value = null, U.value = "", b.value = "", h.value = "", E.value = !1, I.value = !1, T.value = "", V.value = "";
    }
    async function W() {
      if (!U.value.trim() || !x.value) return;
      const l = x.value.id, e = {
        title: U.value.trim(),
        imageUrl: b.value.trim(),
        imageUrlMobile: h.value.trim(),
        fullWidth: E.value,
        manual: I.value
      };
      if (c.value === "api") {
        g.value = !0, p.value = "";
        try {
          const s = await M(k.endpoints.createItem(l), {
            method: "POST",
            body: JSON.stringify(e)
          });
          x.value.items.push({
            id: s?.id ?? m(),
            title: s?.title ?? e.title,
            imageUrl: s?.image ?? s?.imageUrl ?? e.imageUrl,
            imageUrlMobile: s?.imageMobile ?? s?.imageUrlMobile ?? e.imageUrlMobile,
            fullWidth: s?.full ?? s?.fullWidth ?? e.fullWidth,
            manual: s?.manual ?? e.manual
          });
        } catch (s) {
          p.value = s?.message ?? "Failed to create item";
          return;
        } finally {
          g.value = !1;
        }
      } else
        x.value.items.push({ id: m(), ...e });
      U.value = "", b.value = "", h.value = "", E.value = !1, I.value = !1, T.value = "", V.value = "", A();
    }
    async function me(l, e) {
      if (c.value === "api") {
        g.value = !0, p.value = "";
        try {
          await M(k.endpoints.deleteItem(l, e), { method: "DELETE" });
        } catch (n) {
          p.value = n?.message ?? "Failed to delete item", g.value = !1;
          return;
        }
        g.value = !1;
      }
      const s = d.find((n) => n.id === l);
      s && (s.items = s.items.filter((n) => n.id !== e)), A();
    }
    return (l, e) => (a(), o("div", He, [
      t("header", De, [
        t("div", Fe, [
          t("div", Ne, [
            e[21] || (e[21] = t("div", { class: "w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0" }, [
              t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "none",
                class: "w-4 h-4 text-white"
              }, [
                t("path", {
                  d: "M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm8-8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
                  fill: "currentColor"
                })
              ])
            ], -1)),
            t("div", null, [
              e[20] || (e[20] = t("h1", { class: "font-semibold text-slate-900 text-base leading-tight" }, "Collage Manager", -1)),
              t("p", Pe, r(H(d).length) + " " + r(H(d).length === 1 ? "collage" : "collages"), 1)
            ])
          ]),
          t("div", Se, [
            t("div", Oe, [
              t("button", {
                type: "button",
                onClick: e[0] || (e[0] = (s) => c.value = "manual"),
                class: w([c.value === "manual" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700", "px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-100"])
              }, "Manual", 2),
              t("button", {
                type: "button",
                onClick: e[1] || (e[1] = (s) => c.value = "api"),
                class: w([c.value === "api" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700", "px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-100"])
              }, "API", 2)
            ]),
            t("label", We, [
              e[22] || (e[22] = t("span", { class: "text-xs font-medium text-slate-500" }, "Manual sync", -1)),
              t("button", {
                type: "button",
                onClick: e[2] || (e[2] = (s) => F.value = !F.value),
                class: w([F.value ? "bg-slate-900" : "bg-slate-200", "relative w-9 h-5 rounded-full transition-colors duration-150"])
              }, [
                t("span", {
                  class: w([F.value ? "translate-x-4" : "translate-x-0.5", "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-150"])
                }, null, 2)
              ], 2)
            ])
          ])
        ]),
        G.value ? (a(), o("div", Re, [...e[23] || (e[23] = [
          t("svg", {
            class: "animate-spin w-3.5 h-3.5 shrink-0",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24"
          }, [
            t("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4"
            }),
            t("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            })
          ], -1),
          y(" Loading collages from API… ", -1)
        ])])) : p.value ? (a(), o("div", Je, [
          t("span", Ke, [
            e[24] || (e[24] = t("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              class: "w-3.5 h-3.5 shrink-0"
            }, [
              t("path", {
                "fill-rule": "evenodd",
                d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 8a1 1 0 100-2 1 1 0 000 2z",
                "clip-rule": "evenodd"
              })
            ], -1)),
            y(" " + r(p.value), 1)
          ]),
          t("button", {
            type: "button",
            onClick: e[3] || (e[3] = (s) => p.value = ""),
            class: "text-rose-400 hover:text-rose-600 shrink-0"
          }, "Dismiss")
        ])) : u("", !0)
      ]),
      t("main", qe, [
        t("section", Xe, [
          e[29] || (e[29] = t("div", { class: "px-5 py-3.5 border-b border-slate-100 flex items-center justify-between" }, [
            t("h2", { class: "text-xs font-semibold uppercase tracking-wider text-slate-400" }, "Collages")
          ], -1)),
          H(d).length === 0 ? (a(), o("div", Ye, [...e[25] || (e[25] = [
            t("p", { class: "text-slate-400 text-sm" }, "No collages yet. Create one below to get started.", -1)
          ])])) : u("", !0),
          (a(!0), o(K, null, q(H(d), (s) => (a(), o("div", {
            key: s.id,
            class: "border-b border-slate-100 last:border-0"
          }, [
            t("div", Ge, [
              t("button", {
                type: "button",
                onClick: (n) => we(s.id),
                class: "text-slate-300 hover:text-slate-500 transition-colors w-4 h-4 shrink-0 flex items-center justify-center",
                "aria-expanded": s.expanded,
                "aria-label": s.expanded ? "Collapse" : "Expand"
              }, [
                (a(), o("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  class: w(["w-3.5 h-3.5 transition-transform duration-150", s.expanded ? "rotate-90" : ""])
                }, [...e[26] || (e[26] = [
                  t("path", {
                    "fill-rule": "evenodd",
                    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                    "clip-rule": "evenodd"
                  }, null, -1)
                ])], 2))
              ], 8, Qe),
              e[27] || (e[27] = t("span", { class: "w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0" }, [
                t("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  class: "w-4 h-4 text-slate-500"
                }, [
                  t("path", {
                    d: "M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm8-8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zm0 8a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
                    fill: "currentColor"
                  })
                ])
              ], -1)),
              t("div", Ze, [
                t("span", et, r(s.name), 1),
                t("span", tt, r(D(s.name)), 1)
              ]),
              t("div", st, [
                t("span", lt, r(s.type), 1),
                t("span", at, r(s.theme), 1),
                s.items.length ? (a(), o("span", ot, r(s.items.length) + " " + r(s.items.length === 1 ? "item" : "items"), 1)) : u("", !0)
              ]),
              t("div", nt, [
                t("button", {
                  type: "button",
                  onClick: (n) => ye(s.id),
                  class: "px-3 py-1.5 rounded-md text-slate-600 text-xs font-medium hover:bg-slate-100 transition-colors duration-100"
                }, "Items", 8, it),
                t("button", {
                  type: "button",
                  onClick: (n) => be(s.id),
                  class: "px-3 py-1.5 rounded-md text-rose-500 text-xs font-medium hover:bg-rose-50 transition-colors duration-100"
                }, "Delete", 8, rt)
              ])
            ]),
            s.expanded ? (a(), o("div", dt, [
              s.items.length ? (a(), o("div", pt, [
                (a(!0), o(K, null, q(s.items, (n) => (a(), o("div", {
                  key: n.id,
                  class: "flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-50 rounded-lg px-3 py-2 text-xs"
                }, [
                  t("span", mt, r(n.title), 1),
                  n.fullWidth ? (a(), o("span", ct, "full width")) : u("", !0),
                  n.manual ? (a(), o("span", xt, "manual")) : u("", !0),
                  n.imageUrlMobile ? (a(), o("span", vt, "M")) : u("", !0),
                  n.imageUrl ? (a(), o("span", gt, r(n.imageUrl), 1)) : u("", !0),
                  t("button", {
                    type: "button",
                    onClick: ($) => me(s.id, n.id),
                    class: "text-slate-300 hover:text-rose-500 transition-colors shrink-0 w-4 h-4 flex items-center justify-center",
                    "aria-label": "Remove item"
                  }, [...e[28] || (e[28] = [
                    t("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      class: "w-3.5 h-3.5"
                    }, [
                      t("path", {
                        "fill-rule": "evenodd",
                        d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z",
                        "clip-rule": "evenodd"
                      })
                    ], -1)
                  ])], 8, ft)
                ]))), 128))
              ])) : (a(), o("div", ut, "No items yet"))
            ])) : u("", !0)
          ]))), 128))
        ]),
        t("section", bt, [
          e[39] || (e[39] = t("div", { class: "flex items-center gap-2 mb-4" }, [
            t("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              class: "w-4 h-4 text-indigo-500"
            }, [
              t("path", { d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" })
            ]),
            t("h2", { class: "text-xs font-semibold uppercase tracking-wider text-slate-400" }, "New collage")
          ], -1)),
          t("div", ht, [
            t("div", wt, [
              e[30] || (e[30] = t("label", { class: "text-slate-500 text-xs font-medium" }, [
                y("Name "),
                t("span", { class: "text-rose-400" }, "*")
              ], -1)),
              _(t("input", {
                "onUpdate:modelValue": e[4] || (e[4] = (s) => L.value = s),
                type: "text",
                placeholder: "e.g. Men, Women, Beauty",
                class: "border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow",
                onKeyup: X(ue, ["enter"])
              }, null, 544), [
                [Y, L.value]
              ])
            ]),
            t("div", yt, [
              e[32] || (e[32] = t("label", { class: "text-slate-500 text-xs font-medium" }, "Type", -1)),
              _(t("select", {
                "onUpdate:modelValue": e[5] || (e[5] = (s) => N.value = s),
                class: "border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow"
              }, [...e[31] || (e[31] = [
                t("option", { value: "sample" }, "sample", -1),
                t("option", { value: "custom" }, "custom", -1)
              ])], 512), [
                [ee, N.value]
              ])
            ]),
            t("div", kt, [
              e[34] || (e[34] = t("label", { class: "text-slate-500 text-xs font-medium" }, "Theme", -1)),
              _(t("select", {
                "onUpdate:modelValue": e[6] || (e[6] = (s) => P.value = s),
                class: "border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow"
              }, [...e[33] || (e[33] = [
                t("option", { value: "light" }, "light", -1),
                t("option", { value: "dark" }, "dark", -1)
              ])], 512), [
                [ee, P.value]
              ])
            ]),
            t("div", _t, [
              e[36] || (e[36] = t("label", { class: "text-slate-500 text-xs font-medium" }, "Header mode", -1)),
              _(t("select", {
                "onUpdate:modelValue": e[7] || (e[7] = (s) => S.value = s),
                class: "border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow"
              }, [...e[35] || (e[35] = [
                t("option", { value: "normal" }, "normal", -1),
                t("option", { value: "sticky" }, "sticky", -1)
              ])], 512), [
                [ee, S.value]
              ])
            ])
          ]),
          t("div", Ct, [
            t("button", {
              type: "button",
              onClick: ue,
              disabled: !L.value.trim(),
              class: "px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:cursor-not-allowed text-white disabled:text-slate-400 rounded-lg text-sm font-medium transition-colors duration-100 flex items-center gap-1.5"
            }, [...e[37] || (e[37] = [
              t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                class: "w-3.5 h-3.5"
              }, [
                t("path", { d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" })
              ], -1),
              y(" Create collage ", -1)
            ])], 8, Mt),
            t("label", Ut, [
              t("button", {
                type: "button",
                onClick: e[8] || (e[8] = (s) => O.value = !O.value),
                class: w([O.value ? "bg-slate-900" : "bg-slate-200", "relative w-8 h-[18px] rounded-full transition-colors duration-150"])
              }, [
                t("span", {
                  class: w([O.value ? "translate-x-[14px]" : "translate-x-0.5", "absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm transition-transform duration-150"])
                }, null, 2)
              ], 2),
              e[38] || (e[38] = t("span", { class: "text-xs font-medium text-slate-500" }, "Manual mode", -1))
            ])
          ])
        ]),
        x.value ? (a(), o("section", It, [
          t("div", zt, [
            t("div", $t, [
              (a(!0), o(K, null, q(H(d), (s) => (a(), o("button", {
                type: "button",
                key: s.id,
                onClick: (n) => f.value = s.id,
                class: w([
                  "py-2.5 sm:py-3 px-3 text-sm font-medium border-b-2 transition-colors duration-100 whitespace-nowrap",
                  f.value === s.id ? "border-slate-900 text-slate-900" : "border-transparent text-slate-400 hover:text-slate-600"
                ])
              }, r(s.name), 11, Bt))), 128))
            ]),
            t("div", Lt, [
              t("label", Tt, [
                e[40] || (e[40] = t("span", { class: "text-xs font-medium text-slate-400" }, "Manual", -1)),
                t("button", {
                  type: "button",
                  onClick: e[9] || (e[9] = (s) => I.value = !I.value),
                  class: w([I.value ? "bg-slate-900" : "bg-slate-200", "relative w-8 h-[18px] rounded-full transition-colors duration-150"])
                }, [
                  t("span", {
                    class: w([I.value ? "translate-x-[14px]" : "translate-x-0.5", "absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm transition-transform duration-150"])
                  }, null, 2)
                ], 2)
              ]),
              e[41] || (e[41] = t("span", { class: "text-slate-300 text-xs font-medium" }, "API", -1)),
              t("button", {
                type: "button",
                onClick: ke,
                class: "text-xs border border-slate-200 px-3 py-1.5 rounded-md text-slate-500 hover:bg-slate-50 transition-colors duration-100 ml-auto sm:ml-0"
              }, "Close")
            ])
          ]),
          t("div", Vt, [
            t("div", jt, [
              e[42] || (e[42] = t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                class: "w-4 h-4 text-indigo-500"
              }, [
                t("path", { d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" })
              ], -1)),
              t("h2", At, "New item — " + r(x.value.name), 1)
            ]),
            t("div", Et, [
              t("div", Ht, [
                e[43] || (e[43] = t("label", { class: "text-slate-500 text-xs font-medium" }, [
                  y("Title "),
                  t("span", { class: "text-rose-400" }, "*")
                ], -1)),
                _(t("input", {
                  "onUpdate:modelValue": e[10] || (e[10] = (s) => U.value = s),
                  type: "text",
                  placeholder: "e.g. Hoodies",
                  class: "border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow",
                  onKeyup: X(W, ["enter"])
                }, null, 544), [
                  [Y, U.value]
                ])
              ]),
              t("div", Dt, [
                e[45] || (e[45] = t("label", { class: "text-slate-500 text-xs font-medium" }, "Image URL (desktop)", -1)),
                _(t("input", {
                  "onUpdate:modelValue": e[11] || (e[11] = (s) => b.value = s),
                  type: "text",
                  placeholder: "https://... or upload below",
                  class: "border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow",
                  onKeyup: X(W, ["enter"])
                }, null, 544), [
                  [Y, b.value]
                ]),
                t("div", Ft, [
                  t("input", {
                    ref_key: "desktopFileInput",
                    ref: ne,
                    type: "file",
                    accept: "image/*",
                    class: "hidden",
                    onChange: e[12] || (e[12] = (s) => re(s, "desktop"))
                  }, null, 544),
                  t("button", {
                    type: "button",
                    onClick: e[13] || (e[13] = (s) => ne.value?.click()),
                    disabled: Q.value,
                    class: "text-xs px-2.5 py-1.5 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-colors flex items-center gap-1.5"
                  }, [
                    e[44] || (e[44] = t("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      class: "w-3.5 h-3.5"
                    }, [
                      t("path", {
                        "fill-rule": "evenodd",
                        d: "M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z",
                        "clip-rule": "evenodd"
                      }),
                      t("path", { d: "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" })
                    ], -1)),
                    y(" " + r(Q.value ? "Uploading…" : "Upload desktop image"), 1)
                  ], 8, Nt),
                  b.value ? (a(), o("button", {
                    key: 0,
                    type: "button",
                    onClick: e[14] || (e[14] = (s) => de("desktop")),
                    class: "text-xs text-slate-400 hover:text-rose-500 transition-colors"
                  }, "Clear")) : u("", !0),
                  b.value ? (a(), o("img", {
                    key: 1,
                    src: b.value,
                    class: "w-8 h-8 rounded-md object-cover border border-slate-200 sm:ml-auto",
                    alt: "Desktop preview"
                  }, null, 8, Pt)) : u("", !0)
                ]),
                T.value ? (a(), o("p", St, r(T.value), 1)) : u("", !0),
                e[46] || (e[46] = t("p", { class: "text-[11px] text-slate-400" }, "Uploaded here shows only on desktop.", -1))
              ]),
              t("div", Ot, [
                e[48] || (e[48] = t("label", { class: "text-slate-500 text-xs font-medium" }, [
                  y("Mobile Image URL "),
                  t("span", { class: "text-slate-300 font-normal" }, "(optional — if left empty, mobile view shows a placeholder, not the desktop image)")
                ], -1)),
                _(t("input", {
                  "onUpdate:modelValue": e[15] || (e[15] = (s) => h.value = s),
                  type: "text",
                  placeholder: "https://... or upload below (leave blank = placeholder on mobile)",
                  class: "border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-shadow",
                  onKeyup: X(W, ["enter"])
                }, null, 544), [
                  [Y, h.value]
                ]),
                t("div", Wt, [
                  t("input", {
                    ref_key: "mobileFileInput",
                    ref: ie,
                    type: "file",
                    accept: "image/*",
                    class: "hidden",
                    onChange: e[16] || (e[16] = (s) => re(s, "mobile"))
                  }, null, 544),
                  t("button", {
                    type: "button",
                    onClick: e[17] || (e[17] = (s) => ie.value?.click()),
                    disabled: Z.value,
                    class: "text-xs px-2.5 py-1.5 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-colors flex items-center gap-1.5"
                  }, [
                    e[47] || (e[47] = t("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      class: "w-3.5 h-3.5"
                    }, [
                      t("path", {
                        "fill-rule": "evenodd",
                        d: "M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z",
                        "clip-rule": "evenodd"
                      }),
                      t("path", { d: "M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" })
                    ], -1)),
                    y(" " + r(Z.value ? "Uploading…" : "Upload mobile image"), 1)
                  ], 8, Rt),
                  h.value ? (a(), o("button", {
                    key: 0,
                    type: "button",
                    onClick: e[18] || (e[18] = (s) => de("mobile")),
                    class: "text-xs text-slate-400 hover:text-rose-500 transition-colors"
                  }, "Clear")) : u("", !0),
                  h.value ? (a(), o("img", {
                    key: 1,
                    src: h.value,
                    class: "w-8 h-8 rounded-md object-cover border border-slate-200 sm:ml-auto",
                    alt: "Mobile preview"
                  }, null, 8, Jt)) : u("", !0)
                ]),
                V.value ? (a(), o("p", Kt, r(V.value), 1)) : u("", !0),
                e[49] || (e[49] = t("p", { class: "text-[11px] text-slate-400" }, "Uploaded here shows only on mobile.", -1))
              ])
            ]),
            t("div", qt, [
              t("button", {
                type: "button",
                onClick: W,
                disabled: !U.value.trim(),
                class: "px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:cursor-not-allowed text-white disabled:text-slate-400 rounded-lg text-sm font-medium transition-colors duration-100 flex items-center gap-1.5"
              }, [...e[50] || (e[50] = [
                t("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  class: "w-3.5 h-3.5"
                }, [
                  t("path", { d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" })
                ], -1),
                y(" Create item ", -1)
              ])], 8, Xt),
              t("label", Yt, [
                _(t("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": e[19] || (e[19] = (s) => E.value = s),
                  class: "w-3.5 h-3.5 rounded border-slate-300 text-slate-900 focus:ring-indigo-500/30"
                }, null, 512), [
                  [Ie, E.value]
                ]),
                e[51] || (e[51] = t("span", { class: "text-xs font-medium text-slate-500" }, "Full width", -1))
              ])
            ]),
            x.value.items.length ? (a(), o("div", Gt, [
              t("p", Qt, r(x.value.items.length) + " " + r(x.value.items.length === 1 ? "item" : "items"), 1),
              (a(!0), o(K, null, q(x.value.items, (s) => (a(), o("div", {
                key: s.id,
                class: "flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-50 rounded-lg px-3 py-2.5 text-xs"
              }, [
                t("span", Zt, r(s.title), 1),
                s.fullWidth ? (a(), o("span", es, "full width")) : u("", !0),
                s.manual ? (a(), o("span", ts, "manual")) : u("", !0),
                s.imageUrlMobile ? (a(), o("span", ss, "M")) : u("", !0),
                s.imageUrl ? (a(), o("span", ls, r(s.imageUrl), 1)) : u("", !0),
                t("button", {
                  type: "button",
                  onClick: (n) => me(x.value.id, s.id),
                  class: "text-slate-300 hover:text-rose-500 transition-colors shrink-0 w-4 h-4 flex items-center justify-center",
                  "aria-label": "Remove item"
                }, [...e[52] || (e[52] = [
                  t("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    class: "w-3.5 h-3.5"
                  }, [
                    t("path", {
                      "fill-rule": "evenodd",
                      d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z",
                      "clip-rule": "evenodd"
                    })
                  ], -1)
                ])], 8, as)
              ]))), 128))
            ])) : u("", !0)
          ])
        ])) : u("", !0)
      ]),
      ze($e, { name: "fade" }, {
        default: Be(() => [
          z.value ? (a(), o("div", {
            key: 0,
            class: "fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center z-50 p-4",
            onClick: Le(pe, ["self"])
          }, [
            t("div", os, [
              e[54] || (e[54] = t("div", { class: "w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center mb-4" }, [
                t("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  class: "w-5 h-5 text-rose-500"
                }, [
                  t("path", {
                    "fill-rule": "evenodd",
                    d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 8a1 1 0 100-2 1 1 0 000 2z",
                    "clip-rule": "evenodd"
                  })
                ])
              ], -1)),
              e[55] || (e[55] = t("p", { class: "font-semibold text-slate-900 text-base mb-1.5" }, "Delete this collage?", -1)),
              t("p", ns, [
                t("span", is, '"' + r(fe.value) + '"', 1),
                e[53] || (e[53] = y(" and all its items will be permanently removed. This can't be undone. ", -1))
              ]),
              t("div", { class: "flex justify-end gap-2" }, [
                t("button", {
                  type: "button",
                  onClick: pe,
                  class: "px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors duration-100"
                }, "Cancel"),
                t("button", {
                  type: "button",
                  onClick: he,
                  class: "px-4 py-2 rounded-lg bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium transition-colors duration-100"
                }, "Delete collage")
              ])
            ])
          ])) : u("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), ps = /* @__PURE__ */ Ee(us, [["__scopeId", "data-v-ddc16eee"]]), ms = /* @__PURE__ */ ve({
  __name: "index",
  props: {
    _p: {},
    _pp: {}
  },
  setup(C) {
    return (v, j) => (a(), Te(ps, Ve(je({ _p: C._p, _pp: C._pp })), null, 16));
  }
}), vs = async (C) => ({
  set: async (v) => {
    console.log(`--custom [${v.data.curr.type}]`);
    const k = Ae(ms, {
      _p: C,
      _pp: v
    }), M = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
        }
      }
    }, m = v?.data?.curr?.id ?? "", D = document.getElementById(`c-u-s-t-o-m_${m}`) || document.getElementById(C.f.name("c-u-s-t-o-m_"));
    return D && k.mount(D), M;
  }
});
export {
  vs as custom,
  vs as index
};
