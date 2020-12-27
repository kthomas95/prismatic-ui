import React, { useContext } from "react";
import { ThemeConsumer, Box, Grid, Stat } from "prismatic-ui";
import { colorTypes } from "color-types";

import chroma from "chroma-js";
import { FiAlertOctagon } from "react-icons/fi";

const ThemeCheck = ({ colors, color, bg, mixed }) => {
    const mixedBg = mixed
        ? chroma
            .average(
                [chroma(colors.background.main), chroma(bg.color)],
                "lab",
                [0.58, 0.42]
            )
            .hex()
        : bg.color;

    const contrast = chroma.contrast(mixedBg, color.color);

    return (
        <Box p={1} bg={bg.color} color={color.color}>
            <Box display="inline-block" mr={2}>
                <Stat label="Background" value={bg.label} />
            </Box>
            <Box display="inline-block" ml={2}>
                <Stat label="Color" value={color.label} />
            </Box>
            <Box bg={mixedBg}>
                <Stat
                    label={
                        <>
                            Contrast
                            {contrast < 5 && <Box as={FiAlertOctagon} />}
                        </>
                    }
                    value={contrast.toFixed(2)}
                />
            </Box>
        </Box>
    );
};

const ThemeBox = ({ themeName, colors }) => {
    const themeColor = colors[themeName];
    const ThemeChecks = [
        {
            bg: { label: "main", color: colors[themeName].main },
            color: { label: "text", color: colors[themeName].text },
            mixed: false,
        },
        {
            bg: { label: "alpha.dark", color: colors[themeName].alpha.dark },
            color: { label: "text.main", color: colors.text.main },
            mixed: true,
        },
    ];

    return (
        <Box boxShadow={1} p={0} borderRadius={8} textAlign="center">
            <h4>{themeName[0].toUpperCase() + themeName.slice(1)}</h4>
            {ThemeChecks.map((check) => (
                <ThemeCheck
                    key={check.bg.label + check.color.label}
                    {...check}
                    colors={colors}
                />
            ))}
        </Box>
    );
};

const CheckTheme = ({ theme }: { theme: any }) => (
    <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gridGap={3}
    >
        {colorTypes.filter((color) => theme.colors[color]?.alpha).map((colorType) => (
            <ThemeBox
                themeName={colorType}
                colors={theme.colors}
                key={colorType}
            />
        ))}
    </Grid>
);

export const ThemeStory = () => {
    return (
        <ThemeConsumer>{(theme) => <CheckTheme theme={theme} />}</ThemeConsumer>
    );
};
