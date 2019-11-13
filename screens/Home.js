import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, FlatList, Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';
import Catagory from '../components/Catagory.js';

const images= [
          // require('../assets/food1.png'),
          // require('../assets/food2.png'),
          // require('../assets/food3.png')
          'https://source.unsplash.com/1024x768/?food',
          'https://source.unsplash.com/1024x768/?shop',
          'https://source.unsplash.com/1024x768/?beef',
          'https://source.unsplash.com/1024x768/?cake'
        ]
const categories = [
  {
    id: 1,
    title: 'Grocery',
    image: require('../assets/cart.png'),
  },
  {
    id: 2,
    title: 'Drugs',
    image: require('../assets/drugs.png'),
  },
  {
    id: 3,
    title: 'Pets',
    image: require('../assets/pets.png'),
  },
  {
    id: 4,
    title: 'video games',
  },
]
export default class Home extends Component {
    constructor(props) {
      super(props);
    }
    
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#00a79d'
      },
      headerTintColor: '#fff'
    };
    separator = () => <View style={{backgroundColor: 'greyLighter', height: 2}} />;
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
              <SliderBox
                  images={images}
                  sliderBoxHeight={200}
                  // onCurrentImagePressed={index =>
                  //     console.warn(`image ${index} pressed`)
                  // }
                  dotColor="#FFEE58"
                  inactiveDotColor="#90A4AE"
                  paginationBoxVerticalPadding={20}
                  circleLoop
              />
              <FlatList
                style={{flex: 1, backgroundColor: '#e9e5dd'}}
                ItemSeparatorComponent={this.separator} // margin cho cac hang
                numColumns={3} //important
                data={categories}
                keyExtractor={categorie => String(categorie.id)}
                renderItem={({item, index}) => {
                  return (
                      <Catagory title={item.title} image={item.image} index={index}/>
                  )
                }}
              />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
})
