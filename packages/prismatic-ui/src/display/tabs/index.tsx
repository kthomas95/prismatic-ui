import { Box, Grid, MotionBox } from "../..";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const Tabs = ({
    items,
    active = 0,
    ContentWrapper = ({ children }) => <>{children}</>,
    ...props
}) => {
    const [status, setStatus] = useState({ current: active, old: active });
    return (
        <>
            <Grid gridAutoFlow="column" gridAutoColumns="1fr" {...props}>
                {items.map((item, index) => (
                    <Box
                        bg={
                            index === status.current
                                ? "background.light"
                                : "transparent"
                        }
                        p={2}
                        textAlign="center"
                        fontSize="xs"
                        as="button"
                        border={0}
                        fontWeight={600}
                        borderTopRightRadius={
                            index + 1 === items.length ? 0 : 8
                        }
                        borderTopLeftRadius={index === 0 ? 0 : 8}
                        onClick={() =>
                            setStatus((oldStatus) => ({
                                old: oldStatus.current,
                                current: index,
                            }))
                        }
                        key={item.title}
                    >
                        {item.title}
                    </Box>
                ))}
            </Grid>
            <ContentWrapper>
                <AnimatePresence exitBeforeEnter>
                    <MotionBox
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                        }}
                        key={status.current}
                    >
                        {items[status.current].children}
                    </MotionBox>
                </AnimatePresence>
            </ContentWrapper>
        </>
    );
};
