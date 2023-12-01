import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import tailwind from 'twrnc';

interface ImageData {
  source: { uri: string };
}

interface Category {
  category: string;
  images: ImageData[];
}

const ImageGallery: React.FC = () => {
  const data: Category[] = [
    {
      category: 'Category 1',
      images: [
        { source: { uri: 'https://plus.unsplash.com/premium_photo-1664049685781-9f373ed1183a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFpcmRyZXNzaW5nJTIwc2Fsb258ZW58MHx8MHx8fDA%3D' } },
        { source: { uri: 'https://plus.unsplash.com/premium_photo-1664537435460-35963d8e413e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhaXJkcmVzc2luZyUyMHNhbG9ufGVufDB8fDB8fHww' } },
        { source: { uri: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhaXJkcmVzc2luZyUyMHNhbG9ufGVufDB8fDB8fHww' } },
        // Add more images as needed for Category 1
      ],
    }
    // Add more categories as needed
  ];

  const renderImage = ({ item }: { item: ImageData }) => (
    <View style={tailwind`mb-0 mr-2`}>
      <Image
        style={tailwind`w-40 h-40`} // Adjust image size as needed
        source={item.source}
      />
    </View>
  );

  const renderItem = ({ item }: { item: Category }) => (
    <View style={tailwind`mb-0`}>
      <FlatList
        data={item.images}
        renderItem={renderImage}
        keyExtractor={(image) => image.source.uri}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={tailwind`py-4`}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(category) => category.category}
      />
    </View>
  );
};

export default ImageGallery;
