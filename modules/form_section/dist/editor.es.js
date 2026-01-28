import { hydrator as m } from "./hydrator.es.js";
import { index as u } from "./renderer.es.js";
const y = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), p = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const n = Math.random() * 16 | 0;
    return (e == "x" ? n : n & 3 | 8).toString(16);
  })
}), h = async (e) => {
  const n = await y();
  return {
    set: async (x) => {
      const d = {
        r: ""
        //style: ``,
      }, r = x.data.curr || {
        id: p().set(),
        type: "text",
        data: {
          data: ""
          //Text
        }
      }, c = await u({
        f: {
          ...e.f,
          name: (t) => n.f.name({ id: r.id, name: t })
        }
      }), i = await m({
        my: {},
        f: {
          ...e.f,
          name: (t) => n.f.name({ id: r.id, name: t })
        }
      }), s = await c.set({
        data: {
          curr: r
        }
      });
      return setTimeout(async () => {
        const t = await i.set({
          data: {
            curr: r
          }
        });
        ((a) => {
          const o = document.createElement("style");
          o.innerHTML = `${t.style}`, a.appendChild(o);
        })(document.head);
      }, 200), d.r = s.r, ((t) => {
        const a = document.createElement("style");
        a.innerHTML = `${s.style}`, t.appendChild(a);
      })(document.head), d;
    }
  };
};
export {
  h as editor,
  h as index
};
