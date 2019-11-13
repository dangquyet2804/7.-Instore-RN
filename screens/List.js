import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default class List extends Component {
    static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="list" size={25} color={tintColor}/>
    )
  };
    render() {
        return (
            <SafeAreaView>
                <Text> List </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
