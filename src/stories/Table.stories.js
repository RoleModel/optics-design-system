import { createTable } from './Table/Table.js';
import TableDocs from './Table/Table.mdx';


export default {
  title: 'Components/Table',
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['default', 'primary', 'danger'],
    },
    layout: {
      control: { type: 'select' },
      options: ['auto', 'fixed'],
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
    },
    striped: {
      control: { type: 'select' },
      options: ['off', 'even', 'odd'],
    },
  },
  parameters: {
    docs: {
      page: TableDocs
    },
  },
};

const Template = ({ ...args }) => {
  return createTable({ ...args });
};

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  style: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  style: 'danger',
};

export const FixedLayout = Template.bind({});
FixedLayout.args = {
  layout: 'fixed',
};

export const ComfortableDensity = Template.bind({});
ComfortableDensity.args = {
  density: 'comfortable',
};

export const CompactDensity = Template.bind({});
CompactDensity.args = {
  density: 'compact',
};

export const StripedEven = Template.bind({});
StripedEven.args = {
  striped: 'even',
};

export const StripedOdd = Template.bind({});
StripedOdd.args = {
  striped: 'odd',
};
