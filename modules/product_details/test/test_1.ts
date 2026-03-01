import { ce_renderer, ce_hydrator, ce_editor } from "content-engine-lib";

const _ENV = `dev`; 

(async () => {
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
        "type": "sample", // Matches the 'name' in your _cnf below
        "data": {
           // This structure matches what we expect in index.vue: product.document
           "document": {
              "id": "Puma__727",
              "title": "Puma Striped Linen Collar Casual",
              "brand": "Puma",
              "variant_prices": [921],
              "variant_mrp": [1830],
              "field_value": ["<ul><li>T-shirt for men</li><li>Typography printed</li></ul>"],
              "size": ["XS", "L", "XL"],
              // Simplified metadata for demo
              "metadata": "{\"color\":[{\"id\":\"Green\",\"image\":[{\"url\":\"https://via.placeholder.com/400x500\"}]}]}"
           }
        },
      }
    ]
  };

  const _cnf = {
    lib: [
      _ENV == `dev` ? {
        name: `sample`,
        // Ensure these paths point to your actual files
        renderer_src: `http://localhost:5173/src/renderer/index.ts`,
        hydrator_src: `http://localhost:5173/src/hydrator/index.ts`,
        editor_src: `http://localhost:5173/src/editor/index.ts`,
      } : {
        name: `sample`,
        renderer_src: `http://localhost:5173/dist/renderer.es.js`,
        hydrator_src: `http://localhost:5173/dist/hydrator.es.js`,
        editor_src: `http://localhost:5173/dist/editor.es.js`,
      }
    ]
  };

  // set instances
  const _ce_renderer = await ce_renderer(_cnf);
  const _ce_hydrator = await ce_hydrator(_cnf);

  const _run = async () => {
    // === 2. RENDERER STEP ===
    // The renderer needs to output the wrapper div with the ID expected by hydrator
    const _ce_renderer_rsp = await _ce_renderer.set({
      data: _data
    });
    
    // NOTE: Ensure your renderer/index.ts outputs something like:
    // <div id="${_p.f.name('vue-root')}"></div>
    // If your renderer is empty, you might see nothing.
    
    _html = _ce_renderer_rsp.r;
    _css_server = _ce_renderer_rsp.style;

    // === 3. HYDRATOR STEP (CLIENT SIDE) ===
    setTimeout(async () => {
      const _ce_hydrator_rsp = await _ce_hydrator.set({
        data: _data
      });
      _css_client = _ce_hydrator_rsp.style;
      
      // Update styles dynamically
      const styleEl = document.getElementById("app__s_t_y_l_e");
      if(styleEl) styleEl.innerHTML += _css_client;
      
    }, 200);

    // === 4. UPDATE DOM ===
    ((mE_a, mE_h, _a, _b, _c) => {
      const mE_s = document.getElementById(_a) || (() => { let e = document.createElement("style"); e.id = _a; mE_h.appendChild(e); return e; })();
      const mE_preview = document.getElementById(_c) || (() => { let e = document.createElement("div"); e.id = _c; mE_a!.appendChild(e); return e; })();

      mE_s!.innerHTML = `
        ${_css_server}
        ${_css_client}
      `;

      mE_preview!.innerHTML = `
        <div>
          
          <div> ${_html} </div> 
        </div>
      `;

    })(document.getElementById("app"), document.head, `app__s_t_y_l_e`, `app__l_o_g`, `app__p_r_e_v_i_e_w`);
  };

  await _run();
})();