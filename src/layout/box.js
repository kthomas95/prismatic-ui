import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
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

const SBox = styled.div`
  ${props =>
    props.hoverBg &&
    `
        &:hover {
            background-color: ${props.hoverBg};
        }
    `}
  ${[]}
`;

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
