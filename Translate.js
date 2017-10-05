import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';

export default class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value, translation: this.props.translation };
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
