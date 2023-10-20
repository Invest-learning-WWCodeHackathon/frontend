import { Stack, Text, Flex, Container, ChakraProvider, CSSReset, Box, Heading, Input, useColorModeValue, Link, Center, Spinner } from '@chakra-ui/react'

export default function ELearning() {
    return (
        <ChakraProvider>
            <CSSReset />
            <Flex
                direction="column"
                justify="space-between"
                minHeight="80vh"
                maxW={"5xl"}
                mx="auto"
            >
                <Stack
                    spacing={4}
                    as={Container}
                    maxW="5xl"
                    textAlign="center"
                    flex="1"
                >
                    <Heading
                        m={3}
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text
                            as="span"
                            position="relative"
                            _after={{
                                content: "''",
                                width: "full",
                                height: "30%",
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bg: "blue.400",
                                zIndex: -1,
                            }}
                        >
                            E - Learning{" "}
                        </Text>
                    </Heading>
                </Stack>
                <Input
                    placeholder="Ask your questions here"
                    m={3}
                    mb={5}
                />
            </Flex>
        </ChakraProvider>

    )
} 