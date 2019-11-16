import styled from "@emotion/styled";
import Flex from "../layout/flex";

const TextField = styled(Flex)(props => ({
  border: `solid 1px ${props.theme.colors["gray"][400]}`,
  "&:focus": {
    boxShadow: `0 1px 2px 0 ${props.theme.colors["blue"][400]}`
  }
}));

TextField.defaultProps = {
  as: "input",
  borderRadius: 1,
  py: 1,
  px: 2
};

export default TextField;
