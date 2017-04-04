/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,

  Text,
  View
} from 'react-native';

export default class prueba extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style ={[styles.box, styles.red]} />
        <View style ={[styles.box, styles.green]} />
        <View style ={[styles.box, styles.blue]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
  },
  box: {
    width:200,
    height: 200,
    backgroundColor: 'black'
  },
  red: {
    backgroundColor: 'red',
  },
  green: {
    flex: 1,
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue',
  }
});

AppRegistry.registerComponent('prueba', () => prueba);
