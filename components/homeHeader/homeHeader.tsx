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
        { id: 1, message: 'Notification 1' },
        { id: 2, message: 'Notification 2' },
        { id: 3, message: 'Notification 3' },
        { id: 4, message: 'Notification 4' },
        { id: 5, message: 'Notification 5' },
        { id: 6, message: 'Notification 6' },
        { id: 7, message: 'Notification 7' },
        { id: 8, message: 'Notification 8' },
        { id: 9, message: 'Notification 9' },
        // Add more notifications here
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
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };
  return (
        <View style={tailwind`px-6 mb-3`}>
                <View style={tailwind`flex-row items-start justify-between pt-8 pb-4`}>
                    <Image source={dp} style={tailwind`w-13 h-13 rounded-xl`}/>
                    <View style={tailwind`flex-row gap-3`}>
                            <TouchableOpacity onPress={toggleNotificationModal} style={tailwind`bg-[#ec589c] flex-row items-center justify-center p-3 rounded-xl`}>
                                <FIcon name='bell' size={15} color='white'/>
                            </TouchableOpacity>

                            {notificationModalVisible && (
                                <NotificationModal
                                    notifications={notifications}
                                    notificationText="notification"
                                    onClose={toggleNotificationModal}
                                    onDelete={handleDelete}
                                />
                            )}

                            <TouchableOpacity style={tailwind`bg-[#ec589c] flex-row items-center justify-center p-3 rounded-xl`} onPress={Love}>
                                {loved !== false ?  <Icon name='heart' size={15} color='white'/> :  <FIcon name='heart' size={15} color='white'/> }
                            </TouchableOpacity>
                    </View>
                </View>
                <Text style={tailwind`text-xl font-bold`}>Hi, Young Savage</Text>
                <Text style={tailwind`text-base text-gray-500`}>Location</Text>
        </View>
  )
}

export default HomeHeader;