import React from 'react';
import {
  FlatList, StyleSheet,
  Text, Image,
  View, ScrollView
} from 'react-native';
import {Icon, Thumbnail } from 'native-base';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      photo_feed:[0,1,2,3,4],
      refresh: false
    }
  }

  static navigationOptions = {
    headerLeft :<View style={{padding:20}}><Icon name="camera" /></View>,
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
    },
    title: 'Instagram',
    headerRight: <View style={{padding:20}}><Icon name="paper-plane"/></View>
  };

  loadNew = () =>{
    this.setState({
      refresh:true
    });
    this.setState({
      photo_feed:[5,6,7,8,9],
      refresh: false
    });
  }

  render() {
    return (
      <View style={{ flex:1}}>
        <View style={{flexDirection:'row', height:30,
          justifyContent:'space-between', alignItems:'center',
          paddingHorizontal:7}}>
          <Text>Stories</Text>
          <Text>Watch All</Text>
        </View>
        <View style={{paddingBottom:10, height:70}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems:'center',
                paddingStart: 5,
                paddingEnd: 5
              }}
              >
              <Thumbnail
                style={{marginHorizontal:5, borderColor:'pink',
                borderWidth: 2}}
                source={
                  require('../assets/images/1.png')
                }
              />
              <Thumbnail
                style={{marginHorizontal:5, borderColor:'pink',
                borderWidth: 2 }}
                source={
                  require('../assets/images/2.png')
                }
              />
              <Thumbnail
                style={{marginHorizontal:5, borderColor:'pink',
                borderWidth: 2 }}
                source={
                  require('../assets/images/3.png')
                }
              />
              <Thumbnail
                style={{marginHorizontal:5, borderColor:'pink',
                borderWidth: 2 }}
                source={
                  require('../assets/images/4.png')
                }
              />
              <Thumbnail
                style={{marginHorizontal:5, borderColor:'pink',
                borderWidth: 2 }}
                source={
                  require('../assets/images/5.png')
                }
              />
              <Thumbnail
                style={{marginHorizontal:5, borderColor:'pink',
                borderWidth: 2 }}
                source={
                  require('../assets/images/7.png')
                }
              />
              <Thumbnail
                style={{marginHorizontal:5, borderColor:'pink',
                borderWidth: 2 }}
                source={
                  require('../assets/images/8.png')
                }
              />
            </ScrollView>
        </View>
        <FlatList
          refreshing={this.state.refresh}
          onRefresh={this.loadNew}
          data={this.state.photo_feed}
          keyExtractor={(item, index) => index.toString()}
          style={{flex:7, backgroundColor:'#eee'}}
          renderItem={({item, index}) => (
          <View>
            <View style={{flexDirection:'row',marginTop:20,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Thumbnail
                  style={{marginHorizontal:5, borderColor:'pink',
                  borderWidth: 2 }}
                  source={
                    require('../assets/images/1.png')
                  }
                />
                <Text>@UserName</Text>
              </View>
            </View>
            <View>
              <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
              style={{resizeMode:'cover', width:'100%', height:275}}/>
            </View>
            <View>
              <View style={{flexDirection:'row'}}>
                <View style={{padding:5}}><Icon name="heart" /></View>
                <View style={{padding:5}}><Icon name="chatboxes" /></View>
                <View style={{padding:5}}><Icon name="paper-plane" /></View>
              </View>
              <Text>Caption Text here ...</Text>
              <Text>View Comment ...</Text>
              <Text style={{fontSize:10}}>Time Ago</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:20,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <Thumbnail
                  style={{marginHorizontal:5, borderColor:'pink',
                  borderWidth: 2 }}
                  source={
                    require('../assets/images/2.png')
                  }
                />
                <Text>@UserName</Text>
              </View>
            </View>
            <View>
              <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
              style={{resizeMode:'cover', width:'100%', height:275}}/>
            </View>
            <View>
            <View style={{flexDirection:'row'}}>
                <View style={{padding:5}}><Icon name="heart" /></View>
                <View style={{padding:5}}><Icon name="chatboxes" /></View>
                <View style={{padding:5}}><Icon name="paper-plane" /></View>
              </View>
              <Text>Caption Text here ...</Text>
              <Text>View Comment ...</Text>
              <Text style={{fontSize:10}}>Time Ago</Text>
            </View>

            <View style={{flexDirection:'row',marginTop:20,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Thumbnail
                  style={{marginHorizontal:5, borderColor:'pink',
                  borderWidth: 2 }}
                  source={
                    require('../assets/images/3.png')
                  }
                />
                <Text>@UserName</Text>
              </View>
            </View>
            <View>
              <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
              style={{resizeMode:'cover', width:'100%', height:275}}/>
            </View>
            <View>
              <View style={{flexDirection:'row'}}>
                <View style={{padding:5}}><Icon name="heart" /></View>
                <View style={{padding:5}}><Icon name="chatboxes" /></View>
                <View style={{padding:5}}><Icon name="paper-plane" /></View>
              </View>
              <Text>Caption Text here ...</Text>
              <Text>View Comment ...</Text>
              <Text style={{fontSize:10}}>Time Ago</Text>
            </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
