// react, componentes, estáticos
import { useContext } from 'react'

import { QuizContext } from './context/quiz';

import Questions from './components/Questions';

import './App.css'

import { Welcome } from './components/Welcome'
import { useEffect } from 'react';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //vai embaralhar as pereguntas
    dispatch({ type: "REORDER_QUESTIONS"})
  }, []

  );


  return (
    <div className="App">
      <h1>Quiz da Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      <Welcome />
    </div>
  )
}

export default App
