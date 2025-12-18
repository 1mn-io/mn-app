"use strict";const o=require("./main-QBEymWFP.cjs"),r=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var a=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`,n={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},s=o.BaseStyle.extend({name:"toolbar",style:a,classes:n}),l={name:"BaseToolbar",extends:o.script,props:{ariaLabelledby:{type:String,default:null}},style:s,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},t={name:"Toolbar",extends:l,inheritAttrs:!1},d=["aria-labelledby"];function p(e,i,b,c,m,u){return r.openBlock(),r.createElementBlock("div",r.mergeProps({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[r.createBaseVNode("div",r.mergeProps({class:e.cx("start")},e.ptm("start")),[r.renderSlot(e.$slots,"start")],16),r.createBaseVNode("div",r.mergeProps({class:e.cx("center")},e.ptm("center")),[r.renderSlot(e.$slots,"center")],16),r.createBaseVNode("div",r.mergeProps({class:e.cx("end")},e.ptm("end")),[r.renderSlot(e.$slots,"end")],16)],16,d)}t.render=p;exports.script=t;
