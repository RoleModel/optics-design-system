"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[5294],{"./src/stories/Components/Tab/Tab.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tab_stories});const createTab=({size="large",activeTab="USA",disabledTab="Canada"})=>{const element=document.createElement("div");element.className="tab-group";return element.innerHTML+=`\n  ${["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"].map((item=>(item=>{const link=document.createElement("a");return link.href="/?path=/docs/components-tab--docs",link.className=["tab","small"===size?"tab--small":"",activeTab===item?" tab--active":"",disabledTab===item?" tab--disabled":""].filter(Boolean).join(" "),link.innerText=item,disabledTab===item&&link.setAttribute("tabindex",-1),link})(item).outerHTML)).join("\n  ")}\n`,element},Tab_stories={title:"Components/Tab",render:({option1,...args})=>createTab({option1,...args}),argTypes:{size:{control:{type:"select"},options:["small","large"]},activeTab:{control:{type:"select"},options:["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"]},disabledTab:{control:{type:"select"},options:["USA","Mexico","Canada","England","Germany","Spain","Austria","Australia"]}}},Default={args:{}},Small={args:{size:"small"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small"]}}]);