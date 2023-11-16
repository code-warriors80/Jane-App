import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import AppNavigator from '../../components/bottomNav/bottomNav'

const OnboardingScreen = () => {
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>OnboardingScreen</Text>
    </View>
  )
}

export default OnboardingScreen