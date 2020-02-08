import { Box, BoxProps, MotionBox } from "../Box";
import { List } from "../List";
import React from "react";
import { useTransition, animated } from "react-spring";
import { MotionProps } from "framer-motion";

interface List {
    items: any[];
    element: (item: any) => BoxProps & MotionProps & { key: number | string };
}

export const AnimatedList: React.FC<List & BoxProps> = ({
    items,
    element,
    ...props
}) => (
    <Box {...props}>
        {items.map(card => (
            <MotionBox
                positionTransition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                }}
                {...element(card)}
            />
        ))}
    </Box>
);

AnimatedList.defaultProps = { p: 0, as: "ul" };

// DEPRECIATED
export const AnimatedListt: React.FC<List & BoxProps> = ({
    listItemProps,
    itemKey,
    ListItem = props => <Box {...props} />,
    space = 4,
    listPadding = 4,
    itemHeight = 48,
    itemWidth = 312,
    ...props
}) => {
    let height = 0;
    const transitions = useTransition(
        props.items.map(item => ({
            ...item,
            height: itemHeight,
            y: (height += itemHeight + space) - itemHeight - space
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
        <Box {...props} position="relative" style={{ height: height - space }}>
            {transitions.map(({ item, props: { y, ...rest }, key }, index) => {
                return (
                    <ListItem
                        key={`${item.id}${index}`}
                        as={animated["div"]}
                        width={"100%"}
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
                    >
                        test
                        {key}
                        {index}
                    </ListItem>
                );
            })}
        </Box>
    );
};
