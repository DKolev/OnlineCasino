import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator,
  Dimensions, Image, TouchableNativeFeedback, WebView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
// Found this regarding the responsive app design and followed it
//https://medium.com/react-native-training/build-responsive-react-native-views-for-any-device-and-support-orientation-change-1c8beba5bc23
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol } from 'react-native-responsive-screen';
import GameScreen from './GameScreen';

// The number of columns to show in portrait and landscape layout
const numColumns = 3;

class LiveGames extends React.Component {

  // Hiding the header
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

    // Getting the feed from the url and setting the second category as dataSource
    getData() {
      return fetch('https://apiuat.casino.com/lobby/gamefeeds/au/mobile/notflix/?env=stg')
        .then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            // When the load is finished, hiding the loading indicator
            isLoading: false,
            dataSource: responseJson.feed.category[1].games,
          }, function(){

          });
        })
        .catch((error) =>{
          console.error(error);
        });
    }

    componentDidMount() {
      // Adding a listener for orientation change
      loc(this);
      this.getData();
    }

    componentWillUnmount() {
      // Removing the listener
      rol();
    }

    render() {
      // Styling the container, textItem and imageItem for each game in the grid.
      // As suggested in the tutorial, I'm putting the stylesheet inside the render funtion
      // in order to recalculate each style on screen rotation.
      // !!!IMPORTANT!!! This works only in SlotsGames tab and I don't know why
      const styles = StyleSheet.create({
        container: {
          width: wp('31%'),
          height: hp('25%'),
          margin: 4,
          borderWidth: 2,
          borderColor: 'orange'
        },
        textItem: {
          height:hp('5%'),
          width: wp('31%'),
          textAlign: 'center',
          textAlignVertical: 'center',
          backgroundColor: 'white'
        },
        imageItem: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        },
        background: {
          backgroundColor: 'black',
          alignItems: 'center'
        },
        activityIndicator: {
          backgroundColor: 'black',
          flex: 1,
          padding: 20
        }
      });

      // Showing the loading indicator at the top
      if(this.state.isLoading){
        return(
          <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color="orange"/>
          </View>
        )
      }

      const picUrl = "https://cache.mansion.com/shared/lobby/web/games/251x147/";
      const jpgExtension = ".jpg";

      return(
        // Using FlatList to display the games in 3 columns
        <View style={styles.background}>
          <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            // Passing the gameCode which I need to complete the URl in the OpenedGameScreen
            // and the game name as a title
            <TouchableNativeFeedback onPress={ () => {this.props.navigation.navigate('Game', {
              gameCode: item.game_code,
              title: item.name,
            });
          }}>
            <View style={styles.container}>
              <Text style={styles.textItem}>{item.name}</Text>
              <Image style={styles.imageItem}
                source={{uri: `${picUrl}${item.game_code}${jpgExtension}`}}>
              </Image>
            </View>
            </TouchableNativeFeedback>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns}/>
            </View>
        );
    }
  }

// Ideally, the WebView should start in full screen and hide the 4 category
// tabs but I have problems doing it. I guess it has something to do with
// nesting the StackNavigator and the MaterialTopTabNavigator
const Navigation = createStackNavigator({
    LiveGames: LiveGames,
    Game: GameScreen,
  });

export default class LiveGamesScreen extends React.Component {
  // Setting the tab label
  static navigationOptions = {
    tabBarLabel: 'Live Casino',
  };
  render() {
    return <Navigation/>;
  }
}
