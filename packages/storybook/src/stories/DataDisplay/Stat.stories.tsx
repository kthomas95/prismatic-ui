import React from "react";
import { Stat, Flex } from "prismatic-ui/dist";

export default {
    title: "Data Display"
};

export const stat = () => (
    <>
        <h3>Stat</h3>
        <br />
        <Flex alignItems="center">
            <Stat
                label="xG"
                value={0.78}
                bg="warning.main"
                color="warning.text"
                mr={2}
                p={1}
                boxShadow={2}
                borderRadius={2}
            />
            <Stat
                label="Goals"
                value={0.68}
                mr={2}
                p={1}
                borderRadius={2}
                bg="error.main"
                color="error.text"
            />
            <Stat
                label="Assists"
                value={0.42}
                bg="secondary.main"
                color="secondary.text"
                borderRadius={8}
                p={2}
                lineHeight={1.5}
                boxShadow={2}
                fontSize="xl"
            />
        </Flex>
    </>
);
