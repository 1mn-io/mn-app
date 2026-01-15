import { H as r } from "./main-BuXBcYFI.js";
import { a8 as t, G as d, a2 as s, H as l, ak as i } from "./runtime-dom.esm-bundler-C71lIG0B.js";
var u = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = r();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function p(e, f, o, m, n, a) {
  return a.inline ? t(e.$slots, "default", {
    key: 0
  }) : n.mounted ? (l(), d(i, {
    key: 1,
    to: o.appendTo
  }, [t(e.$slots, "default")], 8, ["to"])) : s("", !0);
}
u.render = p;
export {
  u as s
};
