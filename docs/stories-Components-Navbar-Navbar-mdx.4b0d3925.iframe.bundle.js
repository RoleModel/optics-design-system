/*! For license information please see stories-Components-Navbar-Navbar-mdx.4b0d3925.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[6332,7904],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Components/Navbar/Navbar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CenteredNavbar:()=>CenteredNavbar,DefaultNavbar:()=>DefaultNavbar,JustifyEndNavbar:()=>JustifyEndNavbar,NoBrandNavbar:()=>NoBrandNavbar,PrimaryNavbar:()=>PrimaryNavbar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Navbar_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Navbar/Navbar.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation Components/Navbar",render:({...args})=>(0,_Navbar_js__WEBPACK_IMPORTED_MODULE_0__.g)({...args}),argTypes:{style:{control:{type:"select"},options:["default","primary"]},brand:{control:"boolean"},justify:{control:{type:"select"},options:["start","center","end"]},activeLink:{control:{type:"select"},options:["Inbox","Outbox","Favorite","Something"]}},parameters:{layout:"fullscreen"}},DefaultNavbar={args:{style:"default"}},PrimaryNavbar={args:{style:"primary"}},NoBrandNavbar={args:{size:"drawer",style:"default",brand:!1}},CenteredNavbar={args:{style:"default",justify:"center"}},JustifyEndNavbar={args:{style:"default",justify:"end"}};DefaultNavbar.parameters={...DefaultNavbar.parameters,docs:{...DefaultNavbar.parameters?.docs,source:{originalSource:"{\n  args: {\n    style: 'default'\n  }\n}",...DefaultNavbar.parameters?.docs?.source}}},PrimaryNavbar.parameters={...PrimaryNavbar.parameters,docs:{...PrimaryNavbar.parameters?.docs,source:{originalSource:"{\n  args: {\n    style: 'primary'\n  }\n}",...PrimaryNavbar.parameters?.docs?.source}}},NoBrandNavbar.parameters={...NoBrandNavbar.parameters,docs:{...NoBrandNavbar.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    style: 'default',\n    brand: false\n  }\n}",...NoBrandNavbar.parameters?.docs?.source}}},CenteredNavbar.parameters={...CenteredNavbar.parameters,docs:{...CenteredNavbar.parameters?.docs,source:{originalSource:"{\n  args: {\n    style: 'default',\n    justify: 'center'\n  }\n}",...CenteredNavbar.parameters?.docs?.source}}},JustifyEndNavbar.parameters={...JustifyEndNavbar.parameters,docs:{...JustifyEndNavbar.parameters?.docs,source:{originalSource:"{\n  args: {\n    style: 'default',\n    justify: 'end'\n  }\n}",...JustifyEndNavbar.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultNavbar","PrimaryNavbar","NoBrandNavbar","CenteredNavbar","JustifyEndNavbar"]},"./src/stories/Components/Navbar/Navbar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Components/Navbar/Navbar.stories.js"),_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/Components/Alert/Alert.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",h3:"h3",pre:"pre"},(0,_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Qb,{of:_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"navbar",children:"Navbar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Navbar classes provide simple styling for a navigation header."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For instructions on how to integrate a navbar into your applications layout, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/recipes-layout--navbar",children:"Layout With Navbar"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".navbar"})," is the main component that everything is contained within."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Any ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/navigation-components-button--docs#default",children:"Button"})," style can be used for the links."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__.DefaultNavbar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.O,{of:_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__.DefaultNavbar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"selective-imports",children:"Selective Imports"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Navbar can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"// Depends on\n@import '@rolemodel/optics/dist/scss/core/tokens';\n@import '@rolemodel/optics/dist/scss/core/base';\n@import '@rolemodel/optics/dist/scss/components/icon';\n@import '@rolemodel/optics/dist/scss/components/button';\n\n// Component\n@import '@rolemodel/optics/dist/scss/components/navbar';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variations",children:"Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".navbar"})," Provides a neutral colored navbar. This uses the neutral color defined in your theme."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__.DefaultNavbar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".navbar-primary"})," Provides a primary colored navbar. This uses the primary color defined in your theme."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__.PrimaryNavbar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"brand",children:"Brand"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".navbar__brand"})," can be used with an image tag inside. This can be used to display your applications branding or logo."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The brand is not required and the navbar content will adjust itself accordingly."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__.NoBrandNavbar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"content",children:"Content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".navbar__content"})," defines the container that the buttons should be placed in. If you are putting navigation links within a content section, you should use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"nav"})," element for that section. It can be justified by using modifier classes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".navbar__content--justify-start"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".navbar__content--justify-center"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".navbar__content--justify-end"})," with start being the default."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__.CenteredNavbar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_Navbar_stories__WEBPACK_IMPORTED_MODULE_2__.JustifyEndNavbar}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"navbar-api",children:"Navbar API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Color and hover styles are built on css variables scoped to the navbar."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Here are the variables that can be customized."}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"// Public API\n// Normal\n--_op-navbar-background-color\n--_op-navbar-text-color\n--_op-navbar-border-color\n\n// Height\n--_op-navbar-brand-height\n\n// Spacing\n--_op-navbar-horizontal-spacing\n--_op-navbar-content-spacing\n--_op-navbar-content-item-spacing\n"})}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"customizing-navbar-styles",children:"Customizing Navbar styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.i)({title:"Important!",description:"These patterns represent how to customize the style of the navbar for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The navbar classes are built on a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",target:"_blank",rel:"nofollow noopener noreferrer",children:"sass placeholder selector"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This allows multiple classes to share the same behavior. You can modify all navbar behavior by overriding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"%navbar-global"})," placeholder selector and setting any properties:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"%navbar-global {\n  --_op-navbar-background-color: pink;\n  --_op-navbar-text-color: blue;\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If you need to override the behavior of a particular navbar style, you can open the respective class and set or change properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:".navbar-primary {\n  --_op-navbar-brand-height: 5.4rem;\n  --_op-navbar-horizontal-spacing: var(--op-space-small);\n  --_op-navbar-content-item-spacing: var(--op-space-x-small);\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"new-navbar-variations",children:"New Navbar Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.i)({title:"Important!",description:"These patterns represent how to create new variations of the Navbar for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Your application may need a custom navbar. To add one, just follow this template:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:".navbar-{name} {\n  @extend %navbar-global;\n}\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Components/Alert/Alert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>createAlert});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Components/Button/Button.js"),_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createAlert=({warningLevel="warning",style="outlined",title="",description="This is a warning alert",icon="",dismissible=!1,iconDocsClassFix=""})=>{const element=document.createElement("div");if(element.className=[`alert-${warningLevel}`,`alert--${style}`].join(" "),icon){const iconElement=(0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:icon});iconElement.classList.add("alert__icon"),iconDocsClassFix&&iconElement.classList.add(iconDocsClassFix),element.innerHTML+="\n  ",element.appendChild(iconElement)}const messagesElement=document.createElement("div");if(messagesElement.className="alert__messages",messagesElement.innerHTML=`\n    ${title&&`<div class='alert__title'>${title}</div>`}\n    <div class='alert__description'>${description}</div>\n  `,element.innerHTML+="\n  ",element.appendChild(messagesElement),element.innerHTML+="    \n",dismissible){const iconButton=(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__.a)({priority:"default",icon:"close",pill:!0,noBorder:!0});iconButton.classList.add("alert__icon"),element.appendChild(iconButton)}return element}},"./src/stories/Components/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>createAvatar});const createAvatar=({size="large",disabled=!1,imageSource="https://picsum.photos/id/433/500",useLink=!0})=>{const element=document.createElement(useLink?"a":"div");element.href="/?path=/docs/components-avatar--docs",element.className=`avatar avatar--${size}`;const image=document.createElement("img");return image.src=imageSource,image.setAttribute("alt","Avatar"),disabled&&element.classList.add("avatar--disabled"),element.appendChild(image),element}},"./src/stories/Components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var _Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createButton=({label,priority="primary",noBorder=!1,active=!1,pill=!1,icon=!1,iconWithLabel=!1,size="large",disabled=!1,inlineIconWithLabel=!1,useAsLink=!1,showPrefixIcon=!1,showSuffixIcon=!1})=>{const element=useAsLink||disabled?"a":"button",btn=document.createElement(element);if(btn.innerText=label,useAsLink&&(btn.href="#"),icon){inlineIconWithLabel||(btn.innerText="");const name=!0===icon?"add":icon;btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name}))}return iconWithLabel&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"add",size:"large"})),showPrefixIcon&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"open_in_new"})),showSuffixIcon&&btn.appendChild((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"add"})),btn.className=["default"===priority?"btn":`btn-${priority}`,noBorder?"btn--no-border":"",active?"btn--active":"",pill?"btn--pill":"",icon&&!inlineIconWithLabel?"btn--icon":"",iconWithLabel?"btn--icon-with-label":"","large"===size?"":`btn--${size}`,disabled?"btn--disabled":""].filter(Boolean).join(" "),btn}},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}},"./src/stories/Components/Navbar/Navbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>createNavbar});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Button/Button.js"),_Avatar_Avatar_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Components/Avatar/Avatar.js");const createNavbar=({style="default",brand=!0,justify="start",activeLink="Inbox",onlyBrand=!1})=>{const body=document.createElement("div");body.className="app-body",body.style.height="40rem";const brandSection=brand?'\n      <a class="navbar__brand" href="/">\n        <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-5b7cee4303f5b115050586117bad8960640884812d1d51ee4b58817598c896da.svg">\n      </a>\n  ':"";let links=[{type:"link",icon:"inbox",label:"Inbox"},{type:"link",icon:"send",label:"Outbox"},{type:"link",icon:"favorite",label:"Favorite"},{type:"link",icon:"blur_on",label:"Something"}],avatarSection=`\n  <div class="navbar__content">\n    ${(0,_Avatar_Avatar_js__WEBPACK_IMPORTED_MODULE_1__.M)({size:"medium"}).outerHTML}\n  </div>\n`;onlyBrand&&(links=[],avatarSection="");const navbarClasses=["default"===style?"navbar":`navbar-${style}`];return body.innerHTML+=`\n  <div class="app__header">\n    <div class="${navbarClasses}">\n      ${brandSection}\n      <nav class="navbar__content navbar__content--justify-${justify}">\n        ${links.map((item=>(({icon,label},activeLink)=>(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_0__.a)({label,priority:"default",noBorder:!0,active:activeLink===label,icon,inlineIconWithLabel:!0}).outerHTML)(item,activeLink))).join("\n        ")}\n      </nav>\n      ${avatarSection}\n    </div>\n  </div>\n`,body}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);