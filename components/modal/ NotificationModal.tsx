import React from 'react';
import { View, Text, Modal, TouchableOpacity,StyleSheet ,Image} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import tailwind from 'twrnc';
import { Swipeable} from 'react-native-gesture-handler';

interface Notification {
  id: number;
  message: string;
}

interface NotificationModalProps {
  visible: boolean;
  notifications: Notification[];
  onClose: () => void;
  onDelete: (id: number) => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  visible,
  notifications,
  onClose,
  onDelete,
}) => {
  const renderNotificationItem = (notification: Notification) => {
    
    const swipeRight = () => {
      onDelete(notification.id); // Call onDelete function with notification id
    };

    const renderRightActions = () => {
      return (
        <TouchableOpacity style={tailwind`bg-red-500 justify-center items-center`}>
          <Text style={tailwind`text-pink`}>Delete</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable renderRightActions={renderRightActions} onSwipeableRightOpen={swipeRight}>
        <TouchableOpacity
          key={notification.id}
          style={tailwind`flex flex-row justify-between items-center p-4 bg-gray-200 mt-2`}
        >
          <Text>{notification.message}</Text>
        </TouchableOpacity>
      </Swipeable>
    );
  };
  const renderRightActions = () => {
    return (
      <TouchableOpacity style={tailwind`bg-red-500 justify-center items-center flex-1`}>
        <Text style={tailwind`text-white`}>Delete</Text>
      </TouchableOpacity>
    );
  };
    
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={tailwind`flex-1 justify-center  items-center bg-white bg-opacity-96 p-4`}>
        <View style={tailwind`p-4 w-full h-full`}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <FIcon name='chevron-left' size={30} color='#ec589c'/>
          </TouchableOpacity>
          <Text style={tailwind`text-2xl mx-auto font-bold mb-4 mt-10`}>Notifications</Text>
          <View>
            {Array.isArray(notifications) && notifications.length > 0 ? (
              notifications.map((notification) => renderNotificationItem(notification))
            ) : (
              <View style={tailwind`text-xl mx-auto mt-80`}>
                 <Image
                     source={require('../../assets/icons/slashbell.png')}
                     style={tailwind`w-15 h-15 mx-auto `}
                 />
                 <View style={tailwind`flex-row`}>
                   <Text style={tailwind`ml-2 text-lg`}>No notifications yet</Text>
                 </View>
             </View> 
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 15,
        marginTop: 20,
    },
})

export default NotificationModal;
