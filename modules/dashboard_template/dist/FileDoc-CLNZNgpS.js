import { s as T } from "./index-DQvMDPdp.js";
import { w as j, B as H, R as K, a as P, s as V, P as A, W as Z, ae as G, ah as Y } from "./main-BRMl0FA-.js";
import { s as q } from "./index-Bxz-5Bpz.js";
import { V as m, H as u, W as p, m as r, E as C, a2 as k, a as g, Z as S, p as F, a0 as b, G as h, Y as B, F as U, J as y, I as v, ai as D, ag as z, _ as J, L as X } from "./runtime-dom.esm-bundler-CEAeiVlj.js";
import { s as Q } from "./index-CkycdAcI.js";
import { s as $ } from "./index-BvD4lp9b.js";
import { a as x } from "./index-CLYEevJz.js";
var W = {
  name: "UploadIcon",
  extends: j
};
function _(e) {
  return ie(e) || te(e) || le(e) || ee();
}
function ee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(e, l) {
  if (e) {
    if (typeof e == "string") return E(e, l);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? E(e, l) : void 0;
  }
}
function te(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ie(e) {
  if (Array.isArray(e)) return E(e);
}
function E(e, l) {
  (l == null || l > e.length) && (l = e.length);
  for (var i = 0, n = Array(l); i < l; i++) n[i] = e[i];
  return n;
}
function ne(e, l, i, n, a, t) {
  return u(), m("svg", r({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), _(l[0] || (l[0] = [p("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",
    fill: "currentColor"
  }, null, -1)])), 16);
}
W.render = ne;
var ae = `
    .p-fileupload input[type='file'] {
        display: none;
    }

    .p-fileupload-advanced {
        border: 1px solid dt('fileupload.border.color');
        border-radius: dt('fileupload.border.radius');
        background: dt('fileupload.background');
        color: dt('fileupload.color');
    }

    .p-fileupload-header {
        display: flex;
        align-items: center;
        padding: dt('fileupload.header.padding');
        background: dt('fileupload.header.background');
        color: dt('fileupload.header.color');
        border-style: solid;
        border-width: dt('fileupload.header.border.width');
        border-color: dt('fileupload.header.border.color');
        border-radius: dt('fileupload.header.border.radius');
        gap: dt('fileupload.header.gap');
    }

    .p-fileupload-content {
        border: 1px solid transparent;
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.content.gap');
        transition: border-color dt('fileupload.transition.duration');
        padding: dt('fileupload.content.padding');
    }

    .p-fileupload-content .p-progressbar {
        width: 100%;
        height: dt('fileupload.progressbar.height');
    }

    .p-fileupload-file-list {
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.filelist.gap');
    }

    .p-fileupload-file {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: dt('fileupload.file.padding');
        border-block-end: 1px solid dt('fileupload.file.border.color');
        gap: dt('fileupload.file.gap');
    }

    .p-fileupload-file:last-child {
        border-block-end: 0;
    }

    .p-fileupload-file-info {
        display: flex;
        flex-direction: column;
        gap: dt('fileupload.file.info.gap');
    }

    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }

    .p-fileupload-file-actions {
        margin-inline-start: auto;
    }

    .p-fileupload-highlight {
        border: 1px dashed dt('fileupload.content.highlight.border.color');
    }

    .p-fileupload-basic .p-message {
        margin-block-end: dt('fileupload.basic.gap');
    }

    .p-fileupload-basic-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: dt('fileupload.basic.gap');
    }
`, se = {
  root: function(l) {
    var i = l.props;
    return ["p-fileupload p-fileupload-".concat(i.mode, " p-component")];
  },
  header: "p-fileupload-header",
  pcChooseButton: "p-fileupload-choose-button",
  pcUploadButton: "p-fileupload-upload-button",
  pcCancelButton: "p-fileupload-cancel-button",
  content: "p-fileupload-content",
  fileList: "p-fileupload-file-list",
  file: "p-fileupload-file",
  fileThumbnail: "p-fileupload-file-thumbnail",
  fileInfo: "p-fileupload-file-info",
  fileName: "p-fileupload-file-name",
  fileSize: "p-fileupload-file-size",
  pcFileBadge: "p-fileupload-file-badge",
  fileActions: "p-fileupload-file-actions",
  pcFileRemoveButton: "p-fileupload-file-remove-button",
  basicContent: "p-fileupload-basic-content"
}, oe = H.extend({
  name: "fileupload",
  style: ae,
  classes: se
}), re = {
  name: "BaseFileUpload",
  extends: V,
  props: {
    name: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    mode: {
      type: String,
      default: "advanced"
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    accept: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    auto: {
      type: Boolean,
      default: !1
    },
    maxFileSize: {
      type: Number,
      default: null
    },
    invalidFileSizeMessage: {
      type: String,
      default: "{0}: Invalid file size, file size should be smaller than {1}."
    },
    invalidFileTypeMessage: {
      type: String,
      default: "{0}: Invalid file type, allowed file types: {1}."
    },
    fileLimit: {
      type: Number,
      default: null
    },
    invalidFileLimitMessage: {
      type: String,
      default: "Maximum number of files exceeded, limit is {0} at most."
    },
    withCredentials: {
      type: Boolean,
      default: !1
    },
    previewWidth: {
      type: Number,
      default: 50
    },
    chooseLabel: {
      type: String,
      default: null
    },
    uploadLabel: {
      type: String,
      default: null
    },
    cancelLabel: {
      type: String,
      default: null
    },
    customUpload: {
      type: Boolean,
      default: !1
    },
    showUploadButton: {
      type: Boolean,
      default: !0
    },
    showCancelButton: {
      type: Boolean,
      default: !0
    },
    chooseIcon: {
      type: String,
      default: void 0
    },
    uploadIcon: {
      type: String,
      default: void 0
    },
    cancelIcon: {
      type: String,
      default: void 0
    },
    style: null,
    class: null,
    chooseButtonProps: {
      type: null,
      default: null
    },
    uploadButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary"
        };
      }
    },
    cancelButtonProps: {
      type: Object,
      default: function() {
        return {
          severity: "secondary"
        };
      }
    }
  },
  style: oe,
  provide: function() {
    return {
      $pcFileUpload: this,
      $parentInstance: this
    };
  }
}, R = {
  name: "FileContent",
  hostName: "FileUpload",
  extends: V,
  emits: ["remove"],
  props: {
    files: {
      type: Array,
      default: function() {
        return [];
      }
    },
    badgeSeverity: {
      type: String,
      default: "warn"
    },
    badgeValue: {
      type: String,
      default: null
    },
    previewWidth: {
      type: Number,
      default: 50
    },
    templates: {
      type: null,
      default: null
    }
  },
  methods: {
    formatSize: function(l) {
      var i, n = 1024, a = 3, t = ((i = this.$primevue.config.locale) === null || i === void 0 ? void 0 : i.fileSizeTypes) || ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (l === 0)
        return "0 ".concat(t[0]);
      var s = Math.floor(Math.log(l) / Math.log(n)), o = parseFloat((l / Math.pow(n, s)).toFixed(a));
      return "".concat(o, " ").concat(t[s]);
    }
  },
  components: {
    Button: T,
    Badge: x,
    TimesIcon: P
  }
}, ue = ["alt", "src", "width"];
function de(e, l, i, n, a, t) {
  var s = C("Badge"), o = C("TimesIcon"), f = C("Button");
  return u(!0), m(U, null, k(i.files, function(d, c) {
    return u(), m("div", r({
      key: d.name + d.type + d.size,
      class: e.cx("file")
    }, {
      ref_for: !0
    }, e.ptm("file")), [p("img", r({
      role: "presentation",
      class: e.cx("fileThumbnail"),
      alt: d.name,
      src: d.objectURL,
      width: i.previewWidth
    }, {
      ref_for: !0
    }, e.ptm("fileThumbnail")), null, 16, ue), p("div", r({
      class: e.cx("fileInfo")
    }, {
      ref_for: !0
    }, e.ptm("fileInfo")), [p("div", r({
      class: e.cx("fileName")
    }, {
      ref_for: !0
    }, e.ptm("fileName")), S(d.name), 17), p("span", r({
      class: e.cx("fileSize")
    }, {
      ref_for: !0
    }, e.ptm("fileSize")), S(t.formatSize(d.size)), 17)], 16), g(s, {
      value: i.badgeValue,
      class: F(e.cx("pcFileBadge")),
      severity: i.badgeSeverity,
      unstyled: e.unstyled,
      pt: e.ptm("pcFileBadge")
    }, null, 8, ["value", "class", "severity", "unstyled", "pt"]), p("div", r({
      class: e.cx("fileActions")
    }, {
      ref_for: !0
    }, e.ptm("fileActions")), [g(f, {
      onClick: function(Se) {
        return e.$emit("remove", c);
      },
      text: "",
      rounded: "",
      severity: "danger",
      class: F(e.cx("pcFileRemoveButton")),
      unstyled: e.unstyled,
      pt: e.ptm("pcFileRemoveButton")
    }, {
      icon: b(function(L) {
        return [i.templates.fileremoveicon ? (u(), h(B(i.templates.fileremoveicon), {
          key: 0,
          class: F(L.class),
          file: d,
          index: c
        }, null, 8, ["class", "file", "index"])) : (u(), h(o, r({
          key: 1,
          class: L.class,
          "aria-hidden": "true"
        }, {
          ref_for: !0
        }, e.ptm("pcFileRemoveButton").icon), null, 16, ["class"]))];
      }),
      _: 2
    }, 1032, ["onClick", "class", "unstyled", "pt"])], 16)], 16);
  }), 128);
}
R.render = de;
function w(e) {
  return fe(e) || ce(e) || O(e) || pe();
}
function pe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ce(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fe(e) {
  if (Array.isArray(e)) return M(e);
}
function I(e, l) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = O(e)) || l) {
      i && (e = i);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(d) {
        throw d;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var t, s = !0, o = !1;
  return { s: function() {
    i = i.call(e);
  }, n: function() {
    var d = i.next();
    return s = d.done, d;
  }, e: function(d) {
    o = !0, t = d;
  }, f: function() {
    try {
      s || i.return == null || i.return();
    } finally {
      if (o) throw t;
    }
  } };
}
function O(e, l) {
  if (e) {
    if (typeof e == "string") return M(e, l);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? M(e, l) : void 0;
  }
}
function M(e, l) {
  (l == null || l > e.length) && (l = e.length);
  for (var i = 0, n = Array(l); i < l; i++) n[i] = e[i];
  return n;
}
var N = {
  name: "FileUpload",
  extends: re,
  inheritAttrs: !1,
  emits: ["select", "uploader", "before-upload", "progress", "upload", "error", "before-send", "clear", "remove", "remove-uploaded-file"],
  duplicateIEEvent: !1,
  data: function() {
    return {
      uploadedFileCount: 0,
      files: [],
      messages: [],
      focused: !1,
      progress: null,
      uploadedFiles: []
    };
  },
  methods: {
    upload: function() {
      this.hasFiles && this.uploader();
    },
    onBasicUploaderClick: function(l) {
      l.button === 0 && this.$refs.fileInput.click();
    },
    onFileSelect: function(l) {
      if (l.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
        this.duplicateIEEvent = !1;
        return;
      }
      this.isBasic && this.hasFiles && (this.files = []), this.messages = [], this.files = this.files || [];
      var i = l.dataTransfer ? l.dataTransfer.files : l.target.files, n = I(i), a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var t = a.value;
          !this.isFileSelected(t) && !this.isFileLimitExceeded() && this.validate(t) && (this.isImage(t) && (t.objectURL = window.URL.createObjectURL(t)), this.files.push(t));
        }
      } catch (s) {
        n.e(s);
      } finally {
        n.f();
      }
      this.$emit("select", {
        originalEvent: l,
        files: this.files
      }), this.fileLimit && this.checkFileLimit(), this.auto && this.hasFiles && !this.isFileLimitExceeded() && this.uploader(), l.type !== "drop" && this.isIE11() ? this.clearIEInput() : this.clearInputElement();
    },
    choose: function() {
      this.$refs.fileInput.click();
    },
    uploader: function() {
      var l = this;
      if (this.customUpload)
        this.fileLimit && (this.uploadedFileCount += this.files.length), this.$emit("uploader", {
          files: this.files
        });
      else {
        var i = new XMLHttpRequest(), n = new FormData();
        this.$emit("before-upload", {
          xhr: i,
          formData: n
        });
        var a = I(this.files), t;
        try {
          for (a.s(); !(t = a.n()).done; ) {
            var s = t.value;
            n.append(this.name, s, s.name);
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        i.upload.addEventListener("progress", function(o) {
          o.lengthComputable && (l.progress = Math.round(o.loaded * 100 / o.total)), l.$emit("progress", {
            originalEvent: o,
            progress: l.progress
          });
        }), i.onreadystatechange = function() {
          if (i.readyState === 4) {
            if (l.progress = 0, i.status >= 200 && i.status < 300) {
              var o;
              l.fileLimit && (l.uploadedFileCount += l.files.length), l.$emit("upload", {
                xhr: i,
                files: l.files
              }), (o = l.uploadedFiles).push.apply(o, w(l.files));
            } else
              l.$emit("error", {
                xhr: i,
                files: l.files
              });
            l.clear();
          }
        }, this.url && (i.open("POST", this.url, !0), this.$emit("before-send", {
          xhr: i,
          formData: n
        }), i.withCredentials = this.withCredentials, i.send(n));
      }
    },
    clear: function() {
      this.files = [], this.messages = null, this.$emit("clear"), this.isAdvanced && this.clearInputElement();
    },
    onFocus: function() {
      this.focused = !0;
    },
    onBlur: function() {
      this.focused = !1;
    },
    isFileSelected: function(l) {
      if (this.files && this.files.length) {
        var i = I(this.files), n;
        try {
          for (i.s(); !(n = i.n()).done; ) {
            var a = n.value;
            if (a.name + a.type + a.size === l.name + l.type + l.size) return !0;
          }
        } catch (t) {
          i.e(t);
        } finally {
          i.f();
        }
      }
      return !1;
    },
    isIE11: function() {
      return !!window.MSInputMethodContext && !!document.documentMode;
    },
    validate: function(l) {
      return this.accept && !this.isFileTypeValid(l) ? (this.messages.push(this.invalidFileTypeMessage.replace("{0}", l.name).replace("{1}", this.accept)), !1) : this.maxFileSize && l.size > this.maxFileSize ? (this.messages.push(this.invalidFileSizeMessage.replace("{0}", l.name).replace("{1}", this.formatSize(this.maxFileSize))), !1) : !0;
    },
    isFileTypeValid: function(l) {
      var i = this.accept.split(",").map(function(o) {
        return o.trim();
      }), n = I(i), a;
      try {
        for (n.s(); !(a = n.n()).done; ) {
          var t = a.value, s = this.isWildcard(t) ? this.getTypeClass(l.type) === this.getTypeClass(t) : l.type == t || this.getFileExtension(l).toLowerCase() === t.toLowerCase();
          if (s)
            return !0;
        }
      } catch (o) {
        n.e(o);
      } finally {
        n.f();
      }
      return !1;
    },
    getTypeClass: function(l) {
      return l.substring(0, l.indexOf("/"));
    },
    isWildcard: function(l) {
      return l.indexOf("*") !== -1;
    },
    getFileExtension: function(l) {
      return "." + l.name.split(".").pop();
    },
    isImage: function(l) {
      return /^image\//.test(l.type);
    },
    onDragEnter: function(l) {
      !this.disabled && (!this.hasFiles || this.multiple) && (l.stopPropagation(), l.preventDefault());
    },
    onDragOver: function(l) {
      !this.disabled && (!this.hasFiles || this.multiple) && (!this.isUnstyled && Z(this.$refs.content, "p-fileupload-highlight"), this.$refs.content.setAttribute("data-p-highlight", !0), l.stopPropagation(), l.preventDefault());
    },
    onDragLeave: function() {
      this.disabled || (!this.isUnstyled && A(this.$refs.content, "p-fileupload-highlight"), this.$refs.content.setAttribute("data-p-highlight", !1));
    },
    onDrop: function(l) {
      if (!this.disabled) {
        !this.isUnstyled && A(this.$refs.content, "p-fileupload-highlight"), this.$refs.content.setAttribute("data-p-highlight", !1), l.stopPropagation(), l.preventDefault();
        var i = l.dataTransfer ? l.dataTransfer.files : l.target.files, n = this.multiple || i && i.length === 1;
        n && this.onFileSelect(l);
      }
    },
    remove: function(l) {
      this.clearInputElement();
      var i = this.files.splice(l, 1)[0];
      this.files = w(this.files), this.$emit("remove", {
        file: i,
        files: this.files
      });
    },
    removeUploadedFile: function(l) {
      var i = this.uploadedFiles.splice(l, 1)[0];
      this.uploadedFiles = w(this.uploadedFiles), this.$emit("remove-uploaded-file", {
        file: i,
        files: this.uploadedFiles
      });
    },
    clearInputElement: function() {
      this.$refs.fileInput.value = "";
    },
    clearIEInput: function() {
      this.$refs.fileInput && (this.duplicateIEEvent = !0, this.$refs.fileInput.value = "");
    },
    formatSize: function(l) {
      var i, n = 1024, a = 3, t = ((i = this.$primevue.config.locale) === null || i === void 0 ? void 0 : i.fileSizeTypes) || ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      if (l === 0)
        return "0 ".concat(t[0]);
      var s = Math.floor(Math.log(l) / Math.log(n)), o = parseFloat((l / Math.pow(n, s)).toFixed(a));
      return "".concat(o, " ").concat(t[s]);
    },
    isFileLimitExceeded: function() {
      return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focused && (this.focused = !1), this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
    },
    checkFileLimit: function() {
      this.isFileLimitExceeded() && this.messages.push(this.invalidFileLimitMessage.replace("{0}", this.fileLimit.toString()));
    },
    onMessageClose: function() {
      this.messages = null;
    }
  },
  computed: {
    isAdvanced: function() {
      return this.mode === "advanced";
    },
    isBasic: function() {
      return this.mode === "basic";
    },
    chooseButtonClass: function() {
      return [this.cx("pcChooseButton"), this.class];
    },
    basicFileChosenLabel: function() {
      var l;
      if (this.auto) return this.chooseButtonLabel;
      if (this.hasFiles) {
        var i;
        return this.files && this.files.length === 1 ? this.files[0].name : (i = this.$primevue.config.locale) === null || i === void 0 || (i = i.fileChosenMessage) === null || i === void 0 ? void 0 : i.replace("{0}", this.files.length);
      }
      return ((l = this.$primevue.config.locale) === null || l === void 0 ? void 0 : l.noFileChosenMessage) || "";
    },
    hasFiles: function() {
      return this.files && this.files.length > 0;
    },
    hasUploadedFiles: function() {
      return this.uploadedFiles && this.uploadedFiles.length > 0;
    },
    chooseDisabled: function() {
      return this.disabled || this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    },
    uploadDisabled: function() {
      return this.disabled || !this.hasFiles || this.fileLimit && this.fileLimit < this.files.length;
    },
    cancelDisabled: function() {
      return this.disabled || !this.hasFiles;
    },
    chooseButtonLabel: function() {
      return this.chooseLabel || this.$primevue.config.locale.choose;
    },
    uploadButtonLabel: function() {
      return this.uploadLabel || this.$primevue.config.locale.upload;
    },
    cancelButtonLabel: function() {
      return this.cancelLabel || this.$primevue.config.locale.cancel;
    },
    completedLabel: function() {
      return this.$primevue.config.locale.completed;
    },
    pendingLabel: function() {
      return this.$primevue.config.locale.pending;
    }
  },
  components: {
    Button: T,
    ProgressBar: $,
    Message: Q,
    FileContent: R,
    PlusIcon: q,
    UploadIcon: W,
    TimesIcon: P
  },
  directives: {
    ripple: K
  }
}, he = ["multiple", "accept", "disabled"], me = ["accept", "disabled", "multiple"];
function ge(e, l, i, n, a, t) {
  var s = C("Button"), o = C("ProgressBar"), f = C("Message"), d = C("FileContent");
  return t.isAdvanced ? (u(), m("div", r({
    key: 0,
    class: e.cx("root")
  }, e.ptmi("root")), [p("input", r({
    ref: "fileInput",
    type: "file",
    onChange: l[0] || (l[0] = function() {
      return t.onFileSelect && t.onFileSelect.apply(t, arguments);
    }),
    multiple: e.multiple,
    accept: e.accept,
    disabled: t.chooseDisabled
  }, e.ptm("input")), null, 16, he), p("div", r({
    class: e.cx("header")
  }, e.ptm("header")), [v(e.$slots, "header", {
    files: a.files,
    uploadedFiles: a.uploadedFiles,
    chooseCallback: t.choose,
    uploadCallback: t.uploader,
    clearCallback: t.clear
  }, function() {
    return [g(s, r({
      label: t.chooseButtonLabel,
      class: t.chooseButtonClass,
      style: e.style,
      disabled: e.disabled,
      unstyled: e.unstyled,
      onClick: t.choose,
      onKeydown: D(t.choose, ["enter"]),
      onFocus: t.onFocus,
      onBlur: t.onBlur
    }, e.chooseButtonProps, {
      pt: e.ptm("pcChooseButton")
    }), {
      icon: b(function(c) {
        return [v(e.$slots, "chooseicon", {}, function() {
          return [(u(), h(B(e.chooseIcon ? "span" : "PlusIcon"), r({
            class: [c.class, e.chooseIcon],
            "aria-hidden": "true"
          }, e.ptm("pcChooseButton").icon), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["label", "class", "style", "disabled", "unstyled", "onClick", "onKeydown", "onFocus", "onBlur", "pt"]), e.showUploadButton ? (u(), h(s, r({
      key: 0,
      class: e.cx("pcUploadButton"),
      label: t.uploadButtonLabel,
      onClick: t.uploader,
      disabled: t.uploadDisabled,
      unstyled: e.unstyled
    }, e.uploadButtonProps, {
      pt: e.ptm("pcUploadButton")
    }), {
      icon: b(function(c) {
        return [v(e.$slots, "uploadicon", {}, function() {
          return [(u(), h(B(e.uploadIcon ? "span" : "UploadIcon"), r({
            class: [c.class, e.uploadIcon],
            "aria-hidden": "true"
          }, e.ptm("pcUploadButton").icon, {
            "data-pc-section": "uploadbuttonicon"
          }), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["class", "label", "onClick", "disabled", "unstyled", "pt"])) : y("", !0), e.showCancelButton ? (u(), h(s, r({
      key: 1,
      class: e.cx("pcCancelButton"),
      label: t.cancelButtonLabel,
      onClick: t.clear,
      disabled: t.cancelDisabled,
      unstyled: e.unstyled
    }, e.cancelButtonProps, {
      pt: e.ptm("pcCancelButton")
    }), {
      icon: b(function(c) {
        return [v(e.$slots, "cancelicon", {}, function() {
          return [(u(), h(B(e.cancelIcon ? "span" : "TimesIcon"), r({
            class: [c.class, e.cancelIcon],
            "aria-hidden": "true"
          }, e.ptm("pcCancelButton").icon, {
            "data-pc-section": "cancelbuttonicon"
          }), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["class", "label", "onClick", "disabled", "unstyled", "pt"])) : y("", !0)];
  })], 16), p("div", r({
    ref: "content",
    class: e.cx("content"),
    onDragenter: l[1] || (l[1] = function() {
      return t.onDragEnter && t.onDragEnter.apply(t, arguments);
    }),
    onDragover: l[2] || (l[2] = function() {
      return t.onDragOver && t.onDragOver.apply(t, arguments);
    }),
    onDragleave: l[3] || (l[3] = function() {
      return t.onDragLeave && t.onDragLeave.apply(t, arguments);
    }),
    onDrop: l[4] || (l[4] = function() {
      return t.onDrop && t.onDrop.apply(t, arguments);
    })
  }, e.ptm("content"), {
    "data-p-highlight": !1
  }), [v(e.$slots, "content", {
    files: a.files,
    uploadedFiles: a.uploadedFiles,
    removeUploadedFileCallback: t.removeUploadedFile,
    removeFileCallback: t.remove,
    progress: a.progress,
    messages: a.messages
  }, function() {
    return [t.hasFiles ? (u(), h(o, {
      key: 0,
      value: a.progress,
      showValue: !1,
      unstyled: e.unstyled,
      pt: e.ptm("pcProgressbar")
    }, null, 8, ["value", "unstyled", "pt"])) : y("", !0), (u(!0), m(U, null, k(a.messages, function(c) {
      return u(), h(f, {
        key: c,
        severity: "error",
        onClose: t.onMessageClose,
        unstyled: e.unstyled,
        pt: e.ptm("pcMessage")
      }, {
        default: b(function() {
          return [z(S(c), 1)];
        }),
        _: 2
      }, 1032, ["onClose", "unstyled", "pt"]);
    }), 128)), t.hasFiles ? (u(), m("div", {
      key: 1,
      class: F(e.cx("fileList"))
    }, [g(d, {
      files: a.files,
      onRemove: t.remove,
      badgeValue: t.pendingLabel,
      previewWidth: e.previewWidth,
      templates: e.$slots,
      unstyled: e.unstyled,
      pt: e.pt
    }, null, 8, ["files", "onRemove", "badgeValue", "previewWidth", "templates", "unstyled", "pt"])], 2)) : y("", !0), t.hasUploadedFiles ? (u(), m("div", {
      key: 2,
      class: F(e.cx("fileList"))
    }, [g(d, {
      files: a.uploadedFiles,
      onRemove: t.removeUploadedFile,
      badgeValue: t.completedLabel,
      badgeSeverity: "success",
      previewWidth: e.previewWidth,
      templates: e.$slots,
      unstyled: e.unstyled,
      pt: e.pt
    }, null, 8, ["files", "onRemove", "badgeValue", "previewWidth", "templates", "unstyled", "pt"])], 2)) : y("", !0)];
  }), e.$slots.empty && !t.hasFiles && !t.hasUploadedFiles ? (u(), m("div", J(r({
    key: 0
  }, e.ptm("empty"))), [v(e.$slots, "empty")], 16)) : y("", !0)], 16)], 16)) : t.isBasic ? (u(), m("div", r({
    key: 1,
    class: e.cx("root")
  }, e.ptmi("root")), [(u(!0), m(U, null, k(a.messages, function(c) {
    return u(), h(f, {
      key: c,
      severity: "error",
      onClose: t.onMessageClose,
      unstyled: e.unstyled,
      pt: e.ptm("pcMessage")
    }, {
      default: b(function() {
        return [z(S(c), 1)];
      }),
      _: 2
    }, 1032, ["onClose", "unstyled", "pt"]);
  }), 128)), p("div", r({
    class: e.cx("basicContent")
  }, e.ptm("basicContent")), [g(s, r({
    label: t.chooseButtonLabel,
    class: t.chooseButtonClass,
    style: e.style,
    disabled: e.disabled,
    unstyled: e.unstyled,
    onMouseup: t.onBasicUploaderClick,
    onKeydown: D(t.choose, ["enter"]),
    onFocus: t.onFocus,
    onBlur: t.onBlur
  }, e.chooseButtonProps, {
    pt: e.ptm("pcChooseButton")
  }), {
    icon: b(function(c) {
      return [v(e.$slots, "chooseicon", {}, function() {
        return [(u(), h(B(e.chooseIcon ? "span" : "PlusIcon"), r({
          class: [c.class, e.chooseIcon],
          "aria-hidden": "true"
        }, e.ptm("pcChooseButton").icon), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["label", "class", "style", "disabled", "unstyled", "onMouseup", "onKeydown", "onFocus", "onBlur", "pt"]), e.auto ? y("", !0) : v(e.$slots, "filelabel", {
    key: 0,
    class: F(e.cx("filelabel")),
    files: a.files
  }, function() {
    return [p("span", {
      class: F(e.cx("filelabel"))
    }, S(t.basicFileChosenLabel), 3)];
  }), p("input", r({
    ref: "fileInput",
    type: "file",
    accept: e.accept,
    disabled: e.disabled,
    multiple: e.multiple,
    onChange: l[5] || (l[5] = function() {
      return t.onFileSelect && t.onFileSelect.apply(t, arguments);
    }),
    onFocus: l[6] || (l[6] = function() {
      return t.onFocus && t.onFocus.apply(t, arguments);
    }),
    onBlur: l[7] || (l[7] = function() {
      return t.onBlur && t.onBlur.apply(t, arguments);
    })
  }, e.ptm("input")), null, 16, me)], 16)], 16)) : y("", !0);
}
N.render = ge;
const ye = { class: "grid grid-cols-12 gap-8" }, ve = { class: "col-span-full lg:col-span-6" }, be = { class: "card" }, Ce = { class: "col-span-full lg:col-span-6" }, Fe = { class: "card" }, Be = { class: "card flex flex-col gap-6 items-center justify-center" }, Te = {
  __name: "FileDoc",
  setup(e) {
    const l = G(), i = X();
    function n() {
      i.value.upload();
    }
    function a() {
      l.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3e3 });
    }
    return (t, s) => {
      const o = N, f = Y, d = T;
      return u(), m("div", ye, [
        p("div", ve, [
          p("div", be, [
            s[0] || (s[0] = p("div", { class: "font-semibold text-xl mb-4" }, "Advanced", -1)),
            g(o, {
              name: "demo[]",
              onUploader: a,
              multiple: !0,
              accept: "image/*",
              maxFileSize: 1e6,
              customUpload: ""
            })
          ])
        ]),
        p("div", Ce, [
          p("div", Fe, [
            s[1] || (s[1] = p("div", { class: "font-semibold text-xl mb-4" }, "Basic", -1)),
            p("div", Be, [
              g(f),
              g(o, {
                ref_key: "fileupload",
                ref: i,
                mode: "basic",
                name: "demo[]",
                accept: "image/*",
                maxFileSize: 1e6,
                onUploader: a,
                customUpload: ""
              }, null, 512),
              g(d, {
                label: "Upload",
                onClick: n,
                severity: "secondary"
              })
            ])
          ])
        ])
      ]);
    };
  }
};
export {
  Te as default
};
