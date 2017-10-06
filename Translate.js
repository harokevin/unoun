import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';
//http://paletton.com/palette.php?uid=60g0L1karCN13P142KWifumq2t7k2QMV0jTq1gOY5vMbbyERk5ZajkQawe98Cdl69hK4Lk5jjb15TC84mbanpQcQuK

export default class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = { original: this.props.original, translation: this.props.translation };
  }

  /* _onDelete(translation) {
  //   this.props.onDelete(translation);
  // },*/

  /* onPress={() => this._onDelete(this.state)}> */
  

  render() {
    return (
      <View
        style={styles.container}>
        <Text
          style={[styles.element, styles.originalElement]}>
          {this.state.original}</Text>
        <Text
          style={[styles.element, styles.tranlationElement]}>
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
    borderColor: '#524D43',
    borderBottomWidth: 0.5,
  },
  element: {
    textAlign: 'left',
    padding: 2,
    paddingLeft: 15,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  originalElement: {
  },
  tranlationElement: {
    color: '#00B764',
  },
});


AppRegistry.registerComponent('unoun', () => Translate);
