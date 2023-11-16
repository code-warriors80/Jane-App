import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const ProfileScreen = () => {
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen