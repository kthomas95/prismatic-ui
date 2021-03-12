import { FiAirplay } from "react-icons/fi";
import { Button, Box } from "../";
import { COLOR_TYPES } from "../system";
export default {
    title: "Inputs/Button",
};

export const basic = () => (
    <>
        {COLOR_TYPES.map((color) => (
            <Button variantColor={color} _css={{ mr: 2 }}>
                {color[0].toUpperCase() + color.slice(1)}
            </Button>
        ))}
        <Box as="hr" _css={{ opacity: 0.3 }} />
        {COLOR_TYPES.map((color) => (
            <Button
                variantColor={color}
                variant="outline"
                leftIcon={FiAirplay}
                _css={{ mr: 2 }}
            >
                {color[0].toUpperCase() + color.slice(1)}
            </Button>
        ))}
        <Box as="hr" _css={{ opacity: 0.3 }} />
        {COLOR_TYPES.map((color) => (
            <Button variantColor={color} variant="ghost" _css={{ mr: 2 }}>
                {color[0].toUpperCase() + color.slice(1)}
            </Button>
        ))}
    </>
);
