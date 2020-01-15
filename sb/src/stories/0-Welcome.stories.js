import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Box } from "prismatic-ui";

export default {
  title: "Welcome"
};

export const box = () => (
  <Box p={4} color="red.500" bg="blue.300">
    test
  </Box>
);
