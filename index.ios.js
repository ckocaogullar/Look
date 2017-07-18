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
import HorizontalList from './src/Components/HorizontalList'

export default class Look extends Component {
  render() {
    return <Router>
    <Scene key="root">
            <Scene key="SplashScreen" component={SplashScreen} title="Splash Screen" hideNavBar={true} initial={true}/>
            <Scene key="LoginScreen" component={LoginScreen} title="Login Screen" hideNavBar={true} />
            <Scene key="LookDetailScreen" component={LookDetailScreen} title="LookDetailScreen " hideNavBar={true} />

            
        </Scene>
    </Router>
  }
}


AppRegistry.registerComponent('Look', () => Look);
