import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import Translate from './Translate';

export default class TranslationList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.translations}
          renderItem={({item}) => <Translate value={item.value} translation={item.translation}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

AppRegistry.registerComponent('unoun', () => TranslationList);
