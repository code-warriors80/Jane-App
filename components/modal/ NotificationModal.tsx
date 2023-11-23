import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions ,StyleSheet,Image} from 'react-native';
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather';

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ visible, onClose }) => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={[tailwind`flex-1 justify-center items-center`, { height: screenHeight }]}>
        <View style={tailwind`bg-white p-4 rounded-lg h-full w-full`}>
          <Text style={tailwind`text-xl mx-auto mt-3`}>Notifications</Text>

            <View style={tailwind`text-xl mx-auto mt-80`}>
                    <Image
                        source={require('../../assets/icons/slashbell.png')}
                        style={tailwind`w-15 h-15 mx-auto `}
                    />
                    <View style={tailwind`flex-row`}>
                    <Text style={tailwind`ml-2 text-lg`}>No notifications yet</Text>
                </View>
            </View>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <FIcon name='chevron-left' size={30} color='#ec589c'/>
          </TouchableOpacity>
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
