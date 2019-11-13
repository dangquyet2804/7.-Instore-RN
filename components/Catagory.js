import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('window');

const Catagory = ({title, image, index}) => {
    return (
        <View style={[styles.container, index%3 !==0 ? {marginLeft: 2} : null]}>
            {image ? (<Image source={image} style={{marginBottom: 20}}/>) : null}
            <Text >{title.toUpperCase()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: (width)/3,
        height: (width)/3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
export default Catagory
