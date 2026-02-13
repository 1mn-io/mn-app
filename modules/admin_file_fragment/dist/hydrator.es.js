import { d as j, o as D, a as g, c as v, b as x, e as T, F as S, r as $, f as B } from "./runtime-dom.esm-bundler-Cyp0UzkF.js";
const E = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), O = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), L = async () => ({
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
          ((c) => {
            const o = c.getAttribute("data-ce");
            if (!o)
              return;
            const d = JSON.parse(o).filter((l) => l?.k.startsWith("t-"));
            if (d.length != 0)
              for (const l of d) {
                const _ = l.k, u = l.v.split(" ");
                if (_ == `t-${t}-class`)
                  for (const h of u)
                    c.classList.add(h);
                else
                  for (const h of u)
                    c.classList.remove(h);
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
function A(e, t = 1e3) {
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
let J = class {
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
const z = () => new J();
class C {
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
    set: async (e) => {
      const t = e?.lib || [];
      for (const [a, i] of t.entries()) {
        const s = i, r = `${s.name}:${e.run_from}`, c = `${e.run_from}_src`;
        let o = s[c];
        const d = `${e.run_from}_src`;
        let l = e?.lazy_lib?.[d] || null;
        if (l && (l = l.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${l}`), console.log(`_src: ${o}`), p.lib.l.hasOwnProperty(`${r}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && p.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (l)
              o = l;
            else
              throw `[lib-name=${s.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const _ = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            p.lib.l[`${r}`] = {
              lib: _,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const _ = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            p.lib.l[`${r}`] = {
              lib: _,
              src: o
            };
          }
        }
      }
      console.log(await p.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return p.lib.l.hasOwnProperty(`${a}`) == !1 && await p.lib.set({
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
      }), t = p.lib.l[`${a}`], t;
    },
    get_all: async (e) => p.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const i = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), i.indexOf(e.type) !== -1)
        for (const [s, r] of i.entries()) {
          let c = s == 0 ? "" : "/";
          if (t += `${c}${r}`, r == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [s, r] of i.entries()) {
          let c = s == 0 ? "" : "/";
          if (t += `${c}${r}`, r == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const N = z(), M = z(), P = N.on, I = N.emit, W = M.emit, F = M.on, U = async (e) => {
  const t = await O();
  return await p.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const i = new C();
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
        for (const c of s) {
          const o = await await p.lib.get({ name: c.type, run_from: "renderer", lazy_lib: e.lazy_lib }), d = await (await o.lib.index({
            f: {
              name: (l) => t.f.name({ id: c.id, name: l }),
              get_lib: async (l) => await await p.lib.get({ name: l.name, run_from: l.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (l) => await (await L()).set(l),
              path: (l) => p.path.set({ src: o.src, type: c.type, name: l }),
              //set..
              uuid: () => E().set(),
              wait_until: A
            }
          })).set(
            {
              data: {
                curr: c
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? r.r += d?.r || "" : r.r.push(d?.r || ""), r.style += d?.style || "", r.head += d?.head || "";
        }
      })(), i.stop(), r.benchmark = i.result(), r;
    }
  };
}, V = async (e) => {
  const t = await O();
  return await p.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const i = new C();
      i.start();
      let s = {
        r: "",
        style: ""
      }, r = {
        style_id: `${E().set()}_stl`
      }, c = a.data?.value?.l || a.data.l;
      const o = async () => {
        for (const d of c) {
          const l = await await p.lib.get({ name: d.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), _ = l.lib, u = z(), h = u.on, m = await (await _.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (n) => t.f.name({ id: d.id, name: n }),
              get_lib: async (n) => await await p.lib.get({ name: n.name, run_from: n.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (n) => await (await L()).set(n),
              path: (n) => p.path.set({ src: l.src, type: d.type, name: n }),
              //set..
              uuid: () => E().set(),
              wait_until: A,
              //set..
              call: W,
              listen: h,
              //set..
              new_emitter: () => z()
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          P("msg", async (n) => {
            try {
              if (Object.keys(n.where || {}).length == 0) {
                await u.emit("msg", n);
                return;
              }
            } catch {
            }
            try {
              if (d?.[n.where?.key || ""] == n.where?.value) {
                await u.emit("msg", n);
                return;
              }
            } catch {
            }
          }), s.style += m.style;
        }
      };
      await A(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((d) => {
          const l = document.getElementById(`${r.style_id}`);
          l && l.remove();
          const _ = document.createElement("style");
          _.id = `${r.style_id}`, _.innerHTML = `${s.style}`, d.appendChild(_);
        })(document.head);
      } catch (d) {
        console.log(`${d}, Failed to set style..`);
      }
      return i.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: i.result()
      };
    }
  };
}, Z = {
  key: 0,
  class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10"
}, G = ["innerHTML"], H = { key: 1 }, X = ["innerHTML"], Y = { key: 2 }, q = ["innerHTML"], Q = /* @__PURE__ */ j({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    const t = $(""), a = $(null), i = $(!1);
    let s = null;
    const r = $({
      html: {
        table: null,
        search_panel: null,
        dialog: null
      }
    }), c = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/file_storage?typ=cloudinary&opr=search",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function o(u = "", h = null) {
      try {
        const m = {
          expression: u,
          max_results: 20
        };
        h && (m.next_cursor = h);
        const n = await fetch(c.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${c.token}`
          },
          body: JSON.stringify(m)
        });
        if (!n.ok) throw new Error(n.statusText);
        return await n.json();
      } catch (m) {
        return console.error(m), null;
      }
    }
    async function d(u, h) {
      try {
        const m = new FormData();
        m.append("public_id", u), m.append("invalidate", "true");
        const n = `https://fastapi.dryutil.1mn.io/client/api/i/ona/file_storage?typ=cloudinary&opr=delete_file&resource_type=${h}`, b = await fetch(n, {
          method: "DELETE",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${c.token}`
          },
          body: m
        });
        if (!b.ok) throw new Error(b.statusText);
        return await b.json();
      } catch (m) {
        return console.error("Delete error:", m), null;
      }
    }
    function l(u, h) {
      if (!u?.success) return [];
      const m = h._$p.data.curr.data.table.rows.length || 0;
      return u.data.resources.map((n, b) => ({
        id: n.asset_id,
        sno: m + b + 1,
        asset_id: n.asset_id,
        public_id: n.public_id,
        resource_type: n.resource_type,
        url: `<a href="${n.secure_url || n.url}" target="_blank" class="text-blue-600 hover:underline">${n.secure_url || n.url}</a>`,
        //status: r.status
        status: n.status === "active" ? '<button class="px-2 py-1 rounded bg-emerald-100 text-emerald-700">Active</button>' : '<button class="px-2 py-1 rounded bg-red-100 text-red-700">Active</button>',
        action: `<button class="delete-btn px-2 py-1 rounded bg-red-100 text-red-700 " data-public_id="${n.public_id}" data-url="${n.secure_url || n.url}" data-resource_type="${n.resource_type}">Delete</button>
`
      }));
    }
    async function _(u, h, m = !1) {
      if (i.value && !m) return;
      m && (a.value = null, i.value = !1);
      const n = await o(h, a.value);
      if (!n?.success) return;
      const b = l(n, u);
      if (!b.length) {
        i.value = !0;
        return;
      }
      u._$p.data.curr.data.table.rows.push(...b), a.value = n.data.next_cursor || null, a.value || (i.value = !0), I("msg", {
        type: "load_more",
        _p: u._p,
        _$p: u._$p,
        where: {
          key: "id",
          value: "3e1bc78c-104f-4f6f-aa87-75"
        }
      });
    }
    return D(() => {
      (async () => {
        let u = "", h = {
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
                    placeholder: "Search Products (e.g., Nike shirts, Adidas shoes)...",
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
                    { title: "#", field: "sno", hozAlign: "center", width: 60 },
                    { title: "Asset ID", field: "asset_id", width: 300, hozAlign: "left" },
                    { title: "Public ID", field: "public_id", width: 300, hozAlign: "left" },
                    { title: "Resource Type", field: "resource_type", width: 150, hozAlign: "left" },
                    { title: "URL", field: "url", formatter: "html", minWidth: 320, hozAlign: "left" },
                    { title: "Status", field: "status", formatter: "html", hozAlign: "center", width: 120 },
                    { title: "Action", field: "action", formatter: "html", hozAlign: "center", width: 120 }
                  ],
                  rows: []
                  //apiRows
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
            },
            {
              id: "dialog-cnf_delete",
              type: "dialog",
              slug: "dialog",
              data: {
                label: "Confirm Delete",
                visible: !1,
                modal: !0,
                class: "w-sm md:w-md",
                positive: { label: "Ok" },
                negative: { label: "Cancel" },
                content: {
                  value: "<div>Are you sure you want to delete?</div>"
                }
              }
            }
          ]
        };
        const m = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, n = await U(m), b = await V(m);
        (async () => F("msg", async (y) => {
          if (y.type === "load_more" && y._$p.data.curr.id === "3e1bc78c-104f-4f6f-aa87-75" && _(y, t.value), y.type === "search:query" && y._$p.data.curr.id === "3e1bc78c-aa87-search-panel") {
            const f = y._p.query?.trim();
            if (!f)
              t.value = "";
            else if (f.includes(":"))
              t.value = f;
            else if (f.includes("/")) {
              const k = f.endsWith("/") ? f : f + "/";
              t.value = `public_id:${k}*`;
            } else
              t.value = `public_id:${f}*`;
            I("msg", {
              type: "remove_all_rows",
              where: { key: "id", value: "3e1bc78c-104f-4f6f-aa87-75" }
            });
            const w = {
              data: { curr: h.l[0] }
            };
            _(
              { _p: e._p, _$p: w },
              t.value,
              !0
            );
          }
          if (y.type === "btn:positive" && y._$p.data.curr.id === "dialog-cnf_delete") {
            if (!s) return;
            await d(s.public_id, s.resource_type);
          }
        }))(), await (async () => {
          const y = await n.set({
            data: h,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          u = y.style, r.value.html.table = y.r[0] || "", r.value.html.search_panel = y.r[1] || "", r.value.html.dialog = y.r[2] || "";
          const f = document.createElement("style");
          document.head.appendChild(f), f.innerHTML = u, setTimeout(async () => {
            const w = await b.set({
              data: h
            });
            console.log(w);
          }, 20);
        })(), document.addEventListener("click", (y) => {
          const f = y.target.closest(".delete-btn");
          if (!f) return;
          const w = f.dataset.public_id, k = f.dataset.url, R = f.dataset.resource_type;
          s = { public_id: w, url: k, resource_type: R }, I("msg", {
            type: "open",
            custom: {},
            _$p: {},
            _p: {},
            where: { key: "id", value: "dialog-cnf_delete" }
          });
        });
      })();
    }), (u, h) => (g(), v(S, null, [
      r.value.html.search_panel ? (g(), v("div", Z, [
        x("div", null, [
          x("div", {
            innerHTML: r.value.html.search_panel
          }, null, 8, G)
        ])
      ])) : T("", !0),
      r.value.html.table ? (g(), v("div", H, [
        x("div", {
          innerHTML: r.value.html.table
        }, null, 8, X)
      ])) : T("", !0),
      r.value.html.dialog ? (g(), v("div", Y, [
        x("div", {
          innerHTML: r.value.html.dialog
        }, null, 8, q)
      ])) : T("", !0)
    ], 64));
  }
}), te = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const i = B(Q, {
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
  te as hydrator,
  te as index
};
