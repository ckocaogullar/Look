import React, { Component } from 'react';
import {View, Text, FlatList, Image, Button, TouchableHighlight} from 'react-native';
import {
    AppRegistry,
    StyleSheet,
    Alert,
    AsyncStorage,
    Platform,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import { Router, Scene, Actions } from 'react-native-router-flux';
import LookDetailScreen from '../LookDetailScreen/LookDetailScreen'

const images = [
    {
        key:1,
        name: 'res 1',
        image: 'https://www.looktheapp.com/api/dress_1.png'
    },
    {
        key:2,
        name: 'res 2',
        image: 'https://www.looktheapp.com/api/dress_2.png'
    },
    {
        key:3,
        name: 'res 3',
        image: 'https://www.looktheapp.com/api/dress_3.png'
    },
    {
        key:4,
        name: 'res 4',
        image: 'https://www.looktheapp.com/api/dress_4.png'
    },
    {
        key:5,
        name: 'res 5',
        image: 'https://www.looktheapp.com/api/dress_5.png'
    },

];





class NewsfeedScreen extends Component {


  _renderItem(item){
    return (
        <View>

            <TouchableHighlight onPress={() => this._onPressButton()}>
                <Image source={{uri:item.image}} style={{flex:1, height:150}}></Image>
            </TouchableHighlight>


        </View>

    );



  }

    _onPressButton() {
        var temp = this;
        this.setState({showIndicator:true});
        Actions.LoginScreen();

    }

    render() {
      return (
          <View style={{flex:1}}>

          <FlatList

          renderItem={({item}) => this._renderItem(item)}
          data={images}
          />

          </View>


      );
    }

  }



module.exports = NewsfeedScreen;
