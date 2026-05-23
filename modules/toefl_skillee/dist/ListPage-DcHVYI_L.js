import { defineComponent as j, inject as v, ref as z, computed as _, watch as N, openBlock as r, createElementBlock as n, unref as f, createElementVNode as t, createCommentVNode as m, createTextVNode as b, toDisplayString as u, Fragment as B, renderList as L, normalizeStyle as $, normalizeClass as E, createStaticVNode as Q, createBlock as A } from "vue";
import { a as H, u as I, _ as V } from "./index-C4xQXCFH.js";
const q = { class: "min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-purple-200" }, D = {
  key: 0,
  class: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center"
}, G = { class: "max-w-7xl mx-auto px-6 py-1 md:py-5" }, F = { class: "flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14" }, P = { class: "space-y-4" }, R = { class: "text-slate-600 font-normal text-xs uppercase tracking-wider" }, X = { class: "flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 mb-10 sticky top-4 z-40 backdrop-blur-md overflow-x-auto no-scrollbar" }, Y = ["onClick"], O = {
  key: 0,
  class: "w-3.5 h-3.5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, U = {
  key: 1,
  class: "w-3.5 h-3.5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, J = {
  key: 2,
  class: "w-3.5 h-3.5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, K = {
  key: 3,
  class: "w-3.5 h-3.5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, W = { class: "space-y-10" }, Z = {
  key: 0,
  class: "flex items-center justify-between pb-5 border-b-2",
  style: { borderColor: "#00796B" }
}, ee = {
  class: "text-lg font-semibold uppercase tracking-wide",
  style: { color: "#00796B" }
}, te = { class: "text-xs font-medium text-slate-600 uppercase tracking-wider bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200" }, se = {
  key: 1,
  class: "grid grid-cols-1 gap-3"
}, oe = { class: "flex items-start sm:items-center gap-4 relative z-10" }, re = { class: "space-y-1.5 min-w-0" }, le = { class: "flex items-center gap-2 flex-wrap" }, ne = { class: "text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors" }, ae = { class: "px-1.5 py-0.5 bg-purple-100 text-purple-700 border border-purple-200 rounded text-[11px] font-mono font-medium" }, ie = { class: "text-slate-600 font-normal text-sm leading-tight truncate" }, de = ["onClick"], ue = {
  key: 2,
  class: "py-20 text-center bg-slate-50 rounded-xl border-2 border-dashed border-slate-200"
}, pe = /* @__PURE__ */ j({
  __name: "QuestionList",
  setup(T) {
    const c = v("testData"), x = v("isGlobalLoading"), k = v("clearSectionAnswers"), h = H(), y = I(), p = z("reading"), g = _(() => c?.value ? (Array.isArray(c.value) ? c.value : c.value.sections || []).map((e) => {
      const s = [];
      let d = 1;
      const l = (o) => {
        const C = o.questions?.[0] || o, S = o.passageTitle || o.title || w(o.type);
        s.push({
          id: o.uuid || o.id || C.uuid || `task-${d}`,
          displayTitle: S,
          typeLabel: w(o.type),
          type: o.type,
          uuid: C.uuid || o.uuid || o.id,
          questionCount: o.questions?.length || 1,
          rawTask: o
        }), d++;
      };
      return e.modules ? e.modules.forEach((o) => {
        o.tasks && o.tasks.forEach(l);
      }) : e.tasks && e.tasks.forEach(l), {
        type: e.type.toLowerCase(),
        tasks: s
      };
    }) : []), i = _(() => g.value.find((a) => a.type === p.value)), w = (a) => a ? a.replace(/_/g, " ").replace(/reading|listening|speaking|writing/gi, "").trim().replace(/^\w/, (e) => e.toUpperCase()) : "General", M = (a, e) => {
      const s = y.params.testId;
      k && k(a, e.uuid);
      const d = `/review/${s}/${a}/${e.type}/${e.uuid}`;
      console.log("[List] Navigating to task:", d), h.push(d);
    };
    return N(g, (a) => {
      a.length > 0 && !p.value && (p.value = a[0].type);
    }, { immediate: !0 }), (a, e) => (r(), n("div", q, [
      f(x) ? (r(), n("div", D, [...e[5] || (e[5] = [
        t("div", { class: "relative w-16 h-16" }, [
          t("div", { class: "absolute inset-0 border-2 border-teal-200 rounded-full" }),
          t("div", { class: "absolute inset-0 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" })
        ], -1),
        t("p", { class: "mt-6 text-teal-700 font-medium uppercase tracking-wider text-xs animate-pulse" }, "Loading assessment...", -1)
      ])])) : m("", !0),
      e[17] || (e[17] = t("div", { class: "h-1 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600" }, null, -1)),
      t("div", G, [
        t("header", F, [
          t("div", P, [
            e[6] || (e[6] = t("div", { class: "flex items-center gap-2" }, [
              t("span", { class: "px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-md text-xs font-semibold uppercase tracking-wide" }, "Question Navigator")
            ], -1)),
            e[7] || (e[7] = t("h1", {
              class: "text-3xl md:text-4xl font-light tracking-tight",
              style: { color: "#00796B" }
            }, [
              b(" TOEFL iBT "),
              t("span", { class: "font-semibold" }, "Practice Assessment")
            ], -1)),
            t("p", R, "Test ID: " + u(f(y).params.testId), 1)
          ]),
          t("button", {
            onClick: e[0] || (e[0] = (s) => f(h).back()),
            class: "group flex items-center gap-2 px-6 py-2.5 bg-slate-100 border border-slate-300 rounded-lg font-medium text-sm text-slate-700 hover:bg-slate-200 hover:border-slate-400 transition-all duration-200"
          }, [...e[8] || (e[8] = [
            t("svg", {
              class: "w-4 h-4 group-hover:-translate-x-0.5 transition-transform",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              t("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
              })
            ], -1),
            b(" Back ", -1)
          ])])
        ]),
        t("nav", X, [
          (r(!0), n(B, null, L(g.value, (s) => (r(), n("button", {
            key: s.type,
            onClick: (d) => p.value = s.type,
            class: E(["px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wide transition-all duration-200 shrink-0 flex items-center gap-2", p.value === s.type ? "bg-white text-white border border-blue-200" : "text-slate-600 hover:bg-white/60 hover:text-slate-700"]),
            style: $(p.value === s.type ? { backgroundColor: "#00796B", color: "white" } : {})
          }, [
            s.type === "reading" ? (r(), n("svg", O, [...e[9] || (e[9] = [
              t("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              }, null, -1)
            ])])) : s.type === "listening" ? (r(), n("svg", U, [...e[10] || (e[10] = [
              t("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              }, null, -1)
            ])])) : s.type === "speaking" ? (r(), n("svg", J, [...e[11] || (e[11] = [
              t("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              }, null, -1)
            ])])) : (r(), n("svg", K, [...e[12] || (e[12] = [
              t("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              }, null, -1)
            ])])),
            b(" " + u(s.type), 1)
          ], 14, Y))), 128))
        ]),
        t("div", W, [
          i.value ? (r(), n("div", Z, [
            t("h2", ee, u(i.value.type) + " Section", 1),
            t("span", te, u(i.value.tasks.length) + " Questions ", 1)
          ])) : m("", !0),
          i.value ? (r(), n("div", se, [
            (r(!0), n(B, null, L(i.value.tasks, (s, d) => (r(), n("div", {
              key: s.id,
              class: "group relative bg-white border-2 border-slate-200 hover:border-blue-400 rounded-xl p-5 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden hover:shadow-lg hover:shadow-blue-100"
            }, [
              t("div", oe, [
                t("div", {
                  class: "flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold text-sm transition-all duration-300 cursor-pointer",
                  style: { borderColor: "#00796B", color: "#00796B" },
                  onMouseenter: e[1] || (e[1] = (l) => {
                    l.target.style.backgroundColor = "#00796B", l.target.style.color = "white";
                  }),
                  onMouseleave: e[2] || (e[2] = (l) => {
                    l.target.style.backgroundColor = "transparent", l.target.style.color = "#00796B";
                  })
                }, u(String(d + 1).padStart(2, "0")), 33),
                t("div", re, [
                  t("div", le, [
                    t("h3", ne, u(s.typeLabel), 1),
                    t("span", ae, "#" + u(s.uuid.substring(0, 4)), 1)
                  ]),
                  t("p", ie, u(s.displayTitle), 1),
                  e[13] || (e[13] = t("div", { class: "flex flex-wrap items-center gap-3 text-xs font-normal text-slate-500 pt-1" }, [
                    t("span", { class: "w-0.5 h-0.5 bg-slate-300 rounded-full" })
                  ], -1))
                ])
              ]),
              t("button", {
                onClick: (l) => M(i.value.type, s),
                class: "flex-shrink-0 px-6 py-2.5 rounded-lg flex items-center gap-2 font-semibold text-sm text-white transition-all duration-300 group/btn shadow-md hover:shadow-xl",
                style: { backgroundColor: "#2563eb" },
                onMouseenter: e[3] || (e[3] = (l) => l.target.style.backgroundColor = "#1d4ed8"),
                onMouseleave: e[4] || (e[4] = (l) => l.target.style.backgroundColor = "#2563eb")
              }, [...e[14] || (e[14] = [
                b(" Start ", -1),
                t("svg", {
                  class: "w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  t("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2.5",
                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                  })
                ], -1)
              ])], 40, de),
              e[15] || (e[15] = t("div", {
                class: "absolute -right-12 -bottom-12 w-32 h-32 blur-3xl rounded-full group-hover:opacity-100 opacity-50 transition-all duration-700 pointer-events-none",
                style: { backgroundColor: "rgba(168, 85, 247, 0.15)" }
              }, null, -1))
            ]))), 128))
          ])) : m("", !0),
          !i.value || i.value.tasks.length === 0 ? (r(), n("div", ue, [...e[16] || (e[16] = [
            Q('<div class="w-16 h-16 bg-slate-200/50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400" data-v-95f9bc94><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-95f9bc94><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-v-95f9bc94></path></svg></div><h3 class="text-lg font-semibold text-slate-900 mb-1 uppercase tracking-wide" data-v-95f9bc94>No questions found</h3><p class="text-slate-600 font-normal text-sm" data-v-95f9bc94>This section is not yet available in the current test.</p>', 3)
          ])])) : m("", !0)
        ])
      ]),
      e[18] || (e[18] = t("div", {
        class: "fixed top-20 right-0 w-96 h-96 rounded-full pointer-events-none",
        style: { backgroundColor: "'rgba(168, 85, 247, 0.03)', filter: 'blur(120px)', transform: 'translateX(50%) translateY(-50%)'}" }
      }, null, -1)),
      e[19] || (e[19] = t("div", {
        class: "fixed bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none",
        style: { backgroundColor: "'rgba(0, 121, 107, 0.02)', filter: 'blur(120px)', transform: 'translateX(-50%) translateY(50%)'}" }
      }, null, -1))
    ]));
  }
}), ce = /* @__PURE__ */ V(pe, [["__scopeId", "data-v-95f9bc94"]]), ge = /* @__PURE__ */ j({
  __name: "ListPage",
  setup(T) {
    return (c, x) => (r(), A(ce));
  }
});
export {
  ge as default
};
