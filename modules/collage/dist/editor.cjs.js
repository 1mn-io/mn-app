"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=async()=>({f:{name:e=>`${e.name}${e.id}`}}),n=async e=>(await r(),{set:async(t,a)=>({r:'<div class="clean-page"><h1>The Editor has been removed.</h1></div>',style:`
                    .clean-page { 
                        padding: 50px; 
                        text-align: center; 
                        background: white; 
                        height: 100vh;
                    }
                `,evt:{change:()=>{a?.change({_$p:t})}}})});exports.editor=n;exports.index=n;
