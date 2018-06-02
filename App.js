/**
 * Awesome React App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from './src/screens/welcome';
import Home from './src/screens/home';

type Props = {};

const RootStack = createStackNavigator({
  welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  }
},
{
  navigationOptions: {
    gesturesEnabled: false,
  }
});

export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}