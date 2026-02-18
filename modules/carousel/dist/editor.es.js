import { index as u } from "./hydrator.es.js";
import { index as l } from "./renderer.es.js";
const y = async () => ({
  f: {
    name: (a) => `${a.name}${a.id}`
  }
}), p = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const r = Math.random() * 16 | 0;
    return (a == "x" ? r : r & 3 | 8).toString(16);
  })
}), _ = async (a) => {
  const r = await y();
  return {
    set: async (x, i) => {
      const s = {
        r: ""
        //style: ``,
      }, d = x.data.curr || {
        id: p().set(),
        type: "text",
        data: {
          data: ""
          //Text
        }
      }, o = await l({
        f: {
          ...a.f,
          name: (e) => r.f.name({ id: d.id, name: e })
        }
      }), m = await u({
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
            }), n?.addEventListener("input", function(f) {
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
      }, 200), s.r = c.r, ((e) => {
        const t = document.createElement("style");
        t.innerHTML = `${c.style}`, e.appendChild(t);
      })(document.head), s;
    }
  };
};
export {
  _ as editor,
  _ as index
};
