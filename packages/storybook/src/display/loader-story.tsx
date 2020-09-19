import React from "react";
import { Loader, Box } from "prismatic-ui";

export const LoaderStory = () => (
    <div>
        <Loader />
        <hr />
        <Box
            bg="primary.main"
            p={1}
            borderRadius={4}
            boxShadow={3}
            display="inline-block"
        >
            <Loader size={["4rem"]} />
        </Box>
    </div>
);

LoaderStory.storyName = "Loader";
