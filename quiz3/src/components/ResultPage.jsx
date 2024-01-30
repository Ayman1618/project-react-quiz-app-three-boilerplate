import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import './ResultPage.css'

const ResultPage = () => {
  const location = useLocation();
  const score = location.state?.score || 0;
  const attempted = location.state?.attempted || [];
  const attemptedCount = attempted.length;

  const getStatement = () => {
    if (score < 6) {
      return 'You need more practice!';
    } else if (score >= 6 && score < 11) {
      return 'Good job! You can do better!';
    } else {
      return 'Great job! Keep it up!';
    }
  };

  return (
    <>
      <div className="result-box">
        <h1 className="result-text">Result</h1>

        <div className="resultPage-container">

          <div className="statement">
            <h2><strong>{getStatement()}</strong></h2>
          </div>

          <div className="score">
            <h1><strong>Your score is {Math.round((score / 15) * 100)}%</strong></h1>
          </div>

          <div className="questions">
            <div className="noOfQuestions">
              <div>
                <h3><strong>Total questions</strong></h3>
              </div>

              <div>
                <h3><strong>15</strong></h3>
              </div>
            </div>

            <div className="noOfQuestions">
              <div>
                <h3><strong>Attempted questions</strong></h3>
              </div>

              <div>
                <h3><strong>{attemptedCount}</strong></h3>
              </div>
            </div>

            <div className="noOfQuestions">
              <div>
                <h3><strong>Correct answers</strong></h3>
              </div>

              <div>
                <h3><strong>{score}</strong></h3>
              </div>
            </div>

            <div className="noOfQuestions">
              <div>
                <h3><strong>Wrong answers</strong></h3>
              </div>

              <div>
                <h3><strong>{attemptedCount - score}</strong></h3>
              </div>
            </div>
          </div>
        </div>

        <div className="buttonss">
          <NavLink to='/Quiz'>
            <button className="play-btn">Play Again</button>
          </NavLink>

          <NavLink to='/'>
            <button className="back-btn">Back to home</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
