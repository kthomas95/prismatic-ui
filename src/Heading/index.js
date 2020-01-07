/** @jsx jsx */
import { jsx } from "@emotion/core";
import Box from "../Box";
import { forwardRef } from "react";

const sizes = {
    6: [5, null, 6],
    5: [4, null, 5],
    4: [3, null, 4],
    3: 3,
    2: 2,
    1: 1
};

const Heading = forwardRef(({ size = 4, ...props }, ref) => (
    <Box
        ref={ref}
        as="h2"
        fontSize={sizes[size]}
        lineHeight={1.5}
        fontWeight={800}
        {...props}
    />
));

Heading.displayName = "Heading";

export default Heading;
