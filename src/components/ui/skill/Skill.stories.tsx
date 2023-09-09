import type { Meta, StoryObj } from '@storybook/react';
import Skill from './Skill';
import storybookIcon from '/public/storybook.svg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Skill',
  component: Skill,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Skill>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    svgIcon: storybookIcon,
    label: 'Storybook',
  },
};

export const Small: Story = {
  args: {
    svgIcon: storybookIcon,
    label: 'Storybook',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    svgIcon: storybookIcon,
    label: 'Storybook',
    size: 'large',
  },
};

export const Primary: Story = {
  args: {
    svgIcon: storybookIcon,
    label: 'Storybook',
    intent: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    svgIcon: storybookIcon,
    label: 'Storybook',
    intent: 'secondary',
  },
};
