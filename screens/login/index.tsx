import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
        <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
          <Text>Home</Text>
        </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
