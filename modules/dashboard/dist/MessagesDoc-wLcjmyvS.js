import { s as b } from "./index-wZOSeiBf.js";
import { s as w } from "./index-BqrZ5r-u.js";
import { s as V } from "./index-Bbb9yBUj.js";
const { ref: d, createElementBlock: p, openBlock: m, createElementVNode: l, createVNode: s, withCtx: r, createTextVNode: a, TransitionGroup: _, Fragment: k, renderList: E, createBlock: C, toDisplayString: D } = window.Vue;
import { a as I } from "./main-HoJjMwWR.js";
const S = { class: "flex flex-col md:flex-row gap-8" }, $ = { class: "md:w-1/2" }, T = { class: "card" }, B = { class: "flex flex-wrap gap-2" }, U = { class: "flex flex-wrap mb-4 gap-2" }, W = { class: "flex flex-wrap gap-2" }, N = { class: "md:w-1/2" }, q = { class: "card" }, F = { class: "flex flex-col gap-4 mb-4" }, K = {
  __name: "MessagesDoc",
  setup(G) {
    const i = I(), y = d([]), u = d(null), f = d(null);
    function g() {
      i.add({ severity: "success", summary: "Success Message", detail: "Message Detail", life: 3e3 });
    }
    function x() {
      i.add({ severity: "info", summary: "Info Message", detail: "Message Detail", life: 3e3 });
    }
    function c() {
      i.add({ severity: "warn", summary: "Warn Message", detail: "Message Detail", life: 3e3 });
    }
    function M() {
      i.add({ severity: "error", summary: "Error Message", detail: "Message Detail", life: 3e3 });
    }
    return (L, e) => {
      const n = V, v = w, o = b;
      return m(), p("div", S, [
        l("div", $, [
          l("div", T, [
            e[7] || (e[7] = l("div", { class: "font-semibold text-xl mb-4" }, "Toast", -1)),
            l("div", B, [
              s(n, {
                onClick: e[0] || (e[0] = (t) => g()),
                label: "Success",
                severity: "success"
              }),
              s(n, {
                onClick: e[1] || (e[1] = (t) => x()),
                label: "Info",
                severity: "info"
              }),
              s(n, {
                onClick: e[2] || (e[2] = (t) => c()),
                label: "Warn",
                severity: "warn"
              }),
              s(n, {
                onClick: e[3] || (e[3] = (t) => M()),
                label: "Error",
                severity: "danger"
              })
            ]),
            e[8] || (e[8] = l("div", { class: "font-semibold text-xl mt-4 mb-4" }, "Inline", -1)),
            l("div", U, [
              s(v, {
                modelValue: u.value,
                "onUpdate:modelValue": e[4] || (e[4] = (t) => u.value = t),
                placeholder: "Username",
                "aria-label": "username",
                invalid: ""
              }, null, 8, ["modelValue"]),
              s(o, { severity: "error" }, {
                default: r(() => [...e[6] || (e[6] = [
                  a("Username is required", -1)
                ])]),
                _: 1
              })
            ]),
            l("div", W, [
              s(v, {
                modelValue: f.value,
                "onUpdate:modelValue": e[5] || (e[5] = (t) => f.value = t),
                placeholder: "Email",
                "aria-label": "email",
                invalid: ""
              }, null, 8, ["modelValue"]),
              s(o, {
                severity: "error",
                icon: "pi pi-times-circle"
              })
            ])
          ])
        ]),
        l("div", N, [
          l("div", q, [
            e[15] || (e[15] = l("div", { class: "font-semibold text-xl mb-4" }, "Message", -1)),
            l("div", F, [
              s(o, { severity: "success" }, {
                default: r(() => [...e[9] || (e[9] = [
                  a("Success Message", -1)
                ])]),
                _: 1
              }),
              s(o, { severity: "info" }, {
                default: r(() => [...e[10] || (e[10] = [
                  a("Info Message", -1)
                ])]),
                _: 1
              }),
              s(o, { severity: "warn" }, {
                default: r(() => [...e[11] || (e[11] = [
                  a("Warn Message", -1)
                ])]),
                _: 1
              }),
              s(o, { severity: "error" }, {
                default: r(() => [...e[12] || (e[12] = [
                  a("Error Message", -1)
                ])]),
                _: 1
              }),
              s(o, { severity: "secondary" }, {
                default: r(() => [...e[13] || (e[13] = [
                  a("Secondary Message", -1)
                ])]),
                _: 1
              }),
              s(o, { severity: "contrast" }, {
                default: r(() => [...e[14] || (e[14] = [
                  a("Contrast Message", -1)
                ])]),
                _: 1
              })
            ]),
            s(_, {
              name: "p-message",
              tag: "div"
            }, {
              default: r(() => [
                (m(!0), p(k, null, E(y.value, (t) => (m(), C(o, {
                  severity: t.severity,
                  key: t.content
                }, {
                  default: r(() => [
                    a(D(t.content), 1)
                  ]),
                  _: 2
                }, 1032, ["severity"]))), 128))
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
};
export {
  K as default
};
