import { Meta, StoryFn } from '@storybook/react';
import MyButton from './MyButton';
import { MyButtonProps } from './MyButton.types';

export default {
  title: 'Components/MyButton',
  component: MyButton,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' }, // Add visibility control
  },
} as Meta;

const Template: StoryFn<MyButtonProps> = (args) => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'MyButton',
  disabled: false,
  backgroundColor: '',
  visible: true, // Set default visibility
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'MyButton',
  disabled: true,
  backgroundColor: '',
  visible: true, // Set default visibility
};
