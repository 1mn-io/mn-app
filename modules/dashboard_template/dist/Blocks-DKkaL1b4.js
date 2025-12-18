import { s as j } from "./index-FxcZrPh6.js";
import { s as B } from "./index-B_LT6P7Q.js";
import { s as q } from "./index-BOZGNhSR.js";
import { s as M, a as A } from "./index-CSjj4NyN.js";
import { s as D } from "./index-DdLpcop1.js";
import { s as I } from "./index-DQvMDPdp.js";
import { _ as V } from "./main-BRMl0FA-.js";
import { a3 as _, L as m, V as p, H as g, W as e, J as w, Z as y, p as x, q as S, I as E, a as t, a0 as r, ag as P } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
const $ = { class: "mb-16 overflow-hidden" }, L = { class: "flex flex-col lg:flex-row justify-between py-4 gap-4 lg:gap-2 px-0!" }, Z = { class: "flex items-center gap-2" }, z = { class: "font-medium text-xl" }, F = {
  key: 0,
  class: "flex items-center justify-center px-1.5 py-1 w-fit bg-emerald-500 text-emerald-100 dark:bg-emerald-400 dark:text-emerald-800 rounded-md leading-none! text-xs md:text-sm"
}, N = { class: "flex items-center gap-2" }, O = { class: "inline-flex border border-surface-200 dark:border-surface-700 rounded-2xl overflow-hidden min-h-10" }, T = { class: "flex items-center gap-2 grow lg:grow-0 justify-end lg:justify-start" }, R = ["disabled"], W = { class: "p-0 border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden" }, U = { key: 1 }, H = { class: "app-code" }, G = {
  __name: "BlockViewer",
  props: {
    header: {
      type: String,
      default: null
    },
    code: null,
    recent: {
      type: Boolean,
      default: !1
    },
    free: {
      type: Boolean,
      default: !1
    },
    containerClass: null,
    previewStyle: null
  },
  setup(o) {
    const v = o, c = _({
      PREVIEW: 0,
      CODE: 1
    }), i = m(0), f = m(!1), s = m(!1);
    function l(n, a) {
      i.value = a, n.preventDefault();
    }
    async function b(n) {
      if (!(f.value || s.value)) {
        s.value = !0, n.preventDefault();
        try {
          await navigator.clipboard.writeText(v.code), s.value = !1, f.value = !0, setTimeout(() => {
            f.value = !1;
          }, 2e3);
        } catch (a) {
          console.error("Clipboard write failed:", a), s.value = !1;
        }
      }
    }
    return (n, a) => (g(), p("div", $, [
      e("div", L, [
        e("div", Z, [
          e("span", z, y(o.header), 1),
          o.free ? (g(), p("span", F, "Free")) : w("", !0)
        ]),
        e("div", N, [
          e("div", O, [
            e("button", {
              class: x([
                "min-w-28 flex items-center gap-1 justify-center px-4 py-2 rounded-2xl transition-all duration-200 font-medium cursor-pointer   ",
                i.value === c.CODE ? "bg-primary text-primary-contrast " : "text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0"
              ]),
              onClick: a[0] || (a[0] = (u) => l(u, c.CODE))
            }, [...a[3] || (a[3] = [
              e("span", null, "Code", -1)
            ])], 2),
            e("button", {
              class: x([
                "min-w-28 flex items-center gap-1 justify-center px-4 py-2 rounded-2xl transition-all duration-200 font-medium cursor-pointer",
                i.value === c.PREVIEW ? "bg-primary text-primary-contrast   " : "text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0"
              ]),
              onClick: a[1] || (a[1] = (u) => l(u, c.PREVIEW))
            }, [...a[4] || (a[4] = [
              e("span", null, "Preview", -1)
            ])], 2)
          ]),
          a[8] || (a[8] = e("div", { class: "h-6 w-px bg-surface-200 dark:bg-surface-700 hidden lg:block" }, null, -1)),
          e("div", T, [
            e("button", {
              onClick: a[2] || (a[2] = (u) => b(u)),
              disabled: s.value,
              class: "relative w-10 h-10 border border-surface-200 dark:border-surface-700 rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 dark:focus-visible:ring-offset-surface-900 cursor-pointer disabled:cursor-wait"
            }, [
              e("span", {
                class: x(["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 leading-none", s.value ? "opacity-100 scale-100 z-10" : "opacity-0 scale-50 -z-[2]"])
              }, [...a[5] || (a[5] = [
                e("i", {
                  class: "pi pi-spinner animate-spin text-surface-700 dark:text-surface-300",
                  style: { "font-size": "1.25rem" }
                }, null, -1)
              ])], 2),
              e("span", {
                class: x(["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 leading-none", f.value && !s.value ? "opacity-100 scale-100 z-10" : "opacity-0 scale-50 -z-[2]"])
              }, [...a[6] || (a[6] = [
                e("svg", {
                  class: "w-5 h-5 fill-green-600 dark:fill-green-400",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  e("g", { id: "check" }, [
                    e("path", { d: "M9,18.25A.74.74,0,0,1,8.47,18l-5-5A.75.75,0,1,1,4.53,12L9,16.44,19.47,6A.75.75,0,0,1,20.53,7l-11,11A.74.74,0,0,1,9,18.25Z" })
                  ])
                ], -1)
              ])], 2),
              e("span", {
                class: x(["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 leading-none", !f.value && !s.value ? "opacity-100 scale-100 z-10" : "opacity-0 scale-50 -z-[2]"])
              }, [...a[7] || (a[7] = [
                e("svg", {
                  class: "w-5 h-5 fill-surface-700 dark:fill-surface-300",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  e("g", { id: "clone" }, [
                    e("path", { d: "M14,16.75H6A2.75,2.75,0,0,1,3.25,14V6A2.75,2.75,0,0,1,6,3.25h8A2.75,2.75,0,0,1,16.75,6v8A2.75,2.75,0,0,1,14,16.75Zm-8-12A1.25,1.25,0,0,0,4.75,6v8A1.25,1.25,0,0,0,6,15.25h8A1.25,1.25,0,0,0,15.25,14V6A1.25,1.25,0,0,0,14,4.75Z" }),
                    e("path", { d: "M18,20.75H10A2.75,2.75,0,0,1,7.25,18V16h1.5v2A1.25,1.25,0,0,0,10,19.25h8A1.25,1.25,0,0,0,19.25,18V10A1.25,1.25,0,0,0,18,8.75H16V7.25h2A2.75,2.75,0,0,1,20.75,10v8A2.75,2.75,0,0,1,18,20.75Z" })
                  ])
                ], -1)
              ])], 2)
            ], 8, R)
          ])
        ])
      ]),
      e("div", W, [
        i.value == c.PREVIEW ? (g(), p("div", {
          key: 0,
          class: x(o.containerClass),
          style: S(o.previewStyle)
        }, [
          E(n.$slots, "default", {}, void 0, !0)
        ], 6)) : w("", !0),
        i.value === c.CODE ? (g(), p("div", U, [
          e("pre", H, [
            e("code", null, y(o.code), 1)
          ])
        ])) : w("", !0)
      ])
    ]));
  }
}, d = /* @__PURE__ */ V(G, [["__scopeId", "data-v-040c76a4"]]), J = { class: "bg-surface-0 dark:bg-surface-900 border border-surface rounded-xl p-8 bg-[url('/demo/images/blocks/landing-blocks.jpg')] dark:bg-[url('/demo/images/blocks/landing-blocks-dark.jpg')] bg-cover bg-no-repeat h-[440px] flex mb-8" }, Y = { class: "flex flex-col gap-4 items-center sm:items-start justify-center sm:max-w-144" }, K = { class: "flex gap-2" }, Q = { class: "relative min-h-160 lg:min-h-0 bg-surface-0 dark:bg-surface-900 flex lg:flex-row flex-col" }, X = { class: "flex lg:flex lg:flex-row flex-col justify-center md:justify-normal h-full flex-1" }, ee = { class: "relative flex-1 z-20 flex items-center justify-center" }, se = { class: "flex items-center justify-center h-full" }, te = { class: "w-full max-w-2xl px-6 py-12 lg:p-12 xl:p-16 text-center lg:text-left" }, ae = { class: "flex items-center gap-4 justify-center lg:justify-start" }, le = {
  class: "px-6 py-20 md:px-20 lg:px-80 flex items-center justify-center backdrop-blur-3xl bg-cover! bg-center! bg-no-repeat!",
  style: { "background-image": "url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/signin/signin-glass.jpg')" }
}, ie = { class: "px-8 md:px-12 lg:px-20 py-12 flex flex-col items-center gap-12 w-full backdrop-blur-2xl rounded-2xl bg-white/10 border border-white/10 max-w-xl" }, re = { class: "flex flex-col items-center gap-8 w-full" }, de = { class: "flex flex-col gap-6 w-full" }, ce = { class: "bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20" }, ne = { class: "flex lg:flex-row flex-col gap-8 max-w-7xl mx-auto" }, oe = { class: "w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6" }, ue = { class: "w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6" }, fe = { class: "w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6" }, xe = { class: "bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20" }, pe = { class: "text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4" }, ge = { class: "pb-20 bg-surface-0 dark:bg-surface-950" }, me = { class: "bg-surface-900 text-surface-100 py-4 px-6 lg:px-20 flex justify-between items-center flex-wrap" }, ve = { class: "bg-surface-0 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20" }, be = { class: "flex items-start flex-col md:justify-between md:flex-row" }, he = { class: "mt-6 md:mt-0 flex items-center" }, ke = { class: "bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 flex items-center justify-center" }, we = { class: "bg-surface-0 dark:bg-surface-900 p-8 md:p-12 shadow-sm rounded-2xl w-full max-w-xl mx-auto flex flex-col gap-8" }, ye = { class: "flex flex-col gap-6 w-full" }, Ce = { class: "flex flex-col gap-2 w-full" }, je = { class: "flex flex-col gap-2 w-full" }, Be = { class: "flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0" }, qe = { class: "flex items-center gap-2" }, Me = { class: "bg-surface-0 dark:bg-surface-950 px-8 md:px-20 py-12 md:py-20 lg:px-80" }, Ae = { class: "flex flex-col gap-4" }, De = { class: "flex flex-col gap-4" }, Ie = { class: "flex flex-col md:flex-row gap-4" }, Ve = { class: "flex justify-end" }, _e = { class: "flex flex-col md:flex-row gap-4" }, Se = { class: "flex items-center gap-4 flex-1" }, Ee = { class: "flex-1 flex flex-wrap gap-2" }, Pe = { class: "flex justify-end" }, $e = { class: "flex flex-col md:flex-row gap-4" }, Le = { class: "flex justify-end" }, Ze = { class: "flex flex-col md:flex-row gap-4" }, ze = { class: "flex justify-end" }, Fe = { class: "flex flex-col md:flex-row gap-4" }, Ne = { class: "flex justify-end" }, Ye = {
  __name: "Blocks",
  setup(o) {
    const v = m(""), c = m(!0), i = {
      hero: `<div class="relative min-h-160 lg:min-h-0 bg-surface-0 dark:bg-surface-900 flex lg:flex-row flex-col">
    <div class="flex lg:flex lg:flex-row flex-col justify-center md:justify-normal h-full flex-1">
        <div class="relative flex-1 z-20 flex items-center justify-center">
            <div class="flex items-center justify-center h-full">
                <div class="w-full max-w-2xl px-6 py-12 lg:p-12 xl:p-16 text-center lg:text-left">
                    <h1 class="text-4xl xl:text-5xl font-bold text-surface-0 lg:text-surface-900 dark:text-surface-0 mb-6 leading-tight!">
                        <span class="block">Create the screens your</span>
                        <span class="block text-primary">visitors deserve to see</span>
                    </h1>

                    <p class="text-surface-0/90 lg:text-surface-700 dark:text-surface-200 text-xl leading-normal mb-8 max-w-xl lg:max-w-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div class="flex items-center gap-4 justify-center lg:justify-start">
                        <Button label="Learn More" type="button" />
                        <Button label="Live Demo" type="button" outlined />
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute lg:relative inset-0 lg:inset-auto flex-1">
            <div class="absolute lg:hidden inset-0 bg-surface-900/60 dark:bg-surface-900/80 z-10" />
            <img
                src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-1.png"
                alt="hero-1"
                class="h-full w-full object-cover xl:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]"
            />
        </div>
    </div>
</div>`,
      feature: `<div class="bg-surface-0 dark:bg-surface-950 px-6 md:px-12 lg:px-20 py-20 text-center">
    <div class="flex flex-col gap-6">
        <div class="flex flex-col items-center gap-4">
            <div class="font-bold text-3xl leading-tight">
                <span class="text-surface-900 dark:text-surface-0">One Product, </span>
                <span class="text-primary-500 dark:text-primary-400">Many Solutions</span>
            </div>
            <div class="text-surface-500 dark:text-surface-400 leading-tight">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="w-full rounded-md p-4">
                <span class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                    <i class="pi pi-desktop text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                </span>
                <div class="flex flex-col gap-1">
                    <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Built for Developers</div>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div class="w-full rounded-md p-4">
                <span class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                    <i class="pi pi-lock text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                </span>
                <div class="flex flex-col gap-1">
                    <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">End-to-End Encryption</div>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
                </div>
            </div>
            <div class="w-full rounded-md p-4">
                <span class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                    <i class="pi pi-face-smile text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                </span>
                <div class="flex flex-col gap-1">
                    <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Easy to Use</div>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
                </div>
            </div>
            <div class="w-full rounded-md p-4">
                <span class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                    <i class="pi pi-globe text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                </span>
                <div class="flex flex-col gap-1">
                    <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Fast & Global Support</div>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</p>
                </div>
            </div>
            <div class="w-full rounded-md p-4">
                <span class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                    <i class="pi pi-github text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                </span>
                <div class="flex flex-col gap-1">
                    <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Open Source</div>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.</p>
                </div>
            </div>
            <div class="w-full rounded-md p-4">
                <span class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto">
                    <i class="pi pi-shield text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" />
                </span>
                <div class="flex flex-col gap-1">
                    <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Trusted Security</div>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</p>
                </div>
            </div>
        </div>
    </div>
</div>`,
      pricing: `<div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
        <div class="flex flex-col gap-4 items-center justify-center mb-12">
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight">Pricing Plans</div>
            <div class="text-surface-500 dark:text-surface-400 text-lg text-center leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        </div>

        <div class="flex lg:flex-row flex-col gap-8 max-w-7xl mx-auto">
            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6">
                <div class="flex flex-col gap-2">
                    <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Basic</h4>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
                </div>

                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
                <div class="flex items-center gap-2">
                    <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">$9</span>
                    <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">per month</span>
                </div>
                <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Morbi tincidunt augue </span>
                    </li>
                </ul>
                <Button label="Buy Now" rounded class="w-full" />
            </div>
            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6">
                <div class="flex flex-col gap-2">
                    <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Premium</h4>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
                </div>

                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
                <div class="flex items-center gap-2">
                    <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">$29</span>
                    <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">per month</span>
                </div>
                <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Morbi tincidunt augue </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Duis ultricies lacus sed </span>
                    </li>
                </ul>
                <Button label="Buy Now" rounded class="w-full" />
            </div>
            <div class="w-full flex-1 p-8 flex rounded-2xl flex-col bg-surface-0 dark:bg-surface-800 shadow-sm gap-6">
                <div class="flex flex-col gap-2">
                    <h4 class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Enterprise</h4>
                    <p class="text-surface-500 dark:text-surface-400 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
                </div>

                <div class="w-full h-px bg-surface-200 dark:bg-surface-700" />
                <div class="flex items-center gap-2">
                    <span class="font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight">$49</span>
                    <span class="font-medium text-surface-500 dark:text-surface-400 leading-tight">per month</span>
                </div>
                <div class="w-full h-px bg-surface-200 dark:bg-surface-600" />
                <ul class="list-none flex flex-col gap-4 flex-1">
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Arcu vitae elementum </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Dui faucibus in ornare </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Morbi tincidunt augue </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Duis ultricies lacus sed </span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="pi pi-check-circle text-lg! text-green-500" />
                        <span class="text-surface-800 dark:text-surface-100 leading-tight"> Imperdiet proin </span>
                    </li>
                </ul>
                <Button label="Buy Now" rounded class="w-full" />
            </div>
        </div>
    </div>`,
      cta: ` <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
    <div class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4">
        <div class="text-primary font-bold text-lg leading-tight"><i class="pi pi-discord text-lg! leading-none!" />&nbsp;POWERED BY DISCORD</div>
        <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl leading-tight">Join our design community</div>
        <div class="text-surface-700 dark:text-surface-100 text-xl leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        <Button label="Join Now" icon="pi pi-discord" rounded class="mt-4" />
    </div>
</div>`,
      banner: `<div class="pb-20 bg-surface-0 dark:bg-surface-950">
    <div class="bg-surface-900 text-surface-100 py-4 px-6 lg:px-20 flex justify-between items-center flex-wrap">
        <div class="font-bold">🔥 Hot Deals!</div>
        <div class="inline-flex gap-1 items-center">
            <span class="hidden lg:flex leading-normal">Libero voluptatum atque exercitationem praesentium provident odit.</span>
            <a class="text-surface-0 underline font-bold" href="#">Learn More</a>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" class="text-surface-0! hover:bg-surface-500/20!" />
    </div>
</div>`,
      "page-heading": `<div class="bg-surface-0 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
    <ul class="list-none p-0 m-0 flex items-center font-medium mb-5">
        <li>
            <a class="text-surface-500 dark:text-surface-300 no-underline leading-normal cursor-pointer">Application</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-surface-500 dark:text-surface-300 text-sm! leading-normal!" />
        </li>
        <li>
            <span class="text-surface-900 dark:text-surface-0 leading-normal">Analytics</span>
        </li>
    </ul>
    <div class="flex items-start flex-col md:justify-between md:flex-row">
        <div>
            <div class="font-bold text-3xl text-surface-900 dark:text-surface-0 mb-4">Customers</div>
            <div class="flex items-center text-surface-700 dark:text-surface-300 flex-wrap gap-8">
                <div class="flex items-center gap-2">
                    <i class="pi pi-users text-base! leading-normal!" />
                    <span>332 Active Users</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="pi pi-globe text-base! leading-normal!" />
                    <span>9.402 Sessions</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="pi pi-clock text-base! leading-normal!" />
                    <span>2.32m Avg. Duration</span>
                </div>
            </div>
        </div>
        <div class="mt-6 md:mt-0 flex items-center">
            <Button label="Add" class="mr-3" outlined icon="pi pi-user-plus" />
            <Button label="Save Changes" icon="pi pi-check" class="whitespace-nowrap" />
        </div>
    </div>
</div>`,
      stats: `<div class="bg-surface-50 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-5 rounded-2xl">
            <div class="flex justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <span class="text-surface-700 dark:text-surface-300 font-normal leading-tight">Messages</span>
                    <div class="text-surface-900 dark:text-surface-0 font-semibold text-2xl! leading-tight!">152</div>
                </div>
                <div class="flex items-center justify-center bg-linear-to-b from-cyan-400 dark:from-cyan-300 to-cyan-600 dark:to-cyan-500 rounded-lg w-10 h-10">
                    <i class="pi pi-envelope text-surface-0 dark:text-surface-900 text-xl! leading-none!" />
                </div>
            </div>
            <div class="mt-4">
                <span class="text-surface-600 dark:text-surface-300 font-medium leading-tight">24 new</span>
                <span class="text-surface-500 dark:text-surface-300 leading-tight"> since last visit</span>
            </div>
        </div>

        <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-5 rounded-2xl">
            <div class="flex justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <span class="text-surface-700 dark:text-surface-300 font-normal leading-tight">Check-ins</span>
                    <div class="text-surface-900 dark:text-surface-0 font-semibold text-2xl! leading-tight!">532</div>
                </div>
                <div class="flex items-center justify-center bg-linear-to-b from-orange-400 dark:from-orange-300 to-orange-600 dark:to-orange-500 rounded-lg w-10 h-10">
                    <i class="pi pi-map-marker text-surface-0 dark:text-surface-900 text-xl! leading-none!" />
                </div>
            </div>
            <div class="mt-4">
                <span class="text-surface-600 dark:text-surface-300 font-medium leading-tight">48 new</span>
                <span class="text-surface-500 dark:text-surface-300 leading-tight"> since last visit</span>
            </div>
        </div>

        <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-5 rounded-2xl">
            <div class="flex justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <span class="text-surface-700 dark:text-surface-300 font-normal leading-tight">Files Synced</span>
                    <div class="text-surface-900 dark:text-surface-0 font-semibold text-2xl! leading-tight!">28.441</div>
                </div>
                <div class="flex items-center justify-center bg-linear-to-b from-slate-400 dark:from-slate-300 to-slate-600 dark:to-slate-500 rounded-lg w-10 h-10">
                    <i class="pi pi-file text-surface-0 dark:text-surface-900 text-xl! leading-none!" />
                </div>
            </div>
            <div class="mt-4">
                <span class="text-surface-500 dark:text-surface-300 leading-tight">32,56 / 250 GB</span>
            </div>
        </div>

        <div class="bg-surface-0 dark:bg-surface-900 shadow-sm p-5 rounded-2xl">
            <div class="flex justify-between gap-4">
                <div class="flex flex-col gap-2">
                    <span class="text-surface-700 dark:text-surface-300 font-normal leading-tight">Users Online</span>
                    <div class="text-surface-900 dark:text-surface-0 font-semibold text-2xl! leading-tight!">25.660</div>
                </div>
                <div class="flex items-center justify-center bg-linear-to-b from-violet-400 dark:from-violet-300 to-violet-600 dark:to-violet-500 rounded-lg w-10 h-10">
                    <i class="pi pi-users text-surface-0 dark:text-surface-900 text-xl! leading-none!" />
                </div>
            </div>
            <div class="mt-4">
                <span class="text-surface-600 dark:text-surface-300 font-medium leading-tight">72 new</span>
                <span class="text-surface-500 dark:text-surface-300 leading-tight"> user this week</span>
            </div>
        </div>
    </div>
</div>`,
      "sign-in": ` <div class="bg-surface-0 dark:bg-surface-900 p-8 md:p-12 shadow-sm rounded-2xl w-full max-w-xl mx-auto flex flex-col gap-8">
    <div class="flex flex-col items-center gap-4">
        <div class="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.09219 2.87829C5.94766 3.67858 4.9127 4.62478 4.01426 5.68992C7.6857 5.34906 12.3501 5.90564 17.7655 8.61335C23.5484 11.5047 28.205 11.6025 31.4458 10.9773C31.1517 10.087 30.7815 9.23135 30.343 8.41791C26.6332 8.80919 21.8772 8.29127 16.3345 5.51998C12.8148 3.76014 9.71221 3.03521 7.09219 2.87829ZM28.1759 5.33332C25.2462 2.06 20.9887 0 16.25 0C14.8584 0 13.5081 0.177686 12.2209 0.511584C13.9643 0.987269 15.8163 1.68319 17.7655 2.65781C21.8236 4.68682 25.3271 5.34013 28.1759 5.33332ZM32.1387 14.1025C28.2235 14.8756 22.817 14.7168 16.3345 11.4755C10.274 8.44527 5.45035 8.48343 2.19712 9.20639C2.0292 9.24367 1.86523 9.28287 1.70522 9.32367C1.2793 10.25 0.939308 11.2241 0.695362 12.2356C0.955909 12.166 1.22514 12.0998 1.50293 12.0381C5.44966 11.161 11.0261 11.1991 17.7655 14.5689C23.8261 17.5991 28.6497 17.561 31.9029 16.838C32.0144 16.8133 32.1242 16.7877 32.2322 16.7613C32.2441 16.509 32.25 16.2552 32.25 16C32.25 15.358 32.2122 14.7248 32.1387 14.1025ZM31.7098 20.1378C27.8326 20.8157 22.5836 20.5555 16.3345 17.431C10.274 14.4008 5.45035 14.439 2.19712 15.1619C1.475 15.3223 0.825392 15.5178 0.252344 15.7241C0.250782 15.8158 0.25 15.9078 0.25 16C0.25 24.8366 7.41344 32 16.25 32C23.6557 32 29.8862 26.9687 31.7098 20.1378Z"
                    class="fill-surface-700 dark:fill-surface-200"
                />
            </svg>
        </div>
        <div class="flex flex-col items-center gap-2 w-full">
            <div class="text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight text-center w-full">Welcome Back</div>
            <div class="text-center w-full">
                <span class="text-surface-700 dark:text-surface-200 leading-normal">Don't have an account?</span>
                <a class="text-primary font-medium ml-1 cursor-pointer hover:text-primary-emphasis">Create today!</a>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6 w-full">
        <div class="flex flex-col gap-2 w-full">
            <label for="email1" class="text-surface-900 dark:text-surface-0 font-medium leading-normal">Email Address</label>
            <InputText id="email1" type="text" placeholder="Email address" class="w-full px-3 py-2 shadow-sm rounded-lg" />
        </div>
        <div class="flex flex-col gap-2 w-full">
            <label for="password1" class="text-surface-900 dark:text-surface-0 font-medium leading-normal">Password</label>

            <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" :feedback="false" input-class="w-full!" />
        </div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0">
            <div class="flex items-center gap-2">
                <Checkbox id="rememberme1" v-model="checked1" :binary="true" />
                <label for="rememberme1" class="text-surface-900 dark:text-surface-0 leading-normal">Remember me</label>
            </div>
            <a class="text-primary font-medium cursor-pointer hover:text-primary-emphasis">Forgot your password?</a>
        </div>
    </div>
    <Button label="Sign In" icon="pi pi-user" class="w-full py-2 rounded-lg flex justify-center items-center gap-2">
        <template #icon>
            <i class="pi pi-user text-base! leading-normal!" />
        </template>
    </Button>
</div>`,
      "description-list": `<div class="bg-surface-0 dark:bg-surface-950 px-8 md:px-20 py-12 md:py-20 lg:px-80">
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2 pb-4">
            <div class="font-semibold text-xl text-surface-900 dark:text-surface-0 leading-tight">Movie Information</div>
            <div class="text-surface-500 dark:text-surface-300 text-base leading-tight">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
        </div>

        <div class="border-t border-surface-200 dark:border-surface-700" />

        <div class="flex flex-col gap-4">
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex items-center gap-4 flex-1">
                    <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Title</div>
                    <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">Heat</div>
                </div>
                <div class="flex justify-end">
                    <Button icon="pi pi-pen-to-square" rounded outlined severity="secondary" icon-only class="shrink-0" />
                </div>
            </div>

            <div class="border-t border-surface-200 dark:border-surface-700" />

            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex items-center gap-4 flex-1">
                    <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Genre</div>
                    <div class="flex-1 flex flex-wrap gap-2">
                        <Chip label="Crime" severity="secondary" />
                        <Chip label="Drama" severity="secondary" />
                        <Chip label="Thriller" severity="secondary" />
                    </div>
                </div>
                <div class="flex justify-end">
                    <Button icon="pi pi-pen-to-square" rounded outlined severity="secondary" icon-only class="shrink-0" />
                </div>
            </div>

            <div class="border-t border-surface-200 dark:border-surface-700" />

            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex items-center gap-4 flex-1">
                    <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Director</div>
                    <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">Michael Mann</div>
                </div>
                <div class="flex justify-end">
                    <Button icon="pi pi-pen-to-square" rounded outlined severity="secondary" icon-only class="shrink-0" />
                </div>
            </div>

            <div class="border-t border-surface-200 dark:border-surface-700" />

            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex items-center gap-4 flex-1">
                    <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Writer</div>
                    <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight">Michael Mann</div>
                </div>
                <div class="flex justify-end">
                    <Button icon="pi pi-pen-to-square" rounded outlined severity="secondary" icon-only class="shrink-0" />
                </div>
            </div>

            <div class="border-t border-surface-200 dark:border-surface-700" />

            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex items-start gap-4 flex-1">
                    <div class="w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight">Plot</div>
                    <div class="flex-1 text-surface-900 dark:text-surface-0 text-base leading-normal">
                        A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.
                    </div>
                </div>
                <div class="flex justify-end">
                    <Button icon="pi pi-pen-to-square" rounded outlined severity="secondary" icon-only class="shrink-0" />
                </div>
            </div>

            <div class="border-t border-surface-200 dark:border-surface-700" />
        </div>
    </div>
</div>`,
      card: `<div class="bg-surface-50 dark:bg-surface-950">
    <div class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-2xl flex flex-col gap-4">
        <div class="flex gap-4">
            <div class="flex flex-col gap-2 flex-1">
                <div class="text-2xl leading-tight font-semibold text-surface-900 dark:text-surface-0">Card Title</div>
                <div class="text-base leading-tight text-surface-500 dark:text-surface-300">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
            </div>
        </div>
        <div class="flex flex-1">
            <div class="flex-1 border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-lg h-[150px]" />
        </div>
    </div>
</div>`,
      glass: `<div
        class="px-6 py-20 md:px-20 lg:px-80 flex items-center justify-center backdrop-blur-3xl bg-cover! bg-center! bg-no-repeat!"
        style="background-image: url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/signin/signin-glass.jpg')"
    >
        <div class="px-8 md:px-12 lg:px-20 py-12 flex flex-col items-center gap-12 w-full backdrop-blur-2xl rounded-2xl bg-white/10 border border-white/10 max-w-sm">
            <div class="flex flex-col items-center gap-4 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.09219 2.87829C5.94766 3.67858 4.9127 4.62478 4.01426 5.68992C7.6857 5.34906 12.3501 5.90564 17.7655 8.61335C23.5484 11.5047 28.205 11.6025 31.4458 10.9773C31.1517 10.087 30.7815 9.23135 30.343 8.41791C26.6332 8.80919 21.8772 8.29127 16.3345 5.51998C12.8148 3.76014 9.71221 3.03521 7.09219 2.87829ZM28.1759 5.33332C25.2462 2.06 20.9887 0 16.25 0C14.8584 0 13.5081 0.177686 12.2209 0.511584C13.9643 0.987269 15.8163 1.68319 17.7655 2.65781C21.8236 4.68682 25.3271 5.34013 28.1759 5.33332ZM32.1387 14.1025C28.2235 14.8756 22.817 14.7168 16.3345 11.4755C10.274 8.44527 5.45035 8.48343 2.19712 9.20639C2.0292 9.24367 1.86523 9.28287 1.70522 9.32367C1.2793 10.25 0.939308 11.2241 0.695362 12.2356C0.955909 12.166 1.22514 12.0998 1.50293 12.0381C5.44966 11.161 11.0261 11.1991 17.7655 14.5689C23.8261 17.5991 28.6497 17.561 31.9029 16.838C32.0144 16.8133 32.1242 16.7877 32.2322 16.7613C32.2441 16.509 32.25 16.2552 32.25 16C32.25 15.358 32.2122 14.7248 32.1387 14.1025ZM31.7098 20.1378C27.8326 20.8157 22.5836 20.5555 16.3345 17.431C10.274 14.4008 5.45035 14.439 2.19712 15.1619C1.475 15.3223 0.825392 15.5178 0.252344 15.7241C0.250782 15.8158 0.25 15.9078 0.25 16C0.25 24.8366 7.41344 32 16.25 32C23.6557 32 29.8862 26.9687 31.7098 20.1378Z"
                        class="fill-surface-0"
                    />
                </svg>
                <div class="flex flex-col gap-2 w-full">
                    <div class="text-center text-3xl font-medium text-white leading-tight">Welcome Back</div>
                    <div class="text-center">
                        <span class="text-white/80">Don't have an account? </span>
                        <a class="text-white/80 cursor-pointer hover:text-white/90 underline">Sign up</a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center gap-8 w-full">
                <div class="flex flex-col gap-6 w-full">
                    <IconField>
                        <InputIcon class="pi pi-user text-white/70!" />
                        <InputText type="text" class="appearance-none! border! border-white/10! w-full! outline-0! bg-white/10! text-white! placeholder:text-white/70! rounded-3xl! shadow-sm!" placeholder="Username" />
                    </IconField>
                    <IconField>
                        <InputIcon class="pi pi-lock text-white/70!" />
                        <InputText
                            type="password"
                            class="appearance-none! border! border-white/10! w-full! outline-0! bg-white/10! text-white! placeholder:text-white/70! rounded-3xl! shadow-sm!"
                            placeholder="Password"
                        />
                    </IconField>
                </div>
                <Button label="Sign In" class="w-full! rounded-3xl! bg-surface-950! border! border-surface-950! text-white! hover:bg-surface-950/80!" />
            </div>
            <a class="text-white/80 cursor-pointer hover:text-white/90">Forgot Password?</a>
        </div>
    </div>`
    };
    return (f, s) => {
      const l = I, b = A, n = D, a = M, u = q, C = B, h = j;
      return g(), p("div", null, [
        e("div", J, [
          e("div", Y, [
            s[2] || (s[2] = e("span", { class: "bg-surface-950 text-white px-2 py-1 font-bold rounded-md text-sm" }, "TailwindCSS v4", -1)),
            s[3] || (s[3] = e("div", { class: "flex items-center gap-4" }, [
              e("span", { class: "font-bold text-4xl text-surface-950 dark:text-surface-0" }, "PrimeBlocks")
            ], -1)),
            s[4] || (s[4] = e("p", { class: "text-surface-700 dark:text-surface-300 text-lg text-center sm:text-start" }, " Ready-to-use UI blocks for building beautiful applications. A comprehensive collection of components designed to speed up your development process. ", -1)),
            e("div", K, [
              t(l, {
                label: "Explore Blocks",
                as: "a",
                href: "https://primeblocks.org",
                target: "_blank",
                rel: "noopener noreferrer"
              })
            ])
          ])
        ]),
        t(d, {
          header: "Hero",
          code: i.hero,
          free: ""
        }, {
          default: r(() => [
            e("div", Q, [
              e("div", X, [
                e("div", ee, [
                  e("div", se, [
                    e("div", te, [
                      s[5] || (s[5] = e("h1", { class: "text-4xl xl:text-5xl font-bold text-surface-0 lg:text-surface-900 dark:text-surface-0 mb-6 leading-tight!" }, [
                        e("span", { class: "block" }, "Create the screens your"),
                        e("span", { class: "block text-primary" }, "visitors deserve to see")
                      ], -1)),
                      s[6] || (s[6] = e("p", { class: "text-surface-0/90 lg:text-surface-700 dark:text-surface-200 text-xl leading-normal mb-8 max-w-xl lg:max-w-none" }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", -1)),
                      e("div", ae, [
                        t(l, {
                          label: "Learn More",
                          type: "button"
                        }),
                        t(l, {
                          label: "Live Demo",
                          type: "button",
                          outlined: ""
                        })
                      ])
                    ])
                  ])
                ]),
                s[7] || (s[7] = e("div", { class: "absolute lg:relative inset-0 lg:inset-auto flex-1" }, [
                  e("div", { class: "absolute lg:hidden inset-0 bg-surface-900/60 dark:bg-surface-900/80 z-10" }),
                  e("img", {
                    src: "https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-1.png",
                    alt: "hero-1",
                    class: "h-full w-full object-cover xl:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]"
                  })
                ], -1))
              ])
            ])
          ]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Feature",
          code: i.feature,
          free: ""
        }, {
          default: r(() => [...s[8] || (s[8] = [
            e("div", { class: "bg-surface-0 dark:bg-surface-950 px-6 md:px-12 lg:px-20 py-20 text-center" }, [
              e("div", { class: "flex flex-col gap-6" }, [
                e("div", { class: "flex flex-col items-center gap-4" }, [
                  e("div", { class: "font-bold text-3xl leading-tight" }, [
                    e("span", { class: "text-surface-900 dark:text-surface-0" }, "One Product, "),
                    e("span", { class: "text-primary-500 dark:text-primary-400" }, "Many Solutions")
                  ]),
                  e("div", { class: "text-surface-500 dark:text-surface-400 leading-tight" }, "Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.")
                ]),
                e("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }, [
                  e("div", { class: "w-full rounded-md p-4" }, [
                    e("span", { class: "mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto" }, [
                      e("i", { class: "pi pi-desktop text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" })
                    ]),
                    e("div", { class: "flex flex-col gap-1" }, [
                      e("div", { class: "text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight" }, "Built for Developers"),
                      e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
                    ])
                  ]),
                  e("div", { class: "w-full rounded-md p-4" }, [
                    e("span", { class: "mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto" }, [
                      e("i", { class: "pi pi-lock text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" })
                    ]),
                    e("div", { class: "flex flex-col gap-1" }, [
                      e("div", { class: "text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight" }, "End-to-End Encryption"),
                      e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.")
                    ])
                  ]),
                  e("div", { class: "w-full rounded-md p-4" }, [
                    e("span", { class: "mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto" }, [
                      e("i", { class: "pi pi-face-smile text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" })
                    ]),
                    e("div", { class: "flex flex-col gap-1" }, [
                      e("div", { class: "text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight" }, "Easy to Use"),
                      e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.")
                    ])
                  ]),
                  e("div", { class: "w-full rounded-md p-4" }, [
                    e("span", { class: "mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto" }, [
                      e("i", { class: "pi pi-globe text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" })
                    ]),
                    e("div", { class: "flex flex-col gap-1" }, [
                      e("div", { class: "text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight" }, "Fast & Global Support"),
                      e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.")
                    ])
                  ]),
                  e("div", { class: "w-full rounded-md p-4" }, [
                    e("span", { class: "mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto" }, [
                      e("i", { class: "pi pi-github text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" })
                    ]),
                    e("div", { class: "flex flex-col gap-1" }, [
                      e("div", { class: "text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight" }, "Open Source"),
                      e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.")
                    ])
                  ]),
                  e("div", { class: "w-full rounded-md p-4" }, [
                    e("span", { class: "mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-800 shadow mx-auto" }, [
                      e("i", { class: "pi pi-shield text-2xl! lg:text-3xl! text-primary-500 dark:text-primary-400" })
                    ]),
                    e("div", { class: "flex flex-col gap-1" }, [
                      e("div", { class: "text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight" }, "Trusted Security"),
                      e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.")
                    ])
                  ])
                ])
              ])
            ], -1)
          ])]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Card",
          code: i.glass,
          free: ""
        }, {
          default: r(() => [
            e("div", le, [
              e("div", ie, [
                s[9] || (s[9] = e("div", { class: "flex flex-col items-center gap-4 w-full" }, [
                  e("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-14 w-14",
                    width: "33",
                    height: "32",
                    viewBox: "0 0 33 32",
                    fill: "none"
                  }, [
                    e("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M7.09219 2.87829C5.94766 3.67858 4.9127 4.62478 4.01426 5.68992C7.6857 5.34906 12.3501 5.90564 17.7655 8.61335C23.5484 11.5047 28.205 11.6025 31.4458 10.9773C31.1517 10.087 30.7815 9.23135 30.343 8.41791C26.6332 8.80919 21.8772 8.29127 16.3345 5.51998C12.8148 3.76014 9.71221 3.03521 7.09219 2.87829ZM28.1759 5.33332C25.2462 2.06 20.9887 0 16.25 0C14.8584 0 13.5081 0.177686 12.2209 0.511584C13.9643 0.987269 15.8163 1.68319 17.7655 2.65781C21.8236 4.68682 25.3271 5.34013 28.1759 5.33332ZM32.1387 14.1025C28.2235 14.8756 22.817 14.7168 16.3345 11.4755C10.274 8.44527 5.45035 8.48343 2.19712 9.20639C2.0292 9.24367 1.86523 9.28287 1.70522 9.32367C1.2793 10.25 0.939308 11.2241 0.695362 12.2356C0.955909 12.166 1.22514 12.0998 1.50293 12.0381C5.44966 11.161 11.0261 11.1991 17.7655 14.5689C23.8261 17.5991 28.6497 17.561 31.9029 16.838C32.0144 16.8133 32.1242 16.7877 32.2322 16.7613C32.2441 16.509 32.25 16.2552 32.25 16C32.25 15.358 32.2122 14.7248 32.1387 14.1025ZM31.7098 20.1378C27.8326 20.8157 22.5836 20.5555 16.3345 17.431C10.274 14.4008 5.45035 14.439 2.19712 15.1619C1.475 15.3223 0.825392 15.5178 0.252344 15.7241C0.250782 15.8158 0.25 15.9078 0.25 16C0.25 24.8366 7.41344 32 16.25 32C23.6557 32 29.8862 26.9687 31.7098 20.1378Z",
                      class: "fill-surface-0"
                    })
                  ]),
                  e("div", { class: "flex flex-col gap-2 w-full" }, [
                    e("div", { class: "text-center text-3xl font-medium text-white leading-tight" }, "Welcome Back"),
                    e("div", { class: "text-center" }, [
                      e("span", { class: "text-white/80" }, "Don't have an account? "),
                      e("a", { class: "text-white/80 cursor-pointer hover:text-white/90 underline" }, "Sign up")
                    ])
                  ])
                ], -1)),
                e("div", re, [
                  e("div", de, [
                    t(a, null, {
                      default: r(() => [
                        t(b, { class: "pi pi-user text-white/70!" }),
                        t(n, {
                          type: "text",
                          class: "appearance-none! border! border-white/10! w-full! outline-0! bg-white/10! text-white! placeholder:text-white/70! rounded-3xl! shadow-sm!",
                          placeholder: "Username"
                        })
                      ]),
                      _: 1
                    }),
                    t(a, null, {
                      default: r(() => [
                        t(b, { class: "pi pi-lock text-white/70!" }),
                        t(n, {
                          type: "password",
                          class: "appearance-none! border! border-white/10! w-full! outline-0! bg-white/10! text-white! placeholder:text-white/70! rounded-3xl! shadow-sm!",
                          placeholder: "Password"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  t(l, {
                    label: "Sign In",
                    class: "w-full! rounded-3xl! bg-surface-950! border! border-surface-950! text-white! hover:bg-surface-950/80!"
                  })
                ]),
                s[10] || (s[10] = e("a", { class: "text-white/80 cursor-pointer hover:text-white/90" }, "Forgot Password?", -1))
              ])
            ])
          ]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Pricing",
          code: i.pricing,
          free: ""
        }, {
          default: r(() => [
            e("div", ce, [
              s[26] || (s[26] = e("div", { class: "flex flex-col gap-4 items-center justify-center mb-12" }, [
                e("div", { class: "text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight" }, "Pricing Plans"),
                e("div", { class: "text-surface-500 dark:text-surface-400 text-lg text-center leading-normal" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.")
              ], -1)),
              e("div", ne, [
                e("div", oe, [
                  s[11] || (s[11] = e("div", { class: "flex flex-col gap-2" }, [
                    e("h4", { class: "text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight" }, "Basic"),
                    e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.")
                  ], -1)),
                  s[12] || (s[12] = e("div", { class: "w-full h-px bg-surface-200 dark:bg-surface-700" }, null, -1)),
                  s[13] || (s[13] = e("div", { class: "flex items-center gap-2" }, [
                    e("span", { class: "font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight" }, "$9"),
                    e("span", { class: "font-medium text-surface-500 dark:text-surface-400 leading-tight" }, "per month")
                  ], -1)),
                  s[14] || (s[14] = e("div", { class: "w-full h-px bg-surface-200 dark:bg-surface-600" }, null, -1)),
                  s[15] || (s[15] = e("ul", { class: "list-none flex flex-col gap-4 flex-1" }, [
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Arcu vitae elementum ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Dui faucibus in ornare ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Morbi tincidunt augue ")
                    ])
                  ], -1)),
                  t(l, {
                    label: "Buy Now",
                    rounded: "",
                    class: "w-full"
                  })
                ]),
                e("div", ue, [
                  s[16] || (s[16] = e("div", { class: "flex flex-col gap-2" }, [
                    e("h4", { class: "text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight" }, "Premium"),
                    e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.")
                  ], -1)),
                  s[17] || (s[17] = e("div", { class: "w-full h-px bg-surface-200 dark:bg-surface-700" }, null, -1)),
                  s[18] || (s[18] = e("div", { class: "flex items-center gap-2" }, [
                    e("span", { class: "font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight" }, "$29"),
                    e("span", { class: "font-medium text-surface-500 dark:text-surface-400 leading-tight" }, "per month")
                  ], -1)),
                  s[19] || (s[19] = e("div", { class: "w-full h-px bg-surface-200 dark:bg-surface-600" }, null, -1)),
                  s[20] || (s[20] = e("ul", { class: "list-none flex flex-col gap-4 flex-1" }, [
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Arcu vitae elementum ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Dui faucibus in ornare ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Morbi tincidunt augue ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Duis ultricies lacus sed ")
                    ])
                  ], -1)),
                  t(l, {
                    label: "Buy Now",
                    rounded: "",
                    class: "w-full"
                  })
                ]),
                e("div", fe, [
                  s[21] || (s[21] = e("div", { class: "flex flex-col gap-2" }, [
                    e("h4", { class: "text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight" }, "Enterprise"),
                    e("p", { class: "text-surface-500 dark:text-surface-400 leading-normal" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.")
                  ], -1)),
                  s[22] || (s[22] = e("div", { class: "w-full h-px bg-surface-200 dark:bg-surface-700" }, null, -1)),
                  s[23] || (s[23] = e("div", { class: "flex items-center gap-2" }, [
                    e("span", { class: "font-bold text-3xl text-surface-900 dark:text-surface-0 leading-tight" }, "$49"),
                    e("span", { class: "font-medium text-surface-500 dark:text-surface-400 leading-tight" }, "per month")
                  ], -1)),
                  s[24] || (s[24] = e("div", { class: "w-full h-px bg-surface-200 dark:bg-surface-600" }, null, -1)),
                  s[25] || (s[25] = e("ul", { class: "list-none flex flex-col gap-4 flex-1" }, [
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Arcu vitae elementum ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Dui faucibus in ornare ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Morbi tincidunt augue ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Duis ultricies lacus sed ")
                    ]),
                    e("li", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-check-circle text-lg! text-green-500" }),
                      e("span", { class: "text-surface-800 dark:text-surface-100 leading-tight" }, " Imperdiet proin ")
                    ])
                  ], -1)),
                  t(l, {
                    label: "Buy Now",
                    rounded: "",
                    class: "w-full"
                  })
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Call to Action",
          code: i.cta,
          free: ""
        }, {
          default: r(() => [
            e("div", xe, [
              e("div", pe, [
                s[27] || (s[27] = e("div", { class: "text-primary font-bold text-lg leading-tight" }, [
                  e("i", { class: "pi pi-discord text-lg! leading-none!" }),
                  P(" POWERED BY DISCORD")
                ], -1)),
                s[28] || (s[28] = e("div", { class: "text-surface-900 dark:text-surface-0 font-bold text-4xl leading-tight" }, "Join our design community", -1)),
                s[29] || (s[29] = e("div", { class: "text-surface-700 dark:text-surface-100 text-xl leading-normal" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.", -1)),
                t(l, {
                  label: "Join Now",
                  icon: "pi pi-discord",
                  rounded: "",
                  class: "mt-4"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Banner",
          code: i.banner,
          containerClass: "bg-surface-0 dark:bg-surface-950",
          free: ""
        }, {
          default: r(() => [
            e("div", ge, [
              e("div", me, [
                s[30] || (s[30] = e("div", { class: "font-bold" }, "🔥 Hot Deals!", -1)),
                s[31] || (s[31] = e("div", { class: "inline-flex gap-1 items-center" }, [
                  e("span", { class: "hidden lg:flex leading-normal" }, "Libero voluptatum atque exercitationem praesentium provident odit."),
                  e("a", {
                    class: "text-surface-0 underline font-bold",
                    href: "#"
                  }, "Learn More")
                ], -1)),
                t(l, {
                  icon: "pi pi-times",
                  text: "",
                  rounded: "",
                  severity: "secondary",
                  class: "text-surface-0! hover:bg-surface-500/20!"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Page Heading",
          code: i["page-heading"],
          free: ""
        }, {
          default: r(() => [
            e("div", ve, [
              s[33] || (s[33] = e("ul", { class: "list-none p-0 m-0 flex items-center font-medium mb-5" }, [
                e("li", null, [
                  e("a", { class: "text-surface-500 dark:text-surface-300 no-underline leading-normal cursor-pointer" }, "Application")
                ]),
                e("li", { class: "px-2" }, [
                  e("i", { class: "pi pi-angle-right text-surface-500 dark:text-surface-300 text-sm! leading-normal!" })
                ]),
                e("li", null, [
                  e("span", { class: "text-surface-900 dark:text-surface-0 leading-normal" }, "Analytics")
                ])
              ], -1)),
              e("div", be, [
                s[32] || (s[32] = e("div", null, [
                  e("div", { class: "font-bold text-3xl text-surface-900 dark:text-surface-0 mb-4" }, "Customers"),
                  e("div", { class: "flex items-center text-surface-700 dark:text-surface-300 flex-wrap gap-8" }, [
                    e("div", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-users text-base! leading-normal!" }),
                      e("span", null, "332 Active Users")
                    ]),
                    e("div", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-globe text-base! leading-normal!" }),
                      e("span", null, "9.402 Sessions")
                    ]),
                    e("div", { class: "flex items-center gap-2" }, [
                      e("i", { class: "pi pi-clock text-base! leading-normal!" }),
                      e("span", null, "2.32m Avg. Duration")
                    ])
                  ])
                ], -1)),
                e("div", he, [
                  t(l, {
                    label: "Add",
                    class: "mr-3",
                    outlined: "",
                    icon: "pi pi-user-plus"
                  }),
                  t(l, {
                    label: "Save Changes",
                    icon: "pi pi-check",
                    class: "whitespace-nowrap"
                  })
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Stats",
          code: i.stats,
          free: ""
        }, {
          default: r(() => [...s[34] || (s[34] = [
            e("div", { class: "bg-surface-50 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20" }, [
              e("div", { class: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" }, [
                e("div", { class: "bg-surface-0 dark:bg-surface-900 shadow-sm p-5 rounded-2xl" }, [
                  e("div", { class: "flex justify-between gap-4" }, [
                    e("div", { class: "flex flex-col gap-2" }, [
                      e("span", { class: "text-surface-700 dark:text-surface-300 font-normal leading-tight" }, "Messages"),
                      e("div", { class: "text-surface-900 dark:text-surface-0 font-semibold text-2xl! leading-tight!" }, "152")
                    ]),
                    e("div", { class: "flex items-center justify-center bg-linear-to-b from-cyan-400 dark:from-cyan-300 to-cyan-600 dark:to-cyan-500 rounded-lg w-10 h-10" }, [
                      e("i", { class: "pi pi-envelope text-surface-0 dark:text-surface-900 text-xl! leading-none!" })
                    ])
                  ]),
                  e("div", { class: "mt-4" }, [
                    e("span", { class: "text-surface-600 dark:text-surface-300 font-medium leading-tight" }, "24 new"),
                    e("span", { class: "text-surface-500 dark:text-surface-300 leading-tight" }, " since last visit")
                  ])
                ]),
                e("div", { class: "bg-surface-0 dark:bg-surface-900 shadow-sm p-5 rounded-2xl" }, [
                  e("div", { class: "flex justify-between gap-4" }, [
                    e("div", { class: "flex flex-col gap-2" }, [
                      e("span", { class: "text-surface-700 dark:text-surface-300 font-normal leading-tight" }, "Check-ins"),
                      e("div", { class: "text-surface-900 dark:text-surface-0 font-semibold text-2xl! leading-tight!" }, "532")
                    ]),
                    e("div", { class: "flex items-center justify-center bg-linear-to-b from-orange-400 dark:from-orange-300 to-orange-600 dark:to-orange-500 rounded-lg w-10 h-10" }, [
                      e("i", { class: "pi pi-map-marker text-surface-0 dark:text-surface-900 text-xl! leading-none!" })
                    ])
                  ]),
                  e("div", { class: "mt-4" }, [
                    e("span", { class: "text-surface-600 dark:text-surface-300 font-medium leading-tight" }, "48 new"),
                    e("span", { class: "text-surface-500 dark:text-surface-300 leading-tight" }, " since last visit")
                  ])
                ]),
                e("div", { class: "bg-surface-0 dark:bg-surface-900 shadow-sm p-5 rounded-2xl" }, [
                  e("div", { class: "flex justify-between gap-4" }, [
                    e("div", { class: "flex flex-col gap-2" }, [
                      e("span", { class: "text-surface-700 dark:text-surface-300 font-normal leading-tight" }, "Files Synced"),
                      e("div", { class: "text-surface-900 dark:text-surface-0 font-semibold text-2xl! leading-tight!" }, "28.441")
                    ]),
                    e("div", { class: "flex items-center justify-center bg-linear-to-b from-slate-400 dark:from-slate-300 to-slate-600 dark:to-slate-500 rounded-lg w-10 h-10" }, [
                      e("i", { class: "pi pi-file text-surface-0 dark:text-surface-900 text-xl! leading-none!" })
                    ])
                  ]),
                  e("div", { class: "mt-4" }, [
                    e("span", { class: "text-surface-500 dark:text-surface-300 leading-tight" }, "32,56 / 250 GB")
                  ])
                ]),
                e("div", { class: "bg-surface-0 dark:bg-surface-900 shadow-sm p-5 rounded-2xl" }, [
                  e("div", { class: "flex justify-between gap-4" }, [
                    e("div", { class: "flex flex-col gap-2" }, [
                      e("span", { class: "text-surface-700 dark:text-surface-300 font-normal leading-tight" }, "Users Online"),
                      e("div", { class: "text-surface-900 dark:text-surface-0 font-semibold text-2xl! leading-tight!" }, "25.660")
                    ]),
                    e("div", { class: "flex items-center justify-center bg-linear-to-b from-violet-400 dark:from-violet-300 to-violet-600 dark:to-violet-500 rounded-lg w-10 h-10" }, [
                      e("i", { class: "pi pi-users text-surface-0 dark:text-surface-900 text-xl! leading-none!" })
                    ])
                  ]),
                  e("div", { class: "mt-4" }, [
                    e("span", { class: "text-surface-600 dark:text-surface-300 font-medium leading-tight" }, "72 new"),
                    e("span", { class: "text-surface-500 dark:text-surface-300 leading-tight" }, " user this week")
                  ])
                ])
              ])
            ], -1)
          ])]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Sign-In",
          code: i["sign-in"],
          containerClass: "",
          free: ""
        }, {
          default: r(() => [
            e("div", ke, [
              e("div", we, [
                s[40] || (s[40] = e("div", { class: "flex flex-col items-center gap-4" }, [
                  e("div", { class: "flex items-center gap-4" }, [
                    e("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-14 w-14",
                      width: "33",
                      height: "32",
                      viewBox: "0 0 33 32",
                      fill: "none"
                    }, [
                      e("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M7.09219 2.87829C5.94766 3.67858 4.9127 4.62478 4.01426 5.68992C7.6857 5.34906 12.3501 5.90564 17.7655 8.61335C23.5484 11.5047 28.205 11.6025 31.4458 10.9773C31.1517 10.087 30.7815 9.23135 30.343 8.41791C26.6332 8.80919 21.8772 8.29127 16.3345 5.51998C12.8148 3.76014 9.71221 3.03521 7.09219 2.87829ZM28.1759 5.33332C25.2462 2.06 20.9887 0 16.25 0C14.8584 0 13.5081 0.177686 12.2209 0.511584C13.9643 0.987269 15.8163 1.68319 17.7655 2.65781C21.8236 4.68682 25.3271 5.34013 28.1759 5.33332ZM32.1387 14.1025C28.2235 14.8756 22.817 14.7168 16.3345 11.4755C10.274 8.44527 5.45035 8.48343 2.19712 9.20639C2.0292 9.24367 1.86523 9.28287 1.70522 9.32367C1.2793 10.25 0.939308 11.2241 0.695362 12.2356C0.955909 12.166 1.22514 12.0998 1.50293 12.0381C5.44966 11.161 11.0261 11.1991 17.7655 14.5689C23.8261 17.5991 28.6497 17.561 31.9029 16.838C32.0144 16.8133 32.1242 16.7877 32.2322 16.7613C32.2441 16.509 32.25 16.2552 32.25 16C32.25 15.358 32.2122 14.7248 32.1387 14.1025ZM31.7098 20.1378C27.8326 20.8157 22.5836 20.5555 16.3345 17.431C10.274 14.4008 5.45035 14.439 2.19712 15.1619C1.475 15.3223 0.825392 15.5178 0.252344 15.7241C0.250782 15.8158 0.25 15.9078 0.25 16C0.25 24.8366 7.41344 32 16.25 32C23.6557 32 29.8862 26.9687 31.7098 20.1378Z",
                        class: "fill-surface-700 dark:fill-surface-200"
                      })
                    ])
                  ]),
                  e("div", { class: "flex flex-col items-center gap-2 w-full" }, [
                    e("div", { class: "text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight text-center w-full" }, "Welcome Back"),
                    e("div", { class: "text-center w-full" }, [
                      e("span", { class: "text-surface-700 dark:text-surface-200 leading-normal" }, "Don't have an account?"),
                      e("a", { class: "text-primary font-medium ml-1 cursor-pointer hover:text-primary-emphasis" }, "Create today!")
                    ])
                  ])
                ], -1)),
                e("div", ye, [
                  e("div", Ce, [
                    s[35] || (s[35] = e("label", {
                      for: "email1",
                      class: "text-surface-900 dark:text-surface-0 font-medium leading-normal"
                    }, "Email Address", -1)),
                    t(n, {
                      id: "email1",
                      type: "text",
                      placeholder: "Email address",
                      class: "w-full px-3 py-2 shadow-sm rounded-lg"
                    })
                  ]),
                  e("div", je, [
                    s[36] || (s[36] = e("label", {
                      for: "password1",
                      class: "text-surface-900 dark:text-surface-0 font-medium leading-normal"
                    }, "Password", -1)),
                    t(u, {
                      id: "password1",
                      modelValue: v.value,
                      "onUpdate:modelValue": s[0] || (s[0] = (k) => v.value = k),
                      placeholder: "Password",
                      toggleMask: !0,
                      feedback: !1,
                      "input-class": "w-full!"
                    }, null, 8, ["modelValue"])
                  ]),
                  e("div", Be, [
                    e("div", qe, [
                      t(C, {
                        id: "rememberme1",
                        modelValue: c.value,
                        "onUpdate:modelValue": s[1] || (s[1] = (k) => c.value = k),
                        binary: !0
                      }, null, 8, ["modelValue"]),
                      s[37] || (s[37] = e("label", {
                        for: "rememberme1",
                        class: "text-surface-900 dark:text-surface-0 leading-normal"
                      }, "Remember me", -1))
                    ]),
                    s[38] || (s[38] = e("a", { class: "text-primary font-medium cursor-pointer hover:text-primary-emphasis" }, "Forgot your password?", -1))
                  ])
                ]),
                t(l, {
                  label: "Sign In",
                  icon: "pi pi-user",
                  class: "w-full py-2 rounded-lg flex justify-center items-center gap-2"
                }, {
                  icon: r(() => [...s[39] || (s[39] = [
                    e("i", { class: "pi pi-user text-base! leading-normal!" }, null, -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Description List",
          code: i["description-list"],
          free: ""
        }, {
          default: r(() => [
            e("div", Me, [
              e("div", Ae, [
                s[51] || (s[51] = e("div", { class: "flex flex-col gap-2 pb-4" }, [
                  e("div", { class: "font-semibold text-xl text-surface-900 dark:text-surface-0 leading-tight" }, "Movie Information"),
                  e("div", { class: "text-surface-500 dark:text-surface-300 text-base leading-tight" }, "Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.")
                ], -1)),
                s[52] || (s[52] = e("div", { class: "border-t border-surface-200 dark:border-surface-700" }, null, -1)),
                e("div", De, [
                  e("div", Ie, [
                    s[41] || (s[41] = e("div", { class: "flex items-center gap-4 flex-1" }, [
                      e("div", { class: "w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight" }, "Title"),
                      e("div", { class: "flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight" }, "Heat")
                    ], -1)),
                    e("div", Ve, [
                      t(l, {
                        icon: "pi pi-pen-to-square",
                        rounded: "",
                        outlined: "",
                        severity: "secondary",
                        "icon-only": "",
                        class: "shrink-0"
                      })
                    ])
                  ]),
                  s[46] || (s[46] = e("div", { class: "border-t border-surface-200 dark:border-surface-700" }, null, -1)),
                  e("div", _e, [
                    e("div", Se, [
                      s[42] || (s[42] = e("div", { class: "w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight" }, "Genre", -1)),
                      e("div", Ee, [
                        t(h, {
                          label: "Crime",
                          severity: "secondary"
                        }),
                        t(h, {
                          label: "Drama",
                          severity: "secondary"
                        }),
                        t(h, {
                          label: "Thriller",
                          severity: "secondary"
                        })
                      ])
                    ]),
                    e("div", Pe, [
                      t(l, {
                        icon: "pi pi-pen-to-square",
                        rounded: "",
                        outlined: "",
                        severity: "secondary",
                        "icon-only": "",
                        class: "shrink-0"
                      })
                    ])
                  ]),
                  s[47] || (s[47] = e("div", { class: "border-t border-surface-200 dark:border-surface-700" }, null, -1)),
                  e("div", $e, [
                    s[43] || (s[43] = e("div", { class: "flex items-center gap-4 flex-1" }, [
                      e("div", { class: "w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight" }, "Director"),
                      e("div", { class: "flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight" }, "Michael Mann")
                    ], -1)),
                    e("div", Le, [
                      t(l, {
                        icon: "pi pi-pen-to-square",
                        rounded: "",
                        outlined: "",
                        severity: "secondary",
                        "icon-only": "",
                        class: "shrink-0"
                      })
                    ])
                  ]),
                  s[48] || (s[48] = e("div", { class: "border-t border-surface-200 dark:border-surface-700" }, null, -1)),
                  e("div", Ze, [
                    s[44] || (s[44] = e("div", { class: "flex items-center gap-4 flex-1" }, [
                      e("div", { class: "w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight" }, "Writer"),
                      e("div", { class: "flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight" }, "Michael Mann")
                    ], -1)),
                    e("div", ze, [
                      t(l, {
                        icon: "pi pi-pen-to-square",
                        rounded: "",
                        outlined: "",
                        severity: "secondary",
                        "icon-only": "",
                        class: "shrink-0"
                      })
                    ])
                  ]),
                  s[49] || (s[49] = e("div", { class: "border-t border-surface-200 dark:border-surface-700" }, null, -1)),
                  e("div", Fe, [
                    s[45] || (s[45] = e("div", { class: "flex items-start gap-4 flex-1" }, [
                      e("div", { class: "w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight" }, "Plot"),
                      e("div", { class: "flex-1 text-surface-900 dark:text-surface-0 text-base leading-normal" }, "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.")
                    ], -1)),
                    e("div", Ne, [
                      t(l, {
                        icon: "pi pi-pen-to-square",
                        rounded: "",
                        outlined: "",
                        severity: "secondary",
                        "icon-only": "",
                        class: "shrink-0"
                      })
                    ])
                  ]),
                  s[50] || (s[50] = e("div", { class: "border-t border-surface-200 dark:border-surface-700" }, null, -1))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["code"]),
        t(d, {
          header: "Card",
          code: i.card,
          free: ""
        }, {
          default: r(() => [...s[53] || (s[53] = [
            e("div", { class: "bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20" }, [
              e("div", { class: "bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-2xl flex flex-col gap-4" }, [
                e("div", { class: "flex gap-4" }, [
                  e("div", { class: "flex flex-col gap-2 flex-1" }, [
                    e("div", { class: "text-2xl leading-tight font-semibold text-surface-900 dark:text-surface-0" }, "Card Title"),
                    e("div", { class: "text-base leading-tight text-surface-500 dark:text-surface-300" }, "Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.")
                  ])
                ]),
                e("div", { class: "flex flex-1" }, [
                  e("div", { class: "flex-1 border-2 border-dashed border-surface-200 dark:border-surface-700 rounded-lg h-[150px]" })
                ])
              ])
            ], -1)
          ])]),
          _: 1
        }, 8, ["code"])
      ]);
    };
  }
};
export {
  Ye as default
};
