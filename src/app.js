/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView'
import LoginView from './LoginView'
import ArtistDetailView from './ArtistDetailView'

class prueba extends React.Component {
  render() {
    const isAndroid = Platform.OS === 'android'


    return <Router>
      <Scene key="login" component={LoginView} hideNavBar />
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid} />
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('prueba', () => prueba);
