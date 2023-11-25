// InfoScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import Stylist from '../stylist/stylist';
import tailwind from 'twrnc';

const InfoScreen = () => {
  return (
    <View style={tailwind`px-3`}>
      <View style={tailwind`p-2`}>
        <Text style={tailwind`text-lg font-bold`}>About</Text>
        <Text style={tailwind`text-gray-500`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, pariatur voluptate quidem at dolores facere unde officia nostrum, tempora quam voluptas quaerat omnis esse illo incidunt molestiae eum provident doloremque.</Text>
      </View>
      {/* Add your information content here */}
      <Stylist />
    </View>
  );
};

export default InfoScreen;
