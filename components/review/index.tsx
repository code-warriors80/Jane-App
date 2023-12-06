// ReviewScreen.js

import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tailwind from 'twrnc';
import stylist4 from '../../assets/hairstyles/triangle2.jpg'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

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

interface ReviewListProps {
  image: any
  name: string
  rating: any
  message: string
  link: any
}

const ReviewList: React.FC<ReviewListProps> = ({image, name, rating, message, link}) => (
    <TouchableOpacity onPress={link} style={tailwind`bg-white p-5 rounded-xl mb-2 shadow`}>
    <View style={tailwind`bg-white flex-row items-center gap-3`}>
      <Image source={image} style={tailwind`w-15 h-15 rounded-full`}/>
      <View>
        <Text style={tailwind`text-lg mb-2`}>{name}</Text>
        <View style={tailwind`flex-row`}>
          {renderStars(rating)}
        </View>
      </View>
    </View>
    <Text style={tailwind`mt-4 text-zinc-500 `}>{message}</Text>
  </TouchableOpacity>
)

const ReviewScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tailwind`p-5`}>
      <View>
        <ReviewList image={stylist4} name='Young Savage' rating={4} message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias nemo aperiam tempora est consequuntur magni ullam iusto ea consectetur commodi!' link={() => {}}/>
        <ReviewList image={stylist4} name='Young Savage' rating={2} message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias nemo aperiam tempora est consequuntur magni ullam iusto ea consectetur commodi!' link={() => {}}/>
        <ReviewList image={stylist4} name='Young Savage' rating={5} message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias nemo aperiam tempora est consequuntur magni ullam iusto ea consectetur commodi!' link={() => {}}/>
      </View>
      {/* Add your review content here */}
    </View>
  );
};

export default ReviewScreen;
