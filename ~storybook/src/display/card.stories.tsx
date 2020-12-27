import React from "react";
import { Card, Box, Grid, Badge } from "prismatic-ui";
import { colorTypes } from "color-types";

const BasicCard: Card = ({ ...props }) => <Card {...props} />;

export const Basic = () => (
    <Grid gridTemplateColumns="repeat(4, 1fr)" gridAutoRows="200px" gridGap={2}>
        {colorTypes.map((color) => (
            <Card
                heading={color[0].toUpperCase() + color.slice(1)}
                key={color}
                children={`An example of a ${color} card.`}
                footer="Footer"
                variantColor={color}
            />
        ))}
    </Grid>
);

export default {
    title: "Display/Card",
};
