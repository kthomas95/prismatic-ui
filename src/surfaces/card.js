import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import Flex from "../layout/flex";

export const Card = styled(Flex)();

Card.defaultProps = {
  boxShadow: 2,
  borderRadius: 1,
  p: 2,
  alignItems: "center",
  flexDirection: "column"
};
