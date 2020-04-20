import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import './styles.css';
import Emoji from '../../components/Emoji';

import api from '../../services/api';

export default function RegisterSuggestion() {
   const [name, setName] = useState('');
   const [suggestion, setSuggestion] = useState('');
   const [phone, setPhone] = useState('');

   const history = useHistory();

   const inputName = useRef(null);
   const textArea = useRef(null);
   const inputPhone = useRef(null);

   function toTitleCase(str) {
      return str.replace(
         /\w\S*/g,
         function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
         }
      );
   }

   function dataAtualFormatada() {
      let data = new Date(),
         dia = data.getDate().toString(),
         diaF = (dia.length === 1) ? '0' + dia : dia,
         mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
         mesF = (mes.length === 1) ? '0' + mes : mes,
         anoF = data.getFullYear();
      return diaF + "/" + mesF + "/" + anoF;
   }

   async function handleSubmit(e) {
      e.preventDefault();

      if (name.length <= 2) {
         alert('Nome muito curto!');
         inputName.current.focus();
         return;
      }
      else if (suggestion.length <= 20) {
         alert('Sugestão muito curta!');
         textArea.current.focus();
         return;
      }
      else if (phone.length > 0 && phone.length < 10) {
         alert('Numero muito curto!');
         inputPhone.current.focus();
         return;
      }

      const data = {
         name,
         suggestion,
         phone,
         date: dataAtualFormatada()
      };

      try {
         await api.post('suggestions', data);

         alert('Cadastrado, Obrigado! :)');

         history.push('/');
      } catch (error) {
         alert('Erro no cadastro, tente novamente!');
      }
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
               onChange={e => setName(toTitleCase(e.target.value))}
               ref={inputName}
            /><br />
            <label for="sugestao">Sugestao:*</label><br />
            <textarea
               cols="30"
               rows="5"
               required
               value={suggestion}
               onChange={e => setSuggestion(e.target.value)}
               ref={textArea}
            ></textarea><br />
            <label for="telefone">Telefone: <span>(opcional)</span></label><br />
            <input
               type="tel"
               name="telefone"
               placeholder="DDD + Numero"
               value={phone}
               onChange={e => setPhone(e.target.value)}
               ref={inputPhone}
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