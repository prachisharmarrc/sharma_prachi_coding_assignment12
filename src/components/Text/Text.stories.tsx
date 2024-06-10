import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text', defaultValue: 'Text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' }, // Add control for visibility
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
  disabled: false,
  backgroundColor: '',
  visible: true, // Set default visibility
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  disabled: true,
  backgroundColor: '',
  visible: true, // Set default visibility
};
