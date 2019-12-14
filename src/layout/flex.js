import styled from "@emotion/styled";
import { flexbox } from "styled-system";
import Box from "../Box";

const Flex = styled(Box)();

Flex.defaultProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export default Flex;
