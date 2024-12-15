import figma, { html } from '@figma/code-connect/html';

figma.connect('https://www.figma.com/design/1UlVLD3gS4KUTuQSPRG3bl/Optics---Components?m=auto&node-id=1578-7127&t=U2xvAaJrolqBsTgw-1', {
  props: {
    className: figma.className([
      'switch',
      figma.enum('Size', {
        'Large': 'switch--large',
        'Small': 'switch--small'
      })
    ]),
    disabled: figma.boolean('Disabled'),
    selected: figma.boolean('Selected')
  },
  example: ({ className, disabled, selected }) => html`\
<div class=${className}>
  <input
    type="checkbox"
    id="switch-demo"
    disabled=${disabled}
    checked=${selected}
  >
  <label for="switch-demo"></label>
</div>
`
})
