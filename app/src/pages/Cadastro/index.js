import React, { useState, useRef } from 'react';
import { View, Image, Text, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [phone, setPhone] = useState('');

  const inputName = useRef(null);
  const inputSuggestion = useRef(null);
  const inputPhone = useRef(null);

  const navigation = useNavigation();

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

  async function handleSubmit() {
    if (name.length <= 2) {
      Alert.alert('Nome muito curto!');
      inputName.current.focus();
      return;
    }
    else if (suggestion.length <= 20) {
      Alert.alert('Sugestão muito curta!');
      inputSuggestion.current.focus();
      return;
    }
    else if (phone.length > 0 && phone.length < 10) {
      Alert.alert('Numero muito curto!');
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

      Alert.alert('Cadastrado, Obrigado! :)');

      navigation.navigate('Inicio');
    } catch (error) {
      Alert.alert('Erro no cadastro, tente novamente!');
    }
  }


  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Text style={styles.title}>Caixa de sugestão para alunos do Pitágoras</Text>

      <View style={styles.Form}>
        <Text style={styles.textInputsForm} >Nome:*</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
          ref={inputName}
        />

        <Text style={styles.textInputsForm} >Sugestao:*</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setSuggestion(text)}
          value={suggestion}
          ref={inputSuggestion}
        />

        <Text style={styles.textInputsForm} >Telefone:(opcional)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPhone(text)}
          value={phone}
          ref={inputPhone}
        />

        <Button
          title="Cadastrar"
          onPress={() => handleSubmit()}
        />
        <Button
          title="Voltar"
          onPress={() => navigation.navigate('Inicio')}
        />
      </View>

      <Text>© 2020</Text>

    </View>
  );
}