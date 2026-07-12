console.log(`test_0`); // collage_base + form
import { ce_renderer, ce_hydrator, ce_listen, ce_call } from "content-engine-lib";
const _ENV = `dev`; //import.meta.env.VITE_ENV;

//set..
(async () => {
  //set vars..
  let _html = ``;
  let _css_server = ``;
  let _css_client = ``;
  //set..
  let _editor_html = ``;
  let _editor_css_client = ``;
  let _form_html = ``;
  let _form_css_client = ``;

  // ── _data: single source of truth ───────────────────────────────────────
  // Same object reference gets handed to renderer, hydrator AND custom below.
  // The form (custom/src/form.vue) mutates `l[0].data.l` (Collage[]) directly
  // via reactive() — no event, no broadcast, no localStorage round-trip
  // needed to keep renderer/hydrator in sync.
  let _data = {
    l: [
      {
        "id": "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
        "type": "sample",
        "data": {
          "mode": "static" | "api", // "static" | "api" — form.vue reads/writes this on its mode toggle
          "l": [
            {
              "id": "n7em2yth",
              "name": "Men",
              "type": "sample",
              "theme": "light",
              "headerMode": "normal",
              "items": [],
              "expanded": false
            },
            {
              "id": "3quyekgi",
              "name": "Women",
              "type": "sample",
              "theme": "light",
              "headerMode": "normal",
              "items": [],
              "expanded": false
            },
            {
              "id": "ognq8hhs",
              "name": "Beauty",
              "type": "sample",
              "theme": "light",
              "headerMode": "normal",
              "items": [],
              "expanded": false
            },
            {
              "id": "yk14kawg",
              "name": "Kids",
              "type": "sample",
              "theme": "light",
              "headerMode": "normal",
              "items": [],
              "expanded": false
            },
            {
              "id": "jde9zokf",
              "name": "Home",
              "type": "sample",
              "theme": "light",
              "headerMode": "normal",
              "items": [],
              "expanded": false
            },
            {
              "id": "wbkdciex",
              "name": "New",
              "type": "sample",
              "theme": "light",
              "headerMode": "normal",
              "items": [
                {
                  "id": "u6i68c2h",
                  "title": "Shoe",
                  "imageUrl": "",
                  "imageUrlMobile": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOe1nXR7gESvQ6WeaWuY0CtPEVn26nLtHw3o3DZsYGg&s=10",
                  "fullWidth": false,
                  "manual": false
                },
                {
                  "id": "penmxuj2",
                  "title": "Shirt",
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEA3G12SrovhHRKSoXRWMgDwgVfl9UbIjKRvzsem81EQ&s=10",
                  "imageUrlMobile": "",
                  "fullWidth": false,
                  "manual": false
                }
              ],
              "expanded": false
            }
          ] as any[], // ALL products, always — never swapped out or emptied here
          "api": {
            "url": "http://localhost:4000/v1/collages", // TODO: replace with real endpoint
            "method": "GET",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "Bearer <token>", // TODO: replace <token>
            },
            "body": null,
            "response_path": "json", // example json.data.l
            "response_mapping": {
              "id": "id",
              "name": "title",
              "items": "items",
            },
          },
        },
      }
    ]
  };


  const _cnf = {
    lib: [
      _ENV == `dev` ? {
        name: `sample`,
        renderer_src: `http://localhost:5173/src/renderer/index.ts`,
        hydrator_src: `http://localhost:5173/src/hydrator/index.ts`,
        editor_src: `http://localhost:5173/src/editor/index.ts`,
        custom_src: `http://localhost:5173/src/custom/index.ts`,
      } : {
        name: `sample`,
        renderer_src: `http://localhost:5173/dist/renderer.es.js`,
        hydrator_src: `http://localhost:5173/dist/hydrator.es.js`,
        editor_src: `http://localhost:5173/dist/editor.es.js`,
        custom_src: `http://localhost:5173/dist/custom.es.js`,
      }
    ],
  };

  //set..
  const _ce_renderer = await ce_renderer({ ..._cnf, run: "renderer" });
  const _ce_hydrator = await ce_hydrator({ ..._cnf, run: "hydrator" });
  const _ce_hydrator_form = await ce_hydrator({ ..._cnf, run: "custom" });


  //set..
  ((mE_a, _b) => {
    //set..
    const mE_e = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();

    //set..
    mE_e!.innerHTML = `
  <div>
    <div></div>
    <div > ${_editor_html} </div>
  </div>
`;

  })(document.getElementById("app"), `app__e_d_i_t_o_r`);


  //set..
  const _run = async () => {

    //set..
    const _ce_renderer_rsp = await _ce_renderer.set({
      data: _data
    });

    //set..
    _html = _ce_renderer_rsp.r;
    _css_server = _ce_renderer_rsp.style;

    setTimeout(async () => {
      // Mount the form into the SAME-reference `_data` — content-engine-lib
      // calls custom/index.ts -> set({data:_data}), which mounts
      // custom/index.vue -> form.vue with {_p, _pp:_data.l[0]}.
      const _ce_hydrator_form_rsp = await _ce_hydrator_form.set({
        data: _data
      });
    }, 100);

    //set..
    setTimeout(async () => {
      const _ce_hydrator_rsp = await _ce_hydrator.set({
        data: _data
      });
      console.log(_ce_hydrator_rsp);
    }, 200);


    //set..
    ((mE_a, mE_h, _a, _b, _c, _f) => {
      //set..
      const mE_s = document.getElementById(_a) || (() => { let e = document.createElement("style"); e.id = _a; mE_h.appendChild(e); return e; })();
      const mE_log = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
      const mE_preview = document.getElementById(_c) || (() => { let e = document.createElement("div"); e.id = _c; mE_a!.appendChild(e); return e; })();
      const mE_form = document.getElementById(_f) || (() => { let e = document.createElement("div"); e.id = _f; mE_a!.appendChild(e); return e; })();

      //set..
      mE_s!.innerHTML = `
${_css_server}
${_css_client}
${_editor_css_client}
`;

      //set..
      mE_preview!.innerHTML = `
  <div>
    <div > ${_html} </div>
  </div>
`;

      // Mount point for the custom (Collage Manager) form — id matches
      // what custom/index.ts looks for: `c-u-s-t-o-m_${_data.l[0].id}`
      mE_form!.innerHTML = `
  <div>
    <div>==Form==</div>
    <div id="c-u-s-t-o-m_${_data.l[0].id}"></div>
  </div>
`;

    })(document.getElementById("app"), document.head, `app__s_t_y_l_e`, `app__l_o_g`, `app__p_r_e_v_i_e_w`, `app__f_o_r_m`);

  };
  await _run();


  //test..
  setTimeout(async () => {
    ce_listen("msg", async (_$) => {
      console.log(`ce_listen`, _$);
    });
    await (ce_call as any)("msg", {
      type: `on:change`,
      _p: {},
      _$p: {},
      custom: {
        theme: `light`,
        mode: `normal`,
      },
    });
  }, 300);

})();