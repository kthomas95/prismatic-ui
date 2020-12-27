import React from "react";
import { Box } from "../box";

interface List {
    listItemProps: object;
    ListItem: React.FC<any>;
    itemKey: string;
}

export const DefaultListItem = (props) => <Box {...props} />;

export const List: Box<List> = ({
    listItemProps,
    ListItem = DefaultListItem,
    itemKey,
    ...props
}) => {
    let height = 0;
    return (
        <Box
            {...props}
            // width={itemWidth + listPadding * 2}
            // px={`${listPadding}px`}
        ></Box>
    );
};

List.defaultProps = {
    as: "ol",
    m: 0,
    p: 0,
};
