/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import AttractionTile from '../components/AttractionTile';

class AttractionsScreen extends Component {
  state = {
    attractions: [],
    media: [],
  }

  componentWillMount() {
    // axios.get('https://github.com/Dylan-Howard/Travel/blob/master/assets/data/AttractionList.json')
    //   .then(response => this.setState({ attractions: response.data }));
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ media: response.data }));
  }

  renderAttractions() {
    return this.state.media.map(media =>
      <Text>
        {media.title}
      </Text>
    );
  }

  // return this.state.attractions.map(attraction =>
  //   <AttractionTile attraction={attraction} />
  // );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Travel</Text>
        </View>

        <View style={styles.blockContainer}>
          <View style={styles.container}>
            <Text style={styles.blockTitle}>Tangier</Text>
          </View>
          <ScrollView horizontal style={styles.blockHorizontalScroll}>
            {this.renderAttractions()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

// <TouchableOpacity
//   style={styles.attractionItem}
//   activeOpacity={.6}
//   onPress={() => this.props.navigation.navigate('Attraction')}>
//   <Image
//     source={require('../../assets/images/precious-promises.jpg')}
//     style={styles.attractionImage}
//   />
//   <View style={styles.attractionTextContainer}>
//     <Text style={styles.attractionTitle}>{attractions.a001.title}</Text>
//     <Text style={styles.attractionDescription}>{attractions.a001.description}</Text>
//   </View>
// </TouchableOpacity>
//
// <TouchableOpacity
//   style={styles.attractionItem}
//   activeOpacity={.6}
//   onPress={() => this.props.navigation.navigate('Attraction')}>
//   <Image
//     source={require('../../assets/images/precious-promises.jpg')}
//     style={styles.attractionImage}
//   />
//   <View style={styles.attractionTextContainer}>
//     <Text style={styles.attractionTitle}>{attractions.a002.title}</Text>
//     <Text style={styles.attractionDescription}>{attractions.a002.description}</Text>
//   </View>
// </TouchableOpacity>
//
// <TouchableOpacity
//   style={styles.attractionItem}
//   activeOpacity={.6}
//   onPress={() => this.props.navigation.navigate('Attraction')}>
//   <Image
//     source={require('../../assets/images/precious-promises.jpg')}
//     style={styles.attractionImage}
//   />
//   <View style={styles.attractionTextContainer}>
//     <Text style={styles.attractionTitle}>{attractions.a003.title}</Text>
//     <Text style={styles.attractionDescription}>{attractions.a003.description}</Text>
//   </View>
// </TouchableOpacity>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcff',
  },
  welcomeContainer: {
    marginTop: 60,
    marginBottom: 20,
  },
  welcomeTitle: {
    color: '#2c3e50',
    fontSize: 58,
    textAlign: 'left',
    marginLeft: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  blockContainer: {
    flex: 2,
  },
  blockTitle: {
    color: '#2c3e50',
    fontSize: 28,
    textAlign: 'left',
    marginLeft: 40,
  },
  blockHorizontalScroll: {
  },
});

export default AttractionsScreen;
