'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import MenuBottom from '../MenuBottom';
import MapView from 'react-native-maps';

export default class Page2 extends Component {
  render() {
    let pic = { uri: 'http://images5.fanpop.com/image/photos/27700000/koala-windows-7-vista-and-xp-picks-27753235-500-375.jpg' };

    return (
      <View style={{ flex:1 }}>
        <View style={styles.wrapper}>
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>

        <MenuBottom navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:9,
    backgroundColor: '#383f44'
  },

  timeline_img: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 25
  }
});
