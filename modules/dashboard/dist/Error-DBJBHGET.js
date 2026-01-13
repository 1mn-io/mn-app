import { s as a } from "./index-DPejeiSQ.js";
import { _ as o } from "./FloatingConfigurator-Dz9eMgHr.js";
import { a1 as c, H as i, a as t, a3 as e, a4 as l, F as n } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const d = "/demo/images/error/asset-error.svg", m = { class: "bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden" }, f = { class: "flex flex-col items-center justify-center" }, p = { style: { "border-radius": "56px", padding: "0.3rem", background: "linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)" } }, u = {
  class: "w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center",
  style: { "border-radius": "53px" }
}, _ = { class: "gap-4 flex flex-col items-center" }, x = { class: "col-span-12 mt-8 text-center" }, y = {
  __name: "Error",
  setup(b) {
    return (g, s) => {
      const r = a;
      return i(), c(n, null, [
        t(o),
        e("div", m, [
          e("div", f, [
            e("div", p, [
              e("div", u, [
                e("div", _, [
                  s[0] || (s[0] = l('<div class="flex justify-center items-center border-2 border-pink-500 rounded-full" style="height:3.2rem;width:3.2rem;"><i class="pi pi-fw pi-exclamation-circle text-2xl! text-pink-500"></i></div><h1 class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-2">Error Occured</h1><span class="text-muted-color mb-8">Requested resource is not available.</span><img src="' + d + '" alt="Error" class="mb-8" width="80%">', 4)),
                  e("div", x, [
                    t(r, {
                      as: "router-link",
                      label: "Go to Dashboard",
                      to: "/",
                      severity: "danger"
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
  y as default
};
