import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import tailwind from 'twrnc';


const slides = [
  {
    key: 'slide1',
    title: 'Welcome',
    text: 'Beatiful ladies deserve beautiful braids!',
    image: require('../../assets/images/pic1.png'),
  },
  {
    key: 'slide2',
    title: 'Book an Appointment',
    text: 'Book an appointment from your comfort zone.',
    image: require('../../assets/images/book.png'),
  },
  {
    key: 'slide3',
    title: 'We offer Home services to',
    text: 'Your goodlooks is our best interest',
    image: require('../../assets/images/pic2.png'),
  },
  {
    key: 'slide4',
    title: 'Chat with your stylist',
    text: 'A chat feature implimented just for you!',
    image: require('../../assets/images/chat.png'),
  },

  // Add more slides as needed
];
const OnboardingScreen: React.FC = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={tailwind`flex-1 justify-center items-center`}>
        <Image source={item.image} style={tailwind`w-80 h-80 mb-4`} resizeMode="contain" />
        <Text style={tailwind`text-2xl text-gray-800 mb-2`}>{item.title}</Text>
        <Text style={tailwind`text-base text-gray-600`}>{item.text}</Text>
      </View>
    );
  };

  const handleDone = () => {
    // Handle when the user finishes onboarding
    // For instance: navigate to the main app screen
    // navigation.navigate('MainAppScreen');
  };

  return (
    <View style={tailwind`flex-1`}>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        showSkip={true}
        showDoneButton={true}
        onDone={handleDone}
        onSkip={() => navigation.navigate('Register')}
        dotStyle={tailwind`w-3 h-3 rounded-full bg-gray-300`}
        activeDotStyle={tailwind`w-4 h-3 rounded-full bg-pink-500`}
        renderDoneButton={() => (
          <TouchableOpacity style={tailwind`mr-4`} onPress={handleDone}>
            <Text style={tailwind`text-pink-500 font-semibold`}>Done</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OnboardingScreen;
