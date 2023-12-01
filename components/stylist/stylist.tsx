import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import stylist1 from '../../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpeg'
import tailwind from 'twrnc';
import stylist from '../../data/stylists';

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
        size={10}
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
    <TouchableOpacity onPress={link} style={tailwind`mr-5`}>
      <View>        
        <Image source={image} style={tailwind`w-14 h-14 rounded-full mx-auto`} />
      </View>
        <View style={tailwind`mt-1`}>
          <Text style={tailwind`font-bold text-sm text-center`} >{name}</Text>
          <View style={tailwind`flex-row items-center my-1 mx-auto`}>
            {renderStars(rating)}
          </View>
          <View style={tailwind`flex-row items-center justify-center mt-1 gap-1`}>
            <FIcon name={icon} color='black' size={12} />
            <Text style={tailwind`text-xs`}>{contact}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )

const Stylist = () => {
  const Arr = new Array(3).fill(0);
  return (
    <View style={tailwind`mb-5 px-2`}>
        <Text style={tailwind`mb-3 font-extrabold text-lg`}>Hair Specialists</Text>
        <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={tailwind`flex-row` }>
        {stylist.map((stylist, index) => (
          <StylistList image={stylist.image} key={index} name={stylist.name} icon='phone' contact={stylist.contact} rating={stylist.rating} link={() => {}}/>
        ))}
        </ScrollView>
    </View>
  )
}

export default Stylist