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
import {Scene, Router} from 'react-native-router-flux';
import LoginScreen from './src/LoginScreen/LoginScreen';
import SplashScreen from './src/SplashScreen/SplashScreen';
import LookDetailScreen from './src/LookDetailScreen/LookDetailScreen'
import NewsfeedScreen from './src/NewsfeedScreen/NewsfeedScreen'
import ProfileScreen from './src/ProfileScreen/ProfileScreen'

export default class Look extends Component {
  render() {
    return <Router>
    <Scene key="root">

            <Scene key="ProfileScreen" component={ProfileScreen} title="Profile Screen " hideNavBar={true} initial={true} />


        </Scene>
    </Router>
  }
}


AppRegistry.registerComponent('Look', () => Look);
