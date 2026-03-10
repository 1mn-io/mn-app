console.log(`test_1`);
import { ce_renderer, ce_hydrator, ce_listen, ce_call } from "content-engine-lib";
const _ENV = `dev`; //import.meta.env.VITE_ENV;


//test..
localStorage.setItem(`token`, `test-token`);

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
  l: [
    {
      id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
      type: "sample",
      data: {
        title: "On-Boarding",
        mode: "auto", //auto | manual
        event: {
          l: [
            {
              name:`open_homepage`,
              typ:`redirect`,
              data:`/home`, // `/home`, `http://localhost:5173/home`
              delay:2000,//ms
            },
            {
              name:`error_toast`,
              typ:`toast`,
              data:{
                msg:`An error occurred!`,
                options: {
                  type: "error", //success | error | warn | info
                  position: "top-right", //bottom-center | top-left | top-right
                  autoClose: 5000,
                  theme: 'light', //dark | light
                }

              },
            },
            {
              name:`success_toast`,
              typ:`toast`,
              data:{
                msg:`Success`,
                options: {
                  type: "success", //success | error | warn | info
                  position: "top-right", //bottom-center | top-left | top-right
                  autoClose: 5000,
                  theme: 'light', //dark | light
                }
              },
            },
            {
              name:`request_body`,
              typ:`body`,
              data:`<body>` /*{
                xyz:`<body>`
              }*/,
            },
            {
              name:`submit`,
              typ:`api`,
              //delay:5000,
              data:{
                url:`https://jsonplaceholder.typicode.com/posts`,
                //url:`https://jsonplaceholder.typicode.com/postsY`,
                method:`POST`,
                headers:{
                  //'Authorization': `Bearer <localStorage.token>`,
                  //'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk`,
                  //'Content-type': 'application/json; charset=UTF-8',
                  "Content-Type": "application/json",
                  
                },
                //body:{},
              },
              "event": {
                "l": [
                  {
                    on: `success`,
                    call: [`success_toast`,`open_homepage`]
                  },
                  {
                    on: `error`,
                    call: [`error_toast`]
                  },
                ]
              }
            }
          ]
        },
        ce_file: 
        //"https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/form_section/dist/data.json"
        //"https://fastapi.dryutil.1mn.io/client-public/api/i/ona/ui_management?typ=ce_file&id=c8c4bbde-c232-4e16-8985-60db13563005"
        {
          data: {
            l: [
              {
                "id": "3e1bc78c-form_section",
                "type": "form_section",
                "slug": "form_section",
                "data": {
                  "label": "General Details",
                  "l": [],
                  "theme": "light",
                }
              },

              //set..
              {
                "id": "568c-form_inputtext",
                "type": "form_inputtext",
                "slug": "form_inputtext",
                "data": {
                  "placeholder": "Country",
                  "form": {
                    "section_id": "3e1bc78c-form_section",
                    "body_key": "country",
                  }
                }
              },
              {
                "id": "68c-form_inputtext",
                "type": "form_inputtext",
                "slug": "form_inputtext",
                "data": {
                  "placeholder": "State",
                  "form": {
                    "section_id": "3e1bc78c-form_section",
                    "body_key": "state",
                  }
                }
              },
              {
                "id": "458c-form_inputtext",
                "type": "form_inputtext",
                "slug": "form_inputtext",
                "data": {
                  "placeholder": "Name",
                  "form": {
                    "section_id": "568c-form_section",
                    "body_key": "name",
                  }
                }
              },
              {
                "id": "868c-form_inputtext",
                "type": "form_inputtext",
                "slug": "form_inputtext",
                "data": {
                  "placeholder": "Phone",
                  "form": {
                    "section_id": "568c-form_section",
                    "body_key": "phone",
                  }
                }
              },
              {
                "id": "875648c-form_inputtext",
                "type": "form_inputtext",
                "slug": "form_inputtext",
                "data": {
                  "placeholder": "Int",
                  "form": {
                    "section_id": "568765gc-form_section",
                    "body_key": "int",
                    "parse_as": "int",
                  }
                }
              },
              {
                "id": "875xfc-form_inputtext",
                "type": "form_inputtext",
                "slug": "form_inputtext",
                "data": {
                  "placeholder": "Bool",
                  "form": {
                    "section_id": "568765gc-form_section",
                    "body_key": "bool",
                    "parse_as": "bool",
                  }
                }
              },
              {
                "id": "8xxfc-form_inputtext",
                "type": "form_inputtext",
                "slug": "form_inputtext",
                "data": {
                  "placeholder": "Json",
                  "form": {
                    "section_id": "568765gc-form_section",
                    "body_key": "json",
                    "parse_as": "json",
                  }
                }
              },


              {
                "id": "568c-form_section",
                "type": "form_section",
                "slug": "form_section",
                "data": {
                  "label": "Profile Details",
                  "l": [],
                  "theme": "light",
                }
              },


              {
                "id": "568765gc-form_section",
                "type": "form_section",
                "slug": "form_section",
                "data": {
                  "label": "Data Types",
                  "l": [],
                  "theme": "light",
                }
              },

              {
                "id": "47c-form_section",
                "type": "form_section",
                "slug": "form_section",
                "data": {
                  "label": "",
                  "l": [],
                  "theme": "light",
                }
              },

              {
                "id": "868c-form_button",
                "type": "form_button",
                "slug": "form_button",
                "data": {
                  "label": "Submit",
                  "form": {
                    "section_id": "47c-form_section",
                    "event": {
                      "l": [
                        {
                          on: `click`,
                          call: [`request_body`,`submit`]
                        }
                      ]
                    }
                  }
                }
              },




            ],
          }
        },

        //set..
        class: {
          a: "bg-gray-100 flex items-center justify-center min-h-screen", // bg-gray-100 flex items-center justify-center min-h-screen
          b: "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm", // bg-white shadow-lg rounded-lg p-8 w-full max-w-xl
        },


      }
    }
  ]
};

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
  lazy_lib: {
    "renderer_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/renderer.es.js",
            "hydrator_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/hydrator.es.js",
            "editor_src": "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/{*}/dist/editor.es.js"
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



 

//test..
setTimeout(async() => {
 /*ce_listen("msg", async(_$) => {
    console.log(`ce_listen`, _$);
 });*/
 /*await ce_call("msg",{
  type:`change`,
  _p:{},
  _$p:{},
  custom:{},
  //where:{
   // key:`type`,
    //value:`editor`
 // },
 });*/
  ce_listen("child:msg"as any, async(_$:any) => {
    console.log(`ce_listen`, _$);
 });
}, 200);



 


})();