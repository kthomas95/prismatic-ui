import { create } from '@storybook/theming/create';
import {SiteTheme} from "prismatic-ui";

const {day, night} = SiteTheme.prismatic;


export default create({
  base: day.colors.background.main,

  colorPrimary: day.colors.primary.main,
  colorSecondary: 'deepskyblue',


  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: day.colors.background.main,
  barSelectedColor: day.colors.primary.main,
  barBg: day.colors.text.main,

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'prismatic-ui',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});