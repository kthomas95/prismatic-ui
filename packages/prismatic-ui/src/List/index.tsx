import { Box, BoxProps } from "../Box";
import React from "react";
import { useTransition, animated } from "react-spring";

interface List {
    listItemProps: object;
    ListItem: React.FC<any>;
    itemKey: string;
}

export const DefaultListItem = props => <Box {...props} />;

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
    const transitions = useTransition(
        props.items.map(item => ({
            ...item,
            height: itemHeight,
            y: (height += itemHeight + space) - itemHeight
        })),
        item => item[itemKey],
        {
            from: { height: 0, opacity: 0 },
            leave: { height: 0, opacity: 0 },
            enter: ({ y, height }) => ({ y, height, opacity: 1 }),
            update: ({ y, height }) => ({ y, height })
        }
    );
    return (
        <Box
            {...props}
            // width={itemWidth + listPadding * 2}
            // px={`${listPadding}px`}
            style={{ height: height + listPadding * 2 }}
        >
            {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
                <ListItem
                    key={key}
                    as={animated.div}
                    // width={itemWidth}
                    style={{
                        zIndex: props.items.length - index,
                        transform: y.interpolate(
                            y => `translate3d(0,${y}px,0)`
                        ),
                        ...rest
                    }}
                    position="absolute"
                    item={item}
                    {...listItemProps}
                />
            ))}
        </Box>
    );
};

List.defaultProps = {
    as: "ol",
    m: 0,
    p: 0
};
