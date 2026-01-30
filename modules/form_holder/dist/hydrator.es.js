import { d as P, o as x, c as k, a as O, u as S, t as W, b as V, F, r as H, e as z, f as A } from "./runtime-dom.esm-bundler-BPmzUvV_.js";
const E = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  })
}), N = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
}), R = async () => ({
  set: async (t) => {
    console.log("--theme");
    try {
      if (!t.el_id)
        throw new Error("[el_id] is required");
      const e = t.name, n = document.getElementById(t.el_id);
      if (!n)
        throw new Error("[el_id] is invalid");
      ((r) => {
        const l = (a) => {
          ((o) => {
            const c = o.getAttribute("data-ce");
            if (!c)
              return;
            const d = JSON.parse(c).filter((i) => i?.k.startsWith("t-"));
            if (d.length != 0)
              for (const i of d) {
                const w = i.k, s = i.v.split(" ");
                if (w == `t-${e}-class`)
                  for (const u of s)
                    o.classList.add(u);
                else
                  for (const u of s)
                    o.classList.remove(u);
              }
          })(a);
        };
        for (const a of r.getElementsByTagName("*"))
          l(a);
        l(r);
      })(n);
    } catch (e) {
      const n = `err: [theme] ${e}`;
      throw console.log(n), n;
    }
  }
});
function j(t, e = 1e3) {
  let n = {
    cnt: 0
  };
  return new Promise((r) => {
    const l = () => {
      console.log(`[setInterval] is running.. [count=${n.cnt}]`);
      try {
        t() && (clearInterval(a), r());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${e}]`);
      }
      n.cnt += 1;
    }, a = setInterval(() => {
      l();
    }, e);
    l();
  });
}
let U = class {
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
      } catch (r) {
        this.listeners.error?.forEach(
          (l) => l(r)
        );
      }
  };
};
const T = () => new U();
class L {
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
      for (const [n, r] of e.entries()) {
        const l = r, a = `${l.name}:${t.run_from}`, o = `${t.run_from}_src`;
        let c = l[o];
        const d = `${t.run_from}_src`;
        let i = t?.lazy_lib?.[d] || null;
        if (i && (i = i.replace("{*}", `${l.name}`)), console.log(`_lazy_src: ${i}`), console.log(`_src: ${c}`), p.lib.l.hasOwnProperty(`${a}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(c) && c.includes("/") == !1 && p.lib.inbuilt_lib.indexOf(`${l.name}`) === -1)
            if (i)
              c = i;
            else
              throw `[lib-name=${l.name},lib-src=${c}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (c.startsWith("./") || c.startsWith("../")) {
            const w = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            p.lib.l[`${a}`] = {
              lib: w,
              src: c
            };
          }
          if (c.startsWith("http://") || c.startsWith("https://")) {
            const w = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${c}`
            );
            p.lib.l[`${a}`] = {
              lib: w,
              src: c
            };
          }
        }
      }
      console.log(await p.lib.get_all({}));
    },
    get: async (t) => {
      let e = null;
      const n = `${t.name}:${t.run_from}`;
      return p.lib.l.hasOwnProperty(`${n}`) == !1 && await p.lib.set({
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
      }), e = p.lib.l[`${n}`], e;
    },
    get_all: async (t) => p.lib.l
  },
  path: {
    set: (t) => {
      let e = "", n = "";
      const r = t.src.split("/");
      if (t.src.indexOf("://localhost") !== -1 || t.src.indexOf("://127.0.0.1") !== -1 || (n = "/dist"), r.indexOf(t.type) !== -1)
        for (const [l, a] of r.entries()) {
          let o = l == 0 ? "" : "/";
          if (e += `${o}${a}`, a == t.type)
            return `${e}${n}${t.name}`;
        }
      else
        for (const [l, a] of r.entries()) {
          let o = l == 0 ? "" : "/";
          if (e += `${o}${a}`, a == "src")
            return `${e}${n}${t.name}`;
        }
      return `${e}${n}${t.name}`;
    }
  }
};
const C = T(), J = T(), q = C.on, B = C.emit, D = J.emit, I = J.on, Z = async (t) => {
  const e = await N();
  return await p.lib.set({ lib: t.lib, run_from: "renderer", lazy_lib: t.lazy_lib }), {
    set: async (n) => {
      console.log("--renderer [set]"), n.return = n?.return || {}, n.return.r = n?.return?.r || "full";
      const r = new L();
      r.start();
      let l = n.data?.value?.l || n.data.l, a = {
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
        for (const o of l) {
          const c = await await p.lib.get({ name: o.type, run_from: "renderer", lazy_lib: t.lazy_lib }), d = await (await c.lib.index({
            f: {
              name: (i) => e.f.name({ id: o.id, name: i }),
              get_lib: async (i) => await await p.lib.get({ name: i.name, run_from: i.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (i) => await (await R()).set(i),
              path: (i) => p.path.set({ src: c.src, type: o.type, name: i }),
              //set..
              uuid: () => E().set(),
              wait_until: j
            }
          })).set(
            {
              data: {
                curr: o
              }
            }
            /*_$cb*/
          );
          n?.return?.r == "full" ? a.r += d?.r || "" : a.r.push(d?.r || ""), a.style += d?.style || "", a.head += d?.head || "";
        }
      })(), r.stop(), a.benchmark = r.result(), a;
    }
  };
}, G = async (t) => {
  const e = await N();
  return await p.lib.set({ lib: t.lib, run_from: "hydrator", lazy_lib: t.lazy_lib }), {
    set: async (n) => {
      console.log("--hydrator [set]");
      const r = new L();
      r.start();
      let l = {
        r: "",
        style: ""
      }, a = {
        style_id: `${E().set()}_stl`
      }, o = n.data?.value?.l || n.data.l;
      const c = async () => {
        for (const d of o) {
          const i = await await p.lib.get({ name: d.type, run_from: "hydrator", lazy_lib: t.lazy_lib }), w = i.lib, s = T(), u = s.on, h = await (await w.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (f) => e.f.name({ id: d.id, name: f }),
              get_lib: async (f) => await await p.lib.get({ name: f.name, run_from: f.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (f) => await (await R()).set(f),
              path: (f) => p.path.set({ src: i.src, type: d.type, name: f }),
              //set..
              uuid: () => E().set(),
              wait_until: j,
              //set..
              call: D,
              listen: u,
              //set..
              new_emitter: () => T()
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          q("msg", async (f) => {
            try {
              if (Object.keys(f.where || {}).length == 0) {
                await s.emit("msg", f);
                return;
              }
            } catch {
            }
            try {
              if (d?.[f.where?.key || ""] == f.where?.value) {
                await s.emit("msg", f);
                return;
              }
            } catch {
            }
          }), l.style += h.style;
        }
      };
      await j(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await c();
      try {
        ((d) => {
          const i = document.getElementById(`${a.style_id}`);
          i && i.remove();
          const w = document.createElement("style");
          w.id = `${a.style_id}`, w.innerHTML = `${l.style}`, d.appendChild(w);
        })(document.head);
      } catch (d) {
        console.log(`${d}, Failed to set style..`);
      }
      return r.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: r.result()
      };
    }
  };
};
function K(t, e) {
  return e.split(".").reduce((n, r) => n?.[r], t);
}
function Q(t, e) {
  const { open: n, close: r } = e, l = [];
  let a = 0;
  for (; a < t.length; ) {
    const o = t.indexOf(n, a);
    if (o === -1) {
      l.push({ type: "text", value: t.slice(a) });
      break;
    }
    o > a && l.push({ type: "text", value: t.slice(a, o) });
    const c = t.indexOf(r, o + n.length);
    if (c === -1)
      throw new Error(`Unclosed template placeholder starting at ${o}`);
    const d = t.slice(o + n.length, c).trim(), [i, w] = d.split("=");
    l.push({ type: "param", value: i, defaultValue: w }), a = c + r.length;
  }
  return l;
}
function X(t, e, n) {
  const r = /* @__PURE__ */ new Set(), l = t.map((a) => {
    if (a.type === "text") return a.value;
    const o = K(e, a.value);
    if (r.add(a.value.split(".")[0]), o === void 0 || o === "") {
      if (a.defaultValue !== void 0) return a.defaultValue;
      if (n.strict) throw new Error(`Missing param: ${a.value}`);
      return "";
    }
    return n.encode ? encodeURIComponent(String(o)) : String(o);
  }).join("");
  if (n.strict) {
    for (const a of Object.keys(e))
      if (!r.has(a))
        throw new Error(`Unused param provided: ${a}`);
  }
  return l;
}
function Y(t, e) {
  const n = {
    open: e?.open,
    close: e?.close,
    encode: e?.encode ?? !1,
    strict: e?.strict ?? !1
  }, r = Q(t, n);
  return (l) => X(r, l, n);
}
const tt = { class: "bg-gray-100 flex items-center justify-center min-h-screen" }, et = {
  "class-old": "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm",
  class: "bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
}, nt = {
  key: 0,
  class: "text-2xl font-bold text-center mb-6"
}, at = ["innerHTML"], st = /* @__PURE__ */ P({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    const e = t;
    let n = [];
    const r = z([]), l = e._$p, a = z(null), o = z(null);
    let c = "";
    const d = z({
      var: {
        event: {
          typ: {
            redirect: async (s, u) => {
              location.href = s.data;
            },
            toast: async (s, u) => {
              await B("msg", {
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
            api: async (s, u) => {
              console.log(s, u);
              try {
                s.data.body = u.body;
                const f = Y(`${JSON.stringify(s.data.headers)}`, {
                  open: "<",
                  close: ">"
                })({
                  localStorage: {
                    token: localStorage.getItem("token") || ""
                  }
                });
                let y = s.data.headers;
                try {
                  y = JSON.parse(f);
                } catch {
                }
                console.log(y);
                const _ = await fetch(s.data.url, {
                  method: s.data.method,
                  headers: y,
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
                if ([200, 201].indexOf(_.status) == -1)
                  throw new Error(`err: ${_.statusText}, code=${_.status}`);
                console.log(_.statusText), console.log(_.status), d.value.fn.call_event({
                  on: "success",
                  event: s.event
                });
              } catch (h) {
                console.log(h), d.value.fn.call_event({
                  on: "error",
                  event: s.event
                });
              }
            },
            body: async (s, u) => {
              let h = null;
              console.log(s, u);
              try {
                h = {};
                for (const _ of n)
                  try {
                    _.data.form.body_key && (I("msg", async (m) => {
                      _.id == m._$p.data.curr.id && (h[_.data.form.body_key] = m.custom.value);
                    }), await B("msg", {
                      type: "get_value",
                      where: {
                        key: "id",
                        value: _.id
                      }
                    }));
                  } catch {
                  }
              } catch (_) {
                throw new Error(`${_}`);
              }
              let f = !1;
              return setTimeout(() => {
                f = !0;
              }, 500), await e._p.f.wait_until(() => f, 100), JSON.parse(`${JSON.stringify(s.data)}`, function(_, m) {
                return m == "<body>" && (m = h), m;
              });
            }
          }
        }
      },
      fn: {
        call_event_for_ce_listen: async (s) => {
          try {
            const u = s._$, h = u.type, f = u._$p.data.curr.data.form.event.l, y = l.data.curr.data.event.l || [], _ = f.find((g) => g.on == h);
            let m = {};
            for (const g of _.call) {
              const b = y.find((M) => M.name == g), v = b.delay || -1;
              let $ = !1;
              v != -1 && (setTimeout(() => {
                $ = !0;
              }, v), await e._p.f.wait_until(() => $, 100)), m[b.typ] = await d.value.var.event.typ[b.typ](b, m);
            }
          } catch {
          }
        },
        call_event: async (s) => {
          try {
            const u = s.event.l, h = l.data.curr.data.event.l || [], f = s.on, y = u.find((m) => m.on == f);
            let _ = {};
            for (const m of y.call) {
              const g = h.find(($) => $.name == m), b = g.delay || -1;
              let v = !1;
              b != -1 && (setTimeout(() => {
                v = !0;
              }, b), await e._p.f.wait_until(() => v, 100)), _[g.typ] = await d.value.var.event.typ[g.typ](g, _);
            }
          } catch {
          }
        }
      }
    });
    (async () => I("msg", async (s) => {
      await d.value.fn.call_event_for_ce_listen({ _$: s });
    }))();
    const i = () => {
      r.value = [];
      const s = n, u = [...s.keys()].filter((y) => s[y].type == "form_section"), f = [...[...s.keys()].filter((y) => s[y].type == "form_toast")];
      for (const y of f)
        r.value.push(`
        ${o.value[y]} 
        `);
      for (const y of u) {
        let _ = {
          _s: ""
        };
        for (const [m, g] of s.entries())
          try {
            s[y].id == g.data.form.section_id && (_._s += ` ${o.value[m]} `);
          } catch {
          }
        r.value.push(` 
        <div class='p-2'>
        
        <div>
        ${o.value[y]} 
        </div>

        <div class='flex flex-wrap gap-2 md:gap-3' >
        ${_._s}
        </div>

        </div>
        
        `);
      }
    }, w = async () => {
      (async () => {
        a.value = {
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
        }, u = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
          }
        };
        s = a.value.data, u.lazy_lib = a.value.config.lazy_lib;
        const h = await Z(u), f = await G(u);
        await (async () => {
          const _ = await h.set({
            data: s,
            return: {
              r: "chunk"
            }
          });
          console.log(_.r), o.value = _.r, c = _.style, r.value = o.value, i();
          const m = document.createElement("style");
          document.head.appendChild(m), m.innerHTML = c, setTimeout(async () => {
            await f.set({
              data: s
            });
          }, 10);
        })();
      })();
    };
    return (async () => {
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
      }), console.log(n), await w();
    })(), (s, u) => (x(), k("div", tt, [
      O("div", et, [
        S(l).data.curr.data.title ? (x(), k("h2", nt, W(S(l).data.curr.data.title), 1)) : V("", !0),
        (x(!0), k(F, null, H(r.value, (h) => (x(), k("div", null, [
          O("div", { innerHTML: h }, null, 8, at)
        ]))), 256))
      ])
    ]));
  }
}), lt = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const r = A(st, {
      _p: t,
      _$p: e
    }), l = {
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
    return r.mount(a), l;
  }
});
export {
  lt as hydrator,
  lt as index
};
