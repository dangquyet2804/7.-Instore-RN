import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default class Order extends Component {
    static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons name="bookmark-border" size={25} color={tintColor}/>
    )
  };
    render() {
        return (
            <SafeAreaView>
                <Text> Order </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
