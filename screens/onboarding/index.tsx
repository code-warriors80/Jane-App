import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
//import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = ({ navigation }: any) => {
  const slides = [
    {
      id: 1,
      image: require('../../assets/logo/logo.png'),
      text: 'Welcome',
    },
    {
      id: 2,
      image: require('../../assets/images/pic1.png'),
      text: 'Welcome to Slide 2',
    },
    {
      id: 3,
      image: require('../../assets/images/pic2.png'),
      text: 'Welcome to Slide 3',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Navigate to the login screen when the last slide is reached
      navigation.navigate('LoginScreen');
    }
  };

  const handleSkip = () => {
    navigation.navigate('LoginScreen'); // Navigate to the login screen
  };

  return (
    <View style={tw`flex-1 justify-center items-center mt-60 `}>
      <View style={tw `flex-1 justify-center items-center mt-80 w-3/4`}>
        <Image source={slides[currentSlide].image} style={tw`w-80 h-80 mt-60 rounded-md`} />
        <Text style={tw`text-2xl mt-2 mb-4`}>{slides[currentSlide].text}</Text>
      </View>
      <View style={tw`flex-row justify-between w-3/4`}>
        <TouchableOpacity onPress={handleSkip} style={tw`bg-gray-400 h-10 w-20 mt-80 px-6 py-2 rounded`}>
          <Text style={tw`text-white font-bold`}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={tw`bg-pink-500 h-10 w-20 mt-80 px-6 py-2 rounded`}>
          <Text style={tw`text-white font-bold`}>
            {currentSlide === slides.length - 1 ? 'Next' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
