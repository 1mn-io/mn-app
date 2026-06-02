const n = async (s) => (console.log("--custom [set]"), {
  set: async (t) => ({
    r: "<div>Custom</div>"
    //style: ``,
  })
});
export {
  n as custom,
  n as index
};
