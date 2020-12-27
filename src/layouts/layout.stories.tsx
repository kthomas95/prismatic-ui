import { m } from "framer-motion";
import { Box } from "../";
import { Flex } from "../flex";
import Pokeball from "./pokeball.svg";

export default {
    title: "Layouts",
};

export const sideNav = () => (
    <Flex _css={{ m: -3 }}>
        <Flex
            _css={{
                bg: "text.500",
                height: "100vh",
                width: 64,
                flexDirection: "column",
                boxShadow: "lg",
            }}
        >
            <Flex
                _css={{
                    height: 48,
                    mt: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                }}
            >
                <Box
                    as="img"
                    _css={{ width: "75%", userSelect: "none" }}
                    src={Pokeball}
                />
            </Flex>
            <Box
                _css={{
                    p: 2,
                    color: "background.500",
                    fontStyle: "italic",
                    fontSize: "xs",
                    fontWeight: 600,
                }}
            >
                Link 1
            </Box>
        </Flex>
        <Box
            _css={{
                p: 4,
                fontStyle: "italic",
                // bg: "primary.a100",
                bg: "background.300",
                flexGrow: 1,
            }}
        >
            <h3>Welcome!</h3>
            Content
        </Box>
    </Flex>
);
