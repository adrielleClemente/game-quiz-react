import {useCallback} from 'react';
import {QuizContext} from "../context/quiz"

import WellDone from '../img/welldone.svg';
import './GameOver.css';


const GameOver = () => {
  return (
    <div id='gameover'>
        <h2>Fim de Jogo</h2>
        <p>Pontuação: X</p>
        <p>Você acertou y de n perguntas.</p>
        <img src={WellDone} alt="fim do quiz" />
        <button>Reiniciar Jogo</button>
    </div>
  )
}

export default GameOver