import React, { Component } from "react";

import {Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item} from "native-base";




class AddLookScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected5: "key2"
        };
    }
    onValueChange5(value) {
        this.setState({
            selected5: value
        });
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Add Look</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Picker
                            mode="dropdown"
                            headerStyle={{ backgroundColor: "#b95dd3" }}
                            headerBackButtonTextStyle={{ color: "#fff" }}
                            headerTitleStyle={{ color: "#fff" }}
                            selectedValue={this.state.selected5}
                            onValueChange={this.onValueChange5.bind(this)}
                        >
                            <Item label="Camera Roll" value="key0" />
                            <Item label="Camera" value="key1" />
                        </Picker>
                    </Form>
                </Content>
            </Container>
        );
    }
}

module.exports= AddLookScreen;