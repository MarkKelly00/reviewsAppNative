import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Home from './screens/home';

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
        <Home />
      );
    } else {
      return <AppLoading />;
    }
  }
}