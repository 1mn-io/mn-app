import { index as u } from "./hydrator.es.js";
import { index as l } from "./renderer.es.js";
const y = async () => ({
  f: {
    name: (n) => `${n.name}${n.id}`
  }
}), p = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const r = Math.random() * 16 | 0;
    return (n == "x" ? r : r & 3 | 8).toString(16);
  })
}), _ = async (n) => {
  const r = await y();
  return {
    set: async (x, c) => {
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
          ...n.f,
          name: (a) => r.f.name({ id: d.id, name: a })
        }
      }), m = await u({
        f: {
          ...n.f,
          name: (a) => r.f.name({ id: d.id, name: a })
        }
      }), i = await o.set({
        data: {
          curr: d
        }
      });
      return setTimeout(async () => {
        const a = await m.set({
          data: {
            curr: d
          }
        }, {
          add: (e) => {
            let t = e.el;
            t?.setAttribute("contenteditable", "true"), t?.classList.add("block-content"), t?.addEventListener("click", () => {
            }), t?.addEventListener("input", function(f) {
              t.innerHTML;
            });
          },
          change: (e) => {
            c?.change(e);
          }
        });
        ((e) => {
          const t = document.createElement("style");
          t.innerHTML = `${a.style}`, e.appendChild(t);
        })(document.head);
      }, 200), s.r = i.r, ((a) => {
        const e = document.createElement("style");
        e.innerHTML = `${i.style}`, a.appendChild(e);
      })(document.head), s;
    }
  };
};
export {
  _ as editor,
  _ as index
};
