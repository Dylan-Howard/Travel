import React from 'react';
import { View, StyleSheet, Platform, Image, Text, TouchableOpacity } from 'react-native';

const AttractionTile = ({ attraction }) => {
  const { image, title, description } = attraction;
  const {
    attractionItem,
    attractionImageContainer,
    attractionImage,
    attractionTextContainer,
    attractionTitle,
    attractionDescription,
  } = styles;

  return (
    <TouchableOpacity
      style={attractionItem}
      activeOpacity={0.6}
    >
      <View style={attractionImageContainer}>
        <Image source={{ uri: image }} style={attractionImage} />
      </View>
      <View style={attractionTextContainer}>
        <Text style={attractionTitle}>{title}</Text>
        <Text style={attractionDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  attractionItem: {
    backgroundColor: '#ffffff',
    width: 200,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    margin: 20,
  },
  attractionImageContainer: {
    width: 200,
    height: 140,
    borderRadius: 20,
  },
  attractionImage: {
    width: 200,
    height: 140,
    borderRadius: 20,
  },
  attractionTextContainer: {
    padding: 10,
  },
  attractionTitle: {
    color: '#2c3e50',
    fontSize: 16,
    width: '100%',
  },
  attractionDescription: {
    color: '#2c3e50',
    fontSize: 12,
    width: '100%',
  },
});

export default AttractionTile;
