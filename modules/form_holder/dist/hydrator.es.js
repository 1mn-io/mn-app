import { d as F, o as H, a as z, c as T, b as I, u as O, t as A, e as N, F as U, r as q, f as E, g as D } from "./runtime-dom.esm-bundler-hefT4PDW.js";
const S = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  })
}), M = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
}), C = async () => ({
  set: async (t) => {
    console.log("--theme");
    try {
      if (!t.el_id)
        throw new Error("[el_id] is required");
      const e = t.name, n = document.getElementById(t.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((o) => {
        const r = (a) => {
          ((i) => {
            const d = i.getAttribute("data-ce");
            if (!d)
              return;
            const f = JSON.parse(d).filter((c) => c?.k.startsWith("t-"));
            if (f.length != 0)
              for (const c of f) {
                const h = c.k, b = c.v.split(" ");
                if (h == `t-${e}-class`)
                  for (const v of b)
                    i.classList.add(v);
                else
                  for (const v of b)
                    i.classList.remove(v);
              }
          })(a);
        };
        for (const a of o.getElementsByTagName("*"))
          r(a);
        r(o);
      })(n);
    } catch (e) {
      const n = `err: [theme] ${e}`;
      throw console.log(n), n;
    }
  }
});
function B(t, e = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((o) => {
    const r = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        t() && (clearInterval(a), o());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${e}]`);
      }
      n.cnt += 1;
    }, a = setInterval(() => {
      r();
    }, e);
    r();
  });
}
let Z = class {
  listeners = {};
  on = (t, e) => ((this.listeners[t] ||= []).push(e), () => this.off(t, e));
  off = (t, e) => {
    this.listeners[t] = this.listeners[t]?.filter((n) => n !== e);
  };
  /** Sequential execution (await each listener) */
  emit = async (t, ...e) => {
    for (const n of this.listeners[t] ?? [])
      await n(...e);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (t, ...e) => {
    await Promise.all(
      (this.listeners[t] ?? []).map((n) => n(...e))
    );
  };
  //Error-safe emit
  emitSafe = async (t, ...e) => {
    for (const n of this.listeners[t] ?? [])
      try {
        await n(...e);
      } catch (o) {
        this.listeners.error?.forEach(
          (r) => r(o)
        );
      }
  };
};
const j = () => new Z();
class J {
  startTime;
  endTime;
  isRunning;
  constructor() {
    this.startTime = 0, this.endTime = 0, this.isRunning = !1;
  }
  // Starts the timer
  start() {
    if (this.isRunning)
      throw new Error("Benchmark has already started.");
    this.startTime = performance.now(), this.isRunning = !0;
  }
  // Stops the timer and records the end time
  stop() {
    if (!this.isRunning)
      throw new Error("Benchmark hasn't started.");
    this.endTime = performance.now(), this.isRunning = !1;
  }
  // Get the result in milliseconds
  result() {
    if (this.isRunning)
      throw new Error("Benchmark is still running.");
    return {
      time_taken_ms: (this.endTime - this.startTime).toFixed(4)
    };
  }
}
console.log("content-engine-lib");
let y = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (t) => {
      const e = t?.lib || [];
      for (const [n, o] of e.entries()) {
        const r = o, a = `${r.name}:${t.run_from}`, i = `${t.run_from}_src`;
        let d = r[i];
        const f = `${t.run_from}_src`;
        let c = t?.lazy_lib?.[f] || null;
        if (c && (c = c.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${c}`), console.log(`_src: ${d}`), y.lib.l.hasOwnProperty(`${a}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(d) && d.includes("/") == !1 && y.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (c)
              d = c;
            else
              throw `[lib-name=${r.name},lib-src=${d}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (d.startsWith("./") || d.startsWith("../")) {
            const h = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            y.lib.l[`${a}`] = {
              lib: h,
              src: d
            };
          }
          if (d.startsWith("http://") || d.startsWith("https://")) {
            const h = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${d}`
            );
            y.lib.l[`${a}`] = {
              lib: h,
              src: d
            };
          }
        }
      }
      console.log(await y.lib.get_all({}));
    },
    get: async (t) => {
      let e = null;
      const n = `${t.name}:${t.run_from}`;
      return y.lib.l.hasOwnProperty(`${n}`) == !1 && await y.lib.set({
        lib: [
          {
            renderer_src: t.name,
            hydrator_src: t.name,
            editor_src: t.name,
            name: t.name
          }
        ],
        run_from: t.run_from,
        lazy_lib: t.lazy_lib
      }), e = y.lib.l[`${n}`], e;
    },
    get_all: async (t) => y.lib.l
  },
  path: {
    set: (t) => {
      let e = "", n = "";
      const o = t.src.split("/");
      if (t.src.indexOf("://localhost") !== -1 || t.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), o.indexOf(t.type) !== -1)
        for (const [r, a] of o.entries()) {
          let i = r == 0 ? "" : "/";
          if (e += `${i}${a}`, a == t.type)
            return `${e}${n}${t.name}`;
        }
      else
        for (const [r, a] of o.entries()) {
          let i = r == 0 ? "" : "/";
          if (e += `${i}${a}`, a == "src")
            return `${e}${n}${t.name}`;
        }
      return `${e}${n}${t.name}`;
    }
  }
};
const P = j(), W = j(), G = P.on, R = P.emit, K = W.emit, L = W.on, Q = async (t) => {
  const e = await M();
  return await y.lib.set({ lib: t.lib, run_from: "renderer", lazy_lib: t.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const o = new J();
      o.start();
      let r = n.data?.value?.l || n.data.l, a = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return n.return.r == "full" ? a.r = "" : a.r = [], await (async () => {
        for (const i of r) {
          const d = await await y.lib.get({ name: i.type, run_from: "renderer", lazy_lib: t.lazy_lib }), f = await (await d.lib.index({
            f: {
              name: (c) => e.f.name({ id: i.id, name: c }),
              get_lib: async (c) => await await y.lib.get({ name: c.name, run_from: c.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (c) => await (await C()).set(c),
              path: (c) => y.path.set({ src: d.src, type: i.type, name: c }),
              //set..
              uuid: () => S().set(),
              wait_until: B
            }
          })).set(
            {
              data: {
                curr: i
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? a.r += f?.r || "" : a.r.push(f?.r || ""), a.style += f?.style || "", a.head += f?.head || "";
        }
      })(), o.stop(), a.benchmark = o.result(), a;
    }
  };
}, X = async (t) => {
  const e = await M();
  return await y.lib.set({ lib: t.lib, run_from: "hydrator", lazy_lib: t.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const o = new J();
      o.start();
      let r = {
        r: "",
        style: ""
      }, a = {
        style_id: `${S().set()}_stl`
      }, i = n.data?.value?.l || n.data.l;
      const d = async () => {
        for (const f of i) {
          const c = await await y.lib.get({ name: f.type, run_from: "hydrator", lazy_lib: t.lazy_lib }), h = c.lib, b = j(), v = b.on, s = await (await h.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (l) => e.f.name({ id: f.id, name: l }),
              get_lib: async (l) => await await y.lib.get({ name: l.name, run_from: l.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (l) => await (await C()).set(l),
              path: (l) => y.path.set({ src: c.src, type: f.type, name: l }),
              //set..
              uuid: () => S().set(),
              wait_until: B,
              //set..
              call: K,
              listen: v,
              //set..
              new_emitter: () => j()
            }
          })).set(
            {
              data: {
                curr: f
              }
            }
            /*_$cb*/
          );
          G("msg", async (l) => {
            try {
              if (Object.keys(l.where || {}).length == 0) {
                await b.emit("msg", l);
                return;
              }
            } catch {
            }
            try {
              if (f?.[l.where?.key || ""] == l.where?.value) {
                await b.emit("msg", l);
                return;
              }
            } catch {
            }
          }), r.style += s.style;
        }
      };
      await B(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await d();
      try {
        ((f) => {
          const c = document.getElementById(`${a.style_id}`);
          c && c.remove();
          const h = document.createElement("style");
          h.id = `${a.style_id}`, h.innerHTML = `${r.style}`, f.appendChild(h);
        })(document.head);
      } catch (f) {
        console.log(`${f}, Failed to set style..`);
      }
      return o.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: o.result()
      };
    }
  };
};
function Y(t, e) {
  return e.split(".").reduce((n, o) => n?.[o], t);
}
function tt(t, e) {
  const { open: n, close: o } = e, r = [];
  let a = 0;
  for (; a < t.length; ) {
    const i = t.indexOf(n, a);
    if (i === -1) {
      r.push({ type: "text", value: t.slice(a) });
      break;
    }
    i > a && r.push({ type: "text", value: t.slice(a, i) });
    const d = t.indexOf(o, i + n.length);
    if (d === -1)
      throw new Error(`Unclosed template placeholder starting at ${i}`);
    const f = t.slice(i + n.length, d).trim(), [c, h] = f.split("=");
    r.push({ type: "param", value: c, defaultValue: h }), a = d + o.length;
  }
  return r;
}
function et(t, e, n) {
  const o = /* @__PURE__ */ new Set(), r = t.map((a) => {
    if (a.type === "text") return a.value;
    const i = Y(e, a.value);
    if (o.add(a.value.split(".")[0]), i === void 0 || i === "") {
      if (a.defaultValue !== void 0) return a.defaultValue;
      if (n.strict) throw new Error(`Missing param: ${a.value}`);
      return "";
    }
    return n.encode ? encodeURIComponent(String(i)) : String(i);
  }).join("");
  if (n.strict) {
    for (const a of Object.keys(e))
      if (!o.has(a))
        throw new Error(`Unused param provided: ${a}`);
  }
  return r;
}
function nt(t, e) {
  const n = {
    open: e?.open,
    close: e?.close,
    encode: e?.encode ?? !1,
    strict: e?.strict ?? !1
  }, o = tt(t, n);
  return (r) => et(o, r, n);
}
const at = { class: "bg-gray-100 flex items-center justify-center min-h-screen" }, st = {
  "class-old": "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm",
  class: "bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
}, rt = {
  key: 0,
  class: "text-2xl font-bold text-center mb-6"
}, ot = ["innerHTML"], lt = /* @__PURE__ */ F({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    const e = t;
    let n = [];
    const o = E(!1);
    let r = [];
    const a = e._$p;
    e._p;
    const i = E(null), d = E(null);
    let f = "";
    const c = E({
      var: {
        event: {
          typ: {
            redirect: async (s, l) => {
              location.href = s.data;
            },
            toast: async (s, l) => {
              await R("msg", {
                type: "show",
                _p: {},
                _$p: {},
                custom: s.data
                //where:{
                //key:`type`,
                //value:`editor`
                //},
              });
            },
            api: async (s, l) => {
              console.log(s, l);
              try {
                s.data.body = l.body;
                const g = nt(`${JSON.stringify(s.data.headers)}`, {
                  open: "<",
                  close: ">"
                })({
                  localStorage: {
                    token: localStorage.getItem("token") || ""
                  }
                });
                let m = s.data.headers;
                try {
                  m = JSON.parse(g);
                } catch {
                }
                console.log(m);
                const u = await fetch(s.data.url, {
                  method: s.data.method,
                  headers: m,
                  //_v[`data`].headers,
                  body: JSON.stringify(
                    s.data.body
                    /*{
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }*/
                  )
                });
                if ([200, 201].indexOf(u.status) == -1)
                  throw new Error(`err: ${u.statusText}, code=${u.status}`);
                console.log(u.statusText), console.log(u.status), c.value.fn.call_event({
                  on: "success",
                  event: s.event
                });
              } catch (p) {
                console.log(p), c.value.fn.call_event({
                  on: "error",
                  event: s.event
                });
              }
            },
            body: async (s, l) => {
              let p = null;
              console.log(s, l);
              try {
                p = {};
                for (const u of n)
                  try {
                    u.data.form.body_key && (L("msg", async (_) => {
                      u.id == _._$p.data.curr.id && (p[u.data.form.body_key] = _.custom.value);
                    }), await R("msg", {
                      type: "get_value",
                      where: {
                        key: "id",
                        value: u.id
                      }
                    }));
                  } catch {
                  }
              } catch (u) {
                throw new Error(`${u}`);
              }
              let g = !1;
              return setTimeout(() => {
                g = !0;
              }, 500), await e._p.f.wait_until(() => g, 100), JSON.parse(`${JSON.stringify(s.data)}`, function(u, _) {
                return _ == "<body>" && (_ = p), _;
              });
            }
          }
        }
      },
      fn: {
        call_event_for_ce_listen: async (s) => {
          try {
            const l = s._$, p = l.type, g = l._$p.data.curr.data.form.event.l, m = a.data.curr.data.event.l || [], u = g.find((w) => w.on == p);
            let _ = {};
            for (const w of u.call) {
              const $ = m.find((V) => V.name == w), x = $.delay || -1;
              let k = !1;
              x != -1 && (setTimeout(() => {
                k = !0;
              }, x), await e._p.f.wait_until(() => k, 100)), _[$.typ] = await c.value.var.event.typ[$.typ]($, _);
            }
          } catch {
          }
        },
        call_event: async (s) => {
          try {
            const l = s.event.l, p = a.data.curr.data.event.l || [], g = s.on, m = l.find((_) => _.on == g);
            let u = {};
            for (const _ of m.call) {
              const w = p.find((k) => k.name == _), $ = w.delay || -1;
              let x = !1;
              $ != -1 && (setTimeout(() => {
                x = !0;
              }, $), await e._p.f.wait_until(() => x, 100)), u[w.typ] = await c.value.var.event.typ[w.typ](w, u);
            }
          } catch {
          }
        }
      }
    });
    (async () => L("msg", async (s) => {
      await c.value.fn.call_event_for_ce_listen({ _$: s });
    }))();
    const h = async () => {
      r = [];
      const s = n, l = [...s.keys()].filter((m) => s[m].type == "form_section"), g = [...[...s.keys()].filter((m) => s[m].type == "form_toast")];
      for (const m of g)
        r.push(`
        ${d.value[m]} 
        `);
      for (const m of l) {
        let u = {
          _s: ""
        };
        for (const [_, w] of s.entries())
          try {
            s[m].id == w.data.form.section_id && (u._s += ` ${d.value[_]} `);
          } catch {
          }
        r.push(` 
        <div class='p-2'>
        
        <div>
        ${d.value[m]} 
        </div>

        <div class='flex flex-wrap gap-2 md:gap-3' >
        ${u._s}
        </div>

        </div>
        
        `);
      }
      o.value = !0;
    }, b = async () => {
      (async () => {
        i.value = {
          config: {
            lazy_lib: {
              renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
              hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
              editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
            }
          },
          data: {
            // "l": [
            //     {
            //         "id": "7bc78c-carousel",
            //         "type": "carousel",
            //         "slug": "carousel",
            //         "data": {
            //             "data": "",
            //             "theme": "light",
            //             "foo": ""
            //         }
            //     },
            //     {
            //         "id": "3e1bc78c-cart_popup",
            //         "type": "cart_popup",
            //         "slug": "cart_popup",
            //         "data": {
            //             "data": "",
            //             "theme": "light",
            //             "env": "dev"
            //         }
            //     }
            // ]
            l: n
          }
        };
        let s = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
              type: "text",
              data: {
                data: "Loading.."
              }
            }
          ]
        }, l = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
          }
        };
        s = i.value.data, l.lazy_lib = i.value.config.lazy_lib;
        const p = await Q(l), g = await X(l);
        await (async () => {
          const u = await p.set({
            data: s,
            return: {
              r: "chunk"
            }
          });
          console.log(u.r), d.value = u.r, f = u.style, await h();
          const _ = document.createElement("style");
          document.head.appendChild(_), _.innerHTML = f, setTimeout(async () => {
            await g.set({
              data: s
            });
          }, 10);
        })();
      })();
    }, v = () => {
      o.value || (console.log("--_start [form_holder]"), (async () => {
        try {
          typeof e._$p.data.curr.data.ce_file == "string" ? n = (await (await fetch(e._$p.data.curr.data.ce_file)).json()).data.l : n = e._$p.data.curr.data.ce_file.data.l;
        } catch (s) {
          console.log(s);
          return;
        }
        n.push({
          id: "c77697833678c-form_toast",
          type: "form_toast",
          slug: "form_toast",
          data: {
            //"env": "dev",
          }
        }), console.log(n), await b();
      })());
    };
    return H(() => {
      v();
    }), (s, l) => (z(), T("div", at, [
      I("div", st, [
        O(a).data.curr.data.title ? (z(), T("h2", rt, A(O(a).data.curr.data.title), 1)) : N("", !0),
        o.value ? (z(!0), T(U, { key: 1 }, q(O(r), (p) => (z(), T("div", null, [
          I("div", { innerHTML: p }, null, 8, ot)
        ]))), 256)) : N("", !0)
      ])
    ]));
  }
}), ct = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const o = D(lt, {
      _p: t,
      _$p: e
    }), r = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: e,
            custom: {}
          });
        }
      }
    }, a = document.getElementById(t.f.name("vue-root"));
    return o.mount(a), r;
  }
});
export {
  ct as hydrator,
  ct as index
};
