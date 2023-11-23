import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Carousel, { AdditionalParallaxProps } from 'react-native-snap-carousel';
import tailwind from 'twrnc';
import { ScrollView } from 'react-native-gesture-handler';

interface AdItem {
  id: number;
  image: any; // Change the type according to your image source type
}

const Advert: React.FC = () => {
  const { width: screenWidth } = Dimensions.get('window');
  const carouselItemWidth = screenWidth * 0.8; // Adjust the width of the carousel items as needed


  const data: AdItem[] = [
    { id: 1, image: require('../../assets/design-lash-extension-hair-extension-spa-beauty-salon-pricelist-flyer.jpg') },
    { id: 2, image: require('../../assets/design-a-classy-fashion-salon-beauty-flyer-poster-brochure.jpg') },
    { id: 3, image: require('../../assets/78f6b7f97e21022156d527dc5f266cb905ff37c2.webp') },
    // Add more ad items as needed
  ];

  const renderItem = (
    { item }: { item: AdItem },
    parallaxProps?: AdditionalParallaxProps
  ) => (
    <View style={tailwind`flex items-center justify-center`}>
      <Image source={item.image} style={tailwind`w-full h-40 rounded-lg`} />
    </View>
  );

  return (
    <ScrollView       style={tailwind`flex-1`}
    contentContainerStyle={tailwind`items-center`}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={carouselItemWidth}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.7}
        // Add more configuration options as needed
      />
    </ScrollView>
  );
};

export default Advert;
