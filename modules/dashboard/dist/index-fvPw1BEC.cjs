"use strict";const s=require("./main-QBEymWFP.cjs"),n=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs"),m=require("./index-BfnfohCB.cjs"),y=require("./index-ChPKI9RG.cjs");var B=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,w={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},k=s.BaseStyle.extend({name:"tabs",style:B,classes:w}),T={name:"BaseTabs",extends:s.script,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:k,provide:function(){return{$pcTabs:this,$parentInstance:this}}},p={name:"Tabs",extends:T,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function x(e,t,a,r,o,i){return n.openBlock(),n.createElementBlock("div",n.mergeProps({class:e.cx("root")},e.ptmi("root")),[n.renderSlot(e.$slots,"default")],16)}p.render=x;var $={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},P=s.BaseStyle.extend({name:"tablist",classes:$}),L={name:"BaseTabList",extends:s.script,props:{},style:P,provide:function(){return{$pcTabList:this,$parentInstance:this}}},h={name:"TabList",extends:L,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),r=s.Rt(t)-a,o=Math.abs(t.scrollLeft),i=r*.8,l=o-i,c=Math.max(l,0);t.scrollLeft=s.V(t)?-1*c:c},onNextButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),r=s.Rt(t)-a,o=Math.abs(t.scrollLeft),i=r*.8,l=o+i,c=t.scrollWidth-r,d=Math.min(l,c);t.scrollLeft=s.V(t)?-1*d:d},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,r=t.inkbar,o=t.tabs;if(r){var i=s.z(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(r.style.height=s.C(i)+"px",r.style.top=s.K(i).top-s.K(o).top+"px"):(r.style.width=s.v(i)+"px",r.style.left=s.K(i).left-s.K(o).left+"px")}},updateButtonState:function(){var t=this.$refs,a=t.list,r=t.content,o=r.scrollTop,i=r.scrollWidth,l=r.scrollHeight,c=r.offsetWidth,d=r.offsetHeight,u=Math.abs(r.scrollLeft),b=[s.Rt(r),s.Tt(r)],f=b[0],g=b[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=a.offsetHeight>=d&&parseInt(o)!==l-g):(this.isPrevButtonEnabled=u!==0,this.isNextButtonEnabled=a.offsetWidth>=c&&parseInt(u)!==i-f)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevButton,r=t.nextButton,o=0;return this.showNavigators&&(o=(a?.offsetWidth||0)+(r?.offsetWidth||0)),o}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return s.f({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:m.script,ChevronRightIcon:y.script},directives:{ripple:s.Ripple}},C=["data-p"],N=["aria-label","tabindex"],S=["data-p"],K=["aria-orientation"],V=["aria-label","tabindex"];function A(e,t,a,r,o,i){var l=n.resolveDirective("ripple");return n.openBlock(),n.createElementBlock("div",n.mergeProps({ref:"list",class:e.cx("root"),"data-p":i.dataP},e.ptmi("root")),[i.showNavigators&&o.isPrevButtonEnabled?n.withDirectives((n.openBlock(),n.createElementBlock("button",n.mergeProps({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(i.templates.previcon||"ChevronLeftIcon"),n.mergeProps({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,N)),[[l]]):n.createCommentVNode("",!0),n.createBaseVNode("div",n.mergeProps({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),"data-p":i.dataP},e.ptm("content")),[n.createBaseVNode("div",n.mergeProps({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[n.renderSlot(e.$slots,"default"),n.createBaseVNode("span",n.mergeProps({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,K)],16,S),i.showNavigators&&o.isNextButtonEnabled?n.withDirectives((n.openBlock(),n.createElementBlock("button",n.mergeProps({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(i.templates.nexticon||"ChevronRightIcon"),n.mergeProps({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,V)),[[l]]):n.createCommentVNode("",!0)],16,C)}h.render=A;var z={root:function(t){var a=t.instance,r=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":r.disabled}]}},E=s.BaseStyle.extend({name:"tab",classes:z}),I={name:"BaseTab",extends:s.script,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:E,provide:function(){return{$pcTab:this,$parentInstance:this}}},v={name:"Tab",extends:I,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=a?t:t.nextElementSibling;return r?s.Q(r,"data-p-disabled")||s.Q(r,"data-pc-section")==="activebar"?this.findNextTab(r):s.z(r,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=a?t:t.previousElementSibling;return r?s.Q(r,"data-p-disabled")||s.Q(r,"data-pc-section")==="activebar"?this.findPrevTab(r):s.z(r,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){s.bt(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return s.k((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return n.mergeProps(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return s.f({active:this.active})}},directives:{ripple:s.Ripple}};function D(e,t,a,r,o,i){var l=n.resolveDirective("ripple");return e.asChild?n.renderSlot(e.$slots,"default",{key:1,dataP:i.dataP,class:n.normalizeClass(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):n.withDirectives((n.openBlock(),n.createBlock(n.resolveDynamicComponent(e.as),n.mergeProps({key:0,class:e.cx("root"),"data-p":i.dataP,onClick:i.onClick},i.attrs),{default:n.withCtx(function(){return[n.renderSlot(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[l]])}v.render=D;exports.script=h;exports.script$1=v;exports.script$2=p;
