import React from "react";
import { Box, WithCSS } from "../box";

interface ListProps<T extends object> extends WithCSS {
    items: T[];
    delegate: (item: T, index: number) => JSX.Element;
    itemKey: (item: T, index: number) => string;
}

export const DefaultListItem = (props) => <Box {...props} />;

export const List = <T extends object>({
    itemKey,
    delegate: Delegate,
    items,
    _css,
    ...props
}: ListProps<T>) => {
    return (
        <Box _css={_css} {...props}>
            {items.map((item, index) => (
                <Delegate key={itemKey(item, index)} {...item} />
            ))}
        </Box>
    );
};
