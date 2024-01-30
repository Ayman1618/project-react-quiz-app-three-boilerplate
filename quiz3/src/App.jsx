import React, { useState } from 'react'
import HomePage from './components/HomePage'
import './App.css'
import { BrowserRouter } from "react-router-dom"
import QuizPage from './components/QuizPage'
import ResultPage from './components/ResultPage'
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Quiz" element={<QuizPage />} />
        <Route path="/Result" element={<ResultPage/>} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
