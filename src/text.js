import styled from "@emotion/styled";
import {
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  letterSpacing,
  fontStyle
} from "styled-system";
import Box from "./box";

const Text = styled(Box)`
  ${[fontSize, fontWeight, fontFamily, lineHeight, letterSpacing, fontStyle]}
`;

Text.defaultProps = {
  as: "p"
};

export default Text;
