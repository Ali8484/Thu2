import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class Second extends React.Component {
    static navigationOptions = {
        title: "The second",
    };
    render() {
        return (
            <View>
                <Text>
                    this is the second
                </Text>
            </View>
        );
    }
}