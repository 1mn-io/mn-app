import { P as u, W as p } from "./index.es-D5wnkuBE.js";
import { u as m } from "./main-MJrECT3t.js";
import { d as f, X as o, _ as y, a1 as h, H as v } from "./runtime-dom.esm-bundler-TRF-LAC0.js";
const g = ["innerHTML"], L = /* @__PURE__ */ f({
  __name: "ContentEngine",
  props: {
    _p: {},
    __p: {}
  },
  setup(j) {
    const i = m(), r = o({
      ce_file: i?.meta?.ce_file
    }), t = o(null), c = o(null);
    let l = "";
    return (async () => {
      try {
        if (typeof r.value.ce_file == "string") {
          const s = await (await fetch(r.value.ce_file)).json();
          t.value = s;
        } else
          t.value = r.value.ce_file;
      } catch (e) {
        console.log(e);
        return;
      }
      let n = {
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
      n = t.value.data, a.lazy_lib = t.value.config.lazy_lib;
      const _ = await u(a), d = await p(a);
      await (async () => {
        const e = await _.set({
          data: n
        });
        c.value = e.r, l = e.style;
        const s = document.createElement("style");
        document.head.appendChild(s), s.innerHTML = l, setTimeout(async () => {
          await d.set({
            data: n
          });
        }, 10);
      })();
    })(), (n, a) => c.value ? (v(), y("div", {
      key: 0,
      innerHTML: c.value
    }, null, 8, g)) : h("", !0);
  }
});
export {
  L as _
};
