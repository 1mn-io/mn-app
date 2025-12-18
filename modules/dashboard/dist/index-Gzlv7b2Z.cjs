"use strict";const a=require("./main-QBEymWFP.cjs"),I=require("./index-DdagM5md.cjs"),v=require("./index-DBAV93oq.cjs"),i=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var g=`
    .p-tieredmenu {
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        min-width: 12.5rem;
    }
    

    .p-tieredmenu-root-list,
    .p-tieredmenu-submenu {
        margin: 0;
        padding: dt('tieredmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('tieredmenu.list.gap');
    }

    .p-tieredmenu-submenu {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-item {
        position: relative;
    }

    .p-tieredmenu-item-content {
        transition:
            background dt('tieredmenu.transition.duration'),
            color dt('tieredmenu.transition.duration');
        border-radius: dt('tieredmenu.item.border.radius');
        color: dt('tieredmenu.item.color');
    }

    .p-tieredmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('tieredmenu.item.padding');
        gap: dt('tieredmenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-tieredmenu-item-label {
        line-height: 1;
    }

    .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.color');
    }

    .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('tieredmenu.submenu.icon.size');
        width: dt('tieredmenu.submenu.icon.size');
        height: dt('tieredmenu.submenu.icon.size');
    }

    .p-tieredmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.active.color');
        background: dt('tieredmenu.item.active.background');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.active.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.active.color');
    }

    .p-tieredmenu-separator {
        border-block-start: 1px solid dt('tieredmenu.separator.border.color');
    }

    .p-tieredmenu-overlay {
        box-shadow: dt('tieredmenu.shadow');
        will-change: transform;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
        padding-inline-start: 0;
        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,y={submenu:function(e){var n=e.instance,s=e.processedItem;return{display:n.isItemActive(s)?"flex":"none"}}},k={root:function(e){var n=e.props,s=e.instance;return["p-tieredmenu p-component",{"p-tieredmenu-overlay":n.popup,"p-tieredmenu-mobile":s.queryMatches}]},start:"p-tieredmenu-start",rootList:"p-tieredmenu-root-list",item:function(e){var n=e.instance,s=e.processedItem;return["p-tieredmenu-item",{"p-tieredmenu-item-active":n.isItemActive(s),"p-focus":n.isItemFocused(s),"p-disabled":n.isItemDisabled(s)}]},itemContent:"p-tieredmenu-item-content",itemLink:"p-tieredmenu-item-link",itemIcon:"p-tieredmenu-item-icon",itemLabel:"p-tieredmenu-item-label",submenuIcon:"p-tieredmenu-submenu-icon",submenu:"p-tieredmenu-submenu",separator:"p-tieredmenu-separator",end:"p-tieredmenu-end"},L=a.BaseStyle.extend({name:"tieredmenu",style:g,classes:k,inlineStyles:y}),P={name:"BaseTieredMenu",extends:a.script,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},breakpoint:{type:String,default:"960px"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:L,provide:function(){return{$pcTieredMenu:this,$parentInstance:this}}},b={name:"TieredMenuSub",hostName:"TieredMenu",extends:a.script,emits:["item-click","item-mouseenter","item-mousemove"],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,s){return e&&e.item?a.m(e.item[n],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,s){return this.ptm(s,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return a.s(e.items)},onEnter:function(){a.zt(this.container,this.level)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(s){return n.isItemVisible(s)&&n.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:i.mergeProps({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:i.mergeProps({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:i.mergeProps({class:this.cx("itemLabel")},this.getPTOptions(e,n,"itemLabel")),submenuicon:i.mergeProps({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}},containerRef:function(e){this.container=e}},components:{AngleRightIcon:v.script},directives:{ripple:a.Ripple}},x=["tabindex"],M=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],K=["onClick","onMouseenter","onMousemove"],w=["href","target"],C=["id"],E=["id"];function S(t,e,n,s,u,r){var d=i.resolveComponent("AngleRightIcon"),h=i.resolveComponent("TieredMenuSub",!0),f=i.resolveDirective("ripple");return i.openBlock(),i.createBlock(i.Transition,i.mergeProps({name:"p-anchored-overlay",onEnter:r.onEnter},t.ptm("menu.transition")),{default:i.withCtx(function(){return[n.level===0||n.visible?(i.openBlock(),i.createElementBlock("ul",{key:0,ref:r.containerRef,tabindex:n.tabindex},[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(n.items,function(o,m){return i.openBlock(),i.createElementBlock(i.Fragment,{key:r.getItemKey(o)},[r.isItemVisible(o)&&!r.getItemProp(o,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:0,id:r.getItemId(o),style:r.getItemProp(o,"style"),class:[t.cx("item",{processedItem:o}),r.getItemProp(o,"class")],role:"menuitem","aria-label":r.getItemLabel(o),"aria-disabled":r.isItemDisabled(o)||void 0,"aria-expanded":r.isItemGroup(o)?r.isItemActive(o):void 0,"aria-haspopup":r.isItemGroup(o)&&!r.getItemProp(o,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":r.getAriaSetSize(),"aria-posinset":r.getAriaPosInset(m)},{ref_for:!0},r.getPTOptions(o,m,"item"),{"data-p-active":r.isItemActive(o),"data-p-focused":r.isItemFocused(o),"data-p-disabled":r.isItemDisabled(o)}),[i.createBaseVNode("div",i.mergeProps({class:t.cx("itemContent"),onClick:function(c){return r.onItemClick(c,o)},onMouseenter:function(c){return r.onItemMouseEnter(c,o)},onMousemove:function(c){return r.onItemMouseMove(c,o)}},{ref_for:!0},r.getPTOptions(o,m,"itemContent")),[n.templates.item?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.item),{key:1,item:o.item,hasSubmenu:r.getItemProp(o,"items"),label:r.getItemLabel(o),props:r.getMenuItemProps(o,m)},null,8,["item","hasSubmenu","label","props"])):i.withDirectives((i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,href:r.getItemProp(o,"url"),class:t.cx("itemLink"),target:r.getItemProp(o,"target"),tabindex:"-1"},{ref_for:!0},r.getPTOptions(o,m,"itemLink")),[n.templates.itemicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.itemicon),{key:0,item:o.item,class:i.normalizeClass(t.cx("itemIcon"))},null,8,["item","class"])):r.getItemProp(o,"icon")?(i.openBlock(),i.createElementBlock("span",i.mergeProps({key:1,class:[t.cx("itemIcon"),r.getItemProp(o,"icon")]},{ref_for:!0},r.getPTOptions(o,m,"itemIcon")),null,16)):i.createCommentVNode("",!0),i.createBaseVNode("span",i.mergeProps({id:r.getItemLabelId(o),class:t.cx("itemLabel")},{ref_for:!0},r.getPTOptions(o,m,"itemLabel")),i.toDisplayString(r.getItemLabel(o)),17,C),r.getItemProp(o,"items")?(i.openBlock(),i.createElementBlock(i.Fragment,{key:2},[n.templates.submenuicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.submenuicon),i.mergeProps({key:0,class:t.cx("submenuIcon"),active:r.isItemActive(o)},{ref_for:!0},r.getPTOptions(o,m,"submenuIcon")),null,16,["class","active"])):(i.openBlock(),i.createBlock(d,i.mergeProps({key:1,class:t.cx("submenuIcon")},{ref_for:!0},r.getPTOptions(o,m,"submenuIcon")),null,16,["class"]))],64)):i.createCommentVNode("",!0)],16,w)),[[f]])],16,K),r.isItemVisible(o)&&r.isItemGroup(o)?(i.openBlock(),i.createBlock(h,i.mergeProps({key:0,id:r.getItemId(o)+"_list",class:t.cx("submenu"),style:t.sx("submenu",!0,{processedItem:o}),"aria-labelledby":r.getItemLabelId(o),role:"menu",menuId:n.menuId,focusedItemId:n.focusedItemId,items:o.items,templates:n.templates,activeItemPath:n.activeItemPath,level:n.level+1,visible:r.isItemActive(o)&&r.isItemGroup(o),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(l){return t.$emit("item-click",l)}),onItemMouseenter:e[1]||(e[1]=function(l){return t.$emit("item-mouseenter",l)}),onItemMousemove:e[2]||(e[2]=function(l){return t.$emit("item-mousemove",l)})},{ref_for:!0},t.ptm("submenu")),null,16,["id","class","style","aria-labelledby","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):i.createCommentVNode("",!0)],16,M)):i.createCommentVNode("",!0),r.isItemVisible(o)&&r.getItemProp(o,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:1,id:r.getItemId(o),style:r.getItemProp(o,"style"),class:[t.cx("separator"),r.getItemProp(o,"class")],role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,E)):i.createCommentVNode("",!0)],64)}),128))],8,x)):i.createCommentVNode("",!0)]}),_:1},16,["onEnter"])}b.render=S;var p={name:"TieredMenu",extends:P,inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],outsideClickListener:null,matchMediaListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){this.popup||(a.s(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&a.x.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,n){return e?a.m(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return a.s(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&a.s(e.items)},toggle:function(e){this.visible?this.hide(e,!0):this.show(e)},show:function(e,n){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null),n&&a.bt(this.menubar)},hide:function(e,n){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&a.bt(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&a.J(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var s=e.processedItem,u=e.isFocus;if(!a.l(s)){var r=s.index,d=s.key,h=s.level,f=s.parentKey,o=s.items,m=a.s(o),l=this.activeItemPath.filter(function(c){return c.parentKey!==f&&c.parentKey!==d});m&&(l.push(s),this.submenuVisible=!0),this.focusedItemInfo={index:r,level:h,parentKey:f},m&&(this.dirty=!0),u&&a.bt(this.menubar),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=l)}},onOverlayClick:function(e){I.OverlayEventBus.emit("overlay-click",{originalEvent:e,target:this.target})},onItemClick:function(e){var n=e.originalEvent,s=e.processedItem,u=this.isProccessedItemGroup(s),r=a.l(s.parent),d=this.isSelected(s);if(d){var h=s.index,f=s.key,o=s.level,m=s.parentKey;this.activeItemPath=this.activeItemPath.filter(function(c){return f!==c.key&&f.startsWith(c.key)}),this.focusedItemInfo={index:h,level:o,parentKey:m},this.dirty=!r,a.bt(this.menubar)}else if(u)this.onItemChange(e);else{var l=r?s:this.activeItemPath.find(function(c){return c.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,l?l.index:-1),a.bt(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(n);!s&&this.onItemChange({originalEvent:e,processedItem:n})}this.popup&&this.hide(e,!0),e.preventDefault()}else{var u=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,u),e.preventDefault()}},onArrowLeftKey:function(e){var n=this,s=this.visibleItems[this.focusedItemInfo.index],u=this.activeItemPath.find(function(d){return d.key===s.parentKey}),r=a.l(s.parent);r||(this.focusedItemInfo={index:-1,parentKey:u?u.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(d){return d.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=a.z(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=n&&a.z(n,'[data-pc-section="itemlink"]');if(s?s.click():n&&n.click(),!this.popup){var u=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(u);!r&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.popup||this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""},this.popup&&a.bt(this.target)}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(n);!s&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},onEnter:function(e){this.autoZIndex&&a.x.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),a.S(e,{position:"absolute",top:"0"}),this.alignOverlay(),a.bt(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave:function(e){this.autoZIndex&&a.x.clear(e)},alignOverlay:function(){a.D(this.container,this.target);var e=a.v(this.target);e>a.v(this.container)&&(this.container.style.minWidth=a.v(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=e.container&&!e.container.contains(n.target),u=e.popup?!(e.target&&(e.target===n.target||e.target.contains(n.target))):!0;s&&u&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new I.ConnectedOverlayScrollHandler(this.target,function(n){e.hide(n,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){a.Yt()||e.hide(n,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return a.M(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(u){return n.isValidItem(u)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var n=this,s=e>0?a.M(this.visibleItems.slice(0,e),function(u){return n.isValidItem(u)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var s=this;this.searchValue=(this.searchValue||"")+n;var u=-1,r=!1;return this.focusedItemInfo.index!==-1?(u=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(d){return s.isItemMatched(d)}),u=u===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(d){return s.isItemMatched(d)}):u+this.focusedItemInfo.index):u=this.visibleItems.findIndex(function(d){return s.isItemMatched(d)}),u!==-1&&(r=!0),u===-1&&this.focusedItemInfo.index===-1&&(u=this.findFirstFocusedItemIndex()),u!==-1&&this.changeFocusedItemIndex(e,u),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),r},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,s=a.z(this.menubar,'li[id="'.concat(n,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",d=[];return e&&e.forEach(function(h,f){var o=(r!==""?r+"_":"")+f,m={item:h,index:f,level:s,key:o,parent:u,parentKey:r};m.items=n.createProcessedItems(h.items,s+1,m,o),d.push(m)}),d},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(s){return s.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(a.s(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{TieredMenuSub:b,Portal:a.script$2}},B=["id"];function V(t,e,n,s,u,r){var d=i.resolveComponent("TieredMenuSub"),h=i.resolveComponent("Portal");return i.openBlock(),i.createBlock(h,{appendTo:t.appendTo,disabled:!t.popup},{default:i.withCtx(function(){return[i.createVNode(i.Transition,i.mergeProps({name:"p-anchored-overlay",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave},t.ptm("transition")),{default:i.withCtx(function(){return[u.visible?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:0,ref:r.containerRef,id:t.$id,class:t.cx("root"),onClick:e[0]||(e[0]=function(){return r.onOverlayClick&&r.onOverlayClick.apply(r,arguments)})},t.ptmi("root")),[t.$slots.start?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:0,class:t.cx("start")},t.ptm("start")),[i.renderSlot(t.$slots,"start")],16)):i.createCommentVNode("",!0),i.createVNode(d,i.mergeProps({ref:r.menubarRef,id:t.$id+"_list",class:t.cx("rootList"),tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":u.focused?r.focusedItemId:void 0,menuId:t.$id,focusedItemId:u.focused?r.focusedItemId:void 0,items:r.processedItems,templates:t.$slots,activeItemPath:u.activeItemPath,level:0,visible:u.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter,onItemMousemove:r.onItemMouseMove},t.ptm("rootList")),null,16,["id","class","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:1,class:t.cx("end")},t.ptm("end")),[i.renderSlot(t.$slots,"end")],16)):i.createCommentVNode("",!0)],16,B)):i.createCommentVNode("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}p.render=V;exports.script=p;
