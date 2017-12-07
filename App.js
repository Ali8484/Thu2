import React from 'react';
import { AppRegistry , Text, View , Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/MainScreen';
import ChatScreen from './app/ProfileScreen';

  export default class App extends React.Component {
    render() {
      return <SimpleApp />;
    }
  }
  
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: {screen : ChatScreen },
});

