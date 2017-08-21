//Ceren

import React, {Component} from 'react';
import {TouchableOpacity, Icon, Platform} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import TabCore from './TabCore';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import NewsfeedScreen from '../NewsfeedScreen/NewsfeedScreen'
import ProfileScreen from '../ProfileScreen/ProfileScreen'
import AddLookScreen from '../AddLookScreen/AddLookScreen'

import {
  AppRegistry,
  Text,
  ScrollView,
  View,
  AsyncStorage,
  StyleSheet
} from 'react-native';


class Tabs extends Component{

  componentWillMount(){

  }

  render() {
    return (
      <ScrollableTabView
        style={styles.pageMargin}
        initialPage={0}
        tabBarPosition={"bottom"}
        renderTabBar={() => <TabCore />}
        >
        <View tabLabel="ios-list-box" tabColor style={styles.tabView}>
            <NewsfeedScreen />
        </View>
          <View tabLabel="ion-ios-plus-outline" tabColor style={styles.tabView}>
              <AddLookScreen />
          </View>

        <View tabLabel="ios-flower" style={styles.tabView}>
            <ProfileScreen />
        </View>
      </ScrollableTabView>
    )
  }

    _onPressButton() {
        var temp = this;
        this.setState({showIndicator:true});
        Actions.Tabs();

    }

};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
  },
  pageMargin: {
    marginTop: (Platform.OS === 'ios') ? 18 : 0,
  },
}
);

module.exports = Tabs;
