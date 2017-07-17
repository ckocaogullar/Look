/**
 * Created by gizemayas on 16/07/2017.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Image

} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import HorizontalList from '../Components/HorizontalList'


class LookDetailScreen extends Component{
    render() {
        return (

        <View style={styles.card}>
            <Image
                style={{flex:1}}
                source={{uri:'https://www.looktheapp.com/api/dress_6.png'

                }}/>
            <View style={{margin:20}}>
                <Text style={{fontSize:20}}>
                    Evening Look
                </Text>
                <Text style={{fontSize:15, color: 'darkgrey'}}>
                    Gizo_polar
                </Text>
            </View>

        </View>



        );



    }




}

const styles = StyleSheet.create(
    {
        card: {
            backgroundColor: 'white',
            flex: 1,
            overflow: 'hidden',
            margin: 10,
            marginBottom:100,
            marginTop: 50,
            borderWidth:1,
            borderColor: 'lightgrey'


        },
    }
)

module.exports = LookDetailScreen;




