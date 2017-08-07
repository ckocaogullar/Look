import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Button,
    Image,
    TouchableHighlight,
    Navigator

} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LookDetailScreen from '../LookDetailScreen/LookDetailScreen';


class NewsFeedItem extends Component{

  constructor(props) {
  super(props);
  this.state = {
    num:props.num,
  };
}
    _navigate() {
      Actions.LookDetailScreen({
        uri:'https://www.looktheapp.com/api/dress_'+this.state.num+'.png',
      });
    }

    render(){
        return (
                <View>
                    <TouchableHighlight onPress={() => this._navigate()}>
                        <Image source={{uri:'https://www.looktheapp.com/api/dress_'+this.state.num+'.png'}} style={{flex:1, height:150}}></Image>
                    </TouchableHighlight>
                </View>
        );
    }

}


module.exports = NewsFeedItem;
