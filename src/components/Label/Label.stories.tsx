import { Meta, StoryFn } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text', defaultValue: 'Label' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Add background color control
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  disabled: false,
  backgroundColor: '', // Add default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Label',
  disabled: true,
  backgroundColor: '', // Add default background color
};
