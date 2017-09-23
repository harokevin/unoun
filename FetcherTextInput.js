import React, { Component } from 'react';
import { AppRegistry, TextInput, Text, View, StyleSheet } from 'react-native';

export default class FetcherTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  onSubmit(text) {
    this.props.onSubmit(text);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Enter a word you dont know</Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={ (event) => this.onSubmit(event.nativeEvent.text)}/>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    top: 0,
  },

  input: {
    width: 300,
    height:40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 100,
  },
});

AppRegistry.registerComponent('unoun', () => FetcherTextInput);
