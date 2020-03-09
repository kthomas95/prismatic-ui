import React, { useContext } from "react";
import { Grid, Box, Flex, Button, ThemeContext } from "prismatic-ui/dist";
import { colorTypes, colorScales } from "../colorTypes";
export default {
    title: "Prismatic-UI",
    id: "0"
};

export const colors = () => {
    return (
        <>
            <h2>Colors</h2>
            <Flex justifyContent="center" fontWeight={900}>
                <Box color="text.dark">Dark Text</Box>
                <Box mx={2} color="text.main">
                    Main Text
                </Box>
                <Box mx={2} color="text.light">
                    Light Text
                </Box>
                <Box color="text.verylight">Very Light Text</Box>
            </Flex>
            <Grid
                p={3}
                gridTemplateColumns={[
                    "125px 125px",
                    "repeat(5, 125px)",
                    "repeat(5, 125px)",
                    "repeat(5, 110px)"
                ]}
                gridAutoRows={[125, 125, 125, 110]}
                justifyContent="center"
                gridGap={3}
            >
                {colorTypes.map(color => (
                    <React.Fragment>
                        {colorScales(color).map(scale => (
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
                                <h4>
                                    {color[0].toUpperCase() + color.slice(1)}
                                </h4>
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
