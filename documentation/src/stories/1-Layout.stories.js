import React from "react";
import { Box, Flex, Grid } from "prismatic-ui";
export default {
  title: "Layout"
};

const boxProps = { p: 4, m: 2, bg: "gray.200", boxShadow: 2 };

const boxItems = (
  <>
    <Box>Item 1</Box>
    <Box>Item 2</Box>
    <Box>Item 3</Box>
  </>
);

export const box = () => (
  <>
    <h2>Box</h2>
    <Box {...boxProps}>Box</Box>
  </>
);

export const flex = () => (
  <>
    <h2>Flex</h2>
    <Flex {...boxProps} justifyContent="space-around">
      {boxItems}
    </Flex>
  </>
);

export const grid = () => (
  <>
    <h2>Grid</h2>
    <Grid {...boxProps} gridTemplateColumns="2fr 1fr 1fr">
      {boxItems}
    </Grid>
  </>
);
