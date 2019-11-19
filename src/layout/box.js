import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  space,
  gridColumn,
  gridRow,
  borderRadius,
  position,
  boxShadow,
  borders,
  flexBasis,
  display,
  overflow,
  layout,
  color,
  style,
  typography,
  flexGrow,
  compose
} from "styled-system";

const transition = style({ prop: "transition", cssProperty: "transition" });
const transform = style({ props: "transform", cssProperty: "transform" });

const SBox = styled.div`
  ${props =>
    props.hoverBg &&
    `
        &:hover {
        }
    `}
  ${[]}
`;

const Box = styled(SBox, { shouldForwardProp })(
  compose(
    space,
    color,
    transition,
    flexGrow,
    transform,
    gridColumn,
    gridRow,
    typography,
    layout,
    borderRadius,
    position,
    boxShadow,
    borders,
    flexBasis,
    display,
    position,
    overflow
  )
);

Box.defaultProps = {
  as: "div"
};

export default Box;
