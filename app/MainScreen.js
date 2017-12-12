import React from 'react';
import {AppRegistry , Text , View , Button} from 'react-native';

 export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <Text>Hello, Chat App!</Text>
          <Button
            onPress={() => navigate('Chat')}
            title="Chat with Lucy"
          />
          <Button 
          onPress={() => navigate('sec')}
          title="To Second" />
        </View>
      );
    }
  }
 