

import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  extendTheme,
  CSSReset,
  Stack,
  Container
} from "@chakra-ui/react";
//   import { ExternalLinkIcon } from "@chakra-ui/icons";
import TeamMemberCards from "./TeamMembers";

const customTheme = extendTheme({
  // Define your custom theme, including the blue color scheme.
  // You can set the color scheme using the `extendTheme` function.
});

function AboutPage() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Box p={3} m={5} pt={5}>
        <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
          <Heading m={5}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }} >
              About Us
            </Text>
            <br />
          </Heading>
          <Text p={5} m={5} color={'gray.400'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Welcome to Dough Dynasty! We're thrilled that you've chosen
            to embark on this exciting journey of financial learning with us.
            Our mission is to empower teenagers like you with essential
            knowledge about the stock market in a fun and engaging way.

            We believe that understanding the stock
            market can be not only educational but also enjoyable. We know that
            learning about finance and investing might sound intimidating at
            first, but we're here to change that perception.
            <br></br>
            At Dough Dynasty, we provide a safe and risk-free environment
            for you to explore the stock market through a simulated experience.
            Our interactive quizzes, investment simulations, and educational
            resources are designed to make learning about financial concepts a
            breeze.
              <br></br>
            Whether you dream of becoming a savvy investor, want to better 
            manage your own finances, or simply wish to understand the dynamics 
            of the financial world, Dough Dynasty is your trusted partner on this 
            journey. We're excited to see you grow, make informed decisions, and 
            take control of your financial future. So, let's embark on this adventure 
            together, where learning about finance is not just a necessity, but a 
            thrilling expedition full of knowledge, confidence, and opportunities.
          </Text>
          <Heading as="h2" size="lg" mt={6} color="blue.500">
            Our Team
          </Heading>
          <TeamMemberCards />
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default AboutPage;
