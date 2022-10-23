import Quiz from '../img/quiz.svg';

import "./Welcome.css";

export const Welcome = () => {
  return (
    <div id='welcome'>
        <h2>Seja bem-vinde</h2>
        <p>Clique no botão abaixo</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Início do quiz"/>
    </div>
  )
}
