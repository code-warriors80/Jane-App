import { ScrollView} from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../../components/homeHeader/homeHeader'
import Advert from '../../components/advert/advert'
import Category from '../../components/category/category'
import Stylist from '../../components/stylist/stylist'
import Services from '../../components/services/services'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white`}>
      <HomeHeader />
      <ScrollView style={tailwind`flex-1 px-3`}>
        <Advert />
        <Category />
        <Stylist />
        <Services />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen