import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
      <Text style={styles.bodyText}>Home Screen</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
      fontFamily: 'Inconsolata-Light',
      fontSize: 18,
  },
  bodyText: {
      fontFamily: 'Inconsolata-SemiBold'
  }
});