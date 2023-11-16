import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const LoginScreen = () => {
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen