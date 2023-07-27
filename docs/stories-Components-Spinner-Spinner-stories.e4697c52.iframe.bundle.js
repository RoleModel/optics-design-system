"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[6369],{"./src/stories/Components/Spinner/Spinner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Large:()=>Large,Medium:()=>Medium,Small:()=>Small,XSmall:()=>XSmall,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Spinner_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Spinner/Spinner.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Spinner",render:({size,...args})=>(0,_Spinner_js__WEBPACK_IMPORTED_MODULE_0__.r)({size,...args}),argTypes:{size:{control:{type:"select"},options:["x-small","small","medium","large"]}}},Default={args:{size:"large"}},XSmall={args:{size:"x-small"}},Small={args:{size:"small"}},Medium={args:{size:"medium"}},Large={args:{size:"large"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large'\n  }\n}",...Default.parameters?.docs?.source}}},XSmall.parameters={...XSmall.parameters,docs:{...XSmall.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'x-small'\n  }\n}",...XSmall.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'medium'\n  }\n}",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large'\n  }\n}",...Large.parameters?.docs?.source}}};const __namedExportsOrder=["Default","XSmall","Small","Medium","Large"]},"./src/stories/Components/Spinner/Spinner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>createSpinner});const createSpinner=({size="large"})=>{const element=document.createElement("div");return element.className=`spinner spinner--${size}`,element.role="status",element.innerHTML='<span class="sr-only">Loading</span>',element}}}]);