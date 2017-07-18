/**
 * Created by gizemayas on 16/07/2017.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ScrollView,
    Button,
    Image

} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import HorizontalList from '../Components/HorizontalList'


class LookDetailScreen extends Component{

    _onPress(){

    }

    render() {
        return (
        <ScrollView >
        <View style={styles.card}>
            <Image
                style={{flex:1, height:400}}
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
            <View>
            <HorizontalList style={{marginBottom:10}}/>
            </View>
            <View>
                <Button title="Suggest_piece" onPress={() => this._onPress()}>
                    <Text>
                        Suggest a Piece
                    </Text>
                </Button>
            </View>

        </ScrollView>


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
            marginBottom:10,
            marginTop: 50,
            borderWidth:1,
            borderColor: 'lightgrey'


        },
        myButton: {
            backgroundColor: 'darkblue',
            flex:1


        },
    }
)

module.exports = LookDetailScreen;




