import { Card } from ".";

export default { title: "Layout/Card" };

export const basic = () => (
    <Card _css={{ maxWidth: 350 }}>
        <h2>Heading</h2>
        <p>Content</p>
    </Card>
);
