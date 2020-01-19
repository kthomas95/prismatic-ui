import React from "react";
import { Grid, Box, Flex } from "prismatic-ui/dist";
export default {
    title: "Prismatic-UI",
    id: "0"
};

const colorTypes = [
    "primary",
    "secondary",
    "background",
    "text",
    "error",
    "danger",
    "warning",
    "success"
];
const colorScales = ["verylight", "light", "main", "dark"];

export const colors = () => (
    <>
        <h2>Colors</h2>
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
                            fontSize={2}
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
                            {color[0].toUpperCase() + color.slice(1)} <br />
                            {scale[0].toUpperCase() + scale.slice(1)}
                        </Flex>
                    ))}
                </React.Fragment>
            ))}
        </Grid>
    </>
);
