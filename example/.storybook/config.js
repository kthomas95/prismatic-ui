import { configure, addDecorator } from "@storybook/react";
import React from "react";
import { SiteTheme as theme, ThemeProvider } from "prismatic-ui";
// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ThemeDecorator);
