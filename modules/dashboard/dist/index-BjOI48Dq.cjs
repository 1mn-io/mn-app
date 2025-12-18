"use strict";const r=require("./main-QBEymWFP.cjs"),h=require("./index-DdagM5md.cjs"),n=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var g=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,k={root:function(e){var i=e.props;return["p-menu p-component",{"p-menu-overlay":i.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var i=e.instance;return["p-menu-item",{"p-focus":i.id===i.focusedOptionId,"p-disabled":i.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},I=r.BaseStyle.extend({name:"menu",style:g,classes:k}),L={name:"BaseMenu",extends:r.script,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:I,provide:function(){return{$pcMenu:this,$parentInstance:this}}},v={name:"Menuitem",hostName:"Menu",extends:r.script,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,i){return e&&e.item?r.m(e.item[i]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var i=this.getItemProp(this.item,"command");i&&i({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:n.mergeProps({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:n.mergeProps({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:n.mergeProps({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return r.f({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:r.Ripple}},O=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],C=["data-p"],B=["href","target"],P=["data-p"],x=["data-p"];function E(t,e,i,s,l,o){var m=n.resolveDirective("ripple");return o.visible()?(n.openBlock(),n.createElementBlock("li",n.mergeProps({key:0,id:i.id,class:[t.cx("item"),i.item.class],role:"menuitem",style:i.item.style,"aria-label":o.label(),"aria-disabled":o.disabled(),"data-p-focused":o.isItemFocused(),"data-p-disabled":o.disabled()||!1,"data-p":o.dataP},o.getPTOptions("item")),[n.createBaseVNode("div",n.mergeProps({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(c){return o.onItemClick(c)}),onMousemove:e[1]||(e[1]=function(c){return o.onItemMouseMove(c)}),"data-p":o.dataP},o.getPTOptions("itemContent")),[i.templates.item?i.templates.item?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(i.templates.item),{key:1,item:i.item,label:o.label(),props:o.getMenuItemProps(i.item)},null,8,["item","label","props"])):n.createCommentVNode("",!0):n.withDirectives((n.openBlock(),n.createElementBlock("a",n.mergeProps({key:0,href:i.item.url,class:t.cx("itemLink"),target:i.item.target,tabindex:"-1"},o.getPTOptions("itemLink")),[i.templates.itemicon?(n.openBlock(),n.createBlock(n.resolveDynamicComponent(i.templates.itemicon),{key:0,item:i.item,class:n.normalizeClass(t.cx("itemIcon"))},null,8,["item","class"])):i.item.icon?(n.openBlock(),n.createElementBlock("span",n.mergeProps({key:1,class:[t.cx("itemIcon"),i.item.icon],"data-p":o.dataP},o.getPTOptions("itemIcon")),null,16,P)):n.createCommentVNode("",!0),n.createBaseVNode("span",n.mergeProps({class:t.cx("itemLabel"),"data-p":o.dataP},o.getPTOptions("itemLabel")),n.toDisplayString(o.label()),17,x)],16,B)),[[m]])],16,C)],16,O)):n.createCommentVNode("",!0)}v.render=E;function b(t){return A(t)||M(t)||S(t)||w()}function w(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(t,e){if(t){if(typeof t=="string")return f(t,e);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(t,e):void 0}}function M(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function A(t){if(Array.isArray(t))return f(t)}function f(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,s=Array(e);i<e;i++)s[i]=t[i];return s}var y={name:"Menu",extends:L,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&r.x.clear(this.container),this.container=null},methods:{itemClick:function(e){var i=e.item;this.disabled(i)||(i.command&&i.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(r.bt(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var i=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)r.bt(this.target),this.hide(),e.preventDefault();else{var i=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(r.Y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var i=r.z(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=i&&r.z(i,'a[data-pc-section="itemlink"]');this.popup&&r.bt(this.target),s?s.click():i&&i.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var i=r.Y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=b(i).findIndex(function(l){return l.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var i=r.Y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=b(i).findIndex(function(l){return l.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var i=r.Y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=e>=i.length?i.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=i[s].getAttribute("id"))},toggle:function(e,i){this.overlayVisible?this.hide():this.show(e,i)},show:function(e,i){this.overlayVisible=!0,this.target=i??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){r.S(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&r.x.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&r.bt(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&r.x.clear(e)},alignOverlay:function(){r.D(this.container,this.target);var e=r.v(this.target);e>r.v(this.container)&&(this.container.style.minWidth=r.v(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=e.container&&!e.container.contains(i.target),l=!(e.target&&(e.target===i.target||e.target.contains(i.target)));e.overlayVisible&&s&&l?e.hide():!e.popup&&s&&l&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new h.ConnectedOverlayScrollHandler(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!r.Yt()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){h.OverlayEventBus.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return r.f({popup:this.popup})}},components:{PVMenuitem:v,Portal:r.script$2}},V=["id","data-p"],K=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],T=["id"];function D(t,e,i,s,l,o){var m=n.resolveComponent("PVMenuitem"),c=n.resolveComponent("Portal");return n.openBlock(),n.createBlock(c,{appendTo:t.appendTo,disabled:!t.popup},{default:n.withCtx(function(){return[n.createVNode(n.Transition,n.mergeProps({name:"p-anchored-overlay",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},t.ptm("transition")),{default:n.withCtx(function(){return[!t.popup||l.overlayVisible?(n.openBlock(),n.createElementBlock("div",n.mergeProps({key:0,ref:o.containerRef,id:t.$id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),"data-p":o.dataP},t.ptmi("root")),[t.$slots.start?(n.openBlock(),n.createElementBlock("div",n.mergeProps({key:0,class:t.cx("start")},t.ptm("start")),[n.renderSlot(t.$slots,"start")],16)):n.createCommentVNode("",!0),n.createBaseVNode("ul",n.mergeProps({ref:o.listRef,id:t.$id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":l.focused?o.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return o.onListFocus&&o.onListFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onListBlur&&o.onListBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onListKeyDown&&o.onListKeyDown.apply(o,arguments)})},t.ptm("list")),[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(t.model,function(a,d){return n.openBlock(),n.createElementBlock(n.Fragment,{key:o.label(a)+d.toString()},[a.items&&o.visible(a)&&!a.separator?(n.openBlock(),n.createElementBlock(n.Fragment,{key:0},[a.items?(n.openBlock(),n.createElementBlock("li",n.mergeProps({key:0,id:t.$id+"_"+d,class:[t.cx("submenuLabel"),a.class],role:"none"},{ref_for:!0},t.ptm("submenuLabel")),[n.renderSlot(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:a},function(){return[n.createTextVNode(n.toDisplayString(o.label(a)),1)]})],16,T)):n.createCommentVNode("",!0),(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(a.items,function(u,p){return n.openBlock(),n.createElementBlock(n.Fragment,{key:u.label+d+"_"+p},[o.visible(u)&&!u.separator?(n.openBlock(),n.createBlock(m,{key:0,id:t.$id+"_"+d+"_"+p,item:u,templates:t.$slots,focusedOptionId:o.focusedOptionId,unstyled:t.unstyled,onItemClick:o.itemClick,onItemMousemove:o.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):o.visible(u)&&u.separator?(n.openBlock(),n.createElementBlock("li",n.mergeProps({key:"separator"+d+p,class:[t.cx("separator"),a.class],style:u.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):n.createCommentVNode("",!0)],64)}),128))],64)):o.visible(a)&&a.separator?(n.openBlock(),n.createElementBlock("li",n.mergeProps({key:"separator"+d.toString(),class:[t.cx("separator"),a.class],style:a.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):(n.openBlock(),n.createBlock(m,{key:o.label(a)+d.toString(),id:t.$id+"_"+d,item:a,index:d,templates:t.$slots,focusedOptionId:o.focusedOptionId,unstyled:t.unstyled,onItemClick:o.itemClick,onItemMousemove:o.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,K),t.$slots.end?(n.openBlock(),n.createElementBlock("div",n.mergeProps({key:1,class:t.cx("end")},t.ptm("end")),[n.renderSlot(t.$slots,"end")],16)):n.createCommentVNode("",!0)],16,V)):n.createCommentVNode("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}y.render=D;exports.script=y;
