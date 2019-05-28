import React from 'react';
import {
  StyleSheet,
  Text, Image, Dimensions,
  View, ScrollView
} from 'react-native';
import {Container, Content, Icon, Button } from 'native-base';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    headerLeft :<View style={{padding:20}}><Icon name="camera" /></View>,
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
    },
    title: 'Instagram',
    headerRight: <View style={{padding:20}}><Icon name="paper-plane"/></View>
  };

  constructor(props){
    super(props);
    this.state={
      photo_feed:[0,1,2,3,4],
      refresh: false
    }
  }

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
      <ScrollView>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
               style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
               style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
               style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
               style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
          <View style={{flex:1}}>
            <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'100%', height:150}}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
