"use strict";const s=require("./main-QBEymWFP.cjs"),e=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var d=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,l={root:function(t){var r=t.props;return["p-tag p-component",{"p-tag-info":r.severity==="info","p-tag-success":r.severity==="success","p-tag-warn":r.severity==="warn","p-tag-danger":r.severity==="danger","p-tag-secondary":r.severity==="secondary","p-tag-contrast":r.severity==="contrast","p-tag-rounded":r.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},u=s.BaseStyle.extend({name:"tag",style:d,classes:l}),g={name:"BaseTag",extends:s.script,props:{value:null,severity:null,rounded:Boolean,icon:String},style:u,provide:function(){return{$pcTag:this,$parentInstance:this}}};function o(n){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(n)}function p(n,t,r){return(t=y(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function y(n){var t=m(n,"string");return o(t)=="symbol"?t:t+""}function m(n,t){if(o(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var a=r.call(n,t);if(o(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var i={name:"Tag",extends:g,inheritAttrs:!1,computed:{dataP:function(){return s.f(p({rounded:this.rounded},this.severity,this.severity))}}},f=["data-p"];function b(n,t,r,a,v,c){return e.openBlock(),e.createElementBlock("span",e.mergeProps({class:n.cx("root"),"data-p":c.dataP},n.ptmi("root")),[n.$slots.icon?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.$slots.icon),e.mergeProps({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(e.openBlock(),e.createElementBlock("span",e.mergeProps({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):e.createCommentVNode("",!0),n.value!=null||n.$slots.default?e.renderSlot(n.$slots,"default",{key:2},function(){return[e.createBaseVNode("span",e.mergeProps({class:n.cx("label")},n.ptm("label")),e.toDisplayString(n.value),17)]}):e.createCommentVNode("",!0)],16,f)}i.render=b;exports.script=i;
