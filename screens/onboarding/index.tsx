import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import tailwind from 'twrnc';


const slides = [
  {
    key: 'slide1',
    title: 'Welcome!',
    text: 'This is the first screen.',
    image: require('../../assets/images/book.png')
  },
  {
    key: 'slide2',
    title: 'Chat with your stylist',
    text: 'This is the second screen.',
    image: require('../../assets/images/chat.png'),
  },
  {
    key: 'slide3',
    title: 'Get the best of our services',
    text: 'This is the third screen.',
    image: require('../../assets/images/pic1.png'),
  },
  {
    key: 'slide5',
    title: 'Book an Appointment',
    text: 'This is the fourth screen.',
    image: require('../../assets/images/book.png'),
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
        dotStyle={tailwind`w-6 h-6 rounded-full bg-gray-300`}
        activeDotStyle={tailwind`w-6 h-6 rounded-full bg-pink-500`}
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




// import { Text, Image } from 'react-native'
// import React from 'react'
// import Onboarding from 'react-native-onboarding-swiper';
// import tailwind from 'twrnc';

// import { useNavigation } from '@react-navigation/native';

// const OnboardingScreen = () => {
//   const navigation = useNavigation()
//   return (
// <Onboarding
//   showPagination={true}
//   showDone={true}
//   showNext={false}
//   showSkip={true}
//   onSkip={() => navigation.navigate('Register')}
//   bottomBarColor='white'
//   onDone={() => navigation.navigate('Register')}
//   pages={[
//     {
//       backgroundColor: '#fff',
//       image: <Image source={{uri: 'https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?size=626&ext=jpg&uid=R61415680&ga=GA1.1.899355817.1694867026&semt=ais'}} style={tailwind`w-90 h-90 opacity-100`}/>,
//       title: <Text style={tailwind`mb-3`}>Welcome</Text>,
//       subtitle: <Text style={tailwind`mb-15 text-gray-600 w-60 text-center`}>Let's get started by creating your account.</Text>,
//     },
//     {
//       backgroundColor: '#fff',
//       image: <Image source={{uri: 'https://img.freepik.com/free-vector/flat-online-shopping-concept_52683-63899.jpg?size=626&ext=jpg&uid=R61415680&ga=GA1.1.899355817.1694867026&semt=ais'}} style={tailwind`w-90 h-90 opacity-100`}/>,
//       title: <Text style={tailwind`mb-3`}>Find Your Favorites</Text>,
//       subtitle: <Text style={tailwind`mb-15 text-gray-600 w-60 text-center`}>Browse our curated selection and discover what you love.</Text>,
//     },
//     {
//       backgroundColor: '#fff',
//       image: <Image source={{uri: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-delivery-concept_23-2149157498.jpg?size=626&ext=jpg&uid=R61415680&ga=GA1.1.899355817.1694867026&semt=ais'}} style={tailwind`w-85 h-85 opacity-100`}/>,
//       title: <Text style={tailwind`mb-3`}>Enjoy Your Delivery!</Text>,
//       subtitle: <Text style={tailwind`mb-15 text-gray-600 w-60 text-center`}>Sit back, relax, and anticipate your order arriving soon</Text>
//     }
//   ]}
// />
//   )
// }

// export default OnboardingScreen;