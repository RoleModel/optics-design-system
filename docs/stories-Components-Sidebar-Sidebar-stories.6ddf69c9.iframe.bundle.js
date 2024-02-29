"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[3588],{"./src/stories/Components/Sidebar/Sidebar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlternateActiveCompact:()=>AlternateActiveCompact,AlternateActiveDrawer:()=>AlternateActiveDrawer,AlternateActiveRail:()=>AlternateActiveRail,CenteredCompact:()=>CenteredCompact,CenteredDrawer:()=>CenteredDrawer,CenteredRail:()=>CenteredRail,DefaultCompact:()=>DefaultCompact,DefaultDrawer:()=>DefaultDrawer,DefaultRail:()=>DefaultRail,EndCompact:()=>EndCompact,EndDrawer:()=>EndDrawer,EndRail:()=>EndRail,LogoutCompact:()=>LogoutCompact,LogoutDrawer:()=>LogoutDrawer,LogoutRail:()=>LogoutRail,NoBrandCompact:()=>NoBrandCompact,NoBrandDrawer:()=>NoBrandDrawer,NoBrandRail:()=>NoBrandRail,PaddedCompact:()=>PaddedCompact,PaddedDrawer:()=>PaddedDrawer,PaddedRail:()=>PaddedRail,PrimaryCompact:()=>PrimaryCompact,PrimaryDrawer:()=>PrimaryDrawer,PrimaryRail:()=>PrimaryRail,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Sidebar_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Sidebar/Sidebar.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation Components/Sidebar",render:({...args})=>(0,_Sidebar_js__WEBPACK_IMPORTED_MODULE_0__.U)({...args}),argTypes:{size:{control:{type:"select"},options:["drawer","compact","rail"]},responsive:{control:"boolean"},padded:{control:"boolean"},style:{control:{type:"select"},options:["default","primary"]},brand:{control:"boolean"},position:{control:{type:"select"},options:["start","center","end"]},activeLink:{control:{type:"select"},options:["Inbox","Outbox","Favorite","Trash","Circle","Triangle","Square","Different"]}},parameters:{layout:"fullscreen"}},DefaultDrawer={args:{size:"drawer",style:"default"}},PaddedDrawer={args:{size:"drawer",padded:!0,style:"default"}},PrimaryDrawer={args:{size:"drawer",style:"primary"}},NoBrandDrawer={args:{size:"drawer",style:"default",brand:!1}},CenteredDrawer={args:{size:"drawer",style:"default",position:"center"}},EndDrawer={args:{size:"drawer",style:"default",position:"end"}},LogoutDrawer={args:{size:"drawer",style:"default",logout:!0}},AlternateActiveDrawer={args:{size:"drawer",style:"default",activeLink:"Components"}},DefaultCompact={args:{size:"compact",style:"default"}},PaddedCompact={args:{size:"compact",padded:!0,style:"default"}},PrimaryCompact={args:{size:"compact",style:"primary"}},NoBrandCompact={args:{size:"compact",style:"default",brand:!1}},CenteredCompact={args:{size:"compact",style:"default",position:"center"}},EndCompact={args:{size:"compact",style:"default",position:"end"}},LogoutCompact={args:{size:"compact",style:"default",logout:!0}},AlternateActiveCompact={args:{size:"compact",style:"default",activeLink:"Components"}},DefaultRail={args:{size:"rail",style:"default"}},PaddedRail={args:{size:"rail",padded:!0,style:"default"}},PrimaryRail={args:{size:"rail",style:"primary"}},NoBrandRail={args:{size:"rail",style:"default",brand:!1}},CenteredRail={args:{size:"rail",style:"default",position:"center"}},EndRail={args:{size:"rail",style:"default",position:"end"}},LogoutRail={args:{size:"rail",style:"default",logout:!0}},AlternateActiveRail={args:{size:"rail",style:"default",activeLink:"Components"}};DefaultDrawer.parameters={...DefaultDrawer.parameters,docs:{...DefaultDrawer.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    style: 'default'\n  }\n}",...DefaultDrawer.parameters?.docs?.source}}},PaddedDrawer.parameters={...PaddedDrawer.parameters,docs:{...PaddedDrawer.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    padded: true,\n    style: 'default'\n  }\n}",...PaddedDrawer.parameters?.docs?.source}}},PrimaryDrawer.parameters={...PrimaryDrawer.parameters,docs:{...PrimaryDrawer.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    style: 'primary'\n  }\n}",...PrimaryDrawer.parameters?.docs?.source}}},NoBrandDrawer.parameters={...NoBrandDrawer.parameters,docs:{...NoBrandDrawer.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    style: 'default',\n    brand: false\n  }\n}",...NoBrandDrawer.parameters?.docs?.source}}},CenteredDrawer.parameters={...CenteredDrawer.parameters,docs:{...CenteredDrawer.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    style: 'default',\n    position: 'center'\n  }\n}",...CenteredDrawer.parameters?.docs?.source}}},EndDrawer.parameters={...EndDrawer.parameters,docs:{...EndDrawer.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    style: 'default',\n    position: 'end'\n  }\n}",...EndDrawer.parameters?.docs?.source}}},LogoutDrawer.parameters={...LogoutDrawer.parameters,docs:{...LogoutDrawer.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    style: 'default',\n    logout: true\n  }\n}",...LogoutDrawer.parameters?.docs?.source}}},AlternateActiveDrawer.parameters={...AlternateActiveDrawer.parameters,docs:{...AlternateActiveDrawer.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'drawer',\n    style: 'default',\n    activeLink: 'Components'\n  }\n}",...AlternateActiveDrawer.parameters?.docs?.source}}},DefaultCompact.parameters={...DefaultCompact.parameters,docs:{...DefaultCompact.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'compact',\n    style: 'default'\n  }\n}",...DefaultCompact.parameters?.docs?.source}}},PaddedCompact.parameters={...PaddedCompact.parameters,docs:{...PaddedCompact.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'compact',\n    padded: true,\n    style: 'default'\n  }\n}",...PaddedCompact.parameters?.docs?.source}}},PrimaryCompact.parameters={...PrimaryCompact.parameters,docs:{...PrimaryCompact.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'compact',\n    style: 'primary'\n  }\n}",...PrimaryCompact.parameters?.docs?.source}}},NoBrandCompact.parameters={...NoBrandCompact.parameters,docs:{...NoBrandCompact.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'compact',\n    style: 'default',\n    brand: false\n  }\n}",...NoBrandCompact.parameters?.docs?.source}}},CenteredCompact.parameters={...CenteredCompact.parameters,docs:{...CenteredCompact.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'compact',\n    style: 'default',\n    position: 'center'\n  }\n}",...CenteredCompact.parameters?.docs?.source}}},EndCompact.parameters={...EndCompact.parameters,docs:{...EndCompact.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'compact',\n    style: 'default',\n    position: 'end'\n  }\n}",...EndCompact.parameters?.docs?.source}}},LogoutCompact.parameters={...LogoutCompact.parameters,docs:{...LogoutCompact.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'compact',\n    style: 'default',\n    logout: true\n  }\n}",...LogoutCompact.parameters?.docs?.source}}},AlternateActiveCompact.parameters={...AlternateActiveCompact.parameters,docs:{...AlternateActiveCompact.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'compact',\n    style: 'default',\n    activeLink: 'Components'\n  }\n}",...AlternateActiveCompact.parameters?.docs?.source}}},DefaultRail.parameters={...DefaultRail.parameters,docs:{...DefaultRail.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'rail',\n    style: 'default'\n  }\n}",...DefaultRail.parameters?.docs?.source}}},PaddedRail.parameters={...PaddedRail.parameters,docs:{...PaddedRail.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'rail',\n    padded: true,\n    style: 'default'\n  }\n}",...PaddedRail.parameters?.docs?.source}}},PrimaryRail.parameters={...PrimaryRail.parameters,docs:{...PrimaryRail.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'rail',\n    style: 'primary'\n  }\n}",...PrimaryRail.parameters?.docs?.source}}},NoBrandRail.parameters={...NoBrandRail.parameters,docs:{...NoBrandRail.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'rail',\n    style: 'default',\n    brand: false\n  }\n}",...NoBrandRail.parameters?.docs?.source}}},CenteredRail.parameters={...CenteredRail.parameters,docs:{...CenteredRail.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'rail',\n    style: 'default',\n    position: 'center'\n  }\n}",...CenteredRail.parameters?.docs?.source}}},EndRail.parameters={...EndRail.parameters,docs:{...EndRail.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'rail',\n    style: 'default',\n    position: 'end'\n  }\n}",...EndRail.parameters?.docs?.source}}},LogoutRail.parameters={...LogoutRail.parameters,docs:{...LogoutRail.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'rail',\n    style: 'default',\n    logout: true\n  }\n}",...LogoutRail.parameters?.docs?.source}}},AlternateActiveRail.parameters={...AlternateActiveRail.parameters,docs:{...AlternateActiveRail.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'rail',\n    style: 'default',\n    activeLink: 'Components'\n  }\n}",...AlternateActiveRail.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultDrawer","PaddedDrawer","PrimaryDrawer","NoBrandDrawer","CenteredDrawer","EndDrawer","LogoutDrawer","AlternateActiveDrawer","DefaultCompact","PaddedCompact","PrimaryCompact","NoBrandCompact","CenteredCompact","EndCompact","LogoutCompact","AlternateActiveCompact","DefaultRail","PaddedRail","PrimaryRail","NoBrandRail","CenteredRail","EndRail","LogoutRail","AlternateActiveRail"]},"./src/stories/Components/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>createButton});var _Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Icon/Icon.js");const createButton=({label,priority="primary",noBorder=!1,active=!1,pill=!1,icon=!1,iconWithLabel=!1,size="large",disabled=!1,inlineIconWithLabel=!1,useAsLink=!1,showPrefixIcon=!1,showSuffixIcon=!1})=>{const element=useAsLink||disabled?"a":"button",btn=document.createElement(element);if(btn.innerText=label,useAsLink&&(btn.href="#"),icon){inlineIconWithLabel||(btn.innerText="");const name=!0===icon?"add":icon;btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name}))}return iconWithLabel&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"add",size:"large"})),showPrefixIcon&&btn.prepend((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"open_in_new"})),showSuffixIcon&&btn.appendChild((0,_Icon_Icon_js__WEBPACK_IMPORTED_MODULE_0__.A)({name:"add"})),btn.className=["default"===priority?"btn":`btn-${priority}`,noBorder?"btn--no-border":"",active?"btn--active":"",pill?"btn--pill":"",icon&&!inlineIconWithLabel?"btn--icon":"",iconWithLabel?"btn--icon-with-label":"","large"===size?"":`btn--${size}`,disabled?"btn--disabled":""].filter(Boolean).join(" "),btn}},"./src/stories/Components/Icon/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createIcon});const createIcon=({name,filled=!1,size="medium",weight="normal",emphasis="normal"})=>{const icon=document.createElement("span");return icon.innerText=name,icon.className=["material-symbols-outlined",filled?"icon--filled":"icon--outlined",`icon--${size}`,`icon--weight-${weight}`,`icon--${emphasis}-emphasis`].filter(Boolean).join(" "),icon}},"./src/stories/Components/Sidebar/Sidebar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>createSidebar});var _Button_Button_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/Components/Button/Button.js");const createSidebar=({size="drawer",responsive=!1,style="default",brand=!0,padded=!1,position="start",activeLink="Inbox",logout=!1,trailingDiv=!0})=>{const body=document.createElement("div");body.className="app-with-sidebar",body.style.height="80rem";const brandSection=brand?'\n    <a class="sidebar__brand" href="/">\n      <img src="https://rolemodelsoftware.com/assets/rolemodel-logo--blue-5b7cee4303f5b115050586117bad8960640884812d1d51ee4b58817598c896da.svg">\n    </a>\n  ':"",sidebarClasses=["default"===style?"sidebar":`sidebar-${style}`,`sidebar--${size}`,responsive?"sidebar--responsive":"",padded?"sidebar--padded":""].filter(Boolean).join(" ");return body.innerHTML+=`\n  <nav class="${sidebarClasses}">\n    ${brandSection}\n    <div class="sidebar__content sidebar__content--${position}">\n      ${[{type:"link",icon:"inbox",label:"Inbox"},{type:"link",icon:"send",label:"Outbox"},{type:"link",icon:"favorite",label:"Favorite"},{type:"link",icon:"delete",label:"Trash"},{type:"link",icon:"circle",label:"Circle"},{type:"link",icon:"change_history",label:"Triangle"},{type:"link",icon:"square",label:"Square"},{type:"link",icon:"blur_on",label:"Something"}].map((item=>(({type,icon,label},activeLink)=>"title"===type?`<div class='sidebar__section-title'>${label}</div>`:"divider"===type?"<div class='sidebar__section-divider'></div>":(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_0__.a)({label,priority:"default",noBorder:!0,active:activeLink===label,icon,inlineIconWithLabel:!0}).outerHTML)(item,activeLink))).join("\n      ")}\n    </div>\n\n    ${logout?`\n      <div class="sidebar__content sidebar__content--end">\n        ${(0,_Button_Button_js__WEBPACK_IMPORTED_MODULE_0__.a)({label:"Logout",priority:"default",noBorder:!0,icon:"logout",inlineIconWithLabel:!0}).outerHTML}\n      </div>\n    `:""}\n  </nav>\n  ${trailingDiv?"<div></div>":""}\n`,body}}}]);