import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text', defaultValue: 'Text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' }, // Add background color control
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
  disabled: false,
  backgroundColor: '', // Add default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  disabled: true,
  backgroundColor: '', // Add default background color
};
