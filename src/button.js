import styled from "@emotion/styled";
import Flex from "./flex";
import shouldForwardProp from "@styled-system/should-forward-prop";

const defaultColors = ["gray", "gray", "gray"];

const solidButton = ({ colorOffset, theme, colors }) => ({
  backgroundColor: theme.colors[colors][500 + (colorOffset % 5) * 100],
  color: theme.colors[colors][colorOffset > -1 ? 100 : 900],
  "&:hover": {
    backgroundColor:
      theme.colors[colors][
        colorOffset % 5 > -4 ? 400 + (colorOffset % 5) * 100 : 200
      ]
  }
});

const outlineButton = ({ theme, colors, colorOffset }) => ({
  color: theme.colors[colors][500 - (colorOffset % 5) * 100],
  border: `solid 1px ${theme.colors[colors][500]}`,
  backgroundColor: "transparent"
});

const Button = styled(Flex, { shouldForwardProp })(
  {
    fontWeight: 800
  },
  props => (props.outline ? outlineButton(props) : solidButton(props)),
  props => ({
    "&:hover": { boxShadow: props.theme.shadows[1] },
    "&:active": {
      boxShadow: props.theme.shadows[2],
      transform: "translateX(-1px)"
    }
  })
);

Button.defaultProps = {
  p: 2,
  borderRadius: 1,
  as: "button",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: 1,
  colors: "gray",
  colorOffset: 0,
  border: 0
};

export default Button;
