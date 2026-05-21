import { H as a } from "./main-HoJjMwWR.js";
const { renderSlot: t, createBlock: d, createCommentVNode: l, openBlock: i, Teleport: u } = window.Vue;
var p = {
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
    this.mounted = a();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function s(e, f, o, m, n, r) {
  return r.inline ? t(e.$slots, "default", {
    key: 0
  }) : n.mounted ? (i(), d(u, {
    key: 1,
    to: o.appendTo
  }, [t(e.$slots, "default")], 8, ["to"])) : l("", !0);
}
p.render = s;
export {
  p as s
};
