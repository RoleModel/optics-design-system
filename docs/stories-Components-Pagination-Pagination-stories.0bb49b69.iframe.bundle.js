"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[8756],{"./src/stories/Components/Pagination/Pagination.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithShowing:()=>WithShowing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Pagination_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Pagination/Pagination.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Pagination",render:({option1,...args})=>(0,_Pagination_js__WEBPACK_IMPORTED_MODULE_0__.F)({option1,...args}),argTypes:{activePage:{control:{type:"select"},options:["1","2","3","10","11","12"]},includeShowing:{control:"boolean"}}},Default={args:{}},WithShowing={args:{includeShowing:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithShowing.parameters={...WithShowing.parameters,docs:{...WithShowing.parameters?.docs,source:{originalSource:"{\n  args: {\n    includeShowing: true\n  }\n}",...WithShowing.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithShowing"]},"./src/stories/Components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var _Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createButton=({label,priority="primary",noBorder=!1,active=!1,pill=!1,icon=!1,iconWithLabel=!1,size="large",disabled=!1,inlineIconWithLabel=!1,useAsLink=!1})=>{const element=useAsLink||disabled?"a":"button",btn=document.createElement(element);if(btn.innerText=label,useAsLink&&(btn.href="#"),icon){inlineIconWithLabel||(btn.innerText="");const name=!0===icon?"add":icon;btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name}))}return iconWithLabel&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name:"add",size:"large"})),btn.className=["default"===priority?"btn":`btn-${priority}`,noBorder?"btn--no-border":"",active?"btn--active":"",pill?"btn--pill":"",icon&&!inlineIconWithLabel?"btn--icon":"",iconWithLabel?"btn--icon-with-label":"","large"===size?"":`btn--${size}`,disabled?"btn--disabled":""].filter(Boolean).join(" "),btn}},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}},"./src/stories/Components/Pagination/Pagination.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>createPagination});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Button/Button.js");const createPagination=({activePage="1",includeShowing=!1})=>{const element=document.createElement("nav");element.className="pagination";return includeShowing&&(element.innerHTML+="\n  <div class='form-group'>\n    <label class='form-label' for='showing-input'>Showing</label>\n    <select id='showing-input' class='form-control form-control--no-border form-control--small'>\n      <option value=\"10\">10</option>\n      <option value=\"20\">20</option>\n      <option value=\"50\">50</option>\n      <option value=\"100\">100</option>\n    </select>\n  </div>\n"),element.innerHTML+=`\n  <a class="btn btn--small btn--no-border btn--icon" href="#">\n    <span class="material-symbols-outlined">first_page</span>\n  </a>\n  <a class="btn btn--small btn--no-border" href="#">\n    <span class="material-symbols-outlined">chevron_left</span>\n    Prev\n  </a>\n  ${["1","2","3","...","10","11","12"].map((item=>(item=>"..."===item?'\n  <div class="pagination__divider">\n    ...\n  </div>\n      ':(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_0__.a)({useAsLink:!0,label:item,priority:"default",noBorder:!0,active:activePage===item,size:"small"}).outerHTML)(item))).join("\n  ")}\n  <a class="btn btn--small btn--no-border" href="#">\n    Next\n    <span class="material-symbols-outlined">chevron_right</span>\n  </a>\n  <a class="btn btn--small btn--no-border btn--icon" href="#">\n    <span class="material-symbols-outlined">last_page</span>\n  </a>\n`,element}}}]);