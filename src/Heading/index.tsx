/** @jsx jsx */
import { jsx } from "@emotion/core";
import Box from "../Box";
import { forwardRef } from "react";

const sizes = {
    1: [5, null, 6],
    2: [4, null, 5],
    3: [3, null, 4],
    4: 3,
    5: 2,
    6: 1
};

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = forwardRef(
    ({ level, ...props }, ref) => (
        <Box
            ref={ref}
            as={`h${level}`}
            fontSize={sizes[level]}
            lineHeight={1.5}
            fontWeight={800}
            {...props}
        />
    )
);

Heading.displayName = "Heading";

export default Heading;
