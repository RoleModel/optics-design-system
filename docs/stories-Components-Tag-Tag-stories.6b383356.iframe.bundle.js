"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[3116],{"./src/stories/Components/Tag/Tag.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Info:()=>Info,Notice:()=>Notice,Primary:()=>Primary,Readonly:()=>Readonly,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});var Button=__webpack_require__("./src/stories/Components/Button/Button.js");const Tag_stories={title:"Components/Tag",render:({label,...args})=>(({label,type="readonly",iconLeft=!1,iconRight=!1})=>{const tag=document.createElement("div"),text=document.createElement("span");return text.innerText=label,text.className="tag__label",tag.append(text),iconLeft&&tag.prepend((0,Button.a)({priority:"default",noBorder:!0,icon:"close",pill:!0})),iconRight&&tag.append((0,Button.a)({priority:"default",noBorder:!0,icon:"close",pill:!0})),tag.className=[`tag-${type}`].filter(Boolean).join(" "),tag})({label,...args}),argTypes:{label:{control:"text"},type:{control:{type:"select"},options:["readonly","primary","danger","warning","info","notice"]},iconLeft:{control:"boolean"},iconRight:{control:"boolean"}}},Readonly={args:{label:"Readonly",type:"readonly"}},Primary={args:{label:"Primary",type:"primary"}},Danger={args:{label:"Danger",type:"danger"}},Warning={args:{label:"Warning",type:"warning"}},Info={args:{label:"Info",type:"info"}},Notice={args:{label:"Notice",type:"notice"}};Readonly.parameters={...Readonly.parameters,docs:{...Readonly.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Readonly',\n    type: 'readonly'\n  }\n}",...Readonly.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Primary',\n    type: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Danger',\n    type: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Warning',\n    type: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Info',\n    type: 'info'\n  }\n}",...Info.parameters?.docs?.source}}},Notice.parameters={...Notice.parameters,docs:{...Notice.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Notice',\n    type: 'notice'\n  }\n}",...Notice.parameters?.docs?.source}}};const __namedExportsOrder=["Readonly","Primary","Danger","Warning","Info","Notice"]},"./src/stories/Components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var _Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createButton=({label,priority="primary",noBorder=!1,active=!1,pill=!1,icon=!1,iconWithLabel=!1,size="large",disabled=!1,inlineIconWithLabel=!1,useAsLink=!1})=>{const element=useAsLink||disabled?"a":"button",btn=document.createElement(element);if(btn.innerText=label,useAsLink&&(btn.href="#"),icon){inlineIconWithLabel||(btn.innerText="");const name=!0===icon?"add":icon;btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name}))}return iconWithLabel&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name:"add",size:"large"})),btn.className=["default"===priority?"btn":`btn-${priority}`,noBorder?"btn--no-border":"",active?"btn--active":"",pill?"btn--pill":"",icon&&!inlineIconWithLabel?"btn--icon":"",iconWithLabel?"btn--icon-with-label":"","large"===size?"":`btn--${size}`,disabled?"btn--disabled":""].filter(Boolean).join(" "),btn}},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}}}]);