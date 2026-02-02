const w = () => ({
  set: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const n = Math.random() * 16 | 0;
    return (t == "x" ? n : n & 3 | 8).toString(16);
  })
}), b = async () => ({
  f: {
    name: (t) => `${t.name}${t.id}`
  }
}), g = async () => ({
  set: async (t) => {
    console.log("--theme");
    try {
      if (!t.el_id)
        throw new Error("[el_id] is required");
      const n = t.name, e = document.getElementById(t.el_id);
      if (!e)
        throw new Error("[el_id] is invalid");
      ((l) => {
        const s = (a) => {
          ((m) => {
            const i = m.getAttribute("data-ce");
            if (!i)
              return;
            const o = JSON.parse(i).filter((r) => r?.k.startsWith("t-"));
            if (o.length != 0)
              for (const r of o) {
                const f = r.k, h = r.v.split(" ");
                if (f == `t-${n}-class`)
                  for (const y of h)
                    m.classList.add(y);
                else
                  for (const y of h)
                    m.classList.remove(y);
              }
          })(a);
        };
        for (const a of l.getElementsByTagName("*"))
          s(a);
        s(l);
      })(e);
    } catch (n) {
      const e = `err: [theme] ${n}`;
      throw console.log(e), e;
    }
  }
});
function _(t, n = 1e3) {
  let e = {
    cnt: 0
  };
  return new Promise((l) => {
    const s = () => {
      console.log(`[setInterval] is running.. [count=${e.cnt}]`);
      try {
        t() && (clearInterval(a), l());
      } catch {
        console.log(`warn: [wait_until] ignoring the exception in setInterval and will check again after [interval=${n}]`);
      }
      e.cnt += 1;
    }, a = setInterval(() => {
      s();
    }, n);
    s();
  });
}
let k = class {
  listeners = {};
  on = (t, n) => ((this.listeners[t] ||= []).push(n), () => this.off(t, n));
  off = (t, n) => {
    this.listeners[t] = this.listeners[t]?.filter((e) => e !== n);
  };
  /** Sequential execution (await each listener) */
  emit = async (t, ...n) => {
    for (const e of this.listeners[t] ?? [])
      await e(...n);
  };
  /** Parallel execution (await all listeners) */
  emitParallel = async (t, ...n) => {
    await Promise.all(
      (this.listeners[t] ?? []).map((e) => e(...n))
    );
  };
  //Error-safe emit
  emitSafe = async (t, ...n) => {
    for (const e of this.listeners[t] ?? [])
      try {
        await e(...n);
      } catch (l) {
        this.listeners.error?.forEach(
          (s) => s(l)
        );
      }
  };
};
const d = () => new k();
class $ {
  startTime;
  endTime;
  isRunning;
  constructor() {
    this.startTime = 0, this.endTime = 0, this.isRunning = !1;
  }
  // Starts the timer
  start() {
    if (this.isRunning)
      throw new Error("Benchmark has already started.");
    this.startTime = performance.now(), this.isRunning = !0;
  }
  // Stops the timer and records the end time
  stop() {
    if (!this.isRunning)
      throw new Error("Benchmark hasn't started.");
    this.endTime = performance.now(), this.isRunning = !1;
  }
  // Get the result in milliseconds
  result() {
    if (this.isRunning)
      throw new Error("Benchmark is still running.");
    return {
      time_taken_ms: (this.endTime - this.startTime).toFixed(4)
    };
  }
}
console.log("content-engine-lib");
let c = {
  lib: {
    inbuilt_lib: [],
    // <any>[], // [`text`,`table`,`editor`]
    l: {},
    set: async (t) => {
      const n = t?.lib || [];
      for (const [e, l] of n.entries()) {
        const s = l, a = `${s.name}:${t.run_from}`, m = `${t.run_from}_src`;
        let i = s[m];
        const o = `${t.run_from}_src`;
        let r = t?.lazy_lib?.[o] || null;
        if (r && (r = r.replace("{*}", `${s.name}`)), console.log(`_lazy_src: ${r}`), console.log(`_src: ${i}`), c.lib.l.hasOwnProperty(`${a}`) == !1) {
          if (/^[a-zA-Z0-9]/.test(i) && i.includes("/") == !1 && c.lib.inbuilt_lib.indexOf(`${s.name}`) === -1)
            if (r)
              i = r;
            else
              throw `[lib-name=${s.name},lib-src=${i}] not allowed or available in in-build mode. Need to use lazy-lib config.`;
          if (i.startsWith("./") || i.startsWith("../")) {
            const f = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${i}`
            );
            c.lib.l[`${a}`] = {
              lib: f,
              src: i
            };
          }
          if (i.startsWith("http://") || i.startsWith("https://")) {
            const f = await import(
              /* @vite-ignore */
              /* webpackIgnore: true */
              `${i}`
            );
            c.lib.l[`${a}`] = {
              lib: f,
              src: i
            };
          }
        }
      }
      console.log(await c.lib.get_all({}));
    },
    get: async (t) => {
      let n = null;
      const e = `${t.name}:${t.run_from}`;
      return c.lib.l.hasOwnProperty(`${e}`) == !1 && await c.lib.set({
        lib: [
          {
            renderer_src: t.name,
            hydrator_src: t.name,
            editor_src: t.name,
            name: t.name
          }
        ],
        run_from: t.run_from,
        lazy_lib: t.lazy_lib
      }), n = c.lib.l[`${e}`], n;
    },
    get_all: async (t) => c.lib.l
  },
  path: {
    set: (t) => {
      let n = "", e = "";
      const l = t.src.split("/");
      if (t.src.indexOf("://localhost") !== -1 || t.src.indexOf("://127.0.0.1") !== -1 || (e = "/dist"), l.indexOf(t.type) !== -1)
        for (const [s, a] of l.entries()) {
          let m = s == 0 ? "" : "/";
          if (n += `${m}${a}`, a == t.type)
            return `${n}${e}${t.name}`;
        }
      else
        for (const [s, a] of l.entries()) {
          let m = s == 0 ? "" : "/";
          if (n += `${m}${a}`, a == "src")
            return `${n}${e}${t.name}`;
        }
      return `${n}${e}${t.name}`;
    }
  }
};
const x = d(), p = d(), v = x.on;
x.emit;
const E = p.emit;
p.on;
const T = async (t) => {
  const n = await b();
  return await c.lib.set({ lib: t.lib, run_from: "renderer", lazy_lib: t.lazy_lib }), {
    set: async (e) => {
      console.log("--renderer [set]"), e.return = e?.return || {}, e.return.r = e?.return?.r || "full";
      const l = new $();
      l.start();
      let s = e.data?.value?.l || e.data.l, a = {
        r: null,
        //``
        style: "",
        head: "",
        // `<test>head-1</test>`
        //set..
        //total:_l.length,
        benchmark: null
      };
      return e.return.r == "full" ? a.r = "" : a.r = [], await (async () => {
        for (const m of s) {
          const i = await await c.lib.get({ name: m.type, run_from: "renderer", lazy_lib: t.lazy_lib }), o = await (await i.lib.index({
            f: {
              name: (r) => n.f.name({ id: m.id, name: r }),
              get_lib: async (r) => await await c.lib.get({ name: r.name, run_from: r.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (r) => await (await g()).set(r),
              path: (r) => c.path.set({ src: i.src, type: m.type, name: r }),
              //set..
              uuid: () => w().set(),
              wait_until: _
            }
          })).set(
            {
              data: {
                curr: m
              }
            }
            /*_$cb*/
          );
          e?.return?.r == "full" ? a.r += o?.r || "" : a.r.push(o?.r || ""), a.style += o?.style || "", a.head += o?.head || "";
        }
      })(), l.stop(), a.benchmark = l.result(), a;
    }
  };
}, O = async (t) => {
  const n = await b();
  return await c.lib.set({ lib: t.lib, run_from: "hydrator", lazy_lib: t.lazy_lib }), {
    set: async (e) => {
      console.log("--hydrator [set]");
      const l = new $();
      l.start();
      let s = {
        r: "",
        style: ""
      }, a = {
        style_id: `${w().set()}_stl`
      }, m = e.data?.value?.l || e.data.l;
      const i = async () => {
        for (const o of m) {
          const r = await await c.lib.get({ name: o.type, run_from: "hydrator", lazy_lib: t.lazy_lib }), f = r.lib, h = d(), y = h.on, z = await (await f.index({
            /**@my module can use it to set custom variables. */
            my: {},
            //NOTE: We cannot add or use any variable of this object, It's reserved for module.
            f: {
              name: (u) => n.f.name({ id: o.id, name: u }),
              get_lib: async (u) => await await c.lib.get({ name: u.name, run_from: u.run_from, lazy_lib: t.lazy_lib }),
              set_theme: async (u) => await (await g()).set(u),
              path: (u) => c.path.set({ src: r.src, type: o.type, name: u }),
              //set..
              uuid: () => w().set(),
              wait_until: _,
              //set..
              call: E,
              listen: y,
              //set..
              new_emitter: () => d()
            }
          })).set(
            {
              data: {
                curr: o
              }
            }
            /*_$cb*/
          );
          v("msg", async (u) => {
            try {
              if (Object.keys(u.where || {}).length == 0) {
                await h.emit("msg", u);
                return;
              }
            } catch {
            }
            try {
              if (o?.[u.where?.key || ""] == u.where?.value) {
                await h.emit("msg", u);
                return;
              }
            } catch {
            }
          }), s.style += z.style;
        }
      };
      await _(
        () => document.readyState === "complete" || typeof window < "u",
        50
      ), await i();
      try {
        ((o) => {
          const r = document.getElementById(`${a.style_id}`);
          r && r.remove();
          const f = document.createElement("style");
          f.id = `${a.style_id}`, f.innerHTML = `${s.style}`, o.appendChild(f);
        })(document.head);
      } catch (o) {
        console.log(`${o}, Failed to set style..`);
      }
      return l.stop(), {
        //style_id:_ins.style_id,
        //total:_l.length,
        benchmark: l.result()
      };
    }
  };
};
export {
  T as P,
  O as W
};
