import { useState } from "react";

const questions = [
  {
    questionText: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink Text Mark Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    questionText:
      "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    options: ["var", "let", "const"],
    correctAnswer: "let",
  },
  {
    questionText:
      "What is the correct way to check if two values are equal in both value and type in JavaScript?",
    options: ["==", "===", "="],
    correctAnswer: "===",
  },
  {
    questionText: "What does a React component return?",
    options: ["A regular string", "A Promise", "JSX (HTML-like syntax)"],
    correctAnswer: "JSX (HTML-like syntax)",
  },
  {
    questionText: "What is the primary purpose of the React useState hook?",
    options: [
      "To fetch data from an external API",
      "To store and update data that changes the UI",
      "To run code after the component renders",
    ],
    correctAnswer: "To store and update data that changes the UI",
  },
];

function Quiz() {
  const [currQue, setCurrQue] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setisFinished] = useState(false);

  function handleAns(select) {
    if (select === questions[currQue].correctAnswer) {
      setScore(score + 1);
    }

    const nextQues = currQue + 1;

    if (nextQues < questions.length) {
      setCurrQue(nextQues);
    } else {
      setisFinished(true);
    }
  }

  function handleReset() {
    setCurrQue(0);
    setScore(0);
    setisFinished(false);
  }

  if (isFinished) {
    return (
      <div>
        <h4>Your score : {score}</h4>
        <button onClick={handleReset}>Restart test again </button>
      </div>
    );
  }
  return (
    <div>

      <h2>--- Quiz Progress ---</h2>
      <strong>Question: </strong> {currQue +1 } of {questions.length} | <strong>Current Score: </strong> {score}
      <hr />
      {/* Question */}
      <h2>{questions[currQue].questionText}</h2>

      {questions[currQue].options.map((choice, index) => (
        <button key={index} onClick={() => handleAns(choice)}>{choice}</button>
      ))}

    </div>
  );
}

export default Quiz;
