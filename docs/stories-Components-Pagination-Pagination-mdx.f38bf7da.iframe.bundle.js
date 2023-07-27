/*! For license information please see stories-Components-Pagination-Pagination-mdx.f38bf7da.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[5473,8756],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Components/Pagination/Pagination.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Pagination_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Components/Pagination/Pagination.stories.js"),_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/Components/Alert/Alert.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Pagination_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"pagination",children:"Pagination"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Pagination is used to navigate through a series of pages, typically when dealing with tabular data.\nA few classes are used in combination with the button component to achieve this."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["An example of using this component with the Table component can be found in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/components-table--docs#with-pagination",children:"Table With Pagination"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"note-on-implementation",children:"Note on Implementation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This is just a styling pattern and does not implement the paging functionality. That is up to the projects needs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A commonly used tool for Ruby on Rails projects is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/kaminari/kaminari",target:"_blank",rel:"nofollow noopener noreferrer",children:"Kaminari"}),". It allows you to copy its templates and customize them. To apply these patterns to those templates, just edit the files it generates and use the classes in these examples."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/RoleModel/rolemodel_rails/tree/master/lib/generators/rolemodel/kaminari",target:"_blank",rel:"nofollow noopener noreferrer",children:"RoleModel Rails Kaminari Generator"})," provides a generator to install and configure Kaminari with Optics classes applied."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"selective-imports",children:"Selective Imports"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Pagination can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"// Depends on\n@import '@rolemodel/optics/dist/scss/core/tokens';\n@import '@rolemodel/optics/dist/scss/core/base';\n@import '@rolemodel/optics/dist/scss/core/button';\n@import '@rolemodel/optics/dist/scss/core/form';\n\n// Component\n@import '@rolemodel/optics/dist/scss/components/pagination';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variations",children:"Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".pagination"})," Is the main class. It can be placed on a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"nav"})," element and wraps a collection of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/components-button--docs",children:"buttons"})," to create a pagination component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The buttons within can use any of the button classes, but form a default look, use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".btn .btn--no-border .btn--small"})," classes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For the first and last page buttons, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".btn--icon"})," can be added for ensure a square button."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For the currently active page, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".btn--active"})," can be used."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".pagination__divider"})," can be used on a div with contents of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"..."})," to indicate a break in the pagination.\nThis pattern is commonly used (and recommended to be used) when there are more that six pages of content. It prevents the pagination from becoming too long."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Pagination_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-showing-select",children:"With Showing Select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Another common pattern is to allow users to change how many items are shown per page. The visuals of this can be achieved by using a form group with a select component. The pagination styling will handle making the form label inline."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Pagination_stories__WEBPACK_IMPORTED_MODULE_2__.WithShowing}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"customizing-pagination-styles",children:"Customizing Pagination styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.e)({title:"Important!",description:"These patterns represent how to customize the style of the pagination for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The pagination classes are built on a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",target:"_blank",rel:"nofollow noopener noreferrer",children:"sass placeholder selector"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This allows multiple classes to share the same behavior. You can modify all pagination behavior by overriding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"%pagination-global"})," placeholder selector\nand setting any properties:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"%pagination-global {\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"new-pagination-variations",children:"New Pagination Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.e)({title:"Important!",description:"These patterns represent how to create new variations of the pagination for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Your application may need a custom pagination. To add one, just follow this template:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"  @extend %pagination-global;\n.pagination-{name} {\n}\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Components/Pagination/Pagination.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithShowing:()=>WithShowing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Pagination_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Pagination/Pagination.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Pagination",render:({option1,...args})=>(0,_Pagination_js__WEBPACK_IMPORTED_MODULE_0__.F)({option1,...args}),argTypes:{activePage:{control:{type:"select"},options:["1","2","3","10","11","12"]},includeShowing:{control:"boolean"}}},Default={args:{}},WithShowing={args:{includeShowing:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithShowing.parameters={...WithShowing.parameters,docs:{...WithShowing.parameters?.docs,source:{originalSource:"{\n  args: {\n    includeShowing: true\n  }\n}",...WithShowing.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithShowing"]},"./src/stories/Components/Alert/Alert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>createAlert});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Components/Button/Button.js"),_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createAlert=({warningLevel="warning",style="outlined",title="",description="This is a warning alert",icon="",dismissible=!1,iconDocsClassFix=""})=>{const element=document.createElement("div");if(element.className=[`alert-${warningLevel}`,`alert--${style}`].join(" "),icon){const iconElement=(0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name:icon});iconElement.classList.add("alert__icon"),iconDocsClassFix&&iconElement.classList.add(iconDocsClassFix),element.innerHTML+="\n  ",element.appendChild(iconElement)}const messagesElement=document.createElement("div");if(messagesElement.className="alert__messages",messagesElement.innerHTML=`\n    ${title&&`<div class='alert__title'>${title}</div>`}\n    <div class='alert__description'>${description}</div>\n  `,element.innerHTML+="\n  ",element.appendChild(messagesElement),element.innerHTML+="    \n",dismissible){const iconButton=(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__.a)({priority:"default",icon:"close",pill:!0,noBorder:!0});iconButton.classList.add("alert__icon"),element.appendChild(iconButton)}return element}},"./src/stories/Components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var _Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createButton=({label,priority="primary",noBorder=!1,active=!1,pill=!1,icon=!1,iconWithLabel=!1,size="large",disabled=!1,inlineIconWithLabel=!1,useAsLink=!1})=>{const element=useAsLink||disabled?"a":"button",btn=document.createElement(element);if(btn.innerText=label,useAsLink&&(btn.href="#"),icon){inlineIconWithLabel||(btn.innerText="");const name=!0===icon?"add":icon;btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name}))}return iconWithLabel&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name:"add",size:"large"})),btn.className=["default"===priority?"btn":`btn-${priority}`,noBorder?"btn--no-border":"",active?"btn--active":"",pill?"btn--pill":"",icon&&!inlineIconWithLabel?"btn--icon":"",iconWithLabel?"btn--icon-with-label":"","large"===size?"":`btn--${size}`,disabled?"btn--disabled":""].filter(Boolean).join(" "),btn}},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}},"./src/stories/Components/Pagination/Pagination.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>createPagination});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Button/Button.js");const createPagination=({activePage="1",includeShowing=!1})=>{const element=document.createElement("nav");element.className="pagination";return includeShowing&&(element.innerHTML+="\n  <div class='form-group'>\n    <label class='form-label' for='showing-input'>Showing</label>\n    <select id='showing-input' class='form-control form-control--no-border form-control--small'>\n      <option value=\"10\">10</option>\n      <option value=\"20\">20</option>\n      <option value=\"50\">50</option>\n      <option value=\"100\">100</option>\n    </select>\n  </div>\n"),element.innerHTML+=`\n  <a class="btn btn--small btn--no-border btn--icon" href="#">\n    <span class="material-symbols-outlined">first_page</span>\n  </a>\n  <a class="btn btn--small btn--no-border" href="#">\n    <span class="material-symbols-outlined">chevron_left</span>\n    Prev\n  </a>\n  ${["1","2","3","...","10","11","12"].map((item=>(item=>"..."===item?'\n  <div class="pagination__divider">\n    ...\n  </div>\n      ':(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_0__.a)({useAsLink:!0,label:item,priority:"default",noBorder:!0,active:activePage===item,size:"small"}).outerHTML)(item))).join("\n  ")}\n  <a class="btn btn--small btn--no-border" href="#">\n    Next\n    <span class="material-symbols-outlined">chevron_right</span>\n  </a>\n  <a class="btn btn--small btn--no-border btn--icon" href="#">\n    <span class="material-symbols-outlined">last_page</span>\n  </a>\n`,element}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);