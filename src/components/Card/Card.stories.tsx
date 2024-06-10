import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: { control: 'text', defaultValue: 'Card Content' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' }, // Add control for visibility
  },
} as Meta;

const Template: StoryFn<CardProps & { visible: boolean }> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Card Content',
  disabled: false,
  backgroundColor: 'red',
  visible: true, // Set default visibility
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Card Content',
  disabled: true,
  backgroundColor: 'red',
  visible: true, // Set default visibility
};
