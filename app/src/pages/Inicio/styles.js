import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f5',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight + 20
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  },

  list: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    flexGrow: 0
  },

  item: {
    borderBottomWidth: 2,
    marginBottom: 10
  },

  nome: {
    marginBottom: 5,
    fontWeight: 'bold'
  },

  sugestao: {
    marginBottom: 5
  },

  footer: {
    textAlign: 'center'
  }
});