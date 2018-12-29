import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';

// import AttractionTileSmall from '../components/AttractionTileSmall';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Travel Plans',
  };

  render() {
    let attractions = {
      a001: {photoSrc: 'precious-promises', title: 'Kasbah', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a vehicula magna, quis condimentum risus.'},
      a002: {photoSrc: 'precious-promises', title: 'Medina', description: 'Vestibulum condimentum suscipit laoreet. Cras aliquam mattis enim nec finibus.'},
      a003: {photoSrc: 'precious-promises', title: 'Magazine', description: 'Mauris sagittis quam scelerisque, suscipit ipsum quis, consequat velit. Maecenas posuere mi mauris, a luctus felis hendrerit venenatis.'},
    };
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Travel</Text>
          </View>

          <View style={styles.blockContainer}>
            <View style={styles.container}>
              <Text style={styles.blockTitle}>Tangier</Text>
            </View>
            <ScrollView horizontal={true} style={styles.blockHorizontalScroll}>

            <TouchableOpacity
              style={styles.attractionItem}
              activeOpacity={.6}
              onPress={() => this.props.navigation.navigate('Attraction')}>
              <Image
                source={require('../assets/images/precious-promises.jpg')}
                style={styles.attractionImage}
              />
              <View style={styles.attractionTextContainer}>
                <Text style={styles.attractionTitle}>{attractions.a001.title}</Text>
                <Text style={styles.attractionDescription}>{attractions.a001.description}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.attractionItem}
              activeOpacity={.6}
              onPress={() => this.props.navigation.navigate('Attraction')}>
              <Image
                source={require('../assets/images/precious-promises.jpg')}
                style={styles.attractionImage}
              />
              <View style={styles.attractionTextContainer}>
                <Text style={styles.attractionTitle}>{attractions.a002.title}</Text>
                <Text style={styles.attractionDescription}>{attractions.a002.description}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.attractionItem}
              activeOpacity={.6}
              onPress={() => this.props.navigation.navigate('Attraction')}>
              <Image
                source={require('../assets/images/precious-promises.jpg')}
                style={styles.attractionImage}
              />
              <View style={styles.attractionTextContainer}>
                <Text style={styles.attractionTitle}>{attractions.a003.title}</Text>
                <Text style={styles.attractionDescription}>{attractions.a003.description}</Text>
              </View>
            </TouchableOpacity>

            </ScrollView>
          </View>

          <View style={styles.blockContainer}>
            <View style={styles.container}>
              <Text style={styles.blockTitle}>Casablanca</Text>
            </View>
            <ScrollView horizontal={true} style={styles.blockHorizontalScroll}>

              <TouchableOpacity
                style={styles.attractionItem}
                activeOpacity={.6}
                onPress={() => this.props.navigation.navigate('Attraction')}>
                <Image
                  source={require('../assets/images/precious-promises.jpg')}
                  style={styles.attractionImage}
                />
                <View style={styles.attractionTextContainer}>
                  <Text style={styles.attractionTitle}>Kasbah</Text>
                  <Text style={styles.attractionDescription}>Lorem ipsum dolor set amet.</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.attractionItem}
                activeOpacity={.6}
                onPress={() => this.props.navigation.navigate('Attraction')}>
                <Image
                  source={require('../assets/images/precious-promises.jpg')}
                  style={styles.attractionImage}
                />
                <View style={styles.attractionTextContainer}>
                  <Text style={styles.attractionTitle}>Kasbah</Text>
                  <Text style={styles.attractionDescription}>Lorem ipsum dolor set amet.</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.attractionItem}
                activeOpacity={.6}
                onPress={() => this.props.navigation.navigate('Attraction')}>
                <Image
                  source={require('../assets/images/precious-promises.jpg')}
                  style={styles.attractionImage}
                />
                <View style={styles.attractionTextContainer}>
                  <Text style={styles.attractionTitle}>Kasbah</Text>
                  <Text style={styles.attractionDescription}>Lorem ipsum dolor set amet.</Text>
                </View>
              </TouchableOpacity>

            </ScrollView>
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  welcomeTitle: {
    color: '#2c3e50',
    fontFamily: 'montserrat-bold',
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
    fontFamily: 'montserrat-bold',
    fontSize: 28,
    textAlign: 'left',
    marginLeft: 40,
  },
  blockHorizontalScroll: {
  },
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
  attractionImage: {
    flex: 1,
    width: '100%',
    height: 140,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  attractionTextContainer: {
    padding: 10,
  },
  attractionTitle: {
    color: '#2c3e50',
    fontFamily: 'montserrat-bold',
    fontSize: 16,
    width: '100%',
  },
  attractionDescription: {
    color: '#2c3e50',
    fontFamily: 'montserrat-reg',
    fontSize: 12,
    width: '100%',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
