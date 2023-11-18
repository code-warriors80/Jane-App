import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tailwind`flex-1 justify-center items-center`}>
      




        {/* <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text>Register</Text>
        </TouchableOpacity> */}
    </View>
  );
};

export default OnboardingScreen;
