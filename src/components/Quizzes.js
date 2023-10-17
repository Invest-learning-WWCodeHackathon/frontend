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

{
  /* <Stack>
  <Radio size="lg" name="1" colorScheme="blue">
    A: {testQuestion.option1}
  </Radio>
  <Radio size="lg" name="1" colorScheme="blue">
    B: {testQuestion.option2}
  </Radio>
  <Radio size="lg" name="1" colorScheme="blue">
    C: {testQuestion.option3}
  </Radio>
  <Radio size="lg" name="1" colorScheme="blue">
    D: {testQuestion.option4}
  </Radio>
</Stack>; */
}
