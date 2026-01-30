import { d as H, o as A, a as T, c as z, b as I, u as N, t as U, e as q, F as D, r as Z, f as E, n as R, g as G } from "./runtime-dom.esm-bundler-b9SlkuPz.js";
const S = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  })
}), C = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
}), J = async () => ({
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
            const u = JSON.parse(c).filter((i) => i?.k.startsWith("t-"));
            if (u.length != 0)
              for (const i of u) {
                const m = i.k, b = i.v.split(" ");
                if (m == `t-${e}-class`)
                  for (const $ of b)
                    o.classList.add($);
                else
                  for (const $ of b)
                    o.classList.remove($);
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
function B(t, e = 1e3) {
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
const j = () => new K();
class P {
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
        const u = `${t.run_from}_src`;
        let i = t?.lazy_lib?.[u] || null;
        if (i && (i = i.replace("{*}", `${r.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${c}`), h.lib.l.hasOwnProperty(`${s}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(c) && c.includes("/") == !1 && h.lib.inbuilt_lib.indexOf(`${r.name}`) === -1)
            if (i)
              c = i;
            else
              throw `[lib-name=${r.name},lib-src=${c}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (c.startsWith("./") || c.startsWith("../")) {
            const m = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            h.lib.l[`${s}`] = {
              lib: m,
              src: c
            };
          }
          if (c.startsWith("http://") || c.startsWith("https://")) {
            const m = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            h.lib.l[`${s}`] = {
              lib: m,
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
const W = j(), V = j(), Q = W.on, L = W.emit, X = V.emit, M = V.on, Y = async (t) => {
  const e = await C();
  return await h.lib.set({ lib: t.lib, run_from: "renderer", lazy_lib: t.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const l = new P();
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
          const c = await await h.lib.get({ name: o.type, run_from: "renderer", lazy_lib: t.lazy_lib }), u = await (await c.lib.index({
            f: {
              name: (i) => e.f.name({ id: o.id, name: i }),
              get_lib: async (i) => await await h.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (i) => await (await J()).set(i),
              path: (i) => h.path.set({ src: c.src, type: o.type, name: i }),
              //set..
              uuid: () => S().set(),
              wait_until: B
            }
          })).set(
            {
              data: {
                curr: o
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? s.r += u?.r || "" : s.r.push(u?.r || ""), s.style += u?.style || "", s.head += u?.head || "";
        }
      })(), l.stop(), s.benchmark = l.result(), s;
    }
  };
}, tt = async (t) => {
  const e = await C();
  return await h.lib.set({ lib: t.lib, run_from: "hydrator", lazy_lib: t.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const l = new P();
      l.start();
      let r = {
        r: "",
        style: ""
      }, s = {
        style_id: `${S().set()}_stl`
      }, o = a.data?.value?.l || a.data.l;
      const c = async () => {
        for (const u of o) {
          const i = await await h.lib.get({ name: u.type, run_from: "hydrator", lazy_lib: t.lazy_lib }), m = i.lib, b = j(), $ = b.on, O = await (await m.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (n) => e.f.name({ id: u.id, name: n }),
              get_lib: async (n) => await await h.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (n) => await (await J()).set(n),
              path: (n) => h.path.set({ src: i.src, type: u.type, name: n }),
              //set..
              uuid: () => S().set(),
              wait_until: B,
              //set..
              call: X,
              listen: $,
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
                await b.emit("msg", n);
                return;
              }
            } catch {
            }
            try {
              if (u?.[n.where?.key || ""] == n.where?.value) {
                await b.emit("msg", n);
                return;
              }
            } catch {
            }
          }), r.style += O.style;
        }
      };
      await B(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await c();
      try {
        ((u) => {
          const i = document.getElementById(`${s.style_id}`);
          i && i.remove();
          const m = document.createElement("style");
          m.id = `${s.style_id}`, m.innerHTML = `${r.style}`, u.appendChild(m);
        })(document.head);
      } catch (u) {
        console.log(`${u}, Failed to set style..`);
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
    const u = t.slice(o + a.length, c).trim(), [i, m] = u.split("=");
    r.push({ type: "param", value: i, defaultValue: m }), s = c + l.length;
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
const rt = { class: "bg-gray-100 flex items-center justify-center min-h-screen" }, lt = {
  "class-old": "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm",
  class: "bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
}, ot = {
  key: 0,
  class: "text-2xl font-bold text-center mb-6"
}, it = ["innerHTML"], ct = /* @__PURE__ */ H({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    const e = t;
    let a = [];
    const l = E([]), r = e._$p, s = E(null), o = E(null);
    let c = "", u = !1, i = !1;
    const m = E({
      var: {
        event: {
          typ: {
            redirect: async (n, f) => {
              location.href = n.data;
            },
            toast: async (n, f) => {
              await L("msg", {
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
                const w = st(`${JSON.stringify(n.data.headers)}`, {
                  open: "<",
                  close: ">"
                })({
                  localStorage: {
                    token: localStorage.getItem("token") || ""
                  }
                });
                let y = n.data.headers;
                try {
                  y = JSON.parse(w);
                } catch {
                }
                console.log(y);
                const d = await fetch(n.data.url, {
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
                if ([200, 201].indexOf(d.status) == -1)
                  throw new Error(`err: ${d.statusText}, code=${d.status}`);
                console.log(d.statusText), console.log(d.status), m.value.fn.call_event({
                  on: "success",
                  event: n.event
                });
              } catch (p) {
                console.log(p), m.value.fn.call_event({
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
                for (const d of a)
                  try {
                    d.data.form.body_key && (M("msg", async (_) => {
                      d.id == _._$p.data.curr.id && (p[d.data.form.body_key] = _.custom.value);
                    }), await L("msg", {
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
              let w = !1;
              return setTimeout(() => {
                w = !0;
              }, 500), await e._p.f.wait_until(() => w, 100), JSON.parse(`${JSON.stringify(n.data)}`, function(d, _) {
                return _ == "<body>" && (_ = p), _;
              });
            }
          }
        }
      },
      fn: {
        call_event_for_ce_listen: async (n) => {
          try {
            const f = n._$, p = f.type, w = f._$p.data.curr.data.form.event.l, y = r.data.curr.data.event.l || [], d = w.find((g) => g.on == p);
            let _ = {};
            for (const g of d.call) {
              const v = y.find((F) => F.name == g), x = v.delay || -1;
              let k = !1;
              x != -1 && (setTimeout(() => {
                k = !0;
              }, x), await e._p.f.wait_until(() => k, 100)), _[v.typ] = await m.value.var.event.typ[v.typ](v, _);
            }
          } catch {
          }
        },
        call_event: async (n) => {
          try {
            const f = n.event.l, p = r.data.curr.data.event.l || [], w = n.on, y = f.find((_) => _.on == w);
            let d = {};
            for (const _ of y.call) {
              const g = p.find((k) => k.name == _), v = g.delay || -1;
              let x = !1;
              v != -1 && (setTimeout(() => {
                x = !0;
              }, v), await e._p.f.wait_until(() => x, 100)), d[g.typ] = await m.value.var.event.typ[g.typ](g, d);
            }
          } catch {
          }
        }
      }
    });
    (async () => M("msg", async (n) => {
      await m.value.fn.call_event_for_ce_listen({ _$: n });
    }))();
    const b = async () => {
      await R(), l.value = [];
      const n = a, f = [...n.keys()].filter((y) => n[y].type == "form_section"), w = [...[...n.keys()].filter((y) => n[y].type == "form_toast")];
      for (const y of w)
        l.value.push(`
        ${o.value[y]} 
        `);
      for (const y of f) {
        let d = {
          _s: ""
        };
        for (const [_, g] of n.entries())
          try {
            n[y].id == g.data.form.section_id && (d._s += ` ${o.value[_]} `);
          } catch {
          }
        l.value.push(` 
        <div class='p-2'>
        
        <div>
        ${o.value[y]} 
        </div>

        <div class='flex flex-wrap gap-2 md:gap-3' >
        ${d._s}
        </div>

        </div>
        
        `);
      }
    }, $ = async () => {
      i || (i = !0, (async () => {
        s.value = {
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
        n = s.value.data, f.lazy_lib = s.value.config.lazy_lib;
        const p = await Y(f), w = await tt(f);
        await (async () => {
          const d = await p.set({
            data: n,
            return: {
              r: "chunk"
            }
          });
          console.log(d.r), await R(), o.value = d.r, c = d.style, await b();
          const _ = document.createElement("style");
          document.head.appendChild(_), _.innerHTML = c, setTimeout(async () => {
            await w.set({
              data: n
            });
          }, 10);
        })();
      })());
    }, O = async () => {
      (async () => {
        try {
          typeof e._$p.data.curr.data.ce_file == "string" ? a = (await (await fetch(e._$p.data.curr.data.ce_file)).json()).data.l : a = e._$p.data.curr.data.ce_file.data.l;
        } catch (n) {
          console.log(n);
          return;
        }
        a.push({
          id: "c77697833678c-form_toast",
          type: "form_toast",
          slug: "form_toast",
          data: {
            //"env": "dev",
          }
        }), console.log(a), await $();
      })();
    };
    return A(async () => {
      u || (u = !0, await O());
    }), (n, f) => (T(), z("div", rt, [
      I("div", lt, [
        N(r).data.curr.data.title ? (T(), z("h2", ot, U(N(r).data.curr.data.title), 1)) : q("", !0),
        (T(!0), z(D, null, Z(l.value, (p) => (T(), z("div", null, [
          I("div", { innerHTML: p }, null, 8, it)
        ]))), 256))
      ])
    ]));
  }
}), ut = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const l = G(ct, {
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
  ut as hydrator,
  ut as index
};
