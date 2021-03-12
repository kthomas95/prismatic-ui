import { Box } from "..";
import { IconType } from "react-icons";
import { Flex, List } from "../";
import { Fragment } from "react";
import { WithCSS } from "../box";

export interface LinkProps {
    icon: IconType;
    text: string;
    to: string;
    active?: boolean;
    as?: React.ComponentType<any> | string;
}

interface MultiColumnLayoutProps {
    logo: string | JSX.Element;
    linkWrapper?: (link: LinkProps) => JSX.Element;
    links: LinkProps[];
    navFooter?: JSX.Element;
}

export const DefaultNavLink = ({
    as = "a",
    icon,
    text,
    to,
    active,
    ...rest
}: LinkProps) => (
    <Flex
        as={as}
        _css={{
            bg: active ? "text.a100" : "transparent",
            color: active ? "text.500" : "text.300",
            p: 2,
            display: ["inline-flex", "inline-flex", "flex"],
            borderRadius: 6,
            my: [0, 0, 1],
            fontSize: ["1.25rem", "1.75rem", "base"],
            height: ["2.25em", "2.25em", "unset"],
            width: ["2.25em", "2.25em", "100%"],
            alignItems: "center",
            flexDirection: ["column", "column", "row"],
            ":hover": {
                bg: "text.a50",
            },
        }}
        {...rest}
    >
        <Box as={icon} _css={{ opacity: 0.8 }} />
        <Box
            as="span"
            _css={{
                // display: ["none", "none", "inline"],
                fontSize: "xs",
                fontWeight: 500,
                ml: [0, 0, 3],
                mt: [1, 1, 0],
                letterSpacing: "-0.025em",
            }}
        >
            {text}
        </Box>
    </Flex>
);

export const MultiColumnLayout: Box<MultiColumnLayoutProps> = ({
    links,
    logo,
    _css,
    children,
    linkWrapper = DefaultNavLink,
    navFooter,
    ...props
}) => (
    <Flex
        {...props}
        _css={{
            flexDirection: ["column", "column", "row"],
            maxWidth: "100vw",
            overflowX: "hidden",
            ..._css,
        }}
    >
        <Flex
            as="nav"
            _css={{
                bg: "background.500",
                // bg: "red",
                alignItems: "center",
                width: "100%",
                flexBasis: [24, 48, 256],
                flexShrink: [1, 1, 0],
                flexDirection: ["row", "row", "column"],
                boxShadow: "sm",
            }}
            // vertical
        >
            {logo}

            <List
                _css={{
                    m: [0, 0, 3],
                    mx: [1, 1, 1],
                    gap: [1, 1, 0],
                    px: [0, 0, 2],
                    width: [undefined, undefined, "100%"],
                    alignItems: "center",
                    mt: [undefined, undefined, 2],
                    display: "flex",
                    flexDirection: ["row", "row", "column"],
                }}
                items={links}
                itemKey={(item) => item.to}
                delegate={linkWrapper}
            />
            {navFooter}
        </Flex>
        {children}
    </Flex>
);
