import React, { ReactText } from "react";

import { Box, BoxProps, StyledBoxProps } from "../../primatives";
import { ResponsiveValue } from "styled-system";

interface CardProps {
    heading?: React.ReactElement | ReactText;
    footer?: React.ReactElement | ReactText;
    variantColor?: string;
    // children: React.ReactElement | string;
}

const makeCardProps = (
    br: ResponsiveValue<number | string | symbol>,
    variantColor: string
): Record<"titleProps" | "footerProps" | "bodyProps", StyledBoxProps> => ({
    titleProps: {
        m: 0,
        p: 2,
        borderTopLeftRadius: br,
        borderTopRightRadius: br,
        as: "h3",
        bg: `${variantColor}.alpha.medium`,
        // color: `${variantColor}.text`,
    },
    footerProps: {
        bg: `${variantColor}.alpha.dark`,
        borderBottomRightRadius: br,
        borderBottomLeftRadius: br,
        fontSize: ".75em",
        fontWeight: 600,
        p: 1,
    },
    bodyProps: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        bg: `${variantColor}.alpha.light`,
    },
});

export type Card = Box<CardProps>;

export const Card: Card = ({
    heading,
    children,
    p,
    footer,
    variantColor,
    ...props
}) => {
    const { titleProps, footerProps, bodyProps } = makeCardProps(
        props.borderRadius,
        variantColor
    );

    return (
        <Box {...{ ...props, p }}>
            {React.isValidElement(heading) ? (
                React.cloneElement(heading, {
                    ...titleProps,
                    ...heading.props,
                })
            ) : (
                <Box {...titleProps}>{heading}</Box>
            )}
            {React.isValidElement(children) && React.Children.only(1) ? (
                React.cloneElement(children, { ...bodyProps })
            ) : (
                <Box p={2} {...bodyProps}>
                    {children}
                </Box>
            )}

            {footer &&
                (React.isValidElement(footer) ? (
                    React.cloneElement(footer, {
                        mt: "auto",
                        p: 1,
                        borderBottomRightRadius: props.borderRadius,
                        borderBottomLeftRadius: props.borderRadius,
                        ...footer.props,
                    })
                ) : (
                    <Box {...footerProps}>{footer}</Box>
                ))}
        </Box>
    );
};

Card.defaultProps = {
    boxShadow: 2,
    borderRadius: 4,
    variantColor: "background",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
};
