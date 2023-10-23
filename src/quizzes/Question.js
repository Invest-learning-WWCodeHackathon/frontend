function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const testQuestion = {
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

const sort_array = ["option1", "option2", "option3", "answer"];

shuffleArray(sort_array);

const Question = [
  { option: testQuestion.sort_array[0] },
  { option: testQuestion.sort_array[1] },
  { option: testQuestion.sort_array[2] },
  { option: testQuestion.sort_array[3] },
];

export { Question };
