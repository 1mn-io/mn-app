import { s as r } from "./index-DiD6QwsT.js";
import { _ as c } from "./FloatingConfigurator-CtmBEnFZ.js";
import { a1 as o, H as i, a as t, a3 as e, a4 as n, F as l } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const d = "/demo/images/access/asset-access.svg", m = { class: "bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden" }, f = { class: "flex flex-col items-center justify-center" }, p = { style: { "border-radius": "56px", padding: "0.3rem", background: "linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)" } }, x = {
  class: "w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center",
  style: { "border-radius": "53px" }
}, _ = { class: "gap-4 flex flex-col items-center" }, u = { class: "col-span-12 mt-8 text-center" }, k = {
  __name: "Access",
  setup(g) {
    return (b, s) => {
      const a = r;
      return i(), o(l, null, [
        t(c),
        e("div", m, [
          e("div", f, [
            e("div", p, [
              e("div", x, [
                e("div", _, [
                  s[0] || (s[0] = n('<div class="flex justify-center items-center border-2 border-orange-500 rounded-full" style="width:3.2rem;height:3.2rem;"><i class="text-orange-500 pi pi-fw pi-lock text-2xl!"></i></div><h1 class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl mb-2">Access Denied</h1><span class="text-muted-color mb-8">You do not have the necessary permisions. Please contact admins.</span><img src="' + d + '" alt="Access denied" class="mb-8" width="80%">', 4)),
                  e("div", u, [
                    t(a, {
                      as: "router-link",
                      label: "Go to Dashboard",
                      to: "/",
                      severity: "warn"
                    })
                  ])
                ])
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
};
export {
  k as default
};
