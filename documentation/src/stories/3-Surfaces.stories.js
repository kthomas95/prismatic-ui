import React from "react";
import { Card, Box, Badge, Grid, Heading } from "prismatic-ui";
export default {
    title: "Surfaces"
};

export const badge = () => (
    <>
        <Heading mb={2}>Badge</Heading>
        <Grid gridGap={2} gridAutoFlow="column" gridAutoColumns="max-content">
            <Badge variantColor="green">Test</Badge>
            <Badge variantColor="red">Test</Badge>
            <Badge variantColor="blue">Test</Badge>
            <Badge variantColor="orange">Test</Badge>
            <Badge variantColor="indigo">Test</Badge>
        </Grid>
    </>
);

export const heading = () => (
    <>
        <Heading as="h1" size={6}>
            H1
        </Heading>
        <Heading as="h2" size={5}>
            H2
        </Heading>
        <Heading as="h3" size={4}>
            H3
        </Heading>
        <Heading as="h4" size={3}>
            H4
        </Heading>
        <Heading as="h5" size={2}>
            H5
        </Heading>
        <Heading as="h6" size={1}>
            H6
        </Heading>
    </>
);

export const card = () => (
    <div>
        <Card maxWidth={256} m={2}>
            <Heading>Card Title</Heading>
            <Box as="p">Card Content</Box>
        </Card>
    </div>
);
