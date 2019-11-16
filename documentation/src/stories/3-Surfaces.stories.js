import React from "react";
import { Card, Box } from "prismatic-ui";
export default {
  title: "Surfaces"
};

export const card = () => (
  <div>
    <Card maxWidth={256} m={2}>
      <h2>Card Title</h2>
      <Box as="p">Card Content</Box>
    </Card>
  </div>
);
