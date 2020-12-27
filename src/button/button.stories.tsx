import { Button } from ".";

export default {
    title: "Inputs/Button",
};

export const basic = () => (
    <>
        <Button variantColor="success" _css={{ mr: 2 }}>
            Click Me
        </Button>
        <Button variantColor="error" variant="outline" _css={{ mr: 2 }}>
            Click Me
        </Button>
        <Button variantColor="primary" variant="ghost">
            Click Me
        </Button>
    </>
);
