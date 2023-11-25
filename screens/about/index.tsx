import React, {useState} from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import tailwind from 'twrnc';
import image from '../../assets/beautiful-woman-has-cutting-hair-hairdresser.jpg';
import FIcon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import InfoScreen from '../../components/info';
import ReviewScreen from '../../components/review';

type Tab = 'info' | 'review';

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

const AboutScreen: React.FC = () => {
    const navigation = useNavigation()
    const [selectedTab, setSelectedTab] = useState<Tab>('info');

    const renderContent = () => {
      switch (selectedTab) {
        case 'info':
          return <InfoScreen />;
        case 'review':
          return <ReviewScreen />;
        default:
          return null;
      }
    };
  return (
    <SafeAreaView style={tailwind`flex-1`}>
      <ImageBackground source={image} style={tailwind`w-full h-50`}>
        <View style={tailwind`p-5`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FIcon name='arrow-left' size={20} color='white' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                    <View style={tailwind`p-5 flex-row items-start justify-between bg-gray-200`}>
                        <View>
                            <Text style={tailwind`text-2xl font-bold mb-2`}>Jane's Hairpire</Text>
                            <View style={tailwind`flex-row items-center mb-2`}>
                                {renderStars(4)}
                                <Text style={tailwind`ml-2`}>4.0</Text>
                            </View>
                            <View style={tailwind`flex-row items-center gap-2`}>
                                <FIcon name='map-pin' size={15} color='#ec589c'/>
                                <Text>kongo zaria kaduna state</Text>
                            </View>
                        </View>
                        <View style={tailwind`flex-row items-center gap-2`}>
                                    <TouchableOpacity style={tailwind`p-3  shadow rounded-full`}>
                                        <FIcon name='phone' size={20} color='gray'/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={tailwind`p-3  shadow rounded-full`}>
                                        <FIcon name='message-circle' size={20} color='gray'/>
                                    </TouchableOpacity>
                        </View>
                    </View>
            </View>
            <View>
                    <View style={tailwind`flex-1 flex-row items-center justify-between px-10 py-2`}>
                        <Button
                        mode={selectedTab === 'info' ? '' : ''}
                        onPress={() => setSelectedTab('info')}
                        labelStyle={{ color: selectedTab === 'review' ? 'black' : '#ec589c' }}
                        >
                        Info
                        </Button>
                        <Button
                        mode={selectedTab === 'review' ? '' : ''}
                        onPress={() => setSelectedTab('review')}
                        labelStyle={{ color: selectedTab === 'review' ? '#ec589c' : 'black' }}
                        >
                        Review
                        </Button>
                    </View>
            {       renderContent()}
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;
