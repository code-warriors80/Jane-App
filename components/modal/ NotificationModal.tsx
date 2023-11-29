import React, { useRef } from 'react';
import { View, Text, Modal, TouchableOpacity,Animated,Image,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tailwind from 'twrnc';
//import { Swipeable } from 'react-native-gesture-handler';
import SwipeToDeleteList from '../SwipeToDelete';
interface Notification {
  id: number;
  title: string;
  message: string;
  day: string;
}

interface NotificationModalProps {
  visible: boolean;
  notifications: Notification[];
  onClose: () => void;
  onDelete: (id: number) => void; // Function to delete a notification
}


const NotificationModal: React.FC<NotificationModalProps> = ({
  visible,
  notifications,
  onClose,
  onDelete,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={tailwind`flex h-20`}>
        <View style={tailwind`flex-1 justify-center bg-pink-500 items-center p-4`}>
          <View style={tailwind` w-full h-full`}>
            <TouchableOpacity onPress={onClose}  style={tailwind`absolute top-4 left-2`}>
              <Icon name='arrow-left' size={30} color='#fff'/>
            </TouchableOpacity>
            <Text style={tailwind`text-2xl mx-auto text-white font-bold mb-2 mt-3`}>Notifications</Text>
          </View>
        </View>
      </View>
      <View style={tailwind`flex-1 bg-white`}>
        <SwipeToDeleteList/>
      </View>
    </Modal>
  );
};

export default NotificationModal;
