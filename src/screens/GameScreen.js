import React from 'react';
import { WebView, View, Text } from 'react-native';

export default class GameScreen extends React.Component {

  // Setting the title of the game
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    });

  render() {
    // Getting the game code from the previous screen when the game item was touched
    const { navigation } = this.props;
    const gameCode = navigation.getParam('gameCode', '');
    const url = "https://devplay.casino.com/igaming/";
    const finalUrl = `${url}${gameCode}/`;

    return (
      // Loading the game in a WebView
      // Although the URL is according to the specifications - it's not working

      // <WebView
      //   source={{uri: finalUrl}}/>

      // Showing the full URL to load the game as a text (because it's not working)
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{finalUrl}</Text>
      </View>
    );
  }
}
