import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

class AttractionTile extends Component {
  state: {
    blurValue: 1,
  }

  const { image, preImage, title, description } = this.props.attraction;
  const {
    attractionItem,
    attractionItem_lg,
    attractionImageContainer,
    attractionImageContainer_lg,
    attractionImage,
    attractionImage_lg,
    attractionTextContainer,
    attractionTextContainer_lg,
    attractionTitle,
    attractionTitle_lg,
    attractionDescription,
    attractionDescription_lg,
  } = styles;

  render() {
    if (this.props.tileSize === 'large') {
      return (
        <TouchableOpacity
          style={attractionItem_lg}
          activeOpacity={0.6}
        >
          <View style={attractionImageContainer_lg}>
            <Image
              style={attractionImage}
              source={{ uri: image }}
              loadingSourceIndicator={{ uri: preImage }}
            />
          </View>
          <View style={attractionTextContainer_lg}>
            <Text style={attractionTitle_lg}>{title}</Text>
            <Text style={attractionDescription_lg}>{description}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={attractionItem}
        activeOpacity={0.6}
      >
        <View style={attractionImageContainer}>
          <Image
            style={attractionImage}
            source={{ uri: image }}
            loadingSourceIndicator={{ uri: preImage }}
          />
        </View>
        <View style={attractionTextContainer}>
          <Text style={attractionTitle}>{title}</Text>
          <Text style={attractionDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  attractionItem: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 20,
    position: 'relative',
    width: 200,

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
  },
  attractionItem_lg: {
    width: 320,
  },
  attractionImageContainer: {
    width: 200,
    height: 140,
  },
  attractionImageContainer_lg: {
    width: 320,
    height: 240,
    borderRadius: 20,
  },
  attractionImage: {
    width: 200,
    height: 140,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomEndRadius: 0,
  },
  attractionImage_lg: {
    width: 320,
    height: 240,
    borderRadius: 20,
  },
  attractionImage_loading: {
    width: 200,
    height: 140,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomEndRadius: 0,
    resizeMode: 'cover',

  },
  attractionTextContainer: {
    padding: 10,
    paddingBottom: 0,
  },
  attractionTextContainer_lg: {
    backgroundColor: 'rgba(33,33,33,.8)',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    width: 320,

    position: 'absolute',
    bottom: 0,
    elevation: 2,
  },
  attractionTitle: {
    color: '#2c3e50',
    fontSize: 16,
    fontWeight: '600',
    width: '100%',
  },
  attractionTitle_lg: {
    color: '#fff',
    fontSize: 20,
  },
  attractionDescription: {
    color: '#2c3e50',
    fontSize: 12,
    width: '100%',
  },
  attractionDescription_lg: {
    color: '#fff',
    fontSize: 14,
  },
});

export default AttractionTile;
