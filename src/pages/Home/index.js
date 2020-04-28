import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ReactLoading from 'react-loading';
import Emoji from '../../components/Emoji';
import './styles.css';

import api from '../../services/api';

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('suggestions').then(response => {
      setSuggestions(response.data);
      setLoading(false);
    })
  }, [])

  const history = useHistory();

  return (
    <div className="home-container">
      <h1>Caixa de sugestão da turma de SI.</h1>
      <button onClick={() => { history.push('/Cadastro') }}>contribuir</button>

      {loading ? <ReactLoading type={"spinningBubbles"} color={"black"} /> :
        <ul>
          {suggestions.map(suggestion => (
            <li key={suggestion.suggestion_id}>
              <h2>{suggestion.name}</h2>
              <p>{suggestion.suggestion}</p>
              <p className="date">{suggestion.date}</p>
            </li>
          )).reverse()}
        </ul>
      }

      <footer>
        <h4>&copy; 2020 - Desenvolvido por alunos de SI do Pitágoras <Emoji symbol='🚀' label='Emoji foguete' /></h4>
      </footer>

    </div>
  );
}