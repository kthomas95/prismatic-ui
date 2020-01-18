import React from "react";
import { Card, Message, Badge, Grid } from "prismatic-ui/dist";

export default {
    title: "Data Display"
};

export const card = () => (
    <>
        <Card maxWidth={275}>
            <h3>Card</h3>
        </Card>
    </>
);

export const message = () => (
    <>
        <Message>Don't do that!</Message>
        <br />
        <Message variantColor="secondary">Don't do that!</Message>
        <br />
        <Message variantColor="error">Don't do that!</Message>
        <br />
        <Message variantColor="danger">Don't do that!</Message>
        <br />
        <Message variantColor="warning">Don't do that!</Message>
        <br />
        <Message variantColor="success">Don't do that!</Message>
        <br />
        <Message variantColor="background">Don't do that!</Message>
        <br />
        <Message variantColor="text">Don't do that!</Message>
    </>
);

export const badge = () => (
    <>
        <h3>Badge</h3>
        <br />
        <Grid gridAutoFlow="column" gridAutoColumns="max-content" gridGap={2}>
            <Badge variantColor="primary">Primary</Badge>
            <Badge variantColor="secondary">Primary</Badge>
            <Badge variantColor="error">Primary</Badge>
            <Badge variantColor="warning">Primary</Badge>
            <Badge variantColor="danger">Primary</Badge>
            <Badge variantColor="success">Primary</Badge>
        </Grid>
    </>
);
