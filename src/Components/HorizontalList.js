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
        image: 'https://www.looktheapp.com/api/dress_1.png'
    },
    {
        key:2,
        image: 'https://www.looktheapp.com/api/dress_2.png'
    },
    {
        key:3,
        image: 'https://www.looktheapp.com/api/dress_3.png'
    },

]



class HorizontalList extends Component {

    _renderItem(item)
    {
        return (

                <Image style={{width:50}} source={{uri: item.image}}/>

        );

    }

    render() {
        return (

            <View>

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
