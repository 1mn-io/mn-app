"use strict";const i=require("./main-QBEymWFP.cjs"),e=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var p=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,a={root:"p-iconfield"},f=i.BaseStyle.extend({name:"iconfield",style:p,classes:a}),u={name:"BaseIconField",extends:i.script,style:f,provide:function(){return{$pcIconField:this,$parentInstance:this}}},o={name:"IconField",extends:u,inheritAttrs:!1};function m(n,r,d,l,c,t){return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:n.cx("root")},n.ptmi("root")),[e.renderSlot(n.$slots,"default")],16)}o.render=m;var h={root:"p-inputicon"},$=i.BaseStyle.extend({name:"inputicon",classes:h}),g={name:"BaseInputIcon",extends:i.script,style:$,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},s={name:"InputIcon",extends:g,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function v(n,r,d,l,c,t){return e.openBlock(),e.createElementBlock("span",e.mergeProps({class:t.containerClass},n.ptmi("root"),{"aria-hidden":"true"}),[e.renderSlot(n.$slots,"default")],16)}s.render=v;exports.script=o;exports.script$1=s;
