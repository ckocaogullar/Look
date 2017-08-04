import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableHighlight,
    Image,
    Slider
} from 'react-native';
import { Thumbnail, Header, Body } from 'native-base'
import Masonry from 'react-native-masonry';

// list of images
const data = [
    {
        data: {
            caption: 'Summer Recipies',
            user: {
                name: 'Henry'
            },
        },
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/32/7f/d9/327fd98ae0146623ca8954884029297b.jpg',

    },
    {
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/b1/21/df/b121df29b41b771d6610dba71834e512.jpg'
    },
    {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA'
    },
    {
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/5a/15/0c/5a150cf9d5a825c8b5871eefbeda8d14.jpg'
    },
    {
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/04/63/3f/04633fcc08f9d405064391bd80cb0828.jpg'
    },
    {
        uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRWkuUMpLyu3QnFu5Xsi_7SpbabzRtSis-_QhKas6Oyj3neJoeug'
    },
    {
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/a5/c9/43/a5c943e02b1c43b5cf7d5a4b1efdcabb.jpg'
    },
    {
        uri: 'https://i0.wp.com/www.youbodyhealth.com/wp-content/uploads/2016/08/Delicious-Foods-can-Harm-Your-Brain.jpg?'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/29/15/campaign_images/buzzfeed-prod-fastlane-03/26-delicious-korean-foods-you-need-in-your-life-2-30138-1490814365-13_dblbig.jpg',
    },
    {
        uri: 'https://pbs.twimg.com/media/B59AOmICQAAiGGj.png',
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr05/17/17/enhanced-buzz-orig-2548-1387320822-8.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/17/15/enhanced/webdr13/enhanced-6527-1426620797-18.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/1/15/enhanced/webdr02/enhanced-18393-1417466529-5.jpg'
    },
    {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXTmdaGSOFK8iBeYqoA6_XiQGGWvu6KGnqAxXYyvJA-JKin8ImQ'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/3/15/enhanced/webdr06/enhanced-24427-1428089292-2.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/28/12/asset/buzzfeed-prod-web-09/sub-buzz-24236-1482944714-1.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/7/17/enhanced/webdr08/enhanced-buzz-8155-1457391039-5.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/30/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-24597-1490890739-1.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/14/20/campaign_images/webdr15/which-delicious-mexican-food-item-are-you-based-o-2-20324-1452822970-1_dblbig.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-12/30/16/enhanced/webdr04/enhanced-15965-1451509932-6.jpg'
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
            <ScrollView style={{backgroundColor: '#f4f4f4'}}>
                <View>
                    <Header>
                        <Thumbnail circle small source={{uri:"https://www.looktheapp.com/api/dress_1.png"}} />
                        <Body>
                        <Text> Profile name </Text>
                        </Body>
                    </Header>
                    <Text>Follower count</Text>


                </View>


                <View style={{height: '100%', padding: this.state.padding}}>
                    <Masonry
                        bricks={data}
                        columns={this.state.columns}/>
                </View>
            </ScrollView>
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