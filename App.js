import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetcherTextInput from './FetcherTextInput';
import Translate from './Translate';
import TranslationList from './TranslationList';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {translations: translations};
  }

  addToTranslationList(text) {
    this.setState( prevState => {
      newState = [{value: text, translation: ''}];
      return {translations: [...prevState.translations, ...newState]};
    });
  }

  onSubmit(text) {
    this.addToTranslationList(text);
  }

  render() {
    return (
      <View style={styles.container}>
        <FetcherTextInput style={styles.input} onSubmit={this.onSubmit}></FetcherTextInput>
        <TranslationList translations={this.state.translations}/>
      </View>
    );
  }
}

var translations = [
  {value: 'a', translation: 't'},
  {value: 'a', translation: 't'},
  {value: 'a', translation: 't'}
];

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
