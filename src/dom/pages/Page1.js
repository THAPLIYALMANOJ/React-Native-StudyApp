'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';

import TimelineItem from '../TimelineItem';
import MenuBottom from '../MenuBottom';

export default class Page1 extends Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <View style={styles.wrapper}>
          <ScrollView refreshControl = { <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)}/> }>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
            <TimelineItem/>
          </ScrollView>
        </View>

        <MenuBottom navigator={this.props.navigator}/>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      timearray: []
    };
  }

  _onRefresh() {
    this.setState({refreshing: true});
    alert('reload');
    this.setState({refreshing: false});
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex:9,
    backgroundColor: '#383f44'
  }
});
