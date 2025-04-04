import React from 'react';
import Hint from '../components/fps/hint/hint';
import { icon_options } from  '../components/fps/dataentry/input/input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Design System/Hint',
  component: Hint,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // icon: { control: 'select', options: icon_options.map(t => t.key) },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    ok: false,
    error: false,
    children: <p>hello <b>there</b></p>,
    title: 'Hint',
    closable: true,
    onClose: ()=> alert("close Hint")
  },
};

export const Success = {
  args: {
    ok: true,
    error: false,
    children: <p>hello <b>there</b></p>,
    title: 'Hint'
  },
};

export const Error = {
  args: {
    ok: false,
    error: true,
    children: <p>hello <b>there</b></p>,
    title: 'Hint'
  },
};

