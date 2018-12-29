/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import AttractionsScreen from './src/screens/AttractionsScreen';
import Map from './src/screens/Map';
import Plans from './src/screens/Plans';
import Transportation from './src/screens/Transportation';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

export default class App extends Component<Props> {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <Router>
        <Scene key="root" header={null}>
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
            title={null}
          >
            {/* Tab and it's scenes */}
            <Scene key="attractions"
              component={AttractionsScreen}
              header={null}
              icon={TabIcon}
              title="Attractions"
              initial
            />
            <Scene
              key="map"
              component={Map}
              header={null}
              icon={TabIcon}
              title="Map"
            />
            <Scene
              key="plans"
              component={Plans}
              header={null}
              icon={TabIcon}
              title="Plans"
            />
            <Scene
              key="transport"
              component={Transportation}
              header={null}
              icon={TabIcon}
              title="Transport"
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
