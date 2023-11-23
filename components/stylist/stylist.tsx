import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import stylist1 from '../../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpeg'
import tailwind from 'twrnc';

const renderStars = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    // Determine whether the star should be filled or outlined based on the rating
    const isFilled = i < rating;

    // Push the appropriate star icon to the stars array
    stars.push(
      <Icon
        key={i}
        name={isFilled ? 'star' : 'staro'}
        color='#ec589c'
        size={12}
      />
    );
  }

  return stars;
};

interface StylistListProps {
    image: any,
    name: string,
    icon: string;
    contact: any;
    rating: any,
    link: any
  }

  const StylistList: React.FC<StylistListProps> = ({image, name, icon, contact, rating, link}) => (
    <TouchableOpacity onPress={link} style={tailwind`mx-2`}>
        <Image source={image} style={tailwind`w-20 h-20 rounded-xl`} />
        <View style={tailwind`mt-1`}>
          <Text style={tailwind`font-bold text-lg`}>{name}</Text>
          <View style={tailwind`flex-row items-center my-1`}>
            {renderStars(rating)}
          </View>
          <View style={tailwind`flex-row items-center mt-1`}>
            <FIcon name={icon} color='black' size={12} />
            <Text style={tailwind`ml-2 text-xs`}>{contact}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )

const Stylist = () => {
  const Arr = new Array(3).fill(0);
  return (
    <View style={tailwind`mb-5`}>
        <Text style={tailwind`mb-3 font-extrabold text-lg`}>Hair Specialists</Text>
        <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={tailwind`flex-row` }>
        {Arr.map((_, index) => (
          <StylistList image={stylist1} key={index} name='Young Savage' icon='phone' contact={8116934763} rating={2} link={() => {}}/>
        ))}
        </ScrollView>
    </View>
  )
}

export default Stylist