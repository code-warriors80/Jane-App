import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import tailwind from 'twrnc';
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import { Calendar, DateObject, CalendarProps } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import stylist1 from '../../assets/hairstyles/lemonade.jpg'

interface TimeListProps {
  timein: string;
  timeout: string;
  hour: string;
  link: () => void;
  isSelected: boolean;
}

interface CommentListProps {
  image: any;
  name: string;
  message: string;
}

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

const TimeList: React.FC<TimeListProps> = ({ timein, timeout, hour, link, isSelected }) => (
  <View style={tailwind`my-2`}>
    <TouchableOpacity
      style={[
        tailwind`bg-white shadow rounded-xl p-2 py-3`,
        isSelected && tailwind`bg-[#ec589c]`, // Apply red background if isSelected is true
      ]}
      onPress={link}
    >
      <Text style={isSelected ? tailwind`text-white` : null}>{timein} {timeout} {hour}</Text>
    </TouchableOpacity>
  </View>
);

const CommentList: React.FC<CommentListProps> = ({ image, name, message }) => (
  <View style={tailwind`flex-row gap-2 bg-white p-5 rounded-xl my-2 shadow`}>
    <Image source={image} style={tailwind`w-10 h-10 rounded-full`} />
    <View>
      <Text>{name}</Text>
      <Text style={tailwind`text-xs mt-2 text-gray-600`}>{message}</Text>
    </View>
  </View>
);

const SingleServicesScreen: React.FC = () => {
  const route = useRoute();
  const { service } = route.params || {};
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const navigation = useNavigation();

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const initialDate = `${year}-${month}-${day}`;

  const [markedDates, setMarkedDates] = useState<{ [date: string]: DateObject }>({
    [initialDate]: {
      selected: true,
      disableTouchEvent: true,
      selectedDotColor: '#ec589c',
    },
  });

  const handleDayPress = (day: DateObject) => {
    setMarkedDates({
      [day.dateString]: {
        selected: true,
        disableTouchEvent: true,
        selectedDotColor: '#ec589c',
      },
    });
    setSelectedDate(day.dateString);
  };

  const calendarProps: CalendarProps = {
    onDayPress: handleDayPress,
    monthFormat: 'MM',
    markedDates,
    markingType: 'custom',
    renderHeader: (date: DateObject) => {
      const monthName = date.toString('MMMM');
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{monthName}</Text>
        </View>
      );
    },
    theme: {
      selectedDayBackgroundColor: '#ec589c',
      todayTextColor: '#ec589c',
      textDayFontSize: 10,
    },
    style: {
      borderRadius: 10,
    },
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    console.log('Selected Time:', time);
  };

  return (
    <SafeAreaView style={tailwind`flex-1 bg-[#F2F2F2] z-20`}>
      <View style={tailwind`bg-[#ec589c] py-5 px-4`}>
        <View style={tailwind`flex-row items-center gap-5`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FIcon name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <Text style={tailwind`text-white text-lg`}>Book Appointment</Text>
        </View>
      </View>

      <View style={tailwind`flex-row items-start justify-between bg-white p-4 shadow z-50`}>
        <View style={tailwind`flex-row items-center gap-5`}>
          <Image source={service.image} style={tailwind`w-15 h-15 rounded-xl`} />
          <View>
            <Text style={tailwind`text-lg font-bold`}>{service.name}</Text>
            <Text style={tailwind`text-xs text-gray-500`}>{service.description}</Text>
            <View style={tailwind`flex-row mt-1`}>
              {renderStars(service.rating)}
            </View>
          </View>
        </View>

        <View style={tailwind`h-full`}>
          <TouchableOpacity>
            <Icon name="heart" size={20} color="#ec589c" />
          </TouchableOpacity>
          <Text style={tailwind`text-base font-bold mt-3`}>N {service.price}</Text>
        </View>
      </View>

      <ScrollView style={tailwind`flex-1 px-2 `}>
        <View style={tailwind`w-full pb-5 mt-3 px-3 rounded-lg z-20`}>
          <Calendar {...calendarProps} />
          {selectedDate ? (
          <Text style={tailwind`mt-4`}>{`Selected Date: ${selectedDate}`}</Text>
        ) : null}
        </View>
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

        <View style={tailwind`px-3`}>
          <Text>Available Time</Text>
          <View style={tailwind`flex-row flex-wrap gap-x-5 gap-y-0`}>
            {/* Add other time slots as needed */}
          </View>
        </View>

        <View style={tailwind`px-3 mt-3`}>
          <Text style={tailwind`my-2`}>Comments <Text style={tailwind`text-xs`}>(15 comments)</Text></Text>
          <CommentList image={stylist1} name="Young savage" message="She Was So Professional" />
          {/* Add other comments as needed */}
        </View>
      </ScrollView>

      <View style={tailwind`p-4 px-5`}>
        <TouchableOpacity style={tailwind`bg-[#ec589c] p-4 rounded-lg`} onPress={() => console.log('Booking')}>
          <Text style={tailwind`text-white text-center`}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingleServicesScreen;
