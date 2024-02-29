"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[3552],{"./src/stories/Components/Divider/Divider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Size:()=>Size,Spacing:()=>Spacing,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Divider_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Divider/Divider.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Visual Components/Divider",render:({option1,...args})=>(0,_Divider_js__WEBPACK_IMPORTED_MODULE_0__._)({option1,...args}),argTypes:{vertical:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]},spacing:{control:{type:"select"},options:["none","small","medium","large"]}},parameters:{layout:"padded"}},Default={args:{}},Vertical={args:{vertical:!0}},Size={args:{size:"large"}},Spacing={args:{spacing:"large"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  args: {\n    vertical: true\n  }\n}",...Vertical.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large'\n  }\n}",...Size.parameters?.docs?.source}}},Spacing.parameters={...Spacing.parameters,docs:{...Spacing.parameters?.docs,source:{originalSource:"{\n  args: {\n    spacing: 'large'\n  }\n}",...Spacing.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Vertical","Size","Spacing"]},"./src/stories/Components/Divider/Divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>createDivider});const createDivider=({vertical=!1,size="small",spacing="none"})=>{const element=document.createElement("div");return element.className=vertical?"divider-vertical":"divider","small"!==size&&element.classList.add(`divider--${size}`),"none"!==spacing&&element.classList.add(`divider--spacing-${spacing}`),element}}}]);