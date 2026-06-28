import { d as S, o as J, a as v, c as $, b as z, e as C, F as j, r as b, f as B } from "./runtime-dom.esm-bundler-BEcgbega.js";
const T = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), N = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), A = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, a = document.getElementById(e.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((i) => {
        const s = (r) => {
          ((d) => {
            const o = d.getAttribute("data-ce");
            if (!o)
              return;
            const c = JSON.parse(o).filter((n) => n?.k.startsWith("t-"));
            if (c.length != 0)
              for (const n of c) {
                const l = n.k, f = n.v.split(" ");
                if (l == `t-${t}-class`)
                  for (const h of f)
                    d.classList.add(h);
                else
                  for (const h of f)
                    d.classList.remove(h);
              }
          })(r);
        };
        for (const r of i.getElementsByTagName("*"))
          s(r);
        s(i);
      })(a);
    } catch (t) {
      const a = `err: [theme] ${t}`;
      throw console.log(a), a;
    }
  }
});
function k(e, t = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((i) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(r), i());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, r = setInterval(() => {
      s();
    }, t);
    s();
  });
}
let P = class {
  listeners = {};
  on = (e, t) => ((this.listeners[e] ||= []).push(t), () => this.off(e, t));
  off = (e, t) => {
    this.listeners[e] = this.listeners[e]?.filter((a) => a !== t);
  };
  /** Sequential execution (await each listener) */
  emit = async (e, ...t) => {
    for (const a of this.listeners[e] ?? [])
      await a(...t);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (e, ...t) => {
    await Promise.all(
      (this.listeners[e] ?? []).map((a) => a(...t))
    );
  };
  //Error-safe emit
  emitSafe = async (e, ...t) => {
    for (const a of this.listeners[e] ?? [])
      try {
        await a(...t);
      } catch (i) {
        this.listeners.error?.forEach(
          (s) => s(i)
        );
      }
  };
};
const x = () => new P();
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
let u = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [a, i] of t.entries()) {
        const s = i, r = `${s.name}:${e.run_from}`, d = `${e.run_from}_src`;
        let o = s[d];
        const c = `${e.run_from}_src`;
        let n = e?.lazy_lib?.[c] || null;
        if (n && (n = n.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${n}`), console.log(`_src: ${o}`), u.lib.l.hasOwnProperty(`${r}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && u.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (n)
              o = n;
            else
              throw `[lib-name=${s.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const l = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            u.lib.l[`${r}`] = {
              lib: l,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const l = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            u.lib.l[`${r}`] = {
              lib: l,
              src: o
            };
          }
        }
      }
      console.log(await u.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return u.lib.l.hasOwnProperty(`${a}`) == !1 && await u.lib.set({
        lib: [
          {
            renderer_src: e.name,
            hydrator_src: e.name,
            editor_src: e.name,
            name: e.name
          }
        ],
        run_from: e.run_from,
        lazy_lib: e.lazy_lib
      }), t = u.lib.l[`${a}`], t;
    },
    get_all: async (e) => u.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const i = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), i.indexOf(e.type) !== -1)
        for (const [s, r] of i.entries()) {
          let d = s == 0 ? "" : "/";
          if (t += `${d}${r}`, r == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [s, r] of i.entries()) {
          let d = s == 0 ? "" : "/";
          if (t += `${d}${r}`, r == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const R = x(), M = x(), D = R.on, O = R.emit, W = M.emit, F = M.on, U = async (e) => {
  const t = await N();
  return await u.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const i = new L();
      i.start();
      let s = a.data?.value?.l || a.data.l, r = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return a.return.r == "full" ? r.r = "" : r.r = [], await (async () => {
        for (const d of s) {
          const o = await await u.lib.get({ name: d.type, run_from: "renderer", lazy_lib: e.lazy_lib }), c = await (await o.lib.index({
            f: {
              name: (n) => t.f.name({ id: d.id, name: n }),
              get_lib: async (n) => await await u.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (n) => await (await A()).set(n),
              path: (n) => u.path.set({ src: o.src, type: d.type, name: n }),
              //set..
              uuid: () => T().set(),
              wait_until: k
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? r.r += c?.r || "" : r.r.push(c?.r || ""), r.style += c?.style || "", r.head += c?.head || "";
        }
      })(), i.stop(), r.benchmark = i.result(), r;
    }
  };
}, V = async (e) => {
  const t = await N();
  return await u.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const i = new L();
      i.start();
      let s = {
        r: "",
        style: ""
      }, r = {
        style_id: `${T().set()}_stl`
      }, d = a.data?.value?.l || a.data.l;
      const o = async () => {
        for (const c of d) {
          const n = await await u.lib.get({ name: c.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), l = n.lib, f = x(), h = f.on, y = await (await l.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (m) => t.f.name({ id: c.id, name: m }),
              get_lib: async (m) => await await u.lib.get({ name: m.name, run_from: m.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (m) => await (await A()).set(m),
              path: (m) => u.path.set({ src: n.src, type: c.type, name: m }),
              //set..
              uuid: () => T().set(),
              wait_until: k,
              //set..
              call: W,
              listen: h,
              //set..
              new_emitter: () => x()
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          D("msg", async (m) => {
            try {
              if (Object.keys(m.where || {}).length == 0) {
                await f.emit("msg", m);
                return;
              }
            } catch {
            }
            try {
              if (c?.[m.where?.key || ""] == m.where?.value) {
                await f.emit("msg", m);
                return;
              }
            } catch {
            }
          }), s.style += y.style;
        }
      };
      await k(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((c) => {
          const n = document.getElementById(`${r.style_id}`);
          n && n.remove();
          const l = document.createElement("style");
          l.id = `${r.style_id}`, l.innerHTML = `${s.style}`, c.appendChild(l);
        })(document.head);
      } catch (c) {
        console.log(`${c}, Failed to set style..`);
      }
      return i.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: i.result()
      };
    }
  };
}, G = {
  key: 0,
  class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10"
}, Z = ["innerHTML"], X = { key: 1 }, Y = ["innerHTML"], H = /* @__PURE__ */ S({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = b(""), a = b(0), i = b(20), s = b({
      html: {
        table: null,
        search_panel: null
      }
    }), r = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/auth?typ=get_users",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function d(n = 1, l = 20, f = "") {
      try {
        const h = r.url + `&page=${n}&page_size=${l}&email=${f}`, y = await fetch(h, {
          method: "GET",
          //'POST',
          headers: {
            accept: "application/json",
            //'Content-Type': 'application/json',
            Authorization: `Bearer ${r.token}`
          }
          /*body: JSON.stringify({
              page,
              page_size: per_page,
              email: searchQuery
          })*/
        });
        if (!y.ok)
          throw new Error(`API error: ${y.status}`);
        return await y.json();
      } catch (h) {
        return console.error("Error fetching product list:", h), null;
      }
    }
    function o(n) {
      return n?.success ? n.data.users.map((l) => ({
        id: l.id,
        name: l.name,
        email: l.email,
        verified: l.verified ? "Yes" : "No",
        //set..
        actions: `<button class="copy-id-btn px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
                    <span class="flex items-center gap-1.5"> 
                        Copy ID
                    </span>
                </button>`
      })) : [];
    }
    async function c(n, l, f = 1) {
      const h = await d(f, i.value, l);
      if (h && h.success) {
        const y = o(h);
        try {
          if (!(y.length > 0))
            throw new Error("no more data..");
        } catch {
          return;
        }
        n._$p.data.curr.data.table.rows = y, O("msg", {
          type: "load_more",
          _p: n._p,
          _$p: n._$p,
          custom: {
            searchText: l,
            page: f
            //totalPages: total_pages,
            //found: found
          },
          where: {
            key: "id",
            value: "3e1bc78c-104f-4f6f-aa87-75"
          }
        });
      }
    }
    return J(() => {
      (async () => {
        let n = "", l = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-75",
              type: "table",
              slug: "table",
              data: {
                theme: e._$p.data.curr.data.theme,
                //"light",
                foo: {
                  txt: ""
                  /*apiResponse?.success 
                      ? `Found ${apiResponse.data.found} products in ${apiResponse.data.search_time_ms}ms - Page ${apiResponse.data.page} of ${apiResponse.data.total_pages}`
                      : "Product Directory - Search for products"*/
                },
                config: {
                  search: {
                    placeholder: "Search by email",
                    field: "name"
                  },
                  filter: {
                    label: "All Categories",
                    field: "category"
                  },
                  filterOptions: [
                    "Men",
                    "Women",
                    "Footwear",
                    "Apparel",
                    "Accessories"
                  ]
                },
                table: {
                  columns: [
                    /*{
                        title: "id",
                        field: "id",
                        hozAlign: "center",
                        width: 320,
                    },*/
                    {
                      title: "name",
                      field: "name",
                      hozAlign: "center",
                      width: 250
                    },
                    {
                      title: "email",
                      field: "email",
                      hozAlign: "center",
                      minWidth: 150
                    },
                    {
                      title: "verified",
                      field: "verified",
                      hozAlign: "center",
                      width: 110
                    },
                    {
                      title: "Actions",
                      field: "actions",
                      hozAlign: "center",
                      width: 270,
                      formatter: "html",
                      formatterParams: {
                        allowHTML: !0
                      },
                      cellClick: function(p, _) {
                        const E = _.getRow().getData().id;
                        navigator.clipboard.writeText(E).then(() => {
                          const g = p.target, w = g.innerText;
                          g.innerText = "Copied!", setTimeout(() => {
                            g.innerText = w;
                          }, 2e3);
                        }).catch((g) => {
                          console.error("Failed to copy:", g);
                          const w = document.createElement("textarea");
                          w.value = E, document.body.appendChild(w), w.select(), document.execCommand("copy"), document.body.removeChild(w);
                        });
                      }
                    }
                  ],
                  rows: []
                }
              }
            },
            {
              id: "3e1bc78c-aa87-search-panel",
              type: "search_panel",
              slug: "search_panel",
              data: {
                data: "",
                placeholder: "Search..",
                show_sugg: !1,
                size: "sm",
                //sm, md, xl
                class: "p-1 max-w-lg",
                //"p-1",
                sugg: [],
                map: {
                  title: "title",
                  label: "type"
                }
              }
            }
          ]
        };
        const f = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, h = await U(f), y = await V(f);
        (async () => F("msg", async (p) => {
          if (console.log("[ce_listen]", p), p.type == "load_more" && p._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (a.value += 1, c(p, t.value, a.value)), p.type == "search:query" && p._$p.data.curr.id == "3e1bc78c-aa87-search-panel") {
            O("msg", {
              type: "remove_all_rows",
              custom: {},
              where: {
                key: "id",
                value: "3e1bc78c-104f-4f6f-aa87-75"
              }
            }), a.value = 1, t.value = p._p.query, console.log(p._p);
            let _ = JSON.parse(JSON.stringify({
              data: {
                curr: l.l[0]
              }
            }));
            c({
              _$p: _,
              _p: e._p
            }, t.value, a.value), console.log();
          }
        }))(), await (async () => {
          const p = await h.set({
            data: l,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          n = p.style, s.value.html.table = p.r[0] || "", s.value.html.search_panel = p.r[1] || "";
          const _ = document.createElement("style");
          document.head.appendChild(_), _.innerHTML = n, setTimeout(async () => {
            const I = await y.set({
              data: l
            });
            console.log(I);
          }, 20);
        })();
      })();
    }), (n, l) => (v(), $(j, null, [
      s.value.html.search_panel ? (v(), $("div", G, [
        z("div", null, [
          z("div", {
            innerHTML: s.value.html.search_panel
          }, null, 8, Z)
        ])
      ])) : C("", !0),
      s.value.html.table ? (v(), $("div", X, [
        z("div", {
          innerHTML: s.value.html.table
        }, null, 8, Y)
      ])) : C("", !0)
    ], 64));
  }
}), Q = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const i = B(H, {
      _p: e,
      _$p: t
    }), s = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          e.f.call("msg", {
            type: "change",
            _p: e,
            _$p: t,
            custom: {}
          });
        }
      }
    }, r = document.getElementById(e.f.name("vue-root"));
    return i.mount(r), s;
  }
});
export {
  Q as hydrator,
  Q as index
};
