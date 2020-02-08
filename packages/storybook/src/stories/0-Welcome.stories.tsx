import React, { useContext } from "react";
import { Grid, Box, Flex, Button, ThemeContext } from "prismatic-ui/dist";
export default {
    title: "Prismatic-UI",
    id: "0"
};

export const colorTypes = [
    "primary",
    "secondary",
    "background",
    "text",
    "error",
    "danger",
    "warning",
    "success"
];
export const colorScales = ["verylight", "light", "main", "dark"];

export const colors = () => {
    return (
        <>
            <h2>Colors</h2>
            <Flex justifyContent="center" fontWeight={500}>
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
                    "repeat(4, 125px)",
                    "repeat(4, 125px)",
                    "repeat(8, 110px)"
                ]}
                gridAutoRows={[125, 125, 125, 110]}
                justifyContent="center"
                gridGap={3}
            >
                {colorTypes.map(color => (
                    <React.Fragment>
                        {colorScales.map(scale => (
                            <Flex
                                bg={`${color}.${scale}`}
                                p={3}
                                justifyContent="center"
                                alignItems="center"
                                borderRadius={4}
                                flexDirection="column"
                                fontSize={"base"}
                                boxShadow={3}
                                textAlign="center"
                                color={
                                    color === "text"
                                        ? "background.main"
                                        : color === "background"
                                        ? "text.main"
                                        : `${color}.text`
                                }
                            >
                                <h5>
                                    {color[0].toUpperCase() + color.slice(1)}
                                </h5>
                                <br />
                                <em>
                                    {scale[0].toUpperCase() + scale.slice(1)}
                                </em>
                            </Flex>
                        ))}
                    </React.Fragment>
                ))}
            </Grid>
        </>
    );
};
