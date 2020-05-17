import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f5',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center'
  },

  title: {
    marginTop: 10,
    color: '#737380',
    fontSize: 13
  },

  Form: {
    marginTop: 20,
    marginBottom: 20
  },

  textInputsForm: {
    fontSize: 20,
    marginBottom: 5
  },

  input: {
    backgroundColor: '#fff',
    height: 40,
    width: 280,
    borderRadius: 5,
    marginBottom: 5,
    padding: 10
  },

});