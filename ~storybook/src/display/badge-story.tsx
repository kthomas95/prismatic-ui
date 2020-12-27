import React from "react";
import { Grid, Badge } from "prismatic-ui";
import { colorTypes } from "color-types";

export const BadgeStory = () => (
    <div>
        <h3>Badge</h3>
        <br />
        <Grid
            gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))"
            alignItems="center"
            gridGap={2}
        >
            {colorTypes.map((color) => (
                <Badge key={color} variantColor={color}>
                    Standard
                </Badge>
            ))}
        </Grid>
        <hr />
        <Grid
            gridTemplateColumns="repeat(auto-fill, minmax(100px, 1fr))"
            alignItems="center"
            gridGap={2}
        >
            {colorTypes.map((color) => (
                <Badge key={color} variantColor={color} variant="ghost">
                    Ghost
                </Badge>
            ))}
        </Grid>
    </div>
);

BadgeStory.storyName = "Badge";
