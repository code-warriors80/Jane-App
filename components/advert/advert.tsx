import React, { useRef, useEffect } from 'react';
import { View, Image, Dimensions, ScrollView } from 'react-native';
import Carousel, { AdditionalParallaxProps } from 'react-native-snap-carousel';
import tailwind from 'twrnc';

interface AdItem {
  id: number;
  image: any; // Change the type according to your image source type
}

const Advert: React.FC = () => {
  const { width: screenWidth } = Dimensions.get('window');
  const carouselItemWidth = screenWidth * 0.9; // Adjust the width of the carousel items as needed

  const carouselRef = useRef<Carousel<AdItem>>(null);

  const data: AdItem[] = [
    { id: 1, image: require('../../assets/design-a-classy-fashion-salon-beauty-flyer-poster-brochure.jpg') },
    { id: 2, image: require('../../assets/4253879.jpg') },
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

  // Function to scroll to the next item
  const scrollNext = () => {
    if (carouselRef.current) {
      const currentIndex = carouselRef.current.currentIndex;

      // Check if it's the last item
      if (currentIndex === data.length - 1) {
        // If last item, scroll back to the beginning
        carouselRef.current.snapToItem(0);
      } else {
        // Otherwise, scroll to the next item
        carouselRef.current.snapToNext();
      }
    }
  };

  // Set up autoscroll using setInterval
  useEffect(() => {
    const intervalId = setInterval(scrollNext, 3000); // Adjust the interval as needed (in milliseconds)

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={tailwind`flex-1`} contentContainerStyle={tailwind`items-center`}>
      <Carousel
        ref={carouselRef}
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
