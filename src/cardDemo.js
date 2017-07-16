import React, { Component } from 'react';
import { Image, AppRegistry, StyleSheet, View, Modal, TouchableHighlight, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Spinner } from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';
import ProjectDetail from '../projectDetail/projectDetail';
import Icon from 'react-native-vector-icons/Ionicons';


class ProjectCards extends Component {

    constructor(props) {
        super(props);
        this.state ={
            title: props.title,
            host: props.host,
            poolName: props.poolName,
            status: props.status,
            /*    logo: props.logo */
        };
    }

    _openDetail (){
//  Actions.customModal({item : item});
        Actions.ProjectDetail({
            title:this.state.title,
            host:this.state.host,
            poolName:this.state.poolName,
            status:this.state.status,
            /*   logo: this.state.logo */
        });
    }

    render() {
        return (
            <Left>
                <Body>
                <TouchableHighlight onPress={() => this._openDetail()} activeOpacity={1}>
                    <View style={{flex:1, flexDirection: 'row', backgroundColor:'white'}}>
                        <Thumbnail source={{uri: this.state.logo}} style={styles.thumbnailStyle}/>
                        <View style={{marginLeft: 15, paddingTop:10}}>
                            <Text>{this.state.title}</Text>
                            <Text note>{this.state.status}</Text>
                        </View>
                        <Icon name="ios-arrow-forward" style={styles.arrowStyle}/>
                    </View>
                </TouchableHighlight>
                </Body>
            </Left>
        );
    }
}

var styles = {
    arrowStyle: {
        color:'#c9c9c9',
        fontSize:25,
        position:'absolute',
        right:0,
        alignSelf:'center'
    },
    thumbnailStyle: {
        resizeMode: 'contain',
        borderColor:'#d8d8d8',
        borderWidth:1
    }
}

module.exports = ProjectCards;