import { d as A, o as U, a as T, c as O, b as C, u as k, t as q, e as R, F as D, r as Z, n as P, f as E, g as G } from "./runtime-dom.esm-bundler-DPpVWBhz.js";
const L = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  })
}), J = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
}), M = async () => ({
  set: async (t) => {
    console.log("--theme");
    try {
      if (!t.el_id)
        throw new Error("[el_id] is required");
      const e = t.name, a = document.getElementById(t.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((o) => {
        const r = (s) => {
          ((l) => {
            const c = l.getAttribute("data-ce");
            if (!c)
              return;
            const u = JSON.parse(c).filter((i) => i?.k.startsWith("t-"));
            if (u.length != 0)
              for (const i of u) {
                const y = i.k, $ = i.v.split(" ");
                if (y == `t-${e}-class`)
                  for (const v of $)
                    l.classList.add(v);
                else
                  for (const v of $)
                    l.classList.remove(v);
              }
          })(s);
        };
        for (const s of o.getElementsByTagName("*"))
          r(s);
        r(o);
      })(a);
    } catch (e) {
      const a = `err: [theme] ${e}`;
      throw console.log(a), a;
    }
  }
});
function N(t, e = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((o) => {
    const r = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        t() && (clearInterval(s), o());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${e}]`);
      }
      a.cnt += 1;
    }, s = setInterval(() => {
      r();
    }, e);
    r();
  });
}
let K = class {
  listeners = {};
  on = (t, e) => ((this.listeners[t] ||= []).push(e), () => this.off(t, e));
  off = (t, e) => {
    this.listeners[t] = this.listeners[t]?.filter((a) => a !== e);
  };
  /** Sequential execution (await each listener) */
  emit = async (t, ...e) => {
    for (const a of this.listeners[t] ?? [])
      await a(...e);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (t, ...e) => {
    await Promise.all(
      (this.listeners[t] ?? []).map((a) => a(...e))
    );
  };
  //Error-safe emit
  emitSafe = async (t, ...e) => {
    for (const a of this.listeners[t] ?? [])
      try {
        await a(...e);
      } catch (o) {
        this.listeners.error?.forEach(
          (r) => r(o)
        );
      }
  };
};
const j = () => new K();
class W {
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
let p = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (t) => {
      const e = t?.lib || [];
      for (const [a, o] of e.entries()) {
        const r = o, s = `${r.name}:${t.run_from}`, l = `${t.run_from}_src`;
        let c = r[l];
        const u = `${t.run_from}_src`;
        let i = t?.lazy_lib?.[u] || null;
        if (i && (i = i.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${c}`), p.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(c) && c.includes("/") == !1 && p.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (i)
              c = i;
            else
              throw `[lib-name=${r.name},lib-src=${c}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (c.startsWith("./") || c.startsWith("../")) {
            const y = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            p.lib.l[`${s}`] = {
              lib: y,
              src: c
            };
          }
          if (c.startsWith("http://") || c.startsWith("https://")) {
            const y = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            p.lib.l[`${s}`] = {
              lib: y,
              src: c
            };
          }
        }
      }
      console.log(await p.lib.get_all({}));
    },
    get: async (t) => {
      let e = null;
      const a = `${t.name}:${t.run_from}`;
      return p.lib.l.hasOwnProperty(`${a}`) == !1 && await p.lib.set({
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
      }), e = p.lib.l[`${a}`], e;
    },
    get_all: async (t) => p.lib.l
  },
  path: {
    set: (t) => {
      let e = "", a = "";
      const o = t.src.split("/");
      if (t.src.indexOf("://localhost") !== -1 || t.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), o.indexOf(t.type) !== -1)
        for (const [r, s] of o.entries()) {
          let l = r == 0 ? "" : "/";
          if (e += `${l}${s}`, s == t.type)
            return `${e}${a}${t.name}`;
        }
      else
        for (const [r, s] of o.entries()) {
          let l = r == 0 ? "" : "/";
          if (e += `${l}${s}`, s == "src")
            return `${e}${a}${t.name}`;
        }
      return `${e}${a}${t.name}`;
    }
  }
};
const V = j(), F = j(), Q = V.on, B = V.emit, X = F.emit, I = F.on, Y = async (t) => {
  const e = await J();
  return await p.lib.set({ lib: t.lib, run_from: "renderer", lazy_lib: t.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const o = new W();
      o.start();
      let r = a.data?.value?.l || a.data.l, s = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return a.return.r == "full" ? s.r = "" : s.r = [], await (async () => {
        for (const l of r) {
          const c = await await p.lib.get({ name: l.type, run_from: "renderer", lazy_lib: t.lazy_lib }), u = await (await c.lib.index({
            f: {
              name: (i) => e.f.name({ id: l.id, name: i }),
              get_lib: async (i) => await await p.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (i) => await (await M()).set(i),
              path: (i) => p.path.set({ src: c.src, type: l.type, name: i }),
              //set..
              uuid: () => L().set(),
              wait_until: N
            }
          })).set(
            {
              data: {
                curr: l
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? s.r += u?.r || "" : s.r.push(u?.r || ""), s.style += u?.style || "", s.head += u?.head || "";
        }
      })(), o.stop(), s.benchmark = o.result(), s;
    }
  };
}, tt = async (t) => {
  const e = await J();
  return await p.lib.set({ lib: t.lib, run_from: "hydrator", lazy_lib: t.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const o = new W();
      o.start();
      let r = {
        r: "",
        style: ""
      }, s = {
        style_id: `${L().set()}_stl`
      }, l = a.data?.value?.l || a.data.l;
      const c = async () => {
        for (const u of l) {
          const i = await await p.lib.get({ name: u.type, run_from: "hydrator", lazy_lib: t.lazy_lib }), y = i.lib, $ = j(), v = $.on, S = await (await y.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (n) => e.f.name({ id: u.id, name: n }),
              get_lib: async (n) => await await p.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (n) => await (await M()).set(n),
              path: (n) => p.path.set({ src: i.src, type: u.type, name: n }),
              //set..
              uuid: () => L().set(),
              wait_until: N,
              //set..
              call: X,
              listen: v,
              //set..
              new_emitter: () => j()
            }
          })).set(
            {
              data: {
                curr: u
              }
            }
            /*_$cb*/
          );
          Q("msg", async (n) => {
            try {
              if (Object.keys(n.where || {}).length == 0) {
                await $.emit("msg", n);
                return;
              }
            } catch {
            }
            try {
              if (u?.[n.where?.key || ""] == n.where?.value) {
                await $.emit("msg", n);
                return;
              }
            } catch {
            }
          }), r.style += S.style;
        }
      };
      await N(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await c();
      try {
        ((u) => {
          const i = document.getElementById(`${s.style_id}`);
          i && i.remove();
          const y = document.createElement("style");
          y.id = `${s.style_id}`, y.innerHTML = `${r.style}`, u.appendChild(y);
        })(document.head);
      } catch (u) {
        console.log(`${u}, Failed to set style..`);
      }
      return o.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: o.result()
      };
    }
  };
};
function et(t, e) {
  return e.split(".").reduce((a, o) => a?.[o], t);
}
function at(t, e) {
  const { open: a, close: o } = e, r = [];
  let s = 0;
  for (; s < t.length; ) {
    const l = t.indexOf(a, s);
    if (l === -1) {
      r.push({ type: "text", value: t.slice(s) });
      break;
    }
    l > s && r.push({ type: "text", value: t.slice(s, l) });
    const c = t.indexOf(o, l + a.length);
    if (c === -1)
      throw new Error(`Unclosed template placeholder starting at ${l}`);
    const u = t.slice(l + a.length, c).trim(), [i, y] = u.split("=");
    r.push({ type: "param", value: i, defaultValue: y }), s = c + o.length;
  }
  return r;
}
function nt(t, e, a) {
  const o = /* @__PURE__ */ new Set(), r = t.map((s) => {
    if (s.type === "text") return s.value;
    const l = et(e, s.value);
    if (o.add(s.value.split(".")[0]), l === void 0 || l === "") {
      if (s.defaultValue !== void 0) return s.defaultValue;
      if (a.strict) throw new Error(`Missing param: ${s.value}`);
      return "";
    }
    return a.encode ? encodeURIComponent(String(l)) : String(l);
  }).join("");
  if (a.strict) {
    for (const s of Object.keys(e))
      if (!o.has(s))
        throw new Error(`Unused param provided: ${s}`);
  }
  return r;
}
function st(t, e) {
  const a = {
    open: e?.open,
    close: e?.close,
    encode: e?.encode ?? !1,
    strict: e?.strict ?? !1
  }, o = at(t, a);
  return (r) => nt(o, r, a);
}
const rt = {
  key: 0,
  class: "text-2xl font-bold text-center mb-6"
}, ot = ["innerHTML"], lt = /* @__PURE__ */ A({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    const e = t;
    e._$p.data.curr.data.hasOwnProperty("class") == !1 && (e._$p.data.curr.data.class = {});
    let a = [
      {
        id: "c77697833678c-form_toast",
        type: "form_toast",
        slug: "form_toast",
        data: {
          //"env": "dev",
        }
      }
    ];
    const o = E(!1);
    let r = [];
    const s = e._$p, l = e._p, c = E(null), u = E(null);
    let i = "";
    const y = E({
      var: {
        event: {
          typ: {
            redirect: async (n, f) => {
              location.href = n.data;
            },
            toast: async (n, f) => {
              await B("msg", {
                type: "show",
                _p: {},
                _$p: {},
                custom: n.data
                //where:{
                //key:`type`,
                //value:`editor`
                //},
              });
            },
            api: async (n, f) => {
              console.log(n, f);
              try {
                n.data.body = f.body;
                const b = st(`${JSON.stringify(n.data.headers)}`, {
                  open: "<",
                  close: ">"
                })({
                  localStorage: {
                    token: localStorage.getItem("token") || ""
                  }
                });
                let h = n.data.headers;
                try {
                  h = JSON.parse(b);
                } catch {
                }
                console.log(h);
                const d = await fetch(n.data.url, {
                  method: n.data.method,
                  headers: h,
                  //_v[`data`].headers,
                  body: JSON.stringify(
                    n.data.body
                    /*{
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }*/
                  )
                });
                if ([200, 201].indexOf(d.status) == -1)
                  throw new Error(`err: ${d.statusText}, code=${d.status}`);
                console.log(d.statusText), console.log(d.status), y.value.fn.call_event({
                  on: "success",
                  event: n.event
                });
              } catch (g) {
                console.log(g), y.value.fn.call_event({
                  on: "error",
                  event: n.event
                });
              }
            },
            body: async (n, f) => {
              let g = null;
              console.log(n, f);
              try {
                g = {};
                for (const d of a)
                  try {
                    d.data.form.body_key && (I("msg", async (m) => {
                      if (d.id == m._$p.data.curr.id) {
                        let _ = m.custom.value;
                        try {
                          if (d.data.form.hasOwnProperty("parse_as")) {
                            const w = d.data.form.parse_as.toLowerCase();
                            w == "int" && (_ = parseInt(_)), w == "bool" && (`${_}`.toLowerCase() == "false" && (_ = !1), `${_}`.toLowerCase() == "true" && (_ = !0)), w == "json" && (_ = JSON.parse(_));
                          }
                        } catch (w) {
                          console.log("parse failed..so using it as text", w), _ = m.custom.value;
                        }
                        g[d.data.form.body_key] = _;
                      }
                    }), await B("msg", {
                      type: "get_value",
                      where: {
                        key: "id",
                        value: d.id
                      }
                    }));
                  } catch {
                  }
              } catch (d) {
                throw new Error(`${d}`);
              }
              let b = !1;
              return setTimeout(() => {
                b = !0;
              }, 500), await e._p.f.wait_until(() => b, 100), JSON.parse(`${JSON.stringify(n.data)}`, function(d, m) {
                return m == "<body>" && (m = g), m;
              });
            }
          }
        }
      },
      fn: {
        call_event_for_ce_listen: async (n) => {
          try {
            const f = n._$, g = f.type, b = f._$p.data.curr.data.form.event.l, h = s.data.curr.data.event.l || [], d = b.find((_) => _.on == g);
            let m = {};
            for (const _ of d.call) {
              const w = h.find((H) => H.name == _), x = w.delay || -1;
              let z = !1;
              x != -1 && (setTimeout(() => {
                z = !0;
              }, x), await e._p.f.wait_until(() => z, 100)), m[w.typ] = await y.value.var.event.typ[w.typ](w, m);
            }
          } catch {
          }
        },
        call_event: async (n) => {
          try {
            const f = n.event.l, g = s.data.curr.data.event.l || [], b = n.on, h = f.find((m) => m.on == b);
            let d = {};
            for (const m of h.call) {
              const _ = g.find((z) => z.name == m), w = _.delay || -1;
              let x = !1;
              w != -1 && (setTimeout(() => {
                x = !0;
              }, w), await e._p.f.wait_until(() => x, 100)), d[_.typ] = await y.value.var.event.typ[_.typ](_, d);
            }
          } catch {
          }
        }
      }
    });
    (async () => s.data.curr.data.mode != "manual" && I("msg", async (n) => {
      await y.value.fn.call_event_for_ce_listen({ _$: n });
    }))(), (async () => s.data.curr.data.mode == "manual" && (I("msg", async (n) => {
      l.f.call("child:msg", n);
    }), l.f.listen("child:msg", async (n) => {
      B("msg", n);
    })))();
    const $ = async () => {
      r = [];
      const n = a, f = [...n.keys()].filter((h) => n[h].type == "form_section"), b = [...[...n.keys()].filter((h) => n[h].type == "form_toast")];
      for (const h of b)
        r.push(`
        ${u.value[h]} 
        `);
      for (const h of f) {
        let d = {
          _s: ""
        };
        for (const [m, _] of n.entries())
          try {
            n[h].id == _.data.form.section_id && (d._s += ` ${u.value[m]} `);
          } catch {
          }
        r.push(` 
        <div class='p-2'>
        
        <div>
        ${u.value[h]} 
        </div>

        <div class='flex flex-wrap gap-2 md:gap-3' >
        ${d._s}
        </div>

        </div>
        
        `);
      }
      o.value = !0;
    }, v = async () => {
      (async () => {
        c.value = {
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
            l: a
          }
        };
        let n = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
              type: "text",
              data: {
                data: "Loading.."
              }
            }
          ]
        }, f = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
          }
        };
        n = c.value.data, f.lazy_lib = c.value.config.lazy_lib;
        const g = await Y(f), b = await tt(f);
        await (async () => {
          const d = await g.set({
            data: n,
            return: {
              r: "chunk"
            }
          });
          console.log(d.r), u.value = d.r, i = d.style, await $();
          const m = document.createElement("style");
          document.head.appendChild(m), m.innerHTML = i, setTimeout(async () => {
            await b.set({
              data: n
            });
          }, 10);
        })();
      })();
    }, S = () => {
      o.value || (console.log("--_start [form_holder]"), (async () => {
        try {
          if (typeof e._$p.data.curr.data.ce_file == "string") {
            const f = await (await fetch(e._$p.data.curr.data.ce_file)).json();
            a.push(...f.data.l);
          } else
            a.push(...e._$p.data.curr.data.ce_file.data.l);
        } catch (n) {
          console.log(n);
          return;
        }
        console.log(a), await v();
      })());
    };
    return U(() => {
      S();
    }), (n, f) => (T(), O("div", {
      class: P(k(s).data.curr.data.class.a || "bg-gray-100 flex items-center justify-center min-h-screen")
    }, [
      C("div", {
        "class-old": "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm",
        class: P(k(s).data.curr.data.class.b || "bg-white shadow-lg rounded-lg p-8 w-full max-w-xl")
      }, [
        k(s).data.curr.data.title ? (T(), O("h2", rt, q(k(s).data.curr.data.title), 1)) : R("", !0),
        o.value ? (T(!0), O(D, { key: 1 }, Z(k(r), (g) => (T(), O("div", null, [
          C("div", { innerHTML: g }, null, 8, ot)
        ]))), 256)) : R("", !0)
      ], 2)
    ], 2));
  }
}), ct = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const o = G(lt, {
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
    }, s = document.getElementById(t.f.name("vue-root"));
    return o.mount(s), r;
  }
});
export {
  ct as hydrator,
  ct as index
};
