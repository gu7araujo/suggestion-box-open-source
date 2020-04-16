import React from 'react';
import { useHistory } from 'react-router-dom';

import Emoji from '../../components/Emoji';
import './styles.css';

export default function Home() {
  const history = useHistory();

  return (
    <div className="home-container">
      <h1>Caixa de sugestão da turma de SI.</h1>
      <button onClick={() => { history.push('/Cadastro') }}>contribuir</button>

      <ul>
        <li>
          <h2>Gustavo Araujo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="date">01/04/2020</p>
        </li>

        <li>
          <h2>Laura Alves</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="date">01/04/2020</p>
        </li>

        <li>
          <h2>Matheus Carvalho</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="date">01/04/2020</p>
        </li>
        <li>
          <h2>Iago Silva</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="date">01/04/2020</p>
        </li>

        <li>
          <h2>Erick Ribeiro</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="date">01/04/2020</p>
        </li>

        <li>
          <h2>Alef Henrique</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="date">01/04/2020</p>
        </li>
      </ul>

      <footer>
        <h4>&copy; 2020 - Desenvolvido por alunos de SI do Pitágoras <Emoji symbol='🚀' label='Emoji foguete' /></h4>
      </footer>

    </div>
  );
}