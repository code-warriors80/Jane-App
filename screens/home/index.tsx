import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../../components/homeHeader/homeHeader'
import Advert from '../../components/advert/advert'
import Category from '../../components/category/category'
import Stylist from '../../components/stylist/stylist'

const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={tailwind`flex-1 bg-white`}>
      <HomeHeader />
      <ScrollView style={tailwind`flex-1 px-3`}>
        <Advert />
        <Category />
        <Stylist />
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate(' AuthStack')}><Text>Login</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen