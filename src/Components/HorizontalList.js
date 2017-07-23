import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList

} from 'react-native'


const suggestions = [
    {
        key:1,
        name: 'res 1',
        image: 'https://www.looktheapp.com/api/dress_1.png'
    },
    {
        key:2,
        name: 'res 2',
        image: 'https://www.looktheapp.com/api/dress_2.png'
    },
    {
        key:3,
        name: 'res 3',
        image: 'https://www.looktheapp.com/api/dress_3.png'
    },
    {
        key:4,
        name: 'res 4',
        image: 'https://www.looktheapp.com/api/dress_4.png'
    },

];



class HorizontalList extends Component {

    _renderItem(item)
    {
        return (
            <View>
                <Image style={{width:100, height: 100, marginLeft:5}} source={{uri:item.image}}/>
            </View>

        );

    }

    render() {
        return (

            <View style={{flex:1}}>

            <FlatList
                horizontal
                SeparatorComponent= {() => <View style={{width:5}}/>}
                renderItem= {({item}) => this._renderItem(item)}
                data={suggestions}
            />
            </View>
        );
    }


}

module.exports = HorizontalList;
