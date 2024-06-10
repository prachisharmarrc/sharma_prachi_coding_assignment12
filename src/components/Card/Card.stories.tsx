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
  },
} as Meta;

// Define an intersection type including backgroundColor
type CardStoryProps = CardProps & { backgroundColor?: string };

const Template: StoryFn<CardStoryProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Card Content',
  disabled: false,
  backgroundColor: 'red', // Use transparent as default background color
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Card Content',
  disabled: true,
  backgroundColor: 'red', // Use transparent as default background color
};
