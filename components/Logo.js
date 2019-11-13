import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Logo = ({logo}) => {
    return (
        <View style={styles.screens}>
            <Image 
                source={logo}
            />
            <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Text style={{fontSize: 25}}>In</Text>
                <Text style={{fontSize: 25, color: '#71a95a'}}>Store</Text>
            </View>
            <Text>Easy Grocery Shopping</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screens: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
})
export default Logo
