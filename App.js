import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import FetcherTextInput from './FetcherTextInput';
import Translate from './Translate';
import TranslationList from './TranslationList';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {translations: translations};
  }

  async componentDidMount() {
    const items = await this.getAllFromStorage();

    this.setState( prevState => {
      const newState = [...prevState.translations, ...items];
      return {translations: newState};
    });
  }

  addToTranslationList(text) {
    this.setState( prevState => {
      newState = [{value: text, translation: ''}];
      return {translations: [...prevState.translations, ...newState]};
    });
  }

  async getAllFromStorage() {
    try {
      const keys  = await AsyncStorage.getAllKeys();
      const allItems = await AsyncStorage.multiGet(keys);
      const translationObjects = allItems.filter( storageItem => {
        try {
          const translationObject = JSON.parse(storageItem[1]);
          return translationObject;
        } catch(e) {
          console.log(e + ": could not parse translation model with value: " + storageItem[1]);
        }
      }).map( storageItem => {
        return JSON.parse(storageItem[1]);
      });
      return translationObjects;
    } catch (error) {
      console.log(e + ": could not fetch all items from AsyncStorage");
    }
  }

  async getFromStorage(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null){
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  async setToStorage(key) {
    item = "{\"value\": \"" + key + "\", \"translation\": \"" + key + "\"}";
    try {
      await AsyncStorage.setItem(key, item);
    } catch (error) {
      // Error saving data
    }
  }

  onSubmit(text) {
    this.addToTranslationList(text);
    this.setToStorage(text);
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
