import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import FetcherTextInput from './FetcherTextInput';
import Translate from './Translate';
import TranslationList from './TranslationList';
import store from 'react-native-simple-store';
import Translator from './Translator';

const TRANSLATIONS = 'Translations';

export default class App extends React.Component {


  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {translations: []};
  }

  async componentDidMount() {
    const simpleStore = await store.get(TRANSLATIONS);
    this.setState( prevState => {
      return {translations: simpleStore};
    });
  }

  addToTranslationList(packagedTranslation) {
    this.setState( prevState => {
      let newTranslation = [packagedTranslation];
      let existingTranslations = prevState.translations;
      let noExistingTraslations = !prevState.translations;

      if(noExistingTraslations) {
        return {translations: newTranslation};
      } else {
        return {translations: [...existingTranslations, ...newTranslation]};
      }
    });
  }

  async setToStorage(packagedTranslation) {
    try {
      store.push(TRANSLATIONS, packagedTranslation);
    } catch (error) {
      console.log(e + " Could not persist translation:");
      console.log(packagedTranslation);
    }
  }

  async translateInput(input) {
    let translator = new Translator();
    try {
      let translation = await translator.translate(input);
      return translation;
    } catch(e) {
      console.log(e + " Could not translate input: " + input);
    }
  }

  packageTranslation(input, translation) {
    return { original: input, translation: translation, };
  }

  async onSubmit(input) {
    let translation = await this.translateInput(input);
    packagedTranslation = this.packageTranslation(input, translation);
    await this.addToTranslationList(packagedTranslation);
    await this.setToStorage(packagedTranslation);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    marginBottom: 50,
  },
});
