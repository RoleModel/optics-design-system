import{j as e,M as a,C as l}from"./index-D8-uotrA.js";import{useMDXComponents as s}from"./index-C1eAujEz.js";import{C as t,I as c}from"./ConfirmDialog.stories-CbZBtP9p.js";import{c as d}from"./sourceCodeLink-Chh3FteF.js";import{c as i}from"./Alert-CAEs4394.js";import"./iframe-BuSILFPd.js";import"./index-BiL3ubqk.js";import"./index-DrFu-skq.js";import"./Button-B21kpIpO.js";import"./Icon-uqCTS4Mm.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:t}),`
`,e.jsx(o.h1,{id:"confirm-dialog",children:"Confirm Dialog"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:d({link:"components/confirm-dialog.css"}).outerHTML}}),`
`,e.jsxs(o.p,{children:["The Confirm Dialog classes can be used for styling a custom alert or confirm dialog. This can be used alongside ",e.jsx(o.a,{href:"https://github.com/RoleModel/turbo-confirm",rel:"nofollow",children:"Turbo Confirm"})," to achieve custom Confirm Dialogs using Turbo"]}),`
`,e.jsx(o.h3,{id:"selective-imports",children:"Selective Imports"}),`
`,e.jsxs(o.p,{children:["Confirm Dialog can be used as a standalone component, however, it does have a few dependencies. To see a full dependency list, see ",e.jsx(o.a,{href:"?path=/docs/overview-selective-imports--docs#dependencies",children:"Dependency Graph"})]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`/* Depends on */
@import '@rolemodel/optics/dist/css/core/fonts';
@import '@rolemodel/optics/dist/css/core/tokens';
@import '@rolemodel/optics/dist/css/core/base';

/* Component */
@import '@rolemodel/optics/dist/css/components/confirm-dialog';
`})}),`
`,e.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(o.h3,{id:"default",children:"Default"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".confirm-dialog-wrapper"})," Wraps the entire dialog."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".confirm-dialog-wrapper--active"})," Allows the dialog to live on your page always, but only show if the class is present."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".confirm-dialog-wrapper__backdrop"})," Provides the dark background to help focus on the dialog."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:".confirm-dialog"})," Provides the actual Dialog styling which is constructed similar to the card component."]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".confirm-dialog__header"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".confirm-dialog__body"})}),`
`,e.jsx(o.li,{children:e.jsx(o.code,{children:".confirm-dialog__footer"})}),`
`]}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(o.h2,{id:"confirm-dialog-api",children:"Confirm Dialog API"}),`
`,e.jsx(o.p,{children:"Styles are built on CSS variables scoped to the confirm dialog."}),`
`,e.jsx(o.p,{children:"Here are the variables that can be customized:"}),`
`,`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`--_op-confirm-dialog-width
`})}),`
`,`
`,e.jsx(o.h2,{id:"customizing-confirm-dialog-styles",children:"Customizing Confirm Dialog styles"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to customize the style of the confirm dialog for your project."}).outerHTML}}),`
`,e.jsxs(o.p,{children:["The classes are structured using the ",e.jsx(o.a,{href:"https://getbem.com/naming",rel:"nofollow",children:"BEM methodology"}),"."]}),`
`,e.jsxs(o.p,{children:["This allows us to define core styles on a main ",e.jsx(o.a,{href:"https://getbem.com/naming/#block",rel:"nofollow",children:"block"})," class, and use ",e.jsx(o.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifiers"})," to encapsulate variant styles. You can modify all dialogs behavior by overriding the ",e.jsx(o.code,{children:".confirm-dialog-wrapper"})," and ",e.jsx(o.code,{children:".confirm-dialog"})," selectors and setting any properties:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.confirm-dialog-wrapper {
  z-index: 200;
}

.confirm-dialog {
  background-color: red;
}
`})}),`
`,e.jsx(o.h2,{id:"new-confirm-dialog-variations",children:"New Confirm Dialog Variations"}),`
`,e.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"Important!",description:"These patterns represent how to create new variations of the confirm dialog for your project."}).outerHTML}}),`
`,e.jsxs(o.p,{children:["Your application may need a variation. To add one, just follow this template. Note the double hyphen, indicating that this is a ",e.jsx(o.a,{href:"https://getbem.com/naming/#modifier",rel:"nofollow",children:"modifier"}),":"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`.confirm-dialog-wrapper--{name} {
  .confirm-dialog-wrapper__backdrop {
  }

  &.confirm-dialog-wrapper--active {
    .confirm-dialog-wrapper__backdrop {
    }
  }
}

.confirm-dialog--{name} {
  .confirm-dialog__header,
  .confirm-dialog__body,
  .confirm-dialog__footer {
    padding:
  }

  .confirm-dialog__header {
    font-size:
    font-weight:
  }

  .confirm-dialog__body {
    box-shadow:
  }

  .confirm-dialog__footer {
    display:
    justify-content:
  }
}
`})})]})}function b(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{b as default};
