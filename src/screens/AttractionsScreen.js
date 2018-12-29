/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
// import { Actions } from 'react-native-router-flux';
import AttractionTile from '../components/AttractionTile';

class AttractionsScreen extends Component {
  state = { attractions: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ media: response.data }))
      .then(() => this.props.mediaSet(this.state.media[0]));
  }

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
            <AttractionTile attraction={this.a001} />
            <AttractionTile attraction={this.a002} />
            <AttractionTile attraction={this.a003} />
            <AttractionTile attraction={this.a004} />
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
