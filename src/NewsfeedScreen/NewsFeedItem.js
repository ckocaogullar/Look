import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Button,
    Image,
    TouchableHighlight

} from 'react-native';

import { Actions } from 'react-native-router-flux';
import LookDetailScreen from '../LookDetailScreen/LookDetailScreen'


class NewsFeedItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            Uri : props.imageUri,
            key : ""
        }

    }

    _onPressButton() {
        Actions.LookDetailScreen(this.state.imageUri);

    }


    render(){
        return (

                <View>

                    <TouchableHighlight onPress={() => this._onPressButton()}>
                        <Image source={{uri:this.state.Uri}} style={{flex:1, height:150}}></Image>
                    </TouchableHighlight>


                </View>

        );
    }

}


module.exports = NewsFeedItem;
