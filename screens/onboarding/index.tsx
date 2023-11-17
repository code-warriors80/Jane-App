import { View, Text, Button } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

type OnboardingScreenProps = {
  navigation: any;
};

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>OnboardingScreen</Text>
      <Button title='Go to user profile' onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}

export default OnboardingScreen