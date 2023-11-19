import React from 'react';
import { View, Text, Image } from 'react-native';
import tailwind from 'twrnc';

const LoadingScreen: React.FC = () => {
  return (
    <View style={tailwind`flex`}>
        <View style={tailwind`justify-center mt-40 items-center bg-white`}>
            <Image
            source={require('./assets/logo/logo1.png')} // Replace with actual logo
            style={tailwind`w-80 h-80 mt-20`} // Adjust size as needed
            resizeMode="contain" // Adjust resizeMode as needed
            />

            <Image
            source={require('./assets/loader/icons8-loading-circle.gif')}
            style={tailwind`text-xl text-gray-800 mt-10 mb-60`}
            />
            {/* <Text style={tailwind`text-xl text-gray-800 mt-4 mb-60`}>Loading...</Text> */}
            {/* You can add additional text or elements here */}
        </View>
    </View>
  );
};

export default LoadingScreen;
