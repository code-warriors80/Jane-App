import { View, Text, Button } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native'

type OnboardingScreenProps = {
  navigation: any;
};

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>OnboardingLogin</Text>
      <Button title='Go to user Register' onPress={() => navigation.navigate('RegisterStack')} />
    </View>
  )
}

export default OnboardingScreen