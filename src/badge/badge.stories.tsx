import { Badge } from ".";
import { COLOR_TYPES } from "..";
import { Box } from "../";

export default {
    title: "Inputs/Badge",
};
export const basic = () => (
    <div>
        {COLOR_TYPES.map((color) => (
            <Badge variantColor={color} _css={{ mr: 2 }}>
                {color[0].toUpperCase() + color.slice(1)}
            </Badge>
        ))}
        <Box as="hr" _css={{ opacity: 0.3 }} />
        {COLOR_TYPES.map((color) => (
            <Badge variantColor={color} variant="ghost" _css={{ mr: 2 }}>
                {color[0].toUpperCase() + color.slice(1)}
            </Badge>
        ))}
    </div>
);

basic.storyName = "Test";
