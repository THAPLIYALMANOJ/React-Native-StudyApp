'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Modal, TouchableHighlight } from 'react-native';

import MenuBottom from '../MenuBottom';

export default class Page3 extends Component {
  render() {
    let pic = { uri: 'http://images5.fanpop.com/image/photos/27700000/koala-windows-7-vista-and-xp-picks-27753235-500-375.jpg' };

    return (
      <View style={{ flex:1 }}>
        <View style={styles.wrapper}>
          <Button
            onPress={this._onPressBtn}
            title="Modal"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />

          <Modal animationType={"slide"} transparent={false} visible={this.state.modalVisible} onRequestClose={() => {alert("Modal has been closed.")}}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible) }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>

        <MenuBottom navigator={this.props.navigator}/>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onPressBtn() {
    this.setModalVisible(true);
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
