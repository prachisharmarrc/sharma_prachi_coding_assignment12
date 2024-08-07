import { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text', defaultValue: 'Card Title' },
    description: { control: 'text', defaultValue: 'This is a card description.' },
    imageUrl: { control: 'text', defaultValue: 'https://via.placeholder.com/150' },
    visible: { control: 'boolean', defaultValue: true },
    disabled: { control: 'boolean', defaultValue: false },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a card description.',
    imageUrl: 'https://via.placeholder.com/150',
    visible: true,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-container');

    // Check visibility and that the card is not disabled (no opacity effect)
    await expect(card).toBeVisible();
    await expect(card).toHaveStyle('opacity: 1');
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    description: 'This card is disabled.',
    imageUrl: 'https://via.placeholder.com/150',
    visible: true,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-container');

    // Check if the card has reduced opacity and disabled pointer events
    await expect(card).toHaveStyle({ opacity: '0.5', pointerEvents: 'none' });
  },
};

export const Invisible: Story = {
  args: {
    title: 'Invisible Card',
    description: 'You cannot see this card.',
    imageUrl: 'https://via.placeholder.com/150',
    visible: false,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.queryByTestId('card-container');

    // Ensure that the card is not rendered in the document
    await expect(card).not.toBeInTheDocument();
  },
};

export const Hover: Story = {
  args: {
    title: 'Hover Card',
    description: 'Hover over this card to see the effect.',
    imageUrl: 'https://via.placeholder.com/150',
    visible: true,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-container');

    // Simulate a hover event on the card
    await userEvent.hover(card);

    // Additional checks can be added here if needed, for example:
    // await expect(card).toHaveStyle('transform: scale(1.05)');
  },
};
