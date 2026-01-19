const t = async () => ({
  f: {
    name: (e) => `${e.name}${e.id}`
  }
}), r = async (e) => (await t(), {
  set: async (n, a) => ({
    r: '<div class="clean-page"><h1>The Editor has been removed.</h1></div>',
    style: `
                    .clean-page { 
                        padding: 50px; 
                        text-align: center; 
                        background: white; 
                        height: 100vh;
                    }
                `,
    evt: {
      change: () => {
        a?.change({ _$p: n });
      }
    }
  })
});
export {
  r as editor,
  r as index
};
