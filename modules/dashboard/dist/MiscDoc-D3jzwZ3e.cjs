"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("./main-QBEymWFP.cjs"),e=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs"),P=require("./index-BoPc2E9e.cjs"),D=require("./index-CbB9ijS1.cjs"),A=require("./index-ENB1-a7t.cjs"),V=require("./index-2z86LybZ.cjs"),g=require("./index-DavOuqz0.cjs"),C=require("./index-BwuBWZ2h.cjs");var T=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,E={root:{position:"relative"}},U={root:function(t){var o=t.props;return["p-skeleton p-component",{"p-skeleton-circle":o.shape==="circle","p-skeleton-animation-none":o.animation==="none"}]}},F=s.BaseStyle.extend({name:"skeleton",style:T,classes:U,inlineStyles:E}),R={name:"BaseSkeleton",extends:s.script,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:F,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function v(r){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(r)}function X(r,t,o){return(t=q(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function q(r){var t=I(r,"string");return v(t)=="symbol"?t:t+""}function I(r,t){if(v(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var i=o.call(r,t);if(v(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var N={name:"Skeleton",extends:R,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return s.f(X({},this.shape,this.shape))}}},Y=["data-p"];function K(r,t,o,i,c,n){return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:r.cx("root"),style:[r.sx("root"),n.containerStyle],"aria-hidden":"true"},r.ptmi("root"),{"data-p":n.dataP}),null,16,Y)}N.render=K;var W=`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`,_={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},j=s.BaseStyle.extend({name:"scrollpanel",style:W,classes:_}),H={name:"BaseScrollPanel",extends:s.script,props:{step:{type:Number,default:5}},style:j,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},w={name:"ScrollPanel",extends:H,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var t=getComputedStyle(this.$el),o=getComputedStyle(this.$refs.xBar),i=s.Tt(this.$el)-parseInt(o.height,10);t["max-height"]!=="none"&&i===0&&(this.$refs.content.offsetHeight+parseInt(o.height,10)>parseInt(t["max-height"],10)?this.$el.style.height=t["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth)+"px")},moveBar:function(){var t=this;if(this.$refs.content){var o=this.$refs.content.scrollWidth,i=this.$refs.content.clientWidth,c=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=i/o;var n=this.$refs.content.scrollHeight,a=this.$refs.content.clientHeight,f=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=a/n;var d=Math.max(this.scrollYRatio*100,10);this.frame=this.requestAnimationFrame(function(){t.$refs.xBar&&(t.scrollXRatio>=1?(t.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!t.isUnstyled&&s.W(t.$refs.xBar,"p-scrollpanel-hidden")):(t.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!t.isUnstyled&&s.P(t.$refs.xBar,"p-scrollpanel-hidden"),t.$refs.xBar.style.cssText="width:"+Math.max(t.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(t.$refs.content.scrollLeft)/o*100+"%;bottom:"+c+"px;")),t.$refs.yBar&&(t.scrollYRatio>=1?(t.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!t.isUnstyled&&s.W(t.$refs.yBar,"p-scrollpanel-hidden")):(t.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!t.isUnstyled&&s.P(t.$refs.yBar,"p-scrollpanel-hidden"),t.$refs.yBar.style.cssText="height:"+d+"%; top: calc("+t.$refs.content.scrollTop/(n-a)*(100-d)+"% - "+t.$refs.xBar.clientHeight+"px); inset-inline-end:"+f+"px;"))})}},onYBarMouseDown:function(t){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=t.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&s.W(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&s.W(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()},onXBarMouseDown:function(t){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=t.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.W(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.W(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),t.preventDefault()},onScroll:function(t){this.lastScrollLeft!==t.target.scrollLeft?(this.lastScrollLeft=t.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==t.target.scrollTop&&(this.lastScrollTop=t.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(t){if(this.orientation==="vertical")switch(t.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),t.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),t.preventDefault();break}case"ArrowLeft":case"ArrowRight":{t.preventDefault();break}}else if(this.orientation==="horizontal")switch(t.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),t.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),t.preventDefault();break}case"ArrowDown":case"ArrowUp":{t.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(t,o){this.$refs.content[t]+=o,this.moveBar()},setTimer:function(t,o){var i=this;this.clearTimer(),this.timer=setTimeout(function(){i.repeat(t,o)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(t){this.isXBarClicked?this.onMouseMoveForXBar(t):this.isYBarClicked?this.onMouseMoveForYBar(t):(this.onMouseMoveForXBar(t),this.onMouseMoveForYBar(t))},onMouseMoveForXBar:function(t){var o=this,i=t.pageX-this.lastPageX;this.lastPageX=t.pageX,this.frame=this.requestAnimationFrame(function(){o.$refs.content.scrollLeft+=i/o.scrollXRatio})},onMouseMoveForYBar:function(t){var o=this,i=t.pageY-this.lastPageY;this.lastPageY=t.pageY,this.frame=this.requestAnimationFrame(function(){o.$refs.content.scrollTop+=i/o.scrollYRatio})},onFocus:function(t){this.$refs.xBar.isSameNode(t.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(t.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.P(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.P(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.P(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(t){var o=window.requestAnimationFrame||this.timeoutFrame;return o(t)},refresh:function(){this.moveBar()},scrollTop:function(t){var o=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;t=t>o?o:t>0?t:0,this.$refs.content.scrollTop=t},timeoutFrame:function(t){setTimeout(t,0)},bindDocumentMouseListeners:function(){var t=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(o){t.onDocumentMouseMove(o)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(o){t.onDocumentMouseUp(o)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},O=["id"],G=["aria-controls","aria-valuenow"],J=["aria-controls","aria-valuenow"];function Q(r,t,o,i,c,n){return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:r.cx("root")},r.ptmi("root")),[e.createBaseVNode("div",e.mergeProps({class:r.cx("contentContainer")},r.ptm("contentContainer")),[e.createBaseVNode("div",e.mergeProps({ref:"content",id:n.contentId,class:r.cx("content"),onScroll:t[0]||(t[0]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),onMouseenter:t[1]||(t[1]=function(){return n.moveBar&&n.moveBar.apply(n,arguments)})},r.ptm("content")),[e.renderSlot(r.$slots,"default")],16,O)],16),e.createBaseVNode("div",e.mergeProps({ref:"xBar",class:r.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":n.contentId,"aria-valuenow":c.lastScrollLeft,onMousedown:t[2]||(t[2]=function(){return n.onXBarMouseDown&&n.onXBarMouseDown.apply(n,arguments)}),onKeydown:t[3]||(t[3]=function(a){return n.onKeyDown(a)}),onKeyup:t[4]||(t[4]=function(){return n.onKeyUp&&n.onKeyUp.apply(n,arguments)}),onFocus:t[5]||(t[5]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:t[6]||(t[6]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)})},r.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,G),e.createBaseVNode("div",e.mergeProps({ref:"yBar",class:r.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":n.contentId,"aria-valuenow":c.lastScrollTop,onMousedown:t[7]||(t[7]=function(){return n.onYBarMouseDown&&n.onYBarMouseDown.apply(n,arguments)}),onKeydown:t[8]||(t[8]=function(a){return n.onKeyDown(a)}),onKeyup:t[9]||(t[9]=function(){return n.onKeyUp&&n.onKeyUp.apply(n,arguments)}),onFocus:t[10]||(t[10]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)})},r.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,J)],16)}w.render=Q;var Z=`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 300ms;
    }

    .p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 300ms;
    }
`,ee={root:function(t){var o=t.props;return["p-scrolltop",{"p-scrolltop-sticky":o.target!=="window"}]},icon:"p-scrolltop-icon"},te=s.BaseStyle.extend({name:"scrolltop",style:Z,classes:ee}),re={name:"BaseScrollTop",extends:s.script,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:te,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},x={name:"ScrollTop",extends:re,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(s.x.clear(this.container),this.overlay=null)},methods:{onClick:function(){var t=this.target==="window"?window:this.$el.parentElement;t.scroll({top:0,behavior:this.behavior})},checkVisibility:function(t){t>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var t=this;this.scrollListener=function(){t.checkVisibility(t.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var t=this;this.scrollListener=function(){t.checkVisibility(s.$())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(t){s.x.set("overlay",t,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(t){s.x.clear(t)},containerRef:function(t){this.container=t?t.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:A.script,Button:V.script}};function ne(r,t,o,i,c,n){var a=e.resolveComponent("Button");return e.openBlock(),e.createBlock(e.Transition,e.mergeProps({name:"p-scrolltop",appear:"",onEnter:n.onEnter,onAfterLeave:n.onAfterLeave},r.ptm("transition")),{default:e.withCtx(function(){return[c.visible?(e.openBlock(),e.createBlock(a,e.mergeProps({key:0,ref:n.containerRef,class:r.cx("root"),onClick:n.onClick,"aria-label":n.scrollTopAriaLabel,unstyled:r.unstyled},r.buttonProps,{pt:r.ptm("root")}),{icon:e.withCtx(function(f){return[e.renderSlot(r.$slots,"icon",{class:e.normalizeClass(r.cx("icon"))},function(){return[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(r.icon?"span":"ChevronUpIcon"),e.mergeProps({class:[r.cx("icon"),r.icon,f.class]},r.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):e.createCommentVNode("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}x.render=ne;var ae={root:"p-avatar-group p-component"},oe=s.BaseStyle.extend({name:"avatargroup",classes:ae}),se={name:"BaseAvatarGroup",extends:s.script,style:oe,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},S={name:"AvatarGroup",extends:se,inheritAttrs:!1};function ie(r,t,o,i,c,n){return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:r.cx("root")},r.ptmi("root")),[e.renderSlot(r.$slots,"default")],16)}S.render=ie;var le=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,ce={root:function(t){var o=t.props;return["p-avatar p-component",{"p-avatar-image":o.image!=null,"p-avatar-circle":o.shape==="circle","p-avatar-lg":o.size==="large","p-avatar-xl":o.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},de=s.BaseStyle.extend({name:"avatar",style:le,classes:ce}),ue={name:"BaseAvatar",extends:s.script,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:de,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function h(r){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(r)}function B(r,t,o){return(t=pe(t))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}function pe(r){var t=me(r,"string");return h(t)=="symbol"?t:t+""}function me(r,t){if(h(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var i=o.call(r,t);if(h(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}var $={name:"Avatar",extends:ue,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return s.f(B(B({},this.shape,this.shape),this.size,this.size))}}},fe=["aria-labelledby","aria-label","data-p"],ve=["data-p"],he=["data-p"],be=["src","alt","data-p"];function ge(r,t,o,i,c,n){return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:r.cx("root"),"aria-labelledby":r.ariaLabelledby,"aria-label":r.ariaLabel},r.ptmi("root"),{"data-p":n.dataP}),[e.renderSlot(r.$slots,"default",{},function(){return[r.label?(e.openBlock(),e.createElementBlock("span",e.mergeProps({key:0,class:r.cx("label")},r.ptm("label"),{"data-p":n.dataP}),e.toDisplayString(r.label),17,ve)):r.$slots.icon?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(r.$slots.icon),{key:1,class:e.normalizeClass(r.cx("icon"))},null,8,["class"])):r.icon?(e.openBlock(),e.createElementBlock("span",e.mergeProps({key:2,class:[r.cx("icon"),r.icon]},r.ptm("icon"),{"data-p":n.dataP}),null,16,he)):r.image?(e.openBlock(),e.createElementBlock("img",e.mergeProps({key:3,src:r.image,alt:r.ariaLabel,onError:t[0]||(t[0]=function(){return n.onError&&n.onError.apply(n,arguments)})},r.ptm("image"),{"data-p":n.dataP}),null,16,be)):e.createCommentVNode("",!0)]})],16,fe)}$.render=ge;var ye=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,Be={root:"p-overlaybadge"},Ve=s.BaseStyle.extend({name:"overlaybadge",style:ye,classes:Be}),Ne={name:"OverlayBadge",extends:g.script$1,style:Ve,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},k={name:"OverlayBadge",extends:Ne,inheritAttrs:!1,components:{Badge:g.script$1}};function we(r,t,o,i,c,n){var a=e.resolveComponent("Badge");return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:r.cx("root")},r.ptmi("root")),[e.renderSlot(r.$slots,"default"),e.createVNode(a,e.mergeProps(r.$props,{pt:r.ptm("pcBadge")}),null,16,["pt"])],16)}k.render=we;const xe={class:"card"},Se={class:"flex flex-col md:flex-row gap-4"},$e={class:"md:w-1/2"},ke={class:"md:w-1/2"},Le={class:"flex flex-col md:flex-row gap-8"},ze={class:"md:w-1/2"},Me={class:"card"},Pe={class:"flex gap-2"},De={class:"flex gap-6"},Ae={class:"flex gap-2"},Ce={class:"flex items-start gap-2"},Te={class:"card"},Ee={class:"card"},Ue={class:"md:w-1/2"},Fe={class:"card"},Re={class:"flex gap-2"},Xe={class:"flex gap-2"},qe={class:"flex gap-2"},Ie={class:"card"},Ye={class:"flex items-center flex-col sm:flex-row"},Ke={class:"flex items-center flex-col sm:flex-row"},We={class:"flex items-center flex-col sm:flex-row"},_e={class:"card"},je={class:"rounded-border border border-surface p-6"},He={class:"flex mb-4"},Oe={class:"flex justify-between mt-4"},Ge={__name:"MiscDoc",setup(r){const t=e.ref(0);let o=null;function i(){o=setInterval(()=>{let n=t.value+Math.floor(Math.random()*10)+1;n>=100&&(n=100),t.value=n},2e3)}function c(){clearInterval(o),o=null}return e.onMounted(()=>{i()}),e.onBeforeUnmount(()=>{c()}),(n,a)=>{const f=C.script,d=g.script$1,b=k,y=V.script,p=$,L=S,z=x,M=w,l=D.script,u=P.script,m=N;return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createBaseVNode("div",xe,[a[0]||(a[0]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1)),e.createBaseVNode("div",Se,[e.createBaseVNode("div",$e,[e.createVNode(f,{value:t.value},null,8,["value"])]),e.createBaseVNode("div",ke,[e.createVNode(f,{value:50,showValue:!1})])])]),e.createBaseVNode("div",Le,[e.createBaseVNode("div",ze,[e.createBaseVNode("div",Me,[a[4]||(a[4]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Badge",-1)),e.createBaseVNode("div",Pe,[e.createVNode(d,{value:2}),e.createVNode(d,{value:8,severity:"success"}),e.createVNode(d,{value:4,severity:"info"}),e.createVNode(d,{value:12,severity:"Warn"}),e.createVNode(d,{value:3,severity:"danger"})]),a[5]||(a[5]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Overlay",-1)),e.createBaseVNode("div",De,[e.createVNode(b,{value:"2"},{default:e.withCtx(()=>[...a[1]||(a[1]=[e.createBaseVNode("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1)])]),_:1}),e.createVNode(b,{value:"4",severity:"danger"},{default:e.withCtx(()=>[...a[2]||(a[2]=[e.createBaseVNode("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1)])]),_:1}),e.createVNode(b,{severity:"danger"},{default:e.withCtx(()=>[...a[3]||(a[3]=[e.createBaseVNode("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1)])]),_:1})]),a[6]||(a[6]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Button",-1)),e.createBaseVNode("div",Ae,[e.createVNode(y,{label:"Emails",badge:"8",class:"mr-2"}),e.createVNode(y,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),a[7]||(a[7]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Sizes",-1)),e.createBaseVNode("div",Ce,[e.createVNode(d,{value:2}),e.createVNode(d,{value:4,size:"large",severity:"warn"}),e.createVNode(d,{value:6,size:"xlarge",severity:"success"})])]),e.createBaseVNode("div",Te,[a[8]||(a[8]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1)),a[9]||(a[9]=e.createBaseVNode("div",{class:"font-semibold mb-4"},"Group",-1)),e.createVNode(L,null,{default:e.withCtx(()=>[e.createVNode(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",size:"large",shape:"circle"}),e.createVNode(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),e.createVNode(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),e.createVNode(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),e.createVNode(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),e.createVNode(p,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),a[10]||(a[10]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Label - Circle",-1)),e.createVNode(p,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),e.createVNode(p,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),e.createVNode(p,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),a[11]||(a[11]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Icon - Badge",-1)),e.createVNode(b,{value:"4",severity:"danger",class:"inline-flex"},{default:e.withCtx(()=>[e.createVNode(p,{label:"U",size:"xlarge"})]),_:1})]),e.createBaseVNode("div",Ee,[a[13]||(a[13]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1)),e.createVNode(M,{style:{width:"250px",height:"200px"}},{default:e.withCtx(()=>[a[12]||(a[12]=e.createBaseVNode("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1)),e.createVNode(z,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),e.createBaseVNode("div",Ue,[e.createBaseVNode("div",Fe,[a[14]||(a[14]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Tag",-1)),a[15]||(a[15]=e.createBaseVNode("div",{class:"font-semibold mb-4"},"Default",-1)),e.createBaseVNode("div",Re,[e.createVNode(l,{value:"Primary"}),e.createVNode(l,{severity:"success",value:"Success"}),e.createVNode(l,{severity:"info",value:"Info"}),e.createVNode(l,{severity:"warn",value:"Warn"}),e.createVNode(l,{severity:"danger",value:"Danger"})]),a[16]||(a[16]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Pills",-1)),e.createBaseVNode("div",Xe,[e.createVNode(l,{value:"Primary",rounded:!0}),e.createVNode(l,{severity:"success",value:"Success",rounded:!0}),e.createVNode(l,{severity:"info",value:"Info",rounded:!0}),e.createVNode(l,{severity:"warn",value:"Warn",rounded:!0}),e.createVNode(l,{severity:"danger",value:"Danger",rounded:!0})]),a[17]||(a[17]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Icons",-1)),e.createBaseVNode("div",qe,[e.createVNode(l,{icon:"pi pi-user",value:"Primary"}),e.createVNode(l,{icon:"pi pi-check",severity:"success",value:"Success"}),e.createVNode(l,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),e.createVNode(l,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),e.createVNode(l,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),e.createBaseVNode("div",Ie,[a[18]||(a[18]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Chip",-1)),a[19]||(a[19]=e.createBaseVNode("div",{class:"font-semibold mb-4"},"Basic",-1)),e.createBaseVNode("div",Ye,[e.createVNode(u,{label:"Action",class:"mr-2 mb-2"}),e.createVNode(u,{label:"Comedy",class:"mr-2 mb-2"}),e.createVNode(u,{label:"Mystery",class:"mr-2 mb-2"}),e.createVNode(u,{label:"Thriller",removable:!0,class:"mb-2"})]),a[20]||(a[20]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Icon",-1)),e.createBaseVNode("div",Ke,[e.createVNode(u,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),e.createVNode(u,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),e.createVNode(u,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),e.createVNode(u,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),a[21]||(a[21]=e.createBaseVNode("div",{class:"font-semibold my-4"},"Image",-1)),e.createBaseVNode("div",We,[e.createVNode(u,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),e.createVNode(u,{label:"Asiya Javayant",image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),e.createVNode(u,{label:"Onyama Limba",image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),e.createBaseVNode("div",_e,[a[22]||(a[22]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1)),e.createBaseVNode("div",je,[e.createBaseVNode("div",He,[e.createVNode(m,{shape:"circle",size:"4rem",class:"mr-2"}),e.createBaseVNode("div",null,[e.createVNode(m,{width:"10rem",class:"mb-2"}),e.createVNode(m,{width:"5rem",class:"mb-2"}),e.createVNode(m,{height:".5rem"})])]),e.createVNode(m,{width:"100%",height:"150px"}),e.createBaseVNode("div",Oe,[e.createVNode(m,{width:"4rem",height:"2rem"}),e.createVNode(m,{width:"4rem",height:"2rem"})])])])])])],64)}}};exports.default=Ge;
