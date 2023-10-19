import {
  ChakraProvider,
  extendTheme,
  CSSReset,
  useToast,
  Box,
  useRadioGroup,
  Stack,
  RadioGroup,
  Text,
  Radio,
  Heading,
  Container,
  Button,
} from "@chakra-ui/react";

const customTheme = extendTheme({
  // Define your custom theme, including the blue color scheme.
  // You can set the color scheme using the `extendTheme` function.
});

function QuizzesPage() {
  const toast = useToast();

  const testQuestion = {
    question: "What is the capital of France?",
    option1: "London",
    option2: "Paris",
    option3: "Berlin",
    option4: "New York City",
    correctAnswer: "Paris",
    explanation: "it's a city",
  };

  const questions_formated = [
    { letter: "A", option: testQuestion.option1 },
    { letter: "B", option: testQuestion.option2 },
    { letter: "C", option: testQuestion.option3 },
    { letter: "D", option: testQuestion.option4 },
  ];

  // stores the current selection
  const handleChange = (value) => {
    console.log("line 44", value);
  };

  function givesAnswer(userAnswer, question) {
    let correctAnswer;
    correctAnswer = question.correctAnswer;
    console.log(correctAnswer, userAnswer);
    if (userAnswer === correctAnswer)
      // add points
      return toast({
        title: `Correct! It is ${userAnswer}!`,
        description: `\nWhy? ${question.explanation}`,
        status: "success",
        duration: 4000,
        position: "top",
        containerStyle: {
          width: "800px",
          maxWidth: "100%",
        },
      });
    else {
      return toast({
        title: `Darn it is ${correctAnswer}`,
        description: `Why? ${question.explanation}`,
        status: "error",
        duration: 4000,
        position: "top",
        containerStyle: {
          width: "800px",
          maxWidth: "100%",
        },
      });
    }
  }
  const handleSubmit = (value) => {
    givesAnswer(value, testQuestion);
  };

  const { value, getRadioProps } = useRadioGroup({
    defaultValue: "??",
    onChange: handleChange,
  });

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
          </Heading>
          <Text
            as={"span"}
            position={"left"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
            }}
          >
            {testQuestion.question}
          </Text>
          <RadioGroup size="lg" colorScheme="blue">
            <Stack>
              {questions_formated.map((question) => {
                return (
                  <Radio
                    key={question.option}
                    value={question.option}
                    {...getRadioProps({ value: question.option })}
                  >
                    {question.letter}: {question.option}
                  </Radio>
                );
              })}
              {/* here is where selected is stored */}
              <Text>You guessed: {value}</Text>
              <Button
                rounded={"full"}
                size={"md"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"blue"}
                bg={"blue.400"}
                _hover={{ bg: "blue.500" }}
                onClick={() => handleSubmit(value)}
              >
                Submit your answer!
              </Button>
            </Stack>
          </RadioGroup>
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default QuizzesPage;
