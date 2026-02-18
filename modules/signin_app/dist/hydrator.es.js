import { d as M, o as i, c as d, a as t, t as u, b as L, w as k, e as w, v as C, f as U, g as O, h as J, i as E, j, T as B, n as R, k as P, r as v, l as A, m as Z, p as D } from "./runtime-dom.esm-bundler-ChC2ihda.js";
const G = { class: "h-full bg-white dark:bg-gray-900" }, X = { class: "flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-900" }, Y = { class: "sm:mx-auto sm:w-full sm:max-w-sm text-gray-900 dark:text-gray-100" }, $ = { class: "mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100" }, F = {
  key: 0,
  class: "mt-2 text-center text-sm text-purple-600 dark:text-purple-400"
}, W = { class: "font-medium text-purple-700 dark:text-purple-300" }, Q = {
  key: 1,
  class: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400"
}, q = { class: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white dark:bg-gray-900" }, K = { class: "text-gray-900 dark:text-gray-100" }, H = ["disabled"], ee = { class: "text-center text-gray-600 dark:text-gray-300" }, te = ["disabled"], re = { key: 0 }, se = {
  key: 1,
  class: "font-semibold underline"
}, oe = { class: "text-gray-900 dark:text-gray-100" }, ae = { class: "mt-2" }, le = ["disabled"], ie = { class: "text-gray-900 dark:text-gray-100" }, ne = { class: "flex items-center justify-between" }, de = {
  style: { display: "none" },
  class: "text-sm"
}, ue = { class: "mt-2" }, ce = ["disabled"], pe = { class: "flex items-center text-gray-900 dark:text-gray-100" }, ge = ["disabled"], me = ["disabled"], fe = { key: 0 }, ye = { key: 1 }, ve = { style: { display: "none" } }, he = ["disabled"], be = { class: "text-center w-full mr-5" }, xe = ["disabled"], ke = { class: "text-center w-full mr-5" }, we = ["disabled"], Ce = { class: "text-center w-full mr-5" }, _e = ["disabled"], Ie = { class: "text-center w-full mr-5" }, ze = { style: { display: "none" } }, Ne = { class: "mt-10 text-center text-sm text-gray-500 dark:text-gray-400" }, Ve = { class: "fixed left-1/2 -translate-x-1/2 bottom-10 z-50 w-full max-w-sm flex flex-col gap-3 px-4" }, Le = { class: "bg-white dark:bg-gray-900 rounded-lg" }, Oe = { class: "flex-1 text-sm font-medium" }, Me = { class: "flex-1 text-sm font-medium" }, Te = /* @__PURE__ */ M({
  __name: "Signin",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(p) {
    const f = p, l = P(() => f._$p.data.curr.data || {}), s = v(!1), o = v(null), g = v(!1), h = v(""), b = v(""), y = v(0);
    let _ = null;
    const I = (a) => {
      const e = l.value.click?.[a];
      if (!e) {
        console.warn(`No URL defined in JSON for: ${a}`);
        return;
      }
      e.startsWith("http"), window.location.href = e;
    }, c = (a, e) => {
      o.value = { type: a, message: e }, setTimeout(() => {
        o.value?.message === e && (o.value = null);
      }, 5e3);
    }, n = A({
      email: "",
      password: "",
      remember_me: !1
    }), x = async (a) => {
      s.value = !0;
      try {
        const r = await (await fetch(`https://fastapi.dryutil.1mn.io/client-public/api/i/ona/public:auth?typ=sign_with_third_party&provider=${a}`, {
          method: "GET",
          headers: { Accept: "application/json" }
        })).json();
        if (r.success && r.data?.oauth_url)
          window.location.assign(r.data.oauth_url);
        else
          throw new Error("Failed to initialize secure login.");
      } catch (e) {
        c("error", e.message), s.value = !1;
      }
    }, z = async () => {
      o.value = null;
      const a = l.value.api?.login;
      if (!a) {
        c("error", "Configuration Error: Login API missing.");
        return;
      }
      s.value = !0;
      try {
        const e = await fetch(a, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
          },
          body: JSON.stringify({
            email: n.email.toLowerCase().trim(),
            pwd: n.password
          })
        }), r = await e.json().catch(() => ({}));
        if (!e.ok) {
          if (r.error === "User not verified" || r.message?.includes("not verified")) {
            b.value = n.email, g.value = !0, await N(!0), c("error", "Account not verified. Please enter the OTP sent to your email.");
            return;
          }
          const m = r.detail || r.message || "Invalid email or password.";
          throw new Error(m);
        }
        (async () => {
          const m = r.data.token;
          localStorage.setItem("token", m);
        })(), c("success", "Login successful! Redirecting..."), setTimeout(() => {
          try {
            const m = new URL(location.href), V = "redirect";
            if (m.searchParams.get(V)) {
              window.location.href = m.searchParams.get(V) || "";
              return;
            }
            if (l.value.event?.onLoginSuccess) {
              window.location.href = l.value.event.onLoginSuccess;
              return;
            }
          } catch {
            window.location.href = "/";
          }
        }, 600);
      } catch (e) {
        c("error", e.message || "A network error occurred.");
      } finally {
        s.value = !1;
      }
    }, T = () => {
      y.value = 60, _ = setInterval(() => {
        y.value > 0 ? y.value-- : clearInterval(_);
      }, 1e3);
    }, N = async (a = !1) => {
      try {
        if (!(await fetch(l.value.api.send_otp, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
          },
          body: JSON.stringify({ email: n.email.toLowerCase().trim() })
        })).ok) throw new Error("Could not send verification code");
        T(), a || c("success", "Verification code sent!");
      } catch (e) {
        c("error", e.message);
      }
    }, S = async () => {
      s.value = !0, o.value = null;
      try {
        if (!(await fetch(l.value.api?.verify_otp, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
          },
          body: JSON.stringify({
            email: b.value,
            otp: h.value
          })
        })).ok) throw new Error("Invalid OTP code.");
        c("success", "Email verified! Logging you in..."), setTimeout(() => {
          g.value = !1, z();
        }, 1500);
      } catch (a) {
        c("error", a.message);
      } finally {
        s.value = !1;
      }
    };
    return (a, e) => (i(), d("div", {
      class: R({ dark: l.value.theme === "dark" })
    }, [
      t("div", G, [
        t("div", X, [
          t("div", Y, [
            t("h2", $, u(g.value ? "Verify your email" : l.value.labels?.title || "Welcome Back"), 1),
            g.value ? (i(), d("p", F, [
              e[13] || (e[13] = L(" We sent a code to ", -1)),
              t("span", W, u(n.email), 1)
            ])) : (i(), d("p", Q, u(l.value.labels?.subtitle || "Please enter your details to sign in."), 1))
          ]),
          t("div", q, [
            g.value ? (i(), d("form", {
              key: 0,
              class: "space-y-6 bg-white dark:bg-gray-900",
              onSubmit: k(S, ["prevent"])
            }, [
              t("div", K, [
                e[14] || (e[14] = t("label", {
                  for: "otp",
                  class: "block text-center text-sm font-medium text-gray-900 dark:text-gray-100"
                }, "Verification Code", -1)),
                w(t("input", {
                  "onUpdate:modelValue": e[0] || (e[0] = (r) => h.value = r),
                  id: "otp",
                  type: "text",
                  maxlength: "6",
                  required: "",
                  placeholder: "000000",
                  class: "mt-2 block w-full text-center tracking-[1em] text-2xl font-mono rounded-md border-0 py-2 px-3 text-gray-900 dark:text-gray-100 shadow-sm outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 dark:focus:outline-purple-500 bg-gray-50 dark:bg-gray-800"
                }, null, 512), [
                  [C, h.value]
                ])
              ]),
              t("button", {
                type: "submit",
                disabled: s.value,
                class: "flex w-full justify-center rounded-md bg-purple-600 dark:bg-purple-700 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 dark:hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:focus-visible:outline-purple-500 disabled:opacity-50 transition-all duration-200"
              }, u(s.value ? "Verifying..." : "Verify Email"), 9, H),
              t("div", ee, [
                t("button", {
                  type: "button",
                  onClick: e[1] || (e[1] = (r) => N(!1)),
                  disabled: s.value || y.value > 0,
                  class: "text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 disabled:text-gray-400 dark:disabled:text-gray-500"
                }, [
                  y.value > 0 ? (i(), d("span", re, "Resend code in " + u(y.value) + "s", 1)) : (i(), d("span", se, "Resend code"))
                ], 8, te)
              ])
            ], 32)) : (i(), d("form", {
              key: 1,
              class: "space-y-6 bg-white dark:bg-gray-900",
              onSubmit: k(z, ["prevent"])
            }, [
              t("div", oe, [
                e[15] || (e[15] = t("label", {
                  for: "email",
                  class: "block text-sm font-medium text-gray-900 dark:text-gray-100"
                }, "Email address", -1)),
                t("div", ae, [
                  w(t("input", {
                    "onUpdate:modelValue": e[2] || (e[2] = (r) => n.email = r),
                    id: "email",
                    type: "email",
                    required: "",
                    autocomplete: "email",
                    disabled: s.value,
                    class: "block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2.5 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 dark:focus:outline-purple-500 sm:text-sm",
                    placeholder: "you@example.com"
                  }, null, 8, le), [
                    [C, n.email]
                  ])
                ])
              ]),
              t("div", ie, [
                t("div", ne, [
                  e[16] || (e[16] = t("label", {
                    for: "password",
                    class: "block text-sm font-medium text-gray-900 dark:text-gray-100"
                  }, "Password", -1)),
                  t("div", de, [
                    t("a", {
                      href: "#",
                      onClick: e[3] || (e[3] = k((r) => I("forgot_pwd"), ["prevent"])),
                      class: "font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 underline-offset-4 hover:underline"
                    }, " Forgot password? ")
                  ])
                ]),
                t("div", ue, [
                  w(t("input", {
                    "onUpdate:modelValue": e[4] || (e[4] = (r) => n.password = r),
                    id: "password",
                    type: "password",
                    required: "",
                    autocomplete: "current-password",
                    disabled: s.value,
                    class: "block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2.5 text-base text-gray-900 dark:text-gray-100 outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 dark:focus:outline-purple-500 sm:text-sm",
                    placeholder: "••••••••"
                  }, null, 8, ce), [
                    [C, n.password]
                  ])
                ])
              ]),
              t("div", pe, [
                w(t("input", {
                  "onUpdate:modelValue": e[5] || (e[5] = (r) => n.remember_me = r),
                  id: "remember_me",
                  type: "checkbox",
                  disabled: s.value,
                  class: "h-4 w-4 rounded accent-purple-600 border-gray-300 dark:border-gray-700 dark:bg-purple-700 text-purple-600 dark:text-purple-500 focus:ring-purple-600 dark:focus:ring-purple-500"
                }, null, 8, ge), [
                  [U, n.remember_me]
                ]),
                e[17] || (e[17] = t("label", {
                  for: "remember_me",
                  class: "ml-2 block text-sm text-gray-900 dark:text-gray-100"
                }, "Remember me", -1))
              ]),
              t("button", {
                type: "submit",
                disabled: s.value,
                class: "flex w-full justify-center rounded-md bg-purple-600 dark:bg-purple-700 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 dark:hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:focus-visible:outline-purple-500 disabled:opacity-50 transition-all duration-200"
              }, [
                s.value ? (i(), d("span", fe, "Signing in...")) : (i(), d("span", ye, "Sign In"))
              ], 8, me),
              t("div", ve, [
                e[22] || (e[22] = O('<div class="relative mt-8 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-900"><div class="absolute inset-0 flex items-center" aria-hidden="true"><div class="w-full border-t border-gray-200 dark:border-gray-700"></div></div><div class="relative flex justify-center text-sm font-medium"><span class="bg-white dark:bg-gray-900 px-4 text-gray-400 dark:text-gray-500">OR</span></div></div>', 1)),
                t("button", {
                  type: "button",
                  onClick: e[6] || (e[6] = (r) => x("google")),
                  disabled: s.value,
                  class: "flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:ring-transparent disabled:opacity-50 transition-colors"
                }, [
                  e[18] || (e[18] = O('<svg class="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>', 1)),
                  t("div", be, u(s.value ? "Connecting..." : "Continue with Google"), 1)
                ], 8, he),
                t("button", {
                  type: "button",
                  onClick: e[7] || (e[7] = (r) => x("facebook")),
                  disabled: s.value,
                  class: "flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:ring-transparent disabled:opacity-50 transition-colors"
                }, [
                  e[19] || (e[19] = t("svg", {
                    class: "h-5 w-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:svg": "http://www.w3.org/2000/svg",
                    version: "1.1",
                    id: "svg9",
                    width: "666.66669",
                    height: "666.66718",
                    viewBox: "0 0 666.66668 666.66717"
                  }, [
                    t("defs", { id: "defs13" }, [
                      t("clipPath", {
                        clipPathUnits: "userSpaceOnUse",
                        id: "clipPath25"
                      }, [
                        t("path", {
                          d: "M 0,700 H 700 V 0 H 0 Z",
                          id: "path23"
                        })
                      ])
                    ]),
                    t("g", {
                      id: "g17",
                      transform: "matrix(1.3333333,0,0,-1.3333333,-133.33333,799.99999)"
                    }, [
                      t("g", { id: "g19" }, [
                        t("g", {
                          id: "g21",
                          "clip-path": "url(#clipPath25)"
                        }, [
                          t("g", {
                            id: "g27",
                            transform: "translate(600,350)"
                          }, [
                            t("path", {
                              d: "m 0,0 c 0,138.071 -111.929,250 -250,250 -138.071,0 -250,-111.929 -250,-250 0,-117.245 80.715,-215.622 189.606,-242.638 v 166.242 h -51.552 V 0 h 51.552 v 32.919 c 0,85.092 38.508,124.532 122.048,124.532 15.838,0 43.167,-3.105 54.347,-6.211 V 81.986 c -5.901,0.621 -16.149,0.932 -28.882,0.932 -40.993,0 -56.832,-15.528 -56.832,-55.9 V 0 h 81.659 l -14.028,-76.396 h -67.631 V -248.169 C -95.927,-233.218 0,-127.818 0,0",
                              style: { fill: "#0866ff", "fill-opacity": "1", "fill-rule": "nonzero", stroke: "none" },
                              id: "path29"
                            })
                          ]),
                          t("g", {
                            id: "g31",
                            transform: "translate(447.9175,273.6036)"
                          }, [
                            t("path", {
                              d: "M 0,0 14.029,76.396 H -67.63 v 27.019 c 0,40.372 15.838,55.899 56.831,55.899 12.733,0 22.981,-0.31 28.882,-0.931 v 69.253 c -11.18,3.106 -38.509,6.212 -54.347,6.212 -83.539,0 -122.048,-39.441 -122.048,-124.533 V 76.396 h -51.552 V 0 h 51.552 v -166.242 c 19.343,-4.798 39.568,-7.362 60.394,-7.362 10.254,0 20.358,0.632 30.288,1.831 L -67.63,0 Z",
                              style: { fill: "#ffffff", "fill-opacity": "1", "fill-rule": "nonzero", stroke: "none" },
                              id: "path33"
                            })
                          ])
                        ])
                      ])
                    ])
                  ], -1)),
                  t("div", ke, u(s.value ? "Connecting..." : "Continue with Facebook"), 1)
                ], 8, xe),
                t("button", {
                  type: "button",
                  onClick: e[8] || (e[8] = (r) => x("yandex")),
                  disabled: s.value,
                  class: "flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:ring-transparent disabled:opacity-50 transition-colors"
                }, [
                  e[20] || (e[20] = t("svg", {
                    class: "h-5 w-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "2"
                  }, [
                    t("path", {
                      d: "M455.999 6h-400C28.388 6 6 28.387 6 56v399.999c0 27.612 22.388 50 50 50h400c27.612 0 50-22.388 50-50v-400c0-27.612-22.388-50-50-50z",
                      fill: "#fc3f1d",
                      "fill-rule": "nonzero"
                    }),
                    t("path", {
                      d: "M283.718 362.624v53.781h-55.062v-90.687L124.75 99.75h57.456l80.95 176.78c15.606 33.782 20.562 45.52 20.562 86.094zM387.249 99.75l-67.55 153.093h-55.981L331.262 99.75h55.987z",
                      fill: "#fff",
                      "fill-rule": "nonzero"
                    })
                  ], -1)),
                  t("div", Ce, u(s.value ? "Connecting..." : "Continue with Yandex"), 1)
                ], 8, we),
                t("button", {
                  type: "button",
                  onClick: e[9] || (e[9] = (r) => x("vk")),
                  disabled: s.value,
                  class: "flex w-full gap-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:ring-transparent disabled:opacity-50 transition-colors"
                }, [
                  e[21] || (e[21] = t("svg", {
                    class: "h-5 w-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    "shape-rendering": "geometricPrecision",
                    "text-rendering": "geometricPrecision",
                    "image-rendering": "optimizeQuality",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    viewBox: "0 0 512 512"
                  }, [
                    t("g", { "fill-rule": "nonzero" }, [
                      t("path", {
                        fill: "#07F",
                        d: "M245.49 512h21.32c115.73 0 173.61 0 209.56-35.94 35.94-35.95 35.63-93.8 35.63-209.25v-21.62c0-115.43 0-173.3-35.63-209.25C440.73 0 382.54 0 266.81 0h-21.32C129.74 0 71.89 0 35.94 35.94 0 71.89 0 129.72 0 245.19v21.62c0 115.45 0 173.3 35.94 209.25C71.89 512 129.74 512 245.49 512z"
                      }),
                      t("path", {
                        fill: "#FEFEFE",
                        d: "M274.75 369.15c-115.45 0-185.51-80.1-188.23-213.2h58.47c1.82 97.78 46.3 139.27 80.4 147.73V155.95h56.05v84.36c32.89-3.65 67.3-42.02 78.89-84.36h55.12c-8.83 52.08-46.29 90.46-72.79 106.29 26.5 12.81 69.14 46.31 85.58 106.91h-60.6c-12.8-40.51-44.17-71.88-86.2-76.14v76.14h-6.69z"
                      })
                    ])
                  ], -1)),
                  t("div", Ie, u(s.value ? "Connecting..." : "Continue with VK"), 1)
                ], 8, _e)
              ])
            ], 32)),
            t("div", ze, [
              t("p", Ne, [
                e[23] || (e[23] = L(" Don't have an account yet? ", -1)),
                t("button", {
                  href: "#",
                  onClick: e[10] || (e[10] = k((r) => I("sign_up"), ["prevent"])),
                  class: "font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 underline underline-offset-4 ml-1"
                }, " Sign up ")
              ])
            ])
          ])
        ])
      ]),
      t("div", Ve, [
        J(B, {
          "enter-active-class": "transform ease-out duration-300 transition",
          "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
          "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
          "leave-active-class": "transition ease-in duration-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: E(() => [
            t("div", Le, [
              o.value && o.value.type === "error" ? (i(), d("div", {
                key: "error-" + o.value.message,
                class: "flex items-center p-4 rounded-lg shadow-lg border bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
              }, [
                e[25] || (e[25] = t("div", { class: "mr-3" }, [
                  t("svg", {
                    class: "h-5 w-5 text-red-400 dark:text-red-300",
                    fill: "currentColor",
                    viewBox: "0 0 20 20"
                  }, [
                    t("path", {
                      "fill-rule": "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                      "clip-rule": "evenodd"
                    })
                  ])
                ], -1)),
                t("div", Oe, u(o.value.message), 1),
                t("button", {
                  onClick: e[11] || (e[11] = (r) => o.value = null),
                  class: "ml-auto pl-3 outline-none text-gray-800 dark:text-gray-200"
                }, [...e[24] || (e[24] = [
                  t("svg", {
                    class: "h-4 w-4 opacity-50 hover:opacity-100 stroke-gray-800 dark:stroke-gray-200",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    t("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ])])
              ])) : o.value && o.value.type === "success" ? (i(), d("div", {
                key: "success-" + o.value.message,
                class: "flex items-center p-4 rounded-lg shadow-lg border bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200"
              }, [
                e[27] || (e[27] = t("div", { class: "mr-3" }, [
                  t("svg", {
                    class: "h-5 w-5 text-green-400 dark:text-green-300",
                    fill: "currentColor",
                    viewBox: "0 0 20 20"
                  }, [
                    t("path", {
                      "fill-rule": "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                      "clip-rule": "evenodd"
                    })
                  ])
                ], -1)),
                t("div", Me, u(o.value.message), 1),
                t("button", {
                  onClick: e[12] || (e[12] = (r) => o.value = null),
                  class: "ml-auto pl-3 outline-none text-gray-800 dark:text-gray-200"
                }, [...e[26] || (e[26] = [
                  t("svg", {
                    class: "h-4 w-4 opacity-50 hover:opacity-100 stroke-gray-800 dark:stroke-gray-200",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    t("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ])])
              ])) : j("", !0)
            ])
          ]),
          _: 1
        })
      ])
    ], 2));
  }
}), Se = /* @__PURE__ */ M({
  __name: "index",
  props: {
    _p: {},
    _$p: {},
    _$cb: {}
  },
  setup(p) {
    return (f, l) => (i(), Z(Te, {
      _p: p._p,
      _$p: p._$p,
      _$cb: p._$cb
    }, null, 8, ["_p", "_$p", "_$cb"]));
  }
}), Je = async (p) => ({
  set: async (f, l) => {
    console.log(`--hydrator [${f.data.curr.type}]`);
    const o = D(Se, {
      _p: p,
      _$p: f,
      _$cb: l
    }), g = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          l?.change({ _$p: f });
        }
      }
    }, h = document.getElementById(p.f.name("vue-root"));
    return o.mount(h), g;
  }
});
export {
  Je as hydrator,
  Je as index
};
