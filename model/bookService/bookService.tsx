import { View, Text, TouchableOpacity, Platform, Button } from 'react-native'
import React, {useState} from 'react'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import FIcon from "react-native-vector-icons/Feather";

const BookService = ({setOpenModal}) => {
  const [selectedItem, setSelectedItem] = useState('item1');

  const handleItemChange = (itemValue) => {
    setSelectedItem(itemValue);
  };
  return (
    <SafeAreaView style={tailwind`flex-1`}>
      <View style={tailwind`bg-[#ec589c] py-5 px-4`}>
          <View style={tailwind`flex-row items-center gap-5`}>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                  <FIcon name='x' size={20} color='white' />
              </TouchableOpacity>
              <Text style={tailwind`text-white text-lg`}>Book Appointment</Text>
          </View>
      </View>
      <View>
      <Text>Select an Item:</Text>
      {/* <Picker
        selectedValue={selectedItem}
        onValueChange={handleItemChange}
      >
        <Picker.Item label="Item 1" value="item1" />
        <Picker.Item label="Item 2" value="item2" />
        <Picker.Item label="Item 3" value="item3" />
        {/* Add more items as needed */}
      {/* </Picker> */}

      {/* <Text>Selected Item: {selectedItem}</Text> */}
    </View>
    </SafeAreaView>
  )
}

export default BookService