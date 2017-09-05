import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetcherTextInput from './FetcherTextInput';
import Translation from './Translation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FetcherTextInput style={styles.input}></FetcherTextInput>
        <Translation></Translation>
        <Translation></Translation>
        <Translation></Translation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  input: {
    marginBottom: 150
  }
});
