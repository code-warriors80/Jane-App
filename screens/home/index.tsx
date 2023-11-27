import { ScrollView, Modal} from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../../components/homeHeader/homeHeader'
import Advert from '../../components/advert/advert'
import Category from '../../components/category/category'
import Stylist from '../../components/stylist/stylist'
import Services from '../../components/services/services'
import BookService from '../../model/bookService/bookService'

const HomeScreen = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white`}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false} style={tailwind`flex-1 px-3`}>
        <Advert />
        <Category />
        <Stylist />
        <Services  setOpenModal={setOpenModal}/>
        <Modal visible={openModal} animationType="fade">
          <BookService setOpenModal={setOpenModal}/>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen