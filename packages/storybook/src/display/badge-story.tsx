import React from "react";
import { Grid, Badge } from "prismatic-ui";

export const BadgeStory = () => (
    <div>
        <h3>Badge</h3>
        <br />
        <Grid
            gridTemplateColumns="repeat(auto-fill, minmax(75px, 1fr))"
            alignItems="center"
            gridGap={2}
        >
            <Badge variantColor="primary">Primary</Badge>
            <Badge variantColor="secondary">Secondary</Badge>
            <Badge variantColor="error">Error</Badge>
            <Badge variantColor="warning">Warning</Badge>
            <Badge variantColor="danger">Danger</Badge>
            <Badge variantColor="success">Success</Badge>
            <Badge variantColor="text">Text</Badge>
            <Badge variantColor="background">Background</Badge>
        </Grid>
    </div>
);

BadgeStory.storyName = "Badge";
