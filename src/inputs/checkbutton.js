import Button from "./button";
import Box from "../layout/box";
import React, { forwardRef } from "react";

const CheckButton = forwardRef(({ children, ref, ...props }) => (
  <React.Fragment>
    <Button
      {...{
        colorOffset: props.checked ? 2 : -2,
        ...props,
        colors: props.checked ? props.colors : "red",
        display: "inline-flex"
      }}
      as="label"
      display="inline-flex"
    >
      <Box as="input" type="checkbox" position="absolute" opacity={0} />
      {children}
    </Button>
  </React.Fragment>
));

export default CheckButton;
