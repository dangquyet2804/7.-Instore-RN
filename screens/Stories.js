import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default class Stories extends Component {
    static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons name="store" size={25} color={tintColor}/>
    )
  };
    render() {
        return (
            <SafeAreaView>
                <Text> Stories </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
