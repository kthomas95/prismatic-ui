import React, { useContext } from "react";
import { Grid, Box, Flex, Button, ThemeContext, Text } from "prismatic-ui";
import { colorTypes, colorScales } from "../src/colorTypes";
export default {
    title: "Prismatic-UI",
    id: "0",
};

export const colors = () => {
    return (
        <>
            <h2>Colors</h2>
            <Flex justifyContent="center" fontWeight={800}>
                <Text color="text.dark">Dark Text</Text>
                <Text mx={2} color="text.main">
                    Main Text
                </Text>
                <Text mx={2} color="text.light">
                    Light Text
                </Text>
                <Box color="text.verylight">Very Light Text</Box>
            </Flex>
            <Grid
                p={3}
                gridTemplateColumns={[
                    "125px 125px",
                    "repeat(5, 125px)",
                    "repeat(5, 125px)",
                    "repeat(5, 110px)",
                ]}
                gridAutoRows={[125, 125, 125, 110]}
                justifyContent="center"
                gridGap={3}
            >
                {colorTypes.map((color) => (
                    <React.Fragment>
                        {colorScales(color).map((scale) => (
                            <Flex
                                p={3}
                                justifyContent="center"
                                alignItems="center"
                                borderRadius={4}
                                flexDirection="column"
                                fontSize={"base"}
                                boxShadow={3}
                                textAlign="center"
                                {...scale}
                            >
                                <h3>
                                    {color[0].toUpperCase() + color.slice(1)}
                                </h3>
                                {/* <br /> */}
                                {/* <em>{"scale"}</em> */}
                            </Flex>
                        ))}
                    </React.Fragment>
                ))}
            </Grid>
        </>
    );
};

const TextStyles = [
    { variant: "h1", name: "Heading 1" },
    { variant: "h2", name: "Heading 2" },
    { variant: "h3", name: "Heading 3" },
    { variant: "h4", name: "Heading 4" },
    { variant: "h5", name: "Heading 5" },
    { variant: "h6", name: "Heading 6" },
    { variant: "base", name: "Base" },
    { variant: "sm", name: "Small" },
    { variant: "xs", name: "Extra Small" },
    { variant: "2xs", name: "2x Extra Small" },
] as const;

const TextVariants: { [K in TextVariant]: any } = {
    "3xs": { fontSize: 8 },
    "2xs": { fontSize: 10 },
    xs: { fontSize: 12 },
    sm: { fontSize: 14 },
    base: {
        fontSize: 16,
    },
    h6: { as: "h6", fontSize: 12 },
    h5: { as: "h5", fontSize: 14 },
    h4: { as: "h4", fontSize: 16 },
    h3: { as: "h3", fontSize: 18 },
    h2: { as: "h2", fontSize: 24 },
    h1: { as: "h1", fontSize: 32 },
};

const getTracking = (fontSize: number) =>
    `${Number(-0.0223 + 0.185 * Math.pow(2.718, -0.1745 * fontSize)).toFixed(
        3
    )}em`;

export const text = () => (
    <>
        <Grid
            // gridTemplateColumns="250px max-content max-content"
            py={3}
            maxWidth={500}
            m="auto"
            // justifyContent="center"
            textAlign="left"
            gridAutoFlow="dense"
            alignItems="center"
            // gridRowGap={2}
            gridColumnGap={5}
            justifyItems="stretch"
        >
            {TextStyles.map((variant) => (
                <Text
                    // mb={2}
                    // mt={0}
                    // gridColumn={1}
                    key={variant.variant}
                    variant={variant.variant}
                >
                    {variant.name}
                </Text>
            ))}
        </Grid>
        <Text
            as="p"
            variant="xss"
            maxWidth={300}
            textAlign="justify"
            bg="primary.lightalpha"
            boxShadow={0}
            mx="auto"
            my={4}
            p={3}
            borderRadius={4}
            fontWeight={600}
            italic
        >
            Such a riot of sea and wind strews the whole extent of beach with
            whatever has been lost or thrown overboard, or torn out of sunken
            ships. Many a man has made a good week’s work in a single day by
            what he has found while walking along the Beach when the surf was
            down.
        </Text>
    </>
);
