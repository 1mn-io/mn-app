"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("./index-mQT0ursc.cjs"),g=require("./index-2z86LybZ.cjs"),d=require("./main-QBEymWFP.cjs"),e=require("./runtime-dom.esm-bundler-BPdTYN4R.cjs");var f=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`,h={root:function(n){var a=n.props;return["p-timeline p-component","p-timeline-"+a.align,"p-timeline-"+a.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},b=d.BaseStyle.extend({name:"timeline",style:f,classes:h}),x={name:"BaseTimeline",extends:d.script,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:b,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function c(t){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(t)}function p(t,n,a){return(n=y(n))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function y(t){var n=N(t,"string");return c(n)=="symbol"?n:n+""}function N(t,n){if(c(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var m=a.call(t,n);if(c(m)!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var v={name:"Timeline",extends:x,inheritAttrs:!1,methods:{getKey:function(n,a){return this.dataKey?d.p(n,this.dataKey):a},getPTOptions:function(n,a){return this.ptm(n,{context:{index:a,count:this.value.length}})}},computed:{dataP:function(){return d.f(p(p({},this.layout,this.layout),this.align,this.align))}}},V=["data-p"],B=["data-p"],_=["data-p"],k=["data-p"],w=["data-p"],S=["data-p"],T=["data-p"];function C(t,n,a,m,o,r){return e.openBlock(),e.createElementBlock("div",e.mergeProps({class:t.cx("root")},t.ptmi("root"),{"data-p":r.dataP}),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.value,function(s,l){return e.openBlock(),e.createElementBlock("div",e.mergeProps({key:r.getKey(s,l),class:t.cx("event")},{ref_for:!0},r.getPTOptions("event",l),{"data-p":r.dataP}),[e.createBaseVNode("div",e.mergeProps({class:t.cx("eventOpposite",{index:l})},{ref_for:!0},r.getPTOptions("eventOpposite",l),{"data-p":r.dataP}),[e.renderSlot(t.$slots,"opposite",{item:s,index:l})],16,_),e.createBaseVNode("div",e.mergeProps({class:t.cx("eventSeparator")},{ref_for:!0},r.getPTOptions("eventSeparator",l),{"data-p":r.dataP}),[e.renderSlot(t.$slots,"marker",{item:s,index:l},function(){return[e.createBaseVNode("div",e.mergeProps({class:t.cx("eventMarker")},{ref_for:!0},r.getPTOptions("eventMarker",l),{"data-p":r.dataP}),null,16,w)]}),l!==t.value.length-1?e.renderSlot(t.$slots,"connector",{key:0,item:s,index:l},function(){return[e.createBaseVNode("div",e.mergeProps({class:t.cx("eventConnector")},{ref_for:!0},r.getPTOptions("eventConnector",l),{"data-p":r.dataP}),null,16,S)]}):e.createCommentVNode("",!0)],16,k),e.createBaseVNode("div",e.mergeProps({class:t.cx("eventContent")},{ref_for:!0},r.getPTOptions("eventContent",l),{"data-p":r.dataP}),[e.renderSlot(t.$slots,"content",{item:s,index:l})],16,T)],16,B)}),128))],16,V)}v.render=C;const P={class:"grid grid-cols-12 gap-8"},z={class:"col-span-6"},D={class:"card"},O={class:"col-span-6"},q={class:"card"},A={class:"col-span-6"},j={class:"card"},E={class:"col-span-6"},K={class:"card"},$={class:"text-muted-color"},M={class:"col-span-full"},F={class:"card"},I=["src","alt"],L={class:"col-span-full"},R={class:"card"},H={__name:"TimelineDoc",setup(t){const n=e.ref([{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),a=e.ref(["2020","2021","2022","2023"]);return(m,o)=>{const r=v,s=g.script,l=u.script;return e.openBlock(),e.createElementBlock("div",P,[e.createBaseVNode("div",z,[e.createBaseVNode("div",D,[o[0]||(o[0]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Left Align",-1)),e.createVNode(r,{value:n.value},{content:e.withCtx(i=>[e.createTextVNode(e.toDisplayString(i.item.status),1)]),_:1},8,["value"])])]),e.createBaseVNode("div",O,[e.createBaseVNode("div",q,[o[1]||(o[1]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Right Align",-1)),e.createVNode(r,{value:n.value,align:"right"},{content:e.withCtx(i=>[e.createTextVNode(e.toDisplayString(i.item.status),1)]),_:1},8,["value"])])]),e.createBaseVNode("div",A,[e.createBaseVNode("div",j,[o[2]||(o[2]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Alternate Align",-1)),e.createVNode(r,{value:n.value,align:"alternate"},{content:e.withCtx(i=>[e.createTextVNode(e.toDisplayString(i.item.status),1)]),_:1},8,["value"])])]),e.createBaseVNode("div",E,[e.createBaseVNode("div",K,[o[3]||(o[3]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Opposite Content",-1)),e.createVNode(r,{value:n.value},{opposite:e.withCtx(i=>[e.createBaseVNode("small",$,e.toDisplayString(i.item.date),1)]),content:e.withCtx(i=>[e.createTextVNode(e.toDisplayString(i.item.status),1)]),_:1},8,["value"])])]),e.createBaseVNode("div",M,[e.createBaseVNode("div",F,[o[5]||(o[5]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Templating",-1)),e.createVNode(r,{value:n.value,align:"alternate",class:"customized-timeline"},{marker:e.withCtx(i=>[e.createBaseVNode("span",{class:"flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm",style:e.normalizeStyle({backgroundColor:i.item.color})},[e.createBaseVNode("i",{class:e.normalizeClass(i.item.icon)},null,2)],4)]),content:e.withCtx(i=>[e.createVNode(l,{class:"mt-4"},{title:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(i.item.status),1)]),subtitle:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(i.item.date),1)]),content:e.withCtx(()=>[i.item.image?(e.openBlock(),e.createElementBlock("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${i.item.image}`,alt:i.item.name,width:"200",class:"shadow-sm"},null,8,I)):e.createCommentVNode("",!0),o[4]||(o[4]=e.createBaseVNode("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1)),e.createVNode(s,{label:"Read more",text:""})]),_:2},1024)]),_:1},8,["value"])])]),e.createBaseVNode("div",L,[e.createBaseVNode("div",R,[o[7]||(o[7]=e.createBaseVNode("div",{class:"font-semibold text-xl mb-4"},"Horizontal",-1)),o[8]||(o[8]=e.createBaseVNode("div",{class:"font-semibold mb-2"},"Top Align",-1)),e.createVNode(r,{value:a.value,layout:"horizontal",align:"top"},{content:e.withCtx(i=>[e.createTextVNode(e.toDisplayString(i.item),1)]),_:1},8,["value"]),o[9]||(o[9]=e.createBaseVNode("div",{class:"font-semibold mt-4 mb-2"},"Bottom Align",-1)),e.createVNode(r,{value:a.value,layout:"horizontal",align:"bottom"},{content:e.withCtx(i=>[e.createTextVNode(e.toDisplayString(i.item),1)]),_:1},8,["value"]),o[10]||(o[10]=e.createBaseVNode("div",{class:"font-semibold mt-4 mb-2"},"Alternate Align",-1)),e.createVNode(r,{value:a.value,layout:"horizontal",align:"alternate"},{opposite:e.withCtx(()=>[...o[6]||(o[6]=[e.createTextVNode("   ",-1)])]),content:e.withCtx(i=>[e.createTextVNode(e.toDisplayString(i.item),1)]),_:1},8,["value"])])])])}}},G=d._export_sfc(H,[["__scopeId","data-v-424c906a"]]);exports.default=G;
