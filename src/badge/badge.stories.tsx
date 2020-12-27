import { Badge } from ".";

export default {
    title: "Inputs/Badge",
};
export const basic = () => (
    <div>
        <Badge
            _css={{
                mr: 2,
                bg: "error.500",
                ":hover": { bg: "error.300" },
            }}
        >
            Standard Badge
        </Badge>
        <Badge variant="ghost">Ghost Badge</Badge>
    </div>
);

basic.storyName = "Test";
