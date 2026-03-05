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
        "type": "sample",
        "data": {
          "data": "",
          "theme":"light",
          "header":{
           "mode":"normal", //sticky, normal
          },
          "value": {
            "tabs": [
              // { "id": "men", "title": "Men" },
              // { "id": "women", "title": "Women" },
              // { "id": "kids", "title": "Kids" },
            ],
            "l": [
              // { "id": "man", "title": "Sweatpants", "category": "Men", "image": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&q=80&w=500" },
              // { "id": "m2", "title": "T-Shirts", "category": "Men", "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500" },
              // { "id": "m3", "title": "Hoodies", "category": "Men", "image": "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=500" },
              // { "id": "m4", "title": "Jeans", "category": "Men", "image": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=500" },
              // { "id": "m5", "title": "Sneakers", "category": "Men", "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500" },
              // { "id": "m6", "title": "Watches", "category": "Men", "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=500" },
              // { "id": "m7", "title": "Jackets", "category": "Men", "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=500" },

              // { "id": "w1", "title": "Dresses", "category": "Women", "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500" },
              // { "id": "w2", "title": "Skirts", "category": "Women", "image": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=500" },
              // { "id": "w3", "title": "Tops", "category": "Women", "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500" },
              // { "id": "w4", "title": "Heels", "category": "Women", "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500" },
              // { "id": "w5", "title": "Bags", "category": "Women", "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=500" },
              // { "id": "w6", "title": "Jewelry", "category": "Women", "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=500" },
              // { "id": "w7", "title": "Activewear", "category": "Women", "image": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=500" },
              // { "id": "w8", "title": "Sunglasses", "category": "Women", "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500" },

              // { "id": "b1", "title": "Perfume", "category": "Beauty", "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=500" },
              // { "id": "b2", "title": "Lipstick", "category": "Beauty", "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=500" },
              // { "id": "b3", "title": "Skincare", "category": "Beauty", "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500" },
              // { "id": "b4", "title": "Palettes", "category": "Beauty", "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=500" },
              // { "id": "b5", "title": "Serums", "category": "Beauty", "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500" },

              // { "id": "k1", "title": "Toys", "category": "Kids", "image": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=500" },
              // { "id": "k2", "title": "School", "category": "Kids", "image": "https://images.unsplash.com/photo-1503919545885-d94c035542be?auto=format&fit=crop&q=80&w=500" },
              // { "id": "k3", "title": "Baby Wear", "category": "Kids", "image": "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=500" },
              // { "id": "k4", "title": "Sneakers", "category": "Kids", "image": "https://images.unsplash.com/photo-1514989940723-e8a51630c71f?auto=format&fit=crop&q=80&w=500" },

              // { "id": "h1", "title": "Decor", "category": "Home", "image": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=500" },
              // { "id": "h2", "title": "Bedding", "category": "Home", "image": "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=500" },
              // { "id": "h3", "title": "Plants", "category": "Home", "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=500" },
              // { "id": "h4", "title": "Chairs", "category": "Home", "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=500" },
              // { "id": "h5", "title": "Lighting", "category": "Home", "image": "https://images.unsplash.com/photo-1507473888900-52e1adad5420?auto=format&fit=crop&q=80&w=500" }
            ]
          },
          // "map": {
          //   "title": "name",
          //   "url": "src",
          //   "tab_id"  : "id",
          //   "tab_id_l": "category"
          // },
          "tabs": {
            "api": {
            "url":`https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_collection`,
            "method": `POST`,
            "body": {
              "collection": "product_collection",
              "body": {
                "q": "*",
                "query_by": "category",
                "query_by_weights": "1",
                "page": 1,
                "per_page": 1,
                "facet_by": "category",
                "max_facet_values": 100
              }
            },
            "rsp_path" : "json.data",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
            }
          }
          },
          "api": {
            "url":`https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=view_collection`,
            "method": `POST`,
            "body": {
              "collection": "product_collection",
              "body": {
                "q": "*",
                "filter_by": "category:=<tab_id>",
                "page": "<page>",
                "per_page": 20,
              },  
            },
            "rsp_path" : "json.data",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
            }
          }
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



 
const theme=_data.l[0].data.theme;
const mode = _data.l[0].data.header.mode; 

//test..
setTimeout(async() => {

 ce_listen("msg", async(_$) => {
    console.log(`ce_listen`, _$);
 });
 await ce_call("msg",{
  type:`on:change`,
  _p:{},
  _$p:{},
  custom:{
    theme:theme,
    mode:mode
  },
  /*where:{
    key:`type`,
    value:`editor`
  },*/
 });
}, 200);



 


})();