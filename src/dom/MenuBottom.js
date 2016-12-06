'use strict';

import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TouchableHighlight } from 'react-native';

class MenuBottom extends Component {
  render() {
    return (
      <View style={styles.footerMenu}>
        <TouchableHighlight style={styles.bottomMenuItem} onPress={() => this._onPressMenuButton(0)}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../res/img/meat.png')} />
            <Text style={styles.TextMenuItem}>option</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.bottomMenuItem} onPress={() => this._onPressMenuButton(1)}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../res/img/baby-poop.png')} />
            <Text style={styles.TextMenuItem}>option</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.bottomMenuItem} onPress={() => this._onPressMenuButton(2)}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../res/img/placeholder.png')} />
            <Text style={styles.TextMenuItem}>option</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.bottomMenuItem} onPress={() => this._onPressMenuButton(3)}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../res/img/about-us.png')} />
            <Text style={styles.TextMenuItem}>option</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.bottomMenuItem} onPress={() => this._onPressMenuButton(4)}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../res/img/info.png')} />
            <Text style={styles.TextMenuItem}>option</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  _onPressMenuButton (index) {
    this.props.navigator.push({ index: index });
  }
}

const styles = StyleSheet.create({
  footerMenu: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  bottomMenuItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderLeftColor: 'white'
  },

  TextMenuItem: {
    fontWeight: '100',
    fontSize: 10,
    color:'#fff',
    marginTop: 5
  }
});

  module.exports = MenuBottom;
