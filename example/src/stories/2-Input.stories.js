import React from "react";
import { action } from "@storybook/addon-actions";
import { Button, Grid, Box } from "prismatic-ui";
import { addDecorator } from "@storybook/react";

export default {
  title: "Input"
};

const offsets = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

export const button = () => (
  <>
    <h3>Solid Buttons</h3>
    <Grid gridTemplateColumns="repeat(8, 1fr)" gridGap={2}>
      {offsets.reverse().map(offset => (
        <>
          <strong>Offset: {offset}</strong>
          {colors.map(color => (
            <Button key={color} colors={color} colorOffset={offset}>
              Solid Button
            </Button>
          ))}
        </>
      ))}
    </Grid>
    <h3>Outline Buttons</h3>
    <Grid gridAutoFlow="column" gridGap={2}>
      {colors.map(color => (
        <Button key={color} colors={color} outline>
          Outline Button
        </Button>
      ))}
    </Grid>
  </>
);
