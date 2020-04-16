import React from 'react';

import logoImg from '../../assets/logo.png';
import './styles.css';

import Emoji from '../../components/Emoji';

export default function RegisterSuggestion() {
  return (
    <div className="register-container">
      <img src={logoImg} alt="logo pitágoras" />
      <h4>Caixa de sugestão para alunos do Pitágoras</h4>

      <form>
        <label for="nome">Nome:*</label><br />
        <input type="text" name="nome" required /><br />
        <label for="sugestao">Sugestao:*</label><br />
        <textarea cols="30" rows="5" required></textarea><br />
        <label for="telefone">Telefone: <span>(opcional)</span></label><br />
        <input type="tel" name="telefone" placeholder="DDD + Numero" /><br />
        <button type="submit" class="button">Cadastrar</button>
      </form>

      <footer>
        <h4>&copy; 2020 - Desenvolvido por alunos de SI do Pitágoras <Emoji symbol='🚀' label='Emoji foguete' /></h4>
      </footer>

    </div>
  );
}