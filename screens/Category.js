import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, FlatList} from 'react-native'
import Product from '../components/Product.js'
const products = [
    {id: 1, title: 'Red Apple', image: require('../assets/apple.png'), price: 12},
    {id: 2, title: 'Tomato', image: require('../assets/tomato.jpg'), price: 15}
]

export default class Category extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name'),
    headerStyle: {
        backgroundColor: '#00a79d'
    },
        headerTintColor: '#fff'
  });
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#e9e5dd'}}>
                <FlatList
                    style={{flex: 1}}
                    numColumns={2}
                    data={products}
                    keyExtractor={product => String(product.id)}
                    renderItem={({item, index}) => {
                        return (
                            <Product title={item.title} image={item.image} price={item.price} index={index}/>
                        )
                    }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
