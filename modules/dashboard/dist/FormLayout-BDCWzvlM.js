import { s as m } from "./index-veNcxqrw.js";
import { s as x } from "./index-JFi7Gene.js";
import { s as c } from "./index-FetBWay4.js";
import { s as v } from "./index-Bbb9yBUj.js";
import { s as _ } from "./index-BqrZ5r-u.js";
const { ref: a, createBlock: g, openBlock: u, withCtx: b, createElementVNode: s, createVNode: e } = window.Vue;
const w = { class: "flex flex-col md:flex-row gap-8" }, y = { class: "md:w-1/2" }, O = { class: "card flex flex-col gap-4" }, V = { class: "flex flex-col gap-2" }, E = { class: "flex flex-col gap-2" }, F = { class: "flex flex-col gap-2" }, L = { class: "card flex flex-col gap-4" }, N = { class: "flex flex-wrap gap-4" }, I = { class: "flex flex-col grow basis-0 gap-2" }, S = { class: "flex flex-col grow basis-0 gap-2" }, $ = { class: "md:w-1/2" }, z = { class: "card flex flex-col gap-4" }, A = { class: "grid grid-cols-12 gap-2" }, B = { class: "col-span-12 md:col-span-10" }, T = { class: "grid grid-cols-12 gap-2" }, k = { class: "col-span-12 md:col-span-10" }, H = { class: "card flex flex-col gap-4" }, U = { class: "flex flex-wrap items-start gap-4" }, C = { class: "field" }, G = { class: "field" }, Z = { class: "card flex flex-col gap-4" }, j = { class: "flex flex-wrap gap-2" }, q = { class: "flex mt-8" }, D = { class: "card flex flex-col gap-4 w-full" }, J = { class: "flex flex-col md:flex-row gap-4" }, K = { class: "flex flex-wrap gap-2 w-full" }, M = { class: "flex flex-wrap gap-2 w-full" }, P = { class: "flex flex-wrap" }, Q = { class: "flex flex-col md:flex-row gap-4" }, R = { class: "flex flex-wrap gap-2 w-full" }, W = { class: "flex flex-wrap gap-2 w-full" }, as = {
  __name: "FormLayout",
  setup(X) {
    const i = a([
      { name: "Option 1", code: "Option 1" },
      { name: "Option 2", code: "Option 2" },
      { name: "Option 3", code: "Option 3" }
    ]), o = a(null);
    return (Y, l) => {
      const t = _, d = v, n = c, r = x, f = m;
      return u(), g(f, null, {
        default: b(() => [
          s("div", w, [
            s("div", y, [
              s("div", O, [
                l[4] || (l[4] = s("div", { class: "font-semibold text-xl" }, "Vertical", -1)),
                s("div", V, [
                  l[1] || (l[1] = s("label", { for: "name1" }, "Name", -1)),
                  e(t, {
                    id: "name1",
                    type: "text"
                  })
                ]),
                s("div", E, [
                  l[2] || (l[2] = s("label", { for: "email1" }, "Email", -1)),
                  e(t, {
                    id: "email1",
                    type: "text"
                  })
                ]),
                s("div", F, [
                  l[3] || (l[3] = s("label", { for: "age1" }, "Age", -1)),
                  e(t, {
                    id: "age1",
                    type: "text"
                  })
                ])
              ]),
              s("div", L, [
                l[7] || (l[7] = s("div", { class: "font-semibold text-xl" }, "Vertical Grid", -1)),
                s("div", N, [
                  s("div", I, [
                    l[5] || (l[5] = s("label", { for: "name2" }, "Name", -1)),
                    e(t, {
                      id: "name2",
                      type: "text"
                    })
                  ]),
                  s("div", S, [
                    l[6] || (l[6] = s("label", { for: "email2" }, "Email", -1)),
                    e(t, {
                      id: "email2",
                      type: "text"
                    })
                  ])
                ])
              ])
            ]),
            s("div", $, [
              s("div", z, [
                l[10] || (l[10] = s("div", { class: "font-semibold text-xl" }, "Horizontal", -1)),
                s("div", A, [
                  l[8] || (l[8] = s("label", {
                    for: "name3",
                    class: "flex items-center col-span-12 mb-2 md:col-span-2 md:mb-0"
                  }, "Name", -1)),
                  s("div", B, [
                    e(t, {
                      id: "name3",
                      type: "text"
                    })
                  ])
                ]),
                s("div", T, [
                  l[9] || (l[9] = s("label", {
                    for: "email3",
                    class: "flex items-center col-span-12 mb-2 md:col-span-2 md:mb-0"
                  }, "Email", -1)),
                  s("div", k, [
                    e(t, {
                      id: "email3",
                      type: "text"
                    })
                  ])
                ])
              ]),
              s("div", H, [
                l[13] || (l[13] = s("div", { class: "font-semibold text-xl" }, "Inline", -1)),
                s("div", U, [
                  s("div", C, [
                    l[11] || (l[11] = s("label", {
                      for: "firstname1",
                      class: "sr-only"
                    }, "Firstname", -1)),
                    e(t, {
                      id: "firstname1",
                      type: "text",
                      placeholder: "Firstname"
                    })
                  ]),
                  s("div", G, [
                    l[12] || (l[12] = s("label", {
                      for: "lastname1",
                      class: "sr-only"
                    }, "Lastname", -1)),
                    e(t, {
                      id: "lastname1",
                      type: "text",
                      placeholder: "Lastname"
                    })
                  ]),
                  e(d, {
                    label: "Submit",
                    fluid: !1
                  })
                ])
              ]),
              s("div", Z, [
                l[16] || (l[16] = s("div", { class: "font-semibold text-xl" }, "Help Text", -1)),
                s("div", j, [
                  l[14] || (l[14] = s("label", { for: "username" }, "Username", -1)),
                  e(t, {
                    id: "username",
                    type: "text"
                  }),
                  l[15] || (l[15] = s("small", null, "Enter your username to reset your password.", -1))
                ])
              ])
            ])
          ]),
          s("div", q, [
            s("div", D, [
              l[22] || (l[22] = s("div", { class: "font-semibold text-xl" }, "Advanced", -1)),
              s("div", J, [
                s("div", K, [
                  l[17] || (l[17] = s("label", { for: "firstname2" }, "Firstname", -1)),
                  e(t, {
                    id: "firstname2",
                    type: "text"
                  })
                ]),
                s("div", M, [
                  l[18] || (l[18] = s("label", { for: "lastname2" }, "Lastname", -1)),
                  e(t, {
                    id: "lastname2",
                    type: "text"
                  })
                ])
              ]),
              s("div", P, [
                l[19] || (l[19] = s("label", { for: "address" }, "Address", -1)),
                e(n, {
                  id: "address",
                  rows: "4"
                })
              ]),
              s("div", Q, [
                s("div", R, [
                  l[20] || (l[20] = s("label", { for: "state" }, "State", -1)),
                  e(r, {
                    id: "state",
                    modelValue: o.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (p) => o.value = p),
                    options: i.value,
                    optionLabel: "name",
                    placeholder: "Select One",
                    class: "w-full"
                  }, null, 8, ["modelValue", "options"])
                ]),
                s("div", W, [
                  l[21] || (l[21] = s("label", { for: "zip" }, "Zip", -1)),
                  e(t, {
                    id: "zip",
                    type: "text"
                  })
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  as as default
};
