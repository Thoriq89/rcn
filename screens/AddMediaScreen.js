import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'native-base';

export default class AddMediaScreen extends React.Component {
  static navigationOptions = {
    headerLeft :<View style={{padding:20}}><Icon name="camera" /></View>,
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
    },
    title: 'Instagram',
    headerRight: <View style={{padding:20}}><Icon name="paper-plane"/></View>
  };

  render() {
    return (
      <View style={styles.container}>
           <Text>Add Media</Text>
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
