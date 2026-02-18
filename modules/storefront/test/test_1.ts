console.log(`test_1`);
import { ce_renderer, ce_hydrator } from "content-engine-lib";
const _ENV = `dev`; // dev | prod //import.meta.env.VITE_ENV;

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
      "id": "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
      "type": "sample",
      "data": {
        "data": "",
        "theme": "light",
        "foo": "",

        //set..
        "component": {
          "l": [
            {
              "name": "header",
              "ce_file": "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/header_sf/dist/data.json",
            },
            {
              "name": "footer",
              "ce_file": "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/footer_sf/dist/data.json",
            },
            {
              "name": "bottom_nav",
              "ce_file": "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/bottom_nav_sf/dist/data.json",
            },
          ]
        },

        //set..
        "routes": [


          //set..
          {
            path: '/login',
            name: 'login',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/sign_in/dist/data.json",
            }
          },
          {
            path: '/signup',
            name: 'signup',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/sign_up/dist/data.json",
            }
          },


          




          //set..
          {
            path: '/',
            //component: AppLayout,
            component: "../layout/AppLayout.vue", //"@/layout/AppLayout.vue",
            /*props:route => ({
              _p: route.meta._p,
              //_$p: route.meta._$p,
              //_p:props._p,
            }),*/

            meta:{
              layout:{
                class:"",//"pt-30 md:pt-20", //(It will use) => in mobile first-value, in desktop second-value.
                style:"padding-top:8vh;",
              }
            },


            //set..
            children: [

              //set..
              {
                path: '/',
                name: 'home',
                component: '../views/ContentEngine.vue',
                meta: {
                  ce_file: {
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
                          "id": "7bc78c-carousel",
                          "type": "carousel",
                          "slug": "carousel",
                          "data": {
                            "data": "",
                            "theme": "light",
                            "foo": ""
                          }
                        },
                        {
                          "id": "3e1bc78c-104f-4f6f-aa87-75a",
                          "type": "product_list",
                          "slug": "product_list",
                          "data": {
                            "data": "",
                            //set..
                            "mode": "only_list", //normal, only_list
                            "api": {
                              //"url": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/product_dir?typ=view_product",
                              "url": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/product_dir?typ=get_product_list",
                              "token": "Bearer <localStorage.token>",
                            },
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
                                        "env": "prod", //dev, prod
                                        //set..
                                        "api": {
                                          "0": {
                                            "url": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/product_dir?typ=view_product"
                                          },
                                          "1": {
                                            "url": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/order_management"
                                          },
                                          "token": "Bearer <localStorage.token>"
                                        }
                                      }
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }

                      ]
                    }
                  },
                }
              },




              //set..
              {
                path: '/product-details',
                name: 'product_details',
                component: '../views/ContentEngine.vue',
                meta: {
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/product_details/dist/data.json",
                }
              },
              {
                path: '/products',
                name: 'product',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/product_list/dist/data.json",
                  //ce_file: "http://localhost:5173/test/ce_files/product_list.json",
                }
              },
              




         


              //set..
              {
                path: '/pages/empty',
                name: 'empty',
                component: '../views/pages/Empty.vue'
              },
               
            ]
          },
          
 

          //set..
          {
            path: '/cart-popup',
            name: 'cart_popup',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/cart_popup/dist/data.json",
            }
          },
          {
            path: '/orders',
            name: 'orders',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/orders_sf/dist/data.json",
            }
          },

          {
            path: '/checkout',
            name: 'checkout',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/checkout/dist/data.json",
              /*ce_file: {
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
                      "id": "3e1bc78c-checkout",
                      "type": "checkout",
                      "slug": "checkout",
                      "data": {
                        "data": "Hello world! ",
                        "theme": "light"
                      }
                    }
                  ]
                }
              }*/
            }
          },



          //set..
          {
            path: '/addresses',
            name: 'addresses',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/address_list/dist/data.json",
            }
          },
          {
            path: '/address/add',
            name: 'address_add',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/address_upsert/dist/data.json",
            }
          },
          {
            path: '/address/edit',
            name: 'address_edit',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/address_upsert/dist/data.json",
            }
          },




          //set..
          {
            path: '/wishlist',
            name: 'product_fav',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/product_fav/dist/data.json",
            }
          },



          //set..
          {
            path: '/dashboard',
            name: 'dashboard',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/dashboard_sf/dist/data.json",
              auth: false,
            }
          },



         



          //set..
          {
            path: '/pages/notfound',
            name: 'notfound',
            component: '../views/pages/NotFound.vue'
          },
 
        ],

      },
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
      /*renderer_src:`https://cdn.jsdelivr.net/gh/1mn-io/mn-app@59f750c/modules/dashboard/dist/renderer.es.js`,
      hydrator_src:`https://cdn.jsdelivr.net/gh/1mn-io/mn-app@59f750c/modules/dashboard/dist/hydrator.es.js`,
      editor_src:`https://cdn.jsdelivr.net/gh/1mn-io/mn-app@59f750c/modules/dashboard/dist/editor.es.js`,*/
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
/*const _ce_editor = await ce_editor(_cnf);*/




/*
//====Editor====//  [START]
//if (import.meta.client) {
  const _ce_editor_rsp =  await _ce_editor.set({
    data:{
      l:[]
    }
  },{
    change: async (_v:any) => {
      console.log(`--ce:editor [change] `);
      //console.log(_v._$p.data[`curr`]);

      //test..
      _data.l = _v._$p.data[`curr`].data.l;
      console.log(_data.l);
      //set..
      await _run();

      
    },
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
//_css_client = _ce_hydrator_rsp.style;
//}  
}, 0);




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



 

 


})();