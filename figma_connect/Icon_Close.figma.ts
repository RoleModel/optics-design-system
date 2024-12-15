import figma, { html } from '@figma/code-connect/html';

figma.connect('https://www.figma.com/design/1UlVLD3gS4KUTuQSPRG3bl/Optics---Components?node-id=4230-21534&m=dev', {
  props: {
    className: figma.className([
      'material-symbols-outlined',
      figma.enum('Size', {
        '12': 'icon--normal',
        '20': 'icon--large',
        '24': 'icon--x-large'
      })
    ])
  },
  example: ({ className }) => html`<span class=${className}>close</span>`
})
