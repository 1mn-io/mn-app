import { P as u, W as p } from "./index.es-D5wnkuBE.js";
import { d as f, X as l, _ as m, a1 as y, H as h } from "./runtime-dom.esm-bundler-TRF-LAC0.js";
const v = ["innerHTML"], b = /* @__PURE__ */ f({
  __name: "CEWidget",
  props: {
    _p: {},
    __p: {},
    ce_file: {}
  },
  setup(o) {
    const r = l({
      ce_file: o.ce_file
      //route?.meta?.ce_file,
    }), t = l(null), c = l(null);
    let i = "";
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
      let a = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, n = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      a = t.value.data, n.lazy_lib = t.value.config.lazy_lib;
      const _ = await u(n), d = await p(n);
      await (async () => {
        const e = await _.set({
          data: a
        });
        c.value = e.r, i = e.style;
        const s = document.createElement("style");
        document.head.appendChild(s), s.innerHTML = i, setTimeout(async () => {
          await d.set({
            data: a
          });
        }, 10);
      })();
    })(), (a, n) => c.value ? (h(), m("div", {
      key: 0,
      innerHTML: c.value
    }, null, 8, v)) : y("", !0);
  }
});
export {
  b as _
};
