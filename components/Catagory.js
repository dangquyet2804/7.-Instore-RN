import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
const { height, width } = Dimensions.get('window');

const Catagory = ({title, image, index, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, index%3 !==0 ? {marginLeft: 2} : null]}>
                {image ? (<Image source={image} style={{marginBottom: 20}}/>) : null}
                <Text >{title.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
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
