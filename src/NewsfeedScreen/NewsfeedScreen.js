import React, { Component } from 'react';
import {List, ListItem} from 'native-base';
import {View, Text, FlatList, Image, Button, TouchableHighlight, ListView} from 'react-native';
import {
    AppRegistry,
    StyleSheet,
    Alert,
    AsyncStorage,
    Platform,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import { Router, Scene, Actions } from 'react-native-router-flux';
import NewsFeedItem from '../NewsfeedScreen/NewsFeedItem'
class NewsfeedScreen extends Component {

    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        listData: ds.cloneWithRows(['1', '2', '3', '4', '5']),
      };
    }

    render() {
      return (
          <View style={{flex:1}}>
            <ListView
                dataSource={this.state.listData}
                renderRow={(item) =>
                        <NewsFeedItem
                        num={item}
                        />
                }
                >
            </ListView>
          </View>
      );
    }

  }



module.exports = NewsfeedScreen;
