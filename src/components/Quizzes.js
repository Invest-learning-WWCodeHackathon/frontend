import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  extendTheme,
  CSSReset,
  Stack,
  Container,
  useColorModeValue,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
//   import { ExternalLinkIcon } from "@chakra-ui/icons";
import TeamMemberCards from "./TeamMembers";

const testQuestion = {
  question: "What is the capital of France?",
  option1: "London",
  option2: "Paris",
  option3: "Berlin",
  option4: "New York City",
  correctAnswer: "Paris",
  explanation: "it's a city",
};

function givesAnswer(userAnswer, question) {
  let correctAnswer;
  userAnswer = userAnswer.toLowerCase();
  correctAnswer = question.correctAnswer;
  if (userAnswer === correctAnswer.toLowerCase())
    return correctAnswer + "\n Why? " + question.explanation;
  else {
    return (
      "Incorrect it is " + correctAnswer + "\n Why? " + question.explanation
    );
  }
}

console.log("correct: " + givesAnswer("Paris", testQuestion));
console.log("incorrect: " + givesAnswer("jupiter", testQuestion));

const customTheme = extendTheme({
  // Define your custom theme, including the blue color scheme.
  // You can set the color scheme using the `extendTheme` function.
});

function QuizzesPage() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Box p={3} m={5} pt={5}>
        <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
          <Heading
            m={5}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
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
              Quizzes{" "}
            </Text>
            <br />
          </Heading>
          <RadioGroup size="lg" colorScheme="blue">
            <Stack>
              <Radio value="1">A: {testQuestion.option1}</Radio>
              <Radio value="2">B: {testQuestion.option2}</Radio>
              <Radio value="3">C: {testQuestion.option3}</Radio>
              <Radio value="4">D: {testQuestion.option4}</Radio>
            </Stack>
          </RadioGroup>
          {/* add a button to submit here */}
          <Heading as="h2" size="lg" mt={6} color="blue.500">
            Why?
          </Heading>

          {/* replace with a explanation card that contains links to other resources  <TeamMemberCards /> */}
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default QuizzesPage;
