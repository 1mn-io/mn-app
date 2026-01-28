import { d as v, o as u, c as p, a as y, t as j, b as w, F as b, r as x, e as h, f as $ } from "./runtime-dom.esm-bundler-BQo8LPmC.js";
import { ce_renderer as k, ce_hydrator as B } from "content-engine-lib";
const L = { class: "bg-gray-100 flex items-center justify-center min-h-screen" }, z = {
  "class-old": "bg-white shadow-lg rounded-lg p-8 w-full max-w-sm",
  class: "bg-white shadow-lg rounded-lg p-8 w-full max-w-xl"
}, E = {
  key: 0,
  class: "text-2xl font-bold text-center mb-6"
}, T = ["innerHTML"], C = /* @__PURE__ */ v({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    const a = t;
    let c = [];
    const n = h([]), l = h(null);
    (async () => typeof a._$p.data.curr.data.ce_file == "string" ? c = (await (await fetch(a._$p.data.curr.data.ce_file)).json()).data.l : c = a._$p.data.curr.data.ce_file.data.l)();
    const o = h(null);
    let i = "";
    const g = () => {
      n.value = [];
      const e = c, r = [...e.keys()].filter((s) => e[s].type == "form_section");
      for (const s of r) {
        let _ = {
          _s: ""
        };
        for (const [f, d] of e.entries())
          try {
            e[s].id == d.data.form.section_id && (_._s += ` ${o.value[f]} `);
          } catch {
          }
        n.value.push(` 
        <div class='p-2'>
        
        <div>
        ${o.value[s]} 
        </div>

        <div class='flex flex-wrap gap-2 md:gap-3' >
        ${_._s}
        </div>

        </div>
        
        `);
      }
    };
    return (async () => {
      l.value = {
        config: {
          lazy_lib: {
            renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
            hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
            editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js"
          }
        },
        data: {
          // "l": [
          //     {
          //         "id": "7bc78c-carousel",
          //         "type": "carousel",
          //         "slug": "carousel",
          //         "data": {
          //             "data": "",
          //             "theme": "light",
          //             "foo": ""
          //         }
          //     },
          //     {
          //         "id": "3e1bc78c-cart_popup",
          //         "type": "cart_popup",
          //         "slug": "cart_popup",
          //         "data": {
          //             "data": "",
          //             "theme": "light",
          //             "env": "dev"
          //         }
          //     }
          // ]
          l: c
        }
      };
      let e = {
        l: [
          {
            id: "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
            type: "text",
            data: {
              data: "Loading.."
            }
          }
        ]
      }, r = {
        lib: [],
        lazy_lib: {
          renderer_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/renderer.es.js",
          hydrator_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/hydrator.es.js",
          editor_src: "https://cdn.jsdelivr.net/gh/coreutility/content-engine@latest/modules/{*}/dist/editor.es.js"
        }
      };
      e = l.value.data, r.lazy_lib = l.value.config.lazy_lib;
      const s = await k(r), _ = await B(r);
      await (async () => {
        const d = await s.set({
          data: e,
          return: {
            r: "chunk"
          }
        });
        console.log(d.r), o.value = d.r, i = d.style, n.value = o.value, g();
        const m = document.createElement("style");
        document.head.appendChild(m), m.innerHTML = i, setTimeout(async () => {
          await _.set({
            data: e
          });
        }, 10);
      })();
    })(), (e, r) => (u(), p("div", L, [
      y("div", z, [
        t._$p.data.curr.data.title ? (u(), p("h2", E, j(t._$p.data.curr.data.title), 1)) : w("", !0),
        (u(!0), p(b, null, x(n.value, (s) => (u(), p("div", null, [
          y("div", { innerHTML: s }, null, 8, T)
        ]))), 256))
      ])
    ]));
  }
}), F = async (t) => ({
  set: async (a) => {
    console.log(`--hydrator [${a.data.curr.type}]`);
    const n = $(C, {
      _p: t,
      _$p: a
    }), l = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: a,
            custom: {}
          });
        }
      }
    }, o = document.getElementById(t.f.name("vue-root"));
    return n.mount(o), l;
  }
});
export {
  F as hydrator,
  F as index
};
