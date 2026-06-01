import { hydrator as u } from "./hydrator.es.js";
import { index as l } from "./renderer.es.js";
const y = async () => ({
  f: {
    name: (a) => `${a.name}${a.id}`
  }
}), h = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const r = Math.random() * 16 | 0;
    return (a == "x" ? r : r & 3 | 8).toString(16);
  })
}), _ = async (a) => {
  const r = await y();
  return {
    set: async (s, i) => {
      const x = {
        r: ""
        //style: ``,
      }, d = s.data.curr || {
        id: h().set(),
        type: "text",
        data: {
          data: ""
          //Text
        }
      }, o = await l({
        my: {},
        custom: {},
        f: {
          ...a.f,
          name: (e) => r.f.name({ id: d.id, name: e })
        }
      }), m = await u({
        my: {},
        custom: {},
        f: {
          ...a.f,
          name: (e) => r.f.name({ id: d.id, name: e })
        }
      }), c = await o.set({
        data: {
          curr: d
        }
      });
      return setTimeout(async () => {
        const e = await m.set({
          data: {
            curr: d
          }
        }, {
          add: (t) => {
            let n = t.el;
            n?.setAttribute("contenteditable", "true"), n?.classList.add("block-content"), n?.addEventListener("click", () => {
            }), n?.addEventListener("input", function(p) {
              n.innerHTML, e.evt.change();
            });
          },
          change: (t) => {
            i?.change(t);
          }
        });
        ((t) => {
          const n = document.createElement("style");
          n.innerHTML = `${e.style}`, t.appendChild(n);
        })(document.head);
      }, 200), x.r = c.r, ((e) => {
        const t = document.createElement("style");
        t.innerHTML = `${c.style}`, e.appendChild(t);
      })(document.head), x;
    }
  };
};
export {
  _ as editor,
  _ as index
};
