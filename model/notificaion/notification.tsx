import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, {useState} from 'react'
import FIcon from 'react-native-vector-icons/Feather';
import tailwind from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = ({toggleNotification}) => {
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
  return (
    <SafeAreaView style={tailwind`flex-1 h-full`}>
            <View style={tailwind`flex-row items-center gap-4 py-5 px-4 bg-[#ec589c]`}>
                <TouchableOpacity onPress={() => toggleNotification(false)}>
                    <FIcon name='x' color='white'  size={20}/>
                </TouchableOpacity>
                <Text style={tailwind`text-white`}>Notification</Text>
            </View>
                <FlatList
                    data={notifications}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={tailwind`border-[1px] border-gray-200`}>
                            <View style={tailwind`px-5 py-2`}>
                                <Text style={tailwind`text-[#ec589c] text-sm  mt-2`}>{item.title}</Text>
                                <Text>{item.message}</Text>
                                <Text style={tailwind`text-zinc-500 text-xs`}>{item.day}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={() => (
                        <View style={tailwind`flex-1 h-130 items-center justify-center`}>
                            <View style={tailwind`bg-[#ec589c] p-3 rounded-full`}>
                                <FIcon name='bell' size={20} color='white' />
                            </View>
                            <Text style={tailwind`ml-2 text-sm text-[#ec589c]`}>No notifications yet</Text>
                        </View>
                    )}
                />
    </SafeAreaView>
  )
}

export default Notification