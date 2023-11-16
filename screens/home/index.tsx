import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const HomeScreen = () => {
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>Home</Text>
    </View>
  )
}

export default HomeScreen