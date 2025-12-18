"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("./main-QBEymWFP.cjs"),E=require("./index-BYKznfe8.cjs"),P=require("./index-ChPKI9RG.cjs"),i=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs"),A=require("./index-BIAUsdKG.cjs"),D=require("./index-DnBUJcyk.cjs"),w=require("./index-DBAV93oq.cjs"),le=require("./index-2z86LybZ.cjs"),me=require("./index-BjOI48Dq.cjs"),ce=require("./index-Gzlv7b2Z.cjs"),x=require("./index-fvPw1BEC.cjs"),B=require("./index-B6atcKPw.cjs"),de=require("./index-CUzBDNoz.cjs");var pe=`
    .p-panelmenu {
        display: flex;
        flex-direction: column;
        gap: dt('panelmenu.gap');
    }

    .p-panelmenu-panel {
        background: dt('panelmenu.panel.background');
        border-width: dt('panelmenu.panel.border.width');
        border-style: solid;
        border-color: dt('panelmenu.panel.border.color');
        color: dt('panelmenu.panel.color');
        border-radius: dt('panelmenu.panel.border.radius');
        padding: dt('panelmenu.panel.padding');
    }

    .p-panelmenu-panel:first-child {
        border-width: dt('panelmenu.panel.first.border.width');
        border-start-start-radius: dt('panelmenu.panel.first.top.border.radius');
        border-start-end-radius: dt('panelmenu.panel.first.top.border.radius');
    }

    .p-panelmenu-panel:last-child {
        border-width: dt('panelmenu.panel.last.border.width');
        border-end-start-radius: dt('panelmenu.panel.last.bottom.border.radius');
        border-end-end-radius: dt('panelmenu.panel.last.bottom.border.radius');
    }

    .p-panelmenu-header {
        outline: 0 none;
    }

    .p-panelmenu-header-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        outline-color: transparent;
        color: dt('panelmenu.item.color');
    }

    .p-panelmenu-header-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    .p-panelmenu-header-icon,
    .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.color');
    }

    .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.color');
    }

    .p-panelmenu-submenu-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-submenu {
        margin: 0;
        padding: 0 0 0 dt('panelmenu.submenu.indent');
        outline: 0;
        list-style: none;
    }

    .p-panelmenu-submenu:dir(rtl) {
        padding: 0 dt('panelmenu.submenu.indent') 0 0;
    }

    .p-panelmenu-item-link {
        display: flex;
        gap: dt('panelmenu.item.gap');
        padding: dt('panelmenu.item.padding');
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu-item-label {
        line-height: 1;
    }

    .p-panelmenu-item-content {
        border-radius: dt('panelmenu.item.border.radius');
        transition:
            background dt('panelmenu.transition.duration'),
            color dt('panelmenu.transition.duration'),
            outline-color dt('panelmenu.transition.duration'),
            box-shadow dt('panelmenu.transition.duration');
        color: dt('panelmenu.item.color');
        outline-color: transparent;
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
        background: dt('panelmenu.item.focus.background');
        color: dt('panelmenu.item.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
        color: dt('panelmenu.item.icon.focus.color');
    }

    .p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
        color: dt('panelmenu.submenu.icon.focus.color');
    }

    .p-panelmenu-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panelmenu-content-wrapper {
        min-height: 0;
    }
`,fe={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var n=e.instance,a=e.item;return["p-panelmenu-header",{"p-panelmenu-header-active":n.isItemActive(a)&&!!a.items,"p-disabled":n.isItemDisabled(a)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",contentWrapper:"p-panelmenu-content-wrapper",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(e){var n=e.instance,a=e.processedItem;return["p-panelmenu-item",{"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},he=u.BaseStyle.extend({name:"panelmenu",style:pe,classes:fe}),be={name:"BasePanelMenu",extends:u.script,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:he,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},F={name:"PanelMenuSub",hostName:"PanelMenu",extends:u.script,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?u.m(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(e,{context:{item:n.item,index:a,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return u.s(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-toggle",{processedItem:n,expanded:!this.isItemActive(n)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:i.mergeProps({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,n)),icon:i.mergeProps({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,n)),label:i.mergeProps({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,n)),submenuicon:i.mergeProps({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,n))}}},components:{ChevronRightIcon:P.script,ChevronDownIcon:E.script},directives:{ripple:u.Ripple}},Ie=["tabindex"],ge=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],ve=["onClick","onMousemove"],ye=["href","target"];function ke(t,e,n,a,s,r){var m=i.resolveComponent("PanelMenuSub",!0),c=i.resolveDirective("ripple");return i.openBlock(),i.createElementBlock("ul",{class:i.normalizeClass(t.cx("submenu")),tabindex:n.tabindex},[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(n.items,function(o,l){return i.openBlock(),i.createElementBlock(i.Fragment,{key:r.getItemKey(o)},[r.isItemVisible(o)&&!r.getItemProp(o,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:0,id:r.getItemId(o),class:[t.cx("item",{processedItem:o}),r.getItemProp(o,"class")],style:r.getItemProp(o,"style"),role:"treeitem","aria-label":r.getItemLabel(o),"aria-expanded":r.isItemGroup(o)?r.isItemActive(o):void 0,"aria-level":n.level+1,"aria-setsize":r.getAriaSetSize(),"aria-posinset":r.getAriaPosInset(l)},{ref_for:!0},r.getPTOptions("item",o,l),{"data-p-focused":r.isItemFocused(o),"data-p-disabled":r.isItemDisabled(o)}),[i.createBaseVNode("div",i.mergeProps({class:t.cx("itemContent"),onClick:function(p){return r.onItemClick(p,o)},onMousemove:function(p){return r.onItemMouseMove(p,o)}},{ref_for:!0},r.getPTOptions("itemContent",o,l)),[n.templates.item?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.item),{key:1,item:o.item,root:!1,active:r.isItemActive(o),hasSubmenu:r.isItemGroup(o),label:r.getItemLabel(o),props:r.getMenuItemProps(o,l)},null,8,["item","active","hasSubmenu","label","props"])):i.withDirectives((i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,href:r.getItemProp(o,"url"),class:t.cx("itemLink"),target:r.getItemProp(o,"target"),tabindex:"-1"},{ref_for:!0},r.getPTOptions("itemLink",o,l)),[r.isItemGroup(o)?(i.openBlock(),i.createElementBlock(i.Fragment,{key:0},[n.templates.submenuicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.submenuicon),i.mergeProps({key:0,class:t.cx("submenuIcon"),active:r.isItemActive(o)},{ref_for:!0},r.getPTOptions("submenuIcon",o,l)),null,16,["class","active"])):(i.openBlock(),i.createBlock(i.resolveDynamicComponent(r.isItemActive(o)?"ChevronDownIcon":"ChevronRightIcon"),i.mergeProps({key:1,class:t.cx("submenuIcon")},{ref_for:!0},r.getPTOptions("submenuIcon",o,l)),null,16,["class"]))],64)):i.createCommentVNode("",!0),n.templates.itemicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.itemicon),{key:1,item:o.item,class:i.normalizeClass(t.cx("itemIcon"))},null,8,["item","class"])):r.getItemProp(o,"icon")?(i.openBlock(),i.createElementBlock("span",i.mergeProps({key:2,class:[t.cx("itemIcon"),r.getItemProp(o,"icon")]},{ref_for:!0},r.getPTOptions("itemIcon",o,l)),null,16)):i.createCommentVNode("",!0),i.createBaseVNode("span",i.mergeProps({class:t.cx("itemLabel")},{ref_for:!0},r.getPTOptions("itemLabel",o,l)),i.toDisplayString(r.getItemLabel(o)),17)],16,ye)),[[c]])],16,ve),i.createVNode(i.Transition,i.mergeProps({name:"p-collapsible"},{ref_for:!0},t.ptm("transition")),{default:i.withCtx(function(){return[i.withDirectives(i.createBaseVNode("div",i.mergeProps({class:t.cx("contentContainer")},{ref_for:!0},t.ptm("contentContainer")),[i.createBaseVNode("div",i.mergeProps({class:t.cx("contentWrapper")},{ref_for:!0},t.ptm("contentWrapper")),[r.isItemVisible(o)&&r.isItemGroup(o)?(i.openBlock(),i.createBlock(m,i.mergeProps({key:0,id:r.getItemId(o)+"_list",role:"group",panelId:n.panelId,focusedItemId:n.focusedItemId,items:o.items,level:n.level+1,templates:n.templates,activeItemPath:n.activeItemPath,onItemToggle:r.onItemToggle,onItemMousemove:e[0]||(e[0]=function(d){return t.$emit("item-mousemove",d)}),pt:t.pt,unstyled:t.unstyled},{ref_for:!0},t.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):i.createCommentVNode("",!0)],16)],16),[[i.vShow,r.isItemActive(o)]])]}),_:2},1040)],16,ge)):i.createCommentVNode("",!0),r.isItemVisible(o)&&r.getItemProp(o,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:1,style:r.getItemProp(o,"style"),class:[t.cx("separator"),r.getItemProp(o,"class")],role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):i.createCommentVNode("",!0)],64)}),128))],10,Ie)}F.render=ke;function xe(t,e){return Ce(t)||Le(t,e)||we(t,e)||Pe()}function Pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function we(t,e){if(t){if(typeof t=="string")return S(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(t,e):void 0}}function S(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function Le(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,s,r,m,c=[],o=!0,l=!1;try{if(r=(n=n.call(t)).next,e!==0)for(;!(o=(a=r.call(n)).done)&&(c.push(a.value),c.length!==e);o=!0);}catch(d){l=!0,s=d}finally{try{if(!o&&n.return!=null&&(m=n.return(),Object(m)!==m))return}finally{if(l)throw s}}return c}}function Ce(t){if(Array.isArray(t))return t}var N={name:"PanelMenuList",hostName:"PanelMenu",extends:u.script,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},created:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,n){return e&&e.item?u.m(e.item[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.parentKey})},isItemGroup:function(e){return u.s(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&u.J(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var n=u.s(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:n,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var n=u.s(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:n,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var n=this;if(u.s(this.focusedItem)){var a=this.activeItemPath.some(function(s){return s.key===n.focusedItem.key});a?this.activeItemPath=this.activeItemPath.filter(function(s){return s.key!==n.focusedItem.key}):this.focusedItem=u.s(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var n=this;if(u.s(this.focusedItem)){var a=this.isItemGroup(this.focusedItem);if(a){var s=this.activeItemPath.some(function(r){return r.key===n.focusedItem.key});s?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(r){return r.parentKey!==n.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(u.s(this.focusedItem)){var n=u.z(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&(u.z(n,'[data-pc-section="itemlink"]')||u.z(n,"a,button"));a?a.click():n&&n.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var n=e.processedItem,a=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:n.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==n.parentKey}),a&&this.activeItemPath.push(n)),this.focusedItem=n,u.bt(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,n){var a=e.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(n)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(n){return e.isValidItem(n)})},findLastItem:function(){var e=this;return u.V$1(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItem:function(e){var n=this,a=this.visibleItems.findIndex(function(r){return r.key===e.key}),s=a<this.visibleItems.length-1?this.visibleItems.slice(a+1).find(function(r){return n.isValidItem(r)}):void 0;return s||e},findPrevItem:function(e){var n=this,a=this.visibleItems.findIndex(function(r){return r.key===e.key}),s=a>0?u.V$1(this.visibleItems.slice(0,a),function(r){return n.isValidItem(r)}):void 0;return s||e},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=null,r=!1;if(u.s(this.focusedItem)){var m=this.visibleItems.findIndex(function(c){return c.key===a.focusedItem.key});s=this.visibleItems.slice(m).find(function(c){return a.isItemMatched(c)}),s=u.l(s)?this.visibleItems.slice(0,m).find(function(c){return a.isItemMatched(c)}):s}else s=this.visibleItems.find(function(c){return a.isItemMatched(c)});return u.s(s)&&(r=!0),u.l(s)&&u.l(this.focusedItem)&&(s=this.findFirstItem()),u.s(s)&&this.changeFocusedItem({originalEvent:e,processedItem:s,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),r},changeFocusedItem:function(e){var n=e.originalEvent,a=e.processedItem,s=e.focusOnNext,r=e.selfCheck,m=e.allowHeaderFocus,c=m===void 0?!0:m;u.s(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):c&&this.$emit("header-focus",{originalEvent:n,focusOnNext:s,selfCheck:r})},scrollInView:function(){var e=u.z(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var n=this;this.activeItemPath=Object.entries(e||{}).reduce(function(a,s){var r=xe(s,2),m=r[0],c=r[1];if(c){var o=n.findProcessedItemByItemKey(m);o&&a.push(o)}return a},[])},findProcessedItemByItemKey:function(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||a===0&&this.processedItems,!n)return null;for(var s=0;s<n.length;s++){var r=n[s];if(this.getItemProp(r,"key")===e)return r;var m=this.findProcessedItemByItemKey(e,r.items,a+1);if(m)return m}},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",m=[];return e&&e.forEach(function(c,o){var l=(r!==""?r+"_":"")+o,d={item:c,index:o,level:a,key:l,parent:s,parentKey:r};d.items=n.createProcessedItems(c.items,a+1,d,l),m.push(d)}),m},flatItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(s){n.isVisibleItem(s)&&(a.push(s),n.flatItems(s.items,a))}),a}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return u.s(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:F}};function Be(t,e,n,a,s,r){var m=i.resolveComponent("PanelMenuSub");return i.openBlock(),i.createBlock(m,i.mergeProps({id:n.panelId+"_list",class:t.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":s.focused?r.focusedItemId:void 0,panelId:n.panelId,focusedItemId:s.focused?r.focusedItemId:void 0,items:r.processedItems,templates:n.templates,activeItemPath:s.activeItemPath,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemToggle:r.onItemToggle,onItemMousemove:r.onItemMouseMove,pt:t.pt,unstyled:t.unstyled},t.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}N.render=Be;function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,a)}return n}function Se(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K(Object(n),!0).forEach(function(a){Ke(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ke(t,e,n){return(e=Me(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Me(t){var e=Ve(t,"string");return b(e)=="symbol"?e:e+""}function Ve(t,e){if(b(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(b(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var O={name:"PanelMenu",extends:be,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{activeItem:null,activeItems:[]}},methods:{getItemProp:function(e,n){return e?u.m(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(e,{context:{index:a,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(n){return u.k(e,n)}):u.k(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return u.k(e,this.activeItem)},isItemGroup:function(e){return u.s(e.items)},getPanelId:function(e){return"".concat(this.$id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,n){if(this.isItemDisabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),this.changeActiveItem(e,n),u.bt(e.currentTarget)},onHeaderKeyDown:function(e,n){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,n);break}},onHeaderArrowDownKey:function(e){var n=u.Q(e.currentTarget,"data-p-active")===!0?u.z(e.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;n?u.bt(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var n=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=u.Q(n,"data-p-active")===!0?u.z(n.nextElementSibling,'[data-pc-section="rootlist"]'):null;a?u.bt(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,n){var a=u.z(e.currentTarget,'[data-pc-section="headerlink"]');a?a.click():this.onHeaderClick(e,n),e.preventDefault()},findNextHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.nextElementSibling,s=u.z(a,'[data-pc-section="header"]');return s?u.Q(s,"data-p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?e:e.previousElementSibling,s=u.z(a,'[data-pc-section="header"]');return s?u.Q(s,"data-p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var n=e.originalEvent,a=e.focusOnNext,s=e.selfCheck,r=n.currentTarget.closest('[data-pc-section="panel"]'),m=s?u.z(r,'[data-pc-section="header"]'):a?this.findNextHeader(r):this.findPrevHeader(r);m?this.changeFocusedHeader(n,m):a?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)},changeActiveItem:function(e,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(n)){var s=this.isItemActive(n),r=s?"panel-close":"panel-open";this.activeItem=a?n:this.activeItem&&u.k(n,this.activeItem)?null:n,this.multiple&&(this.activeItems.some(function(m){return u.k(n,m)})?this.activeItems=this.activeItems.filter(function(m){return!u.k(n,m)}):this.activeItems.push(n)),this.changeExpandedKeys({item:n,expanded:!s}),this.$emit(r,{originalEvent:e,item:n})}},changeExpandedKeys:function(e){var n=e.item,a=e.expanded,s=a===void 0?!1:a;if(this.expandedKeys){var r=Se({},this.expandedKeys);s?r[n.key]=!0:delete r[n.key],this.$emit("update:expandedKeys",r)}},changeFocusedHeader:function(e,n){n&&u.bt(n)},getMenuItemProps:function(e,n){return{icon:i.mergeProps({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,n)),label:i.mergeProps({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,n))}}},components:{PanelMenuList:N,ChevronRightIcon:P.script,ChevronDownIcon:E.script}},Ee=["id"],Ae=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],De=["href"],Fe=["id","aria-labelledby"];function Ne(t,e,n,a,s,r){var m=i.resolveComponent("PanelMenuList");return i.openBlock(),i.createElementBlock("div",i.mergeProps({id:t.$id,class:t.cx("root")},t.ptmi("root")),[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(t.model,function(c,o){return i.openBlock(),i.createElementBlock(i.Fragment,{key:r.getPanelKey(o)},[r.isItemVisible(c)?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:0,style:r.getItemProp(c,"style"),class:[t.cx("panel"),r.getItemProp(c,"class")]},{ref_for:!0},t.ptm("panel")),[i.createBaseVNode("div",i.mergeProps({id:r.getHeaderId(o),class:[t.cx("header",{item:c}),r.getItemProp(c,"headerClass")],tabindex:r.isItemDisabled(c)?-1:t.tabindex,role:"button","aria-label":r.getItemLabel(c),"aria-expanded":r.isItemActive(c),"aria-controls":r.getContentId(o),"aria-disabled":r.isItemDisabled(c),onClick:function(d){return r.onHeaderClick(d,c)},onKeydown:function(d){return r.onHeaderKeyDown(d,c)}},{ref_for:!0},r.getPTOptions("header",c,o),{"data-p-active":r.isItemActive(c),"data-p-disabled":r.isItemDisabled(c)}),[i.createBaseVNode("div",i.mergeProps({class:t.cx("headerContent")},{ref_for:!0},r.getPTOptions("headerContent",c,o)),[t.$slots.item?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(t.$slots.item),{key:1,item:c,root:!0,active:r.isItemActive(c),hasSubmenu:r.isItemGroup(c),label:r.getItemLabel(c),props:r.getMenuItemProps(c,o)},null,8,["item","active","hasSubmenu","label","props"])):(i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,href:r.getItemProp(c,"url"),class:t.cx("headerLink"),tabindex:-1},{ref_for:!0},r.getPTOptions("headerLink",c,o)),[r.getItemProp(c,"items")?i.renderSlot(t.$slots,"submenuicon",{key:0,active:r.isItemActive(c)},function(){return[(i.openBlock(),i.createBlock(i.resolveDynamicComponent(r.isItemActive(c)?"ChevronDownIcon":"ChevronRightIcon"),i.mergeProps({class:t.cx("submenuIcon")},{ref_for:!0},r.getPTOptions("submenuIcon",c,o)),null,16,["class"]))]}):i.createCommentVNode("",!0),t.$slots.headericon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(t.$slots.headericon),{key:1,item:c,class:i.normalizeClass([t.cx("headerIcon"),r.getItemProp(c,"icon")])},null,8,["item","class"])):r.getItemProp(c,"icon")?(i.openBlock(),i.createElementBlock("span",i.mergeProps({key:2,class:[t.cx("headerIcon"),r.getItemProp(c,"icon")]},{ref_for:!0},r.getPTOptions("headerIcon",c,o)),null,16)):i.createCommentVNode("",!0),i.createBaseVNode("span",i.mergeProps({class:t.cx("headerLabel")},{ref_for:!0},r.getPTOptions("headerLabel",c,o)),i.toDisplayString(r.getItemLabel(c)),17)],16,De))],16)],16,Ae),i.createVNode(i.Transition,i.mergeProps({name:"p-collapsible"},{ref_for:!0},t.ptm("transition")),{default:i.withCtx(function(){return[i.withDirectives(i.createBaseVNode("div",i.mergeProps({id:r.getContentId(o),class:t.cx("contentContainer"),role:"region","aria-labelledby":r.getHeaderId(o)},{ref_for:!0},t.ptm("contentContainer")),[i.createBaseVNode("div",i.mergeProps({class:t.cx("contentWrapper")},{ref_for:!0},t.ptm("contentWrapper")),[r.getItemProp(c,"items")?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:0,class:t.cx("content")},{ref_for:!0},t.ptm("content")),[i.createVNode(m,{panelId:r.getPanelId(o),items:r.getItemProp(c,"items"),templates:t.$slots,expandedKeys:t.expandedKeys,onItemToggle:r.changeExpandedKeys,onHeaderFocus:r.updateFocusedHeader,pt:t.pt,unstyled:t.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):i.createCommentVNode("",!0)],16)],16,Fe),[[i.vShow,r.isItemActive(c)]])]}),_:2},1040)],16)):i.createCommentVNode("",!0)],64)}),128))],16,Ee)}O.render=Ne;var Oe=`
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        line-height: 1;
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`,Te={rootList:function(e){var n=e.props;return{"max-height":n.scrollHeight,overflow:"auto"}}},ze={root:function(e){var n=e.instance;return["p-megamenu p-component",{"p-megamenu-mobile":n.queryMatches,"p-megamenu-mobile-active":n.mobileActive,"p-megamenu-horizontal":n.horizontal,"p-megamenu-vertical":n.vertical}]},start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:function(e){var n=e.instance,a=e.processedItem;return["p-megamenu-submenu-label",{"p-disabled":n.isItemDisabled(a)}]},item:function(e){var n=e.instance,a=e.processedItem;return["p-megamenu-item",{"p-megamenu-item-active":n.isItemActive(a),"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:function(e){var n=e.instance,a=e.processedItem,s=n.isItemGroup(a)?a.items.length:0,r;if(n.$parentInstance.queryMatches)r="p-megamenu-col-12";else switch(s){case 2:r="p-megamenu-col-6";break;case 3:r="p-megamenu-col-4";break;case 4:r="p-megamenu-col-3";break;case 6:r="p-megamenu-col-2";break;default:r="p-megamenu-col-12";break}return r},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},He=u.BaseStyle.extend({name:"megamenu",style:Oe,classes:ze,inlineStyles:Te}),Re={name:"BaseMegaMenu",extends:u.script,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},scrollHeight:{type:String,default:"20rem"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:He,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},T={name:"MegaMenuSub",hostName:"MegaMenu",extends:u.script,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?u.m(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(a,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return u.s(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return u.s(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:i.mergeProps({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:i.mergeProps({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:i.mergeProps({class:this.cx("label")},this.getPTOptions(e,n,"label")),submenuicon:i.mergeProps({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},components:{AngleRightIcon:w.script,AngleDownIcon:D.script},directives:{ripple:u.Ripple}},_e=["tabindex"],Ge=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],je=["onClick","onMouseenter"],Ue=["href","target"],qe=["id"];function We(t,e,n,a,s,r){var m=i.resolveComponent("MegaMenuSub",!0),c=i.resolveDirective("ripple");return i.openBlock(),i.createElementBlock("ul",i.mergeProps({class:n.level===0?t.cx("rootList"):t.cx("submenu"),tabindex:n.tabindex},n.level===0?t.ptm("rootList"):t.ptm("submenu")),[n.submenu?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:0,class:[t.cx("submenuLabel",{submenu:n.submenu}),r.getItemProp(n.submenu,"class")],style:r.getItemProp(n.submenu,"style"),role:"presentation"},t.ptm("submenuLabel")),i.toDisplayString(r.getItemLabel(n.submenu)),17)):i.createCommentVNode("",!0),(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(n.items,function(o,l){return i.openBlock(),i.createElementBlock(i.Fragment,{key:r.getItemKey(o)},[r.isItemVisible(o)&&!r.getItemProp(o,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:0,id:r.getItemId(o),style:r.getItemProp(o,"style"),class:[t.cx("item",{processedItem:o}),r.getItemProp(o,"class")],role:"menuitem","aria-label":r.getItemLabel(o),"aria-disabled":r.isItemDisabled(o)||void 0,"aria-expanded":r.isItemGroup(o)?r.isItemActive(o):void 0,"aria-haspopup":r.isItemGroup(o)&&!r.getItemProp(o,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":r.getAriaSetSize(),"aria-posinset":r.getAriaPosInset(l)},{ref_for:!0},r.getPTOptions(o,l,"item"),{"data-p-active":r.isItemActive(o),"data-p-focused":r.isItemFocused(o),"data-p-disabled":r.isItemDisabled(o)}),[i.createBaseVNode("div",i.mergeProps({class:t.cx("itemContent"),onClick:function(p){return r.onItemClick(p,o)},onMouseenter:function(p){return r.onItemMouseEnter(p,o)}},{ref_for:!0},r.getPTOptions(o,l,"itemContent")),[n.templates.item?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.item),{key:1,item:o.item,hasSubmenu:r.isItemGroup(o),label:r.getItemLabel(o),props:r.getMenuItemProps(o,l)},null,8,["item","hasSubmenu","label","props"])):i.withDirectives((i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,href:r.getItemProp(o,"url"),class:t.cx("itemLink"),target:r.getItemProp(o,"target"),tabindex:"-1"},{ref_for:!0},r.getPTOptions(o,l,"itemLink")),[n.templates.itemicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.itemicon),{key:0,item:o.item,class:i.normalizeClass(t.cx("itemIcon"))},null,8,["item","class"])):r.getItemProp(o,"icon")?(i.openBlock(),i.createElementBlock("span",i.mergeProps({key:1,class:[t.cx("itemIcon"),r.getItemProp(o,"icon")]},{ref_for:!0},r.getPTOptions(o,l,"itemIcon")),null,16)):i.createCommentVNode("",!0),i.createBaseVNode("span",i.mergeProps({class:t.cx("itemLabel")},{ref_for:!0},r.getPTOptions(o,l,"itemLabel")),i.toDisplayString(r.getItemLabel(o)),17),r.isItemGroup(o)?(i.openBlock(),i.createElementBlock(i.Fragment,{key:2},[n.templates.submenuicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.submenuicon),i.mergeProps({key:0,active:r.isItemActive(o),class:t.cx("submenuIcon")},{ref_for:!0},r.getPTOptions(o,l,"submenuIcon")),null,16,["active","class"])):(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.horizontal||n.mobileActive?"AngleDownIcon":"AngleRightIcon"),i.mergeProps({key:1,class:t.cx("submenuIcon")},{ref_for:!0},r.getPTOptions(o,l,"submenuIcon")),null,16,["class"]))],64)):i.createCommentVNode("",!0)],16,Ue)),[[c]])],16,je),r.isItemVisible(o)&&r.isItemGroup(o)?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:0,class:t.cx("overlay")},{ref_for:!0},t.ptm("overlay")),[i.createBaseVNode("div",i.mergeProps({class:t.cx("grid")},{ref_for:!0},t.ptm("grid")),[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(o.items,function(d){return i.openBlock(),i.createElementBlock("div",i.mergeProps({key:r.getItemKey(d),class:t.cx("column",{processedItem:o})},{ref_for:!0},t.ptm("column")),[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(d,function(p){return i.openBlock(),i.createBlock(m,{key:r.getSubListKey(p),id:r.getSubListId(p),style:i.normalizeStyle(t.sx("submenu",!0,{processedItem:o})),role:"menu",menuId:n.menuId,focusedItemId:n.focusedItemId,submenu:p,items:p.items,templates:n.templates,level:n.level+1,mobileActive:n.mobileActive,pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(h){return t.$emit("item-click",h)}),onItemMouseenter:e[1]||(e[1]=function(h){return t.$emit("item-mouseenter",h)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):i.createCommentVNode("",!0)],16,Ge)):i.createCommentVNode("",!0),r.isItemVisible(o)&&r.getItemProp(o,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:1,id:r.getItemId(o),class:[t.cx("separator"),r.getItemProp(o,"class")],style:r.getItemProp(o,"style"),role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,qe)):i.createCommentVNode("",!0)],64)}),128))],16,_e)}T.render=We;var z={name:"MegaMenu",extends:Re,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{activeItem:function(e){u.s(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,n){return e?u.m(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return u.s(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&u.s(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,u.x.clear(this.menubar),this.hide()):(this.mobileActive=!0,u.x.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},u.bt(this.menubar)},hide:function(e,n){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){u.bt(a.$refs.menubutton,{preventScroll:!0})},1)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},n&&u.bt(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var n=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(n);this.focusedItemInfo={index:n,key:a.key,parentKey:a.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&u.J(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var n=e.processedItem,a=e.isFocus;if(!u.l(n)){var s=n.index,r=n.key,m=n.parentKey,c=n.items,o=u.s(c);o&&(this.activeItem=n),this.focusedItemInfo={index:s,key:r,parentKey:m},o&&(this.dirty=!0),a&&u.bt(this.menubar)}},onItemClick:function(e){var n=e.originalEvent,a=e.processedItem,s=this.isProccessedItemGroup(a),r=u.l(a.parent),m=this.isSelected(a);if(m){var c=a.index,o=a.key,l=a.parentKey;this.activeItem=null,this.focusedItemInfo={index:c,key:o,parentKey:l},this.dirty=!r,this.mobileActive||u.bt(this.menubar,{preventScroll:!0})}else s?this.onItemChange(e):this.hide(n)},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal)if(u.s(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);a&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,key:n.key,parentKey:n.parentKey},this.searchValue="")}var s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,s),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);!a&&u.s(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,s),e.preventDefault()}},onArrowLeftKey:function(e){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);if(a){if(this.horizontal){var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,s)}}else{this.vertical&&u.s(this.activeItem)&&n.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var r=n.columnIndex-1,m=this.visibleItems.findIndex(function(c){return c.columnIndex===r});m!==-1&&this.changeFocusedItemInfo(e,m)}e.preventDefault()},onArrowRightKey:function(e){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);if(a){if(this.vertical)if(u.s(this.activeItem)&&this.activeItem.key===n.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var s=this.findVisibleItem(this.focusedItemInfo.index),r=this.isProccessedItemGroup(s);r&&(this.onItemChange({originalEvent:e,processedItem:s}),this.focusedItemInfo={index:-1,key:s.key,parentKey:s.parentKey},this.searchValue="")}var m=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,m)}else{var c=n.columnIndex+1,o=this.visibleItems.findIndex(function(l){return l.columnIndex===c});o!==-1&&this.changeFocusedItemInfo(e,o)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=u.z(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&u.z(n,'a[data-pc-section="itemlink"]');a?a.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(s);!r&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){u.s(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=e.container&&!e.container.contains(n.target),s=!(e.target&&(e.target===n.target||e.target.contains(n.target)));a&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){u.Yt()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return u.s(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return u.M(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var n=this,a=e>0?u.M(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return u.s(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=-1,r=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(m){return a.isItemMatched(m)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(m){return a.isItemMatched(m)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(m){return a.isItemMatched(m)}),s!==-1&&(r=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemInfo(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),r},changeFocusedItemInfo:function(e,n){var a=this.findVisibleItem(n);this.focusedItemInfo.index=n,this.focusedItemInfo.key=u.s(a)?a.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,a;n===null&&this.queryMatches?a=this.$refs.menubutton:a=u.z(this.menubar,'li[id="'.concat(n,'"]')),a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",m=arguments.length>4?arguments[4]:void 0,c=[];return e&&e.forEach(function(o,l){var d=(r!==""?r+"_":"")+(m!==void 0?m+"_":"")+l,p={item:o,index:l,level:a,key:d,parent:s,parentKey:r,columnIndex:m!==void 0?m:s.columnIndex!==void 0?s.columnIndex:l};p.items=a===0&&o.items&&o.items.length>0?o.items.map(function(h,v){return n.createProcessedItems(h,a+1,p,d,v)}):n.createProcessedItems(o.items,a+1,p,d),c.push(p)}),c},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=u.s(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(n,a){return a.forEach(function(s){s.items.forEach(function(r){n.push(r)})}),n},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return u.s(this.focusedItemInfo.key)?"".concat(this.$id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:T,BarsIcon:A.script}},Ye=["id"],Qe=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Ze(t,e,n,a,s,r){var m=i.resolveComponent("BarsIcon"),c=i.resolveComponent("MegaMenuSub");return i.openBlock(),i.createElementBlock("div",i.mergeProps({ref:r.containerRef,id:t.$id,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:0,class:t.cx("start")},t.ptm("start")),[i.renderSlot(t.$slots,"start")],16)):i.createCommentVNode("",!0),i.renderSlot(t.$slots,t.$slots.button?"button":"menubutton",{id:t.$id,class:i.normalizeClass(t.cx("button")),toggleCallback:function(l){return r.menuButtonClick(l)}},function(){var o;return[t.model&&t.model.length>0?(i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":t.$id,"aria-label":(o=t.$primevue.config.locale.aria)===null||o===void 0?void 0:o.navigation,onClick:e[0]||(e[0]=function(l){return r.menuButtonClick(l)}),onKeydown:e[1]||(e[1]=function(l){return r.menuButtonKeydown(l)})},t.ptm("button")),[i.renderSlot(t.$slots,t.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[i.createVNode(m,i.normalizeProps(i.guardReactiveProps(t.ptm("buttonIcon"))),null,16)]})],16,Qe)):i.createCommentVNode("",!0)]}),i.createVNode(c,{ref:r.menubarRef,id:t.$id+"_list",tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":t.orientation,"aria-activedescendant":s.focused?r.focusedItemId:void 0,menuId:t.$id,focusedItemId:s.focused?r.focusedItemId:void 0,items:r.processedItems,horizontal:r.horizontal,templates:t.$slots,activeItem:s.activeItem,mobileActive:s.mobileActive,level:0,style:i.normalizeStyle(t.sx("rootList")),pt:t.pt,unstyled:t.unstyled,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","style","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:1,class:t.cx("end")},t.ptm("end")),[i.renderSlot(t.$slots,"end")],16)):i.createCommentVNode("",!0)],16,Ye)}z.render=Ze;var Je=`
    .p-contextmenu {
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        min-width: 12.5rem;
    }

    .p-contextmenu-root-list,
    .p-contextmenu-submenu {
        margin: 0;
        padding: dt('contextmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('contextmenu.list.gap');
    }

    .p-contextmenu-submenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 100%;
        z-index: 1;
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
    }

    .p-contextmenu-item {
        position: relative;
    }

    .p-contextmenu-item-content {
        transition:
            background dt('contextmenu.transition.duration'),
            color dt('contextmenu.transition.duration');
        border-radius: dt('contextmenu.item.border.radius');
        color: dt('contextmenu.item.color');
    }

    .p-contextmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('contextmenu.item.padding');
        gap: dt('contextmenu.item.gap');
        user-select: none;
    }

    .p-contextmenu-item-label {
        line-height: 1;
    }

    .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.color');
    }

    .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('contextmenu.submenu.icon.size');
        width: dt('contextmenu.submenu.icon.size');
        height: dt('contextmenu.submenu.icon.size');
    }

    .p-contextmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content {
        color: dt('contextmenu.item.active.color');
        background: dt('contextmenu.item.active.background');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.active.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.active.color');
    }

    .p-contextmenu-separator {
        border-block-start: 1px solid dt('contextmenu.separator.border.color');
    }

    .p-contextmenu-mobile .p-contextmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,Xe={root:function(e){var n=e.instance;return["p-contextmenu p-component",{"p-contextmenu-mobile":n.queryMatches}]},rootList:"p-contextmenu-root-list",item:function(e){var n=e.instance,a=e.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":n.isItemActive(a),"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},$e=u.BaseStyle.extend({name:"contextmenu",style:Je,classes:Xe}),et={name:"BaseContextMenu",extends:u.script,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:"960px"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:$e,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},H={name:"ContextMenuSub",hostName:"ContextMenu",extends:u.script,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?u.m(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,a){return this.ptm(e,{context:{item:n.item,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n),index:a}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return u.s(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},onEnter:function(){u.zt(this.$refs.container,this.level)},getMenuItemProps:function(e,n){return{action:i.mergeProps({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,n)),icon:i.mergeProps({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,n)),label:i.mergeProps({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,n)),submenuicon:i.mergeProps({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,n))}}},components:{AngleRightIcon:w.script},directives:{ripple:u.Ripple}},tt=["tabindex"],nt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],it=["onClick","onMouseenter","onMousemove"],rt=["href","target"],at=["id"],ot=["id"];function st(t,e,n,a,s,r){var m=i.resolveComponent("AngleRightIcon"),c=i.resolveComponent("ContextMenuSub",!0),o=i.resolveDirective("ripple");return i.openBlock(),i.createBlock(i.Transition,i.mergeProps({name:"p-anchored-overlay",onEnter:r.onEnter},t.ptm("menu.transition")),{default:i.withCtx(function(){return[n.root||n.visible?(i.openBlock(),i.createElementBlock("ul",i.mergeProps({key:0,ref:"container",tabindex:n.tabindex},t.ptm("rootList")),[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(n.items,function(l,d){return i.openBlock(),i.createElementBlock(i.Fragment,{key:r.getItemKey(l)},[r.isItemVisible(l)&&!r.getItemProp(l,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:0,id:r.getItemId(l),style:r.getItemProp(l,"style"),class:[t.cx("item",{processedItem:l}),r.getItemProp(l,"class")],role:"menuitem","aria-label":r.getItemLabel(l),"aria-disabled":r.isItemDisabled(l)||void 0,"aria-expanded":r.isItemGroup(l)?r.isItemActive(l):void 0,"aria-haspopup":r.isItemGroup(l)&&!r.getItemProp(l,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":r.getAriaSetSize(),"aria-posinset":r.getAriaPosInset(d)},{ref_for:!0},r.getPTOptions("item",l,d),{"data-p-active":r.isItemActive(l),"data-p-focused":r.isItemFocused(l),"data-p-disabled":r.isItemDisabled(l)}),[i.createBaseVNode("div",i.mergeProps({class:t.cx("itemContent"),onClick:function(h){return r.onItemClick(h,l)},onMouseenter:function(h){return r.onItemMouseEnter(h,l)},onMousemove:function(h){return r.onItemMouseMove(h,l)}},{ref_for:!0},r.getPTOptions("itemContent",l,d)),[n.templates.item?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.item),{key:1,item:l.item,hasSubmenu:r.getItemProp(l,"items"),label:r.getItemLabel(l),props:r.getMenuItemProps(l,d)},null,8,["item","hasSubmenu","label","props"])):i.withDirectives((i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,href:r.getItemProp(l,"url"),class:t.cx("itemLink"),target:r.getItemProp(l,"target"),tabindex:"-1"},{ref_for:!0},r.getPTOptions("itemLink",l,d)),[n.templates.itemicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.itemicon),{key:0,item:l.item,class:i.normalizeClass(t.cx("itemIcon"))},null,8,["item","class"])):r.getItemProp(l,"icon")?(i.openBlock(),i.createElementBlock("span",i.mergeProps({key:1,class:[t.cx("itemIcon"),r.getItemProp(l,"icon")]},{ref_for:!0},r.getPTOptions("itemIcon",l,d)),null,16)):i.createCommentVNode("",!0),i.createBaseVNode("span",i.mergeProps({id:r.getItemLabelId(l),class:t.cx("itemLabel")},{ref_for:!0},r.getPTOptions("itemLabel",l,d)),i.toDisplayString(r.getItemLabel(l)),17,at),r.getItemProp(l,"items")?(i.openBlock(),i.createElementBlock(i.Fragment,{key:2},[n.templates.submenuicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.submenuicon),{key:0,active:r.isItemActive(l),class:i.normalizeClass(t.cx("submenuIcon"))},null,8,["active","class"])):(i.openBlock(),i.createBlock(m,i.mergeProps({key:1,class:t.cx("submenuIcon")},{ref_for:!0},r.getPTOptions("submenuicon",l,d)),null,16,["class"]))],64)):i.createCommentVNode("",!0)],16,rt)),[[o]])],16,it),r.isItemVisible(l)&&r.isItemGroup(l)?(i.openBlock(),i.createBlock(c,i.mergeProps({key:0,id:r.getItemId(l)+"_list",role:"menu",class:t.cx("submenu"),menuId:n.menuId,focusedItemId:n.focusedItemId,items:l.items,templates:n.templates,activeItemPath:n.activeItemPath,level:n.level+1,visible:r.isItemActive(l)&&r.isItemGroup(l),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(p){return t.$emit("item-click",p)}),onItemMouseenter:e[1]||(e[1]=function(p){return t.$emit("item-mouseenter",p)}),onItemMousemove:e[2]||(e[2]=function(p){return t.$emit("item-mousemove",p)}),"aria-labelledby":r.getItemLabelId(l)},{ref_for:!0},t.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):i.createCommentVNode("",!0)],16,nt)):i.createCommentVNode("",!0),r.isItemVisible(l)&&r.getItemProp(l,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:1,id:r.getItemId(l),style:r.getItemProp(l,"style"),class:[t.cx("separator"),r.getItemProp(l,"class")],role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,ot)):i.createCommentVNode("",!0)],64)}),128))],16,tt)):i.createCommentVNode("",!0)]}),_:1},16,["onEnter"])}H.render=st;var R={name:"ContextMenu",extends:et,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){u.s(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&u.x.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,n){return e?u.m(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return u.s(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&u.s(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},u.bt(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&u.J(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var a=e.processedItem,s=e.isFocus;if(!u.l(a)){var r=a.index,m=a.key,c=a.level,o=a.parentKey,l=a.items,d=u.s(l),p=this.activeItemPath.filter(function(h){return h.parentKey!==o&&h.parentKey!==m});d&&(p.push(a),this.submenuVisible=!0),this.focusedItemInfo={index:r,level:c,parentKey:o},s&&u.bt(this.list),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=p)}},onItemClick:function(e){var n=e.processedItem,a=this.isProccessedItemGroup(n),s=this.isSelected(n);if(s){var r=n.index,m=n.key,c=n.level,o=n.parentKey;this.activeItemPath=this.activeItemPath.filter(function(l){return m!==l.key&&m.startsWith(l.key)}),this.focusedItemInfo={index:r,level:c,parentKey:o},u.bt(this.list)}else a?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var n=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:e,processedItem:n})}this.popup&&this.hide(),e.preventDefault()}else{var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onArrowLeftKey:function(e){var n=this,a=this.visibleItems[this.focusedItemInfo.index],s=this.activeItemPath.find(function(m){return m.key===a.parentKey}),r=u.l(a.parent);r||(this.focusedItemInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(m){return m.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(n);a&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=u.z(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),a=n&&u.z(n,'[data-pc-section="itemlink"]');a?a.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(s);!r&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},onEnter:function(e){u.S(e,{position:"absolute"}),this.position(),this.autoZIndex&&u.x.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),u.bt(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&u.x.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,n=this.pageY+1,a=this.container.offsetParent?this.container.offsetWidth:u.J$1(this.container),s=this.container.offsetParent?this.container.offsetHeight:u.G(this.container),r=u.h$1(),m=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+a-c>r.width&&(e-=a),n+s-m>r.height&&(n-=s),e<c&&(e=c),n<m&&(n=m),this.container.style.left=e+"px",this.container.style.top=n+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=e.container&&!e.container.contains(n.target),s=e.visible?!(e.target&&(e.target===n.target||e.target.contains(n.target))):!0;a&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!u.Yt()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(n){n.button===2&&e.show(n)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return u.M(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var n=this,a=e>0?u.M(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=-1,r=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(m){return a.isItemMatched(m)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(m){return a.isItemMatched(m)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(m){return a.isItemMatched(m)}),s!==-1&&(r=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),r},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemIdx,a=u.z(this.list,'li[id="'.concat(n,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",m=[];return e&&e.forEach(function(c,o){var l=(r!==""?r+"_":"")+o,d={item:c,index:o,level:a,key:l,parent:s,parentKey:r};d.items=n.createProcessedItems(c.items,a+1,d,l),m.push(d)}),m},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(u.s(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:H,Portal:u.script$2}};function ut(t,e,n,a,s,r){var m=i.resolveComponent("ContextMenuSub"),c=i.resolveComponent("Portal");return i.openBlock(),i.createBlock(c,{appendTo:t.appendTo},{default:i.withCtx(function(){return[i.createVNode(i.Transition,i.mergeProps({name:"p-anchored-overlay",onEnter:r.onEnter,onAfterEnter:r.onAfterEnter,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave},t.ptm("transition")),{default:i.withCtx(function(){return[s.visible?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:0,ref:r.containerRef,class:t.cx("root")},t.ptmi("root")),[i.createVNode(m,{ref:r.listRef,id:t.$id+"_list",class:i.normalizeClass(t.cx("rootList")),role:"menubar",root:!0,tabindex:t.tabindex,"aria-orientation":"vertical","aria-activedescendant":s.focused?r.focusedItemIdx:void 0,menuId:t.$id,focusedItemId:s.focused?r.focusedItemIdx:void 0,items:r.processedItems,templates:t.$slots,activeItemPath:s.activeItemPath,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,level:0,visible:s.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter,onItemMousemove:r.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):i.createCommentVNode("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}R.render=ut;var lt=`
    .p-steplist {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-step {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: dt('stepper.step.gap');
        padding: dt('stepper.step.padding');
    }

    .p-step:last-of-type {
        flex: initial;
    }

    .p-step-header {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration');
        border-radius: dt('stepper.step.header.border.radius');
        outline-color: transparent;
        background: transparent;
        padding: dt('stepper.step.header.padding');
        gap: dt('stepper.step.header.gap');
    }

    .p-step-header:focus-visible {
        box-shadow: dt('stepper.step.header.focus.ring.shadow');
        outline: dt('stepper.step.header.focus.ring.width') dt('stepper.step.header.focus.ring.style') dt('stepper.step.header.focus.ring.color');
        outline-offset: dt('stepper.step.header.focus.ring.offset');
    }

    .p-stepper.p-stepper-readonly .p-step {
        cursor: auto;
    }

    .p-step-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('stepper.step.title.color');
        font-weight: dt('stepper.step.title.font.weight');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('stepper.step.number.color');
        border: 2px solid dt('stepper.step.number.border.color');
        background: dt('stepper.step.number.background');
        min-width: dt('stepper.step.number.size');
        height: dt('stepper.step.number.size');
        line-height: dt('stepper.step.number.size');
        font-size: dt('stepper.step.number.font.size');
        z-index: 1;
        border-radius: dt('stepper.step.number.border.radius');
        position: relative;
        font-weight: dt('stepper.step.number.font.weight');
    }

    .p-step-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('stepper.step.number.border.radius');
        box-shadow: dt('stepper.step.number.shadow');
    }

    .p-step-active .p-step-header {
        cursor: default;
    }

    .p-step-active .p-step-number {
        background: dt('stepper.step.number.active.background');
        border-color: dt('stepper.step.number.active.border.color');
        color: dt('stepper.step.number.active.color');
    }

    .p-step-active .p-step-title {
        color: dt('stepper.step.title.active.color');
    }

    .p-step:not(.p-disabled):focus-visible {
        outline: dt('focus.ring.width') dt('focus.ring.style') dt('focus.ring.color');
        outline-offset: dt('focus.ring.offset');
    }

    .p-step:has(~ .p-step-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepper-separator {
        flex: 1 1 0;
        background: dt('stepper.separator.background');
        width: 100%;
        height: dt('stepper.separator.size');
        transition:
            background dt('stepper.transition.duration'),
            color dt('stepper.transition.duration'),
            border-color dt('stepper.transition.duration'),
            box-shadow dt('stepper.transition.duration'),
            outline-color dt('stepper.transition.duration');
    }

    .p-steppanels {
        padding: dt('stepper.steppanels.padding');
    }

    .p-steppanel {
        background: dt('stepper.steppanel.background');
        color: dt('stepper.steppanel.color');
    }

    .p-stepper:has(.p-stepitem) {
        display: flex;
        flex-direction: column;
    }

    .p-stepitem {
        display: flex;
        flex-direction: column;
        flex: initial;
    }

    .p-stepitem.p-stepitem-active {
        flex: 1 1 auto;
    }

    .p-stepitem .p-step {
        flex: initial;
    }
    
    .p-stepitem .p-steppanel {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-stepitem .p-steppanel-content-wrapper {
        display: flex;
        flex: 1 1 auto;
        min-height: 0;
    }
    .p-stepitem .p-steppanel-content {
        width: 100%;
        padding: dt('stepper.steppanel.padding');
        margin-inline-start: 1rem;
    }

    .p-stepitem .p-stepper-separator {
        flex: 0 0 auto;
        width: dt('stepper.separator.size');
        height: auto;
        margin: dt('stepper.separator.margin');
        position: relative;
        left: calc(-1 * dt('stepper.separator.size'));
    }

    .p-stepitem .p-stepper-separator:dir(rtl) {
        left: calc(-9 * dt('stepper.separator.size'));
    }

    .p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
        background: dt('stepper.separator.active.background');
    }

    .p-stepitem:last-of-type .p-steppanel {
        padding-inline-start: dt('stepper.step.number.size');
    }
`,mt={root:function(e){var n=e.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},ct=u.BaseStyle.extend({name:"stepper",style:lt,classes:mt}),dt={name:"BaseStepper",extends:u.script,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:ct,provide:function(){return{$pcStepper:this,$parentInstance:this}}},_={name:"Stepper",extends:dt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function pt(t,e,n,a,s,r){return i.openBlock(),i.createElementBlock("div",i.mergeProps({class:t.cx("root"),role:"tablist"},t.ptmi("root")),[t.$slots.start?i.renderSlot(t.$slots,"start",{key:0}):i.createCommentVNode("",!0),i.renderSlot(t.$slots,"default"),t.$slots.end?i.renderSlot(t.$slots,"end",{key:1}):i.createCommentVNode("",!0)],16)}_.render=pt;var ft={root:"p-steplist"},ht=u.BaseStyle.extend({name:"steplist",classes:ft}),bt={name:"BaseStepList",extends:u.script,style:ht,provide:function(){return{$pcStepList:this,$parentInstance:this}}},G={name:"StepList",extends:bt,inheritAttrs:!1};function It(t,e,n,a,s,r){return i.openBlock(),i.createElementBlock("div",i.mergeProps({class:t.cx("root")},t.ptmi("root")),[i.renderSlot(t.$slots,"default")],16)}G.render=It;var gt={root:function(e){var n=e.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},vt=u.BaseStyle.extend({name:"step",classes:gt}),j={name:"StepperSeparator",hostName:"Stepper",extends:u.script,inject:{$pcStepper:{default:null}}};function yt(t,e,n,a,s,r){return i.openBlock(),i.createElementBlock("span",i.mergeProps({class:t.cx("separator")},t.ptmo(r.$pcStepper.pt,"separator")),null,16)}j.render=yt;var kt={name:"BaseStep",extends:u.script,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:vt,provide:function(){return{$pcStep:this,$parentInstance:this}}},U={name:"Step",extends:kt,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1,isCompleted:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=u.h(this.$el,u.Y(this.$pcStepper.$el,'[data-pc-name="step"]')),n=u.h(u.z(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),u.Y(this.$pcStepper.$el,'[data-pc-name="step"]')),a=u.Y(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==a-1,this.isCompleted=e<n}},updated:function(){var e=u.h(this.$el,u.Y(this.$pcStepper.$el,'[data-pc-name="step"]')),n=u.h(u.z(this.$pcStepper.$el,'[data-pc-name="step"][data-p-active="true"]'),u.Y(this.$pcStepper.$el,'[data-pc-name="step"]'));this.isCompleted=e<n},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.$id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.$id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}},dataP:function(){return u.f({disabled:this.isStepDisabled,readonly:this.$pcStepper.linear,active:this.active,completed:this.isCompleted,vertical:this.$pcStepItem!=null})}},components:{StepperSeparator:j}},xt=["id","tabindex","aria-controls","disabled","data-p"],Pt=["data-p"],wt=["data-p"];function Lt(t,e,n,a,s,r){var m=i.resolveComponent("StepperSeparator");return t.asChild?i.renderSlot(t.$slots,"default",{key:1,class:i.normalizeClass(t.cx("root")),active:r.active,value:t.value,a11yAttrs:r.a11yAttrs,activateCallback:r.onStepClick}):(i.openBlock(),i.createBlock(i.resolveDynamicComponent(t.as),i.mergeProps({key:0,class:t.cx("root"),"aria-current":r.active?"step":void 0,role:"presentation","data-p-active":r.active,"data-p-disabled":r.isStepDisabled,"data-p":r.dataP},r.getPTOptions("root")),{default:i.withCtx(function(){return[i.createBaseVNode("button",i.mergeProps({id:r.id,class:t.cx("header"),role:"tab",type:"button",tabindex:r.isStepDisabled?-1:void 0,"aria-controls":r.ariaControls,disabled:r.isStepDisabled,onClick:e[0]||(e[0]=function(){return r.onStepClick&&r.onStepClick.apply(r,arguments)}),"data-p":r.dataP},r.getPTOptions("header")),[i.createBaseVNode("span",i.mergeProps({class:t.cx("number"),"data-p":r.dataP},r.getPTOptions("number")),i.toDisplayString(r.activeValue),17,Pt),i.createBaseVNode("span",i.mergeProps({class:t.cx("title"),"data-p":r.dataP},r.getPTOptions("title")),[i.renderSlot(t.$slots,"default")],16,wt)],16,xt),s.isSeparatorVisible?(i.openBlock(),i.createBlock(m,{key:0,"data-p":r.dataP},null,8,["data-p"])):i.createCommentVNode("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled","data-p"]))}U.render=Lt;var Ct=`
    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
    }

    .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.color');
        transition: inherit;
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
        color: dt('breadcrumb.item.icon.hover.color');
    }
`,Bt={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(e){var n=e.instance;return["p-breadcrumb-item",{"p-disabled":n.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},St=u.BaseStyle.extend({name:"breadcrumb",style:Ct,classes:Bt}),Kt={name:"BaseBreadcrumb",extends:u.script,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:St,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},q={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:u.script,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,n=e.to,a=e.url,s=typeof window<"u"?window.location.pathname:"";return n===s||a===s?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:i.mergeProps({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(a){return e.onClick(a)}},this.ptm("itemLink",this.ptmOptions)),icon:i.mergeProps({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i.mergeProps({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},Mt=["href","target","aria-current"];function Vt(t,e,n,a,s,r){return r.visible()?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:0,class:[t.cx("item"),n.item.class]},t.ptm("item",r.ptmOptions)),[n.templates.item?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.item),{key:1,item:n.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,href:n.item.url||"#",class:t.cx("itemLink"),target:n.item.target,"aria-current":r.isCurrentUrl(),onClick:e[0]||(e[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},t.ptm("itemLink",r.ptmOptions)),[n.templates&&n.templates.itemicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.itemicon),{key:0,item:n.item,class:i.normalizeClass(t.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):n.item.icon?(i.openBlock(),i.createElementBlock("span",i.mergeProps({key:1,class:[t.cx("itemIcon"),n.item.icon]},t.ptm("itemIcon",r.ptmOptions)),null,16)):i.createCommentVNode("",!0),n.item.label?(i.openBlock(),i.createElementBlock("span",i.mergeProps({key:2,class:t.cx("itemLabel")},t.ptm("itemLabel",r.ptmOptions)),i.toDisplayString(r.label()),17)):i.createCommentVNode("",!0)],16,Mt))],16)):i.createCommentVNode("",!0)}q.render=Vt;var W={name:"Breadcrumb",extends:Kt,inheritAttrs:!1,components:{BreadcrumbItem:q,ChevronRightIcon:P.script}};function Et(t,e,n,a,s,r){var m=i.resolveComponent("BreadcrumbItem"),c=i.resolveComponent("ChevronRightIcon");return i.openBlock(),i.createElementBlock("nav",i.mergeProps({class:t.cx("root")},t.ptmi("root")),[i.createBaseVNode("ol",i.mergeProps({class:t.cx("list")},t.ptm("list")),[t.home?(i.openBlock(),i.createBlock(m,i.mergeProps({key:0,item:t.home,class:t.cx("homeItem"),templates:t.$slots,pt:t.pt,unstyled:t.unstyled},t.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):i.createCommentVNode("",!0),(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(t.model,function(o,l){return i.openBlock(),i.createElementBlock(i.Fragment,{key:o.label+"_"+l},[t.home||l!==0?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:0,class:t.cx("separator")},{ref_for:!0},t.ptm("separator")),[i.renderSlot(t.$slots,"separator",{},function(){return[i.createVNode(c,i.mergeProps({"aria-hidden":"true",class:t.cx("separatorIcon")},{ref_for:!0},t.ptm("separatorIcon")),null,16,["class"])]})],16)):i.createCommentVNode("",!0),i.createVNode(m,{item:o,index:l,templates:t.$slots,pt:t.pt,unstyled:t.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}W.render=Et;var At=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`,Dt={submenu:function(e){var n=e.instance,a=e.processedItem;return{display:n.isItemActive(a)?"flex":"none"}}},Ft={root:function(e){var n=e.instance;return["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var n=e.instance,a=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":n.isItemActive(a),"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Nt=u.BaseStyle.extend({name:"menubar",style:At,classes:Ft,inlineStyles:Dt}),Ot={name:"BaseMenubar",extends:u.script,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Nt,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},Y={name:"MenubarSub",hostName:"Menubar",extends:u.script,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?u.m(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,a){return this.ptm(a,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return u.s(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,n){return{action:i.mergeProps({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:i.mergeProps({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:i.mergeProps({class:this.cx("itemLabel")},this.getPTOptions(e,n,"itemLabel")),submenuicon:i.mergeProps({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&e.getItemProp(n,"separator")})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length}},components:{AngleRightIcon:w.script,AngleDownIcon:D.script},directives:{ripple:u.Ripple}},Tt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],zt=["onClick","onMouseenter","onMousemove"],Ht=["href","target"],Rt=["id"],_t=["id"];function Gt(t,e,n,a,s,r){var m=i.resolveComponent("MenubarSub",!0),c=i.resolveDirective("ripple");return i.openBlock(),i.createElementBlock("ul",i.mergeProps({class:n.level===0?t.cx("rootList"):t.cx("submenu")},n.level===0?t.ptm("rootList"):t.ptm("submenu")),[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(n.items,function(o,l){return i.openBlock(),i.createElementBlock(i.Fragment,{key:r.getItemKey(o)},[r.isItemVisible(o)&&!r.getItemProp(o,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:0,id:r.getItemId(o),style:r.getItemProp(o,"style"),class:[t.cx("item",{processedItem:o}),r.getItemProp(o,"class")],role:"menuitem","aria-label":r.getItemLabel(o),"aria-disabled":r.isItemDisabled(o)||void 0,"aria-expanded":r.isItemGroup(o)?r.isItemActive(o):void 0,"aria-haspopup":r.isItemGroup(o)&&!r.getItemProp(o,"to")?"menu":void 0,"aria-setsize":r.getAriaSetSize,"aria-posinset":r.getAriaPosInset(l)},{ref_for:!0},r.getPTOptions(o,l,"item"),{"data-p-active":r.isItemActive(o),"data-p-focused":r.isItemFocused(o),"data-p-disabled":r.isItemDisabled(o)}),[i.createBaseVNode("div",i.mergeProps({class:t.cx("itemContent"),onClick:function(p){return r.onItemClick(p,o)},onMouseenter:function(p){return r.onItemMouseEnter(p,o)},onMousemove:function(p){return r.onItemMouseMove(p,o)}},{ref_for:!0},r.getPTOptions(o,l,"itemContent")),[n.templates.item?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.item),{key:1,item:o.item,root:n.root,hasSubmenu:r.getItemProp(o,"items"),label:r.getItemLabel(o),props:r.getMenuItemProps(o,l)},null,8,["item","root","hasSubmenu","label","props"])):i.withDirectives((i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,href:r.getItemProp(o,"url"),class:t.cx("itemLink"),target:r.getItemProp(o,"target"),tabindex:"-1"},{ref_for:!0},r.getPTOptions(o,l,"itemLink")),[n.templates.itemicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.itemicon),{key:0,item:o.item,class:i.normalizeClass(t.cx("itemIcon"))},null,8,["item","class"])):r.getItemProp(o,"icon")?(i.openBlock(),i.createElementBlock("span",i.mergeProps({key:1,class:[t.cx("itemIcon"),r.getItemProp(o,"icon")]},{ref_for:!0},r.getPTOptions(o,l,"itemIcon")),null,16)):i.createCommentVNode("",!0),i.createBaseVNode("span",i.mergeProps({id:r.getItemLabelId(o),class:t.cx("itemLabel")},{ref_for:!0},r.getPTOptions(o,l,"itemLabel")),i.toDisplayString(r.getItemLabel(o)),17,Rt),r.getItemProp(o,"items")?(i.openBlock(),i.createElementBlock(i.Fragment,{key:2},[n.templates.submenuicon?(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.templates.submenuicon),{key:0,root:n.root,active:r.isItemActive(o),class:i.normalizeClass(t.cx("submenuIcon"))},null,8,["root","active","class"])):(i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.root?"AngleDownIcon":"AngleRightIcon"),i.mergeProps({key:1,class:t.cx("submenuIcon")},{ref_for:!0},r.getPTOptions(o,l,"submenuIcon")),null,16,["class"]))],64)):i.createCommentVNode("",!0)],16,Ht)),[[c]])],16,zt),r.isItemVisible(o)&&r.isItemGroup(o)?(i.openBlock(),i.createBlock(m,{key:0,id:r.getItemId(o)+"_list",menuId:n.menuId,role:"menu",style:i.normalizeStyle(t.sx("submenu",!0,{processedItem:o})),focusedItemId:n.focusedItemId,items:o.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,level:n.level+1,"aria-labelledby":r.getItemLabelId(o),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(d){return t.$emit("item-click",d)}),onItemMouseenter:e[1]||(e[1]=function(d){return t.$emit("item-mouseenter",d)}),onItemMousemove:e[2]||(e[2]=function(d){return t.$emit("item-mousemove",d)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):i.createCommentVNode("",!0)],16,Tt)):i.createCommentVNode("",!0),r.isItemVisible(o)&&r.getItemProp(o,"separator")?(i.openBlock(),i.createElementBlock("li",i.mergeProps({key:1,id:r.getItemId(o),class:[t.cx("separator"),r.getItemProp(o,"class")],style:r.getItemProp(o,"style"),role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,_t)):i.createCommentVNode("",!0)],64)}),128))],16)}Y.render=Gt;var Q={name:"Menubar",extends:Ot,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){u.s(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&u.x.clear(this.container),this.container=null},methods:{getItemProp:function(e,n){return e?u.m(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return u.s(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&u.s(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,u.x.clear(this.menubar),this.hide()):(this.mobileActive=!0,u.x.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){u.bt(this.menubar)},hide:function(e,n){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){u.bt(a.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&u.bt(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&u.J(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var a=e.processedItem,s=e.isFocus;if(!u.l(a)){var r=a.index,m=a.key,c=a.level,o=a.parentKey,l=a.items,d=u.s(l),p=this.activeItemPath.filter(function(h){return h.parentKey!==o&&h.parentKey!==m});d&&p.push(a),this.focusedItemInfo={index:r,level:c,parentKey:o},d&&(this.dirty=!0),s&&u.bt(this.menubar),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=p)}},onItemClick:function(e){var n=e.originalEvent,a=e.processedItem,s=this.isProccessedItemGroup(a),r=u.l(a.parent),m=this.isSelected(a);if(m){var c=a.index,o=a.key,l=a.level,d=a.parentKey;this.activeItemPath=this.activeItemPath.filter(function(h){return o!==h.key&&o.startsWith(h.key)}),this.focusedItemInfo={index:c,level:l,parentKey:d},this.dirty=!r,u.bt(this.menubar)}else if(s)this.onItemChange(e);else{var p=r?a:this.activeItemPath.find(function(h){return h.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,p?p.index:-1),this.mobileActive=!1,u.bt(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],a=n?u.l(n.parent):null;if(a){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowRightKey(e))}else{var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r)}e.preventDefault()},onArrowUpKey:function(e){var n=this,a=this.visibleItems[this.focusedItemInfo.index],s=u.l(a.parent);if(s){var r=this.isProccessedItemGroup(a);if(r){this.onItemChange({originalEvent:e,processedItem:a}),this.focusedItemInfo={index:-1,parentKey:a.key};var m=this.findLastItemIndex();this.changeFocusedItemIndex(e,m)}}else{var c=this.activeItemPath.find(function(l){return l.key===a.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:c?c.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(l){return l.parentKey!==n.focusedItemInfo.parentKey});else{var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o)}}e.preventDefault()},onArrowLeftKey:function(e){var n=this,a=this.visibleItems[this.focusedItemInfo.index],s=a?this.activeItemPath.find(function(m){return m.key===a.parentKey}):null;if(s)this.onItemChange({originalEvent:e,processedItem:s}),this.activeItemPath=this.activeItemPath.filter(function(m){return m.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault();else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],a=n?this.activeItemPath.find(function(m){return m.key===n.parentKey}):null;if(a){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowDownKey(e))}else{var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=u.z(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&u.z(n,'a[data-pc-section="itemlink"]');a?a.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(s);!r&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=e.container&&!e.container.contains(n.target),s=!(e.target&&(e.target===n.target||e.target.contains(n.target)));a&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){u.Yt()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return u.M(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var n=this,a=e>0?u.M(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var s=-1,r=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(m){return a.isItemMatched(m)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(m){return a.isItemMatched(m)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(m){return a.isItemMatched(m)}),s!==-1&&(r=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),r},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,a=u.z(this.menubar,'li[id="'.concat(n,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",m=[];return e&&e.forEach(function(c,o){var l=(r!==""?r+"_":"")+o,d={item:c,index:o,level:a,key:l,parent:s,parentKey:r};d.items=n.createProcessedItems(c.items,a+1,d,l),m.push(d)}),m},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(u.s(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:Y,BarsIcon:A.script}};function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,a)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M(Object(n),!0).forEach(function(a){jt(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function jt(t,e,n){return(e=Ut(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ut(t){var e=qt(t,"string");return I(e)=="symbol"?e:e+""}function qt(t,e){if(I(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(I(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Wt=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Yt(t,e,n,a,s,r){var m=i.resolveComponent("BarsIcon"),c=i.resolveComponent("MenubarSub");return i.openBlock(),i.createElementBlock("div",i.mergeProps({ref:r.containerRef,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:0,class:t.cx("start")},t.ptm("start")),[i.renderSlot(t.$slots,"start")],16)):i.createCommentVNode("",!0),i.renderSlot(t.$slots,t.$slots.button?"button":"menubutton",{id:t.$id,class:i.normalizeClass(t.cx("button")),toggleCallback:function(l){return r.menuButtonClick(l)}},function(){var o;return[t.model&&t.model.length>0?(i.openBlock(),i.createElementBlock("a",i.mergeProps({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":t.$id,"aria-label":(o=t.$primevue.config.locale.aria)===null||o===void 0?void 0:o.navigation,onClick:e[0]||(e[0]=function(l){return r.menuButtonClick(l)}),onKeydown:e[1]||(e[1]=function(l){return r.menuButtonKeydown(l)})},V(V({},t.buttonProps),t.ptm("button"))),[i.renderSlot(t.$slots,t.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[i.createVNode(m,i.normalizeProps(i.guardReactiveProps(t.ptm("buttonicon"))),null,16)]})],16,Wt)):i.createCommentVNode("",!0)]}),i.createVNode(c,{ref:r.menubarRef,id:t.$id+"_list",role:"menubar",items:r.processedItems,templates:t.$slots,root:!0,mobileActive:s.mobileActive,tabindex:"0","aria-activedescendant":s.focused?r.focusedItemId:void 0,menuId:t.$id,focusedItemId:s.focused?r.focusedItemId:void 0,activeItemPath:s.activeItemPath,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter,onItemMousemove:r.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(i.openBlock(),i.createElementBlock("div",i.mergeProps({key:1,class:t.cx("end")},t.ptm("end")),[i.renderSlot(t.$slots,"end")],16)):i.createCommentVNode("",!0)],16)}Q.render=Yt;const Qt={class:"card"},Zt={class:"card"},Jt={class:"flex flex-col md:flex-row gap-8"},Xt={class:"md:w-1/2"},$t={class:"card"},en={class:"md:w-1/2"},tn={class:"card"},nn={class:"flex flex-col md:flex-row gap-8 mt-6"},rn={class:"md:w-1/3"},an={class:"card"},on={class:"md:w-1/3"},sn={class:"card"},un={class:"md:w-1/3"},ln={class:"card"},mn={class:"flex flex-col md:flex-row gap-8 mt-8"},cn={class:"md:w-1/2"},dn={class:"card"},pn={class:"md:w-1/2"},fn={class:"card"},hn={__name:"MenuDoc",setup(t){const e=i.ref(null),n=i.ref(null),a=i.ref([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),s=i.ref({icon:"pi pi-home",to:"/"}),r=i.ref([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),m=i.ref([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),c=i.ref([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),o=i.ref([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),l=i.ref([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),d=i.ref([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),p=i.ref([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]);function h(g){e.value.toggle(g)}function v(g){n.value.show(g)}return(g,f)=>{const Z=B.script$1,J=de.script,X=B.script,$=Q,ee=W,y=U,te=G,ne=_,k=x.script$1,ie=x.script,re=x.script$2,ae=ce.script,L=me.script,oe=le.script,se=R,C=z,ue=O;return i.openBlock(),i.createElementBlock(i.Fragment,null,[i.createBaseVNode("div",Qt,[f[0]||(f[0]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Menubar",-1)),i.createVNode($,{model:a.value},{end:i.withCtx(()=>[i.createVNode(X,{iconPosition:"left"},{default:i.withCtx(()=>[i.createVNode(Z,{class:"pi pi-search"}),i.createVNode(J,{type:"text",placeholder:"Search"})]),_:1})]),_:1},8,["model"])]),i.createBaseVNode("div",Zt,[f[1]||(f[1]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Breadcrumb",-1)),i.createVNode(ee,{home:s.value,model:r.value},null,8,["home","model"])]),i.createBaseVNode("div",Jt,[i.createBaseVNode("div",Xt,[i.createBaseVNode("div",$t,[f[5]||(f[5]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Steps",-1)),i.createVNode(ne,{value:"1"},{default:i.withCtx(()=>[i.createVNode(te,null,{default:i.withCtx(()=>[i.createVNode(y,{value:"1"},{default:i.withCtx(()=>[...f[2]||(f[2]=[i.createTextVNode("Header I",-1)])]),_:1}),i.createVNode(y,{value:"2"},{default:i.withCtx(()=>[...f[3]||(f[3]=[i.createTextVNode("Header II",-1)])]),_:1}),i.createVNode(y,{value:"3"},{default:i.withCtx(()=>[...f[4]||(f[4]=[i.createTextVNode("Header III",-1)])]),_:1})]),_:1})]),_:1})])]),i.createBaseVNode("div",en,[i.createBaseVNode("div",tn,[f[9]||(f[9]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"TabMenu",-1)),i.createVNode(re,{value:"0"},{default:i.withCtx(()=>[i.createVNode(ie,null,{default:i.withCtx(()=>[i.createVNode(k,{value:"0"},{default:i.withCtx(()=>[...f[6]||(f[6]=[i.createTextVNode("Header I",-1)])]),_:1}),i.createVNode(k,{value:"1"},{default:i.withCtx(()=>[...f[7]||(f[7]=[i.createTextVNode("Header II",-1)])]),_:1}),i.createVNode(k,{value:"2"},{default:i.withCtx(()=>[...f[8]||(f[8]=[i.createTextVNode("Header III",-1)])]),_:1})]),_:1})]),_:1})])])]),i.createBaseVNode("div",nn,[i.createBaseVNode("div",rn,[i.createBaseVNode("div",an,[f[10]||(f[10]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Tiered Menu",-1)),i.createVNode(ae,{model:m.value},null,8,["model"])])]),i.createBaseVNode("div",on,[i.createBaseVNode("div",sn,[f[11]||(f[11]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Plain Menu",-1)),i.createVNode(L,{model:o.value},null,8,["model"])])]),i.createBaseVNode("div",un,[i.createBaseVNode("div",ln,[f[12]||(f[12]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Overlay Menu",-1)),i.createVNode(L,{ref_key:"menu",ref:e,model:c.value,popup:!0},null,8,["model"]),i.createVNode(oe,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:h,style:{width:"auto"}})]),i.createBaseVNode("div",{class:"card",onContextmenu:v},[f[13]||(f[13]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Context Menu",-1)),f[14]||(f[14]=i.createTextVNode(" Right click to display. ",-1)),i.createVNode(se,{ref_key:"contextMenu",ref:n,model:l.value},null,8,["model"])],32)])]),i.createBaseVNode("div",mn,[i.createBaseVNode("div",cn,[i.createBaseVNode("div",dn,[f[15]||(f[15]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"MegaMenu | Horizontal",-1)),i.createVNode(C,{model:d.value},null,8,["model"]),f[16]||(f[16]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4 mt-8"},"MegaMenu | Vertical",-1)),i.createVNode(C,{model:d.value,orientation:"vertical"},null,8,["model"])])]),i.createBaseVNode("div",pn,[i.createBaseVNode("div",fn,[f[17]||(f[17]=i.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"PanelMenu",-1)),i.createVNode(ue,{model:p.value},null,8,["model"])])])])],64)}}};exports.default=hn;
