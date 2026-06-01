console.log(`test_1`);
import { ce_renderer, ce_hydrator } from "content-engine-lib";
//import PrimeVueConfig from 'primevue/config';
//import PrimeVueTheme from '@primeuix/themes/aura';


const _ENV = `dev`; //import.meta.env.VITE_ENV;

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
  let _data = {
    l: [
      {
        "id": "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
        "type": "sample",
        "custom": {
          "foo":"bar",
        },
        "data": {
          "map": {
            //title: "title",
            title: "caption",
            //desc: "desc",
            //desc: "caption",
            image: "image",
            //image: "photo_url",
            tag: "tag",
            ctaText: "ctaText",
            linkId: "linkId",
            onClick: "onClick",
            //onClick: "photo_url",
          },
          "value": {
            "l": [
              {
                //title: "Premium Headphones",
                //desc: "Immerse yourself in crystal clear sound with active noise cancellation.",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
                //tag: "Audio Gear",
                //ctaText: "Listen Now",
                //linkId: "electronics",
                onClick: "/"
              },
              {
                title: "Urban Streetwear",
                desc: "Redefine your style with our limited edition summer drops.",
                image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
                tag: "Fashion",
                ctaText: "View Collection",
                linkId: "fashion",
                onClick: "/"
              },
              {
                title: "Travel in Style",
                desc: "Explore the world with our durable and stylish luggage collection.",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
                tag: "Travel",
                ctaText: "Discover More",
                linkId: "travel",
                onClick: "/"
              },
              {
                title: "Culinary Delights",
                desc: "Upgrade your kitchen with our premium cookware and gadgets.",
                image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
                tag: "Kitchenware",
                ctaText: "Cook Now",
                linkId: "kitchen",
                onClick: "/"
              }
            ]
          },
          "api": {/*
            "url": "https://jsonfakery.com/photos/random/3",
            "method": "get",
            "rsp_path": "json", //"json.data.products",
            //"body": {  
                //"q": "<search>",
                //"page": 1,
                //"per_page": 20
            //},
            "headers": {
              'Content-Type': 'application/json',
              //"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk"
              //"Authorization": "Bearer <localStorage.token>"
            },
          */},

        }
      },

    ]
  };
  //window._data = _data;

  console.log(_data.l[0]);
  

  const _cnf = {
    lib:[
      _ENV==`dev` ? {
      name:`sample`,
      renderer_src:`http://localhost:5173/src/renderer/index.ts`,
      hydrator_src:`http://localhost:5173/src/hydrator/index.ts`,
      editor_src:`http://localhost:5173/src/editor/index.ts`,
      custom_src:`http://localhost:5173/src/custom/index.ts`,
    } : {
      name:`sample`,
      renderer_src:`http://localhost:5173/dist/renderer.es.js`,
      hydrator_src:`http://localhost:5173/dist/hydrator.es.js`,
      editor_src:`http://localhost:5173/dist/editor.es.js`,
      custom_src:`http://localhost:5173/dist/custom.es.js`,
    }
  ],
    /*lazy_lib: {
      renderer_src: `http://localhost:5173/src/l/{*}/renderer/index.ts`,
      hydrator_src: `http://localhost:5173/src/l/{*}/hydrator/index.ts`,
      editor_src: `http://localhost:5173/src/l/{*}/editor/index.ts`,
    }*/
    custom: {
      fn:{},
      var:{},
      lib:{
        /*primevue: {
          config: PrimeVueConfig,
          theme: PrimeVueTheme,
        }*/
      }
    }
  };

  //set..
  const _ce_renderer = await ce_renderer({
  ..._cnf,
  run:"renderer"
});
  const _ce_hydrator = await ce_hydrator({
  ..._cnf,
  run:"hydrator"
});
  /*const _ce_editor = await ce_editor(_cnf);*/

  const _ce_hydrator_form = await ce_hydrator({
  ..._cnf,
  run:"custom"
});




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
  ((mE_a, _b) => {
    //console.log(_html);
    //console.log(_css_server);
    //console.log(_css_client);

    //set..
    const mE_e = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
    //console.log(mE_s);


    //set..
    mE_e!.innerHTML = `
  <div >
    <div></div>
    <div > ${_editor_html} </div>
  </div>
`;


  })(document.getElementById("app"), `app__e_d_i_t_o_r`);




  //set..
  const _run = async () => {

    //set..
    //if (import.meta.client) { // import.meta.server |  import.meta.client  //NOTE: For real world where, we need SSR in action we use "import.meta.server". 
    const _ce_renderer_rsp = await _ce_renderer.set({
      data: _data
    });
    //console.log(_ce_renderer_rsp.r);

    //set..
    _html = _ce_renderer_rsp.r;
    _css_server = _ce_renderer_rsp.style;

    setTimeout(async() => {
//if (import.meta.client) { // import.meta.server |  import.meta.client  //NOTE: For real world where, we need SSR in action we use "import.meta.server". 
const _ce_hydrator_form_rsp =  await _ce_hydrator_form.set({
  data:_data
});
//console.log(_ce_hydrator_form_rsp.r);

//set..
//_form_html = _ce_hydrator_form_rsp.r;
//_form_css_client = _ce_hydrator_form_rsp.style;
  
}, 100);




    //}
    //if (import.meta.client) {
    setTimeout(async () => {
      const _ce_hydrator_rsp = await _ce_hydrator.set({
        data: _data
      });

      //set..
      //_css_client = _ce_hydrator_rsp.style;
      //}  
    }, 200);




    //set..
    ((mE_a, mE_h, _a, _b, _c, _f) => {
      //console.log(_html);
      //console.log(_css_server);
      //console.log(_css_client);

      //set..
      const mE_s = document.getElementById(_a) || (() => { let e = document.createElement("style"); e.id = _a; mE_h.appendChild(e); return e; })();
      //console.log(mE_s);
      const mE_log = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
      //console.log(mE_log);
      const mE_preview = document.getElementById(_c) || (() => { let e = document.createElement("div"); e.id = _c; mE_a!.appendChild(e); return e; })();
      const mE_form = document.getElementById(_f) || (() => { let e = document.createElement("div"); e.id = _f; mE_a!.appendChild(e); return e; })();


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
    <div></div>
    <div > ${_html} </div>
  </div>
`;

mE_form!.innerHTML = `
  <div>
    <div>==Form==</div>
    <!--div > ${_form_html} </div-->
    <div id="c-u-s-t-o-m_${_data.l[0].id}" > ${_form_html} </div>
  </div>
`;




    })(document.getElementById("app"), document.head, `app__s_t_y_l_e`, `app__l_o_g`, `app__p_r_e_v_i_e_w`, `app__f_o_r_m`);

  };
  await _run();








})();