import { View, Text, TouchableOpacity, Platform, Button, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import FIcon from "react-native-vector-icons/Feather";
import stylist1 from '../../assets/hairstyles/lemonade.jpg'
import Icon from 'react-native-vector-icons/AntDesign';

const renderStars = (rating) => {

  const stars = [];

  for (let i = 0; i < 5; i++) {
    const isFilled = i < rating;

    stars.push(
      <Text key={i}>
        <Icon
          name={isFilled ? 'star' : 'staro'}
          color='#ec589c'
          size={10}
        />
      </Text>
    );
  }

  return stars;
};

const BookService = ({setOpenModal}) => {
  const [selectedItem, setSelectedItem] = useState('item1');

  const handleItemChange = (itemValue) => {
    setSelectedItem(itemValue);
  };
  return (
    <SafeAreaView style={tailwind`flex-1 bg-[#F2F2F2]`}>
      <View style={tailwind`bg-[#ec589c] py-5 px-4`}>
          <View style={tailwind`flex-row items-center gap-5`}>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                  <FIcon name='x' size={20} color='white' />
              </TouchableOpacity>
              <Text style={tailwind`text-white text-lg`}>Book Appointment</Text>
          </View>
      </View>

      <View style={tailwind`flex-row items-start justify-between bg-white p-4 shadow`}>
          <View style={tailwind`flex-row items-center gap-5`}>
              <Image source={stylist1} style={tailwind`w-15 h-15 rounded-xl`}/>
              <View>
                <Text style={tailwind`text-lg font-bold`}>Lemonade braids</Text>
                <Text style={tailwind`text-xs text-gray-500`}>Lemonade braids</Text>
                    <View style={tailwind`flex-row mt-1`}>
                      {renderStars(3)}
                    </View>
              </View>
          </View>

        <View style={tailwind`h-full`}>
                <TouchableOpacity>
                            <FIcon name='heart' size={20} color='#ec589c' />
                </TouchableOpacity>
                <Text style={tailwind`text-base font-bold mt-3`}>N 1000</Text>
        </View>
      </View>

      <ScrollView style={tailwind`flex-1`}>
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
    </ScrollView>
    <View style={tailwind`p-5`}>
      <TouchableOpacity style={tailwind`bg-[#ec589c] p-4 rounded-full`}>
        <Text style={tailwind`text-white text-center`}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default BookService