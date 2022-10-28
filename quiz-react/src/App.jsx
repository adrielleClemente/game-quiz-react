// react, componentes, estáticos
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz';
import Questions from './components/Questions';
import './App.css'
import Welcome from './components/Welcome';
import GameOver from './components/GameOver';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //vai embaralhar as pereguntas
    dispatch({ type: "REORDER_QUESTIONS"})
  }, []

  );


  return (
    <div className="App">
      <h1>Quiz da Horror</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questions/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  );
}

export default App
