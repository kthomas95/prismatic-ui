import styled from "@emotion/styled";
import {
    grid,
    justifyContent,
    alignItems,
    justifyItems,
    alignContent
} from "styled-system";
import Box from "../layout/box";

export default styled(Box)(
    { display: "grid" },
    grid,
    justifyContent,
    justifyItems,
    alignItems,
    alignContent
);
