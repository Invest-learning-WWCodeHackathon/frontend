const testQuestion = {
    question: "What is the capital of France?",
    option1: "London",
    option2: "Paris",
    option3: "Berlin",
    correctAnswer: "Paris",
    explanation: "it's a city",
  },
  correctAnswer = testQuestion.correctAnswer;

function givesAnswer(userAnswer) {
  userAnswer = userAnswer.toLowerCase();
  if (userAnswer === correctAnswer.toLowerCase()) return correctAnswer;
  else {
    return "Incorrect it is " + correctAnswer;
  }
}

console.log("correct: " + givesAnswer("Paris"));
console.log("incorrect: " + givesAnswer("jupiter"));
