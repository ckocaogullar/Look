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



import { Actions } from 'react-native-router-flux';
import LookDetailScreen from '../LookDetailScreen/LookDetailScreen'


class NewsFeedItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            Uri : props.Uri
        }

    }


    _Navigate() {
        this.props.navigator.push(
            {
                component: LookDetailScreen,
                passProps: {Uri: this.state.Uri}

            }
        )


    }


    render(){
        return (

                <View>

                    <TouchableHighlight onPress={() => this._Navigate('Look detail')}>
                        <Image source={{uri:this.state.Uri}} style={{flex:1, height:150}}></Image>
                    </TouchableHighlight>


                </View>

        );
    }

}


module.exports = NewsFeedItem;
