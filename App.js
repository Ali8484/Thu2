import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/MainScreen';
import ChatScreen from './app/ProfileScreen';
import Second from './app/Second';


  
  
const SimpleApp = StackNavigator({ // this the constructor of the ths screens
  Home: { screen: HomeScreen },
  Chat: {screen : ChatScreen },
  sec:{screen:Second}
});
// To public the constructor over the App
export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

