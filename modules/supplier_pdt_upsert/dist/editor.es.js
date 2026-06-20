import { hydrator as u } from "./hydrator.es.js";
import { index as y } from "./renderer.es.js";
const f = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
}), h = async (t) => {
  const r = await f();
  return {
    set: async (c) => {
      const d = {
        r: ""
        //style: ``,
      }, n = c.data.curr || {
        id: t.f.uuid(),
        type: "text",
        data: {
          data: ""
          //Text
        }
      }, i = await y({
        my: {},
        custom: {},
        f: {
          ...t.f,
          name: (e) => r.f.name({ id: n.id, name: e })
        }
      }), m = await u({
        my: {},
        custom: {},
        f: {
          ...t.f,
          name: (e) => r.f.name({ id: n.id, name: e })
        }
      }), s = await i.set({
        data: {
          curr: n
        }
      });
      return setTimeout(async () => {
        const e = await m.set({
          data: {
            curr: n
          }
        });
        ((a) => {
          const o = document.createElement("style");
          o.innerHTML = `${e.style}`, a.appendChild(o);
        })(document.head);
      }, 200), d.r = s.r, ((e) => {
        const a = document.createElement("style");
        a.innerHTML = `${s.style}`, e.appendChild(a);
      })(document.head), d;
    }
  };
};
export {
  h as editor,
  h as index
};
