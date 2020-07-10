import React from "react";
import { Badge, Grid } from "prismatic-ui/dist";

export default {
    title: "Data Display",
    component: Badge
};

export const badge = () => (
    <>
        <h3>Badge</h3>
        <br />
        <Grid
            gridAutoFlow="column"
            gridAutoColumns="max-content"
            alignItems="center"
            gridGap={2}
        >
            <Badge variantColor="primary">
                Primary <br /> Multiline
            </Badge>
            <Badge variantColor="secondary">Secondary</Badge>
            <Badge variantColor="error">Error</Badge>
            <Badge variantColor="warning">Warning</Badge>
            <Badge variantColor="danger">Danger</Badge>
            <Badge variantColor="success" bg="success.verylight">
                Success
            </Badge>
            <Badge variantColor="success" bg="success.dark">
                Dark Success
            </Badge>
        </Grid>
    </>
);
