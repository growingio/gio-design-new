import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { differenceInDays, getTime, startOfToday, subDays, subMonths } from 'date-fns';
import Docs from './PastTimePicker.mdx';
import { PastTimePicker, PastTimePickerProps } from '../index';

import '../style';

export default {
  title: 'Upgraded/PastTimePicker',
  component: PastTimePicker,
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as Meta;

const Template: Story<PastTimePickerProps> = (args) => (
  <PastTimePicker onSelect={action('selected value:')} placeholder="时间范围" {...args} />
);

export const Quick = Template.bind({});
Quick.args = {
  value: 'day:8,1',
};

export const Since = Template.bind({});
Since.args = {
  value: `since:${getTime(subDays(startOfToday(), 7))}`,
};

export const Relative = Template.bind({});
Relative.args = {
  value: 'day:9,1',
};

export const Absolute = Template.bind({});
Absolute.args = {
  value: `abs:${getTime(subMonths(startOfToday(), 1))},${getTime(startOfToday())}`,
};

export const Experiment = Template.bind({});
Experiment.args = {
  experimental: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'day:2,1',
};

export const Modes = Template.bind({});
Modes.args = {
  modes: ['since', 'relative'],
};

export const DisabledDate = Template.bind({});
DisabledDate.args = {
  disabledDate: (current: Date) => differenceInDays(startOfToday(), current) > 31,
};
