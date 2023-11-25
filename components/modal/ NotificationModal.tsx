import React, { useRef } from 'react';
import { View, Text, Modal, TouchableOpacity,StyleSheet ,Animated,Image,} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import tailwind from 'twrnc';
import { Swipeable} from 'react-native-gesture-handler';

interface Notification {
  id: number;
  title: string;
  message: string;
  date: Date;
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
  const swipeAnimatedValue = useRef(new Animated.Value(0)).current;

  const renderNotificationItem = (notification: Notification) => {
    const swipeRight = () => {
      Animated.timing(swipeAnimatedValue, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start(() => {
        onDelete(notification.id); // Call onDelete function with notification id
        swipeAnimatedValue.setValue(0);
      });
    };

    const renderRightActions = (progress: Animated.AnimatedInterpolation) => {
      const translateX = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100],
      });

      return (
        <Animated.View
          style={[
            tailwind`bg-red-500 justify-center items-center flex-1`,
            { transform: [{ translateX }] },
          ]}
        >
          <Text style={tailwind`text-white`}>Delete</Text>
        </Animated.View>
      );
    };
    
    return (
      <Swipeable renderRightActions={renderRightActions}>
          <Animated.View style={[
            tailwind`flex flex-row justify-between items-center p-4 bg-pink-400 mt-2 opacity-90`,
            {
              transform: [
                {
                  translateX: swipeAnimatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1000], // Move the item off-screen when swiped
                }),
              },
            ],
          },
        ]}
        key={notification.id}
      >
        <Text style={tailwind`text-white`}>{notification.title}</Text>
        <Text style={tailwind`mt-3 text-gray-100`}>{notification.message}</Text>
            
      </Animated.View>
    </Swipeable>
    );
  };
  
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={tailwind`flex-1 justify-center  items-center bg-white bg-opacity-96 p-4`}>
        <View style={tailwind`p-4 w-full h-full`}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <FIcon name='chevron-left' size={30} color='#ec589c'/>
          </TouchableOpacity>
          <Text style={tailwind`text-2xl mx-auto font-bold mb-15 mt-4`}>Notifications</Text>
          <View style={tailwind`flex-1`}>
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
