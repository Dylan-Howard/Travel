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
import AttractionTileLarge from '../components/AttractionTileLarge';

class AttractionsScreen extends Component {
  state = {
    attractions: [],
    media: [],
  }

  componentWillMount() {
    axios.get('https://raw.githubusercontent.com/Dylan-Howard/Travel/master/assets/data/AttractionList.json')
    .then(response => this.setState({ attractions: response.data }));
  }

  renderAttractions() {
    return this.state.attractions.map(attraction =>
      <AttractionTile key={attraction.title} attraction={attraction} tileSize="small" />
    );
  }

  renderAttractionsLarge() {
    return this.state.attractions.map(attraction =>
      <AttractionTileLarge key={attraction.title} attraction={attraction} tileSize="large" />
    );
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
            {this.renderAttractions()}
          </ScrollView>
        </View>

        <View style={styles.blockContainer}>
          <View style={styles.container}>
            <Text style={styles.blockTitle}>Tangier</Text>
          </View>
          <ScrollView horizontal style={styles.blockHorizontalScroll}>
            {this.renderAttractionsLarge()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
