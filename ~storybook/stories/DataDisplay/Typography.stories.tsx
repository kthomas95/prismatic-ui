import React from "react";
import { Heading } from "prismatic-ui/dist";

export default {
    title: "Data Display/Typography"
};

export const heading = () => (
    <>
        {[1, 2, 3, 4, 5, 6].map(level => (
            <Heading as={`h${level}`}>H{level}</Heading>
        ))}
    </>
);
