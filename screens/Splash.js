import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView} from 'react-native'
import logo from '../assets/brandLogo.png'
import Logo from '../components/Logo.js';

export default class Splash extends Component {
    componentDidMount() {
        this.checkLogin()
    }
    checkLogin = () => {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 1000);
    }
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Logo logo={logo}/>
            </SafeAreaView>
        )
    }
}
