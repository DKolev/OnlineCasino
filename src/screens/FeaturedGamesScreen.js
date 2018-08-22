import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FeaturedGamesScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Featured Games',
  };

  render() {
    const styles = StyleSheet.create({
      background: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      textStyle: {
        color: 'orange'
      }
    });

    return (
      <View style={styles.background}>
        <Text style={styles.textStyle}>There are no FEATURED GAMES in the feed! </Text>
      </View>
    );

  }
}
