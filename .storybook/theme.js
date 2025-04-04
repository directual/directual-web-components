import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: '"Inter, Open Sans", sans-serif',
    fontCode: 'monospace',
  
    brandTitle: 'Directual Design',
    brandImage: 'https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg',
    brandTarget: '_self',
  
    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',
    currentColor: '#058efc',
  
    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,
  
    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',
  
    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#058efc',
    barBg: '#ffffff',
  
    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
});