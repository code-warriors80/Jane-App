import { View, Text, TouchableOpacity, Platform, Button, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import FIcon from "react-native-vector-icons/Feather";
import stylist1 from '../../assets/hairstyles/lemonade.jpg'
import Icon from 'react-native-vector-icons/AntDesign';

interface TimeListProp {
    timein: string
    timeout: string
    hour: string
    link: any
    isSelected: boolean; // Add isSelected to the interface
}

interface CummentListProp {
  image: any
  name: string
  message: string
}

const TimeList: React.FC<TimeListProp> = ({timein, timeout, hour, link, isSelected}) => (
  <View style={tailwind`my-2`}>
    <TouchableOpacity
      style={[
        tailwind`bg-white shadow rounded-xl p-2`,
        isSelected && tailwind`bg-[#ec589c]`, // Apply red background if isSelected is true
      ]}
      onPress={link}
    >
        <Text style={isSelected ? tailwind`text-white` : null}>{timein} {timeout} {hour}</Text>
    </TouchableOpacity>
  </View>
)

const CommentsList: React.FC<CummentListProp> =  ({image, name, message}) => (
  <View style={tailwind`flex-row gap-2 bg-white p-5 rounded-xl my-2 shadow`}>
    <Image source={image} style={tailwind`w-10 h-10 rounded-full`}/>
    <View>
        <Text>{name}</Text>
        <Text style={tailwind`text-xs mt-2 text-gray-600`}>{message}</Text>
    </View>
</View>
)

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

const BookService = ({setOpenModal, selectedService}) => {
  const [selectedItem, setSelectedItem] = useState('item1');
  const [selectedTime, setSelectedTime] = useState(null); // Store the selected time

  console.log("Selected Service in BookService:", selectedService);


  const handleItemChange = (itemValue) => {
    setSelectedItem(itemValue);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    console.log("Selected Time:", time); // Log the selected time to the console
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
              <Image source={selectedService.image} style={tailwind`w-15 h-15 rounded-xl`}/>
              <View>
                <Text style={tailwind`text-lg font-bold`}>{selectedService.name}</Text>
                <Text style={tailwind`text-xs text-gray-500`}>{selectedService.description}</Text>
                    <View style={tailwind`flex-row mt-1`}>
                      {renderStars(selectedService.rating)}
                    </View>
              </View>
          </View>

        <View style={tailwind`h-full`}>
                <TouchableOpacity>
                            <FIcon name='heart' size={20} color='#ec589c' />
                </TouchableOpacity>
                <Text style={tailwind`text-base font-bold mt-3`}>N {selectedService.price}</Text>
        </View>
      </View>

      <ScrollView style={tailwind`flex-1 px-2 py-3`}>

        <View style={tailwind`px-3`}>
            <Text>Available Time</Text>
            <View style={tailwind`flex-row flex-wrap gap-x-5 gap-y-0`}>
                  <TimeList
                  timein='8:00'
                  timeout='9:00'
                  hour='Am'
                  link={() => handleTimeSelect('8:00 AM')}
                  isSelected={selectedTime === '8:00 AM'} // Adjust the condition based on your needs
                />
                <TimeList
                  timein='9:00'
                  timeout='10:00'
                  hour='Am'
                  link={() => handleTimeSelect('9:00 AM')}
                  isSelected={selectedTime === '9:00 AM'} // Adjust the condition based on your needs
                />
                <TimeList
                  timein='11:00'
                  timeout='12:00'
                  hour='Am'
                  link={() => handleTimeSelect('11:00 AM')}
                  isSelected={selectedTime === '11:00 AM'} // Adjust the condition based on your needs
                />
               <TimeList
                  timein='12:00'
                  timeout='13:00'
                  hour='Pm'
                  link={() => handleTimeSelect('12:00 PM')}
                  isSelected={selectedTime === '12:00 PM'} // Adjust the condition based on your needs
                />
              <TimeList
                  timein='14:00'
                  timeout='16:00'
                  hour='Pm'
                  link={() => handleTimeSelect('14:00 PM')}
                  isSelected={selectedTime === '14:00 PM'} // Adjust the condition based on your needs
                />
            </View>
        </View>
        <View style={tailwind`px-3 mt-3`}>
            <Text style={tailwind`my-2`}>Comments <Text style={tailwind`text-xs`}>(15 comments)</Text></Text>
            <CommentsList image={stylist1} name='Young savage' message='She Was So Professional'/>
        </View>

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