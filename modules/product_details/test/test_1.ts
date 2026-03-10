import { ce_renderer, ce_hydrator } from "content-engine-lib";
import axios from "axios";

const _ENV = `dev`;

const TOKEN = localStorage.token || "";
let dynamicProducts = [];

(async () => {

  // fetch products for widget
  try {
    const res = await axios.post(
      "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/product_dir?typ=get_product_list",
      { q: "_", page: 1, per_page: 10 },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`
        }
      }
    );

    dynamicProducts =
      res.data?.data?.products ||
      res.data?.data ||
      [];

  } catch (e) {
    console.warn("product list fetch failed", e);
  }

  let _html = ``;
  let _css_server = ``;
  let _css_client = ``;
  let _editor_html = ``;
  let _editor_css_client = ``;

  // === 1. REAL MOCK DATA (PUMA PRODUCT) ===
  let _data = {
    l: [
      {
        "id": "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
        "type": "sample",
        "data": {

          "product_list_widget": {
            "id": "8c-product_list_widget",
            "type": "product_list_widget",
            "slug": "product_list_widget",
            "data": {
              "data": "",
              "mode": "prod",
              "title": {
                "value": "You might also like",
                "class": "font-bold text-2xl tracking-tight text-slate-900"
              },
              "oriantation": "h",

              "cart_popup": {
                "ce_file": {
                  "config": {
                    "lazy_lib": {
                      "renderer_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
                      "hydrator_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
                      "editor_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
                    }
                  },
                  "data": {
                    "l": [
                      {
                        "id": "3e1bc78c-cart_popup",
                        "type": "cart_popup",
                        "slug": "cart_popup",
                        "data": {
                          "data": "",
                          "theme": "light",
                          "env": "prod",
                          "api": {
                            "0": { "url": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/product_dir?typ=view_product" },
                            "1": { "url": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management" },
                            "token": `Bearer ${TOKEN}` // Fixed: Now correctly uses the token variable
                          }
                        }
                      }
                    ]
                  }
                }
              },

              "event": {
                "onProductClick": "/product/{slug}"
              },

              "value": {
                "l": dynamicProducts
              },

              "map": {},

              "api": {
                "url": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/product_dir?typ=get_product_list",
                "method": "POST",
                "body": { "q": "<q>", "page": "<page>", "per_page": 20 },
                "rsp_path": "json.data",
                "headers": {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${TOKEN}`
                }
              }
            }
          },

          "document": {
            "id": "Puma__727",
            "title": "Puma Striped Linen Collar Casual",
            "brand": "Puma",
            "variant_prices": [921],
            "variant_mrp": [1830],
            "field_value": ["<ul><li>T-shirt for men</li><li>Typography printed</li></ul>"],
            "size": ["XS", "L", "XL"],
            "metadata": "{\"color\":[{\"id\":\"Green\",\"image\":[{\"url\":\"https://via.placeholder.com/400x500\"}]}]}"
          }

        }
      }
    ]
  };

  console.log(_data.l[0]);
  

  const _cnf = {
    lib: [
      _ENV == `dev`
        ? {
            name: `sample`,
            renderer_src: `http://localhost:5173/src/renderer/index.ts`,
            hydrator_src: `http://localhost:5173/src/hydrator/index.ts`,
            editor_src: `http://localhost:5173/src/editor/index.ts`
          }
        : {
            name: `sample`,
            renderer_src: `http://localhost:5173/dist/renderer.es.js`,
            hydrator_src: `http://localhost:5173/dist/hydrator.es.js`,
            editor_src: `http://localhost:5173/dist/editor.es.js`
          }
    ]
  };

  const _ce_renderer = await ce_renderer(_cnf);
  const _ce_hydrator = await ce_hydrator(_cnf);

  const _run = async () => {

    const _ce_renderer_rsp = await _ce_renderer.set({
      data: _data
    });

    _html = _ce_renderer_rsp.r || "";
    _css_server = _ce_renderer_rsp.style || "";

    setTimeout(async () => {

      const _ce_hydrator_rsp = await _ce_hydrator.set({
        data: _data
      });

      _css_client = _ce_hydrator_rsp?.style || "";

      const styleEl = document.getElementById("app__s_t_y_l_e");
      if (styleEl) styleEl.innerHTML += _css_client;

    }, 200);

    ((mE_a, mE_h, _a, _b, _c) => {
      
      // Safety check: Ensure the #app container exists before trying to append to it
      if (!mE_a) {
        console.warn("Container element with id 'app' not found in DOM.");
        return;
      }

      const mE_s =
        document.getElementById(_a) ||
        (() => {
          let e = document.createElement("style");
          e.id = _a;
          mE_h.appendChild(e);
          return e;
        })();

      const mE_preview =
        document.getElementById(_c) ||
        (() => {
          let e = document.createElement("div");
          e.id = _c;
          mE_a.appendChild(e);
          return e;
        })();

      mE_s.innerHTML = `
        ${_css_server}
        ${_css_client}
      `;

      mE_preview.innerHTML = `
        <div>
          <div>${_html}</div>
        </div>
      `;

    })(document.getElementById("app"), document.head, `app__s_t_y_l_e`, `app__l_o_g`, `app__p_r_e_v_i_e_w`);
  };

  await _run();

})();