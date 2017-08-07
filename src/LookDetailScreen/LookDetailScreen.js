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
    Image,
    Platform
} from 'react-native';
import { Header, Body, Title, Button } from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';
import HorizontalList from '../Components/HorizontalList';
import Icon from 'react-native-vector-icons/Ionicons';

class LookDetailScreen extends Component{

    constructor(props, uri){
        super(props);
        this.state={
          uri:props.uri,
    };
  }

    backButton(){
      Actions.pop()
    }

    render() {
        return (
        <ScrollView style={styles.pageMargin}>
        <Header style={styles.headerStyle}>
          <Button style={styles.topBackButtonStyle} onPress={ () => this.backButton()} iconLeft>
              <Icon name="ios-arrow-back" style={styles.backArrowStyle}/>
          </Button>
            <Body>
              <Title style={styles.titleStyle}>
                Details
              </Title>
            </Body>
          </Header>
        <View style={styles.card}>
            <Image
                style={{flex:1, height:400}}
                source={{uri:this.state.uri}}
            />
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
                <Button style={styles.myButton} title="Suggest a Piece" onPress={() => this._onPress()}>
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
            borderWidth:3,
            borderColor:'black',
            backgroundColor: 'darkblue',
            flex:1
        },
        topBackButtonStyle:{
          width: 50,
          paddingLeft:9,
          backgroundColor:'transparent',
          position: 'absolute',
          zIndex:50,
          left:0,
          paddingLeft:0,
          alignItems:'center'
        },
        backArrowStyle: {
          color:'white',
          fontSize:22,
          marginLeft:'auto',
          marginRight:'auto',
        },
        headerStyle: {
          height:45,
          paddingTop:0,
          backgroundColor: 'rgb(180,0,0)'
        },
        pageMargin: {
          marginTop: (Platform.OS === 'ios') ? 18 : 0,
        },
    }
);

module.exports = LookDetailScreen;
