import React, {Component} from 'react'
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated
 } from 'react-native'
const { height, width } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            quantity: 1,
            opacity: new Animated.Value(1)
        }
    }
    handleClose = () => {
        this.fadeOutopacityAnimated()
        this.setState({
            isHover: false
        })
    }
    handlePress = () => {
        this.fadeInopacityAnimated()
        this.setState({
            isHover: true
        })
    }
    fadeInopacityAnimated = () => {
        Animated.timing(this.state.opacity, {
            toValue: 0.7,
            duration: 500
        }).start() // gan start => opacity
    }
    fadeOutopacityAnimated = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 400
        }).start() // gan start => opacity
    }
    render() {       
        const {index, image, title, price} = this.props;
        const {isHover, quantity, opacity} = this.state;
        return (
            <Animated.View style={[styles.product,{opacity},index % 2 !==0 ? {marginLeft: 5} : null]}>
                <TouchableWithoutFeedback onPress={this.handleClose}>
                    <View style={styles.icon}>
                        {
                            !isHover ? (
                        <TouchableOpacity onPress={this.handlePress} style={styles.icon}>
                            <AntDesign name="pluscircleo" size={25} color='#00a79d'/>
                        </TouchableOpacity>
                        )
                            : null
                        }
                        {
                            isHover ? (
                                <View style={styles.buy}>
                                    {
                                        quantity > 1 ? (
                                            <TouchableOpacity onPress={() => this.setState({quantity: quantity-1})}>
                                                <AntDesign name='minus' size={25} color='#00a79d'/>
                                            </TouchableOpacity>
                                        )
                                        : (
                                            <TouchableOpacity onPress={this.handleClose}>
                                                <AntDesign name='delete' size={25} color='#00a79d'/>
                                            </TouchableOpacity>
                                        )
                                    }
                                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>{quantity}</Text>
                                    <TouchableOpacity onPress={() => this.setState({quantity: quantity+1})}>
                                        <AntDesign name='pluscircleo' size={25} color='#00a79d'/>
                                    </TouchableOpacity>
                                </View>
                            )
                            : null
                        }
                    </View>
                </TouchableWithoutFeedback>
                <Image 
                    source={image}
                    style={{width: '100%', height: 180}}
                />
                <Text style={{fontSize: 17, marginTop: 10}}>{title}</Text>
                <Text style={{fontSize: 17, marginTop: 10, fontWeight: 'bold'}}>{price}$</Text>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    product: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: (width/2),
        height: 320,
    },
    icon: {
        alignSelf: 'flex-end',
        marginRight: 10
    },
    buy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {width: 0, height: 2},
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    }
})
