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



export default class Look extends Component {
  render() {
    return <Router>
    <Scene key="root">
            <Scene key="LoginScreen" component={LoginScreen} title="Login Screen" hideNavBar={true} initial={true}/>
          </Scene>
    </Router>
  }
}


AppRegistry.registerComponent('Look', () => Look);
