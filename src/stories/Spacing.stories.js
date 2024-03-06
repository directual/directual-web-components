import Spacing from  '../components/fps/dataentry/spacing/spacing'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const exampleSpacing = {
  marginTop: 24,
  marginRight: 24,
  marginBottom: 24,
  marginLeft: 24,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
}

export default {
  title: 'FPS/Design System/Spacing',
  component: Spacing,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: { control: 'select', options: ['all', 'horisontal', 'vertical'] },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Regular = {
  args: {
    defaultValue: exampleSpacing,
    label: "Spacing, px.",
    isCentered: false,
    type: 'all'
  },
};

export const Centered = {
  args: {
    defaultValue: exampleSpacing,
    label: "Spacing, px.",
    type: 'all'
  },
};

export const Vertical = {
  args: {
    defaultValue: 10,
    label: "Spacing, px.",
    type: 'vertical'
  },
};


export const Horizontal = {
  args: {
    defaultValue: 10,
    label: "Spacing, px.",
    type: 'horisontal'
  },
};
