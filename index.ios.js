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
import Tabs from './src/Tabs/Tabs'

export default class Look extends Component {
  render() {
    return <Router>
    <Scene key="root">
            <Scene key="SplashScreen" component={SplashScreen} title="Splash Screen " hideNavBar={true} initial={true} />
            <Scene key="LoginScreen" component={LoginScreen} title="Login Screen " hideNavBar={true} />
            <Scene key="NewsfeedScreen" component={NewsfeedScreen} title="NewsFeed Screen " hideNavBar={true} />
            <Scene key="ProfileScreen" component={ProfileScreen} title="Profile Screen" hideNavBar={true} />
            <Scene key="LookDetailScreen" component={LookDetailScreen} title="Look Detail Screen" hideNavBar={true} />
            <Scene key="Tabs" component={Tabs} title="Tabs" hideNavBar={true} />
        </Scene>
    </Router>
  }
}


AppRegistry.registerComponent('Look', () => Look);
