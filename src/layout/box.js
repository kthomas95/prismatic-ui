import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import {
  space,
  borderRadius,
  shadow,
  position,
  border,
  display,
  overflow,
  layout,
  color,
  typography,
  compose
} from "styled-system";

const shouldForwardProp = prop =>
  isPropValid(prop) &&
  prop !== "color" &&
  ["activeStyle", "activeClassName"].includes(prop);

const Box = styled("div", { shouldForwardProp })(
  compose(
    space,
    color,
    typography,
    layout,
    borderRadius,
    position,
    shadow,
    border,
    display,
    position,
    overflow
  ),
  props => ({ "&:hover": { backgroundColor: "red.100" } })
);

// Box.defaultProps = {
//   as: "div"
// };

export default Box;
