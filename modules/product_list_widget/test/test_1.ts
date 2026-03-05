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
          "mode": "normal", //normal, only_list
          "title": {"value": "You might also like", "class": "font-bold text-2xl tracking-tight text-slate-900"},
          "oriantation": "h", //h, v
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
          },
          //set..
          "event": {"onProductClick": "/product/{slug}",},
          "value": {
            "l": [
             {"brand":"THIS IS HARDCODED PRODUCT","category":["Women","Apparel","Topwear","Shirts"],"color":["Lime","Snow White","Jet Black"],"country":"IN","created_at":1771333449,"field_name":["Product Details","MATERIAL & CARE","SIZE & FIT","Available Colors","Available Sizes","Fabrics","Fit","Length","Neck","Occasions","Patterns","Wash Care"],"field_value":["<ul><li>Shirts for women</li><li>All Over Print pattern</li><li>High Waist length</li><li>Point Collar</li><li>Power Stretch fabric</li><li>Tailored Fit</li></ul>","Power Stretch<br>Machine Wash","Tailored Fit<br>The model (height 5'10\") is wearing a size XL","Lime, Snow White, Jet Black","UK 6, 36, XL","Power Stretch","Tailored Fit","High Waist","Point Collar","Sunbathing","All Over Print","Machine Wash"],"hashtags":["#ootd","#style","#womenstyle","#womensfashion","#shirts","#printedwear","#trendingnow","#stylegoals"],"id":"Nike__14350","is_coupon_allowed":true,"is_processed":false,"lang":"en","metadata":{"url":"https://www.example.com/6887104f/","size":[{"id":"UK 6","name":"UK 6","measurements":[{"name":"Chest","unit":"Inches","value":"36"},{"name":"Front Length","unit":"Inches","value":"24"},{"name":"Across Shoulder","unit":"Inches","value":"16.0"}]},{"id":"36","name":"36","measurements":[{"name":"Chest","unit":"Inches","value":"38"},{"name":"Front Length","unit":"Inches","value":"25"},{"name":"Across Shoulder","unit":"Inches","value":"16.5"}]},{"id":"XL","name":"XL","measurements":[{"name":"Chest","unit":"Inches","value":"40"},{"name":"Front Length","unit":"Inches","value":"26"},{"name":"Across Shoulder","unit":"Inches","value":"17.0"}]}],"brand":"Nike","color":[{"id":"Lime","name":"Lime","image":[{"url":"http://example.com"},{"url":"http://example.com"}],"video":[]},{"id":"Snow White","name":"Snow White","image":[{"url":"http://example.com"}],"video":[]},{"id":"Jet Black","name":"Jet Black","image":[{"url":"http://example.com"},{"url":"http://example.com"}],"video":[]}],"field":[{"l":[{"name":"Product Details","value":"<ul><li>Shirts for women</li><li>All Over Print pattern</li><li>High Waist length</li><li>Point Collar</li><li>Power Stretch fabric</li><li>Tailored Fit</li></ul>"},{"name":"MATERIAL & CARE","value":"Power Stretch<br>Machine Wash"},{"name":"SIZE & FIT","value":"Tailored Fit<br>The model (height 5'10\") is wearing a size XL"},{"name":"Available Colors","value":"Lime, Snow White, Jet Black"},{"name":"Available Sizes","value":"UK 6, 36, XL"}],"typ":"detail"},{"l":[{"name":"Fabrics","value":"Power Stretch"},{"name":"Fit","value":"Tailored Fit"},{"name":"Length","value":"High Waist"},{"name":"Neck","value":"Point Collar"},{"name":"Occasions","value":"Sunbathing"},{"name":"Patterns","value":"All Over Print"},{"name":"Wash Care","value":"Machine Wash"}],"typ":"info"}],"title":"Nike Matelasse Ramie Collar Shirts","seller":{"name":"NIKE LIMITED","packer_info":"Packer","importer_info":"Importer:","country_of_origin":["Vietnam"],"manufacturer_info":"Manufacturer:"},"variant":[{"id":"7ab2ccc8-a11a-40f2-88c4-aaa368e21c02","price":"552","size_id":"UK 6","color_id":"Lime","currency":"INR","price_mrp":"1082"},{"id":"319d5343-ae90-4694-a3ab-9f4455533542","price":"552","size_id":"UK 6","color_id":"Snow White","currency":"INR","price_mrp":"1082"},{"id":"cf29fe3e-c765-42d3-b9a8-dd81c5eb7052","price":"552","size_id":"UK 6","color_id":"Jet Black","currency":"INR","price_mrp":"1082"},{"id":"10cb6cd8-4f8e-48fb-84b9-bcc251810457","price":"552","size_id":"36","color_id":"Lime","currency":"INR","price_mrp":"1082"},{"id":"b43b9ff2-2759-49f7-a4e4-f0492ca34f83","price":"552","size_id":"36","color_id":"Snow White","currency":"INR","price_mrp":"1082"},{"id":"fdaeec60-f447-47ae-a08d-6060b9f37a5b","price":"552","size_id":"36","color_id":"Jet Black","currency":"INR","price_mrp":"1082"},{"id":"0f715553-f6bb-4bf3-906f-79d7e4986569","price":"552","size_id":"XL","color_id":"Lime","currency":"INR","price_mrp":"1082"},{"id":"12f9aa78-2789-402f-804d-ca4f921a6ba8","price":"552","size_id":"XL","color_id":"Snow White","currency":"INR","price_mrp":"1082"},{"id":"eb46db5d-c3dd-42fc-b18d-c3fb46525706","price":"552","size_id":"XL","color_id":"Jet Black","currency":"INR","price_mrp":"1082"}],"category":[{"name":"Women"},{"name":"Apparel"},{"name":"Topwear"},{"name":"Shirts"}],"size_info":{"chart":{"url":null},"representation":{"url":"http://example.com/sizechart/sample.png"}},"hashtags":["#ootd","#style","#womenstyle","#womensfashion","#shirts","#printedwear","#trendingnow","#stylegoals"],"lang":"en","country":"IN"},"postprocess":false,"size":["UK 6","36","XL"],"slug":"nike-nike-matelasse-ramie-collar-shirts-6887104f","title":"Nike Matelasse Ramie Collar Shirts","url":"https://www.example.com/6887104f/","variant_mrp":[1082],"variant_prices":[552],"variant_stock_idx":[10,15,5,10,15,5,10,15,5],"_relevance_score":1157451471038449700,"_text_match_info":{"best_field_score":"2211897671681","best_field_weight":3,"fields_matched":3,"num_tokens_dropped":0,"score":"1157451471038449691","tokens_matched":2,"typo_prefix_score":0}}
            ]
          },
          "map": {},
          "api": {
            "url":`https://fastapi.dryutil.1mn.io/client-public/api/i/ona/product_dir?typ=get_product_list`,
            "method": `POST`,
            "body": {
              "q": "<q>",
              "page": "<page>",
              "per_page": 20
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
 ce_listen("msg", async(_$) => {
    console.log(`ce_listen`, _$);
 });
 await ce_call("msg",{
  type:`on:change`,
  _p:{},
  _$p:{},
  custom:{},
  /*where:{
    key:`type`,
    value:`editor`
  },*/
 });
}, 200);



 


})();