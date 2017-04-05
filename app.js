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
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistBox from './ArtistBox';

export default class prueba extends Component {

  render() {
    const artist = {
      image: 'http://www.tribalmixes.com/pic/dj/new/1824612_orig.jpg',
      name: 'Ace Ventura',
      likes: 200,
      comments: 140,
    }

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

AppRegistry.registerComponent('prueba', () => prueba);
