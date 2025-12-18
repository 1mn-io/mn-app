"use strict";const l=require("./main-QBEymWFP.cjs"),c=require("./index-BYKznfe8.cjs"),b=require("./index-2z86LybZ.cjs"),f=require("./index-Gzlv7b2Z.cjs"),e=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var m=`
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button.p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button.p-button:focus-visible,
    .p-splitbutton-dropdown.p-button:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button.p-button:not(:disabled):hover,
    .p-splitbutton-button.p-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown.p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button.p-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`,y={root:function(t){var i=t.instance,d=t.props;return["p-splitbutton p-component",{"p-splitbutton-raised":d.raised,"p-splitbutton-rounded":d.rounded,"p-splitbutton-fluid":i.hasFluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},h=l.BaseStyle.extend({name:"splitbutton",style:m,classes:y}),w={name:"BaseSplitButton",extends:l.script,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:h,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},a={name:"SplitButton",extends:w,inheritAttrs:!1,emits:["click"],inject:{$pcFluid:{default:null}},data:function(){return{isExpanded:!1}},mounted:function(){var t=this;this.$watch("$refs.menu.visible",function(i){t.isExpanded=i})},methods:{onDropdownButtonClick:function(t){t&&t.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())},onDefaultButtonClick:function(t){this.isExpanded&&this.$refs.menu.hide(t),this.$emit("click",t)}},computed:{containerClass:function(){return[this.cx("root"),this.class]},hasFluid:function(){return l.l(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:b.script,PVSMenu:f.script,ChevronDownIcon:c.script}},B=["data-p-severity"];function v(n,t,i,d,u,s){var r=e.resolveComponent("PVSButton"),p=e.resolveComponent("PVSMenu");return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:s.containerClass,style:n.style},n.ptmi("root"),{"data-p-severity":n.severity}),[e.createVNode(r,e.mergeProps({type:"button",class:n.cx("pcButton"),label:n.label,disabled:n.disabled,severity:n.severity,text:n.text,icon:n.icon,outlined:n.outlined,size:n.size,fluid:n.fluid,"aria-label":n.label,onClick:s.onDefaultButtonClick},n.buttonProps,{pt:n.ptm("pcButton"),unstyled:n.unstyled}),e.createSlots({default:e.withCtx(function(){return[e.renderSlot(n.$slots,"default")]}),_:2},[n.$slots.icon?{name:"icon",fn:e.withCtx(function(o){return[e.renderSlot(n.$slots,"icon",{class:e.normalizeClass(o.class)},function(){return[e.createBaseVNode("span",e.mergeProps({class:[n.icon,o.class]},n.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),e.createVNode(r,e.mergeProps({ref:"button",type:"button",class:n.cx("pcDropdown"),disabled:n.disabled,"aria-haspopup":"true","aria-expanded":u.isExpanded,"aria-controls":u.isExpanded?n.$id+"_overlay":void 0,onClick:s.onDropdownButtonClick,onKeydown:s.onDropdownKeydown,severity:n.severity,text:n.text,outlined:n.outlined,size:n.size,unstyled:n.unstyled},n.menuButtonProps,{pt:n.ptm("pcDropdown")}),{icon:e.withCtx(function(o){return[e.renderSlot(n.$slots,n.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:e.normalizeClass(o.class)},function(){return[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n.menuButtonIcon||n.dropdownIcon?"span":"ChevronDownIcon"),e.mergeProps({class:[n.dropdownIcon||n.menuButtonIcon,o.class]},n.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),e.createVNode(p,{ref:"menu",id:n.$id+"_overlay",model:n.model,popup:!0,autoZIndex:n.autoZIndex,baseZIndex:n.baseZIndex,appendTo:n.appendTo,unstyled:n.unstyled,pt:n.ptm("pcMenu")},e.createSlots({_:2},[n.$slots.menuitemicon?{name:"itemicon",fn:e.withCtx(function(o){return[e.renderSlot(n.$slots,"menuitemicon",{item:o.item,class:e.normalizeClass(o.class)})]}),key:"0"}:void 0,n.$slots.item?{name:"item",fn:e.withCtx(function(o){return[e.renderSlot(n.$slots,"item",{item:o.item,hasSubmenu:o.hasSubmenu,label:o.label,props:o.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,B)}a.render=v;exports.script=a;
