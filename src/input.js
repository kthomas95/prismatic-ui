import styled from "@emotion/styled";
import Text from "./text";

const Input = styled(Text)`
  &:hover {
    box-shadow: ${props => props.theme.shadows[2]};
  }

  &:focus {
    border: solid 1px ${props => props.theme.colors.blue["500"]};
  }
`;

Input.defaultProps = {
  as: "input",
  bg: "gray.100",
  color: "gray.600",
  border: 0,
  borderRadius: 1,
  boxShadow: 1,
  fontSize: 1
};

export default Input;
