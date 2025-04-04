import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming'
import DirectualTheme from './theme'

addons.setConfig({
  theme: DirectualTheme
});