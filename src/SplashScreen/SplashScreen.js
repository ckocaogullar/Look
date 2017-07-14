import React, {
  Component
} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  ActivityIndicator,
  Image
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import {
  Thumbnail
} from 'native-base';
import LoginScreen from '../LoginScreen/LoginScreen';

class SplashScreen extends Component {

componentWillMount(){
  setTimeout(function(){ Actions.LoginScreen() }, 3000);
}

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
      <Image source={require('../Images/logo.png')} style={{height: 150, resizeMode: 'contain'}}/></View>
    )
  }
}

module.exports = SplashScreen;
