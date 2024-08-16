import Button from '../components/fps/button/button';
import { icon_options } from '../components/fps/dataentry/input/input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Design System/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    icon: { control: 'select', options: icon_options.map(t => t.key) },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Accent = {
  args: {
    accent: true,
    children: 'button',
    icon: 'babai'
  },
};

export const Regular = {
  args: {
    accent: false,
    children: 'button',
    icon: 'babai',
    tooltip: 'дратути'
  },
};

export const Danger = {
  args: {
    danger: true,
    children: 'button',
    icon: 'delete'
  },
};

export const NoText = {
  args: {
    accent: true,
    icon: 'delete'
  },
};

export const NoTextLoading = {
  args: {
    accent: true,
    loading: true,
    icon: 'delete'
  },
};

