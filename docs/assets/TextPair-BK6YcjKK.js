import{j as e}from"./jsx-runtime-DllfVXhu.js";import{u as a}from"./index-C_ydmNyw.js";import{M as l,C as s,d}from"./index-aM1em-Hc.js";import{T as c,D as n,I as p,a as h,S as x}from"./TextPair.stories-Bj6wGdD2.js";import{c as m}from"./sourceCodeLink-Chh3FteF.js";import{c as r}from"./Alert-93ao7bSE.js";import"./iframe-B0Zsr26N.js";import"../sb-preview/runtime.js";import"./index-B5rfWaSj.js";import"./index-DrFu-skq.js";import"./Button-CoyIamir.js";import"./Icon-D9QrNi_D.js";function o(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(t.h1,{id:"text-pair",children:"Text Pair"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:m({link:"components/text_pair.scss"}).outerHTML}}),`
`,e.jsx(t.p,{children:"The text pair component is used to display a title and subtitle together. It can also be used to group other elements within it, though should generally be reserved for text."}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(s,{of:n}),`
`,e.jsx(d,{of:n}),`
`,e.jsx(t.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(t.p,{children:["Text Pair can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(t.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`// Depends on
@import '@rolemodel/optics/dist/scss/core/tokens';
@import '@rolemodel/optics/dist/scss/core/base';

// Component
@import '@rolemodel/optics/dist/scss/components/text_pair';
`})}),`
`,e.jsx(t.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".text-pair"})," should be used on a div. Within it, ",e.jsx(t.code,{children:".text-pair__title"})," and ",e.jsx(t.code,{children:".text-pair__subtitle"})," on spans can be used to display the title and subtitle."]}),`
`,e.jsx(s,{of:n}),`
`,e.jsx(t.h3,{id:"inline",children:"Inline"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".text-pair--inline"})," can be added to display the title and subtitle horizontally aligned. This is useful for displaying a key, value pair."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(t.h3,{id:"title-size",children:"Title Size"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".text-pair__title--small"}),", ",e.jsx(t.code,{children:".text-pair__title--medium"}),", ",e.jsx(t.code,{children:".text-pair__title--large"}),", (with medium being the default) modify the font size of the title text."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h3,{id:"subtitle-size",children:"Subtitle Size"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:".text-pair__subtitle--small"}),", ",e.jsx(t.code,{children:".text-pair__subtitle--medium"}),", ",e.jsx(t.code,{children:".text-pair__subtitle--large"}),", (with small being the default) modify the font size of the subtitle text."]}),`
`,e.jsx(t.p,{children:"Description of subtitle size example"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(t.h2,{id:"text-pair-api",children:"Text Pair API"}),`
`,e.jsx(t.p,{children:"Styles are built on css variables scoped to the text pair."}),`
`,e.jsx(t.p,{children:"Here are the variables that can be customized."}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`--_op-text-pair-font-size-small:
--_op-text-pair-font-size-medium:
--_op-text-pair-font-size-large:
`})}),`
`,`
`,e.jsx(t.h2,{id:"customizing-text-pair-styles",children:"Customizing Text Pair styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to customize the style of the text pair for your project."}).outerHTML}}),`
`,e.jsxs(t.p,{children:["The text pair classes are built on a ",e.jsx(t.a,{href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",rel:"nofollow",children:"sass placeholder selector"})]}),`
`,e.jsxs(t.p,{children:["This allows multiple classes to share the same behavior. You can modify all textpair behavior by overriding the ",e.jsx(t.code,{children:"%text-pair-global"})," placeholder selector and setting any properties:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`%text-pair-global {
  gap: var(--op-space-x-large);
}
`})}),`
`,e.jsx(t.h2,{id:"new-text-pair-variations",children:"New Text Pair Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:r({title:"Important!",description:"These patterns represent how to create new variations of the Text Pair for your project."}).outerHTML}}),`
`,e.jsx(t.p,{children:"Your application may need a custom text pair. To add one, just follow this template:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.text-pair-{name} {
  @extend %text-pair-global;

  gap:
}
`})})]})}function M(i={}){const{wrapper:t}={...a(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{M as default};
