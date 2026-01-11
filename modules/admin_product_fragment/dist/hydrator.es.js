import { d as w, r as u, o as b, c as v, a as I, b as x, e as N, f as k } from "./runtime-dom.esm-bundler-DXfIk_T8.js";
import { ce_renderer as C, ce_hydrator as T, ce_listen as P, ce_call as j } from "content-engine-lib";
const z = { key: 0 }, A = ["innerHTML"], M = /* @__PURE__ */ w({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(c) {
    const s = u(null), f = u("Ni"), i = u(0), p = u(20), d = {
      url: "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=get_product_list",
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
    };
    async function h(r, e = 1, n = 20) {
      try {
        const t = await fetch(d.url, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${d.token}`
          },
          body: JSON.stringify({
            q: r,
            page: e,
            per_page: n
          })
        });
        if (!t.ok)
          throw new Error(`API error: ${t.status}`);
        return await t.json();
      } catch (t) {
        return console.error("Error fetching product list:", t), null;
      }
    }
    function y(r) {
      return !r || !r.success || !r.data || !r.data.products ? [] : r.data.products.map((e, n) => {
        const t = Math.min(...e.variant_prices), o = Math.max(...e.variant_prices), l = t === o ? `₹${t}` : `₹${t} - ₹${o}`;
        return {
          id: e.id,
          sku: `SKU-${e.id.slice(0, 8)}`,
          name: `<a href="#" class="text-blue-600 hover:underline font-medium">${e.title}</a>`,
          brand: `<span class="font-semibold text-gray-700">${e.brand}</span>`,
          category: e.category.join(", "),
          price: l,
          stock: e.variant_prices.length,
          rating: e._relevance_score ? (e._relevance_score * 5).toFixed(1) : "N/A",
          slug: `<span class="inline-flex items-center justify-center px-2 py-1 rounded text-xs font-bold border border-transparent bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">${e.category[0] || "Product"}</span>`
        };
      });
    }
    async function g(r, e, n = 1) {
      const t = await h(e, n, p.value);
      if (t && t.success) {
        const o = y(t);
        try {
          if (!(o.length > 0))
            throw new Error("no more data..");
        } catch {
          return;
        }
        const { found: l, total_pages: a, search_time_ms: m } = t.data;
        r._$p.data.curr.data.table.rows = o, j("msg", {
          type: "load_more",
          _p: r._p,
          _$p: r._$p,
          custom: {
            searchText: e,
            page: n,
            totalPages: a,
            found: l
          },
          where: {
            key: "id",
            value: "3e1bc78c-104f-4f6f-aa87-75"
          }
        });
      }
    }
    return b(() => {
      (async () => {
        let r = "", e = {
          l: [
            {
              id: "3e1bc78c-104f-4f6f-aa87-75",
              type: "table",
              slug: "table",
              data: {
                theme: c._$p.data.curr.data.theme,
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
                    {
                      title: "Product ID",
                      field: "id",
                      width: 150,
                      headerSort: !1
                    },
                    {
                      title: "Product Name",
                      field: "name",
                      widthGrow: 3,
                      minWidth: 250,
                      formatter: "html"
                    },
                    {
                      title: "Brand",
                      field: "brand",
                      widthGrow: 1,
                      minWidth: 120,
                      formatter: "html"
                    },
                    {
                      title: "Category",
                      field: "category",
                      widthGrow: 1,
                      minWidth: 150
                    },
                    {
                      title: "Price",
                      field: "price",
                      width: 140,
                      hozAlign: "right"
                    },
                    // {
                    //     "title": "Variants",
                    //     "field": "stock",
                    //     "width": 80,
                    //     "hozAlign": "center"
                    // },
                    // {
                    //     "title": "Score",
                    //     "field": "rating",
                    //     "width": 80,
                    //     "hozAlign": "center"
                    // },
                    {
                      title: "Type",
                      field: "slug",
                      formatter: "html",
                      widthGrow: 1,
                      minWidth: 110,
                      hozAlign: "center"
                    }
                  ],
                  rows: []
                  //apiRows
                }
              }
            }
          ]
        };
        const n = {
          lib: [],
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        }, t = await C(n), o = await T(n);
        (async () => P("msg", async (a) => {
          console.log("[ce_listen]", a), a.type == "load_more" && a._$p.data.curr.id == "3e1bc78c-104f-4f6f-aa87-75" && (i.value += 1, g(a, f.value, i.value));
        }))(), await (async () => {
          const a = await t.set({
            data: e
          });
          s.value = a.r || "", r = a.style;
          const m = document.createElement("style");
          document.head.appendChild(m), m.innerHTML = r, setTimeout(async () => {
            const _ = await o.set({
              data: e
            });
            console.log(_);
          }, 20);
        })();
      })();
    }), (r, e) => s.value ? (x(), v("div", z, [
      N("div", { innerHTML: s.value }, null, 8, A)
    ])) : I("", !0);
  }
}), J = async (c) => ({
  set: async (s) => {
    console.log(`--hydrator [${s.data.curr.type}]`);
    const i = k(M, {
      _p: c,
      _$p: s
    }), p = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          c.f.call("msg", {
            type: "change",
            _p: c,
            _$p: s,
            custom: {}
          });
        }
      }
    }, d = document.getElementById(c.f.name("vue-root"));
    return i.mount(d), p;
  }
});
export {
  J as hydrator,
  J as index
};
