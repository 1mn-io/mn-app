console.log(`test_1`);
import { ce_renderer, ce_hydrator } from "content-engine-lib";
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
  let _data = {
    l: [
      {
        "id": "login-uuid-5678",
        "type": "sign_in",
        "description": "User Login Form",
        "data": {
          "api": {
            // Your API endpoint for authentication
            "login": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/public:auth?typ=login",
            // Optional: Redirects or other endpoints
            "forgot_password": "/reset-password",
            "send_otp": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/public:auth?typ=send_otp",
            "verify_otp": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/public:auth?typ=verify_otp",

            //set..
            "sign_with_third_party": "https://fastapi.dryutil.1mn.io/client-public/api/i/ona/public:auth?typ=sign_with_third_party&provider={provider}&redirect={redirect}",
          },
          "labels": {
            "title": "Welcome Back",
            "subtitle": "Enter your details to login."
          },
          "click": {
            "sign_up": "/signup", //"http://localhost:5173/signup",
            "forgot_pwd": "/forgot-password", //"http://localhost:5173/forgot-password"
          },
          "event": {
            "onLoginSuccess": "/", //"http://localhost:5173/dashboard"
          },
          "theme": "light",




        },
      }
    ]
  };
console.log(_data.l[0]);


  const _cnf = {
    lib: [
      _ENV == `dev` ? {
        name: `sign_in`,
        renderer_src: `http://localhost:5173/src/renderer/index.ts`,
        hydrator_src: `http://localhost:5173/src/hydrator/index.ts`,
        editor_src: `http://localhost:5173/src/editor/index.ts`,
      } : {
        name: `sign_in`,
        renderer_src: `http://localhost:5173/dist/renderer.es.js`,
        hydrator_src: `http://localhost:5173/dist/hydrator.es.js`,
        editor_src: `http://localhost:5173/dist/editor.es.js`,
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
    <div>==Editor==</div>
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
    ((mE_a, mE_h, _a, _b, _c) => {
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



    })(document.getElementById("app"), document.head, `app__s_t_y_l_e`, `app__l_o_g`, `app__p_r_e_v_i_e_w`);

  };
  await _run();








})();