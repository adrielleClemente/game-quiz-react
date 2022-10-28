import Quiz from '../img/quiz.svg';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div id='welcome'>
        <h2>Seja bem-vinde</h2>
        <p>Clique no botão abaixo</p>
        <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
        <img src={Quiz} alt="Início do quiz"/>
    </div>
  )
};

export default Welcome;


