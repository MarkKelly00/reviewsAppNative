import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Inconsolata-Light': require('./assets/fonts/Inconsolata-Light.ttf'),
  'Inconsolata-Regular': require('./assets/fonts/Inconsolata-Regular.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Platform Default</Text>
          <Text style={{ fontFamily: 'Inconsolata-Light' }}>Inter Black</Text>
          <Text style={{ fontFamily: 'Inconsolata-Regular' }}>Inter Regular</Text>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}