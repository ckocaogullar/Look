import React, { Component } from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {List, ListItem} from 'react-native';


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

];





class NewsfeedScreen extends Component {

  _renderItem(item){
    return (
        <View>
          <Image style={{flex:1, height:50, marginBottom:5}} source={{uri:item.image}}/>
        </View>

    );



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
