import { u as m } from "./main-BRfZD_gg.js";
import { d, X as n, a3 as b, a0 as y, Z as g, a1 as w, H as u, G as v, K as S, L as k } from "./runtime-dom.esm-bundler-7m8Vyt41.js";
const R = /* @__PURE__ */ d({
  __name: "ContentEngineIframe",
  props: {
    _p: {},
    __p: {}
  },
  setup(l) {
    const o = m(), s = n({
      ce_file: o?.meta?.ce_file
    }), t = n(null), i = n(null), e = n(null), _ = () => {
      console.log("Iframe loaded successfully");
    };
    return b(() => {
      e.value && URL.revokeObjectURL(
        e.value
      );
    }), y(async () => {
      try {
        const f = await (await fetch(
          s.value.ce_file
        )).json();
        t.value = f;
      } catch (c) {
        console.log(c);
        return;
      }
      let r = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, a = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      r = t.value?.data || r, a.lazy_lib = t.value?.config?.lazy_lib || a.lazy_lib;
      const h = `

<!DOCTYPE html>

<html>

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <style>

    html,
    body {

      margin: 0;
      padding: 0;

      width: 100%;
      min-height: 100%;

      overflow-x: hidden;

      background: transparent;

    }

  </style>

</head>

<body>

<script type="module">

import {
  ce_renderer,
  ce_hydrator,
  ce_call,
  ce_listen
} from "https://cdn.jsdelivr.net/gh/coreutility/content-engine-lib@main/dist/index.es.js";



/*
// IMPORTANT FIX
// Prevent invalid blob history routing
(() => {

  const _replaceState =
    history.replaceState.bind(history);

  const _pushState =
    history.pushState.bind(history);



  history.replaceState = (...args) => {

    try {

      const url = args?.[2];

      if (
        typeof url === "string"
        &&
        (
          url.startsWith("blob:")
          ||
          url.startsWith("blob://")
        )
      ) {

        console.warn(
          "[iframe] blocked replaceState:",
          url
        );

        return;

      }

      return _replaceState(...args);

    } catch (err) {

      console.warn(err);

    }

  };





  history.pushState = (...args) => {

    try {

      const url = args?.[2];

      if (
        typeof url === "string"
        &&
        (
          url.startsWith("blob:")
          ||
          url.startsWith("blob://")
        )
      ) {

        console.warn(
          "[iframe] blocked pushState:",
          url
        );

        return;

      }

      return _pushState(...args);

    } catch (err) {

      console.warn(err);

    }

  };

})();
*/


// iframe navigation isolation
(() => {

  const _replaceState =
    history.replaceState.bind(history);

  const _pushState =
    history.pushState.bind(history);




  // block blob history changes
  history.replaceState = (...args) => {

    try {

      const url = args?.[2];

      if (
        typeof url === "string"
        &&
        (
          url.startsWith("blob:")
          ||
          url.startsWith("blob://")
        )
      ) {

        console.warn(
          "[iframe] blocked replaceState:",
          url
        );

        return;

      }

      return _replaceState(...args);

    } catch (err) {

      console.warn(err);

    }

  };





  // block blob pushState
  history.pushState = (...args) => {

    try {

      const url = args?.[2];

      if (
        typeof url === "string"
        &&
        (
          url.startsWith("blob:")
          ||
          url.startsWith("blob://")
        )
      ) {

        console.warn(
          "[iframe] blocked pushState:",
          url
        );

        return;

      }

      return _pushState(...args);

    } catch (err) {

      console.warn(err);

    }

  };





  // IMPORTANT
  // open links in browser instead of iframe
  document.addEventListener(
    "click",
    (e) => {

      const a =
        e.target?.closest?.("a");

      if (!a) {
        return;
      }

      const href =
        a.getAttribute("href");

      if (!href) {
        return;
      }



      // ignore hash links
      if (
        href.startsWith("#")
      ) {
        return;
      }



      // stop iframe navigation
      e.preventDefault();

      e.stopPropagation();




      // absolute url
      const finalUrl =
        new URL(
          href,
          location.origin
        ).href;




      console.log(
        "[iframe] opening external:",
        finalUrl
      );




      /*
      // open outside iframe
      window.open(
        finalUrl,
        "_blank",
        "noopener,noreferrer"
      );
      */

      // redirect main browser tab
      window.top.location.href =
      finalUrl;




    },
    true
  );

})();










//globals
window.__FRAGMENT_VARS__ =
  ${JSON.stringify({
        _ins: s.value,
        _data: r,
        _cnf: a
      })};






//run
(async function () {

  try {

    console.log(
      "[iframe] runtime started"
    );



    //vars
    window._cnf =
      window.__FRAGMENT_VARS__._cnf;

    window._data =
      window.__FRAGMENT_VARS__._data;





    console.log(
      "[iframe] data:",
      window._data
    );





    //renderer
    const _ce_renderer =
      await ce_renderer(
        window._cnf
      );





    //hydrator
    const _ce_hydrator =
      await ce_hydrator(
        window._cnf
      );





    //mount element
    const mE =
      document.createElement("div");

    document.body.appendChild(mE);





    //render
    const _ce_renderer_rsp =
      await _ce_renderer.set({
        data: window._data
      });





    //html
    mE.innerHTML =
      _ce_renderer_rsp.r;





    //css
    const mS =
      document.createElement("style");

    document.head.appendChild(mS);

    mS.innerHTML =
      _ce_renderer_rsp.style;





    //hydrate
    setTimeout(async () => {

      try {

        await _ce_hydrator.set({
          data: window._data
        });

        console.log(
          "[iframe] hydrated"
        );

      } catch (err) {

        console.error(
          "[iframe] hydrator error:",
          err
        );

      }

    }, 10);




  } catch (err) {

    console.error(
      "[iframe] runtime error:",
      err
    );

  }

})();

<\/script>

</body>

</html>

`;
      await g(), e.value && URL.revokeObjectURL(
        e.value
      );
      const p = new Blob(
        [h],
        {
          type: "text/html"
        }
      );
      e.value = URL.createObjectURL(p), i.value && (i.value.src = e.value);
    }), (r, a) => (u(), w("iframe", {
      ref_key: "iframeRef",
      ref: i,
      style: { width: "100%", height: "100vh", border: "none", display: "block" },
      onLoad: _
    }, null, 544));
  }
}), E = /* @__PURE__ */ d({
  __name: "ContentEngineIframe",
  props: {
    _p: {},
    __p: {}
  },
  setup(l) {
    const o = l;
    return (s, t) => (u(), v(R, S(k(o)), null, 16));
  }
});
export {
  E as default
};
