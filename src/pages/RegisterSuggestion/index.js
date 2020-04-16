import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import './styles.css';
import Emoji from '../../components/Emoji';

export default function RegisterSuggestion() {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, suggestion, phone);

  }

  return (
    <div className="register-container">
      <img src={logoImg} alt="logo pitágoras" />
      <h4>Caixa de sugestão para alunos do Pitágoras</h4>

      <form onSubmit={handleSubmit}>
        <label for="nome">Nome:*</label><br />
        <input
          type="text"
          name="nome"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        /><br />
        <label for="sugestao">Sugestao:*</label><br />
        <textarea
          cols="30"
          rows="5"
          required
          value={suggestion}
          onChange={e => setSuggestion(e.target.value)}
        ></textarea><br />
        <label for="telefone">Telefone: <span>(opcional)</span></label><br />
        <input
          type="tel"
          name="telefone"
          placeholder="DDD + Numero"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        /><br />
        <button type="submit" class="button">Cadastrar</button>
        <button class="button" onClick={() => { history.push('/') }}>Voltar</button>
      </form>

      <footer>
        <h4>&copy; 2020 - Desenvolvido por alunos de SI do Pitágoras <Emoji symbol='🚀' label='Emoji foguete' /></h4>
      </footer>

    </div>
  );
}