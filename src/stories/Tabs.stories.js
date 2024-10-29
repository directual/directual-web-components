import React from 'react';
import TabsPane from '../components/fps/layout/tabpane/tabpane';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

export default {
  title: 'FPS/Layout/Tabs',
  component: TabsPane,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'left',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
};

const exampleTabs = [
    { key: '1', title: 'Tab number 1', content: <div>Tab content 1</div>, hidden: false },
    { key: '2', title: 'Tab 2', content: <div>Tab content 2</div>, hidden: false },
    { key: '3', disabled: false, title: 'Tab 3 (disabled)', content: <div>Tab content 3</div> }
]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RegularTabs = {
  args: {
    fpsTabs: false,
    saveTabToURL: true, 
    tabs: exampleTabs, 
    hideSingleTab: true,
    fixedScroll: false,
    locale: 'ENG'
  },
};

export const SimpleTabs = {
    args: {
      fpsTabs: true,
      type: "simple",
      saveTabToURL: true, 
      tabs: exampleTabs, 
      hideSingleTab: true,
      fixedScroll: false,
      locale: 'ENG'
    },
  };

  export const SolidTabs = {
    args: {
      fpsTabs: true,
      type: "solid",
      saveTabToURL: true, 
      tabs: exampleTabs, 
      hideSingleTab: true,
      fixedScroll: false,
      locale: 'ENG'
    },
  };

