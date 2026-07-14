console.log(`test_1`);
import { ce_renderer, ce_hydrator, ce_listen, ce_call } from "content-engine-lib";
import { createApp as createFormApp } from 'vue';
import FormComponent from '../src/custom/src/form.vue';
import PrimeVue from 'primevue/config';
const _ENV = `dev`; //import.meta.env.VITE_ENV;

//set..
(async() => {
//set vars..
let _html = ``;
let _css_server = ``;
let _css_client = ``;
//set..
let _editor_html = ``;
let _editor_css_client = ``;
let _data = {
    l:  [
      {
        "id": "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
        "type": "sample",
        "data": {
          "data": "",
          "theme": "light",
          //set..
          "logo": {
            "src": "https://app.1mn.io/logo.svg",
            "class": "",//"w-15 md:w-17",
            "style": "width:8vh; height:8vh",
          },
          "itemA": {
            "label": "Work at MN",
          },
          "event": {
            "onClickAddresses": "/addresses",
            "onClickCart": "/checkout",
            "onClickLogin": "/login",
            "onClickAccount": "/dashboard",
            "onClickItemA": "/",
          },
          //set.. top_menu
          "top_menu":{
            "mode":"api", // "static" | "api"

            "l":[

              {
                "name": "wibes",
                "href": "/wibes",
                
              },
              {
                "name": "hotels",
                "href": "/hotels",
                
              },
              {
                "name": "flights",
                "href": "/flights",
                
              },
              {
                "name": "brands",
                "href": "/brands",
                
              }

            ],
            "api": {
              "url": "https://dummyjson.com/recipes",
              "method": "GET",
              "headers": {
                "Content-Type": "application/json",
              },

              "body": null,

              "response_path" : "json.recipes", // example  json.data.l

              "response_mapping": {
                "name": "name",
                "href": "image",
              },

              "limit": 4 // rate limiter — max items to show from API
            }
          },
          //set.. side_menu (sidebar / mobile menu)
          "side_menu":{
            "mode":"api", // "static" | "api"
            "l":[
              { "name": "wibes", "href": "/wibes" },
              { "name": "hotels", "href": "/hotels" },
              { "name": "flights", "href": "/flights" },
              { "name": "brands", "href": "/brands" }
            ],
            "api": {
              "url": "https://dummyjson.com/recipes",
              "method": "GET",
              "headers": { "Content-Type": "application/json" },
              "body": null,
              "response_path": "json.recipes",
              "response_mapping": { "name": "name", "href": "image", "icon": "image" },
              "limit": 10
            }
          },
          //set.. header settings
          "headerNature": "sticky",
          "headerSize": "medium",
          "designMode": false,
        }
       
      }

    ]
};

console.log(_data);


// Restore saved form data from localStorage (survives refresh/navigation)
// Version key: change this when default config changes to clear stale data
const _LS_KEY = '__header_sf_data_v3';
try {
  const saved = localStorage.getItem(_LS_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    // Deep merge: restore user changes but keep structural defaults
    if (parsed && typeof parsed === 'object') {
      // Restore top_menu items (l array) — user's custom names/hrefs
      if (parsed.top_menu?.l) {
        _data.l[0].data.top_menu.l = parsed.top_menu.l;
      }
      // Restore top_menu mode
      if (parsed.top_menu?.mode) {
        _data.l[0].data.top_menu.mode = parsed.top_menu.mode;
      }
      // Restore full api config if saved
      if (parsed.top_menu?.api) {
        Object.assign(_data.l[0].data.top_menu.api, parsed.top_menu.api);
      }
      // Restore other fields (logo, headerNature, etc.)
      const { top_menu, ...rest } = parsed;
      Object.assign(_data.l[0].data, rest);
      // Re-attach merged top_menu
      _data.l[0].data.top_menu = _data.l[0].data.top_menu;
      console.log('[test_0] Restored saved data from localStorage (v2)');
    }
  }
  // Clear old versioned keys
  localStorage.removeItem('__header_sf_data');
  localStorage.removeItem('__header_sf_data_v2');
} catch (e) {
  console.warn('[test_0] Could not restore localStorage data:', e);
}

console.log(_data.l[0]);


const _cnf = {
  lib:[
      _ENV==`dev` ? {
      name:`sample`,
      renderer_src:`http://localhost:5173/src/renderer/index.ts`,
      hydrator_src:`http://localhost:5173/src/hydrator/index.ts`,
      editor_src:`http://localhost:5173/src/editor/index.ts`,
    } : {
      name:`sample`,
      renderer_src:`http://localhost:5173/dist/renderer.es.js`,
      hydrator_src:`http://localhost:5173/dist/hydrator.es.js`,
      editor_src:`http://localhost:5173/dist/editor.es.js`,
    }
  ],
  /*lazy_lib: {
    renderer_src: `http://localhost:5173/src/l/{*}/renderer/index.ts`,
    hydrator_src: `http://localhost:5173/src/l/{*}/hydrator/index.ts`,
    editor_src: `http://localhost:5173/src/l/{*}/editor/index.ts`,
  }*/
};

//set..
const _ce_renderer = await ce_renderer(_cnf);
const _ce_hydrator = await ce_hydrator(_cnf);




/*
//====Editor====//  [START]
//if (import.meta.client) {
  ce_listen("msg", async(_$)=>{
    //console.log(`ce_listen`, _$);
    if (_$.type==`change` && _$._$p.data.curr[`type`]==`editor`) {
      console.log(`--ce:editor [change] `); //console.log(_v._$p.data[`curr`]);

      //test..
      let _v = _$;
      _data.l = _v._$p.data[`curr`].data.l;
      console.log(_data.l);
      //set..
      await _run();
      
    }
  });
  const _ce_editor_rsp =  await _ce_editor.set({
    data:{
      l:[]
    }
  });

  //set..
  _editor_html = _ce_editor_rsp.r;
  _editor_css_client = _ce_editor_rsp.style;

//}
//====Editor====//  [END]  
*/



//set..
((mE_a,_b) => {
//console.log(_html);
//console.log(_css_server);
//console.log(_css_client);

//set..
const mE_e = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
//console.log(mE_s);

 
//set..
mE_e!.innerHTML = `
  <div >
   
    <div > ${_editor_html} </div>
  </div>
`;


})(document.getElementById("app"),`app__e_d_i_t_o_r`);




//set..
const _run = async () => {

//set..
//if (import.meta.client) { // import.meta.server |  import.meta.client  //NOTE: For real world where, we need SSR in action we use "import.meta.server". 
const _ce_renderer_rsp =  await _ce_renderer.set({
  data:_data
});
//console.log(_ce_renderer_rsp.r);

//set..
_html = _ce_renderer_rsp.r;
_css_server = _ce_renderer_rsp.style;




//}
//if (import.meta.client) {
setTimeout(async() => {
const _ce_hydrator_rsp =  await _ce_hydrator.set({
  data:_data
});

//set..
console.log(_ce_hydrator_rsp);

//}  
}, 200);




//set..
((mE_a,mE_h,_a,_b,_c) => {
//console.log(_html);
//console.log(_css_server);
//console.log(_css_client);

//set..
const mE_s = document.getElementById(_a) || (() => { let e = document.createElement("style"); e.id = _a; mE_h.appendChild(e); return e; })();
//console.log(mE_s);
const mE_log = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
//console.log(mE_log);
const mE_preview = document.getElementById(_c) || (() => { let e = document.createElement("div"); e.id = _c; mE_a!.appendChild(e); return e; })();


//set..
mE_s!.innerHTML = `
${_css_server}
${_css_client}
${_editor_css_client}
`;

/*//set..
mE_log.innerHTML = `
<div>
    <div>==Log==</div>
    <div>
      ${JSON.stringify(_data)}
    </div>
  </div>

`;*/

//set..
mE_preview!.innerHTML = `
  <div>
    
    <div > ${_html} </div>
  </div>
`;



})(document.getElementById("app"),document.head,`app__s_t_y_l_e`,`app__l_o_g`,`app__p_r_e_v_i_e_w`);

};
await _run();


//====Custom Form====//  [START]
((mE_a:HTMLElement|null) => {
  //set.. create mount point for custom form
  const mE_c = document.getElementById(`app__c_u_s_t_o_m`) || (() => { let e = document.createElement("div"); e.id = `app__c_u_s_t_o_m`; mE_a!.appendChild(e); return e; })();

  //set.. mock _p for the form with re-render on change
  const _form_p = {
    my: {} as any,
    f: {
      call: async (_event:string, _$:any) => {
        console.log(`[Form Change] ce_call`, _event, _$);
        //set.. re-render header preview on form change
        await _run();
      },
      listen: () => {},
      new_emitter: () => ({ emit: async () => {}, on: () => {} }),
      name: (v:string) => `custom-${v}`,
      get_lib: () => {},
      set_theme: () => {},
      path: (v:string) => v,
      uuid: () => crypto.randomUUID(),
      wait_until: async () => {},
    }
  }; // class override 
  const _form_pp = {
    data: {
      curr: _data.l[0]
    }
  };

  //set.. create vue app with primevue
  const _formApp = createFormApp(FormComponent, { _p: _form_p, _pp: _form_pp });
  _formApp.use(PrimeVue);
  _formApp.mount(mE_c);
  console.log(`--custom form mounted`);
})(document.getElementById("app"));
//====Custom Form====//  [END]

//====Scroll Spacer====//  [START]
((mE_a:HTMLElement|null) => {
  const mE_spacer = document.getElementById(`app__s_p_a_c_e_r`) || (() => { let e = document.createElement("div"); e.id = `app__s_p_a_c_e_r`; mE_a!.appendChild(e); return e; })();
  mE_spacer.style.cssText = `min-height:150vh;`;
  mE_spacer.innerHTML = ``;
})(document.getElementById("app"));
//====Scroll Spacer====//  [END]




 

//test..
setTimeout(async() => {
  const themeFromData=_data.l[0].data.theme;
 ce_listen("msg", async(_$) => {
    console.log(`ce_listen`, _$);
 });
 await ce_call("msg",{
  type:`change`,
  _p:{},
  _$p:{},
  custom:{},
  /*where:{
    key:`type`,
    value:`editor`
  },*/
 });
 await ce_call("msg", {
    type: `theme:change`, // MUST match the if statement in index.vue
    _p: {},
    _$p: {},
    custom: { 
        theme: themeFromData 
    }
  });
 console.log("ce theme emitted",themeFromData)

  await ce_call("msg", {
    type: `refresh:cart`, 
    _p: {},
    _$p: {},
    custom: {} 
  });
  console.log("ce cart refresh emitted!");
}, 200);



 


})();