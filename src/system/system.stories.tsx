import { Grid, Box } from "../";

export default {
    title: "Prismatic-UI",
};

export const typography = () => (
    <Grid _css={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        <Box>
            <h1>Level 1 Heading</h1>
            <h2>Level 2 Heading</h2>
            <p>Lorem Ipsum</p>
            <h3>Level 3 Heading</h3>
            <h4>Level 4 Heading</h4>
        </Box>
        <Box>
            <Box
                _css={{
                    width: 300,
                    height: 200,
                    bg: "background.500",
                    borderRadius: 4,
                    boxShadow: "sm",
                }}
            />
            <Box textStyle="caption" _css={{ p: 2 }}>
                Caption
            </Box>
        </Box>
    </Grid>
);

export const colors = () => <div></div>;
