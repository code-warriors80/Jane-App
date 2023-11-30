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
import Notification from '../../model/notificaion/notification'

const HomeScreen = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [selectedService, setSelectedService] = useState(null);
  return (
    <SafeAreaView style={tailwind`flex-1 bg-[#F4F8FC]`}>
      <HomeHeader toggleNotification={setOpenNotification}/>
      <ScrollView showsVerticalScrollIndicator={false} style={tailwind`flex-1 px-3 py-2`}>
        <Advert />
        <Category />
        <Stylist />
        <Services setOpenModal={(isOpen, data) => {
          setSelectedService(data.selectedService);
          setOpenModal(isOpen);
        }} />

        <Modal visible={openNotification} animationType="fade">
          <Notification toggleNotification={setOpenNotification}/>
        </Modal>

        <Modal visible={openModal} animationType="fade">
          <BookService setOpenModal={setOpenModal} selectedService={selectedService}/>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen