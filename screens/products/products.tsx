import { View, Text } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const ProductScreen = () => {
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>ProductScreen</Text>
    </View>
  )
}

export default ProductScreen