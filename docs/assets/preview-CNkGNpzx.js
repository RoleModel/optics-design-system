const{makeDecorator:r}=__STORYBOOK_MODULE_PREVIEW_API__,a=r({name:"useTheme",parameterName:"theme",wrapper:(o,e,{parameters:s})=>{const n=document.documentElement.getAttribute("data-theme-mode"),t=e.globals.theme;return n!==t&&(console.log("should change "),document.documentElement.setAttribute("data-theme-mode",t)),o(e)}}),m={parameters:{layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},docs:{toc:{headingSelector:"h2, h3",title:"On this page"}},options:{storySort:{order:["Introduction","Overview",["Base Reset","File Organization","Selective Imports","Tokens","Themes","Scale Overriding","Addons"],"Tokens","Utilities","Navigation Components","Content Components","Popup Content Components","Visual Components","Components","Recipes"]}}}},c={theme:{name:"Toggle theme mode",description:"Global theme mode for components",defaultValue:"light",toolbar:{icon:"circlehollow",items:["light","dark"],showName:!0,dynamicTitle:!0}}},i=[a];export{i as decorators,m as default,c as globalTypes};
