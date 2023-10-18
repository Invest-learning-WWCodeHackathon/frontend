"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import { Link } from "react-router-dom";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Link to={href}>
          <Button colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          color="blue.500"
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
        >
          Our Features
        </Heading>
        <Text
          color={useColorModeValue("gray.500", "gray.400")}
          fontSize={{ base: "sm", sm: "lg" }}
        >
          Discover the key features that make our platform stand out and provide
          you with an exceptional experience.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"About Us"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Learn about our mission and dedication to educating youth in stock market trading."
            }
            href={"/about"}
          />
          <Card
            heading={"Quizzes"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Challenge your knowledge with interactive quizzes designed to teach stock market concepts."
            }
            href={"quizzes"}
          />
          <Card
            heading={"Stock Market"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Experience the excitement of stock market trading through our realistic simulation."
            }
            href={"/dashboard"}
          />
          <Card
            heading={"E - Learning"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Access a vast library of e-learning courses to enhance your stock market skills."
            }
            href={"#"}
          />
          <Card
            heading={"News"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Stay informed with the latest stock market news and trends."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
