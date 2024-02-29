"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[4692],{"./src/stories/Components/Icon/Icon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bold:()=>Bold,Default:()=>Default,Emphasis:()=>Emphasis,Filled:()=>Filled,Large:()=>Large,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Visual Components/Icon",render:({name,...args})=>(0,_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name,...args}),argTypes:{name:{control:"text"},filled:{control:"boolean"},size:{control:{type:"select"},options:["normal","large","x-large"]},weight:{control:{type:"select"},options:["light","normal","semi-bold","bold"]},emphasis:{control:{type:"select"},options:["low","normal","high"]}}},Default={args:{name:"settings"}},Filled={args:{name:"settings",filled:!0}},Large={args:{name:"settings",size:"large"}},Bold={args:{name:"settings",weight:"bold"}},Emphasis={args:{name:"settings",emphasis:"high"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'settings'\n  }\n}",...Default.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'settings',\n    filled: true\n  }\n}",...Filled.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'settings',\n    size: 'large'\n  }\n}",...Large.parameters?.docs?.source}}},Bold.parameters={...Bold.parameters,docs:{...Bold.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'settings',\n    weight: 'bold'\n  }\n}",...Bold.parameters?.docs?.source}}},Emphasis.parameters={...Emphasis.parameters,docs:{...Emphasis.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'settings',\n    emphasis: 'high'\n  }\n}",...Emphasis.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Filled","Large","Bold","Emphasis"]},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}}}]);