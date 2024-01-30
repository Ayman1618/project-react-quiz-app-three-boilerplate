import React, { useState } from "react";
import "./QuizPage.css";
import questions from "../resources/questions.json";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState([]);
  const navigate = useNavigate();

  const handleNextOrReset = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
      setScore(0);
      setAttempted([]);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleOption = (e) => {
    const selectedOption = e.target.innerText;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
      alert("Correct answer");
      if (!attempted.includes(currentQuestionIndex)) {
        setAttempted((prevAttempted) => [...prevAttempted, currentQuestionIndex]);
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      alert("Incorrect answer");
      if (!attempted.includes(currentQuestionIndex)) {
        setAttempted((prevAttempted) => [...prevAttempted, currentQuestionIndex]);
      }
    }
  };

  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit the game?")) {
      navigate("/");
    }
  };

  const handleFinish = () => {
    navigate("/Result", { state: { score, attempted } });
  };

  const currentQuestion = questions[currentQuestionIndex];
  const buttonText = currentQuestionIndex === questions.length - 1 ? "Reset" : "Next";

  return (
    <div className="container">
      <div className="quiz">
        <h3 id="quiz-heading">Question</h3>

        <p id="questionNumber">{`Question ${currentQuestionIndex + 1} of ${
          questions.length
        }`}</p>
        <p id="question">{currentQuestion.question}</p>

        <div className="options">
          <div id="optionA" onClick={handleOption}>
            {currentQuestion.optionA}
          </div>
          <div id="optionB" onClick={handleOption}>
            {currentQuestion.optionB}
          </div>
          <div id="optionC" onClick={handleOption}>
            {currentQuestion.optionC}
          </div>
          <div id="optionD" onClick={handleOption}>
            {currentQuestion.optionD}
          </div>
        </div>
        <div className="navigation">
          <button id="back" onClick={handlePrevious}>
            Previous
          </button>
          <button id="next" onClick={handleNextOrReset}>
            {buttonText}
          </button>
          <button id="exit" onClick={handleQuit}>
            Quit
          </button>
        </div>
      </div>
      <div className="actions">
        <div className="finish">
          <button id="finish" onClick={handleFinish}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
