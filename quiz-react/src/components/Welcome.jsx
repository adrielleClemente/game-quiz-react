import Quiz from '../img/quiz.svg';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import "./Welcome.css";

export const Welcome = () => {
  const quizState = useContext(QuizContext);
  console.log(quizState);



  return (
    <div id='welcome'>
        <h2>Seja bem-vinde</h2>
        <p>Clique no botão abaixo</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Início do quiz"/>
    </div>
  )
}
