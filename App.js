import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import SlotsGamesScreen from './src/screens/SlotsGamesScreen';
import FeaturedGamesScreen from './src/screens/FeaturedGamesScreen';
import LiveGamesScreen from './src/screens/LiveGamesScreen';
import JackpotsGamesScreen from './src/screens/JackpotsGamesScreen';

// Here I moved the Feature Games tab at the end because there is no such category in the feed
// and starting the app with empty tab looks strange. But I can easily rearange them if needed.
// I also changed the tab labels to correspond to the name of each category
const MaterialTopTabNavigator = createMaterialTopTabNavigator({
  SlotsGames: { screen: SlotsGamesScreen },
  LiveGames: { screen: LiveGamesScreen },
  JackpotsGames: { screen: JackpotsGamesScreen },
  FeaturedGames: { screen: FeaturedGamesScreen },
}, {
        tabBarOptions: {
          activeTintColor: 'orange',
          pressColor: 'orange',
            style: {
                backgroundColor: 'black',
            }}},);

export default class App extends React.Component {
  render() {
    return (
      <MaterialTopTabNavigator/>
    );
  }
}
