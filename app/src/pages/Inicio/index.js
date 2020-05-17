import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function Inicio() {
  const [suggestions, setSuggestions] = useState([]);

  const navigation = useNavigation();

  async function loadSuggestions() {
    const response = await api.get('suggestions');

    setSuggestions(response.data);
  }

  useEffect(() => {
    loadSuggestions();
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caixa de sugestão</Text>
      <Button
        title="contribuir"
        onPress={() => navigation.navigate('Cadastro')}
      />

      <FlatList
        inverted
        style={styles.list}
        data={suggestions}
        keyExtractor={suggestion => String(suggestion.suggestion_id)}
        renderItem={({ item: suggestion }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{suggestion.name}</Text>
            <Text style={styles.sugestao}>{suggestion.suggestion}</Text>
            <Text style={styles.data}>{suggestion.date}</Text>
          </View>
        )}
      />

      <Text style={styles.footer}>© 2020</Text>
    </View>
  );
}