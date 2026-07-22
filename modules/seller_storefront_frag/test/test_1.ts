console.log(`test_1`);
import { ce_renderer, ce_hydrator, ce_listen, ce_call } from "content-engine-lib";
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
        "type": "text",
        "custom": {"foo":"bar"},
        "data": {
          "data": "Hello world! ",
        },
      }

    ]
};


const _cnf = {
  lib:[
      /*_ENV==`dev` ? {
      name:`sample`,
      renderer_src:`http://localhost:5173/src/renderer/index.ts`,
      hydrator_src:`http://localhost:5173/src/hydrator/index.ts`,
      editor_src:`http://localhost:5173/src/editor/index.ts`,
    } : {
      name:`sample`,
      renderer_src:`http://localhost:5173/dist/renderer.es.js`,
      hydrator_src:`http://localhost:5173/dist/hydrator.es.js`,
      editor_src:`http://localhost:5173/dist/editor.es.js`,
    }*/
  ],
  lazy_lib: {
    /*renderer_src: `http://localhost:5173/src/l/{*}/renderer/index.ts`,
    hydrator_src: `http://localhost:5173/src/l/{*}/hydrator/index.ts`,
    editor_src: `http://localhost:5173/src/l/{*}/editor/index.ts`,*/
    renderer_src:`https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js`,
    hydrator_src:`https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js`,
    editor_src:`https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js`,
  }
};

//set..
const _ce_renderer = await ce_renderer(_cnf);
const _ce_hydrator = await ce_hydrator(_cnf);




/*
//====Editor====//  [START]
//if (import.meta.client) {
  ce_listen("msg", async(_$)=>{
    //console.log(`ce_listen`, _$);
    if (_$.type==`change` && _$._pp.data.curr[`type`]==`editor`) {
      console.log(`--ce:editor [change] `); //console.log(_v._pp.data[`curr`]);

      //test..
      let _v = _$;
      _data.l = _v._pp.data[`curr`].data.l;
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
    <div>==Editor==</div>
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
    <div>==Preview==</div>
    <div > ${_html} </div>
  </div>
`;



})(document.getElementById("app"),document.head,`app__s_t_y_l_e`,`app__l_o_g`,`app__p_r_e_v_i_e_w`);

};
await _run();



 

//test..
setTimeout(async() => {
 ce_listen("msg", async(_$) => {
     console.log(`ce_listen`, _$);
     
     try {
       const extractAndStoreTemplates = (obj: any) => {
         if (!obj || typeof obj !== 'object') return;
         if (Array.isArray(obj)) {
           obj.forEach(extractAndStoreTemplates);
           return;
         }
         if (obj.id && obj.type && obj.type !== 'editor' && obj.type !== 'storefront' && obj.data) {
           const compId = obj.id;
           
           // Skip storing the default dummy sample component
           if (compId === "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c") {
             return;
           }

           const updatedTemplate = {
             config: {
               lazy_lib: {
                 renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
                 hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
                 editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js",
                 custom_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/custom.es.js"
               }
             },
             data: {
               l: [
                 {
                   id: obj.id,
                   type: obj.type,
                   slug: obj.slug || obj.type,
                   data: obj.data
                 }
               ]
             }
           };
           (window as any).__savedTemplates = (window as any).__savedTemplates || {};
           (window as any).__savedTemplates[compId] = updatedTemplate;
         }
         for (const key of Object.keys(obj)) {
           if (typeof obj[key] === 'object') {
             extractAndStoreTemplates(obj[key]);
           }
         }
       };

       // 1. Process any incoming templates in the message
       if (_$?._pp?.data?.curr) {
         extractAndStoreTemplates(_$._pp.data.curr);
       }
       if (_$?.custom?.storefront) {
         extractAndStoreTemplates(_$.custom.storefront);
       }
       if (_$?.custom?.entireTemplate) {
         extractAndStoreTemplates(_$.custom.entireTemplate);
       }

       // 2. Log modified templates based on event type
       if (_$?.custom?.action === "update") {
         if (_$?.custom?.entireTemplate) {
           console.log(`\n=== [GLOBAL SAVE] Logging updated template.json ===`);
           console.log(JSON.stringify(_$.custom.entireTemplate, null, 2));
         } else {
           const saved = (window as any).__savedTemplates || {};
           const keys = Object.keys(saved);
           if (keys.length > 0) {
             console.log(`\n=== [GLOBAL SAVE] Logging all modified templates (${keys.length}) ===`);
             keys.forEach(compId => {
               console.log(`\n--- [Template JSON for component ID: ${compId}] ---`);
               console.log(JSON.stringify(saved[compId], null, 2));
             });
           } else {
             
           }
         }
       } else {
         
       }
     } catch (err) {
       console.warn("Failed to extract templates:", err);
     }
  });
 await ce_call("msg",{
  type:`change`,
  _p:{},
  _pp:{},
  custom:{},
  /*where:{
    key:`type`,
    value:`editor`
  },*/
 });
}, 200);



 


})();