import { Box, BoxProps } from "../../primatives";
import React from "react";

interface List {
    listItemProps: object;
    ListItem: React.FC<any>;
    itemKey: string;
}

export const DefaultListItem = (props) => <Box {...props} />;

export const List: React.FC<List & BoxProps> = ({
    listItemProps,
    ListItem = DefaultListItem,
    itemKey,
    space = 16,
    listPadding = 16,
    itemHeight = 48,
    itemWidth = 256,
    ...props
}) => {
    let height = 0;
    return (
        <Box
            {...props}
            // width={itemWidth + listPadding * 2}
            // px={`${listPadding}px`}
            style={{ height: height + listPadding * 2 }}
        ></Box>
    );
};

List.defaultProps = {
    as: "ol",
    m: 0,
    p: 0,
};
