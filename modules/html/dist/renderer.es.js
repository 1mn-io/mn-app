import "./style-DDBw8vRU.js";
//#region src/renderer/index.ts
var e = async (e) => ({ set: async (t) => (console.log(`--renderer [${t.data.curr.type}]`), {
	r: `
                <div class="${e.f.name("text")}" id="${e.f.name("root")}"  >
                  <div class="p-5">
                  ${{ value: () => t.data.curr.data.data }.value()}                  
                  </div>
                </div>
                `,
	head: "",
	style: (() => {
		let t = "";
		return t = `
                .${e.f.name("text")} {
                   background: transparent;
                }
                `, t;
	})()
}) });
//#endregion
export { e as index, e as renderer };
