import React, {Component} from 'react';
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


class SearchScreen extends Component {

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button  light>
                            <Text> Back icon</Text>
                        </Button>
                    </Left>
                    <Body>
                    <Text> Search </Text>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Text>
                        Search field
                    </Text>
                    //TODO: butik içeriyorsa ilk sıra butik olacak ikinci sıra normal look
                    //butik kısmı yana kayan liste, iconlar
                    <Text>
                        Content
                    </Text>
                </Content>

            </Container>
        )
    }



}

module.exports= SearchScreen;
