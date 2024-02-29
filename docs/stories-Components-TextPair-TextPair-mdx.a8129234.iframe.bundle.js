/*! For license information please see stories-Components-TextPair-TextPair-mdx.a8129234.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[7508,2439],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Components/TextPair/TextPair.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Inline:()=>Inline,SubtitleSize:()=>SubtitleSize,TitleSize:()=>TitleSize,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextPair_stories});const TextPair_stories={title:"Content Components/Text Pair",render:({direction,...args})=>(({inline=!1,titleText="This is the Title",titleSize="",subtitleText="This is the Subtitle",subtitleSize=""})=>{const element=document.createElement("div");element.className=["text-pair",inline?"text-pair--inline":""].filter(Boolean).join(" ");const title=document.createElement("span");title.className=["text-pair__title",""===titleSize?"":`text-pair__title--${titleSize}`].filter(Boolean).join(" "),title.innerText=titleText;const subtitle=document.createElement("span");return subtitle.className=["text-pair__subtitle",""===subtitleSize?"":`text-pair__subtitle--${subtitleSize}`].filter(Boolean).join(" "),subtitle.innerText=subtitleText,element.append("\n  "),element.appendChild(title),element.append("\n  "),element.appendChild(subtitle),element.append("\n"),element})({direction,...args}),argTypes:{inline:{control:"boolean"},titleText:{control:"text"},titleSize:{control:{type:"select"},options:["small","medium","large"]},subtitleText:{control:"text"},subtitleSize:{control:{type:"select"},options:["small","medium","large"]}}},Default={args:{}},Inline={args:{inline:!0,titleText:"Temperature:",subtitleText:"72℉"}},TitleSize={args:{inline:!0,titleText:"Large Title",titleSize:"large"}},SubtitleSize={args:{inline:!0,subtitleText:"Large Subtitle",subtitleSize:"large"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:"{\n  args: {\n    inline: true,\n    titleText: 'Temperature:',\n    subtitleText: '72℉'\n  }\n}",...Inline.parameters?.docs?.source}}},TitleSize.parameters={...TitleSize.parameters,docs:{...TitleSize.parameters?.docs,source:{originalSource:"{\n  args: {\n    inline: true,\n    titleText: 'Large Title',\n    titleSize: 'large'\n  }\n}",...TitleSize.parameters?.docs?.source}}},SubtitleSize.parameters={...SubtitleSize.parameters,docs:{...SubtitleSize.parameters?.docs,source:{originalSource:"{\n  args: {\n    inline: true,\n    subtitleText: 'Large Subtitle',\n    subtitleSize: 'large'\n  }\n}",...SubtitleSize.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Inline","TitleSize","SubtitleSize"]},"./src/stories/Components/TextPair/TextPair.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_TextPair_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/Components/TextPair/TextPair.stories.js"),_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/Components/Alert/Alert.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",pre:"pre",code:"code"},(0,_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Qb,{of:_TextPair_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"text-pair",children:"Text Pair"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The text pair component is used to display a title and subtitle together. It can also be used to group other elements within it, though should generally be reserved for text."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"playground",children:"Playground"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_TextPair_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.O,{of:_TextPair_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"selective-imports",children:"Selective Imports"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Text Pair can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"// Depends on\n@import '@rolemodel/optics/dist/scss/core/tokens';\n@import '@rolemodel/optics/dist/scss/core/base';\n\n// Component\n@import '@rolemodel/optics/dist/scss/components/text_pair';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variations",children:"Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair"})," should be used on a div. Within it, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair__title"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair__subtitle"})," on spans can be used to display the title and subtitle."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_TextPair_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"inline",children:"Inline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair--inline"})," can be added to display the title and subtitle horizontally aligned. This is useful for displaying a key, value pair."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_TextPair_stories__WEBPACK_IMPORTED_MODULE_2__.Inline}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"title-size",children:"Title Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair__title--small"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair__title--medium"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair__title--large"}),", (with medium being the default) modify the font size of the title text."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_TextPair_stories__WEBPACK_IMPORTED_MODULE_2__.TitleSize}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"subtitle-size",children:"Subtitle Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair__subtitle--small"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair__subtitle--medium"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:".text-pair__subtitle--large"}),", (with small being the default) modify the font size of the subtitle text."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Description of subtitle size example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gF,{of:_TextPair_stories__WEBPACK_IMPORTED_MODULE_2__.SubtitleSize}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"text-pair-api",children:"Text Pair API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Styles are built on css variables scoped to the text pair."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Here are the variables that can be customized."}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"--_op-text-pair-font-size-small:\n--_op-text-pair-font-size-medium:\n--_op-text-pair-font-size-large:\n"})}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"customizing-text-pair-styles",children:"Customizing Text Pair styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.i)({title:"Important!",description:"These patterns represent how to customize the style of the text pair for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The text pair classes are built on a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",target:"_blank",rel:"nofollow noopener noreferrer",children:"sass placeholder selector"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This allows multiple classes to share the same behavior. You can modify all textpair behavior by overriding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"%text-pair-global"})," placeholder selector and setting any properties:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"%text-pair-global {\n  gap: var(--op-space-x-large);\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"new-text-pair-variations",children:"New Text Pair Variations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,_Alert_Alert_js__WEBPACK_IMPORTED_MODULE_5__.i)({title:"Important!",description:"These patterns represent how to create new variations of the Text Pair for your project."}).outerHTML}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Your application may need a custom text pair. To add one, just follow this template:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:".text-pair-{name} {\n  @extend %text-pair-global;\n\n  gap:\n}\n"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_optics_optics_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/stories/Components/Alert/Alert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>createAlert});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/Components/Button/Button.js"),_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createAlert=({warningLevel="warning",style="outlined",title="",description="This is a warning alert",icon="",dismissible=!1,iconDocsClassFix=""})=>{const element=document.createElement("div");if(element.className=[`alert-${warningLevel}`,`alert--${style}`].join(" "),icon){const iconElement=(0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:icon});iconElement.classList.add("alert__icon"),iconDocsClassFix&&iconElement.classList.add(iconDocsClassFix),element.innerHTML+="\n  ",element.appendChild(iconElement)}const messagesElement=document.createElement("div");if(messagesElement.className="alert__messages",messagesElement.innerHTML=`\n    ${title&&`<div class='alert__title'>${title}</div>`}\n    <div class='alert__description'>${description}</div>\n  `,element.innerHTML+="\n  ",element.appendChild(messagesElement),element.innerHTML+="    \n",dismissible){const iconButton=(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_1__.a)({priority:"default",icon:"close",pill:!0,noBorder:!0});iconButton.classList.add("alert__icon"),element.appendChild(iconButton)}return element}},"./src/stories/Components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var _Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createButton=({label,priority="primary",noBorder=!1,active=!1,pill=!1,icon=!1,iconWithLabel=!1,size="large",disabled=!1,inlineIconWithLabel=!1,useAsLink=!1,showPrefixIcon=!1,showSuffixIcon=!1})=>{const element=useAsLink||disabled?"a":"button",btn=document.createElement(element);if(btn.innerText=label,useAsLink&&(btn.href="#"),icon){inlineIconWithLabel||(btn.innerText="");const name=!0===icon?"add":icon;btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name}))}return iconWithLabel&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"add",size:"large"})),showPrefixIcon&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"open_in_new"})),showSuffixIcon&&btn.appendChild((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"add"})),btn.className=["default"===priority?"btn":`btn-${priority}`,noBorder?"btn--no-border":"",active?"btn--active":"",pill?"btn--pill":"",icon&&!inlineIconWithLabel?"btn--icon":"",iconWithLabel?"btn--icon-with-label":"","large"===size?"":`btn--${size}`,disabled?"btn--disabled":""].filter(Boolean).join(" "),btn}},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);