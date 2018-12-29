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
      </View>
    </TouchableOpacity>
  );
};

// <Text style={attractionDescription}>{description}</Text>

const styles = StyleSheet.create({
  attractionItem: {
    backgroundColor: '#ffffff',
    width: 320,
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
    position: 'relative',
    margin: 20,
  },
  attractionImageContainer: {
    width: 320,
    height: 240,
    borderRadius: 20,
  },
  attractionImage: {
    width: 320,
    height: 240,
    borderRadius: 20,
  },
  attractionTextContainer: {
    backgroundColor: 'rgba(33,33,33,.8)',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: 320,
    elevation: 2,
  },
  attractionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    width: '100%',
  },
  attractionDescription: {
    color: '#fff',
    fontSize: 14,
    width: '100%',
  },
});

export default AttractionTile;
