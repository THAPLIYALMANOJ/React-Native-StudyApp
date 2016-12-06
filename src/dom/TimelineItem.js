'use strict';

import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

class TimelineItem extends Component {
  render() {
    let pic = { uri: 'http://images5.fanpop.com/image/photos/27700000/koala-windows-7-vista-and-xp-picks-27753235-500-375.jpg' };

    return (
      <View style={styles.timeline_item}>
        <View style={styles.timeline_header}>
          <Image source={pic} style={styles.timeline_img}/>
          <Text style={styles.timeline_txt}>bla bla bla bla!</Text>
        </View>

        <View style={styles.timeline_bottom}>
          <Text style={styles.timeline_btn}>button 1</Text>
          <Text style={styles.timeline_btn}>button 2</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  timeline_item: {
    backgroundColor: 'white',
    minWidth: 150,
    minHeight: 150,
    marginTop: 10,
    marginHorizontal: 10,
    // alignItems: 'flex-end' // float
    // flexDirection: 'row'
  },

  timeline_img: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 25
  },

  timeline_txt: {
    marginTop: 20,
    marginLeft: 10
  },

  timeline_btn: {
    height: 30,
    backgroundColor: '#7f6a94',
    color: 'white',
    padding: 5,
    margin: 5
  },

  timeline_header: { flexDirection: 'row' },

  timeline_bottom: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20
  }
});

module.exports = TimelineItem;
