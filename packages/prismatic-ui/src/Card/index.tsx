import React from "react";

import { Box, styled, BoxProps } from "../Box";

interface Card {
    title?: React.ReactElement;
    footer?: React.ReactElement;
    children: React.ReactElement;
}

export const Card: React.FC<Card & BoxProps> = ({
    title,
    children,
    p,
    footer,
    ...props
}) => {
    return (
        <Box {...{ ...props, p }}>
            {title &&
                React.cloneElement(title, {
                    as: "h3",
                    m: 0,
                    p: 3,
                    borderTopLeftRadius: props.borderRadius,
                    borderTopRightRadius: props.borderRadius,
                    ...title.props
                })}
            {React.cloneElement(children, { flexGrow: 1 })}
            {footer &&
                React.cloneElement(footer, {
                    mt: "auto",
                    p: 1,
                    borderBottomRightRadius: props.borderRadius,
                    borderBottomLeftRadius: props.borderRadius,
                    ...footer.props
                })}
        </Box>
    );
};

Card.defaultProps = {
    boxShadow: 2,
    borderRadius: 4,
    bg: "background.light",
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
};
