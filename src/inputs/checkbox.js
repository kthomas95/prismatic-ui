import Box from "../layout/box";
import Flex from "../layout/flex";
import styled from "@emotion/styled";
import React, { forwardRef } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FiCheck } from "react-icons/fi";
//const Checkbox = styled(Box)();

const CheckboxContainer = styled(Box)(props => ({
  alignItems: "center",
  color: props.theme.colors["gray"][800],
  "input:checked ~ *": {},
  ".Check-Input": {
    borderRadius: ".25em",
    margin: 3,

    border: `solid 2px ${props.theme.colors["gray"][800]}`
  },
  "input:checked ~ .Check-Input": {
    border: `solid 2px ${props.theme.colors["purple"][600]}`,
    backgroundColor: props.theme.colors["purple"][600]
  }
}));

const Checkbox = forwardRef(({ children, ...props }, ref) => (
  <CheckboxContainer
    display="inline-flex"
    as="label"
    ref={ref}
    htmlFor={props.id}
    css={{ cursor: "pointer", "*": { cursor: "pointer" } }}
  >
    <Box
      as="input"
      type="checkbox"
      opacity={0}
      position="absolute"
      {...props}
    />
    <Box
      className={"Check-Input"}
      width="1em"
      height="1em"
      color="gray.200"
      children={!props.checked || <FiCheck strokeWidth={4} />}
    />
    <Box display="inline-block" ml={1}>
      {children}
    </Box>
  </CheckboxContainer>
));

Checkbox.defaultProps = {};

export default Checkbox;
