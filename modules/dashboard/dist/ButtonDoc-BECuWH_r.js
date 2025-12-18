import { s as m } from "./index-glD3efqJ.js";
import { B as y, s as g } from "./main-k5gsV9f8.js";
import { V as v, H as b, I as _, m as h, L as u, W as t, a as e, a0 as c } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
import { s as w } from "./index-B4LaqIEm.js";
var S = `
    .p-buttongroup {
        display: inline-flex;
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }
`, k = {
  root: "p-buttongroup p-component"
}, B = y.extend({
  name: "buttongroup",
  style: S,
  classes: k
}), $ = {
  name: "BaseButtonGroup",
  extends: g,
  style: B,
  provide: function() {
    return {
      $pcButtonGroup: this,
      $parentInstance: this
    };
  }
}, f = {
  name: "ButtonGroup",
  extends: $,
  inheritAttrs: !1
};
function C(a, o, n, r, d, s) {
  return b(), v("span", h({
    class: a.cx("root"),
    role: "group"
  }, a.ptmi("root")), [_(a.$slots, "default")], 16);
}
f.render = C;
const D = "/demo/images/logo-white.svg", P = "/demo/images/logo.svg", I = { class: "flex flex-col md:flex-row gap-8" }, H = { class: "md:w-1/2" }, G = { class: "card flex flex-col gap-4" }, R = { class: "flex flex-wrap gap-2" }, W = { class: "card flex flex-col gap-4" }, T = { class: "flex flex-wrap gap-2" }, V = { class: "card flex flex-col gap-4" }, L = { class: "flex flex-wrap gap-2" }, N = { class: "card flex flex-col gap-4" }, O = { class: "flex flex-wrap gap-2" }, z = { class: "card flex flex-col gap-4" }, A = { class: "flex flex-wrap gap-2" }, E = { class: "card flex flex-col gap-4" }, U = { class: "flex flex-wrap gap-2" }, j = { class: "card flex flex-col gap-4" }, q = { class: "flex flex-wrap gap-2" }, F = { class: "md:w-1/2" }, J = { class: "card flex flex-col gap-4" }, K = { class: "flex flex-wrap gap-2" }, M = { class: "card flex flex-col gap-4" }, Q = { class: "flex flex-wrap gap-2" }, X = { class: "card flex flex-col gap-4" }, Y = { class: "flex flex-wrap gap-2" }, Z = { class: "card flex flex-col gap-4" }, ee = { class: "flex flex-wrap gap-2" }, le = { class: "card flex flex-col gap-4" }, te = { class: "flex flex-wrap gap-2" }, se = { class: "card flex flex-col gap-4" }, oe = { class: "flex flex-wrap gap-2" }, ie = { class: "card flex flex-col gap-4" }, ne = { class: "flex flex-wrap gap-2" }, ce = {
  __name: "ButtonDoc",
  setup(a) {
    const o = u([
      {
        label: "Update",
        icon: "pi pi-refresh"
      },
      {
        label: "Delete",
        icon: "pi pi-times"
      },
      {
        separator: !0
      },
      {
        label: "Home",
        icon: "pi pi-home"
      }
    ]), n = u([!1, !1, !1]);
    function r(d) {
      n.value[d] = !0, setTimeout(() => n.value[d] = !1, 1e3);
    }
    return (d, s) => {
      const l = w, x = f, i = m;
      return b(), v("div", I, [
        t("div", H, [
          t("div", G, [
            s[4] || (s[4] = t("div", { class: "font-semibold text-xl" }, "Default", -1)),
            t("div", R, [
              e(l, { label: "Submit" }),
              e(l, {
                label: "Disabled",
                disabled: !0
              }),
              e(l, {
                label: "Link",
                class: "p-button-link"
              })
            ])
          ]),
          t("div", W, [
            s[5] || (s[5] = t("div", { class: "font-semibold text-xl" }, "Severities", -1)),
            t("div", T, [
              e(l, { label: "Primary" }),
              e(l, {
                label: "Secondary",
                severity: "secondary"
              }),
              e(l, {
                label: "Success",
                severity: "success"
              }),
              e(l, {
                label: "Info",
                severity: "info"
              }),
              e(l, {
                label: "Warn",
                severity: "warn"
              }),
              e(l, {
                label: "Help",
                severity: "help"
              }),
              e(l, {
                label: "Danger",
                severity: "danger"
              }),
              e(l, {
                label: "Contrast",
                severity: "contrast"
              })
            ])
          ]),
          t("div", V, [
            s[6] || (s[6] = t("div", { class: "font-semibold text-xl" }, "Text", -1)),
            t("div", L, [
              e(l, {
                label: "Primary",
                text: ""
              }),
              e(l, {
                label: "Secondary",
                severity: "secondary",
                text: ""
              }),
              e(l, {
                label: "Success",
                severity: "success",
                text: ""
              }),
              e(l, {
                label: "Info",
                severity: "info",
                text: ""
              }),
              e(l, {
                label: "Warn",
                severity: "warn",
                text: ""
              }),
              e(l, {
                label: "Help",
                severity: "help",
                text: ""
              }),
              e(l, {
                label: "Danger",
                severity: "danger",
                text: ""
              }),
              e(l, {
                label: "Plain",
                plain: "",
                text: ""
              })
            ])
          ]),
          t("div", N, [
            s[7] || (s[7] = t("div", { class: "font-semibold text-xl" }, "Outlined", -1)),
            t("div", O, [
              e(l, {
                label: "Primary",
                outlined: ""
              }),
              e(l, {
                label: "Secondary",
                severity: "secondary",
                outlined: ""
              }),
              e(l, {
                label: "Success",
                severity: "success",
                outlined: ""
              }),
              e(l, {
                label: "Info",
                severity: "info",
                outlined: ""
              }),
              e(l, {
                label: "warn",
                severity: "warn",
                outlined: ""
              }),
              e(l, {
                label: "Help",
                severity: "help",
                outlined: ""
              }),
              e(l, {
                label: "Danger",
                severity: "danger",
                outlined: ""
              }),
              e(l, {
                label: "Contrast",
                severity: "contrast",
                outlined: ""
              })
            ])
          ]),
          t("div", z, [
            s[8] || (s[8] = t("div", { class: "font-semibold text-xl" }, "Group", -1)),
            t("div", A, [
              e(x, null, {
                default: c(() => [
                  e(l, {
                    label: "Save",
                    icon: "pi pi-check"
                  }),
                  e(l, {
                    label: "Delete",
                    icon: "pi pi-trash"
                  }),
                  e(l, {
                    label: "Cancel",
                    icon: "pi pi-times"
                  })
                ]),
                _: 1
              })
            ])
          ]),
          t("div", E, [
            s[9] || (s[9] = t("div", { class: "font-semibold text-xl" }, "SplitButton", -1)),
            t("div", U, [
              e(i, {
                label: "Save",
                model: o.value
              }, null, 8, ["model"]),
              e(i, {
                label: "Save",
                model: o.value,
                severity: "secondary"
              }, null, 8, ["model"]),
              e(i, {
                label: "Save",
                model: o.value,
                severity: "success"
              }, null, 8, ["model"]),
              e(i, {
                label: "Save",
                model: o.value,
                severity: "info"
              }, null, 8, ["model"]),
              e(i, {
                label: "Save",
                model: o.value,
                severity: "warn"
              }, null, 8, ["model"]),
              e(i, {
                label: "Save",
                model: o.value,
                severity: "help"
              }, null, 8, ["model"]),
              e(i, {
                label: "Save",
                model: o.value,
                severity: "danger"
              }, null, 8, ["model"]),
              e(i, {
                label: "Save",
                model: o.value,
                severity: "contrast"
              }, null, 8, ["model"])
            ])
          ]),
          t("div", j, [
            s[12] || (s[12] = t("div", { class: "font-semibold text-xl" }, "Templating", -1)),
            t("div", q, [
              e(l, { type: "button" }, {
                default: c(() => [...s[10] || (s[10] = [
                  t("img", {
                    alt: "logo",
                    src: D,
                    style: { width: "1.5rem" }
                  }, null, -1)
                ])]),
                _: 1
              }),
              e(l, {
                type: "button",
                outlined: "",
                severity: "success"
              }, {
                default: c(() => [...s[11] || (s[11] = [
                  t("img", {
                    alt: "logo",
                    src: P,
                    style: { width: "1.5rem" }
                  }, null, -1),
                  t("span", { class: "ml-2 text-bold" }, "PrimeVue", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ]),
        t("div", F, [
          t("div", J, [
            s[13] || (s[13] = t("div", { class: "font-semibold text-xl" }, "Icons", -1)),
            t("div", K, [
              e(l, {
                icon: "pi pi-star-fill",
                class: "mr-2 mb-2"
              }),
              e(l, {
                label: "Bookmark",
                icon: "pi pi-bookmark",
                class: "mr-2 mb-2"
              }),
              e(l, {
                label: "Bookmark",
                icon: "pi pi-bookmark",
                iconPos: "right",
                class: "mr-2 mb-2"
              })
            ])
          ]),
          t("div", M, [
            s[14] || (s[14] = t("div", { class: "font-semibold text-xl" }, "Raised", -1)),
            t("div", Q, [
              e(l, {
                label: "Primary",
                raised: ""
              }),
              e(l, {
                label: "Secondary",
                severity: "secondary",
                raised: ""
              }),
              e(l, {
                label: "Success",
                severity: "success",
                raised: ""
              }),
              e(l, {
                label: "Info",
                severity: "info",
                raised: ""
              }),
              e(l, {
                label: "Warn",
                severity: "warn",
                raised: ""
              }),
              e(l, {
                label: "Help",
                severity: "help",
                raised: ""
              }),
              e(l, {
                label: "Danger",
                severity: "danger",
                raised: ""
              }),
              e(l, {
                label: "Contrast",
                severity: "contrast",
                raised: ""
              })
            ])
          ]),
          t("div", X, [
            s[15] || (s[15] = t("div", { class: "font-semibold text-xl" }, "Rounded", -1)),
            t("div", Y, [
              e(l, {
                label: "Primary",
                rounded: ""
              }),
              e(l, {
                label: "Secondary",
                severity: "secondary",
                rounded: ""
              }),
              e(l, {
                label: "Success",
                severity: "success",
                rounded: ""
              }),
              e(l, {
                label: "Info",
                severity: "info",
                rounded: ""
              }),
              e(l, {
                label: "Warn",
                severity: "warn",
                rounded: ""
              }),
              e(l, {
                label: "Help",
                severity: "help",
                rounded: ""
              }),
              e(l, {
                label: "Danger",
                severity: "danger",
                rounded: ""
              }),
              e(l, {
                label: "Contrast",
                severity: "contrast",
                rounded: ""
              })
            ])
          ]),
          t("div", Z, [
            s[16] || (s[16] = t("div", { class: "font-semibold text-xl" }, "Rounded Icons", -1)),
            t("div", ee, [
              e(l, {
                icon: "pi pi-check",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-bookmark",
                severity: "secondary",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-search",
                severity: "success",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-user",
                severity: "info",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-bell",
                severity: "warn",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-heart",
                severity: "help",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-times",
                severity: "danger",
                rounded: ""
              })
            ])
          ]),
          t("div", le, [
            s[17] || (s[17] = t("div", { class: "font-semibold text-xl" }, "Rounded Text", -1)),
            t("div", te, [
              e(l, {
                icon: "pi pi-check",
                text: "",
                raised: "",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-bookmark",
                severity: "secondary",
                text: "",
                raised: "",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-search",
                severity: "success",
                text: "",
                raised: "",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-user",
                severity: "info",
                text: "",
                raised: "",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-bell",
                severity: "warn",
                text: "",
                raised: "",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-heart",
                severity: "help",
                text: "",
                raised: "",
                rounded: ""
              }),
              e(l, {
                icon: "pi pi-times",
                severity: "danger",
                text: "",
                raised: "",
                rounded: ""
              })
            ])
          ]),
          t("div", se, [
            s[18] || (s[18] = t("div", { class: "font-semibold text-xl" }, "Rounded Outlined", -1)),
            t("div", oe, [
              e(l, {
                icon: "pi pi-check",
                rounded: "",
                outlined: ""
              }),
              e(l, {
                icon: "pi pi-bookmark",
                severity: "secondary",
                rounded: "",
                outlined: ""
              }),
              e(l, {
                icon: "pi pi-search",
                severity: "success",
                rounded: "",
                outlined: ""
              }),
              e(l, {
                icon: "pi pi-user",
                severity: "info",
                rounded: "",
                outlined: ""
              }),
              e(l, {
                icon: "pi pi-bell",
                severity: "warn",
                rounded: "",
                outlined: ""
              }),
              e(l, {
                icon: "pi pi-heart",
                severity: "help",
                rounded: "",
                outlined: ""
              }),
              e(l, {
                icon: "pi pi-times",
                severity: "danger",
                rounded: "",
                outlined: ""
              })
            ])
          ]),
          t("div", ie, [
            s[19] || (s[19] = t("div", { class: "font-semibold text-xl" }, "Loading", -1)),
            t("div", ne, [
              e(l, {
                type: "button",
                class: "mr-2 mb-2",
                label: "Search",
                icon: "pi pi-search",
                loading: n.value[0],
                onClick: s[0] || (s[0] = (p) => r(0))
              }, null, 8, ["loading"]),
              e(l, {
                type: "button",
                class: "mr-2 mb-2",
                label: "Search",
                icon: "pi pi-search",
                iconPos: "right",
                loading: n.value[1],
                onClick: s[1] || (s[1] = (p) => r(1))
              }, null, 8, ["loading"]),
              e(l, {
                type: "button",
                class: "mr-2 mb-2",
                icon: "pi pi-search",
                loading: n.value[2],
                onClick: s[2] || (s[2] = (p) => r(2))
              }, null, 8, ["loading"]),
              e(l, {
                type: "button",
                class: "mr-2 mb-2",
                label: "Search",
                loading: n.value[3],
                onClick: s[3] || (s[3] = (p) => r(3))
              }, null, 8, ["loading"])
            ])
          ])
        ])
      ]);
    };
  }
};
export {
  ce as default
};
