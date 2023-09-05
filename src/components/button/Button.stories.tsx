import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    intent: 'primary',
    label: 'Contact Me',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    label: 'Contact Me',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Contact Me',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Contact Me',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Contact Me',
  },
};
