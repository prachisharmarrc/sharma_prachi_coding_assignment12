import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
import { DropdownProps, Option } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' }, // Add control for visibility
  },
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ],
  disabled: false,
  backgroundColor: '',
  visible: true, // Set default visibility
};
