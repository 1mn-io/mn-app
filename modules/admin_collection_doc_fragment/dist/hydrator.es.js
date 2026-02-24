import { d as R, o as A, a as b, c as v, b as I, e as z, F as D, r as x, f as P } from "./runtime-dom.esm-bundler-D2b0Kur0.js";
const T = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  })
}), C = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), E = async () => ({
  set: async (e) => {
    console.log("--theme");
    try {
      if (!e.el_id)
        throw new Error("[el_id] is required");
      const t = e.name, a = document.getElementById(e.el_id);
      if (!a)
        throw new Error("[el_id] is invalid");
      ((i) => {
        const l = (n) => {
          ((d) => {
            const o = d.getAttribute("data-ce");
            if (!o)
              return;
            const u = JSON.parse(o).filter((r) => r?.k.startsWith("t-"));
            if (u.length != 0)
              for (const r of u) {
                const c = r.k, s = r.v.split(" ");
                if (c == `t-${t}-class`)
                  for (const y of s)
                    d.classList.add(y);
                else
                  for (const y of s)
                    d.classList.remove(y);
              }
          })(n);
        };
        for (const n of i.getElementsByTagName("*"))
          l(n);
        l(i);
      })(a);
    } catch (t) {
      const a = `err: [theme] ${t}`;
      throw console.log(a), a;
    }
  }
});
function O(e, t = 1e3) {
  let a = {
    cnt: 0
  };
  return new Promise((i) => {
    const l = () => {
      console.log(`[setInterval] is running.. [count=${a.cnt}]`);
      try {
        e() && (clearInterval(n), i());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${t}]`);
      }
      a.cnt += 1;
    }, n = setInterval(() => {
      l();
    }, t);
    l();
  });
}
let U = class {
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
          (l) => l(i)
        );
      }
  };
};
const j = () => new U();
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
let f = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (e) => {
      const t = e?.lib || [];
      for (const [a, i] of t.entries()) {
        const l = i, n = `${l.name}:${e.run_from}`, d = `${e.run_from}_src`;
        let o = l[d];
        const u = `${e.run_from}_src`;
        let r = e?.lazy_lib?.[u] || null;
        if (r && (r = r.replace("{*}", `${l.name}`)), console.log(`_lazy_src: ${r}`), console.log(`_src: ${o}`), f.lib.l.hasOwnProperty(`${n}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(o) && o.includes("/") == !1 && f.lib.inbuilt_lib.indexOf(`${l.name}`) === -1)
            if (r)
              o = r;
            else
              throw `[lib-name=${l.name},lib-src=${o}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (o.startsWith("./") || o.startsWith("../")) {
            const c = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            f.lib.l[`${n}`] = {
              lib: c,
              src: o
            };
          }
          if (o.startsWith("http://") || o.startsWith("https://")) {
            const c = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${o}`
            );
            f.lib.l[`${n}`] = {
              lib: c,
              src: o
            };
          }
        }
      }
      console.log(await f.lib.get_all({}));
    },
    get: async (e) => {
      let t = null;
      const a = `${e.name}:${e.run_from}`;
      return f.lib.l.hasOwnProperty(`${a}`) == !1 && await f.lib.set({
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
      }), t = f.lib.l[`${a}`], t;
    },
    get_all: async (e) => f.lib.l
  },
  path: {
    set: (e) => {
      let t = "", a = "";
      const i = e.src.split("/");
      if (e.src.indexOf("://localhost") !== -1 || e.src.indexOf("://127.0.0.1") !== -1 || (a = "/dist"), i.indexOf(e.type) !== -1)
        for (const [l, n] of i.entries()) {
          let d = l == 0 ? "" : "/";
          if (t += `${d}${n}`, n == e.type)
            return `${t}${a}${e.name}`;
        }
      else
        for (const [l, n] of i.entries()) {
          let d = l == 0 ? "" : "/";
          if (t += `${d}${n}`, n == "src")
            return `${t}${a}${e.name}`;
        }
      return `${t}${a}${e.name}`;
    }
  }
};
const L = j(), S = j(), B = L.on, k = L.emit, V = S.emit, Z = S.on, X = async (e) => {
  const t = await C();
  return await f.lib.set({ lib: e.lib, run_from: "renderer", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--renderer [set]"), a.return = a?.return || {}, a.return.r = a?.return?.r || "full";
      const i = new J();
      i.start();
      let l = a.data?.value?.l || a.data.l, n = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return a.return.r == "full" ? n.r = "" : n.r = [], await (async () => {
        for (const d of l) {
          const o = await await f.lib.get({ name: d.type, run_from: "renderer", lazy_lib: e.lazy_lib }), u = await (await o.lib.index({
            f: {
              name: (r) => t.f.name({ id: d.id, name: r }),
              get_lib: async (r) => await await f.lib.get({ name: r.name, run_from: r.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (r) => await (await E()).set(r),
              path: (r) => f.path.set({ src: o.src, type: d.type, name: r }),
              //set..
              uuid: () => T().set(),
              wait_until: O
            }
          })).set(
            {
              data: {
                curr: d
              }
            }
            /*_$cb*/
          );
          a?.return?.r == "full" ? n.r += u?.r || "" : n.r.push(u?.r || ""), n.style += u?.style || "", n.head += u?.head || "";
        }
      })(), i.stop(), n.benchmark = i.result(), n;
    }
  };
}, G = async (e) => {
  const t = await C();
  return await f.lib.set({ lib: e.lib, run_from: "hydrator", lazy_lib: e.lazy_lib }), {
    set: async (a) => {
      console.log("--hydrator [set]");
      const i = new J();
      i.start();
      let l = {
        r: "",
        style: ""
      }, n = {
        style_id: `${T().set()}_stl`
      }, d = a.data?.value?.l || a.data.l;
      const o = async () => {
        for (const u of d) {
          const r = await await f.lib.get({ name: u.type, run_from: "hydrator", lazy_lib: e.lazy_lib }), c = r.lib, s = j(), y = s.on, $ = await (await c.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (h) => t.f.name({ id: u.id, name: h }),
              get_lib: async (h) => await await f.lib.get({ name: h.name, run_from: h.run_from, lazy_lib: e.lazy_lib }),
              set_theme: async (h) => await (await E()).set(h),
              path: (h) => f.path.set({ src: r.src, type: u.type, name: h }),
              //set..
              uuid: () => T().set(),
              wait_until: O,
              //set..
              call: V,
              listen: y,
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
          B("msg", async (h) => {
            try {
              if (Object.keys(h.where || {}).length == 0) {
                await s.emit("msg", h);
                return;
              }
            } catch {
            }
            try {
              if (u?.[h.where?.key || ""] == h.where?.value) {
                await s.emit("msg", h);
                return;
              }
            } catch {
            }
          }), l.style += $.style;
        }
      };
      await O(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await o();
      try {
        ((u) => {
          const r = document.getElementById(`${n.style_id}`);
          r && r.remove();
          const c = document.createElement("style");
          c.id = `${n.style_id}`, c.innerHTML = `${l.style}`, u.appendChild(c);
        })(document.head);
      } catch (u) {
        console.log(`${u}, Failed to set style..`);
      }
      return i.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: i.result()
      };
    }
  };
}, W = { class: "pb-3 pt-3 pl-3 pr-3 sticky top-0 bg-white z-10 flex justify-between items-center" }, F = ["innerHTML"], Y = ["innerHTML"], q = { key: 0 }, H = ["innerHTML"], Q = { key: 1 }, K = ["innerHTML"], ee = /* @__PURE__ */ R({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(e) {
    let t = x(1);
    const a = x(null), i = x(null), l = x(null), n = x({
      html: {
        table: null,
        search_panel: null,
        form_autocomplete: null,
        dialog: null
      }
    }), d = {
      //url: 'https://fastapi.dryutil.1mn.io/client/api/i/ona/file_storage?typ=cloudinary&opr=search',
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function o(c) {
      try {
        const s = await fetch(
          "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_collection",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${d.token}`
            },
            body: JSON.stringify({
              collection: c,
              body: {
                q: "*",
                query_by: "",
                page: t.value,
                per_page: 20
              }
            })
          }
        );
        if (!s.ok) throw new Error(s.statusText);
        return await s.json();
      } catch (s) {
        return console.error(s), null;
      }
    }
    async function u(c, s) {
      try {
        const y = await fetch(
          "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=delete_collection_doc",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${d.token}`
            },
            body: JSON.stringify({
              collection: c,
              body: {
                q: s,
                query_by: "title",
                prioritize_exact_match: !0,
                prefix: !0
              }
            })
          }
        );
        if (!y.ok) throw new Error(y.statusText);
        return await y.json();
      } catch (y) {
        return console.error(y), null;
      }
    }
    function r(c) {
      return !c?.success || !c?.data?.documents ? [] : c.data.documents.map((s) => ({
        id: s.id,
        json: JSON.stringify(s, null, 2),
        // full object
        action: `
      <div class="flex items-center justify-center gap-4">
        <button class="edit-btn px-2 py-1 rounded bg-green-100 text-green-700" data-id="${s.id}">Edit</button>
        <button class="delete-btn px-2 py-1 rounded bg-red-100 text-red-700" data-title="${s.title}">Delete</button>
      </div>
      `
      }));
    }
    return A(() => {
      (async () => {
        let c = "", s = {
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
                    { title: "Id", field: "id", width: 320 },
                    { title: "Json", field: "json" },
                    { title: "Action", field: "action", formatter: "html", hozAlign: "center", width: 160 }
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
              id: "9568c-form_autocomplete",
              type: "form_autocomplete",
              slug: "form_autocomplete",
              data: {
                placeholder: "Select a collection",
                optionLabel: "name",
                showClear: !1,
                dropdown: !0,
                appendTo: "body",
                value: {},
                options: [],
                style: { width: "12rem" },
                api: {
                  url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=list_collection",
                  method: "post",
                  rsp_path: "json.collections",
                  body: {},
                  headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    //"Authorization": "Bearer <localStorage.token>"
                    Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
                  }
                }
              }
            },
            {
              id: "dialog-edit",
              type: "dialog",
              slug: "dialog",
              data: {
                label: "Product JSON Edit",
                visible: !1,
                modal: !0,
                class: "w-[90vw]",
                positive: { label: "Ok" },
                negative: { label: "Cancel" },
                content: {
                  ce_file: {
                    config: {
                      lazy_lib: {
                        renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
                        hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
                        editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
                      }
                    },
                    data: {
                      l: [
                        // form json edit section
                        {
                          id: "section-form_json",
                          type: "form_section",
                          slug: "form_section",
                          data: {
                            label: "Product JSON",
                            l: [],
                            theme: "light"
                          }
                        },
                        {
                          id: "form_json",
                          type: "form_json",
                          slug: "form_json",
                          data: {
                            form: { section_id: "section-form_json" },
                            value: {},
                            class: "w-full h-[100px]"
                          }
                        }
                      ]
                    }
                  }
                  //value: "<div>Are you sure you want to delete?</div>"
                }
              }
            },
            {
              id: "dialog-delete",
              type: "dialog",
              slug: "dialog",
              data: {
                label: "Delete Product",
                visible: !1,
                modal: !0,
                class: "w-sm md:w-md",
                positive: { label: "Ok" },
                negative: { label: "Cancel" },
                content: {
                  ce_file: {
                    config: {
                      lazy_lib: {
                        renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
                        hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
                        editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
                      }
                    },
                    data: {}
                  },
                  value: "<div>Are you sure you want to delete?</div>"
                }
              }
            }
          ]
        };
        const y = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
          }
        }, $ = await X(y), h = await G(y);
        (async () => Z("msg", async (m) => {
          if (console.log("[ce_listen]", m), m.type === "load_more" && m._$p.data.curr.id === "3e1bc78c-104f-4f6f-aa87-75" && a.value) {
            t.value++;
            const p = await o(a.value);
            if (!p?.success) return;
            const _ = r(p);
            s.l[0].data.table.rows.push(..._);
            const g = { data: { curr: s.l[0] } };
            k("msg", {
              type: "load_more",
              _p: e._p,
              _$p: g,
              where: { key: "id", value: "3e1bc78c-104f-4f6f-aa87-75" }
            });
          }
          if (m.type === "autocomplete:select" && m._$p.data.curr.id === "9568c-form_autocomplete") {
            const p = m.custom?.selectedValue?.name;
            if (!p) return;
            t.value = 1, a.value = p;
            const _ = await o(p);
            if (!_?.success) return;
            const g = r(_);
            k("msg", {
              type: "remove_all_rows",
              where: { key: "id", value: "3e1bc78c-104f-4f6f-aa87-75" }
            }), s.l[0].data.table.rows = g;
            const N = { data: { curr: s.l[0] } };
            k("msg", {
              type: "load_more",
              _p: e._p,
              _$p: N,
              where: { key: "id", value: "3e1bc78c-104f-4f6f-aa87-75" }
            });
          }
          if (m.type === "btn:positive" && m._$p.data.curr.id === "dialog-delete") {
            const p = await u(a.value, l.value);
            if (!p?.success) return;
            console.log("api success", p), s.l[0].data.table.rows = s.l[0].data.table.rows.filter((_) => _.title !== l.value), l.value = null;
          }
        }))(), await (async () => {
          const m = await $.set({
            data: s,
            return: {
              r: "chunk"
              //full, chunk
            }
          });
          c = m.style, n.value.html.table = m.r[0] || "", n.value.html.search_panel = m.r[1] || "", n.value.html.form_autocomplete = m.r[2] || "", n.value.html.dialog = (m.r[3] || "") + (m.r[4] || "");
          const p = document.createElement("style");
          document.head.appendChild(p), p.innerHTML = c, setTimeout(async () => {
            const _ = await h.set({
              data: s
            });
            console.log(_);
          }, 20);
        })(), document.addEventListener("click", async (m) => {
          const p = m.target.closest(".edit-btn");
          if (!p) return;
          const _ = p.dataset.id;
          if (!_) return;
          const g = s.l[0].data.table.rows.find((w) => w.id === _);
          if (!g) return;
          i.value = g.json;
          const M = s.l.find((w) => w.id === "dialog-edit").data.content.ce_file.data.l.find((w) => w.id === "form_json");
          M.data.value = JSON.parse(g.json), k("msg", {
            type: "open",
            where: { key: "id", value: "dialog-edit" }
          }), await h.set({
            data: { l: [s.l.find((w) => w.id === "dialog-edit")] }
          });
        }), document.addEventListener("click", async (m) => {
          const p = m.target.closest(".delete-btn");
          if (!p) return;
          const _ = p.dataset.title;
          _ && (l.value = _, k("msg", {
            type: "open",
            where: { key: "id", value: "dialog-delete" }
          }));
        });
      })();
    }), (c, s) => (b(), v(D, null, [
      I("div", W, [
        n.value.html.search_panel ? (b(), v("div", {
          key: 0,
          innerHTML: n.value.html.search_panel
        }, null, 8, F)) : z("", !0),
        n.value.html.form_autocomplete ? (b(), v("div", {
          key: 1,
          innerHTML: n.value.html.form_autocomplete
        }, null, 8, Y)) : z("", !0)
      ]),
      n.value.html.table ? (b(), v("div", q, [
        I("div", {
          innerHTML: n.value.html.table
        }, null, 8, H)
      ])) : z("", !0),
      n.value.html.dialog ? (b(), v("div", Q, [
        I("div", {
          innerHTML: n.value.html.dialog
        }, null, 8, K)
      ])) : z("", !0)
    ], 64));
  }
}), ne = async (e) => ({
  set: async (t) => {
    console.log(`--hydrator [${t.data.curr.type}]`);
    const i = P(ee, {
      _p: e,
      _$p: t
    }), l = {
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
    }, n = document.getElementById(e.f.name("vue-root"));
    return i.mount(n), l;
  }
});
export {
  ne as hydrator,
  ne as index
};
