import React, { useState } from 'react'
import { View, Text,TouchableOpacity,Image,FlatList} from 'react-native';
import tailwind from 'twrnc';
import { Swipeable } from 'react-native-gesture-handler';

const SwipeableListItem = ({ item, onDelete }) => {
  const rightButtons = [
    <TouchableOpacity
      onPress={() => onDelete(item.id)}
      style={{ backgroundColor: 'pink', justifyContent: 'center', padding: 20 }}
    >
      <Text>Delete</Text>
    </TouchableOpacity>,
  ];

  return (
    <TouchableOpacity>
      <Swipeable rightButtons={rightButtons}>
        <View
          style={{          
            height: 100,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            justifyContent: 'center',
            paddingLeft: 10,
          }}
        >
          <Text style={tailwind`text-pink-600 text-lg`}>{item.title}</Text>
          <Text>{item.message}</Text>
          <Text style={tailwind`text-gray-400`}>{item.day}</Text>
        </View>
      </Swipeable>
    </TouchableOpacity>
  );
};

const SwipeToDeleteList = () => {
   const [notifications, setNotifications] = useState<Notification[]>([
        { id: 1,title:'New Appointment', message: "Booked an appointment for january 23 2024, by 2:15pm, at Jane's Hair-pire",day:'today'},
        { id: 2,title:'New Appointment', message: "Booked an appointment for April 2 2024, by 4:10pm, at Jane's Hair-pire",day:'today'},
        { id: 3,title:'New Appointment', message: "Booked an appointment for March 13 2024, by 11:20am, at Jane's Hair-pire",day:'today'},
        { id: 4,title:'New Appointment', message: "Booked an appointment for August 22 2024, by 12:15pm, at Jane's Hair-pire",day:'today'},
        { id: 5,title:'New Appointment', message: "Booked an appointment for July 4 2024, by 10:10am, at Jane's Hair-pire",day:'yesterday'},
        { id: 6,title:'New Appointment', message: "Booked an appointment for November 16 2024, by 10:10am, at Jane's Hair-pire",day:'yesterday'},
        { id: 7,title:'New Appointment', message: "Booked an appointment for May 4 2024, by 10:10am, at Jane's Hair-pire",day:'yesterday'},
        { id: 8,title:'New Appointment', message: "Booked an appointment for September 4 2024, by 10:10am, at Jane's Hair-pire",day:'last week'},
        { id: 9,title:'New Appointment', message: "Booked an appointment for December 16 2024, by 11:10am, at Jane's Hair-pire",day:'2 weeks ago'},
      ]);

  const handleDelete = itemId => {
    // Implement logic to delete the item from your data array or API
    console.log(`Deleting item with id: ${itemId}`);
  };

  return (
    <FlatList
      data={notifications}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <SwipeableListItem item={item} onDelete={handleDelete} />}
      ListEmptyComponent={
        <View style={tailwind`text-xl mx-auto mt-75`}>
          <Image
              source={require('../assets/icons/slashbell.png')}
              style={tailwind`w-15 h-15 mx-auto `}
          />
          <View style={tailwind`flex-row`}>
            <Text style={tailwind`ml-2 text-lg`}>No notifications yet</Text>
          </View>
        </View>
        }
    />
  );
};

export default SwipeToDeleteList;
