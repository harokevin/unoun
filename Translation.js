import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';

export default class FetcherTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { original: 'original', translation: 'transaltion' };
  }


  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.element}>
          {this.state.original}</Text>
        <Text
          style={styles.element}>
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


AppRegistry.registerComponent('unoun', () => FetcherTextInput);
