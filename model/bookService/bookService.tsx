import { View, Text, TouchableOpacity, Platform, Button } from 'react-native'
import React, {useState} from 'react'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import FIcon from "react-native-vector-icons/Feather";

const BookService = ({setOpenModal}) => {

  return (
    <SafeAreaView style={tailwind`flex-1`}>
      <View style={tailwind`bg-[#ec589c] rounded-b-full`}>
          <View style={tailwind`flex-row items-center justify-between`}>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                  <FIcon name='arrow-left' size={20} color='white' />
              </TouchableOpacity>
              <Text style={tailwind`text-center text-lg`}>Book Appointment</Text>
          </View>
          <View></View>
      </View>
    </SafeAreaView>
  )
}

export default BookService