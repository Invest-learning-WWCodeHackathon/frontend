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
  Link,
} from "@chakra-ui/react";
import useCurrentUser from "../hooks/useCurrectUser";
import React, { useState, useEffect } from "react";

const customTheme = extendTheme({
  // Define your custom theme, including the blue color scheme.
  // You can set the color scheme using the `extendTheme` function.
});

function QuizzesPage() {
  const toast = useToast();
  //added authorized body and unauthorized body
  const { isAuthorized } = useCurrentUser();
  const [currentQuestion, setcurrentQuestion] = useState({
    question: "Loading your next question",
  });
  const [optionsArray, setoptionsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(1000 | useCurrentUser.points);
  const [clickMeButton, setClickMeButton] = useState("Click To Start");

  // access's chat and creates a quiz question
  const fetchQuestion = async () => {
    if (!isAuthorized) {
      console.log("fetchQuestion NOT running");
      return;
    }
    console.log("fetchQuestion running");

    try {
      const res = await fetch(
        `https://youth-invest-backend-sharmilathippab.replit.app/quizQuestion`
      );
      const data = await res.json();
      setcurrentQuestion(data);
      setoptionsArray([
        { letter: "A", option: data.option1 },
        { letter: "B", option: data.option2 },
        { letter: "C", option: data.option3 },
        { letter: "D", option: data.answer },
      ]);
      console.log(data);
    } catch (error) {
      console.log(error);
      // use a default question
      let data = {
        question: "What is the difference between saving and investing?",
        option1:
          "Saving is putting money aside for short-term goals, while investing is putting money into assets with the potential for quickly growing sums.",
        option2:
          "Saving is putting money into assets with the potential for long-term growth, while investing is putting money aside for short-term goals.",
        option3: "There is no difference between saving and investing.",
        answer:
          "Saving is putting money aside for short-term goals, while investing is putting money into assets with the potential for long-term growth.",
        explanation:
          "Saving involves setting aside money for short-term goals such as emergencies or specific purchases. Investing, on the other hand, involves putting money into assets such as stocks or mutual funds with the potential for long-term growth and higher returns over time.",
      };
      setcurrentQuestion(data);
      setoptionsArray([
        { letter: "A", option: data.option1 },
        { letter: "B", option: data.option2 },
        { letter: "C", option: data.option3 },
        { letter: "D", option: data.answer },
      ]);
    }
    setIsLoading(false);
  };

  // useEffect(() => {
  //   fetchQuestion();
  // }, []);

  // stores the current selection
  const handleChange = (value) => {
    console.log("line 44", value);
  };

  function givesAnswer(userAnswer, question) {
    let correctAnswer = question.answer;
    if (!correctAnswer) {
      return toast({
        title: `Loading Questions!`,
        status: "info",
        duration: 5000,
        position: "top",
        containerStyle: {
          width: "800px",
          maxWidth: "100%",
        },
      });
    }
    if (userAnswer === correctAnswer) {
      setPoints(points + 100);
      // add points
      return toast({
        title: `Correct! It is ${userAnswer}!`,
        description: `\nWhy? ${question.explanation}`,
        status: "success",
        duration: 5000,
        position: "top",
        containerStyle: {
          width: "800px",
          maxWidth: "100%",
        },
      });
    } else {
      return toast({
        title: `Incorrect the answer is :  ${correctAnswer}`,
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
    setClickMeButton("Submit your answer!");
    givesAnswer(value, currentQuestion);
    setcurrentQuestion({ question: "Loading your next question" });
    setoptionsArray([]);
    fetchQuestion();
  };

  const { value, getRadioProps } = useRadioGroup({
    defaultValue: "??",
    onChange: handleChange,
  });

  const quizAuthorizedBody = (
    <>
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
              {currentQuestion.question}
            </Text>
            <RadioGroup size="lg" colorScheme="blue">
              <Stack>
                {optionsArray.map((question) => {
                  return (
                    <Radio
                      key={question.letter}
                      value={question.option}
                      {...getRadioProps({ value: question.option })}
                    >
                      {question.option}
                    </Radio>
                  );
                })}
                {/* here is where selected is stored */}
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
                  {" "}
                  {clickMeButton}
                </Button>
                <Link href="/dashboard">
                  <Button
                    rounded={"full"}
                    size={"md"}
                    fontWeight={"normal"}
                    px={6}
                    colorScheme={"blue"}
                    bg={"blue.400"}
                    _hover={{ bg: "blue.500" }}
                  >
                    You Have {points}! Go to Stock Market?
                  </Button>
                </Link>
              </Stack>
            </RadioGroup>
          </Stack>
        </Box>
      </ChakraProvider>
    </>
  );
  const quizUnauthorizedBody = (
    <>
      <ChakraProvider>
        <CSSReset />
        <Box p={3} m={5} pt={5} height={"80vh"}>
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
                Dough Dynasty
              </Text>
              <br />
            </Heading>
            <Text
              p={5}
              m={5}
              mt={14}
              color={"gray.500"}
              fontSize={{ base: "sm", sm: "lg" }}
            >
              Please log in to access the Quizzes.
            </Text>
            <Link href={"/sign-up"}>
              <Button colorScheme={"blue"} size={"sm"}>
                Sign in to continue
              </Button>
            </Link>
          </Stack>
        </Box>
      </ChakraProvider>
      <br />
      <br />
    </>
  );

  return (
    <div>
      <div>{isAuthorized ? quizAuthorizedBody : quizUnauthorizedBody}</div>
    </div>
  );
}

export default QuizzesPage;
