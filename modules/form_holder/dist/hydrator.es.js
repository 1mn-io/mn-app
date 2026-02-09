import { d as A, o as U, a as T, c as E, b as L, u as k, t as q, e as C, F as D, r as Z, n as M, f as j, g as G } from "./runtime-dom.esm-bundler-DPpVWBhz.js";
const N = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  })
}), J = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
}), P = async () => ({
  set: async (t) => {
    console.log("--theme");
    try {
      if (!t.el_id)
        throw new Error("[el_id] is required");
      const e = t.name, a = document.getElementById(t.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((l) => {
        const r = (s) => {
          ((o) => {
            const c = o.getAttribute("data-ce");
            if (!c)
              return;
            const d = JSON.parse(c).filter((i) => i?.k.startsWith("t-"));
            if (d.length != 0)
              for (const i of d) {
                const _ = i.k, b = i.v.split(" ");
                if (_ == `t-${e}-class`)
                  for (const v of b)
                    o.classList.add(v);
                else
                  for (const v of b)
                    o.classList.remove(v);
              }
          })(s);
        };
        for (const s of l.getElementsByTagName("*"))
          r(s);
        r(l);
      })(a);
    } catch (e) {
      const a = `err: [theme] ${e}`;
      throw console.log(a), a;
    }
  }
});
function R(t, e = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((l) => {
    const r = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        t() && (clearInterval(s), l());
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
      } catch (l) {
        this.listeners.error?.forEach(
          (r) => r(l)
        );
      }
  };
};
const O = () => new K();
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
let h = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (t) => {
      const e = t?.lib || [];
      for (const [a, l] of e.entries()) {
        const r = l, s = `${r.name}:${t.run_from}`, o = `${t.run_from}_src`;
        let c = r[o];
        const d = `${t.run_from}_src`;
        let i = t?.lazy_lib?.[d] || null;
        if (i && (i = i.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${c}`), h.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(c) && c.includes("/") == !1 && h.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (i)
              c = i;
            else
              throw `[lib-name=${r.name},lib-src=${c}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (c.startsWith("./") || c.startsWith("../")) {
            const _ = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            h.lib.l[`${s}`] = {
              lib: _,
              src: c
            };
          }
          if (c.startsWith("http://") || c.startsWith("https://")) {
            const _ = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            h.lib.l[`${s}`] = {
              lib: _,
              src: c
            };
          }
        }
      }
      console.log(await h.lib.get_all({}));
    },
    get: async (t) => {
      let e = null;
      const a = `${t.name}:${t.run_from}`;
      return h.lib.l.hasOwnProperty(`${a}`) == !1 && await h.lib.set({
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
      }), e = h.lib.l[`${a}`], e;
    },
    get_all: async (t) => h.lib.l
  },
  path: {
    set: (t) => {
      let e = "", a = "";
      const l = t.src.split("/");
      if (t.src.indexOf("://localhost") !== -1 || t.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), l.indexOf(t.type) !== -1)
        for (const [r, s] of l.entries()) {
          let o = r == 0 ? "" : "/";
          if (e += `${o}${s}`, s == t.type)
            return `${e}${a}${t.name}`;
        }
      else
        for (const [r, s] of l.entries()) {
          let o = r == 0 ? "" : "/";
          if (e += `${o}${s}`, s == "src")
            return `${e}${a}${t.name}`;
        }
      return `${e}${a}${t.name}`;
    }
  }
};
const V = O(), F = O(), Q = V.on, B = V.emit, X = F.emit, I = F.on, Y = async (t) => {
  const e = await J();
  return await h.lib.set({ lib: t.lib, run_from: "renderer", lazy_lib: t.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const l = new W();
      l.start();
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
        for (const o of r) {
          const c = await await h.lib.get({ name: o.type, run_from: "renderer", lazy_lib: t.lazy_lib }), d = await (await c.lib.index({
            f: {
              name: (i) => e.f.name({ id: o.id, name: i }),
              get_lib: async (i) => await await h.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (i) => await (await P()).set(i),
              path: (i) => h.path.set({ src: c.src, type: o.type, name: i }),
              //set..
              uuid: () => N().set(),
              wait_until: R
            }
          })).set(
            {
              data: {
                curr: o
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? s.r += d?.r || "" : s.r.push(d?.r || ""), s.style += d?.style || "", s.head += d?.head || "";
        }
      })(), l.stop(), s.benchmark = l.result(), s;
    }
  };
}, tt = async (t) => {
  const e = await J();
  return await h.lib.set({ lib: t.lib, run_from: "hydrator", lazy_lib: t.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const l = new W();
      l.start();
      let r = {
        r: "",
        style: ""
      }, s = {
        style_id: `${N().set()}_stl`
      }, o = a.data?.value?.l || a.data.l;
      const c = async () => {
        for (const d of o) {
          const i = await await h.lib.get({ name: d.type, run_from: "hydrator", lazy_lib: t.lazy_lib }), _ = i.lib, b = O(), v = b.on, S = await (await _.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (n) => e.f.name({ id: d.id, name: n }),
              get_lib: async (n) => await await h.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (n) => await (await P()).set(n),
              path: (n) => h.path.set({ src: i.src, type: d.type, name: n }),
              //set..
              uuid: () => N().set(),
              wait_until: R,
              //set..
              call: X,
              listen: v,
              //set..
              new_emitter: () => O()
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          Q("msg", async (n) => {
            try {
              if (Object.keys(n.where || {}).length == 0) {
                await b.emit("msg", n);
                return;
              }
            } catch {
            }
            try {
              if (d?.[n.where?.key || ""] == n.where?.value) {
                await b.emit("msg", n);
                return;
              }
            } catch {
            }
          }), r.style += S.style;
        }
      };
      await R(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await c();
      try {
        ((d) => {
          const i = document.getElementById(`${s.style_id}`);
          i && i.remove();
          const _ = document.createElement("style");
          _.id = `${s.style_id}`, _.innerHTML = `${r.style}`, d.appendChild(_);
        })(document.head);
      } catch (d) {
        console.log(`${d}, Failed to set style..`);
      }
      return l.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: l.result()
      };
    }
  };
};
function et(t, e) {
  return e.split(".").reduce((a, l) => a?.[l], t);
}
function at(t, e) {
  const { open: a, close: l } = e, r = [];
  let s = 0;
  for (; s < t.length; ) {
    const o = t.indexOf(a, s);
    if (o === -1) {
      r.push({ type: "text", value: t.slice(s) });
      break;
    }
    o > s && r.push({ type: "text", value: t.slice(s, o) });
    const c = t.indexOf(l, o + a.length);
    if (c === -1)
      throw new Error(`Unclosed template placeholder starting at ${o}`);
    const d = t.slice(o + a.length, c).trim(), [i, _] = d.split("=");
    r.push({ type: "param", value: i, defaultValue: _ }), s = c + l.length;
  }
  return r;
}
function nt(t, e, a) {
  const l = /* @__PURE__ */ new Set(), r = t.map((s) => {
    if (s.type === "text") return s.value;
    const o = et(e, s.value);
    if (l.add(s.value.split(".")[0]), o === void 0 || o === "") {
      if (s.defaultValue !== void 0) return s.defaultValue;
      if (a.strict) throw new Error(`Missing param: ${s.value}`);
      return "";
    }
    return a.encode ? encodeURIComponent(String(o)) : String(o);
  }).join("");
  if (a.strict) {
    for (const s of Object.keys(e))
      if (!l.has(s))
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
  }, l = at(t, a);
  return (r) => nt(l, r, a);
}
const rt = {
  key: 0,
  class: "text-2xl font-bold text-center mb-6"
}, lt = ["innerHTML"], ot = /* @__PURE__ */ A({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    const e = t;
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
    const l = j(!1);
    let r = [];
    const s = e._$p, o = e._p, c = j(null), d = j(null);
    let i = "";
    const _ = j({
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
                const g = st(`${JSON.stringify(n.data.headers)}`, {
                  open: "<",
                  close: ">"
                })({
                  localStorage: {
                    token: localStorage.getItem("token") || ""
                  }
                });
                let y = n.data.headers;
                try {
                  y = JSON.parse(g);
                } catch {
                }
                console.log(y);
                const u = await fetch(n.data.url, {
                  method: n.data.method,
                  headers: y,
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
                if ([200, 201].indexOf(u.status) == -1)
                  throw new Error(`err: ${u.statusText}, code=${u.status}`);
                console.log(u.statusText), console.log(u.status), _.value.fn.call_event({
                  on: "success",
                  event: n.event
                });
              } catch (p) {
                console.log(p), _.value.fn.call_event({
                  on: "error",
                  event: n.event
                });
              }
            },
            body: async (n, f) => {
              let p = null;
              console.log(n, f);
              try {
                p = {};
                for (const u of a)
                  try {
                    u.data.form.body_key && (I("msg", async (m) => {
                      u.id == m._$p.data.curr.id && (p[u.data.form.body_key] = m.custom.value);
                    }), await B("msg", {
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
              }, 500), await e._p.f.wait_until(() => g, 100), JSON.parse(`${JSON.stringify(n.data)}`, function(u, m) {
                return m == "<body>" && (m = p), m;
              });
            }
          }
        }
      },
      fn: {
        call_event_for_ce_listen: async (n) => {
          try {
            const f = n._$, p = f.type, g = f._$p.data.curr.data.form.event.l, y = s.data.curr.data.event.l || [], u = g.find((w) => w.on == p);
            let m = {};
            for (const w of u.call) {
              const $ = y.find((H) => H.name == w), x = $.delay || -1;
              let z = !1;
              x != -1 && (setTimeout(() => {
                z = !0;
              }, x), await e._p.f.wait_until(() => z, 100)), m[$.typ] = await _.value.var.event.typ[$.typ]($, m);
            }
          } catch {
          }
        },
        call_event: async (n) => {
          try {
            const f = n.event.l, p = s.data.curr.data.event.l || [], g = n.on, y = f.find((m) => m.on == g);
            let u = {};
            for (const m of y.call) {
              const w = p.find((z) => z.name == m), $ = w.delay || -1;
              let x = !1;
              $ != -1 && (setTimeout(() => {
                x = !0;
              }, $), await e._p.f.wait_until(() => x, 100)), u[w.typ] = await _.value.var.event.typ[w.typ](w, u);
            }
          } catch {
          }
        }
      }
    });
    (async () => s.data.curr.data.mode != "manual" && I("msg", async (n) => {
      await _.value.fn.call_event_for_ce_listen({ _$: n });
    }))(), (async () => s.data.curr.data.mode == "manual" && (I("msg", async (n) => {
      o.f.call("child:msg", n);
    }), o.f.listen("child:msg", async (n) => {
      B("msg", n);
    })))();
    const b = async () => {
      r = [];
      const n = a, f = [...n.keys()].filter((y) => n[y].type == "form_section"), g = [...[...n.keys()].filter((y) => n[y].type == "form_toast")];
      for (const y of g)
        r.push(`
        ${d.value[y]} 
        `);
      for (const y of f) {
        let u = {
          _s: ""
        };
        for (const [m, w] of n.entries())
          try {
            n[y].id == w.data.form.section_id && (u._s += ` ${d.value[m]} `);
          } catch {
          }
        r.push(` 
        <div class='p-2'>
        
        <div>
        ${d.value[y]} 
        </div>

        <div class='flex flex-wrap gap-2 md:gap-3' >
        ${u._s}
        </div>

        </div>
        
        `);
      }
      l.value = !0;
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
        const p = await Y(f), g = await tt(f);
        await (async () => {
          const u = await p.set({
            data: n,
            return: {
              r: "chunk"
            }
          });
          console.log(u.r), d.value = u.r, i = u.style, await b();
          const m = document.createElement("style");
          document.head.appendChild(m), m.innerHTML = i, setTimeout(async () => {
            await g.set({
              data: n
            });
          }, 10);
        })();
      })();
    }, S = () => {
      l.value || (console.log("--_start [form_holder]"), (async () => {
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
    }), (n, f) => (T(), E("div", {
      class: M(k(s).data.curr.data.class.a || "bg-gray-100 flex items-center justify-center min-h-screen")
    }, [
      L("div", {
        "class-old": "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm",
        class: M(k(s).data.curr.data.class.b || "bg-white shadow-lg rounded-lg p-8 w-full max-w-xl")
      }, [
        k(s).data.curr.data.title ? (T(), E("h2", rt, q(k(s).data.curr.data.title), 1)) : C("", !0),
        l.value ? (T(!0), E(D, { key: 1 }, Z(k(r), (p) => (T(), E("div", null, [
          L("div", { innerHTML: p }, null, 8, lt)
        ]))), 256)) : C("", !0)
      ], 2)
    ], 2));
  }
}), ct = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const l = G(ot, {
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
    return l.mount(s), r;
  }
});
export {
  ct as hydrator,
  ct as index
};
