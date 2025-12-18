"use strict";const c=require("./main-QBEymWFP.cjs"),n=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var a=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,l={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},s=c.BaseStyle.extend({name:"chip",style:a,classes:l}),p={name:"BaseChip",extends:c.script,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:s,provide:function(){return{$pcChip:this,$parentInstance:this}}},r={name:"Chip",extends:p,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(i){(i.key==="Enter"||i.key==="Backspace")&&this.close(i)},close:function(i){this.visible=!1,this.$emit("remove",i)}},computed:{dataP:function(){return c.f({removable:this.removable})}},components:{TimesCircleIcon:c.script$9}},d=["aria-label","data-p"],m=["src"];function h(e,i,u,g,t,o){return t.visible?(n.openBlock(),n.createElementBlock("div",n.mergeProps({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root"),{"data-p":o.dataP}),[n.renderSlot(e.$slots,"default",{},function(){return[e.image?(n.openBlock(),n.createElementBlock("img",n.mergeProps({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,m)):e.$slots.icon?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(e.$slots.icon),n.mergeProps({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(n.openBlock(),n.createElementBlock("span",n.mergeProps({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):n.createCommentVNode("",!0),e.label!==null?(n.openBlock(),n.createElementBlock("div",n.mergeProps({key:3,class:e.cx("label")},e.ptm("label")),n.toDisplayString(e.label),17)):n.createCommentVNode("",!0)]}),e.removable?n.renderSlot(e.$slots,"removeicon",{key:0,removeCallback:o.close,keydownCallback:o.onKeydown},function(){return[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(e.removeIcon?"span":"TimesCircleIcon"),n.mergeProps({class:[e.cx("removeIcon"),e.removeIcon],onClick:o.close,onKeydown:o.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):n.createCommentVNode("",!0)],16,d)):n.createCommentVNode("",!0)}r.render=h;exports.script=r;
