'use strict';

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import Page1 from './src/dom/pages/Page1';
import Page2 from './src/dom/pages/Page2';
import Page3 from './src/dom/pages/Page3';
import Page4 from './src/dom/pages/Page4';
import Page5 from './src/dom/pages/Page5';

const TestProject = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{ index: 0 }}
        configureScene = {this.customSceneAnimation}
        renderScene={this.customRenderScene}
      />
    );
  },

  customRenderScene: function (route, navigator) {
    switch (route.index) {
      case 0: return <Page1 navigator={navigator}/>
      case 1: return <Page2 navigator={navigator}/>
      case 2: return <Page3 navigator={navigator}/>
      case 3: return <Page4 navigator={navigator}/>
      case 4: return <Page5 navigator={navigator}/>
      default: return <Page1 navigator={navigator}/>
    }
  },

  customSceneAnimation: function (route, routeStack) {
    switch (route.index) {
      case 0: return Navigator.SceneConfigs.FloatFromRight;
      case 1: return Navigator.SceneConfigs.FadeAndroid;
      case 2: return Navigator.SceneConfigs.FloatFromBottom;
      case 3: return Navigator.SceneConfigs.HorizontalSwipeJump;
      case 4: return Navigator.SceneConfigs.VerticalUpSwipeJump;
      default: return Navigator.SceneConfigs.PushFromRight;
    }
  }
});

AppRegistry.registerComponent('TestProject', () => TestProject);

/*
'use strict';

import React, { Component } from 'react';
import TimelineItem from './src/dom/TimelineItem';

import { AppRegistry,
  Text,
  Navigator,
  ScrollView,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class TestProject extends Component {
  render() {
    const routes = [
      {title: 'FIRST SCENE', page_style: styles.page1, index: 0},
      {title: 'SECOND SCENE', page_style: styles.page2, index: 1},
    ];

    return (
      <Navigator
        initialRoute = {routes[0]}
        initialRouteStack = {routes}

        renderScene={(route, navigator) =>
          <ScrollView style={route.page_style}>
            <TouchableHighlight onPress={() => { if (route.index === 0) { navigator.push(routes[1]); } else { navigator.pop(); }}}>
              <Text>Hello {route.title}!</Text>
            </TouchableHighlight>

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
        }

        style={styles.content}

        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => { return (
                  <TouchableHighlight onPress={() => navigator.pop()}>
                    <Text style={styles.bar_text}>Back</Text>
                  </TouchableHighlight>
                );
              },

              RightButton: (route, navigator, index, navState) => { return (<Text style={styles.bar_text}>Done</Text>); },
              Title: (route, navigator, index, navState) => { return (<Text style={styles.bar_text}>Awesome Nav Bar</Text>); },
            }}

            style={styles.bar}
          />
        }
      />
    );
  }
}

var styles = StyleSheet.create({
  content: {
    backgroundColor: '#383f44',
    paddingTop: 60
  },

  bar: {
    backgroundColor: '#27292b'
  },

  bar_text: { padding: 15, color: '#626e77' },

  page1: { backgroundColor: '#383f44' },
  page2: { backgroundColor: 'black' }
});

// ReactNative.AppRegistry.registerComponent('TestProject', function() { return TestProject });
AppRegistry.registerComponent('TestProject', () => TestProject);
*/
