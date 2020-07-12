import React from "react";
import { Card, Box, Badge, Flex, PseudoBox, Stat } from "prismatic-ui";

const CardData = [
    { value: 34, label: "Games", color: "primary" },
    { value: 17, label: "Goals", color: "secondary" },
    { value: 12, label: "Assists", color: "danger" }
];

export default {
    title: "Data Display/Card"
};

export const card = () => (
    <>
        <Card
            maxWidth={450}
            minHeight={300}
            borderRadius={16}
            title={<Box bg="background.light">Harry Kane</Box>}
            footer={
                <Box bg="background.verydark" p={2}>
                    <Badge variantColor="error" mx={2}>
                        England
                    </Badge>
                    <Badge variantColor="primary" mx={2}>
                        Tottenham Hotspur
                    </Badge>
                </Box>
            }
        >
            <Box bg="background.verylight" p={2}>
                <Flex justifyContent="space-between">
                    {CardData.map(({ color, ...stat }) => (
                        <PseudoBox
                            as={Stat}
                            _hover={{ bg: `${color}.light` }}
                            py={2}
                            fontSize="xl"
                            borderRadius={4}
                            boxShadow={3}
                            flexGrow={1}
                            mx={1}
                            color={`${color}.text`}
                            bg={`${color}.main`}
                            {...stat}
                        />
                    ))}
                </Flex>
                <br />
            </Box>
        </Card>
        <Card maxWidth={275} mt={3} color="error.text" bg="error.light">
            <h3>Error Card</h3>
        </Card>
    </>
);
