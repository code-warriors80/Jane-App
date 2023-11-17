import { View, Text,  TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>OnboardingScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OnboardingScreen