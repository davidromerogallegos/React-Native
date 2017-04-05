/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  ListView,
} from 'react-native';


import ArtistBox from './ArtistBox';

export default class ArtistList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(props.artists)
    };
  }

  render() {
    const artist = {
        image: 'http://www.tribalmixes.com/pic/dj/new/1824612_orig.jpg',
        name: 'Ace Ventura',
        likes: 200,
        comments: 140,
      }
    const artists = Array(500).fill(artist);

    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={(artist) => <ArtistBox artist={artist} />}
        />
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
