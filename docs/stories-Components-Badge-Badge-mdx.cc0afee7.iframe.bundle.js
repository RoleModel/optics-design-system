/*! For license information please see stories-Components-Badge-Badge-mdx.cc0afee7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[7193,9529],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Components/Badge/Badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Badge_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Components/Badge/Badge.stories.js"),_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/Components/Alert/Alert.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The Badge component is similar to the Tag component, however it has a different semantic purpose. Badge is intended to be used for notification and information where Tag is intended to be used for interaction and input. See ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/components-tag--docs",children:"Tag"})," for details on its usage."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"selective-imports",children:"Selective Imports"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Badge can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"// Depends on\n@import '@rolemodel/optics/dist/scss/core/tokens';\n@import '@rolemodel/optics/dist/scss/core/base';\n@import '@rolemodel/optics/dist/scss/components/icon';\n\n// Component\n@import '@rolemodel/optics/dist/scss/components/badge';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variations",children:"Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge"})," Provides a default neutral colored badge."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge-primary"})," Provides a primary badge. This uses the primary color defined in your theme."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge-warning"})," Provides a Warning badge. This uses the warning alert color."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Warning}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"danger",children:"Danger"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge-danger"})," Provides a Danger badge. This uses the danger alert color."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Danger}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"info",children:"Info"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge-info"})," Provides a Info badge. This uses the Info alert color."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Info}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"notice",children:"Notice"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge-notice"})," Provides a Notice badge. This uses the Notice alert color."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Notice}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"pill",children:"Pill"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge--pill"})," Modifies the shape of any other badge by adding a radius to the left and right."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Pill}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"notification-button",children:"Notification Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge--notification-right"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".badge--notification-left"})," can be used inside of a button with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".btn--with-badge"})," class to achieve a button notification style."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.NotificationButton}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"customizing-badge-styles",children:"Customizing badge styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.e)({title:"Important!",description:"These patterns represent how to customize the style of the badge for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The badge classes are built on a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",target:"_blank",rel:"nofollow noopener noreferrer",children:"sass placeholder selector"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This allows multiple badge classes to share the same behavior. You can modify all badges behavior by overriding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"%badge-global"})," placeholder selector and setting any properties:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"%badge-global {\n  font-size: var(--op-font-2x-large);\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If you need to override the behavior of a particular badge style, you can open the respective class and set or change properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"// This will only affect the primary badge, but not default, secondary, notice, etc.\n.badge-primary {\n  background-color: red;\n  color: white;\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"new-badge-variations",children:"New Badge Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.e)({title:"Important!",description:"These patterns represent how to create new variations of the badge for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Your application may need a custom badge. To add one, just follow this template:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:".badge-{name} {\n  @extend %badge-global;\n\n  background-color:\n  color:\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:".badge-purple {\n  @extend %badge-global;\n\n  background-color: purple;\n  color: white;\n}\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Components/Badge/Badge.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Default:()=>Default,Info:()=>Info,Notice:()=>Notice,NotificationButton:()=>NotificationButton,Pill:()=>Pill,Primary:()=>Primary,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});var Icon=__webpack_require__("./src/stories/Components/Icon/Icon.js");const Badge_stories={title:"Components/Badge",render:({label,...args})=>(({label,style="default",pill=!1,inButton="no",showIcons=!1})=>{const badge=document.createElement("div");if(badge.innerText=label,badge.className=["default"===style?"badge":`badge-${style}`,pill?"badge--pill":""].filter(Boolean).join(" "),showIcons&&(badge.prepend((0,Icon.I)({name:"open_in_new"})),badge.appendChild((0,Icon.I)({name:"add"}))),"no"!==inButton){const button=document.createElement("button");return button.innerText="Notifications",button.className="btn-primary btn--with-badge",pill||(badge.className+=" badge--pill"),badge.className+=` badge--notification-${inButton}`,button.appendChild(badge),button}return badge})({label,...args}),argTypes:{label:{control:"text"},style:{control:{type:"select"},options:["default","primary","warning","danger","info","notice"]},pill:{control:"boolean"},inButton:{control:{type:"select"},options:["no","right","left"]},showIcons:{control:"boolean",description:"This is not a class. It just provides an example of using icons within a badge"}}},Default={args:{label:"Default",style:"default"}},Primary={args:{label:"Primary",style:"primary"}},Warning={args:{label:"Warning",style:"warning"}},Danger={args:{label:"Danger",style:"danger"}},Info={args:{label:"Info",style:"info"}},Notice={args:{label:"Notice",style:"notice"}},Pill={args:{label:"Pill",style:"default",pill:!0}},NotificationButton={args:{label:"5",style:"danger",pill:!0,inButton:"right"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Default',\n    style: 'default'\n  }\n}",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Primary',\n    style: 'primary'\n  }\n}",...Primary.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Warning',\n    style: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Danger',\n    style: 'danger'\n  }\n}",...Danger.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Info',\n    style: 'info'\n  }\n}",...Info.parameters?.docs?.source}}},Notice.parameters={...Notice.parameters,docs:{...Notice.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Notice',\n    style: 'notice'\n  }\n}",...Notice.parameters?.docs?.source}}},Pill.parameters={...Pill.parameters,docs:{...Pill.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Pill',\n    style: 'default',\n    pill: true\n  }\n}",...Pill.parameters?.docs?.source}}},NotificationButton.parameters={...NotificationButton.parameters,docs:{...NotificationButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: '5',\n    style: 'danger',\n    pill: true,\n    inButton: 'right'\n  }\n}",...NotificationButton.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Warning","Danger","Info","Notice","Pill","NotificationButton"]},"./src/stories/Components/Alert/Alert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>createAlert});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Components/Button/Button.js"),_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createAlert=({warningLevel="warning",style="outlined",title="",description="This is a warning alert",icon="",dismissible=!1,iconDocsClassFix=""})=>{const element=document.createElement("div");if(element.className=[`alert-${warningLevel}`,`alert--${style}`].join(" "),icon){const iconElement=(0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name:icon});iconElement.classList.add("alert__icon"),iconDocsClassFix&&iconElement.classList.add(iconDocsClassFix),element.innerHTML+="\n  ",element.appendChild(iconElement)}const messagesElement=document.createElement("div");if(messagesElement.className="alert__messages",messagesElement.innerHTML=`\n    ${title&&`<div class='alert__title'>${title}</div>`}\n    <div class='alert__description'>${description}</div>\n  `,element.innerHTML+="\n  ",element.appendChild(messagesElement),element.innerHTML+="    \n",dismissible){const iconButton=(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__.a)({priority:"default",icon:"close",pill:!0,noBorder:!0});iconButton.classList.add("alert__icon"),element.appendChild(iconButton)}return element}},"./src/stories/Components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var _Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createButton=({label,priority="primary",noBorder=!1,active=!1,pill=!1,icon=!1,iconWithLabel=!1,size="large",disabled=!1,inlineIconWithLabel=!1,useAsLink=!1})=>{const element=useAsLink||disabled?"a":"button",btn=document.createElement(element);if(btn.innerText=label,useAsLink&&(btn.href="#"),icon){inlineIconWithLabel||(btn.innerText="");const name=!0===icon?"add":icon;btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name}))}return iconWithLabel&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.I)({name:"add",size:"large"})),btn.className=["default"===priority?"btn":`btn-${priority}`,noBorder?"btn--no-border":"",active?"btn--active":"",pill?"btn--pill":"",icon&&!inlineIconWithLabel?"btn--icon":"",iconWithLabel?"btn--icon-with-label":"","large"===size?"":`btn--${size}`,disabled?"btn--disabled":""].filter(Boolean).join(" "),btn}},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);