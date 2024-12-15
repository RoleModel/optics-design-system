import figma, { html } from '@figma/code-connect/html';

figma.connect('https://www.figma.com/design/1UlVLD3gS4KUTuQSPRG3bl/Optics---Components?m=auto&node-id=7529-7826&t=ZPXbcTbeL1e5Hs7x-1', {
  props: {
    className: figma.className([
      'divider',
      figma.enum('Size', {
        '1px': 'divider--small',
        '2px': 'divider--medium',
        '4px': 'divider--large'
      }),
      figma.enum('Spacing', {
        '0px': 'divider--spacing-none',
        '4px': 'divider--spacing-small',
        '8px': 'divider--spacing-medium',
        '16px': 'divider--spacing-large'
      })
    ])
  },
  example: ({ className }) => html`<div class=${className}></div>`
})
