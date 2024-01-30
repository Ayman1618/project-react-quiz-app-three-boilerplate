import React from "react";
import { useState } from "react";
import QuizPage from "./QuizPage";
import { NavLink } from 'react-router-dom'

export default function HomeComponent() {

    const [QuizGame, setShowQuizGame] = useState(false);

    const handleClick = () => {
        setShowQuizGame(true)
    }

    return (
        <div>
            <h2 className="title">Quiz App</h2>
            <NavLink to="/Quiz">
                <button onClick={handleClick}>Play</button>
            </NavLink>
            {QuizGame && <QuizPage />}
        </div>
    );
}
