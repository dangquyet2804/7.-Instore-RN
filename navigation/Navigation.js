import React, { Component } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash.js';
import Login from '../screens/Login.js';
import Home from '../screens/Home.js';
import Category from '../screens/Category.js';
import ShoppingCart from '../screens/ShoppingCart.js';
import List from '../screens/List.js';
import Stories from '../screens/Stories.js';
import Order from '../screens/Order.js';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
    Home: Home,
    Category: Category,
    ShoppingCart: ShoppingCart
},{
    navigationOptions : {
        tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="home" size={30} color={tintColor}/>
        )
    }
})

const Main = createBottomTabNavigator({
    Home: HomeStack,
    List: List,
    Stories: Stories,
    Order: Order    
},{
  tabBarOptions: {
    activeTintColor: '#00a79d',
    inactiveTintColor: '#d1cece'
    // showLabel: true,
    // showIcon: true

  }
}
)

const Navigation = createSwitchNavigator({
    Splash: Splash,
    Login: Login,
    Main: Main
})
export default createAppContainer(Navigation);
