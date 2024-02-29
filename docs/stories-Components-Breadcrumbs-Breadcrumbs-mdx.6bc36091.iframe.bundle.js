/*! For license information please see stories-Components-Breadcrumbs-Breadcrumbs-mdx.6bc36091.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[1508,9432],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Components/Breadcrumbs/Breadcrumbs.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Large:()=>Large,SeparatorIcon:()=>SeparatorIcon,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});var Icon=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createBreadcrumbs=({size="",separator="arrow_right"})=>{const element=document.createElement("nav");element.className=["breadcrumbs",""===size?"":`breadcrumbs--${size}`].filter(Boolean).join(" ");const links=[{type:"link",text:"USA"},{type:"separator",text:separator},{type:"link",text:"Mexico"},{type:"separator",text:separator},{type:"link",text:"Canada"},{type:"separator",text:separator},{type:"text",text:"England"}];return element.innerHTML+=`\n  ${links.map(((item,index)=>(linkItem=>{const element=document.createElement({link:"a",text:"span",separator:"div"}[linkItem.type]);return element.className=`breadcrumbs__${linkItem.type}`,element.innerText=linkItem.text,"link"===linkItem.type?element.href="#":"separator"===linkItem.type&&(element.innerHTML="\n    "+(0,Icon.A)({name:linkItem.text}).outerHTML+"\n  "),element})(item).outerHTML)).join("\n  ")}\n`,element},Breadcrumbs_stories={title:"Navigation Components/Breadcrumbs",render:({size,...args})=>createBreadcrumbs({size,...args}),argTypes:{size:{control:{type:"select"},options:["small","large"]},separator:{control:"text"}}},Default={args:{}},Small={args:{size:"small"}},Large={args:{size:"large"}},SeparatorIcon={args:{separator:"folder"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small'\n  }\n}",...Small.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large'\n  }\n}",...Large.parameters?.docs?.source}}},SeparatorIcon.parameters={...SeparatorIcon.parameters,docs:{...SeparatorIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    separator: 'folder'\n  }\n}",...SeparatorIcon.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small","Large","SeparatorIcon"]},"./src/stories/Components/Breadcrumbs/Breadcrumbs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Components/Breadcrumbs/Breadcrumbs.stories.js"),_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/Components/Alert/Alert.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",a:"a",pre:"pre"},(0,_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Qb,{of:_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The breadcrumbs component is used to show the user's current location in a hierarchy of pages."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["It can be applied to a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"nav"})," element with a collection of links and separators within it."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.O,{of:_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"selective-imports",children:"Selective Imports"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Breadcrumbs can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"// Depends on\n@import '@rolemodel/optics/dist/scss/core/tokens';\n@import '@rolemodel/optics/dist/scss/core/base';\n\n// Component\n@import '@rolemodel/optics/dist/scss/components/breadcrumbs';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variations",children:"Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".breadcrumbs"})," should be used on a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"nav"})," element. Within it, links with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".breadcrumbs__link"}),", separators with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".breadcrumbs__separator"}),", and the last item span with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".breadcrumbs__text"})," should be used."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".breadcrumbs--small"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".breadcrumbs--large"})," (with small being the default) modify the font size of the breadcrumb links and text."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__.Large}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"separator",children:"Separator"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".breadcrumbs__separator"})," is used to separate the links in the breadcrumbs. It is a div that anything can be put within, however typically would be used with an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/visual-components-icon--docs",children:"Icon"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Breadcrumbs_stories__WEBPACK_IMPORTED_MODULE_2__.SeparatorIcon}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"breadcrumb-api",children:"Breadcrumb API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Styles are built on css variables scoped to the breadcrumbs."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Here are the variables that can be customized."}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"--_op-breadcrumbs-font-size-small:\n--_op-breadcrumbs-font-size-large:\n"})}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"customizing-breadcrumbs-styles",children:"Customizing Breadcrumbs styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.i)({title:"Important!",description:"These patterns represent how to customize the style of the breadcrumbs for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The breadcrumbs classes are built on a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",target:"_blank",rel:"nofollow noopener noreferrer",children:"sass placeholder selector"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This allows multiple classes to share the same behavior. You can modify all breadcrumbs behavior by overriding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"%breadcrumbs-global"})," placeholder selector and setting any properties:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"%breadcrumbs-global {\n  align-items: start;\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If you want to override how the size modifier behaves, you can use API described above to change which font size each size uses."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"%btn-global {\n  --_op-breadcrumbs-font-size-small: var(--op-font-4x-large);\n  --_op-breadcrumbs-font-size-large: var(--op-font-6x-large);\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"new-breadcrumbs-variations",children:"New Breadcrumbs Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.i)({title:"Important!",description:"These patterns represent how to create new variations of the Breadcrumbs for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Your application may need a custom breadcrumbs component. To add one, just follow this template:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:".breadcrumbs-{name} {\n  @extend %breadcrumbs-global;\n\n  background-color:\n  color:\n}\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Components/Alert/Alert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>createAlert});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Components/Button/Button.js"),_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createAlert=({warningLevel="warning",style="outlined",title="",description="This is a warning alert",icon="",dismissible=!1,iconDocsClassFix=""})=>{const element=document.createElement("div");if(element.className=[`alert-${warningLevel}`,`alert--${style}`].join(" "),icon){const iconElement=(0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:icon});iconElement.classList.add("alert__icon"),iconDocsClassFix&&iconElement.classList.add(iconDocsClassFix),element.innerHTML+="\n  ",element.appendChild(iconElement)}const messagesElement=document.createElement("div");if(messagesElement.className="alert__messages",messagesElement.innerHTML=`\n    ${title&&`<div class='alert__title'>${title}</div>`}\n    <div class='alert__description'>${description}</div>\n  `,element.innerHTML+="\n  ",element.appendChild(messagesElement),element.innerHTML+="    \n",dismissible){const iconButton=(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__.a)({priority:"default",icon:"close",pill:!0,noBorder:!0});iconButton.classList.add("alert__icon"),element.appendChild(iconButton)}return element}},"./src/stories/Components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var _Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createButton=({label,priority="primary",noBorder=!1,active=!1,pill=!1,icon=!1,iconWithLabel=!1,size="large",disabled=!1,inlineIconWithLabel=!1,useAsLink=!1,showPrefixIcon=!1,showSuffixIcon=!1})=>{const element=useAsLink||disabled?"a":"button",btn=document.createElement(element);if(btn.innerText=label,useAsLink&&(btn.href="#"),icon){inlineIconWithLabel||(btn.innerText="");const name=!0===icon?"add":icon;btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name}))}return iconWithLabel&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"add",size:"large"})),showPrefixIcon&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"open_in_new"})),showSuffixIcon&&btn.appendChild((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"add"})),btn.className=["default"===priority?"btn":`btn-${priority}`,noBorder?"btn--no-border":"",active?"btn--active":"",pill?"btn--pill":"",icon&&!inlineIconWithLabel?"btn--icon":"",iconWithLabel?"btn--icon-with-label":"","large"===size?"":`btn--${size}`,disabled?"btn--disabled":""].filter(Boolean).join(" "),btn}},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);