import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import dp from '../../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpeg'
import tailwind from 'twrnc'
import NotificationModal from '../modal/ NotificationModal';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeHeader = () => {

    const [notificationModalVisible, setNotificationModalVisible] = useState(false);

    const [notifications, setNotifications] = useState<Notification[]>([
        { id: 1,title:'New Appointment', message: "Booked an appointment for january 23 2024, by 2:15pm, at Jane's Hair-pire",day:'today'},
        { id: 2,title:'New Appointment', message: "Booked an appointment for April 2 2024, by 4:10pm, at Jane's Hair-pire",day:'yesterday'},
        { id: 3,title:'New Appointment', message: "Booked an appointment for March 13 2024, by 11:20am, at Jane's Hair-pire",day:'yesterday'},
        { id: 4,title:'New Appointment', message: "Booked an appointment for August 22 2024, by 12:15pm, at Jane's Hair-pire",day:'yesterday'},
        { id: 5,title:'New Appointment', message: "Booked an appointment for june 4 2024, by 10:10am, at Jane's Hair-pire",day:'yesterday'},
        { id: 6,title:'New Appointment', message: "Booked an appointment for june 4 2024, by 10:10am, at Jane's Hair-pire",day:'yesterday'},
        { id: 7,title:'New Appointment', message: "Booked an appointment for june 4 2024, by 10:10am, at Jane's Hair-pire",day:'yesterday'},
        { id: 8,title:'New Appointment', message: "Booked an appointment for june 4 2024, by 10:10am, at Jane's Hair-pire",day:'yesterday'},
      ]);

    const toggleNotificationModal = () => {
        setNotificationModalVisible(!notificationModalVisible);
    };

    const [loved, setLoved] = useState(false)
    const Love = () =>{
        if(loved === false){
            setLoved(true)
        }else
        {
            setLoved(false)
        }
    }

    const handleDelete = (id: number) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !==id);
    setNotifications(updatedNotifications);
  };
  return (
        <View style={tailwind`px-5 pb-2 bg-[#ec589c]`}>
                <View style={tailwind`flex-row items-start justify-between pt-5 pb-4`}>
                    <Image source={dp} style={tailwind`w-13 h-13 rounded-xl`}/>
                    <View style={tailwind`flex-row gap-3`}>
                            <TouchableOpacity onPress={toggleNotificationModal} style={tailwind`bg-[#F4F8FC] flex-row items-center justify-center p-3 rounded-xl`}>
                                <FIcon name='bell' size={15} color='#ec589c'/>
                            </TouchableOpacity>
                            {notificationModalVisible && (
                                <NotificationModal
                                    notificationText="notification"
                                    notifications={notifications}
                                    onClose={toggleNotificationModal}
                                    onDelete={handleDelete}
                                />
                            )}

                            <TouchableOpacity style={tailwind`bg-[#F4F8FC] flex-row items-center justify-center p-3 rounded-xl`} onPress={Love}>
                                {loved !== false ?  <Icon name='heart' size={15} color='#ec589c'/> :  <FIcon name='heart' size={15} color='#ec589c'/> }
                            </TouchableOpacity>
                    </View>
                </View>
                <Text style={tailwind`text-xl font-bold text-white`}>Hi, Young Savage</Text>
                <Text style={tailwind`text-base text-white`}>Location</Text>
        </View>
  )
}

export default HomeHeader;
