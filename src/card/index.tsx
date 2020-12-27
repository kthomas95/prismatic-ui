import React, { ReactText } from "react";

import { ResponsiveValue } from "styled-system";
import { StyledBoxProps, Box } from "../box";
import { ColorVariant } from "../system";

interface CardProps {
    heading?: React.ReactElement | ReactText;
    footer?: React.ReactElement | ReactText;
    variantColor?: ColorVariant;
    // children: React.ReactElement | string;
}

const makeCardProps = (
    br: ResponsiveValue<number | string | symbol>,
    variantColor: ColorVariant
): Record<"titleProps" | "footerProps" | "bodyProps", StyledBoxProps> => ({
    titleProps: {
        m: 0,
        p: 2,
        borderTopLeftRadius: br,
        borderTopRightRadius: br,
        as: "h3",
        bg: `${variantColor}.a100` as const,
        // color: `${variantColor}.text`,
    },
    footerProps: {
        bg: `${variantColor}.a100` as const,
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
        bg: `${variantColor}.a50` as const,
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
            {React.isValidElement(children) &&
            React.Children.count(children) < 2 ? (
                React.cloneElement(children, {
                    ...bodyProps,
                    ...children.props,
                })
            ) : (
                <Box p={2} {...bodyProps}>
                    {children}
                </Box>
            )}

            {footer &&
                (React.isValidElement(footer) ? (
                    React.cloneElement(footer, {
                        mt: "auto",
                        borderBottomRightRadius: props.borderRadius,
                        borderBottomLeftRadius: props.borderRadius,
                        ...footerProps,
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
