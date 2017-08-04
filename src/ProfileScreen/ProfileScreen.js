import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,

    ScrollView,
    View,
    TouchableHighlight,
    Image,
    Slider
} from 'react-native';
import Masonry from 'react-native-masonry';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Thumbnail,
     } from 'native-base';

// list of images

// TODO: BAĞLANTILAR EKSİK HALA, FOOTER YOK HEADER DA ICONLAR EKSIK
const data = [
    {
        data: {
            caption: 'Summer Recipies',
            user: {
                name: 'Henry'
            },
        },
        uri: 'https://www.looktheapp.com/api/dress_1.png',

    },
    {
        uri: 'https://www.looktheapp.com/api/dress_1.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_2.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_3.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_4.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_5.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_6.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_7.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_8.png',
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_5.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_6.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_7.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_8.png',
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_2.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_3.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_4.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_5.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_6.png'
    },
    {
        uri: 'https://www.looktheapp.com/api/dress_7.png'
    }

];

class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            columns: 3,
            padding: 5
        };
    }

    render() {
        return (

                <Container>
                    <Header>
                        <Left>
                            <Button  light>
                                <Text> Back icon</Text>
                            </Button>
                        </Left>
                        <Body>
                        <Text> Profile </Text>
                        </Body>
                    <Right/>
                    </Header>

                    <Content>
                        <View>
                            <Header style={{height:100}}>
                                <Left>
                                    <Thumbnail large source={{uri:"https://www.looktheapp.com/api/dress_3.png"}}></Thumbnail>
                                </Left>
                                <Body>
                                    <Text top> Gizo_Polar </Text>
                                    <Text>Followers</Text>
                                </Body>

                                <Right>

                                </Right>
                            </Header>
                        </View>
                        <ScrollView style={{backgroundColor: '#f4f4f4'}}>
                        <View style={{height: '100%', padding: this.state.padding}}>
                            <Masonry
                                bricks={data}
                                columns={this.state.columns}/>
                        </View>
                        </ScrollView>
                    </Content>
                    <Footer>
                            <FooterTab>
                                <Button full>
                                    <Text>Footer</Text>
                                </Button>
                            </FooterTab>
                        </Footer>

                </Container>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        flex: 1
    },
    button: {
        backgroundColor: '#dbdcdb',
        padding: 10,
        marginRight: 4,
        borderRadius: 4,
        borderBottomColor: '#7b7b7b',
        borderBottomWidth: 5
    },
    buttonText: {
        color: '#404040'
    },
    center: {
        marginTop: 30,
        marginBottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerTop: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    userPic: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginRight: 10
    },
    userName: {
        fontSize: 20
    }
});

module.exports = ProfileScreen;