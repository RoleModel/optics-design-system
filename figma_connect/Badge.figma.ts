import figma, { html } from '@figma/code-connect/html';

figma.connect('https://www.figma.com/design/1UlVLD3gS4KUTuQSPRG3bl/Optics---Components?m=auto&node-id=2085-9979&t=U2xvAaJrolqBsTgw-1', {
  props: {
    className: figma.className([
      figma.enum('State', {
        'Default': 'badge',
        'Warning': 'badge-warning',
        'Danger': 'badge-danger',
        'Primary': 'badge-primary',
        'Info': 'badge-info',
        'Notice': 'badge-notice'
      }),
      figma.boolean('Pill', { true: 'badge--pill', false: '' }),
      figma.boolean('On Button', { true: 'badge--notification-right', false: '' })
    ]),
    label: figma.string('Count Label'),
    showStartIcon: figma.boolean('Show Start Icon'),
    startIcon: figma.instance('Start Icon'),
    showEndIcon: figma.boolean('Show End Icon'),
    endIcon: figma.instance('End Icon'),
  },
  example: (props) => html`\
<div class=${props.className}>
  ${props.startIcon}
  ${props.label}
  ${props.endIcon}
</div>
`
})
