import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';

export default class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value, translation: this.props.translation };
  }

  getTranslation(response) {
    return response.data.translations[0].translatedText;
  }

  createRequest(value) {
    let translateApiEndpoint = "https://translation.googleapis.com/language/translate/v2?"
    let targetLanguage = "target="
    let spanish = "es&";
    let apiKey = "key=[]&";
    let query = "q=";
    let request = translateApiEndpoint + targetLanguage + spanish + apiKey + query + value;
    return request;
  }

  handleRequest(request) {
    return fetch(request).then((response) => {
      return response.json();
    }).then((response) => {
      translation = this.getTranslation(response);
      this.setState( prevState => {
        return {translation: translation};
      });
    });
  }

  translate(value) {
    try {
      if (value) {
        let request = this.createRequest(value);
        this.handleRequest(request);
      } else {
        return '';
      }
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.element}>
          {this.state.value}</Text>
        <Text
          style={styles.element}
          onPress={() => this.translate(this.state.value)}>
          {this.state.translation}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  element: {
    margin: 2,
    width: Dimensions.get('window').width / 2 -6,
    backgroundColor: '#f4f',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


AppRegistry.registerComponent('unoun', () => Translate);
