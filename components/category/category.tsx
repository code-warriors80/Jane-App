import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import icon1 from '../../assets/icons/icons8-bobby-pin-65.png'
import icon2 from '../../assets/icons/icons8-brown-pigtail-hair-lady-65.png'
import icon3 from '../../assets/icons/icons8-hair-dryer-65.png'
import icon4 from '../../assets/icons/icons8-hair-washing-64.png'
import icon5 from '../../assets/icons/icons8-nerd-hair-65.png'

const Category = () => {
  return (
    <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={tailwind`my-5` }>
        <TouchableOpacity style={tailwind`p-2 rounded-lg mx-2`}>
            <Image source={icon1} style={tailwind`w-10 h-10 mx-auto`}/>
            <Text style={tailwind`text-center`}>Hair Clips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind` p-2 rounded-lg mx-2`}>
            <Image source={icon2} style={tailwind`w-10 h-10 mx-auto`}/>
            <Text style={tailwind` text-center`}>Braidings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind` p-2 rounded-lg mx-2`}>
            <Image source={icon3} style={tailwind`w-10 h-10 mx-auto`}/>
            <Text style={tailwind`text-center`}>Hair Dryer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind`p-2 rounded-lg mx-2`}>
            <Image source={icon4} style={tailwind`w-10 h-10 mx-auto`}/>
            <Text style={tailwind` text-center`}>Washing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind`p-2 rounded-lg mx-2`}>
            <Image source={icon5} style={tailwind`w-10 h-10 mx-auto`}/>
            <Text style={tailwind`text-center`}>Coloring</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Category