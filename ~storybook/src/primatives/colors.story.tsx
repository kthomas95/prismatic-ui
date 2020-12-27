import { colorTypes } from "color-types";
import { Box, ColorType, COLOR_TYPES, Grid, Checkbox } from "prismatic-ui";
import { useState } from "react";

const ColorBox = ({
    color,
    compact,
}: {
    color: ColorType;
    compact: boolean;
}) => (
    <Box
        bg="background.500"
        py={2}
        px={3}
        boxShadow="sm"
        borderTopRightRadius={8}
        borderBottomRightRadius={8}
        borderLeft="solid 4px"
        borderColor={`${color}.700`}
        color={`${color}.500`}
    >
        <Box as="h3" ml={1} my={2} letterSpacing="-.025em">
            {color[0].toUpperCase() + color.slice(1)}
        </Box>
        <Grid
            my={2}
            display="inline-grid"
            gridGap={compact ? 0 : 1}
            gridAutoFlow="column"
            gridAutoRows="2em"
            gridAutoColumns="2em"
            borderRadius={compact ? 4 : 0}
            overflow={compact ? "hidden" : "unset"}
        >
            {([100, 300, 500, 700, 900] as const).map((scale) => (
                <Box
                    key={scale}
                    bg={`${color}.${scale}` as const}
                    borderRadius={compact ? 0 : 4}
                    boxShadow={compact ? "unset" : "sm"}
                />
            ))}
        </Grid>
    </Box>
);

const ColorView = () => {
    const [compact, setCompact] = useState(true);
    return (
        <>
            <Checkbox
                mb={2}
                checked={compact}
                variantColor="primary"
                onChange={() => setCompact((prev) => !prev)}
            >
                Compact
            </Checkbox>
            <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} gridGap={3}>
                {COLOR_TYPES.map((color) => (
                    <ColorBox key={color} color={color} compact={compact} />
                ))}
            </Grid>
        </>
    );
};

export const colors = () => {
    return <ColorView />;
};

// Text color contrast with main, light, very dark/light variant of main

// Look more into Linaria/something else. CSS vars fine.

// General UI: Less is more (use on main pkmn site)
