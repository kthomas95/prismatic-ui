import { Box, styled } from "../Box";

export const Card = styled(Box)();

Card.defaultProps = {
    boxShadow: 2,
    borderRadius: 2,
    p: 3,
    bg: "background.light",
    textAlign: "center"
};
