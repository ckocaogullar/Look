import React, { Component } from 'react';
import { Container, Content, Text, Form, Item, Input, Button, Header, Title, Body, CheckBox, ListItem} from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  Alert,
  AsyncStorage,
  Platform,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
const window = Dimensions.get('window');

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { textUser: '',
                   textPassword: '',
                   statusCode: "",
                   showIndicator: false,
                    };
}

componentWillMount(){
  var storageName;
  var storagePass;

  AsyncStorage.getItem('userName', (err, result) => {
      storageName = result;
      AsyncStorage.getItem('passWord', (err, result2) => {
          storagePass = result2;
          if(storageName == null && storagePass == null){
          }else {
            Actions.Tabs();

          }
      });
  });
}

isLoading(){
  if(this.state.showIndicator){
    return(
      <View style={styles.loading}><ActivityIndicator animating={true} size="large" color='white'/></View>
    );
  }
}


  _onNameInput(text){
    this.setState({textUser: text});

}

 _onPassInput(text){
  this.setState({ textPassword: text});
}

_ifSuccessLogin(){
  this.setState({showIndicator:false});
  if(this.state.statusCode==200){
        Actions.Tabs();
        AsyncStorage.setItem('userName', this.state.textUser);
        AsyncStorage.setItem('passWord', this.state.textPassword);
  }else if(this.state.statusCode==406){
    this.setState({textUser: ""});
    this.setState({textPassword: ""});
    Alert.alert('Username or password is incorrect')
  }
}

  _onPressButton() {
    var temp = this;
  this.setState({showIndicator:true});

}

render() {
var temp = this;
return (
  <Container style={styles.pageMargin}>
  {temp.isLoading()}

  <View style={styles.viewStyle}>
          <View style={styles.logoView}>
          <Image source={require('../Images/logo.png')} style={styles.logoStyle}/>
          </View>

          <Form>
          <View style={{paddingRight:15}}>
              <Item>
                  <Input
                  placeholder = "Username"
                  onChangeText={text => temp._onNameInput(text)}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  clearButtonMode={'always'}
                  value={this.state.textUser}/>
              </Item>
              <Item>
                  <Input
                  placeholder = "Password"
                  onChangeText={text => temp._onPassInput(text)}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  clearButtonMode={'always'}
                  secureTextEntry={true}
                  value={this.state.textPassword} />
              </Item>
      </View>

              <Button block style={styles.button} onPress={() => this._onPressButton()}>
                    <Text style={styles.buttonText}>GİRİŞ YAP</Text>
              </Button>

          </Form>
          <View style={styles.infoText}>
          <Text style={{textAlign: 'center'}}>Look uygulamasına hoş geldiniz!</Text>
          </View>
            </View>
  </Container>
);
}
}



var styles = {
  button: {
    marginTop: 30,
    marginRight:15,
    marginLeft:15,
    backgroundColor:'rgb(58,84,165)'
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom:50
  },
  pageMargin: {
    marginTop: (Platform.OS === 'ios') ? 18 : 0,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  logoStyle: {
    height: 120,
    resizeMode: 'contain'
  },
  logoView: {
    alignItems:'center',
    paddingBottom:20
  },
  infoText: {
    paddingTop:18,
    paddingLeft:15,
    paddingRight:15
  },
  loading:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:window.height,
    width:window.width,
    position:'absolute',
    backgroundColor: 'rgba(50, 50, 50, 0.6)',
    zIndex:999
  },
}

module.exports = LoginScreen;
