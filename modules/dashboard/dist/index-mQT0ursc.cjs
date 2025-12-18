"use strict";const r=require("./main-QBEymWFP.cjs"),e=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var n=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,d={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},a=r.BaseStyle.extend({name:"card",style:n,classes:d}),s={name:"BaseCard",extends:r.script,style:a,provide:function(){return{$pcCard:this,$parentInstance:this}}},o={name:"Card",extends:s,inheritAttrs:!1};function l(t,c,i,p,m,u){return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,class:t.cx("header")},t.ptm("header")),[e.renderSlot(t.$slots,"header")],16)):e.createCommentVNode("",!0),e.createBaseVNode("div",e.mergeProps({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:0,class:t.cx("title")},t.ptm("title")),[e.renderSlot(t.$slots,"title")],16)):e.createCommentVNode("",!0),t.$slots.subtitle?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[e.renderSlot(t.$slots,"subtitle")],16)):e.createCommentVNode("",!0)],16)):e.createCommentVNode("",!0),e.createBaseVNode("div",e.mergeProps({class:t.cx("content")},t.ptm("content")),[e.renderSlot(t.$slots,"content")],16),t.$slots.footer?(e.openBlock(),e.createElementBlock("div",e.mergeProps({key:1,class:t.cx("footer")},t.ptm("footer")),[e.renderSlot(t.$slots,"footer")],16)):e.createCommentVNode("",!0)],16)],16)}o.render=l;exports.script=o;
