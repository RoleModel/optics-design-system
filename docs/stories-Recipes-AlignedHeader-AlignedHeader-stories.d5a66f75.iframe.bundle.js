"use strict";(self.webpackChunk_rolemodel_optics=self.webpackChunk_rolemodel_optics||[]).push([[9648],{"./src/stories/Recipes/AlignedHeader/AlignedHeader.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Badge:()=>Badge,IconButton:()=>IconButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AlignedHeader_stories});const AlignedHeader_stories={title:"Recipes/Aligned Header",render:({...args})=>(({example="badge"})=>`\n<div class='app-body' style="height: 80rem;"> \x3c!-- This class should be on body. Height is for demo purposed --\x3e\n  <div class='app__content margin-y-lg'>\n    <div class='aligned-header'>\n      <span>This is a really long heading that will probably wrap at some point and that will make aligning something at the end of the text rather difficult.</span>\n      <div class='aligned-header__centered-suffix'>\n        ${"badge"===example?"<div class='badge'>Aligned Badge</div>":"<button class='btn btn--no-border btn--icon btn--pill btn--small'>\n          <span class='material-symbols-outlined'>info</span>\n        </button>"}\n      </span>\n    </div>\n  </div>\n</div>\n`)({...args}),argTypes:{example:{control:{type:"select"},options:["badge","icon-button"]}},parameters:{layout:"fullscreen"}},Badge={args:{example:"badge"}},IconButton={args:{example:"icon-button"}};Badge.parameters={...Badge.parameters,docs:{...Badge.parameters?.docs,source:{originalSource:"{\n  args: {\n    example: 'badge'\n  }\n}",...Badge.parameters?.docs?.source}}},IconButton.parameters={...IconButton.parameters,docs:{...IconButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    example: 'icon-button'\n  }\n}",...IconButton.parameters?.docs?.source}}};const __namedExportsOrder=["Badge","IconButton"]}}]);